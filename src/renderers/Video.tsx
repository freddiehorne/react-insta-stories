import * as React from "react";
import Spinner from "../components/Spinner";
import { Renderer, Tester } from "./../interfaces";
import { Sound, Mute, Play, Pause } from "./wrappers/icons";
import WithHeader from "./wrappers/withHeader";
import WithSeeMore from "./wrappers/withSeeMore";
import { useMediaQuery } from "../hooks/index";

const isMobile = useMediaQuery("(max-width: 768px)");

export const renderer: Renderer = ({
  story,
  action,
  isPaused,
  config,
  messageHandler,
}) => {
  const [loaded, setLoaded] = React.useState(false);
  const [muted, setMuted] = React.useState(true);
  const { width, height, loader, storyStyles } = config;

  let computedStyles = {
    ...styles.storyContent,
    ...(storyStyles || {}),
  };

  let vid = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (vid.current) {
      if (isPaused) {
        vid.current.pause();
      } else {
        vid.current.play().catch(() => {});
      }
    }
  }, [isPaused]);

  const onWaiting = () => {
    action("pause", true);
  };

  const onPlaying = () => {
    action("play", true);
  };

  const videoLoaded = () => {
    messageHandler("UPDATE_VIDEO_DURATION", { duration: vid.current.duration });
    setLoaded(true);
    vid.current
      .play()
      .then(() => {
        action("play");
      })
      .catch(() => {
        setMuted(true);
        vid.current.play().finally(() => {
          action("play");
        });
      });
  };

  return (
    <WithHeader story={story} globalHeader={config.header}>
      <WithSeeMore story={story} action={action}>
        <div style={styles.videoContainer}>
          <div style={styles.buttonsContainer}>
            {muted ? (
              <div style={styles.buttonCircle} onClick={() => setMuted(false)}>
                <Sound />
              </div>
            ) : (
              <div style={styles.buttonCircle} onClick={() => setMuted(true)}>
                <div style={{ padding: "5px 0 0 5px", marginTop: "9px" }}>
                  <Mute />
                </div>
              </div>
            )}
            {isPaused ? (
              <div style={styles.buttonCircle} onClick={onPlaying}>
                <div style={{ padding: "5px 0 0 5px", margin: "6px 0 0 6px" }}>
                  <Play />
                </div>
              </div>
            ) : (
              <div style={styles.buttonCircle} onClick={onWaiting}>
                <div style={{ padding: "5px 0 0 1px", margin: "6px 0 0 4px" }}>
                  <Pause />
                </div>
              </div>
            )}
          </div>

          <video
            ref={vid}
            style={computedStyles}
            src={story.url}
            controls={false}
            onLoadedData={videoLoaded}
            playsInline
            onWaiting={onWaiting}
            onPlaying={onPlaying}
            muted={muted}
            autoPlay
            webkit-playsinline="true"
          />
          {!loaded && (
            <div
              style={{
                width: width,
                height: height,
                position: "absolute",
                left: 0,
                top: 0,
                background: "rgba(0, 0, 0, 0.9)",
                zIndex: 9,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#ccc",
              }}
            >
              {loader || <Spinner />}
            </div>
          )}
        </div>
      </WithSeeMore>
    </WithHeader>
  );
};

const styles = {
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  },
  videoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: isMobile ? "20px" : "40px",
    right: isMobile ? "20px" : "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 1000,
    height: "150px",
  },
  buttonCircle: {
    width: "64px",
    height: "64px",
    borderRadius: "64px",
    background: "#0F0F19",
    opacity: 0.6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
};

export const tester: Tester = (story) => {
  return {
    condition: story.type === "video",
    priority: 2,
  };
};

export default {
  renderer,
  tester,
};
