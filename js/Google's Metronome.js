<
!doctype html > < html itemscope = ""
itemtype = "http://schema.org/SearchResultsPage"
lang = "zh-TW" > < head > < meta charset = "UTF-8" > < meta content = "origin"
name = "referrer" > < meta content = "Anb2GUnhMjfTIX0D2a4a6NPAqPI5GaxxRAiF81XTjHJ2qK4E3Hw3VFM4eaJBgRzz45CNPt624audv+wHOJwfAAEAAABieyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjI2MjIwNzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZX0="
http - equiv = "origin-trial" > < meta content = "/images/branding/googleg/1x/googleg_standard_color_128dp.png"
itemprop = "image" > < title > google 節拍器 - Google 搜尋 < /title><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){
var b = window.addEventListener;
window.addEventListener = function(a, c, d) {
"unload" !== a && b(a, c, d)
};
}).call(this);
(function() {
    window.google = {
        kEI: 'HYOtYeGkDZTt0ATr2qGoDw',
        kEXPI: '31',
        u: '6f54b278',
        kBL: 'VXvm'
    };
    google.sn = 'web';
    google.kHL = 'zh-TW';
})();
(function() {
    var f = this || self;
    var h, k = [];

    function l(a) {
        for (var b; a && (!a.getAttribute || !(b = a.getAttribute("eid")));) a = a.parentNode;
        return b || h
    }

    function m(a) {
        for (var b = null; a && (!a.getAttribute || !(b = a.getAttribute("leid")));) a = a.parentNode;
        return b
    }

    function n(a, b, c, d, g) {
        var e = "";
        c || -1 !== b.search("&ei=") || (e = "&ei=" + l(d), -1 === b.search("&lei=") && (d = m(d)) && (e += "&lei=" + d));
        d = "";
        !c && f._cshid && -1 === b.search("&cshid=") && "slh" !== a && (d = "&cshid=" + f._cshid);
        c = c || "/" + (g || "gen_204") + "?atyp=i&ct=" + a + "&cad=" + b + e + "&zx=" + Date.now() + d;
        /^http:/i.test(c) && "https:" === window.location.protocol && (google.ml && google.ml(Error("a"), !1, {
            src: c,
            glmm: 1
        }), c = "");
        return c
    };
    h = google.kEI;
    google.getEI = l;
    google.getLEI = m;
    google.ml = function() {
        return null
    };
    google.log = function(a, b, c, d, g) {
        if (c = n(a, b, c, d, g)) {
            a = new Image;
            var e = k.length;
            k[e] = a;
            a.onerror = a.onload = a.onabort = function() {
                delete k[e]
            };
            a.src = c
        }
    };
    google.logUrl = n;
}).call(this);
(function() {
    google.y = {};
    google.sy = [];
    google.x = function(a, b) {
        if (a) var c = a.id;
        else {
            do c = Math.random(); while (google.y[c])
        }
        google.y[c] = [a, b];
        return !1
    };
    google.sx = function(a) {
        google.sy.push(a)
    };
    google.lm = [];
    google.plm = function(a) {
        google.lm.push.apply(google.lm, a)
    };
    google.lq = [];
    google.load = function(a, b, c) {
        google.lq.push([
            [a], b, c
        ])
    };
    google.loadAll = function(a, b) {
        google.lq.push([a, b])
    };
    google.bx = !1;
    google.lx = function() {};
}).call(this);
google.f = {};
(function() {
    document.documentElement.addEventListener("submit", function(b) {
        var a;
        if (a = b.target) {
            var c = a.getAttribute("data-submitfalse");
            a = "1" === c || "q" === c && !a.elements.q.value ? !0 : !1
        } else a = !1;
        a && (b.preventDefault(), b.stopPropagation())
    }, !0);
    document.documentElement.addEventListener("click", function(b) {
        var a;
        a: {
            for (a = b.target; a && a !== document.documentElement; a = a.parentElement)
                if ("A" === a.tagName) {
                    a = "1" === a.getAttribute("data-nohref");
                    break a
                } a = !1
        }
        a && b.preventDefault()
    }, !0);
}).call(this);
(function() {
    google.hs = {
        h: true,
        sie: false
    };
})();
(function() {
    google.c = {
        btfi: false,
        frt: true,
        gl: false,
        lhc: false,
        ll: true,
        nli: false,
        timl: false,
        wvcpe: true,
        wve: true
    };
    (function() {
        var e = this || self;
        var g = window.performance;
        google.timers = {};
        google.startTick = function(a) {
            google.timers[a] = {
                t: {
                    start: Date.now()
                },
                e: {},
                m: {}
            }
        };
        google.tick = function(a, b, c) {
            google.timers[a] || google.startTick(a);
            c = void 0 !== c ? c : Date.now();
            b instanceof Array || (b = [b]);
            for (var d = 0, f; f = b[d++];) google.timers[a].t[f] = c
        };
        google.c.e = function(a, b, c) {
            google.timers[a].e[b] = c
        };
        google.c.b = function(a) {
            var b = google.timers.load.m;
            b[a] && google.ml(Error("a"), !1, {
                m: a
            });
            b[a] = !0
        };
        google.c.u = function(a) {
            var b = google.timers.load.m;
            if (b[a]) {
                b[a] = !1;
                for (a in b)
                    if (b[a]) return;
                google.csiReport()
            } else {
                var c = "",
                    d;
                for (d in b) c += d + ":" + b[d] + ";";
                google.ml(Error("b"), !1, {
                    m: a,
                    b: !1 === b[a],
                    s: c
                })
            }
        };

        function h(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
        }

        function k(a, b, c, d) {
            "addEventListener" in a ? a.removeEventListener(b, c, d || !1) : a.attachEvent && a.detachEvent("on" + b, c)
        }
        google.rll = function(a, b, c) {
            function d(f) {
                c(f);
                k(a, "load", d);
                k(a, "error", d)
            }
            h(a, "load", d);
            b && h(a, "error", d)
        };
        e.google.aft = function(a) {
            a.setAttribute("data-iml", String(Date.now()))
        };
        google.startTick("load");
        var l = google.timers.load;
        a: {
            var m = l.t;
            if (g) {
                var n = g.timing;
                if (n) {
                    var p = n.navigationStart,
                        q = n.responseStart;
                    if (q > p && q <= m.start) {
                        m.start = q;
                        l.wsrt = q - p;
                        break a
                    }
                }
                g.now && (l.wsrt = Math.floor(g.now()))
            }
        }

        function r(a) {
            if ("hidden" === document.visibilityState) {
                google.c.wve && (google.c.fh = a);
                var b;
                window.performance && window.performance.timing && (b = Math.floor(window.performance.timing.navigationStart + a));
                google.tick("load", "fht", b);
                return !0
            }
            return !1
        }

        function t(a) {
            r(a.timeStamp) && k(document, "visibilitychange", t, !0)
        }
        google.c.wve && (google.c.fh = Infinity);
        h(document, "visibilitychange", t, !0);
        r(0);
        google.c.b("pr");
        google.c.b("xe");
        if (google.c.gl) {
            var u = function(a) {
                a && e.google.aft(a.target)
            };
            h(document.documentElement, "load", u, !0);
            google.c.glu = function() {
                k(document.documentElement, "load", u, !0)
            }
        };
    }).call(this);
})();
(function() {
    function m() {
        return window.performance && window.performance.navigation && window.performance.navigation.type
    };

    function p(a, c) {
        if (!a || r(a)) return 0;
        if (!a.getBoundingClientRect) return 1;
        var d = function(b) {
            return b.getBoundingClientRect()
        };
        return t(a, c, d) ? 0 : u(a, c, d)
    }

    function t(a, c, d) {
        a: {
            for (var b = a; b && b !== c; b = b.parentElement)
                if ("hidden" === b.style.overflow) {
                    c = b;
                    break a
                } c = null
        }
        if (!c) return !1;a = d(a);d = d(c);
        return a.bottom < d.top || a.top >= d.bottom || a.right < d.left || a.left >= d.right
    }

    function r(a) {
        return "none" === a.style.display ? !0 : document.defaultView && document.defaultView.getComputedStyle ? (a = document.defaultView.getComputedStyle(a), !!a && ("hidden" === a.visibility || "0px" === a.height && "0px" === a.width)) : !1
    }

    function u(a, c, d) {
        var b = d(a),
            f = b.left + window.pageXOffset,
            h = b.top + window.pageYOffset,
            k = b.width,
            g = b.height,
            e = 0;
        if (0 >= g && 0 >= k) return e;
        var n = window.innerHeight || document.documentElement.clientHeight;
        0 > h + g ? e = 2 : h >= n && (e = 4);
        if (0 > f + k || f >= (window.innerWidth || document.documentElement.clientWidth)) e |= 8;
        else if (c) {
            for (b = b.left; a && a !== c; a = a.parentElement) b += a.scrollLeft;
            c = d(c);
            if (b + k < c.left || b >= c.right) e |= 8
        }
        e || (e = 1, h + g > n && (e |= 4));
        return e
    };
    var v = window.location,
        w = "aft afti afts frt hct prt pprt sct".split(" ");

    function x(a) {
        return (a = v.search.match(new RegExp("[?&]" + a + "=(\\d+)"))) ? Number(a[1]) : -1
    };
    var y = window.innerHeight || document.documentElement.clientHeight,
        z = 0,
        A = 0,
        C = 0,
        D = 0,
        E = 0,
        F = 0,
        G = 0,
        H = 0,
        I = 0,
        J = !0,
        K = !0,
        L = -1;

    function M(a, c, d, b) {
        var f = google.timers.load.t[a];
        f && (d || b && null != c && c < f) || google.tick("load", a, c)
    }

    function N(a, c, d, b) {
        "1" === a.getAttribute("data-frt") && (M("frt", b, !1, !0), ++D, O());
        c && (M("aft", b, !1, !0), M("afti", b, !1, !0), ++F, d || ++I, O());
        google.c.timl && M("iml", b, !1, !0);
        ++A;
        a.setAttribute("data-frt", "0");
        (google.c.timl || c) && P()
    }

    function P() {
        var a = google.c.timl ? A === z : E === F;
        !K && a && google.c.u("il")
    }

    function O() {
        if (!J) {
            var a = F === E,
                c = D === C,
                d = I === H;
            d = google.c.nli ? d : a;
            if (a && c) {
                google.c.e("load", "ima", String(E));
                google.c.e("load", "imad", String(G));
                google.c.e("load", "aftp", String(Math.round(L)));
                var b = google.timers.load;
                a = b.m;
                if (!a || !a.prs) {
                    var f = m() ? 0 : x("qsubts");
                    0 < f && (a = x("fbts"), 0 < a && (b.t.start = Math.max(f, a)));
                    var h = b.t,
                        k = h.start;
                    a = {
                        wsrt: b.wsrt
                    };
                    for (var g = 0, e; e = w[g++];) {
                        var n = h[e];
                        n && k && (a[e] = n - k)
                    }
                    0 < f && (a.gsasrt = b.t.start - f);
                    f = b.e;
                    b = "/gen_204?s=" + google.sn + "&t=aft&atyp=csi&ei=" + google.kEI + "&rt=";
                    h = "";
                    for (l in a) b += "" + h + l + "." + a[l], h = ",";
                    for (var q in f) b += "&" + q + "=" + f[q];
                    window._cshid && (b += "&cshid=" + window._cshid);
                    2 === m() && (b += "&bb=1");
                    1 === m() && (b += "&r=1");
                    if ("gsasrt" in a) {
                        var l = x("qsd");
                        0 < l && (b += "&qsd=" + l)
                    }
                    google.kBL && (b += "&bl=" + google.kBL);
                    l = b;
                    navigator.sendBeacon ? navigator.sendBeacon(l, "") : google.log("", "", l)
                }
            }
            "hidden" === document.visibilityState && google.c.e("load", "hddn", "1");
            if (null !== google.aftq && (l = 2 === google.fevent || 3 === google.fevent ? google.fevent : 1, 2 === l && c || 1 === l && d || 3 === l && (d || c))) {
                google.tick("load", "aftqf", Date.now());
                var B;
                for (c = 0; d = null === (B = google.aftq) || void 0 === B ? void 0 : B[c++];) try {
                    d()
                } catch (R) {
                    google.ml(R, !1)
                }
                google.aftq = null
            }
        }
    }
    var Q = "src bsrc url ll image img-url".split(" ");

    function S(a) {
        for (var c = 0, d; d = Q[c++];)
            if (a.getAttribute("data-" + d)) return !0;
        return !1
    }

    function T(a, c) {
        0 === c || c & 8 || (a.setAttribute("data-frt", "1"), ++C)
    }
    google.c.b("il");
    google.c.setup = function(a, c, d) {
        var b = a.getAttribute("data-atf");
        if (b) return d = Number(b), c && !a.hasAttribute("data-frt") && T(a, d), d;
        var f = "string" !== typeof a.src || !a.src,
            h = !!a.getAttribute("data-bsrc");
        b = !!a.getAttribute("data-deferred");
        var k = !b && S(a);
        k && a.setAttribute("data-lzy_", "1");
        var g;
        for (g = a; g && "center_col" !== g.id;) g = g.parentElement;
        g = p(a, g);
        a.setAttribute("data-atf", String(g));
        var e = !!(g & 1);
        f = (f || a.complete) && !b && !h && !(google.c.ll && e && k);
        h = !google.c.lhc && Number(a.getAttribute("data-iml")) ||
            0;
        ++z;
        if (f && !h || a.hasAttribute("data-noaft")) a.setAttribute("data-frt", "0"), ++A;
        else {
            var n = google.c.btfi && g & 4 && h && L < y;
            if (n) {
                var q = a.getBoundingClientRect().top + window.pageYOffset;
                !d || q < d ? L = e ? y : q : n = !1
            }
            e && (++E, b && ++G, k || ++H);
            c && T(a, g);
            n && M("aft", h, !1, !0);
            f && h ? N(a, e, k, google.c.btfi ? 0 : h) : (e && (!d || d >= y) && (L = y), google.rll(a, !0, function() {
                N(a, e, k, Date.now())
            }))
        }
        return g
    };
    google.c.ubr = function(a, c, d) {
        0 > L && (d && (L = d), google.c.btfi && M("aft", c));
        a || M("afts", c, !0);
        M("aft", c, !0);
        J && !google.c.frt && (J = !1, O());
        a && K && (M("prt", c), google.c.timl && M("iml", c, !0), K = !1, P(), google.c.setup = function() {
            return 0
        }, google.c.ubr = function() {})
    };
}).call(this);
(function() {
    var b = [function() {
        google.tick && google.tick("load", "dcl")
    }];
    google.dclc = function(a) {
        b.length ? b.push(a) : a()
    };

    function c() {
        for (var a = b.shift(); a;) a(), a = b.shift()
    }
    window.addEventListener ? (document.addEventListener("DOMContentLoaded", c, !1), window.addEventListener("load", c, !1)) : window.attachEvent && window.attachEvent("onload", c);
}).call(this);
(function() {
    var b = [];
    google.jsc = {
        xx: b,
        x: function(a) {
            b.push(a)
        },
        mm: [],
        m: function(a) {
            google.jsc.mm.length || (google.jsc.mm = a)
        }
    };
}).call(this);
(function() {
    var e = this || self;

    var f = {};

    function w(a, b) {
        if (null === b) return !1;
        if ("contains" in a && 1 == b.nodeType) return a.contains(b);
        if ("compareDocumentPosition" in a) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var x = function(a, b) {
            return function(d) {
                d || (d = window.event);
                return b.call(a, d)
            }
        },
        z = "undefined" != typeof navigator && /Macintosh/.test(navigator.userAgent),
        A = function() {
            this._mouseEventsPrevented = !0
        };
    var F = function(a) {
            this.g = a;
            this.h = []
        },
        G = function(a) {
            for (var b = 0; b < a.h.length; ++b) {
                var d = a.g,
                    c = a.h[b];
                d.removeEventListener ? d.removeEventListener(c.eventType, c.o, c.capture) : d.detachEvent && d.detachEvent("on" + c.eventType, c.o)
            }
            a.h = []
        };
    var H = e._jsa || {};
    H._cfc = void 0;
    H._aeh = void 0;
    var I = function() {
            this.h = this.g = null
        },
        K = function(a, b) {
            var d = J;
            d.g = a;
            d.h = b;
            return d
        };
    I.prototype.i = function() {
        var a = this.g;
        this.g && this.g != this.h ? this.g = this.g.__owner || this.g.parentNode : this.g = null;
        return a
    };
    var L = function() {
        this.j = [];
        this.g = 0;
        this.h = null;
        this.l = !1
    };
    L.prototype.i = function() {
        if (this.l) return J.i();
        if (this.g != this.j.length) {
            var a = this.j[this.g];
            this.g++;
            a != this.h && a && a.__owner && (this.l = !0, K(a.__owner, this.h));
            return a
        }
        return null
    };
    var J = new I,
        M = new L;
    var Q = function() {
            this.s = [];
            this.g = [];
            this.h = [];
            this.l = {};
            this.i = null;
            this.j = [];
            N(this, "_custom")
        },
        R = function(a) {
            return String.prototype.trim ? a.trim() : a.replace(/^\s+/, "").replace(/\s+$/, "")
        },
        ha = function(a, b) {
            return function l(c, g) {
                g = void 0 === g ? !0 : g;
                var k = b;
                if ("_custom" == k) {
                    k = c.detail;
                    if (!k || !k._type) return;
                    k = k._type
                }
                var m = k;
                "click" == m && (z && c.metaKey || !z && c.ctrlKey || 2 == c.which || null == c.which && 4 == c.button || c.shiftKey) ? m = "clickmod" : "keydown" == m && !c.a11ysc && (m = "maybe_click");
                var u = c.srcElement || c.target;
                k = S(m, c, u, "", null);
                if (c.path) {
                    M.j = c.path;
                    M.g = 0;
                    M.h = this;
                    M.l = !1;
                    var O = M
                } else O = K(u, this);
                for (var r; r = O.i();) {
                    var h = r;
                    var p = void 0;
                    r = h;
                    var q = m,
                        aa = c;
                    var n = r.__jsaction;
                    if (!n) {
                        var y;
                        n = null;
                        "getAttribute" in r && (n = r.getAttribute("jsaction"));
                        if (y = n) {
                            n = f[y];
                            if (!n) {
                                n = {};
                                for (var B = y.split(ba), ca = B ? B.length : 0, C = 0; C < ca; C++) {
                                    var v = B[C];
                                    if (v) {
                                        var D = v.indexOf(":"),
                                            P = -1 != D,
                                            ea = P ? R(v.substr(0, D)) : da;
                                        v = P ? R(v.substr(D + 1)) : v;
                                        n[ea] = v
                                    }
                                }
                                f[y] = n
                            }
                            r.__jsaction = n
                        } else n = fa, r.__jsaction = n
                    }
                    "maybe_click" == q && n.click ? (p = q, q = "click") : "clickkey" == q ? q = "click" : "click" != q || n.click || (q = "clickonly");
                    p = H._cfc && n.click ? H._cfc(r, aa, n, q, p) : {
                        eventType: p ? p : q,
                        action: n[q] || "",
                        event: null,
                        ignore: !1
                    };
                    k = S(p.eventType, p.event || c, u, p.action || "", h, k.timeStamp);
                    if (p.ignore || p.action) break
                }
                k && "touchend" == k.eventType && (k.event._preventMouseEvents = A);
                if (p && p.action) {
                    if ("mouseenter" == m || "mouseleave" == m)
                        if (u = c.relatedTarget, !("mouseover" == c.type && "mouseenter" == m || "mouseout" == c.type && "mouseleave" == m) || u && (u === h || w(h, u))) k.action = "", k.actionElement = null;
                        else {
                            m = {};
                            for (var t in c) "function" !== typeof c[t] && "srcElement" !== t && "target" !== t && (m[t] = c[t]);
                            m.type = "mouseover" == c.type ? "mouseenter" : "mouseleave";
                            m.target = m.srcElement = h;
                            m.bubbles = !1;
                            k.event = m;
                            k.targetElement = h
                        }
                } else k.action = "", k.actionElement = null;
                h = k;
                a.i && !h.event.a11ysgd && (t = S(h.eventType, h.event, h.targetElement, h.action, h.actionElement, h.timeStamp), "clickonly" == t.eventType && (t.eventType = "click"), a.i(t, !0));
                if (h.actionElement || "maybe_click" == h.eventType) {
                    if (a.i) {
                        if (!h.actionElement || "A" != h.actionElement.tagName ||
                            "click" != h.eventType && "clickmod" != h.eventType || (c.preventDefault ? c.preventDefault() : c.returnValue = !1), (c = a.i(h)) && g) {
                            l.call(this, c, !1);
                            return
                        }
                    } else {
                        if ((g = e.document) && !g.createEvent && g.createEventObject) try {
                            var E = g.createEventObject(c)
                        } catch (ka) {
                            E = c
                        } else E = c;
                        h.event = E;
                        a.j.push(h)
                    }
                    H._aeh && H._aeh(h)
                }
            }
        },
        S = function(a, b, d, c, g, l) {
            return {
                eventType: a,
                event: b,
                targetElement: d,
                action: c,
                actionElement: g,
                timeStamp: l || Date.now()
            }
        },
        ia = function(a, b) {
            return function(d) {
                var c = a,
                    g = b,
                    l = !1;
                "mouseenter" == c ? c = "mouseover" : "mouseleave" == c && (c = "mouseout");
                if (d.addEventListener) {
                    if ("focus" == c || "blur" == c || "error" == c || "load" == c) l = !0;
                    d.addEventListener(c, g, l)
                } else d.attachEvent && ("focus" == c ? c = "focusin" : "blur" == c && (c = "focusout"), g = x(d, g), d.attachEvent("on" + c, g));
                return {
                    eventType: c,
                    o: g,
                    capture: l
                }
            }
        },
        N = function(a, b) {
            if (!a.l.hasOwnProperty(b)) {
                var d = ha(a, b),
                    c = ia(b, d);
                a.l[b] = d;
                a.s.push(c);
                for (d = 0; d < a.g.length; ++d) {
                    var g = a.g[d];
                    g.h.push(c.call(null, g.g))
                }
                "click" == b && N(a, "keydown")
            }
        };
    Q.prototype.o = function(a) {
        return this.l[a]
    };
    var W = function(a, b) {
            var d = new F(b);
            a: {
                for (var c = 0; c < a.g.length; c++)
                    if (T(a.g[c].g, b)) {
                        b = !0;
                        break a
                    } b = !1
            }
            if (b) return a.h.push(d), d;
            U(a, d);
            a.g.push(d);
            V(a);
            return d
        },
        V = function(a) {
            for (var b = a.h.concat(a.g), d = [], c = [], g = 0; g < a.g.length; ++g) {
                var l = a.g[g];
                X(l, b) ? (d.push(l), G(l)) : c.push(l)
            }
            for (g = 0; g < a.h.length; ++g) l = a.h[g], X(l, b) ? d.push(l) : (c.push(l), U(a, l));
            a.g = c;
            a.h = d
        },
        U = function(a, b) {
            var d = b.g;
            ja && (d.style.cursor = "pointer");
            for (d = 0; d < a.s.length; ++d) b.h.push(a.s[d].call(null, b.g))
        },
        Y = function(a, b) {
            a.i = b;
            a.j && (0 < a.j.length && b(a.j), a.j = null)
        },
        X = function(a, b) {
            for (var d = 0; d < b.length; ++d)
                if (b[d].g != a.g && T(b[d].g, a.g)) return !0;
            return !1
        },
        T = function(a, b) {
            for (; a != b && b.parentNode;) b = b.parentNode;
            return a == b
        },
        ja = "undefined" != typeof navigator && /iPhone|iPad|iPod/.test(navigator.userAgent),
        ba = /\s*;\s*/,
        da = "click",
        fa = {};
    var Z = new Q;
    W(Z, window.document.documentElement);
    N(Z, "click");
    N(Z, "focus");
    N(Z, "focusin");
    N(Z, "blur");
    N(Z, "focusout");
    N(Z, "error");
    N(Z, "load");
    N(Z, "auxclick");
    N(Z, "change");
    N(Z, "dblclick");
    N(Z, "input");
    N(Z, "keyup");
    N(Z, "keydown");
    N(Z, "keypress");
    N(Z, "mousedown");
    N(Z, "mouseenter");
    N(Z, "mouseleave");
    N(Z, "mouseout");
    N(Z, "mouseover");
    N(Z, "mouseup");
    N(Z, "paste");
    N(Z, "touchstart");
    N(Z, "touchend");
    N(Z, "touchcancel");
    N(Z, "speech");
    (function(a) {
        google.jsad = function(b) {
            Y(a, b)
        };
        google.jsaac = function(b) {
            return W(a, b)
        };
        google.jsarc = function(b) {
            G(b);
            for (var d = !1, c = 0; c < a.g.length; ++c)
                if (a.g[c] === b) {
                    a.g.splice(c, 1);
                    d = !0;
                    break
                } if (!d)
                for (d = 0; d < a.h.length; ++d)
                    if (a.h[d] === b) {
                        a.h.splice(d, 1);
                        break
                    } V(a)
        }
    })(Z);
    e.gws_wizbind = (0, function(a) {
        return {
            trigger: function(b) {
                var d = a.o(b.type);
                d || (N(a, b.type), d = a.o(b.type));
                var c = b.target || b.srcElement;
                d && d.call(c.ownerDocument.documentElement, b)
            },
            bind: function(b) {
                Y(a, b)
            }
        }
    })(Z);
}).call(this);
(function() {
    window.google.erd = {
        jsr: 0,
        bv: 1489,
        sd: true,
        de: true
    };
})();
var h = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    },
    k = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("a");
    },
    l = k(this),
    m = function(a, b) {
        if (b) a: {
            var c = l;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in
                        c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && h(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    };
m("String.prototype.startsWith", function(a) {
    return a ? a : function(b, c) {
        if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
        var d = this + "";
        b += "";
        var e = d.length,
            g = b.length;
        c = Math.max(0, Math.min(c | 0, d.length));
        for (var f = 0; f < g && c < e;)
            if (d[c++] != b[f++]) return !1;
        return f >= g
    }
});
google.arwt = function(a) {
    a.href = document.getElementById(a.id.substring(a.id.startsWith("vcs") ? 3 : 1)).href;
    return !0
};
(function() {
    var d = function(a) {
            this.h = a = a.url;
            var b = /[?&]dsh=1(&|$)/.test(a);
            this.j = !b && /[?&]ae=1(&|$)/.test(a);
            this.l = !b && /[?&]ae=2(&|$)/.test(a);
            if ((this.g = /[?&]adurl=([^&]*)/.exec(a)) && this.g[1]) {
                try {
                    var c = decodeURIComponent(this.g[1])
                } catch (e) {
                    c = null
                }
                this.i = c
            }
        },
        g = function(a, b) {
            return a.j && a.i || a.l ? 1 == b ? a.j ? a.i : f(a, "&dct=1") : 2 == b ? f(a, "&ri=2") : f(a, "&ri=16") : a.h
        },
        f = function(a, b) {
            return a.g ? a.h.slice(0, a.g.index) + b + a.h.slice(a.g.index) : a.h + b
        };
    var k = function(a, b) {
        this.g = b === h ? a : ""
    };
    k.prototype.i = !0;
    k.prototype.h = function() {
        return this.g.toString()
    };
    k.prototype.toString = function() {
        return this.g.toString()
    };
    var m = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        h = {};
    var n = /^((market|itms|intent|itms-appss):\/\/)/i;
    var p = function(a, b) {
        b instanceof k || b instanceof k || (b = "object" == typeof b && b.i ? b.h() : String(b), m.test(b) || (b = "about:invalid#zClosurez"), b = new k(b, h));
        a.href = b instanceof k && b.constructor === k ? b.g : "type_error:SafeUrl"
    };

    function q(a) {
        var b = /[?&]adurl=/.exec(a);
        return b ? "" + a.slice(0, b.index + 1) + "nis=3&" + a.slice(b.index + 1) : "" + a + (-1 === a.indexOf("?") ? "?" : "&") + "nis=3"
    }

    function r(a) {
        if (document.featurePolicy && a.hasAttribute("attributionsourceeventid") && a.hasAttribute("attributiondestination") && a.hasAttribute("attributionreportto") && a.hasAttribute("attributionexpiry") && document.featurePolicy.allowsFeature("attribution-reporting")) {
            var b = a.href,
                c = /[?&]nis=([^&]*)/.exec(b);
            c && "3" === c[1] || (b = c ? b.replace(/([?&])nis=([^&]*)/, function(e, l) {
                return l + "nis=3"
            }) : q(b), p(a, b))
        }
    };
    google.ausb = function(a) {
        if (!a) return google.ml(Error("a"), !1), !0;
        if (a.hasAttribute("data-impdclcc")) try {
            r(a)
        } catch (l) {}
        if (a.getAttribute("data-sbv2")) {
            if (a.hasAttribute("data-ohref")) var b = a.getAttribute("data-ohref");
            else b = a.href, a.setAttribute("data-ohref", b);
            var c = b;
            var e = new d({
                url: c
            });
            c = e.j && e.i || e.l ? navigator.sendBeacon ? navigator.sendBeacon(f(e, "&act=1&ri=1"), "") ? g(e, 1) : g(e, 2) : g(e, 0) : c;
            c = c instanceof k || !n.test(c) ? c : new k(c, h);
            b != c && p(a, c)
        }
        return !0
    };
}).call(this);
(function() {
    function c(a) {
        for (; a && a != document.documentElement; a = a.parentElement)
            if ("A" == a.tagName) return a;
        return null
    }

    function d(a) {
        if (a = c(a.target)) switch (a.getAttribute("data-agdh")) {
            case "arwt":
                google.arwt(a);
                break;
            case "fvd3vc":
                window.J4LCUe(a);
                break;
            case "EdKoMd":
                (0, google.f.LmvwCb)(a)
        }
        return !0
    };
    window.document.documentElement.addEventListener("mousedown", d, !0);
    window.document.documentElement.addEventListener("touchstart", d, !0);
    window.document.documentElement.addEventListener("click", function(a) {
        var b = c(a.target);
        if (b) switch (b.getAttribute("data-agch")) {
            case "ausb":
                google.ausb(b);
                break;
            case "HJ3bqe":
                window.YvikHb(a, b);
                break;
            case "cqUJI":
                (0, google.f.DfwaCb)(b)
        }
        return !0
    }, !0);
}).call(this); /*CSH_START*/ /*CSH_END*/ <
/script><style>html,body,h1,input,select{font-family:arial,sans-serif}body,h1{font-size:14px;}h1{font-weight:normal;margin:0;padding:0}h3{font-weight:normal;margin:0;padding:0;font-size:20px;line-height:1.3}body{margin:0;background:#fff;color:#202124;}a{color:#1a0dab;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,.10)}a:visited{color:#609}a:hover{text-decoration:underline}a:hover h3{text-decoration:underline}a.a-no-hover-decoration:hover,a.a-no-hover-decoration:hover h3{text-decoration:none}cite,cite a:link,cite a:visited{color:#202124;font-style:normal}button{margin:0}ol li{list-style:none}ol,ul,li{margin:0;padding:0}input{font-size:14px}@-webkit-keyframes qs-timer {0%{}}html:not(.zAoYTe) [tabindex]{outline:0}html:not(.zAoYTe) [href],html:not(.zAoYTe) button,html:not(.zAoYTe) iframe,html:not(.zAoYTe) input,html:not(.zAoYTe) select,html:not(.zAoYTe) textarea{outline:0}html:not(.zAoYTe) .F0azHf{outline:0}.z1asCe{display:inline-block;fill:currentColor;height:24px;line-height:24px;position:relative;width:24px}.z1asCe svg{display:block;height:100%;width:100%}.mfMhoc{font-family:Google Sans,arial,sans-serif-medium,sans-serif !important;}.V88cHc{font-family:Google Sans,arial,sans-serif-medium,sans-serif !important;}.h1QFOe{font-family:Google Sans,arial,sans-serif !important;}.XcVN5d{font-family:Google Sans,arial,sans-serif !important;}.oz3cqf{font-family:Google Sans,arial,sans-serif !important;font-size:16px !important;font-weight:400 !important;line-height:20px !important;text-transform:none !important}.S1gFKb{font-family:arial,sans-serif !important;font-size:14px !important;font-weight:400 !important;line-height:18px !important;text-transform:none !important}.p5AXld{color:#1a0dab !important}a:visited .p5AXld,a:visited.p5AXld{color:#609 !important}.rOVRL{color:#1a0dab !important}.iUh30{font-size:14px;line-height:1.3}.f{color:#70757a;line-height:1.58}.std,.g{font-family:arial,sans-serif;font-size:14px;}.g{line-height:1.58;text-align:left}.std{line-height:146%}.ChOqnd,.ChOqnd a{color:#70757a !important}.ChOqnd{font-size:11px !important;text-decoration:none}.vk_gy{color:#70757a !important}.vk_bk{color:#202124}.dDoNo{font-weight:lighter !important;font-size:xx-large !important;}.vk_h{font-weight:lighter !important;font-size:x-large !important;}.vk_sh{font-weight:lighter !important;font-size:medium !important;}.Uekwlc{font-weight:lighter !important;font-size:14px;}.Uekwlc{line-height:1.8}.g,.KIy09e{width:600px;margin-top:0;margin-bottom:30px;}.iUh30{padding-top:1px;}.di8g3{padding:6px 8px;}#center_col .di8g3{margin:0 -35px 0 -8px;padding:6px 20px 0}#rhs .di8g3{margin-left:2px;padding-bottom:5px;padding-top:5px}.FzvWSb{margin-bottom:5px}.vk_c{position:relative;line-height:1.8;padding:20px 16px 24px;background-color:#fff;width:618px;}#rhs .fIcnad{border:none;margin-left:0}.vk_c,#rhs .fIcnad{border-radius:8px;border:1px solid #dfe1e5;box-shadow:none}.vk_c .vk_c{border-radius:0;box-shadow:none;background-color:transparent;border:0;box-shadow:none;margin:0;padding:0;position:static}.vkc_np{margin-left:-16px;margin-right:-16px}.WIDPrb{padding-left:16px}.iiFzhd{padding-right:16px}.vk_gbt{border-top:1px solid #ebebeb}.vk_spc{height:16px;width:100%}.pVFdhc{background-color:#ebebeb;height:1px}.vk_tbl{border-collapse:collapse}.vk_tbl td{padding:0}.vk_arc{border-top:1px solid #ebebeb;cursor:pointer;height:0;margin-bottom:-19px;overflow:hidden;padding:20px 0;text-align:center}.vk_ard{top:-11px}.vk_aru{bottom:-6px}.vk_ard,.vk_aru{background-color:#ebebeb;margin-left:auto;margin-right:auto;position:relative;height:6px;width:64px}.vk_ard:after,.vk_ard:before,.vk_aru:after,.vk_aru:before{content:' ';height:0;left:0;position:absolute;width:0;border-left:32px solid rgba(255,255,255,0);border-right:32px solid rgba(255,255,255,0)}.vk_ard:before{border-top:16px solid #ebebeb;top:6px}.vk_aru:before{border-bottom:16px solid #ebebeb;bottom:6px}.vk_ard:after{top:0;border-top:16px solid #fff}.vk_aru:after{bottom:0;border-bottom:16px solid #fff}.jC7Epd.vk_ard,.jC7Epd.vk_aru{background-color:#202124}.jC7Epd.vk_ard:before{border-top-color:#202124}.jC7Epd.vk_aru:before{border-bottom-color:#202124}.xpdclps,.xpdxpnd{overflow:hidden}.xpdclps,.xpdxpnd{-webkit-transition:max-height 0.3s}.xpdxpnd,.xpdopen .xpdclps,.xpdopen .xpdxpnd.xpdnoxpnd{max-height:0}.xpdopen .xpdxpnd{max-height:none}.xpdopen .xpdbox .xpdxpnd,.xpdopen .xpdbox.xpdopen .xpdclps{max-height:0}.xpdopen .xpdbox.xpdopen .xpdxpnd,.xpdopen .xpdbox .xpdclps{max-height:none}.xpdclose .k5nfEc{display:none}.fp-i .SzDvzc{display:none}.fp-f{bottom:0;height:auto;left:0;position:fixed !important;right:0;top:0;width:auto;z-index:127}.fp-h:not(.fp-nh):not(.goog-modalpopup-bg):not(.goog-modalpopup){display:none !important}.fp-zh.fp-h:not(.fp-nh):not(.goog-modalpopup-bg):not(.goog-modalpopup){display:block !important;height:0;overflow:hidden;transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.fp-i .fp-c{display:block;min-height:100vh}li.fp-c{list-style:none}.fp-w{box-sizing:border-box;left:0;margin-left:auto;margin-right:auto;max-width:1217px;right:0}.ellip{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tF2Cxc{position:relative}.Jb0Zif .BDNLRc{margin:16px 16px -11px}.RUXr2d{display:inline}.MTB56{margin-right:12px;vertical-align:middle}.Pthbuf{display:flex;align-items:center}.m164Nd{vertical-align:middle;display:inline-block}.qpGQpf{clear:both;padding-top:6px}.tcPEUc .MTB56{display:none}.aCOpRe{line-height:1.58;word-wrap:break-word}.aCOpRe sup{line-height:0.9}.yuRUbf{font-weight:normal;font-size:small;line-height:1.58;}.IsZvec{max-width:48em;color:#4d5156;line-height:1.58}.uo4vr{color:#70757a;line-height:1.58}.IjZ7ze{display:inline-block;color:#70757a;font-size:12px;line-height:1.34;white-space:nowrap}.FyYA1e{margin:5px 0}.OSrXXb{text-overflow:ellipsis;overflow:hidden}.P1usbc{display:table;white-space:nowrap;margin:5px 0;line-height:1.58;color:#70757a;}.G1Rrjc{display:table-cell;padding-left:15px;vertical-align:baseline}.i4vd5e{display:table-cell}.VNLkW{display:table-row;vertical-align:top}.h7mcFf{color:#70757a}.k6DEPe{display:table-row;width:100%}.TXwUJf{color:#70757a}.NnEaBd{text-align:right}.BBwThe{font-weight:700}.Q7PwXb{text-decoration:none}.PcHvNb{position:absolute}.N3nEGc{background-color:#fff;float:left;margin-top:4px}.wEQKyf.N3nEGc{float:right;margin:7px 0 5px 12px}.wEQKyf.Ik9SRc.N3nEGc{margin:2px 0 0 0}.Ixi80c{margin-top:0}.i0PvJb{background-color:#000}.mWTy7c{border-top-left-radius:2px;bottom:0;font-size:11px;padding:1px 3px;position:absolute;right:0;background-color:rgba(0,0,0,.70);color:#fff}.rGhul{display:block;position:relative;overflow:hidden}.rGhul:focus{outline-style:solid;outline-width:2px}.vYWbhc{margin-top:0}.TbwUpd a.fl{font-size:14px}.TQc1id .qLRx3b{font-size:14px;line-height:1.58}.TbwUpd{display:inline-block;padding-bottom:2px;padding-top:1px;-webkit-text-size-adjust:none}.NJjxre{position:absolute;left:0;top:0}.AraNOb{text-decoration:underline}.OhScic{margin:0px}.zsYMMe{padding:0px}.wHYlTd{font-family:arial,sans-serif;font-size:14px;line-height:22px}.GHDvEf,.GHDvEf:hover,.GHDvEf.selected,.GHDvEf.selected:hover{display:inline-block;background-color:#fff;height:12px;margin-top:1px;-webkit-user-select:none;width:13px}.action-menu .gTl8xb{border-color:#202124 transparent;margin-top:-3px;margin-left:3px;left:0;border-color:#70757a transparent}.action-menu{display:inline;margin:0 3px;position:relative;-webkit-user-select:none;margin-top:1px;vertical-align:middle}.action-menu-panel{position:absolute;left:0;top:12px;visibility:hidden;background:#fff;border:1px solid rgba(0,0,0,.20);white-space:nowrap;z-index:3;-webkit-transition:opacity 0.218s;box-shadow:0 2px 4px rgba(0,0,0,.2)}.action-menu-item{cursor:pointer;-webkit-user-select:none}.action-menu-item:hover{background-color:#f8f9fa}#rcnt .action-menu-item a.fl,.action-menu-item a.fl{color:#3c4043;display:block;padding:7px 18px;text-decoration:none;outline:0}.action-menu-panel:focus,.action-menu-item:focus,.action-menu-item a:focus{outline:none}.action-menu-item{-webkit-user-select:none}.action-menu-item.selected{background-color:#f8f9fa}.Uo8X3b{clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;z-index:-1000;-webkit-user-select:none}#rhs{float:left;min-width:268px;display:block;position:relative;padding-bottom:15px;padding-right:8px;margin-left:892px}@media (min-width:1459px) and (max-width:1539px){#rhs{margin-left:calc(50vw + 163px)}}@media (min-width:1539px){#rhs{margin-left:932px}}@media (max-width:1300px){#rhs{margin-left:876px}}#rhs .scrt.VjDLd,#rhs table.VjDLd{border:0}#rhs .VjDLd{border:1px solid #f8f9fa;padding-left:17px;padding-right:16px;position:relative;width:369px;box-sizing:border-box}#rhs.hSOk2e .VjDLd{width:369px}.s6JM6d .rhsl5{display:none}#rhs.rhstc4 .VjDLd{width:369px}#rhs.rhstc5 .VjDLd{width:457px}.rhstc4 .rhsg4{background:none !important;display:none !important}.rhstc5 .rhsl5{background:none !important;display:none !important}.GLcBOb{color:#70757a;font-size:14px;font-family:Google Sans,arial,sans-serif;border-bottom:1px solid #ebebeb;margin-top:-21px;position:relative;z-index:126}#hdtb-msb{position:relative;white-space:nowrap;align-items:baseline;display:flex;-ms-flex-pack:justify;float:left;justify-content:space-between;min-width:832px;}.MUFPAc{display:inline;margin-left:169px;}.MbEPDb{vertical-align:text-bottom;margin-left:-4px}@media (max-width:1300px){}.hdtb-mitem .GOE98c,.hdtb-mitem a,.hdtb-mitem.hdtb-msel,.t2vtad{color:#5f6368;text-decoration:none;display:inline-block;padding:0 12px;padding:8px 16px 8px 16px;padding:17px 12px 11px 10px;}.hdtb-mitem{height:16px;line-height:16px;margin:11px 1px 0;display:inline-block}.hdtb-mitem a:active{color:#1a73e8}.hdtb-mitem.hdtb-msel{color:#1a73e8;}.cCvmNd .hdtb-mitem.hdtb-msel{border-bottom:none}.hdtb-mitem.hdtb-msel:hover{cursor:pointer}.hdtb-mitem.hdtb-msel:active{background:none}.hdtb-mitem a{color:#5f6368}.t2vtad{border:1px solid transparent;text-align:center;border-radius:2px;line-height:19px;cursor:pointer;margin-left:-1px;padding:4px 11px;margin-right:-11px;}.t2vtad:not(.hdtb-tl-sel):hover{box-shadow:0 1px 1px rgba(0,0,0,0.1);-webkit-transition:all 0.0s;background-color:#f8f9fa;background-image:-webkit-linear-gradient(top,#f8f9fa,#f8f9fa);background-image:-webkit-gradient(linear,left top,left bottom,from(#f8f9fa),to(#f8f9fa));border:1px solid #dadce0;color:#202124}.t2vtad:active,.t2vtad:not(.hdtb-tl-sel):hover:active{background-color:#f8f9fa;background-image:-webkit-linear-gradient(top,#f8f9fa,#f8f9fa);background-image:-webkit-gradient(linear,left top,left bottom,from(#f8f9fa),to(#f8f9fa));box-shadow:inset 0 1px 2px rgba(0,0,0,0.1)}.YTDezd{background:#1a73e8;height:3px;margin-top:11px;}.bmaJhd{margin-right:5px;vertical-align:text-bottom}.v7W49e{margin-top:6px}[dir='ltr'],[dir='rtl']{unicode-bidi:-webkit-isolate;unicode-bidi:isolate}bdo[dir='ltr'],bdo[dir='rtl']{unicode-bidi:bidi-override;unicode-bidi:-webkit-isolate-override;unicode-bidi:isolate-override}.GyAeWb{position:relative;margin-top:0px;clear:both;}.eqAnXb{font-size:medium;font-weight:normal;line-height:1.2;}.main{min-width:1121px;width:100%;}@media (min-width:1121px) and (max-width:1300px){.GyAeWb,.appbar,.GLcBOb{margin-left:calc((100vw - 1065px) /
2 - 180 px);
}
}
@media(max - width: 1121 px) {
    .GyAeWb, .appbar, .GLcBOb {
        margin - left: -152 px
    }
}.e9EfHf {
    font - family: arial, sans - serif;
    clear: both;
    min - width: 833 px;
    margin - left: 0;
    padding - top: 20 px;
    box - sizing: border - box;
    position: relative;
    min - height: 100 vh;
}.D6j0vc {
    float: left;width: 0
}.gXmnc {
    clear: both;position: relative;margin - left: 180 px;width: 652 px
}.D6j0vc {
    max - width: 1539 px
}.CvDJxb {
    min - width: 1121 px;
    z - index: 128
}.dodTBe {
    margin: 6 px 0 4 px;height: 65 px;
}.appbar {
    background: #fff; - webkit - box - sizing: border - box;
} < /style></head > < body jsmodel = "hspDDf"
class = "srp"
jscontroller = "Eox39d"
marginheight = "3"
topmargin = "3"
jsaction = "rcuQ6b:npT2md"
id = "gsr" > < style > .wYq63b {
    display: flex;left: 0;position: absolute;top: 0;z - index: 1001
}.S6VXfe {
    align - items: center;
    background - color: #fff;
    border - radius: 0 2 px 2 px 0;
    box - shadow: 0 2 px 2 px 0 rgba(0, 0, 0, .16), 0 0 0 1 px rgba(0, 0, 0, .08);
    display: flex;
    margin: 80 px auto 8 px 0;
    overflow: hidden
}.gyPpGe, .gyPpGe: visited, .qlVNAd {
    border: 2 px solid rgba(0, 0, 0, .16);border - radius: 2 px;color: #4b11a8;cursor:pointer;display:inline-block;font-size:14px;line-height:20px;margin:6px 11px;min-height:32px;text-decoration:underline;text-align:center;width:106px}.gyPpGe:not(:focus){clip:rect(1px,1px,1px,1px);overflow:hidden;position:absolute;padding:0}a.oBa0Fe{color:# 70757 a;float: right;font - style: italic; - webkit - tap - highlight - color: rgba(0, 0, 0, .00);tap - highlight - color: rgba(0, 0, 0, .00)
}
a.aciXEb {
    padding: 0 5 px;
}.gsfi, .lst {
    font: 16 px arial,
    sans - serif;color: rgba(0, 0, 0, .87);line - height: 34 px;height: 34 px!important
}
#searchform {
    width: 100 % ;
}
#searchform.minidiv.sbfcn, #searchform.minidiv.sbhcn {
    box - shadow: 0 1 px 6 px rgba(32, 33, 36, .28)
}.srp #searchform {
    position: absolute;top: 20 px;margin - top: 6 px;
}.tsf {
    width: 833 px;
}.Q3DXx {
    display: flex
}.Q3DXx.yIbDgf {
    justify - content: space - between
}.Q3DXx #gb, .Q3DXx #gb > div {
    float: none
}.sfbg {
    background: #fff;height: 69 px;left: 0;position: absolute;width: 100 %
}.minidiv.sfbg {
    height: 72 px;overflow: hidden;background: #fff;box - shadow: 0 1 px 6 px 0 rgba(32, 33, 36, 0.28)
}.A8SBwf {
    margin: 0 auto;width: 692 px;margin - left: 133 px;position: relative;padding - left: 27 px;
}.RNNXgb {
    display: flex;z - index: 3;height: 44 px;background: #fff;border: 1 px solid transparent;box - shadow: 0 2 px 5 px 1 px rgba(64, 60, 67, .16);border - radius: 24 px;margin: 0 auto;width: 690 px;
}.emcav.RNNXgb {
    border - bottom - left - radius: 0;
    border - bottom - right - radius: 0;
    box - shadow: 0 2 px 8 px 1 px rgba(64, 60, 67, .24);
    border - color: rgba(223, 225, 229, 0)
}.minidiv.emcav.RNNXgb {
    border - bottom - left - radius: 0;
    border - bottom - right - radius: 0;
    box - shadow: 0 1 px 6 px rgba(32, 33, 36, .28);
    border - color: rgba(223, 225, 229, 0)
}.RNNXgb: hover, .sbfc.RNNXgb {
    background - color: #fff;
    box - shadow: 0 2 px 8 px 1 px rgba(64, 60, 67, .24);
    border - color: rgba(223, 225, 229, 0)
}.minidiv.RNNXgb: hover, .minidiv.sbfc.RNNXgb {
    border - color: rgba(223, 225, 229, 0);
    box - shadow: 0 1 px 6 px rgba(32, 33, 36, .28)
}.SDkEP {
    flex: 1;display: flex;padding: 5 px 4 px 0 14 px;
}.logo {
    position: absolute;left: -139 px;padding: 4 px 28 px 0 30 px;top: 6 px;
}.iblpc {
    display: flex;align - items: center;padding - right: 6 px;margin - top: -7 px
}.sbfc.iblpc, .emcav.iblpc {
    padding - right: 14 px;
    margin - left: -1 px
}.iblpc span {
    display: none
}.sbfc.iblpc span, .emcav.iblpc span {
    display: block
}.sbfc.A8SBwf, .emcav.A8SBwf {
    padding - left: 0;
    width: 719 px
}.sbfc.RNNXgb, .emcav.RNNXgb {
    width: 717 px
}
@media(min - width: 1121 px) and(max - width: 1300 px) {
    .A8SBwf {
        margin - left: calc((100 vw - 1065 px) / 2 + 105 px);
    }
}
@media(max - width: 1121 px) {
    .A8SBwf {
        margin - left: 133 px
    }
}
@media(max - width: 1300 px) {
    .A8SBwf {
        width: 540 px
    }.RNNXgb {
        width: 538 px
    }.sbfc.A8SBwf, .emcav.A8SBwf {
        width: 567 px
    }.sbfc.RNNXgb, .emcav.RNNXgb {
        width: 565 px
    }
}
#logo {
    overflow: hidden;position: relative;display: block;
}
#logo img {
    border: 0
}.CcAdNb {
    margin: auto
}.QCzoEc {
    color: #9aa0a6;height:20px;width:20px}.gLFyf{background-color:transparent;border:none;margin:0;padding:0;color:rgba(0,0,0,.87);word-wrap:break-word;outline:none;display:flex;flex:100%;-webkit-tap-highlight-color:transparent;margin-top:-37px;height:34px;font-size:16px;}.gLFyf{height:39px !important;line-height:39px;margin-top:-42px}.a4bIc{display:flex;flex:1;flex-wrap:wrap}.YacQv{color:transparent;flex:100%;white-space:pre;height:34px}.YacQv{height:39px !important;line-height:39px}.YacQv span{background:url("/images/experiments/wavy-underline.png") repeat-x scroll 0 100% transparent;padding:0 0 7px 0}.gLFyf.i4ySpb{display:block}.Sxjlmb{white-space:nowrap;margin:20px;font-size:14px;font-weight:bold;line-height:normal;color:# fff
}.yUTMj {
    font - family: arial, sans - serif;
    font - weight: 400
}.v0rrvd {
    padding - bottom: 16 px
}
@keyframes g - snackbar - show {
    from {
        pointer - events: none;
        transform: translateY(0)
    }
    to {
        transform: translateY(-100 % )
    }
}
@keyframes g - snackbar - hide {
    from {
        transform: translateY(-100 % )
    }
    to {
        transform: translateY(0)
    }
}
@keyframes g - snackbar - show - content {
    from {
        opacity: 0
    }
}
@keyframes g - snackbar - hide - content {
    to {
        opacity: 0
    }
}.tYAdEe, .SaJ9Qe {
    bottom: 0;height: 0;position: fixed;z - index: 999
}.FEXCIb, .CIKhFd {
    box - sizing: border - box;
    visibility: hidden
}.EA3l1b {
    background - color: #323232;padding:0 24px}.Xb004{align-items:center;align-items:center;-webkit-box-align:center;display:-webkit-box;display:flex;display:flex}.lnctfd .Xb004{animation:g-snackbar-hide-content 350ms cubic-bezier(.4,0,.2,1) both;animation:g-snackbar-hide-content 350ms cubic-bezier(.4,0,.2,1) both}.ZWC4b .Xb004{animation:g-snackbar-show-content 350ms cubic-bezier(.4,0,.2,1) 150ms both;animation:g-snackbar-show-content 350ms cubic-bezier(.4,0,.2,1) 150ms both}.awHmMb.awHmMb{line-height:20px}.awHmMb{-webkit-box-flex:1;color:# fff;
    flex: 1 1 auto;
    margin: 14 px 0;
    word -
        break :break -word
}
@media(min - width: 569 px) and(min - height: 569 px) {
    .tYAdEe, .SaJ9Qe {
        text - align: center
    }.CIKhFd, .FEXCIb {
        display: inline - block;max - width: 568 px;min - width: 288 px;text - align: left
    }.EA3l1b {
        border - radius: 8 px
    }.BDp8nf {
        margin - left: 40 px
    }
}.SaJ9Qe {
    left: 16 px;right: auto
}.qfY0Jf {
    font - weight: normal;
    border: 1 px solid #fff;
    border - radius: 3 px;
    padding: 1 px 3 px 0 3 px
}.dRYYxd {
    display: flex;flex: 0 0 auto;margin - top: -5 px;align - items: stretch;flex - direction: row
}.BKRPef {
    flex: 1 0 auto;display: none;cursor: pointer;align - items: center;border: 0;background: transparent;outline: none;padding: 0 8 px;line - height: 44 px
}.M2vV3 {
    display: flex
}.ExCKkf {
    height: 100 % ;color: #70757a;vertical-align:middle;outline:none}.BKRPef{padding-right:4px}.ExCKkf{margin-right:12px}.ACRAdd{border-left:1px solid # dfe1e5;height: 65 %
}.XDyW0e {
    flex: 1 0 auto;display: flex;cursor: pointer;align - items: center;border: 0;background: transparent;outline: none;padding: 0 8 px;width: 24 px;line - height: 44 px
}.goxjub {
    height: 24 px;width: 24 px;vertical - align: middle
}.Tg7LZd {
    height: 44 px;width: 44 px;background: transparent;border: none;cursor: pointer;flex: 0 0 auto;padding: 0
}.Tg7LZd {
    flex: 0 0 auto;padding - right: 13 px
}
html: not(.zAoYTe).Tg7LZd: focus {
    outline: none
}.zgAlFc {
    background: none;color: #4285f4;height:24px;width:24px;margin:auto}.UUbT9{position:absolute;text-align:left;z-index:989;cursor:default;-webkit-user-select:none;width:100%;margin-top:-1px;}.aajZCb{display:flex;flex-direction:column;list-style-type:none;margin:0;padding:0;overflow:hidden;background:# fff;border - radius: 0 0 24 px 24 px;box - shadow: 0 9 px 8 px - 3 px rgba(64, 60, 67, .24),
    8 px 0 8 px - 7 px rgba(64, 60, 67, .24),
    -8 px 0 8 px - 7 px rgba(64, 60, 67, .24);border: 0;padding - bottom: 4 px;
}.minidiv.aajZCb {
    box - shadow: 0 4 px 6 px rgba(32, 33, 36, .28);
    border - bottom - left - radius: 16 px;
    border - bottom - right - radius: 16 px
}.erkvQe {
    padding - bottom: 16 px;
    flex: auto;
}.RjPuVb {
    height: 1 px;margin: 0 26 px 0 0;
}.S3nFnd.RjPuVb, .S3nFnd.aajZCb {
    flex: 0 0 auto
}.xtSCL {
    border - top: 1 px solid #e8eaed;
    margin: 0 14 px;
    padding - bottom: 4 px
}
#shJ2Vb {
    display: none
}.OBMEnb {
    padding: 0;margin: 0
}.G43f7e {
    display: flex;flex - direction: column;min - width: 0;padding: 0
}
#ynRric {
    display: none
}.ynRric {
    list - style - type: none;
    flex - direction: column;
    color: #70757a;font-family:Google Sans,arial,sans-serif-medium,sans-serif;font-size:14px;margin:0 20px 0 16px;padding:8px 0 8px 0;line-height:16px;width:100%}.ynRric{letter-spacing:0;text-transform:none}# YMXe {
        display: none
    }.sbct {
        display: flex;align - items: center;min - width: 0;max - height: none;padding: 0;
    }.eIPGRd {
        flex: auto;display: flex;align - items: center;margin: 0 20 px 0 14 px
    }.pcTkSc {
        display: flex;flex: auto;flex - direction: column;min - width: 0;max - height: none;padding: 6 px 0
    }.sbic {
        display: flex;align - items: center;margin - right: 14 px
    }.ClJ9Yb {
        line - height: 12 px;
        font - size: 13 px;
        color: #80868b;margin-top:2px}.wM6W7d{display:flex;font-size:16px;color:# 212121;
        flex: auto;
        align - items: center;
        word -
            break :break -word;
        padding - right: 8 px
    }.wM6W7d span {
        flex: auto
    }.AQZ9Vd {
        display: flex;align - self: stretch
    }
    #TN4rFf {
        display: none
    }.IDVnvc {
        display: inline - block;max - width: 223 px;margin: 8 px - 3 px 8 px 13 px;margin: 0 - 10 px 0 10 px;border - radius: 12 px;height: 184 px;
    }.cRV9hb {
        width: 96 px;padding: 6 px;
    }.cRV9hb.pcTkSc {
        font - family: arial, sans - serif;
        overflow: hidden;
        margin - top: 4 px;
        padding: 0;
    }.cRV9hb.pcTkSc.wM6W7d {
        font - size: 14 px;
        line - height: 18 px;
        padding: 0;
        color: #202124}.cRV9hb .pcTkSc .ClJ9Yb{line-height:16px;font-size:12px;display:none;display:flex}.cRV9hb .pcTkSc .wM6W7d span,.cRV9hb .pcTkSc .ClJ9Yb span{overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;white-space:normal}.cRV9hb .pcTkSc .wM6W7d span{-webkit-line-clamp:2}.cRV9hb .pcTkSc .ClJ9Yb span{-webkit-line-clamp:2}.aVbWac{background:# fff;
        border - radius: 8 px;
        height: 96 px
    }
    @media(max - width: 1300 px) {
        .A8SBwf: not(.h3L8Ub).IDVnvc {
            height: 167 px
        }.A8SBwf: not(.h3L8Ub).cRV9hb {
            width: 79 px
        }.A8SBwf: not(.h3L8Ub).aVbWac {
            height: 79 px
        }.A8SBwf: not(.h3L8Ub).aVbWac.sbic.vYOkbe {
            height: 79 px;width: 79 px
        }
    }.MG7lrf {
        font - size: 8 pt;
        margin - top: -16 px;
        position: absolute;
        right: 16 px
    }.c58wS {
        display: flex;margin - right: -14 px;position: relative;z - index: 99
    } < /style><div id="_HYOtYeGkDZTt0ATr2qGoDw1"></div > < noscript > < style > table, div, span, p {
        display: none
    } < /style><meta content="0;url=/search ? q = google + % E7 % AF % 80 % E6 % 8 B % 8 D % E5 % 99 % A8 & amp;
    sxsrf = AOaemvJ - pxI6bxnh4N6dbFGjL_q_BmMS1w: 1638761245227 & amp;
    gbv = 1 & amp;
    sei = HYOtYeGkDZTt0ATr2qGoDw " http-equiv="
    refresh "><div style="
    display: block ">如果系統沒有在數秒鐘後將您重新導向，請按一下<a href=" / search ? q = google + % E7 % AF % 80 % E6 % 8 B % 8 D % E5 % 99 % A8 & amp;
    sxsrf = AOaemvJ - pxI6bxnh4N6dbFGjL_q_BmMS1w: 1638761245227 & amp;
    gbv = 1 & amp;
    sei = HYOtYeGkDZTt0ATr2qGoDw ">這裡</a>。</div></noscript><h1 class="
    Uo8X3b OhScic zsYMMe ">無障礙連結</h1><div jscontroller="
    EufiNb " class="
    wYq63b "><div class="
    S6VXfe "><a jsname="
    BKxS1e " class="
    gyPpGe " role="
    link " tabindex="
    0 " jsaction="
    i3viod " data-ved="
    0 ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ67oDCAU ">跳至主內容</a><a jsname="
    KI37ad " class="
    gyPpGe " href="
    https: //support.google.com/websearch/answer/181196?hl=zh-TW" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://support.google.com/websearch/answer/181196%3Fhl%3Dzh-TW&amp;ved=0ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQwcMDCAY">無障礙說明</a><div data-async-context="async_id:duf3-78;authority:0;card_id:;entry_point:0;feature_id:;ftoe:0;header:0;is_jobs_spam_form:0;open:0;preselect_answer_index:-1;suggestions:;suggestions_subtypes:;suggestions_types:;surface:0;title:;type:78"><div jscontroller="EkevXb" style="display:none" jsaction="rcuQ6b:npT2md"></div><div id="duf3-78" data-jiis="up" data-async-type="duffy3" data-async-context-required="type,open,feature_id,async_id,entry_point,authority,card_id,ftoe,title,header,suggestions,surface,suggestions_types,suggestions_subtypes,preselect_answer_index,is_jobs_spam_form" class="yp" data-ved="0ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ-0EIBw"></div><a jsname="JUypV" class="gyPpGe" data-async-trigger="duf3-78" role="link" tabindex="0" jsaction="trigger.szjOR">無障礙工具意見回饋</a></div></div></div><div id="_HYOtYeGkDZTt0ATr2qGoDw3"></div><div class="CvDJxb" jscontroller="tIj4fb" jsaction="rcuQ6b:npT2md" id="searchform"><div><div style="margin-top:-20px" class="sfbg"></div><div class="Q3DXx yIbDgf"><form class="tsf" action="/search" id="tsf" data-submitfalse="q" method="GET" name="f" role="search"> <div jsmodel="vWNDde" jsdata="MuIEvd;_;BOc63k"> <div jscontroller="cnjECf" jsmodel="QubRsd naJZPb " class="A8SBwf" jsdata="LVplcb;_;" jsaction="lX6RWd:w3Wsmc;DkpM0b:d3sQLd;IQOavd:dFyQEf;XzZZPe:jI3wzf;Aghsf:AVsnlb;iHd9U:Q7Cnrc;f5hEHe:G0jgYd;vmxUb:j3bJnb;R2c5O:LuRugf;qiCkJd:ANdidc;NOg9L:HLgh3;uGoIkd:epUokb;zLdLw:eaGBS;Tq408e:dRyDBc;rcuQ6b:npT2md"><div class="logo"><a href="https://www.google.com/webhp?hl=zh-TW&amp;sa=X&amp;ved=0ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQPAgI" title="Google 首頁" id="logo" data-hveid="8"><img src="/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google" height="30" width="92"></a></div><div class="RNNXgb" jsname="RNNXgb"><div class="SDkEP"><div class="iblpc" jsname="uFMOof"><div class="CcAdNb"><span class="QCzoEc z1asCe MZy1Rb"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span></div></div><div jscontroller="vZr2rb" class="a4bIc" jsname="gLFyf" jsaction="h5M12e;input:d3sQLd;blur:jI3wzf;Tq408e:dRyDBc"><div class="YacQv gsfi" jsname="vdLsw"></div><div jsname="aJyGR" jscontroller="xMclgd" class="gLFyf i4ySpb gsfi" data-promo-open-duration="2000" jsaction="rcuQ6b:npT2md"><g-snackbar jsname="nH91he" jscontroller="OZLguc" style="display:none" data-dismiss="" jsshadow="" jsaction="rcuQ6b:npT2md"><div jsname="sM5MNb" aria-live="polite" class="SaJ9Qe"><div jsname="Ng57nc" class="CIKhFd v0rrvd" data-ved="0ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ4G8ICg"><div class="EA3l1b"><div class="Xb004" jsslot=""><span class="awHmMb wHYlTd yUTMj Sxjlmb">按下 <span class="qfY0Jf">/</span> 鍵即可跳至搜尋框</span></div></div></div></div></g-snackbar></div><input class="gLFyf gsfi" jsaction="paste:puy29d; mouseenter:MJEKMe; mouseleave:iFHZnf;" maxlength="2048" name="q" type="text" aria-autocomplete="both" aria-haspopup="false" autocapitalize="off" autocomplete="off" autocorrect="off" role="combobox" spellcheck="false" value="google 節拍器" aria-label="搜尋" data-ved="0ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ39UDCAs"></div><div class="dRYYxd">   <div jscontroller="PymCCe" class="BKRPef M2vV3" jsname="RP0xob" aria-label="清除" role="button" jsaction="AVsnlb;rcuQ6b:npT2md" data-ved="0ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ05YFCAw"> <span class="ExCKkf z1asCe rzyADb" jsname="itVqKe" role="button" tabindex="0"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></span> <span class="ACRAdd"></span> </div> <div jscontroller="unV4T" class="XDyW0e" aria-label="語音搜尋" role="button" tabindex="0" jsaction="h5M12e;rcuQ6b:npT2md;Tq408e:dRyDBc" data-ved="0ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQvs8DCA0"><svg class="goxjub" focusable="false" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg></div></div></div>  <button jsname="Tg7LZd" class="Tg7LZd" aria-label="Google 搜尋" type="submit" data-ved="0ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ4dUDCA4"> <div class="zgAlFc"> <span class="z1asCe MZy1Rb"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span> </div> </button> </div><div jscontroller="Dvn7fe" class="UUbT9" style="display:none" jsname="UUbT9" jsaction="mouseout:ItzDCd;mouseleave:MWfikb;hBEIVb:nUZ9le;YMFC3:VKssTb;mMf61e:Mb6Xlc"><div class="RjPuVb" jsname="RjPuVb"></div><div class="aajZCb" jsname="aajZCb"><div class="xtSCL"></div><ul class="erkvQe" jsname="erkvQe" role="listbox"></ul><div jsname="E80e9e" class="OBMEnb" id="shJ2Vb" role="presentation"><ul jsname="bw4e9b" class="G43f7e" role="listbox"></ul></div><div class="ynRric" id="ynRric" role="presentation"></div><li data-view-type="1" class="sbct" id="YMXe" role="presentation"><div class="eIPGRd"><div class="sbic"></div><div class="pcTkSc" role="option"><div class="wM6W7d"><span></span></div><div class="ClJ9Yb"><span></span></div></div><div class="AQZ9Vd"><div class="sbai">移除</div></div></div></li><li class="IDVnvc" data-view-type="6" id="TN4rFf" role="presentation"><div class="cRV9hb"><div class="aVbWac"><div class="sbic"></div></div><div class="pcTkSc" role="option"><div class="wM6W7d"><span></span></div><div class="ClJ9Yb"><span></span></div></div></div></li></div><div jsname="JUypV" jscontroller="OqGDve" class="MG7lrf" data-async-context="async_id:duf3-46;authority:0;card_id:;entry_point:0;feature_id:;ftoe:0;header:0;is_jobs_spam_form:0;open:0;preselect_answer_index:-1;suggestions:;suggestions_subtypes:;suggestions_types:;surface:0;title:;type:46"><div jscontroller="EkevXb" style="display:none" jsaction="rcuQ6b:npT2md"></div><div id="duf3-46" data-jiis="up" data-async-type="duffy3" data-async-context-required="type,open,feature_id,async_id,entry_point,authority,card_id,ftoe,title,header,suggestions,surface,suggestions_types,suggestions_subtypes,preselect_answer_index,is_jobs_spam_form" class="yp" data-ved="0ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ-0EIDw"></div><a class="oBa0Fe aciXEb" href="#" id="sbfblt" data-async-trigger="duf3-46" role="button" jsaction="trigger.szjOR" data-ved="0ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQtw8IEA">回報不適當的預測查詢字串</a></div></div></div> <div style="background:url(/images/searchbox/desktop_searchbox_sprites318_hr.webp)"> </div> </div> <div id="tophf"><input name="sxsrf" value="AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227" type="hidden"><input value="HYOtYeGkDZTt0ATr2qGoDw" name="ei" type="hidden"><input value="ALs-wAMAAAAAYa2RLdybobTM-qbchkLXxPipvvRu9vDr" disabled="true" name="iflsig" type="hidden"></div></form><div class="Q3DXx"><div class="c58wS"><div jscontroller="JaEBL" class="mOt1Pc" id="_HYOtYeGkDZTt0ATr2qGoDw5" aria-label="設定" jsaction="rcuQ6b:npT2md"></div></div><div id="_HYOtYeGkDZTt0ATr2qGoDw7"></div></div></div></div></div><div class="DH7hPe"></div><div id="gac_scont"></div><span class="kpshf line gsr bilit big mdm" style="display:none"></span><div class="main" id="main"><div class="e9EfHf" id="cnt"><div class="dodTBe" id="sfcnt"></div><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){
        google.tick("load", "sct");
}).call(this); < /script><div id="easter-egg"></div > < div id = "dc" > < /div><style>em{color:#ea4335;font-weight:normal;font-style:normal}.yg51vc{background:#fff;height:58px;padding:0;position:relative;z-index:126;white-space:nowrap}.iJddsb{display:inline-block;fill:currentColor}.iJddsb img,.iJddsb svg{display:block;height:100%;width:100%}.rIbAWc{cursor:pointer;display:inline-block}.CaY96,.VpHku{font-family:Google Sans,arial,sans-serif;display:block}.CaY96:hover{background-color:rgba(218,220,224,.5);text-decoration:none}.CaY96,.CaY96:visited{border-radius:50%;color:#5f6368;padding:8px;width:24px;height:24px}.kPNez{display:inline-block}.pdswFd{float:right;position:relative;z-index:3;right:17px}.pdswFd .hdtb-mitem{display:inline-block}.p2Tgt{color:#70757a;font-size:12px;font-style:italic;margin:0 4px 4px}.t4wgMc{background:#fff;border-radius:20px;box-shadow:0 3px 8px 0 rgba(0,0,0,0.2),0 0 0 1px rgba(0,0,0,0.08);position:absolute;transition:opacity 0.15s,transform 0.15s;width:fit-content;z-index:127}.tYAdEe,.vT5nhd{left:0;right:0}.gTMtLb{z-index:1001;position:absolute;top:-1000px}.WE0UJf{height:43px;margin-left:180px;}.LHJvCe{display:flex;position:absolute;top:0;-webkit-transition:all 220ms ease-in-out;color:#70757a;justify-content:space-between;min-width:652px;line-height:43px}#result-stats{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:Google Sans,arial,sans-serif;padding-top:0;padding-bottom:0;padding-right:8px;}</style > < div jscontroller = "HYSCof"
jsdata = "Z1JpA;_;BOc63o"
jsaction = "rcuQ6b:npT2md"
class = "gke0pe"
id = "top_nav" > < h1 class = "Uo8X3b OhScic zsYMMe" > 搜尋模式 < /h1><div class="GLcBOb" id="hdtb" role="navigation"><div class="yg51vc" id="pTwnEc"><div class="IC1Ck" id="hdtb-msb"><div><div class="MUFPAc"><div class="hdtb-mitem hdtb-msel" aria-current="page"><span class="bmaJhd iJddsb" style="height:16px;width:16px"><svg focusable="false" viewbox="0 0 24 24"><path fill="#34a853" d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"></path > < path fill = "#ea4335"
d = "M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6" > < /path><path fill="#fbbc04" d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"></path > < path fill = "#4285f4"
d = "M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59" > < /path></svg > < /span>全部<div class="YTDezd"></div > < /div><div class="hdtb-mitem"><a href="/search ? q = google + % E7 % AF % 80 % E6 % 8 B % 8 D % E5 % 99 % A8 & amp;
sxsrf = AOaemvJ - pxI6bxnh4N6dbFGjL_q_BmMS1w: 1638761245227 & amp;
source = lnms & amp;
tbm = isch & amp;
sa = X & amp;
ved = 2 ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ_AUoAXoECAEQAw " data-hveid="
CAEQAw "><span class="
bmaJhd iJddsb " style="
height: 16 px;
width: 16 px "><svg focusable="
false " viewbox="
0 0 24 24 "><path d="
M14 13 l4 5 H6l4 - 4 1.79 1.78 L14 13 zm - 6.01 - 2.99 A2 2 0 0 0 8 6 a2 2 0 0 0 - .01 4.01 zM22 5 v14a3 3 0 0 1 - 3 2.99 H5c - 1.64 0 - 3 - 1.36 - 3 - 3 V5c0 - 1.64 1.36 - 3 3 - 3 h14c1 .65 0 3 1.36 3 3 zm - 2.01 0 a1 1 0 0 0 - 1 - 1 H5a1 1 0 0 0 - 1 1 v14a1 1 0 0 0 1 1 h7v - .01 h7a1 1 0 0 0 1 - 1 V5 "></path></svg></span>圖片</a></div><div class="
hdtb - mitem "><a href="
https: //maps.google.com/maps?q=google+%E7%AF%80%E6%8B%8D%E5%99%A8&amp;um=1&amp;ie=UTF-8&amp;sa=X&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ_AUoAnoECAEQBA" data-hveid="CAEQBA"><span class="bmaJhd iJddsb" style="height:16px;width:16px"><svg focusable="false" viewbox="0 0 16 16"><path d="M7.503 0c3.09 0 5.502 2.487 5.502 5.427 0 2.337-1.13 3.694-2.26 5.05-.454.528-.906 1.13-1.358 1.734-.452.603-.754 1.508-.98 1.96-.226.452-.377.829-.904.829-.528 0-.678-.377-.905-.83-.226-.451-.527-1.356-.98-1.959-.452-.603-.904-1.206-1.356-1.734C3.132 9.121 2 7.764 2 5.427 2 2.487 4.412 0 7.503 0zm0 1.364c-2.283 0-4.14 1.822-4.14 4.063 0 1.843.86 2.873 1.946 4.177.468.547.942 1.178 1.4 1.79.34.452.596.99.794 1.444.198-.455.453-.992.793-1.445.459-.61.931-1.242 1.413-1.803 1.074-1.29 1.933-2.32 1.933-4.163 0-2.24-1.858-4.063-4.139-4.063zm0 2.734a1.33 1.33 0 11-.001 2.658 1.33 1.33 0 010-2.658"></path></svg></span>地圖</a></div><div class="hdtb-mitem"><a href="/search?q=google+%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;source=lnms&amp;tbm=nws&amp;sa=X&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ_AUoA3oECAEQBQ" data-hveid="CAEQBQ"><span class="bmaJhd iJddsb" style="height:16px;width:16px"><svg focusable="false" viewbox="0 0 24 24"><path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"></path></svg></span>新聞</a></div><div class="hdtb-mitem"><a href="/search?q=google+%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;source=lnms&amp;tbm=vid&amp;sa=X&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ_AUoBHoECAEQBg" data-hveid="CAEQBg"><span class="bmaJhd iJddsb" style="height:16px;width:16px"><svg focusable="false" viewbox="0 0 24 24"><path d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5"></path></svg></span>影片</a></div></div><span class="hdtb-mitem" jscontroller="nabPbb" jsaction="KyPa0e:Y0y4c;BVfjhf:VFzweb"><g-popup jsname="V68bde" jscontroller="DPreE" jsaction="A05xBd:IYtByb;EOZ57e:WFrRFb;" jsdata="mVjAjf;_;BOc63s"><div jsname="oYxtQd" class="rIbAWc" aria-expanded="false" aria-haspopup="true" role="button" tabindex="0" jsaction="WFrRFb;keydown:uYT2Vb"><div jsname="LgbsSe" class="GOE98c"><span class="MbEPDb z1asCe SaPW2b" style="height:16px;line-height:16px;width:16px"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></span>更多</div></div><div jsname="V68bde" class="EwsJzb sAKBe B8Kd8d" style="display:none;z-index:200" id="_HYOtYeGkDZTt0ATr2qGoDw9"></div></g-popup></span></div><div><div class="kPNez" style="display:none" id="kPNez"><span jsshadow="" jscontroller="nabPbb" jsaction="KyPa0e:Y0y4c;BVfjhf:VFzweb"><g-popup jsname="V68bde" jscontroller="DPreE" jsaction="A05xBd:IYtByb;EOZ57e:WFrRFb;" jsdata="mVjAjf;_;BOc630"><div jsname="oYxtQd"><a jsname="LgbsSe" aria-haspopup="true" role="button" jsaction="WFrRFb;keydown:uYT2Vb" class="GOE98c CaY96" href="/preferences" id="abar_button_opt" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ6psIegQIARAP"><span class="z1asCe E9hVAb"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path><circle cx="12" cy="12" r="3.5"></circle></svg></span></a></div><div jsname="V68bde" class="EwsJzb sAKBe B8Kd8d" style="display:none;z-index:200" id="_HYOtYeGkDZTt0ATr2qGoDw11"></div></g-popup></span></div><div class="t2vtad" id="hdtb-tls" aria-controls="hdtbMenus" aria-expanded="false" role="button" tabindex="0" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ2x96BAgBEBo">工具</div></div></div><ol class="pdswFd" role="none"></ol></div><div class="Lj8KXd p4DDCd" id="hdtbMenus" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ3B96BAgBEBs"></div></div></div><div id="before-appbar"><div jscontroller="KSk4yc" data-dl="0" data-mcl="1250" data-mwl="-1" jsaction="PQkOHc:dK6tkc;fFzSRc:v9xSwd;rcuQ6b:npT2md"><div jsname="suEOdc" class="t4wgMc" style="display:none;opacity:0;transform:scale(0.1)" aria-hidden="true" data-hveid="CAEQMw" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQrOkHegQIARAz"><div jsname="V4zgDf" data-jiis="up" data-async-type="ctxm" id="nFiyle" class="yp" data-hveid="CAEQNA" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQqukHegQIARA0"></div><div jsname="Uo0pef" class="p2Tgt" style="display:none">按下 Shift + S 鍵即可選取</div></div><g-snackbar jsname="m3HYFd" jscontroller="OZLguc" style="display:none" jsshadow="" jsaction="rcuQ6b:npT2md"><div jsname="sM5MNb" aria-live="polite" class="tYAdEe"><div jsname="Ng57nc" class="FEXCIb" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ4G96BAgBEDU"><div class="EA3l1b"><div class="Xb004" jsslot=""><span class="awHmMb wHYlTd yUTMj">已複製到剪貼簿</span></div></div></div></div></g-snackbar></div></div><div class="gTMtLb fp-nh" id="lb"></div><div class="appbar" id="appbar"><div id="extabar"><div style="position:relative"><div class="WE0UJf" id="slim_appbar"><div class="LHJvCe"><div id="result-stats">約有 172,000 項結果<nobr> (搜尋時間：0.44 秒)&nbsp;</nobr></div></div></div></div></div></div><div data-spl="/setprefs?hl=zh-TW&amp;prev=https://www.google.com/search?q%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26oq%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26aqs%3Dchrome..69i57j0i5i30j69i64l2.4723j0j7%26sourceid%3Dchrome%26ie%3DUTF-8%26pccc%3D1&amp;sig=0_x24D4O30rMz2AZHll0uTLBsqMp8%3D&amp;cs=2" id="YUIDDb" style="display:none"></div><div data-iatvcap="1" id="atvcap"></div><div class="GyAeWb" id="rcnt"><div class="D6j0vc"><div class="gXmnc s6JM6d" id="center_col"><style>.ULSxyf{margin-bottom:44px}.g-blk{position:relative}.kp-blk a{text-decoration:none}.kp-blk .wDYxhc:first-child{padding-top:16px;border-radius:8px}.kp-blk .match-mod-horizontal-padding,.kp-blk .wDYxhc:not(.NFQFxe){padding-left:16px;padding-right:16px;}.kp-blk.c2xzTb .match-mod-horizontal-padding,.kp-blk.c2xzTb .wDYxhc:not(.NFQFxe){padding-left:0;padding-right:0}.kp-blk{box-shadow:none;background:#fff;border:1px solid #dfe1e5;border-radius:8px;}.kno-kp.mnr-c.g,.g-blk.g,.KIy09e{width:652px}.s6JM6d .kp-blk{position:relative}.kp-blk .g:not(.g-blk){margin:0}.kp-blk>.vk_arc,.kp-blk>div>.vk_arc{margin:0}.kp-blk .g{margin-bottom:0}.knowledge-panel.kp-blk .wDYxhc,.c14z5c .wDYxhc{line-height:1.58}.c2xzTb .g,.cUnQKe .g,.c2xzTb .tF2Cxc,.ruTcId .tF2Cxc{clear:both;padding-bottom:0}.c2xzTb .wDYxhc,.ruTcId .wDYxhc{clear:none}.kp-blk.c2xzTb,.kp-blk.ruTcId,.kp-blk.HanQmf{border:none}.kp-blk.c2xzTb .g,.kp-blk.ruTcId .g,.kp-blk.HanQmf .g,.kp-blk.c2xzTb+.kno-ftr{padding-left:0;padding-right:0}.wDYxhc{clear:both}.cUnQKe .wDYxhc,.related-question-pair .wDYxhc,.c3mZkd .fm06If .wDYxhc{clear:none}html .kp-blk .xpdclose .LKPcQc,html .kp-blk .xpdopen .viOShc{padding-top:0}.xpdclose .a84NUc:not(:empty),.xpdopen .CQKTwc:not(:empty){border-top:solid 1px #ebebeb;border-radius:0}.xpdclose .pmYXee .a84NUc:not(:empty),.xpdopen .pmYXee .CQKTwc:not(:empty){border-top:none}.xpdclose .TOfaBb.SHa8ve,.xpdopen .LL5J7d.SHa8ve{display:block}.xpdclose .oHglmf,.xpdopen .xzPb7d{padding-bottom:16px}.xpdclose .kp-header .oHglmf,.xpdopen .kp-header .xzPb7d{padding-bottom:0}.c2xzTb .xpdclose .oHglmf,.c2xzTb .xpdopen .xzPb7d{padding-bottom:0}.HSryR .xpdclose .oHglmf,.HSryR .xpdopen .xzPb7d{padding-bottom:0}.Wnoohf .xpdopen .yp1CPe,.OJXvsb .xpdclose .siXlze{padding-bottom:16px}.Wnoohf .xpdclose .wDYxhc.xsZWvb,.Wnoohf .xpdopen .wDYxhc.EfDVh{padding-bottom:0}#rhs .kp-blk .xpdclose .LKPcQc,#rhs .kp-blk .xpdopen .viOShc{padding-top:0}#rhs .Wnoohf .xpdopen .yp1CPe,#rhs .OJXvsb .xpdclose .siXlze{padding-bottom:15px}#rhs .Wnoohf .xpdclose .wDYxhc.xsZWvb,#rhs .Wnoohf .xpdopen .wDYxhc.EfDVh{padding-bottom:0}#rhs .Wnoohf .xpdclose .wDYxhc.xsZWvb.ecRggb,#rhs .Wnoohf .xpdopen .wDYxhc.EfDVh.ecRggb,#rhs .kp-blk .ecRggb{padding-bottom:15px}.FLQ7Kc{position:relative;height:136px;margin-top:16px}.LUnGP{color:#202124;display:inline-block;font-size:48px;font-weight:300;line-height:48px;padding-top:10px}.rzb2cc{color:#70757a;display:inline-block;font-size:14px;margin-left:2px;text-transform:uppercase}.N807l{height:48px;width:48px}.jFdQQd{border-radius:50%;height:68px;position:absolute;top:0;width:68px;right:0}.L9q2Kd{border-radius:50%;height:58px;margin:auto;position:absolute;top:5px;width:58px;right:5px}.Jhptsc{border-radius:50%;cursor:pointer;height:48px;margin:auto;position:absolute;top:10px;width:48px;background-color:#0899c5;right:10px}.pk9xnc{cursor:pointer;display:inline-block;font-size:22px;font-weight:700;text-align:center;height:24px;width:24px}.GoINZd{margin:25px 0 0 10px;width:calc(100% - 20px)}input[type=range]{-webkit-appearance:none;display:inline-block;height:48px;margin:0 12px;width:calc(100% - 76px);background:transparent}input[type=range]:focus{outline:none}input[type=range]::-webkit-slider-runnable-track{background:#ddd;cursor:pointer;height:2px;width:100%}input[type=range]::-moz-range-track{background:#ddd;cursor:pointer;height:2px;width:100%}input[type=range]::-moz-range-thumb{background-color:#0899c5;border:none;border-radius:100%;height:21px;width:21px}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;background-color:#0899c5;border:none;border-radius:50%;box-shadow:0 1px 2px 0 rgba(0,0,0,0.2);cursor:pointer;height:21px;margin-top:-9px;width:21px}input[type=range]::-ms-track{background:transparent;border-color:transparent;border-width:3px 0;color:transparent;cursor:pointer;height:2px;width:100%}input[type=range]::-ms-fill-lower{background:#ddd}input[type=range]::-ms-fill-upper{background:#ddd}input[type=range]:focus::-ms-thumb{border:none}input[type=range]::-ms-thumb{background-color:#0899c5;border:none;border-radius:50%;box-shadow:0 1px 2px 0 rgba(0,0,0,0.2);cursor:pointer;height:21px;margin-top:-3px;width:21px}input[type=range]::-ms-tooltip{display:none}.Jhptsc,.pk9xnc{outline:none}.W8OWif{margin:0 -16px -16px -16px}.yQOdGb{border-radius:0 0 8px 8px}.LXjnqc{display:flex}.pqHExb{flex-grow:1;border-radius:8px;box-shadow:0 0 0 1px  #dadce0;display:inline-block;margin:16px 8px;padding-bottom:6px;width:112px}.Gldprb{font-size:0px}.TBC9ub{margin-left:0px;margin-right:0px}g-expandable-container{display:block}g-expandable-content{display:block}.rXtXab{overflow:hidden;-webkit-transition:max-height 0.3s;transition:max-height 0.3s}hr{border:0;border-bottom:1px solid #ebebeb;margin:0}g-tabbed-carousel{display:block}g-tabs{display:block;color:#fff;position:relative;z-index:0;}.H1HQf{font-family:arial,sans-serif-medium,sans-serif;font-size:14px;text-transform:uppercase;overflow:hidden;font-weight:400;}.H1HQf::-webkit-scrollbar{display:none}.crFiYc{white-space:nowrap;position:relative;z-index:1}.KYeOtb{box-sizing:border-box;cursor:pointer;display:inline-block;text-align:center;text-overflow:ellipsis;-webkit-tap-highlight-color:rgba(0,0,0,0)}.KYeOtb:active{background:rgba(0,0,0,0.1)}.P0eHqb{display:inline-block;vertical-align:middle}.SVWlSe{display:inline-block;vertical-align:middle}.jtEFhd .KYeOtb,.jtEFhd .KYeOtb:link,.jtEFhd .KYeOtb:visited{color:#202124}.M5I6Ce{background-color:white;bottom:0;position:absolute}.JiGF4b{display:inline-block;position:relative}.UAN5bf{background-color:white;bottom:0;left:0;position:absolute}.KYeOtb.M4n04{white-space:normal}.M4n04 .SVWlSe{display:-webkit-inline-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;line-height:16px;word-break:break-word}.m1W89e{display:block;position:relative}.os1un{width:100%}.Yw2n1{display:none;float:left;margin:0px;padding:0px;width:100%}.Yw2n1:focus{outline:none}.WUKF{width:100%;position:relative}.eKdRue .rVhgPd{display:inherit;position:absolute;transform:translate3d(-100%,0px,0px)}.WUKF.HBMEHd .Yw2n1,.Yw2n1.qDC8sf{display:inherit}.sDcZEe{overflow:hidden}.jELCVe{display:none}.AB4Wff{margin-left:16px}g-scrolling-carousel{display:block;position:relative;}.mR2gOd{display:block;overflow-x:auto;overflow-y:hidden;position:relative;white-space:nowrap;transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.mR2gOd::-webkit-scrollbar{display:none}.DAVP1{display:inline-block}.JscqU{width:112px;height:112px;border-radius:8px 8px 0 0}.YeQIlb{height:112px}.WtIZZb{cursor:pointer}.WtIZZb .iI8PYc{float:left;font:14px arial,sans-serif-light,sans-serif;line-height:16px;padding-left:8px;margin-top:8px;overflow:hidden;text-overflow:ellipsis;width:85%}.FiHGpc{border-top:1px solid #e5e5e5;color:#202124;height:24px}.OZ5bRd{margin-bottom:auto;margin-top:auto}.Lu0opc{cursor:pointer;height:72px;position:absolute;display:block;visibility:inherit;width:36px;bottom:0;outline:none;opacity:0.8;top:0;z-index:101}.Lu0opc.tHT0l{-webkit-transition:opacity 0.5s,visibility 0.5s;transition:opacity 0.5s,visibility 0.5s}.Lu0opc:hover{opacity:0.9}.Lu0opc:focus{outline:none}.Lu0opc.pQXcHc,.Lu0opc.pQXcHc:hover{cursor:default;opacity:0;visibility:hidden}.p2WJce{bottom:0;display:block;position:absolute !important;top:0}.BlOseb.SkGIjd .KkkQv,.k2Oeod.SkGIjd .S2C1T{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAuCAYAAAAcEfjaAAABV0lEQVRIx+2VsW7CQBBEDwTpIkXICMuyJdtfQsGXQUVFlSpVmjTESOn4BAoXLigsueAvaM2MBAht7g6v06ZYwNK8893ezGLatjV5ni9QO2PMC599ZdI0nWdZdgbQ4vsH0NgLQLSn+FZ4/gY0cgJBELxCdHiEUF+AhlaAH9jWG0SleNOnDbr/iON4AlEloA9AAyvAiqIogPAooHcnwIJghqrFmTZOgJUkSQRRI6C1E7huL8GbTmJ7Ky2w/PuWVIcOw3Daua2qi1NZQ20+i723XnurA/QQ0aJTRJ8J/oEuAFvNqcjWPwV4ibzM66Weeck+8YhTUNhm7xIPaUAhPtCoVjGtLdxbMgK/zsCwMDRi5YrhsnaJcRQrHzkNrW1l0MXKNQeCy95rsXLDUeNK3EqsfOIQ8/0DLVWAeku9Du1rK6ehE1BfnNoavcwn7L3tZO9eARIRLW4RvQA0+6DNwTHW6QAAAABJRU5ErkJggg==);background-repeat:no-repeat;height:20px;width:12px}.BlOseb.SkGIjd .KkkQv{background-position:0 -26px;left:8px}.k2Oeod.SkGIjd .S2C1T{background-position:0 0;right:8px}.BlOseb.SkGIjd{left:0}.k2Oeod.SkGIjd{right:0}.BlOseb.SkGIjd{border-bottom-right-radius:36px;border-top-right-radius:36px;box-shadow:1px 0 2px rgba(0, 0, 0, 0.5);box-shadow:1px 0 2px rgba(0, 0, 0, 0.5)}.k2Oeod.SkGIjd{border-bottom-left-radius:36px;border-top-left-radius:36px;box-shadow:-1px 0 2px rgba(0, 0, 0, 0.5);box-shadow:-1px 0 2px rgba(0, 0, 0, 0.5)}g-inline-expansion-bar{cursor:pointer;display:block;overflow:hidden;position:relative;}html:not(.zAoYTe) g-inline-expansion-bar:focus{outline:none}.TJMQHf{opacity:0;visibility:hidden}.lA0GG{position:absolute;white-space:nowrap}.xTWltf{margin-right:24px}.u2sJ0e{border-top:1px solid rgba(0,0,0,.12)}.z0RPff{height:48px;line-height:48px}.xrIqbe{color:#70757a;top:50%;margin-top:-12px;left:0}.Z2Akxc .xrIqbe{left:50%;margin-left:-12px}.u2sJ0e .xrIqbe{position:absolute}.u2sJ0e .lA0GG{color:#202124;font-size:14px;left:64px;}.kno-ftr{clear:both;color:#70757a;font-size:12px;line-height:1.34;overflow:hidden}.kno-ftr a{color:#70757a;text-decoration:none}.OwRFvb{float:right;margin-left:2em}.kno-ftr a:hover{text-decoration:underline}.kno-ftr{margin-left:0px;padding:4px 16px 0}</style><div id="taw"><div></div><div></div><div id="tvcap"></div></div><div class="eqAnXb" id="res" role="main"><div id="topstuff"></div><div id="search"><div data-hveid="CAEQOg" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQGnoECAEQOg"><h1 class="Uo8X3b OhScic zsYMMe">搜尋結果</h1><div class="v7W49e" eid="HYOtYeGkDZTt0ATr2qGoDw" data-async-context="query:google%20%E7%AF%80%E6%8B%8D%E5%99%A8" id="rso"><div class="ULSxyf"><div class="g mnr-c g-blk" data-hveid="CAoQAA" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQijYoAHoECAoQAA"><div class="kp-blk Wnoohf OJXvsb"><div class="xpdopen rYczAc"><div class="ifM9O"><div><div class="yp1CPe wDYxhc" data-md="137" data-hveid="CAIQAA" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ2XJ6BAgCEAA"><div jscontroller="RyA8be" jsaction="rcuQ6b:npT2md"><div jsname="haAclf" class="FLQ7Kc"><div class="Toe1ae"><div jsname="FFrFZ" class="LUnGP">100</div><div class="rzb2cc">每分鐘心跳數 (BPM)</div></div><div class="CkvRwe"><div jsname="lX8Wac" class="jFdQQd" style="display:none"></div><div jsname="wjCpqd" class="L9q2Kd" style="display:none"></div><div jsname="ZC7Tjb" class="Jhptsc" role="button" tabindex="0" jsaction="yowpu" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ-Z8BegQIAhAC"><svg jsname="qsXVXc" height="48px" version="1.1" viewbox="0 0 48 48" width="48px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g><rect height="48" width="48" x="0" y="0"></rect><path jsname="rPnjx" d="M24,0 C10.74,0 0,10.74 0,24 C0,37.26 10.74,48 24,48 C37.26,48 48,37.26 48,24 C48,10.74 37.26,0 24,0 L24,0 Z" fill="#0899c5"></path><path d="M19.2,34.8 L19.2,13.2 L33.6,24 L19.2,34.8 L19.2,34.8 Z" fill="#fff"></path></g></g></svg><svg jsname="k4AsOd" height="48px" version="1.1" viewbox="0 0 48 48" width="48px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none"><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g><rect height="48" width="48" x="0" y="0"></rect><path jsname="cT1zic" d="M24,0 C10.752,0 0,10.752 0,24 C0,37.248 10.752,48 24,48 C37.248,48 48,37.248 48,24 C48,10.752 37.248,0 24,0 L24,0 Z" fill="#ff9800"></path><path d="M21.6,33.6 L16.8,33.6 L16.8,14.4 L21.6,14.4 L21.6,33.6 L21.6,33.6 Z" fill="#fff"></path><path d="M31.2,33.6 L26.4,33.6 L26.4,14.4 L31.2,14.4 L31.2,33.6 L31.2,33.6 Z" fill="#fff"></path></g></g></svg></div></div><div class="GoINZd"><div jsname="pPHzQc" class="pk9xnc QaSRqf" role="button" tabindex="0" jsaction="icgh8d"><svg class="N807l" version="1.1" viewbox="0 -10 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g transform="translate(-11.000000, -15.000000)"><g jsname="WdBRY"><rect height="32" width="32" x="0" y="0"></rect><path d="M22,15 L22,18 L11,18 L11,15 L22,15 L22,15 L22,15 Z" fill="#0899c5"></path></g></g></g></svg></div><input jsname="SxecR" class="gws-csf-metronome__mtn-bar" max="178" min="0" type="range" value="60" jsaction="input:WFPc0;change:RS0h5d"><div jsname="XSr6wc" class="pk9xnc favIF" role="button" tabindex="0" jsaction="xQPftf"><svg class="N807l" version="1.1" viewbox="0 -6 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g transform="translate(-11.000000, -11.000000)"><g jsname="FKkEEf"><rect height="32" width="32" x="0" y="0"></rect><path d="M18,22 L15,22 L15,11 L18,11 L18,22 L18,22 L18,22 Z" fill="#0899c5"></path><path d="M22,15 L22,18 L11,18 L11,15 L22,15 L22,15 L22,15 Z" fill="#0899c5"></path></g></g></g></svg></div></div><audio jsname="kODWGd" loop="" jsaction="PXEikf:Yzrhte;Nd0FU:Le30Ae;a8roX:Le30Ae"></audio></div><div class="W8OWif yQOdGb" jscontroller="MC0Gmc" data-parent-funbox="Metronome" role="menu" jsaction="rcuQ6b:npT2md;nnMuPb:JhW48;iJE3Ge:tQwMlb;DmzWq:QqKrT"><g-expandable-container jsname="JTivif" data-nlvc="1" jscontroller="QE1bwd" data-anim="" data-fcss="" data-npd="1" data-slct="mnr-c" jsshadow="" jsaction="C7xow:Z6bwpe;xNpQtd:Nh5q2c;U6VCqe:GsRPff;Ep2Mgc:AgioGc;BDs6B:fW2qAb;ep03Ne:AvkpRc;gvA4Rc:yELBLe" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQoLIEegQIAhAD"><div jsname="gI9xcc" jsslot="1"><g-expandable-content jsname="jrbfOd" jscontroller="Ah7cLd" jsaction=";rcuQ6b:npT2md" jsshadow="" aria-hidden="true" class="rXtXab" data-ead="1" data-eb="0" data-mt="4" data-npd="1" style="max-height:0" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQmu8CegQIAhAF"><span jsname="zXitYb" jsslot=""><hr><g-tabbed-carousel jsname="hyR3tb" jscontroller="wjrpBd" jsshadow="" jsaction="D2wIvb:f20zue;EKXOFe:OZ0lMc;aNWwib:FKzK7;EEZOrb:mLt3mc;rcuQ6b:npT2md"><span><span><g-tabs jsname="uxAMZ" style="border-bottom:1px solid #e5e5e5" jscontroller="GIYigf" class="jtEFhd" data-adapt-width-with-js="false" data-unselected-text-color="#70757a" id="_HYOtYeGkDZTt0ATr2qGoDw15" jsdata="oL2lDd;_;BOc638" jsshadow="" role="tablist" jsaction="EormBc:HFYvKc;gEKQDb:yUtVib;OW9R3e:mhSdVe;keydown:uYT2Vb;focus:h06R8;blur:zjh6rb;rcuQ6b:npT2md"><div jsname="jtW7Nb" class="H1HQf zbA8Me"><div jsname="xNyui" class="crFiYc m6Mfvb" style="color:#202124"><div jsname="H8bAhd" class="UAN5bf" style="display:none;background-color:#202124;height:4px;width:8px;border-radius:4px 4px 0 0"></div><div jsname="wwzVaf" class="UAN5bf" style="display:none;background-color:#202124;width:32px;height:4px"></div><div jsname="r8toic" class="UAN5bf" style="display:none;background-color:#202124;height:4px;width:8px;border-radius:4px 4px 0 0"></div><a jsname="AznF2e" class="KYeOtb rWAMad M4n04" aria-selected="false" data-index="0" style="min-height:48px;color:#70757a;width:50%;border-color:#202124;padding:0 16px" tabindex="-1" jsaction="h5M12e" role="tab"><div class="SVWlSe t35a5d" jsslot=""><span jsslot=""><div aria-controls="_HYOtYeGkDZTt0ATr2qGoDw14_0" id="_HYOtYeGkDZTt0ATr2qGoDw13_0">遊戲與玩具</div></span></div><div class="P0eHqb" style="min-height:48px"></div></a><a jsname="AznF2e" class="KYeOtb M4n04" aria-selected="true" data-index="1" data-uiis="1" style="min-height:48px;color:#202124;width:50%;border-color:#202124;padding:0 16px" tabindex="0" jsaction="h5M12e" role="tab"><div class="JiGF4b" style="min-height:48px"><div class="SVWlSe t35a5d" jsslot=""><span jsslot=""><div aria-controls="_HYOtYeGkDZTt0ATr2qGoDw14_1" id="_HYOtYeGkDZTt0ATr2qGoDw13_1">工具</div></span></div><div class="M5I6Ce" style="background-color:#202124;left:-4px;right:-4px;height:4px;border-radius:4px 4px 0 0"></div><div class="P0eHqb" style="min-height:48px"></div></div></a></div></div><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){
    google.tabs = google.tabs || {};
google.tabs.init = function(a, c, b, h, k) {
if (a = document.getElementById(a)) {
    a = a.querySelector("div");
    var d = a.firstElementChild.querySelectorAll("[role=tab]");
    if (0 < c) {
        var e = a.scrollWidth - a.offsetWidth,
            f = d[c];
        if (b) {
            for (var g = b = 0; g < c; ++g) b += d[g].offsetWidth;
            b -= (a.offsetWidth - f.offsetWidth) / 2;
            b = Math.max(Math.min(e, b), 0);
            c = h ? -b : k ? b : e - b
        } else c = f.offsetLeft - d[0].offsetLeft - (a.offsetWidth - f.offsetWidth) / 2, c = Math.max(Math.min(e, c), 0);
        a.scrollLeft = c
    }
}
};
}).call(this); < /script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var id='_HYOtYeGkDZTt0ATr2qGoDw15';var index=1;var is_rtl=false;var is_gecko=false;var is_ie=false;google.tabs.init(id,index,is_rtl,is_gecko,is_ie);})();</script > < /g-tabs><g-flippy-carousel jsname="GiFVrf" jscontroller="dpLmq" class="m1W89e" jsdata="siX0qc;_;BOc64A" jsshadow="" jsaction="EormBc:HFYvKc;gEKQDb:yUtVib;GZOiOb:p8Bpjd;qJ508e:cwljjf;rcuQ6b:npT2md"><div jsname="kTbXfc" class="sDcZEe"><div jsname="fMohEc" class="WUKF"><ol jsname="vfHRxf" class="os1un OhScic zsYMMe"><li jsname="sRYx7b" class="Yw2n1 rVhgPd" role="group" tabindex="-1" jsaction="focus:AZTNzb"><label class="jELCVe" id="_HYOtYeGkDZTt0ATr2qGoDw16">第 1 項，共 2 項</label > < span jsslot = "" > < div aria - labelledby = "_HYOtYeGkDZTt0ATr2qGoDw16" > < span jsslot = "" > < div aria - labelledby = "_HYOtYeGkDZTt0ATr2qGoDw13_0"
id = "_HYOtYeGkDZTt0ATr2qGoDw14_0"
role = "tabpanel" > < g - scrolling - carousel jscontroller = "pgCXqb"
id = "_HYOtYeGkDZTt0ATr2qGoDw17"
jsdata = "JcTXNb;_;BOc64I"
jsshadow = ""
jsaction = "OaAmdd:EDKYjb;JnGzAc:aJ8u7;qVN0Rc:nnsrCf;EormBc:HFYvKc;gEKQDb:yUtVib;keydown:uYT2Vb;rcuQ6b:npT2md;lnkFzb:jCOVSe" > < div jsname = "haAclf"
class = "mR2gOd"
jsaction = "t3L5Dd:OR1BUb" > < div jsname = "s2gQvd"
class = "EDblX DAVP1"
style = "padding-right:8px;padding-left:8px"
jsslot = "" > < div jsname = "xl0Jqb"
class = "LXjnqc" > < a class = "pqHExb WtIZZb"
jscontroller = "olaAKd"
jsname = "aYISIf"
href = "#"
data - name = "Animal sounds"
data - query = "動物叫聲"
data - sticky = "H4sIAAAAAAAAAOOwfcQoyy3w8sc9YSmRSWtOXmPk4-JxzMvMTcwJzi_NSynmAQCj7s28IgAAAA"
role = "button"
tabindex = "0"
jsaction = "rcuQ6b:npT2md;xuRi8d"
data - ved = "2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAB6BAgCEAo" > < div class = "YeQIlb" > < img class = "JscqU"
id = "fbximg_18"
src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
alt = ""
data - deferred = "1" > < /div><div class="FiHGpc"><div class="iI8PYc">動物叫聲</div > < /div></a > < a class = "pqHExb WtIZZb"
jscontroller = "olaAKd"
jsname = "aYISIf"
href = "#"
data - name = "Snake"
data - query = "玩貪食蛇"
data - sticky = "H4sIAAAAAAAAAOOwfcQowy3w8sc9YSnhSWtOXmPk5eIOzkvMTnUsSk5MSeUBAB3FamohAAAA"
role = "button"
tabindex = "0"
jsaction = "rcuQ6b:npT2md;xuRi8d"
data - ved = "2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAF6BAgCEAs" > < div class = "YeQIlb" > < img class = "JscqU"
id = "fbximg_20"
src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
alt = ""
data - deferred = "1" > < /div><div class="FiHGpc"><div class="iI8PYc">貪食蛇</div > < /div></a > < a class = "pqHExb WtIZZb"
jscontroller = "olaAKd"
jsname = "aYISIf"
href = "#"
data - name = "PAC-MAN"
data - query = "玩小精靈遊戲"
data - sticky = "H4sIAAAAAAAAAOOwfcQozi3w8sc9YSm-SWtOXmPk4GILSEzOTczjAQBYtGz7HAAAAA"
role = "button"
tabindex = "0"
jsaction = "rcuQ6b:npT2md;xuRi8d"
data - ved = "2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAJ6BAgCEAw" > < div class = "YeQIlb" > < img class = "JscqU"
id = "fbximg_22"
src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
alt = ""
data - deferred = "1" > < /div><div class="FiHGpc"><div class="iI8PYc">小精靈遊戲</div > < /div></a > < a class = "pqHExb WtIZZb"
jscontroller = "olaAKd"
jsname = "aYISIf"
href = "#"
data - name = "Spin a dreidel"
data - query = "轉動光明節陀螺"
data - sticky = "H4sIAAAAAAAAAOOwfcQozy3w8sc9YSmxSWtOXmMU4OJzKUrNTEnNCS7IzMtLLeIBAHRUAm4kAAAA"
role = "button"
tabindex = "0"
jsaction = "rcuQ6b:npT2md;xuRi8d"
data - ved = "2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAN6BAgCEA0" > < div class = "YeQIlb" > < img class = "JscqU"
id = "fbximg_24"
src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
alt = ""
data - deferred = "1" > < /div><div class="FiHGpc"><div class="iI8PYc">轉動光明節陀螺</div > < /div></a > < a class = "pqHExb WtIZZb"
jscontroller = "olaAKd"
jsname = "aYISIf"
href = "#"
data - name = "Solitaire"
data - query = "玩接龍"
data - sticky = "H4sIAAAAAAAAAOOwfcQoxS3w8sc9YSnBSWtOXmPk5uIMzs_JLEnMLErlAQB9SYN_HwAAAA"
role = "button"
tabindex = "0"
jsaction = "rcuQ6b:npT2md;xuRi8d"
data - ved = "2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAR6BAgCEA4" > < div class = "YeQIlb" > < img class = "JscqU"
id = "fbximg_26"
src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
alt = ""
data - deferred = "1" > < /div><div class="FiHGpc"><div class="iI8PYc">接龍</div > < /div></a > < a class = "pqHExb WtIZZb"
jscontroller = "olaAKd"
jsname = "aYISIf"
href = "#"
data - name = "Tic tac toe"
data - query = "玩井字遊戲"
data - sticky = "H4sIAAAAAAAAAOOwfcQoxS3w8sc9YSnBSWtOXmPk5uIMyUwOSUwOyU_lAQCnLbXBHwAAAA"
role = "button"
tabindex = "0"
jsaction = "rcuQ6b:npT2md;xuRi8d"
data - ved = "2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAV6BAgCEA8" > < div class = "YeQIlb" > < img class = "JscqU"
id = "fbximg_28"
src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
alt = ""
data - deferred = "1" > < /div><div class="FiHGpc"><div class="iI8PYc">井字遊戲</div > < /div></a > < a class = "pqHExb WtIZZb"
jscontroller = "olaAKd"
jsname = "aYISIf"
href = "#"
data - name = "Earth Day quiz"
data - query = "地球日測驗"
data - sticky = "H4sIAAAAAAAAAOOwfcRozC3w8sc9YSmtSWtOXmNU4VJKzslMzSuJL85MSY1PK81Lyq-wskpNLCrJiE9JrIwvLM2s4gEAhcK_ezgAAAA"
role = "button"
tabindex = "0"
jsaction = "rcuQ6b:npT2md;xuRi8d"
data - ved = "2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAZ6BAgCEBA" > < div class = "YeQIlb" > < img class = "JscqU"
id = "fbximg_30"
src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
alt = ""
data - deferred = "1" > < /div><div class="FiHGpc"><div class="iI8PYc">地球日測驗</div > < /div></a > < a class = "pqHExb WtIZZb"
jscontroller = "olaAKd"
jsname = "aYISIf"
href = "#"
data - name = "Fun facts"
data - query = "趣聞新知"
data - sticky = "H4sIAAAAAAAAAOOwfcSoyC3w8sc9YSmJSWtOXmMU4hLwzHVLTc3JzEt3Li3KzC8t5gEAgKsJXiYAAAA"
role = "button"
tabindex = "0"
jsaction = "rcuQ6b:npT2md;xuRi8d"
data - ved = "2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAd6BAgCEBE" > < div class = "YeQIlb" > < img class = "JscqU"
id = "fbximg_32"
src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
alt = ""
data - deferred = "1" > < /div><div class="FiHGpc"><div class="iI8PYc">趣聞新知</div > < /div></a > < a class = "pqHExb WtIZZb"
jscontroller = "olaAKd"
jsname = "aYISIf"
href = "#"
data - name = "Minesweeper"
data - query = "玩踩地雷"
data - sticky = "H4sIAAAAAAAAAOOwfcQowy3w8sc9YSnhSWtOXmPk5eL2zcxLLS5PTS1ILeIBAH_foZMhAAAA"
role = "button"
tabindex = "0"
jsaction = "rcuQ6b:npT2md;xuRi8d"
data - ved = "2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAh6BAgCEBI" > < div class = "YeQIlb" > < img class = "JscqU"
id = "fbximg_34"
src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
alt = ""
data - deferred = "1" > < /div><div class="FiHGpc"><div class="iI8PYc">踩地雷</div > < /div></a > < /div></div > < /div><div jsname="Y5ANHe"><g-left-button jsname="sIJmDf" class="pQXcHc Lu0opc BlOseb tHT0l OZ5bRd SkGIjd" style="top:0px;background-color:rgba(229, 229, 229, .8)" aria-hidden="true" jsaction="PfjCMb" aria-label="上一頁" role="button"><div class="p2WJce KkkQv OZ5bRd TBC9ub"></div > < /g-left-button></div > < div jsname = "AK6yne" > < g - right - button jsname = "IHFM4"
style = "top:0px;background-color:rgba(229, 229, 229, .8)"
aria - hidden = "true"
jsaction = "sYPGdb"
class = "Lu0opc k2Oeod tHT0l OZ5bRd SkGIjd"
aria - label = "下一頁"
role = "button" > < div class = "p2WJce S2C1T OZ5bRd TBC9ub" > < /div></g - right - button > < /div><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){
    (this || self).cVrhhd = function(b, e, q, a, h, k, r) {
        if ((b = document.getElementById(b)) && (0 !== b.offsetWidth || 0 !== b.offsetHeight)) {
            var l = b.querySelector("div"),
                m = l.querySelector("div"),
                c = 0,
                g = l.scrollWidth - l.offsetWidth;
            if (0 < e) {
                var n = m.children;
                c = n[e].offsetLeft - n[0].offsetLeft;
                if (a) {
                    for (var p = c = 0; p < e; ++p) c += n[p].offsetWidth;
                    c = Math.min(g, c)
                }
            }
            c += q;
            e = Math.min(a ? g - c : c, g);
            l.scrollLeft = a && (h || r) ? c : a && k ? -c : e;
            var d = b.getElementsByTagName("g-left-button")[0],
                f = b.getElementsByTagName("g-right-button")[0];
            d && f && (h = RegExp("\\btHT0l\\b"), k = RegExp("\\bpQXcHc\\b"), d.className = d.className.replace(h, ""), f.className = f.className.replace(h, ""), d.className = 0 === e ? "pQXcHc " + d.className : d.className.replace(k, ""), f.className = e === g ? "pQXcHc " + f.className : f.className.replace(k, ""), 0 <= d.className.indexOf("SL0Gp") && 0 === e && e === g && (m.style.paddingLeft = "0px", m.style.paddingRight = "0px", d.style.display = "none", f.style.display = "none", b.style.paddingLeft = a ? "0px" : "48px", b.style.paddingRight = a ? "48px" : "0px", b.style.textAlign = a ? "left" : "right", (a = document.getElementById("fade_forward")) &&
                (a.style.display = "none"), (a = document.getElementById("fade_reverse")) && (a.style.display = "none")), setTimeout(function() {
                d.className += " tHT0l";
                f.className += " tHT0l"
            }, 50))
        }
    };
}).call(this);
(function() {
    var id = '_HYOtYeGkDZTt0ATr2qGoDw17';
    var index = 0;
    var offset = 0;
    var is_rtl = false;
    var is_ie = false;
    var is_gecko = false;
    var is_edge = false;
    var init = 'cVrhhd';
    window[init](id, index, offset, is_rtl, is_ie, is_gecko, is_edge);
})(); < /script></g - scrolling - carousel > < /div></span > < /div></span > < /li><li jsname="sRYx7b" class="Yw2n1 qDC8sf" role="group" tabindex="-1" jsaction="focus:AZTNzb"><label class="jELCVe" id="_HYOtYeGkDZTt0ATr2qGoDw38">第 2 項，共 2 項</label > < span jsslot = "" > < div aria - labelledby = "_HYOtYeGkDZTt0ATr2qGoDw38" > < span jsslot = "" > < div aria - labelledby = "_HYOtYeGkDZTt0ATr2qGoDw13_1"
id = "_HYOtYeGkDZTt0ATr2qGoDw14_1"
role = "tabpanel" > < g - scrolling - carousel jscontroller = "pgCXqb"
id = "_HYOtYeGkDZTt0ATr2qGoDw39"
jsdata = "JcTXNb;_;BOc64I"
jsshadow = ""
jsaction = "OaAmdd:EDKYjb;JnGzAc:aJ8u7;qVN0Rc:nnsrCf;EormBc:HFYvKc;gEKQDb:yUtVib;keydown:uYT2Vb;rcuQ6b:npT2md;lnkFzb:jCOVSe" > < div jsname = "haAclf"
class = "mR2gOd"
jsaction = "t3L5Dd:OR1BUb" > < div jsname = "s2gQvd"
class = "EDblX DAVP1"
style = "padding-right:8px;padding-left:8px"
jsslot = "" > < div jsname = "xl0Jqb"
class = "LXjnqc" > < a class = "pqHExb WtIZZb"
jscontroller = "olaAKd"
jsname = "aYISIf"
href = "#"
data - name = "Tuner"
data - query = "google 調音器"
data - sticky = "H4sIAAAAAAAAAOOwfcQoxi3w8sc9YSneSWtOXmNk52INKc1LLeIBAEOjFuMbAAAA"
role = "button"
tabindex = "0"
jsaction = "rcuQ6b:npT2md;xuRi8d"
data - ved = "2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAB6BAgCEBQ" > < div class = "YeQIlb" > < img class = "JscqU"
id = "fbximg_40"
src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
alt = ""
data - deferred = "1" > < /div><div class="FiHGpc"><div class="iI8PYc">調音器</div > < /div></a > < a class = "pqHExb WtIZZb"
jscontroller = "olaAKd"
jsname = "aYISIf"
href = "#"
data - name = "Flip a coin"
data - query = "丟銅板"
data - sticky = "H4sIAAAAAAAAAOOwfcQoyS3w8sc9YSmBSWtOXmPk4uJwzs_Mc8vJLOABAAUfYkMeAAAA"
role = "button"
tabindex = "0"
jsaction = "rcuQ6b:npT2md;xuRi8d"
data - ved = "2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAF6BAgCEBU" > < div class = "YeQIlb" > < img class = "JscqU"
id = "fbximg_42"
src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
alt = ""
data - deferred = "1" > < /div><div class="FiHGpc"><div class="iI8PYc">丟銅板</div > < /div></a > < a class = "pqHExb WtIZZb"
jscontroller = "olaAKd"
jsname = "aYISIf"
href = "#"
data - name = "Spinner"
data - query = "數字轉盤/指尖陀螺"
data - sticky = "H4sIAAAAAAAAAOOwfcSozi3w8sc9YSm5SWtOXmOU4GIPLsjMy0stEuLlYi1KzEtPFWKRYhLg4gEAnayyqSwAAAA"
role = "button"
tabindex = "0"
jsaction = "rcuQ6b:npT2md;xuRi8d"
data - ved = "2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAJ6BAgCEBY" > < div class = "YeQIlb" > < img class = "JscqU"
id = "fbximg_44"
src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
alt = ""
data - deferred = "1" > < /div><div class="FiHGpc"><div class="iI8PYc">數字轉盤/指尖陀螺 < /div></div > < /a><a class="pqHExb WtIZZb" jscontroller="olaAKd" jsname="aYISIf" href="#" data-name="Color picker" data-query="顏色挑選器" data-sticky="H4sIAAAAAAAAAOOwfcQowy3w8sc9YSnhSWtOXmPk5eJ2zs_JLwrITM5OLeIBAEh-1LohAAAA" role="button" tabindex="0" jsaction="rcuQ6b:npT2md;xuRi8d" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAN6BAgCEBc"><div class="YeQIlb"><img class="JscqU" id="fbximg_46" src="data:image/gif;
base64, R0lGODlhAQABAIAAAP ///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="" data-deferred="1"></div><div class="FiHGpc"><div class="iI8PYc">顏色挑選器</div></div></a><a class="pqHExb WtIZZb" jscontroller="olaAKd" jsname="aYISIf" href="#" data-name="Calculator" data-query="計算機" data-sticky="" role="button" tabindex="0" jsaction="rcuQ6b:npT2md;xuRi8d" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAR6BAgCEBg"><div class="YeQIlb"><img class="JscqU" id="fbximg_48" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="" data-deferred="1"></div><div class="FiHGpc"><div class="iI8PYc">計算機</div></div></a><a class="pqHExb WtIZZb" jscontroller="olaAKd" jsname="aYISIf" href="#" data-name="Roll a die" data-query="擲骰子" data-sticky="H4sIAAAAAAAAAOOwfcRoxC3w8sc9YSnNSWtOXmNU5uILyM-pzEhNKUrMcclMThUS5OLMK82NL85MSS0WYpFiEmDjAQAnwJaNNwAAAA" role="button" tabindex="0" jsaction="rcuQ6b:npT2md;xuRi8d" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAV6BAgCEBk"><div class="YeQIlb"><img class="JscqU" id="fbximg_50" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="" data-deferred="1"></div><div class="FiHGpc"><div class="iI8PYc">擲骰子</div></div></a><a class="pqHExb WtIZZb" jscontroller="olaAKd" jsname="aYISIf" href="#" data-name="Meditate" data-query="冥想" data-sticky="H4sIAAAAAAAAAOOwfcQoyS3w8sc9YSmBSWtOXmPk4uLwTU3JLEksSeUBACtscmweAAAA" role="button" tabindex="0" jsaction="rcuQ6b:npT2md;xuRi8d" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQme8CKAZ6BAgCEBo"><div class="YeQIlb"><img class="JscqU" id="fbximg_52" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" alt="" data-deferred="1"></div><div class="FiHGpc"><div class="iI8PYc">冥想</div></div></a></div></div></div><div jsname="Y5ANHe"><g-left-button jsname="sIJmDf" class="pQXcHc Lu0opc BlOseb tHT0l OZ5bRd SkGIjd" style="top:0px;background-color:rgba(229, 229, 229, .8)" aria-hidden="true" jsaction="PfjCMb" aria-label="上一頁" role="button"><div class="p2WJce KkkQv OZ5bRd TBC9ub"></div></g-left-button></div><div jsname="AK6yne"><g-right-button jsname="IHFM4" style="top:0px;background-color:rgba(229, 229, 229, .8)" aria-hidden="true" jsaction="sYPGdb" class="Lu0opc k2Oeod tHT0l OZ5bRd SkGIjd" aria-label="下一頁" role="button"><div class="p2WJce S2C1T OZ5bRd TBC9ub"></div></g-right-button></div><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){
    (this || self).cVrhhd = function(b, e, q, a, h, k, r) {
        if ((b = document.getElementById(b)) && (0 !== b.offsetWidth || 0 !== b.offsetHeight)) {
            var l = b.querySelector("div"),
                m = l.querySelector("div"),
                c = 0,
                g = l.scrollWidth - l.offsetWidth;
            if (0 < e) {
                var n = m.children;
                c = n[e].offsetLeft - n[0].offsetLeft;
                if (a) {
                    for (var p = c = 0; p < e; ++p) c += n[p].offsetWidth;
                    c = Math.min(g, c)
                }
            }
            c += q;
            e = Math.min(a ? g - c : c, g);
            l.scrollLeft = a && (h || r) ? c : a && k ? -c : e;
            var d = b.getElementsByTagName("g-left-button")[0],
                f = b.getElementsByTagName("g-right-button")[0];
            d && f && (h = RegExp("\\btHT0l\\b"), k = RegExp("\\bpQXcHc\\b"), d.className = d.className.replace(h, ""), f.className = f.className.replace(h, ""), d.className = 0 === e ? "pQXcHc " + d.className : d.className.replace(k, ""), f.className = e === g ? "pQXcHc " + f.className : f.className.replace(k, ""), 0 <= d.className.indexOf("SL0Gp") && 0 === e && e === g && (m.style.paddingLeft = "0px", m.style.paddingRight = "0px", d.style.display = "none", f.style.display = "none", b.style.paddingLeft = a ? "0px" : "48px", b.style.paddingRight = a ? "48px" : "0px", b.style.textAlign = a ? "left" : "right", (a = document.getElementById("fade_forward")) &&
                (a.style.display = "none"), (a = document.getElementById("fade_reverse")) && (a.style.display = "none")), setTimeout(function() {
                d.className += " tHT0l";
                f.className += " tHT0l"
            }, 50))
        }
    };
}).call(this);
(function() {
    var id = '_HYOtYeGkDZTt0ATr2qGoDw39';
    var index = 0;
    var offset = 0;
    var is_rtl = false;
    var is_ie = false;
    var is_gecko = false;
    var is_edge = false;
    var init = 'cVrhhd';
    window[init](id, index, offset, is_rtl, is_ie, is_gecko, is_edge);
})(); < /script></g - scrolling - carousel > < /div></span > < /div></span > < /li></ol > < /div></div > < /g-flippy-carousel></span > < /span></g - tabbed - carousel > < /span></g - expandable - content > < g - inline - expansion - bar class = "JPXuV u2sJ0e z0RPff Z2Akxc"
jscontroller = "vJ1l0"
aria - expanded = "false"
aria - labelledby = "_HYOtYeGkDZTt0ATr2qGoDw54"
role = "button"
tabindex = "0"
jsaction = "yELBLe;rcuQ6b:npT2md" > < div jsname = "mKTrKf" > < div jsname = "GTrWA"
class = "lA0GG OSrXXb"
id = "_HYOtYeGkDZTt0ATr2qGoDw54" > < span class = "Gldprb" > 更多遊戲、 玩具和工具 < /span></div > < span class = "xrIqbe AB4Wff xTWltf z1asCe QFl0Ff" > < svg focusable = "false"
xmlns = "http://www.w3.org/2000/svg"
viewBox = "0 0 24 24" > < path d = "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" > < /path></svg > < /span></div > < div jsname = "f3VNIf"
class = "TJMQHf" > < div jsname = "r2H3vf"
class = "TJMQHf lA0GG OSrXXb"
id = "_HYOtYeGkDZTt0ATr2qGoDw55" > < span class = "Gldprb" > 更多遊戲、 玩具和工具 < /span></div > < span class = "xrIqbe AB4Wff xTWltf z1asCe PFI26e" > < svg focusable = "false"
xmlns = "http://www.w3.org/2000/svg"
viewBox = "0 0 24 24" > < path d = "M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" > < /path></svg > < /span></div > < /g-inline-expansion-bar></div > < /g-expandable-container></div > < /div></div > < /div></div > < div style = "clear:both" > < /div></div > < /div><div class="AuP6le kno-ftr"><div class="OwRFvb kno-fb"><div data-async-context="async_id:duf3-36-0;authority:0;card_id:;entry_point:0;feature_id:;ftoe:0;header:0;is_jobs_spam_form:0;open:0;preselect_answer_index:-1;suggestions:;suggestions_subtypes:;suggestions_types:;surface:0;title:;type:36"><div jscontroller="EkevXb" style="display:none" jsaction="rcuQ6b:npT2md"></div > < div id = "duf3-36-0"
data - jiis = "up"
data - async -type = "duffy3"
data - async -context - required = "type,open,feature_id,async_id,entry_point,authority,card_id,ftoe,title,header,suggestions,surface,suggestions_types,suggestions_subtypes,preselect_answer_index,is_jobs_spam_form"
class = "yp"
data - ved = "2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ-0F6BAgKEAE" > < /div><a class="oBa0Fe" href="#" data-async-trigger="duf3-36-0" role="button" jsaction="trigger.szjOR" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQtw96BAgKEAI">意見回饋</a > < /div></div > < /div></div > < span id = "z9PoV" > < /span><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var frtImages=true;var eid='z9PoV';(function(){
var a = frtImages,
    b = Date.now();
if (google.timers && google.timers.load.t) {
    var c = window.innerHeight || document.documentElement.clientHeight,
        d = 0;
    if (eid) {
        var e = document.getElementById(eid);
        e && (d = Math.floor(e.getBoundingClientRect().top + window.pageYOffset))
    }
    google.tick("load", "frt", b);
    d && (google.c.e("load", "frtp", String(d)), google.c.e("load", "wh", String(Math.floor(c))));
    for (var f = d >= c, g = document.getElementsByTagName("img"), h = 0, k = void 0; k = g[h++];) google.c.setup(k, a, d);
    google.c.frt = !1;
    f && google.c.ubr(!1, b, d)
};
}).call(this);
})(); < /script></div > < script nonce = "EEcYuPapLeT27Qm24Kw9uw==" >
    function _setImagesSrc(e, d) {
        function f(b) {
            b.onerror = function() {
                b.style.display = "none"
            };
            b.src = d
        }
        for (var g = 0, a = void 0; a = e[g++];) {
            var c = document.getElementById(a) || document.querySelector('img[data-iid="' + a + '"]');
            c ? (a = void 0, (null == (a = google.c) ? 0 : a.setup) && google.c.setup(c), f(c)) : (google.iir = google.iir || {}, google.iir[a] = d)
        }
    }
"undefined" == typeof window.google && (window.google = {}); < /script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;
base64, iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY + a1AAAeJklEQVR4AezYhZEYMRBE0cs / VrM0pCEXGI6ZtNu / OoO3qIufY2Jbb1tCDIQgxECIgRADIQgxEGIgxEAIQgyEGAgxEIIQAyEGQgyEE4QYCDEQ / po0WVhVbdny5e4RkXl5HrHcbbnaYlVi + TUJhB85YlEzj6iqfm5V5RFqRiwgfKe7TdQ8ot8mjxC11787QTgm2VpV1e9VVS33QQTCV3haZmZ / XJlJIiB8zli1qvpzVFWsCsLHjuSj8e6BFAXhfRvEmdmfu8wcxCC8Zba898ncQXjl5quq3q2qmsQgnGrWO2drnZowMnv / InMPQjw876mqBvGJCIm5jxixnIKQRPu4sejBCVm1jx6rbkwIv / sV9yYkkT5TJHoowkHc52sSH4RwTKo + Y9U9Jh2BMKv6rGXV9oTu0efOIzYmZNFG3ay6JeGY1H9Dg2gDwo86wsZR + MX7 / MUjVtuJsPqW0DaEy70fUdnX3 + ydBVjU27rG39Pd3bnLQDoVaUkF6Q4DxMTubuzuxEBEGiSlOwcGGJimpHOA6bvW3ZzeZwsHdLwxz / f8p + OZ37xfrRjx6ywp76nspX3biZ8Jz1swDrjX7F3SX1sgGxt5Lwq7ycUC2fioqJ3bxyggFz7 / keSb + R + AkMTtN1dLMqn49UuZ8JKUtU3RvG0o4k + 8 Nci3R6wWKl1QG / JN4c2wUV6davmNdQmHeLWTeaTw + c18x9llwUbiwZ7p5zWqRziZ2fKy8UEx94KcvUPRvF1ev777IrihKLDHy4VgeqPaDY1bNHsLXqhSfzJpd0F027MrbxzpHWthMXYFZmqhfJ2xZLhPJWUi3q0E6Una + lKRpqfMMlFkLpQmzBJspQibV4IdguZg1PqgxBFlobMVqstp + /KeM8M+Yh90kY0M/
3 s3K + suevnK9cMsfdTtmd + aFSGXSVRSYODd92LELbnKSEzYU / QeBX8H + NvBCUH1UhTYIsMYcfrozItRCUW5TNZ2yr9xx5zh9trWp6clw4OfGSY5z87HGiPlB2jc / kth5t5 + Tu30 + zWqRzhpNyWRdjVISo9Kyo6L6 + 6 PC8vGmnPaLtvWeqPCCWVOSF2IGCP0VL5SAUKFQtLNaXD5UcNxs35OYY4aWh8fH21hDnAYffUlvXVFXVW53WXJvCvBaeZ48Qc0 + n + 352 UQL / HQAI85zdRU9QjFYsmUZ / ANdA / Vl / UVPBQemsX0RYUzShyQoI8ns5Hi + iFRg0rSUBErj20K7uUl / YyoKve5OSao37kwJ1j7peuPUhZ / Nd6MxuxSK + ToI2MuBnP2dEVY8KPWU4TTn7qoWoRTnZE2yi7gXfDOsUeeHapdUbwYWeaI0cLjT5Ds9Et + 3 A0VFRKy4fJo7iK0R4b1J6zpZ6UX2yFzFpL1EamFSA3E6CFaE8naSJuNAmuIL6LrzFxBevhwW / WUZry9dwhHJj2oKxePcp + cYG + ay10Hpj + qXFGyBKkmVHmRc5Fo / R3 + 84 ujr / kkJ1RVLtr1IrzVHl2PXV + fnat89P3 + w2gyQLIGbv4Jtz9E5Dw8mYNYNaSpo8kRo6HoXov2cxZj7KSpDQiPjqoO4TTK + fHW2u5nGyoDkGtBlVdoj0xzmrmQyJfhNZt5ecsAmyEVDRMpqLCcaH + wpckKPc9DBjN3yEIg3wzRKpQvQOxHiJ6FWE2kGCFdA6Xz0RqIgWDw3cFZ9aOBvFtTeiPJzPlSvCMvqlBIB153Xl / CWYWmlTRtybdFrC4i1ZDi + Iu6s6F9zOL3oiMjlfDOhpQsRGv4x513FoytgXIjlDvR64e8ucjTALmrxASVxujywehG9K9HgyPKnb7fkXRFVaPBmJEl8G / +xGMj / Zk3uGtoCdgYhLIleKGBJ3MRbwJhwvW / uU3VI5TWn1ubZ4ZGN / DXoDUI8vWUomI7WpzAtQPHBo0m4DtCugVKItDVEPqB4ft1bszlqb3TzE3LwDsYl5CKhvj3d8Tp0eDXFIx8e8ovy / cTdtRZUQd3Rio5 + digTNQr6RPKhrtJ0TIdRyp4tDfZErH6KHPESDCoCreC2k7INmB4GQb9IAsDvboNOU5IsQVzDboerJtyD2 + GhoLxDgJhV8xuzjbU + aNxGY1 / ycaoPOg + xGfKpyE + cX / HYNG9kRhv + Stdebq66Mwfhzd8KH32JUX2V0QPP + zZrzmQcljSwZJLxj + bulQiH + 4 c7 + TLBtvFrYzRunRRY8FoS8N4Y1L12k9I5vJME1X + UO5Abyg6g9HmDcVOKHZAvB7yTVBugSgMme7wNkS4A8q8UbfFfspzMqQyVSKcfCAU9wg4e2czA8Bbi3J3pFuAccJ3pJ09qbJdofjXtshIQ6HgotvIWaPhvT8Z3QFlDuRXIN2GYW8oEyGLwNg6jPlDHAFFARQ5v++7 Yth + 1 m0kylOW5iB / ZTp4TXPwhObICTXRvo / Fj3 + hzPiR + MYPBkN + RF5NHPU9WRIqA / BUDamLUOcH6Tk88v216e + wdynumqLSDWNrId9AVfjCFqsccPw0kteh2RNFfmoThew7Ly3wtvuinNvbSC2coE + 9 aLYtGCf9x / teT3awW / y3dffkgnx8bFTY0LAMHYHoDkCbCwaJUOIhPY2RA5BfhfIFpEcx7I6R7VCm0gae / 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\x3d';var ii=['fbximg_18'];_setImagesSrc(ii,s);})();</script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;base64,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\x3d';var ii=['fbximg_20'];_setImagesSrc(ii,s);})();</script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAdMElEQVR4AeydBXgU1/rG35PsJtmNZyUbJ75RHIK7W7CWApWL30LRuuDufnGrE1xqSCVQ99B/6a0bdU8Nyfzf0vSWvWc3IWQSZm/m95yHZ7Mz8+33vS8jZ+bMDP6D0ddXeWzNr3uWwh2+PuG5sd+nO16BhJ+hVkbUm9CpIBSN0kGCIlNqCg530CDaRLNQPrqFmrSwfHQLdQt1dAu1hm6hj4/wMxqMBl8hTRJC+J+f5COEPInf+xkMnChPMvj6MqY8ifBLxuTenrO5yYQxPfwcF+GCnMddTE7iYu5/jklyIiNIinHSH3lykhdbyNr6N6/79qapBbcPc4SHwJV6KXEfbpu1f8qoltkpcCWnVvQjM0e/tWHKzGt6wJWESMvqMQPe3Txt6Yh+IaYAXIDJ33jngM7vb5mx7cZrMuOj4ErXhlmFCyc+MX9Cq5xUuFI3OfaBW4d8cs/sHo1z4Ep4oGnt2IEfbJ05smsLGglXVoy64o21dx2YOiolygZXJvVpV7hgIvNMi7FXm4WUwM/kZ1TRQtZ8Q8/WyvP3vbNxaoI9Aq60yU1VXt3+6T2z85vkwpWmGUlfPzhfefae7bcNhSvOOMdT8ycoL97/6Mwx4cFmXECwyX/LxKuVlx58deXtjdP+W53rOuSdObD8171L+zSrDVda56SeXDdZeX3HsE7N4IotNOj4wknKK9tnXduT/0XgypHZY5XjWz+7d3ZuYgxcWXn9laf3L1deuL9OUqyKFtIg2gSZ0n7hk5uUh1apa+HIrs2LH9/42qrb423hcKVFdnLx8a1vrZ/SvVE2XGmcnvjBlhnFR9ZvnXQNXEmLjXxkxujiJzftvmtEWJCLhUEm/3+NGVD81Jbji25skJIAVwa1afjt9gVf3j+vp7SqNc9Kfmn5rcXP3H1tu8ZwxRoSeGjWDcXHtk4e2FW2kJuQ4kNr3t4wJbtWNFxZNKzPNw8uKH5iE91V0UIaRJtolgcLD635Te/aa/twhgbRJo8W/rBnyRf3zdUt1LKFNIg26Wdn9E6FbqFuoY5Xde2FYP+X/VzUMHiWgIWzCeHNFvoKkRxlHdiuUef6mWZ/I2oS7A72blZ7ULtGYUEmL7aQ/cKJvdspRTtP3Ts7MdKCmsT6cYOUQ2uVE7vqp8RXn4VREaE8DaauhcM6N/32sTUvLLs5zhqOmsS8Ifmn7p3z7aG1PFmoooU0iDZ5Pjvz3D3K0Q0qWiiEiAg28wwkzxP6ee7KCGH0840z+kZ7UWPCTLvM9SEkM8FRLzk2wM+oooU0iDbRLLg9H//xvXPe3jC1mo9IhfAPM/XNjf0xI+rfXtSYMNNm8tV8REqDaJNBO117IQLCzQOTbHvhhTBtJs8SanS/MMTUJS3yGXgtTJ4l1GgLgwPap9iPwmth8iwB0C2sHnQLa8cWOx2vu7s0H5cZ9banI9LQQFNKbCSv93IP7M7CDin2J+C1MHmWAHfwWjFPa7B29qzgDopG6SBBkSl1VVgYku54Mcl2wN+QggsIMGYE+jdPtj0MN3Cq4Zb+HZR3DnxXsCDJYYVEoH/TROsuP0M8VMJgQHAQLBZEORATjYR4pKYgLZWNH/gnv+QkWC0INMPXF5WBaTN5lgB38GK18tRm5d2DDVMT4A6KFhTQChC4AMpLkSk1BUdFEefHNKTH2FEmTsdrAcasAKOTLdC/WXb0qWTbQY9FGg3DOzf7/rG1f3TtbR5GEhjrptgPBxizGbBCzd/gNPo4feE0+SfaLNb4OHPtXJ+rrsTcWdi1Xbz0rDhZJL77QijK3+2bz/ilePEZsbtATL4D+b1Qp7YPF7SE2wOMSb6CARn2IhPIZtpMvoyu/Wf3zvn+0Dp27cs4Ggryb3VBzCzKizKhQbRJuJebXftXHlQKt6A8sqI/cjqKnI7/S7Y9Vt6pXp+MOMcN3Vr2bVYnMMAfHuCqnBPzFWNeZEuPLEq1/fEhL/1E1yZFN47cue++0R+/3UBRzIqCUsNKhHJOKGfEuV//bvyTX3LSX6aCi3DBB9bfNOaag12bvN44/US6g8H5E+XkwISZNjzT2Fnr6naNx3ZvFREcCM9wXaSSf8aksCgPGkSb/Dx17d/YMOWVFbdC8wgfRDrQrBlWr8T3X9GG8+0sSn4DfapQ4yJc8M8I336BlcvRtCmsNmgWGkSbaBa8FIMBcbG4djBefPavNem0OPcLzah0+4XraGnMJw6hf1/uNaEyOnYbBg/EiZf/FJorEKVXvTFsafxnnkKXTrBEQAV0uBtt2gS7CnBeXApdDa3UyC0bUb8u/P1RKfSVb/xY/PZDdZknGfnrD2LMPxEeBp0K4+ODnGxsvx/UUTlbiX1eJfeR52ikWLkMibWgU7Ejl84dcfINyneZzJNWx6OHuD1nYigfHZMJ7KR//dnl9U9aHRXx1SmR31OrLgoh8jISG6UluJ0UHmQOCzSFmk1uR1fkZae4vfnD7O+Xl5Mq329AQswBXCovM4l9f7gSGIiJ46Cc1oZ/kotffHreRV8QJs8SWAjLgQQLZ/kUARKUi0tROkhQZEpNwSk7JGgQbeIkD2dnTuzkRX23vf5mmUmNnYluR/KkRtuVTw6d3rccEo3TaylfPvH5vXMh0aVBpnLqsPLW3jfW3Ol6Tg4TxuL86RWN+Se5SF5fdSdLYCEsBxIsnOVTBEhQLopG6SBBkSk1BXfbf6dBtMnD2Rkfn8LFNx6ZMxYVxBERWrh28gO3DHHnrq1w4zSO5YIEB9QUrp9cuOyWJSP6/u2fH666Aj99Kx18atLFBnlYNLQvS2AhLAcSLJzlUwRIUC6KRulQQWgQbaJZ2tySo2MHfHlK2n5q1cUP3hYZOfgbHWcaHj8MTfsnuXjoESQnQ4cgIgyb1mnbP6kp50/FLVsEHn/VdPyMGDsalEP5ndJ4U/vzsLlvb7CEGk3D+njnJA9BKYr3NVr47zdFhhM1l+AgrF7mZZtQNuX30kvHn74vnn1W5OZqo2vfuWFWx3oZqF7at8XvP4uSs15kHhQFZ3/B2yexdxf69kF1QoNok+eu/ck9fBgIyiPM3DfU1KPyLcgvPz6q5T1bDF6yCpaeMDr9U8R7/65XsK1rfpeeAj2AHsH+KqjBRmFRHjSINrnv2vMuzn3Tr995x3CUSYT5mtTIYxzxUfkWH3Z02JXLFcVUchpaX/POQFF8fv3B94UXsGiOs2OzGy3+O61+jyVaWIhqjcJSXpQJDaJNNAsVRQhjSEDnUFPPJOseqERQCFatoDTQ8CpYeqWp+Bv7saOWmdOMsTGoUigvRabUFFz1caSW+glKVvQnUI+8xvjmC1FyTrt9PrZTH4qH9mPW7ZNtYU1RLVBkSk3Bq2xAvkoYjbwcIR+IaqWrx3/Zz9lTIAZcCRKEQ0F+V6FKqP57KlQiIR4cKKaUaM68338Sr78m1v9LtG974WjPvWHmft5uYUTd+BLeGgmVaN0SJacFmybMO1tq3nPPiZnTRN3a0r0TtsPcRaFaoMiUmoJDXXxEYHzEppjwpeHmASpE88XYMVrYipZ2z3/8Whx6WEy9S9RKgFvswTc6QqcafR2oYigvRabUFPwSTBID2zS8smV9lAlvBAkz9w815V9yCw7onVarQ8F9VkW5jN3zv49W9u0S48aIoCCUjSN0SmTwTdycsoQqahSW8qJMaBBtolmVuqeiUaJSL+HSW7ZD6dv2g4/fzlRKcNmOVs7yaEUU3C8GVuQYhfo2rMUSqqpR2ErdU2GkhU9vUw6vQ5n4iuC4iPWx4csuuUUGrurS6sbTvxpKfkf1m3f2F/Hqy2LNKtGxPSqKJWhYXPgallBFjcJSXpQJDaJNRk9nZ7bedN0GDpKoagR69YKioJqPVs4Ui2eeETOmiLp14L3QINpEs3AZCQjAzTfSwmo8t/KtePSAuOs2kZIEFdAJDcW82ZKFVXNry+cfiZ3bxdjRQs3h9DoxMdi7U1SJhb+U7vDY3n5T3LtVDBwgoDo6UVEouF99C0vN+1288qJYvUJ06uBV5ukWcsv509fi+DEx7S5Rv663madbyPXv5++42RSJCTXbPHb4R/dsPaprC7fPHhndu93oHq2GdmwKiWBzwOh+HQa3bQQJa0jQ6Cs69W9Rr0ot5InWH74Se3aJ4cPQqAGEZnxk4SyfIkCCclE0SgcJikypKThlhwQNok0ezs4YDHxAjPJqgdun4CifHlLe2sdOJSTSYiKVb55SHl0DiSbOROWnZ77fsaiqLJROmL3+kpgzE21aQwuwcJZPESBBuSgapYMERabUFJyyQ4IG0Saa5b5rv2RU/wVDe7u9QWnJmKuWjOw345oekOBDOZaMH3zHgM6QiLGELZl0DR8MjAuIjsau7bKFahr5/tu84ICuXRAUhMsIC2f5FAESlIuiUTpIUGRKTcEpOyRoEG26zF17qxXrVlPoKr9N/otPxIa1oncvBJqhJjpmM+64DbKFVdS75wOg1q/DNYMQ5YCOandgD7mOFlbr+CVuY3fuwD+uRXwsVECnZXNU/MExKjwWiJ/37wVvQc3Jhk6lyM3B919w/agO/2Qj2Y4X4saJaNIYOpc+9unIw5fpVt5f/jpwLRGvv4wF89C29f9Q1/6uQd1uu6IT1IMvVbhreN9hnZrKD0SYORWShdVuZOkJcfDKSc/uMAVAXVg4y6cIUA8aRJs8d+3fPai8VoDy4Pic6NDZ0aFz7cE3QULq2j/7A7v2Ej26qrg7VKEH8tlHfFaX6NdbsDOmFiyc5VMEeMYePIlKUk82CovyoEG0yWPXfurV3fk64zLXVHNkyO3/sTAqdKYj5A5L0NAy1sKpI/uN6NIcEk4nPnlX3d2hCj2QLz8RmzeJYf8QNgsqDwtn+WWshbbgMdGhsy60kPJSZHiGBtGmS+/aCxjqxSsXjkzMS1RyYj5DxQkLwZIF8rZUE2MSTxeLXTvF8CGiqu+gqBN3ziDCcQGUlyJX0Z7S5Ai5k1tOa9D1F3wZFBlyiy14vC14HCpOt85a2Za6PXD97Udx8IC49SaRmYGqgKJFhtzmK1zWUcpLkSk1BVf/thj+B8mM/sDdpPCcmC9RcTju9sVnIG9LNWUk18tjheK2m0WTPKgLRfP1CYMERabUFNwL3lNhNGLkME2uiPKB62leAxFLF4k2rfQXwbqSm4333q76gxr1huScPCEWL+Cpc1E6kFO3kF2xG8dre0V0d+D66Qfi3i2if1/hI2q8hSQ5CS8/J90i4w1GnvpA3HOPGDlM2G2asFC65KuChe4v+coXLq4aAD7xouSMF/gn90B++UlsXi+iosq/5KuKhe4v+coDL9Sy0O3AC5ngYGxc6w2bU6mV0EhFLFsoIiLKH3ihioXuB17Iw5/UslAe/uSJjAy88qI3bE6lJ+kVPoH42HKGP6lgoTT8SQP7QulJ6v164/tvuHXyJv9OfSLat4GouYcz0vO4p0+Gokh3b2v1YSZs/xwBoxFEt7AUSwRWLdP8TvGX0rvd5s2CyaR3KiTsNuzfLbuoOf94jj40VO/aeyAlGRzhIr9SS1P+hYToZ2fKJDUZBQ9KL4nRwPFL6foXosVzpPKN2ipYGG+L2Drt+qmDu0EiOcomdWBciInG8sU4rxrl04R/Z34Rs6dVYPvJwlk+RVDJQvlGbblr//Z+Pk1BRQvz2LX/4envti+ERNva6U/On4AyiQjHzZP4ZsjL7yIT+OgDXs2v2MBwFs7y81Tt2tMg2kSzynnujFoW8pUnAzs361Q/022vv2lG0sX0F3v1wNPHQBGVczTy8mw8Dx5Au7aoKCyc5VMEFSyUnjuj7X2hRFYG5s8FX0JX5cc40gWmbz7nbadISkTF0A9nZMwm5PfErp1QSqrGSMk8/tA929ChHfz8QHQL1SEuDlf0x24aSYnZzlXJDRhsO7bjin5wREJCt1AlI/v0woa14M29lfJSco4Bly1Bty5Qf+yabqGM1YIWzTFiKHY8gO+/pAEXtDPlPmvbZX7u8Aruw7AhDOi5z+ftFpI/HuwccwoS/oYUvqcflw+uMc2aYtAALJ6Pg3vw+kvswNGYstqZn0XRS4Lez54BLpiRAxhRzVA0SgcJikypoTrJ9kf5zO8g/5Zuh3iHBw5OtG5HtdChbsa+RZP2zR1/fff/TiYkBBzYmJONVi3BjWF+D9wwGtOnYspdYJsxDXyrMrsonNSqBWej96WvW7qubcsdM8bvXTiJwVEtUC6KRukgQZEpNQXHRcKnl5bXNseFr+VbFFAWwhI0JNG6g/NXsiVY7rMF3wDP8JyO8sYu5aUHtky6BuUhBMxmmExgo1ueelMMxYAMW/YJIybG9CpfI4WiXICAZyg4Zaf45UYDR52W23Jjf0J5GH2jGydy5sq2BgkKK4RnxvZsrXzwMJ8J8eBtQ6ESDMWADMvg8AwTY3qVr5FCUS6UB2W/mGhcbVuX2wL9m1/MiP3ggI6cuZItOKC9PXh8dNgCeCDWGta5Se3OjXOyEqKgEgzFgAzL4PAAU2JiTE+NGjtSLpQHZb+YaNAgBh8Lb9WICpkKzcBkmBITw0WiE2rOT7E9Cs3AZJgSLh4dPsU8yboXmoHJMCXo6BbWIEJMXdPsx6AZmAxTwkWiE+jXKNG2O8CYBc3AZJgSE4MGSY08rqmW7ng1IWKTyZgLD3RvlF24fnLhqttv7NsenokIvDbDcfLPmPzAP+EZhmJAhmVweIApMTGmpzXF2PlopqnG00v+hjR4ZkJ+W+XUYeW9h3feOaLMUw1xQf5t/orZhn/CMwzFgAzL4PAME2N6WlMMXoc9NDgvOyUvKznRYYFKMBQDMiyDQ0dHR0dHR0dHR0fnUi/x+BStm/zS8lsgERoYULRlRtGaO5+aP9HtMxGK7pt7cNr1kHDGRhZtX/DArUMh0TAtoej+eUUbp64fOxAS7eqkF+1dumhYH0j0aVrnjwW3zZo8sCskruuQV7R/xbj8NpDgl5zEGSDBUAzIsAwOCabBZJgSJJg8S+CCLAcSLJzlUwRIUC6KRukgQZEpNQWn7JCgQbSJZnl+i+ixLe4Gzwcqb+5RXrxfeWwtJFKibcr7DxfvWuLWJ+WTQx9tm+VusHqG8uEjyomdr668DRID2zTgaxyOzBnr7qp9Gy7o6ar9tMHdlR+Orxp9JST4JSdxBk9X7RmWwSHBNJgMU4IEk2cJXJDlQIKFs3y37lIuikbpIEGRKTUFp+yQoEEe3yIqAGecIz3G7vamJ2d8lDMuMtXdTxoNvs6E6CSHFRL+RoOzVnStSIvbd19wkjPeEWcLh0Swyd+ZGBNjCXW3STBxQebj9iGRfPODMynW7Us6+CUncQZIMBQDMiyDQ4JpMBmmBAkmzxK4IMuBBAvnJIoACcpF0SgdJCgypWY+lB0SNIg2CZSio6Ojo6Ojo6Ojo6Ojo2MNvgE63jxUDD4iCDpeixB+0CwOhyM/P79NmzZdunQZNGhQp06dWrduzc/80LZt286dO3fv3v0/n/v379+xY8cOHTq0a9eOfw4YMIBz8nP79u05D//kvxaLBUBUVFT9+vXr1KmTmZnp58f6YTab09PTs7Oz+QFAXFxcXl6e1Wo1GAypqanx8fEpKSmcnzidTvwFZ6hbt254eDiA0NBQLm6324UQAKKjo2vXrs1/ATBCRkaG0Wj09fXlrzRs2JCfAfAzA6alpXGR2NjY3Nxcfvbx8QHA+Tnpz2xJVlYWo0VERJT1wgvXFw8YH3300aNHj+7fv///GSJDGICgIAxXveh9iq43QVBtJgmiyCbINpJKsgnMBFWDTZ9NpNIEb7529+7d3f9/Z9s2L5IktW3bNA3mSVmJk7qu930fhgFwVVV1XQcmqphflqUoChySwnGapjAMidEUxzFjNU2TZTnLMs/zKK3rmqaprutlWeLQ9/0gCPivKIrjOJZlsajv+3meXdcFBL1JkjzPk+c5NzBN8zzP7/uQDX3DMK7ret/3OA60qaq6bZsQYhxHYsZGUXTf909GGWhaCERRFJD3AX3LU6EPCkXfEkgCBSBAgEIAkUpICUGRIikV3UVwuZCpOTOzz9q72baNJ7IJCikpy3KeZ46jwLKsZVkQg0M06LpuFEUUX9d1HEfXdbIsUwYTyiigU0IzjqNpmrBiijbZLcsy5MVxXFWVKIqqqtZ1zRJFUahJ05QxUwD3PI9xkiS4SBdoQ/C+7wQ3z/NX7TRNwMTjn4v0n4v07/uTIAjrutIwiFlMxiVJYse+7yH+/hyM27YFqK7rIBuG4TxPPH7VP8/TNA1+k01A8FoUBQGnDfyDte/7JBSnDcMg4I7jkDsocBxjiEPtzS/hCIIAg8ERhiGegU/TNPa879u2bdSC8sO4HXC0HkZhAAcQ6guEUt+jDxAkRaJSqIqgSFVFKVJVKVSRVFApAoFKJCkwhtkGbLPBZmAG4P44cN3Lvf2Rd+/e/3vOeZ7nPGfQ3d2dxgL02tra7u7u29sb8mBECgsLC6lUanR09Pr6emRkxLVHR0e1Wo0EEa8Q8l9dXXWhxyaMTk9PrRGmQDi4XP4gVunc3JxKFcUesO4YZCSvxe0vLS0FhQcHB9Lzrf1MJlMqlZSvlnq9bpO+nclms/G6BPL5vDWtX15eetEBPToxMSFnaQitNAdI2f1/Gunf/2AOFBVSYmtrq9fGx8exksvl4KUPHBgYGBCGIkjMYT5D9fBypqWlRfsmk8lisYjptrY2mj0/P4eU+puamh4eHpSheL1FdBSAS7Fc0tHRgcL393e6Ozs7E4h7SB2jWNHiJLm9va2HGhoa+vr6kEq8JEwWn5+fY2Nj+mBnZ6ezsxNnqkUkF726utIHbMMlQHGtM4CjJNVRA/djA6Tz/PyMBu5Ku0Ssj2GqmeCIQrlpYrZpDQfJVyoVikGPlIhDXYuLiwGxG6SnjfSoBiJoZsgVMAQcV4EunU7raTkQtFjlclntwWtzc3PY4ePjo489PT2aIVpT7f+fQFgRm03Jnk7RoP339/eHhoZkSXGzs7OuC5/0iEdEFxcXwq+srOjI9fV1CVEAsi3YFIhvb2+NFor++vqiRyjwRhRyxcPDQ9zzGVVxUVrxuBlkqlIz9NHJojc2NhyO8WD//v7eWkNQD9pQuLe3JyjduF9W8/PzFP3y8qIK9AeFWgQu3mUkIPaRBINRj9lBZ9yMPqrVKtSUFl3IFRidWMThXYfjLZ0qEMR+p1At3J52HaBC67gtonR3d8OWRNgj3eD44+ODXv31rUoDW8bmox4YHBwMvn9KIYZiyOkkc8ub8QjGl8jcOiafBweFQkGKKvciezTV0G+Q3NzcOBl5JxIJ9CPSpp8hdqCAQpNVWuwLwY2NjeTpoyeMlHnqIRQ6zFFZXMTVKygUMWazh+ET/snJCVGz1hgqYmECUn4HHR8f61TnyVF0fPurM0ApbW8xWGlDjRaR5MKwr2gdi9fXV5VacBpt6luSUq8dzu+S5eXloJDz2yRB7EbtlO0AMkgQ8Wawv6i1CGt1JzPo7+/XkdKgbyIItQEwslUOfH5EYeQNVmtRCZAR4ZLFGb822aYzT09PKp+ammImcDHYbFr09vbKg9MSpmLa29sNFXkYFboQi37XBBbm/z8y0XnUrbMB7UX2ywMx7Ss//1glC7XWWxQqopYVi625GWQiTk5OSiPWCPYD1Xm68S74wKTpmZURy8nVtbW19f39DUpaYfuGiOY2KQ0/LLqBf2gRx+DgVwlAuZy4DsBkeHg4IO7q6qIYs58DbW5uuoHEdRIfFkUbKMTO9PS0YRkew4pnZmZol9owShnkSKmmOB0Twa926xuHQQAKgqh7uDb39pNGonKqrR0Hlp/JXNd1nufjR4TqlHZaHcfhNHdEPZNpRp1cMVYJQzOKd+/uMrKXVei/Tbq1alBNCouUx3t0FFB9Wdo1Va660/WFVZXF04qjV3npTUsXT0NN2r+yErnk5mJpbLqx7xStCyPEqKlvAZ1eGcWoWXDkbYAsRJHCeNsbXTnNoAJ7xduTY4wx/o8xxhhjjDGepPm9gjCaDz4AAAAASUVORK5CYII\x3d';var ii=['fbximg_22'];_setImagesSrc(ii,s);})();</script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;base64,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\x3d\x3d';var ii=['fbximg_24'];_setImagesSrc(ii,s);})();</script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;base64,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\x3d\x3d';var ii=['fbximg_26'];_setImagesSrc(ii,s);})();</script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;base64,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\x3d\x3d';var ii=['fbximg_28'];_setImagesSrc(ii,s);})();</script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAWuElEQVR4AezRAQkAAAgDMAMbyyYWs4aHwRqsZpto7wpRqBCFKEShQhSiEIUKUYhCFCpEIQpRqBCFKEShQhSi8Ng3C+Y2kiAK/5CDGMRgZhC4Ylm7KzAzic0MYU7MzExhZuZfdi+3qfFGZmskJVWqegeBzcC33fO6d9I9kJ+QGsMVpV9dLA/KBDa+NPQM5lvKMpsuWEIIj6OoOFVYuIhXelb86dHCre8BGnr5ncdziouK3Z7A8K3qEMIjy1ySgb0TKlUbd3muzK+Drn6sd3YzMoVcOG6kSDL+wLbxtSGE8Gja/NZ4arggTR/nBZIpSJ9+4qQ+HEK8q79AGHlQRKSYyU87PVow/qAGWv1YF0J4ZM2/cvYM5mqyE4Q7K5FJmy9aKObVyUf2LC5ZOIRIIims1V1bKgU5ouV37hDCI2vrWyMoTjys7eyzxqdEC3c525K68Mrl+xBtV3PFUqkw8vKrtX2r5WAm1OwLByYTQnh8kItvXWMPampashEfZLvVMcq+1QpfTj6vExfhfmmmWEhu4lHtwmsnsnrIzlAC+cZ1dbFEeEBGiiU9QwXH+NNmnjnhj4TJ2d3LTtwXwHv4Ax6JvBBCmjZn9rm9xKEPi9iOnqaLRyvdRu7UIILJ4yma2CsLvxx7cy8d/o28UHcG5rD1ikWYVBsvmA/PTxGlIA+aSjJG7lYTeFOPbWuf/Os8QwhJGdB4caZYrpITGK2XrQc+NXbfJuRX3WwQJk8EHzG6IYQB0vXVMkIxQiS+OFuyz29eeO2OSVQTfu5eRnjyLb/3hHqkwdHAeqVELuOpyJTyifu2vQ5RPbNd/Ll6GKHtXPtcH2pz766N741Tn9z9b23nX1b1PCvvflZ++nlF31vb+jea/apzE0XhEWKeTebJhNVPu/BA54zwK7LrCb/JxzW+N8/WvjXMfvZMfnRhsfOfPavfGrb+dITr3xtH3jvOvKhselTcuJtaH5fMfKLZ7HAJCLl6jF5+cvRObYToJ2M0YsbuVdPit/m98dKr6p0LbHlccu5FJTYBdP8whMtf66+8qm5+XIJl7C/8nsUvdRTdDQpzkk7H79UIf1XPJPG/hIPzxmoZyZ/4ouTjoEgqB64UGWga7+vvjxDZ4/LrGhJ2h9GFl1UUJzDx0E7KjGK7jtiTc5PFJECbL5oBj1bbeui94/CLxTky9dH1myLcwmLe2VtI5B1aTY9LkIgoLqmqycCjksplQ7cq+XSK05H0zwg/NHp8H67radlRl4yoXfpa/3shXPlaT5LJMbREL5dCi6/daJXxwOwdBrTI+9crSQj2DuXx/Kaf2qg4teMtuflR8eA7+9ZvghCZoZUE37GEN+BQ/giW75N77rPnwJWXOLJ4YCnaWFR7RTY9/0N0VkkIUikhMCVfFo73HkdPkBHiVSITOvb7uHUIy3dVcMS2PSkdfe/Yb1abVSTs0BNXqH/2Yjy9DPlstGtVcO1NbefTsvYnpWdfVB7GfWDmzb4tH2OhAgkawutvan3kx5/wBw4Ey7PzwYF39n0eyUyIZpQKo1JuTFRmiESsUqGRK/pXSniE6yQEBS6640mp1xBD/BD7qteHE4TYcpSSQUB4gwY/CA52/4FQdez17PCvsbjxxNXXZm3MYws5E2ey7CLWZDNxveXGhclyr7Mc0bCL1TpEkkf55PsmYCCcRwFFOORr/vTGsI8G3tr2eZx/f+dnKtoKWTNnJrQMOYxGq0/P0KakZqSlazI1On1WNsNuo602cX2t1psf69GC2MdVDh4UiCOkqPA5FnHMBwghWiq0+EGY9zGyKFHHbG5zvpHjzCxnNuSwqWmZSlU0Om3/nojYqRNh+Dwsj4tP0ulPgqLJbC0zmc62c76UrZg/ra1ofVKKoPc7Qpz5cBMUEcKXe2fON+7Jx9uh2bl3iHS6jFbWBHiIMHVU7L9hkeB0SIEleONZgPTkGtvncnd/RZ6WUa8r9ncGm/5GiKYfxRnjbfB2B0MFuLQJ94hL3Gh97bVBLZuFnlwDAGQbjID3z7/hP3RofiQoI0VS5FhQxPHZfY7b5yXruJ4XHa9OTIu+tuR9VQeYKe4JTKIfEU58dGEMvyIUXoox5qdPvXftwm8hr5JjwC8lJR0YAO/YCHkh9+YYOYvZ2t1g3Dkcvj+0XLaSWSVnxnjNGd9e6G4Lygy/IERxRmw3RXllf9wrxDYRZXKJ9feLfimkZnJLWNbImFTqGALPR4R8OOKARDj2uLwpVp9lhFOKTYpCxwcZgrS5SVuRllCo+AXhJAlBqkJx4tWnFv5VCiiJi2948JNiy3JBGcvCtkikCjCjiBDCWBmZWlDsqmPI9IxNWuFkYJSaLpj4T1T8hKeJuaMqeEb6CPuJuaeqZmJKBRRV0UrhxqVYEkGx6W5RLZdjMDCIGACji5AIHsditnSf4TC3nB386s+wpEWHBvom7SxKdOOtjTpCUsvTFxLR+AencKy+zSqpUuZNsdBgNHJwkqDlP4QQDE6RyVxQq/mVn0jIb/qZDTbnHCl4aAvfkCkjJDWs/4TiAZ0adCnxdRRQK8ZNYsU2xYKEOIY1y+UqoPI3QgynzzppyzGEC/gZWzQtq/kXbpbeuFvZ96Cq73XtzoYOfV9KFyF66qTRHBgRimqJrJDhUJKDUwAQQiKxDI6pJi3lB79IMdOurZ438bKtWBoeFvl77dP+OAshJOjGYFCs0WoytTpAChhCCI43nzPHyuRcly7A/FDgw+jSRkiu3pKubqDU0Gs05rAIhQAjhDI0umZrdoD5tZL7RP5ASAp83Esjt5v8LY81OzYu8e9/wwKPMFIs41jOfZ0JGD9sLD57Behj09b/n4HgJHHwYuBW/xDtGLFmnzQATxAQQuGixKTUtuKc2iWzn/ihtY3dwx5iJ9HlCPINNlyBgZ+ka3maCg3RMXF//xMWLIQRkRIryznGWTSJKGLDRv3H3Vm/tZHEYfzc3f0gWd8IEFfcNWi9xeHwnrtfHT+rF6lS9+Kcu7u7/hH3km1zIQRI2E1LeJ73hxaW7CyfnZmvDkgQwkKciXWk8NOlCjjVbM1Njo0HmzOIMMQ5EZcWJxRvzpLK4YNDOdNLgdskCsW1PuOosJjB78wipEi6ZX7GopfThDifGMEYDJqC/AdEV5RAfUuzP7IoujV0NCE7UwgXsMzbZv6fguSatvTSTofIIBQqBIIG4QrRHmTtrvyPCxI/NDAfGpmPjPTGcCqOkJ82hCEh8kUcPWjk/rRzf9n5v1NM657MglEjfgoGDcKm3hKRCJvacz9JNLsQQh8b6V0aqpAhZHfKAodQJSceULFvmrk/7OB3EuFfUYpXlmbDtajYkTvtJ8JrHUwIl4mehdsfz/nQzHsghD4x0m8a6UY1lU2RsjslQ8jKiFKe7tayP1r53+0cNAZhJP/94iQgLOnIEp9WCw6E4lMwfVVpH4CfN4Sfmkb1mYl+x8BsiqAbeDqGlAOnvwjpUCKTIp9U0ft07PdW7lcb+5uN+x3yhvDfzMia1lEHX0ztdtAgFL+KQu/kRU+FEGI+d+oLM4N/H9fRayOYp5R0nYJawFAOirLKZDfdfKv8ttvTKdJBU0UcdZ+SWRHGdGnZN4zcD1buZxv7yylNjvCfBE3jMxmYiFU94isqzihC2FQvD1agjm0Sj0J87K1+R97HCUa/EH7p1FdOfW1moW8s7IvMbWeddZb+yku+s7DfW1gwg3506icrC/mO8O9Ifssj6UBYsT1HTEJto/ieJjHJpkfdMpz1ewpckSFARbcVKjOEC8TryQ25H0aqZxrC/Q2JQFja5RBZ8YVVqsMtTrnOLU6JHAXaOXBBp+QIOzxLngOr1pbM902sjwjfMTJDBlAMOMLBslgglCRMAx9ROHZgohULk0FihI0BS9mXd+cWrs8SVLI5u6xrVC88lfK+gZ4SIb5VyJJ3OM1RnUy+R0MHFOE7C+zOlEXm6XmPW3pLpET41JHFgRilbd5oWny8GtQKXxDW85S7U8GGyN43BhDhcFQEo2aZMI7TKlQWpSBNXPjc1d5riMVH46RE+EQAMr2L2tO98oMeDOd9QRgmk3v4hesi6PEIY665XBKEr9rCvI6W4hkhfCqtEKSUEqGYVlDUq2Nlf/zQQg9nsXBt1kQIH1BzPiEMnQJhG30rEMZdOzXCI3oui6Z0BJnHIK7mHeErVpX3AcuIoo1ZyEbN6FmIVPI0BgELyKOMB7are09lSn001iWCoT20VMX6grCOJz0W0nfHLqQryVt8QThkZInQMZGad01eEJ4wcF4RWvL12CMXv5wuuIxoSH7J2U0OsxP/wB40vRxqk7R7IeTvgQjIasKO9WrceuQxkMfBr8BdTfdE+oIQOx9ceIFfuEy+UwN+00FYp2A8IqWPq5nxCPsyIrKfineX44m4vGWJrmFX93ivwsaLixXI3woapBUlRojuEN9XTlw8+ZyudjOmEXj0QLjsoeh39JQ7wlf1TIuaalbTrxoYD6fiDSNzQk9/7nIq/Ee4mKU9ENYqvCA8PE+HsU0kzMLVx4sn9Mr87GtfFohqbsgXzx3rhi+vz8Njm9wqd+Yi6iGofFvOY82pb+r+R4iUIX0qok2FyDo13lx7EQjXhHnOwo1aLwtpd4lZoIV3TlDxFocg/Lu2J7/Th5IGBGh8cf+3BKgIEfU5kwTPUN2MZUSSVMY9XTkjOkJAiNVSEzom5asKlX8sKULEuHMZ2sWviGN+HWfOwMBpq7WNzra16WJK6LGPTOmhwQsXHWDzv8seD4DwqYTZqBMmSkDYq6PHF14c1TESIoTwj/06rj2CPWzw7lTgB59+NAYIl6zPmGjv96vZvQHTUURCQ1SmAmP1mPWt/p/WMGVDyfZMtYDwNQN9xziEr+v9m4Xi/UJ87F1NSUBYtDFTZEjM1eGNHpLxZsSG01NHChMLvWrYnxt7S6ZRj4VRTmlnry0zv6WjhL2wmCHdES5iiE9NpxvhazEK10YoYWkMpiPMAkwD7JHwRpACCoJTgTt8O/1x+VPxQ9qTCN81MPfwlF4m04bKGnjqfSN1mhH+YuN7CrQCwrLu7InGDAaz/2BnZKx89C/ru3OOaQmRySapEOIzVzfYBYSVO3LFF8gEK0Jkxfw68GR7ehhcizONEP/g39fTFU3JgvM35bCxMOJNnW0IscQ/5n82uPXuyH4NOSXCvVq6WU1tiwBIXxF+ZWG36dhNGuYj89QI8bNH0sPADyralOFjbAXhsdmDEPbq9E4bWtrpOKKVv2OgJ0FYyv6fb0It0ycmejzCzOuvckc4YmT1ckKoYCNCiU4tMznCDw2UsIr6m7KHjYp3N7gRwkITmaXqzNMMaImJEK4NZzwyFU8pxyBcRtwMhDk3jEGYQZHuRYioY/vCMiFC/OCbFrqkLVVA6G9SCeUp6OULVoQwl8V3oz+5JuVohPwdvXeENTzpgdBBke4IH5Hd6IHwOyt357g60j06xitC6EMD2bHECHhi8vVIG+Hw2aBB6BFDEq8daWF9GrlXhA8rKA+ExewUCCE2VO6BsM/gfRbio94y01WNSSfdia3ZYo6OxaGNwYGww6MnRrQayqzHIuSvacnxCIf0DBMicyHE9NqnZaZE+LCKdkeYTFI/e9sLf7ay7+rJLfP1Aj+ERsVUkLryD0GAUMjvS6Wsh+NDZUSrijweIX/P4MWcOahjMkkSge9EitgaAX5TI0RQ+0kVY5ATKhlRxlGfmrnx5sxvTitmWE9aLap5LckuQ0a84FnNdISorZOWH9LiRjlxKFyG5RQOhl9+oQuhv34hPh8Jyyqext2VZuX8tpSqHslOs5jpCOESSctPECwXTMRBLfFx4BHiE97WU93htOzU3VGpVt6VK8lzITg80xGiwkByflB8uaU7TQ2KIxoioAi/MbPg94qNsen4MQcgRqkrtuVKcoDzTEco/rS9tHtjPPjFlVuwG5U3Je21MaD4ipb4JDAIvzQxb+uoN03044/Gzm1M4jRjKUZLQBFZthmNUHzpfvr9sSGhXvgJaliReNhIntDIhrTyT4yUtAjxTiC9BYSr6k/GYgpWJbHhnLQUUdMWBH4hzqOZXnMTYh9yipqIH/qkccHjjSlHDaMUBzRyVLlJgvBHK/O+gXxTRwJh211m1x2R3S1cl+lBMXKhqapnVjsVrqTENJ4Q1bQygpyE38nYY0vqYRPVq5H1aog3dNSn4hB+Yabf0hPg96aeaqyzud3x5HFPheuy3CnqkiOm1xmDDEZncAXYsCnC+vJXqQ3RBEWRLJ1YbUdmR1AhylV25blfdu9LGT0Jyl4d2acjB3TEW9gXrewXVvZLp76yctDXNu5R4qZzzz0n9+arv7Vx39m47+089INTP9r5zy3s2yb6DSMFjdi5px+KnuiOReszea0Cr5ecpNLvj8EFyN379VzwJVDeEHxh7mVHl2BF9VdVu/KL1mUUrk0XVLwhEyW2Xq7syl232HDCSPca6T4jPQAYFuYDO/d5lOLLSCX0VbTyMebWCy46b1HIDd9EKb6NUnwXPaqvIpUf2nlc/JqZfd3C4B8HssJr1yS73TFj/B0runMdj8bNXZXsusb3J4KVjgxisCab8Mdg4Cn6q4qu7OJ1GVDpxqza3RNeVr0r/+FnEvekqXutbJ9T/VZ2wMa+auffilK8F8M/wN926eUXFRE3fRDDvxc9+sXX0BphHxWugQYSFGvujSrBvU6pdLOjdoLb1fTkl6zPFC4r2+Lw8VkQbgS/4M4Xoq0CtT1IGfqlmp15NTty6/dMcVnd7oKKzdnPPRzTk63ti+b6nRqI5kcVw5ezt1x59SXzqZsHY/ihGH44WgGNOHUiLay9IbLqhTRQcemu7pzJb1fbU4BrILDx5SmQ6EbGbTZk7VGyBn8IlZMBUs323PKNjodWpWyuizqSp+uLV/XHqfrjlZXK26+94bKF3K2D8cqheOVwgup4ZkRHueXpp+Mr1meVbfhfeA/qduVLOyqEizvBb9bUznQ6F1XsCpiRgRCqqhoPFrbvLWrbU/j8zsUdLxXsWuVYURVZnKF8usyyY1nm8hUpDS9mVmx0eKhys6NuR760g0HXPOo0Z2cF26ahSlSf3rN/noTCZoOj3zuEF2W4akNv+YuHitv2LnGpde+SezryKjc53AVyd2/La+gpkHYw9++fh8EILV2zE6FrXUWxHhoNYWqL0UPOwyG8/r6wguHvTALn+uNly/YurN2aWweB2Y78hl0Fd+/5j52zsHEgCIJgmM+METwzk+iZMYNnc2ou87oFZhhrpBIYb3W9MHTTfxqZyj2uRUqdv2octgG2GcnO96CEEoojkb33O8YyWqwFlMPpJFJVjadMNxX5f6Ci56M8nHQcmVzho7qgRIESL5lJvS+haHmXnKO2H2G2f0YxfLjpRZa/hnmHQmnuMk0geDbxo5Z/3iz/N2AGPMlagcJDuQwDSfiO/ErA1GS0TEGpUbMloQHOIpOIIdCfqvo+V+y0l/EZqtD4Fd7RTWr+iTnUngXnEt6m5glLCiwdG+N3CQlIbmX35BB2ad53CW2AxctxJeR8NZfQAFQh4yoIuB82xu8SElPGpGQXDSHXig3iEhoAnTBYkDAEhyTnRbiEBsD0RzCBfdXG+F3Cx2wAViBiaWP8LiGBGJI7dKEPwS4140W4hEQpsVmEB0NehEvIEmTNhVzYOgJdwtPI5EkAPbCIhruElqBD3Wl0CoC83YtRL8ItUoQkuq15V5fQLun26IAEAAAAQND/1/0IwQd+KVSIQhSiUCEKUYhChShEIQoVohCFKFSIQhQS9JWIJfMz5/4AAAAASUVORK5CYII\x3d';var ii=['fbximg_30'];_setImagesSrc(ii,s);})();</script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;base64,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';var ii=['fbximg_32'];_setImagesSrc(ii,s);})();</script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;base64,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';var ii=['fbximg_34'];_setImagesSrc(ii,s);})();</script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;base64,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\x3d\x3d';var ii=['fbximg_40'];_setImagesSrc(ii,s);})();</script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAxB0lEQVR4AezRhQ2AQBAAQSrCHUrFvxq4pyacFtBNJnISXSNXglcj4YORkIQgIUgIEpIQJAQJQUISpp3GjUj4KiRMOh01EjTiVoN9ssp+Z5fHZrkuP2EjSUvCWyWrMWolalZhLTO7ZsGkthbF8S/Vtefu7u7u7u7u2rI41Nat3lVYZN3dcA0JceOdcIFSeEOFdhraPXMqm9zJQH73f+zupSb3/a1Tz++d/96+phvzake98PfOmWDDXBjcOOGHK/ox78+OtVf3LzzUPnOVdbhK66jWu6rTT6hNP3AT4Wl2hM04XKVznldvu6S+/56drheb3G829H/c0L1jaKl/LT7iS3jjFE4yCZLBKTaVNYbl4Qpc92PUuA+3bWC7Rle+bO75otP5TtfIY63jVxoGz6sfqNY5qw3DtcByE+GpFRy8U0VtWucVmt77zL1fdM9aRpYdC2tBgopSgg+jQjgdJugQToEHE1Qg7UGc5kUJ+MmpVIxk0UW4i5bBepqX4a4Idxmxd2bd5Jj7tmfuAWP3tbq+C/RORZqGobpNhGVqTkla9bZLNb1P7Rj4pt1+YNY75Y34MJJgeSQvTpTDOI3wZL0UwpyDHBlBQg/hBSmaZCNJZc2sN2pfjRhdSy83OW+0OOs0A/AZTjjGbiKE7V+tc12itb3cMaZzLOwdW1wO42GCSUtNARZNMgAGTJRT8OpPHCE4uqtYkhXzNErDnoC/PRg94Y22Tnve7By/XNtfrXXWbiI8XuXpnJcbHG/smeyaCyxHCCAXJVlELuchIiehVJzijpIXOEaCw/9zCEFk6KI/uyZCMKIkZwBTPLqe77AAPT/BCHvn/C+3uC/XKcmybhNhiZwHyrtUZ3ujc7R/NcyIKTAsi6fYWUFErxho5i4CbxAcRgvw3gkWGMloDcmLcAU8RnHhJAvAYiSH7kmKjpni5+OMkAmzogw412PknqmNN9qGrlAU6ag1bCI82qsN7ot19lfbhjum1lciBC9mXj0EO4h4xWnMFycpTkhlYykryoIsS4qngFoJk9PMJFiaXQf/hY0SImh4LHguokKWzd8iIVyJ3qsRYv+s981W92WgSL3rPNPwJsKhGsNQrdZ+l/6QaXAOdjqqTUBJspyRSJRgM+SyGS7B8DQvoDB4qkyQZIYXQXmgYyXXkiyK0wA7P9cG06WsJ07umd54uW2k+t/eGih2zlmEdSalub7JZPvx4NiEJwLZDjwrAvqICFgBxAHJL06xtCCh2Hj6TE5rms1mWpqXgkUVbzCtyMUQrh+YfMjaX6Ox1Z2DCEF852ttLzUO2peDQZxB8PIdIlkmTqb1IYDmzoQRNI9Cd1EwJzGKhwVBnPzLsXxxfT8k8nMIYY3OdbW2zzy8Qgoi1IwQu/6/JZBSZ9xkWcnHcaUnof35JTHE3GycANVudy48sBuGD466sxwhmpDVDz7TPNw978sBItnCmgXSD82jZKcW4wQJqh4EEhzK3QzjdFcDu3DCj73Z5q7+t6fWcLYiRPy29sH3nPTFwwRLcmJup6Pezp/uCkhOgCvqNMiRUOlAtYW2FxoLBDP9DL0UTvx8cOxaswuK1bMQISS/y/T277pcS6EEynwhpWbJSBHqS1AezqA6U9UmKW2MnGsZoc7Ki64Q/5m2ad8tZhtUaucZh88ehDBmvNHq2jW+AePNI5ULpvTXOWRyqvIMKprCFA5yxOnDC/47TX1bNHbUOFY8Qjgbutns6Jj2BYub9ASVZIVUxRojSACseDgH6cC5EnzIcHjLtgGgWNkIQX93bHc4NiLFozKU+RiIpZVsvCRHycKvhqYT8/7YW11jUL5BRK1UhFU61+07h0YCOJpjxUkunx9U6ijzVbrBl4AsHjy6I6J5EW5FWeGpnQNbttlAi5WHsEbvusniOLAYTGUNgCGKwC/BnEDZyQsixfDluJiuQLJ+Wgw2JJDzY1l+WZsLYvfpD6O8WEkIof68zupunfIqI02ak3MUlZkyn+REufS+lmSCYmdWvL3uyfbeod17bab2nnK88cBgW48beWuPe599zDW1OL/qj+IkwwvSKQoGFC9Cs8Tk8QOW0STnWA7eZeqDGrViEMKEAg78LKPrPtiS2WmZfHyig3i7EYi0drv+2t75jabho9/NH/xq/OBXU5le8JCPfrd8/s+O7zQNv1natzbsa+9xj86u+iPx8gM7Suw5fiGcQQfUPYuBm002GMKpHiHq3zUDX+8d9sSS2fRwvBSjWHLvwOh32qYP0+Q+/M0ECE+Tw8PBEV348ZM/rT/om5sODs6ueIWyKyzEDyJQfo3aMeu/zuysNbjVjrBG53ytbWg+gBVPrhmh1KtZ9YW0TQdAHx+UQa5sosavt+1uPuSIJZLl8AM1Q0Qt6BdDBPO3bb7qn27Y5epFCIdnT7aMjXnjIYIuOKTFGb6EBiF4/mFtB3gfls+jfJa/mzUN+zeC0ZMfjkNe5NDg7YjDnoYT47fbh6uhtAGKKkQI490r9LaOaU8YZwr6P2gKS/BjOWHn3n4UNlXiEGD/sHaVQRGNT4WC9wBDxDWMfrx5pKreAQWq6hCer3f+aVv0xcmC3RdNsqXPaZc8gS//3akqhODv/2r8a2enLxQrR4sJ+sgEDvpgPl0u2dfCl2xDBxpqQghTtBdbhmI0R7ACSuNo3wUJmi9Z5kGNc9AxqUQwNfFD/uGvJkPLYZJhy0iKKWgq4IXg2T4Yof3VvlS1tR+EqBaE0AXeYHGPBbC8ExkOISQ5IVXSOF4wt3UjCarTDzvHRenka1SWF6m8ThE6YoIVZwOJ+ywD0GOoBqHO+UPvDEp3uQ+K0zz4sYtvlvt7RxfkHnXyg731XX3D8kagjHAqcxwvSVL+5o4k6bYZ/yU6e61BBQirDUN3W2yjG9EoyZYImiUQ/rm9EzVn6nT4bJb2boblTj6cimI4Eg1jBOr00S9QeTEKhuBVGvsZRqi0OPU2nX0m00XgdJzi+RNpjXlBtHT2fqDiQPofL2fh1tTfhvF/6e3u7u4ywaZXLBjd3bEkFfghYIEiIOtuYsXoHt1w3psd3Tum8sp0nOtWus7ner5PH3ZJQ1pli9bmWF7bdE3N60fcMuOoxDDil87mdE7NbZ3JeHHZqzLanDNLAdPi2xLXwo/rBoOT/QtGiETwcovcNrW0EJAI4vXd81C0OKfSqu+Hk2K9z9d+1PcvFD2sbe3JF3agjpNU1hgobnljrvAzYefLV1obVuDeF7VZR50yjdE9u0wOCs1Ba9upvaYv1vh7iheOELXQ74uUZC37rX2U43PVMnqketwa3Ohzp+GkiqH3fG2JmFX9kNFiYFW2fwxFshqH/8nc/5RKoHokIUllTdUPnplGx99ZN9/c3pGp9Qq92T237F/bkLsXfnJiiBduhf4p+svN0pGZU7U0RKEoxBDnvBZXN4vquz7cEAEsu7mrw2V/NjfZbh/lKVR4k+O7v0H82DVdib2LTC1BbTEyCkXhPnLJEl2f0rS7/45Q3D05/XJIodRbPfNe8nYhgGA/M325VnrRCEkT/CZPKpYNg19QGenc9X4ytege+HArZBWJi7t6VUe7IziHCcJIHEu21oRqdWrtA06Jn189q6KV0TPHMhAsM0GX7ETl32fk8y4giMXp+uiVBl2st+pQ+yq95cWgXKm3TC2sbvqabralzR8Lhr5+8Qix5/73RonltBdELXR9J5RZGDQH0CVgl57HCps6JXvrNoKwEgT+HyYIPXHU4bSn8VpfH6olosQWHUtDsEwEy3jyf3Sj/hYr7wIo4shNrWySG0eO364GT8+9UmhUWoNnaprMNPAvuc/2hRrJhVuhQFkrH8M54F9YgRCXYnI+NIStPdJz+UJuRXPv8iyJkBReNxHHQrWWU+ZzgRVtjBdekh/EthCU53NXGYW3QbGAfwGpSB7/M/fUXPBfenA4Pu6x2+0ul2t+fn5v/6T632kc/3IlOhgXiBDL779tkLm9WygaoYXk3d5DJwUgvcjlQ7q2dnYRCJwrKAVvoVoDZoEUYYtDW2vsmgZmfh2b38tQHPkR4ixlSDdupPGuU9PvJhczCgUXkVA+GtjaCU421tbWnE7HyOiY3mQxWEcm55ftC+t/rh9CeH9xCDHXlNRrwkJE4HLX1l7oyysm+3h6zQN2yfkKmBn1nw1srgCbNUBwjQWPnt5LymPy+1g6IhAhU759K0N0NSH1RmL23aRCRiFsMbz5aHJ5k87qCHb8e3uW4ZEhhWZAoe6XqRGjemYXCyT2r9SRU1LhRkgGMnxZm34cYUuoyIKHLTpeKFjn4UcKvrOyb1C+tz182hAfepwR9LR7+W1M9bEfIRsRzSvvdU7F1YSUG/SsezWdtOdWVnV7uJ1iXevT1fV14vQ14hx/KVMNyNWk1EZrt9H1raq+C0KIojaWAlXOaXSRMI6Nya39jyM5v7JWXN/ld4RBifPZ9whur7x3oM87b/bBg8YIYnB+8TY3F7ToA5uBvjC+e+JyfPq1hJS7/Cf0mV3WLkHpsTIKBGFNM1IrmoaUuoP9Uy5mYdkrUetgguA3qNAMKbWDOuvl+wqsgF8IQqE6/qFq6mTa7k05Zm1nHblgqJfK4gQqH8ITYImFQnqBAMLNZRYJ8f6zcPpsN13cVvKkt9VulXhXdPs78p11VoXgSnwqpc0BeK+lJe4Ud12KYt0pbGRMbrOOCTZB0CY2oovvMwrCGKPidGnq7JmcmET8GRC+HWpMtn6Z6oSfSidR6WUaE6ttkJz+Dr8vFCr5UltQOo/h5dD4oUZa391PBjL0fN5NdsG/49L+Fs2F/h6TfJmSEZGYdyupMDqtnJJdA6jviFoxKFUopGZW3mHnxOeUcQUNdUpZu3uEWlB9p+QRU+1zh2Yirt1+JSHjKiUjXuJhHxInOiJYh8S9NkkUt5hZJAgbwvrqpm6d0bS0uPg/iseE0zM9ID/hN6TSS9RGucbYNKj7Pn8IlZrwIsSzV34plsndi0EP7EGWGhrC8Zn5XH47y2dqt5MK/x6V9Pdo7j9ikv8dn36JknmdmRvJLridVBSTXk7Lq2MWiZCwnyq+oOhV+5BT38tp7qfyH98qbLrGLbvByq+VSzqm7MyqFsqjGbaVoPV7I1L4/7nHulPQnDh/zIYJkhQJgqqausEtiU4tSSwUhCnTz+e1KjTacbd7eXnZP8a3srYuUeuBEPwglE97FIaflT8OO8KviLX/rh/EI5KCijKHoa4EojpKnp8Q0jVKbh1MDfVGfzWSU/aeu4OyJO8xq9/JcmywV445WwR7i2CtEQzXRlzvWFRJE08+1DE5ym2TJnS6buW0XIrmXIlJimuVcrZhf68RgmXi2FYEt/wmKzc2vSyxSPjpEZY2pFU1DylUbrdramrK6/WStogum848OqQygN+Q6jXFf9U+xaNtwoxQoMx4Ycam+dyppdyd0AiubW7XtPYE9ntJnwd4MLtb7PzbnIL4rGoWKsjlTcF3p0vD9Oyyd8EjQMc+7RNU52ZCu0xg0HXOOJlV4Jd0JT45kpKOh9qwd08jHNmITC6/zc6NTimKyyhnFgrDkVoMyJTI5WdmZmZnZ1dX10hbHHN6gFCmNaPepjMPj4w6SgcseIoG3GG4ECKd+JZA3qR1g9mb5yxtYWVwI9RYxuqaTqlsCXJvQEjJqf3l5Zjv/enq9/987Sf/uPWnm7RbnHxW8akiNfPFKHvbB+wwWCQb1jqRKLULjIaHU2O04roIWuYNWkZ8u+yUFeIgVU5FcorvcvKB0EexglUk+uQIB2VKWOGc70JRZt2XZiwsL1tG7KMOF+o1E5OTszPTPRb3V8t6v1GvCxdCOMIfCqUqxyQOgq39I5RDsWCNwTqMh4TADx0ZDN0G8SMRJmTX/PRfd7/1u/9A3/3j5V9dirqXXHzqM3HGVj1gyzzvowhIHIJgzh1GV3fylNKHsMUyUSQ1I6qsnbX0BiE+55CI/UwKunc5BeDnpwin+2kRvpKrPR4PyW/Bd21tbe3u7sIup6enpn0XXjM4PH9oUnxVGLaDFKXtv7Qo570bp0iEuiu0tLqOdJD1PoT/vvvt31/65aXo64wsRKrv9IWcqlbGMxNzapdzAGABAqEdgja8eof35HJCBmoxPIW0c8bFrhTf4pYyTEscH0J8JsO9diOzLoKeGZUMeH4Vf1pbTEZqqNAAIQlvcXFxaWkJoQ1sEQid7vERh8s66jAPj8mMwxGtckyZhgsh9j1jHhl3P9FOp1RvC27zBhykf7xJ/098Gl7hvD/BB0VkXQnVHQlPrFTbNM01S3POUsdmKVL3XX7PNXbJf6LYV2I41ylpd7kFArW8a87NrhDFtso4uz7b3SJimiXXqOm32HmB/KJTS2PSShOyqj7VRA9WcCRK7cSEJ5DfysrK6toaDlKFzizXmeERIYnWEv3At48YLisUqmnd6sWNPcwpI4tAt+vwOEQT3Nk7QAkYgcz7xnBpeTwyqf+A3qEoJq38emLeFVo2dJmadSUu5XJM8jV63s0M4Z2shtsZohtJpfdSS3gKSeeMg9vwmDG6hiOU0j8SwS6MoGdFJRee5leGuAaiZFd9vC3ir0DWpNQaJicnwQ/wSH5eaHXVMuaSaEyAR0pjGua0DX6+6hUimnAhTOmWz3r/193F8sdaSLEMVvuy6lrP6C4B3nlK3uLYtJJIWkYEStiM3KjCjtg2O/XlBkNyANGH9ml9a3HNlpiiFthi57Qjvc8U32OOTC69Rkm/k5QfZH+A51cCKBaLPjK1r2zu0pvM8Hl+frhWV2GEa3b3lJ+fXH/SuCjoHvpidTgRFj6RY+IjaF8ihOHK53LTp86gxbjjtzNFCR3jTNUx2ZpgmQJkQIK/mSAY4qs1XXMuTnUj+N1m5b5tf0Gi5FR/DEWcKC2P+kZHx5BOrLy5kB2CH3yhZ3pWrrOAn0JvURptWpPtvsL8fZEMD/APC8JviVQPTZ7ANj2EZ+eE0h28/+yTj6zhRifU9DLkRyfwjO8QQDIUBL3LJbJYu2ZcSdUNUUkFQfYXpPjMivjMSmpuTch+Ea3pZ4MKl9OJU9TPjzTBzc2NmflFudYCiuBHIuzSDP9YKPlaGBD6dnfFij7HQlBpLYRHpRlG3Wnh2YNhlzYmPjCy1MT7KKLYlqghaPwBvkLaPT+eymuJ4sIRvtv+wA9CXANRc2tDsEU4+yJhh0ZvmvB4Au2PNMHt7e35pWWFwQp4pFD7fqK2/qS2P1wIfyKWDziDEaJrf85NkSOkg2GbwK9nlzczHhhpQ9uk2flFQmVIt2ObjDc4pfe4hUKt6oRiXVNMSunZ/EjR8kBRfN7qWvvT/rGxMWSEgfYHfhsbG0C4tOzVWEYCEfZorD+reREWhBi2QJtQ7lrAE4BQYPNr/5y1tbmltUJxZ1j3YE4yjYruuBYDtWeZ2rdJfbmF0Ib6dDJaJLuZ1XidkR1Bz4AXBCe+Qv54YTxD1BqbVnoGP0p2NSlGfh2c7ocHMuUNnZiu8ExMIIoJtD/wQ2q/s7PjXV3X28bkBqvCJ6XBOqCz/bLqWbgQ/q5BZpz2ojW4tr3n13kL3AqTHdEm/jy0Q0mFp10ujMuqiUyuuJ5UGZFSE5lSHcktiWBkXadn3mLlRHEL4P+ikosTsipFOvWjufE0XktsWtnZ/Gi5NfS8WtTiP4QijplcXusrucbpdMIE3+YHE0R1ZnV13WZ3GYftJmjEbhl1qIadv67uCQvCr4o1f2pSTLx5bnzI3cGG7v7kskbUnPwK3zxnQmbFHXbubVb2bVYOXkEhNCr5VPyJ7gQlp4qvVDxe8GTWt8WeyQ8HKepE0NkU2SXk+FobmvIOpxOVs3fy2/FdeAUlt9nZOQjX0uKCe27pd7wXKISFC+HkxyHEE2Stjimp1jagMp9IbX4uN2Tz2tgl4aKIlADMTgv8SvzxJ4yPklstUCvLel6AaHzG/+EXRDEIHtn4LMHKpFTtcDjQXcIR+j5+mIPC/yjZzM/PkYUb7/KSZ2ElXAhxkP6+QWadX9/3Pbrar+NQR54gXMvetSJxZ/h2YnCjkZ5Hpxaflf/BFrOrYjPK7nKL4rMqz+BHg/LqqD755kLEODCZJzrBmVrZXNbY2fV8SGu0OJ0nraUz7A/8Dg4O1jc2x9yeUZfH7p5wjE+4PJNG59Sva3rChRAPv1G6F5AXYmrGr72Pm32aXvDmCzrC/IgZMWwRFM/I32F8cT4F8qPm1IAfPb/uNT/U/IoEGVWNGdXNWTX/Ze8s2JvMtj3+ka5SbNyOKzbugs6hDG5ncChTd6fUS5MaoU01ST3u7l6J1GXkuf9k9+4H3jIZmiaM7mej9feXtfayvVZjWlnT7fKm3Gp2YV17+T0Oq5MnGBUiCmOC8EVjaZQf4M3PzwPew/xWUQT87behmVmxxiBS6bHFKoNMYxxSGJNozvz5jmDI5GXk61G/vRmEarMT90iSipBQBJLH83uy8w/75O2yzIqmbt4wf3icPywcGhMNCyUiqRw2p1anQ4G23W7DyQeV+Fj7k8EPIghNNB0Mjyt1QpUOCCXqCEK+TP+Hgs7k+IXVktdK+vs0zOgMxHAzCPliNXIxtEAtybJYknrt8fGXR/lB/oqp/NGNtMmdZo5KrbJaLQ6H3eVCmtYFZr6oKQJyNP7C4Lde/r6JLpwjU8GQSL3GT6I2KrTmPon2tXxOklx7ycsVAq7WwXDtN9MTdmFxqbCuDeXxqdcKoKZgyAFkUikiVLZx+aO74h6nR6vRgBzOOWAj5LBI/ojBD+v75I8ghCL1TU6JVDp490Ao1ZiAkIsAW3FPUhAidv5MqYAtsT5ylYkMlIh3GSyOPftPoMDi5X2f/v7tQ3sOnj1yOSfZsohQWWz5Y/CjhsylvJqBwRGEWiB5D+ffSQppvfzF4PdtdOFPt29CHJU/8MNW6S0cofbl4mREZ8guH6kSaCdnFhJSQUqGe+ZWNr72+mfP7frg+eh+7c2DH59Ng4GXbIobkz8gzKgoqW+XymQ2m41qTsIvDvkDP7JsTh+sGIJQpjWr9ZbGYSUq87cnLeUrvNLQ4w/O+WcSUL5GVmh27uxXxX/8IPVPHx77y0df7Dl09pOzt2GvJ1sWcc49ofzBBTydXnm1qK6XP6LT6+HqrZc/RvyTwQ9RmPX8otVDkMJJuBN6i1Ntcij0VrXBUtEv31EiSB5C0bHqLtf0LLlcH42RLkzOwTnczAiPb9LKm/YevvjhqZufX80/lZ7020bU6z/9VVks+aM7o+JSfm0bd0CpUtntdiJ/tISCwQ9rPT+IIIMfDBmCkHz4dCCIlIV/chqvjayOwf8u5CUx5ftRJdfiD0XGQi4so1cXOuCuxlsFTK9olzV3wdiL2jLMZH2yKeLGbwz5gxePqx03ShrbunkKlQrRFqjQ2PJHXcDY8kdvqYWiKxwORdnPzoTDl5oH/rOQn0SEeysHnIE58ipKyELUtKFz8Klho2EwUip+Hho1o/xklB+A0Y2ictgvV/JrSxo6+oZGVRo1+MGKgQqNLX+UX2z5IysQnjXa3TaXF+p0Ymoan8o3FThYL/ifSPmTJFl1pMhGqqyezZNjIMQDfWr8rpU0ZlWxEZi9Xtxwo7gBoZYrBdVf5t39/119rbg+5y6rpqVrQDAikcn0ej30J+QP/BIkf7QL6ySsGLneojBYlUabzuIYU5t3VwzgilryqrklOwr72keVpFkMRoch3zuz/HVwnrar/KkjhPxlVrF6eYN9/CFuv4DbP9jDG+rmDXb18UGMyxvi8ocQfBGKZSqV2qDXw/5kuBCx5Y8ijC1/pL2AyeGRas0yvQVbqrcojVbWgOjVYpKyTw5CKGhU/KffHwtER4gj0uYnZflguPrNz0QKq2+WNvUJhvU6LcRLh63TaaMLf9Eb9AaDAToTxfMo+ySRl9j8qPzF1p+PDWuAGeGHLTdYNCZ7Fpv3P5kPdtRIk3st5uDdHi3sskfvF6JxVdwI6x8I4kNIbj9tVJGiRxO7sx/8LNFljS57dDmjC8EXeA6Iv6znBxUaW/7Aj4bQmPLH7CUflunMa/wiImiT6ywnGnj/WzgAUUnm/cJq6e8y2QMy4yNXREMYg7YQX8YCPyZmR2yoHz6UITZyxZl32BCpeO6/N3EUKjXhB1W5nh9D/hghtLjPP7rw/2Zo0ShCyJ/SYNWancNS7e5CDuZYJvdy2vZq6bP53bU8uS86OJ5uT0SXxhksnQzO3m3vB5I1QxHVGN9jRiIz9+/cmltlTcjvcPpwvVLG5vIvFdRvVHZvlTYNjopQGMjgRxDGkD+s2OdfbPmjC++otTiiCMHPpjLadWZHi0D6XGZbsq+IYku2lQ2fudvpmAoTXUoRhjYRaZtfXOaNy4vr2zMqWUjFoXXSl+gwSHY+qjSQomvMrmqpaOawu/qHx0VypVqvNyC5ozdbcmvbN6pO8TpoaO8xGI0OxyP8nlD+iAhuyH9gLMD3+CcsTg9Agh8676n11py2wR0YgfB02iXszW+XGFyPJA5x0TAw+/UmGiDj5zearfyh0V4ebEV+V58Amzsw2M0f7hOM8IbHxoQSxEci5oYFuR4HZIUkdzi8ccQENmyX3mFJ5Ep8noflD/xoCiI2v9jyF0OFEi06MzsDLx6fCflCr38KXYelGuOB0rb/JQ27k993RvJ8bmdTn5CmLMjAaSShEC3bZGWN3+cHpDVTUa/D340mo8UMambcVaf5OYgI8c8Q1zBanRl3Npz3RxgIjh9OQyp/hN8Tyh9CaPHJH7FFPd4J2EREFS9EF0+s+WshN6Uy2U1LqGtRyLtU1233B9EGGOo0sLCy0d5rMV6heHbEyiAi4o4uKhxYlF/0yUaswybuIARro4KYdYclVahchN9G5C92Cgkr9kQAq9sH5Wmwu53eiUAwhM82PzdX0M7fksl5Sq2DSMpiV9Y9hBIQ4mZ0j00IRTw+ckRR+3A9P5rcWVyYH1forxU1bFwQa5q7BuwOuzfm+YevElv+qAjGlD96Ci6ojDZspdEOkDqr0+WdVBts+yu5W4oFTw/h9hrpszmc2j7xw98x/oacRXhxOVEUGfb9en7ksS7Mz/unpgsbOHEI4u3yZlx4oJ+f8lvvwlN+G3QhmCJo90wgqQR4ZCPHpDE5mnpGXs5ohS36VJtZbisfOVzSjt5bZIwmLsdgvCSUqmsabSxWNk8RPy2eXQx+jMr21r7ROLIcENyatm6bHfdvGfLH4MeUP8JvQ/KHNb+wiDuhESmk/MxOicr4ZQ13ZxHvKTazpBOa0lntg1Jc90UnNhyKa94F/MXADIpEE0IRjy82PyIWq8vLcp0ZZZxxdPdGUxiUXU9ABKn8xZfC/eGBFRBBHxVB8MOGIu0YGH+jgJNSPgot+lQR4uttLRxILWnV2nyM9uru6dmZBaJOE0Mxtvxhra6u+CanM6viqUeFOs2926o1mAEvdgkMlb+Nnn80taQwWKIiSPm5ZFrT9dquHbndT7+xM7YEuadXbjc19o4jzE35rWXzA7OIxCeKIpQYgx9DLPBAoemqO/rjqAonkaDmLr7H6wslR/6wSJkMRJDy05gdeqvrAW/89dzWLWTOwVNGSAXx8/xGlcUzwRDEwCya3ifQTMVDZPBjPFM8o85BERDGl0S8UdLAH5PGLuEl8hcHPyx8HlwlRGoXkqeKHoFEBG/Vdu7MfrD9Rxw1AkF8Nf1eLXfYE5hjjKqALiUaJlELT3D9Y6VhEbwDOn7EXbcB9jk1bWjEREvQEiV/JCIKsSYu/GQwZHX5wE9rcbb1j72Vy6YRmaeOkApiCX9/PmtUZaYnIqybhDuLtNiEIX/Up8ZbFTrLZuYgQqM23O/3+PxzidOfJJtmdngd3gmEYpainxDnAlx6scb47zsdO3I6t//oY7cgiC9ltec192GUDSiiJorQo5MZEiuLeI4M+aMI1Ubb9c0gzKm+XFDXKRDhHEwUPyzPxDTSgWqzw+byBSCL0U8IB6W1b2x3fkdKGTFEf0yE2BL4iG/nsLrH1LQckTiLcytfe6Znw3OLiZVFPEfyTBkGIQyE6yVNBGHc6vRm6T2pxgCECeE3FZyJWKEm+5r9Yne7/dPgp9JbT915sJPmJX5chCTw/WLRwOW7nf6ptSmU6NaNwCmxTt3TiNisJjwI97D8kSXX264WxS+FlCICPVanh/rvMUPYsWNpi2oTAmk2wg+HH7be6kY4pqC557Xsjm2VQgjATwEh8fSFf8hgV3XwYcXMr347+XB7oeA8htssY5xoohfjaQ5JNYmqr6lu758OhgAvbn7wVXUWp9JA+AHe2sY/Gx8I3i3s2FIk+AkNgiV2zfaykQ/yWtp4IngUDGffG5jzTs+QVFSSFg5dTH2CDCUAYTQVxeEJcSBC2kFuo/wQ/DbaXQq9BcCAjW4Yop0C8dHC5h25XDLd/ieEkKjTnfnd/8pt4InVtE8b3YidToTmcUAmaalN8RyEj+29T/55vaRRpNRhOMEG+ZFYth+1TAz506PdmlRzq/r+H/K7SKXoTw4haVj6YmbblYo2icHOcPahWhc3UbsfO/ZodnoLGh6A34bI4XIMiriPXis4fCl3/4V0ug98mf2vqwW4/ZR+hw0rd0P88M7wKZE5MTo89PzD1tncYrWpqKlzV3bL1jJSrP1TREjGcQn/ntOW29ilsflAkfKj02HBkfw9IQthvDGFIQPR0dzqJySHPlwn00oxOOH9k9ffOnppz8Hz/9x/9p/7zzy8dx88/9bRy7ipc7O4HiL1xPdDVhEHhBcP/y8UnsELi/JTGB04Xz/IbtqS17OdHIE/UYTE2S8d3PNVXRm71+iexKGIzonU0we66dklz1QoIdbNzPxSB0945Yd9QQKv5kx6xZHLeSC37/DFXQfO/uOz09gMeHRH33pmz6Hz59JLNUbrD4cAl5ZRUa8129EpNuKNoLMToYiImtl1jzt0tLj1haIB0uLwJ42QFCqm5HLfTatp6BpyTYZpSQb+CC2sRlMZM+7J4CbTik7/dHUHDyMQYvMjBxsuLB66lPPOF1d3QeaAZx25GCD/9snJ07cKXP7JGN/M7PyC1mJHwgvnn9nlDc/MEorh2TmLy4d00pmSlpfyuraRAQY/eYTEtJG+UMw7UsDm8EVwrIinT/iRjZiqzRuYDITjm/qvs3ry6jixGw4RfrjgiUkl0Iq7Dp77R2xgMSh+eupCZjkS7o9vMh6aURksyEJQ+xMVaaC4uoK1PCJVXyhrfTmzbWsFDcT85BHSwNuLhX2phay+MfkS4rxLX4Mco3rY4pnCkMbFlZUNzW4eV5m/qmw5/0PCdy67CqbKu8ev7doPnQkYce6/f3rq75+dRtuaIakaX53R1dHln5JrzYp1/p/VNRGenRcp9dfKW165fS+FmjA/G4SE4h3hS/ndxwpY7J5RjHQns+8f2aEFq3caVp9/KvBkvWhX+oVqxLLBL8aZh/L+1OuFH5y8iZOMYIhb+LDRvLusoQ0jzZHOX31oANpq1HjRW52Iv6z3/1Qm5wOe8HIZ+5UbdSk0F/EzQ0gpFvR8nt8MV9nknsKwUQZFtMa0+YMGc+QOGB5KzIrvFdy+QPn9en7USTgdMVhyPjh5Y+/hCxEM8fLD+QeE+8+lFVQ3C2WqwHQAUW9EaujcM/QdQyEBjE8YoAz/AfyURgere+hcUdMraQ1bSmgU5meJkMTeRC8V9R8uYFW29KqsPoa/SMbH4qGgugI3w9xe//fFkSUa5JIaMBoP/TDoNRrMOcC4rGM3iw9fRq/KtDdTr+w+eO6fsayV2JbLKajN3YfOH72SU4UuQTojajFQ5okzjSrQ0MyczmKXao3oyQyuWJOBoM7mov67RGepvz9wuqj5la9YKaXDhN/PGyGh+GLxwKE8Fhxwsc4K/UkjcJBLOsHSZHV0DQyK5eqpYBje9HoXQijXFtW1nb5VdOB8+jtfXH8r9Som5b117PK+IxEnIYIhXoX5l49P7jty4bNzt24UVOPCjdZkQfI+UpXz9Sr9PpC8sDm9qJyXaAwIfuKONXmfhcUFp2+C8BtTGitY3ccL7r2c1ZZSNkL4/RIQkvDbs4X9b9yuSbvT2jeuQg+pKMXFhdVvaHIKN9zQBKmrP3KPQqExTAVCDIwQUKfLPTwuZt3vzi6vPZNW9OHpmxC7qNERkSEiRvj79+/I+/z1k8ghR1yLt1MvfXEtN6uioYXLV+oMXn9koBJyFKQSgPaDt7t9cq0RbX6I5Uk2ErkLC+gMu4T8EXyJ/jF5bm3HkQL4D1zYn8R++eUgJDZqSkH/PzKaLxU3s7pHja6p8OLXFBIKw0EU1W+4ft4rGO0aGOoVjGBuAxp6ELeEhiAD09O4kIRGaDKlpn9ovLWzt7SOfTm7/OjlrP3nbn148to7xy6/k3pp/X479csPTlzD/J+jl7MvZlXkV7Na8GXGpRjZgjLuWRSGL60dePQVg4Jt1ELZHS6p2oCwJy1eIvkjHHuT08GV5WW4EL0j0htl997LaHixmLe1UkT4/cIQki3ZWjb017wHJ/KaMPZOa3GvpWa+/o6qVlCEjww2QNjNi4DU6iPtyfF6J9oVv6POzLd2BcIHOwiXBI0mM/oRiqWyvqExTq/gfg8fm9PLf9AniOz+QezO/iHBmEiq0pgwJwmF8D5/IBhAmQXiYbCkqOrGHwi1uLwTGJoMoQ/gJROxPF2P8luzXEwOr9bsqOfwLxaz/pnVvIWUExJ+v0yEhGKl8JnMjo8yG29Xtg5KNOG5SLkNRPDhSlRUdw0MC/sEo1CbWm3kRrxcqZJrDE6PH6EQ0rGF9J9YuwKPJx1ZU/iF/0NpL2m1G1irDo2WpoXDELX5aGtCON0knUvJQeagMCcCIaPNKVMbhOhXr4bL4CV3eV2+CQY/QJVqLS29o1lVrQey6v6Qz2XEr3+5CElysUqMsoO9eR1nCpvKWd0Cqc4+GYLjyJDFgeExNGm1QmlaLGNSee/QWN/gKG9ELFFoVDqDRm/AvQvGFfjZWVI/OLtAr0A8Wj+B/oPYpIsdchAowVmIXtjUm6wSFeYNaNAgFLVJ8uj9W6RtA6EwPg8+tcHmBj8CD3/pHpYWNXAwU+G9HNaOzI6tleOE368BITVwoFRHX8rhfJBee6Wosaq1X4SQ8PQsbFSA9Ecpakw2o8lks1r1BuOwUIr504JxKaYYD4yI+wbHegQj42IZermCMd7NbIXe80A9+ibQiQdgg1GiQDqD0DP67yJiCRsSf8dbbU43Gp7pI/4oRgh60aZeqNTDWqH338n9aSXsTv8kEELZuqJVoChk4otUd1v7cPIdyWe9nM5OKWSWwPxaEBJxhL+Rktvzt+y2o3lNt8qa6+/zRRqrYzIM93FiZgkzvaDFcEsNnXf5YxI6fzq65QKhXKHR4+oobiOOShQ8jInHmPFRUXTMuHRMLIejGaFrNI3LlMNi+ahUiQnIeCmMSOR4/2GxEqMFoh2Yg+CkMNoA72F+5Aq1ye6BKoXihTgOSbXV7X1p5c1f5Db+M4sFGxuxC+I5/EoRUpDQQjvzuvdkslJz6tMq2OieMKwwWn1BckyhB7lQrhaMSyi/tS1WQoxwtdPtdmHa0ZAYnBQjkrU9LleZbXbMK7M5XCKlZgRjAuXqMbk6csip9LB7JWqT2mjHZQ0ckNDFKpON9A+h/LBhdmKjx5baYGVzh9Ir2Sdy6/dlNO7MaN9aNkKF79eOkOrVlNKhZ3Ie7M5sTs1tuFrcVN7MHZFpJ0NzSPejfA9zGkHoIYTgBEgOmKZWhxNeP50/RjY42Z2RrmkuT+QmO/pfY9P+raT/J/wE38QUdC2OOlwyIvyIw4Df8daBcWUdh1fcyEGbjRO5dbvTap/NaPvfIj41O39DyBRHAnJnNmdPNvtITsPFoibMfKi5z+sXadDFmzcmGxZFFCD2oEgxLtPA6IdjYbTaMXyM8HsEoSvS7BwtSGQ6Q4RftAU25YcNkxLOAxBioVRXHS34lGktmHCKJF/pvc600qbz+XVHc+pfh+TdZqcUC3Arj2rO3xDGAClGdgYnzUuZrW/nthzNqsUIua8q2AV1HVUtPVBoPUNC4AQP2C7wIDALF9OOoCEZCB0uD446MJbrjPgnlT95VP7QvE5utFrd3lA4YsxaHB7ukKSxkw9y6ZWsywX10JmwNl++3YhWO7hFje+KwvsN4ZOCxEt+a8ng1vS2v2Y0v5NWfSyn7mJBw/WiBjQ6z69tb+oUDIkVMo1+RKIUiBSjMhVqztCtHL8LlTooT4/XHw4F4TmqjRY4mvBSQE6pt4LiuFI/KFH3jyt6/6+de1COGIACKPpPta1BbY5q27aVZG2Fddf1mt9U29abuevN6MSyeY1WD60/YuPbEzxyEFO1Y2TlEpmFbMRghgDOQaDU+SY8ILxhGSL3Bgitfuz9kyVl3CxTiG5WLVNti4p+DB9mEyfzugXRCiJf5xFbQkYjWzcot/dw9R6pOVDv2w1ml/bQQeuOCPUBoTnE1fuydaOA0bFx9byYmeJTI2x8gIW3L8pqFlXF6HrcJB6JaEL4Zn+B5UPkgPAa8mK6lLkDTziXtGFL6hS2PnuBzp8Qlc3KWjCqA8U7z27+NYQqhs8aQZUj2EkXH08aQBXdiKITVbWiZD1Cl0yKc2ZVaZgmdG7Nb34rkG8+2ci5WFW5xgPCz+BUeIPPNkX8+WZfzkEQ3xQttcdKbPESa6LYkiQ2XSc6eb4uUWxOkFjiJNYYiT1C4vDnHvrxTAEi2+l5zArvV7EB4R3Oiwn0uqAnC77uYvCbmwdACAEhBIRA+PODgBAIISCEgBACQiCEgBACQujvEELH4owFDyM6n2oAAAAASUVORK5CYII\x3d';var ii=['fbximg_42'];_setImagesSrc(ii,s);})();</script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;base64,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';var ii=['fbximg_44'];_setImagesSrc(ii,s);})();</script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;base64,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\x3d\x3d';var ii=['fbximg_46'];_setImagesSrc(ii,s);})();</script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;base64,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\x3d';var ii=['fbximg_48'];_setImagesSrc(ii,s);})();</script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;base64,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\x3d\x3d';var ii=['fbximg_50'];_setImagesSrc(ii,s);})();</script><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var s='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAABUFBMVEWXl5cglvMjl/MmmfMqmvMtnPMwnfMynvMzn/Q0n/Q1oPQ2oPQil/MomvMlmPMhlvMsm/Mrm/MmmPMvnfM6ovRBpfRHqPRNq/VTrfVWr/VYsPVasfVcsvZes/Y7ovRFp/RQrPVbsfY8ovRLqvVZsPU4ofRGp/RVrvUnmfM5ofRKqfUpmvNEp/Q9o/RUrvVIqPVdsvZSrfU/pPRDpvRJqfVpuPZ1vveAw/eKx/iTzPiWzfmZz/md0PlhtPZ3vveIx/ie0flwu/ec0PlCpfR0vfc+pPSUzPlltvaJx/hzvfeaz/lfs/aDxPhitfaPyvhktfY3oPRIqPSj0/m13PrD4vvJ5fvP6PzV6/yf0fm33PrL5vvY7Pyz2/rR6fyk1PnM5/ur1/nT6vyy2vrX7PxMqvVXsPUunfPM5vvZ7Pzr9f33+/79/v7i8Pz6/P7////+/v4CHXedAAAFHUlEQVR4AezOxQGDAAwAQCwefP9d+6s7DrkJLlmrdIWidRGtaEUrWtGKVrSileUFILGomQoTQpFny7a8BLGnBEpfppUD21sM+dytCsS+IFDN16oLtq9xUc/S8kbtJ9r45C0HtZ8p+LSt1v7UTtjqxP4m3UQt722Q3qdonViloxyIgCCKogkRifoiAAoNAMD+9za/qJ7M0H1WcJP3VAP4bMf1/CCMYoyjMPA917GBy1DlZ2nAk6QZQ4plaQIcmuQsRQcqL0r8rixyIHRFZpZFB6zqBn9p6ooMacnLauGu6xlSFOs7uGllZQ0kqojxX3FxDxvkZJlwMzJ8go1wZYpn0appxqfmiXaJZZEFlxWfWxeyo0AWfXu34TtbR34vkGXBxR7hW+UOZ5ZIlmLA2bHie+sBJ4YikKXDWY1i6g/ndaEcRwwEAbTKzHY4uWTCnBSZj8fMzJaZ2f9fFM5ppq1dafd9QddK2zNSfZ86FszBborQ09vXn83lC4V8Ltvf19tDUbphPqaLVR2Qqlgq5xnky6ViQK7qdLFa1MV6RQ4D5UF2GiwPkMsreb1aUsVSW98Q3TWc5RjZYXIYknth4ljYDSMvCA2MssfogGNEjmBLJIzVKLeYDIGxcQ4wPkYoI3adxqSxYBS+JjAxyUEmJwi9xuGYJFZLXGFNTXOw6am4+mpJEgsq6yWU+8wsJzA7g3X/EssrMBaUA4znuSwnkp3DsY0lERyro9l6BKlynFAOcz1qruhIEqtdfKz5jD7BLCeWhXPMzNvP1Z4gVk2ztaBv+yynMAv3fqG5oiZBrAbxsfSKNc2pTJPy3H6uhvBYbZHlMMEpTUSWRFtYLGiH96rbJzmlyTG9q2JHeGLh3OkiaZzdFpeWV1bX1lZXlpcW2W2clC6cQP5Y1VGdNcAu6xubRtjcWGeXgajuqvbHwjP8ogp+lB22tg3Y3mKHUV31X+wp+mPhf/hY7Vd8186ucdjd4bv0/vXY/ov+WDilP5HgKNK9feO0v+coVZI+4bz2xWoVZ+i5WQeHJsLhge922VNsDYpVG7EqlxntQSqVa49ROWJ9rvXGgnp4QlZxkMHOvomxv8NgsEjCEVaEJ1azdUxWidGuibXLqETCcXNFSKwqscLHnuGW8diKP0W71Fd5YkGZjpCQxxbdNh7b2Kt5kkZsoXpiwdviO1k9DDaM1waDHhK+w3ITH+vExnpHVi+DUyOdnV9cXl6cnxlpk0EvCe+a/zsJiFXnfof1sbZopKvrmz+ur4y0yFqf+2VWFxCr3t3x/awtqVS3N//cqlxLrPW7e74+IFaDux+yrC3LE7y+qbiW57jMWtbdEA0BsRrdK2COtRVjnd8I58ZaYS3nXgUbA2KJR8+bmH5YNdaFjHVhrNW4hnhjnz8BsZotuWwVWFsz1qWMdWmsNdYKauWKrvmfGszOGvhIHEpJfuALiCFZnA585UN5VR1FvaqalQhnsQDauWMDgKAYiqIwgU4Po7H/BkoAdKd4f4LX/SS5N0hhA5SBaNHMthh+Q+a3r0Cz749G/EGSP3b7PaTctYzz7yGlOdJFB+DousBcrqCrKHRxZ6450aWwuUK3gQMfzwBgFhT9QUEpHyvzITwfWfQBTx+HPcHDPQEPn1HrFkCtNTDdx/hV6UFVRFShRtWPVFnrXm0bb9S28V5t80VAVZsEJFNSyTUFZlj39uV44JRADi94ZyrORz2aaXvUY2rqKidQEiuxEiuxEiuxEiux+FjkWwBZXrBcWgDasgAAAABJRU5ErkJggg\x3d\x3d';var ii=['fbximg_52'];_setImagesSrc(ii,s);})();</script><style>.jNVrwc{margin-bottom:0}.Y4pkMc{width:100%}.MBeuO{font-family:arial,sans-serif;font-size:20px;line-height:26px}a:hover h3.LC20lb{text-decoration:underline}.LC20lb{display:inline-block;line-height:1.3;margin-bottom:3px;}.DKV0Md{padding-top:4px;padding-top:5px;}.VjDLd .TieM1d .tjvcx,.IVvPP .tjvcx,.kno-kp .tjvcx,.VjDLd .kp-wholepage-osrp .tjvcx,#rhs .ss6qqb .tjvcx{display:inline-block;height:19px;overflow-y:hidden}.qzEoUe{color:#202124;white-space:-webkit-nowrap}.dyjrff{color:#5f6368}.B6fmyf{position:absolute;top:0;height:0;visibility:hidden;white-space:nowrap}.eFM0qc{display:inline-block;padding-bottom:2px;padding-top:1px;padding-left:2px;visibility:visible}.gTl8xb{border-color:#70757a transparent;border-style:solid;border-width:5px 4px 0 4px;width:0;height:0;margin-left:-2px;top:50%;margin-top:-2px;position:absolute}.MUxGbd{padding-top:0px;margin-bottom:0px}.lyLwlc{color:#202124}.yDYNvb.lyLwlc{color:#4d5156}.yDYNvb.lyLwlc b{color:#5f6368}.lEBKkf{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.qkunPe{color:#ea4335}.Fam1ne{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAmCAQAAAAYCMGrAAAA+klEQVR4AcWV4cbtMBBFF0MIVUopoVSrhDDv/3gf/RFRpzdNOty1HiBO99mzeYWgCMZMKCPGrCgrxiSUhCkDeukxJKCXAUMiehkxw6FZhxEzmp0x4kCzByYISqlYdal0supS6WrVpdLEK0YSamJiJOPY0c/uOG4s6CcXfuKJaJcRzyNCQJsNiF1sRTR1hP11NNJ8RCrONOPRf+r7J+TZgQ5CNfMOYvW/2YxDqzqA/57+gVY9eiakrnyZEGXDsaE3p/4JScwPX3rtnZATDxnPWT7X16XAHaH8HWNrlxJD9TyGti5tCM84zpZe+RxNjeX9tZqLaGoMxN/P/wHP5Vw+8ZxnEQAAAABJRU5ErkJggg==);background-repeat:repeat-x;display:inline-block;overflow:hidden;position:relative;}.Fam1ne span{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAmBAMAAABALxQTAAAAFVBMVEVMaXH4twP4twP4twP4twP4twP4twP7w8S/AAAAB3RSTlMAFv5uPpvQloUsTQAAAMFJREFUeAGE0TEOgzAMQFEXoDNiYC6/wFxxAsTADDkB5f6HqNRENXUi8TYiRfnY8lNXkjBOkuBWSeAhsYJOYiW9xO4MEqshkTbCSyIH7GLdgFasHHgmwkikZQD6OROZRG4Hxju8o/TNhbNhCqkOxaZDVKdxNnq/EjUS/A2o0PuXpyVeb9bjDWY9QSWXDQfBbtbjtWY9bM4sqfx+5yYt8wNcAFEzrGGkk5668KsFrKewPtQ3aFqh8WOnYZ+lIBQkgykAWk8rlAqcHfQAAAAASUVORK5CYII=);background-repeat:repeat-x;display:block}.KsUr1 .Fam1ne,.Fam1ne.sCCsuc{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAmBAMAAABALxQTAAAAFVBMVEVHcEz///////////////////////+3ygHaAAAAB3RSTlMAZic7XRJNy/96tgAAAL5JREFUeAGF0UEKgzAQheFX23Ttq9F1Cj1AvIEK3adQXOvC+1/BxZAhJAG/pWD4eQN1Q83boWL0qJgnlAx7lO7sUHrQovQjQyWMrKTt5IYCyRa5huSrEkZ2lTCmaR/mrAPMzswhL6b09T9TNkCMTHhtnakWqCejIZtGOCQMRY/Lr9rcZSsIm59HhOsGXWhDglGbnYfHrkfSMC5oNE3DhgCsMU3DvEyaRoz8xkk91DxArJwQGev0rx4adiAycosTz9IcNqcJjbEAAAAASUVORK5CYII=);}.KsUr1 .Fam1ne span,.Fam1ne.sCCsuc span{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAmBAMAAABALxQTAAAAIVBMVEVHcEz///////////////////////////////////////+PBM77AAAAC3RSTlMAEP9Xl/BAKdtzu8NTojUAAADZSURBVHgBhJGBBsJQGEb/VK0BCRDQqbUKTATA2hOkiAB6ggkMkJ4gPUEGvWbp2s/u/ekADvicT5TxSAw2mWWL3LKHvSEHpIbtMTfskKVhr1CG9gmP0NbwCmQHmAa2C8yMYRjT+kAiyhafJBOJajze8iX25Ep+VC25LJ3tFICy060HlKMoE5XrUSuNox0owpF69zgWQQWCEsNmrH+Po5S/G7TQy7vHMfXu4V2jJ+mws8TetL4LWLVOkgvkLimZKAWnJmkuyr0JWHFTGSU6/pmqjT9rRwReJ5gCACeRNP/trsHAAAAAAElFTkSuQmCC);}.tPhRLe,.tPhRLe span{background-size:13px 12px;height:13px;top:1px;width:65px}.FxLDp{box-sizing:border-box;display:flex;flex-direction:column;list-style-type:none;margin:0;padding:15px 0 0 16px;width:100%}.MYVUIe{margin-bottom:15px;display:flex}.MYVUIe:last-child{margin-bottom:0}.XN9cAe{flex:1;box-sizing:border-box}</style><div data-hveid="CAMQAA"><div class="g"><div><div class="g jNVrwc Y4pkMc"><h2 class="Uo8X3b OhScic zsYMMe">網頁搜尋結果</h2><div data-hveid="CAcQAA" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFSgAegQIBxAA"><div class="tF2Cxc"><div class="yuRUbf"><a href="https://play.google.com/store/apps/details?id=com.andymstone.metronome&amp;hl=zh_TW&amp;gl=US" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECAUQAQ" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://play.google.com/store/apps/details%3Fid%3Dcom.andymstone.metronome%26hl%3Dzh_TW%26gl%3DUS&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECAUQAQ"><br><h3 class="LC20lb MBeuO DKV0Md">節拍器的節拍- Google Play 應用程式</h3><div class="TbwUpd NJjxre"><cite class="iUh30 qLRx3b tjvcx" role="text">https://play.google.com<span class="dyjrff qzEoUe" role="text"> › store › apps › details</span></cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 qLRx3b tjvcx" role="text">https://play.google.com<span class="dyjrff qzEoUe" role="text"> › store › apps › details</span></cite></div><div class="eFM0qc"><span><div jscontroller="yGWMub" class="action-menu"><a href="#" class="GHDvEf" aria-label="結果選項" aria-expanded="false" aria-haspopup="true" role="button" jsaction="PZcoEd;keydown:wU6FVd;keypress:uWmNaf" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ7B16BAgFEAQ"><span class="gTl8xb"></span></a><ol class="action-menu-panel wHYlTd zsYMMe" role="menu" tabindex="-1" jsaction="keydown:Xiq7wd;mouseover:pKPowd;mouseout:O9bKS" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQqR96BAgFEAU"><li class="action-menu-item OhScic zsYMMe" role="menuitem"><a class="fl" href="https://webcache.googleusercontent.com/search?q=cache:IQ-n8Iyp1tEJ:https://play.google.com/store/apps/details%3Fid%3Dcom.andymstone.metronome%26hl%3Dzh_TW%26gl%3DUS+&amp;cd=2&amp;hl=zh-TW&amp;ct=clnk&amp;gl=tw" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://webcache.googleusercontent.com/search%3Fq%3Dcache:IQ-n8Iyp1tEJ:https://play.google.com/store/apps/details%253Fid%253Dcom.andymstone.metronome%2526hl%253Dzh_TW%2526gl%253DUS%2B%26cd%3D2%26hl%3Dzh-TW%26ct%3Dclnk%26gl%3Dtw&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQIHoECAUQBg"><span>頁庫存檔</span></a></li></ol></div></span></div></div></div><div class="IsZvec"><div class="VwiC3b yXK7lf MUxGbd yDYNvb lyLwlc lEBKkf" style="-webkit-line-clamp:2"><span>由音樂家設計的免費互動<em class="qkunPe">節拍器</em>應用程序和速度訓練器。擁有超過500萬的下載Metronome Beats在全球範圍內用於個人和團體音樂練習，教學和現場音樂會。</span></div><div class="fG8Fp uo4vr"><g-review-stars aria-hidden="true"><span class="Fam1ne tPhRLe" role="img"><span style="width:59px"></span></span></g-review-stars> <span>評分：4.5</span> · ‎<span>142,072 票</span> · ‎<span>免費</span> · ‎<span>Android</span> · ‎<span>娛樂</span></div></div></div></div></div></div><div><ul class="FxLDp"><li class="MYVUIe"><div class="XN9cAe"><div class="g jNVrwc Y4pkMc"><div data-hveid="CAYQAA" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQtJkDKAB6BAgGEAA"><div class="tF2Cxc"><div class="yuRUbf"><a href="https://play.google.com/store/apps/details?id=com.soundcorset.client.android&amp;hl=zh_TW&amp;gl=US" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECAQQAQ" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://play.google.com/store/apps/details%3Fid%3Dcom.soundcorset.client.android%26hl%3Dzh_TW%26gl%3DUS&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECAQQAQ"><br><h3 class="LC20lb MBeuO DKV0Md">調音器，節拍器- Google Play 應用程式</h3><div class="TbwUpd NJjxre"><cite class="iUh30 qLRx3b tjvcx" role="text">https://play.google.com<span class="dyjrff qzEoUe" role="text"> › store › apps › details</span></cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 qLRx3b tjvcx" role="text">https://play.google.com<span class="dyjrff qzEoUe" role="text"> › store › apps › details</span></cite></div><div class="eFM0qc"><span><div jscontroller="yGWMub" class="action-menu"><a href="#" class="GHDvEf" aria-label="結果選項" aria-expanded="false" aria-haspopup="true" role="button" jsaction="PZcoEd;keydown:wU6FVd;keypress:uWmNaf" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ7B16BAgEEAQ"><span class="gTl8xb"></span></a><ol class="action-menu-panel wHYlTd zsYMMe" role="menu" tabindex="-1" jsaction="keydown:Xiq7wd;mouseover:pKPowd;mouseout:O9bKS" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQqR96BAgEEAU"><li class="action-menu-item OhScic zsYMMe" role="menuitem"><a class="fl" href="https://webcache.googleusercontent.com/search?q=cache:dRZSZh2THBQJ:https://play.google.com/store/apps/details%3Fid%3Dcom.soundcorset.client.android%26hl%3Dzh_TW%26gl%3DUS+&amp;cd=3&amp;hl=zh-TW&amp;ct=clnk&amp;gl=tw" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://webcache.googleusercontent.com/search%3Fq%3Dcache:dRZSZh2THBQJ:https://play.google.com/store/apps/details%253Fid%253Dcom.soundcorset.client.android%2526hl%253Dzh_TW%2526gl%253DUS%2B%26cd%3D3%26hl%3Dzh-TW%26ct%3Dclnk%26gl%3Dtw&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQIHoECAQQBg"><span>頁庫存檔</span></a></li></ol></div></span></div></div></div><div class="IsZvec"><div class="VwiC3b yXK7lf MUxGbd yDYNvb lyLwlc lEBKkf" style="-webkit-line-clamp:2"><span>一體式<em class="qkunPe">節拍器</em>+調音器+錄音機覆蓋鋼琴，單簧管，聲樂練習等。 100％免費<em class="qkunPe">節拍器</em>＆調音器它是免費的，但功能強大。 適合所有音樂演奏和練習。</span></div><div class="fG8Fp uo4vr"><g-review-stars aria-hidden="true"><span class="Fam1ne tPhRLe" role="img"><span style="width:59px"></span></span></g-review-stars> <span>評分：4.4</span> · ‎<span>122,032 票</span> · ‎<span>免費</span> · ‎<span>Android</span> · ‎<span>娛樂</span></div></div></div></div></div></div></li></ul></div></div></div><span class="oUAcPd" id="fld_76"></span><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){var uer=false;var eid='fld_76';(function(){
var a = uer,
    b = Date.now();
if (google.timers && google.timers.load.t) {
    var c = window.innerHeight || document.documentElement.clientHeight,
        d = 0;
    if (eid) {
        var e = document.getElementById(eid);
        e && (d = Math.floor(e.getBoundingClientRect().top + window.pageYOffset))
    }
    for (var f = d >= c, g = document.getElementsByTagName("img"), h = 0, k = void 0; k = g[h++];) google.c.setup(k, !1, d);
    a && f && google.c.ubr(!1, b, d)
};
}).call(this);
})(); < /script><style>.LAWljd{padding:0 2px 0 4px}.wuQ4Ob{color:#70757a}.WZ8Tjf{color:#70757a;}.oIk2Cb{margin:0}.y6Uyqe{margin-left:-8px;margin-right:-8px;padding:6px 0 0 0}.q8U8x{font-family:Google Sans,arial,sans-serif;font-weight:400}.diAzE{margin-bottom:16px}.O3JH7{color:#202124;font-size:20px}.s6JM6d .O3JH7{font-size:22px;line-height:28px;margin-bottom:8px}#botstuff .O3JH7{font-size:22px}#botstuff .O3JH7{line-height:28px}.EIaa9b{display:flex}.AJLUJb{display:flex;flex:1;flex-direction:column}.R0xfCb{margin-bottom:4px;margin-top:4px}.VCOFK{margin-left:8px;margin-right:8px}.s8bAkb{padding-bottom:0px;padding-top:0px}.k8XOCe{align-items:center;background-color:#f1f3f4;border-radius:100px;box-sizing:border-box;display:flex;max-height:none;min-height:48px;padding-left:17px;padding-right:17px;position:relative}.k8XOCe:hover,.k8XOCe:active{color:#202124}.s75CSd{-webkit-box-orient:vertical;color:#202124;display:-webkit-box;flex:1;font-size:16px;-webkit-line-clamp:2;max-width:227px;overflow-wrap:break-word;overflow:hidden}.zVq10e{border-radius:4px}.aXBZVd{background-image:url("data:image/svg + xml, % 3 Csvg xmlns = 'http://www.w3.org/2000/svg'
width = '24'
height = '24'
viewBox = '0 0 24 24' % 3 E % 3 Cpath fill = 'rgba(0,0,0,.54)'
d = 'M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z' / % 3 E % 3 C / svg % 3 E ");background-position:center;background-repeat:no-repeat;background-size:20px;height:20px;padding:10px;width:20px}.AaVjTc a:link{display:block;color:#4285f4;font-weight:normal}.AaVjTc td{padding:0;text-align:center}.YyVfkd{color:#202124;font-weight:normal;}.AaVjTc{margin:30px auto 30px}.SJajHc{background:url(/images/nav_logo321_hr.webp) no-repeat;background-size:167px;overflow:hidden;background-position:0 0;height:40px;display:block}.NVbCr{cursor:pointer}</style><script nonce="
EEcYuPapLeT27Qm24Kw9uw == ">(function(){
var a = document.getElementById("rhs");
if (a) {
    var b = document.getElementById("center_col");
    if (b) {
        var c = b.parentElement;
        if (c) {
            var d = c.parentElement;
            d && d.insertBefore(a, c.nextSibling)
        }
    }
};
}).call(this); < /script><div class="g"><div data-hveid="CCoQAA" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFSgAegQIKhAA"><div class="tF2Cxc"><div class="yuRUbf"><a href="https:/ / www.musicca.com / zh / metronome " data-ved="
2 ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECCcQAQ " ping=" / url ? sa = t & amp;
source = web & amp;
rct = j & amp;
url = https: //www.musicca.com/zh/metronome&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECCcQAQ"><br><h3 class="LC20lb MBeuO DKV0Md">在线节拍器 - Musicca</h3><div class="TbwUpd NJjxre"><cite class="iUh30 qLRx3b tjvcx" role="text">https://www.musicca.com<span class="dyjrff qzEoUe" role="text"> › metronome</span></cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 qLRx3b tjvcx" role="text">https://www.musicca.com<span class="dyjrff qzEoUe" role="text"> › metronome</span></cite></div><div class="eFM0qc"><span><div jscontroller="yGWMub" class="action-menu"><a href="#" class="GHDvEf" aria-label="結果選項" aria-expanded="false" aria-haspopup="true" role="button" jsaction="PZcoEd;keydown:wU6FVd;keypress:uWmNaf" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ7B16BAgnEAQ"><span class="gTl8xb"></span></a><ol class="action-menu-panel wHYlTd zsYMMe" role="menu" tabindex="-1" jsaction="keydown:Xiq7wd;mouseover:pKPowd;mouseout:O9bKS" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQqR96BAgnEAU"><li class="action-menu-item OhScic zsYMMe" role="menuitem"><a class="fl" href="https://webcache.googleusercontent.com/search?q=cache:YbAXfMJ0fugJ:https://www.musicca.com/zh/metronome+&amp;cd=4&amp;hl=zh-TW&amp;ct=clnk&amp;gl=tw" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://webcache.googleusercontent.com/search%3Fq%3Dcache:YbAXfMJ0fugJ:https://www.musicca.com/zh/metronome%2B%26cd%3D4%26hl%3Dzh-TW%26ct%3Dclnk%26gl%3Dtw&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQIHoECCcQBg"><span>頁庫存檔</span></a></li></ol></div></span><a class="fl iUh30" href="https://translate.google.com/translate?hl=zh-TW&amp;sl=zh-CN&amp;u=https://www.musicca.com/zh/metronome&amp;prev=search&amp;pto=aue" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://translate.google.com/translate%3Fhl%3Dzh-TW%26sl%3Dzh-CN%26u%3Dhttps://www.musicca.com/zh/metronome%26prev%3Dsearch%26pto%3Daue&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ7gF6BAgnEAg"><span>轉為繁體網頁</span></a></div></div></div><div class="IsZvec"><div class="VwiC3b yXK7lf MUxGbd yDYNvb lyLwlc lEBKkf" style="-webkit-line-clamp:2"><span><em class="qkunPe">节拍器</em>是一种规律发出声音的工具，帮助音乐人稳定拍速。打拍子的测量单位称为BPM（每分钟拍数），拍速标为60 BPM 等于分秒打一拍，而120 BPM 等于每秒打两拍。</span></div><div jscontroller="K6HGfd" id="eob_80" jsdata="fxg5tf;_;BOc640" jsaction="rcuQ6b:npT2md" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ2Z0BegQIKhAC"></div></div></div></div></div><div class="g"><div data-hveid="CBUQAA" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFSgAegQIFRAA"><div class="tF2Cxc"><div class="yuRUbf"><a href="https://my-best.tw/116618" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECA8QAQ" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://my-best.tw/116618&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECA8QAQ"><br><h3 class="LC20lb MBeuO DKV0Md">推薦十大節拍器App人氣排行榜【2021年最新版】</h3><div class="TbwUpd NJjxre"><cite class="iUh30 qLRx3b tjvcx" role="text">https://my-best.tw<span class="dyjrff qzEoUe" role="text"> › 應用程式・App</span></cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 qLRx3b tjvcx" role="text">https://my-best.tw<span class="dyjrff qzEoUe" role="text"> › 應用程式・App</span></cite></div><div class="eFM0qc"><span><div jscontroller="yGWMub" class="action-menu"><a href="#" class="GHDvEf" aria-label="結果選項" aria-expanded="false" aria-haspopup="true" role="button" jsaction="PZcoEd;keydown:wU6FVd;keypress:uWmNaf" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ7B16BAgPEAQ"><span class="gTl8xb"></span></a><ol class="action-menu-panel wHYlTd zsYMMe" role="menu" tabindex="-1" jsaction="keydown:Xiq7wd;mouseover:pKPowd;mouseout:O9bKS" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQqR96BAgPEAU"><li class="action-menu-item OhScic zsYMMe" role="menuitem"><a class="fl" href="https://webcache.googleusercontent.com/search?q=cache:t4KAuSt52hoJ:https://my-best.tw/116618+&amp;cd=5&amp;hl=zh-TW&amp;ct=clnk&amp;gl=tw" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://webcache.googleusercontent.com/search%3Fq%3Dcache:t4KAuSt52hoJ:https://my-best.tw/116618%2B%26cd%3D5%26hl%3Dzh-TW%26ct%3Dclnk%26gl%3Dtw&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQIHoECA8QBg"><span>頁庫存檔</span></a></li></ol></div></span></div></div></div><div class="IsZvec"><div class="VwiC3b yXK7lf MUxGbd yDYNvb lyLwlc lEBKkf" style="-webkit-line-clamp:2"><span>JoeAverage | 鼓<em class="qkunPe">節拍器</em> · Frozen Ape | Metronome: Tempo Lite · LIRICHARD | <em class="qkunPe">節拍器</em>樂器節奏練習工具 · Ihara product | Smart Metronome &amp; Tuner.</span></div><div jscontroller="K6HGfd" id="eob_67" jsdata="fxg5tf;_;BOc64c" jsaction="rcuQ6b:npT2md" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ2Z0BegQIFRAC"></div></div></div></div></div><div class="g"><div data-hveid="CCkQAA" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFSgAegQIKRAA"><div class="tF2Cxc"><div class="yuRUbf"><a href="https://www.metronomeonline.com/%E8%8A%82%E6%8B%8D%E5%99%A8%E5%9C%A8%E7%BA%BF/" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECCgQAQ" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.metronomeonline.com/%25E8%258A%2582%25E6%258B%258D%25E5%2599%25A8%25E5%259C%25A8%25E7%25BA%25BF/&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECCgQAQ"><br><h3 class="LC20lb MBeuO DKV0Md">免费在线节拍器</h3><div class="TbwUpd NJjxre"><cite class="iUh30 qLRx3b tjvcx" role="text">https://www.metronomeonline.com<span class="dyjrff qzEoUe" role="text"> › 节...</span></cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 qLRx3b tjvcx" role="text">https://www.metronomeonline.com<span class="dyjrff qzEoUe" role="text"> › 节...</span></cite></div><div class="eFM0qc"><span><div jscontroller="yGWMub" class="action-menu"><a href="#" class="GHDvEf" aria-label="結果選項" aria-expanded="false" aria-haspopup="true" role="button" jsaction="PZcoEd;keydown:wU6FVd;keypress:uWmNaf" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ7B16BAgoEAQ"><span class="gTl8xb"></span></a><ol class="action-menu-panel wHYlTd zsYMMe" role="menu" tabindex="-1" jsaction="keydown:Xiq7wd;mouseover:pKPowd;mouseout:O9bKS" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQqR96BAgoEAU"><li class="action-menu-item OhScic zsYMMe" role="menuitem"><a class="fl" href="https://webcache.googleusercontent.com/search?q=cache:jqowZmGPlBEJ:https://www.metronomeonline.com/%25E8%258A%2582%25E6%258B%258D%25E5%2599%25A8%25E5%259C%25A8%25E7%25BA%25BF/+&amp;cd=6&amp;hl=zh-TW&amp;ct=clnk&amp;gl=tw" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://webcache.googleusercontent.com/search%3Fq%3Dcache:jqowZmGPlBEJ:https://www.metronomeonline.com/%2525E8%25258A%252582%2525E6%25258B%25258D%2525E5%252599%2525A8%2525E5%25259C%2525A8%2525E7%2525BA%2525BF/%2B%26cd%3D6%26hl%3Dzh-TW%26ct%3Dclnk%26gl%3Dtw&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQIHoECCgQBg"><span>頁庫存檔</span></a></li><li class="action-menu-item OhScic zsYMMe" role="menuitem"><a class="fl" href="/search?sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;q=related:https://www.metronomeonline.com/%25E8%258A%2582%25E6%258B%258D%25E5%2599%25A8%25E5%259C%25A8%25E7%25BA%25BF/+google+%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sa=X&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQH3oECCgQBw"><span>類似內容</span></a></li></ol></div></span><a class="fl iUh30" href="https://translate.google.com/translate?hl=zh-TW&amp;sl=zh-CN&amp;u=https://www.metronomeonline.com/%25E8%258A%2582%25E6%258B%258D%25E5%2599%25A8%25E5%259C%25A8%25E7%25BA%25BF/&amp;prev=search&amp;pto=aue" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://translate.google.com/translate%3Fhl%3Dzh-TW%26sl%3Dzh-CN%26u%3Dhttps://www.metronomeonline.com/%2525E8%25258A%252582%2525E6%25258B%25258D%2525E5%252599%2525A8%2525E5%25259C%2525A8%2525E7%2525BA%2525BF/%26prev%3Dsearch%26pto%3Daue&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ7gF6BAgoEAk"><span>轉為繁體網頁</span></a></div></div></div><div class="IsZvec"><div class="VwiC3b yXK7lf MUxGbd yDYNvb lyLwlc lEBKkf" style="-webkit-line-clamp:2"><span>免费在线<em class="qkunPe">节拍器</em>,是您练习演奏的一种简便易用的理想工具。<em class="qkunPe">节拍器</em>在线使用简便,助您可靠掌握节拍和节奏.</span></div><div jscontroller="K6HGfd" id="eob_79" jsdata="fxg5tf;_;BOc64w" jsaction="rcuQ6b:npT2md" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ2Z0BegQIKRAC"></div></div></div></div></div><div class="g"><div data-hveid="CBcQAA" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFSgAegQIFxAA"><div class="tF2Cxc"><div class="yuRUbf"><a href="https://artsandculture.google.com/entity/m0m6l6?hl=zh-TW" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECA0QAQ" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://artsandculture.google.com/entity/m0m6l6%3Fhl%3Dzh-TW&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECA0QAQ"><br><h3 class="LC20lb MBeuO DKV0Md">節拍器— Google 藝術與文化</h3><div class="TbwUpd NJjxre"><cite class="iUh30 qLRx3b tjvcx" role="text">https://artsandculture.google.com<span class="dyjrff qzEoUe" role="text"> › entity</span></cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 qLRx3b tjvcx" role="text">https://artsandculture.google.com<span class="dyjrff qzEoUe" role="text"> › entity</span></cite></div><div class="eFM0qc"><span><div jscontroller="yGWMub" class="action-menu"><a href="#" class="GHDvEf" aria-label="結果選項" aria-expanded="false" aria-haspopup="true" role="button" jsaction="PZcoEd;keydown:wU6FVd;keypress:uWmNaf" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ7B16BAgNEAQ"><span class="gTl8xb"></span></a><ol class="action-menu-panel wHYlTd zsYMMe" role="menu" tabindex="-1" jsaction="keydown:Xiq7wd;mouseover:pKPowd;mouseout:O9bKS" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQqR96BAgNEAU"><li class="action-menu-item OhScic zsYMMe" role="menuitem"><a class="fl" href="https://webcache.googleusercontent.com/search?q=cache:XeFetfXO7qkJ:https://artsandculture.google.com/entity/m0m6l6%3Fhl%3Dzh-TW+&amp;cd=7&amp;hl=zh-TW&amp;ct=clnk&amp;gl=tw" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://webcache.googleusercontent.com/search%3Fq%3Dcache:XeFetfXO7qkJ:https://artsandculture.google.com/entity/m0m6l6%253Fhl%253Dzh-TW%2B%26cd%3D7%26hl%3Dzh-TW%26ct%3Dclnk%26gl%3Dtw&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQIHoECA0QBg"><span>頁庫存檔</span></a></li></ol></div></span></div></div></div><div class="IsZvec"><div class="VwiC3b yXK7lf MUxGbd yDYNvb lyLwlc lEBKkf" style="-webkit-line-clamp:2"><span><em class="qkunPe">節拍器</em>，又叫拍子機，是一種能規律發出聲音或視覺效果來顯示節拍的器材，通常用來提供一個穩定的節拍和速度；音樂上以每分鐘幾拍來計算速度。</span></div><div jscontroller="K6HGfd" id="eob_71" jsdata="fxg5tf;_;BOc64g" jsaction="rcuQ6b:npT2md" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ2Z0BegQIFxAC"></div></div></div></div></div><div class="g"><div data-hveid="CBkQAA" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFSgAegQIGRAA"><div class="tF2Cxc"><div class="yuRUbf"><a href="http://bestmetronome.com/lang-zh" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECBAQAQ" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=http://bestmetronome.com/lang-zh&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECBAQAQ"><br><h3 class="LC20lb MBeuO DKV0Md">免費線上節拍器 - Best Metronome.com</h3><div class="TbwUpd NJjxre"><cite class="iUh30 qLRx3b tjvcx" role="text">http://bestmetronome.com<span class="dyjrff qzEoUe" role="text"> › lang-zh</span></cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 qLRx3b tjvcx" role="text">http://bestmetronome.com<span class="dyjrff qzEoUe" role="text"> › lang-zh</span></cite></div><div class="eFM0qc"><span><div jscontroller="yGWMub" class="action-menu"><a href="#" class="GHDvEf" aria-label="結果選項" aria-expanded="false" aria-haspopup="true" role="button" jsaction="PZcoEd;keydown:wU6FVd;keypress:uWmNaf" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ7B16BAgQEAQ"><span class="gTl8xb"></span></a><ol class="action-menu-panel wHYlTd zsYMMe" role="menu" tabindex="-1" jsaction="keydown:Xiq7wd;mouseover:pKPowd;mouseout:O9bKS" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQqR96BAgQEAU"><li class="action-menu-item OhScic zsYMMe" role="menuitem"><a class="fl" href="http://webcache.googleusercontent.com/search?q=cache:amGXKmpNAioJ:bestmetronome.com/lang-zh+&amp;cd=8&amp;hl=zh-TW&amp;ct=clnk&amp;gl=tw" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=http://webcache.googleusercontent.com/search%3Fq%3Dcache:amGXKmpNAioJ:bestmetronome.com/lang-zh%2B%26cd%3D8%26hl%3Dzh-TW%26ct%3Dclnk%26gl%3Dtw&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQIHoECBAQBg"><span>頁庫存檔</span></a></li><li class="action-menu-item OhScic zsYMMe" role="menuitem"><a class="fl" href="/search?sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;q=related:bestmetronome.com/lang-zh+google+%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sa=X&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQH3oECBAQBw"><span>類似內容</span></a></li></ol></div></span></div></div></div><div class="IsZvec"><div class="VwiC3b yXK7lf MUxGbd yDYNvb lyLwlc lEBKkf" style="-webkit-line-clamp:2"><span><em class="qkunPe">節拍器</em>（Metronome），又叫拍子機，是一種能規律發出聲音甚至藉由視覺效果來打拍子的器材，通常用來提供一個穩定的節拍和速度；音樂上以每分鐘幾拍（Beats Per Minute，BPM ...</span></div><div jscontroller="K6HGfd" id="eob_72" jsdata="fxg5tf;_;BOc64k" jsaction="rcuQ6b:npT2md" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ2Z0BegQIGRAC"></div></div></div></div></div><div class="g"><div data-hveid="CCAQAA" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFSgAegQIIBAA"><div class="tF2Cxc"><div class="yuRUbf"><a href="https://apps.apple.com/tw/app/%E7%AF%80%E6%8B%8D%E5%99%A8/id540427956" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECBMQAQ" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://apps.apple.com/tw/app/%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8/id540427956&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECBMQAQ"><br><h3 class="LC20lb MBeuO DKV0Md">‎在App Store 上的「節拍器」</h3><div class="TbwUpd NJjxre"><cite class="iUh30 qLRx3b tjvcx" role="text">https://apps.apple.com<span class="dyjrff qzEoUe" role="text"> › app › 節拍器</span></cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 qLRx3b tjvcx" role="text">https://apps.apple.com<span class="dyjrff qzEoUe" role="text"> › app › 節拍器</span></cite></div><div class="eFM0qc"><span><div jscontroller="yGWMub" class="action-menu"><a href="#" class="GHDvEf" aria-label="結果選項" aria-expanded="false" aria-haspopup="true" role="button" jsaction="PZcoEd;keydown:wU6FVd;keypress:uWmNaf" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ7B16BAgTEAQ"><span class="gTl8xb"></span></a><ol class="action-menu-panel wHYlTd zsYMMe" role="menu" tabindex="-1" jsaction="keydown:Xiq7wd;mouseover:pKPowd;mouseout:O9bKS" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQqR96BAgTEAU"><li class="action-menu-item OhScic zsYMMe" role="menuitem"><a class="fl" href="https://webcache.googleusercontent.com/search?q=cache:DI-5WYyz0w0J:https://apps.apple.com/tw/app/%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8/id540427956+&amp;cd=9&amp;hl=zh-TW&amp;ct=clnk&amp;gl=tw" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://webcache.googleusercontent.com/search%3Fq%3Dcache:DI-5WYyz0w0J:https://apps.apple.com/tw/app/%2525E7%2525AF%252580%2525E6%25258B%25258D%2525E5%252599%2525A8/id540427956%2B%26cd%3D9%26hl%3Dzh-TW%26ct%3Dclnk%26gl%3Dtw&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQIHoECBMQBg"><span>頁庫存檔</span></a></li></ol></div></span></div></div></div><div class="IsZvec"><div class="VwiC3b yXK7lf MUxGbd yDYNvb lyLwlc lEBKkf" style="-webkit-line-clamp:2"><span>閱讀評論、比較客戶評分、查看截圖，並進一步瞭解「<em class="qkunPe">節拍器</em>」。下載「<em class="qkunPe">節拍器</em>」並在iPhone、iPad 和iPod touch 上盡享豐富功能。</span></div><div class="fG8Fp uo4vr"><g-review-stars aria-hidden="true"><span class="Fam1ne tPhRLe" role="img"><span style="width:59px"></span></span></g-review-stars> <span>評分：4.7</span> · ‎<span>8,023 則評論</span> · ‎<span>免費</span> · ‎<span>iOS</span></div><div jscontroller="K6HGfd" id="eob_75" jsdata="fxg5tf;_;BOc64s" jsaction="rcuQ6b:npT2md" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ2Z0BegQIIBAE"></div></div></div></div></div><div class="g"><div data-hveid="CBgQAA" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFSgAegQIGBAA"><div class="tF2Cxc"><div class="yuRUbf"><a href="https://www.google.com/patents/CN202352316U?cl=zh" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECA4QAQ" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.google.com/patents/CN202352316U%3Fcl%3Dzh&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECA4QAQ"><br><h3 class="LC20lb MBeuO DKV0Md">CN202352316U - 上下摆动式电子节拍器- Google Patents</h3><div class="TbwUpd NJjxre"><cite class="iUh30 qLRx3b tjvcx" role="text">https://www.google.com<span class="dyjrff qzEoUe" role="text"> › patents</span></cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 qLRx3b tjvcx" role="text">https://www.google.com<span class="dyjrff qzEoUe" role="text"> › patents</span></cite></div><div class="eFM0qc"><span class="LAWljd"> · </span><a class="fl iUh30" href="https://translate.google.com/translate?hl=zh-TW&amp;sl=zh-CN&amp;u=https://www.google.com/patents/CN202352316U%3Fcl%3Dzh&amp;prev=search&amp;pto=aue" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://translate.google.com/translate%3Fhl%3Dzh-TW%26sl%3Dzh-CN%26u%3Dhttps://www.google.com/patents/CN202352316U%253Fcl%253Dzh%26prev%3Dsearch%26pto%3Daue&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ7gF6BAgOEAU"><span>轉為繁體網頁</span></a></div></div></div><div class="IsZvec"><div class="VwiC3b yXK7lf MUxGbd yDYNvb lyLwlc lEBKkf" style="-webkit-line-clamp:2"><span>一种上下摆动式电子<em class="qkunPe">节拍器</em>。在面板上有一边有带指针舵机，下边有扬声器，另一边有速度键+、速度键-、模式键、拍子键、开关键，另一边下边有显示屏，面板的一侧有人声 ...</span></div><div jscontroller="K6HGfd" id="eob_73" jsdata="fxg5tf;_;BOc64o" jsaction="rcuQ6b:npT2md" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ2Z0BegQIGBAC"></div></div></div></div></div><div class="hlcw0c"><div class="g"><div data-hveid="CBYQAA" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFSgAegQIFhAA"><div class="tF2Cxc"><div class="yuRUbf"><a href="https://www.marketersgo.com/cases/creativity/201801/%E7%AF%80%E6%8B%8D%E5%99%A8app%E6%8E%A8%E8%96%A6/" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECBEQAQ" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.marketersgo.com/cases/creativity/201801/%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8app%25E6%258E%25A8%25E8%2596%25A6/&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQFnoECBEQAQ"><br><h3 class="LC20lb MBeuO DKV0Md">2018最新3款超好用節拍器APP推薦 - 行銷人</h3><div class="TbwUpd NJjxre"><cite class="iUh30 qLRx3b tjvcx" role="text">https://www.marketersgo.com<span class="dyjrff qzEoUe" role="text"> › 行銷案例 › 行銷創意</span></cite></div></a><div class="B6fmyf"><div class="TbwUpd"><cite class="iUh30 qLRx3b tjvcx" role="text">https://www.marketersgo.com<span class="dyjrff qzEoUe" role="text"> › 行銷案例 › 行銷創意</span></cite></div><div class="eFM0qc"><span><div jscontroller="yGWMub" class="action-menu"><a href="#" class="GHDvEf" aria-label="結果選項" aria-expanded="false" aria-haspopup="true" role="button" jsaction="PZcoEd;keydown:wU6FVd;keypress:uWmNaf" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ7B16BAgREAQ"><span class="gTl8xb"></span></a><ol class="action-menu-panel wHYlTd zsYMMe" role="menu" tabindex="-1" jsaction="keydown:Xiq7wd;mouseover:pKPowd;mouseout:O9bKS" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQqR96BAgREAU"><li class="action-menu-item OhScic zsYMMe" role="menuitem"><a class="fl" href="https://webcache.googleusercontent.com/search?q=cache:vFjjDRwP7uEJ:https://www.marketersgo.com/cases/creativity/201801/%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8app%25E6%258E%25A8%25E8%2596%25A6/+&amp;cd=11&amp;hl=zh-TW&amp;ct=clnk&amp;gl=tw" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://webcache.googleusercontent.com/search%3Fq%3Dcache:vFjjDRwP7uEJ:https://www.marketersgo.com/cases/creativity/201801/%2525E7%2525AF%252580%2525E6%25258B%25258D%2525E5%252599%2525A8app%2525E6%25258E%2525A8%2525E8%252596%2525A6/%2B%26cd%3D11%26hl%3Dzh-TW%26ct%3Dclnk%26gl%3Dtw&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQIHoECBEQBg"><span>頁庫存檔</span></a></li></ol></div></span></div></div></div><div class="IsZvec"><div class="VwiC3b yXK7lf MUxGbd yDYNvb lyLwlc lEBKkf" style="-webkit-line-clamp:2"><span class="MUxGbd wuQ4Ob WZ8Tjf">2018年1月30日 — </span><span>因為「Ticka」除了普通<em class="qkunPe">節拍器</em>APP 會有的：爵士鼓、敲擊貝斯、馬林巴琴、木琴、合成器…等<em class="qkunPe">節拍器</em>音效，還有「英文跟台語」兩種人聲數拍選項！台語！台語！台 ...</span></div><div jscontroller="K6HGfd" id="eob_66" jsdata="fxg5tf;_;BOc64Y" jsaction="rcuQ6b:npT2md" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ2Z0BegQIFhAC"></div></div></div></div></div></div></div></div></div></div><div id="bottomads"></div><div id="botstuff"><div data-hveid="CAEQOw" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQCHoECAEQOw"><div id="bres"><div class="ULSxyf"><div id="w3bYAd" data-abe="" data-hveid="CAwQAA"><div class="oIk2Cb"><h3 class="O3JH7 diAzE"><span class="q8U8x">相關搜尋</span></h3><div class="y6Uyqe"><div class="EIaa9b"><div class="AJLUJb"><div data-hveid="CCYQAA"><a class="k8XOCe R0xfCb VCOFK s8bAkb" href="/search?sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;q=%E8%B7%91%E6%AD%A5%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sa=X&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ1QJ6BAgmEAE"><div class="aXBZVd zVq10e"></div><div class="s75CSd OhScic AB4Wff"><b>跑步節拍器</b></div></a></div><div data-hveid="CCUQAA"><a class="k8XOCe R0xfCb VCOFK s8bAkb" href="/search?sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;q=%E7%AF%80%E6%8B%8D%E5%99%A8chrome&amp;sa=X&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ1QJ6BAglEAE"><div class="aXBZVd zVq10e"></div><div class="s75CSd OhScic AB4Wff"><b>節拍器chrome</b></div></a></div><div data-hveid="CCQQAA"><a class="k8XOCe R0xfCb VCOFK s8bAkb" href="/search?sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;q=%E7%AF%80%E6%8B%8D%E5%99%A8%E8%A8%AD%E5%AE%9A&amp;sa=X&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ1QJ6BAgkEAE"><div class="aXBZVd zVq10e"></div><div class="s75CSd OhScic AB4Wff"><b>節拍器設定</b></div></a></div><div data-hveid="CCMQAA"><a class="k8XOCe R0xfCb VCOFK s8bAkb" href="/search?sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;q=%E7%AF%80%E6%8B%8D%E5%99%A8%E8%BB%9F%E9%AB%94&amp;sa=X&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ1QJ6BAgjEAE"><div class="aXBZVd zVq10e"></div><div class="s75CSd OhScic AB4Wff"><b>節拍器軟體</b></div></a></div></div><div class="AJLUJb"><div data-hveid="CCEQAA"><a class="k8XOCe R0xfCb VCOFK s8bAkb" href="/search?sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;q=%E7%AF%80%E6%8B%8D%E5%99%A8app&amp;sa=X&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ1QJ6BAghEAE"><div class="aXBZVd zVq10e"></div><div class="s75CSd OhScic AB4Wff"><b>節拍器app</b></div></a></div><div data-hveid="CBoQAA"><a class="k8XOCe R0xfCb VCOFK s8bAkb" href="/search?sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;q=%E9%9F%B3%E6%A8%82%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sa=X&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ1QJ6BAgaEAE"><div class="aXBZVd zVq10e"></div><div class="s75CSd OhScic AB4Wff"><b>音樂節拍器</b></div></a></div><div data-hveid="CBQQAA"><a class="k8XOCe R0xfCb VCOFK s8bAkb" href="/search?sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;q=%E8%99%9B%E6%93%AC%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sa=X&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ1QJ6BAgUEAE"><div class="aXBZVd zVq10e"></div><div class="s75CSd OhScic AB4Wff"><b>虛擬節拍器</b></div></a></div><div data-hveid="CBIQAA"><a class="k8XOCe R0xfCb VCOFK s8bAkb" href="/search?sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;q=%E7%AF%80%E6%8B%8D%E5%99%A8%E9%80%9F%E5%BA%A6%E6%8F%9B%E7%AE%97&amp;sa=X&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ1QJ6BAgSEAE"><div class="aXBZVd zVq10e"></div><div class="s75CSd OhScic AB4Wff"><b>節拍器速度換算</b></div></a></div></div></div></div></div></div></div></div><div jscontroller="fKZehd" style="display:none" data-u="0" jsdata="C4mkuf;_;BOc64M" jsaction="rcuQ6b:npT2md"></div></div></div><div jscontroller="GU4Gab" style="display:none" data-pcs="1" jsaction="rcuQ6b:npT2md"></div><div role="navigation"><span id="xjs"><h1 class="Uo8X3b OhScic zsYMMe">頁面導覽</h1><table class="AaVjTc" style="border-collapse:collapse;text-align:left" role="presentation"><tr jsname="TeSSVd" valign="top"><td class="d6cvqb BBwThe"><span class="SJajHc" style="background:url(/images/nav_logo321_hr.webp) no-repeat;background-position:-24px 0;background-size:167px;width:28px"></span></td><td class="YyVfkd"><span class="SJajHc" style="background:url(/images/nav_logo321_hr.webp) no-repeat;background-position:-53px 0;background-size:167px;width:20px"></span>1</td><td><a aria-label="Page 2" class="fl" href="/search?q=google+%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;ei=HYOtYeGkDZTt0ATr2qGoDw&amp;start=10&amp;sa=N&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ8tMDegQIARBA"><span class="SJajHc NVbCr" style="background:url(/images/nav_logo321_hr.webp) no-repeat;background-position:-74px 0;background-size:167px;width:20px"></span>2</a></td><td><a aria-label="Page 3" class="fl" href="/search?q=google+%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;ei=HYOtYeGkDZTt0ATr2qGoDw&amp;start=20&amp;sa=N&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ8tMDegQIARBC"><span class="SJajHc NVbCr" style="background:url(/images/nav_logo321_hr.webp) no-repeat;background-position:-74px 0;background-size:167px;width:20px"></span>3</a></td><td><a aria-label="Page 4" class="fl" href="/search?q=google+%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;ei=HYOtYeGkDZTt0ATr2qGoDw&amp;start=30&amp;sa=N&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ8tMDegQIARBE"><span class="SJajHc NVbCr" style="background:url(/images/nav_logo321_hr.webp) no-repeat;background-position:-74px 0;background-size:167px;width:20px"></span>4</a></td><td><a aria-label="Page 5" class="fl" href="/search?q=google+%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;ei=HYOtYeGkDZTt0ATr2qGoDw&amp;start=40&amp;sa=N&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ8tMDegQIARBG"><span class="SJajHc NVbCr" style="background:url(/images/nav_logo321_hr.webp) no-repeat;background-position:-74px 0;background-size:167px;width:20px"></span>5</a></td><td><a aria-label="Page 6" class="fl" href="/search?q=google+%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;ei=HYOtYeGkDZTt0ATr2qGoDw&amp;start=50&amp;sa=N&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ8tMDegQIARBI"><span class="SJajHc NVbCr" style="background:url(/images/nav_logo321_hr.webp) no-repeat;background-position:-74px 0;background-size:167px;width:20px"></span>6</a></td><td><a aria-label="Page 7" class="fl" href="/search?q=google+%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;ei=HYOtYeGkDZTt0ATr2qGoDw&amp;start=60&amp;sa=N&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ8tMDegQIARBK"><span class="SJajHc NVbCr" style="background:url(/images/nav_logo321_hr.webp) no-repeat;background-position:-74px 0;background-size:167px;width:20px"></span>7</a></td><td><a aria-label="Page 8" class="fl" href="/search?q=google+%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;ei=HYOtYeGkDZTt0ATr2qGoDw&amp;start=70&amp;sa=N&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ8tMDegQIARBM"><span class="SJajHc NVbCr" style="background:url(/images/nav_logo321_hr.webp) no-repeat;background-position:-74px 0;background-size:167px;width:20px"></span>8</a></td><td><a aria-label="Page 9" class="fl" href="/search?q=google+%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;ei=HYOtYeGkDZTt0ATr2qGoDw&amp;start=80&amp;sa=N&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ8tMDegQIARBO"><span class="SJajHc NVbCr" style="background:url(/images/nav_logo321_hr.webp) no-repeat;background-position:-74px 0;background-size:167px;width:20px"></span>9</a></td><td><a aria-label="Page 10" class="fl" href="/search?q=google+%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;ei=HYOtYeGkDZTt0ATr2qGoDw&amp;start=90&amp;sa=N&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ8tMDegQIARBQ"><span class="SJajHc NVbCr" style="background:url(/images/nav_logo321_hr.webp) no-repeat;background-position:-74px 0;background-size:167px;width:20px"></span>10</a></td><td aria-level="3" class="d6cvqb BBwThe" role="heading"><a href="/search?q=google+%E7%AF%80%E6%8B%8D%E5%99%A8&amp;sxsrf=AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227&amp;ei=HYOtYeGkDZTt0ATr2qGoDw&amp;start=10&amp;sa=N&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ8NMDegQIARBS" id="pnnext" style="text-align:left"><span class="SJajHc NVbCr" style="background:url(/images/nav_logo321_hr.webp) no-repeat;background-position:-96px 0;background-size:167px;width:71px"></span><span style="display:block;margin-left:53px">下一頁</span></a></td></tr></table></span><div id="gfn"></div><span id="fvf"></span></div></div></div><div style="clear:both"></div></div><style>@-webkit-keyframes allow-alert {from{opacity:1}to{opacity:.35}}.TCIIWe{padding-top:12px}.f6F9Be{position:absolute;bottom:0;width:100%}.ZYHQ7e{color:#70757a}.fbar a{text-decoration:none;white-space:nowrap}.fbar{}.Fx4vi{padding-left:27px;margin:0 !important}#fsl{white-space:nowrap}.f6F9Be{background:#f2f2f2;line-height:40px;padding-bottom:12px}.f6F9Be.TrMVnc{padding-top:12px}.B4GxFc{margin-left:180px}@media (min-width:1121px) and (max-width:1300px){.B4GxFc{margin-left:calc((100vw - 1065px) / 2);}}@media (max-width:1121px){.B4GxFc{margin-left:28px}}.fbar p,.fbar a{color:#70757a}.fbar a:hover{color:#3c4043}.fbar{font-size:14px}.b0KoTc{color:#70757a;}.b2hzT{border-bottom:1px solid #dadce0}.Q8LRLc{font-size:15px}.smiUbb img{margin-right:4px}.smiUbb a,.M6hT6 #swml a{text-decoration:none}.smiUbb{margin-left:180px;line-height:15px;color:#70757a;}.smiUbb a,#swml a{color:#70757a}.smiUbb a:hover,#swml a:hover{color:#3c4043}#swml a{display:inline-block}#swml{display:inline-block;margin-left:13px;padding-left:16px;border-left:1px solid #dadce0}</style><div id="bfoot"><span style="display:none"><span jscontroller="DhPYme" style="display:none" jsaction="rcuQ6b:npT2md"></span></span></div><div class="spch s2fp-h" style="display:none" id="spch"></div><div role="contentinfo" data-hveid="CAEQUw" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQpyp6BAgBEFM"><h1 class="Uo8X3b OhScic zsYMMe">頁尾連結</h1><div id="footcnt"><div class="TCIIWe" style="height:106px" id="fbarcnt"><div class="f6F9Be TrMVnc mSAqxd" id="fbar"><div class="fbar b2hzT"><div class="b0KoTc B4GxFc"><span class="Q8LRLc">台灣</span><div class="fbar smiUbb" style="visibility:hidden" id="swml"><div jscontroller="qcH9Lc" id="tsuid57" jsdata="z6bOeb;_;BOc64Q" jsaction="oEnJg:CEnhyd;gJk92:b6DXXd;gfszqc:BGFS9"></div></div></div></div><div class="fbar"><span class="B4GxFc"><span id="fsl"><a class="wHYlTd ZYHQ7e" href="https://support.google.com/websearch/?p=ws_results_help&amp;hl=zh-TW&amp;fg=1" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://support.google.com/websearch/%3Fp%3Dws_results_help%26hl%3Dzh-TW%26fg%3D1&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ8KwCegQIARBe">說明</a><a href="#" class="Fx4vi" data-bucket="websearch" data-psd-ssc="0" id="dk2qOd" target="_blank" jsaction="trigger.YcfJ" data-ved="2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQLnoECAEQXw">提供意見</a><a class="Fx4vi wHYlTd ZYHQ7e" href="https://policies.google.com/privacy?hl=zh-TW&amp;fg=1" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://policies.google.com/privacy%3Fhl%3Dzh-TW%26fg%3D1&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ8awCegQIARBg">隱私權</a><a class="Fx4vi wHYlTd ZYHQ7e" href="https://policies.google.com/terms?hl=zh-TW&amp;fg=1" ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://policies.google.com/terms%3Fhl%3Dzh-TW%26fg%3D1&amp;ved=2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ8qwCegQIARBh">服務條款</a></span></span></div></div></div></div></div><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){
    (function() {
        var c = Date.now();
        if (google.timers && google.timers.load.t) {
            for (var a = document.getElementsByTagName("img"), d = 0, b = void 0; b = a[d++];) google.c.setup(b, !1, void 0);
            google.c.frt = !1;
            google.c.e("load", "imn", String(a.length));
            google.c.ubr(!0, c);
            google.c.glu && google.c.glu();
            google.rll(window, !1, function() {
                google.tick("load", "ol");
                google.c.u("pr")
            })
        }
    })();
}).call(this); < /script></div > < /div><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){google.xjs={ck:'xjs.s.Igdsuz9tkj4.L.W.O',cs:'ACT90oEAKdsFKfddxDO03GqSjDquYrOHGw',excm:[]};})();</script > < !--cctlcm 5 cctlcm-- > < div id = "_HYOtYeGkDZTt0ATr2qGoDw81" > < /div><style>.RTZ84b{color:#70757a;cursor:pointer;padding-right:8px}.XEKxtf{color:#70757a;float:right;font-size:12px;line-height:16px;padding-bottom:4px}.lst{border:0;margin-top:5px;margin-bottom:0}.lst:focus{outline:none}.xBZH9b{overflow:hidden}.xBZH9b .sbib_a{background:#fff}.xBZH9b .sbib_a:hover{background:#fff}.xBZH9b .sbib_a:focus-within{background:#fff}#meaC1c{line-height:44px;padding:0 8px;margin-top:-1px;position:static}.srp #meaC1c{padding:0 2px 0 8px}.gsfs{font:17px arial,sans-serif}.lsb{background:transparent;border:0;font-size:0;height:30px;outline:0;text-align:left;width:100%}.sbico{display:inline-block;height:24px;width:24px;cursor:pointer;vertical-align:middle;color:#4285f4}.B7V4Ld{background:transparent;border:0;float:right;height:44px;line-height:44px;margin-top:-1px;outline:0;padding-right:16px;position:relative;top:-1px}.srp .jsb{display:none}.minidiv #gb{top:2px}.minidiv .visible-suggestions.visible-suggestions{border-bottom-left-radius:0;border-bottom-right-radius:0}.minidiv .B7V4Ld{height:32px;line-height:32px}.minidiv .sbib_b{padding-top:0}.minidiv .gsfi{font-size:14px;line-height:32px}.minidiv .gsfs{font-size:14px}.minidiv #logo img{height:28px;width:86px}#searchform.minidiv #rBtssd{padding:17px 34px 0}.minidiv li.sbsb_c .sbse{padding:0px 0}.minidiv .sbdd_a .sbdd_b,.minidiv .sbsb_a{border-bottom-left-radius:16px;border-bottom-right-radius:16px}.minidiv .sbdd_a .sbdd_b{box-shadow:0 4px 6px rgba(32,33,36,.28);}.minidiv #meaC1c{line-height:32px !important}.minidiv .sbdd_a{top:32px !important}.minidiv .gsri_a{background-size:20px 20px;height:20px;width:16px}.minidiv .B7V4Ld .sbico{height:20px;width:20px}.minidiv .xBZH9b .sbib_a{background:#fff}.gsri_a{margin-top:1px}.sbib_b{margin-top:-1px;padding-left:20px}#searchform.minidiv{margin-top:0}#gb{min-width:unset;position:relative}#gba{display:none}.Q3DXx #gb>div{padding-left:0}.minidiv .RNNXgb{height:32px;border-radius:16px;margin:10px 0 0;background:#fff;box-shadow:none;border:1px solid #dfe1e5}.emcav.emcat .RNNXgb{border-bottom-left-radius:24px;border-bottom-right-radius:24px}.minidiv .emcav.emcat .RNNXgb{border-bottom-left-radius:16px;border-bottom-right-radius:16px}.minidiv .SDkEP{padding-top:0}.FgNLaf{display:none}.minidiv .logo{padding:0 32px}.minidiv .iblpc{margin-top:0}.CKb9sd{background:none;display:flex;flex:0 0 auto}.minidiv .gLFyf{margin-top:-32px;line-height:32px;height:32px !important;}.minidiv .YacQv{height:32px !important;}.gLFyf.CJxXMe{margin-top:0}.VZUv6d{font-size:11px;font-weight:bold;white-space:nowrap;color:#fff;line-height:29px;padding:0 10px}.zJUuqf{margin-bottom:4px}.AB4Wff{margin-left:16px}.VDgVie{text-align:center}.TUOsUe{text-align:left}.vT5nhd{height:0;position:fixed;z-index:999}.ZtLxGf{box-sizing:border-box;visibility:hidden;display:inline-block}.lnctfd{animation:g-snackbar-hide 400ms cubic-bezier(.4,0,.2,1) both;animation:g-snackbar-hide 400ms cubic-bezier(.4,0,.2,1) both;visibility:inherit}.ZWC4b{animation:g-snackbar-show 500ms cubic-bezier(.4,0,.2,1) both;animation:g-snackbar-show 500ms cubic-bezier(.4,0,.2,1) both;visibility:inherit}.BDp8nf{margin-right:-8px}.z5QvOe .Xb004{display:block;padding:8px 0}.z5QvOe .BDp8nf{margin-left:0}.z5QvOe .BDp8nf g-flat-button{padding-left:0}.minidiv .dRYYxd{margin-top:0}.minidiv .BKRPef{line-height:32px}.minidiv .ExCKkf{width:20px}.minidiv .XDyW0e{line-height:32px}.minidiv .goxjub{width:20px;height:20px}.minidiv .Tg7LZd{height:32px;line-height:32px}.minidiv .Tg7LZd .zgAlFc{height:20px;width:20px}.minidiv .Tg7LZd svg{height:20px;width:20px}.S3nFnd{display:flex}.lh87ke:link,.lh87ke:visited{color:#1a0dab;cursor:pointer;font:11px arial,sans-serif;padding:0 5px;text-decoration:none;flex:auto;align-self:flex-end;margin:0 16px 5px 0}.lh87ke:hover{text-decoration:underline}.sb7{background:url() no-repeat ;min-height:0px;min-width:0px;height:0px;width:0px}.sb27{background:url(/images / searchbox / desktop_searchbox_sprites318_hr.webp) no - repeat 0 - 21 px;
background - size: 20 px;
min - height: 20 px;
min - width: 20 px;
height: 20 px;
width: 20 px
}.sb43 {
    background: url(/images/searchbox / desktop_searchbox_sprites318_hr.webp) no - repeat 0 0;background - size: 20 px;min - height: 20 px;min - width: 20 px;height: 20 px;width: 20 px
}.sb53.sb53 {
    padding: 0 4 px;margin: 0
}.Ye4jfc {
    flex - direction: row;
    flex - wrap: wrap
}.K2P9Ob {
    padding: 16 px 0 6 px 0
}.sbic.vYOkbe {
    background: center / contain no - repeat;border - radius: 4 px;margin: 4 px 7 px 4 px - 5 px;min - height: 32 px;min - width: 32 px;
}.sbre.wM6W7d {
    line - height: 18 px
}.minidiv.wM6W7d {
    font - size: 14 px
}.WggQGd {
    color: #52188c}.JCHpcb:hover{color:# 1 a73e8;text - decoration: underline;
}.JCHpcb {
    color: #80868b;font:13px arial,sans-serif;cursor:pointer;align-self:center}.sbhl{background:# eee;
}.mus_pc {
    display: block;margin: 6 px 0
}.mus_il {
    font - family: Arial, HelveticaNeue - Light, HelveticaNeue, Helvetica;
    padding - top: 7 px;
    position: relative
}.mus_il: first - child {
    padding - top: 0
}.mus_il_at {
    margin - left: 10 px
}.mus_il_st {
    right: 52 px;position: absolute
}.mus_il_i {
    align: left;margin - right: 10 px
}.mus_it3 {
    margin - bottom: 3 px;
    max - height: 24 px;
    vertical - align: bottom
}.mus_it5 {
    height: 24 px;width: 24 px;vertical - align: bottom;margin - left: 10 px;margin - right: 10 px;transform: rotate(90 deg)
}.mus_tt3 {
    color: #767676;font-size:12px;vertical-align:top}.mus_tt5{color:# 188038;font - size: 14 px
}.mus_tt6 {
    color: #d93025;font - size: 14 px
}.mus_tt8 {
    font - size: 16 px;
    font - family: Arial, sans - serif
}.mus_tt17 {
    color: #212121;font-size:20px}.mus_tt18{color:# 212121;font - size: 24 px
}.mus_tt19 {
    color: #767676;font-size:12px}.mus_tt20{color:# 767676;font - size: 14 px
}.mus_tt23 {
    color: #767676;font-size:18px}.aVbWac .sbic.vYOkbe{height:96px;width:96px;border-radius:8px;margin:0}.P8jkh{border-radius:8px;background:rgba(32,33,36,0.04);height:96px;width:96px;position:relative;z-index:2;margin:0}.mOt1Pc{display:none;margin-left:8px}.mOt1Pc{margin-top:4px}.minidiv .mOt1Pc{margin-top:6px}.VCQMIc{visibility:hidden;position:absolute;top:44px;padding:5px 6px;background-color:# 55524 d;color: #f8f9fa;border - radius: 4 px;font - size: 12 px;letter - spacing: 1 px;left: 50 % ;transform: translateX(-50 % )
}.mOt1Pc: hover.VCQMIc {
    visibility: inherit
}.mOt1Pc: focus.VCQMIc {
    visibility: hidden
}
#gb {
    height: 0;padding - left: 16 px;padding - right: 16 px
}.aCOpRe em, .aCOpRe a em, .yXK7lf em, .yXK7lf a em {
    color: #ea4335
}.wIV7Db {
    visibility: hidden
}.mn51Ef {
    vertical - align: text - bottom;
    margin - left: 5 px
}.cF4V5c {
    background - color: #fff
}.cF4V5c g - menu - item {
    display: block;font - size: 14 px;line - height: 23 px;white - space: nowrap
}.cF4V5c g - menu - item a, .cF4V5c.y0fQ9c {
    display: block;padding - top: 4 px;padding - bottom: 4 px;cursor: pointer
}.cF4V5c g - menu - item a, .cF4V5c g - menu - item a: visited, .cF4V5c g - menu - item a: hover {
    text - decoration: inherit;
    color: inherit
}.zriOQb g - menu - item {
    color: #5f6368}.zriOQb g-menu-item a,.zriOQb .y0fQ9c{line-height:16px;padding-top:8px;padding-bottom:8px}.EwsJzb{display:block}.B8Kd8d{position:absolute}.sAKBe{border-radius:8px;box-shadow:0 2px 10px 0 rgba(0,0,0,0.2)}.gLSAk{border:none;display:block;outline:none;}.rShyOb{white-space:nowrap}.gLSAk{border-radius:8px}.gLSAk{padding:5px 0}.ErsxPb{display:block;position:relative}.znKVS{padding:0 16px;vertical-align:middle}.znKVS.tnhqA{padding:0}.tnhqA>*{padding:0 16px}.ohSfHb .znKVS{padding-left:28px}.ErsxPb:hover{cursor:pointer}.ErsxPb,.fbKdEb:hover{cursor:default}.dPaec,g-menu-item[disabled]{pointer-events:none;cursor:default}.dPaec{border-top:1px solid;height:0;margin:5px 0}.znKVS{line-height:23px}.fbKdEb{background-image:url(//ssl.gstatic.com/ui/v1/menu/checkmark2.png);background-repeat:no-repeat;background-position:left center}.gvybPb,.ErsxPb:active{background-color:rgba(0, 0, 0, 0.1)}.dPaec,g-menu-item[disabled]{color:# cdcdcd!important
}.dPaec {
    border - top - color: #ebebeb
}.VpHku {
    color: #5f6368}.cB9XMd{min-width:200px}.tFYjZe{align-items:center;display:flex;justify-content:space-between;padding-bottom:4px;padding-top:4px}.tFYjZe:hover .iOHNLb,.tFYjZe:focus .iOHNLb{opacity:1}.iOHNLb{color:# 70757 a;height: 20 px;margin - top: -2 px;opacity: 0;width: 20 px
}.hdtb - tl - sel {
    border: 1 px solid #dadce0;box - shadow: inset 0 1 px 2 px 0 rgba(0, 0, 0, 0.1);background: -webkit - linear - gradient(top, #f8f9fa, #dadce0);
}.Lj8KXd {
    background - color: transparent;
    top: 0;
    width: 100 % ;
    white - space: nowrap;
    height: 22 px;
    position: absolute; - webkit - transition: top 220 ms ease - in -out;
}.yyoM4d {
    top: 58 px;padding - top: 3 px;padding - bottom: 7 px;top: 0;top: 68 px;
}.p4DDCd {
    display: none
}.hdtb - mn - hd {
    color: #70757a;display:inline-block;position:relative;padding-top:0;padding-bottom:0;padding-right:18px;padding-left:12px;line-height:22px;cursor:pointer}.hdtb-mn-hd:hover{color:# 202124
}.hdtb - mn - hd: hover.gTl8xb {
    border - color: #202124 transparent}.hdtb-mn-hd:active{color:# 1 a73e8
}.hdtb - mn - hd: active.gTl8xb {
    border - color: #1a73e8 transparent}.LkcePc{display:inline-block;width:180px}.nvELY{background-image:url(//ssl.gstatic.com/ui/v1/menu/checkmark.png);background-position:left center;background-repeat:no-repeat}.Tlae9d a,.Tlae9d .y0fQ9c{padding-left:32px;padding-right:32px}.KTBKoe{display:inline-block;padding-right:6px;white-space:nowrap}.hdtb-mn-hd.Yg3U7e{padding-left:0}.T3kYXe,.OouJcb,.rzG2be{color:# 202124
}.OouJcb, .rzG2be {
    background - color: #fff;
    border: 1 px solid #dfe1e5;
    border - radius: 1 px;
    font - size: 13 px;
    height: 17 px;
    left: 50 px;
    line - height: 17 px;
    margin: 0 4 px;
    padding: 5 px;
    position: absolute;
    width: 84 px
}.OouJcb: focus, .rzG2be: focus {
    border: 1 px solid #4285f4;box-shadow:inset 0 1px 2px rgba(0,0,0,.30);outline:none}.J6UZg .goog-date-picker{left:154px;background-color:# f8f9fa;border - radius: 2 px;border: none;font - size: 12 px;outline: none;padding: 5 px 1 px 10 px;position: absolute;top: 61 px; - webkit - user - select: none
}.J6UZg.goog - date - picker table {
    padding: 0 10 px;width: 175 px
}.J6UZg.goog - date - picker table thead td {
    border - bottom: 1 px solid #ebebeb
}.J6UZg.goog - date - picker tbody th {
    width: 0
}.J6UZg tr.goog - date - picker - head {
    height: 27 px
}.J6UZg tr.goog - date - picker - head td {
    white - space: nowrap
}.J6UZg.goog - date - picker - monthyear {
    font - size: 13 px
}.J6UZg.goog - date - picker tbody {
    outline: none;font - size: 13 px
}.J6UZg.goog - date - picker td, .J6UZg.goog - date - picker th {
    text - align: center
}.J6UZg.goog - date - picker - btn {
    background: none;border: none;cursor: pointer;font - size: 12 px;outline: none;padding: 0;position: relative;top: -1 px
}.J6UZg.goog - date - picker - btn: not(.suap3e) {
    color: #202124}.J6UZg button.goog-date-picker-btn{font-size:12px;vertical-align:middle}.J6UZg .goog-date-picker-wday,.J6UZg .goog-date-picker-date{font-weight:normal;padding:0 1px}.J6UZg .goog-date-picker-wday{padding-top:3px;line-height:15px}.J6UZg td.goog-date-picker-selected{background-color:# 1 a73e8;border - radius: 2 px;color: #fff
}.J6UZg.goog - date - picker - other - month {
    color: #dadce0
}.J6UZg.goog - date - picker - date {
    cursor: pointer;width: 20 px;line - height: 15 px
}.J6UZg.goog - date - picker - foot {
    display: none
}.J6UZg td.goog - date - picker - date: hover {
    background - color: #dadce0;
    border - radius: 2 px
}.J6UZg td.goog - date - picker - year, .J6UZg td.goog - date - picker - month {
    padding: 3 px 0
}.J6UZg button.goog - date - picker - year, .J6UZg button.goog - date - picker - month {
    color: #000}.J6UZg button.goog-date-picker-month{width:77px}.J6UZg button.goog-date-picker-year{width:50px}.J6UZg .goog-date-picker-menu{background:# fff;border: solid 1 px #4285f4;cursor:pointer;outline:none;position:absolute}.UfY8P tr:nth-child(2) .goog-date-picker-other-month{color:# 70757 a
}.T3kYXe {
    padding: 0 15 px
}.suap3e {
    color: #dadce0;pointer - events: none
}.vOvh1b {
    left: 0;background: #fff;height: 100 % ; - ms - filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=75)";opacity: .75;position: fixed;top: 0;width: 100 % ;z - index: 1000
}.J6UZg {
    left: 50 % ;background: #fff;border: 1 px solid #dadce0;box - shadow: 0 4 px 16 px rgba(0, 0, 0, .2);height: 241 px;margin - left: -202 px;position: fixed;top: 250 px;width: 373 px;z - index: 1001
}.QIQ7Cc.J6UZg {
    left: 0;margin - left: 0
}.QIQ7Cc.Jy9Ore, .QIQ7Cc.Qtsmnf {
    left: 5 px
}.QIQ7Cc.NwEGxd {
    left: -8 px
}.Gwgzqd {
    right: 11 px;background: url(data: image / png; base64, iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKBAMAAAB / HNKOAAAAElBMVEX ////39/e9vb2zs7PCwsLv7++5ffrDAAAAL0lEQVQI12MIEWBgdGVwVmQQMmEQMhJUVmRgVFYyEmBgEDJWZICSEBGILEQlWBcAq64Ft1WDk9gAAAAASUVORK5CYII=) center no-repeat;cursor:pointer;height:20px;position:absolute;top:10px;-webkit-user-select:none;width:20px}.Jy9Ore{left:42px;color:#202124;font-size:16px;position:absolute;top:34px}.Qtsmnf{left:42px;color:#202124;position:absolute}.tmDYm{top:72px}.iWBKNe{top:111px}.OouJcb{top:65px}.rzG2be{top:104px}.NwEGxd{position:relative}.qomYCd{left:50px;background-color:#f8f9fa;border-bottom-left-radius:2px;border-top-left-radius:2px;height:37px;position:absolute;top:61px;-webkit-transition:top .13s linear;width:110px}.KbfSHd{top:100px}.lRiKjb{-webkit-transition:none}.Ru1Ao{left:54px;position:absolute;top:143px}.BwGU8e{border-radius:2px;border-radius:2px;cursor:default;display:inline-block;font-size:11px;font-weight:bold;height:16px;line-height:16px;min-width:54px;padding:6px 8px 5px;text-align:center;-webkit-transition:all 0.218s,visibility 0s;-webkit-user-select:none}.BwGU8e[disabled]{pointer-events:none;background-color:#f8f9fa;border-color:#f8f9fa;color:#70757a}.fE5Rge{color:#1a73e8;background-color:#fff;border:1px solid #dadce0}.fE5Rge:hover{background-color:#F6F9FE;border:1px solid #F6F9FE}.fE5Rge:focus{background-color:#E4EEFC;border:1px solid #E4EEFC}.kdCulb{height:12px;position:absolute;top:-6px;width:12px}.LIxbuc{bottom:-12px;height:12px;position:absolute;width:12px}.kdCulb polyline,.LIxbuc polyline{fill:#fff;stroke:#dadce0;stroke-width:1px}.lSNMte{border-radius:16px}.hdtb-ab-o .LHJvCe{opacity:0;top:13px}.v5jHUb{display:none}.FcOujd .v5jHUb{display:block;border:1px solid #dadce0;border-top:0;margin-bottom:30px}.hlcw0c{margin-bottom:44px}.D0ONmb .hlcw0c:last-child{margin-bottom:0}.FcOujd .ULSxyf:first-child{margin-top:44px}.kp-blk .c94Vsf .wDYxhc:first-child{padding-top:0;border-top:0}.kp-blk.c2xzTb .wDYxhc:first-child{padding-top:0}.XzTjhb .fm06If .wDYxhc:not(.NFQFxe){padding-left:0;padding-right:0}.XzTjhb .fm06If .wDYxhc:first-child{padding-top:0}.qs-ic .kp-blk .wDYxhc:not(.NFQFxe){padding-left:26px;padding-right:26px}.XzTjhb{border:none}#rhs.IVvPP .kp-blk.XzTjhb{border:none;border-left:1px solid #dadce0;border-radius:0;padding-left:20px;margin:0;width:336px}#rhs.IVvPP .g-blk.JnwWd{width:336px}.s6JM6d .Jb0Zif .kp-blk{margin-left:0;margin-right:0}#rhs .i8qq8b .kp-blk{border:0;margin:0;background:none}#rhs .kp-blk{line-height:1.58;margin:6px 0 0 1px;border:1px solid #dfe1e5}#rhs .kp-blk .wDYxhc:not(.NFQFxe){padding-left:15px;padding-right:15px}#rhs .WY0eLb .i8qq8b .wDYxhc:not(.NFQFxe){padding:0}#rhs .g-blk.VjDLd{border:0;padding:0}.kp-blk.T1bmQ .vk_arc{margin-top:0}hr.ga9aRe{background-color:#ebebeb;border:0;height:1px;margin:0}.nGydZ{overflow:hidden}#rhs .nGydZ.NcQXPd{margin-top:16px}.JuDqlc{width:620px}.xXEKkb{color:#1a0dab !important}.knowledge-panel{font-size:14px}.zifkQc{background:none;border:none;box-shadow:none}.ruTcId .g{clear:both;padding-bottom:10px}.HanQmf .g{padding-bottom:11px}.TQc1id .i8qq8b .g{margin-bottom:16px}.TQc1id .cUnQKe .g{padding-left:16px;padding-right:16px}.XzTjhb .fm06If+.kno-ftr{padding-left:0;padding-right:0}.XzTjhb .fm06If .ifM9O>.kno-ftr{margin-top:16px;margin-bottom:32px;margin-right:0;padding:0}.kp-blk.SldcQ .fm06If .kno-ftr{margin-top:-68px;margin-bottom:52px}#rhs .WY0eLb .i8qq8b .kno-ftr{padding-right:36px}.BHxvde .wDYxhc:not(.NFQFxe){border-top:1px solid #dadce0;margin-top:16px;padding-left:0;padding-right:0;padding-top:15px}.BHxvde .wDYxhc:first-child:not(.mnr-c){border-top:0;}.garHBe{color:#202124;font-size:20px;line-height:1.3;position:relative}.garHBe a{color:#202124}.xpdopen .Hhmu2e{overflow:inherit}.SHa8ve{display:none}.rKR6H{padding-top:0.1px}.Wnoohf .xpdopen .yp1CPe .xpdbox g-more-link{top:28px}.OJXvsb .xpdclose .wDYxhc.siXlze{padding-bottom:16px}.A4O3hd{box-shadow:none !important}.ecRggb{background-color:#fff;box-shadow:none;border:1px solid #dfe1e5;border-radius:8px;margin:0 0 16px 0}.Yhekq{padding-bottom:16px;background-color:#fff;border-bottom:1px solid #e5e5e5;margin:0 -16px;}.cUBaxf{margin:0 0 0 16px}.tLOZs{right:0;top:45px}.G0vQrb{padding-bottom:2px}.hTjq8d{background:#fff;height:1px;position:absolute;-webkit-transform-origin:0 0;width:1px;z-index:-1}.OLkjcf{display:none;margin-top:-2px;margin-bottom:-2px;overflow:hidden}.wBSUcc{box-shadow:none;height:2px}.BUybKe,.HsnFBf{margin-left:16px}.BUybKe,.oM2GA{margin-right:16px}.XO7rhc{margin-right:-16px;margin-left:-16px}.ZM7ZNb{margin-right:-16px}.HbX59e{margin-left:0px}.r2fjmd{margin-bottom:0px;margin-top:0px}.u8H8Fd{box-shadow:0 1px 0 #ebebeb}.WuRuJe{background-color:white;bottom:0;height:2px;left:-1px;right:0;position:absolute;width:0}.NDZmNe .KYeOtb{border-bottom:2px solid}.NDZmNe .KYeOtb.rWAMad{border-bottom:0}.Qlb37c{margin-left:2px;margin-right:2px}.tzM4td{margin-bottom:8px;margin-top:8px}.zVq10e{border-radius:4px}.ODONMd{border-top:1px solid rgba(0,0,0,.12)}.eKdRue{width:50%}.eKdRue .cZGzVc{display:inherit;position:absolute;transform:translate3d(100%,0px,0px)}@media screen and (orientation:landscape){.nvEVYb{width:50%}.nvEVYb .cZGzVc{display:inherit;position:absolute;transform:translate3d(100%,0px,0px)}}@media screen and (orientation:portrait){.nvEVYb{min-width:0 !important}}.dkVX9e{min-width:100%}.rsZ9Vc{-webkit-transition:height 700ms cubic-bezier(0.190,1.000,0.220,1.000)}.GvpHDb{overflow-y:auto;}.R6np5e{height:100%}.FIfWIe{margin-left:4px}.s8bAkb{padding-bottom:0px;padding-top:0px}.gTewb{padding-left:8px;padding-right:8px}.unhzXb{border-radius:2px}.znlzCd{border-radius:12px}.yneMte{overflow-x:hidden}.m8vZ3d{display:flex}.CfceXb.u2sJ0e .lA0GG{left:48px}.TdRuOd:hover{cursor:pointer;text-decoration:underline}div.iOWvff{float:right}.b3Ke9b{color:#70757a;cursor:pointer}.hELpae{color:#70757a;float:right;font-size:12px;line-height:1.34}.QPML4e{font-style:italic;margin-right:-2em}div.VTZT1b{padding:4px 16px 0 8px;margin-bottom:-4px}.kno-ftr.VjDLd{margin-left:0;padding-top:4px}#rhs .kno-ftr.VjDLd{border:none}.HpcQd{outline:0;font-style:italic}.HpcQd:hover{cursor:pointer;text-decoration:underline}.NrWpud .VwiC3b{overflow:ellipsis;width:220px}.NrWpud .LC20lb{white-space:nowrap;max-width:100%;text-overflow:ellipsis;overflow:hidden}.bbhULc .LC20lb{font-size:0px}.d4rhi .LC20lb{margin-bottom:3px}.Q0F1ke .IsZvec{width:652px}.c2xzTb .LC20lb{margin-bottom:0}.MMgsKf{padding-top:2px}.LAWljd{padding:0 2px 0 4px}.hcV4Re{font-style:normal}.oqQXff{height:16px}.UfGzPc{border-top:1px solid #ecedef;margin-left:0}.YeThId{border-top:1px solid #ecedef}.FalWJb{background:#fff;}.O3JH7.qLBFXd{color:#202124;font-size:16px;line-height:24px;margin-bottom:0px;padding:9px 16px 0px}.O3JH7.fnYJle{padding:0px}.spch-dlg{background:transparent;border:none}.spch{background:#fff;height:100%;left:0;opacity:0;overflow:hidden;position:fixed;text-align:left;top:0;visibility:hidden;width:100%;z-index:10000;transition:visibility 0s linear 0.218s,background-color 0.218s}.close-button{background:none;border:none;color:#70757a;cursor:pointer;font-size:26px;right:0;line-height:15px;opacity:.6;margin:-1px -1px 0 0;padding:0 0 2px 0;height:48px;width:48px;position:absolute;top:0;z-index:10}.close-button:hover{opacity:.8}.close-button:active{opacity:1}.spchc{display:block;height:42px;position:absolute;pointer-events:none}.inner-container{height:100%;opacity:.1;pointer-events:none;width:100%;transition:opacity .318s ease-in}.s2ml .inner-container,.s2ra .inner-container,.s2er .inner-container{opacity:1;transition:opacity 0s}.s2fp.spch{opacity:1;visibility:visible;transition-delay:0s}.s2tb-h.spch{background:rgba(255,255,255,0);opacity:0;visibility:hidden}.s2tb.spch{background:rgba(255,255,255,0);opacity:1;visibility:visible;transition-delay:0s}.google-logo{background:url(data:image/png;base64,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) no-repeat center;background-size:94px 32px;height:32px;width:94px;top:8px;opacity:0;float:right;left:255px;pointer-events:none;position:relative;transition:opacity .5s ease-in,left .5s ease-in}.s2tb .google-logo{opacity:0.54;left:270px;transition:opacity .5s ease-out,left .5s ease-out}.s2fp .spchc,.s2fp-h .spchc{margin:auto;margin-top:312px;max-width:572px;min-width:534px;padding:0 223px;position:relative;top:0}.s2tb .spchc,.s2tb-h .spchc{background:#fff;box-shadow:0 2px 6px rgba(0,0,0,.2);margin:0;min-width:100%;overflow:hidden;padding:51px 0 50px 126px;position:absolute}.s2tb-h .inner-container,.s2tb .inner-container{height:100%;width:572px;transition:opacity .318s ease-in}.spch.s2tb.mVRQbc{background:rgba(255,255,255,0.9)}.button{background-color:#fff;border:1px solid #eee;border-radius:100%;bottom:0;box-shadow:0 2px 5px rgba(0,0,0,.1);cursor:pointer;display:inline-block;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:background-color 0.218s,border 0.218s,box-shadow 0.218s}.s2tb-h .button{left:-83px;opacity:0;pointer-events:none;position:absolute;top:-83px;transition-delay:0}.s2fp-h .button,.s2fpm-h .button{opacity:0;pointer-events:none;position:absolute;transition-delay:0}.s2fp .button,.s2tb .button,.s2fpm .button{opacity:1;pointer-events:auto;position:absolute;transform:scale(1);transition-delay:0}.s2ra .button{background-color:#f44;border:0;box-shadow:none}.r8s4j{background-color:#dbdbdb;border-radius:100%;display:inline-block;height:301px;left:-69px;opacity:1;pointer-events:none;position:absolute;top:-69px;width:301px;transform:scale(.01);transition:opacity 0.218s}.s2tb-h .r8s4j,.s2tb .r8s4j{height:151px;left:-28px;top:-28px;width:151px}.button-container{pointer-events:none;position:relative;transition:transform 0.218s,opacity 0.218s ease-in}.s2fp-h .button-container,.s2fp .button-container{height:165px;right:-70px;top:-70px;width:165px;float:right}.s2fpm-h .button-container,.s2fpm .button-container{height:165px;margin:0 auto;top:150px;width:165px}.s2fp-h .button-container,.s2tb-h .button-container,.s2fpm-h .button-container{transform:scale(.1)}.s2fp .button-container,.s2fpm-h .button-container,.s2tb .button-container{transform:scale(1)}.s2tb-h .button-container,.s2tb .button-container{height:95px;right:-31px;top:-27px;width:95px;float:right}.s2ra .button:active{background-color:#cd0000}.button:active{background-color:#eee}.microphone{height:87px;left:43px;pointer-events:none;position:absolute;top:47px;width:42px;transform:scale(1)}.s2tb-h .microphone,.s2tb .microphone{left:17px;top:7px;transform:scale(.53)}.receiver{background-color:#999;border-radius:30px;height:46px;left:25px;pointer-events:none;position:absolute;width:24px}.wrapper{bottom:0;height:53px;left:11px;overflow:hidden;pointer-events:none;position:absolute;width:52px}.stem{background-color:#999;bottom:14px;height:14px;left:22px;pointer-events:none;position:absolute;width:9px;z-index:1}.shell{border:7px solid #999;border-radius:28px;bottom:27px;height:57px;pointer-events:none;position:absolute;width:38px;z-index:0;left:0px}.s2ml .receiver,.s2ml .stem{background-color:#f44}.s2ml .shell{border-color:#f44}.s2ra .receiver,.s2ra .stem{background-color:#fff}.s2ra .shell{border-color:#fff}.text-container{pointer-events:none}.s2fp-h .text-container,.s2fp .text-container,.s2fpm-h .text-container,.s2fpm .text-container{position:absolute}.s2tb-h .text-container,.s2tb .text-container{position:relative}.spcht{font-weight:normal;line-height:1.2;opacity:0;pointer-events:none;position:absolute;text-align:left;-webkit-font-smoothing:antialiased;transition:opacity .1s ease-in,margin-left .5s ease-in,top 0s linear 0.218s}.s2fp-h .spcht,.s2fpm-h .spcht{margin-left:44px}.s2tb-h .spcht{margin-left:32px}.s2fp-h .spcht,.s2fp .spcht,.s2fpm-h .spcht,.s2fpm .spcht{left:-44px;top:-.2em}.s2fp-h .spcht,.s2fp .spcht{font-size:32px;width:460px}.s2fpm-h .spcht,.s2fpm .spcht{font-size:28px;width:300px}.s2tb-h .spcht,.s2tb .spcht{font-size:27px;left:7px;top:.2em;width:490px}.s2fp .spcht,.s2fpm .spcht,.s2tb .spcht{margin-left:0;opacity:1;transition:opacity .5s ease-out,margin-left .5s ease-out}.spchta{color:#15c;cursor:pointer;font-size:18px;font-weight:500;pointer-events:auto;text-decoration:underline}.spch-2l.spcht,.spch-3l.spcht,.spch-4l.spcht{transition:top 0.218s ease-out}.spch-2l.spcht{top:-.6em}.spch-3l.spcht{top:-1.3em}.spch-4l.spcht{top:-1.7em}.s2fp .spch-5l.spcht{top:-2.5em}.s2tb .spch-5l.spcht{font-size:24px;top:-1.7em;transition:font-size 0.218s ease-out}.permission-bar{margin-top:-100px;opacity:0;pointer-events:none;position:absolute;width:500px;transition:opacity 0.218s ease-in,margin-top .4s ease-in}.s2wfp .permission-bar{margin-top:-300px;opacity:1;transition:opacity .5s ease-out 0.218s,margin-top 0.218s ease-out 0.218s}.permission-bar-gradient{box-shadow:0 1px 0px #4285f4;height:80px;left:0;margin:0;opacity:0;pointer-events:none;position:fixed;right:0;top:-80px;transition:opacity 0.218s,box-shadow 0.218s}.s2wfp .permission-bar-gradient{box-shadow:0 1px 80px #4285f4;opacity:1;pointer-events:none;animation:allow-alert .75s 0 infinite;animation-direction:alternate;animation-timing-function:ease-out;transition:opacity 0.218s,box-shadow 0.218s}.f6F9Be.dc8jac{padding-top:24px}.known_loc{background:#4285f4}.unknown_loc{background:#70757a}.yLngu{border-radius:100%;display:inline-block;height:10px;margin:6px 4px 9px 0;vertical-align:middle;width:10px}#Wprf1b{color:#3c4043;font-weight:bold}.KwU3F{color:#1a73e8}.plhhYd{display:inline-block}.xSQxL{color:#1a73e8;cursor:pointer;display:inline-block}.OosGzb{width:376px}.HDOrGf{line-height:40px}.hObAcc{margin-left:4px;margin-right:4px}.U8shWc{background-color:transparent;border:none;border-radius:8px;border-radius:8px;box-sizing:border-box;cursor:pointer;display:inline-block;font-size:14px;font-weight:500;padding-top:6px;padding-bottom:3px;min-width:88px;position:relative;text-decoration:none !important;-webkit-user-select:none;white-space:nowrap}.U8shWc:disabled,.U8shWc[disabled]:not([disabled=false]){pointer-events:none}.U8shWc.fSXIc{min-width:64px}.U8shWc.hpZDWd{color:#fff}.hpZDWd:hover{background-color:rgba(204,204,204,.15)}.hpZDWd:focus{background-color:rgba(204,204,204,.15)}.hpZDWd:active{background-color:rgba(204,204,204,.25)}.U8shWc.hpZDWd:disabled,.U8shWc.hpZDWd[disabled]:not([disabled=false]){color:rgba(255,255,255,.30) !important}.aepCxe{padding:14px 0;margin:-14px 0}.lxG8Hd.aID8W{background-color:rgba(32,33,36,0.6);opacity:1;visibility:inherit}.qW28Ef.aID8W{background-color:#000;opacity:0.4;visibility:inherit}.m114nf.aID8W{background-color:#202124;opacity:0.7;visibility:inherit}.xq162b.aID8W{background-color:#000;opacity:0.8;visibility:inherit}.Xz5tfb.aID8W{background-color:#f8f9fa;opacity:0.85;visibility:inherit}.Kg0gUe.aID8W{background-color:#202124;opacity:0.6;visibility:inherit}.NJfJb.aID8W{opacity:1}.bErdLd.aID8W{opacity:1;visibility:inherit}.bErdLd.hFCnyd{cursor:pointer}.bErdLd.hFCnyd .NJfJb{cursor:default}.t7xA6{position:fixed;z-index:9997;right:0;bottom:-200px;top:0;left:0;-webkit-transition:opacity 0.25s;opacity:0;visibility:hidden}.NJfJb{border-radius:8px;border-radius:8px;display:inline-block;z-index:9999;background-color:#fff;opacity:0;white-space:normal;overflow:hidden;box-shadow:0px 5px 26px 0px rgba(0,0,0,0.22),0px 20px 28px 0px rgba(0,0,0,0.3)}.NJfJb.o1VDwe{background-color:transparent;box-shadow:none}.NJfJb.Sr5CLc{position:relative;vertical-align:middle}.NJfJb.ZbLCRc{position:absolute}.NJfJb.mr5vfb{border:1px solid #dadce0;box-shadow:0 2px 4px #dadce0;box-shadow:0 2px 4px #dadce0}.bErdLd{position:fixed;right:0;bottom:0;top:0;left:0;z-index:9998;vertical-align:middle;visibility:hidden;white-space:nowrap;max-height:100%;max-width:100%;overflow-x:hidden;overflow-y:auto}.bErdLd.wwYr3{text-align:center}.bErdLd::after{content:'';display:inline-block;height:100%;vertical-align:middle}.bErdLd{-webkit-tap-highlight-color:rgba(0,0,0,0.0)}.ls8Qne{height:0;opacity:0;position:absolute;width:0}.OxAxec{visibility:hidden}.QVCmK{overflow:hidden}.llJxV .NJfJb{max-width:100%}.eJ7tvc{color:#70757a;margin:12px 20px;font-size:14px}.AUiS2{border:1px solid #dadce0;border-radius:8px;box-shadow:0 1px 2px rgba(0,0,0,.20);display:none;margin-top:10px;opacity:0;outline:none;position:relative;top:2px;margin-bottom:2px;transform-origin:top left;transition:all 150ms ease-in-out;white-space:nowrap;}.N90jdc{background-image:url(data:image/svg+xml,%0A%3Csvg%20focusable%3D%22false%22%20width%3D%2216px%22%20height%3D%2216px%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M7.41%207.84L12%2012.42l4.59-4.58L18%209.25l-6%206-6-6z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E%0A);background-repeat:no-repeat;background-position:center;height:16px;position:absolute;top:calc(100% + 15px);right:4px;margin-right:-12px;margin-top:-34px;outline-width:0;opacity:0;padding:3px;transition:transform 200ms ease-in-out,opacity 200ms ease-in-out;transform:rotate(-90deg);width:16px}.d8lLoc{background-color:transparent;transform-origin:top}.hYkSRb{display:inline-block;overflow-x:hidden;overflow-y:hidden;margin-left:-16px;padding-right:24px;width:100%;padding-left:20px}.hYkSRb::-webkit-scrollbar{display:none}.XCKyNd{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2048%2048%22%20fill%3D%22%23000000%22%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M38%2012.83L35.17%2010%2024%2021.17%2012.83%2010%2010%2012.83%2021.17%2024%2010%2035.17%2012.83%2038%2024%2026.83%2035.17%2038%2038%2035.17%2026.83%2024z%22%2F%3E%0D%0A%20%20%20%20%3Cpath%20d%3D%22M0%200h48v48H0z%22%20fill%3D%22none%22%2F%3E%0D%0A%3C%2Fsvg%3E%0D%0A);background-position:center;background-repeat:no-repeat;height:16px;opacity:0.54;padding:12px;position:absolute;right:0;top:0;width:16px;z-index:10}.XCKyNd:focus{outline:none}.exp-outline{position:absolute;transition:opacity 150ms ease-in-out,height 150ms ease-in-out;pointer-events:none;opacity:0;width:calc(100% - 2px);left:0;transform:translateY(-11px)}.d8lLoc{padding-left:15px}.AUiS2{box-shadow:none;margin-top:8px;}.hYkSRb{line-height:24px;margin-left:0;overflow-x:hidden;padding-left:0;padding-right:0;white-space:normal;width:calc(100% - 24px)}.exp-r{display:inline-block;margin-bottom:0;margin-right:16px}.N90jdc{transform:none}.eJ7tvc{margin-bottom:4px;margin-left:0;margin-top:14px}.exp-c{display:inline-block;vertical-align:top}.exp-r{display:block}.hYkSRb{max-height:72px;white-space:nowrap}</style><script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){google.llirm='400px';google.ldi={};google.pim={};})();</script> <script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){google.xjs={ck:'xjs.s.Igdsuz9tkj4.L.W.O',cs:'ACT90oEAKdsFKfddxDO03GqSjDquYrOHGw',excm:[]};})();</script> <script nonce="EEcYuPapLeT27Qm24Kw9uw==">(function(){google.kEXPI='0,18168,1284368,56873,6058,207,1987,2817,2316,145,238,23,223,5,1354,4013,1238,1122515,1223,796345,14,34,13157,13701,2782,10846,2301,78,534,609,48,21,356045,644,328885,8399,3562,3320,2044,314,1526,1770,1137,4795,5298,2488,328,5033,10931,278,1192,14923,7049,2445,3439,845,4693,10213,13149,1800,512,2111,4858,1362,9291,3020,17588,4998,13228,3847,3776,416,6430,3934,448,12,866,12,5,7,2148,7331,7059,919,5081,62,1531,1279,2212,240,292,147,1103,840,1030,953,213,4101,3514,606,2025,2295,5766,257,1931,1031,3108,2585,3219,2845,7,4773,826,2424,257,2147,2,1925,5096,7540,3799,4981,908,2,941,2614,13142,3,346,230,6460,148,12202,112,16,1645,4,1528,2304,6462,1972,17,3271,6812,10268,3310,2658,3438,2286,977,656,30,13628,2305,2132,16786,811,1710,3288,1,2547,4094,3138,6,908,3,3540,14265,2261,283,912,5996,12491,2164,3787,2,5899,6470,1650,1931,92,3817,1680,744,5852,1576,3,7747,128,1009,1160,4613,2086,2381,2718,3715,1,7590,2864,4064,27,2,6,388,1293,3620,1688,16,750,873,1059,2635,2578,1280,1856,542,2,1505,2528,2,1,3,378,2216,91,3383,392,1,5814,2315,4791,254,964,27,5794,38,8,4215,974,2646,1374,782,1271,85,240,276,2921,1,23,1,159,285,1768,360,504,1100,165,3,2,145,21,406,103,884,1,2,227,422,4,701,298,1318,495,135,973,86,15,52,1039,237,32,1360,531,919,664,1130,1473,570,979,437,2928,450,140,671,1318,68,1072,1,3,2,2040,43,1,2,325,189,186,251,80,91,181,2,1,2,623,225,208,338,215,1137,251,770,2,233,586,6,32,49,185,21,130,24,6,711,6,2,355,2,652,1071,950,478,20,38,795,786,1142,358,1634,62,219,2,365,91,482,152,1,14,79,353,8,17,796,18,461,113,501,124,3,1,1,9,1396,5520049,2032,100,90,256,315,104,179,1802291,4193979,259,26778460,1515990,1346036,1178428,531,366,338,3,2414,1007,484,9,1435,159,1358,1131,3589,3,929,1540,1848,831411';})();(function(){var u='/xjs/_/js/k\x3dxjs.s.zh_TW.7jyYdt7iH4A.O/am\x3dMmAEAAAAAXA3IgGYAQAAAABAAA4SEHg3AAFAAFQjIIFjLgSQAACAGAAASAQEGAMJAgQOEAAAAOAjvgFy_gYARtCECwAAAAAAAAiAS5ChAomCACAAAAAAQKymrsYZIgQAAg/d\x3d1/ed\x3d1/dg\x3d2/esmo\x3d1/br\x3d1/rs\x3dACT90oEXffJk4DS4DRbNKEtnS5bervajMQ/m\x3dattn,cdos,dpf,hsm,jsa,d,csi';
        var e = this || self, f = function(a) {
            return a
        };
        var g;
        var l = function(a, b) {
            this.g = b === h ? a : ""
        }; l.prototype.toString = function() {
            return this.g + ""
        };
        var h = {};

        function m() {
            var a = u;
            google.lx = function() {
                n(a);
                google.lx = function() {}
            };
            google.bx || google.lx()
        }

        function n(a) {
            google.timers && google.timers.load && google.tick && google.tick("load", "xjsls");
            var b = document;
            var c = "SCRIPT";
            "application/xhtml+xml" === b.contentType && (c = c.toLowerCase());
            c = b.createElement(c);
            if (void 0 === g) {
                b = null;
                var k = e.trustedTypes;
                if (k && k.createPolicy) {
                    try {
                        b = k.createPolicy("goog#html", {
                            createHTML: f,
                            createScript: f,
                            createScriptURL: f
                        })
                    } catch (p) {
                        e.console && e.console.error(p.message)
                    }
                    g = b
                } else g = b
            }
            a = (b = g) ? b.createScriptURL(a) : a;
            a = new l(a, h);
            c.src = a instanceof l && a.constructor === l ? a.g : "type_error:TrustedResourceUrl";
            var d;
            a = (c.ownerDocument && c.ownerDocument.defaultView || window).document;
            (d = (b = null === (d = a.querySelector) || void 0 === d ? void 0 : d.call(a, "script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
            document.body.appendChild(c);
            google.psa = !0
        }; google.xjsu = u; setTimeout(function() {
            m()
        }, 0);
    })();

function _DumpException(e) {
    throw e;
}

function _F_installCss(c) {}
(function() {
    google.jl = {
        attn: false,
        blt: 'none',
        chnk: 0,
        dw: false,
        dwu: true,
        emtn: 0,
        end: 0,
        ine: false,
        lls: 'viewport',
        pdt: 0,
        rep: 0,
        snet: true,
        strt: 0,
        ubm: false,
        uwp: true
    };
})();
(function() {
    var pmc = '{\x22aa\x22:{},\x22abd\x22:{\x22abd\x22:false,\x22deb\x22:false,\x22det\x22:false},\x22async\x22:{},\x22attn\x22:{},\x22bgd\x22:{\x22ac\x22:true,\x22as\x22:true,\x22at\x22:0,\x22ea\x22:true,\x22ed\x22:0,\x22ei\x22:true,\x22el\x22:true,\x22ep\x22:true,\x22er\x22:true,\x22et\x22:0,\x22eu\x22:false,\x22wl\x22:false},\x22cdos\x22:{\x22bih\x22:591,\x22biw\x22:1280,\x22cdobsel\x22:false,\x22dpr\x22:\x222\x22},\x22csi\x22:{},\x22d\x22:{},\x22dpf\x22:{},\x22dvl\x22:{\x22cookie_secure\x22:true,\x22cookie_timeout\x22:21600,\x22driver_ui_type\x22:2,\x22is_last_location_fresh\x22:false,\x22jsc\x22:\x22[null,null,null,30000,null,null,null,2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[\\\x2286400000\\\x22,\\\x22604800000\\\x22,2],null,null,21600000,null,null,1,null,null,null,null,null,1]\x22,\x22mnr_crd\x22:\x221\x22,\x22msg_dsc\x22:\x22根據你的地點 (住家)\x22,\x22msg_dsc_url\x22:\x22https://support.google.com/maps/answer/3184808\x22,\x22msg_dvl\x22:\x22來自你的裝置\x22,\x22msg_err\x22:\x22無法取得位置\x22,\x22msg_gps\x22:\x22使用 GPS\x22,\x22msg_unk\x22:\x22未知的\x22,\x22msg_upd\x22:\x22更新位置\x22,\x22msg_use\x22:\x22使用精確位置\x22,\x22use_local_storage_fallback\x22:false,\x22uul_text\x22:\x22忠孝里 新北市汐止區\x22},\x22foot\x22:{\x22dv\x22:\x22s1vcvVkbS_NNECBuCtWvdH1HwYLc2Net5q0RccyLCQEAAGD139BTnYWQRwAAAADbqIpnojPIFgAAAA\x22},\x22gf\x22:{\x22pid\x22:196,\x22si\x22:true},\x22hsm\x22:{},\x22jsa\x22:{\x22csi\x22:true,\x22csir\x22:100},\x22kyn\x22:{},\x22lli\x22:{},\x22mu\x22:{\x22murl\x22:\x22https://adservice.google.com/adsid/google/ui\x22},\x22pHXghd\x22:{},\x22sb_wiz\x22:{\x22onf\x22:\x22EAE\x22,\x22scq\x22:\x22\x22,\x22stok\x22:\x22lT9GVOUIls0wM5pxxFvDrLl6mDU\x22,\x22ueh\x22:\x22e5c3a6a0_e876aa88_4a0d96c5_3af172bf_c72098ae\x22},\x22sf\x22:{},\x22sonic\x22:{},\x22spch\x22:{\x22ae\x22:\x22請檢查您的麥克風。\\u003Ca href\x3d\\\x22https://support.google.com/chrome/?p\x3dui_voice_search\\\x22 target\x3d\\\x22_blank\\\x22\\u003E瞭解詳情\\u003C/a\\u003E\x22,\x22hl\x22:\x22zh-Hant-TW\x22,\x22im\x22:\x22按一下 [允許]\\u003Cb\\u003E\\u003C/b\\u003E 即可開始進行語音搜尋\x22,\x22iw\x22:\x22等待中...\x22,\x22lm\x22:\x22收聽中...\x22,\x22lu\x22:\x22目前尚未提供%1$s語音搜尋服務\x22,\x22mb\x22:false,\x22ne\x22:\x22沒有網際網路連線\x22,\x22nt\x22:\x22不太瞭解您的意思。\\u003Cspan\\u003E再試一次\\u003C/span\\u003E\x22,\x22nv\x22:\x22請檢查您的麥克風和音量。\\u003Ca href\x3d\\\x22https://support.google.com/chrome/?p\x3dui_voice_search\\\x22 target\x3d\\\x22_blank\\\x22\\u003E瞭解詳情\\u003C/a\\u003E\x22,\x22pe\x22:\x22語音搜尋功能已關閉。\\u003Ca href\x3d\\\x22https://support.google.com/chrome/?p\x3dui_voice_search\\\x22 target\x3d\\\x22_blank\\\x22\\u003E詳細資訊\\u003C/a\\u003E\x22,\x22rm\x22:\x22請開始說話\x22},\x22tl\x22:{\x22rvkey\x22:\x22AIzaSyC_9Rt88UMjzgg5pIVArnfuIVkJx4zCdTY\x22},\x22tt\x22:{\x22ttdomain\x22:\x22https://adservice.google.com\x22,\x22tturl\x22:\x22/tt/i\x22}}';
    google.pmc = JSON.parse(pmc);
})();
(function() {
    var r = ['sb_wiz', 'aa', 'abd', 'async', 'bgd', 'dvl', 'foot', 'kyn', 'lli', 'mu', 'pHXghd', 'sf', 'sonic', 'spch', 'tl', 'tt'];
    google.plm(r);
})();
(function() {
    var m = ['BOc63k', '[\x22gws-wiz\x22,\x22\x22,\x22google 節拍器\x22,\x22\x22,null,1,0,0,11,\x22zh-TW\x22,\x22lT9GVOUIls0wM5pxxFvDrLl6mDU\x22,\x22e5c3a6a0e876aa884a0d96c53af172bfc72098ae\x22,\x22HYOtYeGkDZTt0ATr2qGoDw\x22,0,\x22zh-TW\x22,null,null,null,3,5,null,8,null,\x22\x22,-1,0,0,null,1,0,null,1,1,0,1,0,0,10,-1,null,0,null,null,1,0,0,0,0,0.1,null,0,100,1,null,1.15,1,null,null,null,0,null,1,1,1,6,0,null,null,null,null,null,9,0,0,0,null,null,0,null,null,0,0,1,null,null,null,null,null,null,null,0,null,0,0,0,null,\x22\x22,0,1,0,-1,null,0]', 'BOc63o', '[null,null,null,[null,null,[[[3,null,null,[null,[[\x22lr_\x22,1,6],[\x22lr_lang_1zh-CN|lang_1zh-TW\x22,0,6],[\x22lr_lang_1zh-TW\x22,0,6]],0]],[3,null,null,[null,[[\x22qdr_\x22,1,6],[\x22qdr_h\x22,0,6],[\x22qdr_d\x22,0,6],[\x22qdr_w\x22,0,6],[\x22qdr_m\x22,0,6],[\x22qdr_y\x22,0,6],[\x22cdr_opt\x22,0,1,[1,\x22自訂日期範圍...\x22,null,\x22cdr:1,cd_min:x,cd_max:x\x22,\x22\x22,\x22text\x22,\x22\x22,\x22\x22,6,null,[[[\x22q\x22,\x22google 節拍器\x22],[\x22sxsrf\x22,\x22AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x22]]],\x22cdr_opt\x22,\x222004-5-23\x22,0]]],1]],[3,null,null,[null,[[\x22li_\x22,1,6],[\x22li_1\x22,0,6]],2]]],null,[\x22tbs\x22]]],null,null,[null,[[\x22/search?q\\u003dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\\u0026sxsrf\\u003dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\\u0026source\\u003dlnms\x22,null,null,\x22全部\x22,1,0,1,null,null,\x22WEB\x22,[0,2],null,null,0],[\x22/search?q\\u003dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\\u0026sxsrf\\u003dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\\u0026source\\u003dlnms\\u0026tbm\\u003disch\x22,null,null,\x22圖片\x22,0,0,1,null,null,\x22IMAGES\x22,[6,2],null,null,6],[\x22https://maps.google.com/maps?q\\u003dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\\u0026um\\u003d1\\u0026ie\\u003dUTF-8\x22,null,null,\x22地圖\x22,0,0,1,null,null,\x22MAPS\x22,[8,2],null,null,8],[\x22/search?q\\u003dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\\u0026sxsrf\\u003dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\\u0026source\\u003dlnms\\u0026tbm\\u003dnws\x22,null,null,\x22新聞\x22,0,0,1,null,null,\x22NEWS\x22,[10,2],null,null,10],[\x22/search?q\\u003dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\\u0026sxsrf\\u003dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\\u0026source\\u003dlnms\\u0026tbm\\u003dvid\x22,null,null,\x22影片\x22,0,0,1,null,null,\x22VIDEOS\x22,[13,2],null,null,13]],[[\x22/search?q\\u003dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\\u0026sxsrf\\u003dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\\u0026source\\u003dlnms\\u0026tbm\\u003dshop\x22,null,null,\x22購物\x22,0,0,1,null,null,\x22SHOPPING\x22,[12,2],null,null,12],[\x22/search?q\\u003dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\\u0026sxsrf\\u003dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\\u0026source\\u003dlnms\\u0026tbm\\u003dbks\x22,null,null,\x22書籍\x22,0,0,1,null,null,\x22BOOKS\x22,[2,2],null,null,2],[\x22https://www.google.com/flights?q\\u003dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\\u0026sxsrf\\u003dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\\u0026source\\u003dlnms\\u0026tbm\\u003dflm\x22,null,null,\x22航班\x22,0,0,1,null,null,\x22FLIGHTS\x22,[20,2],null,null,20],[\x22//www.google.com/finance\x22,null,null,\x22財經\x22,0,0,1,null,null,\x22FINANCE\x22,[22,2],null,null,22]]]]', 'BOc63s', '[4,1,null,null,1,0,0,0,0,0,0,0]', 'BOc63w', '[\x22\x22,6,0,\x22\x22,\x22\x22]', 'BOc630', '[6,3,null,null,1,0,0,0,0,0,0,0]', 'BOc634', '[\x22\x22,4,0,\x22\x22,\x22\x22]', 'BOc64E', '[\x22\x22,1,0,\x22\x22,\x22\x22]', 'BOc638', '[0,1,1,1,0,\x22#202124\x22,4,\x22\x22,0,0,0,1,\x22#70757a\x22]', 'BOc64A', '[0,1,0,0,1,0.125,0,0,0,0,1,1,1,1,0,1,0]', 'BOc64I', '[1,0,0,0,0,0,0,0]', 'BOc640', '[0,2500,\x22/search?sxsrf\\u003dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x22,\x223\x22,\x22inline\x22,2,0,0,null,0,0,0,0]', 'BOc64c', '[0,2500,\x22/search?sxsrf\\u003dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x22,\x224\x22,\x22inline\x22,2,0,0,null,0,0,0,0]', 'BOc64w', '[0,2500,\x22/search?sxsrf\\u003dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x22,\x225\x22,\x22inline\x22,2,0,0,null,0,0,0,0]', 'BOc64g', '[0,2500,\x22/search?sxsrf\\u003dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x22,\x226\x22,\x22inline\x22,2,0,0,null,0,0,0,0]', 'BOc64k', '[0,2500,\x22/search?sxsrf\\u003dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x22,\x227\x22,\x22inline\x22,2,0,0,null,0,0,0,0]', 'BOc64s', '[0,2500,\x22/search?sxsrf\\u003dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x22,\x228\x22,\x22inline\x22,2,0,0,null,0,0,0,0]', 'BOc64o', '[0,2500,\x22/search?sxsrf\\u003dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x22,\x229\x22,\x22inline\x22,2,0,0,null,0,0,0,0]', 'BOc64Y', '[0,2500,\x22/search?sxsrf\\u003dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x22,\x2210\x22,\x22inline\x22,2,0,0,null,0,0,0,0]', 'BOc64M', '[null,null,1,30000,null,null,null,2,null,null,3,null,null,null,null,null,1,null,null,null,null,null,null,[25.0626425,121.6396359],null,null,null,null,0,null,null,null,null,null,null,null,0,\x221638761245\x22,null,null,null,null,null,1,null,null,[\x2286400000\x22,\x22604800000\x22,2],null,null,21600000,null,null,1,null,null,null,null,null,1]', 'BOc64Q', '[12,\x22AdyhnbqT_ds_davnavz_2z9n-lo-w_sAQI1KhVcY_ABA\x22,\x223773263665699436383\x22,\x220x345d534f7fbc7681:0xdfbeaaabc3c5388e\x22]', 'BOc64U', '[1,null,null,1,0,0,0,null,0]'];
    var a = m;
    window.W_jd = window.W_jd || {};
    for (var b = 0; b < a.length; b += 2) window.W_jd[a[b]] = JSON.parse(a[b + 1]);
})();
(function() {
    window.WIZ_global_data = {
        "LVIXXb": "1",
        "SNlM0e": "AD7QlO68g6Efq9E7Cwcmd2UKgQOo:1638761245742",
        "w2btAe": "%.@.\"112628797269975730302\",\"112628797269975730302\",\"0\",null,null,null,1]",
        "S06Grb": "112628797269975730302",
        "Yllh3e": "%.@.1638761245217697,177485460,4110970219]",
        "QrtxK": "0",
        "zChJod": "%.@.]",
        "GWsdKe": "zh-Hant-TW",
        "eptZe": "/wizrpcui/_/WizRpcUi/"
    };
    window.IJ_values = [true, true, true, true, false, false, false, "none", true, "0 1px 6px rgba(32, 33, 36, 0.28)", false, "rgba(0,0,0,.54)", "rgba(0,0,0,.26)", "#fbbc04", "#4285f4", "#f8f9fa", "#70757a", "#1e8e3e", "#fff", "rgba(255,255,255,.30)", "#f29900", false, "invert(1) hue-rotate(180deg)", "#b8bbbe", false, true, false, true, false, "#aecbfa", "#1a73e8", "0 1px 6px rgba(32, 33, 36, 0.28)", true, false, 36, 24, 28, 6, true, false, false, false, false, true, "#3c4043", 10, true, false, false, "#f5f5f5", "rgba(0,0,0,.87)", false, "#fff", "0px 5px 26px 0px rgba(0, 0, 0, 0.22), 0px 20px 28px 0px rgba(0, 0, 0, 0.30)", "#4285f4", false, false, false, "#4285f4", true, true, false, false, "#000", "#4285f4", "#1a73e8", "#1558d6", "#34a853", "#188038", "#ea4335", "#d93025", "#fff", "#34a853", "#dadce0", "#f8f9fa", "#f8f9fa", "#f8f9fa", "#70757a", "#70757a", "#3c4043", "#202124", "#202124", "#fff", "#fbbc04", "18px", false, "#f1f3f4", "#202124", "#202124", "#f1f3f4", 14, "#202124", 40, "#202124", false, "#70757a", "#202124", "#ea4335", "#000", "arial,sans-serif-medium,sans-serif", "arial,sans-serif", "#000", "#dadce0", "#000", "#70757a", "#1a73e8", true, false, false, false, false, false, true, false, false, false, "0 2px 10px 0 rgba(0,0,0,0.2)", true, false, "rgba(0,0,0,.12)", "rgba(0,0,0,.26)", "#70757a", "#202124", "rgba(204,204,204,.15)", "rgba(204,204,204,.25)", "rgba(112,117,122,.20)", "rgba(112,117,122,.40)", "#4285f4", "#1558d6", "#34a853", "#ea4335", "#fbbc04", "#f8f9fa", "#f8f9fa", "#f8f9fa", "#70757a", "#202124", "#34a853", "rgba(0,0,0,.12)", "#323232", "#fff", "#fff", "rgba(255,255,255,.30)", "#fff", "#202124", "#fff", "Roboto,RobotoDraft,Helvetica,Arial,sans-serif", "14px", "500", "500", "pointer", "0 1px 1px rgba(0,0,0,.16)", true, 24, "#000", "0 4px 16px rgba(0,0,0,0.2)", "#666", 200, true, true, false, false, true, true, false, true, 14, "#fff", "#FFF", false, "1px solid #dfe1e5", "none", "arial,sans-serif-medium,sans-serif", "Google Sans,arial,sans-serif-medium,sans-serif", "#ebebeb", "1px solid #dfe1e5", "1px solid #dfe1e5", "rgba(0, 0, 0, 0.1)", "#dadce0", "#fff", "#1a0dab", "#ebebeb", "#202124", "#70757a", true, true, false, true, false, false, false, false, false, false, false, true, false, false, true, false, false, false, false, false, true, false, true, "8px", "#ebebeb", false, true, false, "%.@.\"112628797269975730302\",\"112628797269975730302\",\"0\",null,null,null,1]", "0", "%.@.null,1,2,null,[null,591,1280]]", "EEcYuPapLeT27Qm24Kw9uw\u003d\u003d", "%.@.\"#b8bbbe\"]", "%.@.0]", "%.@.0]", "%.@.\"0px 5px 26px 0px rgba(0,0,0,0.22),0px 20px 28px 0px rgba(0,0,0,0.3)\",\"#fff\"]", "%.@.0,null,null,36,28,6,0.3,null,14,null,null,null,null,null,\"#202124\",\"#70757a\",null,\"#202124\",null,null,null,null,null,null,\"#1a73e8\",\"#fabb05\",\"#fff\",\"#1a73e8\",\"#d1d1d1\",\"#fff\",null,null,null,14,500,\"#1558d6\",null,\"#1a73e8\",\"#eeeeee\"]", "%.@.\"#ebeced\",\"#fff\",\"#dadce0\",\"#fff\",\"#3c4043\",\"#dadce0\",\"#dadce0\",\"#bdc1c6\",\"#fff\",\"#3c4043\",\"#202124\",\"#3c4043\",\"#ea4335\",\"#34a853\",\"#202124\",\"#fff\",\"#fff\"]", "%.@.[],0,null,0,0]", "zh-Hant-TW", "%.@.\"13px\",\"16px\",\"11px\",13,16,11,\"8px\",8,20]", "zh_Hant_TW", "%.@.\"10px\",10,\"16px\",16,\"18px\"]", "%.@.\"14px\",14]", "%.@.40,32,14]", "%.@.\"Roboto-Bold,HelveticaNeue-Bold,HelveticaNeue,sans-serif-bold,Arial,sans-serif\"]", "%.@.\"0 2px 10px 0 rgba(0,0,0,0.2)\"]", "%.@.0,\"14px\",\"500\",\"500\",\"0 1px 1px rgba(0,0,0,.16)\",\"pointer\",\"#000\",\"rgba(0,0,0,.26)\",\"#70757a\",\"#202124\",\"rgba(204,204,204,.15)\",\"rgba(204,204,204,.25)\",\"rgba(112,117,122,.20)\",\"rgba(112,117,122,.40)\",\"#34a853\",\"#4285f4\",\"#1558d6\",\"#ea4335\",\"#fbbc04\",\"#f8f9fa\",\"#f8f9fa\",\"#202124\",\"#34a853\",\"rgba(0,0,0,.12)\",null,\"#fff\",\"rgba(255,255,255,.30)\",\"#fff\",\"#202124\",\"#fff\",null,1]", "%.@.\"20px\",\"500\",\"400\",\"13px\",\"15px\",\"15px\",\"Roboto,RobotoDraft,Helvetica,Arial,sans-serif\",\"24px\",\"400\",\"32px\",\"24px\"]", false, "", "%.@.null,null,null,null,\"20px\",\"20px\",\"18px\",\"40px\",\"36px\",\"32px\",null,null,null,null,null,null,\"#fff\",null,null,null,\"#fff\",null,null,null,\"#e8f0fe\",null,\"#e8f0fe\",null,null,\"16px\",\"12px\",\"8px\",\"4px\",\"#fff\",\"#e8f0fe\",\"#1967d2\",\"transparent\",\"#1a0dab\",\"#dadce0\",\"999rem\",\"8px\",\"#1967d2\",\"transparent\",\"#3c4043\",\"#dadce0\",\"#1967d2\",\"transparent\",\"#1a73e8\",\"#dadce0\",\"999rem\",\"Google Sans,arial,sans-serif-medium,sans-serif\",\"20px\",\"14px\",\"500\"]", "%.@.\"#202124\",\"#3c4043\",\"#1a73e8\",null,\"#70757a\",\"#1a0dab\",\"#609\",null,null,\"#fff\",\"#1a73e8\",\"#fff\",\"#e8f0fe\",\"#1558d6\",\"#f1f3f4\",\"#202124\",\"#fff\",\"#3c4043\",\"#202124\",\"#fff\",\"#fff\",\"#fff\",\"#188038\",\"#d93025\",\"#e37400\",\"#ebebeb\",\"#fff\",\"rgba(32,33,36,0.6)\",\"#202124\",\"#ebebeb\"]", "%.@.null,\"none\",null,\"0px 1px 3px rgba(60,64,67,0.08)\",null,\"0px 2px 6px rgba(60,64,67,0.16)\",null,\"0px 4px 12px rgba(60,64,67,0.24)\",null,null,\"1px solid  #dadce0\",\"none\",\"none\",\"none\"]", "%.@.\"Google Sans,arial,sans-serif\",\"Google Sans,arial,sans-serif-medium,sans-serif\",\"arial,sans-serif\",\"arial,sans-serif-medium,sans-serif\",\"arial,sans-serif-light,sans-serif\"]", "%.@.\"16px\",\"12px\",\"0px\",\"8px\",\"4px\",\"2px\",\"20px\",\"24px\"]", "%.@.\"#1a0dab\",\"#1a0dab\"]", "%.@.null,null,null,null,null,null,null,\"12px\",\"8px\",\"4px\",\"16px\",\"2px\",\"999rem\",\"0px\"]", "%.@.\"700\",\"400\",\"underline\",\"none\",\"capitalize\",\"none\",\"uppercase\",\"none\",\"500\",\"lowercase\",\"italic\",\"-1px\",\"0.3px\"]", "%.@.\"20px\",\"26px\",\"400\",\"Google Sans,arial,sans-serif\",null,\"arial,sans-serif\",\"14px\",\"400\",\"22px\",null,\"16px\",\"24px\",\"400\",\"Google Sans,arial,sans-serif\",null,\"Google Sans,arial,sans-serif\",\"60px\",\"48px\",\"-1px\",null,\"400\",\"Google Sans,arial,sans-serif\",\"36px\",\"400\",\"48px\",null,\"Google Sans,arial,sans-serif\",\"36px\",\"28px\",null,\"400\",null,\"arial,sans-serif\",\"24px\",\"18px\",null,\"400\",\"arial,sans-serif\",\"16px\",\"12px\",null,\"400\",\"arial,sans-serif\",\"22px\",\"16px\",null,\"400\",\"arial,sans-serif\",\"26px\",\"20px\",null,\"400\",\"Google Sans,arial,sans-serif\",\"20px\",\"16px\",null,\"400\",\"arial,sans-serif\",\"18px\",\"14px\",null,\"400\",\"Google Sans,arial,sans-serif\",\"32px\",\"24px\",null,\"500\"]", "%.@.4]", "%.@.\"14px\",14,\"16px\",16,\"0\",0,\"none\",652,\"1px solid #dfe1e5\",\"normal\",\"normal\",\"#70757a\",\"12px\",\"1.34\",\"1px solid #dfe1e5\",\"none\",\"0\",\"none\",\"none\",\"none\",\"none\",\"6px\"]", "%.@.\"16px\"]", "%.@.\"rgba(0,0,0,0.0)\",\"rgba(0,0,0,0.54)\",\"rgba(0,0,0,0.8)\",\"rgba(248, 249, 250, 0.85)\",\"#202124\",\"#dadce0\",\"rgba(218, 220, 224, 0.0)\",\"rgba(218, 220, 224, 0.7)\",\"#dadce0\",\"#f8f9fa\",\"#000\",\"#1a73e8\",\"#dadce0\",\"#fff\",\"#fff\",\"#e8eaed\"]", "%.@.\"#202124\",\"#70757a\",\"#4d5156\",\"#5f6368\",\"#fff\",\"rgba(255,255,255,.70)\",28,24,26,20,16,-2,0,-4,2,0,0,24,20,20,14,12]", "%.@.\"20px\",20,\"14px\",14,\"\\\"rgba(0, 0, 0, .87)\\\"\"]", "paltis5212@gmail.com", true, "112628797269975730302", "%.@.1]"];
})();
window.jsl = window.jsl || {};
window.jsl.dh = function(d, e, c) {
    try {
        var f = document.getElementById(d);
        if (f) f.innerHTML = e, c && c();
        else {
            var a = {
                id: d,
                script: String(!!c),
                milestone: String(google.jslm || 0)
            };
            google.jsla && (a.async = google.jsla);
            var g = document.createElement("div");
            g.innerHTML = e;
            var b = g.children[0];
            b && (a.tag = b.tagName, a["class"] = String(b.className || null), a.name = String(b.getAttribute("jsname")));
            google.ml(Error("Missing ID."), !1, a)
        }
    } catch (h) {
        google.ml(h, !0, {
            "jsl.dh": !0
        })
    }
};
(function() {
    var x = true;
    google.jslm = x ? 2 : 1;
})();
google.x(null, function() {
    (function() {
        (function() {
            google.csct = {};
            google.csct.ps = 'AOvVaw3uBZtw10FpSoCwzL06tOoR\x26ust\x3d1638847645267334';
        })();
    })();
    (function() {
        (function() {
            google.csct.pi = true;
        })();
    })();
    (function() {
        (function() {
            function f() {
                for (var c = "&cshid=" + window._cshid, d = document.querySelectorAll('[href^="/"]'), e = 0, b; b = d[e++];) {
                    var a = b.getAttribute("href");
                    a.match(/[\?|&](ei|ved)=/) && -1 === a.indexOf("cshid=") && (-1 === a.search("#") ? b.setAttribute("href", a + c) : (a = a.split("#"), b.setAttribute("href", a[0] + c + "#" + a[1])))
                }
                d = document.querySelectorAll("[ping]");
                for (e = 0; b = d[e++];) a = b.getAttribute("ping"), -1 === a.indexOf("cshid=") && b.setAttribute("ping", a + c)
            };
            google.csh = google.csh || {};
            google.csh.ict = function(c) {
                window._cshid && (c && window.MutationObserver ? google.dclc(function() {
                    (new MutationObserver(f)).observe(document.querySelector("body"), {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }) : google.dclc(f))
            };
        }).call(this);
    })();
    (function() {
        (function() {
            var umo = false;
            google.csh.ict(umo);
        })();
    })();
    (function() {
        window.jsl = window.jsl || {};
        window.jsl.dh = window.jsl.dh || function(i, c, d) {
            try {
                var e = document.getElementById(i);
                if (e) {
                    e.innerHTML = c;
                    if (d) {
                        d();
                    }
                } else {
                    if (window.jsl.el) {
                        window.jsl.el(new Error('Missing ID.'), {
                            'id': i
                        });
                    }
                }
            } catch (e) {
                if (window.jsl.el) {
                    window.jsl.el(new Error('jsl.dh'));
                }
            }
        };
    })();
    (function() {
        window.jsl.dh('_HYOtYeGkDZTt0ATr2qGoDw1', '\x3cstyle\x3e.gb_Va:not(.gb_Bd){font:13px/27px Roboto,RobotoDraft,Arial,sans-serif;z-index:986}@-webkit-keyframes gb__a{0%{opacity:0}50%{opacity:1}}@keyframes gb__a{0%{opacity:0}50%{opacity:1}}a.gb_Z{border:none;color:#4285f4;cursor:default;font-weight:bold;outline:none;position:relative;text-align:center;text-decoration:none;text-transform:uppercase;white-space:nowrap;-webkit-user-select:none}a.gb_Z:hover:after,a.gb_Z:focus:after{background-color:rgba(0,0,0,.12);content:\x27\x27;height:100%;left:0;position:absolute;top:0;width:100%}a.gb_Z:hover,a.gb_Z:focus{text-decoration:none}a.gb_Z:active{background-color:rgba(153,153,153,.4);text-decoration:none}a.gb_0{background-color:#4285f4;color:#fff}a.gb_0:active{background-color:#0043b2}.gb_1{-webkit-box-shadow:0 1px 1px rgba(0,0,0,.16);box-shadow:0 1px 1px rgba(0,0,0,.16)}.gb_Z,.gb_0,.gb_2,.gb_3{display:inline-block;line-height:28px;padding:0 12px;-webkit-border-radius:2px;border-radius:2px}.gb_2{background:#f8f8f8;border:1px solid #c6c6c6}.gb_3{background:#f8f8f8}.gb_2,#gb a.gb_2.gb_2,.gb_3{color:#666;cursor:default;text-decoration:none}#gb a.gb_3.gb_3{cursor:default;text-decoration:none}.gb_3{border:1px solid #4285f4;font-weight:bold;outline:none;background:#4285f4;background:-webkit-linear-gradient(top,#4387fd,#4683ea);background:linear-gradient(top,#4387fd,#4683ea);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr\x3d#4387fd,endColorstr\x3d#4683ea,GradientType\x3d0)}#gb a.gb_3.gb_3{color:#fff}.gb_3:hover{-webkit-box-shadow:0 1px 0 rgba(0,0,0,.15);box-shadow:0 1px 0 rgba(0,0,0,.15)}.gb_3:active{-webkit-box-shadow:inset 0 2px 0 rgba(0,0,0,.15);box-shadow:inset 0 2px 0 rgba(0,0,0,.15);background:#3c78dc;background:-webkit-linear-gradient(top,#3c7ae4,#3f76d3);background:linear-gradient(top,#3c7ae4,#3f76d3);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr\x3d#3c7ae4,endColorstr\x3d#3f76d3,GradientType\x3d0)}.gb_Aa{display:none!important}.gb_Ba{visibility:hidden}.gb_bd{display:inline-block;vertical-align:middle}.gb_tf{position:relative}.gb_C{display:inline-block;outline:none;vertical-align:middle;-webkit-border-radius:2px;border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box;height:40px;width:40px;color:#000;cursor:pointer;text-decoration:none}#gb#gb a.gb_C{color:#000;cursor:pointer;text-decoration:none}.gb_Xa{border-color:transparent;border-bottom-color:#fff;border-style:dashed dashed solid;border-width:0 8.5px 8.5px;display:none;position:absolute;left:11.5px;top:43px;z-index:1;height:0;width:0;-webkit-animation:gb__a .2s;animation:gb__a .2s}.gb_Za{border-color:transparent;border-style:dashed dashed solid;border-width:0 8.5px 8.5px;display:none;position:absolute;left:11.5px;z-index:1;height:0;width:0;-webkit-animation:gb__a .2s;animation:gb__a .2s;border-bottom-color:#ccc;border-bottom-color:rgba(0,0,0,.2);top:42px}x:-o-prefocus,div.gb_Za{border-bottom-color:#ccc}.gb_E{background:#fff;border:1px solid #ccc;border-color:rgba(0,0,0,.2);color:#000;-webkit-box-shadow:0 2px 10px rgba(0,0,0,.2);box-shadow:0 2px 10px rgba(0,0,0,.2);display:none;outline:none;overflow:hidden;position:absolute;right:8px;top:62px;-webkit-animation:gb__a .2s;animation:gb__a .2s;-webkit-border-radius:2px;border-radius:2px;-webkit-user-select:text}.gb_bd.gb_la .gb_Xa,.gb_bd.gb_la .gb_Za,.gb_bd.gb_la .gb_E,.gb_la.gb_E{display:block}.gb_bd.gb_la.gb_uf .gb_Xa,.gb_bd.gb_la.gb_uf .gb_Za{display:none}.gb_vf{position:absolute;right:8px;top:62px;z-index:-1}.gb_Ja .gb_Xa,.gb_Ja .gb_Za,.gb_Ja .gb_E{margin-top:-10px}.gb_bd:first-child,#gbsfw:first-child+.gb_bd{padding-left:4px}.gb_pa.gb_Le .gb_bd:first-child{padding-left:0}.gb_Me{position:relative}.gb_Mc .gb_Me,.gb_Sd .gb_Me{float:right}.gb_C{padding:8px;cursor:pointer}.gb_pa .gb_3c:not(.gb_Z):focus img{background-color:rgba(0,0,0,0.20);outline:none;-webkit-border-radius:50%;border-radius:50%}.gb_Ne button:focus svg,.gb_Ne button:hover svg,.gb_Ne button:active svg,.gb_C:focus,.gb_C:hover,.gb_C:active,.gb_C[aria-expanded\x3dtrue]{outline:none;-webkit-border-radius:50%;border-radius:50%}.gb_vc .gb_Ne.gb_Oe button:focus svg,.gb_vc .gb_Ne.gb_Oe button:focus:hover svg,.gb_Ne button:focus svg,.gb_Ne button:focus:hover svg,.gb_C:focus,.gb_C:focus:hover{background-color:rgba(60,64,67,0.1)}.gb_vc .gb_Ne.gb_Oe button:active svg,.gb_Ne button:active svg,.gb_C:active{background-color:rgba(60,64,67,0.12)}.gb_vc .gb_Ne.gb_Oe button:hover svg,.gb_Ne button:hover svg,.gb_C:hover{background-color:rgba(60,64,67,0.08)}.gb_ia .gb_C.gb_Ma:hover{background-color:transparent}.gb_C[aria-expanded\x3dtrue],.gb_C:hover[aria-expanded\x3dtrue]{background-color:rgba(95,99,104,0.24)}.gb_C[aria-expanded\x3dtrue] .gb_Pe,.gb_C[aria-expanded\x3dtrue] .gb_Qe{fill:#5f6368;opacity:1}.gb_vc .gb_Ne button:hover svg,.gb_vc .gb_C:hover{background-color:rgba(232,234,237,0.08)}.gb_vc .gb_Ne button:focus svg,.gb_vc .gb_Ne button:focus:hover svg,.gb_vc .gb_C:focus,.gb_vc .gb_C:focus:hover{background-color:rgba(232,234,237,0.10)}.gb_vc .gb_Ne button:active svg,.gb_vc .gb_C:active{background-color:rgba(232,234,237,0.12)}.gb_vc .gb_C[aria-expanded\x3dtrue],.gb_vc .gb_C:hover[aria-expanded\x3dtrue]{background-color:rgba(255,255,255,0.12)}.gb_vc .gb_C[aria-expanded\x3dtrue] .gb_Pe,.gb_vc .gb_C[aria-expanded\x3dtrue] .gb_Qe{fill:#ffffff;opacity:1}.gb_bd{padding:4px}.gb_pa.gb_Le .gb_bd{padding:4px 2px}.gb_pa.gb_Le .gb_Na.gb_bd{padding-left:6px}.gb_E{z-index:991;line-height:normal}.gb_E.gb_Re{left:8px;right:auto}@media (max-width:350px){.gb_E.gb_Re{left:0}}.gb_Se .gb_E{top:56px}.gb_B .gb_C,.gb_D .gb_B .gb_C{background-position:-64px -29px}.gb_i .gb_B .gb_C{background-position:-29px -29px;opacity:1}.gb_B .gb_C,.gb_B .gb_C:hover,.gb_B .gb_C:focus{opacity:1}.gb_Cd{display:none}.gb_Uc{font-family:Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-size:20px;font-weight:400;letter-spacing:0.25px;line-height:48px;margin-bottom:2px;opacity:1;overflow:hidden;padding-left:16px;position:relative;text-overflow:ellipsis;vertical-align:middle;top:2px;white-space:nowrap;-webkit-flex:1 1 auto;flex:1 1 auto}.gb_Uc.gb_Vc{color:#3c4043}.gb_pa.gb_qa .gb_Uc{margin-bottom:0}.gb_Wc.gb_Xc .gb_Uc{padding-left:4px}.gb_pa.gb_qa .gb_Zc{position:relative;top:-2px}.gb_pa{color:black;min-width:320px;position:relative;-webkit-transition:box-shadow 250ms;transition:box-shadow 250ms}.gb_pa.gb_Dc{min-width:240px}.gb_pa.gb_Dd .gb_Ed{display:none}.gb_pa.gb_Dd .gb_Fd{height:56px}header.gb_pa{display:block}.gb_pa svg{fill:currentColor}.gb_Hd{position:fixed;top:0;width:100%}.gb_Id{-webkit-box-shadow:0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12),0px 2px 4px -1px rgba(0,0,0,0.2);box-shadow:0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12),0px 2px 4px -1px rgba(0,0,0,0.2)}.gb_Jd{height:64px}.gb_Fd{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:space-between;-webkit-justify-content:space-between;justify-content:space-between;min-width:-webkit-min-content;min-width:min-content}.gb_pa:not(.gb_qa) .gb_Fd{padding:8px}.gb_pa.gb_Kd .gb_Fd{-webkit-flex:1 0 auto;flex:1 0 auto}.gb_pa .gb_Fd.gb_Ld.gb_Md{min-width:0}.gb_pa.gb_qa .gb_Fd{padding:4px;padding-left:8px;min-width:0}.gb_Ed{height:48px;vertical-align:middle;white-space:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-user-select:none}.gb_Od\x3e.gb_Ed{display:table-cell;width:100%}.gb_Wc{padding-right:30px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-flex:1 0 auto;flex:1 0 auto}.gb_pa.gb_qa .gb_Wc{padding-right:14px}.gb_Pd{-webkit-flex:1 1 100%;flex:1 1 100%}.gb_Pd\x3e:only-child{display:inline-block}.gb_Qd.gb_Nc{padding-left:4px}.gb_Qd.gb_Rd,.gb_pa.gb_Kd .gb_Qd,.gb_pa.gb_qa:not(.gb_Sd) .gb_Qd{padding-left:0}.gb_pa.gb_qa .gb_Qd.gb_Rd{padding-right:0}.gb_pa.gb_qa .gb_Qd.gb_Rd .gb_ia{margin-left:10px}.gb_Nc{display:inline}.gb_pa.gb_Hc .gb_Qd.gb_Td,.gb_pa.gb_Sd .gb_Qd.gb_Td{padding-left:2px}.gb_Uc{display:inline-block}.gb_Qd{-webkit-box-sizing:border-box;box-sizing:border-box;height:48px;line-height:normal;padding:0 4px;padding-left:30px;-webkit-flex:0 0 auto;flex:0 0 auto;-webkit-box-pack:flex-end;-webkit-justify-content:flex-end;justify-content:flex-end}.gb_Sd{height:48px}.gb_pa.gb_Sd{min-width:initial;min-width:auto}.gb_Sd .gb_Qd{float:right;padding-left:32px}.gb_Sd .gb_Qd.gb_Ud{padding-left:0}.gb_Vd{font-size:14px;max-width:200px;overflow:hidden;padding:0 12px;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:text}.gb_Wd{-webkit-transition:background-color .4s;transition:background-color .4s}.gb_Xd{color:black}.gb_vc{color:white}.gb_pa a,.gb_Ac a{color:inherit}.gb_s{color:rgba(0,0,0,0.87)}.gb_pa svg,.gb_Ac svg,.gb_Wc .gb_Zd,.gb_Mc .gb_Zd{color:#5f6368;opacity:1}.gb_vc svg,.gb_Ac.gb_Ec svg,.gb_vc .gb_Wc .gb_Zd,.gb_vc .gb_Wc .gb_uc,.gb_vc .gb_Wc .gb_Zc,.gb_Ac.gb_Ec .gb_Zd{color:rgba(255,255,255, 0.87 )}.gb_vc .gb_Wc .gb_tc:not(.gb_0d){opacity:0.87}.gb_Vc{color:inherit;opacity:1;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased}.gb_vc .gb_Vc,.gb_Xd .gb_Vc{opacity:1}.gb_1d{position:relative}.gb_2d{font-family:arial,sans-serif;line-height:normal;padding-right:15px}a.gb_f,span.gb_f{color:rgba(0,0,0,0.87);text-decoration:none}.gb_vc a.gb_f,.gb_vc span.gb_f{color:white}a.gb_f:focus{outline-offset:2px}a.gb_f:hover{text-decoration:underline}.gb_g{display:inline-block;padding-left:15px}.gb_g .gb_f{display:inline-block;line-height:24px;vertical-align:middle}.gb_3d{font-family:Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;font-weight:500;font-size:14px;letter-spacing:0.25px;line-height:16px;margin-left:10px;margin-right:8px;min-width:96px;padding:9px 23px;text-align:center;vertical-align:middle;-webkit-border-radius:4px;border-radius:4px;-webkit-box-sizing:border-box;box-sizing:border-box}.gb_pa.gb_Sd .gb_3d{margin-left:8px}#gb a.gb_3.gb_3.gb_3d,#gb a.gb_2.gb_2.gb_3d{cursor:pointer}.gb_3.gb_3d:hover{background:#2b7de9;-webkit-box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15);box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15)}.gb_3.gb_3d:focus,.gb_3.gb_3d:hover:focus{background:#5094ed;-webkit-box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15);box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15)}.gb_3.gb_3d:active{background:#63a0ef;-webkit-box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15);box-shadow:0 1px 2px 0 rgba(66,133,244,0.3),0 1px 3px 1px rgba(66,133,244,0.15)}.gb_3d:not(.gb_2){background:#1a73e8;border:1px solid transparent}.gb_pa.gb_qa .gb_3d{padding:9px 15px;min-width:80px}.gb_4d{text-align:left}#gb a.gb_3d.gb_2,#gb .gb_vc a.gb_3d,#gb.gb_vc a.gb_3d{background:#ffffff;border-color:#dadce0;-webkit-box-shadow:none;box-shadow:none;color:#1a73e8}#gb a.gb_3.gb_ja.gb_3d{background:#8ab4f8;border:1px solid transparent;-webkit-box-shadow:none;box-shadow:none;color:#202124}#gb a.gb_3d.gb_2:hover,#gb .gb_vc a.gb_3d:hover,#gb.gb_vc a.gb_3d:hover{background:#f8fbff;border-color:#cce0fc}#gb a.gb_3.gb_ja.gb_3d:hover{background:#93baf9;border-color:transparent;-webkit-box-shadow:0 1px 3px 1px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.3);box-shadow:0 1px 3px 1px rgba(0,0,0,0.15),0 1px 2px rgba(0,0,0,0.3)}#gb a.gb_3d.gb_2:focus,#gb a.gb_3d.gb_2:focus:hover,#gb .gb_vc a.gb_3d:focus,#gb .gb_vc a.gb_3d:focus:hover,#gb.gb_vc a.gb_3d:focus,#gb.gb_vc a.gb_3d:focus:hover{background:#f4f8ff;border-color:#c9ddfc}#gb a.gb_3.gb_ja.gb_3d:focus,#gb a.gb_3.gb_ja.gb_3d:focus:hover{background:#a6c6fa;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}#gb a.gb_3d.gb_2:active,#gb .gb_vc a.gb_3d:active,#gb.gb_vc a.gb_3d:active{background:#ecf3fe}#gb a.gb_3.gb_ja.gb_3d:active{background:#a1c3f9;-webkit-box-shadow:0 1px 2px rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);box-shadow:0 1px 2px rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15)}#gb a.gb_3d.gb_2:not(.gb_ja):active{-webkit-box-shadow:0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);box-shadow:0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15)}.gb_ia{background-color:rgba(255,255,255,0.88);border:1px solid #dadce0;-webkit-box-sizing:border-box;box-sizing:border-box;cursor:pointer;display:inline-block;max-height:48px;overflow:hidden;outline:none;padding:0;vertical-align:middle;width:134px;-webkit-border-radius:8px;border-radius:8px}.gb_ia.gb_ja{background-color:transparent;border:1px solid #5f6368}.gb_ka{display:inherit}.gb_ia.gb_ja .gb_ka{background:#ffffff;-webkit-border-radius:4px;border-radius:4px;display:inline-block;left:8px;margin-right:5px;position:relative;padding:3px;top:-1px}.gb_ia:hover{border:1px solid #d2e3fc;background-color:rgba(248,250,255,0.88)}.gb_ia.gb_ja:hover{border:1px solid #5f6368;background-color:rgba(232,234,237,0.08)}.gb_ia:focus{border:1px solid #fff;background-color:rgba(255,255,255);-webkit-box-shadow:0px 1px 2px 0px rgba(60,64,67,0.3),0px 1px 3px 1px rgba(60,64,67,0.15);box-shadow:0px 1px 2px 0px rgba(60,64,67,0.3),0px 1px 3px 1px rgba(60,64,67,0.15)}.gb_ia.gb_ja:focus{border:1px solid #e8eaed;background-color:#38383b}.gb_ia.gb_ja:active,.gb_ia.gb_la.gb_ja:focus{border:1px solid #5f6368;background-color:#333438}.gb_ma{display:inline-block;padding-left:7px;padding-bottom:2px;text-align:center;vertical-align:middle;line-height:32px;width:78px}.gb_ia.gb_ja .gb_ma{line-height:26px;margin-left:0;width:72px;padding-left:0;padding-bottom:0}.gb_ma.gb_na{background-color:#f1f3f4;-webkit-border-radius:4px;border-radius:4px;margin-left:8px;padding-left:0}.gb_ma.gb_na .gb_oa{vertical-align:middle}.gb_pa:not(.gb_qa) .gb_ia{margin-left:10px;margin-right:4px}.gb_ra{max-height:32px;width:78px}.gb_ia.gb_ja .gb_ra{max-height:26px;width:72px}.gb_Ca{-webkit-background-size:32px 32px;background-size:32px 32px;border:0;-webkit-border-radius:50%;border-radius:50%;display:block;margin:0px;position:relative;height:32px;width:32px;z-index:0}.gb_Da{background-color:#e8f0fe;border:1px solid rgba(32,33,36,.08);position:relative}.gb_Da.gb_Ca{height:30px;width:30px}.gb_Da.gb_Ca:hover,.gb_Da.gb_Ca:active{-webkit-box-shadow:none;box-shadow:none}.gb_Ea{background:#fff;border:none;-webkit-border-radius:50%;border-radius:50%;bottom:2px;-webkit-box-shadow:0px 1px 2px 0px rgba(60,64,67,.30),0px 1px 3px 1px rgba(60,64,67,.15);box-shadow:0px 1px 2px 0px rgba(60,64,67,.30),0px 1px 3px 1px rgba(60,64,67,.15);height:14px;margin:2px;position:absolute;right:0;width:14px}.gb_Fa{color:#1f71e7;font:400 22px/32px Google Sans,Roboto,RobotoDraft,Helvetica,Arial,sans-serif;text-align:center;text-transform:uppercase}@media (min-resolution:1.25dppx),(-o-min-device-pixel-ratio:5/4),(-webkit-min-device-pixel-ratio:1.25),(min-device-pixel-ratio:1.25){.gb_Ca::before{display:inline-block;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left 0;transform-origin:left 0}.gb_Ha::before{display:inline-block;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left 0;transform-origin:left 0}.gb_k .gb_Ha::before{-webkit-transform:scale(0.416666667);transform:scale(0.416666667)}}.gb_Ca:hover,.gb_Ca:focus{-webkit-box-shadow:0 1px 0 rgba(0,0,0,.15);box-shadow:0 1px 0 rgba(0,0,0,.15)}.gb_Ca:active{-webkit-box-shadow:inset 0 2px 0 rgba(0,0,0,.15);box-shadow:inset 0 2px 0 rgba(0,0,0,.15)}.gb_Ca:active::after{background:rgba(0,0,0,.1);-webkit-border-radius:50%;border-radius:50%;content:\x27\x27;display:block;height:100%}.gb_Ia{cursor:pointer;line-height:40px;min-width:30px;opacity:.75;overflow:hidden;vertical-align:middle;text-overflow:ellipsis}.gb_C.gb_Ia{width:auto}.gb_Ia:hover,.gb_Ia:focus{opacity:.85}.gb_Ja .gb_Ia,.gb_Ja .gb_Ka{line-height:26px}#gb#gb.gb_Ja a.gb_Ia,.gb_Ja .gb_Ka{font-size:11px;height:auto}.gb_La{border-top:4px solid #000;border-left:4px dashed transparent;border-right:4px dashed transparent;display:inline-block;margin-left:6px;opacity:.75;vertical-align:middle}.gb_Ma:hover .gb_La{opacity:.85}.gb_ia\x3e.gb_Na{padding:3px 3px 3px 4px}.gb_Oa.gb_Ba{color:#fff}.gb_i .gb_Ia,.gb_i .gb_La{opacity:1}#gb#gb.gb_i.gb_i a.gb_Ia,#gb#gb .gb_i.gb_i a.gb_Ia{color:#fff}.gb_i.gb_i .gb_La{border-top-color:#fff;opacity:1}.gb_D .gb_Ca:hover,.gb_i .gb_Ca:hover,.gb_D .gb_Ca:focus,.gb_i .gb_Ca:focus{-webkit-box-shadow: 0 1px 0 rgba(0,0,0,.15) , 0 1px 2px rgba(0,0,0,.2) ;box-shadow: 0 1px 0 rgba(0,0,0,.15) , 0 1px 2px rgba(0,0,0,.2) }.gb_Pa .gb_Na,.gb_Qa .gb_Na{position:absolute;right:1px}.gb_Na.gb_h,.gb_Ra.gb_h,.gb_Ma.gb_h{-webkit-flex:0 1 auto;flex:0 1 auto;-webkit-flex:0 1 main-size;flex:0 1 main-size}.gb_Sa.gb_Ta .gb_Ia{width:30px!important}.gb_Ua{height:40px;position:absolute;right:-5px;top:-5px;width:40px}.gb_Va .gb_Ua,.gb_Wa .gb_Ua{right:0;top:0}.gb_Na .gb_C{padding:4px}.gb_6d{display:none}sentinel{}\x3c/style\x3e', function() {
            ;
            this.gbar_ = {
                CONFIG: [
                    [
                        [0, "www.gstatic.com", "og.qtm.en_US.JTwxsgT7A28.O", "com.tw", "zh-TW", "1", 1, [4, 2, "", "", "", "412777381", "0"], null, "HYOtYdaHD8u3mAWPmKKABA", null, 0, "og.qtm.ABfSJOxuv7c.L.W.O", "AA2YrTveIHpciwVnTQdwRjyOlr26mclGNw", "AA2YrTs9dNyVlnOSLpTq_3fmIyVvXeyJ-w", "", 2, 1, 200, "TWN", null, null, "1", "1", 1], null, [1, 0.1000000014901161, 2, 1],
                        [1, 0.001000000047497451, 1],
                        [1, 0, 0, null, "0", "paltis5212@gmail.com", "", "AOEwXKpGo2MopVCYlSs7rQdpH7tFNnV_WdDiVaIQM24guODt110wBDP4GYEOsJGxx4nv98MQYAz2TCSwgwvJDALpV9AT8FZKZw"],
                        [0, 0, "", 1, 0, 0, 0, 0, 0, 0, null, 0, 0, null, 0, 0, null, null, 0, 0, 0, "", "", "", "", "", "", null, 0, 0, 0, 0, 0, null, null, null, "rgba(32,33,36,1)", "rgba(255,255,255,1)", 0, 0, 1, null, null, 1, 0, 0],
                        ["%1$s (預設)", "品牌帳戶", 0, "%1$s (已委派)", 1, null, 83, "https://www.google.com/webhp?authuser=$authuser", null, null, null, 1, "https://accounts.google.com/ListAccounts?listPages=0\u0026pid=1\u0026gpsia=1\u0026source=ogb\u0026atic=1\u0026mo=1\u0026mn=1\u0026hl=zh-TW\u0026ts=157", 0, "dashboard", null, null, null, null, "個人資料", "", 0, null, "未登入", "https://accounts.google.com/AccountChooser?source=ogb\u0026continue=$continue\u0026Email=$email\u0026ec=GAhAAQ", "https://accounts.google.com/RemoveLocalAccount?source=ogb", "移除", "登入", 0, 1, 1, 0, 1, 0, 0, "", null, null, "工作階段已過期", null, null, "https://docs.google.com/picker", "訪客", null, "預設", "已委派", "登出所有帳戶", 0, null, null, 0, 0, 1, "myaccount.google.com", "https", 0, 1], null, ["1", "gci_91f30755d6a6b787dcc2a4062e6e9824.js", "googleapis.client:gapi.iframes", "0", "zh-TW"], null, null, null, null, ["m;/_/scs/abc-static/_/js/k=gapi.gapi.en.R9QuLJE0V3o.O/d=1/rs=AHpOoo9DhQIvUvbE3v8eEhVx9XQkrkVYIQ/m=__features__", "https://apis.google.com", "", "", "1", "", null, 1, "es_plusone_gc_20211101.0_p0", "zh-TW", null, 0],
                        [0.009999999776482582, "com.tw", "1", [null, "", "0", null, 1, 5184000, null, null, "", null, null, null, null, null, 0, null, 0, 0, 1, 0, 0, 0, null, null, 0, 0, null, 0, 0, 0, 0], null, null, null, 0, null, null, ["5061451", "google\\.(com|ru|ca|by|kz|com\\.mx|com\\.tr)$", 1]],
                        [1, 1, null, 40400, 1, "TWN", "zh-TW", "412777381.0", 8, 0.009999999776482582, 1, 0, null, null, 1, 0, "3700930", null, null, null, "HYOtYdaHD8u3mAWPmKKABA", 0, 1],
                        [
                            [null, null, null, "https://www.gstatic.com/og/_/js/k=og.qtm.en_US.JTwxsgT7A28.O/rt=j/m=qabr,qgl,q_dnp,qdid,qcwid,qapid/exm=qaaw,qadd,qaid,qein,qhaw,qhbr,qhch,qhga,qhid,qhin,qhpr/d=1/ed=1/rs=AA2YrTveIHpciwVnTQdwRjyOlr26mclGNw"],
                            [null, null, null, "https://www.gstatic.com/og/_/ss/k=og.qtm.ABfSJOxuv7c.L.W.O/m=qdid,qcwid/excm=qaaw,qadd,qaid,qein,qhaw,qhbr,qhch,qhga,qhid,qhin,qhpr/d=1/ed=1/ct=zgms/rs=AA2YrTs9dNyVlnOSLpTq_3fmIyVvXeyJ-w"]
                        ], null, null, null, [
                            [
                                [null, null, [null, null, null, "https://ogs.google.com/u/0/widget/app?bc=1"], 0, 448, 328, 57, 4, 1, 0, 0, 63, 64, 8000, "https://www.google.com.tw/intl/zh-TW/about/products?tab=wh", 67, 1, 69, null, 1, 70, "載入應用程式集時發生問題。請稍候片刻再試，或是直接前往 %1$sGoogle 產品%2$s頁面。", 3, 0, 0, 74, 4000, null, null, null, null, null, null, null, "/widget/app"]
                            ], 0, [null, null, null, "https://www.gstatic.com/og/_/js/k=og.qtm.en_US.JTwxsgT7A28.O/rt=j/m=qdsh/d=1/ed=1/rs=AA2YrTveIHpciwVnTQdwRjyOlr26mclGNw"], "1", "1", 1, 0, null, "zh-TW", 0, null, 0
                        ]
                    ]
                ],
            };
            this.gbar_ = this.gbar_ || {};
            (function(_) {
                var window = this;
                try {
                    var ea, ia, ta, Aa, Fa, Ha, Ia, Ja, Ka, La, Na, Oa, Sa, Ta;
                    _.aa = function(a) {
                        if (Error.captureStackTrace) Error.captureStackTrace(this, _.aa);
                        else {
                            var b = Error().stack;
                            b && (this.stack = b)
                        }
                        a && (this.message = String(a))
                    };
                    _.ba = function() {
                        var a = _.n.navigator;
                        return a && (a = a.userAgent) ? a : ""
                    };
                    _.p = function(a) {
                        return -1 != _.ba().indexOf(a)
                    };
                    _.ca = function() {
                        return _.p("Trident") || _.p("MSIE")
                    };
                    _.da = function() {
                        return _.p("Firefox") || _.p("FxiOS")
                    };
                    _.fa = function() {
                        return _.p("Safari") && !(ea() || _.p("Coast") || _.p("Opera") || _.p("Edge") || _.p("Edg/") || _.p("OPR") || _.da() || _.p("Silk") || _.p("Android"))
                    };
                    ea = function() {
                        return (_.p("Chrome") || _.p("CriOS")) && !_.p("Edge") || _.p("Silk")
                    };
                    _.ha = function() {
                        return _.p("Android") && !(ea() || _.da() || _.p("Opera") || _.p("Silk"))
                    };
                    ia = function() {
                        return _.p("iPhone") && !_.p("iPod") && !_.p("iPad")
                    };
                    _.ja = function() {
                        return ia() || _.p("iPad") || _.p("iPod")
                    };
                    _.la = function(a, b) {
                        return 0 <= (0, _.ka)(a, b)
                    };
                    _.ma = function(a) {
                        var b = a.length;
                        if (0 < b) {
                            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                            return c
                        }
                        return []
                    };
                    _.na = function() {
                        return -1 != _.ba().toLowerCase().indexOf("webkit") && !_.p("Edge")
                    };
                    _.pa = function(a) {
                        return _.oa && null != a && a instanceof Uint8Array
                    };
                    _.sa = function(a) {
                        Object.isFrozen(a) || (ra ? a[ra] |= 1 : void 0 !== a.ze ? a.ze |= 1 : Object.defineProperties(a, {
                            ze: {
                                value: 1,
                                configurable: !0,
                                writable: !0,
                                enumerable: !1
                            }
                        }));
                        return a
                    };
                    ta = function(a) {
                        return null !== a && "object" === typeof a && a.constructor === Object
                    };
                    _.xa = function(a) {
                        switch (typeof a) {
                            case "number":
                                return isFinite(a) ? a : String(a);
                            case "object":
                                if (_.pa(a)) return _.ua(a);
                                if ("function" == typeof _.va && a instanceof _.va) return a.o();
                                if (a instanceof _.wa) return a.Pb()
                        }
                        return a
                    };
                    _.za = function(a, b) {
                        if (null != a) return Array.isArray(a) || ta(a) ? _.ya(a, b) : b(a)
                    };
                    _.ya = function(a, b) {
                        if (Array.isArray(a)) {
                            for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = _.za(a[d], b);
                            if (b = Array.isArray(a)) {
                                var e;
                                ra ? e = a[ra] : e = a.ze;
                                b = (null == e ? 0 : e) & 1
                            }
                            b && _.sa(c);
                            return c
                        }
                        e = {};
                        for (c in a) e[c] = _.za(a[c], b);
                        return e
                    };
                    Aa = function(a) {
                        a = _.xa(a);
                        return Array.isArray(a) ? _.ya(a, Aa) : a
                    };
                    _.q = function(a, b) {
                        return null != a ? !!a : !!b
                    };
                    _.t = function(a, b) {
                        void 0 == b && (b = "");
                        return null != a ? a : b
                    };
                    _.Ba = function(a, b) {
                        void 0 == b && (b = 0);
                        return null != a ? a : b
                    };
                    _.Ca = function(a, b, c) {
                        for (var d in a) b.call(c, a[d], d, a)
                    };
                    _.Ea = function(a, b) {
                        for (var c, d, e = 1; e < arguments.length; e++) {
                            d = arguments[e];
                            for (c in d) a[c] = d[c];
                            for (var f = 0; f < Da.length; f++) c = Da[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
                        }
                    };
                    Fa = function(a) {
                        var b = 0;
                        return function() {
                            return b < a.length ? {
                                done: !1,
                                value: a[b++]
                            } : {
                                done: !0
                            }
                        }
                    };
                    Ha = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
                        if (a == Array.prototype || a == Object.prototype) return a;
                        a[b] = c.value;
                        return a
                    };
                    Ia = function(a) {
                        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
                        for (var b = 0; b < a.length; ++b) {
                            var c = a[b];
                            if (c && c.Math == Math) return c
                        }
                        throw Error("a");
                    };
                    Ja = Ia(this);
                    Ka = function(a, b) {
                        if (b) a: {
                            var c = Ja;a = a.split(".");
                            for (var d = 0; d < a.length - 1; d++) {
                                var e = a[d];
                                if (!(e in c)) break a;
                                c = c[e]
                            }
                            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && Ha(c, a, {
                                configurable: !0,
                                writable: !0,
                                value: b
                            })
                        }
                    };
                    Ka("Symbol", function(a) {
                        if (a) return a;
                        var b = function(f, g) {
                            this.j = f;
                            Ha(this, "description", {
                                configurable: !0,
                                writable: !0,
                                value: g
                            })
                        };
                        b.prototype.toString = function() {
                            return this.j
                        };
                        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
                            d = 0,
                            e = function(f) {
                                if (this instanceof e) throw new TypeError("b");
                                return new b(c + (f || "") + "_" + d++, f)
                            };
                        return e
                    });
                    Ka("Symbol.iterator", function(a) {
                        if (a) return a;
                        a = Symbol("c");
                        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
                            var d = Ja[b[c]];
                            "function" === typeof d && "function" != typeof d.prototype[a] && Ha(d.prototype, a, {
                                configurable: !0,
                                writable: !0,
                                value: function() {
                                    return La(Fa(this))
                                }
                            })
                        }
                        return a
                    });
                    La = function(a) {
                        a = {
                            next: a
                        };
                        a[Symbol.iterator] = function() {
                            return this
                        };
                        return a
                    };
                    _.Ma = function(a) {
                        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
                        return b ? b.call(a) : {
                            next: Fa(a)
                        }
                    };
                    Na = "function" == typeof Object.create ? Object.create : function(a) {
                        var b = function() {};
                        b.prototype = a;
                        return new b
                    };
                    if ("function" == typeof Object.setPrototypeOf) Oa = Object.setPrototypeOf;
                    else {
                        var Pa;
                        a: {
                            var Qa = {
                                    a: !0
                                },
                                Ra = {};
                            try {
                                Ra.__proto__ = Qa;
                                Pa = Ra.a;
                                break a
                            } catch (a) {}
                            Pa = !1
                        }
                        Oa = Pa ? function(a, b) {
                            a.__proto__ = b;
                            if (a.__proto__ !== b) throw new TypeError("d`" + a);
                            return a
                        } : null
                    }
                    Sa = Oa;
                    _.u = function(a, b) {
                        a.prototype = Na(b.prototype);
                        a.prototype.constructor = a;
                        if (Sa) Sa(a, b);
                        else
                            for (var c in b)
                                if ("prototype" != c)
                                    if (Object.defineProperties) {
                                        var d = Object.getOwnPropertyDescriptor(b, c);
                                        d && Object.defineProperty(a, c, d)
                                    } else a[c] = b[c];
                        a.T = b.prototype
                    };
                    Ta = function(a, b, c) {
                        if (null == a) throw new TypeError("e`" + c);
                        if (b instanceof RegExp) throw new TypeError("f`" + c);
                        return a + ""
                    };
                    Ka("String.prototype.startsWith", function(a) {
                        return a ? a : function(b, c) {
                            var d = Ta(this, b, "startsWith"),
                                e = d.length,
                                f = b.length;
                            c = Math.max(0, Math.min(c | 0, d.length));
                            for (var g = 0; g < f && c < e;)
                                if (d[c++] != b[g++]) return !1;
                            return g >= f
                        }
                    });
                    Ka("Array.prototype.find", function(a) {
                        return a ? a : function(b, c) {
                            a: {
                                var d = this;d instanceof String && (d = String(d));
                                for (var e = d.length, f = 0; f < e; f++) {
                                    var g = d[f];
                                    if (b.call(c, g, f, d)) {
                                        b = g;
                                        break a
                                    }
                                }
                                b = void 0
                            }
                            return b
                        }
                    });
                    var Ua = function(a, b) {
                        return Object.prototype.hasOwnProperty.call(a, b)
                    };
                    Ka("WeakMap", function(a) {
                        function b() {}

                        function c(l) {
                            var m = typeof l;
                            return "object" === m && null !== l || "function" === m
                        }

                        function d(l) {
                            if (!Ua(l, f)) {
                                var m = new b;
                                Ha(l, f, {
                                    value: m
                                })
                            }
                        }

                        function e(l) {
                            var m = Object[l];
                            m && (Object[l] = function(r) {
                                if (r instanceof b) return r;
                                Object.isExtensible(r) && d(r);
                                return m(r)
                            })
                        }
                        if (function() {
                                if (!a || !Object.seal) return !1;
                                try {
                                    var l = Object.seal({}),
                                        m = Object.seal({}),
                                        r = new a([
                                            [l, 2],
                                            [m, 3]
                                        ]);
                                    if (2 != r.get(l) || 3 != r.get(m)) return !1;
                                    r.delete(l);
                                    r.set(m, 4);
                                    return !r.has(l) && 4 == r.get(m)
                                } catch (v) {
                                    return !1
                                }
                            }()) return a;
                        var f = "$jscomp_hidden_" + Math.random();
                        e("freeze");
                        e("preventExtensions");
                        e("seal");
                        var g = 0,
                            k = function(l) {
                                this.j = (g += Math.random() + 1).toString();
                                if (l) {
                                    l = _.Ma(l);
                                    for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
                                }
                            };
                        k.prototype.set = function(l, m) {
                            if (!c(l)) throw Error("g");
                            d(l);
                            if (!Ua(l, f)) throw Error("h`" + l);
                            l[f][this.j] = m;
                            return this
                        };
                        k.prototype.get = function(l) {
                            return c(l) && Ua(l, f) ? l[f][this.j] : void 0
                        };
                        k.prototype.has = function(l) {
                            return c(l) && Ua(l, f) && Ua(l[f], this.j)
                        };
                        k.prototype.delete = function(l) {
                            return c(l) &&
                                Ua(l, f) && Ua(l[f], this.j) ? delete l[f][this.j] : !1
                        };
                        return k
                    });
                    Ka("Map", function(a) {
                        if (function() {
                                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                                try {
                                    var k = Object.seal({
                                            x: 4
                                        }),
                                        l = new a(_.Ma([
                                            [k, "s"]
                                        ]));
                                    if ("s" != l.get(k) || 1 != l.size || l.get({
                                            x: 4
                                        }) || l.set({
                                            x: 4
                                        }, "t") != l || 2 != l.size) return !1;
                                    var m = l.entries(),
                                        r = m.next();
                                    if (r.done || r.value[0] != k || "s" != r.value[1]) return !1;
                                    r = m.next();
                                    return r.done || 4 != r.value[0].x || "t" != r.value[1] || !m.next().done ? !1 : !0
                                } catch (v) {
                                    return !1
                                }
                            }()) return a;
                        var b = new WeakMap,
                            c = function(k) {
                                this.o = {};
                                this.j =
                                    f();
                                this.size = 0;
                                if (k) {
                                    k = _.Ma(k);
                                    for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
                                }
                            };
                        c.prototype.set = function(k, l) {
                            k = 0 === k ? 0 : k;
                            var m = d(this, k);
                            m.list || (m.list = this.o[m.id] = []);
                            m.Xa ? m.Xa.value = l : (m.Xa = {
                                next: this.j,
                                lc: this.j.lc,
                                head: this.j,
                                key: k,
                                value: l
                            }, m.list.push(m.Xa), this.j.lc.next = m.Xa, this.j.lc = m.Xa, this.size++);
                            return this
                        };
                        c.prototype.delete = function(k) {
                            k = d(this, k);
                            return k.Xa && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.o[k.id], k.Xa.lc.next = k.Xa.next, k.Xa.next.lc =
                                k.Xa.lc, k.Xa.head = null, this.size--, !0) : !1
                        };
                        c.prototype.clear = function() {
                            this.o = {};
                            this.j = this.j.lc = f();
                            this.size = 0
                        };
                        c.prototype.has = function(k) {
                            return !!d(this, k).Xa
                        };
                        c.prototype.get = function(k) {
                            return (k = d(this, k).Xa) && k.value
                        };
                        c.prototype.entries = function() {
                            return e(this, function(k) {
                                return [k.key, k.value]
                            })
                        };
                        c.prototype.keys = function() {
                            return e(this, function(k) {
                                return k.key
                            })
                        };
                        c.prototype.values = function() {
                            return e(this, function(k) {
                                return k.value
                            })
                        };
                        c.prototype.forEach = function(k, l) {
                            for (var m = this.entries(),
                                    r; !(r = m.next()).done;) r = r.value, k.call(l, r[1], r[0], this)
                        };
                        c.prototype[Symbol.iterator] = c.prototype.entries;
                        var d = function(k, l) {
                                var m = l && typeof l;
                                "object" == m || "function" == m ? b.has(l) ? m = b.get(l) : (m = "" + ++g, b.set(l, m)) : m = "p_" + l;
                                var r = k.o[m];
                                if (r && Ua(k.o, m))
                                    for (k = 0; k < r.length; k++) {
                                        var v = r[k];
                                        if (l !== l && v.key !== v.key || l === v.key) return {
                                            id: m,
                                            list: r,
                                            index: k,
                                            Xa: v
                                        }
                                    }
                                return {
                                    id: m,
                                    list: r,
                                    index: -1,
                                    Xa: void 0
                                }
                            },
                            e = function(k, l) {
                                var m = k.j;
                                return La(function() {
                                    if (m) {
                                        for (; m.head != k.j;) m = m.lc;
                                        for (; m.next != m.head;) return m =
                                            m.next, {
                                                done: !1,
                                                value: l(m)
                                            };
                                        m = null
                                    }
                                    return {
                                        done: !0,
                                        value: void 0
                                    }
                                })
                            },
                            f = function() {
                                var k = {};
                                return k.lc = k.next = k.head = k
                            },
                            g = 0;
                        return c
                    });
                    var Va = function(a, b) {
                        a instanceof String && (a += "");
                        var c = 0,
                            d = !1,
                            e = {
                                next: function() {
                                    if (!d && c < a.length) {
                                        var f = c++;
                                        return {
                                            value: b(f, a[f]),
                                            done: !1
                                        }
                                    }
                                    d = !0;
                                    return {
                                        done: !0,
                                        value: void 0
                                    }
                                }
                            };
                        e[Symbol.iterator] = function() {
                            return e
                        };
                        return e
                    };
                    Ka("Array.prototype.entries", function(a) {
                        return a ? a : function() {
                            return Va(this, function(b, c) {
                                return [b, c]
                            })
                        }
                    });
                    Ka("Array.prototype.keys", function(a) {
                        return a ? a : function() {
                            return Va(this, function(b) {
                                return b
                            })
                        }
                    });
                    Ka("Number.MAX_SAFE_INTEGER", function() {
                        return 9007199254740991
                    });
                    var Wa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
                        for (var c = 1; c < arguments.length; c++) {
                            var d = arguments[c];
                            if (d)
                                for (var e in d) Ua(d, e) && (a[e] = d[e])
                        }
                        return a
                    };
                    Ka("Object.assign", function(a) {
                        return a || Wa
                    });
                    Ka("Set", function(a) {
                        if (function() {
                                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                                try {
                                    var c = Object.seal({
                                            x: 4
                                        }),
                                        d = new a(_.Ma([c]));
                                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                                            x: 4
                                        }) != d || 2 != d.size) return !1;
                                    var e = d.entries(),
                                        f = e.next();
                                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                                    f = e.next();
                                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                                } catch (g) {
                                    return !1
                                }
                            }()) return a;
                        var b = function(c) {
                            this.j = new Map;
                            if (c) {
                                c =
                                    _.Ma(c);
                                for (var d; !(d = c.next()).done;) this.add(d.value)
                            }
                            this.size = this.j.size
                        };
                        b.prototype.add = function(c) {
                            c = 0 === c ? 0 : c;
                            this.j.set(c, c);
                            this.size = this.j.size;
                            return this
                        };
                        b.prototype.delete = function(c) {
                            c = this.j.delete(c);
                            this.size = this.j.size;
                            return c
                        };
                        b.prototype.clear = function() {
                            this.j.clear();
                            this.size = 0
                        };
                        b.prototype.has = function(c) {
                            return this.j.has(c)
                        };
                        b.prototype.entries = function() {
                            return this.j.entries()
                        };
                        b.prototype.values = function() {
                            return this.j.values()
                        };
                        b.prototype.keys = b.prototype.values;
                        b.prototype[Symbol.iterator] = b.prototype.values;
                        b.prototype.forEach = function(c, d) {
                            var e = this;
                            this.j.forEach(function(f) {
                                return c.call(d, f, f, e)
                            })
                        };
                        return b
                    });
                    Ka("Array.prototype.values", function(a) {
                        return a ? a : function() {
                            return Va(this, function(b, c) {
                                return c
                            })
                        }
                    });
                    Ka("Array.from", function(a) {
                        return a ? a : function(b, c, d) {
                            c = null != c ? c : function(k) {
                                return k
                            };
                            var e = [],
                                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
                            if ("function" == typeof f) {
                                b = f.call(b);
                                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
                            } else
                                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
                            return e
                        }
                    });
                    Ka("Object.entries", function(a) {
                        return a ? a : function(b) {
                            var c = [],
                                d;
                            for (d in b) Ua(b, d) && c.push([d, b[d]]);
                            return c
                        }
                    });
                    Ka("Object.is", function(a) {
                        return a ? a : function(b, c) {
                            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
                        }
                    });
                    Ka("Array.prototype.includes", function(a) {
                        return a ? a : function(b, c) {
                            var d = this;
                            d instanceof String && (d = String(d));
                            var e = d.length;
                            c = c || 0;
                            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                                var f = d[c];
                                if (f === b || Object.is(f, b)) return !0
                            }
                            return !1
                        }
                    });
                    Ka("String.prototype.includes", function(a) {
                        return a ? a : function(b, c) {
                            return -1 !== Ta(this, b, "includes").indexOf(b, c || 0)
                        }
                    });
                    Ka("Array.prototype.fill", function(a) {
                        return a ? a : function(b, c, d) {
                            var e = this.length || 0;
                            0 > c && (c = Math.max(0, e + c));
                            if (null == d || d > e) d = e;
                            d = Number(d);
                            0 > d && (d = Math.max(0, e + d));
                            for (c = Number(c || 0); c < d; c++) this[c] = b;
                            return this
                        }
                    });
                    var Xa = function(a) {
                        return a ? a : Array.prototype.fill
                    };
                    Ka("Int8Array.prototype.fill", Xa);
                    Ka("Uint8Array.prototype.fill", Xa);
                    Ka("Uint8ClampedArray.prototype.fill", Xa);
                    Ka("Int16Array.prototype.fill", Xa);
                    Ka("Uint16Array.prototype.fill", Xa);
                    Ka("Int32Array.prototype.fill", Xa);
                    Ka("Uint32Array.prototype.fill", Xa);
                    Ka("Float32Array.prototype.fill", Xa);
                    Ka("Float64Array.prototype.fill", Xa);
                    /*

                     Copyright The Closure Library Authors.
                     SPDX-License-Identifier: Apache-2.0
                    */
                    var ab, bb, db, eb, fb;
                    _.Ya = _.Ya || {};
                    _.n = this || self;
                    _.Za = function() {};
                    _.$a = function(a) {
                        var b = typeof a;
                        return "object" == b && null != a || "function" == b
                    };
                    _.cb = function(a) {
                        return Object.prototype.hasOwnProperty.call(a, ab) && a[ab] || (a[ab] = ++bb)
                    };
                    ab = "closure_uid_" + (1E9 * Math.random() >>> 0);
                    bb = 0;
                    db = function(a, b, c) {
                        return a.call.apply(a.bind, arguments)
                    };
                    eb = function(a, b, c) {
                        if (!a) throw Error();
                        if (2 < arguments.length) {
                            var d = Array.prototype.slice.call(arguments, 2);
                            return function() {
                                var e = Array.prototype.slice.call(arguments);
                                Array.prototype.unshift.apply(e, d);
                                return a.apply(b, e)
                            }
                        }
                        return function() {
                            return a.apply(b, arguments)
                        }
                    };
                    _.w = function(a, b, c) {
                        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.w = db : _.w = eb;
                        return _.w.apply(null, arguments)
                    };
                    _.z = function(a, b) {
                        a = a.split(".");
                        var c = _.n;
                        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
                        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
                    };
                    _.A = function(a, b) {
                        function c() {}
                        c.prototype = b.prototype;
                        a.T = b.prototype;
                        a.prototype = new c;
                        a.prototype.constructor = a;
                        a.Al = function(d, e, f) {
                            for (var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++) g[k - 2] = arguments[k];
                            return b.prototype[e].apply(d, g)
                        }
                    };
                    fb = function(a) {
                        return a
                    };
                    _.gb = function(a) {
                        var b = null,
                            c = _.n.trustedTypes;
                        if (!c || !c.createPolicy) return b;
                        try {
                            b = c.createPolicy(a, {
                                createHTML: fb,
                                createScript: fb,
                                createScriptURL: fb
                            })
                        } catch (d) {
                            _.n.console && _.n.console.error(d.message)
                        }
                        return b
                    };
                    _.A(_.aa, Error);
                    _.aa.prototype.name = "CustomError";
                    _.hb = "undefined" !== typeof TextDecoder;
                    _.ib = function(a, b) {
                        return 0 == a.lastIndexOf(b, 0)
                    };
                    _.jb = String.prototype.trim ? function(a) {
                        return a.trim()
                    } : function(a) {
                        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
                    };
                    _.ka = Array.prototype.indexOf ? function(a, b) {
                        return Array.prototype.indexOf.call(a, b, void 0)
                    } : function(a, b) {
                        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
                        for (var c = 0; c < a.length; c++)
                            if (c in a && a[c] === b) return c;
                        return -1
                    };
                    _.kb = Array.prototype.forEach ? function(a, b, c) {
                        Array.prototype.forEach.call(a, b, c)
                    } : function(a, b, c) {
                        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
                    };
                    _.lb = Array.prototype.filter ? function(a, b, c) {
                        return Array.prototype.filter.call(a, b, c)
                    } : function(a, b, c) {
                        for (var d = a.length, e = [], f = 0, g = "string" === typeof a ? a.split("") : a, k = 0; k < d; k++)
                            if (k in g) {
                                var l = g[k];
                                b.call(c, l, k, a) && (e[f++] = l)
                            } return e
                    };
                    _.mb = Array.prototype.map ? function(a, b, c) {
                        return Array.prototype.map.call(a, b, c)
                    } : function(a, b, c) {
                        for (var d = a.length, e = Array(d), f = "string" === typeof a ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
                        return e
                    };
                    _.nb = Array.prototype.reduce ? function(a, b, c) {
                        return Array.prototype.reduce.call(a, b, c)
                    } : function(a, b, c) {
                        var d = c;
                        (0, _.kb)(a, function(e, f) {
                            d = b.call(void 0, d, e, f, a)
                        });
                        return d
                    };
                    _.ob = Array.prototype.some ? function(a, b) {
                        return Array.prototype.some.call(a, b, void 0)
                    } : function(a, b) {
                        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                            if (e in d && b.call(void 0, d[e], e, a)) return !0;
                        return !1
                    };
                    _.pb = function(a) {
                        _.pb[" "](a);
                        return a
                    };
                    _.pb[" "] = _.Za;
                    var Db, Eb, Jb;
                    _.qb = _.p("Opera");
                    _.B = _.ca();
                    _.rb = _.p("Edge");
                    _.sb = _.rb || _.B;
                    _.tb = _.p("Gecko") && !_.na() && !(_.p("Trident") || _.p("MSIE")) && !_.p("Edge");
                    _.ub = _.na();
                    _.vb = _.p("Macintosh");
                    _.wb = _.p("Windows");
                    _.xb = _.p("Linux") || _.p("CrOS");
                    _.yb = _.p("Android");
                    _.zb = ia();
                    _.Ab = _.p("iPad");
                    _.Bb = _.p("iPod");
                    _.Cb = _.ja();
                    Db = function() {
                        var a = _.n.document;
                        return a ? a.documentMode : void 0
                    };
                    a: {
                        var Fb = "",
                            Gb = function() {
                                var a = _.ba();
                                if (_.tb) return /rv:([^\);]+)(\)|;)/.exec(a);
                                if (_.rb) return /Edge\/([\d\.]+)/.exec(a);
                                if (_.B) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                                if (_.ub) return /WebKit\/(\S+)/.exec(a);
                                if (_.qb) return /(?:Version)[ \/]?(\S+)/.exec(a)
                            }();Gb && (Fb = Gb ? Gb[1] : "");
                        if (_.B) {
                            var Hb = Db();
                            if (null != Hb && Hb > parseFloat(Fb)) {
                                Eb = String(Hb);
                                break a
                            }
                        }
                        Eb = Fb
                    }
                    _.Ib = Eb;
                    if (_.n.document && _.B) {
                        var Kb = Db();
                        Jb = Kb ? Kb : parseInt(_.Ib, 10) || void 0
                    } else Jb = void 0;
                    _.Lb = Jb;
                    _.Mb = _.da();
                    _.Nb = ia() || _.p("iPod");
                    _.Ob = _.p("iPad");
                    _.Pb = _.ha();
                    _.Qb = ea();
                    _.Rb = _.fa() && !_.ja();
                    var Sb;
                    Sb = {};
                    _.Tb = null;
                    _.ua = function(a) {
                        var b;
                        void 0 === b && (b = 0);
                        _.Ub();
                        b = Sb[b];
                        for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                            var g = a[e],
                                k = a[e + 1],
                                l = a[e + 2],
                                m = b[g >> 2];
                            g = b[(g & 3) << 4 | k >> 4];
                            k = b[(k & 15) << 2 | l >> 6];
                            l = b[l & 63];
                            c[f++] = m + g + k + l
                        }
                        m = 0;
                        l = d;
                        switch (a.length - e) {
                            case 2:
                                m = a[e + 1], l = b[(m & 15) << 2] || d;
                            case 1:
                                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | m >> 4] + l + d
                        }
                        return c.join("")
                    };
                    _.Ub = function() {
                        if (!_.Tb) {
                            _.Tb = {};
                            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                                var d = a.concat(b[c].split(""));
                                Sb[c] = d;
                                for (var e = 0; e < d.length; e++) {
                                    var f = d[e];
                                    void 0 === _.Tb[f] && (_.Tb[f] = e)
                                }
                            }
                        }
                    };
                    _.oa = "function" === typeof Uint8Array;
                    _.Vb = "function" === typeof Uint8Array.prototype.slice;
                    var ra = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;
                    _.wa = function(a, b) {
                        this.j = a;
                        this.A = b;
                        this.map = {};
                        this.o = !0;
                        if (0 < this.j.length) {
                            for (a = 0; a < this.j.length; a++) {
                                b = this.j[a];
                                var c = b[0];
                                this.map[c.toString()] = new Xb(c, b[1])
                            }
                            this.o = !0
                        }
                    };
                    _.h = _.wa.prototype;
                    _.h.Pb = function() {
                        if (!this.o) {
                            this.j.length = 0;
                            var a = Yb(this);
                            a.sort();
                            for (var b = 0; b < a.length; b++) {
                                var c = this.map[a[b]];
                                this.j.push([c.key, c.value])
                            }
                            this.o = !0
                        }
                        return this.j
                    };
                    _.h.clear = function() {
                        this.map = {};
                        this.o = !1
                    };
                    _.h.entries = function() {
                        var a = [],
                            b = Yb(this);
                        b.sort();
                        for (var c = 0; c < b.length; c++) {
                            var d = this.map[b[c]];
                            a.push([d.key, _.Zb(this, d)])
                        }
                        return new $b(a)
                    };
                    _.h.keys = function() {
                        var a = [],
                            b = Yb(this);
                        b.sort();
                        for (var c = 0; c < b.length; c++) a.push(this.map[b[c]].key);
                        return new $b(a)
                    };
                    _.h.values = function() {
                        var a = [],
                            b = Yb(this);
                        b.sort();
                        for (var c = 0; c < b.length; c++) a.push(_.Zb(this, this.map[b[c]]));
                        return new $b(a)
                    };
                    _.h.forEach = function(a, b) {
                        var c = Yb(this);
                        c.sort();
                        for (var d = 0; d < c.length; d++) {
                            var e = this.map[c[d]];
                            a.call(b, _.Zb(this, e), e.key, this)
                        }
                    };
                    _.h.set = function(a, b) {
                        var c = new Xb(a);
                        this.A ? (c.j = b, c.value = b.Pb()) : c.value = b;
                        this.map[a.toString()] = c;
                        this.o = !1;
                        return this
                    };
                    _.Zb = function(a, b) {
                        return a.A ? (b.j || (b.j = new a.A(b.value)), b.j) : b.value
                    };
                    _.wa.prototype.get = function(a) {
                        if (a = this.map[a.toString()]) return _.Zb(this, a)
                    };
                    _.wa.prototype.has = function(a) {
                        return a.toString() in this.map
                    };
                    var Yb = function(a) {
                        a = a.map;
                        var b = [],
                            c;
                        for (c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
                        return b
                    };
                    _.wa.prototype[Symbol.iterator] = function() {
                        return this.entries()
                    };
                    var Xb = function(a, b) {
                            this.key = a;
                            this.value = b;
                            this.j = void 0
                        },
                        $b = function(a) {
                            this.o = 0;
                            this.j = a
                        };
                    $b.prototype.next = function() {
                        return this.o < this.j.length ? {
                            done: !1,
                            value: this.j[this.o++]
                        } : {
                            done: !0,
                            value: void 0
                        }
                    };
                    $b.prototype[Symbol.iterator] = function() {
                        return this
                    };
                    var cc;
                    _.D = function(a, b, c) {
                        var d = _.ac;
                        _.ac = null;
                        a || (a = d);
                        d = this.constructor.kc;
                        a || (a = d ? [d] : []);
                        this.B = (d ? 0 : -1) - (this.constructor.Il || 0);
                        this.j = null;
                        this.A = a;
                        a: {
                            d = this.A.length;a = d - 1;
                            if (d && (d = this.A[a], ta(d))) {
                                this.C = a - this.B;
                                this.o = d;
                                break a
                            }
                            void 0 !== b && -1 < b ? (this.C = Math.max(b, a + 1 - this.B), this.o = null) : this.C = Number.MAX_VALUE
                        }
                        if (c)
                            for (b = 0; b < c.length; b++) a = c[b], a < this.C ? (a += this.B, (d = this.A[a]) ? Array.isArray(d) && _.sa(d) : this.A[a] = _.bc) : (cc(this), (d = this.o[a]) ? Array.isArray(d) && _.sa(d) : this.o[a] = _.bc)
                    };
                    _.bc = Object.freeze(_.sa([]));
                    cc = function(a) {
                        var b = a.C + a.B;
                        a.A[b] || (a.o = a.A[b] = {})
                    };
                    _.E = function(a, b, c) {
                        return -1 === b ? null : b >= a.C ? a.o ? a.o[b] : void 0 : (void 0 === c ? 0 : c) && a.o && a.o[b] ? a.o[b] : a.A[b + a.B]
                    };
                    _.dc = function(a, b) {
                        return null != _.E(a, b)
                    };
                    _.F = function(a, b) {
                        a = _.E(a, b);
                        return null == a ? a : !!a
                    };
                    _.ec = function(a, b, c) {
                        a = _.E(a, b);
                        return null == a ? c : a
                    };
                    _.fc = function(a, b, c) {
                        a = _.E(a, b);
                        a = null == a ? a : +a;
                        return null == a ? void 0 === c ? 0 : c : a
                    };
                    _.G = function(a, b, c, d) {
                        (void 0 === d ? 0 : d) || b >= a.C ? (cc(a), a.o[b] = c) : a.A[b + a.B] = c;
                        return a
                    };
                    _.I = function(a, b, c, d, e) {
                        if (-1 === c) return null;
                        a.j || (a.j = {});
                        var f = a.j[c];
                        if (f) return f;
                        e = _.E(a, c, void 0 === e ? !1 : e);
                        if (null == e && !d) return f;
                        b = new b(e);
                        return a.j[c] = b
                    };
                    _.J = function(a, b, c) {
                        var d = void 0 === d ? !1 : d;
                        a.j || (a.j = {});
                        var e = c ? c.Pb() : c;
                        a.j[b] = c;
                        return _.G(a, b, e, d)
                    };
                    _.D.prototype.toJSON = function() {
                        var a = this.Pb();
                        return _.Wb ? a : _.ya(a, Aa)
                    };
                    _.D.prototype.Pb = function() {
                        return this.A
                    };
                    _.D.prototype.toString = function() {
                        return this.Pb().toString()
                    };
                    _.hc = function(a, b, c) {
                        return _.ec(a, b, void 0 === c ? 0 : c)
                    };
                    _.ic = Symbol();
                    _.jc = Symbol();
                    var kc = function(a) {
                        _.D.call(this, a)
                    };
                    _.u(kc, _.D);
                    _.lc = function(a) {
                        _.D.call(this, a)
                    };
                    _.u(_.lc, _.D);
                    _.lc.prototype.od = function(a) {
                        return _.G(this, 3, a)
                    };
                    var mc = function(a) {
                        _.D.call(this, a)
                    };
                    _.u(mc, _.D);
                    _.nc = function(a) {
                        _.D.call(this, a)
                    };
                    _.u(_.nc, _.D);
                    _.nc.prototype.Hf = function(a) {
                        return _.G(this, 24, a)
                    };
                    _.oc = function(a) {
                        _.D.call(this, a)
                    };
                    _.u(_.oc, _.D);
                    _.K = function() {
                        this.Vb = this.Vb;
                        this.Na = this.Na
                    };
                    _.K.prototype.Vb = !1;
                    _.K.prototype.isDisposed = function() {
                        return this.Vb
                    };
                    _.K.prototype.na = function() {
                        this.Vb || (this.Vb = !0, this.R())
                    };
                    _.K.prototype.R = function() {
                        if (this.Na)
                            for (; this.Na.length;) this.Na.shift()()
                    };
                    var pc = function(a) {
                        _.K.call(this);
                        this.A = a;
                        this.j = [];
                        this.o = {}
                    };
                    _.u(pc, _.K);
                    pc.prototype.resolve = function(a) {
                        var b = this.A;
                        a = a.split(".");
                        for (var c = a.length, d = 0; d < c; ++d)
                            if (b[a[d]]) b = b[a[d]];
                            else return null;
                        return b instanceof Function ? b : null
                    };
                    pc.prototype.Gd = function() {
                        for (var a = this.j.length, b = this.j, c = [], d = 0; d < a; ++d) {
                            var e = b[d].j(),
                                f = this.resolve(e);
                            if (f && f != this.o[e]) try {
                                b[d].Gd(f)
                            } catch (g) {} else c.push(b[d])
                        }
                        this.j = c.concat(b.slice(a))
                    };
                    var qc = function(a) {
                        _.K.call(this);
                        this.A = a;
                        this.C = this.j = null;
                        this.B = 0;
                        this.D = {};
                        this.o = !1;
                        a = window.navigator.userAgent;
                        0 <= a.indexOf("MSIE") && 0 <= a.indexOf("Trident") && (a = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)) && a[1] && 9 > parseFloat(a[1]) && (this.o = !0)
                    };
                    _.u(qc, _.K);
                    qc.prototype.F = function(a, b) {
                        this.j = b;
                        this.C = a;
                        b.preventDefault ? b.preventDefault() : b.returnValue = !1
                    };
                    _.rc = function(a) {
                        _.D.call(this, a)
                    };
                    _.u(_.rc, _.D);
                    _.sc = function(a) {
                        _.D.call(this, a)
                    };
                    _.u(_.sc, _.D);
                    _.tc = function() {
                        this.data = {}
                    };
                    _.tc.prototype.o = function() {
                        window.console && window.console.log && window.console.log("Log data: ", this.data)
                    };
                    _.tc.prototype.j = function(a) {
                        var b = [],
                            c;
                        for (c in this.data) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(String(this.data[c])));
                        return ("atyp=i&zx=" + (new Date).getTime() + "&" + b.join("&")).substr(0, a)
                    };
                    var uc = function(a, b) {
                        this.data = {};
                        var c = _.I(a, mc, 8) || new mc;
                        window.google && window.google.kEI && (this.data.ei = window.google.kEI);
                        this.data.sei = _.t(_.E(a, 10));
                        this.data.ogf = _.t(_.E(c, 3));
                        this.data.ogrp = (window.google && window.google.sn ? !/.*hp$/.test(window.google.sn) : _.q(_.F(a, 7))) ? "1" : "";
                        this.data.ogv = _.t(_.E(c, 6)) + "." + _.t(_.E(c, 7));
                        this.data.ogd = _.t(_.E(a, 21));
                        this.data.ogc = _.t(_.E(a, 20));
                        this.data.ogl = _.t(_.E(a, 5));
                        b && (this.data.oggv = b)
                    };
                    _.u(uc, _.tc);
                    var Da = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
                    _.vc = function(a, b, c, d, e) {
                        uc.call(this, a, b);
                        _.Ea(this.data, {
                            jexpid: _.t(_.E(a, 9)),
                            srcpg: "prop=" + _.t(_.E(a, 6)),
                            jsr: Math.round(1 / d),
                            emsg: c.name + ":" + c.message
                        });
                        if (e) {
                            e._sn && (e._sn = "og." + e._sn);
                            for (var f in e) this.data[encodeURIComponent(f)] = e[f]
                        }
                    };
                    _.u(_.vc, uc);
                    var wc, xc = function() {
                        void 0 === wc && (wc = _.gb("ogb-qtm#html"));
                        return wc
                    };
                    var zc;
                    _.Ac = function(a, b) {
                        this.j = a === _.yc && b || "";
                        this.o = zc
                    };
                    _.Ac.prototype.Wb = !0;
                    _.Ac.prototype.Db = function() {
                        return this.j
                    };
                    _.Bc = function(a) {
                        return a instanceof _.Ac && a.constructor === _.Ac && a.o === zc ? a.j : "type_error:Const"
                    };
                    zc = {};
                    _.yc = {};
                    var Cc;
                    _.Dc = function(a, b) {
                        this.j = b === Cc ? a : ""
                    };
                    _.h = _.Dc.prototype;
                    _.h.Wb = !0;
                    _.h.Db = function() {
                        return this.j.toString()
                    };
                    _.h.jf = !0;
                    _.h.Cc = function() {
                        return 1
                    };
                    _.h.toString = function() {
                        return this.j + ""
                    };
                    _.Fc = function(a) {
                        return _.Ec(a).toString()
                    };
                    _.Ec = function(a) {
                        return a instanceof _.Dc && a.constructor === _.Dc ? a.j : "type_error:TrustedResourceUrl"
                    };
                    Cc = {};
                    _.Gc = function(a) {
                        var b = xc();
                        a = b ? b.createScriptURL(a) : a;
                        return new _.Dc(a, Cc)
                    };
                    var Kc, Lc, Mc, Hc;
                    _.Ic = function(a, b) {
                        this.j = b === Hc ? a : ""
                    };
                    _.h = _.Ic.prototype;
                    _.h.Wb = !0;
                    _.h.Db = function() {
                        return this.j.toString()
                    };
                    _.h.jf = !0;
                    _.h.Cc = function() {
                        return 1
                    };
                    _.h.toString = function() {
                        return this.j.toString()
                    };
                    _.Jc = function(a) {
                        return a instanceof _.Ic && a.constructor === _.Ic ? a.j : "type_error:SafeUrl"
                    };
                    Kc = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i");
                    Lc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
                    Mc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
                    _.Oc = function(a) {
                        if (a instanceof _.Ic) return a;
                        a = "object" == typeof a && a.Wb ? a.Db() : String(a);
                        if (Mc.test(a)) a = _.Nc(a);
                        else {
                            a = String(a);
                            a = a.replace(/(%0A|%0D)/g, "");
                            var b = a.match(Lc);
                            a = b && Kc.test(b[1]) ? _.Nc(a) : null
                        }
                        return a
                    };
                    _.Pc = function(a) {
                        if (a instanceof _.Ic) return a;
                        a = "object" == typeof a && a.Wb ? a.Db() : String(a);
                        Mc.test(a) || (a = "about:invalid#zClosurez");
                        return _.Nc(a)
                    };
                    Hc = {};
                    _.Nc = function(a) {
                        return new _.Ic(a, Hc)
                    };
                    _.Qc = _.Nc("about:invalid#zClosurez");
                    _.Rc = {};
                    _.Sc = function(a, b) {
                        this.j = b === _.Rc ? a : "";
                        this.Wb = !0
                    };
                    _.Sc.prototype.Db = function() {
                        return this.j
                    };
                    _.Sc.prototype.toString = function() {
                        return this.j.toString()
                    };
                    _.Tc = new _.Sc("", _.Rc);
                    _.Uc = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");
                    _.Vc = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g");
                    _.Wc = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g");
                    var Xc;
                    Xc = {};
                    _.Yc = function(a, b, c) {
                        this.j = c === Xc ? a : "";
                        this.o = b;
                        this.Wb = this.jf = !0
                    };
                    _.Yc.prototype.Cc = function() {
                        return this.o
                    };
                    _.Yc.prototype.Db = function() {
                        return this.j.toString()
                    };
                    _.Yc.prototype.toString = function() {
                        return this.j.toString()
                    };
                    _.Zc = function(a) {
                        return a instanceof _.Yc && a.constructor === _.Yc ? a.j : "type_error:SafeHtml"
                    };
                    _.$c = function(a, b) {
                        var c = xc();
                        a = c ? c.createHTML(a) : a;
                        return new _.Yc(a, b, Xc)
                    };
                    _.ad = new _.Yc(_.n.trustedTypes && _.n.trustedTypes.emptyHTML || "", 0, Xc);
                    _.bd = _.$c("<br>", 0);
                    var fd;
                    _.cd = function(a) {
                        var b = !1,
                            c;
                        return function() {
                            b || (c = a(), b = !0);
                            return c
                        }
                    }(function() {
                        var a = document.createElement("div"),
                            b = document.createElement("div");
                        b.appendChild(document.createElement("div"));
                        a.appendChild(b);
                        b = a.firstChild.firstChild;
                        a.innerHTML = _.Zc(_.ad);
                        return !b.parentElement
                    });
                    _.ed = function(a) {
                        return _.dd('style[nonce],link[rel="stylesheet"][nonce]', a)
                    };
                    fd = /^[\w+/_-]+[=]{0,2}$/;
                    _.dd = function(a, b) {
                        b = (b || _.n).document;
                        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && fd.test(a) ? a : "" : ""
                    };
                    _.gd = RegExp("^\\s{3,4}at(?: (?:(.*?)\\.)?((?:new )?(?:[a-zA-Z_$][\\w$]*|<anonymous>))(?: \\[as ([a-zA-Z_$][\\w$]*)\\])?)? (?:\\(unknown source\\)|\\(native\\)|\\((?:eval at )?((?:http|https|file)://[^\\s)]+|javascript:.*)\\)|((?:http|https|file)://[^\\s)]+|javascript:.*))$");
                    _.hd = RegExp("^(?:(.*?)\\.)?([a-zA-Z_$][\\w$]*(?:/.?<)?)?(\\(.*\\))?@(?::0|((?:http|https|file)://[^\\s)]+|javascript:.*))$");
                    var id, ld, kd;
                    _.jd = function(a) {
                        var b = window.google && window.google.logUrl ? "" : "https://www.google.com";
                        b += "/gen_204?use_corp=on&";
                        b += a.j(2040 - b.length);
                        id(_.Oc(b) || _.Qc)
                    };
                    id = function(a) {
                        var b = new Image,
                            c = kd;
                        b.onerror = b.onload = b.onabort = function() {
                            c in ld && delete ld[c]
                        };
                        ld[kd++] = b;
                        b.src = _.Jc(a)
                    };
                    ld = [];
                    kd = 0;
                    _.md = function(a) {
                        _.D.call(this, a)
                    };
                    _.u(_.md, _.D);
                    _.nd = function(a) {
                        var b = "Nc";
                        if (a.Nc && a.hasOwnProperty(b)) return a.Nc;
                        b = new a;
                        return a.Nc = b
                    };
                    _.od = function() {
                        this.j = {};
                        this.o = {}
                    };
                    _.qd = function(a, b) {
                        var c = _.od.j();
                        if (a in c.j) {
                            if (c.j[a] != b) throw new pd(a);
                        } else {
                            c.j[a] = b;
                            if (b = c.o[a])
                                for (var d = 0, e = b.length; d < e; d++) b[d].j(c.j, a);
                            delete c.o[a]
                        }
                    };
                    _.sd = function(a, b) {
                        if (b in a.j) return a.j[b];
                        throw new rd(b);
                    };
                    _.od.j = function() {
                        return _.nd(_.od)
                    };
                    var td = function() {
                        _.aa.call(this)
                    };
                    _.u(td, _.aa);
                    var pd = function() {
                        _.aa.call(this)
                    };
                    _.u(pd, td);
                    var rd = function() {
                        _.aa.call(this)
                    };
                    _.u(rd, td);
                    var wd = function() {
                        var a = ud;
                        this.C = vd;
                        this.o = _.Ba(_.fc(a, 2, .001), .001);
                        this.D = _.q(_.F(a, 1)) && Math.random() < this.o;
                        this.F = _.Ba(_.hc(a, 3, 1), 1);
                        this.B = 0;
                        this.j = this.A = null
                    };
                    wd.prototype.log = function(a, b) {
                        if (this.j) {
                            var c = new kc;
                            _.G(c, 1, a.message);
                            _.G(c, 2, a.stack);
                            _.G(c, 3, a.lineNumber);
                            _.G(c, 5, 1);
                            var d = new _.lc;
                            _.J(d, 40, c);
                            this.j.log(98, d)
                        }
                        try {
                            if (this.D && this.B < this.F) {
                                try {
                                    var e = (this.A || _.sd(_.od.j(), "lm")).B(a, b)
                                } catch (f) {
                                    e = new _.vc(this.C, "quantum:gapiBuildLabel", a, this.o, b)
                                }
                                _.jd(e);
                                this.B++
                            }
                        } catch (f) {}
                    };
                    var xd = [1, 2, 3, 4, 5, 6, 9, 10, 11, 13, 14, 28, 29, 30, 34, 35, 37, 38, 39, 40, 42, 43, 48, 49, 50, 51, 52, 53, 62, 500],
                        Ad = function(a, b, c, d, e, f) {
                            uc.call(this, a, b);
                            _.Ea(this.data, {
                                oge: d,
                                ogex: _.t(_.E(a, 9)),
                                ogp: _.t(_.E(a, 6)),
                                ogsr: Math.round(1 / (yd(d) ? _.Ba(_.fc(c, 3, 1)) : _.Ba(_.fc(c, 2, 1E-4)))),
                                ogus: e
                            });
                            if (f) {
                                "ogw" in f && (this.data.ogw = f.ogw, delete f.ogw);
                                "ved" in f && (this.data.ved = f.ved, delete f.ved);
                                a = [];
                                for (var g in f) 0 != a.length && a.push(","), a.push(zd(g)), a.push("."), a.push(zd(f[g]));
                                f = a.join("");
                                "" != f && (this.data.ogad = f)
                            }
                        };
                    _.u(Ad, uc);
                    var zd = function(a) {
                            a = String(a);
                            return a.replace(".", "%2E").replace(",", "%2C")
                        },
                        yd = function(a) {
                            if (!Bd) {
                                Bd = {};
                                for (var b = 0; b < xd.length; b++) Bd[xd[b]] = !0
                            }
                            return !!Bd[a]
                        },
                        Bd = null;
                    var Cd = function(a) {
                        _.D.call(this, a)
                    };
                    _.u(Cd, _.D);
                    var Gd = function() {
                        var a = Dd,
                            b = Ed,
                            c = Fd;
                        this.o = a;
                        this.j = b;
                        this.B = _.Ba(_.fc(a, 2, 1E-4), 1E-4);
                        this.D = _.Ba(_.fc(a, 3, 1), 1);
                        b = Math.random();
                        this.A = _.q(_.F(a, 1)) && b < this.B;
                        this.C = _.q(_.F(a, 1)) && b < this.D;
                        a = 0;
                        _.q(_.F(c, 1)) && (a |= 1);
                        _.q(_.F(c, 2)) && (a |= 2);
                        _.q(_.F(c, 3)) && (a |= 4);
                        this.F = a
                    };
                    Gd.prototype.log = function(a, b) {
                        try {
                            if (yd(a) ? this.C : this.A) {
                                var c = new Ad(this.j, "quantum:gapiBuildLabel", this.o, a, this.F, b);
                                _.jd(c)
                            }
                        } catch (d) {}
                    };
                    _.Hd = function(a) {
                        this.j = a;
                        this.o = void 0;
                        this.A = []
                    };
                    _.Hd.prototype.then = function(a, b, c) {
                        this.A.push(new Id(a, b, c));
                        Jd(this)
                    };
                    _.Hd.prototype.resolve = function(a) {
                        if (void 0 !== this.j || void 0 !== this.o) throw Error("F");
                        this.j = a;
                        Jd(this)
                    };
                    _.Hd.prototype.reject = function(a) {
                        if (void 0 !== this.j || void 0 !== this.o) throw Error("F");
                        this.o = a;
                        Jd(this)
                    };
                    var Jd = function(a) {
                        if (0 < a.A.length) {
                            var b = void 0 !== a.j,
                                c = void 0 !== a.o;
                            if (b || c) {
                                b = b ? a.B : a.C;
                                c = a.A;
                                a.A = [];
                                try {
                                    _.kb(c, b, a)
                                } catch (d) {
                                    console.error(d)
                                }
                            }
                        }
                    };
                    _.Hd.prototype.B = function(a) {
                        a.o && a.o.call(a.j, this.j)
                    };
                    _.Hd.prototype.C = function(a) {
                        a.A && a.A.call(a.j, this.o)
                    };
                    var Id = function(a, b, c) {
                        this.o = a;
                        this.A = b;
                        this.j = c
                    };
                    _.L = function() {
                        this.B = new _.Hd;
                        this.j = new _.Hd;
                        this.G = new _.Hd;
                        this.D = new _.Hd;
                        this.F = new _.Hd;
                        this.J = new _.Hd;
                        this.C = new _.Hd;
                        this.A = new _.Hd;
                        this.o = new _.Hd;
                        this.K = new _.Hd
                    };
                    _.h = _.L.prototype;
                    _.h.Di = function() {
                        return this.B
                    };
                    _.h.Li = function() {
                        return this.j
                    };
                    _.h.Si = function() {
                        return this.G
                    };
                    _.h.Ki = function() {
                        return this.D
                    };
                    _.h.Qi = function() {
                        return this.F
                    };
                    _.h.Hi = function() {
                        return this.J
                    };
                    _.h.Ii = function() {
                        return this.C
                    };
                    _.h.xi = function() {
                        return this.A
                    };
                    _.h.wi = function() {
                        return this.o
                    };
                    _.L.j = function() {
                        return _.nd(_.L)
                    };
                    var Kd = function(a) {
                        _.D.call(this, a)
                    };
                    _.u(Kd, _.D);
                    _.Md = function() {
                        return _.I(_.Ld, _.nc, 1)
                    };
                    _.Nd = function() {
                        return _.I(_.Ld, _.oc, 5)
                    };
                    var Od;
                    window.gbar_ && window.gbar_.CONFIG ? Od = window.gbar_.CONFIG[0] || {} : Od = [];
                    _.Ld = new Kd(Od);
                    var ud, vd, Ed, Fd, Dd;
                    ud = _.I(_.Ld, _.md, 3) || new _.md;
                    vd = _.Md() || new _.nc;
                    _.Pd = new wd;
                    Ed = _.Md() || new _.nc;
                    Fd = _.Nd() || new _.oc;
                    Dd = _.I(_.Ld, Cd, 4) || new Cd;
                    _.Qd = new Gd;
                    _.z("gbar_._DumpException", function(a) {
                        _.Pd ? _.Pd.log(a) : console.error(a)
                    });
                    _.Rd = new qc(_.Pd);
                    _.Qd.log(8, {
                        m: "BackCompat" == document.compatMode ? "q" : "s"
                    });
                    _.z("gbar.A", _.Hd);
                    _.Hd.prototype.aa = _.Hd.prototype.then;
                    _.z("gbar.B", _.L);
                    _.L.prototype.ba = _.L.prototype.Li;
                    _.L.prototype.bb = _.L.prototype.Si;
                    _.L.prototype.bd = _.L.prototype.Qi;
                    _.L.prototype.bf = _.L.prototype.Di;
                    _.L.prototype.bg = _.L.prototype.Ki;
                    _.L.prototype.bh = _.L.prototype.Hi;
                    _.L.prototype.bi = _.L.prototype.Ii;
                    _.L.prototype.bj = _.L.prototype.xi;
                    _.L.prototype.bk = _.L.prototype.wi;
                    _.z("gbar.a", _.L.j());
                    var Sd = new pc(window);
                    _.qd("api", Sd);
                    var Td = _.Nd() || new _.oc;
                    window.__PVT = _.t(_.E(Td, 8));
                    _.qd("eq", _.Rd);

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    var Ud = function(a) {
                        _.D.call(this, a)
                    };
                    _.u(Ud, _.D);
                    var Vd = function() {
                        _.K.call(this);
                        this.o = [];
                        this.j = []
                    };
                    _.u(Vd, _.K);
                    Vd.prototype.A = function(a, b) {
                        this.o.push({
                            features: a,
                            options: b
                        })
                    };
                    Vd.prototype.init = function(a, b, c) {
                        window.gapi = {};
                        var d = window.___jsl = {};
                        d.h = _.t(_.E(a, 1));
                        _.dc(a, 12) && (d.dpo = _.q(_.F(a, 12)));
                        d.ms = _.t(_.E(a, 2));
                        d.m = _.t(_.E(a, 3));
                        d.l = [];
                        _.E(b, 1) && (a = _.E(b, 3)) && this.j.push(a);
                        _.E(c, 1) && (c = _.E(c, 2)) && this.j.push(c);
                        _.z("gapi.load", (0, _.w)(this.A, this));
                        return this
                    };
                    var Wd = _.I(_.Ld, _.rc, 14) || new _.rc,
                        Xd = _.I(_.Ld, _.sc, 9) || new _.sc,
                        Yd = new Ud,
                        Zd = new Vd;
                    Zd.init(Wd, Xd, Yd);
                    _.qd("gs", Zd);

                } catch (e) {
                    _._DumpException(e)
                }
            })(this.gbar_);
            // Google Inc.
            ;
        });
    })();
    (function() {
        window.jsl.dh('_HYOtYeGkDZTt0ATr2qGoDw5', '\x3cdiv class\x3d\x22VCQMIc\x22\x3e\u8a2d\u5b9a\x3c/div\x3e');
    })();
    (function() {
        window.jsl.dh('_HYOtYeGkDZTt0ATr2qGoDw7', '\x3cspan class\x3d\x22gb\x22 style\x3d\x22display:none\x22\x3e\x3c/span\x3e\x3cdiv class\x3d\x22gb_pa gb_Sd gb_Va\x22 id\x3d\x22gb\x22\x3e\x3cdiv class\x3d\x22gb_Qd gb_Sa gb_Ed\x22 data-ogsr-up\x3d\x22\x22\x3e\x3cdiv class\x3d\x22gb_Me\x22\x3e\x3cdiv class\x3d\x22gb_Nc\x22\x3e\x3cdiv class\x3d\x22gb_B gb_bd gb_h gb_uf\x22 data-ogsr-fb\x3d\x22true\x22 data-ogsr-alt\x3d\x22\x22 id\x3d\x22gbwa\x22\x3e\x3cdiv class\x3d\x22gb_tf\x22\x3e\x3ca class\x3d\x22gb_C\x22 aria-label\x3d\x22Google \u61c9\u7528\u7a0b\u5f0f\x22 href\x3d\x22https://www.google.com.tw/intl/zh-TW/about/products?tab\x3dwh\x22 aria-expanded\x3d\x22false\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22\x3e\x3csvg class\x3d\x22gb_Pe\x22 focusable\x3d\x22false\x22 viewbox\x3d\x220 0 24 24\x22\x3e\x3cpath d\x3d\x22M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d\x22gb_Na gb_bd gb_gg gb_h gb_uf\x22\x3e\x3cdiv class\x3d\x22gb_tf gb_Ra gb_gg gb_h\x22\x3e\x3ca class\x3d\x22gb_C gb_Ma gb_h\x22 aria-label\x3d\x22Google \u5e33\u6236\uff1a \u65b9\u96ef\u923a\u3001\u5929\u79c0  \x26#10;(paltis5212@gmail.com)\x22 href\x3d\x22https://accounts.google.com/SignOutOptions?hl\x3dzh-TW\x26amp;continue\x3dhttps://www.google.com/search%3Fq%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26oq%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26aqs%3Dchrome..69i57j0i5i30j69i64l2.4723j0j7%26sourceid%3Dchrome%26ie%3DUTF-8\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22\x3e\x3cimg class\x3d\x22gb_Ca gbii\x22 src\x3d\x22https://lh3.googleusercontent.com/ogw/ADea4I7BcnpRhHC1vjX8TKWbNVbeqpkUXkxikqJPiMn3\x3ds32-c-mo\x22 srcset\x3d\x22https://lh3.googleusercontent.com/ogw/ADea4I7BcnpRhHC1vjX8TKWbNVbeqpkUXkxikqJPiMn3\x3ds32-c-mo 1x, https://lh3.googleusercontent.com/ogw/ADea4I7BcnpRhHC1vjX8TKWbNVbeqpkUXkxikqJPiMn3\x3ds64-c-mo 2x \x22 alt\x3d\x22\x22 aria-hidden\x3d\x22true\x22 data-noaft\x3d\x22\x22\x3e\x3c/a\x3e\x3cdiv class\x3d\x22gb_Za\x22\x3e\x3c/div\x3e\x3cdiv class\x3d\x22gb_Xa\x22\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d\x22gb_0a gb_E gb_k gb_1a\x22 aria-label\x3d\x22\u5e33\u6236\u8cc7\u8a0a\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv class\x3d\x22gb_9a\x22\x3e\x3cdiv class\x3d\x22gb_ab\x22\x3e\x3cimg class\x3d\x22gb_Ha gbip gb_eb\x22 src\x3d\x22data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d\x22 data-src\x3d\x22https://lh3.googleusercontent.com/ogw/ADea4I7BcnpRhHC1vjX8TKWbNVbeqpkUXkxikqJPiMn3\x3ds83-c-mo\x22 data-srcset\x3d\x22https://lh3.googleusercontent.com/ogw/ADea4I7BcnpRhHC1vjX8TKWbNVbeqpkUXkxikqJPiMn3\x3ds83-c-mo 1x, https://lh3.googleusercontent.com/ogw/ADea4I7BcnpRhHC1vjX8TKWbNVbeqpkUXkxikqJPiMn3\x3ds192-c-mo 2x \x22 title\x3d\x22\u500b\u4eba\u8cc7\u6599\x22 alt\x3d\x22\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv class\x3d\x22gb_ib gb_eb\x22\x3e\x3ca class\x3d\x22gb_jb gb_Lf gb_eb gb_Qf\x22 aria-label\x3d\x22\u8b8a\u66f4\u500b\u4eba\u8cc7\u6599\u76f8\u7247\u3002\x22 href\x3d\x22https://myaccount.google.com/?utm_source\x3dOGB\x26amp;tab\x3dwk\x22\x3e\x3csvg class\x3d\x22gb_kb\x22 enable-background\x3d\x22new 0 0 24 24\x22 focusable\x3d\x22false\x22 height\x3d\x2226\x22 viewbox\x3d\x220 0 24 24\x22 width\x3d\x2218\x22 xml:space\x3d\x22preserve\x22 xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22\x3e\x3cpath d\x3d\x22M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h16v12zM12 9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d\x22gb_bb\x22\x3e\x3cdiv class\x3d\x22gb_lb gb_mb\x22\x3e\u65b9\u96ef\u923a\u3001\u5929\u79c0\x3c/div\x3e\x3cdiv class\x3d\x22gb_nb\x22\x3epaltis5212@gmail.com\x3c/div\x3e\x3ca class\x3d\x22gb_rb gb_Mf gbp1 gb_Je gb_3c\x22 href\x3d\x22https://myaccount.google.com/?utm_source\x3dOGB\x26amp;tab\x3dwk\x26amp;utm_medium\x3dact\x22 target\x3d\x22_blank\x22\x3e\u7ba1\u7406\u4f60\u7684 Google \u5e33\u6236\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d\x22gb_Eb gb_Ib\x22\x3e\x3cdiv class\x3d\x22gb_Sf gb_fc gb_Aa\x22\x3e\x3cdiv class\x3d\x22gb_gc\x22\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d\x22gb_Pf gb_Mb gb_Aa\x22 aria-hidden\x3d\x22true\x22\x3e\x3ca class\x3d\x22gb_Lb gb_Vb\x22 aria-hidden\x3d\x22true\x22 href\x3d\x22https://www.google.com/webhp?authuser\x3d0\x22\x3e\x3cimg class\x3d\x22gb_Xb gb_eb\x22 src\x3d\x22data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw\x3d\x3d\x22 data-src\x3d\x22https://lh3.googleusercontent.com/ogw/ADea4I7BcnpRhHC1vjX8TKWbNVbeqpkUXkxikqJPiMn3\x3ds48-c-mo\x22 alt\x3d\x22\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv class\x3d\x22gb_Ob\x22\x3e\x3cdiv\x3e\x3cdiv class\x3d\x22gb_4b\x22\x3e\u9810\u8a2d\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d\x22gb_0b\x22\x3e\u65b9\u96ef\u923a\u3001\u5929\u79c0\x3c/div\x3e\x3cdiv class\x3d\x22gb_2b\x22\x3epaltis5212@gmail.com\x3c/div\x3e\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d\x22gb_yb\x22 aria-hidden\x3d\x22true\x22\x3e\x3csvg class\x3d\x22gb_zb\x22 focusable\x3d\x22false\x22 height\x3d\x2220\x22 viewbox\x3d\x220 0 20 20\x22 width\x3d\x2220\x22 xml:space\x3d\x22preserve\x22 xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22\x3e\x3cpath d\x3d\x22M0 0h20v20H0V0z\x22 fill\x3d\x22none\x22\x3e\x3c/path\x3e\x3cpath d\x3d\x22M6.18 7L10 10.82 13.82 7 15 8.17l-5 5-5-5z\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/div\x3e\x3ca class\x3d\x22gb_6b gb_Aa gb_Pb\x22 href\x3d\x22https://myaccount.google.com/brandaccounts?authuser\x3d0\x26amp;continue\x3dhttps://www.google.com/search%3Fq%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26oq%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26aqs%3Dchrome..69i57j0i5i30j69i64l2.4723j0j7%26sourceid%3Dchrome%26ie%3DUTF-8\x26amp;service\x3dhttps://www.google.com/webhp%3Fauthuser%3D%24authuser\x22 aria-hidden\x3d\x22true\x22\x3e\x3cdiv class\x3d\x22gb_7b\x22\x3e\x3csvg focusable\x3d\x22false\x22 height\x3d\x2220\x22 viewbox\x3d\x220 0 24 24\x22 width\x3d\x2220\x22 xml:space\x3d\x22preserve\x22 xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22\x3e\x3cpath d\x3d\x22M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v10.79C16.52 14.37 13.23 14 12 14s-4.52.37-7 1.79V5h14zM5 19v-.77C6.74 16.66 10.32 16 12 16s5.26.66 7 2.23V19H5zm7-6c1.94 0 3.5-1.56 3.5-3.5S13.94 6 12 6 8.5 7.56 8.5 9.5 10.06 13 12 13zm0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8z\x22 fill\x3d\x22#5F6368\x22\x3e\x3c/path\x3e\x3cpath d\x3d\x22M0 0h24v24H0V0z\x22 fill\x3d\x22none\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/div\x3e\x3cdiv class\x3d\x22gb_9b gb_ac\x22\x3e\u6240\u6709\u54c1\u724c\u5e33\u6236\x3c/div\x3e\x3csvg class\x3d\x22gb_bc\x22 focusable\x3d\x22false\x22 height\x3d\x2224\x22 viewbox\x3d\x220 0 24 24\x22 width\x3d\x2224\x22 xmlns\x3d\x22http://www.w3.org/2000/svg\x22\x3e\x3cpath d\x3d\x22M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\x22 fill\x3d\x22#5F6368\x22\x3e\x3c/path\x3e\x3cpath d\x3d\x22M0 0h24v24H0z\x22 fill\x3d\x22none\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d\x22gb_Qb\x22 tabindex\x3d\x22-1\x22\x3e\x3ca class\x3d\x22gb_vb gb_If\x22 href\x3d\x22https://accounts.google.com/AddSession?hl\x3dzh-TW\x26amp;continue\x3dhttps://www.google.com/search%3Fq%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26oq%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26aqs%3Dchrome..69i57j0i5i30j69i64l2.4723j0j7%26sourceid%3Dchrome%26ie%3DUTF-8\x26amp;ec\x3dGAlAAQ\x22\x3e\x3cdiv class\x3d\x22gb_wb\x22\x3e\x3csvg class\x3d\x22gb_xb\x22 enable-background\x3d\x22new 0 0 24 24\x22 focusable\x3d\x22false\x22 height\x3d\x2220\x22 viewbox\x3d\x220 0 24 24\x22 width\x3d\x2220\x22 xml:space\x3d\x22preserve\x22 xmlns\x3d\x22http://www.w3.org/2000/svg\x22 xmlns:xlink\x3d\x22http://www.w3.org/1999/xlink\x22\x3e\x3cpath d\x3d\x22M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/div\x3e\x3cdiv class\x3d\x22gb_Ab\x22\x3e\u65b0\u589e\u5176\u4ed6\u5e33\u6236\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d\x22gb_Jf gb_Bb\x22\x3e\x3ca class\x3d\x22gb_Cb gb_Nf gb_Vf gb_Je gb_3c\x22 id\x3d\x22gb_71\x22 href\x3d\x22https://accounts.google.com/Logout?hl\x3dzh-TW\x26amp;continue\x3dhttps://www.google.com/search%3Fq%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26oq%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26aqs%3Dchrome..69i57j0i5i30j69i64l2.4723j0j7%26sourceid%3Dchrome%26ie%3DUTF-8\x26amp;timeStmp\x3d1638761245\x26amp;secTok\x3d.AG5fkS-NR5cJvRIgrNWMLZD_1eAMjdvjHQ\x26amp;ec\x3dGAdAAQ\x22 target\x3d\x22_top\x22\x3e\u767b\u51fa\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d\x22gb_Kf gb_sb\x22\x3e\x3ca class\x3d\x22gb_tb gb_Hb\x22 href\x3d\x22https://policies.google.com/privacy?hl\x3dzh-TW\x22 target\x3d\x22_blank\x22\x3e\u96b1\u79c1\u6b0a\u653f\u7b56\x3c/a\x3e\x3cspan class\x3d\x22gb_Oa\x22 aria-hidden\x3d\x22true\x22\x3e\x26bull;\x3c/span\x3e\x3ca class\x3d\x22gb_tb gb_Fb\x22 href\x3d\x22https://myaccount.google.com/termsofservice?hl\x3dzh-TW\x22 target\x3d\x22_blank\x22\x3e\u670d\u52d9\u689d\u6b3e\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
    })();
    (function() {
        window.jsl.dh('_HYOtYeGkDZTt0ATr2qGoDw9', '\x3cg-menu jsname\x3d\x22xl07Ob\x22 class\x3d\x22cF4V5c zriOQb UU8UAb gLSAk rShyOb\x22 jscontroller\x3d\x22WlNQGd\x22 data-mh\x3d\x22-1\x22 role\x3d\x22menu\x22 tabindex\x3d\x220\x22 jsaction\x3d\x22focus:h06R8;PSl28c;keydown:uYT2Vb;mouseenter:WOQqYb;mouseleave:Tx5Rb;mouseover:IgJl9c;rcuQ6b:npT2md\x22\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22/search?q\x3dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\x26amp;sxsrf\x3dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x26amp;source\x3dlnms\x26amp;tbm\x3dshop\x26amp;sa\x3dX\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ_AUoAHoECAEQCg\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22\x3e\x3cspan class\x3d\x22bmaJhd iJddsb\x22 style\x3d\x22height:16px;width:16px\x22\x3e\x3csvg focusable\x3d\x22false\x22 viewbox\x3d\x220 0 24 24\x22\x3e\x3cpath d\x3d\x22M21.11 2.89A3.02 3.02 0 0 0 18.95 2h-5.8c-.81 0-1.58.31-2.16.89L7.25 6.63 2.9 10.98a3.06 3.06 0 0 0 0 4.32l5.79 5.8a3.05 3.05 0 0 0 4.32.01l8.09-8.1c.58-.58.9-1.34.9-2.16v-5.8c0-.81-.32-1.59-.89-2.16zM20 10.85c0 .28-.12.54-.32.74l-3.73 3.74-4.36 4.36c-.41.41-1.08.41-1.49 0l-2.89-2.9-2.9-2.9a1.06 1.06 0 0 1 0-1.49l8.1-8.1c.2-.2.46-.3.74-.3l5.8-.01A1.05 1.05 0 0 1 20 5.05v5.8zM16 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/span\x3e\u8cfc\u7269\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22/search?q\x3dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\x26amp;sxsrf\x3dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x26amp;source\x3dlnms\x26amp;tbm\x3dbks\x26amp;sa\x3dX\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ_AUoAXoECAEQCw\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22\x3e\x3cspan class\x3d\x22bmaJhd iJddsb\x22 style\x3d\x22height:16px;width:16px\x22\x3e\x3csvg focusable\x3d\x22false\x22 viewbox\x3d\x220 0 24 24\x22\x3e\x3cpath d\x3d\x22M18 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/span\x3e\u66f8\u7c4d\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22https://www.google.com/flights?q\x3dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\x26amp;sxsrf\x3dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x26amp;source\x3dlnms\x26amp;tbm\x3dflm\x26amp;sa\x3dX\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ_AUoAnoECAEQDA\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22\x3e\x3cspan class\x3d\x22bmaJhd iJddsb\x22 style\x3d\x22height:16px;width:16px\x22\x3e\x3csvg focusable\x3d\x22false\x22 viewbox\x3d\x220 0 24 24\x22\x3e\x3cpath d\x3d\x22M12.98 12.89l-4.03 4.03.42 2.95L8.24 21l-1.87-3.37L3 15.76l1.12-1.12 2.95.42 4.03-4.03L3 6.77l1.5-1.5 10.04 2.32 4.2-4.2a1.32 1.32 0 0 1 1.87 0c.52.52.52 1.36 0 1.87l-4.2 4.2 2.32 10.04-1.5 1.5-4.25-8.11\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/span\x3e\u822a\u73ed\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22https://www.google.com/finance?sa\x3dX\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ_AUoA3oECAEQDQ\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22\x3e\x3cspan class\x3d\x22bmaJhd iJddsb\x22 style\x3d\x22height:16px;width:16px\x22\x3e\x3csvg focusable\x3d\x22false\x22 viewbox\x3d\x220 0 24 24\x22\x3e\x3cpath d\x3d\x22M6 15.5l-3 2.94V10h3v5.5zm5-1.84l-1.57-1.34L8 13.64V6h3v7.66zM16 12l-3 3V2h3v10zm2.81-.19L17 10h5v5l-1.79-1.79L13 20.36l-3.47-3.02L5.75 21H3l6.47-6.34L13 17.64l5.81-5.83\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/span\x3e\u8ca1\u7d93\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3c/g-menu\x3e');
    })();
    (function() {
        window.jsl.dh('_HYOtYeGkDZTt0ATr2qGoDw11', '\x3cg-menu jsname\x3d\x22xl07Ob\x22 class\x3d\x22cF4V5c VpHku gLSAk rShyOb\x22 jscontroller\x3d\x22WlNQGd\x22 data-mh\x3d\x22-1\x22 role\x3d\x22menu\x22 tabindex\x3d\x220\x22 jsaction\x3d\x22focus:h06R8;PSl28c;keydown:uYT2Vb;mouseenter:WOQqYb;mouseleave:Tx5Rb;mouseover:IgJl9c;rcuQ6b:npT2md\x22\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22/preferences?hl\x3dzh-TW\x26amp;prev\x3dhttps://www.google.com/search?q%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26oq%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26aqs%3Dchrome..69i57j0i5i30j69i64l2.4723j0j7%26sourceid%3Dchrome%26ie%3DUTF-8\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22 ping\x3d\x22/url?sa\x3dt\x26amp;source\x3dweb\x26amp;rct\x3dj\x26amp;url\x3d/preferences%3Fhl%3Dzh-TW%26prev%3Dhttps://www.google.com/search%3Fq%253Dgoogle%252B%2525E7%2525AF%252580%2525E6%25258B%25258D%2525E5%252599%2525A8%2526oq%253Dgoogle%252B%2525E7%2525AF%252580%2525E6%25258B%25258D%2525E5%252599%2525A8%2526aqs%253Dchrome..69i57j0i5i30j69i64l2.4723j0j7%2526sourceid%253Dchrome%2526ie%253DUTF-8\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ65sIKAF6BAgBEBI\x22\x3e\u641c\u5c0b\u8a2d\u5b9a\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22/preferences?hl\x3dzh-TW\x26amp;prev\x3dhttps://www.google.com/search?q%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26oq%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26aqs%3Dchrome..69i57j0i5i30j69i64l2.4723j0j7%26sourceid%3Dchrome%26ie%3DUTF-8#languages\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22 ping\x3d\x22/url?sa\x3dt\x26amp;source\x3dweb\x26amp;rct\x3dj\x26amp;url\x3d/preferences%3Fhl%3Dzh-TW%26prev%3Dhttps://www.google.com/search%3Fq%253Dgoogle%252B%2525E7%2525AF%252580%2525E6%25258B%25258D%2525E5%252599%2525A8%2526oq%253Dgoogle%252B%2525E7%2525AF%252580%2525E6%25258B%25258D%2525E5%252599%2525A8%2526aqs%253Dchrome..69i57j0i5i30j69i64l2.4723j0j7%2526sourceid%253Dchrome%2526ie%253DUTF-8%23languages\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ8ZsIKAJ6BAgBEBM\x22\x3e\x3cspan\x3e\u8a9e\u8a00\x3c/span\x3e\x3cspan style\x3d\x22margin-left:3px\x22\x3e (Languages)\x3c/span\x3e\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22 jscontroller\x3d\x22lpfstd\x22 href\x3d\x22/setprefs?safeui\x3don\x26amp;sig\x3d0_x24D4O30rMz2AZHll0uTLBsqMp8%3D\x26amp;prev\x3dhttps://www.google.com/search?q%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26oq%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26aqs%3Dchrome..69i57j0i5i30j69i64l2.4723j0j7%26sourceid%3Dchrome%26ie%3DUTF-8\x22 jsaction\x3d\x22CojpKc\x22 id\x3d\x22safesearch\x22 ping\x3d\x22/url?sa\x3dt\x26amp;source\x3dweb\x26amp;rct\x3dj\x26amp;url\x3d/setprefs%3Fsafeui%3Don%26sig%3D0_x24D4O30rMz2AZHll0uTLBsqMp8%253D%26prev%3Dhttps://www.google.com/search%3Fq%253Dgoogle%252B%2525E7%2525AF%252580%2525E6%25258B%25258D%2525E5%252599%2525A8%2526oq%253Dgoogle%252B%2525E7%2525AF%252580%2525E6%25258B%25258D%2525E5%252599%2525A8%2526aqs%253Dchrome..69i57j0i5i30j69i64l2.4723j0j7%2526sourceid%253Dchrome%2526ie%253DUTF-8\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ75sIKAN6BAgBEBQ\x22\x3e\x3cdiv\x3e\u96b1\u85cf\u542b\u6709\u717d\u60c5\u9732\u9aa8\u5167\u5bb9\u7684\u641c\u5c0b\u7d50\u679c\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22/advanced_search?q\x3dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\x26amp;sxsrf\x3dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x26amp;hl\x3dzh-TW\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22 ping\x3d\x22/url?sa\x3dt\x26amp;source\x3dweb\x26amp;rct\x3dj\x26amp;url\x3d/advanced_search%3Fq%3Dgoogle%2B%25E7%25AF%2580%25E6%258B%258D%25E5%2599%25A8%26sxsrf%3DAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227%26hl%3Dzh-TW\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ7psIKAR6BAgBEBU\x22\x3e\u9032\u968e\u641c\u5c0b\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22https://myactivity.google.com/product/search?utm_source\x3dgoogle\x26amp;hl\x3dzh-TW\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22 ping\x3d\x22/url?sa\x3dt\x26amp;source\x3dweb\x26amp;rct\x3dj\x26amp;url\x3dhttps://myactivity.google.com/product/search%3Futm_source%3Dgoogle%26hl%3Dzh-TW\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ7JsIKAV6BAgBEBY\x22\x3e\u641c\u5c0b\u8a18\u9304\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22https://myactivity.google.com/privacyadvisor/search?utm_source\x3dgooglemenu\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22 ping\x3d\x22/url?sa\x3dt\x26amp;source\x3dweb\x26amp;rct\x3dj\x26amp;url\x3dhttps://myactivity.google.com/privacyadvisor/search%3Futm_source%3Dgooglemenu\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ7ZsIKAZ6BAgBEBc\x22\x3e\u4f60\u5728 Google \u641c\u5c0b\u4e2d\u7684\u8cc7\u6599\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22https://support.google.com/websearch/?p\x3ddsrp_search_hc\x26amp;hl\x3dzh-TW\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22 ping\x3d\x22/url?sa\x3dt\x26amp;source\x3dweb\x26amp;rct\x3dj\x26amp;url\x3dhttps://support.google.com/websearch/%3Fp%3Ddsrp_search_hc%26hl%3Dzh-TW\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ8psIKAd6BAgBEBg\x22\x3e\u641c\u5c0b\u8aaa\u660e\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb dPaec\x22 aria-hidden\x3d\x22true\x22 disabled\x3d\x22disabled\x22 role\x3d\x22separator\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc634\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 class\x3d\x22cB9XMd ErsxPb\x22 jscontroller\x3d\x22CnSW2d\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3cdiv jscontroller\x3d\x22fXO0xe\x22 class\x3d\x22tFYjZe\x22 data-bsdm\x3d\x220\x22 data-btf\x3d\x220\x22 data-hbc\x3d\x22#1a73e8\x22 data-htc\x3d\x22#fff\x22 data-spt\x3d\x221\x22 data-tsdm\x3d\x220\x22 role\x3d\x22link\x22 tabindex\x3d\x220\x22 jsaction\x3d\x22ok5gFc;x6BCfb:ggFCce;w3Ukrf:aelxJb\x22 data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQqsEHKAh6BAgBEBk\x22\x3e\x3cdiv\x3e\u6df1\u8272\u4e3b\u984c\uff1a\u95dc\u9589\x3c/div\x3e\x3cdiv class\x3d\x22iOHNLb\x22\x3e\x3cspan style\x3d\x22height:20px;line-height:20px;width:20px\x22 class\x3d\x22z1asCe aqvxcd\x22\x3e\x3csvg focusable\x3d\x22false\x22 xmlns\x3d\x22http://www.w3.org/2000/svg\x22 enable-background\x3d\x22new 0 0 24 24\x22 height\x3d\x2224\x22 viewBox\x3d\x220 0 24 24\x22 width\x3d\x2224\x22\x3e\x3crect fill\x3d\x22none\x22 height\x3d\x2224\x22 width\x3d\x2224\x22\x3e\x3c/rect\x3e\x3cpath d\x3d\x22M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z\x22\x3e\x3c/path\x3e\x3c/svg\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3c/g-menu\x3e');
    })();
    (function() {
        window.jsl.dh('hdtbMenus', '\x3cdiv class\x3d\x22LkcePc\x22\x3e\x3c/div\x3e\x3cspan jscontroller\x3d\x22nabPbb\x22 jsaction\x3d\x22KyPa0e:Y0y4c;BVfjhf:VFzweb\x22\x3e\x3cg-popup jsname\x3d\x22V68bde\x22 jscontroller\x3d\x22DPreE\x22 jsaction\x3d\x22A05xBd:IYtByb;EOZ57e:WFrRFb;\x22 jsdata\x3d\x22mVjAjf;_;BOc63s\x22\x3e\x3cdiv jsname\x3d\x22oYxtQd\x22 class\x3d\x22rIbAWc\x22 aria-expanded\x3d\x22false\x22 aria-haspopup\x3d\x22true\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22 jsaction\x3d\x22WFrRFb;keydown:uYT2Vb\x22\x3e\x3cdiv jsname\x3d\x22LgbsSe\x22\x3e\x3cdiv class\x3d\x22hdtb-mn-hd Yg3U7e\x22\x3e\x3cdiv class\x3d\x22KTBKoe\x22\x3e\u4e0d\u9650\u8a9e\u8a00\x3c/div\x3e\x3cspan class\x3d\x22gTl8xb\x22\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv jsname\x3d\x22V68bde\x22 class\x3d\x22EwsJzb sAKBe B8Kd8d\x22 style\x3d\x22display:none;z-index:200\x22\x3e\x3cg-menu jsname\x3d\x22xl07Ob\x22 class\x3d\x22cF4V5c Tlae9d gLSAk rShyOb\x22 jscontroller\x3d\x22WlNQGd\x22 data-mh\x3d\x22-1\x22 role\x3d\x22menu\x22 tabindex\x3d\x220\x22 jsaction\x3d\x22focus:h06R8;PSl28c;keydown:uYT2Vb;mouseenter:WOQqYb;mouseleave:Tx5Rb;mouseover:IgJl9c;rcuQ6b:npT2md\x22\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 class\x3d\x22nvELY ErsxPb\x22 jscontroller\x3d\x22CnSW2d\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc64E\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22\x3e\x3cdiv class\x3d\x22y0fQ9c\x22\x3e\u4e0d\u9650\u8a9e\u8a00\x3c/div\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22/search?q\x3dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\x26amp;sxsrf\x3dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x26amp;source\x3dlnt\x26amp;tbs\x3dlr:lang_1zh-CN%7Clang_1zh-TW\x26amp;lr\x3dlang_zh-CN%7Clang_zh-TW\x26amp;sa\x3dX\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQpwV6BAgBECE\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22\x3e\u641c\u5c0b\u6240\u6709\u4e2d\u6587\u7db2\u9801\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22/search?q\x3dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\x26amp;sxsrf\x3dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x26amp;source\x3dlnt\x26amp;tbs\x3dlr:lang_1zh-TW\x26amp;lr\x3dlang_zh-TW\x26amp;sa\x3dX\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQpwV6BAgBECI\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22\x3e\u641c\u5c0b\u7e41\u9ad4\u4e2d\u6587\u7db2\u9801\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3c/g-menu\x3e\x3c/div\x3e\x3c/g-popup\x3e\x3c/span\x3e\x3cspan jscontroller\x3d\x22nabPbb\x22 jsaction\x3d\x22KyPa0e:Y0y4c;BVfjhf:VFzweb\x22\x3e\x3cg-popup jsname\x3d\x22V68bde\x22 jscontroller\x3d\x22DPreE\x22 jsaction\x3d\x22A05xBd:IYtByb;EOZ57e:WFrRFb;\x22 jsdata\x3d\x22mVjAjf;_;BOc63s\x22\x3e\x3cdiv jsname\x3d\x22oYxtQd\x22 class\x3d\x22rIbAWc\x22 aria-expanded\x3d\x22false\x22 aria-haspopup\x3d\x22true\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22 jsaction\x3d\x22WFrRFb;keydown:uYT2Vb\x22\x3e\x3cdiv jsname\x3d\x22LgbsSe\x22\x3e\x3cdiv class\x3d\x22hdtb-mn-hd\x22\x3e\x3cdiv class\x3d\x22KTBKoe\x22\x3e\u4e0d\u9650\u6642\u9593\x3c/div\x3e\x3cspan class\x3d\x22gTl8xb\x22\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv jsname\x3d\x22V68bde\x22 class\x3d\x22EwsJzb sAKBe B8Kd8d\x22 style\x3d\x22display:none;z-index:200\x22\x3e\x3cg-menu jsname\x3d\x22xl07Ob\x22 class\x3d\x22cF4V5c Tlae9d gLSAk rShyOb\x22 jscontroller\x3d\x22WlNQGd\x22 data-mh\x3d\x22-1\x22 role\x3d\x22menu\x22 tabindex\x3d\x220\x22 jsaction\x3d\x22focus:h06R8;PSl28c;keydown:uYT2Vb;mouseenter:WOQqYb;mouseleave:Tx5Rb;mouseover:IgJl9c;rcuQ6b:npT2md\x22\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 class\x3d\x22nvELY ErsxPb\x22 jscontroller\x3d\x22CnSW2d\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc64E\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22\x3e\x3cdiv class\x3d\x22y0fQ9c\x22\x3e\u4e0d\u9650\u6642\u9593\x3c/div\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22/search?q\x3dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\x26amp;sxsrf\x3dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x26amp;source\x3dlnt\x26amp;tbs\x3dqdr:h\x26amp;sa\x3dX\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQpwV6BAgBECc\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22\x3e \u904e\u53bb 1 \u5c0f\u6642\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22/search?q\x3dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\x26amp;sxsrf\x3dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x26amp;source\x3dlnt\x26amp;tbs\x3dqdr:d\x26amp;sa\x3dX\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQpwV6BAgBECg\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22\x3e \u904e\u53bb 24 \u5c0f\u6642\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22/search?q\x3dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\x26amp;sxsrf\x3dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x26amp;source\x3dlnt\x26amp;tbs\x3dqdr:w\x26amp;sa\x3dX\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQpwV6BAgBECk\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22\x3e \u904e\u53bb 1 \u9031\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22/search?q\x3dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\x26amp;sxsrf\x3dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x26amp;source\x3dlnt\x26amp;tbs\x3dqdr:m\x26amp;sa\x3dX\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQpwV6BAgBECo\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22\x3e \u904e\u53bb 1 \u500b\u6708\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22/search?q\x3dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\x26amp;sxsrf\x3dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x26amp;source\x3dlnt\x26amp;tbs\x3dqdr:y\x26amp;sa\x3dX\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQpwV6BAgBECs\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22\x3e \u904e\u53bb 1 \u5e74\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3cdiv class\x3d\x22y0fQ9c\x22 jscontroller\x3d\x22VD4Qme\x22 data-m\x3d\x22false\x22\x3e\x3cspan role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22 jsaction\x3d\x22EEGHee\x22 data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQpwV6BAgBECw\x22\x3e\u81ea\u8a02\u65e5\u671f\u7bc4\u570d...\x3c/span\x3e\x3cdiv class\x3d\x22n5Ug4b\x22 style\x3d\x22display:none\x22\x3e\x3cdiv class\x3d\x22vOvh1b\x22 jsaction\x3d\x22xp3IKd\x22\x3e\x3c/div\x3e\x3cdiv class\x3d\x22J6UZg\x22 aria-modal\x3d\x22true\x22 role\x3d\x22dialog\x22\x3e\x3cdiv class\x3d\x22Jy9Ore\x22 role\x3d\x22heading\x22\x3e\u81ea\u8a02\u65e5\u671f\u7bc4\u570d\x3c/div\x3e\x3clabel class\x3d\x22Qtsmnf tmDYm\x22 for\x3d\x22OouJcb\x22\x3e\u958b\u59cb\u65e5\u671f\x3c/label\x3e\x3clabel class\x3d\x22Qtsmnf iWBKNe\x22 for\x3d\x22rzG2be\x22\x3e\u7d50\u675f\u65e5\u671f\x3c/label\x3e\x3cdiv class\x3d\x22Gwgzqd\x22 aria-label\x3d\x22\u95dc\u9589\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22 jsaction\x3d\x22xp3IKd\x22\x3e\x3c/div\x3e\x3cdiv class\x3d\x22NwEGxd\x22\x3e\x3cdiv class\x3d\x22qomYCd\x22\x3e\x3c/div\x3e\x3cform action\x3d\x22/search\x22 class\x3d\x22T3kYXe\x22 id\x3d\x22T3kYXe\x22 method\x3d\x22get\x22\x3e\x3cinput name\x3d\x22q\x22 value\x3d\x22google \u7bc0\u62cd\u5668\x22 type\x3d\x22hidden\x22\x3e\x3cinput name\x3d\x22sxsrf\x22 value\x3d\x22AOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x22 type\x3d\x22hidden\x22\x3e\x3cinput name\x3d\x22source\x22 type\x3d\x22hidden\x22 value\x3d\x22lnt\x22\x3e\x3cinput value\x3d\x22cdr:1,cd_min:x,cd_max:x\x22 id\x3d\x22HjtPBb\x22 name\x3d\x22tbs\x22 type\x3d\x22hidden\x22\x3e\x3cinput value\x3d\x22\x22 name\x3d\x22tbm\x22 type\x3d\x22hidden\x22\x3e\x3cinput class\x3d\x22OouJcb\x22 type\x3d\x22text\x22 value\x3d\x22\x22 autocomplete\x3d\x22off\x22 id\x3d\x22OouJcb\x22 jsaction\x3d\x22focus:daRB0b\x22\x3e\x3cinput class\x3d\x22rzG2be\x22 type\x3d\x22text\x22 value\x3d\x22\x22 autocomplete\x3d\x22off\x22 id\x3d\x22rzG2be\x22 jsaction\x3d\x22focus:daRB0b\x22\x3e\x3cg-button class\x3d\x22Ru1Ao BwGU8e fE5Rge\x22 jsaction\x3d\x22hNEEAb\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22\x3e\u958b\u59cb\u641c\u5c0b\x3c/g-button\x3e\x3cinput type\x3d\x22submit\x22 jsaction\x3d\x22zbvklb\x22 style\x3d\x22display:none\x22\x3e\x3c/form\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3c/g-menu\x3e\x3c/div\x3e\x3c/g-popup\x3e\x3c/span\x3e\x3cspan jscontroller\x3d\x22nabPbb\x22 jsaction\x3d\x22KyPa0e:Y0y4c;BVfjhf:VFzweb\x22\x3e\x3cg-popup jsname\x3d\x22V68bde\x22 jscontroller\x3d\x22DPreE\x22 jsaction\x3d\x22A05xBd:IYtByb;EOZ57e:WFrRFb;\x22 jsdata\x3d\x22mVjAjf;_;BOc63s\x22\x3e\x3cdiv jsname\x3d\x22oYxtQd\x22 class\x3d\x22rIbAWc\x22 aria-expanded\x3d\x22false\x22 aria-haspopup\x3d\x22true\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22 jsaction\x3d\x22WFrRFb;keydown:uYT2Vb\x22\x3e\x3cdiv jsname\x3d\x22LgbsSe\x22\x3e\x3cdiv class\x3d\x22hdtb-mn-hd\x22\x3e\x3cdiv class\x3d\x22KTBKoe\x22\x3e\u6240\u6709\u7d50\u679c\x3c/div\x3e\x3cspan class\x3d\x22gTl8xb\x22\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv jsname\x3d\x22V68bde\x22 class\x3d\x22EwsJzb sAKBe B8Kd8d\x22 style\x3d\x22display:none;z-index:200\x22\x3e\x3cg-menu jsname\x3d\x22xl07Ob\x22 class\x3d\x22cF4V5c Tlae9d gLSAk rShyOb\x22 jscontroller\x3d\x22WlNQGd\x22 data-mh\x3d\x22-1\x22 role\x3d\x22menu\x22 tabindex\x3d\x220\x22 jsaction\x3d\x22focus:h06R8;PSl28c;keydown:uYT2Vb;mouseenter:WOQqYb;mouseleave:Tx5Rb;mouseover:IgJl9c;rcuQ6b:npT2md\x22\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 class\x3d\x22nvELY ErsxPb\x22 jscontroller\x3d\x22CnSW2d\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc64E\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22\x3e\x3cdiv class\x3d\x22y0fQ9c\x22\x3e\u6240\u6709\u7d50\u679c\x3c/div\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3cg-menu-item jsname\x3d\x22NNJLud\x22 jscontroller\x3d\x22CnSW2d\x22 class\x3d\x22ErsxPb\x22 role\x3d\x22none\x22 data-short-label\x3d\x22\x22 jsdata\x3d\x22zPXzie;_;BOc63w\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3cdiv jsname\x3d\x22ibnC6b\x22 class\x3d\x22znKVS OSrXXb tnhqA\x22 role\x3d\x22none\x22\x3e\x3ca href\x3d\x22/search?q\x3dgoogle+%E7%AF%80%E6%8B%8D%E5%99%A8\x26amp;sxsrf\x3dAOaemvJ-pxI6bxnh4N6dbFGjL_q_BmMS1w:1638761245227\x26amp;source\x3dlnt\x26amp;tbs\x3dli:1\x26amp;sa\x3dX\x26amp;ved\x3d2ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQpwV6BAgBEDI\x22 role\x3d\x22menuitem\x22 tabindex\x3d\x22-1\x22\x3e\u4e00\u5b57\u4e0d\u5dee\x3c/a\x3e\x3c/div\x3e\x3c/g-menu-item\x3e\x3c/g-menu\x3e\x3c/div\x3e\x3c/g-popup\x3e\x3c/span\x3e');
    })();
    (function() {
        window.jsl.dh('spch', '\x3cbutton class\x3d\x22close-button\x22 id\x3d\x22spchx\x22 aria-label\x3d\x22\u95dc\u9589\x22\x3e\x26times;\x3c/button\x3e\x3cdiv class\x3d\x22spchc\x22 id\x3d\x22spchc\x22\x3e\x3cdiv class\x3d\x22inner-container\x22\x3e\x3cdiv class\x3d\x22button-container\x22\x3e\x3cspan class\x3d\x22r8s4j\x22 id\x3d\x22spchl\x22\x3e\x3c/span\x3e\x3cspan class\x3d\x22button\x22 id\x3d\x22spchb\x22\x3e\x3cdiv class\x3d\x22microphone\x22\x3e\x3cspan class\x3d\x22receiver\x22\x3e\x3c/span\x3e\x3cdiv class\x3d\x22wrapper\x22\x3e\x3cspan class\x3d\x22stem\x22\x3e\x3c/span\x3e\x3cspan class\x3d\x22shell\x22\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d\x22text-container\x22\x3e\x3cspan class\x3d\x22spcht\x22 style\x3d\x22color:#70757a\x22 id\x3d\x22spchi\x22\x3e\x3c/span\x3e\x3cspan class\x3d\x22spcht\x22 style\x3d\x22color:#000\x22 id\x3d\x22spchf\x22\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d\x22google-logo\x22\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d\x22permission-bar\x22\x3e\x3cdiv class\x3d\x22permission-bar-gradient\x22\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
    })();
    (function() {
        window.jsl.dh('tsuid57', '\x3ca jsname\x3d\x22gXWYVe\x22 class\x3d\x22rwA8ec HDOrGf\x22 href\x3d\x22#\x22 style\x3d\x22white-space:normal\x22 data-biw\x3d\x221280\x22 jsaction\x3d\x22click:HTIlC\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22 data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQuZ0HegQIARBV\x22\x3e\x3cdiv class\x3d\x22plhhYd\x22\x3e\x3cspan class\x3d\x22yLngu\x22 id\x3d\x22EcMbV\x22\x3e\x3c/span\x3e\x3cspan id\x3d\x22Wprf1b\x22\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d\x22plhhYd\x22\x3e\x3cspan id\x3d\x22VdZal\x22\x3e\x26nbsp;-\x26nbsp;\x3c/span\x3e\x3cspan class\x3d\x22KwU3F\x22\x3e\x3cspan id\x3d\x22gc9Iqb\x22\x3e\x3c/span\x3e\x3c/span\x3e\x3c/div\x3e\x3c/a\x3e\x3cspan id\x3d\x22RYW0de\x22\x3e\x26nbsp;-\x26nbsp;\x3c/span\x3e\x3cupdate-location class\x3d\x22xSQxL HDOrGf\x22 jscontroller\x3d\x22XVaCB\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22 jsaction\x3d\x22Q1u0zb;sFrcje:SBZ73c\x22 data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQpLkCegQIARBW\x22\x3e\u66f4\u65b0\u4f4d\u7f6e\x3cg-snackbar jsname\x3d\x22wzWFvc\x22 id\x3d\x22tsuid59\x22 jscontroller\x3d\x22OZLguc\x22 style\x3d\x22display:none\x22 data-dismiss\x3d\x22\x22 jsshadow\x3d\x22\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3c/g-snackbar\x3e\x3cg-snackbar jsname\x3d\x22M8d6me\x22 id\x3d\x22tsuid61\x22 jscontroller\x3d\x22OZLguc\x22 style\x3d\x22display:none\x22 jsshadow\x3d\x22\x22 jsaction\x3d\x22rcuQ6b:npT2md\x22\x3e\x3c/g-snackbar\x3e\x3c/update-location\x3e\x3cg-dialog jsname\x3d\x22BDbGbf\x22 jscontroller\x3d\x22VEbNoe\x22 data-id\x3d\x22_HYOtYeGkDZTt0ATr2qGoDw63\x22 jsaction\x3d\x22jxvro:Imgh9b\x22 jsdata\x3d\x22gctHtc;_;BOc64U\x22 jsshadow\x3d\x22\x22\x3e\x3cdiv jsname\x3d\x22XKSfm\x22 id\x3d\x22_HYOtYeGkDZTt0ATr2qGoDw63\x22 jsaction\x3d\x22dBhwS:TvD9Pc;mLt3mc\x22\x3e\x3c/div\x3e\x3c/g-dialog\x3e');
    })();
    (function() {
        window.jsl.dh('tsuid59', '\x3cdiv jsname\x3d\x22sM5MNb\x22 aria-live\x3d\x22polite\x22 class\x3d\x22tYAdEe\x22 style\x3d\x22z-index:2000\x22\x3e\x3cdiv jsname\x3d\x22Ng57nc\x22 class\x3d\x22FEXCIb\x22 data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ4G96BAgBEFc\x22\x3e\x3cdiv class\x3d\x22EA3l1b\x22\x3e\x3cdiv class\x3d\x22Xb004\x22 jsslot\x3d\x22\x22\x3e\x3cspan class\x3d\x22awHmMb wHYlTd yUTMj\x22\x3e\u7121\u6cd5\u66f4\u65b0\u4f60\u7684\u4f4d\u7f6e\x3c/span\x3e\x3cg-snackbar-action class\x3d\x22BDp8nf zJUuqf AB4Wff aepCxe\x22 jscontroller\x3d\x22xRxDld\x22 jsaction\x3d\x22GtUzrb\x22 data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQhbkIegQIARBZ\x22\x3e\x3cg-flat-button class\x3d\x22U8shWc r2fjmd hObAcc gTewb VDgVie hpZDWd fSXIc\x22 style\x3d\x22color:#4285f4\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22\x3e\x3cspan\x3e\u77ad\u89e3\u8a73\u60c5\x3c/span\x3e\x3c/g-flat-button\x3e\x3c/g-snackbar-action\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
    })();
    (function() {
        window.jsl.dh('tsuid61', '\x3cdiv jsname\x3d\x22sM5MNb\x22 aria-live\x3d\x22polite\x22 class\x3d\x22tYAdEe\x22 style\x3d\x22z-index:2000\x22\x3e\x3cdiv jsname\x3d\x22Ng57nc\x22 class\x3d\x22FEXCIb\x22 data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQ4G96BAgBEFs\x22\x3e\x3cdiv class\x3d\x22EA3l1b\x22\x3e\x3cdiv class\x3d\x22Xb004\x22 jsslot\x3d\x22\x22\x3e\x3cspan class\x3d\x22awHmMb wHYlTd yUTMj\x22\x3e\u6b63\u5728\u66f4\u65b0\u4f4d\u7f6e...\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
    })();
    (function() {
        window.jsl.dh('_HYOtYeGkDZTt0ATr2qGoDw63', '\x3cdiv jsname\x3d\x22bF1uUb\x22 class\x3d\x22t7xA6 Xz5tfb\x22\x3e\x3c/div\x3e\x3cdiv class\x3d\x22bErdLd llJxV hFCnyd wwYr3\x22\x3e\x3cdiv class\x3d\x22ls8Qne\x22 aria-hidden\x3d\x22true\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22 jsaction\x3d\x22focus:sT2f3e\x22\x3e\x3c/div\x3e\x3cspan jsslot\x3d\x22\x22\x3e\x3cdiv class\x3d\x22NJfJb TUOsUe mr5vfb Sr5CLc OosGzb\x22 aria-labelledby\x3d\x22lQ3q8c\x22 role\x3d\x22dialog\x22\x3e\x3cdiv jsname\x3d\x22C8RmQc\x22 id\x3d\x22C8RmQc\x22 data-jiis\x3d\x22up\x22 data-async-type\x3d\x22lbsc\x22 class\x3d\x22yp\x22\x3e\x3c/div\x3e\x3c/div\x3e\x3c/span\x3e\x3cdiv class\x3d\x22ls8Qne\x22 aria-hidden\x3d\x22true\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22 jsaction\x3d\x22focus:tuePCd\x22\x3e\x3c/div\x3e\x3c/div\x3e');
    })();
    (function() {
        window.jsl.dh('eob_80', '\x3cdiv jsname\x3d\x22UTgHCf\x22 class\x3d\x22AUiS2\x22 data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQx40DegQILRAA\x22\x3e\x3cdiv jsname\x3d\x22d3PE6e\x22 style\x3d\x22display:none\x22\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAB6BAgtEAE\x22\x3e節拍器軟體\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAF6BAgtEAI\x22\x3e節拍器app\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAJ6BAgtEAM\x22\x3e跑步節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAN6BAgtEAQ\x22\x3e節拍器chrome\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAR6BAgtEAU\x22\x3e虛擬節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAV6BAgtEAY\x22\x3e節拍器設定\x3c/div\x3e\x3c/div\x3e\x3cdiv\x3e\x3cdiv jsname\x3d\x22l1CLDf\x22 class\x3d\x22d8lLoc\x22\x3e\x3ch4 jsname\x3d\x22IaVMje\x22 class\x3d\x22eJ7tvc\x22\x3e其他人也搜尋了以下項目\x3c/h4\x3e\x3cspan jsname\x3d\x22ZnuYW\x22 class\x3d\x22XCKyNd\x22 jsaction\x3d\x22ornU0b\x22 aria-label\x3d\x22關閉相關建議項目\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22\x3e\x3c/span\x3e\x3cdiv jsname\x3d\x22CeevUc\x22 class\x3d\x22hYkSRb\x22 style\x3d\x22display:none\x22\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
    })();
    (function() {
        window.jsl.dh('eob_67', '\x3cdiv jsname\x3d\x22UTgHCf\x22 class\x3d\x22AUiS2\x22 data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQx40DegQINBAA\x22\x3e\x3cdiv jsname\x3d\x22d3PE6e\x22 style\x3d\x22display:none\x22\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAB6BAg0EAE\x22\x3e節拍器軟體\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAF6BAg0EAI\x22\x3e節拍器app\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAJ6BAg0EAM\x22\x3e跑步節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAN6BAg0EAQ\x22\x3e節拍器chrome\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAR6BAg0EAU\x22\x3e虛擬節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAV6BAg0EAY\x22\x3e節拍器設定\x3c/div\x3e\x3c/div\x3e\x3cdiv\x3e\x3cdiv jsname\x3d\x22l1CLDf\x22 class\x3d\x22d8lLoc\x22\x3e\x3ch4 jsname\x3d\x22IaVMje\x22 class\x3d\x22eJ7tvc\x22\x3e其他人也搜尋了以下項目\x3c/h4\x3e\x3cspan jsname\x3d\x22ZnuYW\x22 class\x3d\x22XCKyNd\x22 jsaction\x3d\x22ornU0b\x22 aria-label\x3d\x22關閉相關建議項目\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22\x3e\x3c/span\x3e\x3cdiv jsname\x3d\x22CeevUc\x22 class\x3d\x22hYkSRb\x22 style\x3d\x22display:none\x22\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
    })();
    (function() {
        window.jsl.dh('eob_79', '\x3cdiv jsname\x3d\x22UTgHCf\x22 class\x3d\x22AUiS2\x22 data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQx40DegQIMxAA\x22\x3e\x3cdiv jsname\x3d\x22d3PE6e\x22 style\x3d\x22display:none\x22\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAB6BAgzEAE\x22\x3e節拍器軟體\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAF6BAgzEAI\x22\x3e節拍器app\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAJ6BAgzEAM\x22\x3e跑步節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAN6BAgzEAQ\x22\x3e節拍器chrome\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAR6BAgzEAU\x22\x3e虛擬節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAV6BAgzEAY\x22\x3e節拍器設定\x3c/div\x3e\x3c/div\x3e\x3cdiv\x3e\x3cdiv jsname\x3d\x22l1CLDf\x22 class\x3d\x22d8lLoc\x22\x3e\x3ch4 jsname\x3d\x22IaVMje\x22 class\x3d\x22eJ7tvc\x22\x3e其他人也搜尋了以下項目\x3c/h4\x3e\x3cspan jsname\x3d\x22ZnuYW\x22 class\x3d\x22XCKyNd\x22 jsaction\x3d\x22ornU0b\x22 aria-label\x3d\x22關閉相關建議項目\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22\x3e\x3c/span\x3e\x3cdiv jsname\x3d\x22CeevUc\x22 class\x3d\x22hYkSRb\x22 style\x3d\x22display:none\x22\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
    })();
    (function() {
        window.jsl.dh('eob_71', '\x3cdiv jsname\x3d\x22UTgHCf\x22 class\x3d\x22AUiS2\x22 data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQx40DegQIMRAA\x22\x3e\x3cdiv jsname\x3d\x22d3PE6e\x22 style\x3d\x22display:none\x22\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAB6BAgxEAE\x22\x3e節拍器軟體\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAF6BAgxEAI\x22\x3e節拍器app\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAJ6BAgxEAM\x22\x3e跑步節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAN6BAgxEAQ\x22\x3e節拍器chrome\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAR6BAgxEAU\x22\x3e虛擬節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAV6BAgxEAY\x22\x3e節拍器設定\x3c/div\x3e\x3c/div\x3e\x3cdiv\x3e\x3cdiv jsname\x3d\x22l1CLDf\x22 class\x3d\x22d8lLoc\x22\x3e\x3ch4 jsname\x3d\x22IaVMje\x22 class\x3d\x22eJ7tvc\x22\x3e其他人也搜尋了以下項目\x3c/h4\x3e\x3cspan jsname\x3d\x22ZnuYW\x22 class\x3d\x22XCKyNd\x22 jsaction\x3d\x22ornU0b\x22 aria-label\x3d\x22關閉相關建議項目\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22\x3e\x3c/span\x3e\x3cdiv jsname\x3d\x22CeevUc\x22 class\x3d\x22hYkSRb\x22 style\x3d\x22display:none\x22\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
    })();
    (function() {
        window.jsl.dh('eob_72', '\x3cdiv jsname\x3d\x22UTgHCf\x22 class\x3d\x22AUiS2\x22 data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQx40DegQIMhAA\x22\x3e\x3cdiv jsname\x3d\x22d3PE6e\x22 style\x3d\x22display:none\x22\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAB6BAgyEAE\x22\x3e節拍器軟體\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAF6BAgyEAI\x22\x3e節拍器app\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAJ6BAgyEAM\x22\x3e跑步節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAN6BAgyEAQ\x22\x3e節拍器chrome\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAR6BAgyEAU\x22\x3e虛擬節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAV6BAgyEAY\x22\x3e節拍器設定\x3c/div\x3e\x3c/div\x3e\x3cdiv\x3e\x3cdiv jsname\x3d\x22l1CLDf\x22 class\x3d\x22d8lLoc\x22\x3e\x3ch4 jsname\x3d\x22IaVMje\x22 class\x3d\x22eJ7tvc\x22\x3e其他人也搜尋了以下項目\x3c/h4\x3e\x3cspan jsname\x3d\x22ZnuYW\x22 class\x3d\x22XCKyNd\x22 jsaction\x3d\x22ornU0b\x22 aria-label\x3d\x22關閉相關建議項目\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22\x3e\x3c/span\x3e\x3cdiv jsname\x3d\x22CeevUc\x22 class\x3d\x22hYkSRb\x22 style\x3d\x22display:none\x22\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
    })();
    (function() {
        window.jsl.dh('eob_75', '\x3cdiv jsname\x3d\x22UTgHCf\x22 class\x3d\x22AUiS2\x22 data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQx40DegQILhAA\x22\x3e\x3cdiv jsname\x3d\x22d3PE6e\x22 style\x3d\x22display:none\x22\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAB6BAguEAE\x22\x3e節拍器軟體\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAF6BAguEAI\x22\x3e節拍器app\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAJ6BAguEAM\x22\x3e跑步節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAN6BAguEAQ\x22\x3e節拍器chrome\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAR6BAguEAU\x22\x3e虛擬節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAV6BAguEAY\x22\x3e節拍器設定\x3c/div\x3e\x3c/div\x3e\x3cdiv\x3e\x3cdiv jsname\x3d\x22l1CLDf\x22 class\x3d\x22d8lLoc\x22\x3e\x3ch4 jsname\x3d\x22IaVMje\x22 class\x3d\x22eJ7tvc\x22\x3e其他人也搜尋了以下項目\x3c/h4\x3e\x3cspan jsname\x3d\x22ZnuYW\x22 class\x3d\x22XCKyNd\x22 jsaction\x3d\x22ornU0b\x22 aria-label\x3d\x22關閉相關建議項目\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22\x3e\x3c/span\x3e\x3cdiv jsname\x3d\x22CeevUc\x22 class\x3d\x22hYkSRb\x22 style\x3d\x22display:none\x22\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
    })();
    (function() {
        window.jsl.dh('eob_73', '\x3cdiv jsname\x3d\x22UTgHCf\x22 class\x3d\x22AUiS2\x22 data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQx40DegQIMBAA\x22\x3e\x3cdiv jsname\x3d\x22d3PE6e\x22 style\x3d\x22display:none\x22\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAB6BAgwEAE\x22\x3e節拍器軟體\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAF6BAgwEAI\x22\x3e節拍器app\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAJ6BAgwEAM\x22\x3e跑步節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAN6BAgwEAQ\x22\x3e節拍器chrome\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAR6BAgwEAU\x22\x3e虛擬節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAV6BAgwEAY\x22\x3e節拍器設定\x3c/div\x3e\x3c/div\x3e\x3cdiv\x3e\x3cdiv jsname\x3d\x22l1CLDf\x22 class\x3d\x22d8lLoc\x22\x3e\x3ch4 jsname\x3d\x22IaVMje\x22 class\x3d\x22eJ7tvc\x22\x3e其他人也搜尋了以下項目\x3c/h4\x3e\x3cspan jsname\x3d\x22ZnuYW\x22 class\x3d\x22XCKyNd\x22 jsaction\x3d\x22ornU0b\x22 aria-label\x3d\x22關閉相關建議項目\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22\x3e\x3c/span\x3e\x3cdiv jsname\x3d\x22CeevUc\x22 class\x3d\x22hYkSRb\x22 style\x3d\x22display:none\x22\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
    })();
    (function() {
        window.jsl.dh('eob_66', '\x3cdiv jsname\x3d\x22UTgHCf\x22 class\x3d\x22AUiS2\x22 data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQx40DegQILxAA\x22\x3e\x3cdiv jsname\x3d\x22d3PE6e\x22 style\x3d\x22display:none\x22\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAB6BAgvEAE\x22\x3e節拍器軟體\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAF6BAgvEAI\x22\x3e節拍器app\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAJ6BAgvEAM\x22\x3e跑步節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAN6BAgvEAQ\x22\x3e節拍器chrome\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAR6BAgvEAU\x22\x3e虛擬節拍器\x3c/div\x3e\x3cdiv data-ved\x3d\x222ahUKEwihp5Kvnc70AhWUNpQKHWttCPUQsKwBKAV6BAgvEAY\x22\x3e節拍器設定\x3c/div\x3e\x3c/div\x3e\x3cdiv\x3e\x3cdiv jsname\x3d\x22l1CLDf\x22 class\x3d\x22d8lLoc\x22\x3e\x3ch4 jsname\x3d\x22IaVMje\x22 class\x3d\x22eJ7tvc\x22\x3e其他人也搜尋了以下項目\x3c/h4\x3e\x3cspan jsname\x3d\x22ZnuYW\x22 class\x3d\x22XCKyNd\x22 jsaction\x3d\x22ornU0b\x22 aria-label\x3d\x22關閉相關建議項目\x22 role\x3d\x22button\x22 tabindex\x3d\x220\x22\x3e\x3c/span\x3e\x3cdiv jsname\x3d\x22CeevUc\x22 class\x3d\x22hYkSRb\x22 style\x3d\x22display:none\x22\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
    })();
    (function() {
        google.drty && google.drty(undefined, true);
    })();
    (function() {
        window.jsl.dh('_HYOtYeGkDZTt0ATr2qGoDw81', '\x3cdiv\x3e\x3cdiv\x3e\x3cdiv class\x3d\x22gb_Cd\x22\x3eGoogle \u61c9\u7528\u7a0b\u5f0f\x3c/div\x3e\x3cdiv class\x3d\x22gb_6d\x22\x3e\x3cdiv class\x3d\x22gb_8d\x22\x3e\x3cdiv\x3eGoogle \u5e33\u6236\x3c/div\x3e\x3cdiv class\x3d\x22gb_mb\x22\x3e\u65b9\u96ef\u923a\u3001\u5929\u79c0\x3c/div\x3e\x3cdiv\x3epaltis5212@gmail.com\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e', function() {
            window.gbar && gbar.up && gbar.up.tp && gbar.up.tp();
            this.gbar_ = this.gbar_ || {};
            (function(_) {
                var window = this;
                try {
                    _.$d = function(a, b, c) {
                        if (!a.o)
                            if (c instanceof Array) {
                                c = _.Ma(c);
                                for (var d = c.next(); !d.done; d = c.next()) _.$d(a, b, d.value)
                            } else {
                                d = (0, _.w)(a.F, a, b);
                                var e = a.B + c;
                                a.B++;
                                b.setAttribute("data-eqid", e);
                                a.D[e] = d;
                                b && b.addEventListener ? b.addEventListener(c, d, !1) : b && b.attachEvent ? b.attachEvent("on" + c, d) : a.A.log(Error("z`" + b))
                            }
                    };

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    /*

                     Copyright The Closure Library Authors.
                     SPDX-License-Identifier: Apache-2.0
                    */
                    _.ae = function() {
                        if (!_.n.addEventListener || !Object.defineProperty) return !1;
                        var a = !1,
                            b = Object.defineProperty({}, "passive", {
                                get: function() {
                                    a = !0
                                }
                            });
                        try {
                            _.n.addEventListener("test", _.Za, b), _.n.removeEventListener("test", _.Za, b)
                        } catch (c) {}
                        return a
                    }();
                    _.be = _.ub ? "webkitTransitionEnd" : "transitionend";

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    var ce = document.querySelector(".gb_B .gb_C"),
                        de = document.querySelector("#gb.gb_Dc");
                    ce && !de && _.$d(_.Rd, ce, "click");

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    var Nh = function(a) {
                        _.K.call(this);
                        this.C = a;
                        this.A = null;
                        this.o = {};
                        this.D = {};
                        this.j = {};
                        this.B = null
                    };
                    _.u(Nh, _.K);
                    _.Oh = function(a) {
                        if (a.A) return a.A;
                        for (var b in a.j)
                            if (a.j[b].lf() && a.j[b].Tb()) return a.j[b];
                        return null
                    };
                    _.h = Nh.prototype;
                    _.h.Ff = function(a) {
                        a && _.Oh(this) && a != _.Oh(this) && _.Oh(this).ae(!1);
                        this.A = a
                    };
                    _.h.Kg = function(a) {
                        a = this.j[a] || a;
                        return _.Oh(this) == a
                    };
                    _.h.Ue = function(a, b) {
                        b = b.Wc();
                        if (this.o[a] && this.o[a][b])
                            for (var c = 0; c < this.o[a][b].length; c++) try {
                                this.o[a][b][c]()
                            } catch (d) {
                                this.C.log(d)
                            }
                    };
                    _.h.Xh = function(a) {
                        return !this.D[a.Wc()]
                    };
                    _.h.hh = function(a) {
                        this.j[a] && (_.Oh(this) && _.Oh(this).Wc() == a || this.j[a].ae(!0))
                    };
                    _.h.$a = function(a) {
                        this.B = a;
                        for (var b in this.j) this.j[b].lf() && this.j[b].$a(a)
                    };
                    _.h.Bf = function(a) {
                        this.j[a.Wc()] = a
                    };
                    _.h.Le = function(a) {
                        return a in this.j ? this.j[a] : null
                    };
                    var Ph = new Nh(_.Pd);
                    _.qd("dd", Ph);

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    _.rj = function(a, b) {
                        a = a.split(".");
                        b = b || _.n;
                        for (var c = 0; c < a.length; c++)
                            if (b = b[a[c]], null == b) return null;
                        return b
                    };

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    var sj = document.querySelector(".gb_Na .gb_C"),
                        tj = document.querySelector("#gb.gb_Dc");
                    sj && !tj && _.$d(_.Rd, sj, "click");

                } catch (e) {
                    _._DumpException(e)
                }
            })(this.gbar_);
            // Google Inc.
            ;
            this.gbar_ = this.gbar_ || {};
            (function(_) {
                var window = this;
                try {
                    /*

                     Copyright The Closure Library Authors.
                     SPDX-License-Identifier: Apache-2.0
                    */
                    _.ee = function(a) {
                        var b = typeof a;
                        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
                    };
                    _.fe = function(a) {
                        var b = _.ee(a);
                        return "array" == b || "object" == b && "number" == typeof a.length
                    };
                    _.ge = function(a, b) {
                        var c = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            var d = c.slice();
                            d.push.apply(d, arguments);
                            return a.apply(this, d)
                        }
                    };
                    try {
                        (new self.OffscreenCanvas(0, 0)).getContext("2d")
                    } catch (a) {}
                    _.he = _.B || _.ub;
                    _.ie = function(a, b) {
                        this.width = a;
                        this.height = b
                    };
                    _.h = _.ie.prototype;
                    _.h.aspectRatio = function() {
                        return this.width / this.height
                    };
                    _.h.Ab = function() {
                        return !(this.width * this.height)
                    };
                    _.h.ceil = function() {
                        this.width = Math.ceil(this.width);
                        this.height = Math.ceil(this.height);
                        return this
                    };
                    _.h.floor = function() {
                        this.width = Math.floor(this.width);
                        this.height = Math.floor(this.height);
                        return this
                    };
                    _.h.round = function() {
                        this.width = Math.round(this.width);
                        this.height = Math.round(this.height);
                        return this
                    };
                    var le;
                    _.je = function(a, b) {
                        return (b || document).getElementsByTagName(String(a))
                    };
                    _.M = function(a, b) {
                        var c = b || document;
                        if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
                        else {
                            c = document;
                            var d = b || c;
                            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : _.ke(c, "*", a, b)[0] || null
                        }
                        return a || null
                    };
                    _.ke = function(a, b, c, d) {
                        a = d || a;
                        b = b && "*" != b ? String(b).toUpperCase() : "";
                        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
                        if (c && a.getElementsByClassName) {
                            a = a.getElementsByClassName(c);
                            if (b) {
                                d = {};
                                for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                                d.length = e;
                                return d
                            }
                            return a
                        }
                        a = a.getElementsByTagName(b || "*");
                        if (c) {
                            d = {};
                            for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && _.la(b.split(/\s+/), c) && (d[e++] = g);
                            d.length = e;
                            return d
                        }
                        return a
                    };
                    _.me = function(a, b) {
                        _.Ca(b, function(c, d) {
                            c && "object" == typeof c && c.Wb && (c = c.Db());
                            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : le.hasOwnProperty(d) ? a.setAttribute(le[d], c) : _.ib(d, "aria-") || _.ib(d, "data-") ? a.setAttribute(d, c) : a[d] = c
                        })
                    };
                    le = {
                        cellpadding: "cellPadding",
                        cellspacing: "cellSpacing",
                        colspan: "colSpan",
                        frameborder: "frameBorder",
                        height: "height",
                        maxlength: "maxLength",
                        nonce: "nonce",
                        role: "role",
                        rowspan: "rowSpan",
                        type: "type",
                        usemap: "useMap",
                        valign: "vAlign",
                        width: "width"
                    };
                    _.pe = function(a, b) {
                        var c = b[1],
                            d = _.ne(a, String(b[0]));
                        c && ("string" === typeof c ? d.className = c : Array.isArray(c) ? d.className = c.join(" ") : _.me(d, c));
                        2 < b.length && _.oe(a, d, b, 2);
                        return d
                    };
                    _.oe = function(a, b, c, d) {
                        function e(k) {
                            k && b.appendChild("string" === typeof k ? a.createTextNode(k) : k)
                        }
                        for (; d < c.length; d++) {
                            var f = c[d];
                            if (!_.fe(f) || _.$a(f) && 0 < f.nodeType) e(f);
                            else {
                                a: {
                                    if (f && "number" == typeof f.length) {
                                        if (_.$a(f)) {
                                            var g = "function" == typeof f.item || "string" == typeof f.item;
                                            break a
                                        }
                                        if ("function" === typeof f) {
                                            g = "function" == typeof f.item;
                                            break a
                                        }
                                    }
                                    g = !1
                                }
                                _.kb(g ? _.ma(f) : f, e)
                            }
                        }
                    };
                    _.qe = function(a) {
                        return _.ne(document, a)
                    };
                    _.ne = function(a, b) {
                        b = String(b);
                        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
                        return a.createElement(b)
                    };
                    _.re = function(a) {
                        for (var b; b = a.firstChild;) a.removeChild(b)
                    };
                    _.se = function(a) {
                        return a && a.parentNode ? a.parentNode.removeChild(a) : null
                    };
                    _.te = function(a) {
                        return _.$a(a) && 1 == a.nodeType
                    };
                    _.ue = function(a) {
                        return 9 == a.nodeType ? a : a.ownerDocument || a.document
                    };
                    _.ve = function(a, b, c) {
                        for (var d = 0; a && (null == c || d <= c);) {
                            if (b(a)) return a;
                            a = a.parentNode;
                            d++
                        }
                        return null
                    };

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    _.xj = function(a) {
                        _.D.call(this, a)
                    };
                    _.u(_.xj, _.D);

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    _.yj = function(a, b, c) {
                        a.rel = c; - 1 != c.toLowerCase().indexOf("stylesheet") ? (a.href = _.Fc(b), (b = _.ed(a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)) : a.href = b instanceof _.Dc ? _.Fc(b) : b instanceof _.Ic ? _.Jc(b) : _.Jc(_.Pc(b))
                    };

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    _.zj = function() {
                        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
                        return null !== a && void 0 !== a ? a : null
                    };
                    _.Bj = function(a) {
                        if ("function" == typeof _.Aj && a instanceof _.Aj) return a.j;
                        throw Error("E");
                    };
                    _.Cj = function(a) {
                        var b, c = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
                            d = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, "script[nonce]");
                        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
                    };
                    _.Ej = function(a, b) {
                        b = "function" == typeof _.Dj && b instanceof _.Dj ? _.Bj(b) : _.Ec(b);
                        a.src = b;
                        _.Cj(a)
                    };
                    /*

                     SPDX-License-Identifier: Apache-2.0
                    */

                } catch (e) {
                    _._DumpException(e)
                }
                try {
                    var Fj = function(a, b, c) {
                            _.Qd.log(46, {
                                att: a,
                                max: b,
                                url: c
                            })
                        },
                        Hj = function(a, b, c) {
                            _.Qd.log(47, {
                                att: a,
                                max: b,
                                url: c
                            });
                            a < b ? Gj(a + 1, b) : _.Pd.log(Error("ca`" + a + "`" + b), {
                                url: c
                            })
                        },
                        Gj = function(a, b) {
                            if (Ij) {
                                var c = _.qe("SCRIPT");
                                c.async = !0;
                                c.type = "text/javascript";
                                c.charset = "UTF-8";
                                _.Ej(c, Ij);
                                c.onload = _.ge(Fj, a, b, c.src);
                                c.onerror = _.ge(Hj, a, b, c.src);
                                _.Qd.log(45, {
                                    att: a,
                                    max: b,
                                    url: c.src
                                });
                                _.je("HEAD")[0].appendChild(c)
                            }
                        },
                        Jj = function(a) {
                            _.D.call(this, a)
                        };
                    _.u(Jj, _.D);
                    var Kj = _.I(_.Ld, Jj, 17) || new Jj,
                        Lj, Ij = (Lj = _.I(Kj, _.xj, 1)) ? _.Gc(_.E(Lj, 4) || "") : null,
                        Mj, Nj = (Mj = _.I(Kj, _.xj, 2)) ? _.Gc(_.E(Mj, 4) || "") : null,
                        Oj = function() {
                            Gj(1, 2);
                            if (Nj) {
                                var a = _.qe("LINK");
                                a.setAttribute("type", "text/css");
                                _.yj(a, Nj, "stylesheet");
                                var b = _.ed();
                                b && a.setAttribute("nonce", b);
                                _.je("HEAD")[0].appendChild(a)
                            }
                        };
                    (function() {
                        var a = _.Md();
                        if (_.F(a, 18)) Oj();
                        else {
                            var b = _.E(a, 19) || 0;
                            window.addEventListener("load", function() {
                                window.setTimeout(Oj, b)
                            })
                        }
                    })();

                } catch (e) {
                    _._DumpException(e)
                }
            })(this.gbar_);
            // Google Inc.
            ;
        });
    })();
    (function() {
        google.drty && google.drty(undefined, true);
    })();
}); < /script><div></div > < div id = "lfootercc" > < script nonce = "EEcYuPapLeT27Qm24Kw9uw==" > (function() {
    for (var i in google.iir || {}) {
        _setImagesSrc([i], google.iir[i]);
    }
    google.iir = {};
})();
(function() {
    var _jnu = 'https://www.google.com/ads/measurement/t';
    var _jnuid = 2500;
    google.x({
        'id': 'jnu'
    }, function() {
        var bt = google.sx && google.sx.setTimeout || window.setTimeout;
        bt(function() {
            google.log('', '', _jnu);
        }, _jnuid);
    });
})();
google.jslm = 3; < /script><div id="reviewDialog" data-async-context="async_id_prefix:" data-jiis="up" data-async-type="reviewDialog" data-async-context-required="async_id_prefix" class="yp"></div > < div id = "dbg_" > < /div></div > < /body></html >