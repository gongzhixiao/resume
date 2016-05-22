/*=====================
 * 名称: turning
 * 功能: 滑动翻页
 * 作者: zjsina
 * 版本: 0.1.4
 * 时间: 2014-7-3
 ======================*/
(function(e, n) {
    var r = "0.1.4",
        i,
        s,
        o,
        u,
        a,
        f,
        l = 100,
        c,
        h,
        p = 0,
        d = !1,
        v = !1,
        m = !0,
        g,
        y,
        b,
        w = 1,
        E = [],
        S = [],
        x,
        T,
        N,
        C,
        k,
        L = [],
        A = 45,
        O = function(e) {
            return new O.fn.init(e)
        };
    O.fn = O.prototype = {
        turning: r,
        constructor: O,
        init: function(e) {
            if (i == n) {
                i = document.getElementById(e),
                    u = document.documentElement.clientHeight,
                    i.style.height = u + "px";
                if (k = navigator.userAgent.indexOf("MSIE") != -1) {
                    var t = 0,
                        r = i.children.length;
                    for (var s = 0; s < r; s++) i.children[s].nodeType != 8 && (L[t++] = i.children[s])
                }
                k ? a = L.length: a = i.children.length,
                    k ? C = L[0] : C = i.children[0]
            }
            return this
        },
        setScroller: function(e) {
            s = document.getElementById(e),
                o = document.body.clientHeight / a,
                s.style.height = o + "px"
        },
        move: function(r, E) {
            function D(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
            }
            function P(e) {
                e.preventDefault && e.preventDefault(),
                    e.returnValue = !1
            }
            function H(e, t) {
                e.className += " " + t
            }
            function B(e, t) {
                var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(n, "")
            }
            function j(e) {
                d = !0,
                    v = !0,
                e.touches && (e = e.touches[0]),
                    h = e.clientY
            }
            function F(e) {
                if (d) {
                    P(e),
                    e.touches && (e = e.touches[0]),
                        p = e.clientY - h;
                    if (v && p) {
                        y = w - 1,
                            g = p > 0 ? 1: -1,
                            w == a ? b = 1: b = w + 1,
                            k ? T = L[y - 1] : T = i.children[y - 1],
                            k ? N = L[b - 1] : N = i.children[b - 1],
                            k ? x = L[w - 1] : x = i.children[w - 1];
                        if (w == 1 && g > 0) {
                            d = !1;
                            return
                        }
                        c = p > 0 ? T: N,
                            B(x, "show"),
                            B(c, "hide"),
                            H(c, "show");
                        switch (E) {
                            case "normal":
                                g > 0 ? c.style.top = "0": c.style.top = "100%";
                                break;
                            case "card":
                                g > 0 ? c.style.top = "0": c.style.top = "100%",
                                _ && q(c.children[0], A, ".8");
                                break;
                            case "scale":
                                break;
                            default:
                                throw new Error("turning: No such mode!")
                        }
                        v = !1
                    }
                    if (c) {
                        switch (E) {
                            case "normal":
                                g > 0 ? c.style.top = p - u + "px": c.style.top = p + u + "px";
                                break;
                            case "card":
                                var t;
                                S = p * M,
                                    g > 0 ? c.style.top = p - u + "px": c.style.top = p + u + "px",
                                    t = g > 0 ? -A + S: A + S,
                                _ && (q(x.children[0], S, ".8"), q(c.children[0], t, ".8"));
                                break;
                            case "scale":
                                break;
                            default:
                                throw new Error("turning: No such mode!")
                        }
                        s != n && (s.style.top = (w - 1) * o - p / 4 + "px")
                    }
                }
            }
            function I(e) {
                P(e),
                    d = !1,
                    k ? x = L[w - 1] : x = i.children[w - 1],
                    k ? T = L[w - 2] : T = i.children[w - 2],
                    k ? N = L[w] : N = i.children[w];
                if (c) {
                    if (Math.abs(p) > l) {
                        H(x, "hide"),
                            g < 0 ? w == a ? w = 1: w++:w == 1 ? w = 1: w--,
                        s != n && (s.style.top = (w - 1) * o + "px");
                        switch (E) {
                            case "normal":
                                t.saction(c, "top", 0, 20,
                                    function() {
                                        f(w)
                                    },
                                    !0);
                                break;
                            case "card":
                                t.saction(c, "top", 0, 20,
                                    function() {
                                        f(w)
                                    },
                                    !0),
                                _ && q(c.children[0], 0, 1),
                                    x.children[0].setAttribute("style", "");
                                break;
                            case "scale":
                                break;
                            default:
                                throw new Error("turning: No such mode!")
                        }
                    } else {
                        switch (E) {
                            case "normal":
                                g > 0 ? c.style.top = "100%": c.style.top = "-100%";
                                break;
                            case "card":
                                g > 0 ? c.style.top = "100%": c.style.top = "-100%",
                                    x.style.top = "0",
                                    q(x.children[0], 0, 1);
                                break;
                            case "scale":
                                break;
                            default:
                                throw new Error("turning: No such mode!")
                        }
                        w != a ? (g > 0 ? B(T, "show") : B(N, "show"), g > 0 ? H(T, "hide") : H(N, "hide")) : g > 0 ? B(T, "show") : B(C, "show")
                    }
                    c = ""
                }
            }
            function q(e, t, n) {
                e.style.webkitTransform = "rotateX(" + t + "deg) scale(" + n + ")",
                    e.style.MozTransform = "rotateX(" + t + "deg) scale(" + n + ")",
                    e.style.transform = "rotateX(" + t + "deg) scale(" + n + ")"
            }
            var S,
                M = A / u,
                _ = O.support("transform");
            f = r,
            m && (f(w), m = !1),
            E == n && (E = "normal"),
                D(i, "mousedown", j),
                D(i, "mousemove", F),
                D(e, "mouseup", I),
                D(i, "touchstart", j),
                D(i, "touchmove", F),
                D(i, "touchend", I)
        }
    },
        O.fn.init.prototype = O.fn,
        O.DomReady = function(e) {
            document.addEventListener ? document.addEventListener("DOMContentLoaded", e(), !1) : document.attachEvent && document.attachEvent("onreadystatechange",
                function() {
                    document.readyState === "complete" && e()
                })
        },
        O.support = function(e) {
            var t = document.createElement("div"),
                n = "Khtml O Moz Webkit".split(" "),
                r = n.length;
            if (e in t.style) return ! 0;
            if ("-ms-" + e in t.style) return ! 0;
            e = e.replace(/^[a-z]/,
                function(e) {
                    return e.toUpperCase()
                });
            while (r--) if (n[r] + e in t.style) return ! 0;
            return ! 1
        },
        O.getstyle = function(e, t) {
            return e.currentStyle ? e.currentStyle[t] : getComputedStyle(e, !1)[t]
        },
        O.saction = function(e, n, r, i, s, o) {
            var u = S.length;
            if (!o) E.push(e);
            else for (var a = 0; a < u; a++) clearInterval(S[a]);
            S.push(setInterval(function() {
                    var o = parseInt(t.getstyle(e, n)),
                        a = (r - o) / (i / 10);
                    a = a > 0 ? Math.ceil(a) : Math.floor(a),
                        o == r ? (clearInterval(S[u]), s && s()) : e.style[n] = o + a + "px"
                },
                i))
        },
        O.reset = function() {
            var e = E.length,
                t = S.length;
            for (var n = 0; n < e; n++) E[n].style.cssText = "",
            n == e - 1 && (E = []);
            for (var n = 0; n < t; n++) clearInterval(S[n]),
            n == t - 1 && (S = [])
        },
        O.fademove = function(e, t) {
            var n = 30,
                r = S.length;
            S.push(setInterval(function() {
                    var i = 0;
                    n > t ? i = -10: i = 10,
                        n == t ? clearInterval(S[r]) : (n += i, e.style.filter = "alpha(opacity:" + n + ")", e.style.opacity = n / 100)
                },
                30))
        },
        e.t = O
})(window)