import * as React from "react";
import Spinner from "../components/Spinner";
import { Renderer, Tester } from "./../interfaces";
import { Pause, Play } from "./wrappers/icons";
import WithHeader from "./wrappers/withHeader";
import WithSeeMore from "./wrappers/withSeeMore";

export const renderer: Renderer = ({ story, action, isPaused, config }) => {
  const [loaded, setLoaded] = React.useState(false);
  const { width, height, loader, storyStyles } = config;
  let computedStyles = {
    ...styles.storyContent,
    ...(storyStyles || {}),
  };

  const imageLoaded = () => {
    setLoaded(true);
    action("play");
  };

  const onWaiting = () => {
    action("pause", true);
  };

  const onPlaying = () => {
    action("play", true);
  };

  return (
    <WithHeader story={story} globalHeader={config.header}>
      <WithSeeMore story={story} action={action}>
        <div>
          <div style={styles.buttonsContainer}>
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

          <img style={computedStyles} src={story.url} onLoad={imageLoaded} />
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
  story: {
    display: "flex",
    position: "relative",
    overflow: "hidden",
  },
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: "40px",
    right: "30px",
    zIndex: 1000,
    height: "64px",
    "@media screen and (max-width 768px)": {
      right: "20px",
      bottom: "20px",
    },
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
    condition: !story.content && (!story.type || story.type === "image"),
    priority: 2,
  };
};

export default {
  renderer,
  tester,
};
