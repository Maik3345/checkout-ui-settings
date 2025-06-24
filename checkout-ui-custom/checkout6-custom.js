var Gn = Object.defineProperty,
  Qn = Object.defineProperties;
var er = Object.getOwnPropertyDescriptors;
var Ht = Object.getOwnPropertySymbols;
var tr = Object.prototype.hasOwnProperty,
  nr = Object.prototype.propertyIsEnumerable;
var qe = (U, k, T) => (k in U ? Gn(U, k, { enumerable: !0, configurable: !0, writable: !0, value: T }) : (U[k] = T)),
  Bt = (U, k) => {
    for (var T in k || (k = {})) tr.call(k, T) && qe(U, T, k[T]);
    if (Ht) for (var T of Ht(k)) nr.call(k, T) && qe(U, T, k[T]);
    return U;
  },
  Jt = (U, k) => Qn(U, er(k));
var se = (U, k, T) => qe(U, typeof k != 'symbol' ? k + '' : k, T);
var ee = (U, k, T) =>
  new Promise((ce, K) => {
    var le = (D) => {
        try {
          j(T.next(D));
        } catch (te) {
          K(te);
        }
      },
      X = (D) => {
        try {
          j(T.throw(D));
        } catch (te) {
          K(te);
        }
      },
      j = (D) => (D.done ? ce(D.value) : Promise.resolve(D.value).then(le, X));
    j((T = T.apply(U, k)).next());
  });
