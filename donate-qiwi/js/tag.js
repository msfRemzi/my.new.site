(function () {
    try {
        ! function () {
            function t(t) {
                var e = ar(t, Us(t, "c")),
                    n = gr(t),
                    r = of (t)(dr);
                return bu((function (t, i, o) {
                    var a = "sci" + o;
                    return !(o = function (t) {
                        try {
                            return parseInt(t, 10)
                        } catch (t) {
                            return null
                        }
                    }(n.l(a))) || 1440 < r - o ? t.then((function () {
                        return e({
                            ua: ["sync.cook.int"]
                        }, ["https://" + i], {
                            Rb: 1500
                        }).then((function () {
                            n.o(a, r)
                        }), Yo)
                    })) : t
                }), Zc.resolve(), Fm)
            }

            function e(t, n, r) {
                return void 0 === r && (r = 0), n = ku(n), n = bu((function (n, i) {
                    var o = i[0],
                        a = i[1],
                        u = Mo(a);
                    return Ho(a) || u ? (a = r || "yandex_cid" !== o ? u ? e(t, a, r + 1) : function (t, e) {
                        return new Zc((function (n, r) {
                            var i = (new t.TextEncoder).encode(e);
                            t.crypto.subtle.digest("SHA-256", i).then((function (e) {
                                e = new t.Blob([e], {
                                    type: "application/octet-binary"
                                });
                                var i = new t.FileReader;
                                i.onload = function (t) {
                                    var e = ((t = yo(t, "target.result")) || "").indexOf(","); - 1 !== e ? n(t.substring(e + 1)) : r(us("fpm.i"))
                                }, i.readAsDataURL(e)
                            }), r)
                        }))
                    }(t, a) : Zc.resolve(a), n.push(a.then((function (t) {
                        return [o, t]
                    }))), n) : n
                }), [], n), Zc.all(n)
            }

            function n(t, e, n) {
                n = (t = To(n))[1], "track" === t[0] && e({
                    version: "0",
                    lc: n
                })
            }

            function r(t, e, n) {
                if (n) {
                    var r = n.version;
                    (n = yo(Pm, r + "." + n.lc)) && (e && Lu(n, Im) || t("ym-" + n + "-" + r))
                }
            }

            function i(t, e) {
                if (!e) return !1;
                var n = Gi(t);
                return new RegExp(e).test("" + n.pathname + n.hash + n.search)
            }

            function o(t, e, n, r, i) {
                n = f(t, t.document.body, n), r = f(t, t.document.body, r), Lu(i.target, [n, r]) && s(t, e)
            }

            function a(t, e, n, r) {
                (n = vm(t, r, n)) && s(t, e, n)
            }

            function u(t, e) {
                var n = c(t, e);
                return lm(t, n)
            }

            function c(t, e) {
                var n = f(t, t.document.body, e);
                return n ? function (t, e) {
                    if (!e) return "";
                    var n = [],
                        r = yo(t, "document");
                    return W(t, e, (function (t) {
                        t.nodeType === r.TEXT_NODE && t.textContent ? n.push(t.textContent.trim()) : t instanceof HTMLImageElement && t.alt && n.push(t.alt.trim())
                    })), 0 === n.length ? "" : n.join(" ")
                }(t, n) : ""
            }

            function s(t, e, n) {
                (e = dn(t, e)) && e.params(bo(["__ym", "dr", n || go(h, Bo)(t)]))
            }

            function f(t, e, n) {
                var r = null;
                try {
                    r = n ? ii(t, e, n) : r
                } catch (t) {}
                return r
            }

            function l(t, e, n) {
                try {
                    var r = Ki(t.atob(e));
                    return Hu((function (t) {
                        return t = t.charCodeAt(0).toString(2), el("0", 8 - t.length) + t
                    }), r).join(n)
                } catch (t) {
                    return ""
                }
            }

            function h(t) {
                return zi(t, 10, 99)
            }

            function d(t, e, n, r) {
                if (Ho(t = yo(r, "data"))) {
                    var i = t.split("*");
                    t = i[0];
                    var o = i[1];
                    i = i[2], "sc.frame" === t ? r.source.postMessage("sc.images*" + e, "*") : "sc.image" === t && o === e && n(i)
                }
            }

            function p(t, e, n, r) {
                (r = di("button,input", t, r = yo(r, "target"))) && "submit" === r.type && (r = Rp(t, r)) && (n.push(r), Or(t, ko([!1, t, e, n, r], v), 300))
            }

            function v(t, e, n, r, i) {
                var o = so(e)(i, r),
                    a = -1 !== o;
                (t || a) && (a && r.splice(o, 1), t = "?" + Pi(t = Z(e, i)), r = ko([e, n, "Form goal. Counter " + n.id + ". Form: " + t + "."], m), td(e, n, "form", r)(t))
            }

            function m(t, e, n) {
                return em(t, e).then((function (r) {
                    r && nn(t, e, n)()
                }))
            }

            function g(t) {
                return mo(t = function (t) {
                    if (!(t = hs(t))) return "";
                    t = t("video");
                    try {
                        var e = Co("canPlayType", t),
                            n = Xu((function (t) {
                                return Hu(go(co, Co("concat", t + "; codecs=")), dd)
                            }), hd);
                        return Hu(e, [].concat(hd, n))
                    } catch (t) {
                        return "canPlayType"
                    }
                }(t)) ? ou("x", t) : t
            }

            function b(t) {
                return ou("x", function (t) {
                    var e = yo(t, "speechSynthesis.getVoices");
                    return e ? (t = pu(e, t.speechSynthesis), Xu((function (t) {
                        return Hu(xo(t, yo), tm)
                    }), t())) : ""
                }(t) || [])
            }

            function y(t) {
                if (t = Qf(t)) try {
                    for (var e = [], n = 0; n < Zf.length; n += 1) {
                        var r = t(Zf[n]);
                        e.push(r)
                    }
                    var i = e
                } catch (t) {
                    i = []
                } else i = [];
                return i ? ou("x", i) : ""
            }

            function w(t) {
                var e = function (t) {
                    var e = yo(t, "matchMedia");
                    if (!e || !zo("matchMedia", e)) return "";
                    var n = Co("matchMedia", t);
                    return bu((function (t, e) {
                        return t[e] = n("(" + e + ")"), t
                    }), {}, pd)
                }(t);
                return e ? ou("x", Hu((function (t) {
                    return t = e[t], ou("x", Hu(go(co, Co("concat", ""), xo(t, yo)), ["matches", "media"]))
                }), Au(e))) : ""
            }

            function E(t, e) {
                var n = e.ih;
                if (! function (t, e) {
                        if (!Do(t.Float32Array)) return !1;
                        var n = yo(e, "canvas");
                        if (!n || !zo("toDataUrl", n.toDataURL)) return !1;
                        try {
                            e.createBuffer()
                        } catch (t) {
                            return !1
                        }
                        return !0
                    }(t, n)) return "";
                var r = [];
                t: {
                    var i = function (t, e) {
                        return [function () {
                            var n = e.createBuffer();
                            n && e.getParameter && zo("getParameter", e.getParameter) || bd(), e.bindBuffer(e.ARRAY_BUFFER, n);
                            var r = new t.Float32Array(gd);
                            e.bufferData(e.ARRAY_BUFFER, r, e.STATIC_DRAW), n.Bi = 3, n.Pi = 3, r = e.createProgram();
                            var i = e.createShader(e.VERTEX_SHADER);
                            return r && i || bd(), {
                                ue: r,
                                Sj: i,
                                Rj: n
                            }
                        }, function (t) {
                            var n = t.ue,
                                r = t.Sj;
                            return e.shaderSource(r, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(r), e.attachShader(n, r), (n = e.createShader(e.FRAGMENT_SHADER)) || bd(), Tu(t, {
                                Oh: n
                            })
                        }, function (t) {
                            var n = t.ue,
                                r = t.Oh;
                            return e.shaderSource(r, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(r), e.attachShader(n, r), e.linkProgram(n), e.useProgram(n), t
                        }, function (t) {
                            var n = t.ue;
                            return t = t.Rj, n.Qj = e.getAttribLocation(n, "attrVertex"), n.Ri = e.getUniformLocation(n, "uniformOffset"), e.enableVertexAttribArray(n.Hm), e.vertexAttribPointer(n.Qj, t.Bi, e.FLOAT, !1, 0, 0), e.uniform2f(n.Ri, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, t.Pi), e.canvas
                        }]
                    }(t, n);
                    try {
                        var o = ko(i, go)()();
                        break t
                    } catch (t) {
                        if ("ccf" === t.message) {
                            o = null;
                            break t
                        }
                        $i(t)
                    }
                    o = void 0
                }
                if (fu(o)) var a = "";
                else try {
                    a = o.toDataURL()
                } catch (t) {
                    a = ""
                }(o = a) && r.push(o);
                var u = n.getContextAttributes();
                try {
                    var c = Xo(n.getSupportedExtensions, "getSupportedExtensions") && n.getSupportedExtensions() || []
                } catch (t) {
                    c = []
                }
                c = ou(";", c), o = Mt(n.getParameter(n.ALIASED_LINE_WIDTH_RANGE), n), i = Mt(n.getParameter(n.ALIASED_POINT_SIZE_RANGE), n), a = n.getParameter(n.ALPHA_BITS), u = u && u.antialias ? "yes" : "no";
                var s = n.getParameter(n.BLUE_BITS),
                    f = n.getParameter(n.DEPTH_BITS),
                    l = n.getParameter(n.GREEN_BITS),
                    h = n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (h) {
                    var d = n.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === d && (d = 2)
                }
                C(r, d = {
                    nm: c,
                    "webgl aliased line width range": o,
                    "webgl aliased point size range": i,
                    "webgl alpha bits": a,
                    "webgl antialiasing": u,
                    "webgl blue bits": s,
                    "webgl depth bits": f,
                    "webgl green bits": l,
                    "webgl max anisotropy": h ? d : null,
                    "webgl max combined texture image units": n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": n.getParameter(n.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": n.getParameter(n.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": n.getParameter(n.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": n.getParameter(n.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": Mt(n.getParameter(n.MAX_VIEWPORT_DIMS), n),
                    "webgl red bits": n.getParameter(n.RED_BITS),
                    "webgl renderer": n.getParameter(n.RENDERER),
                    "webgl shading language version": n.getParameter(n.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": n.getParameter(n.STENCIL_BITS),
                    "webgl vendor": n.getParameter(n.VENDOR),
                    "webgl version": n.getParameter(n.VERSION)
                }, ": ");
                t: {
                    try {
                        var p = n.getExtension("WEBGL_debug_renderer_info");
                        if (p) {
                            var v = {
                                "webgl unmasked vendor": n.getParameter(p.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": n.getParameter(p.UNMASKED_RENDERER_WEBGL)
                            };
                            break t
                        }
                    } catch (t) {}
                    v = {}
                }
                return C(r, v), n.getShaderPrecisionFormat ? (C(r, function (t) {
                    return bu((function (t, e) {
                        var n = e[0],
                            r = e[1];
                        return t[n + " precision"] = yo(r, "precision") || "n", t[n + " precision rangeMin"] = yo(r, "rangeMin") || "n", t[n + " precision rangeMax"] = yo(r, "rangeMax") || "n", t
                    }), {}, [
                        ["webgl vertex shader high float", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT)],
                        ["webgl vertex shader medium", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT)],
                        ["webgl vertex shader low float", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT)],
                        ["webgl fragment shader high float", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT)],
                        ["webgl fragment shader medium float", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT)],
                        ["webgl fragment shader low float", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT)],
                        ["webgl vertex shader high int", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT)],
                        ["webgl vertex shader medium int", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT)],
                        ["webgl vertex shader low int", t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT)],
                        ["webgl fragment shader high int", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT)],
                        ["webgl fragment shader medium int", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT)],
                        ["webgl fragment shader low int precision", t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT)]
                    ])
                }(n)), ou("~", r)) : ou("~", r)
            }

            function C(t, e, n) {
                void 0 === n && (n = ":"), Uu((function (e) {
                    return t.push("" + e[0] + n + e[1])
                }), ku(e))
            }

            function x(t) {
                var e = function (t) {
                    var e = yo(t, "ApplePaySession"),
                        n = Gi(t).protocol;
                    return !e || "https:" !== n || dc(t) ? "" : e
                }(t);
                return e ? bu((function (t, n, r) {
                    n = "" + (r + 1);
                    var i = e.supportsVersion;
                    return Do(i) ? i.call(e, r + 1) ? t + n : t + "0" : t
                }), "", function (t) {
                    if (0 > t) return [];
                    for (var e = [], n = 0; n <= t; n += 1) e.push(n);
                    return e
                }(19)) + e.canMakePayments() : ""
            }

            function k(t, e) {
                var n = nf(t),
                    r = "wv2rf:" + Nc(e),
                    i = e.vb,
                    o = Cd(t),
                    a = n.l(r),
                    u = e.Ij;
                return lu(o) || fu(a) ? su((function (a, c) {
                    wn(t, e, (function (e) {
                        var a = yo(e, "settings.webvisor.forms");
                        a = !yo(e, "settings.x3") && a, o = Cd(t) || yo(e, "settings.eu"), n.o(r, wf(a)), c({
                            vb: i,
                            If: !!o,
                            Yf: a,
                            Cg: u
                        })
                    }))
                })) : Kn({
                    vb: i,
                    If: o,
                    Yf: !!$u(a),
                    Cg: u
                })
            }

            function A(t) {
                if (t.type && t.event) switch (t.type) {
                    case "page":
                        var e = t.data,
                            n = e.ya,
                            r = e.bd,
                            i = e.content;
                        return delete e.ya, delete e.bd, delete e.content, e = {
                            type: "page",
                            data: {
                                L: t.L || 0,
                                content: i,
                                ya: n,
                                bd: r,
                                Y: e
                            }
                        }, t.K && (e.K = t.K), e;
                    case "event":
                        t: {
                            switch (e = {
                                type: "event",
                                K: t.K,
                                data: {
                                    L: t.L,
                                    type: t.event,
                                    Y: {}
                                }
                            }, n = Tu({}, t.data), t.event) {
                                case "zoom":
                                    e.data.Y = {
                                        Jg: {
                                            x: 0,
                                            y: 0,
                                            level: 0
                                        },
                                        Lg: n,
                                        duration: 1
                                    };
                                    break;
                                case "keystroke":
                                    e.data.Y = n.Fc;
                                    break;
                                case "deviceRotation":
                                case "resize":
                                    e.data.Y = n;
                                    break;
                                case "windowfocus":
                                case "windowblur":
                                case "focus":
                                    e.data.target = n.target, e.data.Y = null;
                                    break;
                                case "touchmove":
                                case "touchstart":
                                case "touchend":
                                case "touchcancel":
                                case "touchforcechange":
                                case "scroll":
                                case "change":
                                case "click":
                                case "mousemove":
                                case "mousedown":
                                case "mouseup":
                                case "selection":
                                case "stylechange":
                                    e.data.target = n.target, delete n.target, e.data.Y = n;
                                    break;
                                case "srcset":
                                    t = {
                                        type: "mutation",
                                        K: t.K,
                                        data: {
                                            L: t.L,
                                            Y: {
                                                Aa: [{
                                                    nd: [{
                                                        id: n.target,
                                                        ub: {
                                                            src: {
                                                                Jc: "",
                                                                n: n.value,
                                                                r: !1
                                                            }
                                                        },
                                                        wa: 0
                                                    }]
                                                }],
                                                index: 0
                                            }
                                        }
                                    };
                                    break t
                            }
                            t = e
                        }
                        break;
                    case "mutation":
                        return function (t) {
                            var e = Tu({}, t.data),
                                n = [];
                            switch (t.event) {
                                case "tc":
                                    n = [{
                                        d: [{
                                            id: e.target,
                                            ec: {
                                                Jc: "",
                                                n: e.value
                                            },
                                            wa: e.index
                                        }]
                                    }];
                                    break;
                                case "ac":
                                    n = [{
                                        nd: [{
                                            id: e.target,
                                            ub: bu((function (t, e) {
                                                var n = e[1];
                                                return t[e[0]] = {
                                                    Jc: "",
                                                    n: n,
                                                    r: No(n)
                                                }, t
                                            }), {}, ku(e.attributes)),
                                            wa: e.index
                                        }]
                                    }];
                                    break;
                                case "re":
                                    n = [{
                                        Ue: Hu((function (t) {
                                            return {
                                                id: t,
                                                wa: e.index
                                            }
                                        }), e.ga)
                                    }];
                                    break;
                                case "ad":
                                    n = [{
                                        Xe: Hu((function (t) {
                                            return {
                                                id: t.id,
                                                Qf: t.name,
                                                Rf: t.Pf,
                                                je: t.parent,
                                                me: t.oe,
                                                ae: t.next,
                                                ub: t.attributes,
                                                wa: e.index,
                                                ec: t.content,
                                                Ma: t.hidden
                                            }
                                        }), e.ga)
                                    }]
                            }
                            return {
                                type: "mutation",
                                K: t.K,
                                data: {
                                    L: t.L,
                                    Y: {
                                        Aa: n,
                                        index: e.index
                                    }
                                }
                            }
                        }(t)
                }
                return t
            }

            function T(t, e) {
                try {
                    return Ou(go(yu("contentWindow"), au(e)), Ki(t.document.querySelectorAll("iframe")))
                } catch (t) {
                    return null
                }
            }

            function S(t, e, n) {
                t = Di(t, n), e.postMessage(t, "*")
            }

            function _() {
                return R() + R() + "-" + R() + "-" + R() + "-" + R() + "-" + R() + R() + R()
            }

            function R() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            function M(t, e, n, r, i) {
                void 0 === r && (r = {}), void 0 === i && (i = vi(e));
                var o = Tu(bu((function (t, e) {
                    return t[e.name] = e.value, t
                }), {}, Ki(e.attributes)), r);
                Tu(o, function (t, e, n) {
                    var r = {};
                    return wt(t) ? r.value = t.value || n.value : "IMG" !== e || n.src || (r.src = ""), r
                }(e, i, o));
                var a = (r = bu((function (r, a) {
                    var u = a[0],
                        c = N(t, e, u, a[1], n, i),
                        s = c.value;
                    return No(s) ? delete o[u] : o[u] = s, r || c.fb
                }), !1, ku(o))) && bi(e);
                return a && (o.width = a.width, o.height = a.height), {
                    fb: r,
                    ah: o
                }
            }

            function N(t, e, n, r, i, o) {
                void 0 === o && (o = vi(e));
                var a = {
                    fb: !1,
                    value: r
                };
                return wt(e) ? "value" === n ? !No(r) && "" !== r && (n = i.If, o = i.Yf, i = xt(t, e), o ? (t = (n = mt(t, e, n)).Rd, e = n.Cd, n = n.ib, a.fb = !e && (i || t)) : (a.fb = i, n = !Ct(e)), n || i) && (a.value = ou("", Hu(xo("•", co), ("" + r).split("")))) : "checked" === n && Lu((e.getAttribute("type") || "").toLowerCase(), iv) ? a.value = e.checked ? "checked" : null : ov.test(n) && ka(t, e) && (a.value = null) : "IMG" === o && "src" === n ? (i = xt(t, e)) ? (a.fb = i, a.value = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=") : a.value = (e.getAttribute("srcset") ? e.currentSrc : "") || e.src : "A" === o && "href" === n ? a.value = r ? "#" : "" : (Lu(n, ["srcset", "integrity", "crossorigin", "password"]) || 2 < n.length && 0 === Go(n, "on") || "IFRAME" === o && "src" === n || "SCRIPT" === o && Lu(n, ["src", "type"])) && (a.value = null), a
            }

            function D(t, e, n, r) {
                return void 0 === r && (r = "wv2"), {
                    G: function (i, o) {
                        return Fr(t, r + "." + n + "." + o, i, void 0, e)
                    }
                }
            }

            function P(t, e) {
                var n = Ml(t),
                    r = fh(t, "r", e),
                    i = Fr(t, "rts.p");
                return wn(t, e, pu(bu, null, (function (t, e) {
                    var n = {
                        id: e.qh,
                        aa: e.aa
                    };
                    return n = r({
                        $: e.dj,
                        H: Ic(e.eh),
                        F: e.T,
                        Nb: e.Nb
                    }, n, e.jj).catch(i), t.then(xo(n, co))
                }), Zc.resolve(""), n)).catch(i)
            }

            function I(t, e, n) {
                e = aa(t, void 0, e);
                var r = yo(e = Yp(t, e.l("phc_settings") || ""), "clientId"),
                    i = yo(e, "orderId"),
                    o = yo(e, "service_id"),
                    a = yo(e, "phones") || [];
                return r && i && a ? Vp(t, n.ac, {
                    Ag: O
                }).$f(a).then((function (t) {
                    return function (t, e, n, r, i) {
                        var o;
                        e.xb && e.Ib && (e.xb === t.xb && e.Ib === t.Ib || Tu(t, e, {
                            ha: {},
                            Za: !0
                        }), 0 < i && Yi(t.ra, [i]), Uu((function (e) {
                            var n, r, i = e[0];
                            e = e[1];
                            var o = +(t.ha[i] && t.ha[i][e] ? t.ha[i][e] : 0);
                            Tu(t.ha, ((n = {})[i] = ((r = {})[e] = o, r), n))
                        }), r), Uu((function (e) {
                            var n, r, i = e[0];
                            e = e[1];
                            var o = 1 + (t.ha[i] ? t.ha[i][e] : 0);
                            Tu(t.ha, ((n = {})[i] = ((r = {})[e] = o, r), n))
                        }), n), t.Kf && (t.Za || n.length) && ((e = dn(t.b, t.ac)) && e.params("__ym", "phc", ((o = {}).clientId = t.xb, o.orderId = t.Ib, o.service_id = t.og, o.phones = t.ha, o.performance = t.ra, o)), t.Za = !1))
                    }(n, {
                        xb: r,
                        Ib: i,
                        og: o
                    }, t.ha, a, t.ra)
                })).catch((function () {})) : Zc.resolve()
            }

            function O(t, e, n) {
                if (t = Dp(n.Tc), "href" === n.xe) {
                    var r = n.mb;
                    if (n = (e = r.href).replace(t, n.Sa), e !== n) return r.href = n, !0
                } else if ((t = null === (r = n.mb.textContent) || void 0 === r ? void 0 : r.replace(t, n.Sa)) && t !== n.mb.textContent) return n.mb.textContent = t, !0;
                return !1
            }

            function L(t, e) {
                try {
                    var n = e.origin
                } catch (t) {}
                if (n) {
                    var r = Yu(go(Eo, su(n)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]);
                    n = Lu(n.replace(/\/?$/, "/"), Fp), (r || n) && ("appendremote" === yo(r = ia(t, e.data), "action") && Up(t, e, r))
                }
            }

            function j(t, e) {
                var n, r, i, o, a = e.data;
                a = void 0 === a ? "" : a;
                var u = e.id;
                u = void 0 === u ? "" : u;
                var c = Mu(t),
                    s = {};
                s.getCachedTags = xs, s.form = ((n = {}).closest = xo(t, Rp), n.select = xo(t, Mp), n.getData = xo(t, Z), n), s.button = ((r = {}).closest = xo(t, ti), r.select = xo(t, Ds), r.getData = xo(t, Qr), r), s.phone = ((i = {}).hidePhones = ko([t, null, [a]], F), i), s.status = ((o = {}).checkStatus = ko([t, $u(u)], B), o), c.o("_u", s), n = void 0 === (n = e.lang) ? "" : n, r = void 0 === (r = e.appVersion) ? "" : r, i = void 0 === (i = e.fileId) ? "" : i, o = void 0 !== (o = e.beta) && o, r = ou(".", go(zu(go(co, $u)), Iu(Boolean))(r.split("."))), Lu(i, Hp) && Lu(n, ["ru", "en", "tr"]) ? n = Gp(n = (o ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (r ? "/" + r : "") + "/form-selector/" + i + "_" + n + ".js") ? n : "" : n = "", n && ai(t, {
                    src: n
                })
            }

            function B(t) {
                var e, n = jp(t);
                return t = Mu(t).l("getCounters", to)(), t = Hu(yu("id"), t), (e = {
                    id: n
                }).counterFound = !!n && Lu(n, t), e
            }

            function F(t, e, n) {
                var r;
                e = U(t, e, {
                    Ag: G,
                    Li: (r = {}, r.href = !0, r)
                }), n = Pu(Boolean, Hu((function (t) {
                    return "*" === t ? t : Pp(t)
                }), n));
                var i = Hu(go(co, Co("concat", [""]), mu("reverse"), io), n);
                r = Pr(t, n = jr(t), 1e3), e = pu(e.$f, e, i, !1), r.C(e),
                    function (t, e) {
                        Jc(t).C(t, ["load"], e.N)
                    }(t, n), H(t, n), e()
            }

            function G(t, e, n) {
                var r = hs(t),
                    i = n.mb,
                    o = n.Tc,
                    a = i.parentNode,
                    u = i.textContent;
                if ("text" === n.xe && u && r && a) {
                    n = r("small"), Op(n);
                    var c = u.split(""),
                        s = u.replace(/\s/g, "").length;
                    return Uu(Co("appendChild", n), bu((function (t, e) {
                            var n = t.ga,
                                i = t.Hg,
                                o = r("small");
                            o.innerHTML = e;
                            var a = Ip.test(e);
                            return Op(o), a && (o.style.opacity = "" + (s - i - 1) / s), n.push(o), {
                                ga: n,
                                Hg: i + (a ? 1 : 0)
                            }
                        }), {
                            ga: [],
                            Hg: 0
                        }, c).ga),
                        function (t, e, n, r) {
                            function i() {
                                if (Uu(xo(["style", "opacity", ""], bo), Ki(n.childNodes)), e) {
                                    var i = dn(t, e);
                                    i && i.extLink("tel:" + r, {})
                                }
                                a(), u()
                            }
                            var o = Jc(t),
                                a = Yo,
                                u = Yo;
                            a = o.C(n, ["mouseenter"], (function (e) {
                                if (e.target === n) {
                                    var r = Or(t, i, 200, "ph.h.e");
                                    (u || Yo)(), u = o.C(n, ["mouseleave"], (function (e) {
                                        e.target === n && Qi(t, r)
                                    }))
                                }
                            }))
                        }(t, e, n, o), a.insertBefore(n, i), i.textContent = "", !0
                }
                return !1
            }

            function H(t, e) {
                return $(t).then((function () {
                    var n, r = t.document.body,
                        i = ((n = {}).attributes = !0, n.childList = !0, n.subtree = !0, n);
                    zo("MutationObserver", t.MutationObserver) && new MutationObserver(e.N).observe(r, i)
                }))
            }

            function U(t, e, n) {
                function r(n) {
                    var r;
                    return a(t, e, n) ? null === (r = o[n.Tc]) || void 0 === r ? void 0 : r.fd : null
                }
                var i, o, a = n.Ag,
                    u = void 0 === (n = n.Li) ? ((i = {}).href = !0, i.text = !0, i) : n;
                return {
                    $f: function (e) {
                        return new Zc((function (n, i) {
                            e && e.length || i(), o = z()(e), n($(t).then((function () {
                                var e = of (t),
                                    n = e(pr),
                                    i = u.href ? function (t, e) {
                                        var n = t.document.body;
                                        if (!n) return [];
                                        var r = q(e);
                                        return bu((function (n, i) {
                                            var o = yo(i, "href");
                                            try {
                                                var a = decodeURI(o || "")
                                            } catch (t) {
                                                a = ""
                                            }
                                            if ("tel:" === a.slice(0, 4)) {
                                                var u = (r.exec(a) || [])[0],
                                                    c = u ? Pp(u) : "",
                                                    s = e[c];
                                                lu(s) || !c && "*" !== s.fd[0] || (n.push({
                                                    xe: "href",
                                                    mb: i,
                                                    Tc: c,
                                                    Sa: V(u, e[c].Sa),
                                                    xj: o
                                                }), o = Pp(a.slice(4)), c = z()([c ? s.fd : [o, ""]]), n.push.apply(n, X(t, c, i)))
                                            }
                                            return n
                                        }), [], Ki(n.querySelectorAll("a")))
                                    }(t, o) : [],
                                    a = u.text ? X(t, o) : [];
                                return {
                                    ha: Pu(mo, Pu(Boolean, Hu(r, i.concat(a)))),
                                    ra: e(pr) - n
                                }
                            })).catch((function () {
                                return {
                                    ha: [],
                                    ra: 0
                                }
                            })))
                        }))
                    }
                }
            }

            function X(t, e, n) {
                if (void 0 === n && (n = t.document.body), !n) return [];
                var r = [],
                    i = q(e);
                return W(t, n, (function (t) {
                    if (t !== n && "script" !== (yo(t, "parentNode.nodeName") || "").toLowerCase()) {
                        var o = Pu(Boolean, i.exec(t.textContent || "") || []);
                        Uu((function (n) {
                            var i = Pp(n);
                            lu(e[i]) || r.push({
                                xe: "text",
                                mb: t,
                                Tc: i,
                                Sa: V(n, e[i].Sa),
                                xj: t.textContent || ""
                            })
                        }), o)
                    }
                }), (function (t) {
                    return i.test(t.textContent || "") ? 1 : 0
                }), t.NodeFilter.SHOW_TEXT), r
            }

            function z() {
                return wo((function (t, e) {
                    var n = Hu(Pp, e),
                        r = n[0];
                    n = n[1], t[r] = {
                        Sa: n,
                        fd: e
                    };
                    var i = Y(r);
                    return i !== r && (t[i] = {
                        Sa: Y(n),
                        fd: e
                    }), t
                }), {})
            }

            function V(t, e) {
                for (var n = [], r = t.split(""), i = e.split(""), o = 0, a = 0; a < t.length && !(o >= i.length); a += 1) {
                    var u = r[a];
                    "0" <= u && "9" >= u ? (n.push(i[o]), o += 1) : n.push(r[a])
                }
                return ou("", n) + e.slice(o + 1)
            }

            function Y(t) {
                var e = {
                    7: "8",
                    8: "7"
                };
                return 11 === t.length && e[t[0]] ? "" + e[t[0]] + t.slice(1) : t
            }

            function q(t) {
                return new RegExp("(?:" + ou("|", Hu(Np, Au(t))) + ")")
            }

            function K(t, e, n, r) {
                if (e) {
                    var i = [];
                    e && (t.document.documentElement.contains(e) ? W(t, e, Co("push", i), r) : Yi(i, J(t, e, r))), Uu(n, i)
                }
            }

            function W(t, e, n, r, i) {
                function o(e) {
                    return Do(r) ? r(e) ? t.NodeFilter.FILTER_ACCEPT : t.NodeFilter.FILTER_REJECT : t.NodeFilter.FILTER_ACCEPT
                }
                if (void 0 === i && (i = -1), Do(n) && o(e) === t.NodeFilter.FILTER_ACCEPT && (n(e), !Si(e)))
                    for (e = t.document.createTreeWalker(e, i, r ? {
                            acceptNode: o
                        } : null, !1); e.nextNode() && !1 !== n(e.currentNode););
            }

            function J(t, e, n) {
                var r = [],
                    i = go(co, Co("push", r));
                if (Do(n) ? (No(n = n(e)) || n === t.NodeFilter.FILTER_ACCEPT) && i(e) : i(e), e.childNodes && 0 < e.childNodes.length) {
                    n = 0;
                    for (var o = (e = e.childNodes).length; n < o; n += 1) {
                        var a = J(t, e[n]);
                        Uu(i, a)
                    }
                }
                return r
            }

            function $(t, e) {
                void 0 === e && (e = t);
                var n = (e.nodeType ? "contentWindow." : "") + "document.body";
                return new Zc((function r(i) {
                    yo(e, n) ? i() : Or(t, xo(i, r), 100)
                }))
            }

            function Z(t, e, n) {
                return ei(t, e, ["i", "n", "p"], void 0, n)
            }

            function Q(t, e, n) {
                return function (r) {
                    var i, o, a = dn(e, n);
                    a && function (t, e, n) {
                        var r = !1,
                            i = "";
                        if (!Mo(e)) return rn(n, "Ecommerce data should be an object"), r;
                        var o = e.goods;
                        switch (t) {
                            case "detail":
                            case "add":
                            case "remove":
                                mo(o) && o.length ? (r = Nu((function (t) {
                                    return Mo(t) && (Ho(t.id) || Vi(n, t.id) || Ho(t.name))
                                }), o)) || (i = "All items in 'goods' should be objects and contain 'id' or 'name' field") : i = "Ecommerce data should contain 'goods' non-empty array";
                                break;
                            case "purchase":
                                Vi(n, e.id) || Ho(e.id) ? r = !0 : i = "Purchase object should contain string or number 'id' field"
                        }
                        return rn(n, i), r
                    }(t, r, e) && (a = pu(a.params, a), (r = et(t, r, "goods")) && a && a(((i = {}).__ym = ((o = {}).ecommerce = [r], o), i)))
                }
            }

            function tt(t, e, n) {
                var r, i, o = yo(n, "ecommerce") || {},
                    a = yo(n, "event") || "";
                (o = (a = wp[a]) ? et(a, o, "items") : void 0) || (o = n, !mo(n) && Vi(t, wu(n)) && (o = To(o)), o = mo(o) && (t = wp[o[1]], "event" === o[0] && t) ? et(t, o[2], "items") : void 0), (n = o || function (t) {
                    var e = yo(t, "ecommerce") || {};
                    return t = Pu(ju(Ep), Au(e)), t = bu((function (t, n) {
                        return t[n] = e[n], t
                    }), {}, t), Au(t).length ? t : void 0
                }(n)) && e && e(((r = {}).__ym = ((i = {}).ecommerce = [n], i), r))
            }

            function et(t, e, n) {
                var r, i;
                if (e) {
                    var o = e.purchase || e;
                    e = Au(o);
                    var a = o[n];
                    if (a) {
                        var u = ((r = {})[t] = ((i = {}).products = Hu(nt, a), i), r);
                        return 1 < e.length && (u[t].actionField = bu((function (t, e) {
                            return e === n ? t : "currency" === e ? (u.currencyCode = o.currency, t) : (t[yp[e] || e] = o[e], t)
                        }), {}, e)), u
                    }
                }
            }

            function nt(t) {
                var e = {};
                return Uu((function (n) {
                    var r = yp[n] || n; - 1 !== n.indexOf("item_category") ? (r = yp.item_category, e[r] = e[r] ? e[r] + "/" + t[n] : t[n]) : e[r] = t[n]
                }), Au(t)), e
            }

            function rt(t, e) {
                var n = mp(t),
                    r = Nc(e),
                    i = n[r];
                i || (i = {}, n[r] = i), i.ti = !0, (n = i.pg) && (r = bp(t), Uu(r, n))
            }

            function it(t, e, n, r) {
                var i;
                if (t = dn(t, n)) {
                    var o = r.data;
                    n = "" + n.id;
                    var a = r.sended || [];
                    r.sended || (r.sended = a), Lu(n, a) || !t.params || r.counter && "" + r.counter !== n || (t.params(o), a.push(n), r.parent && e.mg(((i = {}).type = "params", i.data = o, i)))
                }
            }

            function ot(t) {
                var e = Yo,
                    n = null,
                    r = t.length;
                if (0 !== t.length && t[0]) {
                    var i = t.slice(-1)[0];
                    Do(i) && (e = i, r = t.length + -1);
                    var o = t.slice(-2)[0];
                    return Do(o) && (e = o, n = i, r = t.length + -2), {
                        sh: n,
                        Ua: e,
                        T: 1 === (r = t.slice(0, r)).length ? t[0] : bo(r)
                    }
                }
            }

            function at(t, e, n) {
                var r = yo(t, "AppMetricaInitializer"),
                    i = yo(r, "init");
                if (i) try {
                    pu(i, r)(Di(t, e))
                } catch (t) {} else Lh = Or(t, ko([t, e, 2 * n], at), n, "ai.d");
                return function () {
                    return Qi(t, Lh)
                }
            }

            function ut(t, e, n) {
                if (n && (n = Qr(t, n = ti(t, n)))) {
                    n = "?" + Pi(n);
                    var r = nn(t, e, "Button goal. Counter " + e.id + ". Button: " + n + ".");
                    td(t, e, "btn", r)(n)
                }
            }

            function ct(t, e) {
                var n = nf(t);
                if ("" !== n.l("cc")) return 0;
                var r = xo("cc", n.o);
                r(0);
                var i = of (t),
                    o = Mu(t);
                o = go(yu(rp({
                    Vc: 1
                }) + ".c"), uu((function (t) {
                    r(t + "&" + i(dr))
                })), xo("cc", o.o)), fh(t, "6", e)({}).then(o).catch(go(uu((function () {
                    var t = i(dr);
                    n.o("cc", "&" + t)
                })), Fr(t, "cc")))
            }

            function st(t, e) {
                var n;
                t(((n = {}).clickmap = !!lu(e) || e, n))
            }

            function ft(t, e, n, r, i) {
                function o() {
                    c && c.stop()
                }
                if (!e.Ta) return Zc.resolve(Yo);
                var a = fh(t, "4", e),
                    u = {
                        F: {
                            "wv-type": "0"
                        },
                        H: Ic()
                    };
                n = new kd(t, n, (function (n, r, i) {
                    if (!a) return Zc.resolve();
                    r = "wv-data=" + Mn(n, !0);
                    for (var o, c, s, f = n.length, l = 0, h = 255, d = 255; f;) {
                        f -= o = 21 < f ? 21 : f;
                        do {
                            c = "string" == typeof n ? n.charCodeAt(l) : n[l], l += 1, 255 < c && (s = c >> 8, c &= 255, c ^= s), d += h += c
                        } while (--o);
                        h = (255 & h) + (h >> 8), d = (255 & d) + (d >> 8)
                    }
                    return a(Tu({}, u, {
                        $: r,
                        F: {
                            "wv-check": 65535 === (n = (255 & h) + (h >> 8) << 8 | (255 & d) + (d >> 8)) ? 0 : n,
                            "wv-type": "0"
                        }
                    }), e, i).catch(Fr(t, "m.n.m.s"))
                }));
                var c = function (t, e, n, r) {
                    var i = t.document,
                        o = [],
                        a = Jc(t),
                        u = ":submit" + Math.random(),
                        c = [],
                        s = pu(e.flush, e),
                        f = Io((function (n, i) {
                            Fr(t, "hfv." + n, (function () {
                                try {
                                    var t = i.type
                                } catch (t) {
                                    return
                                }
                                t = Lu(t, r), e.push(i, {
                                    type: n
                                }), t && s()
                            }))()
                        })),
                        l = Fr(t, "sfv", (function () {
                            if (!Af(t)) {
                                var e = n(t),
                                    r = Wd(t);
                                Uu((function (t) {
                                    o.push(a.C(t.target, [t.event], f(t.type)))
                                }), e), Uu((function (e) {
                                    o.push(a.C(e.target, [e.event], Fr(t, "hff." + e.type + "." + e.event, (function (n) {
                                        Uu(su({
                                            b: t,
                                            ia: n,
                                            flush: s
                                        }), e.M)
                                    }))))
                                }), r), c = ni(t, "form", i), i.attachEvent && (e = ni(t, "form *", i), Uu((function (t) {
                                    o.push(a.C(t, ["submit"], f("form")))
                                }), c), Uu((function (t) {
                                    bs(t) && o.push(a.C(t, ["change"], f("formInput")))
                                }), e)), Uu((function (e) {
                                    var n = e.submit;
                                    (Do(n) || "object" == typeof n && Qd.test("" + n)) && (e[u] = n, e.submit = Fr(t, "fv", (function () {
                                        var t = {
                                            target: e,
                                            type: "submit"
                                        };
                                        return f("document")(t), e[u]()
                                    })))
                                }), c)
                            }
                        })),
                        h = Fr(t, "ufv", (function () {
                            Uu(io, o), Uu((function (t) {
                                t && (t.submit = t[u])
                            }), c), e.flush()
                        }));
                    return {
                        start: l,
                        stop: h
                    }
                }(t, n, r, i);
                return wn(t, e, (function (e) {
                    return e && Mu(t).o("isEU", yo(e, "settings.eu")), !jn(t) && c && lt(t, e) && c.start(), o
                }))
            }

            function lt(t, e) {
                var n = tf(t),
                    r = n.l("visorc");
                Lu(r, ["w", "b"]) || (r = ""), Cr(t) && Tr(t, kr, "visorc") && !tp.test(Qu(t) || "") || (r = "b");
                var i = yo(e, "settings.webvisor.recp");
                return (!t.isFinite(i) || 0 > i || 1 < i) && (r = "w"), r || (r = Mu(t).l("hitId") % 1e4 / 1e4 < i ? "w" : "b"), n.o("visorc", r, 30), "w" === r
            }

            function ht(t, e) {
                var n = t.b,
                    r = [],
                    i = e.form;
                if (!e[Ad] && i) {
                    var o = i.elements;
                    i = i.length;
                    for (var a = 0; a < i; a += 1) {
                        var u = o[a];
                        ys(u) && !u[Ad] && Yi(r, Na(n, u))
                    }
                } else Yi(r, Na(n, e));
                return r
            }

            function dt(t) {
                if (Ud) {
                    Ud = !1;
                    var e = fr(t.b),
                        n = [];
                    return Sa(t.b, n, 15) ? t = [] : (_a(n, e), t = n), t
                }
            }

            function pt(t) {
                if (!Ud) {
                    Ud = !0, t = fr(t.b);
                    var e = [];
                    return Ta(e, 14), _a(e, t), e
                }
            }

            function vt(t, e, n) {
                var r = e[Ad];
                if (r) {
                    t: {
                        var i = fr(t),
                            o = e[Ad];
                        if (0 < o) {
                            var a = [];
                            e = fi(t, e);
                            var u = Td[o],
                                c = e[0] + "x" + e[1],
                                s = e[2] + "x" + e[3];
                            if (c !== u.Vf) {
                                if (u.Vf = c, Sa(t, a, 9)) {
                                    t = [];
                                    break t
                                }
                                _a(a, i), _a(a, o), _a(a, e[0]), _a(a, e[1])
                            }
                            if (s !== u.size) {
                                if (u.size = s, Sa(t, a, 10)) {
                                    t = [];
                                    break t
                                }
                                _a(a, i), _a(a, o), _a(a, e[2]), _a(a, e[3])
                            }
                            if (a.length) {
                                t = a;
                                break t
                            }
                        }
                        t = []
                    }
                    Yi(n, t)
                }
                return r
            }

            function mt(t, e, n) {
                if (void 0 === n && (n = !1), "button" === e.getAttribute("type")) return {
                    ib: !1,
                    Cd: !1,
                    Rd: !1
                };
                var r = Ct(e),
                    i = bt(e);
                return t = gt(t, e) || n && i, {
                    ib: !(r || !t),
                    Cd: r,
                    Rd: i
                }
            }

            function gt(t, e) {
                return !(!ka(t, e) && !xa(t, e)) || xt(t, e)
            }

            function bt(t) {
                if (!t) return !1;
                var e = t.placeholder,
                    n = t.type;
                return t = Pu(yt, [t.className, t.id, t.name]), n && Lu(n, _d) || Yu(Eo(Od), t) || yt(e) && jd.test(e)
            }

            function yt(t) {
                return !!(t && 2 < t.length)
            }

            function wt(t) {
                try {
                    var e = vi(t);
                    if (Lu(e, ws)) {
                        if ("INPUT" === e) {
                            var n = t.type;
                            return !n || Lu(n.toLocaleLowerCase(), Id)
                        }
                        return !0
                    }
                } catch (t) {}
                return !1
            }

            function Et(t, e) {
                return e && ki("(ym-disable-submit|-metrika-noform)", e)
            }

            function Ct(t) {
                return t && ki("ym-record-keys", t)
            }

            function xt(t, e) {
                if (No(e)) return !1;
                if (Si(e)) {
                    var n = e.parentNode;
                    return !(!No(n) && 11 === n.nodeType) && xt(t, e.parentNode)
                }
                if (Rd.test(e.className)) return !0;
                if (!(n = ds(t))) return !1;
                var r = n.call(e, ".ym-hide-content *");
                return (!r || !Md.test(e.className) && !n.call(e, ".ym-hide-content .ym-show-content *")) && r
            }

            function kt(t, e) {
                var n = null;
                try {
                    (n = e.target || e.srcElement) && (!n.ownerDocument && n.documentElement ? n = n.documentElement : n.ownerDocument !== t.document && (n = null))
                } catch (t) {}
                return n
            }

            function At(t) {
                var e = t.which;
                return t = t.button, e || void 0 === t ? e : 1 === t || 3 === t ? 1 : 2 === t ? 3 : 4 === t ? 2 : 0
            }

            function Tt(t, e) {
                var n = Ci(t),
                    r = yi(t);
                return {
                    x: e.pageX || e.clientX + r.x - (n.clientLeft || 0) || 0,
                    y: e.pageY || e.clientY + r.y - (n.clientTop || 0) || 0
                }
            }

            function St(t) {
                var e = void 0;
                void 0 === e && (e = yd);
                var n = yo(t, "navigator") || {};
                e = Hu(xo(n, yo), e), e = ou("x", e);
                try {
                    var r = Xo(yo(t, "navigator.getGamepads"), "getGamepads") && t.navigator.getGamepads() || []
                } catch (t) {
                    r = []
                }
                return e + "x" + wu(r)
            }

            function _t(t) {
                try {
                    var e = wu(t) ? t : [];
                    return ou(",", [t.name, t.description, go(Ki, Iu(Boolean), zu(Rt), cu(","))(e)])
                } catch (t) {
                    return ""
                }
            }

            function Rt(t) {
                return ou(",", [t.description, t.suffixes, t.type])
            }

            function Mt(t, e) {
                return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + yo(t, "0") + ", " + yo(t, "1") + "]"
            }

            function Nt(t) {
                return t = yo(t, "screen") || {}, ou("x", Hu(xo(t, yo), vd))
            }

            function Dt(t) {
                return (t = yo(t, "navigator") || {}).doNotTrack || t.msDoNotTrack || "unknown"
            }

            function Pt(t, e, n) {
                var r = n.Va,
                    i = of (t),
                    o = function (t, e, n) {
                        var r = e || {},
                            i = fh(t, "u", n),
                            o = nf(t);
                        return {
                            l: function (t, e) {
                                return lu(r[t]) ? o.l(t, e) : r[t]
                            },
                            o: function (e, n) {
                                var a, u = "" + n;
                                return r[e] = u, o.o(e, u), i({
                                    F: (a = {}, a.key = e, a.value = u, a)
                                }, [Ac.Ka + "//mc.yandex.ru/user_storage_set"], {}).catch(Fr(t, "u.d.s.s"))
                            }
                        }
                    }(t, e.userData, r),
                    a = function (t) {
                        var e = uc(t);
                        return t = go(ec, ju(["iPhone", "iPad"]))(t), e ? rd : t ? id : []
                    }(t);
                return a.length ? function (t, e, n, r, i) {
                    var o = i.Wd,
                        a = i.Va;
                    return new Zc((function (i, u) {
                        var c = n.l(o, 0);
                        return c = parseInt("" + c, 10), 60 >= e(dr) - c ? u() : zc(t) ? i(void 0) : sd(r) ? u() : i(cd(t, a))
                    }))
                }(t, i, o, e, n).then((function () {
                    return function (t, e, n, r, i) {
                        var o = i.wj,
                            a = void 0 === o ? Yo : o,
                            u = i.Wd,
                            c = r(pr);
                        return function (t, e, n) {
                            var r = n.Kb,
                                i = n.data,
                                o = fh(t, r, n.Va);
                            return t = Tu({}, od), i && Tu(t.F, i),
                                function (t) {
                                    var e = [],
                                        n = !1;
                                    return su((function (r, i) {
                                        function o(n) {
                                            e.push(n) === t.length && r(e)
                                        }
                                        Uu((function (t) {
                                            t(Wn(o, (function (t) {
                                                if (!n) try {
                                                    i(t), n = !0
                                                } catch (t) {
                                                    o(t)
                                                }
                                            })))
                                        }), t)
                                    }))
                                }(Hu((function (t) {
                                    return function (t) {
                                        return su((function (e, n) {
                                            t.then(n, e)
                                        }))
                                    }(o(od, Hu((function (t) {
                                        var e = t[1];
                                        return "http" + (t[2] ? "s" : "") + "://" + (t = ou("", Hu((function (t) {
                                            return String.fromCharCode(t.charCodeAt(0) + 10)
                                        }), t[0].split("")))) + ":" + e + "/" + ud[r]
                                    }), t), {
                                        Ig: !1,
                                        lj: !0
                                    }).then((function (e) {
                                        return Tu({}, e, {
                                            host: t[e.Oj]
                                        })
                                    })))
                                }), e))
                        }(t, e, i)(Wn((function (e) {
                            Uu((function (e) {
                                e && Xr(t, u + ".s", e)
                            }), e), e = r(dr), n.o(u, e)
                        }), (function (t) {
                            n.o(u, r(dr)), a(t, r, c)
                        })))
                    }(t, a, o, i, n)
                }), Yo) : Zc.resolve()
            }

            function It(t, e) {
                if (t.Gj()) {
                    var n = null;
                    try {
                        n = e.target || e.srcElement
                    } catch (t) {}
                    if (n) {
                        3 === n.nodeType && (n = n.parentNode);
                        for (var r = n && n.nodeName && ("" + n.nodeName).toLowerCase(); yo(n, "parentNode.nodeName") && ("a" !== r && "area" !== r || !n.href && !n.getAttribute("xlink:href"));) r = (n = n.parentNode) && n.nodeName && ("" + n.nodeName).toLowerCase();
                        var i = n.href ? n : null
                    } else i = null;
                    if (i && !ki("ym-disable-tracklink", i)) {
                        var o = t.b,
                            a = t.globalStorage;
                        n = t.rh;
                        var u = t.Va,
                            c = t.ri,
                            s = t.sender,
                            f = t.Gh,
                            l = u.qc,
                            h = i.href;
                        if (r = h === (r = jo(i && i.innerHTML && i.innerHTML.replace(/<\/?[^>]+>/gi, ""))) ? "" : r, ki("ym-external-link", i)) Ot(o, u, {
                            url: h,
                            Eb: !0,
                            title: r,
                            sender: s
                        });
                        else {
                            l = l ? ua(o, l).hostname : Gi(o).hostname, f = RegExp("\\.(" + ou("|", Hu(Lo, f)) + ")$", "i");
                            var d = i.protocol + "//" + i.hostname + i.pathname;
                            f = Cf.test(d) || Cf.test(h) || f.test(h) || f.test(d), i = i.hostname, Gc(l) === Gc(i) ? f ? Ot(o, u, {
                                url: h,
                                Cc: !0,
                                title: r,
                                sender: s
                            }) : ((c = (o = a.l("pai", Yo)()) && o + "-" + c) && n.o("pai", c), r && n.o("il", jo(r).slice(0, 100))) : h && Ef.test(h) || Ot(o, u, {
                                url: h,
                                Hc: !0,
                                Eb: !0,
                                Cc: f,
                                title: r,
                                sender: s
                            })
                        }
                    }
                }
            }

            function Ot(t, e, n, r) {
                var i, o = Ic();
                return n.Cc && o.o("dl", "1"), n.Eb && o.o("ln", "1"), o = {
                    H: o,
                    title: n.title,
                    Hc: !!n.Hc,
                    T: n.T,
                    F: (i = {}, i["page-url"] = n.url, i["page-ref"] = e.qc || Gi(t).href, i)
                }, i = "Link", n.Cc ? i = n.Eb ? "Ext link - File" : "File" : n.Eb && (i = "Ext link"), en(t, "cl.p.s", e = n.sender(o, e).then(r || Yo).then(nn(t, e, i + ". Counter " + e.id + ". Url: " + n.url, n)), n.Ua || Yo, n.b)
            }

            function Lt(t, e) {
                var n, r, i = (n = {}, n.string = !0, n.object = !0, n.boolean = e, n)[typeof e] || !1;
                t(((r = {}).trackLinks = i, r))
            }

            function jt(t, e) {
                return function (n) {
                    Ft(t, e, n)
                }
            }

            function Bt(t, e) {
                Gt(t)((function (t) {
                    delete t[e]
                }))
            }

            function Ft(t, e, n) {
                Gt(t)((function (t) {
                    t[e] = Tu(t[e] || {}, n)
                }))
            }

            function Gt(t) {
                var e = (t = Mu(t)).l("dsjf") || su({});
                return t.Fa("dsjf", e), e
            }

            function Ht(t) {
                return !!Ou((function (t) {
                    return Lu(t.type, ["articleInfo", "publishersHeader"])
                }), t)
            }

            function Ut(t) {
                var e = on(t).isEnabled,
                    n = !1;
                try {
                    n = (n = 2 === new t.Blob(["ä"]).size) && 2 === new t.Blob([new t.Uint8Array([1, 2])]).size
                } catch (t) {}
                return Nu(Boolean, [!e, n, t.Uint8Array, yo(t, "Uint8Array.prototype.slice")])
            }

            function Xt(t, e) {
                var n = e[1][3],
                    r = 0,
                    i = new t.Uint8Array(e[0]);
                return Jn([n], (function (e, n) {
                    return e ? (e[0](t, e[2], i, r), r += e[1], n.push(e[3]), i) : i
                }))
            }

            function zt(t, e, n) {
                t = e(n);
                var r = [0, e = [Yo, 0, 0], e, void 0];
                return Jn(t, (function (t, e) {
                    var n = t[0],
                        i = t[1],
                        o = t[2];
                    if (0 === n) return o(r, i), r;
                    if (null == i) return r;
                    var a = n >> 3;
                    if (1 & n) qt(r, ze(a)), i = o(i), 2 & a && qt(r, ze(i[1])), qt(r, i);
                    else if (4 & n)
                        for (n = i.length - 1; 0 <= n;) {
                            var u = o(i[n]);
                            u.push([0, 0, Yt]), u.push([0, ze(a), qt]), u.unshift([0, 0, Vt]), e.push.apply(e, u), --n
                        } else if (2 & n) {
                            o = t[2];
                            var c = t[3],
                                s = t[4],
                                f = t[5],
                                l = Au(i);
                            for (n = l.length - 1; 0 <= n;) u = [
                                [0, 0, Vt],
                                [s, i[u = l[n]], f],
                                [o, u, c],
                                [0, 0, Yt],
                                [0, ze(a), qt]
                            ], e.push.apply(e, u), --n
                        } else(u = o(i)).push([0, 0, Yt]), u.push([0, ze(a), qt]), u.unshift([0, 0, Vt]), e.push.apply(e, u);
                    return r
                }))
            }

            function Vt(t) {
                var e = t[1],
                    n = t[0],
                    r = t[2];
                t[3] ? (t[0] = t[3][0], t[1] = t[3][1], t[2] = t[3][2], t[3] = t[3][3]) : (t[0] = 0, t[1] = [Yo, 0, 0], t[2] = t[1]), qt(t, ze(n)), n && (t[2][3] = e[3], t[2] = r, t[0] += n)
            }

            function Yt(t) {
                t[3] = [t[0], t[1], t[2], t[3]], t[1] = [Yo, 0, 0], t[2] = t[1], t[0] = 0
            }

            function qt(t, e) {
                t[0] += e[1], t[2][3] = e, t[2] = e
            }

            function Kt(t) {
                return [
                    [385, t.Wg, ze],
                    [336, t.gj, ne],
                    [272, t.Zg, te],
                    [208, t.event, Ce],
                    [144, t.Ji, xe],
                    [80, t.page, Ne]
                ]
            }

            function Wt(t) {
                return [
                    [321, t.end, Fe],
                    [273, t.nh, Be],
                    [193, t.page, Xe],
                    [144, t.data, Kt],
                    [65, t.K, Xe]
                ]
            }

            function Jt(t) {
                return [
                    [84, t.buffer, Wt]
                ]
            }

            function $t(t) {
                return [
                    [129, t.position, Xe],
                    [81, t.name, je]
                ]
            }

            function Zt(t) {
                return [
                    [81, t.name, je]
                ]
            }

            function Qt(t) {
                return [
                    [81, t.name, je]
                ]
            }

            function te(t) {
                return [
                    [593, t.Mj, je],
                    [532, t.mj, $t],
                    [449, t.$e, Xe],
                    [401, t.fj, je],
                    [340, t.Aj, Zt],
                    [276, t.bh, Qt],
                    [209, t.bj, je],
                    [145, t.cj, je],
                    [65, t.id, ze]
                ]
            }

            function ee(t) {
                return [
                    [513, t.$e, Xe],
                    [489, t.Gi, He],
                    [385, t.eb, Xe],
                    [321, t.height, Xe],
                    [257, t.width, Xe],
                    [193, t.y, Xe],
                    [129, t.x, Xe],
                    [65, t.id, ze]
                ]
            }

            function ne(t) {
                return [
                    [129, t.eb, Xe],
                    [84, t.$g, ee]
                ]
            }

            function re(t) {
                return [
                    [81, t.hash, je]
                ]
            }

            function ie(t) {
                return [
                    [209, t.stack, je],
                    [145, t.Bh, je],
                    [81, t.code, je]
                ]
            }

            function oe(t) {
                return [
                    [193, t.orientation, Xe],
                    [129, t.height, Xe],
                    [65, t.width, Xe]
                ]
            }

            function ae(t) {
                return [
                    [84, t.Fc, ue]
                ]
            }

            function ue(t) {
                return [
                    [273, t.Gc, je],
                    [193, t.Jf, Fe],
                    [145, t.key, je],
                    [65, t.id, Xe]
                ]
            }

            function ce(t) {
                return [
                    [145, t.value, je],
                    [81, t.Am, je]
                ]
            }

            function se(t) {
                return [
                    [149, t.Wb, je],
                    [81, t.method, je]
                ]
            }

            function fe(t) {
                return [
                    [257, t.kb, Xe],
                    [193, t.lb, Xe],
                    [129, t.height, Xe],
                    [65, t.width, Xe]
                ]
            }

            function le(t) {
                return [
                    [144, t.Lg, he],
                    [80, t.Jg, he]
                ]
            }

            function he(t) {
                return [
                    [193, t.y, Xe],
                    [129, t.x, Xe],
                    [105, t.level, He]
                ]
            }

            function de(t) {
                return [
                    [84, t.touches, pe]
                ]
            }

            function pe(t) {
                return [
                    [297, t.force, He],
                    [233, t.y, He],
                    [169, t.x, He],
                    [81, t.id, je]
                ]
            }

            function ve(t) {
                return [
                    [193, t.hidden, Fe],
                    [129, t.checked, Fe],
                    [81, t.value, je]
                ]
            }

            function me(t) {
                return [
                    [257, t.ff, Xe],
                    [193, t.qg, Xe],
                    [129, t.end, Xe],
                    [65, t.start, Xe]
                ]
            }

            function ge() {
                return []
            }

            function be(t) {
                return [
                    [193, t.page, Fe],
                    [129, t.y, Xe],
                    [65, t.x, Xe]
                ]
            }

            function ye(t) {
                return [
                    [129, t.y, Xe],
                    [65, t.x, Xe]
                ]
            }

            function we(t) {
                return [
                    [84, t.Aa, Ee]
                ]
            }

            function Ee(t) {
                return [
                    [257, t.index, Xe],
                    [209, t.ie, je],
                    [145, t.style, je],
                    [65, t.target, Xe]
                ]
            }

            function Ce(t) {
                return [
                    [1168, t.uj, we],
                    [1104, t.oi, re],
                    [1040, t.Fh, ie],
                    [976, t.uh, oe],
                    [912, t.Di, ae],
                    [848, t.ij, fe],
                    [784, t.Wj, le],
                    [720, t.Bm, ce],
                    [656, t.xm, se],
                    [592, t.Bj, de],
                    [528, t.jh, ve],
                    [464, t.pj, me],
                    [400, t.Tj, ge],
                    [336, t.nj, be],
                    [272, t.Hi, ye],
                    [193, t.L, Ue],
                    [129, t.target, Ue],
                    [65, t.type, ze]
                ]
            }

            function xe(t) {
                return [
                    [257, t.L, Ue],
                    [208, t.Y, ke],
                    [129, t.K, Xe],
                    [65, t.target, Xe]
                ]
            }

            function ke(t) {
                return [
                    [148, t.Aa, Ae],
                    [65, t.index, Xe]
                ]
            }

            function Ae(t) {
                return [
                    [276, t.d, Te],
                    [212, t.nd, Se],
                    [148, t.Xe, Re],
                    [84, t.Ue, Me]
                ]
            }

            function Te(t) {
                return [
                    [193, t.wa, Xe],
                    [144, t.ec, _e],
                    [65, t.id, Xe]
                ]
            }

            function Se(t) {
                return [
                    [193, t.wa, Xe],
                    [146, t.ub, 81, je, 144, _e],
                    [65, t.id, Xe]
                ]
            }

            function _e(t) {
                return [
                    [193, t.r, Fe],
                    [145, t.n, je],
                    [81, t.Jc, je]
                ]
            }

            function Re(t) {
                return [
                    [641, t.Ma, Fe],
                    [577, t.wa, Xe],
                    [513, t.ae, Xe],
                    [465, t.ec, je],
                    [402, t.ub, 81, je, 145, je],
                    [321, t.me, Xe],
                    [273, t.Rf, je],
                    [193, t.je, Xe],
                    [145, t.Qf, je],
                    [65, t.id, Xe]
                ]
            }

            function Me(t) {
                return [
                    [321, t.wa, Xe],
                    [257, t.je, Xe],
                    [193, t.ae, Xe],
                    [129, t.me, Xe],
                    [65, t.id, Xe]
                ]
            }

            function Ne(t) {
                return [
                    [321, t.ya, Ge],
                    [273, t.bd, je],
                    [193, t.L, Ue],
                    [148, t.content, De],
                    [80, t.Y, Pe]
                ]
            }

            function De(t) {
                return [
                    [513, t.hidden, Fe],
                    [449, t.oe, Xe],
                    [385, t.next, Xe],
                    [337, t.content, je],
                    [257, t.parent, Xe],
                    [210, t.attributes, 81, je, 145, je],
                    [145, t.name, je],
                    [65, t.id, Xe]
                ]
            }

            function Pe(t) {
                return [
                    [724, t.tm, Ie],
                    [656, t.location, Oe],
                    [592, t.viewport, Le],
                    [528, t.screen, Le],
                    [449, t.Bf, Fe],
                    [401, t.Ye, je],
                    [337, t.referrer, je],
                    [273, t.Dg, je],
                    [209, t.Ve, je],
                    [145, t.title, je],
                    [81, t.doctype, je]
                ]
            }

            function Ie(t) {
                return [
                    [133, t.scroll, Xe],
                    [65, t.target, Xe]
                ]
            }

            function Oe(t) {
                return [
                    [209, t.path, je],
                    [145, t.protocol, je],
                    [81, t.host, je]
                ]
            }

            function Le(t) {
                return [
                    [129, t.height, Xe],
                    [65, t.width, Xe]
                ]
            }

            function je(t) {
                var e = Eh({}, t, [], 0);
                return e ? [wh, e, t] : [Ye, 1, 0]
            }

            function Be(t) {
                return [qe, t.length, t]
            }

            function Fe(t) {
                return [Ye, 1, t ? 1 : 0]
            }

            function Ge(t) {
                var e = (t = Qe(t))[0],
                    n = t[1],
                    r = (n >>> 28 | e << 4) >>> 0;
                return [Ze, 0 === (e >>>= 24) ? 0 === r ? 16384 > n ? 128 > n ? 1 : 2 : 2097152 > n ? 3 : 4 : 16384 > r ? 128 > r ? 5 : 6 : 2097152 > r ? 7 : 8 : 128 > e ? 9 : 10, t]
            }

            function He(t) {
                return [We, 4, t]
            }

            function Ue(t) {
                return ze((t << 1 ^ t >> 31) >>> 0)
            }

            function Xe(t) {
                return 0 > t ? [Ze, 10, Qe(t)] : ze(t)
            }

            function ze(t) {
                return [Ve, 128 > t ? 1 : 16384 > t ? 2 : 2097152 > t ? 3 : 268435456 > t ? 4 : 5, t]
            }

            function Ve(t, e, n, r) {
                for (t = e; 127 < t;) n[r++] = 127 & t | 128, t >>>= 7;
                n[r] = t
            }

            function Ye(t, e, n, r) {
                n[r] = e
            }

            function qe(t, e, n, r) {
                for (t = 0; t < e.length; ++t) n[r + t] = e[t]
            }

            function Ke(t) {
                return function (e, n, r, i) {
                    for (var o, a = 0, u = 0; u < n.length; ++u)
                        if (128 > (e = n.charCodeAt(u))) t ? a += 1 : r[i++] = e;
                        else {
                            if (2048 > e) {
                                if (t) {
                                    a += 2;
                                    continue
                                }
                                r[i++] = e >> 6 | 192
                            } else {
                                if (55296 == (64512 & e) && 56320 == (64512 & (o = n.charCodeAt(u + 1)))) {
                                    if (t) {
                                        a += 4;
                                        continue
                                    }
                                    e = 65536 + ((1023 & e) << 10) + (1023 & o), ++u, r[i++] = e >> 18 | 240, r[i++] = e >> 12 & 63 | 128
                                } else {
                                    if (t) {
                                        a += 3;
                                        continue
                                    }
                                    r[i++] = e >> 12 | 224
                                }
                                r[i++] = e >> 6 & 63 | 128
                            }
                            r[i++] = 63 & e | 128
                        } return t ? a : i
                }
            }

            function We(t, e, n, r) {
                return yh(t)(t, e, n, r)
            }

            function Je(t, e, n, r) {
                var i = 0 > e ? 1 : 0;
                if (i && (e = -e), 0 === e) $e(0 < 1 / e ? 0 : 2147483648, n, r);
                else if (t.isNaN(e)) $e(2143289344, n, r);
                else if (34028234663852886e22 < e) $e((i << 31 | 2139095040) >>> 0, n, r);
                else if (11754943508222875e-54 > e) $e((i << 31 | t.Math.round(e / 1401298464324817e-60)) >>> 0, n, r);
                else {
                    var o = t.Math.floor(t.Math.log(e) / Math.LN2);
                    $e((i << 31 | o + 127 << 23 | 8388607 & Math.round(e * t.Math.pow(2, -o) * 8388608)) >>> 0, n, r)
                }
            }

            function $e(t, e, n) {
                e[n] = 255 & t, e[n + 1] = t >>> 8 & 255, e[n + 2] = t >>> 16 & 255, e[n + 3] = t >>> 24
            }

            function Ze(t, e, n, r) {
                for (t = e[0], e = e[1]; t;) n[r++] = 127 & e | 128, e = (e >>> 7 | t << 25) >>> 0, t >>>= 7;
                for (; 127 < e;) n[r++] = 127 & e | 128, e >>>= 7;
                n[r++] = e
            }

            function Qe(t) {
                if (!t) return [0, 0];
                var e = 0 > t;
                e && (t = -t);
                var n = t >>> 0;
                return t = (t - n) / 4294967296 >>> 0, e && (t = ~t >>> 0, n = ~n >>> 0, 4294967295 < ++n && (n = 0, 4294967295 < ++t && (t = 0))), [t, n]
            }

            function tn(t) {
                return mo(t) ? Hu(tn, t) : No(t) || "object" != typeof t ? t : bu((function (t, e) {
                    var n = e[0],
                        r = e[1],
                        i = mh[n];
                    return lu(i) && (i = n), r = Lu(i, gh) ? r : tn(r), i ? t[i] = r : t[n] = r, t
                }), {}, ku(t))
            }

            function en(t, e, n, r, i) {
                var o = pu(Ji, null, t, r, i);
                return n.then(o, (function (n) {
                    o(), Xr(t, e, n)
                }))
            }

            function nn(t, e, n, r) {
                return lh(e) ? Yo : xo(ko(Ko([t], r ? [n + ". Params:", r] : [n]), rn), io)
            }

            function rn() {
                var t = To(arguments),
                    e = t.slice(1);
                hh(t[0]).log.apply(rn, e)
            }

            function on(t) {
                var e = tf(t),
                    n = Gi(t);
                return e = "1" === e.l("debug"), n = -1 < n.href.indexOf("_ym_debug=1"), {
                    li: e,
                    xi: (t = t._ym_debug) || n,
                    isEnabled: Yu(Boolean, [e, t, n])
                }
            }

            function an(t, e) {
                var n = Gi(t),
                    r = n.href,
                    i = n.host,
                    o = -1;
                if (!Ho(e) || lu(e)) return r;
                if (-1 !== (n = e.replace(nu, "")).search(Wl)) return n;
                var a = n.charAt(0);
                return "?" === a && -1 === (o = r.search(/\?/)) || "#" === a && -1 === (o = r.search(/#/)) ? r + n : -1 !== o ? r.substr(0, o) + n : "/" !== a ? ((r = r.split("/"))[r.length - 1] = n, ou("/", r)) : -1 !== (o = r.indexOf(i)) ? r.substr(0, o + i.length) + n : ""
            }

            function un(t) {
                return {
                    ba: function (e, n) {
                        if (!e.H) return n();
                        var r = Mu(t).l("fid");
                        return !Kl && r && (Bn(e, "fid", r), Kl = !0), n()
                    }
                }
            }

            function cn(t) {
                return {
                    ba: function (e, n) {
                        var r = e.H;
                        if (r) {
                            var i = Mu(t).l("adBlockEnabled");
                            i && r.o("adb", i)
                        }
                        n()
                    }
                }
            }

            function sn(t) {
                return {
                    ba: function (e, n) {
                        jn(t) || n()
                    }
                }
            }

            function fn(t) {
                return t = Bc(t), Fl[t] || t
            }

            function ln(t, e, n) {
                return {
                    ba: function (e, r) {
                        ! function (t, e, n, r) {
                            var i = e.H;
                            if (n.Uj || !i) r();
                            else {
                                var o = Nr(t),
                                    a = aa(t, "");
                                if (r = go((function () {
                                        var t = Ol(o);
                                        t = "" + t + jl(t, a), i.o("gdpr", t), Bn(e, "gdpr", t)
                                    }), r), 3 === n.id) r();
                                else {
                                    var u = Mu(t),
                                        c = u.l("f1");
                                    if (c) c(r);
                                    else if (c = (c = Ol(o)) ? Hu(xo(Ks, yo), c.split(",")) : [], Ll(c)) r();
                                    else {
                                        var s = Uc(t),
                                            f = Gi(t),
                                            l = s && (-1 !== f.href.indexOf("yagdprcheck=1") || a.l("yaGdprCheck"));
                                        f = a.l("gdpr"), a.l("yandex_login") ? (c.push("13"), a.o("gdpr", zs, 525600)) : s ? Lu(f, Xs) ? f === Vs ? c.push("12") : c.push("3") : nc(t) || ic(t) ? c.push("17") : Ec(t) && c.push("28") : c.push("14");
                                        var h = xo(o, Dr);
                                        Ll(c) ? (Uu(h, c), r()) : (Il.push(r), u.o("f1", (function (e, n) {
                                            var r = 0;
                                            n && (r += (Di(t, n) || "").length);
                                            Il.push(e), 1e6 >= r && Il.push(e)
                                        })), (0, Nl[0])(t).then(yu("params.eu")).then((function (e) {
                                            if (e || l) {
                                                if (a.o("gdpr_popup", Vs), function (t, e) {
                                                        var n = Nf(t, e);
                                                        n && n.Z.C(["isYandex"], (function () {
                                                            var e;
                                                            return (e = {
                                                                type: "isYandex"
                                                            }).isYandex = Uc(t), e
                                                        }))
                                                    }(t, n), dc(t)) return function (t, e, n) {
                                                    var r = Nf(t, n);
                                                    return new Zc((function (n) {
                                                        var i;
                                                        if (r) {
                                                            var o = r.Z,
                                                                a = go(xo("4", e), xo(null, n)),
                                                                u = Or(t, a, 2e3, "gdp.f.t");
                                                            r.mg((i = {}, i.type = "isYandex", i)).then((function (t) {
                                                                t.isYandex ? (e("5"), o.C(Ko(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], qs), (function (t) {
                                                                    n({
                                                                        value: Sr(t[1].type)
                                                                    })
                                                                }))) : (e("6"), n(null))
                                                            })).catch(a).then(ko([t, u], Qi))
                                                        } else n({
                                                            value: Vs,
                                                            Sd: !0
                                                        })
                                                    }))
                                                }(t, h, n);
                                                var r = _r(t, o);
                                                if (r) return (e = function (t, e, n, r) {
                                                    var i = function (t, e) {
                                                            var n = e || hc(t);
                                                            return Lu(n, Dl) ? n : "en"
                                                        }(t, r.Vj),
                                                        o = Nf(t, r);
                                                    if (!o) return Zc.resolve({
                                                        value: zs,
                                                        Sd: !0
                                                    });
                                                    var a = ai(t, {
                                                        src: "https://yastatic.net/s3/gdpr/popup/v2/" + i + "_inversed_buttons.js"
                                                    });
                                                    return new Zc((function (t, r) {
                                                        a ? (e("7"), a.onerror = function () {
                                                            var n;
                                                            e("9"), o.lg(((n = {}).type = "GDPR-ok-view-default", n)), t(null)
                                                        }, a.onload = function () {
                                                            e("10"), n.C(Ko(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], qs), (function (e) {
                                                                var n;
                                                                e = e.type, o.lg(((n = {}).type = e, n)), t({
                                                                    value: Sr(e)
                                                                })
                                                            }))
                                                        }) : (e("9"), r(ji("gdp.e")))
                                                    }))
                                                }(t, h, r, n)).then(ko([t, n], hn)), e
                                            }
                                            return e || h("8"), Zc.resolve({
                                                value: zs,
                                                Sd: !0
                                            })
                                        })).then((function (e) {
                                            if (a.ic("gdpr_popup"), e) {
                                                var n = e.value;
                                                e = e.Sd, Lu(n, Xs) && a.o("gdpr", n, e ? void 0 : 525600)
                                            }
                                            n = Jn(Il, io), Yn(t, n, 20)(Wn(Fr(t, "gdr"), Yo)), u.o("f1", io)
                                        })).catch(Fr(t, "gdp.a")))
                                    }
                                }
                            }
                        }(t, e, n, r)
                    }
                }
            }

            function hn(t, e) {
                if (Uc(t)) {
                    var n = Nr(t),
                        r = dn(t, e);
                    r = r && r.params, n = Hu(xo(Pl, yo), Js(n)), r && n.length && r("gdpr", Pu(Boolean, n))
                }
            }

            function dn(t, e) {
                return Mu(t).l("counters", {})[Nc(e)]
            }

            function pn() {
                return function (t, e, n) {
                    return {
                        ba: function (e, r) {
                            var i, o = e.H,
                                a = e.F;
                            if (o && a) {
                                var u = Lu(a["wv-type"], Rl);
                                if (!a["wv-type"] || u) {
                                    var c = of (t);
                                    o.De("rqnl", 1), o = o.b();
                                    for (var s = _l(t), f = 1; s[f];) f += 1;
                                    e.Nb = f, s[f] = ((i = {}).protocol = Ac.Ka, i.host = "mc.yandex.ru", i.resource = u ? "webvisor" : "watch", i.postParams = e.$, i.time = c(pr), i.counterType = n.aa, i.params = a, i.browserInfo = o, i.counterId = n.id, i.ghid = Ln(t), i), mn(t)
                                }
                            }
                            r()
                        },
                        Ia: function (e, n) {
                            vn(t, e), n()
                        }
                    }
                }
            }

            function vn(t, e) {
                var n = _l(t);
                e.H && !fu(n) && (delete n[e.Nb], mn(t))
            }

            function mn(t) {
                var e = _l(t);
                nf(t).o("retryReqs", e)
            }

            function gn(t, e, n) {
                var r = Hn(t, e, n);
                return function (e, n, i) {
                    var o;
                    (e = Tu({
                        H: Ic()
                    }, e)).F || (e.F = {});
                    var a = e.F;
                    if (a.wmode = "0", a["wv-part"] = "" + i, a["wv-hit"] = a["wv-hit"] || "" + Ln(t), a["page-url"] = a["page-url"] || t.location.href, a.rn = a.rn || "" + zi(t), !a["wv-type"]) {
                        i = e.af;
                        var u = "4",
                            c = "2";
                        e.Hf && (u = "5", c = "3"), a["wv-type"] = i ? u : c
                    }
                    return n = "webvisor/" + n.id, r(Tu(e, {
                        F: a
                    }), n, {
                        Lb: (o = {}, o["Content-Type"] = "text/plain", o),
                        Gg: "POST"
                    })
                }
            }

            function bn(t, e, n, r) {
                if (e = r.l("cc"), r = ko(["cc", ""], r.o), e) {
                    var i = e.split("&");
                    if (e = i[0], (i = (i = i[1]) && $u(i)) && 1440 < of (t)(dr) - i) return r();
                    n.o("cc", e)
                } else au(0)(e) || r()
            }

            function yn(t, e, n, r) {
                return wn(t, e, (function (e) {
                    if ("0" === yo(e, "settings.pcs") && !Zu(t))
                        if (e = r.l("zzlc"), lu(e) || fu(e) || "na" === e) {
                            e = "ru";
                            var i = _n(t, 68),
                                o = Rn(t, 79);
                            if ((i || o) && (e = "md"), i = hs(t)) {
                                var a = i("iframe");
                                if (Tu(a.style, {
                                        display: "none",
                                        width: "1px",
                                        height: "1px",
                                        visibility: "hidden"
                                    }), a.src = "https://mc.yandex." + e + function (t, e) {
                                        void 0 === e && (e = !1);
                                        var n = t,
                                            r = "",
                                            i = 0;
                                        if (!n) return "";
                                        for (e && (n = Nn(n)); n.length % 4;) n += "=";
                                        do {
                                            var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n.charAt(i++)),
                                                a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n.charAt(i++)),
                                                u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n.charAt(i++)),
                                                c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n.charAt(i++));
                                            if (0 > o || 0 > a || 0 > u || 0 > c) return null;
                                            var s = o << 18 | a << 12 | u << 6 | c;
                                            o = s >> 16 & 255, a = s >> 8 & 255, s &= 255, r = 64 === u ? r + String.fromCharCode(o) : 64 === c ? r + String.fromCharCode(o, a) : r + String.fromCharCode(o, a, s)
                                        } while (i < n.length);
                                        return r
                                    }("L21ldHJpa2EvenpsYy5odG1s"), e = Ci(t)) {
                                    e.appendChild(a);
                                    var u = 0,
                                        c = Jc(t).C(t, ["message"], Fr(t, "zz.m", (function (e) {
                                            (e = yo(e, "data")) && e.substr && "__ym__zz" === e.substr(0, 8) && (Ti(a), e = e.substr(8), r.o("zzlc", e), n.o("zzlc", e), c(), Qi(t, u))
                                        })));
                                    u = Or(t, go(c, xo(a, Ti)), 3e3)
                                }
                            }
                        } else n.o("zzlc", e)
                }))
            }

            function wn(t, e, n) {
                return t = Nc(e), Tl()(Al(t)).then(n)
            }

            function En(t, e, n) {
                return e = Nc(e), t = vr(t), n = Tu({
                    Ih: t(pr)
                }, n), Tl()(function (t, e) {
                    return function (n) {
                        var r = n[t];
                        r ? (r.hj = e, r.cg = !0, r.bg ? r.bg(e) : r.Qa = Zc.resolve(e)) : n[t] = {
                            Qa: Zc.resolve(e),
                            hj: e,
                            cg: !0
                        }
                    }
                }(e, n))
            }

            function Cn(t, e, n) {
                var r, i;
                if (e = Ou(xo(t, yo), kl), e = lu(e) ? null : yo(t, e), yo(t, "navigator.onLine") && e && e && yo(e, "prototype.constructor.name")) {
                    var o = new e(((r = {}).iceServers = [], r));
                    Do(t = yo(o, "createDataChannel")) && (pu(t, o, "y.metrika")(), Do(t = yo(o, "createOffer")) && !t.length && (Do(r = yo(t = pu(t, o)(), "then")) && pu(r, t, (function (t) {
                        var e = yo(o, "setLocalDescription");
                        Do(e) && pu(e, o, t, Yo, Yo)()
                    }))(), Tu(o, ((i = {}).onicecandidate = function () {
                        var t, e = yo(o, "close");
                        if (Do(e)) {
                            e = pu(e, o);
                            try {
                                var r = (t = yo(o, "localDescription.sdp")) && t.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (t) {
                                return o.onicecandidate = Yo, void("closed" !== o.iceConnectionState && e())
                            }
                            r && 0 < r.length && (t = Wo(r[1]), n.o("pp", t)), o.onicecandidate = Yo, e()
                        }
                    }, i))))
                }
            }

            function xn(t, e, n) {
                var r, i = Mf(t, e);
                if (i) {
                    i.Z.C(["gpu-get"], (function () {
                        var t;
                        return (t = {}).type = "gpu-get", t.pu = n.l("pu"), t
                    }));
                    var o = yo(t, "opener");
                    if (o) {
                        var a = Or(t, ko([t, e, n], kn), 200, "pu.m");
                        i.ze(o, ((r = {}).type = "gpu-get", r), (function (e, r) {
                            var i = yo(r, "pu");
                            i && (Qi(t, a), n.o("pu", i))
                        }))
                    } else kn(t, e, n)
                }
            }

            function kn(t, e, n) {
                var r = yo(t, "location.host");
                t = uf(t, e), n.o("pu", "" + Wo(r) + t)
            }

            function An(t, e, n) {
                return {
                    ba: function (e, r) {
                        var i = e.H;
                        if (i && (!n || n.kg)) {
                            var o = t.document.title;
                            e.title && (o = e.title);
                            var a = no("getElementsByTagName", t.document);
                            "string" != typeof o && a && (o = (o = yo(o = a("title"), "0.innerHtml")) ? o : ""), o = o.slice(0, Ac.Pg), i.o("t", o)
                        }
                        r()
                    }
                }
            }

            function Tn(t) {
                return void 0 === t && (t = xl),
                    function (e, n, r) {
                        return {
                            ba: function (n, i) {
                                var o = n.H,
                                    a = n.F;
                                o && a && Uu((function (t) {
                                    var i = ml[t],
                                        a = "bi",
                                        u = o;
                                    i || (i = If[t], a = "tel", u = Bn(n)), i && (i = Br(a + ":" + t, i, null)(e, r, n), u.De(t, i))
                                }), t), i()
                            }
                        }
                    }
            }

            function Sn(t, e, n, r, i, o, a, u) {
                var c = n.l(o);
                return No(c) && (n.o(o, a), i(t, e, n, r), c = n.l(o, a)), lu(u) || u.De(o, "" + c), c
            }

            function _n(t, e) {
                if (Fu(t) && e) {
                    var n = Qu(t).match(qf);
                    if (n && n.length) return +n[1] >= e
                }
                return !1
            }

            function Rn(t, e) {
                var n = Qu(t);
                return !!(n && (n = n.match(Jf)) && 1 < n.length) && $u(n[1]) >= e
            }

            function Mn(t, e) {
                void 0 === e && (e = !1);
                for (var n = t.length, r = n - n % 3, i = [], o = 0; o < r; o += 3) {
                    var a = (t[o] << 16) + (t[o + 1] << 8) + t[o + 2];
                    i.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [a >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [a >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [a >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [63 & a])
                }
                switch (n - r) {
                    case 1:
                        n = t[r] << 4, i.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [n >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [63 & n], "=", "=");
                        break;
                    case 2:
                        n = (t[r] << 10) + (t[r + 1] << 2), i.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [n >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [n >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [63 & n], "=")
                }
                return i = i.join(""), e ? Nn(i, !0) : i
            }

            function Nn(t, e) {
                return void 0 === e && (e = !1), t ? t.replace(e ? /[+/=]/g : /[-*_]/g, (function (t) {
                    return zf[t] || t
                })) : ""
            }

            function Dn(t, e, n) {
                return {
                    ba: function (t, e) {
                        var r = Ff(n),
                            i = t.H;
                        i ? i.l("pv") && !i.l("ar") ? (r.kf = i, e()) : r.zc ? r.zc.push(e) : e() : e()
                    },
                    Ia: function (e, r) {
                        var i = e.H,
                            o = e.kj,
                            a = Ff(n);
                        if (i) {
                            var u = a.zc;
                            a.kf === i && u && (o && Mu(t).o("isEU", yo(o, "settings.eu")), Uu(io, u), a.zc = null)
                        }
                        r()
                    }
                }
            }

            function Pn(t, e) {
                var n = Mf(t, e),
                    r = [],
                    i = [];
                if (!n) return null;
                var o = ko([t, n.ze], On),
                    a = xo(o, In);
                return n.Z.C(["initToParent"], (function (t) {
                    a(r, n.wb[t[1].counterId])
                })).C(["parentConnect"], (function (t) {
                    a(i, n.Jb[t[1].counterId])
                })), {
                    Z: n.Z,
                    Em: function (e, r) {
                        return new Zc((function (i, o) {
                            n.ze(e, r, (function (t, e) {
                                i([t, e])
                            })), Or(t, xo(ji(), o), 5100, "is.o")
                        }))
                    },
                    lg: function (t) {
                        var e = {
                            ng: [],
                            Le: [],
                            data: t
                        };
                        return r.push(e), o(n.wb, e, t)
                    },
                    mg: function (t) {
                        var e = {
                            ng: [],
                            Le: [],
                            data: t
                        };
                        return i.push(e), o(n.Jb, e, t)
                    }
                }
            }

            function In(t, e, n) {
                e = Pu((function (t) {
                    return !Lu(n.info.counterId, t.Le)
                }), e), Uu((function (e) {
                    var r;
                    n.info.counterId && t(((r = {})[n.info.counterId] = n, r), e, e.data)
                }), e)
            }

            function On(t, e, n, r, i) {
                return new Zc((function (o, a) {
                    var u = Au(n),
                        c = go(r.resolve ? r.resolve : co, uu(o)),
                        s = go(r.reject ? r.reject : co, uu(a));
                    r.resolve = c, r.reject = s, Uu((function (o) {
                        var a;
                        r.Le.push(o);
                        var u = n[o],
                            c = Or(t, xo(ji(), s), 5100, "is.m");
                        e(u.window, Tu(i, ((a = {}).toCounter = $u(o), a)), (function (e, n) {
                            Qi(t, c), r.ng.push(o), r.resolve && r.resolve(n)
                        }))
                    }), u)
                })).catch(Fr(t, "if.b"))
            }

            function Ln(t) {
                var e = Mu(t),
                    n = e.l("hitId");
                return n || (n = zi(t), e.o("hitId", n)), n
            }

            function jn(t) {
                return !!Mu(t).l("oo") || Af(t)
            }

            function Bn(t, e, n) {
                return void 0 === n && (n = null), t.cd || (t.cd = bf()), e && !fu(n) && t.cd.o(e, n), t.cd
            }

            function Fn(t) {
                return {
                    ba: function (e, n) {
                        var r = t.document,
                            i = e.H;
                        if (i && Xi(t)) {
                            var o = Jc(t),
                                a = function (e) {
                                    return Xi(t) || (o.Sb(r, gf, a), n()), e
                                };
                            o.C(r, gf, a), i.o("pr", "1")
                        } else n()
                    }
                }
            }

            function Gn(t, e, n) {
                var r = Hn(t, e, n);
                return function (e, n) {
                    var i, o = Tu({
                            H: Ic()
                        }, e),
                        a = o.F,
                        u = o.H;
                    if ((i = {})["page-url"] = a && a["page-url"] || "", i.charset = "utf-8", a = i, "0" !== n.aa && (a["cnt-class"] = n.aa), i = Tu(o, {
                            F: Tu(o.F || {}, a)
                        }), o = "", i.H) {
                        a = Nc(n);
                        var c = (a = cf(n)[a] || {}).status;
                        "rt" === a.Kb && c ? (1 === c && (o = sf(t, n) + "."), i.H.o("rt", c)) : o = ""
                    }
                    return Tu(i, {
                        Cf: o
                    }), r(i, "watch/" + n.id, {
                        Re: !(!u.l("pv") || u.l("ar") || u.l("wh"))
                    })
                }
            }

            function Hn(t, e, n) {
                var r = ar(t, e);
                return function (e, i, o) {
                    void 0 === o && (o = {});
                    var a = function (t) {
                        var e = "mc.yandex.ru",
                            n = yo(t, "document.referrer");
                        return n ? ((t = ua(t, n).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/)) ? (t = t[0].split("yandex").reverse()[0].substring(1), t = !!Lu(t, jc) && t) : t = !1, "mc.yandex." + (t || "ru")) : e
                    }(t);
                    return e.Cf && (a = "" + e.Cf + a), i = [Ac.Ka + "//" + (a || "mc.yandex.ru") + "/" + i], Xn(t, n, e, !0).then(ko([e, i, o], r)).then((function (r) {
                        return e.kj = r.Vc, Xn(t, n, e).then(xo(r.Vc, co))
                    }))
                }
            }

            function Un(t) {
                return (t.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function Xn(t, e, n, r) {
                return void 0 === r && (r = !1), new Zc((function (t, i) {
                    function o(e, n) {
                        n(), t()
                    }
                    var a = e.slice();
                    a.push({
                        ba: o,
                        Ia: o
                    });
                    var u = Jn(a, (function (t, e) {
                        var o = r ? t.ba : t.Ia;
                        if (o) try {
                            o(n, e)
                        } catch (t) {
                            u(ir), i(t)
                        } else e()
                    }));
                    u($n)
                }))
            }

            function zn(t, e, n) {
                var r = n || "as";
                if (t.postMessage && !t.attachEvent) {
                    n = Jc(t);
                    var i = "__ym__promise_" + zi(t) + "_" + zi(t),
                        o = Yo;
                    r = Fr(t, r, (function (t) {
                        try {
                            var n = t.data
                        } catch (t) {
                            return
                        }
                        n === i && (o(), t.stopPropagation && t.stopPropagation(), e())
                    })), o = n.C(t, ["message"], r), t.postMessage(i, "*")
                } else Or(t, e, 0, r)
            }

            function Vn(t, e, n, r, i) {
                void 0 === r && (r = 1), void 0 === i && (i = "itc"), Yn(t, e = Jn(e, n), r)(Wn(Fr(t, i), Yo))
            }

            function Yn(t, e, n, r) {
                return void 0 === n && (n = 1), void 0 === r && (r = Zn), vf = 1 / 0 === n, su((function (i, o) {
                    var a = [];
                    ! function (t) {
                        pf ? df.push(t) : (pf = !0, t())
                    }((function u() {
                        try {
                            var c = e(r(t, n));
                            a = a.concat(c)
                        } catch (t) {
                            return i(t)
                        }
                        if (e(nr), e(or)) return o(a), qn(t);
                        vf ? (e(r(t, 1e4)), o(a), qn(t)) : Or(t, u, 100)
                    }))
                }))
            }

            function qn(t) {
                if (df.length) {
                    var e = df.shift();
                    vf ? e() : Or(t, e, 100)
                } else pf = !1
            }

            function Kn(t) {
                return su((function (e, n) {
                    n(t)
                }))
            }

            function Wn(t, e) {
                return function (n) {
                    return n(t, e)
                }
            }

            function Jn(t, e) {
                return void 0 === e && (e = co), su({
                    Na: t,
                    Td: e,
                    Ge: !1,
                    oa: 0
                })
            }

            function $n(t) {
                function e() {
                    function e() {
                        n = !0, t.oa += 1
                    }
                    n = !1, t.Td(t.Na[t.oa], (function () {
                        e()
                    })), n || (t.oa += 1, e = pu($n, null, t))
                }
                for (var n = !0; !or(t) && n;) e()
            }

            function Zn(t, e) {
                return function (n) {
                    var r = of (t),
                        i = r(pr);
                    return ff((function (t, n) {
                        r(pr) - i >= e && n(rr)
                    }))(n)
                }
            }

            function Qn(t, e) {
                return function (n) {
                    var r = of (t),
                        i = r(pr);
                    return tr((function (t) {
                        r(pr) - i >= e && rr(t)
                    }))(n)
                }
            }

            function tr(t) {
                return function (e) {
                    for (var n; e.Na.length && !or(e);) n = e.Na.pop(), n = e.Td(n, e.Na), t(e);
                    return n
                }
            }

            function er(t) {
                or(t) && $i(us("i"));
                var e = t.Td(t.Na[t.oa]);
                return t.oa += 1, e
            }

            function nr(t) {
                t.Ge = !1
            }

            function rr(t) {
                t.Ge = !0
            }

            function ir(t) {
                t.oa = t.Na.length
            }

            function or(t) {
                return t.Ge || t.Na.length <= t.oa
            }

            function ar(t, e) {
                return function (n, r, i) {
                    return void 0 === i && (i = {}), ur(t, e, r, n, Tu(i, {
                        ua: n.ua || [],
                        $: i.$ || n.$
                    }))
                }
            }

            function ur(t, e, n, r, i, o, a) {
                var u;
                void 0 === o && (o = 0), void 0 === a && (a = 0);
                var c = Tu({}, i),
                    s = e[a],
                    f = s[0];
                s = s[1];
                var l = Tu({}, r.F),
                    h = of (t);
                return r.H && (l["browser-info"] = Ic(r.H.b()).o("st", h(hr)).Da()), !l.t && (h = r.cd) && (h.o("ti", f), l.t = h.Da()), h = n[o], c.Lb && c.Lb["Content-Type"] || !c.$ || (c.Lb = Tu({}, c.Lb, ((u = {})["Content-Type"] = "application/x-www-form-urlencoded", u)), c.$ = "site-info=" + Oi(c.$)), c.Gg = c.$ ? "POST" : "GET", c.Mb = l, c.ua.push(f), s(h + (r.Mi ? "/1" : ""), c).then((function (t) {
                    return {
                        Vc: t,
                        Oj: o
                    }
                })).catch((function (u) {
                    var c = a + 1 >= e.length,
                        s = o + 1 >= n.length;
                    return c && s && $i(u), ur(t, e, n, r, i, !s && c ? o + 1 : o, c ? 0 : a + 1)
                }))
            }

            function cr(t, e) {
                var n = e.Xd,
                    r = n || "uid";
                n = n ? t.location.hostname : void 0;
                var i = tf(t),
                    o = nf(t),
                    a = of (t),
                    u = a(hr),
                    c = sr(t, e),
                    s = c[0];
                c = c[1];
                var f = i.l("d");
                af(t, e);
                var l = !1;
                return !c && s && (c = s, l = !0), c ? (!f || 15768e3 < u - $u(f)) && (l = !0) : (c = ou("", [a(hr), zi(t)]), l = !0), l && !e.gb && (i.o(r, c, 525600, n), i.o("d", "" + u, 525600, n)), o.o(r, c), c
            }

            function sr(t, e) {
                var n = nf(t),
                    r = tf(t),
                    i = e.Xd || "uid";
                return [n.l(i), r.l(i)]
            }

            function fr(t) {
                return t = of (t), Math.round(t(lr) / 50)
            }

            function lr(t) {
                var e = t.ra,
                    n = e[1];
                return t = e[0] && n ? n() : pr(t) - t.si, Math.round(t)
            }

            function hr(t) {
                return Math.round(pr(t) / 1e3)
            }

            function dr(t) {
                return Math.floor(pr(t) / 1e3 / 60)
            }

            function pr(t) {
                var e = t.Ne;
                return 0 !== e ? e : Gr(t.b, t.ra)
            }

            function vr(t) {
                var e = Jc(t),
                    n = Hr(t),
                    r = {
                        b: t,
                        Ne: 0,
                        ra: n,
                        si: Gr(t, n)
                    },
                    i = n[1];
                return n[0] && i || e.C(t, ["beforeunload", "unload"], (function () {
                    0 === r.Ne && (r.Ne = Gr(t, r.ra))
                })), su(r)
            }

            function mr(t) {
                return (10 > t ? "0" : "") + t
            }

            function gr(t, e, n) {
                void 0 === e && (e = ""), void 0 === n && (n = "_ym");
                var r = "" + n + e + "_";
                return {
                    Qd: ef(t),
                    l: function (e, n) {
                        var i = yr(t, "" + r + e);
                        return fu(i) && !lu(n) ? n : i
                    },
                    o: function (e, n) {
                        return br(t, "" + r + e, n), this
                    },
                    ic: function (e) {
                        return wr(t, "" + r + e), this
                    }
                }
            }

            function br(t, e, n) {
                var r = Er(t);
                if (t = Di(t, n), !fu(t)) try {
                    r.setItem(e, t)
                } catch (t) {}
            }

            function yr(t, e) {
                var n = Er(t);
                try {
                    return ia(t, n.getItem(e))
                } catch (t) {}
                return null
            }

            function wr(t, e) {
                var n = Er(t);
                try {
                    n.removeItem(e)
                } catch (t) {}
            }

            function Er(t) {
                try {
                    return t.localStorage
                } catch (t) {}
                return null
            }

            function Cr(t, e, n) {
                xr(t, "metrika_enabled", "1", 0, e, n, !0);
                var r = Ar(t);
                return (r = r && r.metrika_enabled) && oa(t, "metrika_enabled", e, n, !0), !!r
            }

            function xr(t, e, n, r, i, o, a) {
                if (void 0 === a && (a = !1), Tr(t, kr, e)) {
                    var u = e + "=" + encodeURIComponent(n) + ";";
                    if (u += "" + qc(t), r) {
                        var c = new Date;
                        c.setTime(c.getTime() + 6e4 * r), u += "expires=" + c.toUTCString() + ";"
                    }
                    i && (u += "domain=" + (r = i.replace(Zs, "")) + ";");
                    try {
                        t.document.cookie = u + "path=" + (o || "/"), a || ($s(t)[e] = n)
                    } catch (t) {}
                }
            }

            function kr(t, e) {
                var n = $s(t);
                return n && n[e] || null
            }

            function Ar(t) {
                try {
                    var e = t.document.cookie;
                    if (!No(e)) {
                        var n = {};
                        return Uu((function (t) {
                            var e = (t = t.split("="))[1];
                            n[jo(t[0])] = jo(Ii(e))
                        }), (e || "").split(";")), n
                    }
                } catch (t) {}
                return null
            }

            function Tr(t, e, n) {
                return Lu(n, ["gdpr", "gdpr_popup", "metrika_enabled"]) ? t = !0 : (n = Nr(t), n = Js(n), t = e(t, "gdpr"), t = !!Pu(ju(Ws), n).length || Lu(t, [zs, Ys])), t
            }

            function Sr(t) {
                return Lu(t, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"]) ? zs : (t = t.replace("GDPR-ok-view-detailed-", ""), Lu(t, Xs) ? t : zs)
            }

            function _r(t, e, n) {
                void 0 === n && (n = co);
                var r = Lr(t);
                n(r);
                var i = xo(r, Rr);
                return Mr(t, e, (function (t) {
                    t.qa.C(i)
                })), r
            }

            function Rr(t, e) {
                var n = yo(e, "ymetrikaEvent");
                n && t.N(yo(n, "type"), n)
            }

            function Mr(t, e, n, r) {
                void 0 === n && (n = Yo), void 0 === r && (r = !1);
                var i = jr(t);
                if (e && Do(e.push)) {
                    var o = e.push;
                    return e.push = function () {
                        var t = To(arguments),
                            n = t[0];
                        return r && i.N(n), t = o.apply(e, t), r || i.N(n), t
                    }, n(t = {
                        qa: i,
                        unsubscribe: function () {
                            e.push = o
                        }
                    }), Uu(i.N, e), t
                }
            }

            function Nr(t) {
                var e = (t = Mu(t)).l("dataLayer", []);
                return t.o("dataLayer", e), e
            }

            function Dr(t, e) {
                var n, r;
                t.push(((n = {}).ymetrikaEvent = ((r = {}).type = e, r), n))
            }

            function Pr(t, e, n) {
                function r() {
                    i = 0, u && (u = !1, i = Or(t, r, n), a.N(o))
                }
                var i, o, a = jr(t),
                    u = !1;
                return e.C((function (t) {
                    return u = !0, o = t, i || r(), Yo
                })), a
            }

            function Ir(t, e) {
                return t.clearInterval(e)
            }

            function Or(t, e, n, r) {
                return Zi(t, Fr(t, "d.err." + (r || "def"), e), n)
            }

            function Lr(t) {
                var e = {};
                return {
                    C: function (n, r) {
                        return Uu((function (n) {
                            yo(e, n) || (e[n] = jr(t)), e[n].C(r)
                        }), n), this
                    },
                    da: function (t, n) {
                        return Uu((function (t) {
                            yo(e, t) && e[t].da(n)
                        }), t), this
                    },
                    N: function (n, r) {
                        return yo(e, n) ? Fr(t, "e." + r, e[n].N)(r) : []
                    }
                }
            }

            function jr(t) {
                var e = [],
                    n = {};
                return n.wm = e, n.C = go(Co("push", e), xo(n, co)), n.da = go(Po(so(t))(e), Po(Co("splice", e))(1), xo(n, co)), n.N = go(co, Po(io), Vu(e)), n
            }

            function Br(t, e, n) {
                return function () {
                    return Fr(arguments[0], t, e, n).apply(this, arguments)
                }
            }

            function Fr(t, e, n, r, i) {
                var o = n || $i;
                return function () {
                    var n = r;
                    try {
                        n = o.apply(i || null, arguments)
                    } catch (n) {
                        Xr(t, e, n)
                    }
                    return n
                }
            }

            function Gr(t, e) {
                var n = e || Hr(t),
                    r = n[0];
                return n = n[1], !isNaN(r) && Do(n) ? Math.round(n() + r) : t.Date.now ? t.Date.now() : (new t.Date).getTime()
            }

            function Hr(t) {
                var e = yo(t = Ur(t), "timing.navigationStart"),
                    n = yo(t, "now");
                return n && (n = pu(n, t)), [e, n]
            }

            function Ur(t) {
                return yo(t, "performance") || yo(t, "webkitPerformance")
            }

            function Xr(t, e, n) {
                var r, i, o, a, u;
                if (!(.01 >= t.Math.random())) {
                    var c = "u.a.e",
                        s = "";
                    if (n && ("object" == typeof n ? (c = n.message, s = "string" == typeof n.stack && n.stack.replace(/\n/g, "\\n") || "n.s.e.s") : c = "" + n), !(ss(c) || Yu(go(Co("indexOf", c), au(-1), ao), as) || cs(c) && .1 <= t.Math.random())) {
                        (r = {}).jserrs = ((i = {})[Ac.Ja] = ((o = {})[c] = ((a = {})[e] = ((u = {})[t.location.href] = s, u), a), o), i), e = r;
                        t: {
                            var f;r = Ac.Ka + "//mc.yandex.ru/watch/" + Ac.Mg;
                            try {
                                var l = Us(t, "er")[0],
                                    h = (void 0 === l ? [] : l)[1],
                                    d = void 0 === h ? null : h
                            } catch (t) {
                                break t
                            }(f = {})["browser-info"] = "ar:1:pv:1:v:" + Ac.Ja + ":vf:" + Qa.version,
                            f["page-url"] = t.location && "" + t.location.href,
                            l = f,
                            t = Di(t, e),
                            d && t && d(r, {
                                Mb: l,
                                ua: [],
                                $: "site-info=" + Oi(t)
                            }).catch(Yo)
                        }
                    }
                }
            }

            function zr(t) {
                return Hu((function (e) {
                    return !e || Lu(e, t) ? e : 0
                }), Is)
            }

            function Vr(t) {
                return !ic(t) && qr(t)
            }

            function Yr(t) {
                return !!hs(t) && xo(t, Wr)
            }

            function qr(t) {
                var e = yo(t, "navigator.sendBeacon");
                return !(!e || !zo("sendBeacon", e)) && ko([t, pu(e, yo(t, "navigator"))], Kr)
            }

            function Kr(t, e, n, r) {
                return new Zc((function (i, o) {
                    if (!yo(t, "navigator.onLine")) return o();
                    var a = Tu(r.Mb, {
                        "force-urlencoded": 1
                    });
                    return 2e3 < (a = n + "?" + Pi(a) + (r.$ ? "&" + r.$ : "")).length ? o(ji("sb.tlq")) : e(a) ? i("") : o()
                }))
            }

            function Wr(t, e, n) {
                return new Zc((function (r, i) {
                    var o, a, u = "_ymjsp" + zi(t),
                        c = Tu(((o = {}).callback = u, o), n.Mb),
                        s = ko([t, u], Jr);
                    t[u] = function (t) {
                        try {
                            s(), Ti(f), r(t)
                        } catch (t) {
                            i(t)
                        }
                    }, c.wmode = "5";
                    var f = ai(t, ((a = {}).src = Ni(e, n, c), a));
                    if (!f) return s(), i(us("jp.s"));
                    o = go(o = xo(f, Ti), xo(ji(n.ua), i)), a = Zi(t, o, n.Rb || 1e4), a = ko([t, a], Qi), f.onload = a, f.onerror = go(s, a, o)
                }))
            }

            function Jr(t, e) {
                try {
                    delete t[e]
                } catch (n) {
                    t[e] = void 0
                }
            }

            function $r(t) {
                var e = hs(t);
                return !!e && ko([t, e], Zr)
            }

            function Zr(t, e, n, r) {
                return new Zc((function (i, o) {
                    var a = Ci(t),
                        u = e("img"),
                        c = go(xo(u, Ti), xo(ji(r.ua), o)),
                        s = Zi(t, c, r.Rb || 3e3);
                    u.onerror = c, u.onload = go(xo(u, Ti), xo(null, i), ko([t, s], Qi)), delete(c = Tu({}, r.Mb)).wmode, u.src = Ni(n, r, c), rc(t) && (Tu(u.style, {
                        position: "absolute",
                        visibility: "hidden",
                        width: "0px",
                        height: "0px"
                    }), a.appendChild(u))
                }))
            }

            function Qr(t, e, n) {
                var r = vi(e);
                return r && ei(t, e, Pu(Boolean, ["p", Ps[r], "c"]), xo(t, Ds), n)
            }

            function ti(t, e) {
                var n = di(Ns, t, e);
                if (!n) {
                    var r = di("div", t, e);
                    r && (oi(Ns + ",div", t, r).length || (n = r))
                }
                return n
            }

            function ei(t, e, n, r, i) {
                return bu((function (n, o) {
                    var a = null;
                    return o in Ss ? a = e.getAttribute && e.getAttribute(Ss[o]) : o in _s && (a = "p" === o ? _s[o](t, e, i) : "c" === o ? _s[o](t, e, r) : _s[o](t, e)), a && (a = a.slice(0, As[o] || 100), n[o] = Ts[o] ? "" + Wo(a) : a), n
                }), {}, n)
            }

            function ni(t, e, n) {
                if (t.document.querySelectorAll && zo("querySelectorAll", yo(t, "Element.prototype.querySelectorAll"))) return Ki(n.querySelectorAll(e));
                var r = ri(e.split(" "), n);
                return Pu((function (e, n) {
                    return so(t)(e, r) === n
                }), r)
            }

            function ri(t, e) {
                var n = Ko(t),
                    r = n.shift();
                return r ? (r = e.getElementsByTagName(r), n.length ? Xu(xo(n, ri), Ki(r)) : Ki(r)) : []
            }

            function ii(t, e, n) {
                return e.querySelector ? e.querySelector(n) : (t = oi(n, t, e)) && t.length ? t[0] : null
            }

            function oi(t, e, n) {
                return n && (t = n.querySelectorAll(t)) ? Ki(t) : []
            }

            function ai(t, e) {
                var n = t.document,
                    r = Tu({
                        type: "text/javascript",
                        charset: "utf-8",
                        async: !0
                    }, e),
                    i = hs(t);
                if (i) {
                    var o = i("script");
                    Eu(ku, zu((function (t) {
                        var e = t[0];
                        t = t[1], "async" === e && t ? o.async = !0 : o[e] = t
                    })))(r);
                    try {
                        var a = no("getElementsByTagName", n),
                            u = a("head")[0];
                        if (!u) {
                            var c = a("html")[0];
                            u = i("head"), c && c.appendChild(u)
                        }
                        return u.insertBefore(o, u.firstChild), o
                    } catch (t) {}
                }
            }

            function ui(t, e, n) {
                for (var r = "", i = xs(), o = vi(e) || "*"; e && e.parentNode && !Lu(o, ["BODY", "HTML"]);) r += i[o] || "*", r += ci(t, e, n) || "", o = vi(e = e.parentElement) || "*";
                return jo(r, 128)
            }

            function ci(t, e, n) {
                if (t = si(t, e)) {
                    t = t.childNodes;
                    for (var r = e && e.nodeName, i = 0, o = 0; o < t.length; o += 1)
                        if (r === (t[o] && t[o].nodeName)) {
                            if (e === t[o]) return i;
                            n && t[o] === n || (i += 1)
                        }
                }
                return 0
            }

            function si(t, e) {
                var n = yo(t, "document");
                if (!e || e === n.documentElement) return null;
                if (e === xi(t)) return n.documentElement;
                n = null;
                try {
                    n = e.parentNode
                } catch (t) {}
                return n
            }

            function fi(t, e) {
                var n = hi(t, e),
                    r = n.left;
                n = n.top;
                var i = li(t, e);
                return [r, n, i[0], i[1]]
            }

            function li(t, e) {
                var n = yo(t, "document");
                if (e === xi(t) || e === n.documentElement) {
                    n = Ci(t);
                    var r = wi(t);
                    return [Math.max(n.scrollWidth, r[0]), Math.max(n.scrollHeight, r[1])]
                }
                return (n = bi(e)) ? [n.width, n.height] : [e.offsetWidth, e.offsetHeight]
            }

            function hi(t, e) {
                var n = e,
                    r = yo(t, "document"),
                    i = vi(n);
                if (!n || !n.ownerDocument || "PARAM" === i || n === xi(t) || n === r.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (r = n.getBoundingClientRect && bi(n)) return n = yi(t), {
                    left: Math.round(r.left + n.x),
                    top: Math.round(r.top + n.y)
                };
                for (i = r = 0; n;) r += n.offsetLeft, i += n.offsetTop, n = n.offsetParent;
                return {
                    left: r,
                    top: i
                }
            }

            function di(t, e, n) {
                if (!(e && e.Element && e.Element.prototype && e.document && n)) return null;
                if (e.Element.prototype.closest && zo("closest", e.Element.prototype.closest) && n.closest) return n.closest(t);
                var r = ds(e);
                if (r) {
                    for (; n && 1 === n.nodeType && !r.call(n, t);) n = n.parentElement || n.parentNode;
                    return n && 1 === n.nodeType ? n : null
                }
                if (e.document.querySelectorAll && zo("querySelectorAll", yo(e, "Element.prototype.querySelectorAll"))) {
                    for (t = Ki((e.document || e.ownerDocument).querySelectorAll(t)); n && 1 === n.nodeType && -1 === so(e)(n, t);) n = n.parentElement || n.parentNode;
                    return n && 1 === n.nodeType ? n : null
                }
                return null
            }

            function pi(t) {
                return ps(t) && !Yu(au(t.type), Es) ? gs(t) ? !t.checked : !t.value : vs(t) ? !t.value : !ms(t) || 0 > t.selectedIndex
            }

            function vi(t) {
                if (t) try {
                    var e = t.nodeName;
                    if (Ho(e)) return e;
                    if (Ho(e = t.tagName)) return e
                } catch (t) {}
            }

            function mi(t, e) {
                var n = t.document.getElementsByTagName("form");
                return so(t)(e, Ki(n))
            }

            function gi(t, e, n) {
                n = no("dispatchEvent", n || t.document);
                var r = null,
                    i = yo(t, "Event.prototype.constructor");
                if (i && (zo("(Event|Object|constructor)", i) || fc(t) && "[object Event]" == "" + i)) try {
                    r = new t.Event(e)
                } catch (n) {
                    if ((t = no("createEvent", yo(t, "document"))) && Do(t)) {
                        try {
                            r = t(e)
                        } catch (t) {}
                        r && r.initEvent && r.initEvent(e, !1, !1)
                    }
                }
                r && n(r)
            }

            function bi(t) {
                try {
                    return t.getBoundingClientRect && t.getBoundingClientRect()
                } catch (t) {
                    return "object" == typeof t && null !== t && 16389 === (t.Sf && 65535 & t.Sf) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function yi(t) {
                var e = xi(t),
                    n = yo(t, "document");
                return {
                    x: t.pageXOffset || n.documentElement && n.documentElement.scrollLeft || e && e.scrollLeft || 0,
                    y: t.pageYOffset || n.documentElement && n.documentElement.scrollTop || e && e.scrollTop || 0
                }
            }

            function wi(t) {
                var e = Ei(t);
                if (e) {
                    var n = e[2];
                    return [t.Math.round(e[0] * n), t.Math.round(e[1] * n)]
                }
                return [yo(e = Ci(t), "clientWidth") || t.innerWidth, yo(e, "clientHeight") || t.innerHeight]
            }

            function Ei(t) {
                var e = yo(t, "visualViewport.width"),
                    n = yo(t, "visualViewport.height");
                return t = yo(t, "visualViewport.scale"), No(e) || No(n) ? null : [Math.floor(e), Math.floor(n), t]
            }

            function Ci(t) {
                var e = yo(t, "document") || {},
                    n = e.documentElement;
                return "CSS1Compat" === e.compatMode ? n : xi(t) || n
            }

            function xi(t) {
                t = yo(t, "document");
                try {
                    return t.getElementsByTagName("body")[0]
                } catch (t) {
                    return null
                }
            }

            function ki(t, e) {
                try {
                    return new RegExp("(?:^|\\s)" + t + "(?:\\s|$)").test(e.className)
                } catch (t) {
                    return !1
                }
            }

            function Ai(t) {
                var e;
                try {
                    (e = t.target || t.srcElement) && (!e.ownerDocument && e.documentElement ? e = e.documentElement : e.ownerDocument !== document && (e = null))
                } catch (t) {}
                return e
            }

            function Ti(t) {
                var e = t && t.parentNode;
                e && e.removeChild(t)
            }

            function Si(t) {
                return !No(t) && (3 === (t = t.nodeType) || 8 === t)
            }

            function _i(t) {
                var e;
                return (e = yo(t, "XMLHttpRequest")) && (e = "withCredentials" in new t.XMLHttpRequest) && (e = !(e = !!(fs.test(t.location.host) && t.opera && Do(t.opera.version) && ("string" == typeof (e = t.opera.version()) && "12" === e.split(".")[0])))), !!e && xo(t, Ri)
            }

            function Ri(t, e, n) {
                var r, i = new t.XMLHttpRequest,
                    o = n.$,
                    a = Tu(n.Re ? ((r = {}).wmode = "7", r) : {}, n.Mb);
                return new Zc((function (r, u) {
                    i.open(n.Gg || "GET", e + "?" + Pi(a), !0), i.withCredentials = !1 !== n.Ig, n.Rb && (i.timeout = n.Rb), Eu(ku, zu((function (t) {
                        i.setRequestHeader(t[0], t[1])
                    })))(n.Lb);
                    var c = ko([t, i, ji(n.ua), n.Re, n.lj, r, u], Mi);
                    i.onreadystatechange = c;
                    try {
                        i.send(o)
                    } catch (t) {}
                }))
            }

            function Mi(t, e, n, r, i, o, a, u) {
                if (4 === e.readyState)
                    if (200 === e.status || i || a(n), i) 200 === e.status ? o(e.responseText) : a(us("http." + e.status + ".st." + e.statusText + ".rt." + ("" + e.responseText).substring(0, 50)));
                    else {
                        if (i = null, r) try {
                            (i = ia(t, e.responseText)) || a(n)
                        } catch (t) {
                            a(n)
                        }
                        o(i)
                    } return u
            }

            function Ni(t, e, n) {
                return (n = Pi(n)) && (t += "?" + n), e.$ && (t += (n ? "&" : "?") + e.$), t
            }

            function Di(t, e) {
                try {
                    return t.JSON.stringify(e)
                } catch (t) {
                    return null
                }
            }

            function Pi(t) {
                return t ? go(ku, wo((function (t, e) {
                    var n = e[0],
                        r = e[1];
                    return lu(r) || No(r) || t.push(n + "=" + Oi(r)), t
                }), []), cu("&"))(t) : ""
            }

            function Ii(t) {
                var e = "";
                try {
                    e = decodeURIComponent(t)
                } catch (t) {}
                return e
            }

            function Oi(t) {
                try {
                    return encodeURIComponent(t)
                } catch (t) {}
                return t = ou("", Pu((function (t) {
                    return 55296 >= t.charCodeAt(0)
                }), t.split(""))), encodeURIComponent(t)
            }

            function Li() {
                var t = To(arguments);
                return $i(ji(t))
            }

            function ji(t) {
                var e = "";
                return mo(t) ? e = ou(".", t) : Ho(t) && (e = t), us("err.kn(" + Ac.Ja + ")" + e)
            }

            function Bi(t) {
                this.message = t
            }

            function Fi(t, e, n, r, i) {
                var o = t.addEventListener && t.removeEventListener,
                    a = !o && t.attachEvent && t.detachEvent;
                (o || a) && (i = i ? o ? "removeEventListener" : "detachEvent" : o ? "addEventListener" : "attachEvent", o ? t[i](e, n, r) : t[i]("on" + e, n))
            }

            function Gi(t) {
                return bu((function (e, n) {
                    var r = yo(t, "location." + n);
                    return e[n] = r ? "" + r : "", e
                }), {}, Lc)
            }

            function Hi(t) {
                return t = Nc(t), Mc[t] && Mc[t].Dj
            }

            function Ui(t, e) {
                var n = Nc(t),
                    r = yo(e, "__ym.turbo_page"),
                    i = yo(e, "__ym.turbo_page_id");
                Mc[n] || (Mc[n] = {}), (r || i) && (Mc[n].Dj = r, Mc[n].Ej = i)
            }

            function Xi(t) {
                return Lu("prerender", Hu(xo(yo(t, "document"), yo), ["webkitVisibilityState", "visibilityState"]))
            }

            function zi(t, e, n) {
                var r = lu(n);
                return lu(e) && r ? (r = 1, e = 1073741824) : r ? r = 1 : (r = e, e = n), t.Math.floor(t.Math.random() * (e - r)) + r
            }

            function Vi(t, e) {
                return t.isFinite(e) && !t.isNaN(e) && "[object Number]" === Uo(e)
            }

            function Yi(t, e) {
                return Uu(go(co, Co("push", t)), e), t
            }

            function qi(t, e) {
                return Array.prototype.sort.call(e, t)
            }

            function Ki(t) {
                return t ? mo(t) ? t : hu ? hu(t) : "number" == typeof t.length && 0 <= t.length ? So(t) : [] : []
            }

            function Wi(t, e, n) {
                return n ? t : e
            }

            function Ji(t, e, n) {
                try {
                    if (Do(e)) {
                        var r = To(arguments).slice(3);
                        No(n) ? e.apply(void 0, r) : pu.apply(void 0, Ko([e, n], r))()
                    }
                } catch (e) {
                    Zi(t, xo(e, $i), 0)
                }
            }

            function $i(t) {
                throw t
            }

            function Zi(t, e, n) {
                return no("setTimeout", t)(e, n)
            }

            function Qi(t, e) {
                return no("clearTimeout", t)(e)
            }

            function to() {
                return []
            }

            function eo() {
                return {}
            }

            function no(t, e) {
                var n = yo(e, t),
                    r = yo(e, "constructor.prototype." + t) || n;
                try {
                    if (r && r.apply) return function () {
                        return r.apply(e, arguments)
                    }
                } catch (t) {
                    return n
                }
                return r
            }

            function ro(t, e) {
                return function () {
                    var n = To(arguments),
                        r = n[0];
                    n = n.slice(1);
                    var i = Mu(r),
                        o = i.l("m771", {}),
                        a = yo(o, t);
                    return a || (a = oo(e), o[t] = a, i.o("m771", o)), a.apply(void 0, Ko([r], n))
                }
            }

            function io(t, e) {
                return e ? t(e) : t()
            }

            function oo(t, e) {
                var n = [],
                    r = [],
                    i = e || co;
                return function () {
                    var e = To(arguments),
                        o = i.apply(void 0, e),
                        a = _u(o, r);
                    return -1 !== a ? n[a] : (e = t.apply(void 0, e), n.push(e), r.push(o), e)
                }
            }

            function ao(t) {
                return !t
            }

            function uo(t, e) {
                return e
            }

            function co(t) {
                return t
            }

            function so(t) {
                if ($a) return $a;
                var e = !1;
                try {
                    e = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (t) {}
                var n = t.Array && t.Array.prototype && Xo(t.Array.prototype.indexOf, "indexOf");
                return $a = e && n ? function (t, e) {
                    return n.call(e, t)
                } : fo
            }

            function fo(t, e) {
                for (var n = 0; n < e.length; n += 1)
                    if (e[n] === t) return n;
                return -1
            }

            function lo(t) {
                var e = (t = t.Ya = t.Ya || {})._metrika = t._metrika || {};
                return {
                    Fa: function (t, n) {
                        return xu.call(e, t) || (e[t] = n), this
                    },
                    o: function (t, n) {
                        return e[t] = n, this
                    },
                    l: function (t, n) {
                        var r = e[t];
                        return xu.call(e, t) || lu(n) ? r : n
                    }
                }
            }

            function ho(t) {
                var e, n = [];
                for (e in t) vo(t, e) && n.push(e);
                return n
            }

            function po(t, e) {
                return Ro((function (e, n, r) {
                    return t(n, r) && e.push(n), e
                }), [], e)
            }

            function vo(t, e) {
                return !No(t) && xu.call(t, e)
            }

            function mo(t) {
                return Ja || (Ja = Xo(Array.isArray, "isArray")) || (Ja = Cu), Ja(t)
            }

            function go() {
                var t = To(arguments),
                    e = t.shift();
                return function () {
                    var n = e.apply(void 0, arguments);
                    return bu(Oo, n, t)
                }
            }

            function bo(t, e) {
                return void 0 === e && (e = {}), !t || 1 > t.length || bu((function (e, n, r) {
                    return r === t.length - 1 ? e : (r === t.length - 2 ? e[n] = t[r + 1] : e[n] || (e[n] = {}), e[n])
                }), e, t), e
            }

            function yo(t, e) {
                return t ? bu((function (t, e) {
                    if (No(t)) return t;
                    try {
                        return t[e]
                    } catch (t) {}
                    return null
                }), t, e.split(".")) : null
            }

            function wo(t, e) {
                return ko([t, e], bu)
            }

            function Eo(t) {
                return Co("test", t)
            }

            function Co(t, e) {
                return pu(e[t], e)
            }

            function xo(t, e) {
                return ko([t], e)
            }

            function ko(t, e) {
                return pu.apply(void 0, Ko([e, null], t))
            }

            function Ao(t, e, n) {
                void 0 === e && (e = []), n = n || {};
                var r, i = e.length,
                    o = t;
                return Do(o) && (n[o = "d"] = t), i ? 1 === i ? r = n[o](e[0]) : 2 === i ? r = n[o](e[0], e[1]) : 3 === i ? r = n[o](e[0], e[1], e[2]) : 4 === i && (r = n[o](e[0], e[1], e[2], e[3])) : r = n[o](), r
            }

            function To(t) {
                if (hu) try {
                    return hu(t)
                } catch (t) {}
                return So(t)
            }

            function So(t) {
                for (var e = t.length, n = [], r = 0; r < e; r += 1) n.push(t[r]);
                return n
            }

            function _o(t, e) {
                return (_o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }

            function Ro(t, e, n) {
                for (var r = 0, i = n.length; r < i;) e = t(e, n[r], r), r += 1;
                return e
            }

            function Mo(t) {
                return !fu(t) && !lu(t) && "[object Object]" === Uo(t)
            }

            function No(t) {
                return lu(t) || fu(t)
            }

            function Do(t) {
                return "function" == typeof t
            }

            function Po(t) {
                return function (e) {
                    return function (n) {
                        return t(n, e)
                    }
                }
            }

            function Io(t) {
                return function (e) {
                    return function (n) {
                        return t(e, n)
                    }
                }
            }

            function Oo(t, e) {
                return e(t)
            }

            function Lo(t) {
                return t.replace(/\^/g, "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function jo(t, e) {
                if (t) {
                    var n = ru ? ru.call(t) : ("" + t).replace(nu, "");
                    return e && n.length > e ? n.substr(0, e) : n
                }
                return ""
            }

            function Bo(t) {
                return "" + t
            }

            function Fo(t, e) {
                return !(!t || -1 === Go(t, e))
            }

            function Go(t, e) {
                if (eu) var n = eu.call(t, e);
                else t: {
                    n = 0;
                    for (var r = t.length - e.length, i = 0; i < t.length; i += 1) {
                        if ((n = t[i] === e[n] ? n + 1 : 0) === e.length) {
                            n = i - e.length + 1;
                            break t
                        }
                        if (!n && i > r) break
                    }
                    n = -1
                }
                return n
            }

            function Ho(t) {
                return "string" == typeof t
            }

            function Uo(t) {
                return Object.prototype.toString.call(t)
            }

            function Xo(t, e) {
                return zo(e, t) && t
            }

            function zo(t, e) {
                var n = Vo(t, e);
                return e && !n && tu.push([t, e]), n
            }

            function Vo(t, e) {
                if (!e || "function" != typeof e) return !1;
                try {
                    var n = "" + e
                } catch (t) {
                    return !1
                }
                var r = n.length;
                if (r > 35 + t.length) return !1;
                for (var i = r - 13, o = 0, a = 8; a < r; a += 1) {
                    if (12 === (o = "[native code]" [o] === n[a] || 7 === o && "-" === n[a] ? o + 1 : 0)) return !0;
                    if (!o && a > i) break
                }
                return !1
            }

            function Yo() {}

            function qo(t, e) {
                function n() {
                    this.constructor = t
                }
                _o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }

            function Ko() {
                for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
                t = Array(t);
                var r = 0;
                for (e = 0; e < n; e++)
                    for (var i = arguments[e], o = 0, a = i.length; o < a; o++, r++) t[r] = i[o];
                return t
            }

            function Wo(t) {
                for (var e = 2166136261, n = (t = "" + t).length, r = 0; r < n; r += 1) e ^= t.charCodeAt(r), e += (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24);
                return e >>> 0
            }

            function Jo() {}

            function $o(t) {
                if (!(this instanceof $o)) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t) throw new TypeError("not a function");
                this.za = 0, this.Se = !1, this.Ha = void 0, this.sb = [], ra(t, this)
            }

            function Zo(t, e) {
                for (; 3 === t.za;) t = t.Ha;
                0 === t.za ? t.sb.push(e) : (t.Se = !0, $o.Te((function () {
                    var n = 1 === t.za ? e.Ti : e.Xi;
                    if (null === n)(1 === t.za ? Qo : ta)(e.Qa, t.Ha);
                    else {
                        try {
                            var r = n(t.Ha)
                        } catch (t) {
                            return void ta(e.Qa, t)
                        }
                        Qo(e.Qa, r)
                    }
                })))
            }

            function Qo(t, e) {
                try {
                    if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if (e instanceof $o) return t.za = 3, t.Ha = e, void ea(t);
                        if ("function" == typeof n) return void ra(function (t, e) {
                            return function () {
                                t.apply(e, arguments)
                            }
                        }(n, e), t)
                    }
                    t.za = 1, t.Ha = e, ea(t)
                } catch (e) {
                    ta(t, e)
                }
            }

            function ta(t, e) {
                t.za = 2, t.Ha = e, ea(t)
            }

            function ea(t) {
                2 === t.za && 0 === t.sb.length && $o.Te((function () {
                    t.Se || $o.Vg(t.Ha)
                }));
                for (var e = 0, n = t.sb.length; e < n; e++) Zo(t, t.sb[e]);
                t.sb = null
            }

            function na(t, e, n) {
                this.Ti = "function" == typeof t ? t : null, this.Xi = "function" == typeof e ? e : null, this.Qa = n
            }

            function ra(t, e) {
                var n = !1;
                try {
                    t((function (t) {
                        n || (n = !0, Qo(e, t))
                    }), (function (t) {
                        n || (n = !0, ta(e, t))
                    }))
                } catch (t) {
                    n || (n = !0, ta(e, t))
                }
            }

            function ia(t, e) {
                if (!e) return null;
                try {
                    return t.JSON.parse(e)
                } catch (t) {
                    return null
                }
            }

            function oa(t, e, n, r, i) {
                return void 0 === i && (i = !1), xr(t, e, "", -100, n, r, i)
            }

            function aa(t, e, n) {
                void 0 === e && (e = "_ym_"), void 0 === n && (n = "");
                var r = Qs(t),
                    i = 1 === (r || "").split(".").length ? r : "." + r,
                    o = n ? "_" + n : "";
                return {
                    ic: function (n, r, a) {
                        return oa(t, "" + e + n + o, r || i, a), this
                    },
                    l: function (n) {
                        return kr(t, "" + e + n + o)
                    },
                    o: function (n, r, a, u, c) {
                        return xr(t, "" + e + n + o, r, a, u || i, c), this
                    }
                }
            }

            function ua(t, e) {
                var n = mf(t);
                return n ? (n.href = e, {
                    protocol: n.protocol,
                    host: n.host,
                    port: n.port,
                    hostname: n.hostname,
                    hash: n.hash,
                    search: n.search,
                    query: n.search.replace(/^\?/, ""),
                    pathname: n.pathname || "/",
                    path: (n.pathname || "/") + n.search,
                    href: n.href
                }) : {}
            }

            function ca(t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var n = [0, 0, 0, 0];
                return n[3] += t[3] * e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] * e[3], n[1] += n[2] >>> 16, n[2] &= 65535, n[2] += t[3] * e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] * e[3], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[2] * e[2], n[0] += n[1] >>> 16, n[1] &= 65535, n[1] += t[3] * e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }

            function sa(t, e) {
                t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]], e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]];
                var n = [0, 0, 0, 0];
                return n[3] += t[3] + e[3], n[2] += n[3] >>> 16, n[3] &= 65535, n[2] += t[2] + e[2], n[1] += n[2] >>> 16, n[2] &= 65535, n[1] += t[1] + e[1], n[0] += n[1] >>> 16, n[1] &= 65535, n[0] += t[0] + e[0], n[0] &= 65535, [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            }

            function fa(t, e) {
                return 32 === (e %= 64) ? [t[1], t[0]] : 32 > e ? [t[0] << e | t[1] >>> 32 - e, t[1] << e | t[0] >>> 32 - e] : (e -= 32, [t[1] << e | t[0] >>> 32 - e, t[0] << e | t[1] >>> 32 - e])
            }

            function la(t, e) {
                return 0 === (e %= 64) ? t : 32 > e ? [t[0] << e | t[1] >>> 32 - e, t[1] << e] : [t[1] << e - 32, 0]
            }

            function ha(t, e) {
                return [t[0] ^ e[0], t[1] ^ e[1]]
            }

            function da(t) {
                return t = ha(t, [0, t[0] >>> 1]), t = ha(t = ca(t, [4283543511, 3981806797]), [0, t[0] >>> 1]), ha(t = ca(t, [3301882366, 444984403]), [0, t[0] >>> 1])
            }

            function pa(t, e) {
                void 0 === e && (e = 210);
                var n = t || "",
                    r = e || 0,
                    i = n.length - n.length % 16;
                r = {
                    O: [0, r],
                    R: [0, r]
                };
                for (var o = 0; o < i; o += 16) {
                    var a = r,
                        u = [255 & t.charCodeAt(o + 4) | (255 & t.charCodeAt(o + 5)) << 8 | (255 & t.charCodeAt(o + 6)) << 16 | (255 & t.charCodeAt(o + 7)) << 24, 255 & t.charCodeAt(o) | (255 & t.charCodeAt(o + 1)) << 8 | (255 & t.charCodeAt(o + 2)) << 16 | (255 & t.charCodeAt(o + 3)) << 24],
                        c = [255 & t.charCodeAt(o + 12) | (255 & t.charCodeAt(o + 13)) << 8 | (255 & t.charCodeAt(o + 14)) << 16 | (255 & t.charCodeAt(o + 15)) << 24, 255 & t.charCodeAt(o + 8) | (255 & t.charCodeAt(o + 9)) << 8 | (255 & t.charCodeAt(o + 10)) << 16 | (255 & t.charCodeAt(o + 11)) << 24];
                    u = ca(u, nl), u = ca(u = fa(u, 31), rl), a.O = ha(a.O, u), a.O = fa(a.O, 27), a.O = sa(a.O, a.R), a.O = sa(ca(a.O, [0, 5]), [0, 1390208809]), c = ca(c, rl), c = ca(c = fa(c, 33), nl), a.R = ha(a.R, c), a.R = fa(a.R, 31), a.R = sa(a.R, a.O), a.R = sa(ca(a.R, [0, 5]), [0, 944331445])
                }
                switch (i = n.length % 16, o = n.length - i, a = [0, 0], u = [0, 0], i) {
                    case 15:
                        u = ha(u, la([0, n.charCodeAt(o + 14)], 48));
                    case 14:
                        u = ha(u, la([0, n.charCodeAt(o + 13)], 40));
                    case 13:
                        u = ha(u, la([0, n.charCodeAt(o + 12)], 32));
                    case 12:
                        u = ha(u, la([0, n.charCodeAt(o + 11)], 24));
                    case 11:
                        u = ha(u, la([0, n.charCodeAt(o + 10)], 16));
                    case 10:
                        u = ha(u, la([0, n.charCodeAt(o + 9)], 8));
                    case 9:
                        u = ca(u = ha(u, [0, n.charCodeAt(o + 8)]), rl), u = ca(u = fa(u, 33), nl), r.R = ha(r.R, u);
                    case 8:
                        a = ha(a, la([0, n.charCodeAt(o + 7)], 56));
                    case 7:
                        a = ha(a, la([0, n.charCodeAt(o + 6)], 48));
                    case 6:
                        a = ha(a, la([0, n.charCodeAt(o + 5)], 40));
                    case 5:
                        a = ha(a, la([0, n.charCodeAt(o + 4)], 32));
                    case 4:
                        a = ha(a, la([0, n.charCodeAt(o + 3)], 24));
                    case 3:
                        a = ha(a, la([0, n.charCodeAt(o + 2)], 16));
                    case 2:
                        a = ha(a, la([0, n.charCodeAt(o + 1)], 8));
                    case 1:
                        a = ca(a = ha(a, [0, n.charCodeAt(o)]), nl), a = ca(a = fa(a, 31), rl), r.O = ha(r.O, a)
                }
                return r.O = ha(r.O, [0, n.length]), r.R = ha(r.R, [0, n.length]), r.O = sa(r.O, r.R), r.R = sa(r.R, r.O), r.O = da(r.O), r.R = da(r.R), r.O = sa(r.O, r.R), r.R = sa(r.R, r.O), ("00000000" + (r.O[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r.O[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (r.R[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r.R[1] >>> 0).toString(16)).slice(-8)
            }

            function va(t, e, n) {
                var r = e.getAttribute("itemtype");
                return n = oi('[itemprop~="' + n + '"]', 0, e), r ? Pu((function (n) {
                    return n.parentNode && di("[itemtype]", t, n.parentNode) === e
                }), n) : n
            }

            function ma(t, e, n) {
                return (t = va(t, e, n)) && t.length ? t[0] : null
            }

            function ga(t) {
                return t && (t = mo(t) ? t : [t]).length && (t[0].getAttribute("content") || t[0].innerText) || ""
            }

            function ba(t) {
                return t ? t.attributes && t.getAttribute("datetime") ? t.getAttribute("datetime") : ga(t) : ""
            }

            function ya(t) {
                return (t = Gi(t).hash.split("#")[1]) ? t.split("?")[0] : ""
            }

            function wa(t, e) {
                var n = ya(t);
                return Ih = function (t, e, n, r) {
                    return t.setInterval(Fr(t, "i.err." + (r || "def"), e), n)
                }(t, (function () {
                    var r = ya(t);
                    r !== n && (e(), n = r)
                }), 200, "t.h"), pu(Ir, null, t, Ih)
            }

            function Ea(t, e, n) {
                var r, i, o = e.aa,
                    a = e.Oe,
                    u = e.qc,
                    c = Mu(t),
                    s = Ic(((r = {}).wh = "1", r.pv = "1", r));
                Dc(o) && t.Ug && t.Ug.Bk && s.o("ad", "1"), a && s.o("ut", "1"), o = c.l("lastReferrer"), r = Gi(t).href, n(u = {
                    F: (i = {}, i["page-url"] = u || r, i["page-ref"] = o, i),
                    H: s
                }, e).catch(Fr(t, "g.s")), c.o("lastReferrer", r)
            }

            function Ca(t, e) {
                var n, r = Ai(e),
                    i = Ac.Zb,
                    o = lo(t);
                if (r && ki("ym-advanced-informer", r)) {
                    var a = o.l("ifc", 0) + 1;
                    o.o("ifc", a), a = r.getAttribute("data-lang");
                    var u = $u(r.getAttribute("data-cid") || "");
                    (u || 0 === u) && ((i = yo(t, "Ya." + i + ".informer")) ? i(((n = {}).i = r, n.id = u, n.lang = a, n)) : o.o("ib", !0), (n = e || window.event).preventDefault ? n.preventDefault() : n.returnValue = !1)
                }
            }

            function xa(t, e, n) {
                return t = e && (Fo(e.className, "ym-disable-keys") || Fo(e.className, "-metrika-nokeys")), n && e ? t || !! function (t, e) {
                    var n = mo(t) ? t : [t];
                    if ((e = e || document).querySelectorAll) {
                        var r = ou(", ", Hu((function (t) {
                            return "." + t
                        }), n));
                        return Ki(e.querySelectorAll(r))
                    }
                    return e.getElementsByClassName ? Xu(go(Co("getElementsByClassName", e), Ki), n) : (r = e.getElementsByTagName("*"), n = "(" + ou("|", n) + ")", Pu(xo(n, ki), Ki(r)))
                }(["ym-disable-keys", "-metrika-nokeys"], e).length : t
            }

            function ka(t, e) {
                return !!ps(e) && ("password" === e.type || e.name && Lu(e.name.toLowerCase(), Ld) || e.id && Lu(e.id.toLowerCase(), Ld))
            }

            function Aa(t, e) {
                var n = Math.max(0, Math.min(e, 65535));
                Yi(t, [n >> 8, 255 & n])
            }

            function Ta(t, e) {
                Yi(t, [255 & e])
            }

            function Sa(t, e, n) {
                return -1 === so(t)(n, Fd) || (Ta(e, n), !1)
            }

            function _a(t, e) {
                for (var n = Math.max(0, 0 | e); 127 < n;) Yi(t, [127 & n | 128]), n >>= 7;
                Yi(t, [n])
            }

            function Ra(t, e) {
                _a(t, e.length);
                for (var n = 0; n < e.length; n += 1) _a(t, e.charCodeAt(n))
            }

            function Ma(t, e) {
                var n = e;
                255 < n.length && (n = n.substr(0, 255)), t.push(n.length);
                for (var r = 0; r < n.length; r += 1) Aa(t, n.charCodeAt(r))
            }

            function Na(t, e, n) {
                void 0 === n && (n = []);
                for (var r = []; e && !vt(t, e, n); e = si(t, e)) r.push(e);
                return Uu((function (e) {
                    Td.sd += 1;
                    var r = Td.sd;
                    e[Ad] = r, Td[r] = {}, r = function (t, e) {
                        var n = vi(e);
                        if (!n) return e[Ad] = -1, null;
                        var r = +e[Ad];
                        if (!isFinite(r) || 0 >= r) return null;
                        if (e.attributes)
                            for (var i = e; i;) {
                                if (i.attributes.gm) return null;
                                i = i.parentElement
                            }
                        i = 64;
                        var o = si(t, e),
                            a = o && o[Ad] ? o[Ad] : 0;
                        0 > a && (a = 0), n = (n || "").toUpperCase();
                        var u = Bd()[n];
                        u || (i |= 2);
                        var c = ci(t, e);
                        c || (i |= 4);
                        var s = fi(t, e);
                        return (o = o ? fi(t, o) : null) && s[0] === o[0] && s[1] === o[1] && s[2] === o[2] && s[3] === o[3] && (i |= 8), Td[r].Vf = s[0] + "x" + s[1], Td[r].size = s[2] + "x" + s[3], e.id && "string" == typeof e.id && (i |= 32), Sa(t, o = [], 1) ? null : (_a(o, r), Ta(o, i), _a(o, a), u ? Ta(o, u) : Ma(o, n), c && _a(o, c), 8 & i || (_a(o, s[0]), _a(o, s[1]), _a(o, s[2]), _a(o, s[3])), 32 & i && Ma(o, e.id), Ta(o, 0), o)
                    }(t, e), e = function (t, e) {
                        var n = e[Ad];
                        if (!n || 0 > n || !bs(e) || !e.form || Et(0, e.form)) return [];
                        var r = mi(t, e.form);
                        if (0 > r) return [];
                        if (ps(e)) {
                            var i = {
                                text: 0,
                                color: 0,
                                hc: 0,
                                mm: 0,
                                "datetime-local": 0,
                                email: 0,
                                Sf: 0,
                                Dm: 0,
                                search: 0,
                                Gm: 0,
                                time: 0,
                                url: 0,
                                month: 0,
                                Im: 0,
                                password: 2,
                                Cm: 3,
                                jm: 4,
                                file: 6,
                                image: 7
                            };
                            i = i[e.type]
                        } else {
                            i = {
                                Fl: 1,
                                Nl: 5
                            };
                            var o = vi(e);
                            i = lu(o) ? "" : i[o]
                        }
                        if ("number" != typeof i) return [];
                        o = -1;
                        for (var a = e.form.elements, u = a.length, c = 0, s = 0; c < u; c += 1)
                            if (a[c].name === e.name) {
                                if (a[c] === e) {
                                    o = s;
                                    break
                                }
                                s += 1
                            } return 0 > o || Sa(t, a = [], 7) ? [] : (_a(a, n), _a(a, r), _a(a, i), Ra(a, e.name || ""), _a(a, o), a)
                    }(t, e), r && e && (Yi(n, r), Yi(n, e))
                }), Ju(r)), n
            }

            function Da(t) {
                var e = t.ia;
                if (!Ud || e && !e.fromElement) return pt(t)
            }

            function Pa(t) {
                var e = t.ia;
                if (e && !e.toElement) return dt(t)
            }

            function Ia(t) {
                var e = Ai(t.ia);
                if (e && ys(e)) {
                    var n = ht(t, e),
                        r = fr(t.b),
                        i = [];
                    return Sa(t.b, i, 17) ? t = [] : (_a(i, r), _a(i, e[Ad]), t = i), Ko(n, t)
                }
            }

            function Oa(t) {
                var e = t.b,
                    n = t.ia.target;
                if (n && ys(n)) {
                    e = Na(e, n);
                    var r = fr(t.b),
                        i = [];
                    return Sa(t.b, i, 18) ? t = [] : (_a(i, r), _a(i, n[Ad]), t = i), Ko(e, t)
                }
            }

            function La(t) {
                var e = t.b,
                    n = Ai(t.ia);
                if (!n || ka(0, n) || xa(e, n)) return [];
                if (bs(n)) {
                    var r = Mu(e).l("isEU"),
                        i = mt(e, n, r),
                        o = i.ib;
                    if (r = i.Rd, i = i.Cd, gs(n)) var a = n.checked;
                    else a = n.value, a = o ? ou("", Hd(a.split(""))) : a;
                    return e = Na(e, n), o = fr(t.b), r = r && !i, i = [], Sa(t.b, i, 39) ? t = [] : (_a(i, o), _a(i, n[Ad]), Ma(i, String(a)), Ta(i, r ? 1 : 0), t = i), Ko(e, t)
                }
            }

            function ja(t) {
                var e = t.b,
                    n = t.ia,
                    r = Ai(n);
                if (!r || "SCROLLBAR" === r.nodeName) return [];
                var i = [],
                    o = xo(i, Yi);
                r && ys(r) ? o(ht(t, r)) : o(Na(e, r));
                var a = Tt(e, n);
                t = fr(t.b), o = n.type;
                var u, c = [a.x, a.y];
                a = n.which, n = n.button;
                var s = li(e, r),
                    f = s[0];
                for (s = s[1]; r && (!f || !s);)(r = si(e, r)) && (f = (s = li(e, r))[0], s = s[1]);
                return r ? !(f = r[Ad]) || 0 > f ? e = [] : (s = (u = {}, u.mousemove = 2, u.click = 32, u.dblclick = 33, u.mousedown = 4, u.mouseup = 30, u.touch = 12, u)[o]) ? (u = [], r = hi(e, r), Sa(e, u, s) ? e = [] : (_a(u, t), _a(u, f), _a(u, Math.max(0, c[0] - r.left)), _a(u, Math.max(0, c[1] - r.top)), /^mouse(up|down)|click$/.test(o) && Ta(u, 2 > (e = a || n) ? 1 : e === (a ? 2 : 4) ? 4 : 2), e = u)) : e = [] : e = [], Ko(i, e)
            }

            function Ba(t) {
                return Ko(ja(t), function (t) {
                    var e = null,
                        n = t.b,
                        r = n.document;
                    if (n.getSelection) {
                        r = void 0;
                        try {
                            r = n.getSelection()
                        } catch (t) {
                            return []
                        }
                        if (fu(r)) return [];
                        var i = "" + r;
                        e = r.anchorNode
                    } else r.selection && r.selection.createRange && (i = (r = r.selection.createRange()).text, e = r.parentElement());
                    if ("string" != typeof i) return [];
                    try {
                        for (; e && 1 !== e.nodeType;) e = e.parentNode
                    } catch (t) {
                        return []
                    }
                    if (!e) return [];
                    r = mt(n, e).ib || xa(n, e, !0), e = e.getElementsByTagName("*");
                    for (var o = 0; o < e.length && !r;) r = mt(n, r = e[o]).ib || xa(n, r, !0), o += 1;
                    return i !== Xd ? (Xd = i, r = r ? ou("", Hd(i.split(""))) : i, i = fr(t.b), 0 === r.length ? r = n = "" : 100 >= r.length ? (n = r, r = "") : 200 >= r.length ? (n = r.substr(0, 100), r = r.substr(100)) : (n = r.substr(0, 97), r = r.substr(r.length - 97)), e = [], Sa(t.b, e, 29) ? t = [] : (_a(e, i), Ra(e, n), Ra(e, r), t = e), t) : void 0
                }(t) || [])
            }

            function Fa(t) {
                return (t.shiftKey ? 2 : 0) | (t.ctrlKey ? 4 : 0) | (t.altKey ? 1 : 0) | (t.metaKey ? 8 : 0) | (t.ctrlKey || t.altKey ? 16 : 0)
            }

            function Ga(t) {
                var e = [];
                return zd || (zd = !0, Xd && e.push.apply(e, function (t, e) {
                    var n = [];
                    return Sa(t, n, 27) ? [] : (_a(n, e), n)
                }(t.b, fr(t.b))), zn(t.b, (function () {
                    zd = !1
                }), "fv.c")), e
            }

            function Ha(t, e, n, r) {
                var i = Ai(e);
                if (!i || gt(t, i)) return [];
                var o = Ct(i),
                    a = bt(i);
                e = mt(t, i).ib;
                var u = Mu(t);
                return !o && (a && u.l("isEU") || xa(t, i)) ? t = [] : (o = Na(t, i), u = fr(t), Sa(t, a = [], 38) ? t = [] : (_a(a, u), Aa(a, n), Ta(a, r), (!(t = i[Ad]) || 0 > t) && (t = 0), _a(a, t), Ta(a, e ? 1 : 0), t = a), t = Ko(o, t)), t
            }

            function Ua(t) {
                var e = t.b,
                    n = t.ia,
                    r = n.keyCode,
                    i = Fa(n),
                    o = [],
                    a = xo(o, Yi);
                return ({
                    3: 1,
                    8: 1,
                    9: 1,
                    13: 1,
                    16: 1,
                    17: 1,
                    18: 1,
                    19: 1,
                    20: 1,
                    27: 1,
                    33: 1,
                    34: 1,
                    35: 1,
                    36: 1,
                    37: 1,
                    38: 1,
                    39: 1,
                    40: 1,
                    45: 1,
                    46: 1,
                    91: 1,
                    92: 1,
                    93: 1,
                    106: 1,
                    110: 1,
                    111: 1,
                    144: 1,
                    145: 1
                } [r] || 112 <= r && 123 >= r || 96 <= r && 105 >= r || 16 & i) && (19 === r && 4 == (-17 & i) && (r = 144), a(Ha(e, n, r, 16 | i)), Vd = !1, zn(e, (function () {
                    Vd = !0
                }), "fv.kd"), !(67 === r && 4 & i) || 1 & i || 2 & i || a(Ga(t))), o
            }

            function Xa(t) {
                var e = t.b;
                t = t.ia;
                var n = [];
                return Vd && !Yd && 0 !== t.which && (n.push.apply(n, Ha(e, t, t.charCode || t.keyCode, Fa(t))), Yd = !0, zn(e, (function () {
                    Yd = !1
                }), "fv.kp")), n
            }

            function za(t) {
                var e = t.b,
                    n = Ai(t.ia);
                if (!n || Et(0, n)) return [];
                var r = [];
                if ("FORM" === n.nodeName) {
                    for (var i = n.elements, o = 0; o < i.length; o += 1) pi(i[o]) || r.push.apply(r, Na(e, i[o]));
                    r.push.apply(r, function (t, e, n) {
                        var r = mi(t, n);
                        if (0 > r) return [];
                        var i = n.elements,
                            o = i.length;
                        n = [];
                        for (var a = 0; a < o; a += 1)
                            if (!pi(i[a])) {
                                var u = i[a][Ad];
                                u && 0 < u && n.push(u)
                            } if (Sa(t, i = [], 11)) return [];
                        for (_a(i, e), _a(i, r), _a(i, n.length), t = 0; t < n.length; t += 1) _a(i, n[t]);
                        return i
                    }(e, fr(t.b), n))
                }
                return r
            }

            function Va(t) {
                var e = t.flush;
                "BODY" === vi(t = Ai(t.ia)) && e()
            }

            function Ya(t, e, n, r) {
                return function () {
                    var n = dn(t, e),
                        i = To(arguments);
                    if (n) return r.apply(void 0, i)
                }
            }

            function qa(t, e, n, r) {
                var i = xf[n];
                return i ? function () {
                    var e = To(arguments);
                    try {
                        var n = r.apply(void 0, e),
                            o = Mu(t);
                        o.Fa("mt", {});
                        var a = o.l("mt"),
                            u = a[i];
                        a[i] = u ? u + 1 : 1
                    } catch (t) {
                        $i(t)
                    }
                    return n
                } : r
            }

            function Ka(t, e, n, r) {
                return function () {
                    var n = dn(t, e),
                        i = To(arguments);
                    return r.apply(void 0, i), n
                }
            }

            function Wa(t, e, n, r) {
                return Fr(t, "cm." + n, r)
            }
            var Ja, $a, Za = {
                    fl: !1,
                    yk: !1,
                    Mk: !1,
                    vl: !0,
                    wl: !0,
                    xl: !0,
                    ul: !0,
                    Dk: !0,
                    dm: !0,
                    rk: !0,
                    Tk: !0,
                    Il: !0,
                    Kk: !0,
                    Bl: !0,
                    Xk: !0,
                    Ik: !0,
                    ol: !0,
                    ml: !0,
                    ak: !0,
                    sl: !1,
                    rl: !0,
                    xk: !0,
                    zl: !0,
                    bm: !1,
                    Qk: !0,
                    mk: !0,
                    Kl: !1,
                    Ul: !0,
                    Pl: !0,
                    zk: !0,
                    Al: !0,
                    ql: !0,
                    Zk: !0,
                    Rk: !1,
                    Hl: !0,
                    Uk: !0,
                    Yj: !0,
                    nl: !0,
                    Gl: !0,
                    Ol: !0,
                    tl: !0,
                    Ak: !0,
                    Jk: !0,
                    pl: !0,
                    dk: !0,
                    dl: !0,
                    wk: !0,
                    jl: !0,
                    Wl: !0,
                    yl: !0,
                    Zl: !0,
                    gk: !1,
                    Xl: !0,
                    Tl: !0,
                    Dl: !0,
                    El: !0,
                    Rl: !0,
                    Hk: !1,
                    Ql: !1,
                    $l: !0,
                    bk: !1,
                    Nk: !0,
                    Vk: !0,
                    Gk: !0,
                    Sl: !1,
                    Fk: !0,
                    nk: !0,
                    Xj: !0,
                    el: !0,
                    vk: !0,
                    hk: !0,
                    Cl: !0,
                    Jl: !0,
                    Vl: !1,
                    kl: !0,
                    ek: !0,
                    ik: !0,
                    $k: !0,
                    jk: !0,
                    pk: !0,
                    Ek: !0,
                    Sk: !1,
                    Yk: !0,
                    Yl: !1,
                    Ok: !0,
                    Zj: !0,
                    Lk: !0,
                    fk: !1,
                    qk: !0,
                    cm: !1,
                    ck: !0,
                    em: !0,
                    bl: !0,
                    gl: !0,
                    lk: !0,
                    $j: !0,
                    Ml: !0,
                    Ck: !0,
                    Pk: !0,
                    Ll: !0,
                    al: !1
                },
                Qa = {
                    construct: "Metrika2",
                    callbackPostfix: "2",
                    version: "uq3ipefhyn2n2ej8hz2"
                },
                tu = [],
                eu = Xo(String.prototype.indexOf, "indexOf"),
                nu = /^\s+|\s+$/g,
                ru = Xo(String.prototype.trim, "trim"),
                iu = Xo(Array.prototype.join, "join"),
                ou = iu ? function (t, e) {
                    return iu.call(e, t)
                } : function (t, e) {
                    for (var n = "", r = 0; r < e.length; r += 1) n += "" + (r ? t : "") + e[r];
                    return n
                },
                au = Io((function (t, e) {
                    return t === e
                })),
                uu = Io((function (t, e) {
                    return t(e), e
                })),
                cu = Io(ou),
                su = Io(Oo),
                fu = au(null),
                lu = au(void 0),
                hu = Xo(Array.from, "from"),
                du = Xo(Function.prototype.bind, "bind"),
                pu = du ? function () {
                    var t = To(arguments);
                    return du.apply(t[0], Ko([t[1]], t.slice(2)))
                } : function () {
                    var t = To(arguments),
                        e = t[0],
                        n = t[1],
                        r = t.slice(2);
                    return function () {
                        var t = Ko(r, To(arguments));
                        if (Function.prototype.call) return Function.prototype.call.apply(e, Ko([n], t));
                        if (n) {
                            for (var i = "_b"; n[i];) i += "_" + i.length;
                            return n[i] = e, t = n[i] && Ao(i, t, n), delete n[i], t
                        }
                        return Ao(e, t)
                    }
                },
                vu = Io(ko),
                mu = Io(Co),
                gu = Xo(Array.prototype.reduce, "reduce"),
                bu = gu ? function (t, e, n) {
                    return gu.call(n, t, e)
                } : Ro,
                yu = Po(yo),
                wu = yu("length"),
                Eu = go,
                Cu = go(Uo, au("[object Array]")),
                xu = Object.prototype.hasOwnProperty,
                ku = Object.entries ? function (t) {
                    return t ? Object.entries(t) : []
                } : function (t) {
                    return lu(t) ? [] : Ro((function (e, n) {
                        return e.push([n, t[n]]), e
                    }), [], ho(t))
                },
                Au = Object.keys ? Object.keys : ho,
                Tu = Object.assign || function () {
                    var t = To(arguments),
                        e = t[0];
                    for (t = t.slice(1); t.length;) {
                        var n, r = t.shift();
                        for (n in r) vo(r, n) && (e[n] = r[n]);
                        vo(r, "toString") && (e.toString = r.toString)
                    }
                    return e
                },
                Su = Io((function (t, e) {
                    return Tu({}, t, e)
                })),
                _u = so(window),
                Ru = Po(_u),
                Mu = oo(lo),
                Nu = Array.prototype.every ? function (t, e) {
                    return Array.prototype.every.call(e, t)
                } : function (t, e) {
                    return bu((function (e, n) {
                        return !!e && t(n)
                    }), !0, e)
                },
                Du = Xo(Array.prototype.filter, "filter"),
                Pu = Du ? function (t, e) {
                    return Du.call(e, t)
                } : po,
                Iu = Io(Pu),
                Ou = Wi((function (t, e) {
                    return Array.prototype.find.call(e, t)
                }), (function (t, e) {
                    for (var n = 0; n < e.length; n += 1)
                        if (t.call(e, e[n], n)) return e[n]
                }), zo("find", Array.prototype.find)),
                Lu = Array.prototype.includes ? function (t, e) {
                    return Array.prototype.includes.call(e, t)
                } : function (t, e) {
                    return 1 <= po(au(t), e).length
                },
                ju = Po(Lu),
                Bu = oo((function (t) {
                    t = yo(t, "navigator") || {};
                    var e = yo(t, "userAgent") || "";
                    return {
                        Gf: -1 < (yo(t, "vendor") || "").indexOf("Apple"),
                        Fg: e
                    }
                })),
                Fu = oo((function (t) {
                    var e = yo(t, "document.documentElement.style");
                    return t = yo(t, "InstallTrigger"), !(!e || !("MozAppearance" in e) || No(t))
                })),
                Gu = Xo(Array.prototype.map, "map"),
                Hu = Gu && function (t, e) {
                    if (!Fu(t)) return !0;
                    try {
                        e.call({
                            0: !0,
                            length: 1 - Math.pow(2, 32)
                        }, (function () {
                            throw 1
                        }))
                    } catch (t) {
                        return !1
                    }
                    return !0
                }(window, Array.prototype.map) ? function (t, e) {
                    return e && 0 < e.length ? Gu.call(e, t) : []
                } : function (t, e) {
                    return Ro((function (e, n, r) {
                        return e.push(t(n, r)), e
                    }), [], e)
                },
                Uu = Hu,
                Xu = Array.prototype.flatMap ? function (t, e) {
                    return Array.prototype.flatMap.call(e, t)
                } : function (t, e) {
                    return Ro((function (e, n, r) {
                        return n = t(n, r), e.concat(mo(n) ? n : [n])
                    }), [], e)
                },
                zu = Io(Hu),
                Vu = Po(Hu),
                Yu = Wi((function (t, e) {
                    return Array.prototype.some.call(e, t)
                }), (function (t, e) {
                    for (var n = 0; n < e.length; n += 1)
                        if (n in e && t.call(e, e[n], n)) return !0;
                    return !1
                }), zo("some", Array.prototype.some)),
                qu = oo(so),
                Ku = Io(qi),
                Wu = Xo(Array.prototype.reverse, "reverse"),
                Ju = Wu ? function (t) {
                    return Wu.call(t)
                } : function (t) {
                    for (var e = [], n = t.length - 1; 0 <= n; --n) e[t.length - 1 - n] = t[n];
                    return e
                },
                $u = Po(parseInt)(10),
                Zu = oo(go(yu("String.fromCharCode"), xo("fromCharCode", zo), ao)),
                Qu = oo(yu("navigator.userAgent")),
                tc = oo(go(Qu, Eo(/ipad|iphone|ipod/i))),
                ec = oo((function (t) {
                    return yo(t, "navigator.platform") || ""
                })),
                nc = oo((function (t) {
                    var e = (t = Bu(t)).Fg;
                    return t.Gf && (!e.match(/Safari/) && e.match(/Mobile/) || e.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) || -1 !== e.indexOf("FB_IAB") || -1 !== e.indexOf("FBAV") || -1 !== e.indexOf("OKApp") || -1 !== e.indexOf("GSA/"))
                })),
                rc = oo((function (t) {
                    var e = (t = Bu(t)).Fg;
                    return t.Gf && !e.match("CriOS")
                })),
                ic = oo(go(Qu, Co("test", /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/))),
                oc = /Chrome\/(\d+)\./,
                ac = oo((function (t) {
                    return !(!(t = (yo(t, "navigator.userAgent") || "").match(oc)) || !t.length) && 76 <= $u(t[1])
                })),
                uc = oo((function (t) {
                    var e = (Qu(t) || "").toLowerCase();
                    return t = ec(t), !(-1 === e.indexOf("android") || -1 === e.indexOf(e, "mobile") || !/^android|linux armv/i.test(t))
                })),
                cc = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                sc = oo((function (t) {
                    var e = yo(t, "navigator.connection.type");
                    return lu(e) ? null : -1 === (t = qu(t)(e, cc)) ? e : "" + t
                })),
                fc = oo(go(yu("document.addEventListener"), ao)),
                lc = oo((function (t) {
                    var e = yo(t, "navigator") || {};
                    return bu((function (t, n) {
                        return t || yo(e, n)
                    }), "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                })),
                hc = oo((function (t) {
                    var e = yo(t, "navigator") || {};
                    return Ho(t = lc(t)) || (t = "", Ho(e = yo(e, "languages.0")) && (t = e)), t.toLowerCase().split("-")[0]
                })),
                dc = oo((function (t) {
                    var e = !1;
                    try {
                        e = t.top !== t
                    } catch (t) {}
                    return e
                })),
                pc = oo((function (t) {
                    var e = !1;
                    try {
                        e = t.top.contentWindow
                    } catch (t) {}
                    return e
                })),
                vc = oo((function (t) {
                    var e = !1;
                    try {
                        e = t.navigator.javaEnabled()
                    } catch (t) {}
                    return e
                })),
                mc = oo((function (t) {
                    var e = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        n = yo(t, "external");
                    n = -1 !== (yo(n, "toString") ? "" + n.toString() : "").indexOf("Sequentum");
                    var r = yo(t, "document.documentElement");
                    return !!(Yu(xo(t, yo), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Yu(xo(yo(t, "document"), yo), e) || n || r && Yu(pu(r.getAttribute, r), ["selenium", "webdriver", "driver"]))
                })),
                gc = oo((function (t) {
                    return !!(Yu(xo(t, yo), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(Qu(t)) || yo(t, "navigator.webdriver") || yo(t, "isChrome") && !yo(t, "chrome"))
                })),
                bc = oo((function (t) {
                    return Nu(xo(t, yo), ["ia_document.shareURL", "ia_document.referrer"])
                })),
                yc = oo((function (t) {
                    return !!((t = yo(t, "navigator.plugins")) && wu(t) && Yu(go(yu("name"), Eo(/Chrome PDF Viewer/)), t))
                })),
                wc = new RegExp(ou("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")),
                Ec = oo(go(yu("navigator.userAgent"), Eo(wc))),
                Cc = oo((function (t) {
                    var e = Qu(t) || "",
                        n = e.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    return n = n ? [+n[1], +n[2]] : [0, 0], 14 <= ((e = e.match(/iPhone OS ([1-9]+)_([0-9]+)/)) ? +e[1] : 0) || (tc(t) || 10 < n[0] || 10 === n[0] && 13 <= n[1]) && rc(t)
                })),
                xc = Qa.construct,
                kc = fc(window),
                Ac = {
                    Rg: 24226447,
                    Mg: 26302566,
                    Tg: 51533966,
                    Wk: 65446441,
                    Ka: "https:",
                    Ja: "771",
                    Zb: xc,
                    Qg: kc ? 512 : 2048,
                    Og: kc ? 512 : 2048,
                    Pg: kc ? 100 : 400,
                    hl: 100,
                    ll: "noindex"
                },
                Tc = {
                    id: "id",
                    Oe: "ut",
                    aa: "type",
                    Xd: "ldc",
                    gb: "nck",
                    qc: "url",
                    Nh: "referrer"
                },
                Sc = /^\d+$/,
                _c = {
                    id: function (t) {
                        t = "" + (t || "0"), Sc.test(t) || (t = "0");
                        try {
                            var e = $u(t)
                        } catch (t) {
                            e = 0
                        }
                        return e
                    },
                    aa: function (t) {
                        return "" + (t || 0 === t ? t : "0")
                    },
                    gb: Boolean,
                    Oe: Boolean
                };
            Tc.$b = "defer", _c.$b = Boolean, Tc.Uj = "yaDisableGDPR", Tc.Vj = "yaGDPRLang", Tc.exp = "experiments", Tc.jc = "ecommerce", _c.jc = function (t) {
                if (t) return !0 === t ? "dataLayer" : "" + t
            }, Tc.T = "params", Tc.hd = "userParams", Tc.Vb = "accurateTrackBounce", Tc.Bg = "triggerEvent", _c.Bg = Boolean, Tc.kg = "sendTitle", _c.kg = function (t) {
                return !!t || lu(t)
            }, Tc.Ke = "trackHash", _c.Ke = Boolean, Tc.oh = "clickmap", Tc.Ta = "webvisor", _c.Ta = Boolean, Tc.Ij = "trustedDomains", Tc.vb = "childIframe", _c.vb = Boolean, Tc.ed = "trackLinks", Tc.xh = "enableAll", Tc.ef = "disableFomAnalytics", _c.ef = Boolean;
            var Rc = bu((function (t, e) {
                    var n = e[0];
                    return t[n] = {
                        Uf: e[1],
                        Ni: _c[n]
                    }, t
                }), {}, ku(Tc)),
                Mc = {},
                Nc = oo((function (t) {
                    return t.id + ":" + t.aa
                })),
                Dc = au("1"),
                Pc = Io((function (t, e) {
                    var n = e || {};
                    return {
                        b: xo(n, co),
                        l: function (t, e) {
                            var r = n[t];
                            return lu(r) && !lu(e) ? e : r
                        },
                        o: function (t, e) {
                            return n[t] = e, this
                        },
                        De: function (t, e) {
                            return "" === e || No(e) ? this : this.o(t, e)
                        },
                        Da: xo(n, t)
                    }
                })),
                Ic = Pc((function (t) {
                    var e = "";
                    return t = bu((function (t, n) {
                        var r = n[0],
                            i = r + ":" + n[1];
                        return "t" === r ? e = i : t.push(i), t
                    }), [], ku(t)), e && t.push(e), ou(":", t)
                })),
                Oc = Ac.Ka + "//mc.yandex.ru/metrika/metrika_match.html",
                Lc = "hash host hostname href pathname port protocol search".split(" "),
                jc = "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(" "),
                Bc = oo((function (t) {
                    return (t = Gi(t).hostname.split("."))[t.length - 1]
                })),
                Fc = oo((function (t) {
                    return -1 !== Gi(t).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                })),
                Gc = oo((function (t) {
                    return (t ? t.replace(/^www\./, "") : "").toLowerCase()
                })),
                Hc = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|deli\.yango\.com|yastatic\.net|meteum\.ai|.*\.yandex|turbopages\.org|turbo\.site)$/,
                Uc = oo((function (t) {
                    var e = !1;
                    return (t = Gi(t).hostname) && (e = -1 !== t.search(Hc)), e
                })),
                Xc = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                zc = oo((function (t) {
                    var e = !1;
                    return (t = Gi(t).hostname) && (e = -1 !== t.search(Xc)), e
                })),
                Vc = /(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/,
                Yc = oo((function (t) {
                    var e = !1;
                    return (t = Gi(t).hostname) && (e = -1 !== t.search(Vc)), e
                })),
                qc = oo((function (t) {
                    return ac(t) && "https:" === Gi(t).protocol ? "SameSite=None;Secure;" : ""
                })),
                Kc = oo((function (t) {
                    var e = !1;
                    if (!t.addEventListener) return e;
                    try {
                        var n = Object.defineProperty({}, "passive", {
                            get: function () {
                                return e = !0, 1
                            }
                        });
                        t.addEventListener("test", Yo, n)
                    } catch (t) {}
                    return e
                })),
                Wc = Io((function (t, e) {
                    return t ? Tu({
                        capture: !0,
                        passive: !0
                    }, e || {}) : !!e
                })),
                Jc = oo((function (t) {
                    t = Kc(t);
                    var e = Wc(t),
                        n = {};
                    return Tu(n, {
                        C: function (t, r, i, o) {
                            return Uu((function (n) {
                                var r = e(o);
                                Fi(t, n, i, r, !1)
                            }), r), pu(n.Sb, n, t, r, i, o)
                        },
                        Sb: function (t, n, r, i) {
                            Uu((function (n) {
                                var o = e(i);
                                Fi(t, n, r, o, !0)
                            }), n)
                        }
                    })
                })),
                $c = setTimeout;
            $o.prototype.catch = function (t) {
                return this.then(null, t)
            }, $o.prototype.then = function (t, e) {
                var n = new this.constructor(Jo);
                return Zo(this, new na(t, e, n)), n
            }, $o.prototype.finally = function (t) {
                var e = this.constructor;
                return this.then((function (n) {
                    return e.resolve(t()).then((function () {
                        return n
                    }))
                }), (function (n) {
                    return e.resolve(t()).then((function () {
                        return e.reject(n)
                    }))
                }))
            }, $o.all = function (t) {
                return new $o((function (e, n) {
                    function r(t, a) {
                        try {
                            if (a && ("object" == typeof a || "function" == typeof a)) {
                                var u = a.then;
                                if ("function" == typeof u) return void u.call(a, (function (e) {
                                    r(t, e)
                                }), n)
                            }
                            i[t] = a, 0 == --o && e(i)
                        } catch (t) {
                            n(t)
                        }
                    }
                    if (!t || void 0 === t.length) return n(new TypeError("Promise.all accepts an array"));
                    var i = Array.prototype.slice.call(t);
                    if (0 === i.length) return e([]);
                    for (var o = i.length, a = 0; a < i.length; a++) r(a, i[a])
                }))
            }, $o.resolve = function (t) {
                return t && "object" == typeof t && t.constructor === $o ? t : new $o((function (e) {
                    e(t)
                }))
            }, $o.reject = function (t) {
                return new $o((function (e, n) {
                    n(t)
                }))
            }, $o.race = function (t) {
                return new $o((function (e, n) {
                    if (!t || void 0 === t.length) return n(new TypeError("Promise.race accepts an array"));
                    for (var r = 0, i = t.length; r < i; r++) $o.resolve(t[r]).then(e, n)
                }))
            }, $o.Te = "function" == typeof setImmediate && function (t) {
                setImmediate(t)
            } || function (t) {
                $c(t, 0)
            }, $o.Vg = function (t) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
            };
            var Zc = window.Promise,
                Qc = Xo(Zc, "Promise"),
                ts = Xo(yo(Zc, "resolve"), "resolve"),
                es = Xo(yo(Zc, "reject"), "reject"),
                ns = Xo(yo(Zc, "all"), "all");
            if (Lu(!1, [Qc, ts, es, ns])) Zc = $o;
            else {
                var rs = function (t) {
                    return new Promise(t)
                };
                rs.resolve = pu(ts, Zc), rs.reject = pu(es, Zc), rs.all = pu(ns, Zc), Zc = rs
            }
            var is, os, as = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                us = (os = window, function (t) {
                    return is ? new is(t) : zo("Error", os.Error) ? (is = os.Error, new os.Error(t)) : new(is = Bi)(t)
                }),
                cs = Eo(/^http./),
                ss = Eo(/^err.kn/),
                fs = /[^a-z0-9.:-]/,
                ls = oo((function (t) {
                    return ("" + ((t = yo(t, "document") || {}).characterSet || t.charset || "")).toLowerCase()
                })),
                hs = oo(go(yu("document"), xo("createElement", no))),
                ds = oo((function (t) {
                    var e = yo(t, "Element.prototype");
                    return e && (t = Ou((function (t) {
                        return zo(t, e[t])
                    }), ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ? e[t] : null
                })),
                ps = go(vi, au("INPUT")),
                vs = go(vi, au("TEXTAREA")),
                ms = go(vi, au("SELECT")),
                gs = go(yu("type"), Eo(/^(checkbox|radio)$/)),
                bs = go(vi, Eo(/^INPUT|SELECT|TEXTAREA$/)),
                ys = go(vi, Eo(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                ws = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                Es = ["submit", "image", "hidden"],
                Cs = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                xs = oo((function () {
                    for (var t = 59, e = {}, n = 0; n < Cs.length; n += 1) e[Cs[n]] = String.fromCharCode(t), t += 1;
                    return e
                })),
                ks = oo((function (t) {
                    return {
                        pm: t,
                        $a: null,
                        jb: []
                    }
                })),
                As = {},
                Ts = {};
            As.p = 500;
            var Ss = {
                i: "id",
                n: "name",
                h: "href",
                ty: "type"
            };
            Ts.h = !0, Ts.c = !0;
            var _s = {};
            _s.p = ui, _s.c = function (t, e, n) {
                return (t = jo(yo(e, "textContent"))) && n && ((n = n(e)).length && Yu(go(yu("textContent"), jo, au(t)), n) && (t = "")), ps(e) && (t = jo(e.getAttribute && e.getAttribute("value") || t)), t
            };
            var Rs, Ms, Ns = "button," + Hu((function (t) {
                    return 'input[type="' + t + '"]'
                }), ["button", "submit", "reset", "file"]).join(",") + ",a",
                Ds = xo(Ns, oi),
                Ps = ((Rs = {}).A = "h", Rs.BUTTON = "i", Rs.DIV = "i", Rs.INPUT = "ty", Rs),
                Is = [Vr, 0, _i, Yr, $r],
                Os = [_i];
            Os.push(Yr);
            var Ls = zr(Os),
                js = zr([$r]),
                Bs = zr([Vr, $r]),
                Fs = zr([0, _i, Yr, $r]),
                Gs = ((Ms = {}).h = Ls, Ms.f = Ls, Ms.er = js, Ms);
            Gs.d = js, Gs.s = zr([_i]), Gs.S = Gs.s, Gs.u = js, Gs.pi = js, Gs.m = Bs, Gs[2] = Is, Gs[6] = zr([0, _i]), Gs.t = Is, Gs.a = Fs, Gs.n = Is, Gs.p = zr([0, _i]), Gs[4] = zr([0, _i, $r]), Gs.r = Fs, Gs[1] = Fs, Gs.g = Fs, Gs.c = js, Gs.e = Is, Gs.adb = js, Gs.W = zr([0, _i]), Gs[5] = Is, Gs[8] = [qr];
            var Hs, Us = oo((function (t, e) {
                    var n;
                    return (n = e ? Gs[e] : Is) || (n = []), (n = bu((function (e, n, r) {
                        return (n = n && n(t)) && e.push([r, n]), e
                    }), [], n)).length || Li(), n
                }), uo),
                Xs = ["0", "1", "2", "3"],
                zs = Xs[0],
                Vs = Xs[1],
                Ys = Xs[2],
                qs = Hu(go(co, Co("concat", "GDPR-ok-view-detailed-")), Xs),
                Ks = Ko("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), qs, ["28", "29", "30"]),
                Ws = "3 13 14 15 16 17 28".split(" "),
                Js = go(zu(yu("ymetrikaEvent.type")), Iu(ju(Ks))),
                $s = ro("gsc", Ar),
                Zs = /:\d+$/,
                Qs = oo((function (t) {
                    var e = (Gi(t).host || "").split(".");
                    return 1 === e.length ? e[0] : bu((function (n, r, i) {
                        return 2 <= (i += 1) && !n && (i = ou(".", e.slice(-i)), Cr(t, i) && (n = i)), n
                    }), "", e)
                })),
                tf = oo(aa),
                ef = oo((function (t) {
                    br(t, "_ymBRC", "1");
                    var e = "1" !== yr(t, "_ymBRC");
                    return e || wr(t, "_ymBRC"), e
                })),
                nf = oo(gr),
                rf = oo(gr, (function (t, e, n) {
                    return "" + e + n
                })),
                of = oo(vr),
                af = ro("r", (function (t, e) {
                    var n = sr(t, e),
                        r = n[0];
                    return !n[1] && r
                })),
                uf = oo(cr, (function (t, e) {
                    return "{" + e.Xd + e.gb
                })),
                cf = oo(eo, Nc),
                sf = go(uf, Wo),
                ff = Io((function (t, e) {
                    for (var n = []; !or(e);) {
                        var r = er(e);
                        t(r, (function (t) {
                            return t(e)
                        })), n.push(r)
                    }
                    return n
                })),
                lf = Io((function (t, e) {
                    return su((function (n, r) {
                        return e(n, (function (e) {
                            try {
                                r(t(e))
                            } catch (t) {
                                n(t)
                            }
                        }))
                    }))
                })),
                hf = Io((function (t, e) {
                    return su((function (n, r) {
                        return e(n, (function (e) {
                            try {
                                t(e)(Wn(n, r))
                            } catch (t) {
                                n(t)
                            }
                        }))
                    }))
                })),
                df = [],
                pf = !1,
                vf = !1,
                mf = oo((function (t) {
                    if (t = hs(t)) return t("a")
                })),
                gf = ["webkitvisibilitychange", "visibilitychange"],
                bf = Pc((function (t) {
                    return t = ku(t), ou("", Hu((function (t) {
                        var e = t[0];
                        return t = t[1], fu(t) ? "" : e + "(" + t + ")"
                    }), t))
                })),
                yf = ko([1, null], Wi),
                wf = ko([1, 0], Wi),
                Ef = /^ *(data|javascript):/i,
                Cf = new RegExp(ou("", ["\\.(" + ou("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) + ")$"]), "i"),
                xf = ((Hs = {}).hit = "h", Hs.experiments = "ex", Hs.params = "p", Hs.reachGoal = "g", Hs.userParams = "up", Hs.trackHash = "th", Hs.accurateTrackBounce = "atb", Hs.notBounce = "nb", Hs.addFileExtension = "fe", Hs.extLink = "el", Hs.file = "fc", Hs.trackLinks = "tl", Hs.destruct = "d", Hs.setUserID = "ui", Hs.getClientID = "ci", Hs.clickmap = "cm", Hs.enableAll = "ea", Hs),
                kf = Eo(/^.+\.mtproxy\.yandex\.net$/),
                Af = oo((function (t) {
                    return "MetrikaPlayer" === t.name || (t = Gi(t).hostname, kf(t))
                })),
                Tf = oo((function () {
                    return {
                        Jb: {},
                        pending: {},
                        wb: {}
                    }
                })),
                Sf = yu("postMessage"),
                _f = Br("s.f", (function (t, e, n, r, i) {
                    e = e(r);
                    var o = Tf(t),
                        a = ou(":", [e.Y.hc, e.Y.key]);
                    if (Sf(n)) {
                        o.pending[a] = i;
                        try {
                            n.postMessage(e.ug, "*")
                        } catch (t) {
                            return void delete o.pending[a]
                        }
                        Or(t, (function () {
                            delete o.pending[a]
                        }), 5e3, "if.s")
                    }
                })),
                Rf = Br("s.fh", (function (t, e, n, r, i, o) {
                    var a = null,
                        u = null,
                        c = Tf(t),
                        s = null;
                    try {
                        u = (a = ia(t, o.data)).__yminfo, s = a.data
                    } catch (t) {
                        return
                    }
                    if (!No(u) && u.substring && "__yminfo" === u.substring(0, 8) && !No(s) && 4 === (a = u.split(":")).length)
                        if (u = e.id, e = a[1], t = a[2], a = a[3], !mo(s) && s.type && "0" === a && s.counterId) {
                            if (!s.toCounter || s.toCounter == u) {
                                c = null;
                                try {
                                    c = o.source
                                } catch (t) {}!fu(c) && Sf(c) && (o = r.N(s.type, [o, s]), i = Hu(go(co, Su(i)), o.concat([{}])), s = n([e, t, s.counterId], i), c.postMessage(s.ug, "*"))
                            }
                        } else a === "" + u && mo(s) && Pu((function (t) {
                            return !(!t.hid || !t.counterId)
                        }), s).length === s.length && (n = c.pending[ou(":", [e, t])]) && n.apply(null, [o].concat(s))
                })),
                Mf = oo((function (t, e) {
                    var n, r = no("getElementsByTagName", yo(t, "document")),
                        i = Tf(t),
                        o = Sf(t),
                        a = Lr(t),
                        u = Jc(t);
                    if (!r || !o) return null;
                    r = r.call(t.document, "iframe"), (n = {}).counterId = e.id, n.hid = "" + Ln(t), o = n,
                        function (t, e) {
                            var n = Tf(t);
                            e.C(["initToParent"], (function (t) {
                                var e = t[1];
                                n.wb[e.counterId] = {
                                    info: e,
                                    window: t[0].source
                                }
                            })).C(["initToChild"], (function (n) {
                                var r = n[0];
                                n = n[1], r.source === t.parent && e.N("parentConnect", [r, n])
                            })).C(["parentConnect"], (function (t) {
                                var e = t[1];
                                e.counterId && (n.Jb[e.counterId] = {
                                    info: e,
                                    window: t[0].source
                                })
                            }))
                        }(t, a), n = function (t, e) {
                            return function (n, r) {
                                var i, o = {
                                    hc: of (t)(pr),
                                    key: t.Math.random(),
                                    dir: 0
                                };
                                n.length && (o.hc = $u(n[0]), o.key = parseFloat(n[1]), o.dir = $u(n[2])), Tu(r, e);
                                var a = ((i = {
                                    data: r
                                }).__yminfo = ou(":", ["__yminfo", o.hc, o.key, o.dir]), i);
                                return {
                                    Y: o,
                                    ug: Di(t, a) || ""
                                }
                            }
                        }(t, o);
                    var c = ko([t, xo([], n)], _f);
                    return Uu((function (t) {
                        var e = null;
                        try {
                            e = t.contentWindow
                        } catch (t) {}
                        e && c(e, {
                            type: "initToChild"
                        }, (function (t, e) {
                            a.N("initToParent", [t, e])
                        }))
                    }), r), dc(t) && c(t.parent, {
                        type: "initToParent"
                    }, (function (t, e) {
                        a.N("parentConnect", [t, e])
                    })), u.C(t, ["message"], ko([t, e, n, a, o], Rf)), {
                        Z: a,
                        Jb: i.Jb,
                        wb: i.wb,
                        ze: c
                    }
                }), go(uo, Nc)),
                Nf = oo(Pn, go(uo, Nc)),
                Df = Br("pa.plgn", (function (t, e) {
                    var n = Nf(t, e);
                    n && n.Z.C(["pluginInfo"], Fr(t, "c.plgn", (function () {
                        var n = Mu(t);
                        return n.o("cmc", n.l("cmc", 0) + 1),
                            function (t, e) {
                                return bu((function (t, n) {
                                    return t[e[n[0]].Uf] = n[1], t
                                }), {}, ku(t))
                            }(e, Rc)
                    })))
                })),
                Pf = Io((function (t, e) {
                    return Mu(e).l(t, null)
                })),
                If = {
                    mc: function (t) {
                        return t = lo(t).l("mt", {}), (t = ku(t)).length ? bu((function (t, e, n) {
                            return t + (n ? "-" : "") + e[0] + "-" + e[1]
                        }), "", t) : null
                    }
                };
            If.oo = Pf("oo"), If.pmc = Pf("cmc"), If.clc = Pf("cls"), If.lt = function (t) {
                var e = lo(t).l("lt", null);
                return e ? t.Math.round(100 * e) : e
            }, If.re = go((function (t, e) {
                return !e.gb && af(t, e)
            }), yf), If.aw = function (t) {
                return No(t = Ou(go(No, ao), [t.document.hidden, t.document.msHidden, t.document.webkitHidden])) ? null : wf(!t)
            }, If.ifc = function (t) {
                return lo(t).l("ifc")
            }, If.ifb = function (t) {
                return lo(t).l("ifb")
            };
            var Of, Lf, jf, Bf = Au(If),
                Ff = oo((function () {
                    return {
                        kf: null,
                        zc: []
                    }
                }), Nc),
                Gf = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [function (t, e) {
                        return yo(e, "redirectCount") || yo(t, "navigation.redirectCount")
                    }],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"]
                ],
                Hf = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"]
                ],
                Uf = ((Of = {}).responseEnd = 1, Of.domInteractive = 1, Of.domContentLoadedEventStart = 1, Of.domContentLoadedEventEnd = 1, Of.domComplete = 1, Of.loadEventStart = 1, Of.loadEventEnd = 1, Of.unloadEventStart = 1, Of.unloadEventEnd = 1, Of.secureConnectionStart = 1, Of),
                Xf = oo(to),
                zf = {
                    "*": "+",
                    "-": "/",
                    fm: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_"
                },
                Vf = oo((function (t) {
                    t = yo(t, "console");
                    var e = yo(t, "log");
                    e = Vo("log", e) ? pu(e, t) : Yo;
                    var n = yo(t, "warn");
                    n = Vo("warn", n) ? pu(n, t) : e;
                    var r = yo(t, "error");
                    return {
                        log: e,
                        error: t = Vo("error", r) ? pu(r, t) : e,
                        warn: n
                    }
                })),
                Yf = Br("p.cd", (function (t) {
                    if (uc(t) || tc(t)) {
                        var e = nf(t);
                        if (No(e.l("jn"))) {
                            e.o("jn", !1);
                            var n = t.km || rc(t) ? function () {} : /./;
                            t = Vf(t), n.toString = function () {
                                return e.o("jn", !0), "Yandex.Metrika counter is initialized"
                            }, t.log("%c%s", "color: inherit", n)
                        }
                    }
                })),
                qf = /Firefox\/([0-9]+)/,
                Kf = /([0-9\\.]+) Safari/,
                Wf = /\sYptp\/\d\.(\d+)\s/,
                Jf = /Edg\/(\d+)\./,
                $f = oo((function (t) {
                    var e;
                    return !(50 <= (e = (e = Qu(t)) && (e = Wf.exec(e)) && 1 < e.length ? $u(e[1]) : 0) && 99 >= e || Rn(t, 79)) && (!Cc(t) || nc(t))
                })),
                Zf = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                Qf = oo((function (t) {
                    var e = yo(t = hs(t)("canvas"), "getContext");
                    if (!e) return null;
                    try {
                        var n = pu(e, t)("2d");
                        n.font = "72px mmmmmmmmmmlli";
                        var r = n.measureText("mmmmmmmmmmlli").width;
                        return function (t) {
                            return n.font = "72px " + t, n.measureText("mmmmmmmmmmlli").width === r
                        }
                    } catch (t) {
                        return null
                    }
                })),
                tl = Xo(String.prototype.repeat, "repeat"),
                el = tl ? function (t, e) {
                    return tl.call(t, e)
                } : function (t, e) {
                    for (var n = "", r = 0; r < e; r += 1) n += t;
                    return n
                },
                nl = [2277735313, 289559509],
                rl = [1291169091, 658871167],
                il = /\/$/,
                ol = oo(go( of , su((function (t) {
                    return -(new t.b.Date).getTimezoneOffset()
                })))),
                al = go( of , su((function (t) {
                    return t = new t.b.Date, ou("", Hu(mr, [t.getFullYear(), t.getMonth() + 1, t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()]))
                }))),
                ul = go( of , su(hr)),
                cl = oo(go( of , su((function (t) {
                    return t.ra[0]
                })))),
                sl = oo(eo),
                fl = oo(eo),
                ll = oo((function (t) {
                    var e = yo(t, "webkitRequestFileSystem");
                    if (Do(e) && !uc(t)) return new Zc(pu(e, t, 0, 0)).then((function () {
                        var e = yo(t, "navigator.storage") || {};
                        return e.estimate ? e.estimate() : {}
                    })).then((function (t) {
                        return !!((t = t.quota) && 12e7 > t)
                    })).catch(xo(!0, co));
                    if (Fu(t)) return e = yo(t, "navigator.serviceWorker"), Zc.resolve(lu(e));
                    if (e = yo(t, "openDatabase"), rc(t) && Do(e)) {
                        var n = !1;
                        try {
                            e(null, null, null, null)
                        } catch (t) {
                            n = !0
                        }
                        return Zc.resolve(n)
                    }
                    return Zc.resolve(!yo(t, "indexedDB") && (yo(t, "PointerEvent") || yo(t, "MSPointerEvent")))
                })),
                hl = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                dl = oo((function (t, e) {
                    var n = tf(t),
                        r = Gi(t).search.match(hl);
                    return r && 2 <= r.length ? (r = r[2], e.gb || n.o("turbo_uid", r), r) : (n = n.l("turbo_uid")) ? n : ""
                })),
                pl = oo((function (t) {
                    return Do(yo(t, "yandex.getSiteUid")) ? t.yandex.getSiteUid() : null
                })),
                vl = oo((function (t) {
                    var e = (t = Mu(t)).l("counterNum", 0) + 1;
                    return t.o("counterNum", e), e
                }), go(uo, Nc)),
                ml = ((Lf = {}).vf = xo(Qa.version, co), Lf.nt = sc, Lf.fp = function (t, e, n) {
                    if (n.F && n.F.nohit) return null;
                    if (e = Nc(e), (n = sl(t))[e]) return null;
                    t: {
                        var r = cl(t),
                            i = yo(t, "performance.getEntriesByType");
                        if (Do(i)) {
                            if ((t = Pu(go(co, yu("name"), au("first-contentful-paint")), i.call(t.performance, "paint"))).length) {
                                t = t[0].startTime;
                                break t
                            }
                        } else {
                            if (Do(i = yo(t, "chrome.loadTimes")) && (i = yo(i = i.call(t.chrome), "firstPaintTime"), r && i)) {
                                t = 1e3 * i - r;
                                break t
                            }
                            if (t = yo(t, "performance.timing.msFirstPaint")) {
                                t -= r;
                                break t
                            }
                        }
                        t = void 0
                    }
                    return t ? (n[e] = t, Math.round(t)) : null
                }, Lf.fu = function (t, e, n) {
                    var r = n.F;
                    return r ? (e = (yo(t, "document.referrer") || "").replace(il, ""), n = (r["page-ref"] || "").replace(il, ""), r = r["page-url"], e = e !== n, n = 0, (t = Gi(t).href !== r) && e ? n = 3 : e ? n = 1 : t && (n = 2), n) : null
                }, Lf.en = ls, Lf.la = lc, Lf.ut = function (t, e, n) {
                    var r = n.Hc;
                    return (n = n.F) && (Yc(t) || e.Oe || r) && (n.ut = "noindex"), null
                }, Lf.v = xo(Ac.Ja, co), Lf.cn = vl, Lf.dp = function (t) {
                    var e = Mu(t),
                        n = e.l("bt", {});
                    if (lu(e.l("bt"))) {
                        var r = yo(t, "navigator.getBattery");
                        try {
                            n.p = r ? r.call(t.navigator) : null
                        } catch (t) {}
                        e.o("bt", n), n.p && n.p.then && n.p.then((function (t) {
                            n.Pj = t.charging && 0 === t.chargingTime
                        }))
                    }
                    return n.Pj ? "1" : "0"
                }, Lf.ls = oo((function (t, e) {
                    var n = rf(t, e.id),
                        r = of (t),
                        i = n.l("lsid");
                    return +i ? i : (r = zi(t, 0, r(pr)), n.o("lsid", r), r)
                }), uo), Lf.hid = Ln, Lf.z = ol, Lf.i = al, Lf.et = ul, Lf.c = go(yu("navigator.cookieEnabled"), yf), Lf.rn = go(co, zi), Lf.rqn = function (t, e, n) {
                    return !(n = n.F) || n.nohit ? null : (e = ((t = rf(t, e.id)).l("reqNum", 0) || 0) + 1, t.o("reqNum", e), t.l("reqNum") === e ? e : (t.ic("reqNum"), null))
                }, Lf.u = uf, Lf.tp = go(uo, Hi, yf), Lf.tpid = go(uo, (function (t) {
                    return t = Nc(t), Mc[t] && Mc[t].Ej || null
                })), Lf.w = function (t) {
                    return (t = wi(t))[0] + "x" + t[1]
                }, Lf.s = function (t) {
                    var e = yo(t, "screen");
                    if (e) {
                        t = yo(e, "width");
                        var n = yo(e, "height");
                        return e = yo(e, "colorDepth") || yo(e, "pixelDepth"), ou("x", [t, n, e])
                    }
                    return null
                }, Lf.sk = yu("devicePixelRatio"), Lf.ifr = go(dc, yf), Lf.j = go(vc, yf), Lf.sti = function (t) {
                    return dc(t) && pc(t) ? "1" : null
                }, Lf);
            ml.pri = function (t) {
                if (ic(t)) return null;
                var e = fl(t),
                    n = e.Xf;
                return lu(n) && (e.Xf = null, ll(t).then((function (t) {
                    e.Xf = t
                }))), n ? 1 : null
            }, Tu(ml, ((jf = {}).iss = go(mc, yf), jf.hdl = go(gc, yf), jf.iia = go(bc, yf), jf.cpf = go(yc, yf), jf.ntf = oo((function (t) {
                t: switch (yo(t, "Notification.permission")) {
                    case "denied":
                        t = !1;
                        break t;
                    case "granted":
                        t = !0;
                        break t;
                    default:
                        t = null
                }
                return fu(t) ? null : t ? 2 : 1
            })), jf.eu = Pf("isEU"), jf.ns = cl, jf.np = function (t) {
                if (zi(t, 0, 100)) t = null;
                else {
                    t = jo(ec(t), 100);
                    for (var e = [], n = 0; n < t.length; n++) {
                        var r = t.charCodeAt(n);
                        128 > r ? e.push(r) : (127 < r && 2048 > r ? e.push(r >> 6 | 192) : (e.push(r >> 12 | 224), e.push(r >> 6 & 63 | 128)), e.push(63 & r | 128))
                    }
                    t = Mn(e)
                }
                return t
            }, jf)), ml.ds = function (t, e, n) {
                if (e = Nc(e), t = Ur(t), (void 0 === (n = n.F) ? {} : n).nohit) return null;
                var r = n = null;
                if (yo(t, "getEntriesByType") && (r = yo(t.getEntriesByType("navigation"), "0")) && (n = Hf), !n) {
                    var i = yo(t, "timing");
                    i && (n = Gf, r = i)
                }
                return n ? (t = function (t, e, n) {
                    return Hu((function (n) {
                        var r = n[0],
                            i = n[1];
                        if (Do(r)) return r(t, e) || null;
                        if (Do(i)) return null;
                        var o = !(!e[r] || !e[i]);
                        return !o && 2 === n.length && (o = 0 === e[r] && 0 === e[i]) && (o = n[1], o = !(Uf[n[0]] || Uf[o])), o ? 0 > (n = Math.round(e[r]) - Math.round(e[i])) || 36e5 < n ? null : n : 1 === n.length && e[r] ? Math.round(e[r]) : null
                    }), n)
                }(t, r, n), (e = function (t, e) {
                    var n = t.length ? Hu((function (t, n) {
                        var r = e[n];
                        return r === t ? null : r
                    }), t) : e;
                    return t.length = 0, Uu(go(co, Co("push", t)), e), Pu(au(null), n).length === t.length ? null : n
                }(e = Xf(e), t)) && ou(",", e)) : null
            }, ml.bu = pl, ml.td = dl, ml.wv = xo(2, co), ml.co = function (t) {
                return wf(Mu(t).l("jn"))
            };
            var gl = Au(ml);
            ml.we = function (t, e) {
                return yf(e.Ta)
            };
            var bl, yl, wl, El, Cl, xl = gl.concat(Bf),
                kl = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                Al = Io((function (t, e) {
                    if (!e[t]) {
                        var n, r = new Zc((function (t) {
                            n = t
                        }));
                        e[t] = {
                            bg: n,
                            Qa: r,
                            cg: !1
                        }
                    }
                    return e[t].Qa
                })),
                Tl = oo(go(eo, su)),
                Sl = oo((function (t, e, n) {
                    var r = Mu(t);
                    e = nf(t);
                    var i = [];
                    n = ko([t, n, r, e], Sn), ic(t) || function (t, e) {
                        if (rc(t)) {
                            var n = Qu(t).match(Kf);
                            if (n && n.length) return n[1] === e
                        }
                        return !1
                    }(t, "14.1") || i.push(ko([Cn, "pp", ""], n));
                    var o = $f(t) && !_n(t, 68);
                    return o || i.push(ko([xn, "pu", ""], n)), o || e.Qd || Cc(t) || (i.push(ko([yn, "zzlc", "na"], n)), i.push(ko([bn, "cc", ""], n))), i.length ? {
                        Ia: function (t, e) {
                            if (0 === r.l("isEU")) try {
                                Uu(go(co, io), i)
                            } catch (t) {}
                            e()
                        },
                        ba: function (t, e) {
                            var n = t.H;
                            if (n && 0 === r.l("isEU")) try {
                                Uu(su(n), i)
                            } catch (t) {}
                            e()
                        }
                    } : {}
                }), (function (t, e, n) {
                    return Nc(n)
                })),
                _l = ro("retryReqs", (function (t) {
                    return nf(t).l("retryReqs", {})
                })),
                Rl = ["0"],
                Ml = Br("g.r", (function (t) {
                    var e = of (t),
                        n = _l(t),
                        r = e(pr),
                        i = Ln(t);
                    return bu((function (t, e) {
                        var n = e[0],
                            o = e[1];
                        return o && !o.d && o.ghid && o.ghid !== i && o.time && 500 < r - o.time && o.time + 864e5 > r && 2 >= o.browserInfo.rqnl && (o.d = 1, t.push({
                            protocol: o.protocol,
                            host: o.host,
                            jj: o.resource,
                            dj: o.postParams,
                            T: o.params,
                            eh: o.browserInfo,
                            rm: o.ghid,
                            time: o.time,
                            Nb: $u(n),
                            qh: o.counterId,
                            aa: o.counterType
                        })), t
                    }), [], ku(n))
                })),
                Nl = [],
                Dl = "ru en et fi lt lv pl fr no sr".split(" "),
                Pl = ((bl = {})["GDPR-ok"] = "ok", bl["GDPR-ok-view-default"] = "ok-default", bl["GDPR-ok-view-detailed"] = "ok-detailed", bl["GDPR-ok-view-detailed-0"] = "ok-detailed-all", bl["GDPR-ok-view-detailed-1"] = "ok-detailed-tech", bl["GDPR-ok-view-detailed-2"] = "ok-detailed-tech-analytics", bl["GDPR-ok-view-detailed-3"] = "ok-detailed-tech-other", bl),
                Il = [],
                Ol = go(Js, zu(Ru(Ks)), cu(",")),
                Ll = go(Iu(ju(Ks)), wu, Boolean),
                jl = oo((function (t, e) {
                    var n = e.l("gdpr");
                    return Lu(n, Xs) ? "-" + n : ""
                })),
                Bl = oo(to),
                Fl = ((yl = {}).am = "com.am", yl.tr = "com.tr", yl.ge = "com.ge", yl.il = "co.il", yl["рф"] = "ru", yl["xn--p1ai"] = "ru", yl["укр"] = "ua", yl["xn--j1amh"] = "ua", yl["бел"] = "by", yl["xn--90ais"] = "by", yl),
                Gl = "85822663:0 21279832:0 34273590:0 64681882:0 42639109:0 23731303:0 86821095:0".split(" "),
                Hl = ((wl = {})["an.yandex.ru/mapuid/google/?partner-tag=yandex_llc"] = {
                    bc: Gl
                }, wl["an.yandex.ru/mapuid/google/?partner-tag=yandexcom"] = {
                    bc: Gl
                }, wl["an.yandex.ru/mapuid/google/?partner-tag=yandexru"] = {
                    bc: Gl
                }, wl["mc.edadeal.ru"] = {
                    Rc: /^([^/]+\.)?edadeal\.ru$/,
                    zg: "ru"
                }, wl["mc.yandexsport.ru"] = {
                    Rc: /^([^/]+\.)?yandexsport\.ru$/,
                    zg: "ru"
                }, wl["mc.kinopoisk.ru"] = {
                    Rc: /^([^/]+\.)?kinopoisk\.ru$/,
                    zg: "ru"
                }, wl),
                Ul = ((El = {}).ka = "ge", El.ro = "md", El.tg = "tj", El.tk = "tm", El.et = "ee", El.hy = "com.am", El.he = "co.li", El.ky = "kg", El.uk = "ua", El.be = "by", El.tr = "com.tr", El.kk = "kz", El),
                Xl = oo(to),
                zl = oo((function (t) {
                    var e = go(Iu(go(co, au("ru"), ao)), wo((function (t, e) {
                        return t[e] = ["mc.yandex." + e], t
                    }), {}))(jc);
                    return Uu((function (n) {
                        var r = n[0];
                        (n = n[1]).bc && !Lu(t, n.bc) || (e[r] = [r])
                    }), ku(Hl)), e
                })),
                Vl = oo((function (t) {
                    var e = Gi(t).hostname;
                    return bu((function (t, n) {
                        var r = n[0],
                            i = n[1];
                        return i.Rc && !i.Rc.test(e) || t.push(r), t
                    }), [], ku(Hl))
                })),
                Yl = Io((function (t, e) {
                    var n = Fc(e),
                        r = function (t) {
                            return t = hc(t), Ul[t] || "ru"
                        }(e),
                        i = Vl(e) || [fn(e)],
                        o = of (e),
                        a = nf(e),
                        u = a.l("synced", {});
                    return n = n ? i.concat(r) : i, u && (n = Pu((function (t) {
                        var e = (u[t] || 1) + 1440 < o(dr);
                        return e && delete u[t], e
                    }), n)), a.o("synced", u), bu((function (e, n) {
                        return Uu((function (t) {
                            var r = {
                                domain: t,
                                Fi: n
                            };
                            Fo(t, "/") && (r.mi = 1), e.push(r)
                        }), t[n] || []), e
                    }), [], n)
                })),
                ql = function (t, e) {
                    return function (e, n, r) {
                        n = Nc(r), r = zl(n);
                        var i = Yl(r),
                            o = Lu(n, Gl);
                        return Cc(e) || Fu(e) ? {} : {
                            ba: function (n, r) {
                                var a = n.H,
                                    u = Mu(e),
                                    c = Fc(e) || o,
                                    s = dc(e);
                                if (a = !(a && a.l("pv")), !c || s || a) return r();
                                if (!(c = i(e)).length) return r();
                                if (u.l("startSync")) Xl(e).push(r);
                                else {
                                    if (u.o("startSync", !0), u = ko([e, c, Yo], t), o) return u().then(r, r);
                                    if (!(c = Nl[0])) return r();
                                    c(e).then(u).then(r, go(uu(r), Fr(e, "sy.c"))).catch(Yo)
                                }
                            }
                        }
                    }
                }((function (t, e) {
                    var n = of (t),
                        r = Mu(t),
                        i = nf(t),
                        o = Us(t, "c"),
                        a = ar(t, o);
                    return bu((function (e, o) {
                        function u() {
                            var e = i.l("synced");
                            r.o("startSync", !1), e && (e[o.Fi] = c, i.o("synced", e)), Uu(io, Xl(t))
                        }
                        var c, s = a({
                            ua: ["sync.cook"]
                        }, [Ac.Ka + "//" + o.domain + (o.mi ? "" : "/sync_cookie_image_check")], {
                            Rb: 1500
                        });
                        return s.then((function () {
                            c = n(dr), u()
                        })).catch((function () {
                            c = n(dr) - 1435, u()
                        })), s = xo(s, co), e.then(s)
                    }), Zc.resolve(""), e).catch(Fr(t, "ctl"))
                })),
                Kl = !1,
                Wl = /^[a-z][\w.+-]+:/i,
                Jl = {},
                $l = [Fn, Dn, Tn(), An],
                Zl = "et w v z i u vf".split(" ");
            Zl.push("we");
            var Ql = Tn(Zl);
            $l.push(ql), $l.unshift((function (t, e, n) {
                return {
                    Ia: function (e, r) {
                        var i = dn(t, n);
                        (i = i && i.userParams) && e.hd && i(e.hd), r()
                    }
                }
            })), $l.unshift((function (t, e, n) {
                return {
                    ba: function (e, r) {
                        if (e.T && (Ui(n, e.T), !e.$ && e.H && e.F)) {
                            var i = Di(t, e.T),
                                o = Bl(t),
                                a = e.H.l("pv");
                            i && !e.F.nohit && (a ? encodeURIComponent(i).length > Ac.Og ? o.push([e.H, e.T]) : e.F["site-info"] = i : (e.$ = i, e.Mi = !0))
                        }
                        r()
                    },
                    Ia: function (e, r) {
                        var i = Bl(t),
                            o = dn(t, n),
                            a = o && o.params;
                        a && (o = Pu(go(yu("0"), au(e.H)), i), Uu((function (e) {
                            a(e[1]), e = qu(t)(e, i), i.splice(e, 1)
                        }), o)), r()
                    }
                }
            })), $l.push(cn), $l.push(un), $l.push(Sl), $l.push((function (t) {
                return {
                    ba: function (e, n) {
                        var r = e.H,
                            i = nf(t).l("fip");
                        i && r && (r.o("fip", i), Bn(e, "fip", wf(i))), n()
                    }
                }
            })), $l.push(pn());
            var th = ((Cl = {}).h = $l, Cl.er = [], Cl);
            th.adb = [];
            var eh = [Tn(), An];
            eh.push(Sl), th.f = eh, th[2] = $l, th[1] = function (t, e) {
                return Pu(go(ju(e), ao), t)
            }($l, [An]), th.a = $l, th.g = $l, th.e = $l;
            var nh = [Dn];
            nh.push((function (t) {
                return {
                    ba: function (e, n) {
                        var r = e.H,
                            i = void 0 === r ? Ic() : r,
                            o = e.Nb,
                            a = _l(t);
                        r = i.l("rqnl", 0) + 1, i.o("rqnl", r), (i = yo(a, ou(".", [o, "browserInfo"]))) && (i.rqnl = r, mn(t)), n()
                    },
                    Ia: function (e, n) {
                        vn(t, e), n()
                    }
                }
            })), th.r = nh;
            var rh = [];
            rh.push(Ql), rh.push(pn()), th.p = rh, th[6] = [Dn], th.t = $l, th[4] = [Ql], th.W = [Ql];
            var ih = [Fn, Dn, Tn()];
            ih.push(cn), ih.push(Sl), ih.push(un), ih.push(pn()), th.n = ih, th.d = [Tn(["hid", "u", "v", "vf"])], th.m = [Tn(["u", "v", "vf"]), pn()], th.s = [], th.u = [], th.S = [Tn(["v", "hid", "u", "vf", "rn"])], th.pi = [], $l.unshift((function (t, e, n) {
                return {
                    ba: function (e, r) {
                        var i = e.H,
                            o = e.F;
                        if (!i || !o) return r();
                        !Jl[n.id] && i.l("pv") && n.exp && !o.nohit && (o.exp = n.exp, Jl[n.id] = !0), i = o["page-ref"];
                        var a = o["page-url"];
                        return i && a !== i ? o["page-ref"] = an(t, i) : delete o["page-ref"], o["page-url"] = an(t, a).slice(0, Ac.Qg), r()
                    }
                }
            })), th[5] = Pu(go(ju([Fn, Dn]), ao), $l);
            var oh, ah = pu(Zc.reject, Zc, ji()),
                uh = ((oh = {}).h = Gn, oh.er = xo(ah, co), oh);
            uh.a = Gn, uh.p = gn, uh[4] = gn, uh.f = Gn, uh.n = Gn, uh[6] = function (t, e, n) {
                var r = ar(t, e);
                return function (t) {
                    return Xn(0, n, t, !0).then(ko([t, ["https://mc.yandex.md/cc"], {
                        Re: !0,
                        Ig: !1
                    }], r))
                }
            }, uh[1] = Gn, uh.n = Gn, uh.c = ar, uh.g = Gn, uh.e = Gn, uh[2] = Gn, uh.r = function (t, e, n) {
                var r = gn(t, e, n),
                    i = Gn(t, e, n);
                return function (t, e, n) {
                    return "webvisor" === n ? r(t, e, t.F["wv-part"]) : i(t, e)
                }
            }, uh.adb = Hn, uh.s = ar, uh.S = Gn, uh.u = ar, uh.pi = ar, uh.m = function (t, e, n) {
                return function (r, i) {
                    var o, a = r.F;
                    return (o = {})["page-url"] = a && a["page-url"] || "", a = o, o = Tu(r, {
                        F: Tu(r.F || {}, a)
                    }), Hn(t, e, n)(o, "clmap/" + i.id).catch(Fr(t, "c.m"))
                }
            }, uh.d = Gn, uh.t = Gn, uh.W = gn, uh[5] = Gn, uh[8] = ar;
            var ch, sh, fh = Br("g.sen", (function (t, e, n) {
                    var r = Us(t, e);
                    n = function (t, e, n) {
                        var r;
                        return (r = th[e]) || (r = $l), (r = r.slice()).unshift(ln), r.unshift(sn), Hu(go(vu([t, e, n]), io), r)
                    }(t, e, n);
                    var i = uh[e],
                        o = i ? i(t, r, n) : Gn(t, r, n);
                    return function () {
                        var t = To(arguments),
                            n = t.slice(1);
                        return t = Tu(t[0], {
                            ua: [e]
                        }), o.apply(void 0, Ko([t], n))
                    }
                }), ah),
                lh = oo(go(yu("id"), ju([26812653])), Nc),
                hh = oo(Br("dc.init", (function (t) {
                    var e = Gi(t),
                        n = Vf(t),
                        r = tf(t),
                        i = on(t),
                        o = i.xi;
                    return i = i.li, o && !i && r.o("debug", "1", void 0, e.host), jn(t) || !o && !i ? {
                        log: Yo,
                        warn: Yo,
                        error: Yo
                    } : n
                }))),
                dh = Fr(window, "h.p", (function (t, e) {
                    var n, r, i = fh(t, "h", e),
                        o = e.qc || "" + Gi(t).href,
                        a = e.Nh || t.document.referrer,
                        u = {
                            H: Ic((n = {}, n.pv = 1, n)),
                            F: (r = {}, r["page-url"] = o, r["page-ref"] = a, r)
                        };
                    return u.T = e.T, u.hd = e.hd, e.$b && u.F && (u.F.nohit = "1"), i(u, e).then((function (n) {
                        n && (e.$b || nn(t, e, "PageView. Counter " + e.id + ". URL: " + o + ". Referrer: " + a, e.T)(), zn(t, ko([t, e, n], En)))
                    })).catch(Fr(t, "h.g.s"))
                })),
                ph = oo(eo, Nc),
                vh = Br("p.ar", (function (t, e) {
                    var n = fh(t, "a", e);
                    return function (r, i, o, a, u, c) {
                        var s, f, l = {
                            F: {},
                            H: Ic((s = {}, s.pv = 1, s.ar = 1, s))
                        };
                        if (r) return i = Mo(i) ? {
                            title: i.title,
                            Zf: i.referer,
                            T: i.params,
                            Ua: i.callback,
                            b: i.ctx
                        } : {
                            title: i,
                            Zf: o,
                            T: a,
                            Ua: u,
                            b: c
                        }, (o = ph(e)).url !== r && (o.ref = o.url, o.url = r), r = r || Gi(t).href, o = i.Zf || o.ref || t.document.referrer, a = nn(t, e, "PageView. Counter " + e.id + ". URL: " + r + ". Referrer: " + o, i.T), l = n(Tu(l, {
                            T: i.T,
                            title: i.title,
                            F: Tu(l.F, (f = {}, f["page-url"] = r, f["page-ref"] = o, f))
                        }), e).then(a), en(t, "p.ar.s", l, i.Ua || Yo, i.b)
                    }
                })),
                mh = {
                    K: "stamp",
                    L: "frameId",
                    Y: "meta",
                    Ye: "base",
                    Bf: "hasBase",
                    Ve: "address",
                    Dg: "ua",
                    oe: "prev",
                    Pf: "namespace",
                    Fc: "keystrokes",
                    Jf: "isMeta",
                    Gc: "modifier",
                    lb: "pageWidth",
                    kb: "pageHeight",
                    qg: "startNode",
                    ff: "endNode",
                    Jg: "zoomFrom",
                    Lg: "zoomTo",
                    level: "level",
                    duration: "duration",
                    wa: "i",
                    Jc: "o",
                    n: "n",
                    r: "r",
                    ec: "ct",
                    ub: "at",
                    Qf: "nm",
                    Rf: "ns",
                    je: "pa",
                    me: "pr",
                    ae: "nx",
                    Ma: "h",
                    Aa: "changes",
                    Ue: "a",
                    Xe: "b",
                    nd: "c",
                    ie: "op"
                },
                gh = ["attributes", "attrs"],
                bh = function () {
                    function t(t) {
                        this.b = t
                    }
                    return t.prototype.Da = function (t) {
                        var e = tn(t);
                        return t = Hu(pu(this.Ea, this), e), Kn(Di(this.b, Hu((function (t, n) {
                            var r;
                            return Tu({}, e[n], ((r = {}).data = t, r))
                        }), t)))
                    }, t.prototype.Ea = function (t) {
                        var e = t.data;
                        return "string" != typeof e && (e = Di(this.b, tn(t.data))), e
                    }, t.prototype.La = function (t) {
                        return encodeURIComponent(t).length
                    }, t.prototype.ad = function (t, e) {
                        for (var n = Math.ceil(t.length / e), r = [], i = 0; i < e; i += 1) r.push(t.slice(i * n, n * (i + 1)));
                        return r
                    }, t.prototype.isEnabled = function () {
                        return !!this.b.JSON
                    }, t
                }(),
                yh = oo((function (t) {
                    if (void 0 === t.Float32Array || void 0 === t.Uint8Array) return Je;
                    var e = new Float32Array([-0]),
                        n = new Uint8Array(e.buffer);
                    return 128 === n[3] ? function (t, r, i, o) {
                        e[0] = r, i[o] = n[0], i[o + 1] = n[1], i[o + 2] = n[2], i[o + 3] = n[3]
                    } : function (t, r, i, o) {
                        e[0] = r, i[o] = n[3], i[o + 1] = n[2], i[o + 2] = n[1], i[o + 3] = n[0]
                    }
                })),
                wh = Ke(!1),
                Eh = Ke(!0),
                Ch = {
                    Aj: "topics",
                    fj: "publicationDate",
                    cj: "pageUrlCanonical",
                    Mj: "updateDate",
                    bh: "authors",
                    Zg: "articleInfo",
                    mj: "rubric",
                    gj: "publishersHeader",
                    eb: "involvedTime",
                    bj: "pageTitle",
                    Gi: "maxScrolled",
                    $e: "chars",
                    $g: "articleMeta"
                },
                xh = function () {
                    function t(t) {
                        this.b = t, this.Fb = go(ku, wo((function (t, e) {
                            return t[e[1]] = e[0], t
                        }), {}))(Ch)
                    }
                    return t.prototype.wg = function (t) {
                        var e, n = this.ne(t.data);
                        return {
                            K: of (this.b)(lr),
                            data: (e = {}, e[this.Fb[t.type]] = n, e)
                        }
                    }, t.prototype.ne = function (t) {
                        var e = this;
                        return mo(t) ? Hu(pu(this.ne, this), t) : Mo(t) ? go(ku, wo((function (t, n) {
                            var r = n[0];
                            return t[e.Fb[r] || r] = e.ne(n[1]), t
                        }), {}))(t) : t
                    }, t.prototype.Ea = function (t) {
                        return zt(this.b, Kt, this.wg(t))(tr(Yo))
                    }, t.prototype.La = function (t) {
                        return t[0]
                    }, t.prototype.ad = function (t) {
                        return [t]
                    }, t.prototype.Da = function (t) {
                        var e = this;
                        return t = zt(this.b, Jt, {
                            buffer: Hu(pu(this.wg, this), t)
                        }), Yn(this.b, t, 20, Qn)(hf((function (t) {
                            return t = Xt(e.b, t.slice(-4)), Yn(e.b, t, 20, Qn)
                        })))(lf((function (t) {
                            return t[t.length - 1]
                        })))
                    }, t.prototype.isEnabled = function () {
                        return Ut(this.b)
                    }, t
                }(),
                kh = function () {
                    function t(t, e, n) {
                        this.cf = 0, this.le = 1, this.jd = 5e3, this.b = t, this.sa = e, this.Be = n
                    }
                    return t.prototype.$c = function () {
                        this.cf = Or(this.b, go(pu(this.flush, this), pu(this.$c, this)), this.jd, "b.f")
                    }, t.prototype.send = function (t, e) {
                        var n = this.Be(t, e || [], this.le);
                        return this.le += 1, n
                    }, t.prototype.push = function () {}, t.prototype.flush = function () {}, t
                }(),
                Ah = ((ch = function (t) {
                    function e(e, n, r, i) {
                        return void 0 === i && (i = 0), (n = t.call(this, e, n, r) || this).Je = 0, n.tb = 0, n.Ie = 0, n.buffer = [], n.jd = 2e3, n.Z = Lr(e), n.$c(), n.Ie = i, n
                    }
                    return qo(e, t), e.prototype.sf = function (t) {
                        return Pu(Boolean, this.Z.N("ag", t))
                    }, e.prototype.rf = function (t, e) {
                        var n = this;
                        t(Wn(Fr(this.b, "wv2.b.st"), (function (t) {
                            n.send(t, e)
                        })))
                    }, e.prototype.tj = function (t, e) {
                        var n = this;
                        Qi(this.b, this.cf);
                        var r = Math.ceil(this.sa.La(e) / 63e4),
                            i = this.sa.ad(e, r);
                        Uu((function (e, i) {
                            var o, a = Tu({}, t, ((o = {}).data = e, o.partNum = i + 1, o.end = i + 1 === r, o));
                            o = n.sa.Da([a], !1), n.rf(o, [a])
                        }), i), this.$c()
                    }, e.prototype.send = function (e, n) {
                        var r = this;
                        return this.Z.N("se", n), t.prototype.send.call(this, e, n).then(co, (function () {
                            r.Z.N("see", n)
                        }))
                    }, e.Fd = function (t, n, r, i, o) {
                        return e.ld["" + t + n] || (this.ld[n] = new e(o, i, r, "m" === n ? 31457280 : 0)), this.ld[n]
                    }, e.prototype.Ai = function () {
                        return this.Ie && this.Je >= this.Ie
                    }, e.prototype.push = function (t) {
                        var e = this;
                        if (!this.Ai()) {
                            this.Z.N("p", t);
                            var n = this.sa.Ea(t),
                                r = this.sa.La(n);
                            7e5 < r ? this.tj(t, n) : (n = this.sf(this.buffer.concat([t])), n = bu((function (t, n) {
                                return t + e.sa.La(e.sa.Ea(n))
                            }), 0, n), this.tb + n + r >= 7e5 * .7 && this.flush(), this.buffer.push(t), this.tb += r)
                        }
                    }, e.prototype.C = function (t, e) {
                        this.Z.C([t], e)
                    }, e.prototype.da = function (t, e) {
                        this.Z.da([t], e)
                    }, e.prototype.flush = function () {
                        var t = this.buffer.concat(this.sf(this.buffer));
                        if (t.length) {
                            this.buffer = [], this.Je += this.tb, this.tb = 0;
                            var e = this.sa.Da(t);
                            this.rf(e, t)
                        }
                    }, e
                }(kh)).ld = {}, ch),
                Th = ((sh = {})[1] = 500, sh[2] = 500, sh[3] = 0, sh),
                Sh = function () {
                    function t(t) {
                        var e, n = this;
                        this.id = "a", this.Pd = !1, this.Ab = {}, this.ob = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            Tf: ["article"]
                        }, this.Me = ((e = {}).Answer = 3, e.Review = 2, e), this.ph = oo((function (t, e) {
                            rn(n.b, "Warning: content has only " + e.chars + " chars. Required " + Th[e.type], e)
                        })), this.b = t, this.root = Ci(t)
                    }
                    return t.prototype.Ba = function (t) {
                        return t.element
                    }, t.prototype.tf = function (t, e) {
                        var n, r = this;
                        return Fr(this.b, "P.s." + e, (function () {
                            n = r.Ab[e].call(r, t)
                        }))(), n
                    }, t.prototype.ej = function (t) {
                        var e = Tu({}, t);
                        return this.Pd && !e.id && Lu(t.type, [3, 2]) && (t = ou(", ", Hu(yu("name"), e.authors || [])), e.pageTitle = t + ": " + e.pageTitle), e.pageTitle || (e.pageTitle = this.ci(e.yb)), e.pageUrlCanonical || (t = e.id, e.pageUrlCanonical = "string" == typeof t && /^(https?:)\/\//.test(t) ? e.id : this.$h()), e.id || (e.id = e.pageTitle || e.pageUrlCanonical), e
                    }, t.prototype.va = function (t) {
                        var e = this,
                            n = {},
                            r = this.Ba(t);
                        if (!r) return null;
                        n.type = t.type, Uu((function (r) {
                            n[r] = e.tf(t, r)
                        }), Au(this.Ab));
                        var i = of (this.b);
                        return n.stamp = i(lr), n.element = t.element, n.yb = r, (n = this.ej(n)).id = n.id ? Wo(n.id) : 1, n.update = function (n) {
                            return e.Ba(t) ? e.tf(t, n) : void 0
                        }, n
                    }, t.prototype.ci = function (t) {
                        for (var e = 1; 5 >= e; e += 1) {
                            var n = ga(ii(this.b, t, "h" + e));
                            if (n) return n
                        }
                    }, t.prototype.$h = function () {
                        var t = ii(this.b, this.root, '[rel="canonical"]');
                        if (t) return t.href
                    }, t.prototype.zf = function () {
                        return 1
                    }, t.prototype.pc = function () {
                        return []
                    }, t.prototype.Hh = function () {
                        var t = this,
                            e = this.pc(),
                            n = 1;
                        return bu((function (e, r) {
                            var i = t.va({
                                element: r,
                                type: t.zf(r)
                            }) || [];
                            return mo(i) || (i = [i]), i = bu((function (e, n) {
                                var r = e.values,
                                    i = e.Df;
                                return n && n.chars > Th[n.type] && !Lu(n.id, i) ? (r.push(n), i.push(n.id)) : n && n.chars <= Th[n.type] && t.ph(n.id, n), {
                                    values: r,
                                    Df: i
                                }
                            }), {
                                values: [],
                                Df: Hu(yu("id"), e)
                            }, i).values, e.concat(Hu((function (t) {
                                var e;
                                return t = Tu(((e = {
                                    index: n,
                                    Ae: !1
                                }).involvedTime = 0, e), t), n += 1, t
                            }), i))
                        }), [], e)
                    }, t
                }(),
                _h = function (t) {
                    function e() {
                        var e, n = null !== t && t.apply(this, arguments) || this;
                        return n.id = "j", n.Pd = !0, n.bf = ou(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']), n.Ab = ((e = {}).id = function (t) {
                            var e = t.data["@id"];
                            return t = t.data.mainEntity || t.data.mainEntityOfPage, !e && t && (e = t["@id"]), e
                        }, e.chars = function (t) {
                            return "string" == typeof t.data.text ? t.data.text.length : this.Ba(t).innerText.length
                        }, e.authors = function (t) {
                            var e = [];
                            return (e = (e = e.concat(this.oc(t.data, "author"))).concat(this.oc(t.data.mainEntity, "author"))).concat(this.oc(t.data.mainEntityOfPage, "author"))
                        }, e.pageTitle = function (t) {
                            var e = t.data.headline || "";
                            return t.data.hm && (e += " " + t.data.alternativeHeadline), "" === e && (t.data.name ? e = t.data.name : t.data.itemReviewed && (e = t.data.itemReviewed)), 3 === t.type && t.data.parentItem && (e = t.data.parentItem.text), e
                        }, e.updateDate = function (t) {
                            return t.data.dateModified || ""
                        }, e.publicationDate = function (t) {
                            return t.data.datePublished || ""
                        }, e.pageUrlCanonical = function (t) {
                            return t.data.url
                        }, e.topics = function (t) {
                            return this.oc(t.data, "about", ["name", "alternateName"])
                        }, e.rubric = function (t) {
                            var e = this,
                                n = this.Ba(t);
                            return (t = Pu(Boolean, Hu((function (t) {
                                if (t = ia(e.b, t.innerText)) {
                                    var n = e.uf(t);
                                    if (n) return bu((function (t, e) {
                                        return t || ("BreadcrumbList" === e["@type"] ? e : t)
                                    }), null, n);
                                    if ("BreadcrumbList" === t["@type"]) return t
                                }
                                return null
                            }), [t.element].concat(Ki(oi(this.bf, this.b, document.body === n ? document.documentElement : n)))))).length && mo(t = t[0].itemListElement) ? Pu(Boolean, Hu((function (t) {
                                return t.item && !e.b.isNaN(t.position) ? {
                                    name: t.item.name || t.name,
                                    position: t.position
                                } : null
                            }), t)) : []
                        }, e), n
                    }
                    return qo(e, t), e.prototype.oc = function (t, e, n) {
                        return void 0 === n && (n = ["name"]), t && t[e] ? (t = mo(t[e]) ? t[e] : [t[e]], t = Pu(Boolean, Hu((function (t) {
                            return t ? "string" == typeof t ? t : bu((function (e, n) {
                                return e || t[n]
                            }), "", n) : null
                        }), t)), Hu((function (t) {
                            var e;
                            return (e = {}).name = t, e
                        }), t)) : []
                    }, e.prototype.Ba = function (t) {
                        var e = t.element,
                            n = t.data["@id"],
                            r = t.data.url;
                        return t = null, r && "string" == typeof r && (t = this.jf(r)), !t && n && "string" == typeof n && (t = this.jf(n)), t || (t = n = e.parentNode, !di("head", this.b, e) && n && 0 !== n.innerText.length) || (t = this.b.document.body), t
                    }, e.prototype.jf = function (t) {
                        try {
                            var e = ua(this.b, t).hash;
                            if (e) {
                                var n = ii(this.b, this.b.document.body, e);
                                if (n) return n
                            }
                        } catch (t) {}
                        return null
                    }, e.prototype.ke = function (t) {
                        return this.Me[t["@type"]] || 1
                    }, e.prototype.va = function (e) {
                        var n = this,
                            r = e.element;
                        if (!e.data && (e.data = ia(this.b, r.innerText), !e.data || !/schema\.org/.test(e.data["@context"]) && !mo(e.data))) return null;
                        var i = this.uf(e.data);
                        if (i) return Hu((function (e) {
                            return Lu(e["@type"], n.ob["schema.org"]) ? (e = {
                                element: r,
                                data: e,
                                type: n.ke(e)
                            }, t.prototype.va.call(n, e)) : null
                        }), i);
                        if ("QAPage" === e.data["@type"]) {
                            var o = e.data.mainEntity || e.data.mainEntityOfPage;
                            if (!o) return null
                        }
                        return "Question" === e.data["@type"] && (o = e.data), o ? (e = Xu(xo(o, yo), ["acceptedAnswer", "suggestedAnswer"]), Hu((function (e) {
                            var i;
                            return e && Lu(e["@type"], n.ob["schema.org"]) ? (e = {
                                element: r,
                                type: n.ke(e),
                                data: Tu((i = {}, i.parentItem = o, i), e)
                            }, t.prototype.va.call(n, e)) : null
                        }), e)) : Lu(e.data["@type"], this.ob["schema.org"]) ? t.prototype.va.call(this, Tu(e, {
                            type: this.ke(e.data)
                        })) : null
                    }, e.prototype.pc = function () {
                        return oi(this.bf, this.b, this.root)
                    }, e.prototype.uf = function (t) {
                        return mo(t) && t || t && mo(t["@graph"]) && t["@graph"]
                    }, e
                }(Sh),
                Rh = function (t) {
                    function e() {
                        var e, n = null !== t && t.apply(this, arguments) || this;
                        return n.id = "s", n.Pd = !0, n.Jj = Co("exec", new RegExp("schema.org\\/(" + ou("|", Au(n.Me)) + ")$")), n.Ab = ((e = {}).id = function (t) {
                            t = t.element;
                            var e = ma(this.b, t, "identifier");
                            return e ? ga(e) : (e = ma(this.b, t, "mainEntityOfPage")) && e.getAttribute("itemid") ? e.getAttribute("itemid") : null
                        }, e.chars = function (t) {
                            var e = 0;
                            t = t.element;
                            for (var n = ["articleBody", "reviewBody", "recipeInstructions", "description", "text"], r = 0; r < n.length; r += 1) {
                                var i = ma(this.b, t, n[r]);
                                if (i) {
                                    e = ga(i).length;
                                    break
                                }
                            }
                            return 0 === e && t.innerText && (e += t.innerText.length), e
                        }, e.topics = function (t) {
                            var e = this,
                                n = va(this.b, t.element, "about");
                            return Hu((function (t) {
                                var r = {
                                    name: ga(t)
                                };
                                return (n = ma(e.b, t, "name")) && (r.name = ga(n)), r
                            }), n)
                        }, e.rubric = function (t) {
                            var e = this;
                            return (t = ii(this.b, t.element, '[itemtype$="schema.org/BreadcrumbList"]')) || (t = ii(this.b, this.root, '[itemtype$="schema.org/BreadcrumbList"]')), t ? Hu((function (t) {
                                return {
                                    name: ga(ma(e.b, t, "name")),
                                    position: ga(ma(e.b, t, "position"))
                                }
                            }), va(this.b, t, "itemListElement")) : []
                        }, e.updateDate = function (t) {
                            return (t = ma(this.b, t.element, "dateModified")) ? ba(t) : ""
                        }, e.publicationDate = function (t) {
                            return (t = ma(this.b, t.element, "datePublished")) ? ba(t) : ""
                        }, e.pageUrlCanonical = function (t) {
                            return (t = va(this.b, t.element, "url")).length ? t[0].href ? t[0].href : ga(t) : null
                        }, e.pageTitle = function (t) {
                            var e = "",
                                n = t.element,
                                r = ma(this.b, n, "headline");
                            return r && (e += ga(r)), (r = ma(this.b, n, "alternativeHeadline")) && (e += " " + ga(r)), "" === e && ((r = ma(this.b, n, "name")) || (r = ma(this.b, n, "itemReviewed")), r && (e += ga(r))), 3 === t.type && (t = di('[itemtype$="schema.org/Question"]', this.b, n)) && (t = ma(this.b, t, "text")) && (e += ga(t)), e
                        }, e.authors = function (t) {
                            var e = this;
                            return t = va(this.b, t.element, "author"), Hu((function (t) {
                                var n, r = ((n = {}).name = "", n);
                                return /.+schema.org\/(Person|Organization)/.test(t.getAttribute("itemtype") || "") && (n = ma(e.b, t, "name")) && (r.name = ga(n)), r.name || (r.name = t.getAttribute("content") || t.innerText || t.getAttribute("href")), r
                            }), t)
                        }, e), n
                    }
                    return qo(e, t), e.prototype.zf = function (t) {
                        return t = t.getAttribute("itemtype") || "", (t = this.Jj(t)) ? this.Me[t[1]] : 1
                    }, e.prototype.va = function (e) {
                        return e.element && e.element.innerText && e.element.innerText.length ? t.prototype.va.call(this, e) : null
                    }, e.prototype.pc = function () {
                        return oi(ou(",", Hu((function (t) {
                            return '[itemtype$="schema.org/' + t + '"]'
                        }), this.ob["schema.org"])), this.b, this.root)
                    }, e
                }(Sh),
                Mh = function (t) {
                    function e(e) {
                        var n;
                        return (e = t.call(this, e) || this).id = "o", e.Ab = ((n = {}).chars = function (t) {
                            return (t = this.Ba(t)).innerText ? t.innerText.length : 0
                        }, n.authors = function (t) {
                            return this.Ed(t.data.author)
                        }, n.pageTitle = function (t) {
                            return this.vc(t.data.title) || ""
                        }, n.updateDate = function (t) {
                            return this.vc(t.data.modified_time)
                        }, n.publicationDate = function (t) {
                            return this.vc(t.data.published_time)
                        }, n.pageUrlCanonical = function (t) {
                            return this.vc(t.data.url)
                        }, n.rubric = function (t) {
                            return this.Ed(t.data.section)
                        }, n.topics = function (t) {
                            return this.Ed(t.data.tag)
                        }, n), e.yh = new RegExp("^(og:)?((" + ou("|", e.ob.Tf) + "):)?"), e
                    }
                    return qo(e, t), e.prototype.Ed = function (t) {
                        var e;
                        return t ? mo(t) ? Hu((function (t) {
                            var e;
                            return (e = {}).name = t, e
                        }), t) : [(e = {}, e.name = t, e)] : []
                    }, e.prototype.vc = function (t) {
                        return mo(t) ? t.length ? t[0] : null : t
                    }, e.prototype.pc = function () {
                        var t = oi('meta[property="og:type"]', this.b, this.b.document.body);
                        return [this.b.document.head].concat(t)
                    }, e.prototype.Th = function (t) {
                        var e = this,
                            n = t.element,
                            r = {},
                            i = this.Ba(t);
                        return (n = oi("meta[property]", this.b, n === this.b.document.head ? n : i)).length ? (Uu((function (t) {
                            try {
                                if (t.parentNode === i || t.parentNode === e.b.document.head) {
                                    var n = t.getAttribute("property").replace(e.yh, ""),
                                        o = ga(t);
                                    r[n] ? mo(r[n]) ? r[n].push(o) : r[n] = [r[n], o] : r[n] = o
                                }
                            } catch (t) {
                                Xr(e.b, "og.ed", t)
                            }
                        }), n), Lu(r.type, this.ob.Tf) ? Tu(t, {
                            data: r
                        }) : null) : null
                    }, e.prototype.Ba = function (t) {
                        t = t.element;
                        var e = this.b.document;
                        return t === e.head ? e.body : t.parentNode
                    }, e.prototype.va = function (e) {
                        return (e = this.Th(e)) ? t.prototype.va.call(this, e) : null
                    }, e
                }(Sh),
                Nh = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                Dh = function () {
                    function t(t, e, n, r) {
                        this.Dc = !1, this.Y = {}, this.scroll = {
                            x: 0,
                            y: 0
                        }, this.eb = this.Nf = 0, this.Zd = this.Wf = "", this.ea = [], this.Ga = 0, this.rb = {
                            Ma: 0,
                            Pe: 0
                        }, this.buffer = n, this.Ub = pu(this.Ub, this), this.rc = pu(this.rc, this), this.Kc = pu(this.Kc, this), this.b = t, this.vd = r, this.Wc = e, this.Ud = "pai" + e.id, this.Bb(), this.gf = Jc(this.b), this.time = of (this.b), this.Eg(), this.wc = Mu(this.b)
                    }
                    return t.prototype.start = function () {
                        var t = this;
                        if (!this.Dc) {
                            this.buffer.C("ag", this.rc), this.buffer.C("se", this.Kc), this.vj();
                            var e = this.wc.l(this.Ud, []),
                                n = !e.length;
                            e.push(pu(this.Ci, this)), this.wc.Fa(this.Ud, e), n && this.eg(), this.wc.Fa("pai", (function () {
                                return t.ea.length ? bu((function (t, e) {
                                    return (t.Xc || 0) <= (e.Xc || 0) ? e : t
                                }), t.ea[0], t.ea.slice(1)).id : 0
                            })), this.Ub({
                                type: "page",
                                target: this.b
                            })
                        }
                    }, t.prototype.stop = function () {
                        this.buffer.da("se", this.Kc), this.buffer.da("ag", this.rc), this.Kj(), this.Dc = !0
                    }, t.prototype.Lf = function (t) {
                        return di("html", this.b, t) !== this.b.document.documentElement
                    }, t.prototype.eg = function () {
                        var t = this;
                        Fr(this.b, "p.ic" + this.Wc.id, (function () {
                            if (!t.Dc) {
                                var e = t.wc.l(t.Ud),
                                    n = t.Wc.Hh();
                                Uu((function (t) {
                                    var e = Hu((function (t) {
                                        return Tu({}, t)
                                    }), n);
                                    Do(t) && t(e)
                                }), e), t.Ga = Or(t.b, pu(t.eg, t), 1e3, "p")
                            }
                        }))()
                    }, t.prototype.Ci = function (t) {
                        this.Dc || (this.Lj(t), this.Nj(), this.qj())
                    }, t.prototype.Ub = function (t) {
                        var e = this;
                        Fr(this.b, "p.ec." + this.Wc.id, (function () {
                            try {
                                var n = t.type,
                                    r = t.target
                            } catch (t) {
                                return
                            }
                            var i = "page" === n;
                            if ("scroll" === n || i) {
                                var o = [e.b, e.b.document, e.b.document.documentElement, xi(e.b)];
                                Lu(r, o) && e.Bb()
                            }("resize" === n || i) && e.Eg(), n = e.time(pr);
                            var a = Math.min(n - e.Nf, 5e3);
                            if (e.eb += Math.round(a), e.Nf = n, e.Y && e.scroll && e.rb) {
                                var u = e.rb.Ma * e.rb.Pe;
                                e.ea = Hu((function (t) {
                                    var n = Tu({}, t),
                                        r = e.Y[n.id],
                                        i = bi(t.yb);
                                    if (!r || e.Lf(n.element) || !i) return n;
                                    r = (t = e.b.Math).max((e.scroll.y + e.rb.Ma - r.y) / r.height, 0);
                                    var o = i.height * i.width;
                                    return i = e.gh(i), n.Xc = i / u, n.visibility = i / o, (.9 <= n.visibility || .1 <= n.Xc) && (n.involvedTime += a), n.maxScrolled = t.round(1e4 * r) / 1e4, n
                                }), e.ea)
                            }
                        }))()
                    }, t.prototype.gh = function (t) {
                        var e = t.top,
                            n = t.bottom,
                            r = t.left,
                            i = this.rb,
                            o = i.Pe;
                        i = i.Ma;
                        var a = this.b.Math;
                        return t = a.min(a.max(t.right, 0), o) - a.min(a.max(r, 0), o), (a.min(a.max(n, 0), i) - a.min(a.max(e, 0), i)) * t
                    }, t.prototype.Lj = function (t) {
                        var e = Hu((function (t) {
                            return t.id
                        }), this.ea);
                        this.ea = this.ea.concat(Pu((function (t) {
                            return !Lu(t.id, e)
                        }), t))
                    }, t.prototype.Eg = function () {
                        var t = Ei(this.b) || wi(this.b);
                        this.rb = {
                            Pe: t[0],
                            Ma: t[1]
                        }
                    }, t.prototype.Nj = function () {
                        var t = this;
                        Fr(this.b, "p.um." + this.Wc.id, (function () {
                            var e = [];
                            t.Bb(), t.Y = bu((function (n, r) {
                                var i;
                                if (t.Lf(r.element)) e.push(r), delete n[r.id];
                                else {
                                    var o = ((i = {}).id = r.id, i.involvedTime = Math.max(r.involvedTime, 0), i.maxScrolled = r.maxScrolled || 0, i.chars = r.update && r.update("chars") || 0, i);
                                    r.yb && (i = bi(r.yb)) && (o.x = Math.max(Math.round(i.left) + t.scroll.x, 0), o.y = Math.max(Math.round(i.top) + t.scroll.y, 0), o.width = Math.round(i.width), o.height = Math.round(i.height)), n[r.id] = o
                                }
                                return n
                            }), {}, t.ea), Uu((function (e) {
                                e = qu(t.b)(e, t.ea), t.ea.splice(e, 1)
                            }), e)
                        }))()
                    }, t.prototype.Kc = function () {
                        this.Wf = this.Zd
                    }, t.prototype.rc = function () {
                        var t, e, n = Hu(xo(this.Y, yo), Au(this.Y));
                        return n.length && (this.Zd = Di(this.b, n), this.Wf !== this.Zd) ? ((t = {}).type = "publishersHeader", t.data = ((e = {}).articleMeta = n || [], e.involvedTime = this.eb, e), t) : null
                    }, t.prototype.qj = function () {
                        var t = this;
                        if (this.ea.length) {
                            var e = Pu((function (t) {
                                return !t.Ae
                            }), this.ea);
                            Uu((function (e) {
                                var n, r = Tu({}, e);
                                delete r.yb, delete r.Ae, delete r.index, delete r.involvedTime, delete r.visibility, delete r.Xc, delete r.maxScrolled, delete r.update, delete r.element, delete r.type, t.buffer.push(((n = {}).type = "articleInfo", n.stamp = r.stamp, n.data = r, n)), e.Ae = !0
                            }), e), e.length && rn(this.b, "Publisher content info found: ", e)
                        }
                    }, t.prototype.vj = function () {
                        this.gf.C(this.b, Nh, this.Ub)
                    }, t.prototype.Kj = function () {
                        this.gf.Sb(this.b, Nh, this.Ub)
                    }, t.prototype.Bb = function () {
                        this.scroll = {
                            x: this.b.pageXOffset || yo(this.b, "document.documentElement.scrollLeft") || 0,
                            y: this.b.pageYOffset || yo(this.b, "document.documentElement.scrollLeft") || 0
                        }
                    }, t
                }(),
                Ph = {};
            _h && (Ph.json_ld = _h), Rh && (Ph.schema = Rh, Ph.microdata = Rh), Mh && (Ph.opengraph = Mh);
            var Ih, Oh, Lh, jh, Bh, Fh, Gh = Br("p.p", (function (t, e) {
                    function n(n, r, o) {
                        return i(Tu({}, c, {
                            $: n,
                            af: Ht(r)
                        }), e, o).catch(Fr(t, "s.ww.p"))
                    }
                    if (!zo("querySelectorAll", t.document.querySelectorAll)) return Zc.resolve();
                    var r = [new bh(t)];
                    r.unshift(new xh(t));
                    var i = fh(t, "p", e),
                        o = Ou((function (t) {
                            return t.isEnabled()
                        }), r);
                    r = Ic();
                    var a = rf(t, e.id),
                        u = a.l("pai");
                    u && (a.ic("pai"), r.o("pai", u));
                    var c = {
                        F: {},
                        H: r,
                        Hf: !(o instanceof bh)
                    };
                    return wn(t, e, Fr(t, "ps.s", (function (r) {
                        if (r = yo(r, "settings.publisher.schema")) {
                            r = Hi(e) ? "microdata" : r;
                            var i = Ph[r];
                            if (i && o) {
                                var a = Nc(e),
                                    u = Ah.Fd(a, "e", n, o, t);
                                i = new i(t), new Dh(t, i, u, a).start(), rn(t, 'Publishers analytics schema "' + r + '"')
                            }
                        }
                    })))
                })),
                Hh = Io((function (t, e) {
                    return function (t, e) {
                        var n = {};
                        return Gt(t)((function (t) {
                            n = t[e] || {}
                        })), n
                    }(t, e)
                })),
                Uh = Br("c.c.cc", (function (t) {
                    var e = Mu(t),
                        n = go(Hh(t), (function (e) {
                            var n;
                            return Tu({}, e, ((n = {}).oldCode = !!t.ya_cid, n.clickmap = !!e.clickmap, n))
                        }));
                    return Fr(t, "g.c.cc", go(pu(e.l, e, "counters", {}), Au, zu(n)))
                })),
                Xh = Br("gt.c.rs", (function (t, e) {
                    var n, r = Nc(e),
                        i = e.id,
                        o = e.aa,
                        a = e.oh,
                        u = e.Ta,
                        c = e.Ke,
                        s = ko([t, r], Bt);
                    return Ft(t, r, ((n = {}).id = i, n.type = +o, n.clickmap = a, n.webvisor = !!u, n.trackHash = !!c, n)), s
                })),
                zh = Br("th.e", (function (t, e) {
                    function n() {
                        o || (u = vo(t, "onhashchange") ? Jc(t).C(t, ["hashchange"], a) : wa(t, a))
                    }
                    var r = fh(t, "t", e),
                        i = jt(t, Nc(e)),
                        o = !1,
                        a = Fr(t, "h.h.ch", pu(Ea, null, t, e, r)),
                        u = Yo;
                    return e.Ke && (n(), o = !0), {
                        Fj: Fr(t, "tr.hs.h", (function (t) {
                            var e;
                            t ? n() : u(), i(((e = {}).trackHash = o = !!t, e))
                        })),
                        unsubscribe: u
                    }
                })),
                Vh = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1
                },
                Yh = oo((function () {
                    return bu((function (t, e) {
                        var n = Wo(e + "/tag.js");
                        return Vh[n] || (t[n] = 1), t
                    }), {}, ["mc.yandex.ru", "mc.yandex.com", "cdn.jsdelivr.net/npm/yandex-metrica-watch"])
                })),
                qh = 1,
                Kh = {},
                Wh = {},
                Jh = Br("nb.p", (function (t, e) {
                    function n(e) {
                        s() || (e = "number" == typeof e ? e : 15e3, e = function (t, e, n) {
                            function r() {
                                Kh[p] = !0, o(!1), e()
                            }

                            function i() {
                                if (Qi(t, Wh[p]), Kh[p]) o(!1);
                                else {
                                    var e = Math.max(0, n - (f ? l : l + u(pr) - h));
                                    e ? Wh[p] = Or(t, r, e, "u.t.d.c") : r()
                                }
                            }

                            function o(t) {
                                Uu((function (e) {
                                    var n = e[0],
                                        r = e[1];
                                    e = e[2], t ? d.C(n, r, e) : d.Sb(n, r, e)
                                }), v)
                            }
                            var a = xo(!1, o);
                            if (fc(t)) return {
                                id: Or(t, e, n, "u.t.d"),
                                df: a
                            };
                            var u = of (t),
                                c = !1,
                                s = !1,
                                f = !0,
                                l = 0,
                                h = u(pr),
                                d = Jc(t),
                                p = qh;
                            qh += 1, Wh[p] = 0;
                            var v = [
                                [t, ["blur"], function () {
                                    f = c = s = !0, l += u(pr) - h, h = u(pr), i()
                                }],
                                [t, ["focus"], function () {
                                    c || s || (l = 0), h = u(pr), c = s = !0, f = !1, i()
                                }],
                                [t.document, ["click", "mousemove", "keydown", "scroll"], function () {
                                    s || (c = !0, f = !1, s = !0, i())
                                }]
                            ];
                            return o(!0), i(), {
                                id: p,
                                df: a
                            }
                        }(t, r(!1), e), p = e.id, o = e.df, f())
                    }

                    function r(n) {
                        return function (r) {
                            var i, o, u;
                            if (void 0 === r && ((i = {}).ctx = {}, i.callback = Yo, r = i), n || !d && !c.Qd) {
                                d = !0, f(), p && function (t, e) {
                                    fc(t) ? Qi(t, e) : (Kh[e] = !0, Qi(t, Wh[e] || 0))
                                }(t, p);
                                var s = l(pr);
                                i = ($u(c.l("lastHit")) || 0) < s - 18e5;
                                var h = .1 > Math.random();
                                if (c.o("lastHit", s), s = Ic(((o = {}).nb = "1", o.cl = v, o.ar = "1", o)), o = ph(e), o = {
                                        F: (u = {}, u["page-url"] = o.url || Gi(t).href, u),
                                        H: s
                                    }, u = Vf(t).warn, !r.callback && r.ctx && u('"callback" argument missing'), n || i || h || ! function (t, e) {
                                        return t && e ? Un(t) === Un(e) : !t && !e
                                    }(t.location.href, t.document.referrer)) return u = a(o, e).then((function () {
                                    if (!n) {
                                        var r, i, o, a, u, c = .002,
                                            s = e.id === Ac.Rg ? 1 : .002;
                                        void 0 === c && (c = 1), void 0 === s && (s = 1);
                                        var f = t.performance;
                                        if (f && Do(f.getEntriesByType) && (c = Math.random() > c, s = Math.random() > s, !c || !s)) {
                                            f = t.performance.getEntriesByType("resource");
                                            for (var l = {}, h = {}, d = {}, p = Yh(t), v = 0; v < f.length; v += 1) {
                                                var m = f[v],
                                                    g = m.name.replace(/^https?:\/\//, "").split("?")[0],
                                                    b = Wo(g),
                                                    y = ((r = {}).dns = Math.round(m.domainLookupEnd - m.domainLookupStart), r.tcp = Math.round(m.connectEnd - m.connectStart), r.duration = Math.round(m.duration), r.response = Math.round(m.responseEnd - m.requestStart), r);
                                                "script" !== m.initiatorType || c || (h[g] = Tu(y, ((i = {}).name = m.name, i.decodedBodySize = m.decodedBodySize, i))), !Vh[b] && !p[b] || l[g] || s || (l[g] = Tu(y, ((o = {}).pages = t.location.href, o)))
                                            }
                                            Au(l).length && (d.timings8 = l), Au(h).length && (d.scripts = h), Au(d).length && fh(t, "d", e)({
                                                H: Ic((a = {}, a.ar = "1", a.pv = "1", a)),
                                                $: Di(t, d) || void 0,
                                                F: (u = {}, u["page-url"] = t.location && "" + t.location.href, u)
                                            }, {
                                                id: Ac.Tg,
                                                aa: "0"
                                            }).catch(Fr(t, "r.tim.ng2"))
                                        }
                                    }
                                })), en(t, "l.o.l", u, r.callback, r.ctx)
                            }
                            return null
                        }
                    }
                    var i, o, a = fh(t, "n", e),
                        u = Nc(e),
                        c = rf(t, e.id),
                        s = xo(xo(u, Hh(t)), go(io, yu("accurateTrackBounce"))),
                        f = xo(((i = {}).accurateTrackBounce = !0, i), jt(t, u)),
                        l = of (t),
                        h = l(pr),
                        d = !1,
                        p = 0,
                        v = 0;
                    return wn(t, e, (function (t) {
                        v = t.Ih - h
                    })), e.Vb && n(e.Vb), {
                        Oi: r(!0),
                        Vb: n,
                        zd: o
                    }
                })),
                $h = ["yandex_metrika_callback" + Qa.callbackPostfix, "yandex_metrika_callbacks" + Qa.callbackPostfix],
                Zh = Br("cb.i", (function (t) {
                    var e = $h[0],
                        n = $h[1];
                    Do(t[e]) && t[e](), "object" == typeof t[n] && Uu((function (e, r) {
                        t[n][r] = null, Ji(t, e)
                    }), t[n]), Uu((function (e) {
                        try {
                            delete t[e]
                        } catch (n) {
                            t[e] = void 0
                        }
                    }), $h)
                })),
                Qh = {
                    sm: Eo(/[/&=?#]/)
                },
                td = Br("go.in", (function (t, e, n, r) {
                    return void 0 === n && (n = "goal"),
                        function (i, o, a, u) {
                            var c, s;
                            if (!i || Qh[n] && Qh[n](i)) return null;
                            var f = o,
                                l = a || Yo;
                            Do(o) && (l = o, f = void 0, u = a);
                            var h = nn(t, e, "Reach goal. Counter: " + e.id + ". Goal id: " + i, f),
                                d = "goal" === n;
                            return o = fh(t, "g", e), a = function (t, e, n, r) {
                                var i = Gi(t),
                                    o = i.hostname;
                                return i = i.href, (e = ph(e).url) && (o = (t = ua(t, e)).hostname, i = t.href), [r + "://" + o + "/" + n, i || ""]
                            }(t, e, i, n), i = a[0], a = a[1], f = o({
                                T: f,
                                H: Ic((c = {}, c.ar = 1, c)),
                                F: (s = {}, s["page-url"] = i, s["page-ref"] = a, s)
                            }, e).then((function () {
                                d && h(), r && r()
                            })), en(t, "g.s", f, l, u)
                        }
                })),
                ed = Io((function (t, e) {
                    Ho(e) ? t.push(e) : Uu(go(co, Co("push", t)), e)
                })),
                nd = Br("cl.p", (function (t, e) {
                    function n(n, i, a, u) {
                        void 0 === u && (u = {}), a ? Ot(t, e, {
                            url: a,
                            Eb: !0,
                            Cc: n,
                            Hc: i,
                            sender: r,
                            b: u.ctx,
                            Ua: u.callback,
                            title: u.title,
                            T: u.params
                        }) : o.warn("Empty link")
                    }
                    var r = fh(t, "2", e),
                        i = [],
                        o = Vf(t),
                        a = Nc(e),
                        u = Fr(t, "s.s.tr", xo(jt(t, a), Lt));
                    return a = {
                        b: t,
                        Va: e,
                        Gh: i,
                        sender: r,
                        globalStorage: Mu(t),
                        rh: rf(t, e.id),
                        ri: Ln(t),
                        Gj: xo(xo(a, Hh(t)), go(io, yu("trackLinks")))
                    }, a = Fr(t, "cl.p.c", xo(a, It)), a = Jc(t).C(t, ["click"], a), e.ed && u(e.ed), {
                        file: Fr(t, "file.clc", ko([!0, !1], n)),
                        Ch: Fr(t, "e.l.l.clc", ko([!1, !0], n)),
                        Xg: i = Fr(t, "add.f.e.clc", ed(i)),
                        ed: u,
                        zd: a
                    }
                })),
                rd = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                id = [
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                od = {
                    F: {
                        t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                    }
                },
                ad = {
                    id: 42822899,
                    aa: "0"
                },
                ud = ((Oh = {}).s = "p", Oh[8] = "i", Oh),
                cd = ro("csp", (function (t, e) {
                    return fh(t, "s", e)({}, ["https://ymetrica1.com/watch/3/1"])
                })),
                sd = go(yu("settings.pcs"), au("1")),
                fd = Br("s", (function (t, e) {
                    return wn(t, e, (function (n) {
                        var r = Mu(t);
                        if (!r.l("dSync", !1)) return r.o("dSync", !0), Pt(t, n, {
                            Va: e,
                            Kb: "s",
                            Wd: "ds",
                            wj: function (e, n, r) {
                                var i, o, a = e.Vc;
                                return e = e.host, yo(a, "settings") ? $i(ji("ds.e")) : (n = n(pr) - r, r = e[1], a = Ic(((i = {}).di = a, i.dit = n, i.dip = r, i)), (o = {})["page-url"] = Gi(t).href, i = o, fh(t, "S", ad)({
                                    H: a,
                                    F: i
                                }, ad).catch(Fr(t, "ds.rs")))
                            }
                        })
                    }))
                })),
                ld = oo(go(yu("performance.memory.jsHeapSizeLimit"), Co("concat", ""))),
                hd = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                dd = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                pd = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                vd = ["availWidth", "availHeight", "availTop"],
                md = ["webgl", "experimental-webgl"],
                gd = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
                bd = xo(ji("ccf"), $i),
                yd = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                wd = Io(ki)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                Ed = Br("clm.p", (function (t, e) {
                    if (Zu(t)) return Yo;
                    var n, r = fh(t, "m", e),
                        i = Nc(e),
                        o = of (t),
                        a = o(pr),
                        u = xo(xo(i, Hh(t)), go(io, yu("clickmap"))),
                        c = null,
                        s = Mu(t);
                    return i = Fr(t, "clm.p.c", (function (i) {
                        var f = u();
                        if (f) {
                            var l = s.l("cls", 0);
                            s.o("cls", l + 1);
                            var h = (l = "object" == typeof f ? f : {}).filter;
                            f = l.isTrackHash || !1;
                            var d = Hu((function (t) {
                                return ("" + t).toUpperCase()
                            }), l.ignoreTags || []);
                            lu(n) && (n = l.quota || null);
                            var p = !!l.quota;
                            if (i = {
                                    element: kt(t, i),
                                    position: Tt(t, i),
                                    button: At(i),
                                    time: o(pr)
                                }, l = Gi(t).href, function (t, e, n, r, i) {
                                    if (vo(t, "ymDisabledClickmap") || Af(t) || !e || !e.element) return !1;
                                    if (t = vi(e.element), i && !i(e.element, t) || Lu(e.button, [2, 3]) && "A" !== t || Yu(au(t), r)) return !1;
                                    if (r = e.element, e && n) {
                                        if (50 > e.time - n.time) return !1;
                                        if (i = Math.abs(n.position.x - e.position.x), t = Math.abs(n.position.y - e.position.y), e = e.time - n.time, n.element === r && 2 > i && 2 > t && 1e3 > e) return !1
                                    }
                                    for (; r;) {
                                        if (wd(r)) return !1;
                                        r = r.parentElement
                                    }
                                    return !0
                                }(t, i, c, d, h)) {
                                if (p) {
                                    if (!n) return;
                                    --n
                                }
                                h = (d = li(t, i.element))[0], d = d[1], p = hi(t, i.element), h = ["rn", zi(t), "x", Math.floor(65535 * (i.position.x - p.left) / (h || 1)), "y", Math.floor(65535 * (i.position.y - p.top) / (d || 1)), "t", Math.floor((i.time - a) / 100), "p", ui(t, i.element), "X", i.position.x, "Y", i.position.y], h = ou(":", h), f && (h += ":wh:1"),
                                    function (t, e, n, r, i) {
                                        var o;
                                        r(e = {
                                            H: Ic(),
                                            F: (o = {}, o["page-url"] = e, o["pointer-click"] = n, o)
                                        }, i).catch(Fr(t, "c.s.c"))
                                    }(t, l, h, r, e), c = i
                            }
                        }
                    })), Jc(t).C(yo(t, "document"), ["click"], i)
                })),
                Cd = Br("i.e", oo((function (t) {
                    var e = Mu(t),
                        n = e.l("isEU");
                    if (lu(n)) {
                        var r = $u(kr(t, "is_gdpr") || "");
                        Lu(r, [0, 1]) ? (e.o("isEU", r), n = !!r) : (t = yo(t = nf(t).l("wasSynced"), "params.eu")) && (e.o("isEU", t), n = !!t)
                    }
                    return n
                }), (function (t) {
                    return Mu(t).l("isEU")
                }))),
                xd = function () {
                    function t(t, e) {
                        this.b = t, this.Rh = e
                    }
                    return t.prototype.Da = function (t) {
                        return Kn(Xu(pu(this.Ea, this), t))
                    }, t.prototype.Ea = function (t, e) {
                        var n = this,
                            r = [],
                            i = this.Rh(this.b, e && e.type, t.type);
                        return i && (r = Xu((function (e) {
                            return e({
                                b: n.b,
                                ia: t
                            }) || []
                        }), i)), r
                    }, t.prototype.La = function (t) {
                        return t.length
                    }, t.prototype.ad = function (t) {
                        return [t]
                    }, t.prototype.isEnabled = function () {
                        return !0
                    }, t
                }(),
                kd = function (t) {
                    function e(e, n, r) {
                        return (e = t.call(this, e, n, r) || this).buffer = [], e.Ng = 7500, e.jd = 3e4, e.$c(), e
                    }
                    return qo(e, t), e.prototype.push = function (t, e) {
                        var n = this.sa.Ea(t, e);
                        Yi(this.buffer, n), this.sa.La(this.buffer) > this.Ng && this.flush()
                    }, e.prototype.flush = function () {
                        var t = this.buffer;
                        t.length && (this.send(t), this.buffer = [])
                    }, e
                }(kh),
                Ad = "metrikaId_" + Math.random(),
                Td = {
                    sd: 0
                },
                Sd = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                _d = ["email", "tel"],
                Rd = /ym-hide-content/,
                Md = /ym-show-content/,
                Nd = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                Dd = [65, 90],
                Pd = [97, 122],
                Id = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
                Od = new RegExp("(" + ou("|", Sd) + ")", "i"),
                Ld = ["password", "passwd", "pswd"],
                jd = new RegExp("(" + ou("|", Sd.concat("имя фамилия отчество индекс телефон адрес паспорт номер(-|\\.|_|\\s){0,2}карты электронная(-|\\.|_|\\s){0,2}почта дата(-|\\.|_|\\s){0,2}рождения дом улица квартира город область".split(" "))) + ")", "i"),
                Bd = oo((function () {
                    var t;
                    return (t = {}).A = 1, t.ABBR = 2, t.ACRONYM = 3, t.ADDRESS = 4, t.APPLET = 5, t.AREA = 6, t.B = 7, t.BASE = 8, t.BASEFONT = 9, t.BDO = 10, t.BIG = 11, t.BLOCKQUOTE = 12, t.BODY = 13, t.BR = 14, t.BUTTON = 15, t.CAPTION = 16, t.CENTER = 17, t.CITE = 18, t.CODE = 19, t.COL = 20, t.COLGROUP = 21, t.DD = 22, t.DEL = 23, t.DFN = 24, t.DIR = 25, t.DIV = 26, t.DL = 27, t.DT = 28, t.EM = 29, t.FIELDSET = 30, t.FONT = 31, t.FORM = 32, t.FRAME = 33, t.FRAMESET = 34, t.H1 = 35, t.H2 = 36, t.H3 = 37, t.H4 = 38, t.H5 = 39, t.H6 = 40, t.HEAD = 41, t.HR = 42, t.HTML = 43, t.I = 44, t.IFRAME = 45, t.IMG = 46, t.INPUT = 47, t.INS = 48, t.ISINDEX = 49, t.KBD = 50, t.LABEL = 51, t.LEGEND = 52, t.LI = 53, t.LINK = 54, t.MAP = 55, t.MENU = 56, t.META = 57, t.NOFRAMES = 58, t.NOSCRIPT = 59, t.OBJECT = 60, t.OL = 61, t.OPTGROUP = 62, t.OPTION = 63, t.P = 64, t.PARAM = 65, t.PRE = 66, t.Q = 67, t.S = 68, t.SAMP = 69, t.SCRIPT = 70, t.SELECT = 71, t.SMALL = 72, t.SPAN = 73, t.STRIKE = 74, t.STRONG = 75, t.STYLE = 76, t.SUB = 77, t.SUP = 78, t.TABLE = 79, t.TBODY = 80, t.TD = 81, t.TEXTAREA = 82, t.TFOOT = 83, t.TH = 84, t.THEAD = 85, t.TITLE = 86, t.TR = 87, t.TT = 88, t.U = 89, t.UL = 90, t.VAR = 91, t.NOINDEX = 100, t
                })),
                Fd = [17, 18, 38, 32, 39, 15, 11, 7, 1],
                Gd = function () {
                    var t = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        qm: new RegExp("(" + ou("|", t) + ")", "i"),
                        zm: new RegExp("(" + ou("|", t.concat("имя;фамилия;отчество;индекс;телефон;адрес;паспорт;Номер(-|\\.|_|\\s){0,2}карты;дата(-|\\.|_|\\s){0,2} рождения;дом;улица;квартира;город;область".split(";"))) + ")", "i"),
                        om: /ym-record-keys/i,
                        Qi: "•",
                        ym: 88
                    }
                }(),
                Hd = zu(xo(Gd.Qi, co)),
                Ud = !0,
                Xd = "",
                zd = !1,
                Vd = !0,
                Yd = !1,
                qd = Io((function (t, e) {
                    var n = ko([t, "efv." + e.event], Fr);
                    return e.M = Hu(go(co, n), e.M), e
                })),
                Kd = oo((function (t) {
                    var e = [],
                        n = [],
                        r = [];
                    return t.document.attachEvent && !t.opera && (e.push(dt), n.push(Da), n.push(Pa)), t.document.addEventListener ? e.push(Oa) : (n.push(Ia), r.push(Oa)),
                        function (t, e) {
                            var n = Pu((function (t) {
                                    return 0 < t.M.length
                                }), e),
                                r = Su({
                                    target: t.document,
                                    type: "document"
                                });
                            return Hu(go(co, r, qd(t)), n)
                        }(t, e = Ko([{
                            target: t,
                            type: "window",
                            event: "beforeunload",
                            M: [Yo]
                        }, {
                            target: t,
                            type: "window",
                            event: "unload",
                            M: [Yo]
                        }, {
                            event: "click",
                            M: [ja]
                        }, {
                            event: "dblclick",
                            M: [ja]
                        }, {
                            event: "mousedown",
                            M: [ja]
                        }, {
                            event: "mouseup",
                            M: [Ba]
                        }, {
                            event: "keydown",
                            M: [Ua]
                        }, {
                            event: "keypress",
                            M: [Xa]
                        }, {
                            event: "copy",
                            M: [Ga]
                        }, {
                            event: "blur",
                            M: e
                        }, {
                            event: "focusin",
                            M: n
                        }, {
                            event: "focusout",
                            M: r
                        }], !t.document.attachEvent || t.opera ? [{
                            target: t,
                            type: "window",
                            event: "focus",
                            M: [pt]
                        }, {
                            target: t,
                            type: "window",
                            event: "blur",
                            M: [dt]
                        }] : [], t.document.addEventListener ? [{
                            event: "focus",
                            M: [Ia]
                        }, {
                            event: "change",
                            M: [La]
                        }, {
                            event: "submit",
                            M: [za]
                        }] : [{
                            type: "formInput",
                            event: "change",
                            M: [La]
                        }, {
                            type: "form",
                            event: "submit",
                            M: [za]
                        }]))
                })),
                Wd = oo((function (t) {
                    return Ko(xi(t) ? [{
                        target: t,
                        type: "document",
                        event: "mouseleave",
                        M: [Va]
                    }] : [])
                })),
                Jd = ["submit", "beforeunload", "unload"],
                $d = oo((function (t, e) {
                    var n = e(t);
                    return bu((function (t, e) {
                        return t[e.type + ":" + e.event] = e.M, t
                    }), {}, n)
                })),
                Zd = xo(Kd, (function (t, e, n, r) {
                    return $d(e, t)[n + ":" + r] || []
                })),
                Qd = /^\s*function submit\(\)/,
                tp = /opera mini/i,
                ep = Br("fw.p", (function (t, e) {
                    return e.ef || !e.Ta ? Zc.resolve(Yo) : ft(t, e, new xd(t, Zd), Kd, Jd)
                })),
                np = Br("pr.p", (function (t, e) {
                    var n, r;
                    Xi(t) && fh(t, "5", e)({
                        H: Ic(((n = {}).pq = 1, n.ar = 1, n)),
                        F: (r = {}, r["page-url"] = Gi(t).href, r["page-ref"] = yo(t, "document.referrer") || "", r)
                    }, e).catch(Fr(t, "pr.p.s"))
                })),
                rp = go(Au, yu("0")),
                ip = Br("c.m.p", (function (t, e) {
                    return xo(jt(t, Nc(e)), st)
                })),
                op = Br("e.a.p", (function (t, e) {
                    var n = dn(t, e);
                    return n = ko([go(co, su(!0)), Pu(Boolean, Hu(xo(n, yo), ["clickmap", "trackLinks", "accurateTrackBounce"]))], Hu), e.xh && n(), n
                })),
                ap = Br("cc.i", (function (t, e) {
                    var n = ko([t, e], ct);
                    wn(t, e, n = ko([t, n, 300], Or))
                })),
                up = Br("s.f.i", (function (t, e) {
                    return wn(t, e, (function (n) {
                        (yo(n, "settings.button_goals") || -1 !== Gi(t).href.indexOf("yagoalsbuttons=1")) && (Jc(t).C(t, ["click"], Fr(t, "c.t.c", go(yu("target"), ko([t, e], Ya(t, e, 0, ut))))), nn(t, e, "Button goal. Counter " + e.id + ". Init.")())
                    }))
                })),
                cp = Br("p.ai", (function (t, e) {
                    return new Zc((function (n) {
                        (ic(t) || nc(t)) && n(wn(t, e, (function (n) {
                            var r;
                            return (n = yo(n, "settings.sbp")) ? at(t, Tu({}, n, ((r = {}).c = e.id, r)), 10) : Yo
                        }))), n(Yo)
                    }))
                })),
                sp = Br("8", (function (t, e) {
                    return wn(t, e, (function (n) {
                        var r, i = yo(n, "settings.sbp");
                        return i && Pt(t, n, {
                            Va: e,
                            Kb: "8",
                            data: Tu({}, i, (r = {}, r.c = e.id, r)),
                            Wd: "cs"
                        })
                    }))
                })),
                fp = Br("p.fh", (function (t, e) {
                    var n, r;
                    void 0 === e && (e = !0);
                    var i = nf(t),
                        o = of (t),
                        a = i.l("wasSynced"),
                        u = {
                            id: 3,
                            aa: "0"
                        };
                    return e && a && a.time + 864e5 > o(pr) ? Zc.resolve(a) : fh(t, "f", u)({
                        H: Ic((n = {}, n.pv = 1, n)),
                        F: (r = {}, r["page-url"] = Gi(t).href, r["page-ref"] = t.document.referrer, r)
                    }, u).then((function (t) {
                        var e;
                        return (e = {}).time = o(pr), e.params = yo(t, "settings"), e.bkParams = yo(t, "userData"), t = e, i.o("wasSynced", t), t
                    })).catch(Fr(t, "f.h"))
                })),
                lp = ["ecommerce", "user_id"],
                hp = Br("pa.int", (function (t, e) {
                    return function () {
                        var n, r, i = To(arguments),
                            o = ot(i);
                        if (!o) return null;
                        i = o.sh;
                        var a = o.T;
                        if (o = o.Ua, !Mo(a) && !mo(a)) return null;
                        var u = fh(t, "1", e),
                            c = ph(e).url,
                            s = yo(a, "__ym.user_id"),
                            f = Au(a),
                            l = Lu("__ymu", f),
                            h = Lu("__ym", f) && s;
                        f = !lh(e);
                        var d = a;
                        return d.__ym && ((d = Tu({}, a)).__ym = bu((function (t, e) {
                            var n = yo(a, "__ym." + e);
                            return n && (t[e] = n), t
                        }), {}, lp)), s = nn(t, e, h ? "Set user id " + s : (l ? "User p" : "P") + "arams. Counter " + e.id, h ? void 0 : JSON.stringify(d)), u = u({
                            T: a,
                            H: Ic((n = {}, n.pa = 1, n.ar = 1, n)),
                            F: (r = {}, r["page-url"] = c || Gi(t).href, r)
                        }, e).then(f ? s : Yo), en(t, "p.s", u, o, i)
                    }
                })),
                dp = Br("exps.int", (function (t, e) {
                    return function (n, r, i) {
                        var o, a;
                        if (void 0 === r && (r = Yo), n && 0 < n.length) {
                            var u = fh(t, "e", e),
                                c = ph(e).url;
                            return n = u({
                                H: Ic((o = {}, o.ex = 1, o.ar = 1, o)),
                                F: (a = {}, a["page-url"] = c || Gi(t).href, a.exp = n, a)
                            }, e), en(t, "exps.s", n, r, i)
                        }
                    }
                })),
                pp = Br("y.p", (function (t, e) {
                    var n = Pn(t, e);
                    if (n) {
                        var r = Nr(t),
                            i = ko([t, n, e], it);
                        _r(t, r, (function (t) {
                            t.C(["params"], i)
                        })), n.Z.C(["params"], go(yu("1"), i))
                    }
                })),
                vp = ro("is", (function (t) {
                    var e = tf(t),
                        n = "" + Ac.Ja + Wo("Wjw75ghm7fa7JW8p");
                    if (Gi(t).hash.substring(1, n.length + 1) === n || e.l("debug_build") === Ac.Ja) return e.o("debug_build", Ac.Ja), ai(t, {
                        src: "https://yastatic.net/metrika-static-watch/tag.js"
                    })
                })),
                mp = oo(eo),
                gp = go(Co("exec", /counterID=(\d+)/), yu("1")),
                bp = Io((function (t, e) {
                    var n = mp(t),
                        r = Ki(e),
                        i = r[0],
                        o = r[1];
                    if (r = r.slice(2), o) {
                        var a = "" + i,
                            u = {
                                id: 1,
                                aa: "0"
                            },
                            c = gp(a);
                        c ? u.id = c : -1 === a.indexOf(":") ? (a = $u(a), u.id = a) : (c = (a = a.split(":"))[1], u.id = $u(a[0]), u.aa = Dc(c) ? "1" : "0"), u = (a = [dn(t, u), u])[0], a = a[1], n[c = Nc(a)] || (n[c] = {}), n = n[c], "init" === o ? u || vp(t) || (t["yaCounter" + a.id] = new t.Ya[Ac.Zb](Tu({}, r[0], a))) : u && u[o] && n.ti ? u[o].apply(u, r) : ((u = n.pg) || (u = [], n.pg = u), u.push(Ko([i, o], r)))
                    }
                })),
                yp = ((jh = {}).transaction_id = "id", jh.item_id = "id", jh.item_name = "name", jh.item_brand = "brand", jh.promotion_name = "coupon", jh.index = "position", jh.item_variant = "variant", jh.value = "revenue", jh.item_category = "category", jh),
                wp = ((Bh = {}).view_item = "detail", Bh.add_to_cart = "add", Bh.remove_from_cart = "remove", Bh.begin_checkout = "checkout", Bh.purchase = "purchase", Bh),
                Ep = "currencyCode add delete remove purchase checkout detail".split(" "),
                Cp = Br("dl.w", (function (t, e, n) {
                    var r = 0;
                    return Mr(t, t[e], n) || (r = Or(t, (function () {
                            Cp(t, e, n)
                        }), 1e3, "ec.dl")),
                        function () {
                            return Qi(t, r)
                        }
                })),
                xp = Br("p.e", (function (t, e) {
                    var n = dn(t, e);
                    if (n) {
                        n = pu(n.params, n);
                        var r, i = Fr(t, "h.ee", ko([t, n], tt)),
                            o = function (t) {
                                r = t, t.qa.C(i)
                            };
                        if (e.jc) return Cp(t, e.jc, o);
                        var a = wn(t, e, (function (e) {
                            return (e = yo(e, "settings.ecommerce")) ? Cp(t, e, o) : Yo
                        }));
                        return function () {
                            a.then((function (t) {
                                t(), r && r.unsubscribe()
                            }))
                        }
                    }
                })),
                kp = Br("fid", (function (t) {
                    var e, n = Yo;
                    if (!Do(t.PerformanceObserver)) return n;
                    var r = Mu(t);
                    if (r.l("fido")) return n;
                    r.o("fido", !0);
                    var i = new t.PerformanceObserver(Fr(t, "fid", (function (e) {
                        e = e.getEntries()[0], r.o("fid", t.Math.round(100 * (e.processingStart - e.startTime))), n()
                    })));
                    n = function () {
                        return i.disconnect()
                    };
                    try {
                        i.observe(((e = {}).type = "first-input", e.buffered = !0, e))
                    } catch (t) {}
                    return n
                })),
                Ap = Br("ecm.a", xo("add", Q)),
                Tp = Br("ecm.r", xo("remove", Q)),
                Sp = Br("ecm.d", xo("detail", Q)),
                _p = Br("ecm.p", xo("purchase", Q)),
                Rp = xo("form", di),
                Mp = xo("form", oi),
                Np = oo((function (t) {
                    return ou("[^\\d<>]*", t.split(""))
                })),
                Dp = oo((function (t) {
                    return new RegExp(Np(t), "g")
                })),
                Pp = go(xo("replace", Co), vu([/\D/g, ""]), io),
                Ip = /\S/,
                Op = xo(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], bo),
                Lp = oo((function (t) {
                    return (t = function (t) {
                        return t ? go(zu((function (t) {
                            var e = (t = t.split("="))[1];
                            return [t[0], No(e) ? void 0 : Ii(e)]
                        })), wo((function (t, e) {
                            return t[e[0]] = e[1], t
                        }), {}))(t.split("&")) : {}
                    }((t = Gi(t)).search.substring(1)))["_ym_status-check"] = t["_ym_status-check"] || "", t._ym_lang = t._ym_lang || "ru", t
                })),
                jp = go(Lp, yu("_ym_status-check"), $u),
                Bp = go(Lp, yu("_ym_lang")),
                Fp = ["https://iframe-toloka.com/"],
                Gp = Eo(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                Hp = ["form", "button", "phone", "status"],
                Up = oo((function (t, e, n) {
                    n.inline ? j(t, n) : (t._ym__postMessageEvent = e, t._ym__inpageMode = n.inpageMode, t._ym__initMessage = n.initMessage, function (t, e) {
                        var n = hs(t);
                        if (n) {
                            n = n("div");
                            var r = Ci(t);
                            if (r) {
                                n.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                                var i = n.firstChild;
                                i.onload = function () {
                                    ai(i.contentWindow, {
                                        src: e
                                    })
                                }, t._ym__remoteIframeEl = i, r.appendChild(n), n.removeChild(i);
                                var o = null;
                                n.attachShadow ? o = n.attachShadow({
                                    mode: "open"
                                }) : n.createShadowRoot ? o = n.createShadowRoot() : n.webkitCreateShadowRoot && (o = n.webkitCreateShadowRoot()), o ? o.appendChild(i) : (r.appendChild(i), t._ym__remoteIframeContainer = i)
                            }
                        }
                    }(t, n.resource))
                }), (function (t, e, n) {
                    return n.id
                })),
                Xp = Br("cs.init", (function (t, e) {
                    var n, r = jp(t);
                    r && e.id === r && "0" === e.aa && ((n = {}).lang = Bp(t), n.fileId = "status", n.id = "" + e.id, Or(t, ko([t, r = n], j), 0, "cs"))
                })),
                zp = oo((function (t) {
                    return Zu(t) || !zo("querySelectorAll", t.document.querySelectorAll)
                })),
                Vp = oo(U),
                Yp = oo(ia, uo),
                qp = Br("phc.p", (function (t, e) {
                    return zp(t) ? Yo : wn(t, e, (function (n) {
                        var r = e.id,
                            i = aa(t, void 0, r),
                            o = i.l("phc_settings") || "";
                        if (n = yo(n, "settings.phchange")) {
                            var a = Di(t, n) || "";
                            a !== o && i.o("phc_settings", a)
                        } else o && (n = Yp(t, o));
                        i = yo(n, "clientId"), o = yo(n, "orderId"), n = yo(n, "phones") || [], i && o && n.length && (Tu(o = {
                            xb: "",
                            Ib: "",
                            og: 0,
                            ha: {},
                            ra: [],
                            Kf: !1,
                            Za: !0,
                            b: t,
                            ac: e
                        }, {
                            Kf: !0
                        }), I(t, r, o), n = jr(t), i = Pr(t, n, 1e3), r = pu(I, null, t, r, o), i.C(r), H(t, n))
                    }))
                })),
                Kp = Br("phc.h", (function (t, e) {
                    return function (t) {
                        return tc(t) || uc(t) || /mobile/i.test(Qu(t)) || !lu(yo(t, "orientation"))
                    }(t) || zp(t) ? null : wn(t, e, (function (n) {
                        if (!yo(n, "settings.phchange")) {
                            var r = aa(t, "").l("yaHidePhones");
                            r = r ? ia(t, r) : "", (n = yo(n, "settings.phhide") || r) && F(t, e, n)
                        }
                    }))
                })),
                Wp = Br("up.int", (function (t, e) {
                    return Fr(t, "up.c", (function (n, r, i) {
                        var o, a = dn(t, e),
                            u = hh(t).warn;
                        a ? Mo(n) ? ((o = {}).__ymu = n, n = o, (o = a.params) && o(n, r || Yo, i)) : u("Wrong user params") : u("No counter instance found")
                    }))
                })),
                Jp = Br("trigger.in", (function (t, e) {
                    e.Bg && zn(t, ko([t, "yacounter" + e.id + "inited"], gi), "t.i")
                })),
                $p = Br("destruct.e", (function (t, e, n) {
                    return function () {
                        var r = Mu(t),
                            i = e.id;
                        Uu((function (e, n) {
                            return Do(e) && Fr(t, "dest.fr." + n, e)()
                        }), n), delete r.l("counters")[Nc(e)], delete t["yaCounter" + i]
                    }
                })),
                Zp = Br("fip", (function (t, e) {
                    if (!$f(t) || Fu(t)) {
                        var n = nf(t);
                        if (!n.l("fip")) {
                            var r = go(zu(go((function (e, n) {
                                return Br("fip." + n, e)(t)
                            }), pu(pa, null))), cu("-"))(e);
                            n.o("fip", r)
                        }
                    }
                })),
                Qp = xo("9-d5ve+.r%7", co),
                tv = Br("ad", (function (t, e) {
                    if (!e.gb) {
                        var n = Mu(t);
                        if (!n.l("adBlockEnabled")) {
                            var r = function (t) {
                                    Lu(t, ["2", "1"]) && n.o("adBlockEnabled", t)
                                },
                                i = tf(t),
                                o = i.l("isad");
                            if (o) r(o);
                            else {
                                var a = xo("adStatus", n.o),
                                    u = function (t) {
                                        return r(t = t ? "1" : "2"), a("complete"), i.o("isad", t, 1200), t
                                    },
                                    c = fh(t, "adb", e);
                                if (!n.l("adStatus")) {
                                    a("process");
                                    var s = "metrika/a" + Qp().replace(/[^a-v]+/g, "") + "t.gif";
                                    ! function (t, e) {
                                        var n = t.document;
                                        if (Lu(n.readyState, ["interactive", "complete"])) zn(t, e);
                                        else {
                                            var r = Jc(t),
                                                i = r.C,
                                                o = r.Sb,
                                                a = function () {
                                                    o(n, ["DOMContentLoaded"], a), o(t, ["load"], a), e()
                                                };
                                            i(n, ["DOMContentLoaded"], a), i(t, ["load"], a)
                                        }
                                    }(t, (function () {
                                        return c({}, s).then(xo(!1, u)).catch(xo(!0, u))
                                    }))
                                }
                            }
                        }
                    }
                })),
                ev = Br("suid.int", (function (t, e) {
                    return function (n, r, i) {
                        var o = dn(t, e),
                            a = Vf(t);
                        Ho(n) || Vi(t, n) ? (n = bo(["__ym", "user_id", n]), o.params(n, r || Yo, i)) : a.error("Incorrect user ID")
                    }
                })),
                nv = Br("guid.int", (function (t, e) {
                    return function (n) {
                        var r = cr(t, e);
                        return n && Ji(t, n, null, r), r
                    }
                })),
                rv = function () {
                    function t(t, e, n) {
                        this.Ei = "wv2.c", this.Hb = [], this.fa = [], this.b = t, this.J = D(t, this, n, this.Ei), this.D = e, this.Wa = this.D.Vh(), this.start = this.J.G(this.start, "st"), this.stop = this.J.G(this.stop, "sp")
                    }
                    return t.prototype.start = function () {
                        var t = this;
                        this.Hb = Hu((function (e) {
                            var n = e[0],
                                r = e[2];
                            return e = pu(t.J.G(e[1], n[0]), t), t.Wa.C(r || t.b, n, e)
                        }), this.fa)
                    }, t.prototype.stop = function () {
                        Uu(io, this.Hb)
                    }, t.prototype.X = function (t) {
                        return this.D.ma().X(t)
                    }, t
                }(),
                iv = ["checkbox", "radio"],
                ov = /pwd|value|password/i,
                av = yu("location.href"),
                uv = function (t) {
                    function e(e, n, r) {
                        return (n = t.call(this, e, n, r) || this).ja = {
                            elements: [],
                            attributes: []
                        }, n.index = 0, n.ce = n.J.G(n.ce, "o"), n.wd = n.J.G(n.wd, "io"), n.kd = n.J.G(n.kd, "ao"), n.se = n.J.G(n.se, "a"), n.pe = n.J.G(n.pe, "at"), n.te = n.J.G(n.te, "r"), n.qe = n.J.G(n.qe, "c"), n.qa = new e.MutationObserver(n.ce), n
                    }
                    return qo(e, t), e.prototype.start = function () {
                        this.qa.observe(this.b.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    }, e.prototype.stop = function () {
                        this.qa.disconnect()
                    }, e.prototype.kd = function (t) {
                        var e = t.target;
                        t = t.attributeName;
                        var n = this.ja.elements.indexOf(e); - 1 === n && (n = this.ja.elements.push(e) - 1, this.ja.attributes[n] = {}), this.ja.attributes[n] || (this.ja.attributes[n] = {}), n = this.ja.attributes[n];
                        var r = e.getAttribute(t);
                        n[t] = N(this.b, e, t, r, this.D.tc()).value
                    }, e.prototype.wd = function (t) {
                        function e(t) {
                            var e = so(n.b)(t, r);
                            return -1 === e ? (r.push(t), t = {
                                Bd: {}
                            }, i.push(t), t) : i[e]
                        }
                        var n = this,
                            r = [],
                            i = [];
                        Uu((function (t) {
                            var r = t.attributeName,
                                i = t.removedNodes,
                                o = t.oldValue,
                                a = t.target,
                                u = t.nextSibling,
                                c = t.previousSibling;
                            switch (t.type) {
                                case "attributes":
                                    n.kd(t);
                                    var s = e(a);
                                    s.Bd[r] || (s.Bd[r] = N(n.b, a, r, o, n.D.tc()).value);
                                    break;
                                case "childList":
                                    i && Uu((function (t) {
                                        (s = e(t)).pf || Tu(s, {
                                            pf: a,
                                            Lh: u || void 0,
                                            Mh: c || void 0
                                        })
                                    }), Ki(i));
                                    break;
                                case "characterData":
                                    (s = e(a)).qf || (s.qf = o)
                            }
                        }), t);
                        var o = this.D.ma();
                        Uu((function (t, e) {
                            o.Ce(t, i[e])
                        }), r)
                    }, e.prototype.ce = function (t) {
                        var e = this;
                        if (av(this.b)) {
                            var n = this.D.K();
                            this.wd(t), Uu((function (t) {
                                var r = t.addedNodes,
                                    i = t.removedNodes,
                                    o = t.target;
                                switch (t.type) {
                                    case "childList":
                                        i && i.length && e.te(Ki(i), n), r && r.length && e.se(Ki(r), n);
                                        break;
                                    case "characterData":
                                        e.qe(o, n)
                                }
                            }), t), this.pe(n)
                        } else this.stop()
                    }, e.prototype.pe = function (t) {
                        var e = this;
                        Uu((function (n, r) {
                            var i = e.sc();
                            e.D.V("mutation", {
                                index: i,
                                attributes: e.ja.attributes[r],
                                target: e.X(n)
                            }, "ac", t)
                        }), this.ja.elements), this.ja.elements = [], this.ja.attributes = []
                    }, e.prototype.se = function (t, e) {
                        var n = this,
                            r = this.sc();
                        this.D.ma().yc({
                            ga: t,
                            Zc: function (t) {
                                t = Hu((function (t) {
                                    return delete(t = Tu({}, t)).node, t
                                }), t), n.D.V("mutation", {
                                    index: r,
                                    ga: t
                                }, "ad", e)
                            }
                        })
                    }, e.prototype.te = function (t, e) {
                        var n = this,
                            r = this.sc(),
                            i = this.D.ma(),
                            o = Hu((function (t) {
                                var e = i.removeNode(t);
                                return K(n.b, t, (function (t) {
                                    i.removeNode(t)
                                })), e
                            }), t);
                        this.D.V("mutation", {
                            index: r,
                            ga: o
                        }, "re", e)
                    }, e.prototype.qe = function (t, e) {
                        var n = this.sc();
                        this.D.V("mutation", {
                            value: t.textContent,
                            target: this.X(t),
                            index: n
                        }, "tc", e)
                    }, e.prototype.sc = function () {
                        var t = this.index;
                        return this.index += 1, t
                    }, e
                }(rv),
                cv = function () {
                    function t(t, e) {
                        var n = this;
                        this.nc = [], this.Xa = [], this.$d = 1, this.Ga = 0, this.hb = {}, this.Bc = {}, this.Md = function (t) {
                            return !!n.Xa.length && Lu(t, n.Xa)
                        }, this.removeNode = function (t) {
                            var e = n.X(t),
                                r = vi(t);
                            if (r) return r = "NR:" + r.toLowerCase(), n.Md(r) && n.Z.N(r, {
                                data: {
                                    node: t,
                                    id: e
                                }
                            }), e
                        }, this.bb = function (t) {
                            var e = vi(t);
                            if (e) {
                                var r = t.__ym_indexer;
                                return r || (r = n.$d, t.__ym_indexer = r, n.$d += 1, e = "NA:" + e.toLowerCase(), n.Md(e) && n.Z.N(e, {
                                    data: {
                                        node: t,
                                        id: r
                                    }
                                })), r
                            }
                            return null
                        }, this.b = t;
                        var r = D(t, this, "i");
                        this.Z = Lr(t), this.options = e, this.start = r.G(this.start, "st"), this.stop = r.G(this.stop, "sp"), this.X = r.G(this.X, "i"), this.Ce = r.G(this.Ce, "o"), this.yc = r.G(this.yc, "a"), this.removeNode = r.G(this.removeNode, "r"), this.ca = r.G(this.ca, "s")
                    }
                    return t.prototype.Ce = function (t, e) {
                        var n = this.bb(t);
                        fu(n) || (this.Bc[n] && this.X(t), this.Bc[n] = e)
                    }, t.prototype.C = function (t, e, n) {
                        t = "" + e + t, this.Xa.push(t), this.Md(t) || this.Xa.push(t), this.Z.C([t], n)
                    }, t.prototype.da = function (t, e, n) {
                        var r = "" + e + t;
                        this.Xa = Pu((function (t) {
                            return t !== r
                        }), this.Xa), this.Z.da([r], n)
                    }, t.prototype.start = function () {
                        this.Ga = Or(this.b, go(pu(this.ca, this, !1), this.start), 50, "i.s")
                    }, t.prototype.stop = function () {
                        this.flush(), Qi(this.b, this.Ga), this.nc = []
                    }, t.prototype.yc = function (t) {
                        var e = this,
                            n = [],
                            r = 0,
                            i = {
                                Zc: t.Zc,
                                result: [],
                                Ac: 0,
                                ga: n
                            };
                        this.nc.push(i), Uu((function (t) {
                            K(e.b, t, (function (t) {
                                var o = e.bb(t);
                                fu(o) || (n.push(t), e.hb[o] && e.X(t), e.hb[o] = {
                                    node: t,
                                    event: i,
                                    Hj: r
                                }, r += 1)
                            }))
                        }), t.ga)
                    }, t.prototype.X = function (t) {
                        if (t === this.b) return 0;
                        var e = this.bb(t),
                            n = this.hb[e],
                            r = this.Ph(e),
                            i = r.pf,
                            o = r.Bd,
                            a = r.qf,
                            u = r.Lh,
                            c = r.Mh;
                        if (n) {
                            r = n.event, n = n.Hj;
                            var s = this.b.document.documentElement === t;
                            u = u || t.nextSibling;
                            var f = c || t.previousSibling;
                            c = !s && u ? this.bb(u) : null, f = !s && f ? this.bb(f) : null, s = this.b, u = this.options, i = this.bb(i || t.parentNode || t.parentElement) || 0;
                            var l = o,
                                h = void 0;
                            if (void 0 === f && (f = null), void 0 === c && (c = null), void 0 === l && (l = {}), void 0 === h && (h = vi(t)), lu(h) ? t = void 0 : (o = {
                                    id: e,
                                    oe: f !== i ? f : null,
                                    next: c !== i ? c : null,
                                    parent: i,
                                    name: h.toLowerCase(),
                                    node: t
                                }, Si(t) ? (a = function (t, e) {
                                    if (Ho(e)) return e;
                                    var n = t.textContent;
                                    return Ho(n) || Ho(n = t.data) || Ho(n = t.nodeValue) ? n : ""
                                }(t, a), o.attributes = {}, (o.content = a) && (t = xt(s, t)) && (o.content = "" !== a.trim() ? function (t, e) {
                                    return ou("", Hu((function (e) {
                                        return t.isNaN(e) ? Nd.test(e) ? (e = e.toUpperCase() === e ? Dd : Pd, String.fromCharCode(zi(t, e[0], e[1]))) : e : "" + zi(t, 0, 9)
                                    }), e.split("")))
                                }(s, a) : a, o.hidden = t)) : (s = (a = M(s, t, u, l, h)).fb, o.attributes = a.ah, s && (o.hidden = s), t.namespaceURI && Fo(t.namespaceURI, "svg") && (o.Pf = t.namespaceURI)), t = o), lu(t)) return;
                            delete this.hb[e], r.result[n] = t, r.Ac += 1, r.ga.length === r.Ac && r.Zc(r.result)
                        }
                        return e
                    }, t.prototype.flush = function () {
                        this.ca(!0)
                    }, t.prototype.ca = function (t) {
                        var e = this;
                        if (av(this.b)) {
                            var n = Au(this.hb);
                            (n = Jn(n = Hu((function (t) {
                                return e.hb[t].node
                            }), n), this.X))(t = t ? ff(Yo) : Zn(this.b, 20)), this.nc = Pu((function (t) {
                                return t.Ac !== t.result.length
                            }), this.nc)
                        }
                    }, t.prototype.Ph = function (t) {
                        if (fu(t)) return {};
                        var e = this.Bc[t];
                        return e ? (delete this.Bc[t], e) : {}
                    }, t
                }(),
                sv = ["input", "change", "keyup", "paste", "cut"],
                fv = function (t) {
                    function e(e, n, r) {
                        return (e = t.call(this, e, n, r) || this).inputs = {}, e.yd = !1, e.Lc = e.J.G(e.Lc, "ii"), e.Mc = e.J.G(e.Mc, "ir"), e.Sc = e.J.G(e.Sc, "ri"), e.gd = e.J.G(e.gd, "ur"), e.Ld = e.J.G(e.Ld, "ce"), e.xc = e.J.G(e.xc, "vc"), e
                    }
                    return qo(e, t), e.prototype.start = function () {
                        var t = this,
                            e = this.D.ma();
                        this.yd = this.kh(), Uu((function (n) {
                            n = n.toLowerCase(), e.C(n, "NA:", pu(t.Lc, t)), e.C(n, "NR:", pu(t.Mc, t))
                        }), ws), this.Hb = [this.Wa.C(this.b.document, sv, pu(this.Ld, this)), function () {
                            Uu((function (n) {
                                n = n.toLowerCase(), e.da(n, "NA:", t.Lc), e.da(n, "NR:", t.Mc)
                            }), ws), Uu(t.gd, Au(t.inputs))
                        }]
                    }, e.prototype.gd = function (t) {
                        if (this.yd) {
                            var e = this.inputs[t];
                            e && (t = e.$i, e = e.element, t && this.b.Object.defineProperty(e, this.uc(e), t))
                        }
                    }, e.prototype.Mc = function (t) {
                        t && this.gd(t.data.id)
                    }, e.prototype.Lc = function (t) {
                        t && (t = t.data, this.Sc(t.node, t.id))
                    }, e.prototype.uc = function (t) {
                        return gs(t) ? "checked" : "value"
                    }, e.prototype.Ld = function (t) {
                        if (t = t.target) {
                            var e = this.uc(t);
                            this.xc(t[e], t)
                        }
                    }, e.prototype.xc = function (t, e) {
                        var n = this.X(e),
                            r = this.inputs[n];
                        if (r || (r = this.Sc(r, n))) {
                            n = r.mh;
                            var i = r.value,
                                o = this.uc(e);
                            t && !Lu(typeof t, ["string", "boolean", "number"]) || t === i || (i = N(this.b, e, o, t, this.D.tc()).value, n ? this.D.V("event", {
                                target: this.X(e),
                                checked: !!t
                            }, "change") : (n = Ct(e), o = bt(e), this.D.V("event", {
                                value: i,
                                hidden: o && !n,
                                target: this.X(e)
                            }, "change")), r.value = t)
                        }
                    }, e.prototype.Sc = function (t, e) {
                        var n = this;
                        if (!wt(t) || "__ym_input_override_test" === t.getAttribute("class") || this.inputs[e]) return null;
                        var r = gs(t),
                            i = this.uc(t),
                            o = {
                                element: t,
                                mh: r,
                                value: t[i]
                            };
                        return this.inputs[e] = o, this.yd && zn(this.b, (function () {
                            var e = n.b.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), i) || {},
                                r = n.b.Object.getOwnPropertyDescriptor(t, i) || {},
                                a = Tu({}, e, r);
                            if (zo("((set)?(\\s?" + i + ")?)?", a.set)) {
                                try {
                                    n.b.Object.defineProperty(t, i, Tu({}, a, {
                                        configurable: !0,
                                        set: function (t) {
                                            return n.xc(t, this), a.set.call(this, t)
                                        }
                                    }))
                                } catch (t) {}
                                o.$i = a
                            }
                        })), o
                    }, e.prototype.kh = function () {
                        var t = !0,
                            e = hs(this.b)("input");
                        try {
                            (e = hs(this.b)("input")).value = "INPUT_VALUE", e.style.setProperty("display", "none", "important"), e.setAttribute("type", "text"), e.setAttribute("class", "__ym_input_override_test");
                            var n = this.b.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value") || {},
                                r = this.b.Object.getOwnPropertyDescriptor(e, "value") || {},
                                i = Tu({}, n, r);
                            this.b.Object.defineProperty(e, "value", Tu({}, i, {
                                configurable: !0,
                                set: function (t) {
                                    return i.set.call(e, t)
                                }
                            })), "INPUT_VALUE" !== e.value && (t = !1), e.value = "INPUT_TEST", "INPUT_TEST" !== e.value && (t = !1)
                        } catch (e) {
                            t = !1
                        }
                        return t
                    }, e
                }(rv),
                lv = function (t) {
                    function e(e, n, r) {
                        return (e = t.call(this, e, n, r) || this).Pa = {
                            width: 0,
                            height: 0,
                            kb: 0,
                            lb: 0,
                            orientation: 0
                        }, e.fa.push([
                            ["resize"], e.Yi
                        ]), e.fa.push([
                            ["orientationchange"], e.Wi
                        ]), e
                    }
                    return qo(e, t), e.prototype.start = function () {
                        t.prototype.start.call(this), this.hg()
                    }, e.prototype.Yi = function () {
                        var t = this.Kd();
                        this.ni(t) && (this.Pa = t, this.ig(t))
                    }, e.prototype.Wi = function () {
                        var t = this.Kd();
                        this.Pa.orientation !== t.orientation && (this.Pa = t, this.rj(t))
                    }, e.prototype.Mf = function (t) {
                        return !(t.height && t.width && t.lb && t.kb)
                    }, e.prototype.ni = function (t) {
                        return t.height !== this.Pa.height || t.width !== this.Pa.width
                    }, e.prototype.Kd = function () {
                        var t = this.D.ab(),
                            e = wi(this.b);
                        return {
                            width: e[0],
                            height: e = e[1],
                            lb: (t = t.Jd()) ? t.scrollWidth : 0,
                            kb: t ? t.scrollHeight : 0,
                            orientation: this.D.ab().Xh()
                        }
                    }, e.prototype.rj = function (t) {
                        var e;
                        void 0 === e && (e = this.D.K()), this.D.V("event", {
                            width: t.width,
                            height: t.height,
                            orientation: t.orientation
                        }, "deviceRotation", e)
                    }, e.prototype.ig = function (t, e) {
                        void 0 === e && (e = this.D.K()), this.D.V("event", {
                            width: t.width,
                            height: t.height,
                            lb: t.lb,
                            kb: t.kb
                        }, "resize", e)
                    }, e.prototype.hg = function () {
                        var t = this.Kd();
                        this.Mf(t) ? Or(this.b, pu(this.hg, this), 300) : (this.Mf(this.Pa) && (this.Pa = t), this.ig(t, 0))
                    }, e
                }(rv),
                hv = function () {
                    function t(t) {
                        this.index = 0, this.qb = {}, this.b = t
                    }
                    return t.prototype.dc = function (t, e, n) {
                        void 0 === n && (n = {});
                        var r = of (this.b),
                            i = this.index;
                        this.index += 1, this.qb[i] = {
                            Ga: 0,
                            Ob: !1,
                            Jh: t,
                            Wb: [],
                            Vd: r(pr)
                        };
                        var o = this;
                        return function () {
                            var a = To(arguments),
                                u = n.Za && !o.qb[i].Ob,
                                c = o.qb[i];
                            Qi(o.b, c.Ga), c.Wb = a, c.Ob = !0;
                            var s = r(pr);
                            (u || s - c.Vd >= e) && (t.apply(void 0, a), c.Vd = s), c.Ga = Or(o.b, (function () {
                                u || (t.apply(void 0, a), c.Vd = r(pr)), c.Ob = !1, c.Wb = []
                            }), e, "th")
                        }
                    }, t.prototype.flush = function () {
                        var t = this;
                        Uu((function (e) {
                            var n = t.qb[e],
                                r = n.Ga,
                                i = n.Jh,
                                o = n.Wb;
                            n.Ob && (t.qb[e].Ob = !1, i.apply(void 0, o), Qi(t.b, r))
                        }), Au(this.qb))
                    }, t
                }(),
                dv = function (t) {
                    function e(e, n, r) {
                        return (n = t.call(this, e, n, r) || this).xg = [], n.Qe = {
                            x: 0,
                            y: 0
                        }, n.ta = new hv(e), n.Pc = n.J.G(n.Pc, "o"), n.fa.push([
                            ["scroll"], n.Zi
                        ]), n
                    }
                    return qo(e, t), e.prototype.start = function () {
                        t.prototype.start.call(this), this.D.V("event", {
                            x: Math.max(this.b.scrollX, 0),
                            y: Math.max(this.b.scrollY, 0),
                            page: !0,
                            target: -1
                        }, "scroll", 0)
                    }, e.prototype.stop = function () {
                        t.prototype.stop.call(this), this.ta.flush()
                    }, e.prototype.Zi = function (t) {
                        if (this.D.ab().Ff()) this.Pc(t);
                        else {
                            var e = t.target,
                                n = Pu((function (t) {
                                    return t[0] === e
                                }), this.xg).pop();
                            n ? n = n[1] : (n = this.ta.dc(pu(this.Pc, this), 100, {
                                Za: !0
                            }), this.xg.push([e, n])), n(t)
                        }
                    }, e.prototype.Pc = function (t) {
                        var e = this.D.ab().Jd();
                        t = t.target;
                        var n = this.Bb(t);
                        e = Yu(au(t), [e, this.b, this.b.document]);
                        var r = Math.max(n.left, 0);
                        if (n = Math.max(n.top, 0), e) {
                            if (this.Qe.x === r && this.Qe.y === n) return;
                            this.Qe = {
                                x: r,
                                y: n
                            }
                        }
                        this.D.V("event", {
                            x: r,
                            y: n,
                            page: e,
                            target: e ? -1 : this.X(t)
                        }, "scroll")
                    }, e.prototype.Bb = function (t) {
                        var e = {
                            left: 0,
                            top: 0
                        };
                        if (!t) return e;
                        if (t.window === t) return {
                            top: t.scrollY || 0,
                            left: t.scrollX || 0
                        };
                        var n = t.ownerDocument || t,
                            r = t.documentElement,
                            i = n.defaultView || n.parentWindow,
                            o = n.body;
                        return t !== n || (t = this.D.ab().Jd()) ? Lu(t, [r, o]) ? {
                            top: t.scrollTop || i.scrollY,
                            left: t.scrollLeft || i.scrollX
                        } : {
                            top: t.scrollTop || 0,
                            left: t.scrollLeft || 0
                        } : e
                    }, e
                }(rv),
                pv = ["mousemove", "mousedown", "mouseup", "click"],
                vv = function (t) {
                    function e(e, n, r) {
                        return (n = t.call(this, e, n, r) || this).fa.push([pv, n.Vi]), n.ta = new hv(e), n.Ic = n.J.G(n.Ic, "n"), n.yj = n.J.G(n.ta.dc(pu(n.Ic, n), 100), "t"), n
                    }
                    return qo(e, t), e.prototype.stop = function () {
                        t.prototype.stop.call(this), this.ta.flush()
                    }, e.prototype.Vi = function (t) {
                        var e = null;
                        try {
                            e = t.type
                        } catch (t) {
                            return
                        }
                        "mousemove" === e ? this.yj(t) : this.Ic(t)
                    }, e.prototype.Ic = function (t) {
                        var e = t.type,
                            n = t.clientX;
                        n = void 0 === n ? null : n;
                        var r = t.clientY;
                        r = void 0 === r ? null : r, t = t.target || this.b.document.elementFromPoint(n, r), this.D.V("event", {
                            x: n || 0,
                            y: r || 0,
                            target: this.X(t)
                        }, e)
                    }, e
                }(rv),
                mv = ["focus", "blur"],
                gv = function (t) {
                    function e(e, n, r) {
                        return (e = t.call(this, e, n, r) || this).fa.push([mv, e.Kh]), e
                    }
                    return qo(e, t), e.prototype.Kh = function (t) {
                        var e = t.target;
                        t = t.type, this.D.V("event", {
                            target: this.X(e === this.b ? this.b.document.documentElement : e)
                        }, t)
                    }, e
                }(rv),
                bv = go(oo((function (t) {
                    var e = Xo(t.getSelection, "getSelection");
                    return e ? pu(e, t) : Yo
                })), io),
                yv = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
                wv = /text|search|password|tel|url/,
                Ev = function (t) {
                    function e(e, n, r) {
                        return (e = t.call(this, e, n, r) || this).Nd = !1, e.fa.push([yv, e.ji]), e
                    }
                    return qo(e, t), e.prototype.ji = function (t) {
                        var e = this.D,
                            n = t.type,
                            r = t.which;
                        t = t.target, "mousemove" === n && 1 !== r || ((n = "select" === n ? this.ai(t) : this.Zh()) && n.start !== n.end ? (this.Nd = !0, e.V("event", n, "selection")) : this.Nd && (this.Nd = !1, e.V("event", {
                            start: 0,
                            end: 0
                        }, "selection")))
                    }, e.prototype.Zh = function () {
                        var t = bv(this.b);
                        if (t && 0 < t.rangeCount) {
                            t = t.getRangeAt(0) || this.b.document.createRange();
                            var e = this.X(t.startContainer),
                                n = this.X(t.endContainer);
                            if (!lu(e) && !lu(n)) return {
                                start: t.startOffset,
                                end: t.endOffset,
                                qg: e,
                                ff: n
                            }
                        }
                    }, e.prototype.ai = function (t) {
                        if (wv.test(t.type || "")) {
                            var e = this.X(t);
                            if (!lu(e)) return {
                                start: t.selectionStart,
                                end: t.selectionEnd,
                                target: e
                            }
                        }
                    }, e
                }(rv),
                Cv = {
                    focus: "windowfocus",
                    blur: "windowblur"
                },
                xv = function (t) {
                    function e(e, n, r) {
                        return (e = t.call(this, e, n, r) || this).visibility = null, lu(e.b.document.hidden) ? lu(e.b.document.msHidden) ? lu(e.b.document.webkitHidden) || (e.visibility = {
                            hidden: "webkitHidden",
                            event: "webkitvisibilitychange"
                        }) : e.visibility = {
                            hidden: "msHidden",
                            event: "msvisibilitychange"
                        } : e.visibility = {
                            hidden: "hidden",
                            event: "visibilitychange"
                        }, e.handleEvent = e.J.G(e.handleEvent, "e"), e
                    }
                    return qo(e, t), e.prototype.start = function () {
                        this.Hb = [this.Wa.C(this.b, this.visibility ? [this.visibility.event] : ["focus", "blur"], pu(this.handleEvent, this))]
                    }, e.prototype.handleEvent = function (t) {
                        this.D.V("event", {}, Cv[this.visibility ? this.b.document[this.visibility.hidden] ? "blur" : "focus" : t.type])
                    }, e
                }(rv),
                kv = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
                Av = function (t) {
                    function e(e, n, r) {
                        return (n = t.call(this, e, n, r) || this).dd = {}, n.scrolling = !1, n.fg = 0, n.fa.push([
                            ["scroll"], n.oj, n.b.document
                        ]), n.fa.push([kv, n.Cj, n.b.document]), n.ta = new hv(e), n.Gb = n.J.G(n.Gb, "nh"), n.zj = n.J.G(n.ta.dc(n.Gb, n.D.ab().Ff() ? 0 : 50, {
                            Za: !0
                        }), "th"), n
                    }
                    return qo(e, t), e.prototype.oj = function () {
                        var t = this;
                        this.scrolling = !0, Qi(this.b, this.fg), this.fg = Or(this.b, (function () {
                            t.scrolling = !1
                        }), 150)
                    }, e.prototype.Cj = function (t) {
                        var e = this,
                            n = "touchcancel" === t.type || "touchend" === t.type;
                        t.changedTouches && 0 < t.changedTouches.length && Uu((function (t) {
                            var r = e.ei(t);
                            t.__ym_touch_id = r, n && delete e.dd[t.identifier]
                        }), Ki(t.changedTouches)), "touchmove" === t.type ? this.scrolling ? this.Gb(t) : this.zj(t, this.D.K()) : this.Gb(t)
                    }, e.prototype.ei = function (t) {
                        return this.dd[t.identifier] || (this.dd[t.identifier] = _()), this.dd[t.identifier]
                    }, e.prototype.Gb = function (t, e) {
                        void 0 === e && (e = this.D.K());
                        var n = t.type,
                            r = Hu((function (t) {
                                return {
                                    id: t.__ym_touch_id,
                                    x: Math.round(t.clientX),
                                    y: Math.round(t.clientY),
                                    force: t.force
                                }
                            }), Ki(t.changedTouches));
                        0 < r.length && this.D.V("event", {
                            touches: r,
                            target: this.X(t.target)
                        }, n, e)
                    }, e
                }(rv),
                Tv = function (t) {
                    function e(e, n, r) {
                        return (e = t.call(this, e, n, r) || this).fa.push([
                            ["load"], e.Ui, e.b.document
                        ]), e
                    }
                    return qo(e, t), e.prototype.Ui = function (t) {
                        "IMG" === vi(t = t.target) && t.getAttribute("srcset") && this.D.V("event", {
                            target: this.X(t),
                            value: t.currentSrc
                        }, "srcset")
                    }, e
                }(rv),
                Sv = function (t) {
                    function e(e, n, r) {
                        return (n = t.call(this, e, n, r) || this).Kg = 1, n.ta = new hv(e), n.Yb = n.J.G(n.Yb, "z"), n
                    }
                    return qo(e, t), e.prototype.start = function () {
                        if (this.Af()) {
                            t.prototype.start.call(this), this.Yb();
                            var e = this.Wa.C(yo(this.b, "visualViewport"), ["resize"], this.ta.dc(this.Yb, 10));
                            this.Hb.push(e)
                        }
                    }, e.prototype.stop = function () {
                        t.prototype.stop.call(this), this.ta.flush()
                    }, e.prototype.Yb = function () {
                        var t = this.Af();
                        t && t !== this.Kg && (this.Kg = t, this.sj(t))
                    }, e.prototype.Af = function () {
                        var t = Ei(this.b);
                        return t ? t[2] : null
                    }, e.prototype.sj = function (t) {
                        var e = yi(this.b);
                        this.D.V("event", {
                            x: e.x,
                            y: e.y,
                            level: t
                        }, "zoom")
                    }, e
                }(rv),
                _v = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete"
                },
                Rv = {
                    super: 1,
                    lm: 2,
                    alt: 3,
                    shift: 4,
                    Fm: 5,
                    delete: 6,
                    im: 6
                },
                Mv = [4, 9, 8, 32, 37, 38, 39, 40, 46],
                Nv = ((Fh = {})[1] = {
                    91: "&#8984;",
                    93: "&#8984;",
                    224: "&#8984;",
                    18: "&#8997;",
                    17: "&#8963;",
                    16: "&#8679;",
                    9: "&#8677;",
                    8: "&#9003;",
                    46: "&#9003;"
                }, Fh[2] = {
                    91: "&#xff;",
                    93: "&#xff;",
                    224: "&#xff;",
                    18: "Alt",
                    17: "Ctrl",
                    16: "Shift",
                    9: "Tab",
                    8: "Backspace",
                    46: "Delete"
                }, Fh.Ii = {
                    32: "SPACEBAR",
                    37: "&larr;",
                    38: "&uarr;",
                    39: "&rarr;",
                    40: "&darr;",
                    13: "Enter"
                }, Fh),
                Dv = /flash/,
                Pv = /ym-disable-keys/,
                Iv = /^&#/,
                Ov = function (t) {
                    function e(e, n, r) {
                        return (n = t.call(this, e, n, r) || this).cb = {}, n.Ca = 0, n.xa = [], n.vg = [], n.kc = 0, n.ag = 0, n.fa.push([
                            ["keydown"], n.gi
                        ]), n.fa.push([
                            ["keyup"], n.hi
                        ]), n.Sg = -1 !== (yo(e, "navigator.appVersion") || "").indexOf("Mac") ? "1" : "2", n.Ec = n.J.G(n.Ec, "v"), n.Ad = n.J.G(n.Ad, "ec"), n.Yc = n.J.G(n.Yc, "sk"), n.Id = n.J.G(n.Id, "gk"), n.Ee = n.J.G(n.Ee, "sc"), n.Xb = n.J.G(n.Xb, "cc"), n.reset = n.J.G(n.reset, "r"), n.Uc = n.J.G(n.Uc, "rs"), n
                    }
                    return qo(e, t), e.prototype.gi = function (t) {
                        if (this.Ec(t) && !this.zi(t)) {
                            var e = t.keyCode;
                            t.repeat || this.cb[e] || (this.cb[t.keyCode] = !0, _v[t.keyCode] && !this.Ca ? (this.Ca += 1, this.Ee(t), this.reset(300)) : this.Ca ? (this.hh(), this.ve(t), this.Ad()) : (this.reset(), this.ve(t)))
                        }
                    }, e.prototype.hi = function (t) {
                        if (this.Ec(t)) {
                            var e = t.keyCode,
                                n = _v[t.keyCode];
                            this.cb[t.keyCode] && (this.cb[e] = !1), n && this.Ca && (this.Ca = 0, this.cb = {}), 1 === this.xa.length && (t = this.xa[0], Lu(t.keyCode, Mv) && (this.Yc([t], !0), this.reset())), this.xa = Pu(go(au(e), ao), this.xa), Qi(this.b, this.kc)
                        }
                    }, e.prototype.Ec = function (t) {
                        var e = this.b.document.activeElement;
                        return t = t.target, !Yu(Boolean, [e && "OBJECT" === e.nodeName && Dv.test(e.getAttribute("type") || ""), "INPUT" === t.nodeName && "password" === t.getAttribute("type") && Pv.test(t.className)])
                    }, e.prototype.Ad = function () {
                        this.vg = this.xa.slice(0), Qi(this.b, this.kc), this.kc = Or(this.b, xo(this.vg, pu(this.Yc, this)), 0, "e.c")
                    }, e.prototype.Yc = function (t, e) {
                        if (void 0 === e && (e = !1), 1 < t.length || e) {
                            var n = this.Id(t);
                            this.D.V("event", {
                                Fc: n
                            }, "keystroke")
                        }
                    }, e.prototype.Id = function (t) {
                        var e = this;
                        return qi((function (t, e) {
                            return (Rv[t.Gc] || 100) - (Rv[e.Gc] || 100)
                        }), t = Hu((function (t) {
                            t = t.keyCode;
                            var n = _v[t],
                                r = e.Wh(t);
                            return {
                                id: t,
                                key: r,
                                Jf: !!n && Iv.test(r),
                                Gc: n
                            }
                        }), t))
                    }, e.prototype.Wh = function (t) {
                        return Nv[this.Sg][t] || Nv.Ii[t] || String.fromCharCode(t)
                    }, e.prototype.ve = function (t) {
                        Lu(t, this.xa) || this.xa.push(t)
                    }, e.prototype.Ee = function (t) {
                        this.ve(t), this.Xb()
                    }, e.prototype.Xb = function () {
                        this.Ca ? Or(this.b, this.Xb, 100) : this.xa = []
                    }, e.prototype.hh = function () {
                        Qi(this.b, this.ag)
                    }, e.prototype.reset = function (t) {
                        t ? this.ag = Or(this.b, pu(this.Uc, this), t) : this.Uc()
                    }, e.prototype.Uc = function () {
                        this.Ca = 0, this.xa = [], this.cb = {}, Qi(this.b, this.kc)
                    }, e.prototype.zi = function (t) {
                        return !(!t.target || "INPUT" !== t.target.nodeName) && (t.shiftKey || 32 === t.keyCode || "shift" === _v[t.keyCode])
                    }, e
                }(rv),
                Lv = ["sr", "sd", "н"],
                jv = /allow-same-origin/,
                Bv = function (t) {
                    function e(e, n, r) {
                        return (e = t.call(this, e, n, r) || this).Pb = [], e.Dd = {}, e.de = e.J.G(e.de, "fi"), e.ee = e.J.G(e.ee, "sd"), e.fe = e.J.G(e.fe, "src"), e.qa = new MutationObserver(e.fe), e
                    }
                    return qo(e, t), e.prototype.start = function () {
                        t.prototype.start.call(this), this.D.tc().vb && this.D.ma().C("iframe", "NA:", pu(this.de, this)), this.D.wf().Gd().C(["sdr"], pu(this.ee, this))
                    }, e.prototype.stop = function () {
                        t.prototype.stop.call(this), Uu((function (t) {
                            t.D.stop()
                        }), this.Pb)
                    }, e.prototype.fe = function (t) {
                        var e = t.pop().target;
                        if (t = Ou((function (t) {
                                return t.Ef === e
                            }), this.Pb)) {
                            this.Pb = Pu((function (t) {
                                return t.Ef !== e
                            }), this.Pb);
                            var n = t.D.Hd();
                            try {
                                t.D.stop()
                            } catch (t) {}
                            this.cc(e, n)
                        }
                    }, e.prototype.de = function (t) {
                        if (t) {
                            var e = t.data.node;
                            this.qa.observe(e, {
                                attributes: !0,
                                attributeFilter: ["src"]
                            }), this.cc(e, t.data.id)
                        }
                    }, e.prototype.cc = function (t, e) {
                        var n = this;
                        this.wi(t) && $(this.b, t).then((function () {
                            var r = n.D.cc(t.contentWindow, e);
                            n.Pb.push({
                                D: r,
                                Ef: t
                            })
                        })).catch(Yo)
                    }, e.prototype.ee = function (t) {
                        var e = this,
                            n = t.L;
                        t = t.data, this.Dd[n] || (this.Dd[n] = {
                            data: []
                        });
                        var r = this.Dd[n];
                        r.data = r.data.concat(t), this.b.isNaN(r.xd) && Uu((function (t) {
                            "page" === t.type && (r.xd = t.data.ya - e.D.xf())
                        }), r.data), this.b.isNaN(r.xd) || (this.D.ca(Hu((function (t) {
                            return t.K += r.xd, t.K = e.b.Math.max(0, t.K), t
                        }), r.data)), r.data = [])
                    }, e.prototype.wi = function (t) {
                        var e = t.getAttribute("src"),
                            n = t.getAttribute("sandbox");
                        return !(t.getAttribute("_ym_ignore") || n && !n.match(jv) || e && "about:blank" !== e && (e = ua(this.b, e).host) && Gi(this.b).host !== e) && yo(t, "contentWindow.location.href")
                    }, e
                }(rv),
                Fv = function (t) {
                    function e(e, n, r) {
                        return (e = t.call(this, e, n, r) || this).ye = e.J.G(e.ye, "ps"), e
                    }
                    return qo(e, t), e.prototype.start = function () {
                        this.D.ma().yc({
                            ga: [this.b.document.documentElement],
                            Zc: this.ye
                        })
                    }, e.prototype.ye = function (t) {
                        var e = this.D.Yh(),
                            n = e.Qh(),
                            r = Gi(this.b),
                            i = r.host,
                            o = r.protocol;
                        r = r.pathname;
                        var a = wi(this.b),
                            u = a[0];
                        a = a[1], this.D.V("page", {
                            content: Hu((function (t) {
                                return delete(t = Tu({}, t)).node, t
                            }), t),
                            Ye: n || "",
                            Bf: !!n,
                            viewport: {
                                width: u,
                                height: a
                            },
                            title: this.b.document.title,
                            doctype: e.Sh() || "",
                            Ve: this.b.location.href,
                            Dg: this.b.navigator.userAgent,
                            referrer: this.b.document.referrer,
                            screen: {
                                width: this.b.screen.width,
                                height: this.b.screen.height
                            },
                            location: {
                                host: i,
                                protocol: o,
                                path: r
                            },
                            ya: this.D.xf(),
                            bd: e.bi()
                        }, "page", 0)
                    }, e
                }(rv),
                Gv = ["addRule", "removeRule", "insertRule", "deleteRule"],
                Hv = [
                    [function (t) {
                        function e(e, n, r) {
                            return (e = t.call(this, e, n, r) || this).Ra = {}, e.Qb = {}, e.We = 0, e.Nc = e.J.G(e.Nc, "a"), e.pb = e.J.G(e.pb, "sr"), e.Oc = e.J.G(e.Oc, "r"), e.ca = e.J.G(e.ca, "d"), e
                        }
                        return qo(e, t), e.prototype.start = function () {
                            var t = this.D.ma();
                            t.C("style", "NA:", this.Nc), t.C("style", "NR:", this.Oc), this.ca()
                        }, e.prototype.stop = function () {
                            var e = this;
                            t.prototype.stop.call(this);
                            var n = this.D.ma();
                            n.da("style", "NA:", this.Nc), n.da("style", "NR:", this.Oc), this.ca(), Qi(this.b, this.We), Uu((function (t) {
                                e.Ra[t].sheet && e.dg(e.Ra[t].sheet)
                            }), Au(this.Ra)), this.Ra = {}
                        }, e.prototype.ca = function () {
                            var t = this;
                            Uu((function (e) {
                                var n = e[0];
                                if ((e = e[1]).length) {
                                    for (var r = [], i = e[0].K, o = [], a = 0; a < e.length; a += 1) {
                                        var u = e[a],
                                            c = u.K;
                                        delete u.K, c <= i + 50 ? r.push(u) : (o.push(r), i = c, r = [u])
                                    }
                                    r.length && o.push(r), o.length && Uu((function (e) {
                                        t.D.V("event", {
                                            target: $u(n),
                                            Aa: e
                                        }, "stylechange", i)
                                    }), o), delete t.Qb[n]
                                }
                            }), ku(this.Qb)), this.We = Or(this.b, this.ca, 100)
                        }, e.prototype.pb = function (t, e, n, r, i) {
                            void 0 === r && (r = ""), void 0 === i && (i = -1), this.Qb[t] || (this.Qb[t] = []), this.Qb[t].push({
                                ie: e,
                                style: r,
                                index: i,
                                K: n
                            })
                        }, e.prototype.aj = function (t, e) {
                            var n = this,
                                r = t.addRule,
                                i = t.removeRule,
                                o = t.insertRule,
                                a = t.deleteRule;
                            Do(r) && (t.addRule = function (i, o, a) {
                                return n.pb(e, "a", n.D.K(), i + "{" + o + "}", a), r.call(t, i, o, a)
                            }), Do(i) && (t.removeRule = function (r) {
                                return n.pb(e, "r", n.D.K(), "", r), i.call(t, r)
                            }), Do(o) && (t.insertRule = function (r, i) {
                                return n.pb(e, "a", n.D.K(), r, i), o.call(t, r, i)
                            }), Do(a) && (t.deleteRule = function (r) {
                                return n.pb(e, "r", n.D.K(), "", r), a.call(t, r)
                            })
                        }, e.prototype.dg = function (t) {
                            var e = this;
                            Uu((function (n) {
                                var r = e.b.CSSStyleSheet.prototype[n];
                                Do(r) && (t[n] = pu(r, t))
                            }), Gv)
                        }, e.prototype.Dh = function (t) {
                            try {
                                return t.cssRules || t.rules
                            } catch (t) {
                                return null
                            }
                        }, e.prototype.Nc = function (t) {
                            var e = t.data;
                            if (t = e.id, (e = e.node).sheet && !e.getAttribute("src") && !e.innerText) {
                                var n = e.sheet,
                                    r = this.Dh(n);
                                if (r && r.length) {
                                    for (var i = [], o = 0; o < r.length; o += 1) i.push({
                                        style: r[o].cssText,
                                        index: o,
                                        ie: "a"
                                    });
                                    this.D.V("event", {
                                        Aa: i,
                                        target: t
                                    }, "stylechange")
                                }
                                this.aj(n, t), this.Ra[t] = e
                            }
                        }, e.prototype.Oc = function (t) {
                            t = t.data.id;
                            var e = this.Ra[t];
                            e && (delete this.Ra[t], e.sheet && this.dg(e.sheet))
                        }, e
                    }(rv), "ss"],
                    [fv, "in"],
                    [uv, "mu"],
                    [lv, "r"],
                    [dv, "sc"],
                    [vv, "mo"],
                    [gv, "f"],
                    [Ev, "se"],
                    [xv, "wf"],
                    [Av, "t"],
                    [Tv, "src"],
                    [Sv, "z"],
                    [Ov, "ks"]
                ];
            Hv.push([Bv, "if"]), Hv.push([Fv, "pa"]);
            var Uv, Xv = oo((function (t) {
                    var e = t.document;
                    return {
                        Jd: function () {
                            if (e.scrollingElement) return e.scrollingElement;
                            var t = 0 === e.compatMode.indexOf("CSS1") ? e.documentElement : e.body;
                            return yo(e, "documentElement.scrollHeight") >= yo(e, "body.scrollHeight") ? t : null
                        },
                        Xh: function () {
                            var e = t.screen;
                            return e && yo(e, Ou(xo(e, yo), ["orientation", "mozOrientation", "msOrientation"]) + ".angle") || 0
                        },
                        vm: xo(t, dc),
                        Ff: xo(t, uc),
                        um: xo(t, tc)
                    }
                })),
                zv = function () {
                    function t(t, e) {
                        var n = this;
                        this.Db = 0, this.fc = [], this.Cb = null, this.na = this.Tb = this.rg = !1, this.ya = 0, this.Yh = function () {
                            return n.page
                        }, this.Hd = function () {
                            return n.Db
                        }, this.xf = function () {
                            return n.ya
                        }, this.Vh = function () {
                            return n.Wa
                        }, this.wf = function () {
                            return n.Cb
                        }, this.ma = function () {
                            return n.Od
                        }, this.K = function () {
                            return n.He ? n.b.Math.max(n.He(pr) - n.ya, 0) : 0
                        }, this.tc = function () {
                            return n.options
                        }, this.ab = function () {
                            return n.dh
                        }, this.V = function (t, e, r, i) {
                            void 0 === i && (i = n.K()), t = n.Uh(t, e, r, i), n.ca(t)
                        }, this.Uh = function (t, e, r, i) {
                            return void 0 === i && (i = n.K()), {
                                type: t,
                                data: e,
                                K: i,
                                L: n.Db,
                                event: r
                            }
                        }, this.ca = function (t) {
                            t = mo(t) ? t : [t], n.rg && !n.Tb ? n.na ? (t = Hu((function (t) {
                                return t.L ? t : Tu(t, {
                                    L: n.Db
                                })
                            }), t), n.wf().jg(t)) : (t = Hu(A, t), n.Be(t)) : n.fc = n.fc.concat(t)
                        }, this.b = t;
                        var r = D(t, this, "R");
                        this.Fe = r.G(this.Fe, "s"), this.ca = r.G(this.ca, "sd"), (r = Mu(t)).l("wv2e") && Li(), r.o("wv2e", !0), this.options = e, this.Wa = Jc(t), this.Od = new cv(this.b, e), this.dh = Xv(t), this.Ze = Hu((function (e) {
                            return new e[0](t, n, e[1])
                        }), Hv), this.ui(), this.page = function (t) {
                            return {
                                Qh: function () {
                                    var e = t.document.querySelector("base[href]");
                                    return e ? e.getAttribute("href") : null
                                },
                                Sh: function () {
                                    if (t.document.doctype) {
                                        var e = Tu({
                                                name: "html",
                                                publicId: "",
                                                systemId: ""
                                            }, t.document.doctype),
                                            n = e.publicId,
                                            r = e.systemId;
                                        return "<!DOCTYPE " + ou("", [e.name, n ? ' PUBLIC "' + n + '"' : "", !n && r ? " SYSTEM" : "", r ? ' "' + r + '"' : ""]) + ">"
                                    }
                                    return null
                                },
                                bi: function () {
                                    try {
                                        if (!t.sessionStorage) return null;
                                        var e = t.sessionStorage.getItem("__vw_tab_guid"),
                                            n = !1;
                                        try {
                                            var r = t.opener ? t.opener.sessionStorage : null;
                                            n = !!r && e === r.getItem("__vw_tab_guid")
                                        } catch (t) {
                                            n = !0
                                        }
                                        return e && !n || (e = _(), t.sessionStorage.setItem("__vw_tab_guid", e)), e
                                    } catch (t) {
                                        return null
                                    }
                                }
                            }
                        }(this.b), this.Fe()
                    }
                    return t.prototype.start = function (t) {
                        this.rg = !0, this.Be = t, this.gg()
                    }, t.prototype.stop = function () {
                        av(this.b) && (Uu((function (t) {
                            return t.stop()
                        }), this.Ze), this.Od.stop(), this.Cb && this.Cb.stop(), this.na || this.V("event", {}, "eof"))
                    }, t.prototype.cc = function (e, n) {
                        var r = new t(e, Tu({}, this.options, {
                            L: n
                        }));
                        return r.start(Yo), r
                    }, t.prototype.ui = function () {
                        var t = this;
                        this.na = !!this.options.L, this.Db = this.options.L || 0, this.Tb = !this.na;
                        var e = this.options.Cg || [];
                        e.push(Gi(this.b).host), this.Cb = function (t, e, n) {
                            var r = Lr(t),
                                i = Jc(t),
                                o = dc(t),
                                a = e.Hd(),
                                u = !yo(t, "postMessage") || o && !yo(t, "parent.postMessage"),
                                c = xo(r, co);
                            if (u) {
                                if (!a) return Or(t, pu(r.N, r, "i", {
                                    na: !1
                                }), 10), {
                                    Gd: c,
                                    jg: Yo,
                                    stop: Yo
                                };
                                $i(ji())
                            }
                            if (r.C(["sr"], (function (n) {
                                    var r, i = T(t, n.source);
                                    i && S(t, n.source, ((r = {}).type = "н", r.frameId = e.ma().X(i), r))
                                })), r.C(["sd"], (function (e) {
                                    var n = e.data;
                                    e = e.source, (t === e || T(t, e)) && r.N("sdr", {
                                        data: n.data,
                                        L: n.frameId
                                    })
                                })), o && !a) {
                                var s = !1,
                                    f = 0,
                                    l = function () {
                                        var e;
                                        S(t, t.parent, ((e = {}).type = "sr", e)), f = Or(t, l, 100, "if.i")
                                    };
                                l();
                                var h = function (e) {
                                    r.da(["н"], h), Qi(t, f);
                                    var i = ua(t, e.origin).host;
                                    s || e.source !== t.parent || !e.data.frameId || "about:blank" !== Gi(t).host && !Lu(i, n) || (s = !0, r.N("i", {
                                        L: e.data.frameId,
                                        na: !0
                                    }))
                                };
                                r.C(["н"], h), Or(t, (function () {
                                    r.da(["н"], h), Qi(t, f), s || (s = !0, r.N("i", {
                                        na: !1
                                    }))
                                }), 2e3, "if.r")
                            }
                            return {
                                Gd: c,
                                jg: function (n) {
                                    var r;
                                    return S(t, t.parent, ((r = {}).frameId = e.Hd(), r.data = n, r.type = "sd", r))
                                },
                                stop: i = i.C(t, ["message"], (function (e) {
                                    var n = ia(t, e.data);
                                    n && n.type && Lu(n.type, Lv) && r.N(n.type, {
                                        data: n,
                                        source: e.source,
                                        origin: e.origin
                                    })
                                }))
                            }
                        }(this.b, this, e), e = this.Cb.Gd(), dc(this.b) ? this.Tb && e.C(["i"], (function (e) {
                            t.na = e.na, t.Tb = !1, e.L && (t.Db = e.L), t.gg()
                        })) : this.Tb = this.na = !1
                    }, t.prototype.gg = function () {
                        var t = this.fc.splice(0, this.fc.length);
                        this.ca(t)
                    }, t.prototype.Fe = function () {
                        this.He = vr(this.b), this.ya = this.He(pr), Uu((function (t) {
                            t.start()
                        }), this.Ze), this.Od.start()
                    }, t
                }(),
                Vv = ((Uv = {}).mousemove = 0, Uv.mouseup = 1, Uv.mousedown = 2, Uv.click = 3, Uv.scroll = 4, Uv.windowblur = 5, Uv.windowfocus = 6, Uv.focus = 7, Uv.blur = 8, Uv.eof = 9, Uv.selection = 10, Uv.change = 11, Uv.input = 12, Uv.touchmove = 13, Uv.touchstart = 14, Uv.touchend = 15, Uv.touchcancel = 16, Uv.touchforcechange = 17, Uv.canvasMethod = 18, Uv.canvasProperty = 19, Uv.zoom = 20, Uv.resize = 21, Uv.mediaMethod = 22, Uv.mediaProperty = 23, Uv.keystroke = 24, Uv.deviceRotation = 25, Uv.fatalError = 26, Uv.hashchange = 27, Uv.stylechange = 28, Uv),
                Yv = Io((function (t, e) {
                    var n;
                    return (n = {})[rp(t)] = e, n
                })),
                qv = function () {
                    function t(t) {
                        var e;
                        this.isSync = !1, this.zb = [], this.hf = [], this.b = t, this.Fb = ((e = {}).event = pu(this.zh, this), e.page = Yv({
                            page: 1
                        }), e.mutation = Yv({
                            Ji: 1
                        }), e.activity = Yv({
                            Wg: 1
                        }), e), this.hf = [
                            [
                                ["scroll"], {
                                    nj: 1
                                }
                            ],
                            [
                                ["selection"], {
                                    pj: 1
                                }
                            ],
                            [
                                ["change", "input"], {
                                    jh: 1
                                }
                            ],
                            [
                                ["keystroke"], {
                                    Di: 1
                                }, {
                                    Fc: 1
                                }
                            ],
                            [
                                ["zoom"], {
                                    Wj: 1
                                }
                            ],
                            [
                                ["resize"], {
                                    ij: 1
                                }
                            ],
                            [
                                ["windowfocus", "windowblur", "focus", "blur", "eof"], {
                                    Tj: 1
                                }
                            ],
                            [
                                ["mousemove", "mouseup", "mousedown", "click"], {
                                    Hi: 1
                                }
                            ],
                            [
                                ["deviceRotation"], {
                                    uh: 1
                                }
                            ],
                            [
                                ["fatalError"], {
                                    Fh: 1
                                }
                            ],
                            [
                                ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], {
                                    Bj: 1
                                }, {
                                    touches: 1
                                }, {
                                    touches: 1
                                }
                            ],
                            [
                                ["hashchange"], {
                                    oi: 1
                                }
                            ],
                            [
                                ["stylechange"], {
                                    uj: 1
                                }, {
                                    Aa: 1
                                }, {
                                    Aa: 1
                                }
                            ]
                        ]
                    }
                    return t.prototype.zh = function (t) {
                        var e, n, r = t.type,
                            i = Ou(go(yu("0"), xo(r, Lu)), this.hf);
                        i || $i(us("vem." + r)), "eof" === r && (this.isSync = !0);
                        var o = i[1],
                            a = i[2];
                        i = i[3];
                        var u = t.Y;
                        return {
                            event: (e = {
                                type: Vv[r],
                                target: t.target,
                                L: t.L
                            }, e[rp(o)] = a ? (n = {}, n[rp(a)] = i ? u[rp(i)] : u, n) : u, e)
                        }
                    }, t.prototype.Da = function (t, e) {
                        var n = this;
                        void 0 === e && (e = !1);
                        var r = Jn(t, (function (t) {
                                var e = !lu(t.partNum);
                                return {
                                    data: e ? void 0 : n.Fb[t.type](t.data),
                                    nh: e ? t.data : void 0,
                                    page: t.partNum,
                                    end: t.end,
                                    K: t.K
                                }
                            })),
                            i = this.isSync || e ? 1 / 0 : 10,
                            o = [r = Yn(this.b, r, i)];
                        return this.zb.push(r), r(hf((function (t) {
                            return t = zt(n.b, Jt, {
                                buffer: t
                            }), t = Yn(n.b, t, i, Qn), o.push(t), n.zb.push(t), t
                        })))(hf((function (t) {
                            return t = Xt(n.b, t.slice(-4)), t = Yn(n.b, t, i, Qn), o.push(t), n.zb.push(t), t
                        })))(lf((function (t) {
                            return t = t[t.length - 1], Uu((function (t) {
                                t = qu(n.b)(t, n.zb), n.zb.splice(t, 1)
                            }), o), t
                        })))
                    }, t.prototype.Ea = function (t) {
                        return zt(this.b, Kt, this.Fb[t.type](t.data))(tr(Yo))
                    }, t.prototype.La = function (t) {
                        return t[0]
                    }, t.prototype.ad = function (t, e) {
                        for (var n = Xt(this.b, t)(tr(Yo)), r = Math.ceil(n.length / e), i = [], o = 0; o < e; o += 1) i.push(n.slice(o * r, r * (o + 1)));
                        return i
                    }, t.prototype.isEnabled = function () {
                        return Ut(this.b)
                    }, t
                }(),
                Kv = function (t, e, n, r) {
                    var i = this;
                    this.md = this.Qc = !1, this.Oa = [], this.Of = [], this.send = function (t, e, n, r) {
                        return t = i.sender(t, i.ac, e), n && r && t.then(n, r), t
                    }, this.sg = function (t, e, n, r) {
                        return new Zc((function (i, o) {
                            t.push([e, n, i, o, r])
                        }))
                    }, this.ki = function () {
                        i.Oa = qi((function (t, e) {
                            return t[4].partNum - e[4].partNum
                        }), i.Oa);
                        var t = bu((function (t, e, n) {
                                return e = e[4], t && n + 1 === e.partNum
                            }), !0, i.Oa),
                            e = !!i.Oa[i.Oa.length - 1][4].end;
                        return t && e
                    }, this.nf = function (t) {
                        Vn(i.b, t.slice(), (function (t) {
                            i.send(t[0], t[1], t[2], t[3])
                        }), 20, "s.w2.sf.fes"), t.splice(0, t.length)
                    }, this.lf = function () {
                        i.md || (i.md = !0, i.nf(i.Of))
                    }, this.lh = function (t) {
                        return bu((function (t, e) {
                            var n = "page" === e.type && !e.L,
                                r = "eof" === e.data.type,
                                i = n && !!e.partNum;
                            return {
                                rd: t.rd || i,
                                qd: t.qd || n,
                                pd: t.pd || r
                            }
                        }), {
                            qd: !1,
                            pd: !1,
                            rd: !1
                        }, t)
                    }, this.ii = function (t, e, n, r) {
                        return r ? (t = i.sg(i.Oa, t, e, n[0]), i.ki() && (i.nf(i.Oa), i.Qc = !0)) : (i.Qc = !0, t = i.send(t, e)), t
                    }, this.fi = function (t) {
                        var e;
                        return i.yi ? ((e = {})["wv-type"] = Yu((function (t) {
                            return "eof" === yo(t, "data.type")
                        }), t) ? "2" : "8", e) : {}
                    }, this.yf = function (t, e, n) {
                        return e = {
                            F: i.fi(n),
                            H: Ic(),
                            $: e,
                            af: !t && Ht(n),
                            Hf: i.vi
                        }, t && e.H.o("bt", 1), e
                    }, this.Ah = function (t, e, n) {
                        return t = i.yf(!1, t, e), i.send(t, n)
                    }, this.Ki = function (t, e, n) {
                        if (t = i.yf(!0, t, e), i.Qc) return i.send(t, n);
                        var r, o = i.lh(e),
                            a = o.qd,
                            u = o.pd;
                        return o = o.rd, a && (r = i.ii(t, n, e, o)), i.md ? a || (r = i.send(t, n)) : (a || (r = i.sg(i.Of, t, n, e)), (i.Qc || u) && i.lf()), r
                    }, this.yi = r, this.b = t, this.vi = n, this.sender = fh(t, "W", e), this.ac = e, Or(t, this.lf, 5e3)
                },
                Wv = Br("w2", (function (t, e) {
                    function n() {
                        u = !0
                    }
                    var r = Mu(t),
                        i = Nc(e);
                    if (!e.Ta || Zu(t) || !t.MutationObserver || !zo("Element", t.Element)) return Yo;
                    zo("MutationObserver", t.MutationObserver) || hh(t).warn("MutationObserver is overriden, webvisor is not guaranteed to work in this environment");
                    var o = su((function (n, r) {
                            wn(t, e, r).catch(n)
                        })),
                        a = function (t, e) {
                            function n(i) {
                                yo(e, r) ? i() : Or(t, xo(i, n), 100)
                            }
                            void 0 === e && (e = t);
                            var r = (e.nodeType ? "contentWindow." : "") + "document.body";
                            return su((function (t, e) {
                                n(e)
                            }))
                        }(t)(hf(ko([t, e], k)))(lf((function (e) {
                            return new zv(t, e)
                        }))),
                        u = !1;
                    return function (t) {
                            var e = [],
                                n = 0;
                            return su((function (r, i) {
                                Uu((function (o, a) {
                                    o(Wn(r, (function (o) {
                                        try {
                                            e[a] = o, (n += 1) === t.length && i(e)
                                        } catch (t) {
                                            r(t)
                                        }
                                    })))
                                }), t)
                            }))
                        }([a, o])(Wn(Fr(t, "wv2.R.c"), (function (o) {
                            var a = o[0];
                            if (o = o[1], !u) {
                                n = function () {
                                    u || (u = !0, a && a.stop())
                                };
                                var c = r.l("wv2Counter");
                                if (!lt(t, o) || c) n();
                                else if (Jc(t).C(t, ["beforeunload", "unload"], n), r.o("wv2Counter", i), r.o("stopRecorder", n), (o = [new bh(t)]).unshift(new qv(t)), o = Ou((function (t) {
                                        return t.isEnabled()
                                    }), o)) {
                                    c = new Kv(t, e, !(o instanceof bh), Za.PREPROD_FEATURE);
                                    var s = Ah.Fd(i, "m", pu(c.Ki, c), o, t),
                                        f = Ah.Fd(i, "e", pu(c.Ah, c), o, t);
                                    c = (o = function () {
                                        var t = bu((function (t, e) {
                                            return t[e[0]] = {
                                                od: 0,
                                                fh: 1 / e[1]
                                            }, t
                                        }), {}, [
                                            ["blur", .0034],
                                            ["change", .0155],
                                            ["click", .01095],
                                            ["deviceRotation", 2e-4],
                                            ["focus", .0061],
                                            ["mousemove", .5132],
                                            ["scroll", .4795],
                                            ["selection", .0109],
                                            ["touchcancel", 2e-4],
                                            ["touchend", .0265],
                                            ["touchforcechange", .0233],
                                            ["touchmove", .1442],
                                            ["touchstart", .027],
                                            ["zoom", .0014]
                                        ]);
                                        return {
                                            Yg: function (e) {
                                                if (e.length) return {
                                                    type: "activity",
                                                    data: bu((function (e, n) {
                                                        var r = t[n];
                                                        return Math.round(e + r.od * r.fh)
                                                    }), 0, Au(t))
                                                }
                                            },
                                            Si: function (e) {
                                                e && (e = t[e.data.type]) && (e.od += 1)
                                            }
                                        }
                                    }()).Si, f.C("ag", o.Yg), f.C("p", c), s.C("see", (function (t) {
                                        var e = !1;
                                        Uu((function (t) {
                                            "page" === t.type && (e = !0)
                                        }), t), e && (u || f.push({
                                            type: "event",
                                            data: {
                                                type: "fatalError",
                                                Y: {
                                                    code: "invalid-snapshot",
                                                    Bh: "p.s.f",
                                                    stack: ""
                                                }
                                            }
                                        }), n())
                                    }));
                                    var l = zu((function (t) {
                                        "eof" === yo(t, "data.type") ? (f.push(t), s.push(t), f.flush(), s.flush()) : ("event" === t.type ? f : s).push(t)
                                    }));
                                    Or(t, n, 864e5), zn(t, (function () {
                                        a.start(l)
                                    }))
                                }
                            }
                        }))),
                        function () {
                            return n()
                        }
                })),
                Jv = Io((function (t, e) {
                    0 === parseFloat(yo(e, "settings.c_recp")) && (t.Yd.o("ymoo" + t.vd, t.yg(dr)), t.ud && t.ud.destruct && t.ud.destruct())
                })),
                $v = Br("wsa", (function (t, e) {
                    var n = {
                            vd: Nc(e),
                            ud: dn(t, e),
                            yg: of (t),
                            Yd: nf(t)
                        },
                        r = n.yg(dr);
                    if (n.Yd.Qd) return !1;
                    var i = n.Yd.l("ymoo" + n.vd);
                    return !!(i && 30 > r - i) || (wn(t, e, Jv(n)).catch(Fr(t, "d.f")), !1)
                })),
                Zv = go((function (t) {
                    return t = yo(t, "navigator.plugins") || [], wu(t) ? go(Ki, Iu(Boolean), Ku((function (t, e) {
                        return t.name > e.name ? 1 : 2
                    })), zu(_t))(t) : ""
                }), cu(",")),
                Qv = function (t) {
                    var e = hs(t);
                    if (!e) return "";
                    e = e("canvas");
                    var n = [],
                        r = {
                            th: md,
                            Eh: E
                        },
                        i = r.Eh;
                    r = r.th;
                    try {
                        var o = Co("getContext", e);
                        n = Hu(go(co, o), r)
                    } catch (t) {
                        return ""
                    }
                    return (o = Ou(co, n)) ? i(t, {
                        canvas: e,
                        ih: o
                    }) : ""
                },
                tm = ["name", "lang", "localService", "voiceURI", "default"],
                em = oo((function (t, e) {
                    return wn(t, e, yu("settings.form_goals"))
                }), uo),
                nm = xo(!0, v),
                rm = Br("s.f.i", (function (t, e) {
                    var n = [];
                    Jc(t).C(t, ["click"], Fr(t, "s.f.c", ko([t, e, n], p))), Jc(t).C(t, ["submit"], Fr(t, "s.f.e", go(yu("target"), ko([t, e, n], nm)))), m(t, e, "Form goal. Counter " + e.id + ". Init.")
                })),
                im = Yo,
                om = ro("isp.stat", (function (t, e, n) {
                    var r, i = Nc(e);
                    return i = cf(e)[i].Kb, fh(t, "pi", e)({
                        H: Ic((r = {}, r[i] = 1, r))
                    }, [n])
                })),
                am = ro("isp.stat", (function (t, e, n) {
                    return new Zc((function (e, r) {
                        if (function (t, e, n) {
                                var r = ks(e);
                                if (Lu(n, r.jb) || r.jb.push(n), fu(r.$a)) {
                                    if (!(n = hs(t))) return null;
                                    if (n = n("iframe"), Tu(n.style, {
                                            display: "none",
                                            width: "1px",
                                            height: "1px",
                                            visibility: "hidden"
                                        }), n.src = e, !(t = Ci(t))) return null;
                                    t.appendChild(n), r.$a = n
                                } else(t = yo(r.$a, "contentWindow")) && t.postMessage("frameReinit", "*");
                                return r.$a
                            }(t, Oc, "isp")) {
                            var i = function (t) {
                                ("1" === t ? e : r)(), im(), t = ks(Oc), Lu("isp", t.jb) && (t.jb = Pu(go(au("isp"), ao), t.jb), t.jb.length || (Ti(t.$a), t.$a = null))
                            };
                            im = Jc(t).C(t, ["message"], ko([t, n, i], d)), Or(t, i, 1500)
                        } else r()
                    }))
                })),
                um = ro("isp", (function (t, e) {
                    wn(t, e, (function (n) {
                        var r = Ou((function (t) {
                            return yo(n, "settings." + t)
                        }), ["rt", "mf"]);
                        if (r && Cc(t)) {
                            var i = sd(n) && !Uc(t),
                                o = Nc(e),
                                a = cf(e);
                            if (a[o] = {
                                    Kb: r,
                                    status: i ? 3 : 4
                                }, !i) return i = function (t, e, n) {
                                var r, i = sf(t, e),
                                    o = Gi(t);
                                o = Oi(o.protocol + "//" + o.hostname + o.pathname), e = uf(t, e);
                                var a = "";
                                do {
                                    a += zi(t)
                                } while (a.length < e.length);
                                a = a.slice(0, e.length), t = "";
                                for (var u = 0; u < e.length; u += 1) t += (e.charCodeAt(u) + a.charCodeAt(u) - 96) % 10;
                                return t = (e = [a, t])[0], e = e[1], (r = {}, r.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + e + "&mask=" + t + "&ref=" + o, r.rt = "https://" + i + ".mc.yandex.ru/watch/3/1", r)[n]
                            }(t, e, r), ("mf" === r ? am : om)(t, e, i).then((function () {
                                a[o].status = 1
                            })).catch((function () {
                                a[o].status = 2
                            }))
                        }
                    })).catch(Fr(t, "l.isp"))
                })),
                cm = /[^\d]/g,
                sm = /[^\d.,]/g,
                fm = /[.,]$/,
                lm = Br("ep.pp", (function (t, e) {
                    if (!e) return 0;
                    t: {
                        for (var n = e.replace(sm, "").replace(fm, ""), r = "0" === n[n.length - 1], i = n.length; 0 < i && !(3 < n.length - i + 1 && r); --i) {
                            var o = n[i - 1];
                            if (Lu(o, [",", "."])) {
                                r = o;
                                break t
                            }
                        }
                        r = ""
                    }
                    return n = r ? e.split(r) : [e], r = r ? n[1] : "00", n = parseFloat(n[0].replace(cm, "") + "." + r.replace(cm, "")), r = Math.pow(10, 8) - .01, t.isNaN(n) ? n = 0 : (n = Math.min(n, r), n = Math.max(n, 0)), n
                })),
                hm = [
                    [
                        ["EUR", "€"], "978"
                    ],
                    [
                        ["USD", "У\\.Е\\.", "\\$"], "840"
                    ],
                    [
                        ["UAH", "ГРН", "₴"], "980"
                    ],
                    ["ТГ KZT ₸ ТҢГ TENGE ТЕНГЕ".split(" "), "398"],
                    [
                        ["GBP", "£", "UKL"], "826"
                    ],
                    ["RUR RUB Р РУБ ₽ P РUB PУБ PУB PYБ РYБ РУB PУБ".split(" "), "643"]
                ],
                dm = oo((function (t) {
                    return new RegExp(t.join("|"), "i")
                })),
                pm = Br("ep.cp", (function (t) {
                    if (!t) return "643";
                    var e = t.replace(/\s/g, "");
                    return (t = Ou((function (t) {
                        return dm(t[0]).test(e)
                    }), hm)) ? t[1] : "643"
                })),
                vm = Br("ep.en", (function (t, e, n) {
                    return 0 > (n = 16 - (e = "" + 100 * e + n + (t = h(t))).length) ? "" : (n = (e = el("0", n) + e).slice(0, 8), e = e.slice(-8), (n = (92844 ^ +n).toString(35)) + "z" + (e = (92844 ^ +e).toString(35)))
                })),
                mm = go(c, pm),
                gm = Br("ep.ctp", (function (t, e, n, r) {
                    var i = mm(t, n),
                        o = u(t, r);
                    a(t, e, i, o), zo("MutationObserver", t.MutationObserver) && new MutationObserver((function () {
                        var c = mm(t, n),
                            s = u(t, r);
                        i === c && o === s || a(t, e, i = c, o = s)
                    })).observe(t.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                })),
                bm = Br("ep.chp", (function (t, e, n, r, i) {
                    return n && s(t, e), r || i ? Jc(t).C(t.document, ["click"], Fr(t, "ep.chp.cl", ko([t, e, r, i], o))) : Yo
                })),
                ym = Br("ep.dec", (function (t, e) {
                    if (!e || Zu(t)) return [];
                    var n = l(t, e, " ").split(" "),
                        r = n[1],
                        i = n[2],
                        o = n.slice(3);
                    if (1 === (n = parseInt(n[0], 2))) n = "AT5T6ku06kEsXK3iyBRgo6lk8rCtX4Kjf0qpRe74vtAplOkkpSi8E9FDTBJlIV6szGuWawyILrLlztwl4KEqs1pNFvNdtIrYtROBN1gSGS1adp+myrzmZKoqErtCv20WyWiRlEqZQUzvV3sRa1nScmlxptwLLY7o";
                    else {
                        if (2 !== n) return [];
                        n = "Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA=="
                    }
                    n = function (t, e) {
                        function n() {
                            var t = s + "0",
                                e = s + "1";
                            u[t] ? u[e] ? (s = s.slice(0, -1), --c) : (a[e] = i(8), u[e] = 1) : (a[t] = i(8), u[t] = 1)
                        }

                        function r() {
                            var t = s + "1";
                            u[s + "0"] ? u[t] ? (s = s.slice(0, -1), --c) : u[s += "1"] = 1 : u[s += "0"] = 1
                        }

                        function i(t) {
                            void 0 === t && (t = 1);
                            var e = o.slice(c, c + t);
                            return c += t, e
                        }
                        for (var o = l(t, e, ""), a = {}, u = {}, c = 1, s = ""; c < o.length - 1;)("0" === i() ? r : n)();
                        return a
                    }(t, n), o = o.join(""), i = parseInt(r + i, 2);
                    var a = "";
                    r = "";
                    for (var u = 0; r.length < i && o[u];) n[a += o[u]] && (r += String.fromCharCode(parseInt(n[a], 2)), a = ""), u += 1;
                    for (n = "", i = 0; i < r.length;) 128 > (o = r.charCodeAt(i)) ? (n += String.fromCharCode(o), i++) : 191 < o && 224 > o ? (a = r.charCodeAt(i + 1), n += String.fromCharCode((31 & o) << 6 | 63 & a), i += 2) : (a = r.charCodeAt(i + 1), n += String.fromCharCode((15 & o) << 12 | (63 & a) << 6 | 63 & r.charCodeAt(i + 2)), i += 3);
                    return mo(r = ia(t, n)) ? r : []
                })),
                wm = Br("ep.i", (function (t, e) {
                    return zo("querySelectorAll", t.document.querySelectorAll) ? function (t, e) {
                        return wn(t, e, (function (e) {
                            var n = yo(e, "settings.dr");
                            return {
                                vh: ym(t, n),
                                isEnabled: yo(e, "settings.auto_goals")
                            }
                        }))
                    }(t, e).then((function (n) {
                        var r = n.vh,
                            o = r[0],
                            a = r[1],
                            u = r[2],
                            c = r[3],
                            s = r[4],
                            f = r[5],
                            l = r[6],
                            h = r[7],
                            d = r[8],
                            p = r[9];
                        if (!n.isEnabled) return Zc.resolve(Yo);
                        var v = i(t, o),
                            m = i(t, c),
                            g = i(t, l),
                            b = i(t, d),
                            y = "" + o + a + u == "" + c + s + f;
                        return $(t).then((function () {
                            return v && gm(t, e, a, u), m && !y && gm(t, e, s, f), bm(t, e, g || b, h, p)
                        }))
                    })) : Zc.resolve(Yo)
                })),
                Em = /[\*\.\?\(\)]/g,
                Cm = oo((function (t, e, n) {
                    try {
                        var r = n.replace("\\s", " ").replace(Em, "");
                        hh(t).warn('Function "' + r + '" has been overriden, this may cause issues with Metrika counter')
                    } catch (t) {}
                }), uo),
                xm = Br("r.nn", (function (t) {
                    on(t).isEnabled && Mr(t, tu, (function (e) {
                        e.qa.C((function (e) {
                            Cm(t, e[1], e[0]), tu.splice(100)
                        }))
                    }))
                })),
                km = Br("lt.p", ro("lt.p", (function (t) {
                    var e;
                    if (zo("PerformanceObserver", t.PerformanceObserver)) {
                        var n = 0,
                            r = new t.PerformanceObserver(Fr(t, "lt.o", (function (e) {
                                e && e.getEntries && (e = e.getEntries(), n = bu((function (t, e) {
                                    return t + e.duration
                                }), n, e), lo(t).o("lt", n))
                            })));
                        try {
                            r.observe(((e = {}).type = "longtask", e.buffered = !0, e))
                        } catch (t) {
                            return Yo
                        }
                        return function () {
                            return r.disconnect()
                        }
                    }
                    return Yo
                })));
            "function" == typeof Promise && Promise.resolve();
            var Am, Tm, Sm, _m = /(.*[\\?&])(ysclid=[^&]+&?)(.*)/,
                Rm = Br("yid.e", (function (t) {
                    var e, n = Gi(t),
                        r = n.href;
                    Fo(n.search, "ysclid") && (n = function (t) {
                        return t.replace(_m, (function (t, e, n, r) {
                            return "" + e + r
                        }))
                    }(r), null !== (e = null == t ? void 0 : t.history) && void 0 !== e && e.replaceState && zo("replaceState", t.history.replaceState) && t.history.replaceState(void 0, "", n))
                })),
                Mm = Br("fbq.o", (function (t, e, n) {
                    var r = yo(t, "fbq");
                    if (r && r.callMethod) {
                        var i = function () {
                            var t = To(arguments),
                                n = r.apply(void 0, t);
                            return e(t), n
                        };
                        Tu(i, r), n && Uu(e, n), t.fbq = i
                    } else var o = Or(t, ko([t, e, Ko(Ki(r && r.queue))], Mm), 1e3, "fbq.d");
                    return pu(Qi, null, t, o)
                })),
                Nm = ((Am = {}).add_to_wishlist = "add-to-whishlist", Am.begin_checkout = "begin-checkout", Am.generate_lead = "submit-lead", Am.add_payment_info = "add-payment-info", Am),
                Dm = ((Tm = {}).AddToCart = "add-to-cart", Tm.Lead = "submit-lead", Tm.InitiateCheckout = "begin-checkout", Tm.Purchase = "purchase", Tm.CompleteRegistration = "register", Tm.Contact = "submit-contact", Tm.AddPaymentInfo = "add-payment-info", Tm.AddToWishlist = "add-to-whishlist", Tm.Subscribe = "subscribe", Tm),
                Pm = ((Sm = {})[1] = Nm, Sm[2] = Nm, Sm[3] = Nm, Sm[0] = Dm, Sm),
                Im = [Dm.AddToCart, Dm.Purchase],
                Om = Io((function (t, e) {
                    var n = yo(e, "ecommerce"),
                        r = yo(e, "event") || "";
                    (n = n && r && {
                        version: "3",
                        lc: r
                    }) || (n = (mo(e) || wu(e)) && (r = (n = To(e))[1], "event" === n[0] && r) ? {
                        version: "2",
                        lc: r
                    } : void 0), n || (n = (n = yo(e, "ecommerce")) && {
                        version: "1",
                        lc: ou(",", Au(n))
                    }), n && t(n)
                })),
                Lm = Br("ag.e", (function (t, e) {
                    var i = [],
                        o = Fr(t, "ag.s", ko([io, i], Uu));
                    return "0" === e.aa && wn(t, e, (function (o) {
                        if (yo(o, "settings.auto_goals") && dn(t, e) && (o = td(t, e, "autogoal"))) {
                            o = ko([o, e.jc], r);
                            var a = Om(o);
                            o = ko([t, o], n), i.push(Mm(t, o)), i.push(Cp(t, "dataLayer", (function (t) {
                                t.qa.C(a)
                            })))
                        }
                    })), o
                })),
                jm = oo((function (t) {
                    return yo(t, "crypto.subtle.digest") && yo(t, "TextEncoder") && yo(t, "FileReader") && yo(t, "Blob")
                })),
                Bm = Br("fpm", (function (t, n) {
                    if ("https:" !== Gi(t).protocol || !jm(t)) return Yo;
                    var r = dn(t, n);
                    return r ? function (n) {
                        return new Zc((function (i, o) {
                            return Mo(n) ? Au(n).length ? i(e(t, n).then((function (t) {
                                var e, n;
                                t && t.length && r.params(((e = {}).__ym = ((n = {}).fpp = t, n), e))
                            }), Yo)) : o(ji("fpm.l")) : o(ji("fpm.o"))
                        })).catch(Fr(t, "fpm.en"))
                    } : Yo
                })),
                Fm = ["an.yandex.ru/mapuid/google/?partner-tag=yandex_llc", "an.yandex.ru/mapuid/google/?partner-tag=yandexcom", "an.yandex.ru/mapuid/google/?partner-tag=yandexru"],
                Gm = Br("p.sci", (function (e, n) {
                    var r = Nc(n);
                    if (!Lu(r, Gl)) {
                        var i = Mu(e),
                            o = i.l("scip");
                        if (!o) return wn(e, n, co).then((function (n) {
                            return n = yo(n, "settings.ins"), !(o = i.l("scip")) && n ? (i.o("scip", !0), t(e)) : null
                        }), Fr(e, "ins.cs"))
                    }
                    return Zc.resolve()
                })),
                Hm = Mu(window);
            Hm.Fa("hitParam", {}), Hm.Fa("lastReferrer", window.location.href), Hm.Fa("getCounters", Uh(window)), Nl.push(fp);
            var Um = function (t, e, n, r) {
                var i = this;
                return Fr(window, "c.i", (function () {
                    function o(t, e, n) {
                        i[e] = function (t, e, n, r, i) {
                            return n.length && i ? ko(bu((function (i, o, a) {
                                return n[a] ? i.concat(ko([t, e, r], o)) : i
                            }), [], n), go)()(i) : i
                        }(c, s, n || p, e, t)
                    }

                    function a(t, e) {
                        var n = Ya(c, s, 0, t)(c, s);
                        return n && (Do(n.then) ? n.then((function (t) {
                            return u(t, e)
                        })) : u(n, e)), n
                    }

                    function u(t, e) {
                        t && (Do(t) ? h.push(t) : e && h.push(t[e]))
                    }(!window || isNaN(t) && !t) && Li();
                    var c = window,
                        s = function (t, e, n, r, i) {
                            var o = "object" == typeof t ? t : {
                                id: t,
                                aa: r,
                                $b: i,
                                T: n
                            };
                            return Ui(t = bu((function (t, e) {
                                var n = e[1],
                                    r = n.Ni;
                                return n = o[n.Uf], t[e[0]] = r ? r(n) : n, t
                            }), {}, ku(e)), t.T || {}), t
                        }(t, Rc, e, n, r);
                    s.id || rn(c, "Invalid Metrika id: " + s.id);
                    var f = Nc(s),
                        l = Hm.l("counters", {}),
                        h = [],
                        d = [],
                        p = [Wa, Ya, Ka];
                    if (p.unshift(qa), l[f]) return rn(c, "Duplicate counter " + f + " initialization"), l[f];
                    var v = !1,
                        m = Hm.l("hitParam", {});
                    m[f] && (v = !(!Dc(s.aa) || l[f])), m[f] = 1, i._webvisor = s.Ta || !1, l[f] = i, Hm.o("counters", l), Hm.Fa("counter", i), m = Xh(window, s), h.push(m), Cd(window), $v(window, s) && delete l[f], a(tv), Zp(c, [Qv, Zv, x, Dt, y, St, ld, Nt, b, g, w]), d.push(xo(Yf, a)), d.push(xo(Gm, a)), a(dh), d.push(xo(P, a)), a(qp), a(Kp), o(vh(c, s), "hit"), o(hp(c, s), "params"), f = a(zh, rp({
                        unsubscribe: 1
                    })), i.trackHash = Ya(c, s, 0, yo(f, rp({
                        Fj: 1
                    }))), o(td(c, s), "reachGoal"), o(dp(c, s), "experiments"), a(Jp), d.push(xo(Gh, a)), v || d.push(xo(ep, a)), h.push(Lm(c, s)), o(yo(v = a(Jh, rp({
                        zd: 1
                    })), rp({
                        Oi: 1
                    })), "notBounce"), o(f = a(Bm), "firstPartyParams"), o(yo(v, rp({
                        Vb: 1
                    })), "accurateTrackBounce"), a(pp), o(yo(v = a(nd, rp({
                        zd: 1
                    })), rp({
                        Ch: 1
                    })), "extLink"), o(yo(v, rp({
                        Xg: 1
                    })), "addFileExtension"), o(yo(v, rp({
                        file: 1
                    })), "file"), o(yo(v, rp({
                        ed: 1
                    })), "trackLinks"), h.push(xp(c, s)), h.push(kp(c)), o(Ap(c, s), "ecommerceAdd"), o(Tp(c, s), "ecommerceRemove"), o(Sp(c, s), "ecommerceDetail"), o(_p(c, s), "ecommercePurchase"), o((v = a(Wp)) || Yo, "userParams"), o($p(c, s, h), "destruct", [Wa, Ka]), a(Df), a(fd), o((v = a(ev)) || Yo, "setUserID"), i.getClientID = a(nv) || Yo, a(Ed), o(ip(c, s), "clickmap"), (v = a(wm)) && v.then(Co("push", h)), a(np), o(op(c, s), "enableAll"), a(rm), a(um), a(ap), a(up), a(Rm), a(km), d.push(xo(Xp, a)), (v = a(cp)) && v.then(Co("push", h)), a(sp), zn(c, ko([c, d, function (t) {
                        a(t)
                    }, 1, "a.i"], Vn)), a(rt), a(Wv), xm(c)
                }))()
            };
            if (function (t) {
                    var e = Mu(t);
                    e.l("i") || (e.o("i", !0), Jc(t).C(t, ["message"], xo(t, L)))
                }(window), window.Ya && Um) {
                var Xm = Ac.Zb;
                window.Ya[Xm] = Um, Zh(window);
                var zm = window.Ya[Xm];
                zm.informer = function (t) {
                    var e = Fr(t, "i.clch", Ca);
                    return Jc(t).C(t.document, ["click"], pu(e, null, t), {
                            passive: !1
                        }),
                        function (e) {
                            var n = Ac.Ka,
                                r = t.Ya[Ac.Zb],
                                i = !!r._informer;
                            r._informer = Tu({
                                domain: "informer.yandex.ru"
                            }, e), i || ai(t, {
                                src: n + "//informer.yandex.ru/metrika/informer.js"
                            })
                        }
                }(window), zm.counters = Hm.l("getCounters")
            }! function (t) {
                var e = yo(t, "ym");
                if (e) {
                    var n = yo(e, "a");
                    n || (e.a = [], n = e.a);
                    var r = bp(t);
                    Mr(t, n, (function (t) {
                        t.qa.C(r)
                    }), !0)
                }
            }(window)
        }()
    } catch (t) {}
}).call(this);