!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("react")))
    : "function" == typeof define && define.amd
    ? define("Stories", ["React"], t)
    : "object" == typeof exports
    ? (exports.Stories = t(require("react")))
    : (e.Stories = t(e.React));
})(this, function (e) {
  return (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var i = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var i in e)
            r.d(
              n,
              i,
              function (t) {
                return e[t];
              }.bind(null, i)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 8))
    );
  })([
    function (t, r) {
      t.exports = e;
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.initialContext = void 0);
      var i = n(r(0));
      t.initialContext = { defaultInterval: 4e3, width: "100%", height: 640 };
      var o = i.default.createContext(t.initialContext);
      t.default = o;
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.initialContext = void 0);
      var i = n(r(0));
      t.initialContext = { stories: [] };
      var o = i.default.createContext(t.initialContext);
      t.default = o;
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(r(0));
      t.default = i.default.createContext({
        currentId: 0,
        videoDuration: 0,
        bufferAction: !1,
        pause: !1,
        next: function () {},
      });
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = i(r(0)),
        a = i(r(23));
      t.default = function (e) {
        var t = e.story,
          r = e.globalHeader,
          i = e.children;
        return o.default.createElement(
          o.default.Fragment,
          null,
          i,
          t.header &&
            o.default.createElement(
              "div",
              {
                style: { position: "absolute", left: 12, top: 20, zIndex: 19 },
              },
              "object" === n(t)
                ? r
                  ? r(t.header)
                  : o.default.createElement(a.default, {
                      heading: t.header.heading,
                      subheading: t.header.subheading,
                      profileImage: t.header.profileImage,
                    })
                : null
            )
        );
      };
    },
    function (e, t, r) {
      "use strict";
      function n(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, u = e[Symbol.iterator]();
                !(n = (a = u.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                n || null == u.return || u.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return i(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return i(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        u =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  o(t, e, r);
            return a(t, e), t;
          },
        l =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = u(r(0)),
        f = l(r(24));
      t.default = function (e) {
        var t = e.story,
          r = e.action,
          i = e.customCollapsed,
          o = e.children,
          a = n(c.useState(!1), 2),
          u = a[0],
          l = a[1],
          s = f.default;
        return c.default.createElement(
          c.default.Fragment,
          null,
          o,
          t.seeMore &&
            c.default.createElement(
              "div",
              {
                style: {
                  position: "absolute",
                  margin: "auto",
                  bottom: u ? "unset" : 0,
                  zIndex: 9999,
                  width: "100%",
                  height: u ? "100%" : "auto",
                },
              },
              c.default.createElement(s, {
                action: r,
                toggleMore: function (e) {
                  r(e ? "pause" : "play"), l(e);
                },
                showContent: u,
                seeMoreContent: t.seeMore,
                customCollapsed: i || t.seeMoreCollapsed,
              })
            )
        );
      };
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(r(0)),
        o = n(r(17));
      t.default = function () {
        return i.default.createElement(o.default, null);
      };
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Pause = t.Play = t.Mute = t.Sound = t.Circle = void 0);
      var i = n(r(0)),
        o = n(r(18)),
        a = n(r(19)),
        u = n(r(20)),
        l = n(r(21)),
        c = n(r(22));
      (t.Circle = function () {
        return i.default.createElement(o.default, null);
      }),
        (t.Sound = function () {
          return i.default.createElement(a.default, null);
        }),
        (t.Mute = function () {
          return i.default.createElement(u.default, null);
        }),
        (t.Play = function () {
          return i.default.createElement(l.default, null);
        }),
        (t.Pause = function () {
          return i.default.createElement(c.default, null);
        });
    },
    function (e, t, r) {
      "use strict";
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, u = e[Symbol.iterator]();
                !(n = (a = u.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                n || null == u.return || u.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return o(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return o(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var a =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        u =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        l =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  a(t, e, r);
            return u(t, e), t;
          },
        c =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.WithSeeMore = t.WithHeader = void 0);
      var f = l(r(0)),
        s = c(r(9)),
        d = c(r(1)),
        y = c(r(2)),
        p = r(14),
        h = r(15),
        m = c(r(4)),
        v = c(r(5)),
        b = function (e) {
          var t = e.renderers ? e.renderers.concat(h.renderers) : h.renderers,
            r = {
              width: e.width,
              height: e.height,
              loader: e.loader,
              header: e.header,
              storyContainerStyles: e.storyContainerStyles,
              storyStyles: e.storyStyles,
              loop: e.loop,
              defaultInterval: e.defaultInterval,
              isPaused: e.isPaused,
              currentIndex: e.currentIndex,
              onStoryStart: e.onStoryStart,
              onStoryEnd: e.onStoryEnd,
              onAllStoriesEnd: e.onAllStoriesEnd,
              keyboardNavigation: e.keyboardNavigation,
              preventDefault: e.preventDefault,
            },
            n = i(f.useState({ stories: g(e.stories, t) }), 2),
            o = n[0],
            a = n[1];
          return (
            f.useEffect(
              function () {
                a({ stories: g(e.stories, t) });
              },
              [e.stories, e.renderers]
            ),
            f.default.createElement(
              d.default.Provider,
              { value: r },
              f.default.createElement(
                y.default.Provider,
                { value: o },
                f.default.createElement(s.default, null)
              )
            )
          );
        },
        g = function (e, t) {
          return e.map(function (e) {
            var r = {};
            "string" == typeof e
              ? ((r.url = e), (r.type = "image"))
              : "object" === n(e) && (r = Object.assign(r, e));
            var i = p.getRenderer(r, t);
            return (r.originalContent = r.content), (r.content = i), r;
          });
        };
      (b.defaultProps = { width: "100%", height: 640, defaultInterval: 4e3 }),
        (t.WithHeader = m.default),
        (t.WithSeeMore = v.default),
        (t.default = b);
    },
    function (e, t, r) {
      "use strict";
      function n(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, u = e[Symbol.iterator]();
                !(n = (a = u.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                n || null == u.return || u.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return i(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return i(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        u =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  o(t, e, r);
            return a(t, e), t;
          },
        l =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = u(r(0)),
        f = l(r(1)),
        s = l(r(2)),
        d = l(r(3)),
        y = l(r(10)),
        p = l(r(11));
      t.default = function () {
        var e = n(c.useState(0), 2),
          t = e[0],
          r = e[1],
          i = n(c.useState(!1), 2),
          o = i[0],
          a = i[1],
          u = n(c.useState(!1), 2),
          l = u[0],
          m = u[1],
          v = n(c.useState(0), 2),
          b = v[0],
          g = v[1],
          _ = c.useRef(),
          O = c.useRef(!0),
          j = c.useContext(f.default),
          x = j.width,
          w = j.height,
          E = j.loop,
          S = j.currentIndex,
          M = (j.isPaused, j.keyboardNavigation),
          P = j.preventDefault,
          C = c.useContext(s.default).stories;
        c.useEffect(
          function () {
            "number" == typeof S &&
              (S >= 0 && S < C.length
                ? D(function () {
                    return S;
                  })
                : console.error(
                    "Index out of bounds. Current index was set to value more than the length of stories array.",
                    S
                  ));
          },
          [S]
        ),
          c.useEffect(
            function () {
              if (
                "undefined" != typeof window &&
                window.document &&
                "boolean" == typeof M &&
                M
              )
                return (
                  document.addEventListener("keydown", A),
                  function () {
                    document.removeEventListener("keydown", A);
                  }
                );
            },
            [M]
          ),
          c.useEffect(function () {
            return function () {
              O.current = !1;
            };
          }, []);
        var A = function (e) {
            "ArrowLeft" === e.key ? k() : "ArrowRight" === e.key && T();
          },
          I = function (e, t) {
            a("pause" === e), m(!!t);
          },
          D = function (e) {
            r(e), I("pause", !0);
          },
          k = function () {
            D(function (e) {
              return e > 0 ? e - 1 : e;
            });
          },
          T = function () {
            O.current && (E ? z() : R());
          },
          z = function () {
            D(function (e) {
              return (e + 1) % C.length;
            });
          },
          R = function () {
            D(function (e) {
              return e < C.length - 1 ? e + 1 : e;
            });
          },
          B = function (e) {
            e.preventDefault(),
              (_.current = setTimeout(function () {
                I("pause");
              }, 200));
          },
          W = function (e) {
            return function (t) {
              t.preventDefault(),
                _.current && clearTimeout(_.current),
                o ? I("play") : "next" === e ? T() : k();
            };
          };
        return c.default.createElement(
          "div",
          {
            style: Object.assign(Object.assign({}, h.container), {
              width: x,
              height: w,
            }),
          },
          c.default.createElement(
            d.default.Provider,
            {
              value: {
                bufferAction: l,
                videoDuration: b,
                currentId: t,
                pause: o,
                next: T,
              },
            },
            c.default.createElement(p.default, null)
          ),
          c.default.createElement(y.default, {
            action: I,
            bufferAction: l,
            playState: o,
            story: C[t],
            getVideoDuration: function (e) {
              g(1e3 * e);
            },
          }),
          !P &&
            c.default.createElement(
              "div",
              { style: h.overlay },
              c.default.createElement("div", {
                style: { width: "50%", zIndex: 999 },
                onTouchStart: B,
                onTouchEnd: W("previous"),
                onMouseDown: B,
                onMouseUp: W("previous"),
              }),
              c.default.createElement("div", {
                style: { width: "50%", zIndex: 999 },
                onTouchStart: B,
                onTouchEnd: W("next"),
                onMouseDown: B,
                onMouseUp: W("next"),
              })
            )
        );
      };
      var h = {
        container: {
          display: "flex",
          flexDirection: "column",
          background: "#111",
          position: "relative",
        },
        overlay: {
          position: "absolute",
          height: "inherit",
          width: "inherit",
          display: "flex",
        },
      };
    },
    function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = o(r(0)),
        l = a(r(1)),
        c = {
          story: {
            display: "flex",
            position: "relative",
            overflow: "hidden",
            alignItems: "center",
          },
          storyContent: {
            width: "auto",
            maxWidth: "100%",
            maxHeight: "100%",
            margin: "auto",
          },
        };
      t.default = function (e) {
        var t,
          r,
          n = u.useContext(l.default),
          i = n.width,
          o = n.height,
          a = n.loader,
          f = n.header,
          s = n.storyStyles,
          d = function (t, r) {
            switch (t) {
              case "UPDATE_VIDEO_DURATION":
                return e.getVideoDuration(r.duration), { ack: "OK" };
            }
          };
        return u.default.createElement(
          "div",
          {
            style: Object.assign(Object.assign({}, c.story), {
              width: i,
              height: o,
            }),
          },
          ((t = e.story.content),
          (r = { width: i, height: o, loader: a, header: f, storyStyles: s }),
          u.default.createElement(t, {
            action: e.action,
            isPaused: e.playState,
            story: e.story,
            config: r,
            messageHandler: d,
          }))
        );
      };
    },
    function (e, t, r) {
      "use strict";
      function n(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, u = e[Symbol.iterator]();
                !(n = (a = u.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                n || null == u.return || u.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return i(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return i(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        u =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  o(t, e, r);
            return a(t, e), t;
          },
        l =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c = u(r(0)),
        f = l(r(12)),
        s = l(r(3)),
        d = l(r(1)),
        y = l(r(2));
      t.default = function () {
        var e = n(c.useState(0), 2),
          t = e[0],
          r = e[1],
          i = c.useContext(s.default),
          o = i.currentId,
          a = i.next,
          u = i.videoDuration,
          l = i.pause,
          h = c.useContext(d.default),
          m = h.defaultInterval,
          v = h.onStoryEnd,
          b = h.onStoryStart,
          g = h.onAllStoriesEnd,
          _ = c.useContext(y.default).stories;
        c.useEffect(
          function () {
            r(0);
          },
          [o, _]
        ),
          c.useEffect(
            function () {
              return (
                l || (O.current = requestAnimationFrame(x)),
                function () {
                  cancelAnimationFrame(O.current);
                }
              );
            },
            [o, l]
          );
        var O = c.useRef(),
          j = t,
          x = function e() {
            0 === j && w(),
              r(function (e) {
                var t = M();
                return (
                  (j = e + 100 / ((t / 1e3) * 60)), e + 100 / ((t / 1e3) * 60)
                );
              }),
              j < 100
                ? (O.current = requestAnimationFrame(e))
                : (E(),
                  o === _.length - 1 && S(),
                  cancelAnimationFrame(O.current),
                  a());
          },
          w = function () {
            b && b(o, _[o]);
          },
          E = function () {
            v && v(o, _[o]);
          },
          S = function () {
            g && g(o, _);
          },
          M = function () {
            return "video" === _[o].type
              ? u
              : "number" == typeof _[o].duration
              ? _[o].duration
              : m;
          };
        return c.default.createElement(
          "div",
          { style: p.progressArr },
          _.map(function (e, r) {
            return c.default.createElement(f.default, {
              key: r,
              count: t,
              width: 1 / _.length,
              active: r === o ? 1 : r < o ? 2 : 0,
            });
          })
        );
      };
      var p = {
        progressArr: {
          display: "flex",
          justifyContent: "center",
          maxWidth: "100%",
          flexWrap: "row",
          position: "absolute",
          width: "98%",
          padding: 5,
          paddingTop: 7,
          alignSelf: "center",
          zIndex: 1001,
          filter: "drop-shadow(0 1px 8px #222)",
        },
      };
    },
    function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = o(r(0)),
        l = a(r(13)),
        c = a(r(3));
      t.default = function (e) {
        var t = u.useContext(c.default),
          r = t.bufferAction,
          n = t.pause,
          i = e.width,
          o = e.active;
        return u.default.createElement(
          l.default,
          { width: i, pause: n, bufferAction: r },
          u.default.createElement("div", {
            style: Object.assign(
              Object.assign(
                {},
                (function (t) {
                  switch (t.active) {
                    case 2:
                      return { width: "100%" };
                    case 1:
                      return {
                        transform: "scaleX(".concat(e.count / 100, ")"),
                      };
                    case 0:
                    default:
                      return { width: 0 };
                  }
                })({ active: o })
              ),
              f.inner
            ),
          })
        );
      };
      var f = {
        inner: {
          background: "#fff",
          height: "100%",
          maxWidth: "100%",
          borderRadius: 2,
          transformOrigin: "center left",
          WebkitBackfaceVisibility: "hidden",
          MozBackfaceVisibility: "hidden",
          msBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          WebkitPerspective: 1e3,
          MozPerspective: 1e3,
          msPerspective: 1e3,
          perspective: 1e3,
        },
      };
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(r(0)),
        o = function (e) {
          var t = e.width,
            r = e.pause,
            n = e.bufferAction;
          return { width: "".concat(100 * t, "%"), opacity: r && !n ? 0 : 1 };
        },
        a = {
          progress: {
            height: 2,
            maxWidth: "100%",
            background: "#555",
            margin: 2,
            borderRadius: 2,
            transition: "opacity 400ms ease-in-out",
          },
        };
      t.default = function (e) {
        return i.default.createElement(
          "div",
          { style: Object.assign(Object.assign({}, a.progress), o(e)) },
          e.children
        );
      };
    },
    function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getRenderer = void 0),
        (t.getRenderer = function (e, t) {
          var r = t
            .map(function (t) {
              return Object.assign(Object.assign({}, t), {
                testerResult: t.tester(e),
              });
            })
            .filter(function (e) {
              return e.testerResult.condition;
            });
          return (
            r.sort(function (e, t) {
              return t.testerResult.priority - e.testerResult.priority;
            }),
            r[0].renderer
          );
        });
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.renderers = void 0);
      var i = n(r(16)),
        o = n(r(25)),
        a = n(r(26)),
        u = n(r(27));
      t.renderers = [i.default, o.default, u.default, a.default];
    },
    function (e, t, r) {
      "use strict";
      function n(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, u = e[Symbol.iterator]();
                !(n = (a = u.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                n || null == u.return || u.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return i(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return i(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        u =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  o(t, e, r);
            return a(t, e), t;
          },
        l =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.tester = t.renderer = void 0);
      var c = u(r(0)),
        f = l(r(6)),
        s = r(7),
        d = l(r(4)),
        y = l(r(5));
      t.renderer = function (e) {
        var t = e.story,
          r = e.action,
          i = e.isPaused,
          o = e.config,
          a = n(c.useState(!1), 2),
          u = a[0],
          l = a[1],
          h = o.width,
          m = o.height,
          v = o.loader,
          b = o.storyStyles,
          g = Object.assign(Object.assign({}, p.storyContent), b || {});
        return c.createElement(
          d.default,
          { story: t, globalHeader: o.header },
          c.createElement(
            y.default,
            { story: t, action: r },
            c.createElement(
              "div",
              null,
              c.createElement(
                "div",
                { style: p.buttonsContainer },
                i
                  ? c.createElement(
                      "div",
                      {
                        style: p.buttonCircle,
                        onClick: function () {
                          r("play", !0);
                        },
                      },
                      c.createElement(
                        "div",
                        {
                          style: {
                            padding: "5px 0 0 5px",
                            margin: "6px 0 0 6px",
                          },
                        },
                        c.createElement(s.Play, null)
                      )
                    )
                  : c.createElement(
                      "div",
                      {
                        style: p.buttonCircle,
                        onClick: function () {
                          r("pause", !0);
                        },
                      },
                      c.createElement(
                        "div",
                        {
                          style: {
                            padding: "5px 0 0 1px",
                            margin: "6px 0 0 4px",
                          },
                        },
                        c.createElement(s.Pause, null)
                      )
                    )
              ),
              c.createElement("img", {
                style: g,
                src: t.url,
                onLoad: function () {
                  l(!0), r("play");
                },
              }),
              !u &&
                c.createElement(
                  "div",
                  {
                    style: {
                      width: h,
                      height: m,
                      position: "absolute",
                      left: 0,
                      top: 0,
                      background: "rgba(0, 0, 0, 0.9)",
                      zIndex: 9,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#ccc",
                    },
                  },
                  v || c.createElement(f.default, null)
                )
            )
          )
        );
      };
      var p = {
        story: { display: "flex", position: "relative", overflow: "hidden" },
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 1e3,
          height: "128px",
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
      (t.tester = function (e) {
        return {
          condition: !(e.content || (e.type && "image" !== e.type)),
          priority: 2,
        };
      }),
        (t.default = { renderer: t.renderer, tester: t.tester });
    },
    function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        i = r.n(n);
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function a(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      t.default = function (e) {
        e.styles;
        var t = a(e, ["styles"]);
        return i.a.createElement(
          "svg",
          o(
            {
              width: "44",
              height: "44",
              xmlns: "http://www.w3.org/2000/svg",
              stroke: "#fff",
            },
            t
          ),
          i.a.createElement(
            "g",
            { fill: "none", fillRule: "evenodd", strokeWidth: "2" },
            i.a.createElement(
              "circle",
              { cx: "22", cy: "22", r: "1" },
              i.a.createElement("animate", {
                attributeName: "r",
                begin: "0s",
                dur: "1.8s",
                values: "1; 20",
                calcMode: "spline",
                keyTimes: "0; 1",
                keySplines: "0.165, 0.84, 0.44, 1",
                repeatCount: "indefinite",
              }),
              i.a.createElement("animate", {
                attributeName: "stroke-opacity",
                begin: "0s",
                dur: "1.8s",
                values: "1; 0",
                calcMode: "spline",
                keyTimes: "0; 1",
                keySplines: "0.3, 0.61, 0.355, 1",
                repeatCount: "indefinite",
              })
            ),
            i.a.createElement(
              "circle",
              { cx: "22", cy: "22", r: "1" },
              i.a.createElement("animate", {
                attributeName: "r",
                begin: "-0.9s",
                dur: "1.8s",
                values: "1; 20",
                calcMode: "spline",
                keyTimes: "0; 1",
                keySplines: "0.165, 0.84, 0.44, 1",
                repeatCount: "indefinite",
              }),
              i.a.createElement("animate", {
                attributeName: "stroke-opacity",
                begin: "-0.9s",
                dur: "1.8s",
                values: "1; 0",
                calcMode: "spline",
                keyTimes: "0; 1",
                keySplines: "0.3, 0.61, 0.355, 1",
                repeatCount: "indefinite",
              })
            )
          )
        );
      };
    },
    function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        i = r.n(n);
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function a(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      t.default = function (e) {
        e.styles;
        var t = a(e, ["styles"]);
        return i.a.createElement(
          "svg",
          o(
            {
              width: "64",
              height: "64",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            t
          ),
          i.a.createElement("circle", {
            opacity: ".6",
            cx: "32",
            cy: "32",
            r: "32",
            fill: "#0F0F19",
          })
        );
      };
    },
    function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        i = r.n(n);
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function a(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      t.default = function (e) {
        e.styles;
        var t = a(e, ["styles"]);
        return i.a.createElement(
          "svg",
          o(
            {
              width: "35",
              height: "35",
              viewBox: "0 0 26 26",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            t
          ),
          i.a.createElement("path", {
            d: "M12.606 4.1a1.13 1.13 0 00-1.213.184L6.64 8.498H3.69C2.756 8.498 2 9.254 2 10.154v3.342c0 .932.757 1.656 1.69 1.656h2.952l4.75 4.214a1.128 1.128 0 001.875-.84V5.124c-.031-.443-.256-.844-.661-1.025zM16.177 9.728a.71.71 0 00-1.013.105.746.746 0 00.101 1.035c.339.285.534.696.534 1.104 0 .435-.195.847-.535 1.131a.747.747 0 00-.1 1.036.71.71 0 001.012.104c.676-.54 1.063-1.365 1.063-2.27 0-.906-.387-1.68-1.062-2.245zm1.815-2.266a.712.712 0 00-1.013.103.747.747 0 00.1 1.036 4.366 4.366 0 011.6 3.371c0 1.284-.583 2.521-1.6 3.399a.747.747 0 00-.1 1.036.713.713 0 001.014.102c1.352-1.104 2.127-2.759 2.127-4.537 0-1.777-.775-3.38-2.128-4.51zm1.84-2.296a.712.712 0 00-1.014.102.747.747 0 00.1 1.036 7.392 7.392 0 012.642 5.668 7.443 7.443 0 01-2.642 5.696.747.747 0 00-.1 1.035.664.664 0 00.557.297.709.709 0 00.457-.167C21.845 17.146 23 14.656 23 11.973a8.787 8.787 0 00-3.169-6.807z",
            fill: "#fff",
          })
        );
      };
    },
    function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        i = r.n(n);
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function a(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      t.default = function (e) {
        e.styles;
        var t = a(e, ["styles"]);
        return i.a.createElement(
          "svg",
          o(
            {
              width: "35",
              height: "35",
              viewBox: "0 0 26 26",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            t
          ),
          i.a.createElement("path", {
            d: "M10.606.1a1.13 1.13 0 00-1.213.184L4.64 4.498H1.69C.756 4.498 0 5.254 0 6.154v3.343c0 .931.757 1.655 1.69 1.655h2.952l4.75 4.214a1.128 1.128 0 001.875-.84V1.124c-.031-.443-.256-.844-.661-1.025zm7.489 7.741l1.656-1.653a.842.842 0 000-1.193.846.846 0 00-1.195 0L16.9 6.681l-1.686-1.655a.846.846 0 00-1.195 0 .842.842 0 000 1.193l1.656 1.653-1.656 1.653a.842.842 0 000 1.193c.33.33.864.33 1.195 0L16.9 9.064l1.656 1.653c.33.33.865.33 1.195 0a.842.842 0 000-1.193l-1.657-1.683z",
            fill: "#fff",
          })
        );
      };
    },
    function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        i = r.n(n);
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function a(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      t.default = function (e) {
        e.styles;
        var t = a(e, ["styles"]);
        return i.a.createElement(
          "svg",
          o(
            {
              width: "35",
              height: "35",
              viewBox: "0 0 22 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            t
          ),
          i.a.createElement("path", {
            d: "M14.148 7.398c.56.344.902.95.902 1.602a1.78 1.78 0 01-.902 1.566L2.862 17.441a1.813 1.813 0 01-1.901.07A1.875 1.875 0 010 15.876V2.125C0 1.447.367.821.961.489a1.887 1.887 0 011.901.036l11.286 6.873z",
            fill: "#fff",
          })
        );
      };
    },
    function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(0),
        i = r.n(n);
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      function a(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++)
              (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]));
        }
        return i;
      }
      t.default = function (e) {
        e.styles;
        var t = a(e, ["styles"]);
        return i.a.createElement(
          "svg",
          o(
            {
              width: "35",
              height: "35",
              viewBox: "0 0 22 27",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            t
          ),
          i.a.createElement("path", {
            d: "M14.133 0h-1.662c-1.378 0-2.494 1.117-2.494 2.447v14.965a2.494 2.494 0 002.494 2.495l1.662.093a2.494 2.494 0 002.495-2.494V2.54C16.628 1.163 15.51 0 14.133 0zM4.157 0H2.494A2.494 2.494 0 000 2.494V17.46C0 18.883 1.117 20 2.494 20h1.663a2.494 2.494 0 002.494-2.494V2.54C6.651 1.163 5.534 0 4.157 0z",
            fill: "#fff",
          })
        );
      };
    },
    function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = n(r(0)),
        o = {
          main: { display: "flex", alignItems: "center" },
          img: {
            width: 40,
            height: 40,
            borderRadius: 40,
            marginRight: 10,
            filter: "drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))",
            border: "2px solid rgba(255, 255, 255, 0.8)",
          },
          text: {
            display: "flex",
            flexDirection: "column",
            filter: "drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))",
          },
          heading: {
            fontSize: "1rem",
            color: "rgba(255, 255, 255, 0.9)",
            margin: 0,
            marginBottom: 2,
          },
          subheading: {
            fontSize: "0.6rem",
            color: "rgba(255, 255, 255, 0.8)",
            margin: 0,
          },
        };
      t.default = function (e) {
        var t = e.profileImage,
          r = e.heading,
          n = e.subheading;
        return i.default.createElement(
          "div",
          { style: o.main },
          t && i.default.createElement("img", { style: o.img, src: t }),
          i.default.createElement(
            "span",
            { style: o.text },
            i.default.createElement("p", { style: o.heading }, r),
            i.default.createElement("p", { style: o.subheading }, n)
          )
        );
      };
    },
    function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = o(r(0)),
        l = a(r(1));
      t.default = function (e) {
        var t = e.seeMoreContent,
          r = e.customCollapsed,
          n = u.useContext(l.default).keyboardNavigation;
        u.useEffect(
          function () {
            if (
              "undefined" != typeof window &&
              window.document &&
              "boolean" == typeof n &&
              n
            )
              return (
                document.addEventListener("keydown", i),
                function () {
                  document.removeEventListener("keydown", i);
                }
              );
          },
          [n]
        );
        var i = function (t) {
          "ArrowUp" === t.key
            ? (t.preventDefault(), e.toggleMore(!0))
            : ("ArrowDown" !== t.key && "Escape" !== t.key) ||
              (t.preventDefault(), e.toggleMore(!1));
        };
        return e.showContent
          ? u.default.createElement(
              "div",
              { style: c.seeMoreExpanded },
              u.default.createElement(t, {
                close: function () {
                  return e.toggleMore(!1);
                },
              })
            )
          : r
          ? u.default.createElement(r, {
              action: e.action,
              toggleMore: e.toggleMore,
            })
          : u.default.createElement(
              "div",
              {
                style: c.seeMore,
                onClick: function (t) {
                  t.preventDefault(), t.stopPropagation(), e.toggleMore(!0);
                },
              },
              u.default.createElement("span", { style: c.seeMoreIcon }, "⌃"),
              u.default.createElement(
                "span",
                { style: c.seeMoreText },
                "See more"
              )
            );
      };
      var c = {
        seeMore: {
          height: "10vh",
          background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2))",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
          bottom: 0,
        },
        seeMoreExpanded: {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          zIndex: 99999,
        },
        seeMoreText: {
          color: "white",
          textAlign: "center",
          letterSpacing: "0.1em",
          marginBottom: "2.2vh",
          textTransform: "capitalize",
          opacity: "1",
          fontSize: "0.8em",
          transition: "opacity 300ms ease-in-out",
        },
        seeMoreIcon: {
          color: "white",
          textAlign: "center",
          letterSpacing: "0.2em",
          marginBottom: "0.4vh",
          opacity: "1",
          filter: "drop-shadow(0 0 5px black)",
          textTransform: "capitalize",
          transition: "opacity 300ms ease-in-out",
        },
        seeMoreClose: {
          position: "absolute",
          filter: "drop-shadow(0 3px 2px #ccc)",
          right: "0.5rem",
          top: "0.5rem",
          fontSize: "1.5rem",
          opacity: "0.7",
          padding: "1rem",
        },
      };
    },
    function (e, t, r) {
      "use strict";
      function n(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, u = e[Symbol.iterator]();
                !(n = (a = u.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                n || null == u.return || u.return();
              } finally {
                if (i) throw o;
              }
            }
            return r;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return i(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(e);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return i(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var o =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        a =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        u =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  o(t, e, r);
            return a(t, e), t;
          },
        l =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.tester = t.renderer = void 0);
      var c = u(r(0)),
        f = l(r(6)),
        s = r(7),
        d = l(r(4)),
        y = l(r(5));
      t.renderer = function (e) {
        var t = e.story,
          r = e.action,
          i = e.isPaused,
          o = e.config,
          a = e.messageHandler,
          u = n(c.useState(!1), 2),
          l = u[0],
          h = u[1],
          m = n(c.useState(!0), 2),
          v = m[0],
          b = m[1],
          g = o.width,
          _ = o.height,
          O = o.loader,
          j = o.storyStyles,
          x = Object.assign(Object.assign({}, p.storyContent), j || {}),
          w = c.useRef(null);
        c.useEffect(
          function () {
            w.current &&
              (i ? w.current.pause() : w.current.play().catch(function () {}));
          },
          [i]
        );
        var E = function () {
            r("pause", !0);
          },
          S = function () {
            r("play", !0);
          };
        return c.createElement(
          d.default,
          { story: t, globalHeader: o.header },
          c.createElement(
            y.default,
            { story: t, action: r },
            c.createElement(
              "div",
              { style: p.videoContainer },
              c.createElement(
                "div",
                { style: p.buttonsContainer },
                v
                  ? c.createElement(
                      "div",
                      {
                        style: p.buttonCircle,
                        onClick: function () {
                          return b(!1);
                        },
                      },
                      c.createElement(s.Sound, null)
                    )
                  : c.createElement(
                      "div",
                      {
                        style: p.buttonCircle,
                        onClick: function () {
                          return b(!0);
                        },
                      },
                      c.createElement(
                        "div",
                        { style: { padding: "5px 0 0 5px", marginTop: "9px" } },
                        c.createElement(s.Mute, null)
                      )
                    ),
                i
                  ? c.createElement(
                      "div",
                      { style: p.buttonCircle, onClick: S },
                      c.createElement(
                        "div",
                        {
                          style: {
                            padding: "5px 0 0 5px",
                            margin: "6px 0 0 6px",
                          },
                        },
                        c.createElement(s.Play, null)
                      )
                    )
                  : c.createElement(
                      "div",
                      { style: p.buttonCircle, onClick: E },
                      c.createElement(
                        "div",
                        {
                          style: {
                            padding: "5px 0 0 1px",
                            margin: "6px 0 0 4px",
                          },
                        },
                        c.createElement(s.Pause, null)
                      )
                    )
              ),
              c.createElement("video", {
                ref: w,
                style: x,
                src: t.url,
                controls: !1,
                onLoadedData: function () {
                  a("UPDATE_VIDEO_DURATION", { duration: w.current.duration }),
                    h(!0),
                    w.current
                      .play()
                      .then(function () {
                        r("play");
                      })
                      .catch(function () {
                        b(!0),
                          w.current.play().finally(function () {
                            r("play");
                          });
                      });
                },
                playsInline: !0,
                onWaiting: E,
                onPlaying: S,
                muted: v,
                autoPlay: !0,
                "webkit-playsinline": "true",
              }),
              !l &&
                c.createElement(
                  "div",
                  {
                    style: {
                      width: g,
                      height: _,
                      position: "absolute",
                      left: 0,
                      top: 0,
                      background: "rgba(0, 0, 0, 0.9)",
                      zIndex: 9,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#ccc",
                    },
                  },
                  O || c.createElement(f.default, null)
                )
            )
          )
        );
      };
      var p = {
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
          bottom: "40px",
          right: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 1e3,
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
      (t.tester = function (e) {
        return { condition: "video" === e.type, priority: 2 };
      }),
        (t.default = { renderer: t.renderer, tester: t.tester });
    },
    function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.tester = t.renderer = void 0);
      var a = o(r(0));
      t.renderer = function (e) {
        var t = e.story,
          r = e.action;
        return (
          a.useEffect(
            function () {
              r("play");
            },
            [t]
          ),
          a.createElement(
            "div",
            { style: u.storyContent },
            a.createElement(
              "p",
              { style: u.text },
              "This story could not be loaded."
            )
          )
        );
      };
      var u = {
        storyContent: { width: "100%", maxHeight: "100%", margin: "auto" },
        text: {
          textAlign: "center",
          color: "white",
          width: "90%",
          margin: "auto",
        },
      };
      (t.tester = function () {
        return { condition: !0, priority: 1 };
      }),
        (t.default = { renderer: t.renderer, tester: t.tester });
    },
    function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r),
                  Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  });
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.tester = t.renderer = void 0);
      var a = o(r(0));
      (t.renderer = function (e) {
        a.useEffect(
          function () {
            e.action("play");
          },
          [e.story]
        );
        var t = e.story.originalContent;
        return a.createElement(t, Object.assign({}, e));
      }),
        (t.tester = function (e) {
          return { condition: !!e.content, priority: 2 };
        }),
        (t.default = { renderer: t.renderer, tester: t.tester });
    },
  ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9TdG9yaWVzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9TdG9yaWVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1N0b3JpZXMvZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcIlJlYWN0XCIsXCJyb290XCI6XCJSZWFjdFwifSIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbnRleHQvR2xvYmFsLnRzIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29udGV4dC9TdG9yaWVzLnRzIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29udGV4dC9Qcm9ncmVzcy50cyIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL3JlbmRlcmVycy93cmFwcGVycy93aXRoSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL3JlbmRlcmVycy93cmFwcGVycy93aXRoU2VlTW9yZS50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvcmVuZGVyZXJzL3dyYXBwZXJzL2ljb25zLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbXBvbmVudHMvU3RvcnkudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc0FycmF5LnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2NvbXBvbmVudHMvUHJvZ3Jlc3MudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc1dyYXBwZXIudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvdXRpbC9yZW5kZXJlcnMudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvcmVuZGVyZXJzL2luZGV4LnRzIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvcmVuZGVyZXJzL0ltYWdlLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2Fzc2V0cy9wdWZmLnN2ZyIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2Fzc2V0cy9JY29ucy9jaXJjbGUuc3ZnIiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvYXNzZXRzL0ljb25zL3NvdW5kLnN2ZyIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2Fzc2V0cy9JY29ucy9tdXRlLnN2ZyIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2Fzc2V0cy9JY29ucy9wbGF5LnN2ZyIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL2Fzc2V0cy9JY29ucy9wYXVzZS5zdmciLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9jb21wb25lbnRzL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vU3Rvcmllcy8uL3NyYy9jb21wb25lbnRzL1NlZU1vcmUudHN4Iiwid2VicGFjazovL1N0b3JpZXMvLi9zcmMvcmVuZGVyZXJzL1ZpZGVvLnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL3JlbmRlcmVycy9EZWZhdWx0LnRzeCIsIndlYnBhY2s6Ly9TdG9yaWVzLy4vc3JjL3JlbmRlcmVycy9BdXRvUGxheUNvbnRlbnQudHN4Il0sIm5hbWVzIjpbInJvb3QiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJkZWZpbmUiLCJhbWQiLCJ0aGlzIiwiX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMF9fIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImluaXRpYWxDb250ZXh0IiwiZGVmYXVsdEludGVydmFsIiwid2lkdGgiLCJoZWlnaHQiLCJHbG9iYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInN0b3JpZXMiLCJTdG9yaWVzQ29udGV4dCIsImN1cnJlbnRJZCIsInZpZGVvRHVyYXRpb24iLCJidWZmZXJBY3Rpb24iLCJwYXVzZSIsIm5leHQiLCJzdG9yeSIsImdsb2JhbEhlYWRlciIsImNoaWxkcmVuIiwiaGVhZGVyIiwic3R5bGUiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJ6SW5kZXgiLCJoZWFkaW5nIiwic3ViaGVhZGluZyIsInByb2ZpbGVJbWFnZSIsImFjdGlvbiIsImN1c3RvbUNvbGxhcHNlZCIsInVzZVN0YXRlIiwic2hvd01vcmUiLCJzZXRTaG93TW9yZSIsIkNvbGxhcHNlZENvbXBvbmVudCIsInNlZU1vcmUiLCJtYXJnaW4iLCJib3R0b20iLCJ0b2dnbGVNb3JlIiwic2hvdyIsInNob3dDb250ZW50Iiwic2VlTW9yZUNvbnRlbnQiLCJzZWVNb3JlQ29sbGFwc2VkIiwiQ2lyY2xlIiwiU291bmQiLCJNdXRlIiwiUGxheSIsIlBhdXNlIiwiUmVhY3RJbnN0YVN0b3JpZXMiLCJwcm9wcyIsInJlbmRlcmVycyIsImNvbmNhdCIsImNvbnRleHQiLCJsb2FkZXIiLCJzdG9yeUNvbnRhaW5lclN0eWxlcyIsInN0b3J5U3R5bGVzIiwibG9vcCIsImlzUGF1c2VkIiwiY3VycmVudEluZGV4Iiwib25TdG9yeVN0YXJ0Iiwib25TdG9yeUVuZCIsIm9uQWxsU3Rvcmllc0VuZCIsImtleWJvYXJkTmF2aWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiZ2VuZXJhdGVTdG9yaWVzIiwic2V0U3RvcmllcyIsInVzZUVmZmVjdCIsIlByb3ZpZGVyIiwibWFwIiwidXJsIiwidHlwZSIsImFzc2lnbiIsInJlbmRlcmVyIiwiZ2V0UmVuZGVyZXIiLCJvcmlnaW5hbENvbnRlbnQiLCJjb250ZW50IiwiZGVmYXVsdFByb3BzIiwiV2l0aEhlYWRlciIsIldpdGhTZWVNb3JlIiwic2V0Q3VycmVudElkIiwic2V0UGF1c2UiLCJzZXRCdWZmZXJBY3Rpb24iLCJzZXRWaWRlb0R1cmF0aW9uIiwibW91c2Vkb3duSWQiLCJ1c2VSZWYiLCJpc01vdW50ZWQiLCJ1c2VDb250ZXh0IiwibGVuZ3RoIiwic2V0Q3VycmVudElkV3JhcHBlciIsImNvbnNvbGUiLCJlcnJvciIsIndpbmRvdyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleURvd24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY3VycmVudCIsImUiLCJwcmV2aW91cyIsInRvZ2dsZVN0YXRlIiwiY2FsbGJhY2siLCJwcmV2IiwidXBkYXRlTmV4dFN0b3J5SWRGb3JMb29wIiwidXBkYXRlTmV4dFN0b3J5SWQiLCJkZWJvdW5jZVBhdXNlIiwic2V0VGltZW91dCIsIm1vdXNlVXAiLCJjbGVhclRpbWVvdXQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJwbGF5U3RhdGUiLCJnZXRWaWRlb0R1cmF0aW9uIiwiZHVyYXRpb24iLCJvdmVybGF5Iiwib25Ub3VjaFN0YXJ0Iiwib25Ub3VjaEVuZCIsIm9uTW91c2VEb3duIiwib25Nb3VzZVVwIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJiYWNrZ3JvdW5kIiwib3ZlcmZsb3ciLCJhbGlnbkl0ZW1zIiwic3RvcnlDb250ZW50IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJJbm5lckNvbnRlbnQiLCJjb25maWciLCJnbG9iYWxDb250ZXh0IiwicmVuZGVyZXJNZXNzYWdlSGFuZGxlciIsImRhdGEiLCJhY2siLCJtZXNzYWdlSGFuZGxlciIsImNvdW50Iiwic2V0Q291bnQiLCJhbmltYXRpb25GcmFtZUlkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaW5jcmVtZW50Q291bnQiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNvdW50Q29weSIsInN0b3J5U3RhcnRDYWxsYmFjayIsImludGVydmFsIiwiZ2V0Q3VycmVudEludGVydmFsIiwic3RvcnlFbmRDYWxsYmFjayIsImFsbFN0b3JpZXNFbmRDYWxsYmFjayIsInByb2dyZXNzQXJyIiwiXyIsImFjdGl2ZSIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJwYWRkaW5nIiwicGFkZGluZ1RvcCIsImFsaWduU2VsZiIsImZpbHRlciIsInRyYW5zZm9ybSIsImdldFByb2dyZXNzU3R5bGUiLCJpbm5lciIsImJvcmRlclJhZGl1cyIsInRyYW5zZm9ybU9yaWdpbiIsIldlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eSIsIk1vekJhY2tmYWNlVmlzaWJpbGl0eSIsIm1zQmFja2ZhY2VWaXNpYmlsaXR5IiwiYmFja2ZhY2VWaXNpYmlsaXR5IiwiV2Via2l0UGVyc3BlY3RpdmUiLCJNb3pQZXJzcGVjdGl2ZSIsIm1zUGVyc3BlY3RpdmUiLCJwZXJzcGVjdGl2ZSIsImdldFByb2dyZXNzV3JhcHBlclN0eWxlIiwib3BhY2l0eSIsInByb2dyZXNzIiwidHJhbnNpdGlvbiIsInByb2JhYmxlIiwidGVzdGVyUmVzdWx0IiwidGVzdGVyIiwiY29uZGl0aW9uIiwic29ydCIsImEiLCJiIiwicHJpb3JpdHkiLCJSZWFjdCIsImxvYWRlZCIsInNldExvYWRlZCIsImNvbXB1dGVkU3R5bGVzIiwiYnV0dG9uc0NvbnRhaW5lciIsImJ1dHRvbkNpcmNsZSIsIm9uQ2xpY2siLCJzcmMiLCJvbkxvYWQiLCJjb2xvciIsInJpZ2h0IiwiY3Vyc29yIiwieG1sbnMiLCJzdHJva2UiLCJmaWxsIiwiZmlsbFJ1bGUiLCJzdHJva2VXaWR0aCIsImN4IiwiY3kiLCJhdHRyaWJ1dGVOYW1lIiwiYmVnaW4iLCJkdXIiLCJ2YWx1ZXMiLCJjYWxjTW9kZSIsImtleVRpbWVzIiwia2V5U3BsaW5lcyIsInJlcGVhdENvdW50Iiwidmlld0JveCIsIm1haW4iLCJpbWciLCJtYXJnaW5SaWdodCIsImJvcmRlciIsInRleHQiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsIlNlZU1vcmVDb250ZW50IiwiQ3VzdG9tQ29sbGFwc2VkIiwic2VlTW9yZUV4cGFuZGVkIiwiY2xvc2UiLCJzdG9wUHJvcGFnYXRpb24iLCJzZWVNb3JlSWNvbiIsInNlZU1vcmVUZXh0IiwiYm94U2l6aW5nIiwidGV4dEFsaWduIiwibGV0dGVyU3BhY2luZyIsInRleHRUcmFuc2Zvcm0iLCJzZWVNb3JlQ2xvc2UiLCJtdXRlZCIsInNldE11dGVkIiwidmlkIiwicGxheSIsIm9uV2FpdGluZyIsIm9uUGxheWluZyIsInZpZGVvQ29udGFpbmVyIiwibWFyZ2luVG9wIiwicmVmIiwiY29udHJvbHMiLCJvbkxvYWRlZERhdGEiLCJ0aGVuIiwicGxheXNJbmxpbmUiLCJhdXRvUGxheSIsIkNvbnRlbnQiXSwibWFwcGluZ3MiOiJDQUFBLFNBQTJDQSxFQUFNQyxHQUMxQixpQkFBWkMsU0FBMEMsaUJBQVhDLE9BQ3hDQSxPQUFPRCxRQUFVRCxFQUFRRyxRQUFRLFVBQ1IsbUJBQVhDLFFBQXlCQSxPQUFPQyxJQUM5Q0QsT0FBTyxVQUFXLENBQUMsU0FBVUosR0FDSCxpQkFBWkMsUUFDZEEsUUFBaUIsUUFBSUQsRUFBUUcsUUFBUSxVQUVyQ0osRUFBYyxRQUFJQyxFQUFRRCxFQUFZLE9BUnhDLENBU0dPLE1BQU0sU0FBU0MsR0FDbEIsTyxZQ1RFLElBQUlDLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVULFFBR25DLElBQUlDLEVBQVNNLEVBQWlCRSxHQUFZLENBQ3pDQyxFQUFHRCxFQUNIRSxHQUFHLEVBQ0hYLFFBQVMsSUFVVixPQU5BWSxFQUFRSCxHQUFVSSxLQUFLWixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTUSxHQUcvRFAsRUFBT1UsR0FBSSxFQUdKVixFQUFPRCxRQTBEZixPQXJEQVEsRUFBb0JNLEVBQUlGLEVBR3hCSixFQUFvQk8sRUFBSVIsRUFHeEJDLEVBQW9CUSxFQUFJLFNBQVNoQixFQUFTaUIsRUFBTUMsR0FDM0NWLEVBQW9CVyxFQUFFbkIsRUFBU2lCLElBQ2xDRyxPQUFPQyxlQUFlckIsRUFBU2lCLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVYsRUFBb0JnQixFQUFJLFNBQVN4QixHQUNYLG9CQUFYeUIsUUFBMEJBLE9BQU9DLGFBQzFDTixPQUFPQyxlQUFlckIsRUFBU3lCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFAsT0FBT0MsZUFBZXJCLEVBQVMsYUFBYyxDQUFFMkIsT0FBTyxLQVF2RG5CLEVBQW9Cb0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2QyxHQURVLEVBQVBBLElBQVVGLEVBQVFuQixFQUFvQm1CLElBQy9CLEVBQVBFLEVBQVUsT0FBT0YsRUFDcEIsR0FBVyxFQUFQRSxHQUE4QixpQkFBVkYsR0FBc0JBLEdBQVNBLEVBQU1HLFdBQVksT0FBT0gsRUFDaEYsSUFBSUksRUFBS1gsT0FBT1ksT0FBTyxNQUd2QixHQUZBeEIsRUFBb0JnQixFQUFFTyxHQUN0QlgsT0FBT0MsZUFBZVUsRUFBSSxVQUFXLENBQUVULFlBQVksRUFBTUssTUFBT0EsSUFDdEQsRUFBUEUsR0FBNEIsaUJBQVRGLEVBQW1CLElBQUksSUFBSU0sS0FBT04sRUFBT25CLEVBQW9CUSxFQUFFZSxFQUFJRSxFQUFLLFNBQVNBLEdBQU8sT0FBT04sRUFBTU0sSUFBUUMsS0FBSyxLQUFNRCxJQUM5SSxPQUFPRixHQUlSdkIsRUFBb0IyQixFQUFJLFNBQVNsQyxHQUNoQyxJQUFJaUIsRUFBU2pCLEdBQVVBLEVBQU82QixXQUM3QixXQUF3QixPQUFPN0IsRUFBZ0IsU0FDL0MsV0FBOEIsT0FBT0EsR0FFdEMsT0FEQU8sRUFBb0JRLEVBQUVFLEVBQVEsSUFBS0EsR0FDNUJBLEdBSVJWLEVBQW9CVyxFQUFJLFNBQVNpQixFQUFRQyxHQUFZLE9BQU9qQixPQUFPa0IsVUFBVUMsZUFBZTFCLEtBQUt1QixFQUFRQyxJQUd6RzdCLEVBQW9CZ0MsRUFBSSxHQUlqQmhDLEVBQW9CQSxFQUFvQmlDLEVBQUksRyxnQkNsRnJEeEMsRUFBT0QsUUFBVU0sRywwTENBakIsY0FHYSxFQUFBb0MsZUFBaUIsQ0FDNUJDLGdCQUFpQixJQUNqQkMsTUFBTyxPQUNQQyxPQUFRLEtBR1YsSUFBTUMsRUFBZ0IsVUFBTUMsY0FBeUIsRUFBQUwsZ0JBRXJELFVBQWVJLEcsMExDWGYsY0FNYSxFQUFBSixlQUF1QyxDQUNuRE0sUUFBUyxJQUdWLElBQU1DLEVBQWlCLFVBQU1GLGNBQzVCLEVBQUFMLGdCQUdELFVBQWVPLEcsa0tDZGYsY0FHQSxVQUFlLFVBQU1GLGNBQStCLENBQ2hERyxVQUFXLEVBQ1hDLGNBQWUsRUFDZkMsY0FBYyxFQUNkQyxPQUFPLEVBQ1BDLEtBQU0sZ0IsdVlDUlYsY0FFQSxXQXVCQSxVQXJCdUUsU0FBQyxHQUFxQyxJQUFuQ0MsRUFBbUMsRUFBbkNBLE1BQU9DLEVBQTRCLEVBQTVCQSxhQUFjQyxFQUFjLEVBQWRBLFNBQzNGLE9BQU8sZ0RBQ0ZBLEVBQ0FGLEVBQU1HLFFBQ0gsK0JBQUtDLE1BQU8sQ0FBRUMsU0FBVSxXQUFZQyxLQUFNLEdBQUlDLElBQUssR0FBSUMsT0FBUSxLQUN6QyxXQUFqQixFQUFPUixHQUNKQyxFQUNJQSxFQUFhRCxFQUFNRyxRQUVmLHdCQUFDLFVBQU0sQ0FDSE0sUUFBU1QsRUFBTUcsT0FBT00sUUFDdEJDLFdBQVlWLEVBQU1HLE9BQU9PLFdBQ3pCQyxhQUFjWCxFQUFNRyxPQUFPUSxlQUd2QyxTLHduRENuQnBCLGNBRUEsV0FzQ0EsVUFoQ0ssU0FBQyxHQUFnRCxJQUE5Q1gsRUFBOEMsRUFBOUNBLE1BQU9ZLEVBQXVDLEVBQXZDQSxPQUFRQyxFQUErQixFQUEvQkEsZ0JBQWlCWCxFQUFjLEVBQWRBLFNBQWMsSUFDbEIsRUFBQVksVUFBUyxHQURTLEdBQzNDQyxFQUQyQyxLQUNqQ0MsRUFEaUMsS0FNNUNDLEVBQXFCLFVBQzNCLE9BQU8sZ0RBQ0ZmLEVBQ0FGLEVBQU1rQixTQUNILCtCQUNJZCxNQUFPLENBQ0hDLFNBQVUsV0FDVmMsT0FBUSxPQUNSQyxPQUFRTCxFQUFXLFFBQVUsRUFDN0JQLE9BQVEsS0FDUm5CLE1BQU8sT0FDUEMsT0FBUXlCLEVBQVcsT0FBUyxTQUdoQyx3QkFBQ0UsRUFBa0IsQ0FDZkwsT0FBUUEsRUFDUlMsV0FwQkcsU0FBQ0MsR0FDaEJWLEVBQU9VLEVBQU8sUUFBVSxRQUN4Qk4sRUFBWU0sSUFtQkFDLFlBQWFSLEVBQ2JTLGVBQWdCeEIsRUFBTWtCLFFBQ3RCTCxnQkFBaUJBLEdBQW1CYixFQUFNeUIsdUIsa0tDakM5RCxjQUNBLFdBTUEsVUFKZ0IsV0FDWixPQUFPLHdCQUFDLFVBQVUsUSxnTkNKdEIsY0FDQSxXQUNBLFdBQ0EsV0FDQSxXQUNBLFdBRWEsRUFBQUMsT0FBUyxXQUNwQixPQUFPLHdCQUFDLFVBQVMsT0FFTixFQUFBQyxNQUFRLFdBQ25CLE9BQU8sd0JBQUMsVUFBUyxPQUVOLEVBQUFDLEtBQU8sV0FDbEIsT0FBTyx3QkFBQyxVQUFPLE9BRUosRUFBQUMsS0FBTyxXQUNsQixPQUFPLHdCQUFDLFVBQU8sT0FFSixFQUFBQyxNQUFRLFdBQ25CLE9BQU8sd0JBQUMsVUFBUSxRLCszRENwQmxCLGNBUUEsVUFDQSxVQUNBLFVBQ0EsUUFDQSxRQUNBLFVBQ0EsVUFFTUMsRUFBb0IsU0FBVUMsR0FDbEMsSUFBSUMsRUFBWUQsRUFBTUMsVUFDbEJELEVBQU1DLFVBQVVDLE9BQU8sYUFDdkIsWUFDQUMsRUFBcUIsQ0FDdkI5QyxNQUFPMkMsRUFBTTNDLE1BQ2JDLE9BQVEwQyxFQUFNMUMsT0FDZDhDLE9BQVFKLEVBQU1JLE9BQ2RqQyxPQUFRNkIsRUFBTTdCLE9BQ2RrQyxxQkFBc0JMLEVBQU1LLHFCQUM1QkMsWUFBYU4sRUFBTU0sWUFDbkJDLEtBQU1QLEVBQU1PLEtBQ1puRCxnQkFBaUI0QyxFQUFNNUMsZ0JBQ3ZCb0QsU0FBVVIsRUFBTVEsU0FDaEJDLGFBQWNULEVBQU1TLGFBQ3BCQyxhQUFjVixFQUFNVSxhQUNwQkMsV0FBWVgsRUFBTVcsV0FDbEJDLGdCQUFpQlosRUFBTVksZ0JBQ3ZCQyxtQkFBb0JiLEVBQU1hLG1CQUMxQkMsZUFBZ0JkLEVBQU1jLGdCQW5CdUMsSUFxQmpDLEVBQUFoQyxTQUErQixDQUMzRHJCLFFBQVNzRCxFQUFnQmYsRUFBTXZDLFFBQVN3QyxLQXRCcUIsR0FxQnhEeEMsRUFyQndELEtBcUIvQ3VELEVBckIrQyxLQTRCL0QsT0FKQSxFQUFBQyxXQUFVLFdBQ1JELEVBQVcsQ0FBRXZELFFBQVNzRCxFQUFnQmYsRUFBTXZDLFFBQVN3QyxPQUNwRCxDQUFDRCxFQUFNdkMsUUFBU3VDLEVBQU1DLFlBR3ZCLHdCQUFDLFVBQWNpQixTQUFRLENBQUM5RSxNQUFPK0QsR0FDN0Isd0JBQUMsVUFBZWUsU0FBUSxDQUFDOUUsTUFBT3FCLEdBQzlCLHdCQUFDLFVBQVMsU0FNWnNELEVBQWtCLFNBQ3RCdEQsRUFDQXdDLEdBRUEsT0FBT3hDLEVBQVEwRCxLQUFJLFNBQUNqRSxHQUNsQixJQUFJYyxFQUFlLEdBRUYsaUJBQU5kLEdBQ1RjLEVBQU1vRCxJQUFNbEUsRUFDWmMsRUFBTXFELEtBQU8sU0FDUyxXQUFiLEVBQU9uRSxLQUNoQmMsRUFBUW5DLE9BQU95RixPQUFPdEQsRUFBT2QsSUFHL0IsSUFBSXFFLEVBQVcsRUFBQUMsWUFBWXhELEVBQU9pQyxHQUdsQyxPQUZBakMsRUFBTXlELGdCQUFrQnpELEVBQU0wRCxRQUM5QjFELEVBQU0wRCxRQUFVSCxFQUNUdkQsTUFJWCtCLEVBQWtCNEIsYUFBZSxDQUMvQnRFLE1BQU8sT0FDUEMsT0FBUSxJQUNSRixnQkFBaUIsS0FHTixFQUFBd0UsV0FBYSxVQUNiLEVBQUFDLFlBQWMsVUFFM0IsVUFBZTlCLEcsd25EQ25GZixjQUNBLFVBQ0EsVUFDQSxVQUNBLFdBQ0EsV0FNQSw2QkFDb0MsRUFBQWpCLFNBQWlCLEdBRHJELEdBQ1NuQixFQURULEtBQ29CbUUsRUFEcEIsU0FFNEIsRUFBQWhELFVBQWtCLEdBRjlDLEdBRVNoQixFQUZULEtBRWdCaUUsRUFGaEIsU0FHMEMsRUFBQWpELFVBQWtCLEdBSDVELEdBR1NqQixFQUhULEtBR3VCbUUsRUFIdkIsU0FJNEMsRUFBQWxELFNBQWlCLEdBSjdELEdBSVNsQixFQUpULEtBSXdCcUUsRUFKeEIsS0FNTUMsRUFBYyxFQUFBQyxTQUNkQyxFQUFZLEVBQUFELFFBQWdCLEdBUGxDLEVBa0JNLEVBQUFFLFdBQXNCLFdBUnhCaEYsRUFWSixFQVVJQSxNQUNBQyxFQVhKLEVBV0lBLE9BQ0FpRCxFQVpKLEVBWUlBLEtBQ0FFLEVBYkosRUFhSUEsYUFFQUksR0FmSixFQWNJTCxTQWRKLEVBZUlLLG9CQUNBQyxFQWhCSixFQWdCSUEsZUFHTXJELEVBQVksRUFBQTRFLFdBQW9DLFdBQWhENUUsUUFFUixFQUFBd0QsV0FBVSxXQUNvQixpQkFBakJSLElBQ0xBLEdBQWdCLEdBQUtBLEVBQWVoRCxFQUFRNkUsT0FDOUNDLEdBQW9CLGtCQUFNOUIsS0FFMUIrQixRQUFRQyxNQUNOLDZGQUNBaEMsTUFJTCxDQUFDQSxJQVFKLEVBQUFRLFdBQVUsV0FFUixHQURtQyxvQkFBWHlCLFFBQTBCQSxPQUFPQyxVQUd6QixrQkFBdkI5QixHQUNQQSxFQUdBLE9BREE4QixTQUFTQyxpQkFBaUIsVUFBV0MsR0FDOUIsV0FDTEYsU0FBU0csb0JBQW9CLFVBQVdELE1BRzNDLENBQUNoQyxJQUdKLEVBQUFJLFdBQVUsV0FDUixPQUFPLFdBQ0xtQixFQUFVVyxTQUFVLEtBRXJCLElBRUgsSUFBTUYsRUFBZ0IsU0FBQ0csR0FDUCxjQUFWQSxFQUFFdEcsSUFDSnVHLElBQ21CLGVBQVZELEVBQUV0RyxLQUNYcUIsS0FJRW1GLEVBQWMsU0FBQ3RFLEVBQWdCZixHQUNuQ2tFLEVBQW9CLFVBQVhuRCxHQUNUb0QsSUFBa0JuRSxJQUdkMEUsRUFBc0IsU0FBQ1ksR0FDM0JyQixFQUFhcUIsR0FDYkQsRUFBWSxTQUFTLElBR2pCRCxFQUFXLFdBQ2ZWLEdBQW9CLFNBQUNhLEdBQUQsT0FBV0EsRUFBTyxFQUFJQSxFQUFPLEVBQUlBLE1BR2pEckYsRUFBTyxXQUNQcUUsRUFBVVcsVUFDUnhDLEVBQ0Y4QyxJQUVBQyxNQUtBRCxFQUEyQixXQUMvQmQsR0FBb0IsU0FBQ2EsR0FBRCxPQUFXQSxFQUFPLEdBQUszRixFQUFRNkUsV0FHL0NnQixFQUFvQixXQUN4QmYsR0FBb0IsU0FBQ2EsR0FDbkIsT0FBSUEsRUFBTzNGLEVBQVE2RSxPQUFTLEVBQVVjLEVBQU8sRUFDdENBLE1BSUxHLEVBQWdCLFNBQUNQLEdBQ3JCQSxFQUFFbEMsaUJBQ0ZvQixFQUFZYSxRQUFVUyxZQUFXLFdBQy9CTixFQUFZLFdBQ1gsTUFHQ08sRUFBVSxTQUFDcEMsR0FBRCxPQUFrQixTQUNoQzJCLEdBRUFBLEVBQUVsQyxpQkFDRm9CLEVBQVlhLFNBQVdXLGFBQWF4QixFQUFZYSxTQUM1Q2pGLEVBQ0ZvRixFQUFZLFFBRUgsU0FBVDdCLEVBQWtCdEQsSUFBU2tGLE1BUS9CLE9BQ0UsK0JBQ0U3RSxNQUFLLCtCQUNBdUYsRUFBT0MsV0FFUCxDQUFFdkcsUUFBT0MsWUFHZCx3QkFBQyxVQUFnQjRELFNBQVEsQ0FDdkI5RSxNQUFPLENBQ0x5QixhQUFjQSxFQUNkRCxjQUFlQSxFQUNmRCxZQUNBRyxRQUNBQyxTQUdGLHdCQUFDLFVBQWEsT0FFaEIsd0JBQUMsVUFBSyxDQUNKYSxPQUFRc0UsRUFDUnJGLGFBQWNBLEVBQ2RnRyxVQUFXL0YsRUFDWEUsTUFBT1AsRUFBUUUsR0FDZm1HLGlCQTVCbUIsU0FBQ0MsR0FDeEI5QixFQUE0QixJQUFYOEIsT0E2QmJqRCxHQUNBLCtCQUFLMUMsTUFBT3VGLEVBQU9LLFNBQ2pCLCtCQUNFNUYsTUFBTyxDQUFFZixNQUFPLE1BQU9tQixPQUFRLEtBQy9CeUYsYUFBY1YsRUFDZFcsV0FBWVQsRUFBUSxZQUNwQlUsWUFBYVosRUFDYmEsVUFBV1gsRUFBUSxjQUVyQiwrQkFDRXJGLE1BQU8sQ0FBRWYsTUFBTyxNQUFPbUIsT0FBUSxLQUMvQnlGLGFBQWNWLEVBQ2RXLFdBQVlULEVBQVEsUUFDcEJVLFlBQWFaLEVBQ2JhLFVBQVdYLEVBQVEsYUFRL0IsSUFBTUUsRUFBUyxDQUNiQyxVQUFXLENBQ1RTLFFBQVMsT0FDVEMsY0FBZSxTQUNmQyxXQUFZLE9BQ1psRyxTQUFVLFlBRVoyRixRQUFTLENBQ1AzRixTQUFVLFdBQ1ZmLE9BQVEsVUFDUkQsTUFBTyxVQUNQZ0gsUUFBUyxVLGlyQkNyTWIsY0FFQSxVQXNDTVYsRUFBUyxDQUNkM0YsTUFBTyxDQUNOcUcsUUFBUyxPQUNUaEcsU0FBVSxXQUNWbUcsU0FBVSxTQUNWQyxXQUFZLFVBRWJDLGFBQWMsQ0FDYnJILE1BQU8sT0FDUHNILFNBQVUsT0FDVkMsVUFBVyxPQUNYekYsT0FBUSxTQUlWLFVBbkRjLFNBQUNhLEdBQ2QsSUFlSzZFLEVBQ0FDLEVBaEJDQyxFQUFnQixFQUFBMUMsV0FDckIsV0FHT2hGLEVBQStDMEgsRUFBL0MxSCxNQUFPQyxFQUF3Q3lILEVBQXhDekgsT0FBUThDLEVBQWdDMkUsRUFBaEMzRSxPQUFRakMsRUFBd0I0RyxFQUF4QjVHLE9BQVFtQyxFQUFnQnlFLEVBQWhCekUsWUFFakMwRSxFQUF5QixTQUFDM0QsRUFBYzRELEdBQzdDLE9BQVE1RCxHQUNQLElBQUssd0JBRUosT0FEQXJCLEVBQU04RCxpQkFBaUJtQixFQUFLbEIsVUFDckIsQ0FBRW1CLElBQUssUUFnQmpCLE9BQ0MsK0JBQ0M5RyxNQUFLLCtCQUFPdUYsRUFBTzNGLE9BQUssQ0FBRVgsTUFBT0EsRUFBT0MsT0FBUUEsTUFiN0N1SCxFQUFlN0UsRUFBTWhDLE1BQU0wRCxRQUMzQm9ELEVBQVMsQ0FBRXpILFFBQU9DLFNBQVE4QyxTQUFRakMsU0FBUW1DLGVBQ3ZDLHdCQUFDdUUsRUFBWSxDQUNuQmpHLE9BQVFvQixFQUFNcEIsT0FDZDRCLFNBQVVSLEVBQU02RCxVQUNoQjdGLE1BQU9nQyxFQUFNaEMsTUFDYjhHLE9BQVFBLEVBQ1JLLGVBQWdCSCxRLHduREMzQm5CLGNBQ0EsV0FFQSxVQUNBLFVBQ0EsVUFFQSxVQUFlLFdBQUssUUFDVSxFQUFBbEcsU0FBaUIsR0FEM0IsR0FDVHNHLEVBRFMsS0FDRkMsRUFERSxPQUVrQyxFQUFBaEQsV0FBNEIsV0FBdEUxRSxFQUZRLEVBRVJBLFVBQVdJLEVBRkgsRUFFR0EsS0FBTUgsRUFGVCxFQUVTQSxjQUFlRSxFQUZ4QixFQUV3QkEsTUFGeEIsRUFHdUQsRUFBQXVFLFdBQXNCLFdBQXJGakYsRUFIUSxFQUdSQSxnQkFBaUJ1RCxFQUhULEVBR1NBLFdBQVlELEVBSHJCLEVBR3FCQSxhQUFjRSxFQUhuQyxFQUdtQ0EsZ0JBQzNDbkQsRUFBWSxFQUFBNEUsV0FBb0MsV0FBaEQ1RSxRQUVSLEVBQUF3RCxXQUFVLFdBQ05vRSxFQUFTLEtBQ1YsQ0FBQzFILEVBQVdGLElBRWYsRUFBQXdELFdBQVUsV0FJTixPQUhLbkQsSUFDRHdILEVBQWlCdkMsUUFBVXdDLHNCQUFzQkMsSUFFOUMsV0FDSEMscUJBQXFCSCxFQUFpQnZDLFlBRTNDLENBQUNwRixFQUFXRyxJQUVmLElBQUl3SCxFQUFtQixFQUFBbkQsU0FFbkJ1RCxFQUFZTixFQUNWSSxFQUFpQixTQUFqQkEsSUFDZ0IsSUFBZEUsR0FBaUJDLElBQ3JCTixHQUFTLFNBQUNELEdBQ04sSUFBTVEsRUFBV0MsSUFFakIsT0FEQUgsRUFBWU4sRUFBUyxLQUFRUSxFQUFXLElBQVEsSUFDekNSLEVBQVMsS0FBUVEsRUFBVyxJQUFRLE9BRTNDRixFQUFZLElBQ1pKLEVBQWlCdkMsUUFBVXdDLHNCQUFzQkMsSUFFakRNLElBQ0luSSxJQUFjRixFQUFRNkUsT0FBUyxHQUMvQnlELElBRUpOLHFCQUFxQkgsRUFBaUJ2QyxTQUN0Q2hGLE1BSUY0SCxFQUFxQixXQUN2QmpGLEdBQWdCQSxFQUFhL0MsRUFBV0YsRUFBUUUsS0FHOUNtSSxFQUFtQixXQUNyQm5GLEdBQWNBLEVBQVdoRCxFQUFXRixFQUFRRSxLQUcxQ29JLEVBQXdCLFdBQzFCbkYsR0FBbUJBLEVBQWdCakQsRUFBV0YsSUFHNUNvSSxFQUFxQixXQUN2QixNQUFnQyxVQUE1QnBJLEVBQVFFLEdBQVcwRCxLQUF5QnpELEVBQ0wsaUJBQWhDSCxFQUFRRSxHQUFXb0csU0FBOEJ0RyxFQUFRRSxHQUFXb0csU0FDeEUzRyxHQUdYLE9BQ0ksK0JBQUtnQixNQUFPdUYsRUFBT3FDLGFBQ2R2SSxFQUFRMEQsS0FBSSxTQUFDOEUsRUFBRzlLLEdBQUosT0FDVCx3QkFBQyxVQUFRLENBQ0x1QixJQUFLdkIsRUFDTGlLLE1BQU9BLEVBQ1AvSCxNQUFPLEVBQUlJLEVBQVE2RSxPQUNuQjRELE9BQVEvSyxJQUFNd0MsRUFBWSxFQUFLeEMsRUFBSXdDLEVBQVksRUFBSSxTQU12RSxJQUFNZ0csRUFBUyxDQUNYcUMsWUFBYSxDQUNUM0IsUUFBUyxPQUNUOEIsZUFBZ0IsU0FDaEJ4QixTQUFVLE9BQ1Z5QixTQUFVLE1BQ1YvSCxTQUFVLFdBQ1ZoQixNQUFPLE1BQ1BnSixRQUFTLEVBQ1RDLFdBQVksRUFDWkMsVUFBVyxTQUNYL0gsT0FBUSxLQUNSZ0ksT0FBUSxpQyxpckJDM0ZoQixjQUVBLFdBQ0EsVUFFQSxVQUFlLFNBQUN4RyxHQUF3QixNQUNKLEVBQUFxQyxXQUE0QixXQUFwRHhFLEVBRDRCLEVBQzVCQSxhQUFjQyxFQURjLEVBQ2RBLE1BZWRULEVBQWtCMkMsRUFBbEIzQyxNQUFPNkksRUFBV2xHLEVBQVhrRyxPQUNmLE9BQ0ksd0JBQUMsVUFBZSxDQUFDN0ksTUFBT0EsRUFBT1MsTUFBT0EsRUFBT0QsYUFBY0EsR0FDdkQsK0JBQ0lPLE1BQUssK0JBakJRLFNBQUMsR0FDdEIsT0FEb0MsRUFBWjhILFFBRXBCLEtBQUssRUFDRCxNQUFPLENBQUU3SSxNQUFPLFFBQ3BCLEtBQUssRUFDRCxNQUFPLENBQUVvSixVQUFXLFVBQUYsT0FBWXpHLEVBQU1vRixNQUFRLElBQTFCLE1BQ3RCLEtBQUssRUFFTCxRQUNJLE1BQU8sQ0FBRS9ILE1BQU8sSUFRSnFKLENBQWlCLENBQUVSLFlBQWN2QyxFQUFPZ0QsV0FLcEUsSUFBTWhELEVBQWMsQ0FDaEJnRCxNQUFPLENBQ0hwQyxXQUFZLE9BQ1pqSCxPQUFRLE9BQ1JxSCxTQUFVLE9BQ1ZpQyxhQUFjLEVBQ2RDLGdCQUFpQixjQUVqQkMseUJBQTBCLFNBQzFCQyxzQkFBdUIsU0FDdkJDLHFCQUFzQixTQUN0QkMsbUJBQW9CLFNBRXBCQyxrQkFBbUIsSUFDbkJDLGVBQWdCLElBQ2hCQyxjQUFlLElBQ2ZDLFlBQWEsTyxrS0M5Q3JCLGNBU01DLEVBQTBCLFNBQUMsR0FBRCxJQUFHakssRUFBSCxFQUFHQSxNQUFPUyxFQUFWLEVBQVVBLE1BQU9ELEVBQWpCLEVBQWlCQSxhQUFqQixNQUFxQyxDQUNqRVIsTUFBTyxHQUFGLE9BQWEsSUFBUkEsRUFBTCxLQUNMa0ssUUFBU3pKLElBQVVELEVBQWUsRUFBSSxJQUdwQzhGLEVBQVMsQ0FDWDZELFNBQVUsQ0FDTmxLLE9BQVEsRUFDUnFILFNBQVUsT0FDVkosV0FBWSxPQUNacEYsT0FBUSxFQUNSeUgsYUFBYyxFQUNkYSxXQUFZLDhCQUlwQixVQXRCd0IsU0FBQ3pILEdBQUQsT0FDcEIsK0JBQUs1QixNQUFLLCtCQUFPdUYsRUFBTzZELFVBQWFGLEVBQXdCdEgsS0FDeERBLEVBQU05QixZLG1HQ0hGLEVBQUFzRCxZQUFjLFNBQUN4RCxFQUFjaUMsR0FDdEMsSUFBSXlILEVBQVd6SCxFQUFVa0IsS0FBSSxTQUFBbEYsR0FDekIsc0NBQ09BLEdBQUMsQ0FDSjBMLGFBQWMxTCxFQUFFMkwsT0FBTzVKLFFBRTVCd0ksUUFBTyxTQUFBdkssR0FBQyxPQUFJQSxFQUFFMEwsYUFBYUUsYUFFOUIsT0FEQUgsRUFBU0ksTUFBSyxTQUFDQyxFQUFHQyxHQUFKLE9BQVVBLEVBQUVMLGFBQWFNLFNBQVdGLEVBQUVKLGFBQWFNLFlBQzFEUCxFQUFTLEdBQUduRyxXLHFMQ1Z2QixlQUNBLFdBQ0EsV0FDQSxXQUVhLEVBQUF0QixVQUFZLENBQUMsVUFBTyxVQUFPLFVBQWlCLFksbXBEQ0x6RCxjQUNBLFVBRUEsT0FDQSxVQUNBLFVBRWEsRUFBQXNCLFNBQXFCLFlBQXdDLElBQXJDdkQsRUFBcUMsRUFBckNBLE1BQU9ZLEVBQThCLEVBQTlCQSxPQUFRNEIsRUFBc0IsRUFBdEJBLFNBQVVzRSxFQUFZLEVBQVpBLE9BQVksSUFDNUNvRCxFQUFNcEosVUFBUyxHQUQ2QixHQUNqRXFKLEVBRGlFLEtBQ3pEQyxFQUR5RCxLQUVoRS9LLEVBQXVDeUgsRUFBdkN6SCxNQUFPQyxFQUFnQ3dILEVBQWhDeEgsT0FBUThDLEVBQXdCMEUsRUFBeEIxRSxPQUFRRSxFQUFnQndFLEVBQWhCeEUsWUFDM0IrSCxFQUFpQixPQUFILHdCQUNiMUUsRUFBT2UsY0FDTnBFLEdBQWUsSUFnQnJCLE9BQ0UsZ0JBQUMsVUFBVSxDQUFDdEMsTUFBT0EsRUFBT0MsYUFBYzZHLEVBQU8zRyxRQUM3QyxnQkFBQyxVQUFXLENBQUNILE1BQU9BLEVBQU9ZLE9BQVFBLEdBQ2pDLDJCQUNFLHVCQUFLUixNQUFPdUYsRUFBTzJFLGtCQUNoQjlILEVBQ0MsdUJBQUtwQyxNQUFPdUYsRUFBTzRFLGFBQWNDLFFBVjNCLFdBQ2hCNUosRUFBTyxRQUFRLEtBVUgsdUJBQUtSLE1BQU8sQ0FBRWlJLFFBQVMsY0FBZWxILE9BQVEsZ0JBQzVDLGdCQUFDLEVBQUFVLEtBQUksUUFJVCx1QkFBS3pCLE1BQU91RixFQUFPNEUsYUFBY0MsUUFwQjNCLFdBQ2hCNUosRUFBTyxTQUFTLEtBb0JKLHVCQUFLUixNQUFPLENBQUVpSSxRQUFTLGNBQWVsSCxPQUFRLGdCQUM1QyxnQkFBQyxFQUFBVyxNQUFLLFNBTWQsdUJBQUsxQixNQUFPaUssRUFBZ0JJLElBQUt6SyxFQUFNb0QsSUFBS3NILE9BakNoQyxXQUNsQk4sR0FBVSxHQUNWeEosRUFBTyxZQWdDQ3VKLEdBQ0EsdUJBQ0UvSixNQUFPLENBQ0xmLE1BQU9BLEVBQ1BDLE9BQVFBLEVBQ1JlLFNBQVUsV0FDVkMsS0FBTSxFQUNOQyxJQUFLLEVBQ0xnRyxXQUFZLHFCQUNaL0YsT0FBUSxFQUNSNkYsUUFBUyxPQUNUOEIsZUFBZ0IsU0FDaEIxQixXQUFZLFNBQ1prRSxNQUFPLFNBR1J2SSxHQUFVLGdCQUFDLFVBQU8sV0FTakMsSUFBTXVELEVBQVMsQ0FDYjNGLE1BQU8sQ0FDTHFHLFFBQVMsT0FDVGhHLFNBQVUsV0FDVm1HLFNBQVUsVUFFWkUsYUFBYyxDQUNackgsTUFBTyxPQUNQc0gsU0FBVSxPQUNWQyxVQUFXLE9BQ1h6RixPQUFRLFFBRVZtSixpQkFBa0IsQ0FDaEJqSyxTQUFVLFdBQ1ZlLE9BQVEsT0FDUndKLE1BQU8sT0FDUHZFLFFBQVMsT0FDVEMsY0FBZSxTQUNmNkIsZUFBZ0IsU0FDaEIzSCxPQUFRLElBQ1JsQixPQUFRLFNBRVZpTCxhQUFjLENBQ1psTCxNQUFPLE9BQ1BDLE9BQVEsT0FDUnNKLGFBQWMsT0FDZHJDLFdBQVksVUFDWmdELFFBQVMsR0FDVGxELFFBQVMsT0FDVEksV0FBWSxTQUNaMEIsZUFBZ0IsU0FDaEIwQyxPQUFRLFlBSUMsRUFBQWpCLE9BQWlCLFNBQUM1SixHQUM3QixNQUFPLENBQ0w2SixZQUFZN0osRUFBTTBELFNBQWExRCxFQUFNcUQsTUFBdUIsVUFBZnJELEVBQU1xRCxNQUNuRDRHLFNBQVUsSUFJZCxVQUFlLENBQ2IxRyxTQUFBLEVBQUFBLFNBQ0FxRyxPQUFBLEVBQUFBLFMsMm5CQ3JIYyx3QkFDZGpFLE9BRGMsSUFFWDNELEVBRlcsdUJBR1YsMkJBQUszQyxNQUFNLEtBQUtDLE9BQU8sS0FBS3dMLE1BQU0sNkJBQTZCQyxPQUFPLFFBQVcvSSxHQUFPLHVCQUFHZ0osS0FBSyxPQUFPQyxTQUFTLFVBQVVDLFlBQVksS0FBSSw0QkFBUUMsR0FBRyxLQUFLQyxHQUFHLEtBQUtuTixFQUFFLEtBQUksNkJBQVNvTixjQUFjLElBQUlDLE1BQU0sS0FBS0MsSUFBSSxPQUFPQyxPQUFPLFFBQVFDLFNBQVMsU0FBU0MsU0FBUyxPQUFPQyxXQUFXLHVCQUF1QkMsWUFBWSxlQUFlLDZCQUFTUCxjQUFjLGlCQUFpQkMsTUFBTSxLQUFLQyxJQUFJLE9BQU9DLE9BQU8sT0FBT0MsU0FBUyxTQUFTQyxTQUFTLE9BQU9DLFdBQVcsc0JBQXNCQyxZQUFZLGdCQUF3Qiw0QkFBUVQsR0FBRyxLQUFLQyxHQUFHLEtBQUtuTixFQUFFLEtBQUksNkJBQVNvTixjQUFjLElBQUlDLE1BQU0sUUFBUUMsSUFBSSxPQUFPQyxPQUFPLFFBQVFDLFNBQVMsU0FBU0MsU0FBUyxPQUFPQyxXQUFXLHVCQUF1QkMsWUFBWSxlQUFlLDZCQUFTUCxjQUFjLGlCQUFpQkMsTUFBTSxRQUFRQyxJQUFJLE9BQU9DLE9BQU8sT0FBT0MsU0FBUyxTQUFTQyxTQUFTLE9BQU9DLFdBQVcsc0JBQXNCQyxZQUFZLG9CLDJuQkNIOTBCLHdCQUNkakcsT0FEYyxJQUVYM0QsRUFGVyx1QkFHViwyQkFBSzNDLE1BQU0sS0FBS0MsT0FBTyxLQUFLMEwsS0FBSyxPQUFPRixNQUFNLDhCQUFpQzlJLEdBQU8sNEJBQVF1SCxRQUFRLEtBQUs0QixHQUFHLEtBQUtDLEdBQUcsS0FBS25OLEVBQUUsS0FBSytNLEtBQUssZSwybkJDSDdILHdCQUNkckYsT0FEYyxJQUVYM0QsRUFGVyx1QkFHViwyQkFBSzNDLE1BQU0sS0FBS0MsT0FBTyxLQUFLdU0sUUFBUSxZQUFZYixLQUFLLE9BQU9GLE1BQU0sOEJBQWlDOUksR0FBTywwQkFBTXZFLEVBQUUsazNCQUFrM0J1TixLQUFLLFksMm5CQ0gvOUIsd0JBQ2RyRixPQURjLElBRVgzRCxFQUZXLHVCQUdWLDJCQUFLM0MsTUFBTSxLQUFLQyxPQUFPLEtBQUt1TSxRQUFRLFlBQVliLEtBQUssT0FBT0YsTUFBTSw4QkFBaUM5SSxHQUFPLDBCQUFNdkUsRUFBRSw0ZEFBNGR1TixLQUFLLFksMm5CQ0h6a0Isd0JBQ2RyRixPQURjLElBRVgzRCxFQUZXLHVCQUdWLDJCQUFLM0MsTUFBTSxLQUFLQyxPQUFPLEtBQUt1TSxRQUFRLFlBQVliLEtBQUssT0FBT0YsTUFBTSw4QkFBaUM5SSxHQUFPLDBCQUFNdkUsRUFBRSx5TUFBeU11TixLQUFLLFksMm5CQ0h0VCx3QkFDZHJGLE9BRGMsSUFFWDNELEVBRlcsdUJBR1YsMkJBQUszQyxNQUFNLEtBQUtDLE9BQU8sS0FBS3VNLFFBQVEsWUFBWWIsS0FBSyxPQUFPRixNQUFNLDhCQUFpQzlJLEdBQU8sMEJBQU12RSxFQUFFLDRTQUE0U3VOLEtBQUssWSxrS0NKemEsY0FZTXJGLEVBQVMsQ0FDWG1HLEtBQU0sQ0FDRnpGLFFBQVMsT0FDVEksV0FBWSxVQUVoQnNGLElBQUssQ0FDRDFNLE1BQU8sR0FDUEMsT0FBUSxHQUNSc0osYUFBYyxHQUNkb0QsWUFBYSxHQUNieEQsT0FBUSw0Q0FDUnlELE9BQVEsc0NBRVpDLEtBQU0sQ0FDRjdGLFFBQVMsT0FDVEMsY0FBZSxTQUNma0MsT0FBUSw2Q0FFWi9ILFFBQVMsQ0FDTDBMLFNBQVUsT0FDVnhCLE1BQU8sMkJBQ1B4SixPQUFRLEVBQ1JpTCxhQUFjLEdBRWxCMUwsV0FBWSxDQUNSeUwsU0FBVSxTQUNWeEIsTUFBTywyQkFDUHhKLE9BQVEsSUFJaEIsVUF4Q2UsU0FBQyxHQUFELElBQUdSLEVBQUgsRUFBR0EsYUFBY0YsRUFBakIsRUFBaUJBLFFBQVNDLEVBQTFCLEVBQTBCQSxXQUExQixPQUNYLCtCQUFLTixNQUFPdUYsRUFBT21HLE1BQ2RuTCxHQUFnQiwrQkFBS1AsTUFBT3VGLEVBQU9vRyxJQUFLdEIsSUFBSzlKLElBQzlDLGdDQUFNUCxNQUFPdUYsRUFBT3VHLE1BQ2hCLDZCQUFHOUwsTUFBT3VGLEVBQU9sRixTQUFVQSxHQUMzQiw2QkFBR0wsTUFBT3VGLEVBQU9qRixZQUFhQSxPLGlyQkNSMUMsY0FDQSxVQUlBLG1CQUFnQ3NCLEdBQzVCLElBQU1xSyxFQUFpQnJLLEVBQU1SLGVBQ3ZCOEssRUFBa0J0SyxFQUFNbkIsZ0JBRXRCZ0MsRUFBdUIsRUFBQXdCLFdBQXNCLFdBQTdDeEIsbUJBRVIsRUFBQUksV0FBVSxXQUVOLEdBRG9DLG9CQUFYeUIsUUFBMEJBLE9BQU9DLFVBQ1gsa0JBQXZCOUIsR0FBb0NBLEVBRXhELE9BREE4QixTQUFTQyxpQkFBaUIsVUFBV0MsR0FDOUIsV0FDSEYsU0FBU0csb0JBQW9CLFVBQVdELE1BR2pELENBQUNoQyxJQUVKLElBQU1nQyxFQUFnQixTQUFDRyxHQUNMLFlBQVZBLEVBQUV0RyxLQUNGc0csRUFBRWxDLGlCQUNGZCxFQUFNWCxZQUFXLElBRUYsY0FBVjJELEVBQUV0RyxLQUFpQyxXQUFWc0csRUFBRXRHLE1BQ2hDc0csRUFBRWxDLGlCQUNGZCxFQUFNWCxZQUFXLEtBSXpCLE9BQ0lXLEVBQU1ULFlBQ0EsK0JBQUtuQixNQUFPdUYsRUFBTzRHLGlCQUNqQix3QkFBQ0YsRUFBYyxDQUFDRyxNQUFPLGtCQUFNeEssRUFBTVgsWUFBVyxPQUdqRGlMLEVBQWtCLHdCQUFDQSxFQUFlLENBQUMxTCxPQUFRb0IsRUFBTXBCLE9BQVFTLFdBQVlXLEVBQU1YLGFBQWlCLCtCQUFLakIsTUFBT3VGLEVBQU96RSxRQUFTc0osUUFBUyxTQUFDeEYsR0FDL0hBLEVBQUVsQyxpQkFDRmtDLEVBQUV5SCxrQkFDRnpLLEVBQU1YLFlBQVcsS0FFakIsZ0NBQU1qQixNQUFPdUYsRUFBTytHLGFBQVcsS0FDL0IsZ0NBQU10TSxNQUFPdUYsRUFBT2dILGFBQVcsY0FNL0MsSUFBTWhILEVBQWMsQ0FDaEJ6RSxRQUFTLENBQ0w1QixPQUFRLE9BQ1JpSCxXQUFZLHdEQUNaRixRQUFTLE9BQ1RDLGNBQWUsU0FDZmpILE1BQU8sT0FDUG9ILFdBQVksU0FDWjBCLGVBQWdCLFdBQ2hCL0csT0FBUSxHQUVabUwsZ0JBQWlCLENBQ2JsTSxTQUFVLFdBQ1ZFLElBQUssRUFDTEQsS0FBTSxFQUNOakIsTUFBTyxPQUNQQyxPQUFRLE9BQ1JzTixVQUFXLGFBQ1hwTSxPQUFRLE9BRVptTSxZQUFhLENBQ1RoQyxNQUFPLFFBQ1BrQyxVQUFXLFNBQ1hDLGNBQWUsUUFDZlYsYUFBYyxRQUNkVyxjQUFlLGFBQ2Z4RCxRQUFTLElBQ1Q0QyxTQUFVLFFBQ1YxQyxXQUFZLDZCQUVoQmlELFlBQWEsQ0FDVC9CLE1BQU8sUUFDUGtDLFVBQVcsU0FDWEMsY0FBZSxRQUNmVixhQUFjLFFBQ2Q3QyxRQUFTLElBQ1RmLE9BQVEsNkJBQ1J1RSxjQUFlLGFBQ2Z0RCxXQUFZLDZCQUVoQnVELGFBQWMsQ0FDVjNNLFNBQVUsV0FDVm1JLE9BQVEsOEJBQ1JvQyxNQUFPLFNBQ1BySyxJQUFLLFNBQ0w0TCxTQUFVLFNBQ1Y1QyxRQUFTLE1BQ1RsQixRQUFTLFUsbXBEQ2pHakIsY0FDQSxVQUVBLE9BQ0EsVUFDQSxVQUVhLEVBQUE5RSxTQUFxQixZQU03QixJQUxIdkQsRUFLRyxFQUxIQSxNQUNBWSxFQUlHLEVBSkhBLE9BQ0E0QixFQUdHLEVBSEhBLFNBQ0FzRSxFQUVHLEVBRkhBLE9BQ0FLLEVBQ0csRUFESEEsZUFDRyxJQUN5QitDLEVBQU1wSixVQUFTLEdBRHhDLEdBQ0lxSixFQURKLEtBQ1lDLEVBRFosU0FFdUJGLEVBQU1wSixVQUFTLEdBRnRDLEdBRUltTSxFQUZKLEtBRVdDLEVBRlgsS0FHSzdOLEVBQXVDeUgsRUFBdkN6SCxNQUFPQyxFQUFnQ3dILEVBQWhDeEgsT0FBUThDLEVBQXdCMEUsRUFBeEIxRSxPQUFRRSxFQUFnQndFLEVBQWhCeEUsWUFFM0IrSCxFQUFpQixPQUFILHdCQUNiMUUsRUFBT2UsY0FDTnBFLEdBQWUsSUFHakI2SyxFQUFNakQsRUFBTS9GLE9BQXlCLE1BRXpDK0YsRUFBTWpILFdBQVUsV0FDVmtLLEVBQUlwSSxVQUNGdkMsRUFDRjJLLEVBQUlwSSxRQUFRakYsUUFFWnFOLEVBQUlwSSxRQUFRcUksT0FBWixPQUF5QixrQkFHNUIsQ0FBQzVLLElBRUosSUFBTTZLLEVBQVksV0FDaEJ6TSxFQUFPLFNBQVMsSUFHWjBNLEVBQVksV0FDaEIxTSxFQUFPLFFBQVEsSUFtQmpCLE9BQ0UsZ0JBQUMsVUFBVSxDQUFDWixNQUFPQSxFQUFPQyxhQUFjNkcsRUFBTzNHLFFBQzdDLGdCQUFDLFVBQVcsQ0FBQ0gsTUFBT0EsRUFBT1ksT0FBUUEsR0FDakMsdUJBQUtSLE1BQU91RixFQUFPNEgsZ0JBQ2pCLHVCQUFLbk4sTUFBT3VGLEVBQU8yRSxrQkFDaEIyQyxFQUNDLHVCQUFLN00sTUFBT3VGLEVBQU80RSxhQUFjQyxRQUFTLGtCQUFNMEMsR0FBUyxLQUN2RCxnQkFBQyxFQUFBdkwsTUFBSyxPQUdSLHVCQUFLdkIsTUFBT3VGLEVBQU80RSxhQUFjQyxRQUFTLGtCQUFNMEMsR0FBUyxLQUN2RCx1QkFBSzlNLE1BQU8sQ0FBRWlJLFFBQVMsY0FBZW1GLFVBQVcsUUFDL0MsZ0JBQUMsRUFBQTVMLEtBQUksUUFJVlksRUFDQyx1QkFBS3BDLE1BQU91RixFQUFPNEUsYUFBY0MsUUFBUzhDLEdBQ3hDLHVCQUFLbE4sTUFBTyxDQUFFaUksUUFBUyxjQUFlbEgsT0FBUSxnQkFDNUMsZ0JBQUMsRUFBQVUsS0FBSSxRQUlULHVCQUFLekIsTUFBT3VGLEVBQU80RSxhQUFjQyxRQUFTNkMsR0FDeEMsdUJBQUtqTixNQUFPLENBQUVpSSxRQUFTLGNBQWVsSCxPQUFRLGdCQUM1QyxnQkFBQyxFQUFBVyxNQUFLLFNBTWQseUJBQ0UyTCxJQUFLTixFQUNML00sTUFBT2lLLEVBQ1BJLElBQUt6SyxFQUFNb0QsSUFDWHNLLFVBQVUsRUFDVkMsYUFwRFUsV0FDbEJ4RyxFQUFlLHdCQUF5QixDQUFFcEIsU0FBVW9ILEVBQUlwSSxRQUFRZ0IsV0FDaEVxRSxHQUFVLEdBQ1YrQyxFQUFJcEksUUFDRHFJLE9BQ0FRLE1BQUssV0FDSmhOLEVBQU8sV0FIWCxPQUtTLFdBQ0xzTSxHQUFTLEdBQ1RDLEVBQUlwSSxRQUFRcUksT0FBWixTQUEyQixXQUN6QnhNLEVBQU8sZUEwQ0xpTixhQUFXLEVBQ1hSLFVBQVdBLEVBQ1hDLFVBQVdBLEVBQ1hMLE1BQU9BLEVBQ1BhLFVBQVEsdUJBQ1csVUFFbkIzRCxHQUNBLHVCQUNFL0osTUFBTyxDQUNMZixNQUFPQSxFQUNQQyxPQUFRQSxFQUNSZSxTQUFVLFdBQ1ZDLEtBQU0sRUFDTkMsSUFBSyxFQUNMZ0csV0FBWSxxQkFDWi9GLE9BQVEsRUFDUjZGLFFBQVMsT0FDVDhCLGVBQWdCLFNBQ2hCMUIsV0FBWSxTQUNaa0UsTUFBTyxTQUdSdkksR0FBVSxnQkFBQyxVQUFPLFdBU2pDLElBQU11RCxFQUFTLENBQ2JlLGFBQWMsQ0FDWnJILE1BQU8sT0FDUHNILFNBQVUsT0FDVkMsVUFBVyxPQUNYekYsT0FBUSxRQUVWb00sZUFBZ0IsQ0FDZGxILFFBQVMsT0FDVEksV0FBWSxTQUNaMEIsZUFBZ0IsVUFFbEJtQyxpQkFBa0IsQ0FDaEJqSyxTQUFVLFdBQ1ZlLE9BQVEsT0FDUndKLE1BQU8sT0FDUHZFLFFBQVMsT0FDVEMsY0FBZSxTQUNmNkIsZUFBZ0IsZ0JBQ2hCM0gsT0FBUSxJQUNSbEIsT0FBUSxTQUVWaUwsYUFBYyxDQUNabEwsTUFBTyxPQUNQQyxPQUFRLE9BQ1JzSixhQUFjLE9BQ2RyQyxXQUFZLFVBQ1pnRCxRQUFTLEdBQ1RsRCxRQUFTLE9BQ1RJLFdBQVksU0FDWjBCLGVBQWdCLFNBQ2hCMEMsT0FBUSxZQUlDLEVBQUFqQixPQUFpQixTQUFDNUosR0FDN0IsTUFBTyxDQUNMNkosVUFBMEIsVUFBZjdKLEVBQU1xRCxLQUNqQjRHLFNBQVUsSUFJZCxVQUFlLENBQ2IxRyxTQUFBLEVBQUFBLFNBQ0FxRyxPQUFBLEVBQUFBLFMsNG5CQzVLRixjQUdhLEVBQUFyRyxTQUFxQixZQUFzQixJQUFuQnZELEVBQW1CLEVBQW5CQSxNQUFPWSxFQUFZLEVBQVpBLE9BS3hDLE9BSkFzSixFQUFNakgsV0FBVSxXQUNackMsRUFBTyxVQUNSLENBQUNaLElBRUcsdUJBQUtJLE1BQU91RixFQUFPZSxjQUN0QixxQkFBR3RHLE1BQU91RixFQUFPdUcsTUFBSSxxQ0FJN0IsSUFBTXZHLEVBQVMsQ0FDWGUsYUFBYyxDQUNWckgsTUFBTyxPQUNQdUgsVUFBVyxPQUNYekYsT0FBUSxRQUVaK0ssS0FBTSxDQUNGVyxVQUFXLFNBQ1hsQyxNQUFPLFFBQ1B0TCxNQUFPLE1BQ1A4QixPQUFRLFNBSUgsRUFBQXlJLE9BQWlCLFdBQzFCLE1BQU8sQ0FDSEMsV0FBVyxFQUNYSSxTQUFVLElBSWxCLFVBQWUsQ0FDWDFHLFNBQUEsRUFBQUEsU0FDQXFHLE9BQUEsRUFBQUEsUyw0bkJDcENKLGNBR2EsRUFBQXJHLFNBQXFCLFNBQUN2QixHQUMvQmtJLEVBQU1qSCxXQUFVLFdBQ1pqQixFQUFNcEIsT0FBTyxVQUNkLENBQUNvQixFQUFNaEMsUUFDVixJQUFNK04sRUFBVS9MLEVBQU1oQyxNQUFNeUQsZ0JBQzVCLE9BQU8sZ0JBQUNzSyxFQUFPLGlCQUFLL0wsS0FHWCxFQUFBNEgsT0FBaUIsU0FBQzVKLEdBQzNCLE1BQU8sQ0FDSDZKLFlBQWE3SixFQUFNMEQsUUFDbkJ1RyxTQUFVLElBSWxCLFVBQWUsQ0FDWDFHLFNBQUEsRUFBQUEsU0FDQXFHLE9BQUEsRUFBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIlN0b3JpZXNcIiwgW1wiUmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiU3Rvcmllc1wiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdG9yaWVzXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fMF9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18wX187IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR2xvYmFsQ3R4IH0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxDb250ZXh0ID0ge1xuICBkZWZhdWx0SW50ZXJ2YWw6IDQwMDAsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgaGVpZ2h0OiA2NDAsXG59O1xuXG5jb25zdCBHbG9iYWxDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxHbG9iYWxDdHg+KGluaXRpYWxDb250ZXh0KTtcblxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuXHRTdG9yaWVzQ29udGV4dCBhcyBTdG9yaWVzQ29udGV4dEludGVyZmFjZSxcblx0U3RvcnksXG59IGZyb20gJy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbENvbnRleHQ6IHsgc3RvcmllczogU3RvcnlbXSB9ID0ge1xuXHRzdG9yaWVzOiBbXSxcbn07XG5cbmNvbnN0IFN0b3JpZXNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxTdG9yaWVzQ29udGV4dEludGVyZmFjZT4oXG5cdGluaXRpYWxDb250ZXh0XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yaWVzQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb2dyZXNzQ29udGV4dCB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcydcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QuY3JlYXRlQ29udGV4dDxQcm9ncmVzc0NvbnRleHQ+KHtcbiAgICBjdXJyZW50SWQ6IDAsXG4gICAgdmlkZW9EdXJhdGlvbjogMCxcbiAgICBidWZmZXJBY3Rpb246IGZhbHNlLFxuICAgIHBhdXNlOiBmYWxzZSxcbiAgICBuZXh0OiAoKSA9PiB7IH1cbn0pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN0b3J5IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5cbmNvbnN0IHdpdGhIZWFkZXI6IFJlYWN0LkZDPHsgc3Rvcnk6IFN0b3J5LCBnbG9iYWxIZWFkZXI6IEZ1bmN0aW9uIH0+ID0gKHsgc3RvcnksIGdsb2JhbEhlYWRlciwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiA8PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtzdG9yeS5oZWFkZXIgJiYgKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBsZWZ0OiAxMiwgdG9wOiAyMCwgekluZGV4OiAxOSB9fT5cbiAgICAgICAgICAgICAgICB7dHlwZW9mIHN0b3J5ID09PSBcIm9iamVjdFwiID8gKFxuICAgICAgICAgICAgICAgICAgICBnbG9iYWxIZWFkZXIgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICBnbG9iYWxIZWFkZXIoc3RvcnkuaGVhZGVyKVxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz17c3RvcnkuaGVhZGVyLmhlYWRpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YmhlYWRpbmc9e3N0b3J5LmhlYWRlci5zdWJoZWFkaW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlSW1hZ2U9e3N0b3J5LmhlYWRlci5wcm9maWxlSW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoSGVhZGVyOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRUeXBlLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFjdGlvbiwgU2VlTW9yZVByb3BzLCBTdG9yeSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xuaW1wb3J0IFNlZU1vcmUgZnJvbSBcIi4vLi4vLi4vY29tcG9uZW50cy9TZWVNb3JlXCI7XG5cbmNvbnN0IHdpdGhTZWVNb3JlOiBSZWFjdC5GQzx7XG4gICAgc3Rvcnk6IFN0b3J5LFxuICAgIGFjdGlvbjogQWN0aW9uLFxuICAgIGN1c3RvbUNvbGxhcHNlZD86IFNlZU1vcmVQcm9wc1tcImN1c3RvbUNvbGxhcHNlZFwiXVxufT4gPSAoeyBzdG9yeSwgYWN0aW9uLCBjdXN0b21Db2xsYXBzZWQsIGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBbc2hvd01vcmUsIHNldFNob3dNb3JlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB0b2dnbGVNb3JlID0gKHNob3cpID0+IHtcbiAgICAgICAgYWN0aW9uKHNob3cgPyAncGF1c2UnIDogJ3BsYXknKTtcbiAgICAgICAgc2V0U2hvd01vcmUoc2hvdyk7XG4gICAgfVxuICAgIGNvbnN0IENvbGxhcHNlZENvbXBvbmVudCA9IFNlZU1vcmU7XG4gICAgcmV0dXJuIDw+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAge3N0b3J5LnNlZU1vcmUgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogc2hvd01vcmUgPyAndW5zZXQnIDogMCxcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogc2hvd01vcmUgPyAnMTAwJScgOiAnYXV0bydcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZWRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1vcmU9e3RvZ2dsZU1vcmV9XG4gICAgICAgICAgICAgICAgICAgIHNob3dDb250ZW50PXtzaG93TW9yZX1cbiAgICAgICAgICAgICAgICAgICAgc2VlTW9yZUNvbnRlbnQ9e3N0b3J5LnNlZU1vcmV9XG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUNvbGxhcHNlZD17Y3VzdG9tQ29sbGFwc2VkIHx8IHN0b3J5LnNlZU1vcmVDb2xsYXBzZWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgIDwvPlxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2VlTW9yZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNwaW5uZXJTVkcgZnJvbSAnLi8uLi9hc3NldHMvcHVmZi5zdmcnO1xuXG5jb25zdCBTcGlubmVyID0gKCkgPT4ge1xuICAgIHJldHVybiA8U3Bpbm5lclNWRyAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaXJjbGVTVkcgZnJvbSBcIi4uLy4uL2Fzc2V0cy9JY29ucy9jaXJjbGUuc3ZnXCI7XG5pbXBvcnQgU291bmRlU1ZHIGZyb20gXCIuLi8uLi9hc3NldHMvSWNvbnMvc291bmQuc3ZnXCI7XG5pbXBvcnQgTXV0ZVNWRyBmcm9tIFwiLi4vLi4vYXNzZXRzL0ljb25zL211dGUuc3ZnXCI7XG5pbXBvcnQgUGxheVNWRyBmcm9tIFwiLi4vLi4vYXNzZXRzL0ljb25zL3BsYXkuc3ZnXCI7XG5pbXBvcnQgUGF1c2VTVkcgZnJvbSBcIi4uLy4uL2Fzc2V0cy9JY29ucy9wYXVzZS5zdmdcIjtcblxuZXhwb3J0IGNvbnN0IENpcmNsZSA9ICgpID0+IHtcbiAgcmV0dXJuIDxDaXJjbGVTVkcgLz47XG59O1xuZXhwb3J0IGNvbnN0IFNvdW5kID0gKCkgPT4ge1xuICByZXR1cm4gPFNvdW5kZVNWRyAvPjtcbn07XG5leHBvcnQgY29uc3QgTXV0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIDxNdXRlU1ZHIC8+O1xufTtcbmV4cG9ydCBjb25zdCBQbGF5ID0gKCkgPT4ge1xuICByZXR1cm4gPFBsYXlTVkcgLz47XG59O1xuZXhwb3J0IGNvbnN0IFBhdXNlID0gKCkgPT4ge1xuICByZXR1cm4gPFBhdXNlU1ZHIC8+O1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBSZWFjdEluc3RhU3Rvcmllc1Byb3BzLFxuICBHbG9iYWxDdHgsXG4gIFN0b3J5LFxuICBUZXN0ZXIsXG4gIFJlbmRlcmVyLFxufSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L0dsb2JhbFwiO1xuaW1wb3J0IFN0b3JpZXNDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvU3Rvcmllc1wiO1xuaW1wb3J0IHsgZ2V0UmVuZGVyZXIgfSBmcm9tIFwiLi91dGlsL3JlbmRlcmVyc1wiO1xuaW1wb3J0IHsgcmVuZGVyZXJzIGFzIGRlZmF1bHRSZW5kZXJlcnMgfSBmcm9tIFwiLi9yZW5kZXJlcnMvaW5kZXhcIjtcbmltcG9ydCB3aXRoSGVhZGVyIGZyb20gXCIuL3JlbmRlcmVycy93cmFwcGVycy93aXRoSGVhZGVyXCI7XG5pbXBvcnQgd2l0aFNlZU1vcmUgZnJvbSBcIi4vcmVuZGVyZXJzL3dyYXBwZXJzL3dpdGhTZWVNb3JlXCI7XG5cbmNvbnN0IFJlYWN0SW5zdGFTdG9yaWVzID0gZnVuY3Rpb24gKHByb3BzOiBSZWFjdEluc3RhU3Rvcmllc1Byb3BzKSB7XG4gIGxldCByZW5kZXJlcnMgPSBwcm9wcy5yZW5kZXJlcnNcbiAgICA/IHByb3BzLnJlbmRlcmVycy5jb25jYXQoZGVmYXVsdFJlbmRlcmVycylcbiAgICA6IGRlZmF1bHRSZW5kZXJlcnM7XG4gIGxldCBjb250ZXh0OiBHbG9iYWxDdHggPSB7XG4gICAgd2lkdGg6IHByb3BzLndpZHRoLFxuICAgIGhlaWdodDogcHJvcHMuaGVpZ2h0LFxuICAgIGxvYWRlcjogcHJvcHMubG9hZGVyLFxuICAgIGhlYWRlcjogcHJvcHMuaGVhZGVyLFxuICAgIHN0b3J5Q29udGFpbmVyU3R5bGVzOiBwcm9wcy5zdG9yeUNvbnRhaW5lclN0eWxlcyxcbiAgICBzdG9yeVN0eWxlczogcHJvcHMuc3RvcnlTdHlsZXMsXG4gICAgbG9vcDogcHJvcHMubG9vcCxcbiAgICBkZWZhdWx0SW50ZXJ2YWw6IHByb3BzLmRlZmF1bHRJbnRlcnZhbCxcbiAgICBpc1BhdXNlZDogcHJvcHMuaXNQYXVzZWQsXG4gICAgY3VycmVudEluZGV4OiBwcm9wcy5jdXJyZW50SW5kZXgsXG4gICAgb25TdG9yeVN0YXJ0OiBwcm9wcy5vblN0b3J5U3RhcnQsXG4gICAgb25TdG9yeUVuZDogcHJvcHMub25TdG9yeUVuZCxcbiAgICBvbkFsbFN0b3JpZXNFbmQ6IHByb3BzLm9uQWxsU3Rvcmllc0VuZCxcbiAgICBrZXlib2FyZE5hdmlnYXRpb246IHByb3BzLmtleWJvYXJkTmF2aWdhdGlvbixcbiAgICBwcmV2ZW50RGVmYXVsdDogcHJvcHMucHJldmVudERlZmF1bHQsXG4gIH07XG4gIGNvbnN0IFtzdG9yaWVzLCBzZXRTdG9yaWVzXSA9IHVzZVN0YXRlPHsgc3RvcmllczogU3RvcnlbXSB9Pih7XG4gICAgc3RvcmllczogZ2VuZXJhdGVTdG9yaWVzKHByb3BzLnN0b3JpZXMsIHJlbmRlcmVycyksXG4gIH0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFN0b3JpZXMoeyBzdG9yaWVzOiBnZW5lcmF0ZVN0b3JpZXMocHJvcHMuc3RvcmllcywgcmVuZGVyZXJzKSB9KTtcbiAgfSwgW3Byb3BzLnN0b3JpZXMsIHByb3BzLnJlbmRlcmVyc10pO1xuXG4gIHJldHVybiAoXG4gICAgPEdsb2JhbENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuICAgICAgPFN0b3JpZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzdG9yaWVzfT5cbiAgICAgICAgPENvbnRhaW5lciAvPlxuICAgICAgPC9TdG9yaWVzQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8L0dsb2JhbENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVN0b3JpZXMgPSAoXG4gIHN0b3JpZXM6IFN0b3J5W10sXG4gIHJlbmRlcmVyczogeyByZW5kZXJlcjogUmVuZGVyZXI7IHRlc3RlcjogVGVzdGVyIH1bXVxuKSA9PiB7XG4gIHJldHVybiBzdG9yaWVzLm1hcCgocykgPT4ge1xuICAgIGxldCBzdG9yeTogU3RvcnkgPSB7fTtcblxuICAgIGlmICh0eXBlb2YgcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgc3RvcnkudXJsID0gcztcbiAgICAgIHN0b3J5LnR5cGUgPSBcImltYWdlXCI7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgc3RvcnkgPSBPYmplY3QuYXNzaWduKHN0b3J5LCBzKTtcbiAgICB9XG5cbiAgICBsZXQgcmVuZGVyZXIgPSBnZXRSZW5kZXJlcihzdG9yeSwgcmVuZGVyZXJzKTtcbiAgICBzdG9yeS5vcmlnaW5hbENvbnRlbnQgPSBzdG9yeS5jb250ZW50O1xuICAgIHN0b3J5LmNvbnRlbnQgPSByZW5kZXJlcjtcbiAgICByZXR1cm4gc3Rvcnk7XG4gIH0pO1xufTtcblxuUmVhY3RJbnN0YVN0b3JpZXMuZGVmYXVsdFByb3BzID0ge1xuICB3aWR0aDogXCIxMDAlXCIsXG4gIGhlaWdodDogNjQwLFxuICBkZWZhdWx0SW50ZXJ2YWw6IDQwMDAsXG59O1xuXG5leHBvcnQgY29uc3QgV2l0aEhlYWRlciA9IHdpdGhIZWFkZXI7XG5leHBvcnQgY29uc3QgV2l0aFNlZU1vcmUgPSB3aXRoU2VlTW9yZTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3RJbnN0YVN0b3JpZXM7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tIFwiLi8uLi9jb250ZXh0L0dsb2JhbFwiO1xuaW1wb3J0IFN0b3JpZXNDb250ZXh0IGZyb20gXCIuLy4uL2NvbnRleHQvU3Rvcmllc1wiO1xuaW1wb3J0IFByb2dyZXNzQ29udGV4dCBmcm9tIFwiLi8uLi9jb250ZXh0L1Byb2dyZXNzXCI7XG5pbXBvcnQgU3RvcnkgZnJvbSBcIi4vU3RvcnlcIjtcbmltcG9ydCBQcm9ncmVzc0FycmF5IGZyb20gXCIuL1Byb2dyZXNzQXJyYXlcIjtcbmltcG9ydCB7XG4gIEdsb2JhbEN0eCxcbiAgU3Rvcmllc0NvbnRleHQgYXMgU3Rvcmllc0NvbnRleHRJbnRlcmZhY2UsXG59IGZyb20gXCIuLy4uL2ludGVyZmFjZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCBbY3VycmVudElkLCBzZXRDdXJyZW50SWRdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgY29uc3QgW3BhdXNlLCBzZXRQYXVzZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtidWZmZXJBY3Rpb24sIHNldEJ1ZmZlckFjdGlvbl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFt2aWRlb0R1cmF0aW9uLCBzZXRWaWRlb0R1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgbGV0IG1vdXNlZG93bklkID0gdXNlUmVmPGFueT4oKTtcbiAgbGV0IGlzTW91bnRlZCA9IHVzZVJlZjxib29sZWFuPih0cnVlKTtcblxuICBjb25zdCB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIGxvb3AsXG4gICAgY3VycmVudEluZGV4LFxuICAgIGlzUGF1c2VkLFxuICAgIGtleWJvYXJkTmF2aWdhdGlvbixcbiAgICBwcmV2ZW50RGVmYXVsdCxcbiAgICAvLyBzdG9yeUNvbnRhaW5lclN0eWxlcyA9IHt9LFxuICB9ID0gdXNlQ29udGV4dDxHbG9iYWxDdHg+KEdsb2JhbENvbnRleHQpO1xuICBjb25zdCB7IHN0b3JpZXMgfSA9IHVzZUNvbnRleHQ8U3Rvcmllc0NvbnRleHRJbnRlcmZhY2U+KFN0b3JpZXNDb250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY3VycmVudEluZGV4ID09PSBcIm51bWJlclwiKSB7XG4gICAgICBpZiAoY3VycmVudEluZGV4ID49IDAgJiYgY3VycmVudEluZGV4IDwgc3Rvcmllcy5sZW5ndGgpIHtcbiAgICAgICAgc2V0Q3VycmVudElkV3JhcHBlcigoKSA9PiBjdXJyZW50SW5kZXgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBcIkluZGV4IG91dCBvZiBib3VuZHMuIEN1cnJlbnQgaW5kZXggd2FzIHNldCB0byB2YWx1ZSBtb3JlIHRoYW4gdGhlIGxlbmd0aCBvZiBzdG9yaWVzIGFycmF5LlwiLFxuICAgICAgICAgIGN1cnJlbnRJbmRleFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2N1cnJlbnRJbmRleF0pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKHR5cGVvZiBpc1BhdXNlZCA9PT0gXCJib29sZWFuXCIpIHtcbiAgLy8gICAgIHNldFBhdXNlKHRydWUpO1xuICAvLyAgIH1cbiAgLy8gfSwgW2lzUGF1c2VkXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpc0NsaWVudCA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmRvY3VtZW50O1xuICAgIGlmIChcbiAgICAgIGlzQ2xpZW50ICYmXG4gICAgICB0eXBlb2Yga2V5Ym9hcmROYXZpZ2F0aW9uID09PSBcImJvb2xlYW5cIiAmJlxuICAgICAga2V5Ym9hcmROYXZpZ2F0aW9uXG4gICAgKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGhhbmRsZUtleURvd24pO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIFtrZXlib2FyZE5hdmlnYXRpb25dKTtcblxuICAvLyBDbGVhbnVwIG1vdW50ZWQgc3RhdGUgLSBmb3IgaXNzdWUgIzEzMCAoaHR0cHM6Ly9naXRodWIuY29tL21vaGl0azA1L3JlYWN0LWluc3RhLXN0b3JpZXMvaXNzdWVzLzEzMClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaXNNb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkFycm93TGVmdFwiKSB7XG4gICAgICBwcmV2aW91cygpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiKSB7XG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVN0YXRlID0gKGFjdGlvbjogc3RyaW5nLCBidWZmZXJBY3Rpb24/OiBib29sZWFuKSA9PiB7XG4gICAgc2V0UGF1c2UoYWN0aW9uID09PSBcInBhdXNlXCIpO1xuICAgIHNldEJ1ZmZlckFjdGlvbighIWJ1ZmZlckFjdGlvbik7XG4gIH07XG5cbiAgY29uc3Qgc2V0Q3VycmVudElkV3JhcHBlciA9IChjYWxsYmFjaykgPT4ge1xuICAgIHNldEN1cnJlbnRJZChjYWxsYmFjayk7XG4gICAgdG9nZ2xlU3RhdGUoXCJwYXVzZVwiLCB0cnVlKTtcbiAgfTtcblxuICBjb25zdCBwcmV2aW91cyA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50SWRXcmFwcGVyKChwcmV2KSA9PiAocHJldiA+IDAgPyBwcmV2IC0gMSA6IHByZXYpKTtcbiAgfTtcblxuICBjb25zdCBuZXh0ID0gKCkgPT4ge1xuICAgIGlmIChpc01vdW50ZWQuY3VycmVudCkge1xuICAgICAgaWYgKGxvb3ApIHtcbiAgICAgICAgdXBkYXRlTmV4dFN0b3J5SWRGb3JMb29wKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cGRhdGVOZXh0U3RvcnlJZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCB1cGRhdGVOZXh0U3RvcnlJZEZvckxvb3AgPSAoKSA9PiB7XG4gICAgc2V0Q3VycmVudElkV3JhcHBlcigocHJldikgPT4gKHByZXYgKyAxKSAlIHN0b3JpZXMubGVuZ3RoKTtcbiAgfTtcblxuICBjb25zdCB1cGRhdGVOZXh0U3RvcnlJZCA9ICgpID0+IHtcbiAgICBzZXRDdXJyZW50SWRXcmFwcGVyKChwcmV2KSA9PiB7XG4gICAgICBpZiAocHJldiA8IHN0b3JpZXMubGVuZ3RoIC0gMSkgcmV0dXJuIHByZXYgKyAxO1xuICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZGVib3VuY2VQYXVzZSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuVG91Y2hFdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBtb3VzZWRvd25JZC5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0b2dnbGVTdGF0ZShcInBhdXNlXCIpO1xuICAgIH0sIDIwMCk7XG4gIH07XG5cbiAgY29uc3QgbW91c2VVcCA9ICh0eXBlOiBzdHJpbmcpID0+IChcbiAgICBlOiBSZWFjdC5Nb3VzZUV2ZW50IHwgUmVhY3QuVG91Y2hFdmVudFxuICApID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbW91c2Vkb3duSWQuY3VycmVudCAmJiBjbGVhclRpbWVvdXQobW91c2Vkb3duSWQuY3VycmVudCk7XG4gICAgaWYgKHBhdXNlKSB7XG4gICAgICB0b2dnbGVTdGF0ZShcInBsYXlcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGUgPT09IFwibmV4dFwiID8gbmV4dCgpIDogcHJldmlvdXMoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0VmlkZW9EdXJhdGlvbiA9IChkdXJhdGlvbjogbnVtYmVyKSA9PiB7XG4gICAgc2V0VmlkZW9EdXJhdGlvbihkdXJhdGlvbiAqIDEwMDApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgLi4uc3R5bGVzLmNvbnRhaW5lcixcbiAgICAgICAgLy8gLi4uc3RvcnlDb250YWluZXJTdHlsZXMsXG4gICAgICAgIC4uLnsgd2lkdGgsIGhlaWdodCB9LFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8UHJvZ3Jlc3NDb250ZXh0LlByb3ZpZGVyXG4gICAgICAgIHZhbHVlPXt7XG4gICAgICAgICAgYnVmZmVyQWN0aW9uOiBidWZmZXJBY3Rpb24sXG4gICAgICAgICAgdmlkZW9EdXJhdGlvbjogdmlkZW9EdXJhdGlvbixcbiAgICAgICAgICBjdXJyZW50SWQsXG4gICAgICAgICAgcGF1c2UsXG4gICAgICAgICAgbmV4dCxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPFByb2dyZXNzQXJyYXkgLz5cbiAgICAgIDwvUHJvZ3Jlc3NDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPFN0b3J5XG4gICAgICAgIGFjdGlvbj17dG9nZ2xlU3RhdGV9XG4gICAgICAgIGJ1ZmZlckFjdGlvbj17YnVmZmVyQWN0aW9ufVxuICAgICAgICBwbGF5U3RhdGU9e3BhdXNlfVxuICAgICAgICBzdG9yeT17c3Rvcmllc1tjdXJyZW50SWRdfVxuICAgICAgICBnZXRWaWRlb0R1cmF0aW9uPXtnZXRWaWRlb0R1cmF0aW9ufVxuICAgICAgLz5cbiAgICAgIHshcHJldmVudERlZmF1bHQgJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMub3ZlcmxheX0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIsIHpJbmRleDogOTk5IH19XG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ9e2RlYm91bmNlUGF1c2V9XG4gICAgICAgICAgICBvblRvdWNoRW5kPXttb3VzZVVwKFwicHJldmlvdXNcIil9XG4gICAgICAgICAgICBvbk1vdXNlRG93bj17ZGVib3VuY2VQYXVzZX1cbiAgICAgICAgICAgIG9uTW91c2VVcD17bW91c2VVcChcInByZXZpb3VzXCIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIsIHpJbmRleDogOTk5IH19XG4gICAgICAgICAgICBvblRvdWNoU3RhcnQ9e2RlYm91bmNlUGF1c2V9XG4gICAgICAgICAgICBvblRvdWNoRW5kPXttb3VzZVVwKFwibmV4dFwiKX1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXtkZWJvdW5jZVBhdXNlfVxuICAgICAgICAgICAgb25Nb3VzZVVwPXttb3VzZVVwKFwibmV4dFwiKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBiYWNrZ3JvdW5kOiBcIiMxMTFcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICB9LFxuICBvdmVybGF5OiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICBoZWlnaHQ6IFwiaW5oZXJpdFwiLFxuICAgIHdpZHRoOiBcImluaGVyaXRcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3RvcnlQcm9wcywgR2xvYmFsQ3R4IH0gZnJvbSBcIi4vLi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IEdsb2JhbENvbnRleHQgZnJvbSBcIi4vLi4vY29udGV4dC9HbG9iYWxcIjtcblxuY29uc3QgU3RvcnkgPSAocHJvcHM6IFN0b3J5UHJvcHMpID0+IHtcblx0Y29uc3QgZ2xvYmFsQ29udGV4dCA9IHVzZUNvbnRleHQ8R2xvYmFsQ3R4Pihcblx0XHRHbG9iYWxDb250ZXh0XG5cdCk7XG5cblx0Y29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBsb2FkZXIsIGhlYWRlciwgc3RvcnlTdHlsZXMgfSA9IGdsb2JhbENvbnRleHQ7XG5cblx0Y29uc3QgcmVuZGVyZXJNZXNzYWdlSGFuZGxlciA9ICh0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSkgPT4ge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAnVVBEQVRFX1ZJREVPX0RVUkFUSU9OJzpcblx0XHRcdFx0cHJvcHMuZ2V0VmlkZW9EdXJhdGlvbihkYXRhLmR1cmF0aW9uKTtcblx0XHRcdFx0cmV0dXJuIHsgYWNrOiAnT0snIGFzICdPSycgfVxuXHRcdH1cblx0fVxuXG5cdGNvbnN0IGdldFN0b3J5Q29udGVudCA9ICgpID0+IHtcblx0XHRsZXQgSW5uZXJDb250ZW50ID0gcHJvcHMuc3RvcnkuY29udGVudDtcblx0XHRsZXQgY29uZmlnID0geyB3aWR0aCwgaGVpZ2h0LCBsb2FkZXIsIGhlYWRlciwgc3RvcnlTdHlsZXMgfTtcblx0XHRyZXR1cm4gPElubmVyQ29udGVudFxuXHRcdFx0YWN0aW9uPXtwcm9wcy5hY3Rpb259XG5cdFx0XHRpc1BhdXNlZD17cHJvcHMucGxheVN0YXRlfVxuXHRcdFx0c3Rvcnk9e3Byb3BzLnN0b3J5fVxuXHRcdFx0Y29uZmlnPXtjb25maWd9XG5cdFx0XHRtZXNzYWdlSGFuZGxlcj17cmVuZGVyZXJNZXNzYWdlSGFuZGxlcn1cblx0XHQvPlxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0c3R5bGU9e3sgLi4uc3R5bGVzLnN0b3J5LCB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH19XG5cdFx0PlxuXHRcdFx0e2dldFN0b3J5Q29udGVudCgpfVxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuXHRzdG9yeToge1xuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHRcdHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG5cdFx0b3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG5cdFx0YWxpZ25JdGVtczogXCJjZW50ZXJcIlxuXHR9LFxuXHRzdG9yeUNvbnRlbnQ6IHtcblx0XHR3aWR0aDogXCJhdXRvXCIsXG5cdFx0bWF4V2lkdGg6IFwiMTAwJVwiLFxuXHRcdG1heEhlaWdodDogXCIxMDAlXCIsXG5cdFx0bWFyZ2luOiBcImF1dG9cIlxuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9yeTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9ncmVzcyBmcm9tICcuL1Byb2dyZXNzJ1xuaW1wb3J0IHsgUHJvZ3Jlc3NDb250ZXh0LCBHbG9iYWxDdHgsIFN0b3JpZXNDb250ZXh0IGFzIFN0b3JpZXNDb250ZXh0SW50ZXJmYWNlIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IFByb2dyZXNzQ3R4IGZyb20gJy4vLi4vY29udGV4dC9Qcm9ncmVzcydcbmltcG9ydCBHbG9iYWxDb250ZXh0IGZyb20gJy4vLi4vY29udGV4dC9HbG9iYWwnXG5pbXBvcnQgU3Rvcmllc0NvbnRleHQgZnJvbSAnLi8uLi9jb250ZXh0L1N0b3JpZXMnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlPG51bWJlcj4oMClcbiAgICBjb25zdCB7IGN1cnJlbnRJZCwgbmV4dCwgdmlkZW9EdXJhdGlvbiwgcGF1c2UgfSA9IHVzZUNvbnRleHQ8UHJvZ3Jlc3NDb250ZXh0PihQcm9ncmVzc0N0eClcbiAgICBjb25zdCB7IGRlZmF1bHRJbnRlcnZhbCwgb25TdG9yeUVuZCwgb25TdG9yeVN0YXJ0LCBvbkFsbFN0b3JpZXNFbmQgfSA9IHVzZUNvbnRleHQ8R2xvYmFsQ3R4PihHbG9iYWxDb250ZXh0KTtcbiAgICBjb25zdCB7IHN0b3JpZXMgfSA9IHVzZUNvbnRleHQ8U3Rvcmllc0NvbnRleHRJbnRlcmZhY2U+KFN0b3JpZXNDb250ZXh0KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldENvdW50KDApXG4gICAgfSwgW2N1cnJlbnRJZCwgc3Rvcmllc10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIXBhdXNlKSB7XG4gICAgICAgICAgICBhbmltYXRpb25GcmFtZUlkLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaW5jcmVtZW50Q291bnQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQuY3VycmVudClcbiAgICAgICAgfVxuICAgIH0sIFtjdXJyZW50SWQsIHBhdXNlXSlcblxuICAgIGxldCBhbmltYXRpb25GcmFtZUlkID0gdXNlUmVmPG51bWJlcj4oKVxuXG4gICAgbGV0IGNvdW50Q29weSA9IGNvdW50O1xuICAgIGNvbnN0IGluY3JlbWVudENvdW50ID0gKCkgPT4ge1xuICAgICAgICBpZiAoY291bnRDb3B5ID09PSAwKSBzdG9yeVN0YXJ0Q2FsbGJhY2soKVxuICAgICAgICBzZXRDb3VudCgoY291bnQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBnZXRDdXJyZW50SW50ZXJ2YWwoKVxuICAgICAgICAgICAgY291bnRDb3B5ID0gY291bnQgKyAoMTAwIC8gKChpbnRlcnZhbCAvIDEwMDApICogNjApKVxuICAgICAgICAgICAgcmV0dXJuIGNvdW50ICsgKDEwMCAvICgoaW50ZXJ2YWwgLyAxMDAwKSAqIDYwKSlcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGNvdW50Q29weSA8IDEwMCkge1xuICAgICAgICAgICAgYW5pbWF0aW9uRnJhbWVJZC5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGluY3JlbWVudENvdW50KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RvcnlFbmRDYWxsYmFjaygpO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJZCA9PT0gc3Rvcmllcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgYWxsU3Rvcmllc0VuZENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkLmN1cnJlbnQpO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcnlTdGFydENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICBvblN0b3J5U3RhcnQgJiYgb25TdG9yeVN0YXJ0KGN1cnJlbnRJZCwgc3Rvcmllc1tjdXJyZW50SWRdKVxuICAgIH1cblxuICAgIGNvbnN0IHN0b3J5RW5kQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIG9uU3RvcnlFbmQgJiYgb25TdG9yeUVuZChjdXJyZW50SWQsIHN0b3JpZXNbY3VycmVudElkXSlcbiAgICB9XG5cbiAgICBjb25zdCBhbGxTdG9yaWVzRW5kQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIG9uQWxsU3Rvcmllc0VuZCAmJiBvbkFsbFN0b3JpZXNFbmQoY3VycmVudElkLCBzdG9yaWVzKVxuICAgIH1cblxuICAgIGNvbnN0IGdldEN1cnJlbnRJbnRlcnZhbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHN0b3JpZXNbY3VycmVudElkXS50eXBlID09PSAndmlkZW8nKSByZXR1cm4gdmlkZW9EdXJhdGlvblxuICAgICAgICBpZiAodHlwZW9mIHN0b3JpZXNbY3VycmVudElkXS5kdXJhdGlvbiA9PT0gJ251bWJlcicpIHJldHVybiBzdG9yaWVzW2N1cnJlbnRJZF0uZHVyYXRpb25cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRJbnRlcnZhbFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5wcm9ncmVzc0Fycn0+XG4gICAgICAgICAgICB7c3Rvcmllcy5tYXAoKF8sIGkpID0+XG4gICAgICAgICAgICAgICAgPFByb2dyZXNzXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgY291bnQ9e2NvdW50fVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MSAvIHN0b3JpZXMubGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e2kgPT09IGN1cnJlbnRJZCA/IDEgOiAoaSA8IGN1cnJlbnRJZCA/IDIgOiAwKX1cbiAgICAgICAgICAgICAgICAvPil9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIHByb2dyZXNzQXJyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBmbGV4V3JhcDogJ3JvdycsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB3aWR0aDogJzk4JScsXG4gICAgICAgIHBhZGRpbmc6IDUsXG4gICAgICAgIHBhZGRpbmdUb3A6IDcsXG4gICAgICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgICAgIHpJbmRleDogMTAwMSxcbiAgICAgICAgZmlsdGVyOiAnZHJvcC1zaGFkb3coMCAxcHggOHB4ICMyMjIpJ1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9ncmVzc1Byb3BzLCBQcm9ncmVzc0NvbnRleHQgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgUHJvZ3Jlc3NXcmFwcGVyIGZyb20gJy4vUHJvZ3Jlc3NXcmFwcGVyJ1xuaW1wb3J0IFByb2dyZXNzQ3R4IGZyb20gJy4vLi4vY29udGV4dC9Qcm9ncmVzcydcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzOiBQcm9ncmVzc1Byb3BzKSA9PiB7XG4gICAgY29uc3QgeyBidWZmZXJBY3Rpb24sIHBhdXNlIH0gPSB1c2VDb250ZXh0PFByb2dyZXNzQ29udGV4dD4oUHJvZ3Jlc3NDdHgpXG5cbiAgICBjb25zdCBnZXRQcm9ncmVzc1N0eWxlID0gKHsgYWN0aXZlIH0pID0+IHtcbiAgICAgICAgc3dpdGNoIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogJzEwMCUnIH1cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB0cmFuc2Zvcm06IGBzY2FsZVgoJHtwcm9wcy5jb3VudCAvIDEwMH0pYCB9XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgd2lkdGg6IDAgfVxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB3aWR0aDogMCB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB7IHdpZHRoLCBhY3RpdmUgfSA9IHByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFByb2dyZXNzV3JhcHBlciB3aWR0aD17d2lkdGh9IHBhdXNlPXtwYXVzZX0gYnVmZmVyQWN0aW9uPXtidWZmZXJBY3Rpb259PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IC4uLmdldFByb2dyZXNzU3R5bGUoeyBhY3RpdmUgfSksIC4uLnN0eWxlcy5pbm5lciB9fSAvPlxuICAgICAgICA8L1Byb2dyZXNzV3JhcHBlcj5cbiAgICApXG59XG5cbmNvbnN0IHN0eWxlczogYW55ID0ge1xuICAgIGlubmVyOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIGxlZnQnLFxuXG4gICAgICAgIFdlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIE1vekJhY2tmYWNlVmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgICAgIG1zQmFja2ZhY2VWaXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgYmFja2ZhY2VWaXNpYmlsaXR5OiAnaGlkZGVuJyxcblxuICAgICAgICBXZWJraXRQZXJzcGVjdGl2ZTogMTAwMCxcbiAgICAgICAgTW96UGVyc3BlY3RpdmU6IDEwMDAsXG4gICAgICAgIG1zUGVyc3BlY3RpdmU6IDEwMDAsXG4gICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwXG4gICAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb2dyZXNzV3JhcHBlclByb3BzIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuXG5jb25zdCBQcm9ncmVzc1dyYXBwZXIgPSAocHJvcHM6IFByb2dyZXNzV3JhcHBlclByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMucHJvZ3Jlc3MsIC4uLmdldFByb2dyZXNzV3JhcHBlclN0eWxlKHByb3BzKSB9fT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuKVxuXG5jb25zdCBnZXRQcm9ncmVzc1dyYXBwZXJTdHlsZSA9ICh7IHdpZHRoLCBwYXVzZSwgYnVmZmVyQWN0aW9uIH0pID0+ICh7XG4gICAgd2lkdGg6IGAke3dpZHRoICogMTAwfSVgLFxuICAgIG9wYWNpdHk6IHBhdXNlICYmICFidWZmZXJBY3Rpb24gPyAwIDogMVxufSlcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIHByb2dyZXNzOiB7XG4gICAgICAgIGhlaWdodDogMixcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgYmFja2dyb3VuZDogJyM1NTUnLFxuICAgICAgICBtYXJnaW46IDIsXG4gICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgNDAwbXMgZWFzZS1pbi1vdXQnXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc1dyYXBwZXIiLCJpbXBvcnQgeyBSZW5kZXJlciwgU3RvcnksIFRlc3RlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRSZW5kZXJlciA9IChzdG9yeTogU3RvcnksIHJlbmRlcmVyczogeyByZW5kZXJlcjogUmVuZGVyZXIsIHRlc3RlcjogVGVzdGVyIH1bXSk6IFJlbmRlcmVyID0+IHtcbiAgICBsZXQgcHJvYmFibGUgPSByZW5kZXJlcnMubWFwKHIgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucixcbiAgICAgICAgICAgIHRlc3RlclJlc3VsdDogci50ZXN0ZXIoc3RvcnkpXG4gICAgICAgIH1cbiAgICB9KS5maWx0ZXIociA9PiByLnRlc3RlclJlc3VsdC5jb25kaXRpb24pO1xuICAgIHByb2JhYmxlLnNvcnQoKGEsIGIpID0+IGIudGVzdGVyUmVzdWx0LnByaW9yaXR5IC0gYS50ZXN0ZXJSZXN1bHQucHJpb3JpdHkpO1xuICAgIHJldHVybiBwcm9iYWJsZVswXS5yZW5kZXJlcjtcbn0iLCJpbXBvcnQgaW1hZ2UgZnJvbSAnLi9JbWFnZSc7XG5pbXBvcnQgdmlkZW8gZnJvbSAnLi9WaWRlbyc7XG5pbXBvcnQgZGVmYXVsdFJlbmRlcmVyIGZyb20gJy4vRGVmYXVsdCc7XG5pbXBvcnQgYXV0b3BsYXlDb250ZW50IGZyb20gJy4vQXV0b1BsYXlDb250ZW50JztcblxuZXhwb3J0IGNvbnN0IHJlbmRlcmVycyA9IFtpbWFnZSwgdmlkZW8sIGF1dG9wbGF5Q29udGVudCwgZGVmYXVsdFJlbmRlcmVyXTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvU3Bpbm5lclwiO1xuaW1wb3J0IHsgUmVuZGVyZXIsIFRlc3RlciB9IGZyb20gXCIuLy4uL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7IFBhdXNlLCBQbGF5IH0gZnJvbSBcIi4vd3JhcHBlcnMvaWNvbnNcIjtcbmltcG9ydCBXaXRoSGVhZGVyIGZyb20gXCIuL3dyYXBwZXJzL3dpdGhIZWFkZXJcIjtcbmltcG9ydCBXaXRoU2VlTW9yZSBmcm9tIFwiLi93cmFwcGVycy93aXRoU2VlTW9yZVwiO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyZXI6IFJlbmRlcmVyID0gKHsgc3RvcnksIGFjdGlvbiwgaXNQYXVzZWQsIGNvbmZpZyB9KSA9PiB7XG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgbG9hZGVyLCBzdG9yeVN0eWxlcyB9ID0gY29uZmlnO1xuICBsZXQgY29tcHV0ZWRTdHlsZXMgPSB7XG4gICAgLi4uc3R5bGVzLnN0b3J5Q29udGVudCxcbiAgICAuLi4oc3RvcnlTdHlsZXMgfHwge30pLFxuICB9O1xuXG4gIGNvbnN0IGltYWdlTG9hZGVkID0gKCkgPT4ge1xuICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICBhY3Rpb24oXCJwbGF5XCIpO1xuICB9O1xuXG4gIGNvbnN0IG9uV2FpdGluZyA9ICgpID0+IHtcbiAgICBhY3Rpb24oXCJwYXVzZVwiLCB0cnVlKTtcbiAgfTtcblxuICBjb25zdCBvblBsYXlpbmcgPSAoKSA9PiB7XG4gICAgYWN0aW9uKFwicGxheVwiLCB0cnVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxXaXRoSGVhZGVyIHN0b3J5PXtzdG9yeX0gZ2xvYmFsSGVhZGVyPXtjb25maWcuaGVhZGVyfT5cbiAgICAgIDxXaXRoU2VlTW9yZSBzdG9yeT17c3Rvcnl9IGFjdGlvbj17YWN0aW9ufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYnV0dG9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICB7aXNQYXVzZWQgPyAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5idXR0b25DaXJjbGV9IG9uQ2xpY2s9e29uUGxheWluZ30+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjVweCAwIDAgNXB4XCIsIG1hcmdpbjogXCI2cHggMCAwIDZweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPFBsYXkgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYnV0dG9uQ2lyY2xlfSBvbkNsaWNrPXtvbldhaXRpbmd9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI1cHggMCAwIDFweFwiLCBtYXJnaW46IFwiNnB4IDAgMCA0cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxQYXVzZSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aW1nIHN0eWxlPXtjb21wdXRlZFN0eWxlc30gc3JjPXtzdG9yeS51cmx9IG9uTG9hZD17aW1hZ2VMb2FkZWR9IC8+XG4gICAgICAgICAgeyFsb2FkZWQgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAwLCAwLCAwLjkpXCIsXG4gICAgICAgICAgICAgICAgekluZGV4OiA5LFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2NjY1wiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bG9hZGVyIHx8IDxTcGlubmVyIC8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1dpdGhTZWVNb3JlPlxuICAgIDwvV2l0aEhlYWRlcj5cbiAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc3Rvcnk6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICB9LFxuICBzdG9yeUNvbnRlbnQ6IHtcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgIG1heEhlaWdodDogXCIxMDAlXCIsXG4gICAgbWFyZ2luOiBcImF1dG9cIixcbiAgfSxcbiAgYnV0dG9uc0NvbnRhaW5lcjoge1xuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIgYXMgY29uc3QsXG4gICAgYm90dG9tOiBcIjQwcHhcIixcbiAgICByaWdodDogXCIzMHB4XCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiBhcyBjb25zdCxcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICB6SW5kZXg6IDEwMDAsXG4gICAgaGVpZ2h0OiBcIjEyOHB4XCIsXG4gIH0sXG4gIGJ1dHRvbkNpcmNsZToge1xuICAgIHdpZHRoOiBcIjY0cHhcIixcbiAgICBoZWlnaHQ6IFwiNjRweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI2NHB4XCIsXG4gICAgYmFja2dyb3VuZDogXCIjMEYwRjE5XCIsXG4gICAgb3BhY2l0eTogMC42LFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0ZXI6IFRlc3RlciA9IChzdG9yeSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbmRpdGlvbjogIXN0b3J5LmNvbnRlbnQgJiYgKCFzdG9yeS50eXBlIHx8IHN0b3J5LnR5cGUgPT09IFwiaW1hZ2VcIiksXG4gICAgcHJpb3JpdHk6IDIsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJlbmRlcmVyLFxuICB0ZXN0ZXIsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgKCh7XG4gIHN0eWxlcyA9IHt9LFxuICAuLi5wcm9wc1xufSkgPT4gPHN2ZyB3aWR0aD1cIjQ0XCIgaGVpZ2h0PVwiNDRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgc3Ryb2tlPVwiI2ZmZlwiIHsuLi5wcm9wc30+PGcgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIiBzdHJva2VXaWR0aD1cIjJcIj48Y2lyY2xlIGN4PVwiMjJcIiBjeT1cIjIyXCIgcj1cIjFcIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPVwiclwiIGJlZ2luPVwiMHNcIiBkdXI9XCIxLjhzXCIgdmFsdWVzPVwiMTsgMjBcIiBjYWxjTW9kZT1cInNwbGluZVwiIGtleVRpbWVzPVwiMDsgMVwiIGtleVNwbGluZXM9XCIwLjE2NSwgMC44NCwgMC40NCwgMVwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIC8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInN0cm9rZS1vcGFjaXR5XCIgYmVnaW49XCIwc1wiIGR1cj1cIjEuOHNcIiB2YWx1ZXM9XCIxOyAwXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7IDFcIiBrZXlTcGxpbmVzPVwiMC4zLCAwLjYxLCAwLjM1NSwgMVwiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIC8+PC9jaXJjbGU+PGNpcmNsZSBjeD1cIjIyXCIgY3k9XCIyMlwiIHI9XCIxXCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT1cInJcIiBiZWdpbj1cIi0wLjlzXCIgZHVyPVwiMS44c1wiIHZhbHVlcz1cIjE7IDIwXCIgY2FsY01vZGU9XCJzcGxpbmVcIiBrZXlUaW1lcz1cIjA7IDFcIiBrZXlTcGxpbmVzPVwiMC4xNjUsIDAuODQsIDAuNDQsIDFcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiAvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9XCJzdHJva2Utb3BhY2l0eVwiIGJlZ2luPVwiLTAuOXNcIiBkdXI9XCIxLjhzXCIgdmFsdWVzPVwiMTsgMFwiIGNhbGNNb2RlPVwic3BsaW5lXCIga2V5VGltZXM9XCIwOyAxXCIga2V5U3BsaW5lcz1cIjAuMywgMC42MSwgMC4zNTUsIDFcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiAvPjwvY2lyY2xlPjwvZz48L3N2Zz4pOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0ICgoe1xuICBzdHlsZXMgPSB7fSxcbiAgLi4ucHJvcHNcbn0pID0+IDxzdmcgd2lkdGg9XCI2NFwiIGhlaWdodD1cIjY0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgey4uLnByb3BzfT48Y2lyY2xlIG9wYWNpdHk9XCIuNlwiIGN4PVwiMzJcIiBjeT1cIjMyXCIgcj1cIjMyXCIgZmlsbD1cIiMwRjBGMTlcIiAvPjwvc3ZnPik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgKCh7XG4gIHN0eWxlcyA9IHt9LFxuICAuLi5wcm9wc1xufSkgPT4gPHN2ZyB3aWR0aD1cIjM1XCIgaGVpZ2h0PVwiMzVcIiB2aWV3Qm94PVwiMCAwIDI2IDI2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgey4uLnByb3BzfT48cGF0aCBkPVwiTTEyLjYwNiA0LjFhMS4xMyAxLjEzIDAgMDAtMS4yMTMuMTg0TDYuNjQgOC40OThIMy42OUMyLjc1NiA4LjQ5OCAyIDkuMjU0IDIgMTAuMTU0djMuMzQyYzAgLjkzMi43NTcgMS42NTYgMS42OSAxLjY1NmgyLjk1Mmw0Ljc1IDQuMjE0YTEuMTI4IDEuMTI4IDAgMDAxLjg3NS0uODRWNS4xMjRjLS4wMzEtLjQ0My0uMjU2LS44NDQtLjY2MS0xLjAyNXpNMTYuMTc3IDkuNzI4YS43MS43MSAwIDAwLTEuMDEzLjEwNS43NDYuNzQ2IDAgMDAuMTAxIDEuMDM1Yy4zMzkuMjg1LjUzNC42OTYuNTM0IDEuMTA0IDAgLjQzNS0uMTk1Ljg0Ny0uNTM1IDEuMTMxYS43NDcuNzQ3IDAgMDAtLjEgMS4wMzYuNzEuNzEgMCAwMDEuMDEyLjEwNGMuNjc2LS41NCAxLjA2My0xLjM2NSAxLjA2My0yLjI3IDAtLjkwNi0uMzg3LTEuNjgtMS4wNjItMi4yNDV6bTEuODE1LTIuMjY2YS43MTIuNzEyIDAgMDAtMS4wMTMuMTAzLjc0Ny43NDcgMCAwMC4xIDEuMDM2IDQuMzY2IDQuMzY2IDAgMDExLjYgMy4zNzFjMCAxLjI4NC0uNTgzIDIuNTIxLTEuNiAzLjM5OWEuNzQ3Ljc0NyAwIDAwLS4xIDEuMDM2LjcxMy43MTMgMCAwMDEuMDE0LjEwMmMxLjM1Mi0xLjEwNCAyLjEyNy0yLjc1OSAyLjEyNy00LjUzNyAwLTEuNzc3LS43NzUtMy4zOC0yLjEyOC00LjUxem0xLjg0LTIuMjk2YS43MTIuNzEyIDAgMDAtMS4wMTQuMTAyLjc0Ny43NDcgMCAwMC4xIDEuMDM2IDcuMzkyIDcuMzkyIDAgMDEyLjY0MiA1LjY2OCA3LjQ0MyA3LjQ0MyAwIDAxLTIuNjQyIDUuNjk2Ljc0Ny43NDcgMCAwMC0uMSAxLjAzNS42NjQuNjY0IDAgMDAuNTU3LjI5Ny43MDkuNzA5IDAgMDAuNDU3LS4xNjdDMjEuODQ1IDE3LjE0NiAyMyAxNC42NTYgMjMgMTEuOTczYTguNzg3IDguNzg3IDAgMDAtMy4xNjktNi44MDd6XCIgZmlsbD1cIiNmZmZcIiAvPjwvc3ZnPik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgKCh7XG4gIHN0eWxlcyA9IHt9LFxuICAuLi5wcm9wc1xufSkgPT4gPHN2ZyB3aWR0aD1cIjM1XCIgaGVpZ2h0PVwiMzVcIiB2aWV3Qm94PVwiMCAwIDI2IDI2XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgey4uLnByb3BzfT48cGF0aCBkPVwiTTEwLjYwNi4xYTEuMTMgMS4xMyAwIDAwLTEuMjEzLjE4NEw0LjY0IDQuNDk4SDEuNjlDLjc1NiA0LjQ5OCAwIDUuMjU0IDAgNi4xNTR2My4zNDNjMCAuOTMxLjc1NyAxLjY1NSAxLjY5IDEuNjU1aDIuOTUybDQuNzUgNC4yMTRhMS4xMjggMS4xMjggMCAwMDEuODc1LS44NFYxLjEyNGMtLjAzMS0uNDQzLS4yNTYtLjg0NC0uNjYxLTEuMDI1em03LjQ4OSA3Ljc0MWwxLjY1Ni0xLjY1M2EuODQyLjg0MiAwIDAwMC0xLjE5My44NDYuODQ2IDAgMDAtMS4xOTUgMEwxNi45IDYuNjgxbC0xLjY4Ni0xLjY1NWEuODQ2Ljg0NiAwIDAwLTEuMTk1IDAgLjg0Mi44NDIgMCAwMDAgMS4xOTNsMS42NTYgMS42NTMtMS42NTYgMS42NTNhLjg0Mi44NDIgMCAwMDAgMS4xOTNjLjMzLjMzLjg2NC4zMyAxLjE5NSAwTDE2LjkgOS4wNjRsMS42NTYgMS42NTNjLjMzLjMzLjg2NS4zMyAxLjE5NSAwYS44NDIuODQyIDAgMDAwLTEuMTkzbC0xLjY1Ny0xLjY4M3pcIiBmaWxsPVwiI2ZmZlwiIC8+PC9zdmc+KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCAoKHtcbiAgc3R5bGVzID0ge30sXG4gIC4uLnByb3BzXG59KSA9PiA8c3ZnIHdpZHRoPVwiMzVcIiBoZWlnaHQ9XCIzNVwiIHZpZXdCb3g9XCIwIDAgMjIgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNMTQuMTQ4IDcuMzk4Yy41Ni4zNDQuOTAyLjk1LjkwMiAxLjYwMmExLjc4IDEuNzggMCAwMS0uOTAyIDEuNTY2TDIuODYyIDE3LjQ0MWExLjgxMyAxLjgxMyAwIDAxLTEuOTAxLjA3QTEuODc1IDEuODc1IDAgMDEwIDE1Ljg3NlYyLjEyNUMwIDEuNDQ3LjM2Ny44MjEuOTYxLjQ4OWExLjg4NyAxLjg4NyAwIDAxMS45MDEuMDM2bDExLjI4NiA2Ljg3M3pcIiBmaWxsPVwiI2ZmZlwiIC8+PC9zdmc+KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCAoKHtcbiAgc3R5bGVzID0ge30sXG4gIC4uLnByb3BzXG59KSA9PiA8c3ZnIHdpZHRoPVwiMzVcIiBoZWlnaHQ9XCIzNVwiIHZpZXdCb3g9XCIwIDAgMjIgMjdcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB7Li4ucHJvcHN9PjxwYXRoIGQ9XCJNMTQuMTMzIDBoLTEuNjYyYy0xLjM3OCAwLTIuNDk0IDEuMTE3LTIuNDk0IDIuNDQ3djE0Ljk2NWEyLjQ5NCAyLjQ5NCAwIDAwMi40OTQgMi40OTVsMS42NjIuMDkzYTIuNDk0IDIuNDk0IDAgMDAyLjQ5NS0yLjQ5NFYyLjU0QzE2LjYyOCAxLjE2MyAxNS41MSAwIDE0LjEzMyAwek00LjE1NyAwSDIuNDk0QTIuNDk0IDIuNDk0IDAgMDAwIDIuNDk0VjE3LjQ2QzAgMTguODgzIDEuMTE3IDIwIDIuNDk0IDIwaDEuNjYzYTIuNDk0IDIuNDk0IDAgMDAyLjQ5NC0yLjQ5NFYyLjU0QzYuNjUxIDEuMTYzIDUuNTM0IDAgNC4xNTcgMHpcIiBmaWxsPVwiI2ZmZlwiIC8+PC9zdmc+KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWFkZXJQcm9wcyB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcydcblxuY29uc3QgSGVhZGVyID0gKHsgcHJvZmlsZUltYWdlLCBoZWFkaW5nLCBzdWJoZWFkaW5nIH06IEhlYWRlclByb3BzKSA9PlxuICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAge3Byb2ZpbGVJbWFnZSAmJiA8aW1nIHN0eWxlPXtzdHlsZXMuaW1nfSBzcmM9e3Byb2ZpbGVJbWFnZX0gLz59XG4gICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMudGV4dH0+XG4gICAgICAgICAgICA8cCBzdHlsZT17c3R5bGVzLmhlYWRpbmd9PntoZWFkaW5nfTwvcD5cbiAgICAgICAgICAgIDxwIHN0eWxlPXtzdHlsZXMuc3ViaGVhZGluZ30+e3N1YmhlYWRpbmd9PC9wPlxuICAgICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBtYWluOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgICB9LFxuICAgIGltZzoge1xuICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgIGhlaWdodDogNDAsXG4gICAgICAgIGJvcmRlclJhZGl1czogNDAsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAxMCxcbiAgICAgICAgZmlsdGVyOiAnZHJvcC1zaGFkb3coMCAwcHggMnB4IHJnYmEoMCwgMCwgMCwgMC41KSknLFxuICAgICAgICBib3JkZXI6ICcycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpJ1xuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBmaWx0ZXI6ICdkcm9wLXNoYWRvdygwIDBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjkpKSdcbiAgICB9LFxuICAgIGhlYWRpbmc6IHtcbiAgICAgICAgZm9udFNpemU6ICcxcmVtJyxcbiAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSknLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMlxuICAgIH0sXG4gICAgc3ViaGVhZGluZzoge1xuICAgICAgICBmb250U2l6ZTogJzAuNnJlbScsXG4gICAgICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpJyxcbiAgICAgICAgbWFyZ2luOiAwXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgR2xvYmFsQ29udGV4dCBmcm9tICcuLy4uL2NvbnRleHQvR2xvYmFsJ1xuaW1wb3J0IHsgR2xvYmFsQ3R4IH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgU2VlTW9yZVByb3BzIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWVNb3JlKHByb3BzOiBTZWVNb3JlUHJvcHMpIHtcbiAgICBjb25zdCBTZWVNb3JlQ29udGVudCA9IHByb3BzLnNlZU1vcmVDb250ZW50O1xuICAgIGNvbnN0IEN1c3RvbUNvbGxhcHNlZCA9IHByb3BzLmN1c3RvbUNvbGxhcHNlZDtcblxuICAgIGNvbnN0IHsga2V5Ym9hcmROYXZpZ2F0aW9uIH0gPSB1c2VDb250ZXh0PEdsb2JhbEN0eD4oR2xvYmFsQ29udGV4dCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBpc0NsaWVudCA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpO1xuICAgICAgICBpZiAoaXNDbGllbnQgJiYgKHR5cGVvZiBrZXlib2FyZE5hdmlnYXRpb24gPT09ICdib29sZWFuJyAmJiBrZXlib2FyZE5hdmlnYXRpb24pKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlEb3duKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgaGFuZGxlS2V5RG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBba2V5Ym9hcmROYXZpZ2F0aW9uXSlcblxuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBwcm9wcy50b2dnbGVNb3JlKHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nIHx8IGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBwcm9wcy50b2dnbGVNb3JlKGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgcHJvcHMuc2hvd0NvbnRlbnRcbiAgICAgICAgICAgID8gPGRpdiBzdHlsZT17c3R5bGVzLnNlZU1vcmVFeHBhbmRlZH0+XG4gICAgICAgICAgICAgICAgPFNlZU1vcmVDb250ZW50IGNsb3NlPXsoKSA9PiBwcm9wcy50b2dnbGVNb3JlKGZhbHNlKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgKEN1c3RvbUNvbGxhcHNlZCA/IDxDdXN0b21Db2xsYXBzZWQgYWN0aW9uPXtwcm9wcy5hY3Rpb259IHRvZ2dsZU1vcmU9e3Byb3BzLnRvZ2dsZU1vcmV9IC8+IDogPGRpdiBzdHlsZT17c3R5bGVzLnNlZU1vcmV9IG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgcHJvcHMudG9nZ2xlTW9yZSh0cnVlKVxuICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzdHlsZXMuc2VlTW9yZUljb259PuKMgzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17c3R5bGVzLnNlZU1vcmVUZXh0fT5TZWUgbW9yZTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgIClcbn1cblxuY29uc3Qgc3R5bGVzOiBhbnkgPSB7XG4gICAgc2VlTW9yZToge1xuICAgICAgICBoZWlnaHQ6IFwiMTB2aFwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMikpXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gICAgICAgIGJvdHRvbTogMFxuICAgIH0sXG4gICAgc2VlTW9yZUV4cGFuZGVkOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgekluZGV4OiA5OTk5OVxuICAgIH0sXG4gICAgc2VlTW9yZVRleHQ6IHtcbiAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiBcIjAuMWVtXCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIyLjJ2aFwiLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICAgICAgb3BhY2l0eTogXCIxXCIsXG4gICAgICAgIGZvbnRTaXplOiBcIjAuOGVtXCIsXG4gICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dFwiXG4gICAgfSxcbiAgICBzZWVNb3JlSWNvbjoge1xuICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgIGxldHRlclNwYWNpbmc6IFwiMC4yZW1cIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjAuNHZoXCIsXG4gICAgICAgIG9wYWNpdHk6IFwiMVwiLFxuICAgICAgICBmaWx0ZXI6IFwiZHJvcC1zaGFkb3coMCAwIDVweCBibGFjaylcIixcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gICAgICAgIHRyYW5zaXRpb246IFwib3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dFwiXG4gICAgfSxcbiAgICBzZWVNb3JlQ2xvc2U6IHtcbiAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgZmlsdGVyOiBcImRyb3Atc2hhZG93KDAgM3B4IDJweCAjY2NjKVwiLFxuICAgICAgICByaWdodDogXCIwLjVyZW1cIixcbiAgICAgICAgdG9wOiBcIjAuNXJlbVwiLFxuICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcbiAgICAgICAgb3BhY2l0eTogXCIwLjdcIixcbiAgICAgICAgcGFkZGluZzogXCIxcmVtXCJcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TcGlubmVyXCI7XG5pbXBvcnQgeyBSZW5kZXJlciwgVGVzdGVyIH0gZnJvbSBcIi4vLi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHsgU291bmQsIE11dGUsIFBsYXksIFBhdXNlIH0gZnJvbSBcIi4vd3JhcHBlcnMvaWNvbnNcIjtcbmltcG9ydCBXaXRoSGVhZGVyIGZyb20gXCIuL3dyYXBwZXJzL3dpdGhIZWFkZXJcIjtcbmltcG9ydCBXaXRoU2VlTW9yZSBmcm9tIFwiLi93cmFwcGVycy93aXRoU2VlTW9yZVwiO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyZXI6IFJlbmRlcmVyID0gKHtcbiAgc3RvcnksXG4gIGFjdGlvbixcbiAgaXNQYXVzZWQsXG4gIGNvbmZpZyxcbiAgbWVzc2FnZUhhbmRsZXIsXG59KSA9PiB7XG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttdXRlZCwgc2V0TXV0ZWRdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCwgbG9hZGVyLCBzdG9yeVN0eWxlcyB9ID0gY29uZmlnO1xuXG4gIGxldCBjb21wdXRlZFN0eWxlcyA9IHtcbiAgICAuLi5zdHlsZXMuc3RvcnlDb250ZW50LFxuICAgIC4uLihzdG9yeVN0eWxlcyB8fCB7fSksXG4gIH07XG5cbiAgbGV0IHZpZCA9IFJlYWN0LnVzZVJlZjxIVE1MVmlkZW9FbGVtZW50PihudWxsKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2aWQuY3VycmVudCkge1xuICAgICAgaWYgKGlzUGF1c2VkKSB7XG4gICAgICAgIHZpZC5jdXJyZW50LnBhdXNlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aWQuY3VycmVudC5wbGF5KCkuY2F0Y2goKCkgPT4ge30pO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2lzUGF1c2VkXSk7XG5cbiAgY29uc3Qgb25XYWl0aW5nID0gKCkgPT4ge1xuICAgIGFjdGlvbihcInBhdXNlXCIsIHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uUGxheWluZyA9ICgpID0+IHtcbiAgICBhY3Rpb24oXCJwbGF5XCIsIHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IHZpZGVvTG9hZGVkID0gKCkgPT4ge1xuICAgIG1lc3NhZ2VIYW5kbGVyKFwiVVBEQVRFX1ZJREVPX0RVUkFUSU9OXCIsIHsgZHVyYXRpb246IHZpZC5jdXJyZW50LmR1cmF0aW9uIH0pO1xuICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICB2aWQuY3VycmVudFxuICAgICAgLnBsYXkoKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBhY3Rpb24oXCJwbGF5XCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHNldE11dGVkKHRydWUpO1xuICAgICAgICB2aWQuY3VycmVudC5wbGF5KCkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgYWN0aW9uKFwicGxheVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxXaXRoSGVhZGVyIHN0b3J5PXtzdG9yeX0gZ2xvYmFsSGVhZGVyPXtjb25maWcuaGVhZGVyfT5cbiAgICAgIDxXaXRoU2VlTW9yZSBzdG9yeT17c3Rvcnl9IGFjdGlvbj17YWN0aW9ufT5cbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLnZpZGVvQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYnV0dG9uc0NvbnRhaW5lcn0+XG4gICAgICAgICAgICB7bXV0ZWQgPyAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5idXR0b25DaXJjbGV9IG9uQ2xpY2s9eygpID0+IHNldE11dGVkKGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgPFNvdW5kIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmJ1dHRvbkNpcmNsZX0gb25DbGljaz17KCkgPT4gc2V0TXV0ZWQodHJ1ZSl9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI1cHggMCAwIDVweFwiLCBtYXJnaW5Ub3A6IFwiOXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICA8TXV0ZSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7aXNQYXVzZWQgPyAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5idXR0b25DaXJjbGV9IG9uQ2xpY2s9e29uUGxheWluZ30+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjVweCAwIDAgNXB4XCIsIG1hcmdpbjogXCI2cHggMCAwIDZweFwiIH19PlxuICAgICAgICAgICAgICAgICAgPFBsYXkgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuYnV0dG9uQ2lyY2xlfSBvbkNsaWNrPXtvbldhaXRpbmd9PlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI1cHggMCAwIDFweFwiLCBtYXJnaW46IFwiNnB4IDAgMCA0cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgIDxQYXVzZSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgIHJlZj17dmlkfVxuICAgICAgICAgICAgc3R5bGU9e2NvbXB1dGVkU3R5bGVzfVxuICAgICAgICAgICAgc3JjPXtzdG9yeS51cmx9XG4gICAgICAgICAgICBjb250cm9scz17ZmFsc2V9XG4gICAgICAgICAgICBvbkxvYWRlZERhdGE9e3ZpZGVvTG9hZGVkfVxuICAgICAgICAgICAgcGxheXNJbmxpbmVcbiAgICAgICAgICAgIG9uV2FpdGluZz17b25XYWl0aW5nfVxuICAgICAgICAgICAgb25QbGF5aW5nPXtvblBsYXlpbmd9XG4gICAgICAgICAgICBtdXRlZD17bXV0ZWR9XG4gICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgd2Via2l0LXBsYXlzaW5saW5lPVwidHJ1ZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICB7IWxvYWRlZCAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuOSlcIixcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDksXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjY2NjXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsb2FkZXIgfHwgPFNwaW5uZXIgLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvV2l0aFNlZU1vcmU+XG4gICAgPC9XaXRoSGVhZGVyPlxuICApO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBzdG9yeUNvbnRlbnQ6IHtcbiAgICB3aWR0aDogXCJhdXRvXCIsXG4gICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgIG1heEhlaWdodDogXCIxMDAlXCIsXG4gICAgbWFyZ2luOiBcImF1dG9cIixcbiAgfSxcbiAgdmlkZW9Db250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICB9LFxuICBidXR0b25zQ29udGFpbmVyOiB7XG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIiBhcyBjb25zdCxcbiAgICBib3R0b206IFwiNDBweFwiLFxuICAgIHJpZ2h0OiBcIjMwcHhcIixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIGFzIGNvbnN0LFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICB6SW5kZXg6IDEwMDAsXG4gICAgaGVpZ2h0OiBcIjE1MHB4XCIsXG4gIH0sXG4gIGJ1dHRvbkNpcmNsZToge1xuICAgIHdpZHRoOiBcIjY0cHhcIixcbiAgICBoZWlnaHQ6IFwiNjRweFwiLFxuICAgIGJvcmRlclJhZGl1czogXCI2NHB4XCIsXG4gICAgYmFja2dyb3VuZDogXCIjMEYwRjE5XCIsXG4gICAgb3BhY2l0eTogMC42LFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0ZXI6IFRlc3RlciA9IChzdG9yeSkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvbmRpdGlvbjogc3RvcnkudHlwZSA9PT0gXCJ2aWRlb1wiLFxuICAgIHByaW9yaXR5OiAyLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICByZW5kZXJlcixcbiAgdGVzdGVyLFxufTtcbiIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlbmRlcmVyLCBUZXN0ZXIgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyZXI6IFJlbmRlcmVyID0gKHsgc3RvcnksIGFjdGlvbiB9KSA9PiB7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYWN0aW9uKCdwbGF5Jyk7XG4gICAgfSwgW3N0b3J5XSlcblxuICAgIHJldHVybiA8ZGl2IHN0eWxlPXtzdHlsZXMuc3RvcnlDb250ZW50fT5cbiAgICAgICAgPHAgc3R5bGU9e3N0eWxlcy50ZXh0fT5UaGlzIHN0b3J5IGNvdWxkIG5vdCBiZSBsb2FkZWQuPC9wPlxuICAgIDwvZGl2PlxufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgc3RvcnlDb250ZW50OiB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgbWF4SGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgbWFyZ2luOiBcImF1dG9cIlxuICAgIH0sXG4gICAgdGV4dDoge1xuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcbiAgICAgICAgd2lkdGg6ICc5MCUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0ZXI6IFRlc3RlciA9ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb25kaXRpb246IHRydWUsXG4gICAgICAgIHByaW9yaXR5OiAxXG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlcmVyLFxuICAgIHRlc3RlclxufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlbmRlcmVyLCBUZXN0ZXIgfSBmcm9tICcuLy4uL2ludGVyZmFjZXMnO1xuXG5leHBvcnQgY29uc3QgcmVuZGVyZXI6IFJlbmRlcmVyID0gKHByb3BzKSA9PiB7XG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcHJvcHMuYWN0aW9uKCdwbGF5Jyk7XG4gICAgfSwgW3Byb3BzLnN0b3J5XSlcbiAgICBjb25zdCBDb250ZW50ID0gcHJvcHMuc3Rvcnkub3JpZ2luYWxDb250ZW50O1xuICAgIHJldHVybiA8Q29udGVudCB7Li4ucHJvcHN9IC8+XG59XG5cbmV4cG9ydCBjb25zdCB0ZXN0ZXI6IFRlc3RlciA9IChzdG9yeSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbmRpdGlvbjogISFzdG9yeS5jb250ZW50LFxuICAgICAgICBwcmlvcml0eTogMlxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlcmVyLFxuICAgIHRlc3RlclxufSJdLCJzb3VyY2VSb290IjoiIn0=