(function () {
  'use strict';
  var U = document.createElement('style');
  (U.textContent = `._cartContainer_upwqr_1{color:red;padding:15px;border:1px solid #e0e0e0;border-radius:4px;margin:10px 0;background-color:#fff}._cartTitle_upwqr_10{font-size:20px;margin-bottom:15px;font-weight:700;color:#333}._cartItem_upwqr_17{padding:10px;margin-bottom:8px;border-bottom:1px solid #f0f0f0}._cartEmpty_upwqr_23{padding:20px;text-align:center;color:#757575;font-style:italic}._inputField_upwqr_30{padding:8px;margin:10px 0;border:1px solid #ddd;border-radius:4px}.cart-container-custom{background-color:#eaeaea}
/*$vite$:1*/`),
    document.head.appendChild(U);
  const k = {},
    T = (e, t) => (e.unstable_is ? e.unstable_is(t) : t === e),
    ce = (e) => 'init' in e,
    K = (e) => !!e.write,
    le = (e) => 'v' in e || 'e' in e,
    X = (e) => {
      if ('e' in e) throw e.e;
      if ((k ? 'production' : void 0) !== 'production' && !('v' in e))
        throw new Error('[Bug] atom state is not initialized');
      return e.v;
    },
    j = new WeakMap(),
    D = (e) => {
      var t;
      return ae(e) && !!((t = j.get(e)) != null && t[0]);
    },
    te = (e) => {
      const t = j.get(e);
      t != null && t[0] && ((t[0] = !1), t[1].forEach((n) => n()));
    },
    ze = (e, t) => {
      let n = j.get(e);
      if (!n) {
        (n = [!0, new Set()]), j.set(e, n);
        const r = () => {
          n[0] = !1;
        };
        e.then(r, r);
      }
      n[1].add(t);
    },
    ae = (e) => typeof (e == null ? void 0 : e.then) == 'function',
    He = (e, t, n) => {
      n.p.has(e) ||
        (n.p.add(e),
        t.then(
          () => {
            n.p.delete(e);
          },
          () => {
            n.p.delete(e);
          }
        ));
    },
    Se = (e, t, n) => {
      const r = n(e),
        o = 'v' in r,
        i = r.v;
      if (ae(t)) for (const _ of r.d.keys()) He(e, t, n(_));
      (r.v = t), delete r.e, (!o || !Object.is(i, r.v)) && (++r.n, ae(i) && te(i));
    },
    Be = (e, t, n) => {
      var r;
      const o = new Set();
      for (const i of ((r = n.get(e)) == null ? void 0 : r.t) || []) n.has(i) && o.add(i);
      for (const i of t.p) o.add(i);
      return o;
    },
    Kt = () => {
      const e = new Set(),
        t = () => {
          e.forEach((n) => n());
        };
      return (
        (t.add = (n) => (
          e.add(n),
          () => {
            e.delete(n);
          }
        )),
        t
      );
    },
    Ee = () => {
      const e = {},
        t = new WeakMap(),
        n = (r) => {
          var o, i;
          (o = t.get(e)) == null || o.forEach((_) => _(r)), (i = t.get(r)) == null || i.forEach((_) => _());
        };
      return (
        (n.add = (r, o) => {
          const i = r || e,
            _ = (t.has(i) ? t : t.set(i, new Set())).get(i);
          return (
            _.add(o),
            () => {
              _ == null || _.delete(o), _.size || t.delete(i);
            }
          );
        }),
        n
      );
    },
    Xt = (e) => (e.c || (e.c = Ee()), e.m || (e.m = Ee()), e.u || (e.u = Ee()), e.f || (e.f = Kt()), e),
    Yt = Symbol(),
    Je = (
      e = new WeakMap(),
      t = new WeakMap(),
      n = new WeakMap(),
      r = new Set(),
      o = new Set(),
      i = new Set(),
      _ = {},
      c = (u, ...d) => u.read(...d),
      a = (u, ...d) => u.write(...d),
      l = (u, d) => {
        var w;
        return (w = u.unstable_onInit) == null ? void 0 : w.call(u, d);
      },
      p = (u, d) => {
        var w;
        return (w = u.onMount) == null ? void 0 : w.call(u, d);
      },
      ...s
    ) => {
      const u =
          s[0] ||
          ((f) => {
            if ((k ? 'production' : void 0) !== 'production' && !f) throw new Error('Atom is undefined or null');
            let b = e.get(f);
            return b || ((b = { d: new Map(), p: new Set(), n: 0 }), e.set(f, b), l == null || l(f, F)), b;
          }),
        d =
          s[1] ||
          (() => {
            const f = [],
              b = (m) => {
                try {
                  m();
                } catch (y) {
                  f.push(y);
                }
              };
            do {
              _.f && b(_.f);
              const m = new Set(),
                y = m.add.bind(m);
              r.forEach((h) => {
                var v;
                return (v = t.get(h)) == null ? void 0 : v.l.forEach(y);
              }),
                r.clear(),
                i.forEach(y),
                i.clear(),
                o.forEach(y),
                o.clear(),
                m.forEach(b),
                r.size && w();
            } while (r.size || i.size || o.size);
            if (f.length) throw new AggregateError(f);
          }),
        w =
          s[2] ||
          (() => {
            const f = [],
              b = new WeakSet(),
              m = new WeakSet(),
              y = Array.from(r);
            for (; y.length; ) {
              const h = y[y.length - 1],
                v = u(h);
              if (m.has(h)) {
                y.pop();
                continue;
              }
              if (b.has(h)) {
                if (n.get(h) === v.n) f.push([h, v]);
                else if ((k ? 'production' : void 0) !== 'production' && n.has(h))
                  throw new Error('[Bug] invalidated atom exists');
                m.add(h), y.pop();
                continue;
              }
              b.add(h);
              for (const R of Be(h, v, t)) b.has(R) || y.push(R);
            }
            for (let h = f.length - 1; h >= 0; --h) {
              const [v, R] = f[h];
              let L = !1;
              for (const J of R.d.keys())
                if (J !== v && r.has(J)) {
                  L = !0;
                  break;
                }
              L && (N(v), E(v)), n.delete(v);
            }
          }),
        N =
          s[3] ||
          ((f) => {
            var b;
            const m = u(f);
            if (le(m) && ((t.has(f) && n.get(f) !== m.n) || Array.from(m.d).every(([x, we]) => N(x).n === we)))
              return m;
            m.d.clear();
            let y = !0;
            const h = () => {
                t.has(f) && (E(f), w(), d());
              },
              v = (x) => {
                var we;
                if (T(f, x)) {
                  const zt = u(x);
                  if (!le(zt))
                    if (ce(x)) Se(x, x.init, u);
                    else throw new Error('no atom init');
                  return X(zt);
                }
                const je = N(x);
                try {
                  return X(je);
                } finally {
                  m.d.set(x, je.n), D(m.v) && He(f, m.v, je), (we = t.get(x)) == null || we.t.add(f), y || h();
                }
              };
            let R, L;
            const J = {
                get signal() {
                  return R || (R = new AbortController()), R.signal;
                },
                get setSelf() {
                  return (
                    (k ? 'production' : void 0) !== 'production' &&
                      !K(f) &&
                      console.warn('setSelf function cannot be used with read-only atom'),
                    !L &&
                      K(f) &&
                      (L = (...x) => {
                        if (
                          ((k ? 'production' : void 0) !== 'production' &&
                            y &&
                            console.warn('setSelf function cannot be called in sync'),
                          !y)
                        )
                          try {
                            return S(f, ...x);
                          } finally {
                            w(), d();
                          }
                      }),
                    L
                  );
                },
              },
              be = m.n;
            try {
              const x = c(f, v, J);
              return Se(f, x, u), ae(x) && (ze(x, () => (R == null ? void 0 : R.abort())), x.then(h, h)), m;
            } catch (x) {
              return delete m.v, (m.e = x), ++m.n, m;
            } finally {
              (y = !1), be !== m.n && n.get(f) === be && (n.set(f, m.n), r.add(f), (b = _.c) == null || b.call(_, f));
            }
          }),
        A =
          s[4] ||
          ((f) => {
            const b = [f];
            for (; b.length; ) {
              const m = b.pop(),
                y = u(m);
              for (const h of Be(m, y, t)) {
                const v = u(h);
                n.set(h, v.n), b.push(h);
              }
            }
          }),
        S =
          s[5] ||
          ((f, ...b) => {
            let m = !0;
            const y = (v) => X(N(v)),
              h = (v, ...R) => {
                var L;
                const J = u(v);
                try {
                  if (T(f, v)) {
                    if (!ce(v)) throw new Error('atom not writable');
                    const be = J.n,
                      x = R[0];
                    Se(v, x, u), E(v), be !== J.n && (r.add(v), (L = _.c) == null || L.call(_, v), A(v));
                    return;
                  } else return S(v, ...R);
                } finally {
                  m || (w(), d());
                }
              };
            try {
              return a(f, y, h, ...b);
            } finally {
              m = !1;
            }
          }),
        E =
          s[6] ||
          ((f) => {
            var b;
            const m = u(f),
              y = t.get(f);
            if (y && !D(m.v)) {
              for (const [h, v] of m.d)
                if (!y.d.has(h)) {
                  const R = u(h);
                  W(h).t.add(f), y.d.add(h), v !== R.n && (r.add(h), (b = _.c) == null || b.call(_, h), A(h));
                }
              for (const h of y.d || [])
                if (!m.d.has(h)) {
                  y.d.delete(h);
                  const v = M(h);
                  v == null || v.t.delete(f);
                }
            }
          }),
        W =
          s[7] ||
          ((f) => {
            var b;
            const m = u(f);
            let y = t.get(f);
            if (!y) {
              N(f);
              for (const h of m.d.keys()) W(h).t.add(f);
              if (
                ((y = { l: new Set(), d: new Set(m.d.keys()), t: new Set() }),
                t.set(f, y),
                (b = _.m) == null || b.call(_, f),
                K(f))
              ) {
                const h = () => {
                  let v = !0;
                  const R = (...L) => {
                    try {
                      return S(f, ...L);
                    } finally {
                      v || (w(), d());
                    }
                  };
                  try {
                    const L = p(f, R);
                    L &&
                      (y.u = () => {
                        v = !0;
                        try {
                          L();
                        } finally {
                          v = !1;
                        }
                      });
                  } finally {
                    v = !1;
                  }
                };
                o.add(h);
              }
            }
            return y;
          }),
        M =
          s[8] ||
          ((f) => {
            var b;
            const m = u(f);
            let y = t.get(f);
            if (
              y &&
              !y.l.size &&
              !Array.from(y.t).some((h) => {
                var v;
                return (v = t.get(h)) == null ? void 0 : v.d.has(f);
              })
            ) {
              y.u && i.add(y.u), (y = void 0), t.delete(f), (b = _.u) == null || b.call(_, f);
              for (const h of m.d.keys()) {
                const v = M(h);
                v == null || v.t.delete(f);
              }
              return;
            }
            return y;
          }),
        Q = [e, t, n, r, o, i, _, c, a, l, p, u, d, w, N, A, S, E, W, M],
        F = {
          get: (f) => X(N(f)),
          set: (f, ...b) => {
            try {
              return S(f, ...b);
            } finally {
              w(), d();
            }
          },
          sub: (f, b) => {
            const y = W(f).l;
            return (
              y.add(b),
              d(),
              () => {
                y.delete(b), M(f), d();
              }
            );
          },
        };
      return Object.defineProperty(F, Yt, { value: Q }), F;
    },
    Zt = Xt,
    Ke = ze,
    ke = {};
  let Gt = 0;
  function Ce(e, t) {
    const n = `atom${++Gt}`,
      r = {
        toString() {
          return (ke ? 'production' : void 0) !== 'production' && this.debugLabel ? n + ':' + this.debugLabel : n;
        },
      };
    return (r.init = e), (r.read = Qt), (r.write = en), r;
  }
  function Qt(e) {
    return e(this);
  }
  function en(e, t, n) {
    return t(this, typeof n == 'function' ? n(e(this)) : n);
  }
  const tn = () => {
    let e = 0;
    const t = Zt({}),
      n = new WeakMap(),
      r = new WeakMap(),
      o = Je(n, r, void 0, void 0, void 0, void 0, t, void 0, (c, a, l, ...p) =>
        e ? l(c, ...p) : c.write(a, l, ...p)
      ),
      i = new Set();
    return (
      t.m.add(void 0, (c) => {
        i.add(c);
        const a = n.get(c);
        a.m = r.get(c);
      }),
      t.u.add(void 0, (c) => {
        i.delete(c);
        const a = n.get(c);
        delete a.m;
      }),
      Object.assign(o, {
        dev4_get_internal_weak_map: () => (console.log('Deprecated: Use devstore from the devtools library'), n),
        dev4_get_mounted_atoms: () => i,
        dev4_restore_atoms: (c) => {
          const a = {
            read: () => null,
            write: (l, p) => {
              ++e;
              try {
                for (const [s, u] of c) 'init' in s && p(s, u);
              } finally {
                --e;
              }
            },
          };
          o.set(a);
        },
      })
    );
  };
  function nn() {
    return (ke ? 'production' : void 0) !== 'production' ? tn() : Je();
  }
  let ne;
  function rn() {
    return (
      ne ||
        ((ne = nn()),
        (ke ? 'production' : void 0) !== 'production' &&
          (globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = ne),
          globalThis.__JOTAI_DEFAULT_STORE__ !== ne &&
            console.warn(
              'Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044'
            ))),
      ne
    );
  }
  var ue,
    g,
    Xe,
    q,
    Ye,
    Ze,
    Ge,
    Qe,
    Pe,
    $e,
    Ae,
    et,
    re = {},
    tt = [],
    on = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    oe = Array.isArray;
  function V(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function xe(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function z(e, t, n) {
    var r,
      o,
      i,
      _ = {};
    for (i in t) i == 'key' ? (r = t[i]) : i == 'ref' ? (o = t[i]) : (_[i] = t[i]);
    if (
      (arguments.length > 2 && (_.children = arguments.length > 3 ? ue.call(arguments, 2) : n),
      typeof e == 'function' && e.defaultProps != null)
    )
      for (i in e.defaultProps) _[i] === void 0 && (_[i] = e.defaultProps[i]);
    return fe(e, _, r, o, null);
  }
  function fe(e, t, n, r, o) {
    var i = {
      type: e,
      props: t,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: o == null ? ++Xe : o,
      __i: -1,
      __u: 0,
    };
    return o == null && g.vnode != null && g.vnode(i), i;
  }
  function H(e) {
    return e.children;
  }
  function O(e, t) {
    (this.props = e), (this.context = t);
  }
  function Y(e, t) {
    if (t == null) return e.__ ? Y(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++) if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
    return typeof e.type == 'function' ? Y(e) : null;
  }
  function nt(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return nt(e);
    }
  }
  function Te(e) {
    ((!e.__d && (e.__d = !0) && q.push(e) && !de.__r++) || Ye != g.debounceRendering) &&
      ((Ye = g.debounceRendering) || Ze)(de);
  }
  function de() {
    for (var e, t, n, r, o, i, _, c = 1; q.length; )
      q.length > c && q.sort(Ge),
        (e = q.shift()),
        (c = q.length),
        e.__d &&
          ((n = void 0),
          (o = (r = (t = e).__v).__e),
          (i = []),
          (_ = []),
          t.__P &&
            (((n = V({}, r)).__v = r.__v + 1),
            g.vnode && g.vnode(n),
            Ne(
              t.__P,
              n,
              r,
              t.__n,
              t.__P.namespaceURI,
              32 & r.__u ? [o] : null,
              i,
              o == null ? Y(r) : o,
              !!(32 & r.__u),
              _
            ),
            (n.__v = r.__v),
            (n.__.__k[n.__i] = n),
            st(i, n, _),
            n.__e != o && nt(n)));
    de.__r = 0;
  }
  function rt(e, t, n, r, o, i, _, c, a, l, p) {
    var s,
      u,
      d,
      w,
      N,
      A,
      S = (r && r.__k) || tt,
      E = t.length;
    for (a = _n(n, t, S, a, E), s = 0; s < E; s++)
      (d = n.__k[s]) != null &&
        ((u = d.__i == -1 ? re : S[d.__i] || re),
        (d.__i = s),
        (A = Ne(e, d, u, o, i, _, c, a, l, p)),
        (w = d.__e),
        d.ref && u.ref != d.ref && (u.ref && Re(u.ref, null, d), p.push(d.ref, d.__c || w, d)),
        N == null && w != null && (N = w),
        4 & d.__u || u.__k === d.__k
          ? (a = ot(d, a, e))
          : typeof d.type == 'function' && A !== void 0
            ? (a = A)
            : w && (a = w.nextSibling),
        (d.__u &= -7));
    return (n.__e = N), a;
  }
  function _n(e, t, n, r, o) {
    var i,
      _,
      c,
      a,
      l,
      p = n.length,
      s = p,
      u = 0;
    for (e.__k = new Array(o), i = 0; i < o; i++)
      (_ = t[i]) != null && typeof _ != 'boolean' && typeof _ != 'function'
        ? ((a = i + u),
          ((_ = e.__k[i] =
            typeof _ == 'string' || typeof _ == 'number' || typeof _ == 'bigint' || _.constructor == String
              ? fe(null, _, null, null, null)
              : oe(_)
                ? fe(H, { children: _ }, null, null, null)
                : _.constructor == null && _.__b > 0
                  ? fe(_.type, _.props, _.key, _.ref ? _.ref : null, _.__v)
                  : _).__ = e),
          (_.__b = e.__b + 1),
          (c = null),
          (l = _.__i = sn(_, n, a, s)) != -1 && (s--, (c = n[l]) && (c.__u |= 2)),
          c == null || c.__v == null
            ? (l == -1 && (o > p ? u-- : o < p && u++), typeof _.type != 'function' && (_.__u |= 4))
            : l != a && (l == a - 1 ? u-- : l == a + 1 ? u++ : (l > a ? u-- : u++, (_.__u |= 4))))
        : (e.__k[i] = null);
    if (s) for (i = 0; i < p; i++) (c = n[i]) != null && (2 & c.__u) == 0 && (c.__e == r && (r = Y(c)), lt(c, c));
    return r;
  }
  function ot(e, t, n) {
    var r, o;
    if (typeof e.type == 'function') {
      for (r = e.__k, o = 0; r && o < r.length; o++) r[o] && ((r[o].__ = e), (t = ot(r[o], t, n)));
      return t;
    }
    e.__e != t && (t && e.type && !n.contains(t) && (t = Y(e)), n.insertBefore(e.__e, t || null), (t = e.__e));
    do t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t;
  }
  function ie(e, t) {
    return (
      (t = t || []),
      e == null ||
        typeof e == 'boolean' ||
        (oe(e)
          ? e.some(function (n) {
              ie(n, t);
            })
          : t.push(e)),
      t
    );
  }
  function sn(e, t, n, r) {
    var o,
      i,
      _ = e.key,
      c = e.type,
      a = t[n];
    if ((a === null && e.key == null) || (a && _ == a.key && c == a.type && (2 & a.__u) == 0)) return n;
    if (r > (a != null && (2 & a.__u) == 0 ? 1 : 0))
      for (o = n - 1, i = n + 1; o >= 0 || i < t.length; ) {
        if (o >= 0) {
          if ((a = t[o]) && (2 & a.__u) == 0 && _ == a.key && c == a.type) return o;
          o--;
        }
        if (i < t.length) {
          if ((a = t[i]) && (2 & a.__u) == 0 && _ == a.key && c == a.type) return i;
          i++;
        }
      }
    return -1;
  }
  function it(e, t, n) {
    t[0] == '-'
      ? e.setProperty(t, n == null ? '' : n)
      : (e[t] = n == null ? '' : typeof n != 'number' || on.test(t) ? n : n + 'px');
  }
  function pe(e, t, n, r, o) {
    var i, _;
    e: if (t == 'style')
      if (typeof n == 'string') e.style.cssText = n;
      else {
        if ((typeof r == 'string' && (e.style.cssText = r = ''), r)) for (t in r) (n && t in n) || it(e.style, t, '');
        if (n) for (t in n) (r && n[t] == r[t]) || it(e.style, t, n[t]);
      }
    else if (t[0] == 'o' && t[1] == 'n')
      (i = t != (t = t.replace(Qe, '$1'))),
        (_ = t.toLowerCase()),
        (t = _ in e || t == 'onFocusOut' || t == 'onFocusIn' ? _.slice(2) : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + i] = n),
        n
          ? r
            ? (n.u = r.u)
            : ((n.u = Pe), e.addEventListener(t, i ? Ae : $e, i))
          : e.removeEventListener(t, i ? Ae : $e, i);
    else {
      if (o == 'http://www.w3.org/2000/svg') t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
      else if (
        t != 'width' &&
        t != 'height' &&
        t != 'href' &&
        t != 'list' &&
        t != 'form' &&
        t != 'tabIndex' &&
        t != 'download' &&
        t != 'rowSpan' &&
        t != 'colSpan' &&
        t != 'role' &&
        t != 'popover' &&
        t in e
      )
        try {
          e[t] = n == null ? '' : n;
          break e;
        } catch (c) {}
      typeof n == 'function' ||
        (n == null || (n === !1 && t[4] != '-')
          ? e.removeAttribute(t)
          : e.setAttribute(t, t == 'popover' && n == 1 ? '' : n));
    }
  }
  function _t(e) {
    return function (t) {
      if (this.l) {
        var n = this.l[t.type + e];
        if (t.t == null) t.t = Pe++;
        else if (t.t < n.u) return;
        return n(g.event ? g.event(t) : t);
      }
    };
  }
  function Ne(e, t, n, r, o, i, _, c, a, l) {
    var p,
      s,
      u,
      d,
      w,
      N,
      A,
      S,
      E,
      W,
      M,
      Q,
      F,
      f,
      b,
      m,
      y,
      h = t.type;
    if (t.constructor != null) return null;
    128 & n.__u && ((a = !!(32 & n.__u)), (i = [(c = t.__e = n.__e)])), (p = g.__b) && p(t);
    e: if (typeof h == 'function')
      try {
        if (
          ((S = t.props),
          (E = 'prototype' in h && h.prototype.render),
          (W = (p = h.contextType) && r[p.__c]),
          (M = p ? (W ? W.props.value : p.__) : r),
          n.__c
            ? (A = (s = t.__c = n.__c).__ = s.__E)
            : (E ? (t.__c = s = new h(S, M)) : ((t.__c = s = new O(S, M)), (s.constructor = h), (s.render = ln)),
              W && W.sub(s),
              (s.props = S),
              s.state || (s.state = {}),
              (s.context = M),
              (s.__n = r),
              (u = s.__d = !0),
              (s.__h = []),
              (s._sb = [])),
          E && s.__s == null && (s.__s = s.state),
          E &&
            h.getDerivedStateFromProps != null &&
            (s.__s == s.state && (s.__s = V({}, s.__s)), V(s.__s, h.getDerivedStateFromProps(S, s.__s))),
          (d = s.props),
          (w = s.state),
          (s.__v = t),
          u)
        )
          E && h.getDerivedStateFromProps == null && s.componentWillMount != null && s.componentWillMount(),
            E && s.componentDidMount != null && s.__h.push(s.componentDidMount);
        else {
          if (
            (E &&
              h.getDerivedStateFromProps == null &&
              S !== d &&
              s.componentWillReceiveProps != null &&
              s.componentWillReceiveProps(S, M),
            (!s.__e && s.shouldComponentUpdate != null && s.shouldComponentUpdate(S, s.__s, M) === !1) ||
              t.__v == n.__v)
          ) {
            for (
              t.__v != n.__v && ((s.props = S), (s.state = s.__s), (s.__d = !1)),
                t.__e = n.__e,
                t.__k = n.__k,
                t.__k.some(function (v) {
                  v && (v.__ = t);
                }),
                Q = 0;
              Q < s._sb.length;
              Q++
            )
              s.__h.push(s._sb[Q]);
            (s._sb = []), s.__h.length && _.push(s);
            break e;
          }
          s.componentWillUpdate != null && s.componentWillUpdate(S, s.__s, M),
            E &&
              s.componentDidUpdate != null &&
              s.__h.push(function () {
                s.componentDidUpdate(d, w, N);
              });
        }
        if (((s.context = M), (s.props = S), (s.__P = e), (s.__e = !1), (F = g.__r), (f = 0), E)) {
          for (
            s.state = s.__s, s.__d = !1, F && F(t), p = s.render(s.props, s.state, s.context), b = 0;
            b < s._sb.length;
            b++
          )
            s.__h.push(s._sb[b]);
          s._sb = [];
        } else
          do (s.__d = !1), F && F(t), (p = s.render(s.props, s.state, s.context)), (s.state = s.__s);
          while (s.__d && ++f < 25);
        (s.state = s.__s),
          s.getChildContext != null && (r = V(V({}, r), s.getChildContext())),
          E && !u && s.getSnapshotBeforeUpdate != null && (N = s.getSnapshotBeforeUpdate(d, w)),
          (m = p),
          p != null && p.type === H && p.key == null && (m = ct(p.props.children)),
          (c = rt(e, oe(m) ? m : [m], t, n, r, o, i, _, c, a, l)),
          (s.base = t.__e),
          (t.__u &= -161),
          s.__h.length && _.push(s),
          A && (s.__E = s.__ = null);
      } catch (v) {
        if (((t.__v = null), a || i != null))
          if (v.then) {
            for (t.__u |= a ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; ) c = c.nextSibling;
            (i[i.indexOf(c)] = null), (t.__e = c);
          } else for (y = i.length; y--; ) xe(i[y]);
        else (t.__e = n.__e), (t.__k = n.__k);
        g.__e(v, t, n);
      }
    else
      i == null && t.__v == n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (c = t.__e = cn(n.__e, t, n, r, o, i, _, a, l));
    return (p = g.diffed) && p(t), 128 & t.__u ? void 0 : c;
  }
  function st(e, t, n) {
    for (var r = 0; r < n.length; r++) Re(n[r], n[++r], n[++r]);
    g.__c && g.__c(t, e),
      e.some(function (o) {
        try {
          (e = o.__h),
            (o.__h = []),
            e.some(function (i) {
              i.call(o);
            });
        } catch (i) {
          g.__e(i, o.__v);
        }
      });
  }
  function ct(e) {
    return typeof e != 'object' || e == null || (e.__b && e.__b > 0) ? e : oe(e) ? e.map(ct) : V({}, e);
  }
  function cn(e, t, n, r, o, i, _, c, a) {
    var l,
      p,
      s,
      u,
      d,
      w,
      N,
      A = n.props,
      S = t.props,
      E = t.type;
    if (
      (E == 'svg'
        ? (o = 'http://www.w3.org/2000/svg')
        : E == 'math'
          ? (o = 'http://www.w3.org/1998/Math/MathML')
          : o || (o = 'http://www.w3.org/1999/xhtml'),
      i != null)
    ) {
      for (l = 0; l < i.length; l++)
        if ((d = i[l]) && 'setAttribute' in d == !!E && (E ? d.localName == E : d.nodeType == 3)) {
          (e = d), (i[l] = null);
          break;
        }
    }
    if (e == null) {
      if (E == null) return document.createTextNode(S);
      (e = document.createElementNS(o, E, S.is && S)), c && (g.__m && g.__m(t, i), (c = !1)), (i = null);
    }
    if (E == null) A === S || (c && e.data == S) || (e.data = S);
    else {
      if (((i = i && ue.call(e.childNodes)), (A = n.props || re), !c && i != null))
        for (A = {}, l = 0; l < e.attributes.length; l++) A[(d = e.attributes[l]).name] = d.value;
      for (l in A)
        if (((d = A[l]), l != 'children')) {
          if (l == 'dangerouslySetInnerHTML') s = d;
          else if (!(l in S)) {
            if ((l == 'value' && 'defaultValue' in S) || (l == 'checked' && 'defaultChecked' in S)) continue;
            pe(e, l, null, d, o);
          }
        }
      for (l in S)
        (d = S[l]),
          l == 'children'
            ? (u = d)
            : l == 'dangerouslySetInnerHTML'
              ? (p = d)
              : l == 'value'
                ? (w = d)
                : l == 'checked'
                  ? (N = d)
                  : (c && typeof d != 'function') || A[l] === d || pe(e, l, d, A[l], o);
      if (p) c || (s && (p.__html == s.__html || p.__html == e.innerHTML)) || (e.innerHTML = p.__html), (t.__k = []);
      else if (
        (s && (e.innerHTML = ''),
        rt(
          t.type == 'template' ? e.content : e,
          oe(u) ? u : [u],
          t,
          n,
          r,
          E == 'foreignObject' ? 'http://www.w3.org/1999/xhtml' : o,
          i,
          _,
          i ? i[0] : n.__k && Y(n, 0),
          c,
          a
        ),
        i != null)
      )
        for (l = i.length; l--; ) xe(i[l]);
      c ||
        ((l = 'value'),
        E == 'progress' && w == null
          ? e.removeAttribute('value')
          : w != null &&
            (w !== e[l] || (E == 'progress' && !w) || (E == 'option' && w != A[l])) &&
            pe(e, l, w, A[l], o),
        (l = 'checked'),
        N != null && N != e[l] && pe(e, l, N, A[l], o));
    }
    return e;
  }
  function Re(e, t, n) {
    try {
      if (typeof e == 'function') {
        var r = typeof e.__u == 'function';
        r && e.__u(), (r && t == null) || (e.__u = e(t));
      } else e.current = t;
    } catch (o) {
      g.__e(o, n);
    }
  }
  function lt(e, t, n) {
    var r, o;
    if (
      (g.unmount && g.unmount(e),
      (r = e.ref) && ((r.current && r.current != e.__e) || Re(r, null, t)),
      (r = e.__c) != null)
    ) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (i) {
          g.__e(i, t);
        }
      r.base = r.__P = null;
    }
    if ((r = e.__k)) for (o = 0; o < r.length; o++) r[o] && lt(r[o], t, n || typeof e.type != 'function');
    n || xe(e.__e), (e.__c = e.__ = e.__e = void 0);
  }
  function ln(e, t, n) {
    return this.constructor(e, n);
  }
  function an(e, t, n) {
    var r, o, i, _;
    t == document && (t = document.documentElement),
      g.__ && g.__(e, t),
      (o = (r = typeof n == 'function') ? null : (n && n.__k) || t.__k),
      (i = []),
      (_ = []),
      Ne(
        t,
        (e = ((!r && n) || t).__k = z(H, null, [e])),
        o || re,
        re,
        t.namespaceURI,
        !r && n ? [n] : o ? null : t.firstChild ? ue.call(t.childNodes) : null,
        i,
        !r && n ? n : o ? o.__e : t.firstChild,
        r,
        _
      ),
      st(i, e, _);
  }
  function at(e) {
    function t(n) {
      var r, o;
      return (
        this.getChildContext ||
          ((r = new Set()),
          ((o = {})[t.__c] = this),
          (this.getChildContext = function () {
            return o;
          }),
          (this.componentWillUnmount = function () {
            r = null;
          }),
          (this.shouldComponentUpdate = function (i) {
            this.props.value != i.value &&
              r.forEach(function (_) {
                (_.__e = !0), Te(_);
              });
          }),
          (this.sub = function (i) {
            r.add(i);
            var _ = i.componentWillUnmount;
            i.componentWillUnmount = function () {
              r && r.delete(i), _ && _.call(i);
            };
          })),
        n.children
      );
    }
    return (
      (t.__c = '__cC' + et++),
      (t.__ = e),
      (t.Provider =
        t.__l =
        (t.Consumer = function (n, r) {
          return n.children(r);
        }).contextType =
          t),
      t
    );
  }
  (ue = tt.slice),
    (g = {
      __e: function (e, t, n, r) {
        for (var o, i, _; (t = t.__); )
          if ((o = t.__c) && !o.__)
            try {
              if (
                ((i = o.constructor) &&
                  i.getDerivedStateFromError != null &&
                  (o.setState(i.getDerivedStateFromError(e)), (_ = o.__d)),
                o.componentDidCatch != null && (o.componentDidCatch(e, r || {}), (_ = o.__d)),
                _)
              )
                return (o.__E = o);
            } catch (c) {
              e = c;
            }
        throw e;
      },
    }),
    (Xe = 0),
    (O.prototype.setState = function (e, t) {
      var n;
      (n = this.__s != null && this.__s != this.state ? this.__s : (this.__s = V({}, this.state))),
        typeof e == 'function' && (e = e(V({}, n), this.props)),
        e && V(n, e),
        e != null && this.__v && (t && this._sb.push(t), Te(this));
    }),
    (O.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), Te(this));
    }),
    (O.prototype.render = H),
    (q = []),
    (Ze = typeof Promise == 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
    (Ge = function (e, t) {
      return e.__v.__b - t.__v.__b;
    }),
    (de.__r = 0),
    (Qe = /(PointerCapture)$|Capture$/i),
    (Pe = 0),
    ($e = _t(!1)),
    (Ae = _t(!0)),
    (et = 0);
  const ut = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Component: O,
        Fragment: H,
        createContext: at,
        createElement: z,
        h: z,
        get options() {
          return g;
        },
        render: an,
        toChildArray: ie,
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  );
  var Z,
    C,
    Ue,
    ft,
    Ie = 0,
    dt = [],
    P = g,
    pt = P.__b,
    ht = P.__r,
    vt = P.diffed,
    mt = P.__c,
    yt = P.unmount,
    gt = P.__;
  function he(e, t) {
    P.__h && P.__h(C, e, Ie || t), (Ie = 0);
    var n = C.__H || (C.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({}), n.__[e];
  }
  function un(e, t, n) {
    var r = he(Z++, 2);
    if (
      ((r.t = e),
      !r.__c &&
        ((r.__ = [
          n ? n(t) : yn(void 0, t),
          function (c) {
            var a = r.__N ? r.__N[0] : r.__[0],
              l = r.t(a, c);
            a !== l && ((r.__N = [l, r.__[1]]), r.__c.setState({}));
          },
        ]),
        (r.__c = C),
        !C.__f))
    ) {
      var o = function (c, a, l) {
        if (!r.__c.__H) return !0;
        var p = r.__c.__H.__.filter(function (u) {
          return !!u.__c;
        });
        if (
          p.every(function (u) {
            return !u.__N;
          })
        )
          return !i || i.call(this, c, a, l);
        var s = r.__c.props !== c;
        return (
          p.forEach(function (u) {
            if (u.__N) {
              var d = u.__[0];
              (u.__ = u.__N), (u.__N = void 0), d !== u.__[0] && (s = !0);
            }
          }),
          (i && i.call(this, c, a, l)) || s
        );
      };
      C.__f = !0;
      var i = C.shouldComponentUpdate,
        _ = C.componentWillUpdate;
      (C.componentWillUpdate = function (c, a, l) {
        if (this.__e) {
          var p = i;
          (i = void 0), o(c, a, l), (i = p);
        }
        _ && _.call(this, c, a, l);
      }),
        (C.shouldComponentUpdate = o);
    }
    return r.__N || r.__;
  }
  function Le(e, t) {
    var n = he(Z++, 3);
    !P.__s && wt(n.__H, t) && ((n.__ = e), (n.u = t), C.__H.__h.push(n));
  }
  function fn(e, t) {
    var n = he(Z++, 7);
    return wt(n.__H, t) && ((n.__ = e()), (n.__H = t), (n.__h = e)), n.__;
  }
  function dn(e, t) {
    return (
      (Ie = 8),
      fn(function () {
        return e;
      }, t)
    );
  }
  function pn(e) {
    var t = C.context[e.__c],
      n = he(Z++, 9);
    return (n.c = e), t ? (n.__ == null && ((n.__ = !0), t.sub(C)), t.props.value) : e.__;
  }
  function hn(e, t) {
    P.useDebugValue && P.useDebugValue(t ? t(e) : e);
  }
  function vn() {
    for (var e; (e = dt.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(ve), e.__H.__h.forEach(Me), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), P.__e(t, e.__v);
        }
  }
  (P.__b = function (e) {
    (C = null), pt && pt(e);
  }),
    (P.__ = function (e, t) {
      e && t.__k && t.__k.__m && (e.__m = t.__k.__m), gt && gt(e, t);
    }),
    (P.__r = function (e) {
      ht && ht(e), (Z = 0);
      var t = (C = e.__c).__H;
      t &&
        (Ue === C
          ? ((t.__h = []),
            (C.__h = []),
            t.__.forEach(function (n) {
              n.__N && (n.__ = n.__N), (n.u = n.__N = void 0);
            }))
          : (t.__h.forEach(ve), t.__h.forEach(Me), (t.__h = []), (Z = 0))),
        (Ue = C);
    }),
    (P.diffed = function (e) {
      vt && vt(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((dt.push(t) !== 1 && ft === P.requestAnimationFrame) || ((ft = P.requestAnimationFrame) || mn)(vn)),
        t.__H.__.forEach(function (n) {
          n.u && (n.__H = n.u), (n.u = void 0);
        })),
        (Ue = C = null);
    }),
    (P.__c = function (e, t) {
      t.some(function (n) {
        try {
          n.__h.forEach(ve),
            (n.__h = n.__h.filter(function (r) {
              return !r.__ || Me(r);
            }));
        } catch (r) {
          t.some(function (o) {
            o.__h && (o.__h = []);
          }),
            (t = []),
            P.__e(r, n.__v);
        }
      }),
        mt && mt(e, t);
    }),
    (P.unmount = function (e) {
      yt && yt(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (r) {
          try {
            ve(r);
          } catch (o) {
            t = o;
          }
        }),
        (n.__H = void 0),
        t && P.__e(t, n.__v));
    });
  var bt = typeof requestAnimationFrame == 'function';
  function mn(e) {
    var t,
      n = function () {
        clearTimeout(r), bt && cancelAnimationFrame(t), setTimeout(e);
      },
      r = setTimeout(n, 35);
    bt && (t = requestAnimationFrame(n));
  }
  function ve(e) {
    var t = C,
      n = e.__c;
    typeof n == 'function' && ((e.__c = void 0), n()), (C = t);
  }
  function Me(e) {
    var t = C;
    (e.__c = e.__()), (C = t);
  }
  function wt(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (n, r) {
        return n !== e[r];
      })
    );
  }
  function yn(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function gn(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function St(e, t) {
    for (var n in e) if (n !== '__source' && !(n in t)) return !0;
    for (var r in t) if (r !== '__source' && e[r] !== t[r]) return !0;
    return !1;
  }
  function Et(e, t) {
    (this.props = e), (this.context = t);
  }
  ((Et.prototype = new O()).isPureReactComponent = !0),
    (Et.prototype.shouldComponentUpdate = function (e, t) {
      return St(this.props, e) || St(this.state, t);
    });
  var kt = g.__b;
  g.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), kt && kt(e);
  };
  var bn = g.__e;
  g.__e = function (e, t, n, r) {
    if (e.then) {
      for (var o, i = t; (i = i.__); )
        if ((o = i.__c) && o.__c) return t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), o.__c(e, t);
    }
    bn(e, t, n, r);
  };
  var Ct = g.unmount;
  function Pt(e, t, n) {
    return (
      e &&
        (e.__c &&
          e.__c.__H &&
          (e.__c.__H.__.forEach(function (r) {
            typeof r.__c == 'function' && r.__c();
          }),
          (e.__c.__H = null)),
        (e = gn({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), (e.__c.__e = !0), (e.__c = null)),
        (e.__k =
          e.__k &&
          e.__k.map(function (r) {
            return Pt(r, t, n);
          }))),
      e
    );
  }
  function $t(e, t, n) {
    return (
      e &&
        n &&
        ((e.__v = null),
        (e.__k =
          e.__k &&
          e.__k.map(function (r) {
            return $t(r, t, n);
          })),
        e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), (e.__c.__e = !0), (e.__c.__P = n))),
      e
    );
  }
  function De() {
    (this.__u = 0), (this.o = null), (this.__b = null);
  }
  function At(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function me() {
    (this.i = null), (this.l = null);
  }
  (g.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Ct && Ct(e);
  }),
    ((De.prototype = new O()).__c = function (e, t) {
      var n = t.__c,
        r = this;
      r.o == null && (r.o = []), r.o.push(n);
      var o = At(r.__v),
        i = !1,
        _ = function () {
          i || ((i = !0), (n.__R = null), o ? o(c) : c());
        };
      n.__R = _;
      var c = function () {
        if (!--r.__u) {
          if (r.state.__a) {
            var a = r.state.__a;
            r.__v.__k[0] = $t(a, a.__c.__P, a.__c.__O);
          }
          var l;
          for (r.setState({ __a: (r.__b = null) }); (l = r.o.pop()); ) l.forceUpdate();
        }
      };
      r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }), e.then(_, _);
    }),
    (De.prototype.componentWillUnmount = function () {
      this.o = [];
    }),
    (De.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement('div'),
            r = this.__v.__k[0].__c;
          this.__v.__k[0] = Pt(this.__b, n, (r.__O = r.__P));
        }
        this.__b = null;
      }
      var o = t.__a && z(H, null, e.fallback);
      return o && (o.__u &= -33), [z(H, null, t.__a ? null : e.children), o];
    });
  var xt = function (e, t, n) {
    if ((++n[1] === n[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== 't' || !e.l.size)))
      for (n = e.i; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.i = n = n[2];
      }
  };
  ((me.prototype = new O()).__a = function (e) {
    var t = this,
      n = At(t.__v),
      r = t.l.get(e);
    return (
      r[0]++,
      function (o) {
        var i = function () {
          t.props.revealOrder ? (r.push(o), xt(t, e, r)) : o();
        };
        n ? n(i) : i();
      }
    );
  }),
    (me.prototype.render = function (e) {
      (this.i = null), (this.l = new Map());
      var t = ie(e.children);
      e.revealOrder && e.revealOrder[0] === 'b' && t.reverse();
      for (var n = t.length; n--; ) this.l.set(t[n], (this.i = [1, 0, this.i]));
      return e.children;
    }),
    (me.prototype.componentDidUpdate = me.prototype.componentDidMount =
      function () {
        var e = this;
        this.l.forEach(function (t, n) {
          xt(e, n, t);
        });
      });
  var wn = (typeof Symbol != 'undefined' && Symbol.for && Symbol.for('react.element')) || 60103,
    Sn =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    En = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    kn = /[A-Z0-9]/g,
    Cn = typeof document != 'undefined',
    Pn = function (e) {
      return (typeof Symbol != 'undefined' && typeof Symbol() == 'symbol' ? /fil|che|rad/ : /fil|che|ra/).test(e);
    };
  (O.prototype.isReactComponent = {}),
    ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(function (e) {
      Object.defineProperty(O.prototype, e, {
        configurable: !0,
        get: function () {
          return this['UNSAFE_' + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
        },
      });
    });
  var Tt = g.event;
  function $n() {}
  function An() {
    return this.cancelBubble;
  }
  function xn() {
    return this.defaultPrevented;
  }
  g.event = function (e) {
    return (
      Tt && (e = Tt(e)),
      (e.persist = $n),
      (e.isPropagationStopped = An),
      (e.isDefaultPrevented = xn),
      (e.nativeEvent = e)
    );
  };
  var Tn = {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    Nt = g.vnode;
  g.vnode = function (e) {
    typeof e.type == 'string' &&
      (function (t) {
        var n = t.props,
          r = t.type,
          o = {},
          i = r.indexOf('-') === -1;
        for (var _ in n) {
          var c = n[_];
          if (
            !(
              (_ === 'value' && 'defaultValue' in n && c == null) ||
              (Cn && _ === 'children' && r === 'noscript') ||
              _ === 'class' ||
              _ === 'className'
            )
          ) {
            var a = _.toLowerCase();
            _ === 'defaultValue' && 'value' in n && n.value == null
              ? (_ = 'value')
              : _ === 'download' && c === !0
                ? (c = '')
                : a === 'translate' && c === 'no'
                  ? (c = !1)
                  : a[0] === 'o' && a[1] === 'n'
                    ? a === 'ondoubleclick'
                      ? (_ = 'ondblclick')
                      : a !== 'onchange' || (r !== 'input' && r !== 'textarea') || Pn(n.type)
                        ? a === 'onfocus'
                          ? (_ = 'onfocusin')
                          : a === 'onblur'
                            ? (_ = 'onfocusout')
                            : En.test(_) && (_ = a)
                        : (a = _ = 'oninput')
                    : i && Sn.test(_)
                      ? (_ = _.replace(kn, '-$&').toLowerCase())
                      : c === null && (c = void 0),
              a === 'oninput' && o[(_ = a)] && (_ = 'oninputCapture'),
              (o[_] = c);
          }
        }
        r == 'select' &&
          o.multiple &&
          Array.isArray(o.value) &&
          (o.value = ie(n.children).forEach(function (l) {
            l.props.selected = o.value.indexOf(l.props.value) != -1;
          })),
          r == 'select' &&
            o.defaultValue != null &&
            (o.value = ie(n.children).forEach(function (l) {
              l.props.selected = o.multiple
                ? o.defaultValue.indexOf(l.props.value) != -1
                : o.defaultValue == l.props.value;
            })),
          n.class && !n.className
            ? ((o.class = n.class), Object.defineProperty(o, 'className', Tn))
            : ((n.className && !n.class) || (n.class && n.className)) && (o.class = o.className = n.className),
          (t.props = o);
      })(e),
      (e.$$typeof = wn),
      Nt && Nt(e);
  };
  var Rt = g.__r;
  g.__r = function (e) {
    Rt && Rt(e), e.__c;
  };
  var Ut = g.diffed;
  g.diffed = function (e) {
    Ut && Ut(e);
    var t = e.props,
      n = e.__e;
    n != null &&
      e.type === 'textarea' &&
      'value' in t &&
      t.value !== n.value &&
      (n.value = t.value == null ? '' : t.value);
  };
  var It = {};
  const Nn = {},
    Rn = at(void 0);
  function Lt(e) {
    return pn(Rn) || rn();
  }
  const Oe = (e) => typeof (e == null ? void 0 : e.then) == 'function',
    We = (e) => {
      e.status ||
        ((e.status = 'pending'),
        e.then(
          (t) => {
            (e.status = 'fulfilled'), (e.value = t);
          },
          (t) => {
            (e.status = 'rejected'), (e.reason = t);
          }
        ));
    },
    Un =
      It.use ||
      ((e) => {
        if (e.status === 'pending') throw e;
        if (e.status === 'fulfilled') return e.value;
        throw e.status === 'rejected' ? e.reason : (We(e), e);
      }),
    Ve = new WeakMap(),
    Mt = (e, t) => {
      let n = Ve.get(e);
      return (
        n ||
          ((n = new Promise((r, o) => {
            let i = e;
            const _ = (l) => (p) => {
                i === l && r(p);
              },
              c = (l) => (p) => {
                i === l && o(p);
              },
              a = () => {
                try {
                  const l = t();
                  Oe(l) ? (Ve.set(l, n), (i = l), l.then(_(l), c(l)), Ke(l, a)) : r(l);
                } catch (l) {
                  o(l);
                }
              };
            e.then(_(e), c(e)), Ke(e, a);
          })),
          Ve.set(e, n)),
        n
      );
    };
  function In(e, t) {
    const { delay: n, unstable_promiseStatus: r = !It.use } = {},
      o = Lt(),
      [[i, _, c], a] = un(
        (p) => {
          const s = o.get(e);
          return Object.is(p[0], s) && p[1] === o && p[2] === e ? p : [s, o, e];
        },
        void 0,
        () => [o.get(e), o, e]
      );
    let l = i;
    if (
      ((_ !== o || c !== e) && (a(), (l = o.get(e))),
      Le(() => {
        const p = o.sub(e, () => {
          if (r)
            try {
              const s = o.get(e);
              Oe(s) && We(Mt(s, () => o.get(e)));
            } catch (s) {}
          if (typeof n == 'number') {
            setTimeout(a, n);
            return;
          }
          a();
        });
        return a(), p;
      }, [o, e, n, r]),
      hn(l),
      Oe(l))
    ) {
      const p = Mt(l, () => o.get(e));
      return r && We(p), Un(p);
    }
    return l;
  }
  function Ln(e, t) {
    const n = Lt();
    return dn(
      (...o) => {
        if ((Nn ? 'production' : void 0) !== 'production' && !('write' in e)) throw new Error('not writable atom');
        return n.set(e, ...o);
      },
      [n, e]
    );
  }
  function _e(e, t) {
    return [In(e), Ln(e)];
  }
  const Fe = Ce(null),
    Mn = Ce(null),
    Dn = Ce(null),
    On = (e = jt) => {
      const [t, n] = _e(Mn),
        [, r] = _e(Dn);
      Le(() => Yn(e, n, r), [e, n, r]);
      const o = (i) => {
        let _ = i;
        return e.routes && i in e.routes && Object.keys(B).includes(i) && (_ = B[i]), _;
      };
      return {
        currentRoute: t,
        navigateTo: Ft,
        clearCache: ge,
        isActive: (i) => (t ? (t.name === i ? !0 : t.path === i) : !1),
        clearElementCache: (i, _) => {
          const c = o(i);
          ge(c, _);
        },
        reloadElement: (i, _) => {
          const c = o(i);
          ge(c, _),
            (t == null ? void 0 : t.path) === c || (t == null ? void 0 : t.name) === i
              ? window.dispatchEvent(new Event('popstate'))
              : Ft(i, { forceRerender: !0, elementId: _ });
        },
      };
    };
  class Wn {
    constructor(t, n, r) {
      se(this, 'observer');
      se(this, 'target');
      se(this, 'config');
      se(this, 'callback');
      (this.config = n),
        (this.target = t),
        (this.observer = void 0),
        (this.callback = r),
        (this.mutationCallback = this.mutationCallback.bind(this)),
        (this.startObserving = this.startObserving.bind(this)),
        this.initialize();
    }
    initialize() {
      if (!this.target) {
        console.debug('Element not found', this.target);
        return;
      }
      this.startObserving();
    }
    mutationCallback(t) {
      for (const n of t)
        if (this.shouldProcessMutation(n)) {
          const r = n.addedNodes[0];
          r && this.callback(r, this.stopObserving.bind(this));
        }
    }
    shouldProcessMutation(t) {
      const { config: n } = this;
      return (n.childList && t.type === 'childList' && t.addedNodes.length > 0) ||
        (n.attributes && t.type === 'attributes') ||
        (n.characterData && t.type === 'characterData')
        ? !0
        : (n.subtree, !1);
    }
    startObserving() {
      console.debug('Watching creation - Target element:', this.target),
        this.observer && this.observer.disconnect(),
        this.target &&
          ((this.observer = new MutationObserver(this.mutationCallback)),
          this.observer.observe(this.target, this.config));
    }
    stopObserving() {
      this.observer &&
        (console.debug('Stopping observer interval, Element found:', this.target), this.observer.disconnect());
    }
  }
  const or = 'modulepreload',
    ir = function (e) {
      return '/' + e;
    },
    _r = {},
    Dt = function (t, n, r) {
      let o = Promise.resolve();
      function i(_) {
        const c = new Event('vite:preloadError', { cancelable: !0 });
        if (((c.payload = _), window.dispatchEvent(c), !c.defaultPrevented)) throw _;
      }
      return o.then((_) => {
        for (const c of _ || []) c.status === 'rejected' && i(c.reason);
        return t().catch(i);
      });
    };
  var Vn = 0;
  function I(e, t, n, r, o, i) {
    t || (t = {});
    var _,
      c,
      a = t;
    if ('ref' in a) for (c in ((a = {}), t)) c == 'ref' ? (_ = t[c]) : (a[c] = t[c]);
    var l = {
      type: e,
      props: a,
      key: n,
      ref: _,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __c: null,
      constructor: void 0,
      __v: --Vn,
      __i: -1,
      __u: 0,
      __source: o,
      __self: i,
    };
    if (typeof e == 'function' && (_ = e.defaultProps)) for (c in _) a[c] === void 0 && (a[c] = _[c]);
    return g.vnode && g.vnode(l), l;
  }
  const ye = {
      cartContainer: '_cartContainer_upwqr_1',
      cartTitle: '_cartTitle_upwqr_10',
      cartItem: '_cartItem_upwqr_17',
      cartEmpty: '_cartEmpty_upwqr_23',
    },
    Fn = () => {
      const [e] = _e(Fe);
      return I('div', {
        className: `cart-container-custom ${ye.cartContainer}`,
        children: [
          I('div', { className: ye.cartTitle, children: 'Custom Cart Component' }),
          e == null
            ? void 0
            : e.items.map((t) =>
                I(
                  'div',
                  {
                    className: ye.cartItem,
                    children: [
                      I('h3', { children: t.name }),
                      I('p', { children: ['Quantity: ', t.quantity] }),
                      I('p', { children: ['Price: ', t.price / 100] }),
                    ],
                  },
                  t.id
                )
              ),
          (e == null ? void 0 : e.items.length) === 0 &&
            I('p', { className: ye.cartEmpty, children: 'Your cart is empty' }),
        ],
      });
    },
    jn = () => I('div', { children: 'I am the custom email component' }),
    qn = () => I('div', { children: 'I am the custom payment component' }),
    zn = () => I('div', { children: 'I am the custom profile component' }),
    Hn = ({ orderForm: e }) => {
      const [, t] = _e(Fe);
      On(jt);
      const n = (r) => {
        t(r);
      };
      return (
        Le(() => {
          t(e),
            $(window).on('orderFormUpdated.vtex', (r, o) => {
              console.debug('orderFormUpdated.vtex event received with data:', o), o && n(o);
            });
        }, [e, t, n]),
        null
      );
    },
    Bn = () => I('div', { children: 'I am the custom shipping component' }),
    Ot = () => {
      var n, r;
      const [e] = _e(Fe),
        { totalizers: t } = e || {};
      return I('div', {
        children: [
          I('h1', { children: 'Summary Component' }),
          I('p', {
            children: [
              'Total: ',
              (n = t == null ? void 0 : t.find((o) => o.id === 'Items')) == null ? void 0 : n.value,
            ],
          }),
          I('p', {
            children: [
              'Shipping: ',
              (r = t == null ? void 0 : t.find((o) => o.id === 'Shipping')) == null ? void 0 : r.value,
            ],
          }),
        ],
      });
    },
    Jn = (e) => {
      const t = document.createElement('div');
      t.setAttribute('id', 'checkout-ui-custom-app'),
        document.body.appendChild(t),
        Dt(
          () =>
            ee(null, null, function* () {
              const { render: n } = yield Promise.resolve().then(() => ut);
              return { render: n };
            }),
          void 0
        ).then(({ render: n }) => {
          n(z(Hn, { orderForm: e || null }), t);
        });
    },
    B = { cart: '#/cart', shipping: '#/shipping', payment: '#/payment', email: '#/email', profile: '#/profile' },
    Kn = (e) => document.querySelector(e),
    Wt = (e) =>
      ee(null, null, function* () {
        !e ||
          !e.elements ||
          e.elements.length === 0 ||
          e.elements.forEach((t) => {
            Xn(e.path, t);
          });
      }),
    Xn = (e, t) =>
      ee(null, null, function* () {
        if (!t.components || t.components.length === 0) return;
        const n = Kn(t.selector);
        if (!n) {
          const r = t.selector,
            o = () => document.querySelector(r);
          new Wn(document.body, { childList: !0, subtree: !0 }, (i, _) => {
            const c = o();
            return c ? (Vt(c, e, t), _(), !0) : !1;
          });
          return;
        }
        Vt(n, e, t);
      }),
    G = new Map();
  function Vt(e, t, n) {
    const r = `selector-${n.selector.replace(/[^a-zA-Z0-9]/g, '-')}`;
    let o = document.querySelector(`[data-route-path="${t}"][data-route-element="${r}"]`);
    const i = !o;
    i &&
      ((o = document.createElement('div')),
      o.setAttribute('data-route-path', t),
      o.setAttribute('data-route-element', r),
      o.setAttribute('data-route-timestamp', Date.now().toString()),
      e.appendChild(o));
    const _ = `${t}-${r}-${o.getAttribute('data-route-timestamp')}`,
      c = G.get(_) || new Set();
    n.components.forEach((a, l) =>
      ee(null, null, function* () {
        if (!a) {
          console.error(`Component at index ${l} is not defined`);
          return;
        }
        const s = `${a.displayName || a.name || `component-${l}`}-${l}`;
        let u = o.querySelector(`[data-component-key="${s}"]`);
        if (!c.has(s) || i) {
          u ||
            ((u = document.createElement('div')),
            u.setAttribute('data-component-key', s),
            u.setAttribute('data-component-index', l.toString()),
            o.appendChild(u));
          const { render: d } = yield Dt(
            () =>
              ee(null, null, function* () {
                const { render: w } = yield Promise.resolve().then(() => ut);
                return { render: w };
              }),
            void 0
          );
          d(z(a, {}), u), c.add(s);
        }
      })
    ),
      G.set(_, c);
  }
  const Ft = (e, t) => {
      let n = e;
      e in B && (n = B[e]),
        t != null && t.forceRerender && ge(n, t.elementId),
        window.history.pushState({}, '', n),
        window.dispatchEvent(new Event('popstate'));
    },
    ge = (e, t) => {
      if (e) for (const n of G.keys()) t ? n.includes(`${e}-${t}`) && G.delete(n) : n.startsWith(e) && G.delete(n);
      else G.clear();
    },
    Yn = (e, t, n) => {
      n(e);
      const r = () => {
        const o = window.location.pathname + window.location.hash,
          i = Object.entries(e.routes),
          _ = B;
        let c = null;
        for (const [a, l] of i) {
          const s = a in B ? _[a] || B[a] : a;
          if (s && o.includes(s)) {
            c = Jt(Bt({}, l), { path: s, name: a });
            break;
          }
        }
        if (e.defaultElements && e.defaultElements.length > 0) {
          const a = { path: 'default', elements: e.defaultElements };
          Wt(a);
        }
        c && c.elements && c.elements.length > 0 ? (t(c), Wt(c)) : t(null);
      };
      return (
        window.addEventListener('popstate', r),
        r(),
        () => {
          window.removeEventListener('popstate', r);
        }
      );
    },
    jt = {
      defaultElements: [
        { selector: '.cart-template.full-cart .summary-totalizers.cart-totalizers .accordion-inner', components: [Ot] },
        { selector: '.cart-template.mini-cart .summary-totalizers.cart-totalizers .accordion-inner', components: [Ot] },
      ],
      routes: {
        cart: { elements: [{ selector: '.cart-template.full-cart', components: [Fn] }] },
        shipping: { elements: [{ selector: '#shipping-data .accordion-inner.shipping-container', components: [Bn] }] },
        payment: { elements: [{ selector: '#payment-data .accordion-body', components: [qn] }] },
        email: { elements: [{ selector: '#client-profile-data .client-pre-email', components: [jn] }] },
        profile: {
          elements: [{ selector: '#client-profile-data .client-profile-data .accordion-inner', components: [zn] }],
        },
      },
    },
    Zn = (e) => {
      let r = 0;
      const o = setInterval(() => {
        var _, c;
        const i =
          (c = (_ = window == null ? void 0 : window.vtexjs) == null ? void 0 : _.checkout) == null
            ? void 0
            : c.orderForm;
        (i || r >= 30) && (clearInterval(o), e(i)), r++;
      }, 50);
    },
    qt = 'VTEX Checkout UI Customization';
  console.log(`Yay! You are using the ${qt}!!`);
  try {
    Zn((e) => Jn(e));
  } catch (e) {
    console.error(`Error initializing ${qt}: `, e);
  }
})();
//# sourceMappingURL=checkout6-custom.js.map
