parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    aSor: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.render = F),
          (exports.hydrate = H),
          (exports.h = exports.createElement = f),
          (exports.Fragment = h),
          (exports.createRef = d),
          (exports.Component = v),
          (exports.cloneElement = O),
          (exports.createContext = R),
          (exports.toChildArray = b),
          (exports.__u = M),
          (exports.options = exports.isValidElement = void 0);
        var e,
          t,
          n,
          _,
          l,
          o,
          r,
          u = {},
          i = [],
          s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
        function p(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function c(e) {
          var t = e.parentNode;
          t && t.removeChild(e);
        }
        function f(e, t, n) {
          var _,
            l,
            o,
            r = arguments,
            u = {};
          for (o in t)
            "key" == o ? (_ = t[o]) : "ref" == o ? (l = t[o]) : (u[o] = t[o]);
          if (arguments.length > 3)
            for (n = [n], o = 3; o < arguments.length; o++) n.push(r[o]);
          if (
            (null != n && (u.children = n),
            "function" == typeof e && null != e.defaultProps)
          )
            for (o in e.defaultProps)
              void 0 === u[o] && (u[o] = e.defaultProps[o]);
          return a(e, u, _, l, null);
        }
        function a(t, n, _, l, o) {
          var r = {
            type: t,
            props: n,
            key: _,
            ref: l,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: o,
          };
          return null == o && (r.__v = r), null != e.vnode && e.vnode(r), r;
        }
        function d() {
          return { current: null };
        }
        function h(e) {
          return e.children;
        }
        function v(e, t) {
          (this.props = e), (this.context = t);
        }
        function y(e, t) {
          if (null == t) return e.__ ? y(e.__, e.__.__k.indexOf(e) + 1) : null;
          for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
          return "function" == typeof e.type ? y(e) : null;
        }
        function m(e) {
          var t, n;
          if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
              if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break;
              }
            return m(e);
          }
        }
        function g(t) {
          ((!t.__d && (t.__d = !0) && n.push(t) && !k.__r++) ||
            l !== e.debounceRendering) &&
            ((l = e.debounceRendering) || _)(k);
        }
        function k() {
          for (var e; (k.__r = n.length); )
            (e = n.sort(function (e, t) {
              return e.__v.__b - t.__v.__b;
            })),
              (n = []),
              e.some(function (e) {
                var t, n, _, l, o, r, u;
                e.__d &&
                  ((r = (o = (t = e).__v).__e),
                  (u = t.__P) &&
                    ((n = []),
                    ((_ = p({}, o)).__v = _),
                    (l = A(
                      u,
                      o,
                      _,
                      t.__n,
                      void 0 !== u.ownerSVGElement,
                      null != o.__h ? [r] : null,
                      n,
                      null == r ? y(o) : r,
                      o.__h
                    )),
                    D(n, o),
                    l != r && m(o)));
              });
        }
        function x(e, t, n, _, l, o, r, s, p, f) {
          var d,
            v,
            m,
            g,
            k,
            x,
            b,
            w = (_ && _.__k) || i,
            S = w.length;
          for (
            p == u && (p = null != r ? r[0] : S ? y(_, 0) : null),
              n.__k = [],
              d = 0;
            d < t.length;
            d++
          )
            if (
              null !=
              (g = n.__k[d] =
                null == (g = t[d]) || "boolean" == typeof g
                  ? null
                  : "string" == typeof g || "number" == typeof g
                  ? a(null, g, null, null, g)
                  : Array.isArray(g)
                  ? a(h, { children: g }, null, null, null)
                  : null != g.__e || null != g.__c
                  ? a(g.type, g.props, g.key, null, g.__v)
                  : g)
            ) {
              if (
                ((g.__ = n),
                (g.__b = n.__b + 1),
                null === (m = w[d]) ||
                  (m && g.key == m.key && g.type === m.type))
              )
                w[d] = void 0;
              else
                for (v = 0; v < S; v++) {
                  if ((m = w[v]) && g.key == m.key && g.type === m.type) {
                    w[v] = void 0;
                    break;
                  }
                  m = null;
                }
              (k = A(e, g, (m = m || u), l, o, r, s, p, f)),
                (v = g.ref) &&
                  m.ref != v &&
                  (b || (b = []),
                  m.ref && b.push(m.ref, null, g),
                  b.push(v, g.__c || k, g)),
                null != k
                  ? (null == x && (x = k),
                    (p = C(e, g, m, w, r, k, p)),
                    f || "option" != n.type
                      ? "function" == typeof n.type && (n.__d = p)
                      : (e.value = ""))
                  : p && m.__e == p && p.parentNode != e && (p = y(m));
            }
          if (((n.__e = x), null != r && "function" != typeof n.type))
            for (d = r.length; d--; ) null != r[d] && c(r[d]);
          for (d = S; d--; ) null != w[d] && M(w[d], w[d]);
          if (b) for (d = 0; d < b.length; d++) L(b[d], b[++d], b[++d]);
        }
        function b(e, t) {
          return (
            (t = t || []),
            null == e ||
              "boolean" == typeof e ||
              (Array.isArray(e)
                ? e.some(function (e) {
                    b(e, t);
                  })
                : t.push(e)),
            t
          );
        }
        function C(e, t, n, _, l, o, r) {
          var u, i, s;
          if (void 0 !== t.__d) (u = t.__d), (t.__d = void 0);
          else if (l == n || o != r || null == o.parentNode)
            e: if (null == r || r.parentNode !== e)
              e.appendChild(o), (u = null);
            else {
              for (i = r, s = 0; (i = i.nextSibling) && s < _.length; s += 2)
                if (i == o) break e;
              e.insertBefore(o, r), (u = r);
            }
          return void 0 !== u ? u : o.nextSibling;
        }
        function w(e, t, n, _, l) {
          var o;
          for (o in n)
            "children" === o || "key" === o || o in t || P(e, o, null, n[o], _);
          for (o in t)
            (l && "function" != typeof t[o]) ||
              "children" === o ||
              "key" === o ||
              "value" === o ||
              "checked" === o ||
              n[o] === t[o] ||
              P(e, o, t[o], n[o], _);
        }
        function S(e, t, n) {
          "-" === t[0]
            ? e.setProperty(t, n)
            : (e[t] =
                null == n
                  ? ""
                  : "number" != typeof n || s.test(t)
                  ? n
                  : n + "px");
        }
        function P(e, t, n, _, l) {
          var o, r, u;
          if ((l && "className" == t && (t = "class"), "style" === t))
            if ("string" == typeof n) e.style.cssText = n;
            else {
              if (("string" == typeof _ && (e.style.cssText = _ = ""), _))
                for (t in _) (n && t in n) || S(e.style, t, "");
              if (n) for (t in n) (_ && n[t] === _[t]) || S(e.style, t, n[t]);
            }
          else
            "o" === t[0] && "n" === t[1]
              ? ((o = t !== (t = t.replace(/Capture$/, ""))),
                (r = t.toLowerCase()) in e && (t = r),
                (t = t.slice(2)),
                e.l || (e.l = {}),
                (e.l[t + o] = n),
                (u = o ? N : E),
                n
                  ? _ || e.addEventListener(t, u, o)
                  : e.removeEventListener(t, u, o))
              : "list" !== t &&
                "tagName" !== t &&
                "form" !== t &&
                "type" !== t &&
                "size" !== t &&
                "download" !== t &&
                "href" !== t &&
                !l &&
                t in e
              ? (e[t] = null == n ? "" : n)
              : "function" != typeof n &&
                "dangerouslySetInnerHTML" !== t &&
                (t !== (t = t.replace(/xlink:?/, ""))
                  ? null == n || !1 === n
                    ? e.removeAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        t.toLowerCase()
                      )
                    : e.setAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        t.toLowerCase(),
                        n
                      )
                  : null == n || (!1 === n && !/^ar/.test(t))
                  ? e.removeAttribute(t)
                  : e.setAttribute(t, n));
        }
        function E(t) {
          this.l[t.type + !1](e.event ? e.event(t) : t);
        }
        function N(t) {
          this.l[t.type + !0](e.event ? e.event(t) : t);
        }
        function U(e, t, n) {
          var _, l;
          for (_ = 0; _ < e.__k.length; _++)
            (l = e.__k[_]) &&
              ((l.__ = e),
              l.__e &&
                ("function" == typeof l.type && l.__k.length > 1 && U(l, t, n),
                (t = C(n, l, l, e.__k, null, l.__e, t)),
                "function" == typeof e.type && (e.__d = t)));
        }
        function A(t, n, _, l, o, r, u, i, s) {
          var c,
            f,
            a,
            d,
            y,
            m,
            g,
            k,
            b,
            C,
            w,
            S = n.type;
          if (void 0 !== n.constructor) return null;
          null != _.__h &&
            ((s = _.__h), (i = n.__e = _.__e), (n.__h = null), (r = [i])),
            (c = e.__b) && c(n);
          try {
            e: if ("function" == typeof S) {
              if (
                ((k = n.props),
                (b = (c = S.contextType) && l[c.__c]),
                (C = c ? (b ? b.props.value : c.__) : l),
                _.__c
                  ? (g = (f = n.__c = _.__c).__ = f.__E)
                  : ("prototype" in S && S.prototype.render
                      ? (n.__c = f = new S(k, C))
                      : ((n.__c = f = new v(k, C)),
                        (f.constructor = S),
                        (f.render = W)),
                    b && b.sub(f),
                    (f.props = k),
                    f.state || (f.state = {}),
                    (f.context = C),
                    (f.__n = l),
                    (a = f.__d = !0),
                    (f.__h = [])),
                null == f.__s && (f.__s = f.state),
                null != S.getDerivedStateFromProps &&
                  (f.__s == f.state && (f.__s = p({}, f.__s)),
                  p(f.__s, S.getDerivedStateFromProps(k, f.__s))),
                (d = f.props),
                (y = f.state),
                a)
              )
                null == S.getDerivedStateFromProps &&
                  null != f.componentWillMount &&
                  f.componentWillMount(),
                  null != f.componentDidMount &&
                    f.__h.push(f.componentDidMount);
              else {
                if (
                  (null == S.getDerivedStateFromProps &&
                    k !== d &&
                    null != f.componentWillReceiveProps &&
                    f.componentWillReceiveProps(k, C),
                  (!f.__e &&
                    null != f.shouldComponentUpdate &&
                    !1 === f.shouldComponentUpdate(k, f.__s, C)) ||
                    n.__v === _.__v)
                ) {
                  (f.props = k),
                    (f.state = f.__s),
                    n.__v !== _.__v && (f.__d = !1),
                    (f.__v = n),
                    (n.__e = _.__e),
                    (n.__k = _.__k),
                    f.__h.length && u.push(f),
                    U(n, i, t);
                  break e;
                }
                null != f.componentWillUpdate &&
                  f.componentWillUpdate(k, f.__s, C),
                  null != f.componentDidUpdate &&
                    f.__h.push(function () {
                      f.componentDidUpdate(d, y, m);
                    });
              }
              (f.context = C),
                (f.props = k),
                (f.state = f.__s),
                (c = e.__r) && c(n),
                (f.__d = !1),
                (f.__v = n),
                (f.__P = t),
                (c = f.render(f.props, f.state, f.context)),
                (f.state = f.__s),
                null != f.getChildContext &&
                  (l = p(p({}, l), f.getChildContext())),
                a ||
                  null == f.getSnapshotBeforeUpdate ||
                  (m = f.getSnapshotBeforeUpdate(d, y)),
                (w =
                  null != c && c.type == h && null == c.key
                    ? c.props.children
                    : c),
                x(t, Array.isArray(w) ? w : [w], n, _, l, o, r, u, i, s),
                (f.base = n.__e),
                (n.__h = null),
                f.__h.length && u.push(f),
                g && (f.__E = f.__ = null),
                (f.__e = !1);
            } else
              null == r && n.__v === _.__v
                ? ((n.__k = _.__k), (n.__e = _.__e))
                : (n.__e = T(_.__e, n, _, l, o, r, u, s));
            (c = e.diffed) && c(n);
          } catch (t) {
            (n.__v = null),
              (s || null != r) &&
                ((n.__e = i), (n.__h = !!s), (r[r.indexOf(i)] = null)),
              e.__e(t, n, _);
          }
          return n.__e;
        }
        function D(t, n) {
          e.__c && e.__c(n, t),
            t.some(function (n) {
              try {
                (t = n.__h),
                  (n.__h = []),
                  t.some(function (e) {
                    e.call(n);
                  });
              } catch (t) {
                e.__e(t, n.__v);
              }
            });
        }
        function T(e, t, n, _, l, o, r, s) {
          var p,
            c,
            f,
            a,
            d,
            h = n.props,
            v = t.props;
          if (((l = "svg" === t.type || l), null != o))
            for (p = 0; p < o.length; p++)
              if (
                null != (c = o[p]) &&
                ((null === t.type
                  ? 3 === c.nodeType
                  : c.localName === t.type) ||
                  e == c)
              ) {
                (e = c), (o[p] = null);
                break;
              }
          if (null == e) {
            if (null === t.type) return document.createTextNode(v);
            (e = l
              ? document.createElementNS("http://www.w3.org/2000/svg", t.type)
              : document.createElement(t.type, v.is && { is: v.is })),
              (o = null),
              (s = !1);
          }
          if (null === t.type) h === v || (s && e.data === v) || (e.data = v);
          else {
            if (
              (null != o && (o = i.slice.call(e.childNodes)),
              (f = (h = n.props || u).dangerouslySetInnerHTML),
              (a = v.dangerouslySetInnerHTML),
              !s)
            ) {
              if (null != o)
                for (h = {}, d = 0; d < e.attributes.length; d++)
                  h[e.attributes[d].name] = e.attributes[d].value;
              (a || f) &&
                ((a &&
                  ((f && a.__html == f.__html) || a.__html === e.innerHTML)) ||
                  (e.innerHTML = (a && a.__html) || ""));
            }
            w(e, v, h, l, s),
              a
                ? (t.__k = [])
                : ((p = t.props.children),
                  x(
                    e,
                    Array.isArray(p) ? p : [p],
                    t,
                    n,
                    _,
                    "foreignObject" !== t.type && l,
                    o,
                    r,
                    u,
                    s
                  )),
              s ||
                ("value" in v &&
                  void 0 !== (p = v.value) &&
                  (p !== e.value || ("progress" === t.type && !p)) &&
                  P(e, "value", p, h.value, !1),
                "checked" in v &&
                  void 0 !== (p = v.checked) &&
                  p !== e.checked &&
                  P(e, "checked", p, h.checked, !1));
          }
          return e;
        }
        function L(t, n, _) {
          try {
            "function" == typeof t ? t(n) : (t.current = n);
          } catch (t) {
            e.__e(t, _);
          }
        }
        function M(t, n, _) {
          var l, o, r;
          if (
            (e.unmount && e.unmount(t),
            (l = t.ref) &&
              ((l.current && l.current !== t.__e) || L(l, null, n)),
            _ || "function" == typeof t.type || (_ = null != (o = t.__e)),
            (t.__e = t.__d = void 0),
            null != (l = t.__c))
          ) {
            if (l.componentWillUnmount)
              try {
                l.componentWillUnmount();
              } catch (t) {
                e.__e(t, n);
              }
            l.base = l.__P = null;
          }
          if ((l = t.__k)) for (r = 0; r < l.length; r++) l[r] && M(l[r], n, _);
          null != o && c(o);
        }
        function W(e, t, n) {
          return this.constructor(e, n);
        }
        function F(t, n, _) {
          var l, r, s;
          e.__ && e.__(t, n),
            (r = (l = _ === o) ? null : (_ && _.__k) || n.__k),
            (t = f(h, null, [t])),
            (s = []),
            A(
              n,
              ((l ? n : _ || n).__k = t),
              r || u,
              u,
              void 0 !== n.ownerSVGElement,
              _ && !l
                ? [_]
                : r
                ? null
                : n.childNodes.length
                ? i.slice.call(n.childNodes)
                : null,
              s,
              _ || u,
              l
            ),
            D(s, t);
        }
        function H(e, t) {
          F(e, t, o);
        }
        function O(e, t, n) {
          var _,
            l,
            o,
            r = arguments,
            u = p({}, e.props);
          for (o in t)
            "key" == o ? (_ = t[o]) : "ref" == o ? (l = t[o]) : (u[o] = t[o]);
          if (arguments.length > 3)
            for (n = [n], o = 3; o < arguments.length; o++) n.push(r[o]);
          return (
            null != n && (u.children = n),
            a(e.type, u, _ || e.key, l || e.ref, null)
          );
        }
        function R(e, t) {
          var n = {
            __c: (t = "__cC" + r++),
            __: e,
            Consumer: function (e, t) {
              return e.children(t);
            },
            Provider: function (e, n, _) {
              return (
                this.getChildContext ||
                  ((n = []),
                  ((_ = {})[t] = this),
                  (this.getChildContext = function () {
                    return _;
                  }),
                  (this.shouldComponentUpdate = function (e) {
                    this.props.value !== e.value && n.some(g);
                  }),
                  (this.sub = function (e) {
                    n.push(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function () {
                      n.splice(n.indexOf(e), 1), t && t.call(e);
                    };
                  })),
                e.children
              );
            },
          };
          return (n.Provider.__ = n.Consumer.contextType = n);
        }
        (exports.isValidElement = t),
          (exports.options = e),
          (exports.options = e = {
            __e: function (e, t) {
              for (var n, _, l, o = t.__h; (t = t.__); )
                if ((n = t.__c) && !n.__)
                  try {
                    if (
                      ((_ = n.constructor) &&
                        null != _.getDerivedStateFromError &&
                        (n.setState(_.getDerivedStateFromError(e)),
                        (l = n.__d)),
                      null != n.componentDidCatch &&
                        (n.componentDidCatch(e), (l = n.__d)),
                      l)
                    )
                      return (t.__h = o), (n.__E = n);
                  } catch (t) {
                    e = t;
                  }
              throw e;
            },
          }),
          (exports.isValidElement = t = function (e) {
            return null != e && void 0 === e.constructor;
          }),
          (v.prototype.setState = function (e, t) {
            var n;
            (n =
              null != this.__s && this.__s !== this.state
                ? this.__s
                : (this.__s = p({}, this.state))),
              "function" == typeof e && (e = e(p({}, n), this.props)),
              e && p(n, e),
              null != e && this.__v && (t && this.__h.push(t), g(this));
          }),
          (v.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), g(this));
          }),
          (v.prototype.render = h),
          (n = []),
          (_ =
            "function" == typeof Promise
              ? Promise.prototype.then.bind(Promise.resolve())
              : setTimeout),
          (k.__r = 0),
          (o = u),
          (r = 0);
      },
      {},
    ],
    wGC4: [
      function (require, module, exports) {
        "use strict";
        var e = require("preact"),
          r = function () {
            return (0, e.h)("h1", null, "Hello from Preact and Typescript!");
          };
        (0, e.render)((0, e.h)(r, null), document.getElementById("root"));
      },
      { preact: "aSor" },
    ],
  },
  {},
  ["wGC4"],
  null
);
//# sourceMappingURL=/js/src.9fcb50ea.js.map
