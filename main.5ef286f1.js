parcelRequire = function(e) {
    var r = "function" == typeof parcelRequire && parcelRequire
      , n = "function" == typeof require && require
      , i = {};
    function u(e, u) {
        if (e in i)
            return i[e];
        var t = "function" == typeof parcelRequire && parcelRequire;
        if (!u && t)
            return t(e, !0);
        if (r)
            return r(e, !0);
        if (n && "string" == typeof e)
            return n(e);
        var o = new Error("Cannot find module '" + e + "'");
        throw o.code = "MODULE_NOT_FOUND",
        o
    }
    return u.register = function(e, r) {
        i[e] = r
    }
    ,
    i = e(u),
    u.modules = i,
    u
}(function(require) {
    function be(a) {
        return a && a.__esModule ? {
            d: a.default
        } : {
            d: a
        }
    }
    var wc = null;
    function ce() {
        return wc || (wc = de()),
        wc
    }
    function de() {
        try {
            throw new Error
        } catch (t) {
            var e = ("" + t.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
            if (e)
                return ee(e[0])
        }
        return "/"
    }
    function ee(e) {
        return ("" + e).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, "$1") + "/"
    }
    var fe = ce;
    var ja = {}
      , ge = fe;
    function he(r) {
        Array.isArray(r) || (r = [r]);
        var e = r[r.length - 1];
        try {
            return Promise.resolve(require(e))
        } catch ($) {
            if ("MODULE_NOT_FOUND" === $.code)
                return new Pb(function($, t) {
                    xc(r.slice(0, -1)).then(function() {
                        return require(e)
                    }).then($, t)
                }
                );
            throw $
        }
    }
    function xc(r) {
        return Promise.all(r.map(le))
    }
    var yc = {};
    function ie(r, e) {
        yc[r] = e
    }
    var je = xc;
    (ja = ja = he).load = je;
    var ke = function() {
        var exports = this, module = {
            exports: this
        }, global = arguments[0], define, root, factory;
        return "undefined" != typeof navigator && (root = window || {},
        factory = function(window) {
            var svgNS = "http://www.w3.org/2000/svg", locationHref = "", initialDefaultFrame = -999999, subframeEnabled = !0, idPrefix = "", expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), cachedColors = {}, bmRnd, bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
            function ProjectInterface() {
                return {}
            }
            !function() {
                var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], r = e.length;
                for (t = 0; t < r; t += 1)
                    BMMath[e[t]] = Math[e[t]]
            }(),
            BMMath.random = Math.random,
            BMMath.abs = function(t) {
                if ("object" === typeof t && t.length) {
                    var e, r = createSizedArray(t.length), i = t.length;
                    for (e = 0; e < i; e += 1)
                        r[e] = Math.abs(t[e]);
                    return r
                }
                return Math.abs(t)
            }
            ;
            var defaultCurveSegments = 150
              , degToRads = Math.PI / 180
              , roundCorner = .5519;
            function roundValues(t) {
                bmRnd = t ? Math.round : function(t) {
                    return t
                }
            }
            function styleDiv(t) {
                t.style.position = "absolute",
                t.style.top = 0,
                t.style.left = 0,
                t.style.display = "block",
                t.style.transformOrigin = "0 0",
                t.style.webkitTransformOrigin = "0 0",
                t.style.backfaceVisibility = "visible",
                t.style.webkitBackfaceVisibility = "visible",
                t.style.transformStyle = "preserve-3d",
                t.style.webkitTransformStyle = "preserve-3d",
                t.style.mozTransformStyle = "preserve-3d"
            }
            function BMEnterFrameEvent(t, e, r, i) {
                this.type = t,
                this.currentTime = e,
                this.totalTime = r,
                this.direction = i < 0 ? -1 : 1
            }
            function BMCompleteEvent(t, e) {
                this.type = t,
                this.direction = e < 0 ? -1 : 1
            }
            function BMCompleteLoopEvent(t, e, r, i) {
                this.type = t,
                this.currentLoop = r,
                this.totalLoops = e,
                this.direction = i < 0 ? -1 : 1
            }
            function BMSegmentStartEvent(t, e, r) {
                this.type = t,
                this.firstFrame = e,
                this.totalFrames = r
            }
            function BMDestroyEvent(t, e) {
                this.type = t,
                this.target = e
            }
            function BMRenderFrameErrorEvent(t, e) {
                this.type = "renderFrameError",
                this.nativeError = t,
                this.currentTime = e
            }
            function BMConfigErrorEvent(t) {
                this.type = "configError",
                this.nativeError = t
            }
            function BMAnimationConfigErrorEvent(t, e) {
                this.type = t,
                this.nativeError = e
            }
            roundValues(!1);
            var createElementID = (_count = 0,
            function() {
                return idPrefix + "__lottie_element_" + (_count += 1)
            }
            ), _count;
            function HSVtoRGB(t, e, r) {
                var i, s, a, n, o, h, l, p;
                switch (h = r * (1 - e),
                l = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e),
                p = r * (1 - (1 - o) * e),
                n % 6) {
                case 0:
                    i = r,
                    s = p,
                    a = h;
                    break;
                case 1:
                    i = l,
                    s = r,
                    a = h;
                    break;
                case 2:
                    i = h,
                    s = r,
                    a = p;
                    break;
                case 3:
                    i = h,
                    s = l,
                    a = r;
                    break;
                case 4:
                    i = p,
                    s = h,
                    a = r;
                    break;
                case 5:
                    i = r,
                    s = h,
                    a = l;
                }
                return [i, s, a]
            }
            function RGBtoHSV(t, e, r) {
                var i, s = Math.max(t, e, r), a = Math.min(t, e, r), n = s - a, o = 0 === s ? 0 : n / s, h = s / 255;
                switch (s) {
                case a:
                    i = 0;
                    break;
                case t:
                    i = e - r + n * (e < r ? 6 : 0),
                    i /= 6 * n;
                    break;
                case e:
                    i = r - t + 2 * n,
                    i /= 6 * n;
                    break;
                case r:
                    i = t - e + 4 * n,
                    i /= 6 * n;
                }
                return [i, o, h]
            }
            function addSaturationToRGB(t, e) {
                var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return r[1] += e,
                r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0),
                HSVtoRGB(r[0], r[1], r[2])
            }
            function addBrightnessToRGB(t, e) {
                var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return r[2] += e,
                r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0),
                HSVtoRGB(r[0], r[1], r[2])
            }
            function addHueToRGB(t, e) {
                var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
                return r[0] += e / 360,
                r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1),
                HSVtoRGB(r[0], r[1], r[2])
            }
            var rgbToHex = function() {
                var t, e, r = [];
                for (t = 0; t < 256; t += 1)
                    e = t.toString(16),
                    r[t] = 1 === e.length ? "0" + e : e;
                return function(t, e, i) {
                    return t < 0 && (t = 0),
                    e < 0 && (e = 0),
                    i < 0 && (i = 0),
                    "#" + r[t] + r[e] + r[i]
                }
            }();
            function BaseEvent() {}
            BaseEvent.prototype = {
                triggerEvent: function(t, e) {
                    if (this._cbs[t])
                        for (var r = this._cbs[t], i = 0; i < r.length; i += 1)
                            r[i](e)
                },
                addEventListener: function(t, e) {
                    return this._cbs[t] || (this._cbs[t] = []),
                    this._cbs[t].push(e),
                    function() {
                        this.removeEventListener(t, e)
                    }
                    .bind(this)
                },
                removeEventListener: function(t, e) {
                    if (e) {
                        if (this._cbs[t]) {
                            for (var r = 0, i = this._cbs[t].length; r < i; )
                                this._cbs[t][r] === e && (this._cbs[t].splice(r, 1),
                                r -= 1,
                                i -= 1),
                                r += 1;
                            this._cbs[t].length || (this._cbs[t] = null)
                        }
                    } else
                        this._cbs[t] = null
                }
            };
            var createTypedArray = function() {
                function t(t, e) {
                    var r, i = 0, s = [];
                    switch (t) {
                    case "int16":
                    case "uint8c":
                        r = 1;
                        break;
                    default:
                        r = 1.1;
                    }
                    for (i = 0; i < e; i += 1)
                        s.push(r);
                    return s
                }
                return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(e, r) {
                    return "float32" === e ? new Float32Array(r) : "int16" === e ? new Int16Array(r) : "uint8c" === e ? new Uint8ClampedArray(r) : t(e, r)
                }
                : t
            }();
            function createSizedArray(t) {
                return Array.apply(null, {
                    length: t
                })
            }
            function createNS(t) {
                return document.createElementNS(svgNS, t)
            }
            function createTag(t) {
                return document.createElement(t)
            }
            function DynamicPropertyContainer() {}
            DynamicPropertyContainer.prototype = {
                addDynamicProperty: function(t) {
                    -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t),
                    this.container.addDynamicProperty(this),
                    this._isAnimated = !0)
                },
                iterateDynamicProperties: function() {
                    var t;
                    this._mdf = !1;
                    var e = this.dynamicProperties.length;
                    for (t = 0; t < e; t += 1)
                        this.dynamicProperties[t].getValue(),
                        this.dynamicProperties[t]._mdf && (this._mdf = !0)
                },
                initDynamicPropertyContainer: function(t) {
                    this.container = t,
                    this.dynamicProperties = [],
                    this._mdf = !1,
                    this._isAnimated = !1
                }
            };
            var getBlendMode = (blendModeEnums = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity"
            },
            function(t) {
                return blendModeEnums[t] || ""
            }
            ), blendModeEnums, lineCapEnum = {
                1: "butt",
                2: "round",
                3: "square"
            }, lineJoinEnum = {
                1: "miter",
                2: "round",
                3: "bevel"
            }, Matrix = function() {
                var t = Math.cos
                  , e = Math.sin
                  , r = Math.tan
                  , i = Math.round;
                function s() {
                    return this.props[0] = 1,
                    this.props[1] = 0,
                    this.props[2] = 0,
                    this.props[3] = 0,
                    this.props[4] = 0,
                    this.props[5] = 1,
                    this.props[6] = 0,
                    this.props[7] = 0,
                    this.props[8] = 0,
                    this.props[9] = 0,
                    this.props[10] = 1,
                    this.props[11] = 0,
                    this.props[12] = 0,
                    this.props[13] = 0,
                    this.props[14] = 0,
                    this.props[15] = 1,
                    this
                }
                function a(r) {
                    if (0 === r)
                        return this;
                    var i = t(r)
                      , s = e(r);
                    return this._t(i, -s, 0, 0, s, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }
                function n(r) {
                    if (0 === r)
                        return this;
                    var i = t(r)
                      , s = e(r);
                    return this._t(1, 0, 0, 0, 0, i, -s, 0, 0, s, i, 0, 0, 0, 0, 1)
                }
                function o(r) {
                    if (0 === r)
                        return this;
                    var i = t(r)
                      , s = e(r);
                    return this._t(i, 0, s, 0, 0, 1, 0, 0, -s, 0, i, 0, 0, 0, 0, 1)
                }
                function h(r) {
                    if (0 === r)
                        return this;
                    var i = t(r)
                      , s = e(r);
                    return this._t(i, -s, 0, 0, s, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }
                function l(t, e) {
                    return this._t(1, e, t, 1, 0, 0)
                }
                function p(t, e) {
                    return this.shear(r(t), r(e))
                }
                function m(i, s) {
                    var a = t(s)
                      , n = e(s);
                    return this._t(a, n, 0, 0, -n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -n, 0, 0, n, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
                }
                function f(t, e, r) {
                    return r || 0 === r || (r = 1),
                    1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
                }
                function c(t, e, r, i, s, a, n, o, h, l, p, m, f, c, d, u) {
                    return this.props[0] = t,
                    this.props[1] = e,
                    this.props[2] = r,
                    this.props[3] = i,
                    this.props[4] = s,
                    this.props[5] = a,
                    this.props[6] = n,
                    this.props[7] = o,
                    this.props[8] = h,
                    this.props[9] = l,
                    this.props[10] = p,
                    this.props[11] = m,
                    this.props[12] = f,
                    this.props[13] = c,
                    this.props[14] = d,
                    this.props[15] = u,
                    this
                }
                function d(t, e, r) {
                    return r = r || 0,
                    0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
                }
                function u(t, e, r, i, s, a, n, o, h, l, p, m, f, c, d, u) {
                    var y = this.props;
                    if (1 === t && 0 === e && 0 === r && 0 === i && 0 === s && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === m)
                        return y[12] = y[12] * t + y[15] * f,
                        y[13] = y[13] * a + y[15] * c,
                        y[14] = y[14] * p + y[15] * d,
                        y[15] *= u,
                        this._identityCalculated = !1,
                        this;
                    var g = y[0]
                      , v = y[1]
                      , b = y[2]
                      , P = y[3]
                      , E = y[4]
                      , x = y[5]
                      , S = y[6]
                      , A = y[7]
                      , C = y[8]
                      , _ = y[9]
                      , T = y[10]
                      , k = y[11]
                      , D = y[12]
                      , M = y[13]
                      , F = y[14]
                      , w = y[15];
                    return y[0] = g * t + v * s + b * h + P * f,
                    y[1] = g * e + v * a + b * l + P * c,
                    y[2] = g * r + v * n + b * p + P * d,
                    y[3] = g * i + v * o + b * m + P * u,
                    y[4] = E * t + x * s + S * h + A * f,
                    y[5] = E * e + x * a + S * l + A * c,
                    y[6] = E * r + x * n + S * p + A * d,
                    y[7] = E * i + x * o + S * m + A * u,
                    y[8] = C * t + _ * s + T * h + k * f,
                    y[9] = C * e + _ * a + T * l + k * c,
                    y[10] = C * r + _ * n + T * p + k * d,
                    y[11] = C * i + _ * o + T * m + k * u,
                    y[12] = D * t + M * s + F * h + w * f,
                    y[13] = D * e + M * a + F * l + w * c,
                    y[14] = D * r + M * n + F * p + w * d,
                    y[15] = D * i + M * o + F * m + w * u,
                    this._identityCalculated = !1,
                    this
                }
                function y() {
                    return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]),
                    this._identityCalculated = !0),
                    this._identity
                }
                function g(t) {
                    for (var e = 0; e < 16; ) {
                        if (t.props[e] !== this.props[e])
                            return !1;
                        e += 1
                    }
                    return !0
                }
                function v(t) {
                    var e;
                    for (e = 0; e < 16; e += 1)
                        t.props[e] = this.props[e];
                    return t
                }
                function b(t) {
                    var e;
                    for (e = 0; e < 16; e += 1)
                        this.props[e] = t[e]
                }
                function P(t, e, r) {
                    return {
                        x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                        y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                        z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                    }
                }
                function E(t, e, r) {
                    return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
                }
                function x(t, e, r) {
                    return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
                }
                function S(t, e, r) {
                    return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                }
                function A() {
                    var t = this.props[0] * this.props[5] - this.props[1] * this.props[4]
                      , e = this.props[5] / t
                      , r = -this.props[1] / t
                      , i = -this.props[4] / t
                      , s = this.props[0] / t
                      , a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t
                      , n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t
                      , o = new Matrix;
                    return o.props[0] = e,
                    o.props[1] = r,
                    o.props[4] = i,
                    o.props[5] = s,
                    o.props[12] = a,
                    o.props[13] = n,
                    o
                }
                function C(t) {
                    return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
                }
                function _(t) {
                    var e, r = t.length, i = [];
                    for (e = 0; e < r; e += 1)
                        i[e] = C(t[e]);
                    return i
                }
                function T(t, e, r) {
                    var i = createTypedArray("float32", 6);
                    if (this.isIdentity())
                        i[0] = t[0],
                        i[1] = t[1],
                        i[2] = e[0],
                        i[3] = e[1],
                        i[4] = r[0],
                        i[5] = r[1];
                    else {
                        var s = this.props[0]
                          , a = this.props[1]
                          , n = this.props[4]
                          , o = this.props[5]
                          , h = this.props[12]
                          , l = this.props[13];
                        i[0] = t[0] * s + t[1] * n + h,
                        i[1] = t[0] * a + t[1] * o + l,
                        i[2] = e[0] * s + e[1] * n + h,
                        i[3] = e[0] * a + e[1] * o + l,
                        i[4] = r[0] * s + r[1] * n + h,
                        i[5] = r[0] * a + r[1] * o + l
                    }
                    return i
                }
                function k(t, e, r) {
                    return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
                }
                function D(t, e) {
                    if (this.isIdentity())
                        return t + "," + e;
                    var r = this.props;
                    return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
                }
                function M() {
                    for (var t = 0, e = this.props, r = "matrix3d("; t < 16; )
                        r += i(1e4 * e[t]) / 1e4,
                        r += 15 === t ? ")" : ",",
                        t += 1;
                    return r
                }
                function F(t) {
                    return t < 1e-6 && t > 0 || t > -1e-6 && t < 0 ? i(1e4 * t) / 1e4 : t
                }
                function w() {
                    var t = this.props;
                    return "matrix(" + F(t[0]) + "," + F(t[1]) + "," + F(t[4]) + "," + F(t[5]) + "," + F(t[12]) + "," + F(t[13]) + ")"
                }
                return function() {
                    this.reset = s,
                    this.rotate = a,
                    this.rotateX = n,
                    this.rotateY = o,
                    this.rotateZ = h,
                    this.skew = p,
                    this.skewFromAxis = m,
                    this.shear = l,
                    this.scale = f,
                    this.setTransform = c,
                    this.translate = d,
                    this.transform = u,
                    this.applyToPoint = P,
                    this.applyToX = E,
                    this.applyToY = x,
                    this.applyToZ = S,
                    this.applyToPointArray = k,
                    this.applyToTriplePoints = T,
                    this.applyToPointStringified = D,
                    this.toCSS = M,
                    this.to2dCSS = w,
                    this.clone = v,
                    this.cloneFromProps = b,
                    this.equals = g,
                    this.inversePoints = _,
                    this.inversePoint = C,
                    this.getInverseMatrix = A,
                    this._t = this.transform,
                    this.isIdentity = y,
                    this._identity = !0,
                    this._identityCalculated = !1,
                    this.props = createTypedArray("float32", 16),
                    this.reset()
                }
            }();
            !function(t, e) {
                var r, i = this, s = 256, a = 6, n = "random", o = e.pow(s, a), h = e.pow(2, 52), l = 2 * h, p = s - 1;
                function m(t) {
                    var e, r = t.length, i = this, a = 0, n = i.i = i.j = 0, o = i.S = [];
                    for (r || (t = [r++]); a < s; )
                        o[a] = a++;
                    for (a = 0; a < s; a++)
                        o[a] = o[n = p & n + t[a % r] + (e = o[a])],
                        o[n] = e;
                    i.g = function(t) {
                        for (var e, r = 0, a = i.i, n = i.j, o = i.S; t--; )
                            e = o[a = p & a + 1],
                            r = r * s + o[p & (o[a] = o[n = p & n + e]) + (o[n] = e)];
                        return i.i = a,
                        i.j = n,
                        r
                    }
                }
                function f(t, e) {
                    return e.i = t.i,
                    e.j = t.j,
                    e.S = t.S.slice(),
                    e
                }
                function c(t, e) {
                    for (var r, i = t + "", s = 0; s < i.length; )
                        e[p & s] = p & (r ^= 19 * e[p & s]) + i.charCodeAt(s++);
                    return d(e)
                }
                function d(t) {
                    return String.fromCharCode.apply(0, t)
                }
                e["seed" + n] = function(p, u, y) {
                    var g = []
                      , v = c(function t(e, r) {
                        var i, s = [], a = typeof e;
                        if (r && "object" == a)
                            for (i in e)
                                try {
                                    s.push(t(e[i], r - 1))
                                } catch (n) {}
                        return s.length ? s : "string" == a ? e : e + "\0"
                    }((u = !0 === u ? {
                        entropy: !0
                    } : u || {}).entropy ? [p, d(t)] : null === p ? function() {
                        try {
                            if (r)
                                return d(r.randomBytes(s));
                            var e = new Uint8Array(s);
                            return (i.crypto || i.msCrypto).getRandomValues(e),
                            d(e)
                        } catch (o) {
                            var a = i.navigator
                              , n = a && a.plugins;
                            return [+new Date, i, n, i.screen, d(t)]
                        }
                    }() : p, 3), g)
                      , b = new m(g)
                      , P = function() {
                        for (var t = b.g(a), e = o, r = 0; t < h; )
                            t = (t + r) * s,
                            e *= s,
                            r = b.g(1);
                        for (; t >= l; )
                            t /= 2,
                            e /= 2,
                            r >>>= 1;
                        return (t + r) / e
                    };
                    return P.int32 = function() {
                        return 0 | b.g(4)
                    }
                    ,
                    P.quick = function() {
                        return b.g(4) / 4294967296
                    }
                    ,
                    P.double = P,
                    c(d(b.S), t),
                    (u.pass || y || function(t, r, i, s) {
                        return s && (s.S && f(s, b),
                        t.state = function() {
                            return f(b, {})
                        }
                        ),
                        i ? (e[n] = t,
                        r) : t
                    }
                    )(P, v, "global"in u ? u.global : this == e, u.state)
                }
                ,
                c(e.random(), t)
            }([], BMMath);
            var BezierFactory = function() {
                var t = {
                    getBezierEasing: function(t, r, i, s, a) {
                        var n = a || ("bez_" + t + "_" + r + "_" + i + "_" + s).replace(/\./g, "p");
                        if (e[n])
                            return e[n];
                        var o = new c([t, r, i, s]);
                        return e[n] = o,
                        o
                    }
                }
                  , e = {};
                var r = 4
                  , i = 1e-7
                  , s = 10
                  , a = 11
                  , n = 1 / (a - 1)
                  , o = "function" == typeof Float32Array;
                function h(t, e) {
                    return 1 - 3 * e + 3 * t
                }
                function l(t, e) {
                    return 3 * e - 6 * t
                }
                function p(t) {
                    return 3 * t
                }
                function m(t, e, r) {
                    return ((h(e, r) * t + l(e, r)) * t + p(e)) * t
                }
                function f(t, e, r) {
                    return 3 * h(e, r) * t * t + 2 * l(e, r) * t + p(e)
                }
                function c(t) {
                    this._p = t,
                    this._mSampleValues = o ? new Float32Array(a) : new Array(a),
                    this._precomputed = !1,
                    this.get = this.get.bind(this)
                }
                return c.prototype = {
                    get: function(t) {
                        var e = this._p[0]
                          , r = this._p[1]
                          , i = this._p[2]
                          , s = this._p[3];
                        return this._precomputed || this._precompute(),
                        e === r && i === s ? t : 0 === t ? 0 : 1 === t ? 1 : m(this._getTForX(t), r, s)
                    },
                    _precompute: function() {
                        var t = this._p[0]
                          , e = this._p[1]
                          , r = this._p[2]
                          , i = this._p[3];
                        this._precomputed = !0,
                        t === e && r === i || this._calcSampleValues()
                    },
                    _calcSampleValues: function() {
                        for (var t = this._p[0], e = this._p[2], r = 0; r < a; ++r)
                            this._mSampleValues[r] = m(r * n, t, e)
                    },
                    _getTForX: function(t) {
                        for (var e = this._p[0], o = this._p[2], h = this._mSampleValues, l = 0, p = 1, c = a - 1; p !== c && h[p] <= t; ++p)
                            l += n;
                        var d = l + (t - h[--p]) / (h[p + 1] - h[p]) * n
                          , u = f(d, e, o);
                        return u >= .001 ? function(t, e, i, s) {
                            for (var a = 0; a < r; ++a) {
                                var n = f(e, i, s);
                                if (0 === n)
                                    return e;
                                e -= (m(e, i, s) - t) / n
                            }
                            return e
                        }(t, d, e, o) : 0 === u ? d : function(t, e, r, a, n) {
                            var o, h, l = 0;
                            do {
                                (o = m(h = e + (r - e) / 2, a, n) - t) > 0 ? r = h : e = h
                            } while (Math.abs(o) > i && ++l < s);
                            return h
                        }(t, l, l + n, e, o)
                    }
                },
                t
            }();
            function extendPrototype(t, e) {
                var r, i, s = t.length;
                for (r = 0; r < s; r += 1)
                    for (var a in i = t[r].prototype)
                        Object.prototype.hasOwnProperty.call(i, a) && (e.prototype[a] = i[a])
            }
            function getDescriptor(t, e) {
                return Object.getOwnPropertyDescriptor(t, e)
            }
            function createProxyFunction(t) {
                function e() {}
                return e.prototype = t,
                e
            }
            function bezFunction() {
                var t = Math;
                function e(t, e, r, i, s, a) {
                    var n = t * i + e * s + r * a - s * i - a * t - r * e;
                    return n > -.001 && n < .001
                }
                var r = function(t, e, r, i) {
                    var s, a, n, o, h, l, p = defaultCurveSegments, m = 0, f = [], c = [], d = bezierLengthPool.newElement();
                    for (n = r.length,
                    s = 0; s < p; s += 1) {
                        for (h = s / (p - 1),
                        l = 0,
                        a = 0; a < n; a += 1)
                            o = bmPow(1 - h, 3) * t[a] + 3 * bmPow(1 - h, 2) * h * r[a] + 3 * (1 - h) * bmPow(h, 2) * i[a] + bmPow(h, 3) * e[a],
                            f[a] = o,
                            null !== c[a] && (l += bmPow(f[a] - c[a], 2)),
                            c[a] = f[a];
                        l && (m += l = bmSqrt(l)),
                        d.percents[s] = h,
                        d.lengths[s] = m
                    }
                    return d.addedLength = m,
                    d
                };
                function i(t) {
                    this.segmentLength = 0,
                    this.points = new Array(t)
                }
                function s(t, e) {
                    this.partialLength = t,
                    this.point = e
                }
                var a, n = (a = {},
                function(t, r, n, o) {
                    var h = (t[0] + "_" + t[1] + "_" + r[0] + "_" + r[1] + "_" + n[0] + "_" + n[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
                    if (!a[h]) {
                        var l, p, m, f, c, d, u, y = defaultCurveSegments, g = 0, v = null;
                        2 === t.length && (t[0] !== r[0] || t[1] !== r[1]) && e(t[0], t[1], r[0], r[1], t[0] + n[0], t[1] + n[1]) && e(t[0], t[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) && (y = 2);
                        var b = new i(y);
                        for (m = n.length,
                        l = 0; l < y; l += 1) {
                            for (u = createSizedArray(m),
                            c = l / (y - 1),
                            d = 0,
                            p = 0; p < m; p += 1)
                                f = bmPow(1 - c, 3) * t[p] + 3 * bmPow(1 - c, 2) * c * (t[p] + n[p]) + 3 * (1 - c) * bmPow(c, 2) * (r[p] + o[p]) + bmPow(c, 3) * r[p],
                                u[p] = f,
                                null !== v && (d += bmPow(u[p] - v[p], 2));
                            g += d = bmSqrt(d),
                            b.points[l] = new s(d,u),
                            v = u
                        }
                        b.segmentLength = g,
                        a[h] = b
                    }
                    return a[h]
                }
                );
                function o(t, e) {
                    var r = e.percents
                      , i = e.lengths
                      , s = r.length
                      , a = bmFloor((s - 1) * t)
                      , n = t * e.addedLength
                      , o = 0;
                    if (a === s - 1 || 0 === a || n === i[a])
                        return r[a];
                    for (var h = i[a] > n ? -1 : 1, l = !0; l; )
                        if (i[a] <= n && i[a + 1] > n ? (o = (n - i[a]) / (i[a + 1] - i[a]),
                        l = !1) : a += h,
                        a < 0 || a >= s - 1) {
                            if (a === s - 1)
                                return r[a];
                            l = !1
                        }
                    return r[a] + (r[a + 1] - r[a]) * o
                }
                var h = createTypedArray("float32", 8);
                return {
                    getSegmentsLength: function(t) {
                        var e, i = segmentsLengthPool.newElement(), s = t.c, a = t.v, n = t.o, o = t.i, h = t._length, l = i.lengths, p = 0;
                        for (e = 0; e < h - 1; e += 1)
                            l[e] = r(a[e], a[e + 1], n[e], o[e + 1]),
                            p += l[e].addedLength;
                        return s && h && (l[e] = r(a[e], a[0], n[e], o[0]),
                        p += l[e].addedLength),
                        i.totalLength = p,
                        i
                    },
                    getNewSegment: function(e, r, i, s, a, n, l) {
                        a < 0 ? a = 0 : a > 1 && (a = 1);
                        var p, m = o(a, l), f = o(n = n > 1 ? 1 : n, l), c = e.length, d = 1 - m, u = 1 - f, y = d * d * d, g = m * d * d * 3, v = m * m * d * 3, b = m * m * m, P = d * d * u, E = m * d * u + d * m * u + d * d * f, x = m * m * u + d * m * f + m * d * f, S = m * m * f, A = d * u * u, C = m * u * u + d * f * u + d * u * f, _ = m * f * u + d * f * f + m * u * f, T = m * f * f, k = u * u * u, D = f * u * u + u * f * u + u * u * f, M = f * f * u + u * f * f + f * u * f, F = f * f * f;
                        for (p = 0; p < c; p += 1)
                            h[4 * p] = t.round(1e3 * (y * e[p] + g * i[p] + v * s[p] + b * r[p])) / 1e3,
                            h[4 * p + 1] = t.round(1e3 * (P * e[p] + E * i[p] + x * s[p] + S * r[p])) / 1e3,
                            h[4 * p + 2] = t.round(1e3 * (A * e[p] + C * i[p] + _ * s[p] + T * r[p])) / 1e3,
                            h[4 * p + 3] = t.round(1e3 * (k * e[p] + D * i[p] + M * s[p] + F * r[p])) / 1e3;
                        return h
                    },
                    getPointInSegment: function(e, r, i, s, a, n) {
                        var h = o(a, n)
                          , l = 1 - h;
                        return [t.round(1e3 * (l * l * l * e[0] + (h * l * l + l * h * l + l * l * h) * i[0] + (h * h * l + l * h * h + h * l * h) * s[0] + h * h * h * r[0])) / 1e3, t.round(1e3 * (l * l * l * e[1] + (h * l * l + l * h * l + l * l * h) * i[1] + (h * h * l + l * h * h + h * l * h) * s[1] + h * h * h * r[1])) / 1e3]
                    },
                    buildBezierData: n,
                    pointOnLine2D: e,
                    pointOnLine3D: function(r, i, s, a, n, o, h, l, p) {
                        if (0 === s && 0 === o && 0 === p)
                            return e(r, i, a, n, h, l);
                        var m, f = t.sqrt(t.pow(a - r, 2) + t.pow(n - i, 2) + t.pow(o - s, 2)), c = t.sqrt(t.pow(h - r, 2) + t.pow(l - i, 2) + t.pow(p - s, 2)), d = t.sqrt(t.pow(h - a, 2) + t.pow(l - n, 2) + t.pow(p - o, 2));
                        return (m = f > c ? f > d ? f - c - d : d - c - f : d > c ? d - c - f : c - f - d) > -1e-4 && m < 1e-4
                    }
                }
            }
            !function() {
                for (var t = 0, e = ["ms", "moz", "webkit", "o"], r = 0; r < e.length && !window.requestAnimationFrame; ++r)
                    window.requestAnimationFrame = window[e[r] + "RequestAnimationFrame"],
                    window.cancelAnimationFrame = window[e[r] + "CancelAnimationFrame"] || window[e[r] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
                    var r = new Date().getTime()
                      , i = Math.max(0, 16 - (r - t))
                      , s = setTimeout(function() {
                        e(r + i)
                    }, i);
                    return t = r + i,
                    s
                }
                ),
                window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                    clearTimeout(t)
                }
                )
            }();
            var bez = bezFunction();
            function dataFunctionManager() {
                function t(s, a, n) {
                    var o, h, l, m, f, c, d = s.length;
                    for (h = 0; h < d; h += 1)
                        if ("ks"in (o = s[h]) && !o.completed) {
                            if (o.completed = !0,
                            o.tt && (s[h - 1].td = o.tt),
                            o.hasMask) {
                                var u = o.masksProperties;
                                for (m = u.length,
                                l = 0; l < m; l += 1)
                                    if (u[l].pt.k.i)
                                        i(u[l].pt.k);
                                    else
                                        for (c = u[l].pt.k.length,
                                        f = 0; f < c; f += 1)
                                            u[l].pt.k[f].s && i(u[l].pt.k[f].s[0]),
                                            u[l].pt.k[f].e && i(u[l].pt.k[f].e[0])
                            }
                            0 === o.ty ? (o.layers = e(o.refId, a),
                            t(o.layers, a, n)) : 4 === o.ty ? r(o.shapes) : 5 === o.ty && p(o)
                        }
                }
                function e(t, e) {
                    for (var r = 0, i = e.length; r < i; ) {
                        if (e[r].id === t)
                            return e[r].layers.__used ? JSON.parse(JSON.stringify(e[r].layers)) : (e[r].layers.__used = !0,
                            e[r].layers);
                        r += 1
                    }
                    return null
                }
                function r(t) {
                    var e, s, a;
                    for (e = t.length - 1; e >= 0; e -= 1)
                        if ("sh" === t[e].ty) {
                            if (t[e].ks.k.i)
                                i(t[e].ks.k);
                            else
                                for (a = t[e].ks.k.length,
                                s = 0; s < a; s += 1)
                                    t[e].ks.k[s].s && i(t[e].ks.k[s].s[0]),
                                    t[e].ks.k[s].e && i(t[e].ks.k[s].e[0]);
                        } else
                            "gr" === t[e].ty && r(t[e].it)
                }
                function i(t) {
                    var e, r = t.i.length;
                    for (e = 0; e < r; e += 1)
                        t.i[e][0] += t.v[e][0],
                        t.i[e][1] += t.v[e][1],
                        t.o[e][0] += t.v[e][0],
                        t.o[e][1] += t.v[e][1]
                }
                function s(t, e) {
                    var r = e ? e.split(".") : [100, 100, 100];
                    return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && null))
                }
                var a, n = function() {
                    var t = [4, 4, 14];
                    function e(t) {
                        var e, r, i, s = t.length;
                        for (e = 0; e < s; e += 1)
                            5 === t[e].ty && (r = t[e],
                            i = void 0,
                            i = r.t.d,
                            r.t.d = {
                                k: [{
                                    s: i,
                                    t: 0
                                }]
                            })
                    }
                    return function(r) {
                        if (s(t, r.v) && (e(r.layers),
                        r.assets)) {
                            var i, a = r.assets.length;
                            for (i = 0; i < a; i += 1)
                                r.assets[i].layers && e(r.assets[i].layers)
                        }
                    }
                }(), o = (a = [4, 7, 99],
                function(t) {
                    if (t.chars && !s(a, t.v)) {
                        var e, r, n, o, h, l = t.chars.length;
                        for (e = 0; e < l; e += 1)
                            if (t.chars[e].data && t.chars[e].data.shapes)
                                for (n = (h = t.chars[e].data.shapes[0].it).length,
                                r = 0; r < n; r += 1)
                                    (o = h[r].ks.k).__converted || (i(h[r].ks.k),
                                    o.__converted = !0)
                    }
                }
                ), h = function() {
                    var t = [4, 1, 9];
                    function e(t) {
                        var r, i, s, a = t.length;
                        for (r = 0; r < a; r += 1)
                            if ("gr" === t[r].ty)
                                e(t[r].it);
                            else if ("fl" === t[r].ty || "st" === t[r].ty)
                                if (t[r].c.k && t[r].c.k[0].i)
                                    for (s = t[r].c.k.length,
                                    i = 0; i < s; i += 1)
                                        t[r].c.k[i].s && (t[r].c.k[i].s[0] /= 255,
                                        t[r].c.k[i].s[1] /= 255,
                                        t[r].c.k[i].s[2] /= 255,
                                        t[r].c.k[i].s[3] /= 255),
                                        t[r].c.k[i].e && (t[r].c.k[i].e[0] /= 255,
                                        t[r].c.k[i].e[1] /= 255,
                                        t[r].c.k[i].e[2] /= 255,
                                        t[r].c.k[i].e[3] /= 255);
                                else
                                    t[r].c.k[0] /= 255,
                                    t[r].c.k[1] /= 255,
                                    t[r].c.k[2] /= 255,
                                    t[r].c.k[3] /= 255
                    }
                    function r(t) {
                        var r, i = t.length;
                        for (r = 0; r < i; r += 1)
                            4 === t[r].ty && e(t[r].shapes)
                    }
                    return function(e) {
                        if (s(t, e.v) && (r(e.layers),
                        e.assets)) {
                            var i, a = e.assets.length;
                            for (i = 0; i < a; i += 1)
                                e.assets[i].layers && r(e.assets[i].layers)
                        }
                    }
                }(), l = function() {
                    var t = [4, 4, 18];
                    function e(t) {
                        var r, i, s;
                        for (r = t.length - 1; r >= 0; r -= 1)
                            if ("sh" === t[r].ty) {
                                if (t[r].ks.k.i)
                                    t[r].ks.k.c = t[r].closed;
                                else
                                    for (s = t[r].ks.k.length,
                                    i = 0; i < s; i += 1)
                                        t[r].ks.k[i].s && (t[r].ks.k[i].s[0].c = t[r].closed),
                                        t[r].ks.k[i].e && (t[r].ks.k[i].e[0].c = t[r].closed);
                            } else
                                "gr" === t[r].ty && e(t[r].it)
                    }
                    function r(t) {
                        var r, i, s, a, n, o, h = t.length;
                        for (i = 0; i < h; i += 1) {
                            if ((r = t[i]).hasMask) {
                                var l = r.masksProperties;
                                for (a = l.length,
                                s = 0; s < a; s += 1)
                                    if (l[s].pt.k.i)
                                        l[s].pt.k.c = l[s].cl;
                                    else
                                        for (o = l[s].pt.k.length,
                                        n = 0; n < o; n += 1)
                                            l[s].pt.k[n].s && (l[s].pt.k[n].s[0].c = l[s].cl),
                                            l[s].pt.k[n].e && (l[s].pt.k[n].e[0].c = l[s].cl)
                            }
                            4 === r.ty && e(r.shapes)
                        }
                    }
                    return function(e) {
                        if (s(t, e.v) && (r(e.layers),
                        e.assets)) {
                            var i, a = e.assets.length;
                            for (i = 0; i < a; i += 1)
                                e.assets[i].layers && r(e.assets[i].layers)
                        }
                    }
                }();
                function p(t) {
                    0 !== t.t.a.length || "m"in t.t.p || (t.singleShape = !0)
                }
                var m = {
                    completeData: function(e, r) {
                        e.__complete || (h(e),
                        n(e),
                        o(e),
                        l(e),
                        t(e.layers, e.assets, r),
                        e.__complete = !0)
                    }
                };
                return m.checkColors = h,
                m.checkChars = o,
                m.checkShapes = l,
                m.completeLayers = t,
                m
            }
            var dataManager = dataFunctionManager();
            function getFontProperties(t) {
                for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", s = e.length, a = 0; a < s; a += 1)
                    switch (e[a].toLowerCase()) {
                    case "italic":
                        i = "italic";
                        break;
                    case "bold":
                        r = "700";
                        break;
                    case "black":
                        r = "900";
                        break;
                    case "medium":
                        r = "500";
                        break;
                    case "regular":
                    case "normal":
                        r = "400";
                        break;
                    case "light":
                    case "thin":
                        r = "200";
                    }
                return {
                    style: i,
                    weight: t.fWeight || r
                }
            }
            var FontManager = function() {
                var t = 5e3
                  , e = {
                    w: 0,
                    size: 0,
                    shapes: []
                }
                  , r = [];
                r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
                var i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"]
                  , s = [65039, 8205];
                function a(t, e) {
                    var r = createTag("span");
                    r.setAttribute("aria-hidden", !0),
                    r.style.fontFamily = e;
                    var i = createTag("span");
                    i.innerText = "giItT1WQy@!-/#",
                    r.style.position = "absolute",
                    r.style.left = "-10000px",
                    r.style.top = "-10000px",
                    r.style.fontSize = "300px",
                    r.style.fontVariant = "normal",
                    r.style.fontStyle = "normal",
                    r.style.fontWeight = "normal",
                    r.style.letterSpacing = "0",
                    r.appendChild(i),
                    document.body.appendChild(r);
                    var s = i.offsetWidth;
                    return i.style.fontFamily = function(t) {
                        var e, r = t.split(","), i = r.length, s = [];
                        for (e = 0; e < i; e += 1)
                            "sans-serif" !== r[e] && "monospace" !== r[e] && s.push(r[e]);
                        return s.join(",")
                    }(t) + ", " + e,
                    {
                        node: i,
                        w: s,
                        parent: r
                    }
                }
                function n(t, e) {
                    var r = createNS("text");
                    r.style.fontSize = "100px";
                    var i = getFontProperties(e);
                    return r.setAttribute("font-family", e.fFamily),
                    r.setAttribute("font-style", i.style),
                    r.setAttribute("font-weight", i.weight),
                    r.textContent = "1",
                    e.fClass ? (r.style.fontFamily = "inherit",
                    r.setAttribute("class", e.fClass)) : r.style.fontFamily = e.fFamily,
                    t.appendChild(r),
                    createTag("canvas").getContext("2d").font = e.fWeight + " " + e.fStyle + " 100px " + e.fFamily,
                    r
                }
                var o = function() {
                    this.fonts = [],
                    this.chars = null,
                    this.typekitLoaded = 0,
                    this.isLoaded = !1,
                    this._warned = !1,
                    this.initTime = Date.now(),
                    this.setIsLoadedBinded = this.setIsLoaded.bind(this),
                    this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
                };
                return o.isModifier = function(t, e) {
                    var r = t.toString(16) + e.toString(16);
                    return -1 !== i.indexOf(r)
                }
                ,
                o.isZeroWidthJoiner = function(t, e) {
                    return e ? t === s[0] && e === s[1] : t === s[1]
                }
                ,
                o.isCombinedCharacter = function(t) {
                    return -1 !== r.indexOf(t)
                }
                ,
                o.prototype = {
                    addChars: function(t) {
                        if (t) {
                            var e;
                            this.chars || (this.chars = []);
                            var r, i, s = t.length, a = this.chars.length;
                            for (e = 0; e < s; e += 1) {
                                for (r = 0,
                                i = !1; r < a; )
                                    this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0),
                                    r += 1;
                                i || (this.chars.push(t[e]),
                                a += 1)
                            }
                        }
                    },
                    addFonts: function(t, e) {
                        if (t) {
                            if (this.chars)
                                return this.isLoaded = !0,
                                void (this.fonts = t.list);
                            var r, i = t.list, s = i.length, o = s;
                            for (r = 0; r < s; r += 1) {
                                var h, l, p = !0;
                                if (i[r].loaded = !1,
                                i[r].monoCase = a(i[r].fFamily, "monospace"),
                                i[r].sansCase = a(i[r].fFamily, "sans-serif"),
                                i[r].fPath) {
                                    if ("p" === i[r].fOrigin || 3 === i[r].origin) {
                                        if ((h = document.querySelectorAll("style[f-forigin=\"p\"][f-family=\"" + i[r].fFamily + "\"], style[f-origin=\"3\"][f-family=\"" + i[r].fFamily + "\"]")).length > 0 && (p = !1),
                                        p) {
                                            var m = createTag("style");
                                            m.setAttribute("f-forigin", i[r].fOrigin),
                                            m.setAttribute("f-origin", i[r].origin),
                                            m.setAttribute("f-family", i[r].fFamily),
                                            m.type = "text/css",
                                            m.innerText = "@font-face {font-family: " + i[r].fFamily + "; font-style: normal; src: url('" + i[r].fPath + "');}",
                                            e.appendChild(m)
                                        }
                                    } else if ("g" === i[r].fOrigin || 1 === i[r].origin) {
                                        for (h = document.querySelectorAll("link[f-forigin=\"g\"], link[f-origin=\"1\"]"),
                                        l = 0; l < h.length; l += 1)
                                            -1 !== h[l].href.indexOf(i[r].fPath) && (p = !1);
                                        if (p) {
                                            var f = createTag("link");
                                            f.setAttribute("f-forigin", i[r].fOrigin),
                                            f.setAttribute("f-origin", i[r].origin),
                                            f.type = "text/css",
                                            f.rel = "stylesheet",
                                            f.href = i[r].fPath,
                                            document.body.appendChild(f)
                                        }
                                    } else if ("t" === i[r].fOrigin || 2 === i[r].origin) {
                                        for (h = document.querySelectorAll("script[f-forigin=\"t\"], script[f-origin=\"2\"]"),
                                        l = 0; l < h.length; l += 1)
                                            i[r].fPath === h[l].src && (p = !1);
                                        if (p) {
                                            var c = createTag("link");
                                            c.setAttribute("f-forigin", i[r].fOrigin),
                                            c.setAttribute("f-origin", i[r].origin),
                                            c.setAttribute("rel", "stylesheet"),
                                            c.setAttribute("href", i[r].fPath),
                                            e.appendChild(c)
                                        }
                                    }
                                } else
                                    i[r].loaded = !0,
                                    o -= 1;
                                i[r].helper = n(e, i[r]),
                                i[r].cache = {},
                                this.fonts.push(i[r])
                            }
                            0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                        } else
                            this.isLoaded = !0
                    },
                    getCharData: function(t, r, i) {
                        for (var s = 0, a = this.chars.length; s < a; ) {
                            if (this.chars[s].ch === t && this.chars[s].style === r && this.chars[s].fFamily === i)
                                return this.chars[s];
                            s += 1
                        }
                        return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && !this._warned && (this._warned = !0,
                        console.warn("Missing character from exported characters list: ", t, r, i)),
                        e
                    },
                    getFontByName: function(t) {
                        for (var e = 0, r = this.fonts.length; e < r; ) {
                            if (this.fonts[e].fName === t)
                                return this.fonts[e];
                            e += 1
                        }
                        return this.fonts[0]
                    },
                    measureText: function(t, e, r) {
                        var i = this.getFontByName(e)
                          , s = t.charCodeAt(0);
                        if (!i.cache[s + 1]) {
                            var a = i.helper;
                            if (" " === t) {
                                a.textContent = "|" + t + "|";
                                var n = a.getComputedTextLength();
                                a.textContent = "||";
                                var o = a.getComputedTextLength();
                                i.cache[s + 1] = (n - o) / 100
                            } else
                                a.textContent = t,
                                i.cache[s + 1] = a.getComputedTextLength() / 100
                        }
                        return i.cache[s + 1] * r
                    },
                    checkLoadedFonts: function() {
                        var e, r, i, s = this.fonts.length, a = s;
                        for (e = 0; e < s; e += 1)
                            this.fonts[e].loaded ? a -= 1 : "n" === this.fonts[e].fOrigin || 0 === this.fonts[e].origin ? this.fonts[e].loaded = !0 : (r = this.fonts[e].monoCase.node,
                            i = this.fonts[e].monoCase.w,
                            r.offsetWidth !== i ? (a -= 1,
                            this.fonts[e].loaded = !0) : (r = this.fonts[e].sansCase.node,
                            i = this.fonts[e].sansCase.w,
                            r.offsetWidth !== i && (a -= 1,
                            this.fonts[e].loaded = !0)),
                            this.fonts[e].loaded && (this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent),
                            this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));
                        0 !== a && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
                    },
                    setIsLoaded: function() {
                        this.isLoaded = !0
                    }
                },
                o
            }()
              , PropertyFactory = function() {
                var t = initialDefaultFrame
                  , e = Math.abs;
                function r(t, e) {
                    var r, s = this.offsetTime;
                    "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
                    for (var a, n, o, h, l, p, m, f, c = e.lastIndex, d = c, u = this.keyframes.length - 1, y = !0; y; ) {
                        if (a = this.keyframes[d],
                        n = this.keyframes[d + 1],
                        d === u - 1 && t >= n.t - s) {
                            a.h && (a = n),
                            c = 0;
                            break
                        }
                        if (n.t - s > t) {
                            c = d;
                            break
                        }
                        d < u - 1 ? d += 1 : (c = 0,
                        y = !1)
                    }
                    var g, v, b, P, E, x, S, A, C, _, T = n.t - s, k = a.t - s;
                    if (a.to) {
                        a.bezierData || (a.bezierData = bez.buildBezierData(a.s, n.s || a.e, a.to, a.ti));
                        var D = a.bezierData;
                        if (t >= T || t < k) {
                            var M = t >= T ? D.points.length - 1 : 0;
                            for (h = D.points[M].point.length,
                            o = 0; o < h; o += 1)
                                r[o] = D.points[M].point[o]
                        } else {
                            a.__fnct ? f = a.__fnct : (f = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get,
                            a.__fnct = f),
                            l = f((t - k) / (T - k));
                            var F, w = D.segmentLength * l, I = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastAddedLength : 0;
                            for (m = e.lastFrame < t && e._lastKeyframeIndex === d ? e._lastPoint : 0,
                            y = !0,
                            p = D.points.length; y; ) {
                                if (I += D.points[m].partialLength,
                                0 === w || 0 === l || m === D.points.length - 1) {
                                    for (h = D.points[m].point.length,
                                    o = 0; o < h; o += 1)
                                        r[o] = D.points[m].point[o];
                                    break
                                }
                                if (w >= I && w < I + D.points[m + 1].partialLength) {
                                    for (F = (w - I) / D.points[m + 1].partialLength,
                                    h = D.points[m].point.length,
                                    o = 0; o < h; o += 1)
                                        r[o] = D.points[m].point[o] + (D.points[m + 1].point[o] - D.points[m].point[o]) * F;
                                    break
                                }
                                m < p - 1 ? m += 1 : y = !1
                            }
                            e._lastPoint = m,
                            e._lastAddedLength = I - D.points[m].partialLength,
                            e._lastKeyframeIndex = d
                        }
                    } else {
                        var V, R, B, L, G;
                        if (u = a.s.length,
                        g = n.s || a.e,
                        this.sh && 1 !== a.h) {
                            if (t >= T)
                                r[0] = g[0],
                                r[1] = g[1],
                                r[2] = g[2];
                            else if (t <= k)
                                r[0] = a.s[0],
                                r[1] = a.s[1],
                                r[2] = a.s[2];
                            else {
                                var z = i(a.s)
                                  , N = i(g);
                                v = r,
                                b = function(t, e, r) {
                                    var i, s, a, n, o, h = [], l = t[0], p = t[1], m = t[2], f = t[3], c = e[0], d = e[1], u = e[2], y = e[3];
                                    (s = l * c + p * d + m * u + f * y) < 0 && (s = -s,
                                    c = -c,
                                    d = -d,
                                    u = -u,
                                    y = -y);
                                    1 - s > 1e-6 ? (i = Math.acos(s),
                                    a = Math.sin(i),
                                    n = Math.sin((1 - r) * i) / a,
                                    o = Math.sin(r * i) / a) : (n = 1 - r,
                                    o = r);
                                    return h[0] = n * l + o * c,
                                    h[1] = n * p + o * d,
                                    h[2] = n * m + o * u,
                                    h[3] = n * f + o * y,
                                    h
                                }(z, N, (t - k) / (T - k)),
                                P = b[0],
                                E = b[1],
                                x = b[2],
                                S = b[3],
                                A = Math.atan2(2 * E * S - 2 * P * x, 1 - 2 * E * E - 2 * x * x),
                                C = Math.asin(2 * P * E + 2 * x * S),
                                _ = Math.atan2(2 * P * S - 2 * E * x, 1 - 2 * P * P - 2 * x * x),
                                v[0] = A / degToRads,
                                v[1] = C / degToRads,
                                v[2] = _ / degToRads
                            }
                        } else
                            for (d = 0; d < u; d += 1)
                                1 !== a.h && (t >= T ? l = 1 : t < k ? l = 0 : (a.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []),
                                a.__fnct[d] ? f = a.__fnct[d] : (V = void 0 === a.o.x[d] ? a.o.x[0] : a.o.x[d],
                                R = void 0 === a.o.y[d] ? a.o.y[0] : a.o.y[d],
                                B = void 0 === a.i.x[d] ? a.i.x[0] : a.i.x[d],
                                L = void 0 === a.i.y[d] ? a.i.y[0] : a.i.y[d],
                                f = BezierFactory.getBezierEasing(V, R, B, L).get,
                                a.__fnct[d] = f)) : a.__fnct ? f = a.__fnct : (V = a.o.x,
                                R = a.o.y,
                                B = a.i.x,
                                L = a.i.y,
                                f = BezierFactory.getBezierEasing(V, R, B, L).get,
                                a.__fnct = f),
                                l = f((t - k) / (T - k)))),
                                g = n.s || a.e,
                                G = 1 === a.h ? a.s[d] : a.s[d] + (g[d] - a.s[d]) * l,
                                "multidimensional" === this.propType ? r[d] = G : r = G
                    }
                    return e.lastIndex = c,
                    r
                }
                function i(t) {
                    var e = t[0] * degToRads
                      , r = t[1] * degToRads
                      , i = t[2] * degToRads
                      , s = Math.cos(e / 2)
                      , a = Math.cos(r / 2)
                      , n = Math.cos(i / 2)
                      , o = Math.sin(e / 2)
                      , h = Math.sin(r / 2)
                      , l = Math.sin(i / 2);
                    return [o * h * n + s * a * l, o * a * n + s * h * l, s * h * n - o * a * l, s * a * n - o * h * l]
                }
                function s() {
                    var e = this.comp.renderedFrame - this.offsetTime
                      , r = this.keyframes[0].t - this.offsetTime
                      , i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                    if (!(e === this._caching.lastFrame || this._caching.lastFrame !== t && (this._caching.lastFrame >= i && e >= i || this._caching.lastFrame < r && e < r))) {
                        this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1,
                        this._caching.lastIndex = 0);
                        var s = this.interpolateValue(e, this._caching);
                        this.pv = s
                    }
                    return this._caching.lastFrame = e,
                    this.pv
                }
                function a(t) {
                    var r;
                    if ("unidimensional" === this.propType)
                        r = t * this.mult,
                        e(this.v - r) > 1e-5 && (this.v = r,
                        this._mdf = !0);
                    else
                        for (var i = 0, s = this.v.length; i < s; )
                            r = t[i] * this.mult,
                            e(this.v[i] - r) > 1e-5 && (this.v[i] = r,
                            this._mdf = !0),
                            i += 1
                }
                function n() {
                    if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                        if (this.lock)
                            this.setVValue(this.pv);
                        else {
                            var t;
                            this.lock = !0,
                            this._mdf = this._isFirstFrame;
                            var e = this.effectsSequence.length
                              , r = this.kf ? this.pv : this.data.k;
                            for (t = 0; t < e; t += 1)
                                r = this.effectsSequence[t](r);
                            this.setVValue(r),
                            this._isFirstFrame = !1,
                            this.lock = !1,
                            this.frameId = this.elem.globalData.frameId
                        }
                }
                function o(t) {
                    this.effectsSequence.push(t),
                    this.container.addDynamicProperty(this)
                }
                function h(t, e, r, i) {
                    this.propType = "unidimensional",
                    this.mult = r || 1,
                    this.data = e,
                    this.v = r ? e.k * r : e.k,
                    this.pv = e.k,
                    this._mdf = !1,
                    this.elem = t,
                    this.container = i,
                    this.comp = t.comp,
                    this.k = !1,
                    this.kf = !1,
                    this.vel = 0,
                    this.effectsSequence = [],
                    this._isFirstFrame = !0,
                    this.getValue = n,
                    this.setVValue = a,
                    this.addEffect = o
                }
                function l(t, e, r, i) {
                    var s;
                    this.propType = "multidimensional",
                    this.mult = r || 1,
                    this.data = e,
                    this._mdf = !1,
                    this.elem = t,
                    this.container = i,
                    this.comp = t.comp,
                    this.k = !1,
                    this.kf = !1,
                    this.frameId = -1;
                    var h = e.k.length;
                    for (this.v = createTypedArray("float32", h),
                    this.pv = createTypedArray("float32", h),
                    this.vel = createTypedArray("float32", h),
                    s = 0; s < h; s += 1)
                        this.v[s] = e.k[s] * this.mult,
                        this.pv[s] = e.k[s];
                    this._isFirstFrame = !0,
                    this.effectsSequence = [],
                    this.getValue = n,
                    this.setVValue = a,
                    this.addEffect = o
                }
                function p(e, i, h, l) {
                    this.propType = "unidimensional",
                    this.keyframes = i.k,
                    this.offsetTime = e.data.st,
                    this.frameId = -1,
                    this._caching = {
                        lastFrame: t,
                        lastIndex: 0,
                        value: 0,
                        _lastKeyframeIndex: -1
                    },
                    this.k = !0,
                    this.kf = !0,
                    this.data = i,
                    this.mult = h || 1,
                    this.elem = e,
                    this.container = l,
                    this.comp = e.comp,
                    this.v = t,
                    this.pv = t,
                    this._isFirstFrame = !0,
                    this.getValue = n,
                    this.setVValue = a,
                    this.interpolateValue = r,
                    this.effectsSequence = [s.bind(this)],
                    this.addEffect = o
                }
                function m(e, i, h, l) {
                    var p;
                    this.propType = "multidimensional";
                    var m, f, c, d, u = i.k.length;
                    for (p = 0; p < u - 1; p += 1)
                        i.k[p].to && i.k[p].s && i.k[p + 1] && i.k[p + 1].s && (m = i.k[p].s,
                        f = i.k[p + 1].s,
                        c = i.k[p].to,
                        d = i.k[p].ti,
                        (2 === m.length && (m[0] !== f[0] || m[1] !== f[1]) && bez.pointOnLine2D(m[0], m[1], f[0], f[1], m[0] + c[0], m[1] + c[1]) && bez.pointOnLine2D(m[0], m[1], f[0], f[1], f[0] + d[0], f[1] + d[1]) || 3 === m.length && (m[0] !== f[0] || m[1] !== f[1] || m[2] !== f[2]) && bez.pointOnLine3D(m[0], m[1], m[2], f[0], f[1], f[2], m[0] + c[0], m[1] + c[1], m[2] + c[2]) && bez.pointOnLine3D(m[0], m[1], m[2], f[0], f[1], f[2], f[0] + d[0], f[1] + d[1], f[2] + d[2])) && (i.k[p].to = null,
                        i.k[p].ti = null),
                        m[0] === f[0] && m[1] === f[1] && 0 === c[0] && 0 === c[1] && 0 === d[0] && 0 === d[1] && (2 === m.length || m[2] === f[2] && 0 === c[2] && 0 === d[2]) && (i.k[p].to = null,
                        i.k[p].ti = null));
                    this.effectsSequence = [s.bind(this)],
                    this.data = i,
                    this.keyframes = i.k,
                    this.offsetTime = e.data.st,
                    this.k = !0,
                    this.kf = !0,
                    this._isFirstFrame = !0,
                    this.mult = h || 1,
                    this.elem = e,
                    this.container = l,
                    this.comp = e.comp,
                    this.getValue = n,
                    this.setVValue = a,
                    this.interpolateValue = r,
                    this.frameId = -1;
                    var y = i.k[0].s.length;
                    for (this.v = createTypedArray("float32", y),
                    this.pv = createTypedArray("float32", y),
                    p = 0; p < y; p += 1)
                        this.v[p] = t,
                        this.pv[p] = t;
                    this._caching = {
                        lastFrame: t,
                        lastIndex: 0,
                        value: createTypedArray("float32", y)
                    },
                    this.addEffect = o
                }
                return {
                    getProp: function(t, e, r, i, s) {
                        var a;
                        if (e.k.length) {
                            if ("number" == typeof e.k[0])
                                a = new l(t,e,i,s);
                            else
                                switch (r) {
                                case 0:
                                    a = new p(t,e,i,s);
                                    break;
                                case 1:
                                    a = new m(t,e,i,s);
                                }
                        } else
                            a = new h(t,e,i,s);
                        return a.effectsSequence.length && s.addDynamicProperty(a),
                        a
                    }
                }
            }()
              , TransformPropertyFactory = function() {
                var t = [0, 0];
                function e(t, e, r) {
                    if (this.elem = t,
                    this.frameId = -1,
                    this.propType = "transform",
                    this.data = e,
                    this.v = new Matrix,
                    this.pre = new Matrix,
                    this.appliedTransformations = 0,
                    this.initDynamicPropertyContainer(r || t),
                    e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this),
                    this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this),
                    e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                        k: [0, 0, 0]
                    }, 1, 0, this),
                    e.rx) {
                        if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this),
                        this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this),
                        this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this),
                        e.or.k[0].ti) {
                            var i, s = e.or.k.length;
                            for (i = 0; i < s; i += 1)
                                e.or.k[i].to = null,
                                e.or.k[i].ti = null
                        }
                        this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this),
                        this.or.sh = !0
                    } else
                        this.r = PropertyFactory.getProp(t, e.r || {
                            k: 0
                        }, 0, degToRads, this);
                    e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this),
                    this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)),
                    this.a = PropertyFactory.getProp(t, e.a || {
                        k: [0, 0, 0]
                    }, 1, 0, this),
                    this.s = PropertyFactory.getProp(t, e.s || {
                        k: [100, 100, 100]
                    }, 1, .01, this),
                    e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                        _mdf: !1,
                        v: 1
                    },
                    this._isDirty = !0,
                    this.dynamicProperties.length || this.getValue(!0)
                }
                return e.prototype = {
                    applyToMatrix: function(t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(),
                        this._mdf = this._mdf || e,
                        this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                        this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                        this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                        this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                    },
                    getValue: function(e) {
                        if (this.elem.globalData.frameId !== this.frameId) {
                            if (this._isDirty && (this.precalculateMatrix(),
                            this._isDirty = !1),
                            this.iterateDynamicProperties(),
                            this._mdf || e) {
                                var r;
                                if (this.v.cloneFromProps(this.pre.props),
                                this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                                this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                                this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v),
                                this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                                this.autoOriented) {
                                    var i, s;
                                    if (r = this.elem.globalData.frameRate,
                                    this.p && this.p.keyframes && this.p.getValueAtTime)
                                        this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0),
                                        s = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0),
                                        s = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (i = this.p.pv,
                                        s = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                        i = [],
                                        s = [];
                                        var a = this.px
                                          , n = this.py;
                                        a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (i[0] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0),
                                        i[1] = n.getValueAtTime((n.keyframes[0].t + .01) / r, 0),
                                        s[0] = a.getValueAtTime(a.keyframes[0].t / r, 0),
                                        s[1] = n.getValueAtTime(n.keyframes[0].t / r, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (i[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0),
                                        i[1] = n.getValueAtTime(n.keyframes[n.keyframes.length - 1].t / r, 0),
                                        s[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0),
                                        s[1] = n.getValueAtTime((n.keyframes[n.keyframes.length - 1].t - .01) / r, 0)) : (i = [a.pv, n.pv],
                                        s[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime),
                                        s[1] = n.getValueAtTime((n._caching.lastFrame + n.offsetTime - .01) / r, n.offsetTime))
                                    } else
                                        i = s = t;
                                    this.v.rotate(-Math.atan2(i[1] - s[1], i[0] - s[0]))
                                }
                                this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                            }
                            this.frameId = this.elem.globalData.frameId
                        }
                    },
                    precalculateMatrix: function() {
                        if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                        this.appliedTransformations = 1,
                        !this.s.effectsSequence.length)) {
                            if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                            this.appliedTransformations = 2,
                            this.sk) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length)
                                    return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v),
                                this.appliedTransformations = 3
                            }
                            this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v),
                            this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                            this.appliedTransformations = 4)
                        }
                    },
                    autoOrient: function() {}
                },
                extendPrototype([DynamicPropertyContainer], e),
                e.prototype.addDynamicProperty = function(t) {
                    this._addDynamicProperty(t),
                    this.elem.addDynamicProperty(t),
                    this._isDirty = !0
                }
                ,
                e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty,
                {
                    getTransformProperty: function(t, r, i) {
                        return new e(t,r,i)
                    }
                }
            }();
            function ShapePath() {
                this.c = !1,
                this._length = 0,
                this._maxLength = 8,
                this.v = createSizedArray(this._maxLength),
                this.o = createSizedArray(this._maxLength),
                this.i = createSizedArray(this._maxLength)
            }
            ShapePath.prototype.setPathData = function(t, e) {
                this.c = t,
                this.setLength(e);
                for (var r = 0; r < e; )
                    this.v[r] = pointPool.newElement(),
                    this.o[r] = pointPool.newElement(),
                    this.i[r] = pointPool.newElement(),
                    r += 1
            }
            ,
            ShapePath.prototype.setLength = function(t) {
                for (; this._maxLength < t; )
                    this.doubleArrayLength();
                this._length = t
            }
            ,
            ShapePath.prototype.doubleArrayLength = function() {
                this.v = this.v.concat(createSizedArray(this._maxLength)),
                this.i = this.i.concat(createSizedArray(this._maxLength)),
                this.o = this.o.concat(createSizedArray(this._maxLength)),
                this._maxLength *= 2
            }
            ,
            ShapePath.prototype.setXYAt = function(t, e, r, i, s) {
                var a;
                switch (this._length = Math.max(this._length, i + 1),
                this._length >= this._maxLength && this.doubleArrayLength(),
                r) {
                case "v":
                    a = this.v;
                    break;
                case "i":
                    a = this.i;
                    break;
                case "o":
                    a = this.o;
                    break;
                default:
                    a = [];
                }
                (!a[i] || a[i] && !s) && (a[i] = pointPool.newElement()),
                a[i][0] = t,
                a[i][1] = e
            }
            ,
            ShapePath.prototype.setTripleAt = function(t, e, r, i, s, a, n, o) {
                this.setXYAt(t, e, "v", n, o),
                this.setXYAt(r, i, "o", n, o),
                this.setXYAt(s, a, "i", n, o)
            }
            ,
            ShapePath.prototype.reverse = function() {
                var t = new ShapePath;
                t.setPathData(this.c, this._length);
                var e = this.v
                  , r = this.o
                  , i = this.i
                  , s = 0;
                this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1),
                s = 1);
                var a, n = this._length - 1, o = this._length;
                for (a = s; a < o; a += 1)
                    t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], a, !1),
                    n -= 1;
                return t
            }
            ;
            var ShapePropertyFactory = function() {
                var t = -999999;
                function e(t, e, r) {
                    var i, s, a, n, o, h, l, p, m, f = r.lastIndex, c = this.keyframes;
                    if (t < c[0].t - this.offsetTime)
                        i = c[0].s[0],
                        a = !0,
                        f = 0;
                    else if (t >= c[c.length - 1].t - this.offsetTime)
                        i = c[c.length - 1].s ? c[c.length - 1].s[0] : c[c.length - 2].e[0],
                        a = !0;
                    else {
                        for (var d, u, y = f, g = c.length - 1, v = !0; v && (d = c[y],
                        !((u = c[y + 1]).t - this.offsetTime > t)); )
                            y < g - 1 ? y += 1 : v = !1;
                        if (f = y,
                        !(a = 1 === d.h)) {
                            if (t >= u.t - this.offsetTime)
                                p = 1;
                            else if (t < d.t - this.offsetTime)
                                p = 0;
                            else {
                                var b;
                                d.__fnct ? b = d.__fnct : (b = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get,
                                d.__fnct = b),
                                p = b((t - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime)))
                            }
                            s = u.s ? u.s[0] : d.e[0]
                        }
                        i = d.s[0]
                    }
                    for (h = e._length,
                    l = i.i[0].length,
                    r.lastIndex = f,
                    n = 0; n < h; n += 1)
                        for (o = 0; o < l; o += 1)
                            m = a ? i.i[n][o] : i.i[n][o] + (s.i[n][o] - i.i[n][o]) * p,
                            e.i[n][o] = m,
                            m = a ? i.o[n][o] : i.o[n][o] + (s.o[n][o] - i.o[n][o]) * p,
                            e.o[n][o] = m,
                            m = a ? i.v[n][o] : i.v[n][o] + (s.v[n][o] - i.v[n][o]) * p,
                            e.v[n][o] = m
                }
                function r() {
                    var e = this.comp.renderedFrame - this.offsetTime
                      , r = this.keyframes[0].t - this.offsetTime
                      , i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime
                      , s = this._caching.lastFrame;
                    return s !== t && (s < r && e < r || s > i && e > i) || (this._caching.lastIndex = s < e ? this._caching.lastIndex : 0,
                    this.interpolateShape(e, this.pv, this._caching)),
                    this._caching.lastFrame = e,
                    this.pv
                }
                function i() {
                    this.paths = this.localShapeCollection
                }
                function s(t) {
                    (function(t, e) {
                        if (t._length !== e._length || t.c !== e.c)
                            return !1;
                        var r, i = t._length;
                        for (r = 0; r < i; r += 1)
                            if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1])
                                return !1;
                        return !0
                    }
                    )(this.v, t) || (this.v = shapePool.clone(t),
                    this.localShapeCollection.releaseShapes(),
                    this.localShapeCollection.addShape(this.v),
                    this._mdf = !0,
                    this.paths = this.localShapeCollection)
                }
                function a() {
                    if (this.elem.globalData.frameId !== this.frameId)
                        if (this.effectsSequence.length) {
                            if (this.lock)
                                this.setVValue(this.pv);
                            else {
                                var t, e;
                                this.lock = !0,
                                this._mdf = !1,
                                t = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                                var r = this.effectsSequence.length;
                                for (e = 0; e < r; e += 1)
                                    t = this.effectsSequence[e](t);
                                this.setVValue(t),
                                this.lock = !1,
                                this.frameId = this.elem.globalData.frameId
                            }
                        } else
                            this._mdf = !1
                }
                function n(t, e, r) {
                    this.propType = "shape",
                    this.comp = t.comp,
                    this.container = t,
                    this.elem = t,
                    this.data = e,
                    this.k = !1,
                    this.kf = !1,
                    this._mdf = !1;
                    var s = 3 === r ? e.pt.k : e.ks.k;
                    this.v = shapePool.clone(s),
                    this.pv = shapePool.clone(this.v),
                    this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                    this.paths = this.localShapeCollection,
                    this.paths.addShape(this.v),
                    this.reset = i,
                    this.effectsSequence = []
                }
                function o(t) {
                    this.effectsSequence.push(t),
                    this.container.addDynamicProperty(this)
                }
                function h(e, s, a) {
                    this.propType = "shape",
                    this.comp = e.comp,
                    this.elem = e,
                    this.container = e,
                    this.offsetTime = e.data.st,
                    this.keyframes = 3 === a ? s.pt.k : s.ks.k,
                    this.k = !0,
                    this.kf = !0;
                    var n = this.keyframes[0].s[0].i.length;
                    this.v = shapePool.newElement(),
                    this.v.setPathData(this.keyframes[0].s[0].c, n),
                    this.pv = shapePool.clone(this.v),
                    this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                    this.paths = this.localShapeCollection,
                    this.paths.addShape(this.v),
                    this.lastFrame = t,
                    this.reset = i,
                    this._caching = {
                        lastFrame: t,
                        lastIndex: 0
                    },
                    this.effectsSequence = [r.bind(this)]
                }
                n.prototype.interpolateShape = e,
                n.prototype.getValue = a,
                n.prototype.setVValue = s,
                n.prototype.addEffect = o,
                h.prototype.getValue = a,
                h.prototype.interpolateShape = e,
                h.prototype.setVValue = s,
                h.prototype.addEffect = o;
                var l = function() {
                    var t = roundCorner;
                    function e(t, e) {
                        this.v = shapePool.newElement(),
                        this.v.setPathData(!0, 4),
                        this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                        this.paths = this.localShapeCollection,
                        this.localShapeCollection.addShape(this.v),
                        this.d = e.d,
                        this.elem = t,
                        this.comp = t.comp,
                        this.frameId = -1,
                        this.initDynamicPropertyContainer(t),
                        this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                        this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
                        this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                        this.convertEllToPath())
                    }
                    return e.prototype = {
                        reset: i,
                        getValue: function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                            this.iterateDynamicProperties(),
                            this._mdf && this.convertEllToPath())
                        },
                        convertEllToPath: function() {
                            var e = this.p.v[0]
                              , r = this.p.v[1]
                              , i = this.s.v[0] / 2
                              , s = this.s.v[1] / 2
                              , a = 3 !== this.d
                              , n = this.v;
                            n.v[0][0] = e,
                            n.v[0][1] = r - s,
                            n.v[1][0] = a ? e + i : e - i,
                            n.v[1][1] = r,
                            n.v[2][0] = e,
                            n.v[2][1] = r + s,
                            n.v[3][0] = a ? e - i : e + i,
                            n.v[3][1] = r,
                            n.i[0][0] = a ? e - i * t : e + i * t,
                            n.i[0][1] = r - s,
                            n.i[1][0] = a ? e + i : e - i,
                            n.i[1][1] = r - s * t,
                            n.i[2][0] = a ? e + i * t : e - i * t,
                            n.i[2][1] = r + s,
                            n.i[3][0] = a ? e - i : e + i,
                            n.i[3][1] = r + s * t,
                            n.o[0][0] = a ? e + i * t : e - i * t,
                            n.o[0][1] = r - s,
                            n.o[1][0] = a ? e + i : e - i,
                            n.o[1][1] = r + s * t,
                            n.o[2][0] = a ? e - i * t : e + i * t,
                            n.o[2][1] = r + s,
                            n.o[3][0] = a ? e - i : e + i,
                            n.o[3][1] = r - s * t
                        }
                    },
                    extendPrototype([DynamicPropertyContainer], e),
                    e
                }()
                  , p = function() {
                    function t(t, e) {
                        this.v = shapePool.newElement(),
                        this.v.setPathData(!0, 0),
                        this.elem = t,
                        this.comp = t.comp,
                        this.data = e,
                        this.frameId = -1,
                        this.d = e.d,
                        this.initDynamicPropertyContainer(t),
                        1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this),
                        this.is = PropertyFactory.getProp(t, e.is, 0, .01, this),
                        this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath,
                        this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this),
                        this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                        this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this),
                        this.or = PropertyFactory.getProp(t, e.or, 0, 0, this),
                        this.os = PropertyFactory.getProp(t, e.os, 0, .01, this),
                        this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                        this.localShapeCollection.addShape(this.v),
                        this.paths = this.localShapeCollection,
                        this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                        this.convertToPath())
                    }
                    return t.prototype = {
                        reset: i,
                        getValue: function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                            this.iterateDynamicProperties(),
                            this._mdf && this.convertToPath())
                        },
                        convertStarToPath: function() {
                            var t, e, r, i, s = 2 * Math.floor(this.pt.v), a = 2 * Math.PI / s, n = !0, o = this.or.v, h = this.ir.v, l = this.os.v, p = this.is.v, m = 2 * Math.PI * o / (2 * s), f = 2 * Math.PI * h / (2 * s), c = -Math.PI / 2;
                            c += this.r.v;
                            var d = 3 === this.data.d ? -1 : 1;
                            for (this.v._length = 0,
                            t = 0; t < s; t += 1) {
                                r = n ? l : p,
                                i = n ? m : f;
                                var u = (e = n ? o : h) * Math.cos(c)
                                  , y = e * Math.sin(c)
                                  , g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y)
                                  , v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
                                u += +this.p.v[0],
                                y += +this.p.v[1],
                                this.v.setTripleAt(u, y, u - g * i * r * d, y - v * i * r * d, u + g * i * r * d, y + v * i * r * d, t, !0),
                                n = !n,
                                c += a * d
                            }
                        },
                        convertPolygonToPath: function() {
                            var t, e = Math.floor(this.pt.v), r = 2 * Math.PI / e, i = this.or.v, s = this.os.v, a = 2 * Math.PI * i / (4 * e), n = .5 * -Math.PI, o = 3 === this.data.d ? -1 : 1;
                            for (n += this.r.v,
                            this.v._length = 0,
                            t = 0; t < e; t += 1) {
                                var h = i * Math.cos(n)
                                  , l = i * Math.sin(n)
                                  , p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l)
                                  , m = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                h += +this.p.v[0],
                                l += +this.p.v[1],
                                this.v.setTripleAt(h, l, h - p * a * s * o, l - m * a * s * o, h + p * a * s * o, l + m * a * s * o, t, !0),
                                n += r * o
                            }
                            this.paths.length = 0,
                            this.paths[0] = this.v
                        }
                    },
                    extendPrototype([DynamicPropertyContainer], t),
                    t
                }()
                  , m = function() {
                    function t(t, e) {
                        this.v = shapePool.newElement(),
                        this.v.c = !0,
                        this.localShapeCollection = shapeCollectionPool.newShapeCollection(),
                        this.localShapeCollection.addShape(this.v),
                        this.paths = this.localShapeCollection,
                        this.elem = t,
                        this.comp = t.comp,
                        this.frameId = -1,
                        this.d = e.d,
                        this.initDynamicPropertyContainer(t),
                        this.p = PropertyFactory.getProp(t, e.p, 1, 0, this),
                        this.s = PropertyFactory.getProp(t, e.s, 1, 0, this),
                        this.r = PropertyFactory.getProp(t, e.r, 0, 0, this),
                        this.dynamicProperties.length ? this.k = !0 : (this.k = !1,
                        this.convertRectToPath())
                    }
                    return t.prototype = {
                        convertRectToPath: function() {
                            var t = this.p.v[0]
                              , e = this.p.v[1]
                              , r = this.s.v[0] / 2
                              , i = this.s.v[1] / 2
                              , s = bmMin(r, i, this.r.v)
                              , a = s * (1 - roundCorner);
                            this.v._length = 0,
                            2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + s, t + r, e - i + s, t + r, e - i + a, 0, !0),
                            this.v.setTripleAt(t + r, e + i - s, t + r, e + i - a, t + r, e + i - s, 1, !0),
                            0 !== s ? (this.v.setTripleAt(t + r - s, e + i, t + r - s, e + i, t + r - a, e + i, 2, !0),
                            this.v.setTripleAt(t - r + s, e + i, t - r + a, e + i, t - r + s, e + i, 3, !0),
                            this.v.setTripleAt(t - r, e + i - s, t - r, e + i - s, t - r, e + i - a, 4, !0),
                            this.v.setTripleAt(t - r, e - i + s, t - r, e - i + a, t - r, e - i + s, 5, !0),
                            this.v.setTripleAt(t - r + s, e - i, t - r + s, e - i, t - r + a, e - i, 6, !0),
                            this.v.setTripleAt(t + r - s, e - i, t + r - a, e - i, t + r - s, e - i, 7, !0)) : (this.v.setTripleAt(t - r, e + i, t - r + a, e + i, t - r, e + i, 2),
                            this.v.setTripleAt(t - r, e - i, t - r, e - i + a, t - r, e - i, 3))) : (this.v.setTripleAt(t + r, e - i + s, t + r, e - i + a, t + r, e - i + s, 0, !0),
                            0 !== s ? (this.v.setTripleAt(t + r - s, e - i, t + r - s, e - i, t + r - a, e - i, 1, !0),
                            this.v.setTripleAt(t - r + s, e - i, t - r + a, e - i, t - r + s, e - i, 2, !0),
                            this.v.setTripleAt(t - r, e - i + s, t - r, e - i + s, t - r, e - i + a, 3, !0),
                            this.v.setTripleAt(t - r, e + i - s, t - r, e + i - a, t - r, e + i - s, 4, !0),
                            this.v.setTripleAt(t - r + s, e + i, t - r + s, e + i, t - r + a, e + i, 5, !0),
                            this.v.setTripleAt(t + r - s, e + i, t + r - a, e + i, t + r - s, e + i, 6, !0),
                            this.v.setTripleAt(t + r, e + i - s, t + r, e + i - s, t + r, e + i - a, 7, !0)) : (this.v.setTripleAt(t - r, e - i, t - r + a, e - i, t - r, e - i, 1, !0),
                            this.v.setTripleAt(t - r, e + i, t - r, e + i - a, t - r, e + i, 2, !0),
                            this.v.setTripleAt(t + r, e + i, t + r - a, e + i, t + r, e + i, 3, !0)))
                        },
                        getValue: function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                            this.iterateDynamicProperties(),
                            this._mdf && this.convertRectToPath())
                        },
                        reset: i
                    },
                    extendPrototype([DynamicPropertyContainer], t),
                    t
                }();
                var f = {
                    getShapeProp: function(t, e, r) {
                        var i;
                        return 3 === r || 4 === r ? i = (3 === r ? e.pt : e.ks).k.length ? new h(t,e,r) : new n(t,e,r) : 5 === r ? i = new m(t,e) : 6 === r ? i = new l(t,e) : 7 === r && (i = new p(t,e)),
                        i.k && t.addDynamicProperty(i),
                        i
                    },
                    getConstructorFunction: function() {
                        return n
                    },
                    getKeyframedConstructorFunction: function() {
                        return h
                    }
                };
                return f
            }()
              , ShapeModifiers = function() {
                var t = {}
                  , e = {};
                return t.registerModifier = function(t, r) {
                    e[t] || (e[t] = r)
                }
                ,
                t.getModifier = function(t, r, i) {
                    return new e[t](r,i)
                }
                ,
                t
            }();
            function ShapeModifier() {}
            function TrimModifier() {}
            function RoundCornersModifier() {}
            function PuckerAndBloatModifier() {}
            function RepeaterModifier() {}
            function ShapeCollection() {
                this._length = 0,
                this._maxLength = 4,
                this.shapes = createSizedArray(this._maxLength)
            }
            function DashProperty(t, e, r, i) {
                var s;
                this.elem = t,
                this.frameId = -1,
                this.dataProps = createSizedArray(e.length),
                this.renderer = r,
                this.k = !1,
                this.dashStr = "",
                this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0),
                this.dashoffset = createTypedArray("float32", 1),
                this.initDynamicPropertyContainer(i);
                var a, n = e.length || 0;
                for (s = 0; s < n; s += 1)
                    a = PropertyFactory.getProp(t, e[s].v, 0, 0, this),
                    this.k = a.k || this.k,
                    this.dataProps[s] = {
                        n: e[s].n,
                        p: a
                    };
                this.k || this.getValue(!0),
                this._isAnimated = this.k
            }
            function GradientProperty(t, e, r) {
                this.data = e,
                this.c = createTypedArray("uint8c", 4 * e.p);
                var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
                this.o = createTypedArray("float32", i),
                this._cmdf = !1,
                this._omdf = !1,
                this._collapsable = this.checkCollapsable(),
                this._hasOpacity = i,
                this.initDynamicPropertyContainer(r),
                this.prop = PropertyFactory.getProp(t, e.k, 1, null, this),
                this.k = this.prop.k,
                this.getValue(!0)
            }
            ShapeModifier.prototype.initModifierProperties = function() {}
            ,
            ShapeModifier.prototype.addShapeToModifier = function() {}
            ,
            ShapeModifier.prototype.addShape = function(t) {
                if (!this.closed) {
                    t.sh.container.addDynamicProperty(t.sh);
                    var e = {
                        shape: t.sh,
                        data: t,
                        localShapeCollection: shapeCollectionPool.newShapeCollection()
                    };
                    this.shapes.push(e),
                    this.addShapeToModifier(e),
                    this._isAnimated && t.setAsAnimated()
                }
            }
            ,
            ShapeModifier.prototype.init = function(t, e) {
                this.shapes = [],
                this.elem = t,
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e),
                this.frameId = initialDefaultFrame,
                this.closed = !1,
                this.k = !1,
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }
            ,
            ShapeModifier.prototype.processKeys = function() {
                this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId,
                this.iterateDynamicProperties())
            }
            ,
            extendPrototype([DynamicPropertyContainer], ShapeModifier),
            extendPrototype([ShapeModifier], TrimModifier),
            TrimModifier.prototype.initModifierProperties = function(t, e) {
                this.s = PropertyFactory.getProp(t, e.s, 0, .01, this),
                this.e = PropertyFactory.getProp(t, e.e, 0, .01, this),
                this.o = PropertyFactory.getProp(t, e.o, 0, 0, this),
                this.sValue = 0,
                this.eValue = 0,
                this.getValue = this.processKeys,
                this.m = e.m,
                this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
            }
            ,
            TrimModifier.prototype.addShapeToModifier = function(t) {
                t.pathsData = []
            }
            ,
            TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, s) {
                var a = [];
                e <= 1 ? a.push({
                    s: t,
                    e: e
                }) : t >= 1 ? a.push({
                    s: t - 1,
                    e: e - 1
                }) : (a.push({
                    s: t,
                    e: 1
                }),
                a.push({
                    s: 0,
                    e: e - 1
                }));
                var n, o, h = [], l = a.length;
                for (n = 0; n < l; n += 1) {
                    var p, m;
                    if (!((o = a[n]).e * s < i || o.s * s > i + r))
                        p = o.s * s <= i ? 0 : (o.s * s - i) / r,
                        m = o.e * s >= i + r ? 1 : (o.e * s - i) / r,
                        h.push([p, m])
                }
                return h.length || h.push([0, 0]),
                h
            }
            ,
            TrimModifier.prototype.releasePathsData = function(t) {
                var e, r = t.length;
                for (e = 0; e < r; e += 1)
                    segmentsLengthPool.release(t[e]);
                return t.length = 0,
                t
            }
            ,
            TrimModifier.prototype.processShapes = function(t) {
                var e, r, i, s;
                if (this._mdf || t) {
                    var a = this.o.v % 360 / 360;
                    if (a < 0 && (a += 1),
                    (e = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
                        var n = e;
                        e = r,
                        r = n
                    }
                    e = 1e-4 * Math.round(1e4 * e),
                    r = 1e-4 * Math.round(1e4 * r),
                    this.sValue = e,
                    this.eValue = r
                } else
                    e = this.sValue,
                    r = this.eValue;
                var o, h, l, p, m, f = this.shapes.length, c = 0;
                if (r === e)
                    for (s = 0; s < f; s += 1)
                        this.shapes[s].localShapeCollection.releaseShapes(),
                        this.shapes[s].shape._mdf = !0,
                        this.shapes[s].shape.paths = this.shapes[s].localShapeCollection,
                        this._mdf && (this.shapes[s].pathsData.length = 0);
                else if (1 === r && 0 === e || 0 === r && 1 === e) {
                    if (this._mdf)
                        for (s = 0; s < f; s += 1)
                            this.shapes[s].pathsData.length = 0,
                            this.shapes[s].shape._mdf = !0
                } else {
                    var d, u, y = [];
                    for (s = 0; s < f; s += 1)
                        if ((d = this.shapes[s]).shape._mdf || this._mdf || t || 2 === this.m) {
                            if (h = (i = d.shape.paths)._length,
                            m = 0,
                            !d.shape._mdf && d.pathsData.length)
                                m = d.totalShapeLength;
                            else {
                                for (l = this.releasePathsData(d.pathsData),
                                o = 0; o < h; o += 1)
                                    p = bez.getSegmentsLength(i.shapes[o]),
                                    l.push(p),
                                    m += p.totalLength;
                                d.totalShapeLength = m,
                                d.pathsData = l
                            }
                            c += m,
                            d.shape._mdf = !0
                        } else
                            d.shape.paths = d.localShapeCollection;
                    var g, v = e, b = r, P = 0;
                    for (s = f - 1; s >= 0; s -= 1)
                        if ((d = this.shapes[s]).shape._mdf) {
                            for ((u = d.localShapeCollection).releaseShapes(),
                            2 === this.m && f > 1 ? (g = this.calculateShapeEdges(e, r, d.totalShapeLength, P, c),
                            P += d.totalShapeLength) : g = [[v, b]],
                            h = g.length,
                            o = 0; o < h; o += 1) {
                                v = g[o][0],
                                b = g[o][1],
                                y.length = 0,
                                b <= 1 ? y.push({
                                    s: d.totalShapeLength * v,
                                    e: d.totalShapeLength * b
                                }) : v >= 1 ? y.push({
                                    s: d.totalShapeLength * (v - 1),
                                    e: d.totalShapeLength * (b - 1)
                                }) : (y.push({
                                    s: d.totalShapeLength * v,
                                    e: d.totalShapeLength
                                }),
                                y.push({
                                    s: 0,
                                    e: d.totalShapeLength * (b - 1)
                                }));
                                var E = this.addShapes(d, y[0]);
                                if (y[0].s !== y[0].e) {
                                    if (y.length > 1)
                                        if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                            var x = E.pop();
                                            this.addPaths(E, u),
                                            E = this.addShapes(d, y[1], x)
                                        } else
                                            this.addPaths(E, u),
                                            E = this.addShapes(d, y[1]);
                                    this.addPaths(E, u)
                                }
                            }
                            d.shape.paths = u
                        }
                }
            }
            ,
            TrimModifier.prototype.addPaths = function(t, e) {
                var r, i = t.length;
                for (r = 0; r < i; r += 1)
                    e.addShape(t[r])
            }
            ,
            TrimModifier.prototype.addSegment = function(t, e, r, i, s, a, n) {
                s.setXYAt(e[0], e[1], "o", a),
                s.setXYAt(r[0], r[1], "i", a + 1),
                n && s.setXYAt(t[0], t[1], "v", a),
                s.setXYAt(i[0], i[1], "v", a + 1)
            }
            ,
            TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
                e.setXYAt(t[1], t[5], "o", r),
                e.setXYAt(t[2], t[6], "i", r + 1),
                i && e.setXYAt(t[0], t[4], "v", r),
                e.setXYAt(t[3], t[7], "v", r + 1)
            }
            ,
            TrimModifier.prototype.addShapes = function(t, e, r) {
                var i, s, a, n, o, h, l, p, m = t.pathsData, f = t.shape.paths.shapes, c = t.shape.paths._length, d = 0, u = [], y = !0;
                for (r ? (o = r._length,
                p = r._length) : (r = shapePool.newElement(),
                o = 0,
                p = 0),
                u.push(r),
                i = 0; i < c; i += 1) {
                    for (h = m[i].lengths,
                    r.c = f[i].c,
                    a = f[i].c ? h.length : h.length + 1,
                    s = 1; s < a; s += 1)
                        if (d + (n = h[s - 1]).addedLength < e.s)
                            d += n.addedLength,
                            r.c = !1;
                        else {
                            if (d > e.e) {
                                r.c = !1;
                                break
                            }
                            e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[s], f[i].v[s], r, o, y),
                            y = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[s], f[i].o[s - 1], f[i].i[s], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[s - 1]),
                            this.addSegmentFromArray(l, r, o, y),
                            y = !1,
                            r.c = !1),
                            d += n.addedLength,
                            o += 1
                        }
                    if (f[i].c && h.length) {
                        if (n = h[s - 1],
                        d <= e.e) {
                            var g = h[s - 1].addedLength;
                            e.s <= d && e.e >= d + g ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[0], f[i].v[0], r, o, y),
                            y = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[0], f[i].o[s - 1], f[i].i[0], (e.s - d) / g, (e.e - d) / g, h[s - 1]),
                            this.addSegmentFromArray(l, r, o, y),
                            y = !1,
                            r.c = !1)
                        } else
                            r.c = !1;
                        d += n.addedLength,
                        o += 1
                    }
                    if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p),
                    r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)),
                    d > e.e)
                        break;
                    i < c - 1 && (r = shapePool.newElement(),
                    y = !0,
                    u.push(r),
                    o = 0)
                }
                return u
            }
            ,
            ShapeModifiers.registerModifier("tm", TrimModifier),
            extendPrototype([ShapeModifier], RoundCornersModifier),
            RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys,
                this.rd = PropertyFactory.getProp(t, e.r, 0, null, this),
                this._isAnimated = !!this.rd.effectsSequence.length
            }
            ,
            RoundCornersModifier.prototype.processPath = function(t, e) {
                var r, i = shapePool.newElement();
                i.c = t.c;
                var s, a, n, o, h, l, p, m, f, c, d, u, y = t._length, g = 0;
                for (r = 0; r < y; r += 1)
                    s = t.v[r],
                    n = t.o[r],
                    a = t.i[r],
                    s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== r && r !== y - 1 || t.c ? (o = 0 === r ? t.v[y - 1] : t.v[r - 1],
                    l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0,
                    p = d = s[0] + (o[0] - s[0]) * l,
                    m = u = s[1] - (s[1] - o[1]) * l,
                    f = p - (p - s[0]) * roundCorner,
                    c = m - (m - s[1]) * roundCorner,
                    i.setTripleAt(p, m, f, c, d, u, g),
                    g += 1,
                    o = r === y - 1 ? t.v[0] : t.v[r + 1],
                    l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0,
                    p = f = s[0] + (o[0] - s[0]) * l,
                    m = c = s[1] + (o[1] - s[1]) * l,
                    d = p - (p - s[0]) * roundCorner,
                    u = m - (m - s[1]) * roundCorner,
                    i.setTripleAt(p, m, f, c, d, u, g),
                    g += 1) : (i.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], g),
                    g += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], g),
                    g += 1);
                return i
            }
            ,
            RoundCornersModifier.prototype.processShapes = function(t) {
                var e, r, i, s, a, n, o = this.shapes.length, h = this.rd.v;
                if (0 !== h)
                    for (r = 0; r < o; r += 1) {
                        if (n = (a = this.shapes[r]).localShapeCollection,
                        a.shape._mdf || this._mdf || t)
                            for (n.releaseShapes(),
                            a.shape._mdf = !0,
                            e = a.shape.paths.shapes,
                            s = a.shape.paths._length,
                            i = 0; i < s; i += 1)
                                n.addShape(this.processPath(e[i], h));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }
            ,
            ShapeModifiers.registerModifier("rd", RoundCornersModifier),
            extendPrototype([ShapeModifier], PuckerAndBloatModifier),
            PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys,
                this.amount = PropertyFactory.getProp(t, e.a, 0, null, this),
                this._isAnimated = !!this.amount.effectsSequence.length
            }
            ,
            PuckerAndBloatModifier.prototype.processPath = function(t, e) {
                var r = e / 100
                  , i = [0, 0]
                  , s = t._length
                  , a = 0;
                for (a = 0; a < s; a += 1)
                    i[0] += t.v[a][0],
                    i[1] += t.v[a][1];
                i[0] /= s,
                i[1] /= s;
                var n, o, h, l, p, m, f = shapePool.newElement();
                for (f.c = t.c,
                a = 0; a < s; a += 1)
                    n = t.v[a][0] + (i[0] - t.v[a][0]) * r,
                    o = t.v[a][1] + (i[1] - t.v[a][1]) * r,
                    h = t.o[a][0] + (i[0] - t.o[a][0]) * -r,
                    l = t.o[a][1] + (i[1] - t.o[a][1]) * -r,
                    p = t.i[a][0] + (i[0] - t.i[a][0]) * -r,
                    m = t.i[a][1] + (i[1] - t.i[a][1]) * -r,
                    f.setTripleAt(n, o, h, l, p, m, a);
                return f
            }
            ,
            PuckerAndBloatModifier.prototype.processShapes = function(t) {
                var e, r, i, s, a, n, o = this.shapes.length, h = this.amount.v;
                if (0 !== h)
                    for (r = 0; r < o; r += 1) {
                        if (n = (a = this.shapes[r]).localShapeCollection,
                        a.shape._mdf || this._mdf || t)
                            for (n.releaseShapes(),
                            a.shape._mdf = !0,
                            e = a.shape.paths.shapes,
                            s = a.shape.paths._length,
                            i = 0; i < s; i += 1)
                                n.addShape(this.processPath(e[i], h));
                        a.shape.paths = a.localShapeCollection
                    }
                this.dynamicProperties.length || (this._mdf = !1)
            }
            ,
            ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
            extendPrototype([ShapeModifier], RepeaterModifier),
            RepeaterModifier.prototype.initModifierProperties = function(t, e) {
                this.getValue = this.processKeys,
                this.c = PropertyFactory.getProp(t, e.c, 0, null, this),
                this.o = PropertyFactory.getProp(t, e.o, 0, null, this),
                this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this),
                this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this),
                this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this),
                this.data = e,
                this.dynamicProperties.length || this.getValue(!0),
                this._isAnimated = !!this.dynamicProperties.length,
                this.pMatrix = new Matrix,
                this.rMatrix = new Matrix,
                this.sMatrix = new Matrix,
                this.tMatrix = new Matrix,
                this.matrix = new Matrix
            }
            ,
            RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, a) {
                var n = a ? -1 : 1
                  , o = i.s.v[0] + (1 - i.s.v[0]) * (1 - s)
                  , h = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
                t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]),
                e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
                e.rotate(-i.r.v * n * s),
                e.translate(i.a.v[0], i.a.v[1], i.a.v[2]),
                r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]),
                r.scale(a ? 1 / o : o, a ? 1 / h : h),
                r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
            }
            ,
            RepeaterModifier.prototype.init = function(t, e, r, i) {
                for (this.elem = t,
                this.arr = e,
                this.pos = r,
                this.elemsData = i,
                this._currentCopies = 0,
                this._elements = [],
                this._groups = [],
                this.frameId = -1,
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e[r]); r > 0; )
                    r -= 1,
                    this._elements.unshift(e[r]);
                this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
            }
            ,
            RepeaterModifier.prototype.resetElements = function(t) {
                var e, r = t.length;
                for (e = 0; e < r; e += 1)
                    t[e]._processed = !1,
                    "gr" === t[e].ty && this.resetElements(t[e].it)
            }
            ,
            RepeaterModifier.prototype.cloneElements = function(t) {
                var e = JSON.parse(JSON.stringify(t));
                return this.resetElements(e),
                e
            }
            ,
            RepeaterModifier.prototype.changeGroupRender = function(t, e) {
                var r, i = t.length;
                for (r = 0; r < i; r += 1)
                    t[r]._render = e,
                    "gr" === t[r].ty && this.changeGroupRender(t[r].it, e)
            }
            ,
            RepeaterModifier.prototype.processShapes = function(t) {
                var e, r, i, s, a, n = !1;
                if (this._mdf || t) {
                    var o, h = Math.ceil(this.c.v);
                    if (this._groups.length < h) {
                        for (; this._groups.length < h; ) {
                            var l = {
                                it: this.cloneElements(this._elements),
                                ty: "gr"
                            };
                            l.it.push({
                                a: {
                                    a: 0,
                                    ix: 1,
                                    k: [0, 0]
                                },
                                nm: "Transform",
                                o: {
                                    a: 0,
                                    ix: 7,
                                    k: 100
                                },
                                p: {
                                    a: 0,
                                    ix: 2,
                                    k: [0, 0]
                                },
                                r: {
                                    a: 1,
                                    ix: 6,
                                    k: [{
                                        s: 0,
                                        e: 0,
                                        t: 0
                                    }, {
                                        s: 0,
                                        e: 0,
                                        t: 1
                                    }]
                                },
                                s: {
                                    a: 0,
                                    ix: 3,
                                    k: [100, 100]
                                },
                                sa: {
                                    a: 0,
                                    ix: 5,
                                    k: 0
                                },
                                sk: {
                                    a: 0,
                                    ix: 4,
                                    k: 0
                                },
                                ty: "tr"
                            }),
                            this.arr.splice(0, 0, l),
                            this._groups.splice(0, 0, l),
                            this._currentCopies += 1
                        }
                        this.elem.reloadShapes(),
                        n = !0
                    }
                    for (a = 0,
                    i = 0; i <= this._groups.length - 1; i += 1) {
                        if (o = a < h,
                        this._groups[i]._render = o,
                        this.changeGroupRender(this._groups[i].it, o),
                        !o) {
                            var p = this.elemsData[i].it
                              , m = p[p.length - 1];
                            0 !== m.transform.op.v ? (m.transform.op._mdf = !0,
                            m.transform.op.v = 0) : m.transform.op._mdf = !1
                        }
                        a += 1
                    }
                    this._currentCopies = h;
                    var f = this.o.v
                      , c = f % 1
                      , d = f > 0 ? Math.floor(f) : Math.ceil(f)
                      , u = this.pMatrix.props
                      , y = this.rMatrix.props
                      , g = this.sMatrix.props;
                    this.pMatrix.reset(),
                    this.rMatrix.reset(),
                    this.sMatrix.reset(),
                    this.tMatrix.reset(),
                    this.matrix.reset();
                    var v, b, P = 0;
                    if (f > 0) {
                        for (; P < d; )
                            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                            P += 1;
                        c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, c, !1),
                        P += c)
                    } else if (f < 0) {
                        for (; P > d; )
                            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0),
                            P -= 1;
                        c && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -c, !0),
                        P -= c)
                    }
                    for (i = 1 === this.data.m ? 0 : this._currentCopies - 1,
                    s = 1 === this.data.m ? 1 : -1,
                    a = this._currentCopies; a; ) {
                        if (b = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length,
                        e[e.length - 1].transform.mProps._mdf = !0,
                        e[e.length - 1].transform.op._mdf = !0,
                        e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)),
                        0 !== P) {
                            for ((0 !== i && 1 === s || i !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                            this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]),
                            this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]),
                            this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]),
                            v = 0; v < b; v += 1)
                                r[v] = this.matrix.props[v];
                            this.matrix.reset()
                        } else
                            for (this.matrix.reset(),
                            v = 0; v < b; v += 1)
                                r[v] = this.matrix.props[v];
                        P += 1,
                        a -= 1,
                        i += s
                    }
                } else
                    for (a = this._currentCopies,
                    i = 0,
                    s = 1; a; )
                        r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props,
                        e[e.length - 1].transform.mProps._mdf = !1,
                        e[e.length - 1].transform.op._mdf = !1,
                        a -= 1,
                        i += s;
                return n
            }
            ,
            RepeaterModifier.prototype.addShape = function() {}
            ,
            ShapeModifiers.registerModifier("rp", RepeaterModifier),
            ShapeCollection.prototype.addShape = function(t) {
                this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)),
                this._maxLength *= 2),
                this.shapes[this._length] = t,
                this._length += 1
            }
            ,
            ShapeCollection.prototype.releaseShapes = function() {
                var t;
                for (t = 0; t < this._length; t += 1)
                    shapePool.release(this.shapes[t]);
                this._length = 0
            }
            ,
            DashProperty.prototype.getValue = function(t) {
                if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId,
                this.iterateDynamicProperties(),
                this._mdf = this._mdf || t,
                this._mdf)) {
                    var e = 0
                      , r = this.dataProps.length;
                    for ("svg" === this.renderer && (this.dashStr = ""),
                    e = 0; e < r; e += 1)
                        "o" !== this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
                }
            }
            ,
            extendPrototype([DynamicPropertyContainer], DashProperty),
            GradientProperty.prototype.comparePoints = function(t, e) {
                for (var r = 0, i = this.o.length / 2; r < i; ) {
                    if (Math.abs(t[4 * r] - t[4 * e + 2 * r]) > .01)
                        return !1;
                    r += 1
                }
                return !0
            }
            ,
            GradientProperty.prototype.checkCollapsable = function() {
                if (this.o.length / 2 != this.c.length / 4)
                    return !1;
                if (this.data.k.k[0].s)
                    for (var t = 0, e = this.data.k.k.length; t < e; ) {
                        if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
                            return !1;
                        t += 1
                    }
                else if (!this.comparePoints(this.data.k.k, this.data.p))
                    return !1;
                return !0
            }
            ,
            GradientProperty.prototype.getValue = function(t) {
                if (this.prop.getValue(),
                this._mdf = !1,
                this._cmdf = !1,
                this._omdf = !1,
                this.prop._mdf || t) {
                    var e, r, i, s = 4 * this.data.p;
                    for (e = 0; e < s; e += 1)
                        r = e % 4 == 0 ? 100 : 255,
                        i = Math.round(this.prop.v[e] * r),
                        this.c[e] !== i && (this.c[e] = i,
                        this._cmdf = !t);
                    if (this.o.length)
                        for (s = this.prop.v.length,
                        e = 4 * this.data.p; e < s; e += 1)
                            r = e % 2 == 0 ? 100 : 1,
                            i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e],
                            this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i,
                            this._omdf = !t);
                    this._mdf = !t
                }
            }
            ,
            extendPrototype([DynamicPropertyContainer], GradientProperty);
            var buildShapeString = function(t, e, r, i) {
                if (0 === e)
                    return "";
                var s, a = t.o, n = t.i, o = t.v, h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
                for (s = 1; s < e; s += 1)
                    h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[s][0], n[s][1]) + " " + i.applyToPointStringified(o[s][0], o[s][1]);
                return r && e && (h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]),
                h += "z"),
                h
            }, audioControllerFactory = function() {
                function t(t) {
                    this.audios = [],
                    this.audioFactory = t,
                    this._volume = 1,
                    this._isMuted = !1
                }
                return t.prototype = {
                    addAudio: function(t) {
                        this.audios.push(t)
                    },
                    pause: function() {
                        var t, e = this.audios.length;
                        for (t = 0; t < e; t += 1)
                            this.audios[t].pause()
                    },
                    resume: function() {
                        var t, e = this.audios.length;
                        for (t = 0; t < e; t += 1)
                            this.audios[t].resume()
                    },
                    setRate: function(t) {
                        var e, r = this.audios.length;
                        for (e = 0; e < r; e += 1)
                            this.audios[e].setRate(t)
                    },
                    createAudio: function(t) {
                        return this.audioFactory ? this.audioFactory(t) : Howl ? new Howl({
                            src: [t]
                        }) : {
                            isPlaying: !1,
                            play: function() {
                                this.isPlaying = !0
                            },
                            seek: function() {
                                this.isPlaying = !1
                            },
                            playing: function() {},
                            rate: function() {},
                            setVolume: function() {}
                        }
                    },
                    setAudioFactory: function(t) {
                        this.audioFactory = t
                    },
                    setVolume: function(t) {
                        this._volume = t,
                        this._updateVolume()
                    },
                    mute: function() {
                        this._isMuted = !0,
                        this._updateVolume()
                    },
                    unmute: function() {
                        this._isMuted = !1,
                        this._updateVolume()
                    },
                    getVolume: function() {
                        return this._volume
                    },
                    _updateVolume: function() {
                        var t, e = this.audios.length;
                        for (t = 0; t < e; t += 1)
                            this.audios[t].volume(this._volume * (this._isMuted ? 0 : 1))
                    }
                },
                function() {
                    return new t
                }
            }(), ImagePreloader = function() {
                var t = function() {
                    var t = createTag("canvas");
                    t.width = 1,
                    t.height = 1;
                    var e = t.getContext("2d");
                    return e.fillStyle = "rgba(0,0,0,0)",
                    e.fillRect(0, 0, 1, 1),
                    t
                }();
                function e() {
                    this.loadedAssets += 1,
                    this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }
                function r() {
                    this.loadedFootagesCount += 1,
                    this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
                }
                function i(t, e, r) {
                    var i = "";
                    if (t.e)
                        i = t.p;
                    else if (e) {
                        var s = t.p;
                        -1 !== s.indexOf("images/") && (s = s.split("/")[1]),
                        i = e + s
                    } else
                        i = r,
                        i += t.u ? t.u : "",
                        i += t.p;
                    return i
                }
                function s() {
                    this._imageLoaded = e.bind(this),
                    this._footageLoaded = r.bind(this),
                    this.testImageLoaded = function(t) {
                        var e = 0
                          , r = setInterval(function() {
                            (t.getBBox().width || e > 500) && (this._imageLoaded(),
                            clearInterval(r)),
                            e += 1
                        }
                        .bind(this), 50)
                    }
                    .bind(this),
                    this.createFootageData = function(t) {
                        var e = {
                            assetData: t
                        }
                          , r = i(t, this.assetsPath, this.path);
                        return assetLoader.load(r, function(t) {
                            e.img = t,
                            this._footageLoaded()
                        }
                        .bind(this), function() {
                            e.img = {},
                            this._footageLoaded()
                        }
                        .bind(this)),
                        e
                    }
                    .bind(this),
                    this.assetsPath = "",
                    this.path = "",
                    this.totalImages = 0,
                    this.totalFootages = 0,
                    this.loadedAssets = 0,
                    this.loadedFootagesCount = 0,
                    this.imagesLoadedCb = null,
                    this.images = []
                }
                return s.prototype = {
                    loadAssets: function(t, e) {
                        var r;
                        this.imagesLoadedCb = e;
                        var i = t.length;
                        for (r = 0; r < i; r += 1)
                            t[r].layers || (t[r].t && "seq" !== t[r].t ? 3 === t[r].t && (this.totalFootages += 1,
                            this.images.push(this.createFootageData(t[r]))) : (this.totalImages += 1,
                            this.images.push(this._createImageData(t[r]))))
                    },
                    setAssetsPath: function(t) {
                        this.assetsPath = t || ""
                    },
                    setPath: function(t) {
                        this.path = t || ""
                    },
                    loadedImages: function() {
                        return this.totalImages === this.loadedAssets
                    },
                    loadedFootages: function() {
                        return this.totalFootages === this.loadedFootagesCount
                    },
                    destroy: function() {
                        this.imagesLoadedCb = null,
                        this.images.length = 0
                    },
                    getAsset: function(t) {
                        for (var e = 0, r = this.images.length; e < r; ) {
                            if (this.images[e].assetData === t)
                                return this.images[e].img;
                            e += 1
                        }
                        return null
                    },
                    createImgData: function(e) {
                        var r = i(e, this.assetsPath, this.path)
                          , s = createTag("img");
                        s.crossOrigin = "anonymous",
                        s.addEventListener("load", this._imageLoaded, !1),
                        s.addEventListener("error", function() {
                            a.img = t,
                            this._imageLoaded()
                        }
                        .bind(this), !1),
                        s.src = r;
                        var a = {
                            img: s,
                            assetData: e
                        };
                        return a
                    },
                    createImageData: function(e) {
                        var r = i(e, this.assetsPath, this.path)
                          , s = createNS("image");
                        isSafari ? this.testImageLoaded(s) : s.addEventListener("load", this._imageLoaded, !1),
                        s.addEventListener("error", function() {
                            a.img = t,
                            this._imageLoaded()
                        }
                        .bind(this), !1),
                        s.setAttributeNS("http://www.w3.org/1999/xlink", "href", r),
                        this._elementHelper.append ? this._elementHelper.append(s) : this._elementHelper.appendChild(s);
                        var a = {
                            img: s,
                            assetData: e
                        };
                        return a
                    },
                    imageLoaded: e,
                    footageLoaded: r,
                    setCacheType: function(t, e) {
                        "svg" === t ? (this._elementHelper = e,
                        this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
                    }
                },
                s
            }(), featureSupport = (ob = {
                maskType: !0
            },
            (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (ob.maskType = !1),
            ob), ob, filtersFactory = function() {
                var t = {};
                return t.createFilter = function(t, e) {
                    var r = createNS("filter");
                    r.setAttribute("id", t),
                    !0 !== e && (r.setAttribute("filterUnits", "objectBoundingBox"),
                    r.setAttribute("x", "0%"),
                    r.setAttribute("y", "0%"),
                    r.setAttribute("width", "100%"),
                    r.setAttribute("height", "100%"));
                    return r
                }
                ,
                t.createAlphaToLuminanceFilter = function() {
                    var t = createNS("feColorMatrix");
                    return t.setAttribute("type", "matrix"),
                    t.setAttribute("color-interpolation-filters", "sRGB"),
                    t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),
                    t
                }
                ,
                t
            }(), assetLoader = function() {
                function t(t) {
                    return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : null
                }
                return {
                    load: function(e, r, i) {
                        var s, a = new XMLHttpRequest;
                        try {
                            a.responseType = "json"
                        } catch (n) {}
                        a.onreadystatechange = function() {
                            if (4 === a.readyState)
                                if (200 === a.status)
                                    s = t(a),
                                    r(s);
                                else
                                    try {
                                        s = t(a),
                                        r(s)
                                    } catch (n) {
                                        i && i(n)
                                    }
                        }
                        ,
                        a.open("GET", e, !0),
                        a.send()
                    }
                }
            }();
            function TextAnimatorProperty(t, e, r) {
                this._isFirstFrame = !0,
                this._hasMaskedPath = !1,
                this._frameId = -1,
                this._textData = t,
                this._renderType = e,
                this._elem = r,
                this._animatorsData = createSizedArray(this._textData.a.length),
                this._pathData = {},
                this._moreOptions = {
                    alignment: {}
                },
                this.renderedLetters = [],
                this.lettersChangedFlag = !1,
                this.initDynamicPropertyContainer(r)
            }
            function TextAnimatorDataProperty(t, e, r) {
                var i = {
                    propType: !1
                }
                  , s = PropertyFactory.getProp
                  , a = e.a;
                this.a = {
                    r: a.r ? s(t, a.r, 0, degToRads, r) : i,
                    rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
                    ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
                    sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
                    sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
                    s: a.s ? s(t, a.s, 1, .01, r) : i,
                    a: a.a ? s(t, a.a, 1, 0, r) : i,
                    o: a.o ? s(t, a.o, 0, .01, r) : i,
                    p: a.p ? s(t, a.p, 1, 0, r) : i,
                    sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
                    sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
                    fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
                    fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
                    fs: a.fs ? s(t, a.fs, 0, .01, r) : i,
                    fb: a.fb ? s(t, a.fb, 0, .01, r) : i,
                    t: a.t ? s(t, a.t, 0, 0, r) : i
                },
                this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r),
                this.s.t = e.s.t
            }
            function LetterProps(t, e, r, i, s, a) {
                this.o = t,
                this.sw = e,
                this.sc = r,
                this.fc = i,
                this.m = s,
                this.p = a,
                this._mdf = {
                    o: !0,
                    sw: !!e,
                    sc: !!r,
                    fc: !!i,
                    m: !0,
                    p: !0
                }
            }
            function TextProperty(t, e) {
                this._frameId = initialDefaultFrame,
                this.pv = "",
                this.v = "",
                this.kf = !1,
                this._isFirstFrame = !0,
                this._mdf = !1,
                this.data = e,
                this.elem = t,
                this.comp = this.elem.comp,
                this.keysIndex = 0,
                this.canResize = !1,
                this.minimumFontSize = 1,
                this.effectsSequence = [],
                this.currentData = {
                    ascent: 0,
                    boxWidth: this.defaultBoxWidth,
                    f: "",
                    fStyle: "",
                    fWeight: "",
                    fc: "",
                    j: "",
                    justifyOffset: "",
                    l: [],
                    lh: 0,
                    lineWidths: [],
                    ls: "",
                    of: "",
                    s: "",
                    sc: "",
                    sw: 0,
                    t: 0,
                    tr: 0,
                    sz: 0,
                    ps: null,
                    fillColorAnim: !1,
                    strokeColorAnim: !1,
                    strokeWidthAnim: !1,
                    yOffset: 0,
                    finalSize: 0,
                    finalText: [],
                    finalLineHeight: 0,
                    __complete: !1
                },
                this.copyData(this.currentData, this.data.d.k[0].s),
                this.searchProperty() || this.completeTextData(this.currentData)
            }
            TextAnimatorProperty.prototype.searchProperties = function() {
                var t, e, r = this._textData.a.length, i = PropertyFactory.getProp;
                for (t = 0; t < r; t += 1)
                    e = this._textData.a[t],
                    this._animatorsData[t] = new TextAnimatorDataProperty(this._elem,e,this);
                this._textData.p && "m"in this._textData.p ? (this._pathData = {
                    f: i(this._elem, this._textData.p.f, 0, 0, this),
                    l: i(this._elem, this._textData.p.l, 0, 0, this),
                    r: this._textData.p.r,
                    m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
                },
                this._hasMaskedPath = !0) : this._hasMaskedPath = !1,
                this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
            }
            ,
            TextAnimatorProperty.prototype.getMeasures = function(t, e) {
                if (this.lettersChangedFlag = e,
                this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
                    this._isFirstFrame = !1;
                    var r, i, s, a, n, o, h, l, p, m, f, c, d, u, y, g, v, b, P, E = this._moreOptions.alignment.v, x = this._animatorsData, S = this._textData, A = this.mHelper, C = this._renderType, _ = this.renderedLetters.length, T = t.l;
                    if (this._hasMaskedPath) {
                        if (P = this._pathData.m,
                        !this._pathData.n || this._pathData._mdf) {
                            var k, D = P.v;
                            for (this._pathData.r && (D = D.reverse()),
                            n = {
                                tLength: 0,
                                segments: []
                            },
                            a = D._length - 1,
                            g = 0,
                            s = 0; s < a; s += 1)
                                k = bez.buildBezierData(D.v[s], D.v[s + 1], [D.o[s][0] - D.v[s][0], D.o[s][1] - D.v[s][1]], [D.i[s + 1][0] - D.v[s + 1][0], D.i[s + 1][1] - D.v[s + 1][1]]),
                                n.tLength += k.segmentLength,
                                n.segments.push(k),
                                g += k.segmentLength;
                            s = a,
                            P.v.c && (k = bez.buildBezierData(D.v[s], D.v[0], [D.o[s][0] - D.v[s][0], D.o[s][1] - D.v[s][1]], [D.i[0][0] - D.v[0][0], D.i[0][1] - D.v[0][1]]),
                            n.tLength += k.segmentLength,
                            n.segments.push(k),
                            g += k.segmentLength),
                            this._pathData.pi = n
                        }
                        if (n = this._pathData.pi,
                        o = this._pathData.f.v,
                        f = 0,
                        m = 1,
                        l = 0,
                        p = !0,
                        u = n.segments,
                        o < 0 && P.v.c)
                            for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength),
                            m = (d = u[f = u.length - 1].points).length - 1; o < 0; )
                                o += d[m].partialLength,
                                (m -= 1) < 0 && (m = (d = u[f -= 1].points).length - 1);
                        c = (d = u[f].points)[m - 1],
                        y = (h = d[m]).partialLength
                    }
                    a = T.length,
                    r = 0,
                    i = 0;
                    var M, F, w, I, V, R = 1.2 * t.finalSize * .714, B = !0;
                    w = x.length;
                    var L, G, z, N, O, H, j, q, W, Y, X, $, J = -1, K = o, Z = f, U = m, Q = -1, tt = "", et = this.defaultPropsArray;
                    if (2 === t.j || 1 === t.j) {
                        var rt = 0
                          , it = 0
                          , st = 2 === t.j ? -.5 : -1
                          , at = 0
                          , nt = !0;
                        for (s = 0; s < a; s += 1)
                            if (T[s].n) {
                                for (rt && (rt += it); at < s; )
                                    T[at].animatorJustifyOffset = rt,
                                    at += 1;
                                rt = 0,
                                nt = !0
                            } else {
                                for (F = 0; F < w; F += 1)
                                    (M = x[F].a).t.propType && (nt && 2 === t.j && (it += M.t.v * st),
                                    (V = x[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? rt += M.t.v * V[0] * st : rt += M.t.v * V * st);
                                nt = !1
                            }
                        for (rt && (rt += it); at < s; )
                            T[at].animatorJustifyOffset = rt,
                            at += 1
                    }
                    for (s = 0; s < a; s += 1) {
                        if (A.reset(),
                        N = 1,
                        T[s].n)
                            r = 0,
                            i += t.yOffset,
                            i += B ? 1 : 0,
                            o = K,
                            B = !1,
                            this._hasMaskedPath && (m = U,
                            c = (d = u[f = Z].points)[m - 1],
                            y = (h = d[m]).partialLength,
                            l = 0),
                            tt = "",
                            X = "",
                            W = "",
                            $ = "",
                            et = this.defaultPropsArray;
                        else {
                            if (this._hasMaskedPath) {
                                if (Q !== T[s].line) {
                                    switch (t.j) {
                                    case 1:
                                        o += g - t.lineWidths[T[s].line];
                                        break;
                                    case 2:
                                        o += (g - t.lineWidths[T[s].line]) / 2;
                                    }
                                    Q = T[s].line
                                }
                                J !== T[s].ind && (T[J] && (o += T[J].extra),
                                o += T[s].an / 2,
                                J = T[s].ind),
                                o += E[0] * T[s].an * .005;
                                var ot = 0;
                                for (F = 0; F < w; F += 1)
                                    (M = x[F].a).p.propType && ((V = x[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? ot += M.p.v[0] * V[0] : ot += M.p.v[0] * V),
                                    M.a.propType && ((V = x[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? ot += M.a.v[0] * V[0] : ot += M.a.v[0] * V);
                                for (p = !0; p; )
                                    l + y >= o + ot || !d ? (v = (o + ot - l) / h.partialLength,
                                    G = c.point[0] + (h.point[0] - c.point[0]) * v,
                                    z = c.point[1] + (h.point[1] - c.point[1]) * v,
                                    A.translate(-E[0] * T[s].an * .005, -E[1] * R * .01),
                                    p = !1) : d && (l += h.partialLength,
                                    (m += 1) >= d.length && (m = 0,
                                    u[f += 1] ? d = u[f].points : P.v.c ? (m = 0,
                                    d = u[f = 0].points) : (l -= h.partialLength,
                                    d = null)),
                                    d && (c = h,
                                    y = (h = d[m]).partialLength));
                                L = T[s].an / 2 - T[s].add,
                                A.translate(-L, 0, 0)
                            } else
                                L = T[s].an / 2 - T[s].add,
                                A.translate(-L, 0, 0),
                                A.translate(-E[0] * T[s].an * .005, -E[1] * R * .01, 0);
                            for (F = 0; F < w; F += 1)
                                (M = x[F].a).t.propType && (V = x[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars),
                                0 === r && 0 === t.j || (this._hasMaskedPath ? V.length ? o += M.t.v * V[0] : o += M.t.v * V : V.length ? r += M.t.v * V[0] : r += M.t.v * V));
                            for (t.strokeWidthAnim && (H = t.sw || 0),
                            t.strokeColorAnim && (O = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]),
                            t.fillColorAnim && t.fc && (j = [t.fc[0], t.fc[1], t.fc[2]]),
                            F = 0; F < w; F += 1)
                                (M = x[F].a).a.propType && ((V = x[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? A.translate(-M.a.v[0] * V[0], -M.a.v[1] * V[1], M.a.v[2] * V[2]) : A.translate(-M.a.v[0] * V, -M.a.v[1] * V, M.a.v[2] * V));
                            for (F = 0; F < w; F += 1)
                                (M = x[F].a).s.propType && ((V = x[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars)).length ? A.scale(1 + (M.s.v[0] - 1) * V[0], 1 + (M.s.v[1] - 1) * V[1], 1) : A.scale(1 + (M.s.v[0] - 1) * V, 1 + (M.s.v[1] - 1) * V, 1));
                            for (F = 0; F < w; F += 1) {
                                if (M = x[F].a,
                                V = x[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars),
                                M.sk.propType && (V.length ? A.skewFromAxis(-M.sk.v * V[0], M.sa.v * V[1]) : A.skewFromAxis(-M.sk.v * V, M.sa.v * V)),
                                M.r.propType && (V.length ? A.rotateZ(-M.r.v * V[2]) : A.rotateZ(-M.r.v * V)),
                                M.ry.propType && (V.length ? A.rotateY(M.ry.v * V[1]) : A.rotateY(M.ry.v * V)),
                                M.rx.propType && (V.length ? A.rotateX(M.rx.v * V[0]) : A.rotateX(M.rx.v * V)),
                                M.o.propType && (V.length ? N += (M.o.v * V[0] - N) * V[0] : N += (M.o.v * V - N) * V),
                                t.strokeWidthAnim && M.sw.propType && (V.length ? H += M.sw.v * V[0] : H += M.sw.v * V),
                                t.strokeColorAnim && M.sc.propType)
                                    for (q = 0; q < 3; q += 1)
                                        V.length ? O[q] += (M.sc.v[q] - O[q]) * V[0] : O[q] += (M.sc.v[q] - O[q]) * V;
                                if (t.fillColorAnim && t.fc) {
                                    if (M.fc.propType)
                                        for (q = 0; q < 3; q += 1)
                                            V.length ? j[q] += (M.fc.v[q] - j[q]) * V[0] : j[q] += (M.fc.v[q] - j[q]) * V;
                                    M.fh.propType && (j = V.length ? addHueToRGB(j, M.fh.v * V[0]) : addHueToRGB(j, M.fh.v * V)),
                                    M.fs.propType && (j = V.length ? addSaturationToRGB(j, M.fs.v * V[0]) : addSaturationToRGB(j, M.fs.v * V)),
                                    M.fb.propType && (j = V.length ? addBrightnessToRGB(j, M.fb.v * V[0]) : addBrightnessToRGB(j, M.fb.v * V))
                                }
                            }
                            for (F = 0; F < w; F += 1)
                                (M = x[F].a).p.propType && (V = x[F].s.getMult(T[s].anIndexes[F], S.a[F].s.totalChars),
                                this._hasMaskedPath ? V.length ? A.translate(0, M.p.v[1] * V[0], -M.p.v[2] * V[1]) : A.translate(0, M.p.v[1] * V, -M.p.v[2] * V) : V.length ? A.translate(M.p.v[0] * V[0], M.p.v[1] * V[1], -M.p.v[2] * V[2]) : A.translate(M.p.v[0] * V, M.p.v[1] * V, -M.p.v[2] * V));
                            if (t.strokeWidthAnim && (W = H < 0 ? 0 : H),
                            t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * O[0]) + "," + Math.round(255 * O[1]) + "," + Math.round(255 * O[2]) + ")"),
                            t.fillColorAnim && t.fc && (X = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"),
                            this._hasMaskedPath) {
                                if (A.translate(0, -t.ls),
                                A.translate(0, E[1] * R * .01 + i, 0),
                                S.p.p) {
                                    b = (h.point[1] - c.point[1]) / (h.point[0] - c.point[0]);
                                    var ht = 180 * Math.atan(b) / Math.PI;
                                    h.point[0] < c.point[0] && (ht += 180),
                                    A.rotate(-ht * Math.PI / 180)
                                }
                                A.translate(G, z, 0),
                                o -= E[0] * T[s].an * .005,
                                T[s + 1] && J !== T[s + 1].ind && (o += T[s].an / 2,
                                o += .001 * t.tr * t.finalSize)
                            } else {
                                switch (A.translate(r, i, 0),
                                t.ps && A.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                                t.j) {
                                case 1:
                                    A.translate(T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]), 0, 0);
                                    break;
                                case 2:
                                    A.translate(T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]) / 2, 0, 0);
                                }
                                A.translate(0, -t.ls),
                                A.translate(L, 0, 0),
                                A.translate(E[0] * T[s].an * .005, E[1] * R * .01, 0),
                                r += T[s].l + .001 * t.tr * t.finalSize
                            }
                            "html" === C ? tt = A.toCSS() : "svg" === C ? tt = A.to2dCSS() : et = [A.props[0], A.props[1], A.props[2], A.props[3], A.props[4], A.props[5], A.props[6], A.props[7], A.props[8], A.props[9], A.props[10], A.props[11], A.props[12], A.props[13], A.props[14], A.props[15]],
                            $ = N
                        }
                        _ <= s ? (I = new LetterProps($,W,Y,X,tt,et),
                        this.renderedLetters.push(I),
                        _ += 1,
                        this.lettersChangedFlag = !0) : (I = this.renderedLetters[s],
                        this.lettersChangedFlag = I.update($, W, Y, X, tt, et) || this.lettersChangedFlag)
                    }
                }
            }
            ,
            TextAnimatorProperty.prototype.getValue = function() {
                this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId,
                this.iterateDynamicProperties())
            }
            ,
            TextAnimatorProperty.prototype.mHelper = new Matrix,
            TextAnimatorProperty.prototype.defaultPropsArray = [],
            extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
            LetterProps.prototype.update = function(t, e, r, i, s, a) {
                this._mdf.o = !1,
                this._mdf.sw = !1,
                this._mdf.sc = !1,
                this._mdf.fc = !1,
                this._mdf.m = !1,
                this._mdf.p = !1;
                var n = !1;
                return this.o !== t && (this.o = t,
                this._mdf.o = !0,
                n = !0),
                this.sw !== e && (this.sw = e,
                this._mdf.sw = !0,
                n = !0),
                this.sc !== r && (this.sc = r,
                this._mdf.sc = !0,
                n = !0),
                this.fc !== i && (this.fc = i,
                this._mdf.fc = !0,
                n = !0),
                this.m !== s && (this.m = s,
                this._mdf.m = !0,
                n = !0),
                !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a,
                this._mdf.p = !0,
                n = !0),
                n
            }
            ,
            TextProperty.prototype.defaultBoxWidth = [0, 0],
            TextProperty.prototype.copyData = function(t, e) {
                for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }
            ,
            TextProperty.prototype.setCurrentData = function(t) {
                t.__complete || this.completeTextData(t),
                this.currentData = t,
                this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth,
                this._mdf = !0
            }
            ,
            TextProperty.prototype.searchProperty = function() {
                return this.searchKeyframes()
            }
            ,
            TextProperty.prototype.searchKeyframes = function() {
                return this.kf = this.data.d.k.length > 1,
                this.kf && this.addEffect(this.getKeyframeValue.bind(this)),
                this.kf
            }
            ,
            TextProperty.prototype.addEffect = function(t) {
                this.effectsSequence.push(t),
                this.elem.addDynamicProperty(this)
            }
            ,
            TextProperty.prototype.getValue = function(t) {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
                    this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                    var e = this.currentData
                      , r = this.keysIndex;
                    if (this.lock)
                        this.setCurrentData(this.currentData);
                    else {
                        var i;
                        this.lock = !0,
                        this._mdf = !1;
                        var s = this.effectsSequence.length
                          , a = t || this.data.d.k[this.keysIndex].s;
                        for (i = 0; i < s; i += 1)
                            a = r !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t);
                        e !== a && this.setCurrentData(a),
                        this.v = this.currentData,
                        this.pv = this.v,
                        this.lock = !1,
                        this.frameId = this.elem.globalData.frameId
                    }
                }
            }
            ,
            TextProperty.prototype.getKeyframeValue = function() {
                for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e); )
                    r += 1;
                return this.keysIndex !== r && (this.keysIndex = r),
                this.data.d.k[this.keysIndex].s
            }
            ,
            TextProperty.prototype.buildFinalText = function(t) {
                for (var e, r, i = [], s = 0, a = t.length, n = !1; s < a; )
                    e = t.charCodeAt(s),
                    FontManager.isCombinedCharacter(e) ? i[i.length - 1] += t.charAt(s) : e >= 55296 && e <= 56319 ? (r = t.charCodeAt(s + 1)) >= 56320 && r <= 57343 ? (n || FontManager.isModifier(e, r) ? (i[i.length - 1] += t.substr(s, 2),
                    n = !1) : i.push(t.substr(s, 2)),
                    s += 1) : i.push(t.charAt(s)) : e > 56319 ? (r = t.charCodeAt(s + 1),
                    FontManager.isZeroWidthJoiner(e, r) ? (n = !0,
                    i[i.length - 1] += t.substr(s, 2),
                    s += 1) : i.push(t.charAt(s))) : FontManager.isZeroWidthJoiner(e) ? (i[i.length - 1] += t.charAt(s),
                    n = !0) : i.push(t.charAt(s)),
                    s += 1;
                return i
            }
            ,
            TextProperty.prototype.completeTextData = function(t) {
                t.__complete = !0;
                var e, r, i, s, a, n, o, h = this.elem.globalData.fontManager, l = this.data, p = [], m = 0, f = l.m.g, c = 0, d = 0, u = 0, y = [], g = 0, v = 0, b = h.getFontByName(t.f), P = 0, E = getFontProperties(b);
                t.fWeight = E.weight,
                t.fStyle = E.style,
                t.finalSize = t.s,
                t.finalText = this.buildFinalText(t.t),
                r = t.finalText.length,
                t.finalLineHeight = t.lh;
                var x, S = t.tr / 1e3 * t.finalSize;
                if (t.sz)
                    for (var A, C, _ = !0, T = t.sz[0], k = t.sz[1]; _; ) {
                        A = 0,
                        g = 0,
                        r = (C = this.buildFinalText(t.t)).length,
                        S = t.tr / 1e3 * t.finalSize;
                        var D = -1;
                        for (e = 0; e < r; e += 1)
                            x = C[e].charCodeAt(0),
                            i = !1,
                            " " === C[e] ? D = e : 13 !== x && 3 !== x || (g = 0,
                            i = !0,
                            A += t.finalLineHeight || 1.2 * t.finalSize),
                            h.chars ? (o = h.getCharData(C[e], b.fStyle, b.fFamily),
                            P = i ? 0 : o.w * t.finalSize / 100) : P = h.measureText(C[e], t.f, t.finalSize),
                            g + P > T && " " !== C[e] ? (-1 === D ? r += 1 : e = D,
                            A += t.finalLineHeight || 1.2 * t.finalSize,
                            C.splice(e, D === e ? 1 : 0, "\r"),
                            D = -1,
                            g = 0) : (g += P,
                            g += S);
                        A += b.ascent * t.finalSize / 100,
                        this.canResize && t.finalSize > this.minimumFontSize && k < A ? (t.finalSize -= 1,
                        t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = C,
                        r = t.finalText.length,
                        _ = !1)
                    }
                g = -S,
                P = 0;
                var M, F = 0;
                for (e = 0; e < r; e += 1)
                    if (i = !1,
                    13 === (x = (M = t.finalText[e]).charCodeAt(0)) || 3 === x ? (F = 0,
                    y.push(g),
                    v = g > v ? g : v,
                    g = -2 * S,
                    s = "",
                    i = !0,
                    u += 1) : s = M,
                    h.chars ? (o = h.getCharData(M, b.fStyle, h.getFontByName(t.f).fFamily),
                    P = i ? 0 : o.w * t.finalSize / 100) : P = h.measureText(s, t.f, t.finalSize),
                    " " === M ? F += P + S : (g += P + S + F,
                    F = 0),
                    p.push({
                        l: P,
                        an: P,
                        add: c,
                        n: i,
                        anIndexes: [],
                        val: s,
                        line: u,
                        animatorJustifyOffset: 0
                    }),
                    2 == f) {
                        if (c += P,
                        "" === s || " " === s || e === r - 1) {
                            for ("" !== s && " " !== s || (c -= P); d <= e; )
                                p[d].an = c,
                                p[d].ind = m,
                                p[d].extra = P,
                                d += 1;
                            m += 1,
                            c = 0
                        }
                    } else if (3 == f) {
                        if (c += P,
                        "" === s || e === r - 1) {
                            for ("" === s && (c -= P); d <= e; )
                                p[d].an = c,
                                p[d].ind = m,
                                p[d].extra = P,
                                d += 1;
                            c = 0,
                            m += 1
                        }
                    } else
                        p[m].ind = m,
                        p[m].extra = 0,
                        m += 1;
                if (t.l = p,
                v = g > v ? g : v,
                y.push(g),
                t.sz)
                    t.boxWidth = t.sz[0],
                    t.justifyOffset = 0;
                else
                    switch (t.boxWidth = v,
                    t.j) {
                    case 1:
                        t.justifyOffset = -t.boxWidth;
                        break;
                    case 2:
                        t.justifyOffset = -t.boxWidth / 2;
                        break;
                    default:
                        t.justifyOffset = 0;
                    }
                t.lineWidths = y;
                var w, I, V, R, B = l.a;
                n = B.length;
                var L = [];
                for (a = 0; a < n; a += 1) {
                    for ((w = B[a]).a.sc && (t.strokeColorAnim = !0),
                    w.a.sw && (t.strokeWidthAnim = !0),
                    (w.a.fc || w.a.fh || w.a.fs || w.a.fb) && (t.fillColorAnim = !0),
                    R = 0,
                    V = w.s.b,
                    e = 0; e < r; e += 1)
                        (I = p[e]).anIndexes[a] = R,
                        (1 == V && "" !== I.val || 2 == V && "" !== I.val && " " !== I.val || 3 == V && (I.n || " " == I.val || e == r - 1) || 4 == V && (I.n || e == r - 1)) && (1 === w.s.rn && L.push(R),
                        R += 1);
                    l.a[a].s.totalChars = R;
                    var G, z = -1;
                    if (1 === w.s.rn)
                        for (e = 0; e < r; e += 1)
                            z != (I = p[e]).anIndexes[a] && (z = I.anIndexes[a],
                            G = L.splice(Math.floor(Math.random() * L.length), 1)[0]),
                            I.anIndexes[a] = G
                }
                t.yOffset = t.finalLineHeight || 1.2 * t.finalSize,
                t.ls = t.ls || 0,
                t.ascent = b.ascent * t.finalSize / 100
            }
            ,
            TextProperty.prototype.updateDocumentData = function(t, e) {
                e = void 0 === e ? this.keysIndex : e;
                var r = this.copyData({}, this.data.d.k[e].s);
                r = this.copyData(r, t),
                this.data.d.k[e].s = r,
                this.recalculate(e),
                this.elem.addDynamicProperty(this)
            }
            ,
            TextProperty.prototype.recalculate = function(t) {
                var e = this.data.d.k[t].s;
                e.__complete = !1,
                this.keysIndex = 0,
                this._isFirstFrame = !0,
                this.getValue(e)
            }
            ,
            TextProperty.prototype.canResizeFont = function(t) {
                this.canResize = t,
                this.recalculate(this.keysIndex),
                this.elem.addDynamicProperty(this)
            }
            ,
            TextProperty.prototype.setMinimumFontSize = function(t) {
                this.minimumFontSize = Math.floor(t) || 1,
                this.recalculate(this.keysIndex),
                this.elem.addDynamicProperty(this)
            }
            ;
            var TextSelectorProp = function() {
                var t = Math.max
                  , e = Math.min
                  , r = Math.floor;
                function i(t, e) {
                    this._currentTextLength = -1,
                    this.k = !1,
                    this.data = e,
                    this.elem = t,
                    this.comp = t.comp,
                    this.finalS = 0,
                    this.finalE = 0,
                    this.initDynamicPropertyContainer(t),
                    this.s = PropertyFactory.getProp(t, e.s || {
                        k: 0
                    }, 0, 0, this),
                    this.e = "e"in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                        v: 100
                    },
                    this.o = PropertyFactory.getProp(t, e.o || {
                        k: 0
                    }, 0, 0, this),
                    this.xe = PropertyFactory.getProp(t, e.xe || {
                        k: 0
                    }, 0, 0, this),
                    this.ne = PropertyFactory.getProp(t, e.ne || {
                        k: 0
                    }, 0, 0, this),
                    this.a = PropertyFactory.getProp(t, e.a, 0, .01, this),
                    this.dynamicProperties.length || this.getValue()
                }
                return i.prototype = {
                    getMult: function(i) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var s = 0
                          , a = 0
                          , n = 1
                          , o = 1;
                        this.ne.v > 0 ? s = this.ne.v / 100 : a = -this.ne.v / 100,
                        this.xe.v > 0 ? n = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
                        var h = BezierFactory.getBezierEasing(s, a, n, o).get
                          , l = 0
                          , p = this.finalS
                          , m = this.finalE
                          , f = this.data.sh;
                        if (2 === f)
                            l = h(l = m === p ? i >= m ? 1 : 0 : t(0, e(.5 / (m - p) + (i - p) / (m - p), 1)));
                        else if (3 === f)
                            l = h(l = m === p ? i >= m ? 0 : 1 : 1 - t(0, e(.5 / (m - p) + (i - p) / (m - p), 1)));
                        else if (4 === f)
                            m === p ? l = 0 : (l = t(0, e(.5 / (m - p) + (i - p) / (m - p), 1))) < .5 ? l *= 2 : l = 1 - 2 * (l - .5),
                            l = h(l);
                        else if (5 === f) {
                            if (m === p)
                                l = 0;
                            else {
                                var c = m - p
                                  , d = -c / 2 + (i = e(t(0, i + .5 - p), m - p))
                                  , u = c / 2;
                                l = Math.sqrt(1 - d * d / (u * u))
                            }
                            l = h(l)
                        } else
                            6 === f ? (m === p ? l = 0 : (i = e(t(0, i + .5 - p), m - p),
                            l = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (m - p))) / 2),
                            l = h(l)) : (i >= r(p) && (l = t(0, e(i - p < 0 ? e(m, 1) - (p - i) : m - i, 1))),
                            l = h(l));
                        return l * this.a.v
                    },
                    getValue: function(t) {
                        this.iterateDynamicProperties(),
                        this._mdf = t || this._mdf,
                        this._currentTextLength = this.elem.textProperty.currentData.l.length || 0,
                        t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars
                          , r = this.o.v / e
                          , i = this.s.v / e + r
                          , s = this.e.v / e + r;
                        if (i > s) {
                            var a = i;
                            i = s,
                            s = a
                        }
                        this.finalS = i,
                        this.finalE = s
                    }
                },
                extendPrototype([DynamicPropertyContainer], i),
                {
                    getTextSelectorProp: function(t, e, r) {
                        return new i(t,e,r)
                    }
                }
            }()
              , poolFactory = function(t, e, r) {
                var i = 0
                  , s = t
                  , a = createSizedArray(s);
                return {
                    newElement: function() {
                        return i ? a[i -= 1] : e()
                    },
                    release: function(t) {
                        i === s && (a = pooling.double(a),
                        s *= 2),
                        r && r(t),
                        a[i] = t,
                        i += 1
                    }
                }
            }
              , pooling = function() {
                return {
                    double: function(t) {
                        return t.concat(createSizedArray(t.length))
                    }
                }
            }()
              , pointPool = function() {
                return poolFactory(8, function() {
                    return createTypedArray("float32", 2)
                })
            }()
              , shapePool = function() {
                var t = poolFactory(4, function() {
                    return new ShapePath
                }, function(t) {
                    var e, r = t._length;
                    for (e = 0; e < r; e += 1)
                        pointPool.release(t.v[e]),
                        pointPool.release(t.i[e]),
                        pointPool.release(t.o[e]),
                        t.v[e] = null,
                        t.i[e] = null,
                        t.o[e] = null;
                    t._length = 0,
                    t.c = !1
                });
                return t.clone = function(e) {
                    var r, i = t.newElement(), s = void 0 === e._length ? e.v.length : e._length;
                    for (i.setLength(s),
                    i.c = e.c,
                    r = 0; r < s; r += 1)
                        i.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], r);
                    return i
                }
                ,
                t
            }()
              , shapeCollectionPool = function() {
                var t = {
                    newShapeCollection: function() {
                        var t;
                        t = e ? i[e -= 1] : new ShapeCollection;
                        return t
                    },
                    release: function(t) {
                        var s, a = t._length;
                        for (s = 0; s < a; s += 1)
                            shapePool.release(t.shapes[s]);
                        t._length = 0,
                        e === r && (i = pooling.double(i),
                        r *= 2);
                        i[e] = t,
                        e += 1
                    }
                }
                  , e = 0
                  , r = 4
                  , i = createSizedArray(r);
                return t
            }()
              , segmentsLengthPool = function() {
                return poolFactory(8, function() {
                    return {
                        lengths: [],
                        totalLength: 0
                    }
                }, function(t) {
                    var e, r = t.lengths.length;
                    for (e = 0; e < r; e += 1)
                        bezierLengthPool.release(t.lengths[e]);
                    t.lengths.length = 0
                })
            }()
              , bezierLengthPool = function() {
                return poolFactory(8, function() {
                    return {
                        addedLength: 0,
                        percents: createTypedArray("float32", defaultCurveSegments),
                        lengths: createTypedArray("float32", defaultCurveSegments)
                    }
                })
            }()
              , markerParser = function() {
                function t(t) {
                    for (var e, r = t.split("\r\n"), i = {}, s = 0, a = 0; a < r.length; a += 1)
                        2 === (e = r[a].split(":")).length && (i[e[0]] = e[1].trim(),
                        s += 1);
                    if (0 === s)
                        throw new Error;
                    return i
                }
                return function(e) {
                    for (var r = [], i = 0; i < e.length; i += 1) {
                        var s = e[i]
                          , a = {
                            time: s.tm,
                            duration: s.dr
                        };
                        try {
                            a.payload = JSON.parse(e[i].cm)
                        } catch (n) {
                            try {
                                a.payload = t(e[i].cm)
                            } catch (o) {
                                a.payload = {
                                    name: e[i]
                                }
                            }
                        }
                        r.push(a)
                    }
                    return r
                }
            }();
            function BaseRenderer() {}
            function SVGRenderer(t, e) {
                this.animationItem = t,
                this.layers = null,
                this.renderedFrame = -1,
                this.svgElement = createNS("svg");
                var r = "";
                if (e && e.title) {
                    var i = createNS("title")
                      , s = createElementID();
                    i.setAttribute("id", s),
                    i.textContent = e.title,
                    this.svgElement.appendChild(i),
                    r += s
                }
                if (e && e.description) {
                    var a = createNS("desc")
                      , n = createElementID();
                    a.setAttribute("id", n),
                    a.textContent = e.description,
                    this.svgElement.appendChild(a),
                    r += " " + n
                }
                r && this.svgElement.setAttribute("aria-labelledby", r);
                var o = createNS("defs");
                this.svgElement.appendChild(o);
                var h = createNS("g");
                this.svgElement.appendChild(h),
                this.layerElement = h,
                this.renderConfig = {
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    progressiveLoad: e && e.progressiveLoad || !1,
                    hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                    viewBoxOnly: e && e.viewBoxOnly || !1,
                    viewBoxSize: e && e.viewBoxSize || !1,
                    className: e && e.className || "",
                    id: e && e.id || "",
                    focusable: e && e.focusable,
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "100%",
                        height: e && e.filterSize && e.filterSize.height || "100%",
                        x: e && e.filterSize && e.filterSize.x || "0%",
                        y: e && e.filterSize && e.filterSize.y || "0%"
                    }
                },
                this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    defs: o,
                    renderConfig: this.renderConfig
                },
                this.elements = [],
                this.pendingElements = [],
                this.destroyed = !1,
                this.rendererType = "svg"
            }
            function CanvasRenderer(t, e) {
                this.animationItem = t,
                this.renderConfig = {
                    clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                    context: e && e.context || null,
                    progressiveLoad: e && e.progressiveLoad || !1,
                    preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    className: e && e.className || "",
                    id: e && e.id || ""
                },
                this.renderConfig.dpr = e && e.dpr || 1,
                this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1),
                this.renderedFrame = -1,
                this.globalData = {
                    frameNum: -1,
                    _mdf: !1,
                    renderConfig: this.renderConfig,
                    currentGlobalAlpha: -1
                },
                this.contextData = new CVContextData,
                this.elements = [],
                this.pendingElements = [],
                this.transformMat = new Matrix,
                this.completeLayers = !1,
                this.rendererType = "canvas"
            }
            function HybridRenderer(t, e) {
                this.animationItem = t,
                this.layers = null,
                this.renderedFrame = -1,
                this.renderConfig = {
                    className: e && e.className || "",
                    imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
                    hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                    filterSize: {
                        width: e && e.filterSize && e.filterSize.width || "400%",
                        height: e && e.filterSize && e.filterSize.height || "400%",
                        x: e && e.filterSize && e.filterSize.x || "-100%",
                        y: e && e.filterSize && e.filterSize.y || "-100%"
                    }
                },
                this.globalData = {
                    _mdf: !1,
                    frameNum: -1,
                    renderConfig: this.renderConfig
                },
                this.pendingElements = [],
                this.elements = [],
                this.threeDElements = [],
                this.destroyed = !1,
                this.camera = null,
                this.supports3d = !0,
                this.rendererType = "html"
            }
            function MaskElement(t, e, r) {
                this.data = t,
                this.element = e,
                this.globalData = r,
                this.storedData = [],
                this.masksProperties = this.data.masksProperties || [],
                this.maskElement = null;
                var i, s, a = this.globalData.defs, n = this.masksProperties ? this.masksProperties.length : 0;
                this.viewData = createSizedArray(n),
                this.solidPath = "";
                var o, h, l, p, m, f, c = this.masksProperties, d = 0, u = [], y = createElementID(), g = "clipPath", v = "clip-path";
                for (i = 0; i < n; i += 1)
                    if (("a" !== c[i].mode && "n" !== c[i].mode || c[i].inv || 100 !== c[i].o.k || c[i].o.x) && (g = "mask",
                    v = "mask"),
                    "s" !== c[i].mode && "i" !== c[i].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"),
                    l.setAttribute("width", this.element.comp.data.w || 0),
                    l.setAttribute("height", this.element.comp.data.h || 0),
                    u.push(l)),
                    s = createNS("path"),
                    "n" === c[i].mode)
                        this.viewData[i] = {
                            op: PropertyFactory.getProp(this.element, c[i].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3),
                            elem: s,
                            lastPath: ""
                        },
                        a.appendChild(s);
                    else {
                        var b;
                        if (d += 1,
                        s.setAttribute("fill", "s" === c[i].mode ? "#000000" : "#ffffff"),
                        s.setAttribute("clip-rule", "nonzero"),
                        0 !== c[i].x.k ? (g = "mask",
                        v = "mask",
                        f = PropertyFactory.getProp(this.element, c[i].x, 0, null, this.element),
                        b = createElementID(),
                        (p = createNS("filter")).setAttribute("id", b),
                        (m = createNS("feMorphology")).setAttribute("operator", "erode"),
                        m.setAttribute("in", "SourceGraphic"),
                        m.setAttribute("radius", "0"),
                        p.appendChild(m),
                        a.appendChild(p),
                        s.setAttribute("stroke", "s" === c[i].mode ? "#000000" : "#ffffff")) : (m = null,
                        f = null),
                        this.storedData[i] = {
                            elem: s,
                            x: f,
                            expan: m,
                            lastPath: "",
                            lastOperator: "",
                            filterId: b,
                            lastRadius: 0
                        },
                        "i" === c[i].mode) {
                            h = u.length;
                            var P = createNS("g");
                            for (o = 0; o < h; o += 1)
                                P.appendChild(u[o]);
                            var E = createNS("mask");
                            E.setAttribute("mask-type", "alpha"),
                            E.setAttribute("id", y + "_" + d),
                            E.appendChild(s),
                            a.appendChild(E),
                            P.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + d + ")"),
                            u.length = 0,
                            u.push(P)
                        } else
                            u.push(s);
                        c[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                        this.viewData[i] = {
                            elem: s,
                            lastPath: "",
                            op: PropertyFactory.getProp(this.element, c[i].o, 0, .01, this.element),
                            prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3),
                            invRect: l
                        },
                        this.viewData[i].prop.k || this.drawPath(c[i], this.viewData[i].prop.v, this.viewData[i])
                    }
                for (this.maskElement = createNS(g),
                n = u.length,
                i = 0; i < n; i += 1)
                    this.maskElement.appendChild(u[i]);
                d > 0 && (this.maskElement.setAttribute("id", y),
                this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + y + ")"),
                a.appendChild(this.maskElement)),
                this.viewData.length && this.element.addRenderableComponent(this)
            }
            function HierarchyElement() {}
            function FrameElement() {}
            function TransformElement() {}
            function RenderableElement() {}
            function RenderableDOMElement() {}
            function ProcessedElement(t, e) {
                this.elem = t,
                this.pos = e
            }
            function SVGStyleData(t, e) {
                this.data = t,
                this.type = t.ty,
                this.d = "",
                this.lvl = e,
                this._mdf = !1,
                this.closed = !0 === t.hd,
                this.pElem = createNS("path"),
                this.msElem = null
            }
            function SVGShapeData(t, e, r) {
                this.caches = [],
                this.styles = [],
                this.transformers = t,
                this.lStr = "",
                this.sh = r,
                this.lvl = e,
                this._isAnimated = !!r.k;
                for (var i = 0, s = t.length; i < s; ) {
                    if (t[i].mProps.dynamicProperties.length) {
                        this._isAnimated = !0;
                        break
                    }
                    i += 1
                }
            }
            function SVGTransformData(t, e, r) {
                this.transform = {
                    mProps: t,
                    op: e,
                    container: r
                },
                this.elements = [],
                this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
            }
            function SVGStrokeStyleData(t, e, r) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
                this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
                this.d = new DashProperty(t,e.d || {},"svg",this),
                this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
                this.style = r,
                this._isAnimated = !!this._isAnimated
            }
            function SVGFillStyleData(t, e, r) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
                this.c = PropertyFactory.getProp(t, e.c, 1, 255, this),
                this.style = r
            }
            function SVGGradientFillStyleData(t, e, r) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.initGradientData(t, e, r)
            }
            function SVGGradientStrokeStyleData(t, e, r) {
                this.initDynamicPropertyContainer(t),
                this.getValue = this.iterateDynamicProperties,
                this.w = PropertyFactory.getProp(t, e.w, 0, null, this),
                this.d = new DashProperty(t,e.d || {},"svg",this),
                this.initGradientData(t, e, r),
                this._isAnimated = !!this._isAnimated
            }
            function ShapeGroupData() {
                this.it = [],
                this.prevViewData = [],
                this.gr = createNS("g")
            }
            BaseRenderer.prototype.checkLayers = function(t) {
                var e, r, i = this.layers.length;
                for (this.completeLayers = !0,
                e = i - 1; e >= 0; e -= 1)
                    this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e),
                    this.completeLayers = !!this.elements[e] && this.completeLayers;
                this.checkPendingElements()
            }
            ,
            BaseRenderer.prototype.createItem = function(t) {
                switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 6:
                    return this.createAudio(t);
                case 13:
                    return this.createCamera(t);
                case 15:
                    return this.createFootage(t);
                default:
                    return this.createNull(t);
                }
            }
            ,
            BaseRenderer.prototype.createCamera = function() {
                throw new Error("You're using a 3d camera. Try the html renderer.")
            }
            ,
            BaseRenderer.prototype.createAudio = function(t) {
                return new AudioElement(t,this.globalData,this)
            }
            ,
            BaseRenderer.prototype.createFootage = function(t) {
                return new FootageElement(t,this.globalData,this)
            }
            ,
            BaseRenderer.prototype.buildAllItems = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1)
                    this.buildItem(t);
                this.checkPendingElements()
            }
            ,
            BaseRenderer.prototype.includeLayers = function(t) {
                var e;
                this.completeLayers = !1;
                var r, i = t.length, s = this.layers.length;
                for (e = 0; e < i; e += 1)
                    for (r = 0; r < s; ) {
                        if (this.layers[r].id === t[e].id) {
                            this.layers[r] = t[e];
                            break
                        }
                        r += 1
                    }
            }
            ,
            BaseRenderer.prototype.setProjectInterface = function(t) {
                this.globalData.projectInterface = t
            }
            ,
            BaseRenderer.prototype.initItems = function() {
                this.globalData.progressiveLoad || this.buildAllItems()
            }
            ,
            BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
                for (var i = this.elements, s = this.layers, a = 0, n = s.length; a < n; )
                    s[a].ind == e && (i[a] && !0 !== i[a] ? (r.push(i[a]),
                    i[a].setAsParent(),
                    void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a),
                    this.addPendingElement(t))),
                    a += 1
            }
            ,
            BaseRenderer.prototype.addPendingElement = function(t) {
                this.pendingElements.push(t)
            }
            ,
            BaseRenderer.prototype.searchExtraCompositions = function(t) {
                var e, r = t.length;
                for (e = 0; e < r; e += 1)
                    if (t[e].xt) {
                        var i = this.createComp(t[e]);
                        i.initExpressions(),
                        this.globalData.projectInterface.registerComposition(i)
                    }
            }
            ,
            BaseRenderer.prototype.setupGlobalData = function(t, e) {
                this.globalData.fontManager = new FontManager,
                this.globalData.fontManager.addChars(t.chars),
                this.globalData.fontManager.addFonts(t.fonts, e),
                this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem),
                this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem),
                this.globalData.imageLoader = this.animationItem.imagePreloader,
                this.globalData.audioController = this.animationItem.audioController,
                this.globalData.frameId = 0,
                this.globalData.frameRate = t.fr,
                this.globalData.nm = t.nm,
                this.globalData.compSize = {
                    w: t.w,
                    h: t.h
                }
            }
            ,
            extendPrototype([BaseRenderer], SVGRenderer),
            SVGRenderer.prototype.createNull = function(t) {
                return new NullElement(t,this.globalData,this)
            }
            ,
            SVGRenderer.prototype.createShape = function(t) {
                return new SVGShapeElement(t,this.globalData,this)
            }
            ,
            SVGRenderer.prototype.createText = function(t) {
                return new SVGTextLottieElement(t,this.globalData,this)
            }
            ,
            SVGRenderer.prototype.createImage = function(t) {
                return new IImageElement(t,this.globalData,this)
            }
            ,
            SVGRenderer.prototype.createComp = function(t) {
                return new SVGCompElement(t,this.globalData,this)
            }
            ,
            SVGRenderer.prototype.createSolid = function(t) {
                return new ISolidElement(t,this.globalData,this)
            }
            ,
            SVGRenderer.prototype.configAnimation = function(t) {
                this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h),
                this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w),
                this.svgElement.setAttribute("height", t.h),
                this.svgElement.style.width = "100%",
                this.svgElement.style.height = "100%",
                this.svgElement.style.transform = "translate3d(0,0,0)"),
                this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className),
                this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id),
                void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable),
                this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio),
                this.animationItem.wrapper.appendChild(this.svgElement);
                var e = this.globalData.defs;
                this.setupGlobalData(t, e),
                this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
                this.data = t;
                var r = createNS("clipPath")
                  , i = createNS("rect");
                i.setAttribute("width", t.w),
                i.setAttribute("height", t.h),
                i.setAttribute("x", 0),
                i.setAttribute("y", 0);
                var s = createElementID();
                r.setAttribute("id", s),
                r.appendChild(i),
                this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + s + ")"),
                e.appendChild(r),
                this.layers = t.layers,
                this.elements = createSizedArray(t.layers.length)
            }
            ,
            SVGRenderer.prototype.destroy = function() {
                var t;
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
                this.layerElement = null,
                this.globalData.defs = null;
                var e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t += 1)
                    this.elements[t] && this.elements[t].destroy();
                this.elements.length = 0,
                this.destroyed = !0,
                this.animationItem = null
            }
            ,
            SVGRenderer.prototype.updateContainerSize = function() {}
            ,
            SVGRenderer.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && 99 !== this.layers[t].ty) {
                    e[t] = !0;
                    var r = this.createItem(this.layers[t]);
                    e[t] = r,
                    expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r),
                    r.initExpressions()),
                    this.appendElementInPos(r, t),
                    this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1),
                    this.addPendingElement(r)))
                }
            }
            ,
            SVGRenderer.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length; ) {
                    var t = this.pendingElements.pop();
                    if (t.checkParenting(),
                    t.data.tt)
                        for (var e = 0, r = this.elements.length; e < r; ) {
                            if (this.elements[e] === t) {
                                t.setMatte(this.elements[e - 1].layerId);
                                break
                            }
                            e += 1
                        }
                }
            }
            ,
            SVGRenderer.prototype.renderFrame = function(t) {
                if (this.renderedFrame !== t && !this.destroyed) {
                    var e;
                    null === t ? t = this.renderedFrame : this.renderedFrame = t,
                    this.globalData.frameNum = t,
                    this.globalData.frameId += 1,
                    this.globalData.projectInterface.currentFrame = t,
                    this.globalData._mdf = !1;
                    var r = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t),
                    e = r - 1; e >= 0; e -= 1)
                        (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                    if (this.globalData._mdf)
                        for (e = 0; e < r; e += 1)
                            (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
                }
            }
            ,
            SVGRenderer.prototype.appendElementInPos = function(t, e) {
                var r = t.getBaseElement();
                if (r) {
                    for (var i, s = 0; s < e; )
                        this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (i = this.elements[s].getBaseElement()),
                        s += 1;
                    i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
                }
            }
            ,
            SVGRenderer.prototype.hide = function() {
                this.layerElement.style.display = "none"
            }
            ,
            SVGRenderer.prototype.show = function() {
                this.layerElement.style.display = "block"
            }
            ,
            extendPrototype([BaseRenderer], CanvasRenderer),
            CanvasRenderer.prototype.createShape = function(t) {
                return new CVShapeElement(t,this.globalData,this)
            }
            ,
            CanvasRenderer.prototype.createText = function(t) {
                return new CVTextElement(t,this.globalData,this)
            }
            ,
            CanvasRenderer.prototype.createImage = function(t) {
                return new CVImageElement(t,this.globalData,this)
            }
            ,
            CanvasRenderer.prototype.createComp = function(t) {
                return new CVCompElement(t,this.globalData,this)
            }
            ,
            CanvasRenderer.prototype.createSolid = function(t) {
                return new CVSolidElement(t,this.globalData,this)
            }
            ,
            CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull,
            CanvasRenderer.prototype.ctxTransform = function(t) {
                if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
                    if (this.renderConfig.clearCanvas) {
                        this.transformMat.cloneFromProps(t);
                        var e = this.contextData.cTr.props;
                        this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]),
                        this.contextData.cTr.cloneFromProps(this.transformMat.props);
                        var r = this.contextData.cTr.props;
                        this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
                    } else
                        this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
            }
            ,
            CanvasRenderer.prototype.ctxOpacity = function(t) {
                if (!this.renderConfig.clearCanvas)
                    return this.canvasContext.globalAlpha *= t < 0 ? 0 : t,
                    void (this.globalData.currentGlobalAlpha = this.contextData.cO);
                this.contextData.cO *= t < 0 ? 0 : t,
                this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO,
                this.globalData.currentGlobalAlpha = this.contextData.cO)
            }
            ,
            CanvasRenderer.prototype.reset = function() {
                this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
            }
            ,
            CanvasRenderer.prototype.save = function(t) {
                if (this.renderConfig.clearCanvas) {
                    t && this.canvasContext.save();
                    var e, r = this.contextData.cTr.props;
                    this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
                    var i = this.contextData.saved[this.contextData.cArrPos];
                    for (e = 0; e < 16; e += 1)
                        i[e] = r[e];
                    this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO,
                    this.contextData.cArrPos += 1
                } else
                    this.canvasContext.save()
            }
            ,
            CanvasRenderer.prototype.restore = function(t) {
                if (this.renderConfig.clearCanvas) {
                    t && (this.canvasContext.restore(),
                    this.globalData.blendMode = "source-over"),
                    this.contextData.cArrPos -= 1;
                    var e, r = this.contextData.saved[this.contextData.cArrPos], i = this.contextData.cTr.props;
                    for (e = 0; e < 16; e += 1)
                        i[e] = r[e];
                    this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]),
                    r = this.contextData.savedOp[this.contextData.cArrPos],
                    this.contextData.cO = r,
                    this.globalData.currentGlobalAlpha !== r && (this.canvasContext.globalAlpha = r,
                    this.globalData.currentGlobalAlpha = r)
                } else
                    this.canvasContext.restore()
            }
            ,
            CanvasRenderer.prototype.configAnimation = function(t) {
                if (this.animationItem.wrapper) {
                    this.animationItem.container = createTag("canvas");
                    var e = this.animationItem.container.style;
                    e.width = "100%",
                    e.height = "100%";
                    var r = "0px 0px 0px";
                    e.transformOrigin = r,
                    e.mozTransformOrigin = r,
                    e.webkitTransformOrigin = r,
                    e["-webkit-transform"] = r,
                    this.animationItem.wrapper.appendChild(this.animationItem.container),
                    this.canvasContext = this.animationItem.container.getContext("2d"),
                    this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className),
                    this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
                } else
                    this.canvasContext = this.renderConfig.context;
                this.data = t,
                this.layers = t.layers,
                this.transformCanvas = {
                    w: t.w,
                    h: t.h,
                    sx: 0,
                    sy: 0,
                    tx: 0,
                    ty: 0
                },
                this.setupGlobalData(t, document.body),
                this.globalData.canvasContext = this.canvasContext,
                this.globalData.renderer = this,
                this.globalData.isDashed = !1,
                this.globalData.progressiveLoad = this.renderConfig.progressiveLoad,
                this.globalData.transformCanvas = this.transformCanvas,
                this.elements = createSizedArray(t.layers.length),
                this.updateContainerSize()
            }
            ,
            CanvasRenderer.prototype.updateContainerSize = function() {
                var t, e, r, i;
                if (this.reset(),
                this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth,
                e = this.animationItem.wrapper.offsetHeight,
                this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr),
                this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr,
                e = this.canvasContext.canvas.height * this.renderConfig.dpr),
                -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
                    var s = this.renderConfig.preserveAspectRatio.split(" ")
                      , a = s[1] || "meet"
                      , n = s[0] || "xMidYMid"
                      , o = n.substr(0, 4)
                      , h = n.substr(4);
                    r = t / e,
                    (i = this.transformCanvas.w / this.transformCanvas.h) > r && "meet" === a || i < r && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr),
                    this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr),
                    this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)),
                    this.transformCanvas.tx = "xMid" === o && (i < r && "meet" === a || i > r && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (i < r && "meet" === a || i > r && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0,
                    this.transformCanvas.ty = "YMid" === h && (i > r && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (i > r && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
                } else
                    "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr),
                    this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr),
                    this.transformCanvas.tx = 0,
                    this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr,
                    this.transformCanvas.sy = this.renderConfig.dpr,
                    this.transformCanvas.tx = 0,
                    this.transformCanvas.ty = 0);
                this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1],
                this.ctxTransform(this.transformCanvas.props),
                this.canvasContext.beginPath(),
                this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
                this.canvasContext.closePath(),
                this.canvasContext.clip(),
                this.renderFrame(this.renderedFrame, !0)
            }
            ,
            CanvasRenderer.prototype.destroy = function() {
                var t;
                for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
                t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1)
                    this.elements[t] && this.elements[t].destroy();
                this.elements.length = 0,
                this.globalData.canvasContext = null,
                this.animationItem.container = null,
                this.destroyed = !0
            }
            ,
            CanvasRenderer.prototype.renderFrame = function(t, e) {
                if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                    var r;
                    this.renderedFrame = t,
                    this.globalData.frameNum = t - this.animationItem._isFirstFrame,
                    this.globalData.frameId += 1,
                    this.globalData._mdf = !this.renderConfig.clearCanvas || e,
                    this.globalData.projectInterface.currentFrame = t;
                    var i = this.layers.length;
                    for (this.completeLayers || this.checkLayers(t),
                    r = 0; r < i; r += 1)
                        (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
                    if (this.globalData._mdf) {
                        for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(),
                        r = i - 1; r >= 0; r -= 1)
                            (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                        !0 !== this.renderConfig.clearCanvas && this.restore()
                    }
                }
            }
            ,
            CanvasRenderer.prototype.buildItem = function(t) {
                var e = this.elements;
                if (!e[t] && 99 !== this.layers[t].ty) {
                    var r = this.createItem(this.layers[t], this, this.globalData);
                    e[t] = r,
                    r.initExpressions()
                }
            }
            ,
            CanvasRenderer.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length; ) {
                    this.pendingElements.pop().checkParenting()
                }
            }
            ,
            CanvasRenderer.prototype.hide = function() {
                this.animationItem.container.style.display = "none"
            }
            ,
            CanvasRenderer.prototype.show = function() {
                this.animationItem.container.style.display = "block"
            }
            ,
            extendPrototype([BaseRenderer], HybridRenderer),
            HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem,
            HybridRenderer.prototype.checkPendingElements = function() {
                for (; this.pendingElements.length; ) {
                    this.pendingElements.pop().checkParenting()
                }
            }
            ,
            HybridRenderer.prototype.appendElementInPos = function(t, e) {
                var r = t.getBaseElement();
                if (r) {
                    var i = this.layers[e];
                    if (i.ddd && this.supports3d)
                        this.addTo3dContainer(r, e);
                    else if (this.threeDElements)
                        this.addTo3dContainer(r, e);
                    else {
                        for (var s, a, n = 0; n < e; )
                            this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n],
                            s = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || s),
                            n += 1;
                        s ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, s) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
                    }
                }
            }
            ,
            HybridRenderer.prototype.createShape = function(t) {
                return this.supports3d ? new HShapeElement(t,this.globalData,this) : new SVGShapeElement(t,this.globalData,this)
            }
            ,
            HybridRenderer.prototype.createText = function(t) {
                return this.supports3d ? new HTextElement(t,this.globalData,this) : new SVGTextLottieElement(t,this.globalData,this)
            }
            ,
            HybridRenderer.prototype.createCamera = function(t) {
                return this.camera = new HCameraElement(t,this.globalData,this),
                this.camera
            }
            ,
            HybridRenderer.prototype.createImage = function(t) {
                return this.supports3d ? new HImageElement(t,this.globalData,this) : new IImageElement(t,this.globalData,this)
            }
            ,
            HybridRenderer.prototype.createComp = function(t) {
                return this.supports3d ? new HCompElement(t,this.globalData,this) : new SVGCompElement(t,this.globalData,this)
            }
            ,
            HybridRenderer.prototype.createSolid = function(t) {
                return this.supports3d ? new HSolidElement(t,this.globalData,this) : new ISolidElement(t,this.globalData,this)
            }
            ,
            HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull,
            HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
                for (var e = 0, r = this.threeDElements.length; e < r; ) {
                    if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t)
                        return this.threeDElements[e].perspectiveElem;
                    e += 1
                }
                return null
            }
            ,
            HybridRenderer.prototype.createThreeDContainer = function(t, e) {
                var r, i, s = createTag("div");
                styleDiv(s);
                var a = createTag("div");
                if (styleDiv(a),
                "3d" === e) {
                    (r = s.style).width = this.globalData.compSize.w + "px",
                    r.height = this.globalData.compSize.h + "px";
                    r.webkitTransformOrigin = "50% 50%",
                    r.mozTransformOrigin = "50% 50%",
                    r.transformOrigin = "50% 50%";
                    var n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                    (i = a.style).transform = n,
                    i.webkitTransform = n
                }
                s.appendChild(a);
                var o = {
                    container: a,
                    perspectiveElem: s,
                    startPos: t,
                    endPos: t,
                    type: e
                };
                return this.threeDElements.push(o),
                o
            }
            ,
            HybridRenderer.prototype.build3dContainers = function() {
                var t, e, r = this.layers.length, i = "";
                for (t = 0; t < r; t += 1)
                    this.layers[t].ddd && 3 !== this.layers[t].ty ? ("3d" !== i && (i = "3d",
                    e = this.createThreeDContainer(t, "3d")),
                    e.endPos = Math.max(e.endPos, t)) : ("2d" !== i && (i = "2d",
                    e = this.createThreeDContainer(t, "2d")),
                    e.endPos = Math.max(e.endPos, t));
                for (t = (r = this.threeDElements.length) - 1; t >= 0; t -= 1)
                    this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
            }
            ,
            HybridRenderer.prototype.addTo3dContainer = function(t, e) {
                for (var r = 0, i = this.threeDElements.length; r < i; ) {
                    if (e <= this.threeDElements[r].endPos) {
                        for (var s, a = this.threeDElements[r].startPos; a < e; )
                            this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()),
                            a += 1;
                        s ? this.threeDElements[r].container.insertBefore(t, s) : this.threeDElements[r].container.appendChild(t);
                        break
                    }
                    r += 1
                }
            }
            ,
            HybridRenderer.prototype.configAnimation = function(t) {
                var e = createTag("div")
                  , r = this.animationItem.wrapper
                  , i = e.style;
                i.width = t.w + "px",
                i.height = t.h + "px",
                this.resizerElem = e,
                styleDiv(e),
                i.transformStyle = "flat",
                i.mozTransformStyle = "flat",
                i.webkitTransformStyle = "flat",
                this.renderConfig.className && e.setAttribute("class", this.renderConfig.className),
                r.appendChild(e),
                i.overflow = "hidden";
                var s = createNS("svg");
                s.setAttribute("width", "1"),
                s.setAttribute("height", "1"),
                styleDiv(s),
                this.resizerElem.appendChild(s);
                var a = createNS("defs");
                s.appendChild(a),
                this.data = t,
                this.setupGlobalData(t, s),
                this.globalData.defs = a,
                this.layers = t.layers,
                this.layerElement = this.resizerElem,
                this.build3dContainers(),
                this.updateContainerSize()
            }
            ,
            HybridRenderer.prototype.destroy = function() {
                var t;
                this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""),
                this.animationItem.container = null,
                this.globalData.defs = null;
                var e = this.layers ? this.layers.length : 0;
                for (t = 0; t < e; t += 1)
                    this.elements[t].destroy();
                this.elements.length = 0,
                this.destroyed = !0,
                this.animationItem = null
            }
            ,
            HybridRenderer.prototype.updateContainerSize = function() {
                var t, e, r, i, s = this.animationItem.wrapper.offsetWidth, a = this.animationItem.wrapper.offsetHeight, n = s / a;
                this.globalData.compSize.w / this.globalData.compSize.h > n ? (t = s / this.globalData.compSize.w,
                e = s / this.globalData.compSize.w,
                r = 0,
                i = (a - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h,
                e = a / this.globalData.compSize.h,
                r = (s - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2,
                i = 0);
                var o = this.resizerElem.style;
                o.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)",
                o.transform = o.webkitTransform
            }
            ,
            HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame,
            HybridRenderer.prototype.hide = function() {
                this.resizerElem.style.display = "none"
            }
            ,
            HybridRenderer.prototype.show = function() {
                this.resizerElem.style.display = "block"
            }
            ,
            HybridRenderer.prototype.initItems = function() {
                if (this.buildAllItems(),
                this.camera)
                    this.camera.setup();
                else {
                    var t, e = this.globalData.compSize.w, r = this.globalData.compSize.h, i = this.threeDElements.length;
                    for (t = 0; t < i; t += 1) {
                        var s = this.threeDElements[t].perspectiveElem.style;
                        s.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px",
                        s.perspective = s.webkitPerspective
                    }
                }
            }
            ,
            HybridRenderer.prototype.searchExtraCompositions = function(t) {
                var e, r = t.length, i = createTag("div");
                for (e = 0; e < r; e += 1)
                    if (t[e].xt) {
                        var s = this.createComp(t[e], i, this.globalData.comp, null);
                        s.initExpressions(),
                        this.globalData.projectInterface.registerComposition(s)
                    }
            }
            ,
            MaskElement.prototype.getMaskProperty = function(t) {
                return this.viewData[t].prop
            }
            ,
            MaskElement.prototype.renderFrame = function(t) {
                var e, r = this.element.finalTransform.mat, i = this.masksProperties.length;
                for (e = 0; e < i; e += 1)
                    if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]),
                    (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v),
                    "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()),
                    this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                        var s = this.storedData[e].expan;
                        this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode",
                        this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")),
                        s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate",
                        this.storedData[e].elem.setAttribute("filter", null)),
                        this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
                    }
            }
            ,
            MaskElement.prototype.getMaskelement = function() {
                return this.maskElement
            }
            ,
            MaskElement.prototype.createLayerSolidPath = function() {
                var t = "M0,0 ";
                return t += " h" + this.globalData.compSize.w,
                t += " v" + this.globalData.compSize.h,
                t += " h-" + this.globalData.compSize.w,
                t += " v-" + this.globalData.compSize.h + " "
            }
            ,
            MaskElement.prototype.drawPath = function(t, e, r) {
                var i, s, a = " M" + e.v[0][0] + "," + e.v[0][1];
                for (s = e._length,
                i = 1; i < s; i += 1)
                    a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
                if (e.c && s > 1 && (a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]),
                r.lastPath !== a) {
                    var n = "";
                    r.elem && (e.c && (n = t.inv ? this.solidPath + a : a),
                    r.elem.setAttribute("d", n)),
                    r.lastPath = a
                }
            }
            ,
            MaskElement.prototype.destroy = function() {
                this.element = null,
                this.globalData = null,
                this.maskElement = null,
                this.data = null,
                this.masksProperties = null
            }
            ,
            HierarchyElement.prototype = {
                initHierarchy: function() {
                    this.hierarchy = [],
                    this._isParent = !1,
                    this.checkParenting()
                },
                setHierarchy: function(t) {
                    this.hierarchy = t
                },
                setAsParent: function() {
                    this._isParent = !0
                },
                checkParenting: function() {
                    void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
                }
            },
            FrameElement.prototype = {
                initFrame: function() {
                    this._isFirstFrame = !1,
                    this.dynamicProperties = [],
                    this._mdf = !1
                },
                prepareProperties: function(t, e) {
                    var r, i = this.dynamicProperties.length;
                    for (r = 0; r < i; r += 1)
                        (e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(),
                        this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0,
                        this._mdf = !0))
                },
                addDynamicProperty: function(t) {
                    -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
                }
            },
            TransformElement.prototype = {
                initTransform: function() {
                    this.finalTransform = {
                        mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                            o: 0
                        },
                        _matMdf: !1,
                        _opMdf: !1,
                        mat: new Matrix
                    },
                    this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                    this.data.ty
                },
                renderTransform: function() {
                    if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame,
                    this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame,
                    this.hierarchy) {
                        var t, e = this.finalTransform.mat, r = 0, i = this.hierarchy.length;
                        if (!this.finalTransform._matMdf)
                            for (; r < i; ) {
                                if (this.hierarchy[r].finalTransform.mProp._mdf) {
                                    this.finalTransform._matMdf = !0;
                                    break
                                }
                                r += 1
                            }
                        if (this.finalTransform._matMdf)
                            for (t = this.finalTransform.mProp.v.props,
                            e.cloneFromProps(t),
                            r = 0; r < i; r += 1)
                                t = this.hierarchy[r].finalTransform.mProp.v.props,
                                e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                    }
                },
                globalToLocal: function(t) {
                    var e = [];
                    e.push(this.finalTransform);
                    for (var r, i = !0, s = this.comp; i; )
                        s.finalTransform ? (s.data.hasMask && e.splice(0, 0, s.finalTransform),
                        s = s.comp) : i = !1;
                    var a, n = e.length;
                    for (r = 0; r < n; r += 1)
                        a = e[r].mat.applyToPointArray(0, 0, 0),
                        t = [t[0] - a[0], t[1] - a[1], 0];
                    return t
                },
                mHelper: new Matrix
            },
            RenderableElement.prototype = {
                initRenderable: function() {
                    this.isInRange = !1,
                    this.hidden = !1,
                    this.isTransparent = !1,
                    this.renderableComponents = []
                },
                addRenderableComponent: function(t) {
                    -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
                },
                removeRenderableComponent: function(t) {
                    -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
                },
                prepareRenderableFrame: function(t) {
                    this.checkLayerLimits(t)
                },
                checkTransparency: function() {
                    this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0,
                    this.hide()) : this.isTransparent && (this.isTransparent = !1,
                    this.show())
                },
                checkLayerLimits: function(t) {
                    this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0,
                    this._mdf = !0,
                    this.isInRange = !0,
                    this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0,
                    this.isInRange = !1,
                    this.hide())
                },
                renderRenderable: function() {
                    var t, e = this.renderableComponents.length;
                    for (t = 0; t < e; t += 1)
                        this.renderableComponents[t].renderFrame(this._isFirstFrame)
                },
                sourceRectAtTime: function() {
                    return {
                        top: 0,
                        left: 0,
                        width: 100,
                        height: 100
                    }
                },
                getLayerSize: function() {
                    return 5 === this.data.ty ? {
                        w: this.data.textData.width,
                        h: this.data.textData.height
                    } : {
                        w: this.data.width,
                        h: this.data.height
                    }
                }
            },
            extendPrototype([RenderableElement, createProxyFunction({
                initElement: function(t, e, r) {
                    this.initFrame(),
                    this.initBaseData(t, e, r),
                    this.initTransform(t, e, r),
                    this.initHierarchy(),
                    this.initRenderable(),
                    this.initRendererElement(),
                    this.createContainerElements(),
                    this.createRenderableComponents(),
                    this.createContent(),
                    this.hide()
                },
                hide: function() {
                    this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none",
                    this.hidden = !0)
                },
                show: function() {
                    this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"),
                    this.hidden = !1,
                    this._isFirstFrame = !0)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(),
                    this.renderRenderable(),
                    this.renderElement(),
                    this.renderInnerContent(),
                    this._isFirstFrame && (this._isFirstFrame = !1))
                },
                renderInnerContent: function() {},
                prepareFrame: function(t) {
                    this._mdf = !1,
                    this.prepareRenderableFrame(t),
                    this.prepareProperties(t, this.isInRange),
                    this.checkTransparency()
                },
                destroy: function() {
                    this.innerElem = null,
                    this.destroyBaseElement()
                }
            })], RenderableDOMElement),
            SVGStyleData.prototype.reset = function() {
                this.d = "",
                this._mdf = !1
            }
            ,
            SVGShapeData.prototype.setAsAnimated = function() {
                this._isAnimated = !0
            }
            ,
            extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
            extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
            SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
                this.o = PropertyFactory.getProp(t, e.o, 0, .01, this),
                this.s = PropertyFactory.getProp(t, e.s, 1, null, this),
                this.e = PropertyFactory.getProp(t, e.e, 1, null, this),
                this.h = PropertyFactory.getProp(t, e.h || {
                    k: 0
                }, 0, .01, this),
                this.a = PropertyFactory.getProp(t, e.a || {
                    k: 0
                }, 0, degToRads, this),
                this.g = new GradientProperty(t,e.g,this),
                this.style = r,
                this.stops = [],
                this.setGradientData(r.pElem, e),
                this.setGradientOpacity(e, r),
                this._isAnimated = !!this._isAnimated
            }
            ,
            SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
                var r = createElementID()
                  , i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
                i.setAttribute("id", r),
                i.setAttribute("spreadMethod", "pad"),
                i.setAttribute("gradientUnits", "userSpaceOnUse");
                var s, a, n, o = [];
                for (n = 4 * e.g.p,
                a = 0; a < n; a += 4)
                    s = createNS("stop"),
                    i.appendChild(s),
                    o.push(s);
                t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r + ")"),
                this.gf = i,
                this.cst = o
            }
            ,
            SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
                if (this.g._hasOpacity && !this.g._collapsable) {
                    var r, i, s, a = createNS("mask"), n = createNS("path");
                    a.appendChild(n);
                    var o = createElementID()
                      , h = createElementID();
                    a.setAttribute("id", h);
                    var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                    l.setAttribute("id", o),
                    l.setAttribute("spreadMethod", "pad"),
                    l.setAttribute("gradientUnits", "userSpaceOnUse"),
                    s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
                    var p = this.stops;
                    for (i = 4 * t.g.p; i < s; i += 2)
                        (r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"),
                        l.appendChild(r),
                        p.push(r);
                    n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"),
                    "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
                    n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
                    1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)),
                    this.of = l,
                    this.ms = a,
                    this.ost = p,
                    this.maskId = h,
                    e.msElem = n
                }
            }
            ,
            extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
            extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
            var SVGElementsRenderer = function() {
                var t = new Matrix
                  , e = new Matrix;
                function r(t, e, r) {
                    (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v),
                    (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
                }
                function i(r, i, s) {
                    var a, n, o, h, l, p, m, f, c, d, u, y = i.styles.length, g = i.lvl;
                    for (p = 0; p < y; p += 1) {
                        if (h = i.sh._mdf || s,
                        i.styles[p].lvl < g) {
                            for (f = e.reset(),
                            d = g - i.styles[p].lvl,
                            u = i.transformers.length - 1; !h && d > 0; )
                                h = i.transformers[u].mProps._mdf || h,
                                d -= 1,
                                u -= 1;
                            if (h)
                                for (d = g - i.styles[p].lvl,
                                u = i.transformers.length - 1; d > 0; )
                                    c = i.transformers[u].mProps.v.props,
                                    f.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]),
                                    d -= 1,
                                    u -= 1
                        } else
                            f = t;
                        if (n = (m = i.sh.paths)._length,
                        h) {
                            for (o = "",
                            a = 0; a < n; a += 1)
                                (l = m.shapes[a]) && l._length && (o += buildShapeString(l, l._length, l.c, f));
                            i.caches[p] = o
                        } else
                            o = i.caches[p];
                        i.styles[p].d += !0 === r.hd ? "" : o,
                        i.styles[p]._mdf = h || i.styles[p]._mdf
                    }
                }
                function s(t, e, r) {
                    var i = e.style;
                    (e.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
                    (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v)
                }
                function a(t, e, r) {
                    n(t, e, r),
                    o(t, e, r)
                }
                function n(t, e, r) {
                    var i, s, a, n, o, h = e.gf, l = e.g._hasOpacity, p = e.s.v, m = e.e.v;
                    if (e.o._mdf || r) {
                        var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                        e.style.pElem.setAttribute(f, e.o.v)
                    }
                    if (e.s._mdf || r) {
                        var c = 1 === t.t ? "x1" : "cx"
                          , d = "x1" === c ? "y1" : "cy";
                        h.setAttribute(c, p[0]),
                        h.setAttribute(d, p[1]),
                        l && !e.g._collapsable && (e.of.setAttribute(c, p[0]),
                        e.of.setAttribute(d, p[1]))
                    }
                    if (e.g._cmdf || r) {
                        i = e.cst;
                        var u = e.g.c;
                        for (a = i.length,
                        s = 0; s < a; s += 1)
                            (n = i[s]).setAttribute("offset", u[4 * s] + "%"),
                            n.setAttribute("stop-color", "rgb(" + u[4 * s + 1] + "," + u[4 * s + 2] + "," + u[4 * s + 3] + ")")
                    }
                    if (l && (e.g._omdf || r)) {
                        var y = e.g.o;
                        for (a = (i = e.g._collapsable ? e.cst : e.ost).length,
                        s = 0; s < a; s += 1)
                            n = i[s],
                            e.g._collapsable || n.setAttribute("offset", y[2 * s] + "%"),
                            n.setAttribute("stop-opacity", y[2 * s + 1])
                    }
                    if (1 === t.t)
                        (e.e._mdf || r) && (h.setAttribute("x2", m[0]),
                        h.setAttribute("y2", m[1]),
                        l && !e.g._collapsable && (e.of.setAttribute("x2", m[0]),
                        e.of.setAttribute("y2", m[1])));
                    else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)),
                    h.setAttribute("r", o),
                    l && !e.g._collapsable && e.of.setAttribute("r", o)),
                    e.e._mdf || e.h._mdf || e.a._mdf || r) {
                        o || (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)));
                        var g = Math.atan2(m[1] - p[1], m[0] - p[0])
                          , v = e.h.v;
                        v >= 1 ? v = .99 : v <= -1 && (v = -.99);
                        var b = o * v
                          , P = Math.cos(g + e.a.v) * b + p[0]
                          , E = Math.sin(g + e.a.v) * b + p[1];
                        h.setAttribute("fx", P),
                        h.setAttribute("fy", E),
                        l && !e.g._collapsable && (e.of.setAttribute("fx", P),
                        e.of.setAttribute("fy", E))
                    }
                }
                function o(t, e, r) {
                    var i = e.style
                      , s = e.d;
                    s && (s._mdf || r) && s.dashStr && (i.pElem.setAttribute("stroke-dasharray", s.dashStr),
                    i.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])),
                    e.c && (e.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
                    (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v),
                    (e.w._mdf || r) && (i.pElem.setAttribute("stroke-width", e.w.v),
                    i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
                }
                return {
                    createRenderFunction: function(t) {
                        switch (t.ty) {
                        case "fl":
                            return s;
                        case "gf":
                            return n;
                        case "gs":
                            return a;
                        case "st":
                            return o;
                        case "sh":
                        case "el":
                        case "rc":
                        case "sr":
                            return i;
                        case "tr":
                            return r;
                        default:
                            return null;
                        }
                    }
                }
            }();
            function ShapeTransformManager() {
                this.sequences = {},
                this.sequenceList = [],
                this.transform_key_count = 0
            }
            function CVShapeData(t, e, r, i) {
                this.styledShapes = [],
                this.tr = [0, 0, 0, 0, 0, 0];
                var s, a = 4;
                "rc" === e.ty ? a = 5 : "el" === e.ty ? a = 6 : "sr" === e.ty && (a = 7),
                this.sh = ShapePropertyFactory.getShapeProp(t, e, a, t);
                var n, o = r.length;
                for (s = 0; s < o; s += 1)
                    r[s].closed || (n = {
                        transforms: i.addTransformSequence(r[s].transforms),
                        trNodes: []
                    },
                    this.styledShapes.push(n),
                    r[s].elements.push(n))
            }
            function BaseElement() {}
            function NullElement(t, e, r) {
                this.initFrame(),
                this.initBaseData(t, e, r),
                this.initFrame(),
                this.initTransform(t, e, r),
                this.initHierarchy()
            }
            function SVGBaseElement() {}
            function IShapeElement() {}
            function ITextElement() {}
            function ICompElement() {}
            function IImageElement(t, e, r) {
                this.assetData = e.getAssetData(t.refId),
                this.initElement(t, e, r),
                this.sourceRect = {
                    top: 0,
                    left: 0,
                    width: this.assetData.w,
                    height: this.assetData.h
                }
            }
            function ISolidElement(t, e, r) {
                this.initElement(t, e, r)
            }
            function AudioElement(t, e, r) {
                this.initFrame(),
                this.initRenderable(),
                this.assetData = e.getAssetData(t.refId),
                this.initBaseData(t, e, r),
                this._isPlaying = !1,
                this._canPlay = !1;
                var i = this.globalData.getAssetsPath(this.assetData);
                this.audio = this.globalData.audioController.createAudio(i),
                this._currentTime = 0,
                this.globalData.audioController.addAudio(this),
                this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }
            function FootageElement(t, e, r) {
                this.initFrame(),
                this.initRenderable(),
                this.assetData = e.getAssetData(t.refId),
                this.footageData = e.imageLoader.getAsset(this.assetData),
                this.initBaseData(t, e, r)
            }
            function SVGCompElement(t, e, r) {
                this.layers = t.layers,
                this.supports3d = !0,
                this.completeLayers = !1,
                this.pendingElements = [],
                this.elements = this.layers ? createSizedArray(this.layers.length) : [],
                this.initElement(t, e, r),
                this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }
            function SVGTextLottieElement(t, e, r) {
                this.textSpans = [],
                this.renderType = "svg",
                this.initElement(t, e, r)
            }
            function SVGShapeElement(t, e, r) {
                this.shapes = [],
                this.shapesData = t.shapes,
                this.stylesList = [],
                this.shapeModifiers = [],
                this.itemsData = [],
                this.processedElements = [],
                this.animatedContents = [],
                this.initElement(t, e, r),
                this.prevViewData = []
            }
            function SVGTintFilter(t, e) {
                this.filterManager = e;
                var r = createNS("feColorMatrix");
                if (r.setAttribute("type", "matrix"),
                r.setAttribute("color-interpolation-filters", "linearRGB"),
                r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
                r.setAttribute("result", "f1"),
                t.appendChild(r),
                (r = createNS("feColorMatrix")).setAttribute("type", "matrix"),
                r.setAttribute("color-interpolation-filters", "sRGB"),
                r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
                r.setAttribute("result", "f2"),
                t.appendChild(r),
                this.matrixFilter = r,
                100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
                    var i, s = createNS("feMerge");
                    t.appendChild(s),
                    (i = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"),
                    s.appendChild(i),
                    (i = createNS("feMergeNode")).setAttribute("in", "f2"),
                    s.appendChild(i)
                }
            }
            function SVGFillFilter(t, e) {
                this.filterManager = e;
                var r = createNS("feColorMatrix");
                r.setAttribute("type", "matrix"),
                r.setAttribute("color-interpolation-filters", "sRGB"),
                r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
                t.appendChild(r),
                this.matrixFilter = r
            }
            function SVGGaussianBlurEffect(t, e) {
                t.setAttribute("x", "-100%"),
                t.setAttribute("y", "-100%"),
                t.setAttribute("width", "300%"),
                t.setAttribute("height", "300%"),
                this.filterManager = e;
                var r = createNS("feGaussianBlur");
                t.appendChild(r),
                this.feGaussianBlur = r
            }
            function SVGStrokeEffect(t, e) {
                this.initialized = !1,
                this.filterManager = e,
                this.elem = t,
                this.paths = []
            }
            function SVGTritoneFilter(t, e) {
                this.filterManager = e;
                var r = createNS("feColorMatrix");
                r.setAttribute("type", "matrix"),
                r.setAttribute("color-interpolation-filters", "linearRGB"),
                r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
                r.setAttribute("result", "f1"),
                t.appendChild(r);
                var i = createNS("feComponentTransfer");
                i.setAttribute("color-interpolation-filters", "sRGB"),
                t.appendChild(i),
                this.matrixFilter = i;
                var s = createNS("feFuncR");
                s.setAttribute("type", "table"),
                i.appendChild(s),
                this.feFuncR = s;
                var a = createNS("feFuncG");
                a.setAttribute("type", "table"),
                i.appendChild(a),
                this.feFuncG = a;
                var n = createNS("feFuncB");
                n.setAttribute("type", "table"),
                i.appendChild(n),
                this.feFuncB = n
            }
            function SVGProLevelsFilter(t, e) {
                this.filterManager = e;
                var r = this.filterManager.effectElements
                  , i = createNS("feComponentTransfer");
                (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)),
                (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)),
                (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)),
                (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)),
                (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"),
                t.appendChild(i),
                i = createNS("feComponentTransfer")),
                (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"),
                t.appendChild(i),
                this.feFuncRComposed = this.createFeFunc("feFuncR", i),
                this.feFuncGComposed = this.createFeFunc("feFuncG", i),
                this.feFuncBComposed = this.createFeFunc("feFuncB", i))
            }
            function SVGDropShadowEffect(t, e) {
                var r = e.container.globalData.renderConfig.filterSize;
                t.setAttribute("x", r.x),
                t.setAttribute("y", r.y),
                t.setAttribute("width", r.width),
                t.setAttribute("height", r.height),
                this.filterManager = e;
                var i = createNS("feGaussianBlur");
                i.setAttribute("in", "SourceAlpha"),
                i.setAttribute("result", "drop_shadow_1"),
                i.setAttribute("stdDeviation", "0"),
                this.feGaussianBlur = i,
                t.appendChild(i);
                var s = createNS("feOffset");
                s.setAttribute("dx", "25"),
                s.setAttribute("dy", "0"),
                s.setAttribute("in", "drop_shadow_1"),
                s.setAttribute("result", "drop_shadow_2"),
                this.feOffset = s,
                t.appendChild(s);
                var a = createNS("feFlood");
                a.setAttribute("flood-color", "#00ff00"),
                a.setAttribute("flood-opacity", "1"),
                a.setAttribute("result", "drop_shadow_3"),
                this.feFlood = a,
                t.appendChild(a);
                var n = createNS("feComposite");
                n.setAttribute("in", "drop_shadow_3"),
                n.setAttribute("in2", "drop_shadow_2"),
                n.setAttribute("operator", "in"),
                n.setAttribute("result", "drop_shadow_4"),
                t.appendChild(n);
                var o, h = createNS("feMerge");
                t.appendChild(h),
                o = createNS("feMergeNode"),
                h.appendChild(o),
                (o = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"),
                this.feMergeNode = o,
                this.feMerge = h,
                this.originalNodeAdded = !1,
                h.appendChild(o)
            }
            ShapeTransformManager.prototype = {
                addTransformSequence: function(t) {
                    var e, r = t.length, i = "_";
                    for (e = 0; e < r; e += 1)
                        i += t[e].transform.key + "_";
                    var s = this.sequences[i];
                    return s || (s = {
                        transforms: [].concat(t),
                        finalTransform: new Matrix,
                        _mdf: !1
                    },
                    this.sequences[i] = s,
                    this.sequenceList.push(s)),
                    s
                },
                processSequence: function(t, e) {
                    for (var r, i = 0, s = t.transforms.length, a = e; i < s && !e; ) {
                        if (t.transforms[i].transform.mProps._mdf) {
                            a = !0;
                            break
                        }
                        i += 1
                    }
                    if (a)
                        for (t.finalTransform.reset(),
                        i = s - 1; i >= 0; i -= 1)
                            r = t.transforms[i].transform.mProps.v.props,
                            t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
                    t._mdf = a
                },
                processSequences: function(t) {
                    var e, r = this.sequenceList.length;
                    for (e = 0; e < r; e += 1)
                        this.processSequence(this.sequenceList[e], t)
                },
                getNewKey: function() {
                    return this.transform_key_count += 1,
                    "_" + this.transform_key_count
                }
            },
            CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated,
            BaseElement.prototype = {
                checkMasks: function() {
                    if (!this.data.hasMask)
                        return !1;
                    for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
                        if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl)
                            return !0;
                        t += 1
                    }
                    return !1
                },
                initExpressions: function() {
                    this.layerInterface = LayerExpressionInterface(this),
                    this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
                    var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
                    this.layerInterface.registerEffectsInterface(t),
                    0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface),
                    this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this),
                    this.layerInterface.text = this.layerInterface.textInterface)
                },
                setBlendMode: function() {
                    var t = getBlendMode(this.data.bm);
                    (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
                },
                initBaseData: function(t, e, r) {
                    this.globalData = e,
                    this.comp = r,
                    this.data = t,
                    this.layerId = createElementID(),
                    this.data.sr || (this.data.sr = 1),
                    this.effectsManager = new EffectsManager(this.data,this,this.dynamicProperties)
                },
                getType: function() {
                    return this.type
                },
                sourceRectAtTime: function() {}
            },
            NullElement.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0)
            }
            ,
            NullElement.prototype.renderFrame = function() {}
            ,
            NullElement.prototype.getBaseElement = function() {
                return null
            }
            ,
            NullElement.prototype.destroy = function() {}
            ,
            NullElement.prototype.sourceRectAtTime = function() {}
            ,
            NullElement.prototype.hide = function() {}
            ,
            extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement),
            SVGBaseElement.prototype = {
                initRendererElement: function() {
                    this.layerElement = createNS("g")
                },
                createContainerElements: function() {
                    this.matteElement = createNS("g"),
                    this.transformedElement = this.layerElement,
                    this.maskedElement = this.layerElement,
                    this._sizeChanged = !1;
                    var t, e, r, i = null;
                    if (this.data.td) {
                        if (3 == this.data.td || 1 == this.data.td) {
                            var s = createNS("mask");
                            s.setAttribute("id", this.layerId),
                            s.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"),
                            s.appendChild(this.layerElement),
                            i = s,
                            this.globalData.defs.appendChild(s),
                            featureSupport.maskType || 1 != this.data.td || (s.setAttribute("mask-type", "luminance"),
                            t = createElementID(),
                            e = filtersFactory.createFilter(t),
                            this.globalData.defs.appendChild(e),
                            e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                            (r = createNS("g")).appendChild(this.layerElement),
                            i = r,
                            s.appendChild(r),
                            r.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                        } else if (2 == this.data.td) {
                            var a = createNS("mask");
                            a.setAttribute("id", this.layerId),
                            a.setAttribute("mask-type", "alpha");
                            var n = createNS("g");
                            a.appendChild(n),
                            t = createElementID(),
                            e = filtersFactory.createFilter(t);
                            var o = createNS("feComponentTransfer");
                            o.setAttribute("in", "SourceGraphic"),
                            e.appendChild(o);
                            var h = createNS("feFuncA");
                            h.setAttribute("type", "table"),
                            h.setAttribute("tableValues", "1.0 0.0"),
                            o.appendChild(h),
                            this.globalData.defs.appendChild(e);
                            var l = createNS("rect");
                            l.setAttribute("width", this.comp.data.w),
                            l.setAttribute("height", this.comp.data.h),
                            l.setAttribute("x", "0"),
                            l.setAttribute("y", "0"),
                            l.setAttribute("fill", "#ffffff"),
                            l.setAttribute("opacity", "0"),
                            n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"),
                            n.appendChild(l),
                            n.appendChild(this.layerElement),
                            i = n,
                            featureSupport.maskType || (a.setAttribute("mask-type", "luminance"),
                            e.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                            r = createNS("g"),
                            n.appendChild(l),
                            r.appendChild(this.layerElement),
                            i = r,
                            n.appendChild(r)),
                            this.globalData.defs.appendChild(a)
                        }
                    } else
                        this.data.tt ? (this.matteElement.appendChild(this.layerElement),
                        i = this.matteElement,
                        this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
                    if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                    this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                    0 === this.data.ty && !this.data.hd) {
                        var p = createNS("clipPath")
                          , m = createNS("path");
                        m.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                        var f = createElementID();
                        if (p.setAttribute("id", f),
                        p.appendChild(m),
                        this.globalData.defs.appendChild(p),
                        this.checkMasks()) {
                            var c = createNS("g");
                            c.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")"),
                            c.appendChild(this.layerElement),
                            this.transformedElement = c,
                            i ? i.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                        } else
                            this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")")
                    }
                    0 !== this.data.bm && this.setBlendMode()
                },
                renderElement: function() {
                    this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()),
                    this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
                },
                destroyBaseElement: function() {
                    this.layerElement = null,
                    this.matteElement = null,
                    this.maskManager.destroy()
                },
                getBaseElement: function() {
                    return this.data.hd ? null : this.baseElement
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data,this,this.globalData),
                    this.renderableEffectsManager = new SVGEffects(this)
                },
                setMatte: function(t) {
                    this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
                }
            },
            IShapeElement.prototype = {
                addShapeToModifiers: function(t) {
                    var e, r = this.shapeModifiers.length;
                    for (e = 0; e < r; e += 1)
                        this.shapeModifiers[e].addShape(t)
                },
                isShapeInAnimatedModifiers: function(t) {
                    for (var e = this.shapeModifiers.length; 0 < e; )
                        if (this.shapeModifiers[0].isAnimatedWithShape(t))
                            return !0;
                    return !1
                },
                renderModifiers: function() {
                    if (this.shapeModifiers.length) {
                        var t, e = this.shapes.length;
                        for (t = 0; t < e; t += 1)
                            this.shapes[t].sh.reset();
                        for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1)
                            ;
                    }
                },
                searchProcessedElement: function(t) {
                    for (var e = this.processedElements, r = 0, i = e.length; r < i; ) {
                        if (e[r].elem === t)
                            return e[r].pos;
                        r += 1
                    }
                    return 0
                },
                addProcessedElement: function(t, e) {
                    for (var r = this.processedElements, i = r.length; i; )
                        if (r[i -= 1].elem === t)
                            return void (r[i].pos = e);
                    r.push(new ProcessedElement(t,e))
                },
                prepareFrame: function(t) {
                    this.prepareRenderableFrame(t),
                    this.prepareProperties(t, this.isInRange)
                }
            },
            ITextElement.prototype.initElement = function(t, e, r) {
                this.lettersChangedFlag = !0,
                this.initFrame(),
                this.initBaseData(t, e, r),
                this.textProperty = new TextProperty(this,t.t,this.dynamicProperties),
                this.textAnimator = new TextAnimatorProperty(t.t,this.renderType,this),
                this.initTransform(t, e, r),
                this.initHierarchy(),
                this.initRenderable(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                this.createContent(),
                this.hide(),
                this.textAnimator.searchProperties(this.dynamicProperties)
            }
            ,
            ITextElement.prototype.prepareFrame = function(t) {
                this._mdf = !1,
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(),
                this.textProperty._isFirstFrame = !1,
                this.textProperty._mdf = !1)
            }
            ,
            ITextElement.prototype.createPathShape = function(t, e) {
                var r, i, s = e.length, a = "";
                for (r = 0; r < s; r += 1)
                    i = e[r].ks.k,
                    a += buildShapeString(i, i.i.length, !0, t);
                return a
            }
            ,
            ITextElement.prototype.updateDocumentData = function(t, e) {
                this.textProperty.updateDocumentData(t, e)
            }
            ,
            ITextElement.prototype.canResizeFont = function(t) {
                this.textProperty.canResizeFont(t)
            }
            ,
            ITextElement.prototype.setMinimumFontSize = function(t) {
                this.textProperty.setMinimumFontSize(t)
            }
            ,
            ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, s) {
                switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0),
                e.translate(0, -t.ls, 0),
                t.j) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
                }
                e.translate(i, s, 0)
            }
            ,
            ITextElement.prototype.buildColor = function(t) {
                return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
            }
            ,
            ITextElement.prototype.emptyProp = new LetterProps,
            ITextElement.prototype.destroy = function() {}
            ,
            extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement),
            ICompElement.prototype.initElement = function(t, e, r) {
                this.initFrame(),
                this.initBaseData(t, e, r),
                this.initTransform(t, e, r),
                this.initRenderable(),
                this.initHierarchy(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                !this.data.xt && e.progressiveLoad || this.buildAllItems(),
                this.hide()
            }
            ,
            ICompElement.prototype.prepareFrame = function(t) {
                if (this._mdf = !1,
                this.prepareRenderableFrame(t),
                this.prepareProperties(t, this.isInRange),
                this.isInRange || this.data.xt) {
                    if (this.tm._placeholder)
                        this.renderedFrame = t / this.data.sr;
                    else {
                        var e = this.tm.v;
                        e === this.data.op && (e = this.data.op - 1),
                        this.renderedFrame = e
                    }
                    var r, i = this.elements.length;
                    for (this.completeLayers || this.checkLayers(this.renderedFrame),
                    r = i - 1; r >= 0; r -= 1)
                        (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st),
                        this.elements[r]._mdf && (this._mdf = !0))
                }
            }
            ,
            ICompElement.prototype.renderInnerContent = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1)
                    (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
            }
            ,
            ICompElement.prototype.setElements = function(t) {
                this.elements = t
            }
            ,
            ICompElement.prototype.getElements = function() {
                return this.elements
            }
            ,
            ICompElement.prototype.destroyElements = function() {
                var t, e = this.layers.length;
                for (t = 0; t < e; t += 1)
                    this.elements[t] && this.elements[t].destroy()
            }
            ,
            ICompElement.prototype.destroy = function() {
                this.destroyElements(),
                this.destroyBaseElement()
            }
            ,
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement),
            IImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData);
                this.innerElem = createNS("image"),
                this.innerElem.setAttribute("width", this.assetData.w + "px"),
                this.innerElem.setAttribute("height", this.assetData.h + "px"),
                this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio),
                this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
                this.layerElement.appendChild(this.innerElem)
            }
            ,
            IImageElement.prototype.sourceRectAtTime = function() {
                return this.sourceRect
            }
            ,
            extendPrototype([IImageElement], ISolidElement),
            ISolidElement.prototype.createContent = function() {
                var t = createNS("rect");
                t.setAttribute("width", this.data.sw),
                t.setAttribute("height", this.data.sh),
                t.setAttribute("fill", this.data.sc),
                this.layerElement.appendChild(t)
            }
            ,
            AudioElement.prototype.prepareFrame = function(t) {
                if (this.prepareRenderableFrame(t, !0),
                this.prepareProperties(t, !0),
                this.tm._placeholder)
                    this._currentTime = t / this.data.sr;
                else {
                    var e = this.tm.v;
                    this._currentTime = e
                }
            }
            ,
            extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement),
            AudioElement.prototype.renderFrame = function() {
                this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(),
                this.audio.seek(this._currentTime / this.globalData.frameRate),
                this._isPlaying = !0))
            }
            ,
            AudioElement.prototype.show = function() {}
            ,
            AudioElement.prototype.hide = function() {
                this.audio.pause(),
                this._isPlaying = !1
            }
            ,
            AudioElement.prototype.pause = function() {
                this.audio.pause(),
                this._isPlaying = !1,
                this._canPlay = !1
            }
            ,
            AudioElement.prototype.resume = function() {
                this._canPlay = !0
            }
            ,
            AudioElement.prototype.setRate = function(t) {
                this.audio.rate(t)
            }
            ,
            AudioElement.prototype.volume = function(t) {
                this.audio.volume(t)
            }
            ,
            AudioElement.prototype.getBaseElement = function() {
                return null
            }
            ,
            AudioElement.prototype.destroy = function() {}
            ,
            AudioElement.prototype.sourceRectAtTime = function() {}
            ,
            AudioElement.prototype.initExpressions = function() {}
            ,
            FootageElement.prototype.prepareFrame = function() {}
            ,
            extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement),
            FootageElement.prototype.getBaseElement = function() {
                return null
            }
            ,
            FootageElement.prototype.renderFrame = function() {}
            ,
            FootageElement.prototype.destroy = function() {}
            ,
            FootageElement.prototype.initExpressions = function() {
                this.layerInterface = FootageInterface(this)
            }
            ,
            FootageElement.prototype.getFootageData = function() {
                return this.footageData
            }
            ,
            extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement),
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement),
            SVGTextLottieElement.prototype.createContent = function() {
                this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
            }
            ,
            SVGTextLottieElement.prototype.buildTextContents = function(t) {
                for (var e = 0, r = t.length, i = [], s = ""; e < r; )
                    t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s),
                    s = "") : s += t[e],
                    e += 1;
                return i.push(s),
                i
            }
            ,
            SVGTextLottieElement.prototype.buildNewText = function() {
                var t, e, r = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(r ? r.l.length : 0),
                r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
                r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)),
                this.layerElement.setAttribute("stroke-width", r.sw)),
                this.layerElement.setAttribute("font-size", r.finalSize);
                var i = this.globalData.fontManager.getFontByName(r.f);
                if (i.fClass)
                    this.layerElement.setAttribute("class", i.fClass);
                else {
                    this.layerElement.setAttribute("font-family", i.fFamily);
                    var s = r.fWeight
                      , a = r.fStyle;
                    this.layerElement.setAttribute("font-style", a),
                    this.layerElement.setAttribute("font-weight", s)
                }
                this.layerElement.setAttribute("aria-label", r.t);
                var n, o = r.l || [], h = !!this.globalData.fontManager.chars;
                e = o.length;
                var l, p = this.mHelper, m = "", f = this.data.singleShape, c = 0, d = 0, u = !0, y = .001 * r.tr * r.finalSize;
                if (!f || h || r.sz) {
                    var g, v, b = this.textSpans.length;
                    for (t = 0; t < e; t += 1)
                        h && f && 0 !== t || (n = b > t ? this.textSpans[t] : createNS(h ? "path" : "text"),
                        b <= t && (n.setAttribute("stroke-linecap", "butt"),
                        n.setAttribute("stroke-linejoin", "round"),
                        n.setAttribute("stroke-miterlimit", "4"),
                        this.textSpans[t] = n,
                        this.layerElement.appendChild(n)),
                        n.style.display = "inherit"),
                        p.reset(),
                        p.scale(r.finalSize / 100, r.finalSize / 100),
                        f && (o[t].n && (c = -y,
                        d += r.yOffset,
                        d += u ? 1 : 0,
                        u = !1),
                        this.applyTextPropertiesToMatrix(r, p, o[t].line, c, d),
                        c += o[t].l || 0,
                        c += y),
                        h ? (l = (g = (v = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && v.data || {}).shapes ? g.shapes[0].it : [],
                        f ? m += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (f && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"),
                        n.textContent = o[t].val,
                        n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                    f && n && n.setAttribute("d", m)
                } else {
                    var P = this.textContainer
                      , E = "start";
                    switch (r.j) {
                    case 1:
                        E = "end";
                        break;
                    case 2:
                        E = "middle";
                        break;
                    default:
                        E = "start";
                    }
                    P.setAttribute("text-anchor", E),
                    P.setAttribute("letter-spacing", y);
                    var x = this.buildTextContents(r.finalText);
                    for (e = x.length,
                    d = r.ps ? r.ps[1] + r.ascent : 0,
                    t = 0; t < e; t += 1)
                        (n = this.textSpans[t] || createNS("tspan")).textContent = x[t],
                        n.setAttribute("x", 0),
                        n.setAttribute("y", d),
                        n.style.display = "inherit",
                        P.appendChild(n),
                        this.textSpans[t] = n,
                        d += r.finalLineHeight;
                    this.layerElement.appendChild(P)
                }
                for (; t < this.textSpans.length; )
                    this.textSpans[t].style.display = "none",
                    t += 1;
                this._sizeChanged = !0
            }
            ,
            SVGTextLottieElement.prototype.sourceRectAtTime = function() {
                if (this.prepareFrame(this.comp.renderedFrame - this.data.st),
                this.renderInnerContent(),
                this._sizeChanged) {
                    this._sizeChanged = !1;
                    var t = this.layerElement.getBBox();
                    this.bbox = {
                        top: t.y,
                        left: t.x,
                        width: t.width,
                        height: t.height
                    }
                }
                return this.bbox
            }
            ,
            SVGTextLottieElement.prototype.renderInnerContent = function() {
                if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
                this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
                    var t, e;
                    this._sizeChanged = !0;
                    var r, i, s = this.textAnimator.renderedLetters, a = this.textProperty.currentData.l;
                    for (e = a.length,
                    t = 0; t < e; t += 1)
                        a[t].n || (r = s[t],
                        i = this.textSpans[t],
                        r._mdf.m && i.setAttribute("transform", r.m),
                        r._mdf.o && i.setAttribute("opacity", r.o),
                        r._mdf.sw && i.setAttribute("stroke-width", r.sw),
                        r._mdf.sc && i.setAttribute("stroke", r.sc),
                        r._mdf.fc && i.setAttribute("fill", r.fc))
                }
            }
            ,
            extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement),
            SVGShapeElement.prototype.initSecondaryElement = function() {}
            ,
            SVGShapeElement.prototype.identityMatrix = new Matrix,
            SVGShapeElement.prototype.buildExpressionInterface = function() {}
            ,
            SVGShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
                this.filterUniqueShapes()
            }
            ,
            SVGShapeElement.prototype.filterUniqueShapes = function() {
                var t, e, r, i, s = this.shapes.length, a = this.stylesList.length, n = [], o = !1;
                for (r = 0; r < a; r += 1) {
                    for (i = this.stylesList[r],
                    o = !1,
                    n.length = 0,
                    t = 0; t < s; t += 1)
                        -1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e),
                        o = e._isAnimated || o);
                    n.length > 1 && o && this.setShapesAsAnimated(n)
                }
            }
            ,
            SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
                var e, r = t.length;
                for (e = 0; e < r; e += 1)
                    t[e].setAsAnimated()
            }
            ,
            SVGShapeElement.prototype.createStyleElement = function(t, e) {
                var r, i = new SVGStyleData(t,e), s = i.pElem;
                if ("st" === t.ty)
                    r = new SVGStrokeStyleData(this,t,i);
                else if ("fl" === t.ty)
                    r = new SVGFillStyleData(this,t,i);
                else if ("gf" === t.ty || "gs" === t.ty) {
                    r = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this,t,i),
                    this.globalData.defs.appendChild(r.gf),
                    r.maskId && (this.globalData.defs.appendChild(r.ms),
                    this.globalData.defs.appendChild(r.of),
                    s.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")"))
                }
                return "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
                s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
                s.setAttribute("fill-opacity", "0"),
                1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)),
                2 === t.r && s.setAttribute("fill-rule", "evenodd"),
                t.ln && s.setAttribute("id", t.ln),
                t.cl && s.setAttribute("class", t.cl),
                t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)),
                this.stylesList.push(i),
                this.addToAnimatedContents(t, r),
                r
            }
            ,
            SVGShapeElement.prototype.createGroupElement = function(t) {
                var e = new ShapeGroupData;
                return t.ln && e.gr.setAttribute("id", t.ln),
                t.cl && e.gr.setAttribute("class", t.cl),
                t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)),
                e
            }
            ,
            SVGShapeElement.prototype.createTransformElement = function(t, e) {
                var r = TransformPropertyFactory.getTransformProperty(this, t, this)
                  , i = new SVGTransformData(r,r.o,e);
                return this.addToAnimatedContents(t, i),
                i
            }
            ,
            SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
                var i = 4;
                "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
                var s = new SVGShapeData(e,r,ShapePropertyFactory.getShapeProp(this, t, i, this));
                return this.shapes.push(s),
                this.addShapeToModifiers(s),
                this.addToAnimatedContents(t, s),
                s
            }
            ,
            SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
                for (var r = 0, i = this.animatedContents.length; r < i; ) {
                    if (this.animatedContents[r].element === e)
                        return;
                    r += 1
                }
                this.animatedContents.push({
                    fn: SVGElementsRenderer.createRenderFunction(t),
                    element: e,
                    data: t
                })
            }
            ,
            SVGShapeElement.prototype.setElementStyles = function(t) {
                var e, r = t.styles, i = this.stylesList.length;
                for (e = 0; e < i; e += 1)
                    this.stylesList[e].closed || r.push(this.stylesList[e])
            }
            ,
            SVGShapeElement.prototype.reloadShapes = function() {
                var t;
                this._isFirstFrame = !0;
                var e = this.itemsData.length;
                for (t = 0; t < e; t += 1)
                    this.prevViewData[t] = this.itemsData[t];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0),
                this.filterUniqueShapes(),
                e = this.dynamicProperties.length,
                t = 0; t < e; t += 1)
                    this.dynamicProperties[t].getValue();
                this.renderModifiers()
            }
            ,
            SVGShapeElement.prototype.searchShapes = function(t, e, r, i, s, a, n) {
                var o, h, l, p, m, f, c = [].concat(a), d = t.length - 1, u = [], y = [];
                for (o = d; o >= 0; o -= 1) {
                    if ((f = this.searchProcessedElement(t[o])) ? e[o] = r[f - 1] : t[o]._render = n,
                    "fl" === t[o].ty || "st" === t[o].ty || "gf" === t[o].ty || "gs" === t[o].ty)
                        f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s),
                        t[o]._render && i.appendChild(e[o].style.pElem),
                        u.push(e[o].style);
                    else if ("gr" === t[o].ty) {
                        if (f)
                            for (l = e[o].it.length,
                            h = 0; h < l; h += 1)
                                e[o].prevViewData[h] = e[o].it[h];
                        else
                            e[o] = this.createGroupElement(t[o]);
                        this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, c, n),
                        t[o]._render && i.appendChild(e[o].gr)
                    } else
                        "tr" === t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], i)),
                        p = e[o].transform,
                        c.push(p)) : "sh" === t[o].ty || "rc" === t[o].ty || "el" === t[o].ty || "sr" === t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], c, s)),
                        this.setElementStyles(e[o])) : "tm" === t[o].ty || "rd" === t[o].ty || "ms" === t[o].ty || "pb" === t[o].ty ? (f ? (m = e[o]).closed = !1 : ((m = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]),
                        e[o] = m,
                        this.shapeModifiers.push(m)),
                        y.push(m)) : "rp" === t[o].ty && (f ? (m = e[o]).closed = !0 : (m = ShapeModifiers.getModifier(t[o].ty),
                        e[o] = m,
                        m.init(this, t, o, e),
                        this.shapeModifiers.push(m),
                        n = !1),
                        y.push(m));
                    this.addProcessedElement(t[o], o + 1)
                }
                for (d = u.length,
                o = 0; o < d; o += 1)
                    u[o].closed = !0;
                for (d = y.length,
                o = 0; o < d; o += 1)
                    y[o].closed = !0
            }
            ,
            SVGShapeElement.prototype.renderInnerContent = function() {
                var t;
                this.renderModifiers();
                var e = this.stylesList.length;
                for (t = 0; t < e; t += 1)
                    this.stylesList[t].reset();
                for (this.renderShape(),
                t = 0; t < e; t += 1)
                    (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d),
                    this.stylesList[t].d = "M0 0" + this.stylesList[t].d),
                    this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
            }
            ,
            SVGShapeElement.prototype.renderShape = function() {
                var t, e, r = this.animatedContents.length;
                for (t = 0; t < r; t += 1)
                    e = this.animatedContents[t],
                    (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
            }
            ,
            SVGShapeElement.prototype.destroy = function() {
                this.destroyBaseElement(),
                this.shapesData = null,
                this.itemsData = null
            }
            ,
            SVGTintFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v
                      , r = this.filterManager.effectElements[1].p.v
                      , i = this.filterManager.effectElements[2].p.v / 100;
                    this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
                }
            }
            ,
            SVGFillFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[2].p.v
                      , r = this.filterManager.effectElements[6].p.v;
                    this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
                }
            }
            ,
            SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = .3 * this.filterManager.effectElements[0].p.v
                      , r = this.filterManager.effectElements[1].p.v
                      , i = 3 == r ? 0 : e
                      , s = 2 == r ? 0 : e;
                    this.feGaussianBlur.setAttribute("stdDeviation", i + " " + s);
                    var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
                    this.feGaussianBlur.setAttribute("edgeMode", a)
                }
            }
            ,
            SVGStrokeEffect.prototype.initialize = function() {
                var t, e, r, i, s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
                for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length,
                r = 0) : i = (r = this.filterManager.effectElements[0].p.v - 1) + 1,
                (e = createNS("g")).setAttribute("fill", "none"),
                e.setAttribute("stroke-linecap", "round"),
                e.setAttribute("stroke-dashoffset", 1); r < i; r += 1)
                    t = createNS("path"),
                    e.appendChild(t),
                    this.paths.push({
                        p: t,
                        m: r
                    });
                if (3 === this.filterManager.effectElements[10].p.v) {
                    var a = createNS("mask")
                      , n = createElementID();
                    a.setAttribute("id", n),
                    a.setAttribute("mask-type", "alpha"),
                    a.appendChild(e),
                    this.elem.globalData.defs.appendChild(a);
                    var o = createNS("g");
                    for (o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"); s[0]; )
                        o.appendChild(s[0]);
                    this.elem.layerElement.appendChild(o),
                    this.masker = a,
                    e.setAttribute("stroke", "#fff")
                } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                    if (2 === this.filterManager.effectElements[10].p.v)
                        for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length; )
                            this.elem.layerElement.removeChild(s[0]);
                    this.elem.layerElement.appendChild(e),
                    this.elem.layerElement.removeAttribute("mask"),
                    e.setAttribute("stroke", "#fff")
                }
                this.initialized = !0,
                this.pathMasker = e
            }
            ,
            SVGStrokeEffect.prototype.renderFrame = function(t) {
                var e;
                this.initialized || this.initialize();
                var r, i, s = this.paths.length;
                for (e = 0; e < s; e += 1)
                    if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m],
                    i = this.paths[e].p,
                    (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath),
                    t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                        var a;
                        if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                            var n = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v)
                              , o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v)
                              , h = i.getTotalLength();
                            a = "0 0 0 " + h * n + " ";
                            var l, p = h * (o - n), m = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01, f = Math.floor(p / m);
                            for (l = 0; l < f; l += 1)
                                a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                            a += "0 " + 10 * h + " 0 0"
                        } else
                            a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
                        i.setAttribute("stroke-dasharray", a)
                    }
                if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v),
                (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v),
                (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
                    var c = this.filterManager.effectElements[3].p.v;
                    this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * c[0]) + "," + bmFloor(255 * c[1]) + "," + bmFloor(255 * c[2]) + ")")
                }
            }
            ,
            SVGTritoneFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e = this.filterManager.effectElements[0].p.v
                      , r = this.filterManager.effectElements[1].p.v
                      , i = this.filterManager.effectElements[2].p.v
                      , s = i[0] + " " + r[0] + " " + e[0]
                      , a = i[1] + " " + r[1] + " " + e[1]
                      , n = i[2] + " " + r[2] + " " + e[2];
                    this.feFuncR.setAttribute("tableValues", s),
                    this.feFuncG.setAttribute("tableValues", a),
                    this.feFuncB.setAttribute("tableValues", n)
                }
            }
            ,
            SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
                var r = createNS(t);
                return r.setAttribute("type", "table"),
                e.appendChild(r),
                r
            }
            ,
            SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, s) {
                for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
                    length: 256
                }), m = 0, f = s - i, c = e - t; o <= 256; )
                    n = (a = o / 256) <= h ? c < 0 ? s : i : a >= l ? c < 0 ? i : s : i + f * Math.pow((a - t) / c, 1 / r),
                    p[m] = n,
                    m += 1,
                    o += 256 / 255;
                return p.join(" ")
            }
            ,
            SVGProLevelsFilter.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    var e, r = this.filterManager.effectElements;
                    this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v),
                    this.feFuncRComposed.setAttribute("tableValues", e),
                    this.feFuncGComposed.setAttribute("tableValues", e),
                    this.feFuncBComposed.setAttribute("tableValues", e)),
                    this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v),
                    this.feFuncR.setAttribute("tableValues", e)),
                    this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v),
                    this.feFuncG.setAttribute("tableValues", e)),
                    this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v),
                    this.feFuncB.setAttribute("tableValues", e)),
                    this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v),
                    this.feFuncA.setAttribute("tableValues", e))
                }
            }
            ,
            SVGDropShadowEffect.prototype.renderFrame = function(t) {
                if (t || this.filterManager._mdf) {
                    if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4),
                    t || this.filterManager.effectElements[0].p._mdf) {
                        var e = this.filterManager.effectElements[0].p.v;
                        this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
                    }
                    if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255),
                    t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                        var r = this.filterManager.effectElements[3].p.v
                          , i = (this.filterManager.effectElements[2].p.v - 90) * degToRads
                          , s = r * Math.cos(i)
                          , a = r * Math.sin(i);
                        this.feOffset.setAttribute("dx", s),
                        this.feOffset.setAttribute("dy", a)
                    }
                }
            }
            ;
            var _svgMatteSymbols = [];
            function SVGMatte3Effect(t, e, r) {
                this.initialized = !1,
                this.filterManager = e,
                this.filterElem = t,
                this.elem = r,
                r.matteElement = createNS("g"),
                r.matteElement.appendChild(r.layerElement),
                r.matteElement.appendChild(r.transformedElement),
                r.baseElement = r.matteElement
            }
            function SVGEffects(t) {
                var e, r, i = t.data.ef ? t.data.ef.length : 0, s = createElementID(), a = filtersFactory.createFilter(s, !0), n = 0;
                for (this.filters = [],
                e = 0; e < i; e += 1)
                    r = null,
                    20 === t.data.ef[e].ty ? (n += 1,
                    r = new SVGTintFilter(a,t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1,
                    r = new SVGFillFilter(a,t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? r = new SVGStrokeEffect(t,t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1,
                    r = new SVGTritoneFilter(a,t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1,
                    r = new SVGProLevelsFilter(a,t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1,
                    r = new SVGDropShadowEffect(a,t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? r = new SVGMatte3Effect(a,t.effectsManager.effectElements[e],t) : 29 === t.data.ef[e].ty && (n += 1,
                    r = new SVGGaussianBlurEffect(a,t.effectsManager.effectElements[e])),
                    r && this.filters.push(r);
                n && (t.globalData.defs.appendChild(a),
                t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + s + ")")),
                this.filters.length && t.addRenderableComponent(this)
            }
            function CVContextData() {
                var t;
                this.saved = [],
                this.cArrPos = 0,
                this.cTr = new Matrix,
                this.cO = 1;
                for (this.savedOp = createTypedArray("float32", 15),
                t = 0; t < 15; t += 1)
                    this.saved[t] = createTypedArray("float32", 16);
                this._length = 15
            }
            function CVBaseElement() {}
            function CVImageElement(t, e, r) {
                this.assetData = e.getAssetData(t.refId),
                this.img = e.imageLoader.getAsset(this.assetData),
                this.initElement(t, e, r)
            }
            function CVCompElement(t, e, r) {
                this.completeLayers = !1,
                this.layers = t.layers,
                this.pendingElements = [],
                this.elements = createSizedArray(this.layers.length),
                this.initElement(t, e, r),
                this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }
            function CVMaskElement(t, e) {
                var r;
                this.data = t,
                this.element = e,
                this.masksProperties = this.data.masksProperties || [],
                this.viewData = createSizedArray(this.masksProperties.length);
                var i = this.masksProperties.length
                  , s = !1;
                for (r = 0; r < i; r += 1)
                    "n" !== this.masksProperties[r].mode && (s = !0),
                    this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
                this.hasMasks = s,
                s && this.element.addRenderableComponent(this)
            }
            function CVShapeElement(t, e, r) {
                this.shapes = [],
                this.shapesData = t.shapes,
                this.stylesList = [],
                this.itemsData = [],
                this.prevViewData = [],
                this.shapeModifiers = [],
                this.processedElements = [],
                this.transformsManager = new ShapeTransformManager,
                this.initElement(t, e, r)
            }
            function CVSolidElement(t, e, r) {
                this.initElement(t, e, r)
            }
            function CVTextElement(t, e, r) {
                this.textSpans = [],
                this.yOffset = 0,
                this.fillColorAnim = !1,
                this.strokeColorAnim = !1,
                this.strokeWidthAnim = !1,
                this.stroke = !1,
                this.fill = !1,
                this.justifyOffset = 0,
                this.currentRender = null,
                this.renderType = "canvas",
                this.values = {
                    fill: "rgba(0,0,0,0)",
                    stroke: "rgba(0,0,0,0)",
                    sWidth: 0,
                    fValue: ""
                },
                this.initElement(t, e, r)
            }
            function CVEffects() {}
            function HBaseElement() {}
            function HSolidElement(t, e, r) {
                this.initElement(t, e, r)
            }
            function HCompElement(t, e, r) {
                this.layers = t.layers,
                this.supports3d = !t.hasMask,
                this.completeLayers = !1,
                this.pendingElements = [],
                this.elements = this.layers ? createSizedArray(this.layers.length) : [],
                this.initElement(t, e, r),
                this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
                    _placeholder: !0
                }
            }
            function HShapeElement(t, e, r) {
                this.shapes = [],
                this.shapesData = t.shapes,
                this.stylesList = [],
                this.shapeModifiers = [],
                this.itemsData = [],
                this.processedElements = [],
                this.animatedContents = [],
                this.shapesContainer = createNS("g"),
                this.initElement(t, e, r),
                this.prevViewData = [],
                this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                }
            }
            function HTextElement(t, e, r) {
                this.textSpans = [],
                this.textPaths = [],
                this.currentBBox = {
                    x: 999999,
                    y: -999999,
                    h: 0,
                    w: 0
                },
                this.renderType = "svg",
                this.isMasked = !1,
                this.initElement(t, e, r)
            }
            function HImageElement(t, e, r) {
                this.assetData = e.getAssetData(t.refId),
                this.initElement(t, e, r)
            }
            function HCameraElement(t, e, r) {
                this.initFrame(),
                this.initBaseData(t, e, r),
                this.initHierarchy();
                var i = PropertyFactory.getProp;
                if (this.pe = i(this, t.pe, 0, 0, this),
                t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this),
                this.py = i(this, t.ks.p.y, 1, 0, this),
                this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this),
                t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)),
                t.ks.or.k.length && t.ks.or.k[0].to) {
                    var s, a = t.ks.or.k.length;
                    for (s = 0; s < a; s += 1)
                        t.ks.or.k[s].to = null,
                        t.ks.or.k[s].ti = null
                }
                this.or = i(this, t.ks.or, 1, degToRads, this),
                this.or.sh = !0,
                this.rx = i(this, t.ks.rx, 0, degToRads, this),
                this.ry = i(this, t.ks.ry, 0, degToRads, this),
                this.rz = i(this, t.ks.rz, 0, degToRads, this),
                this.mat = new Matrix,
                this._prevMat = new Matrix,
                this._isFirstFrame = !0,
                this.finalTransform = {
                    mProp: this
                }
            }
            function HEffects() {}
            SVGMatte3Effect.prototype.findSymbol = function(t) {
                for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
                    if (_svgMatteSymbols[e] === t)
                        return _svgMatteSymbols[e];
                    e += 1
                }
                return null
            }
            ,
            SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
                var r = t.layerElement.parentNode;
                if (r) {
                    for (var i, s = r.children, a = 0, n = s.length; a < n && s[a] !== t.layerElement; )
                        a += 1;
                    a <= n - 2 && (i = s[a + 1]);
                    var o = createNS("use");
                    o.setAttribute("href", "#" + e),
                    i ? r.insertBefore(o, i) : r.appendChild(o)
                }
            }
            ,
            SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
                if (!this.findSymbol(e)) {
                    var r = createElementID()
                      , i = createNS("mask");
                    i.setAttribute("id", e.layerId),
                    i.setAttribute("mask-type", "alpha"),
                    _svgMatteSymbols.push(e);
                    var s = t.globalData.defs;
                    s.appendChild(i);
                    var a = createNS("symbol");
                    a.setAttribute("id", r),
                    this.replaceInParent(e, r),
                    a.appendChild(e.layerElement),
                    s.appendChild(a);
                    var n = createNS("use");
                    n.setAttribute("href", "#" + r),
                    i.appendChild(n),
                    e.data.hd = !1,
                    e.show()
                }
                t.setMatte(e.layerId)
            }
            ,
            SVGMatte3Effect.prototype.initialize = function() {
                for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i; )
                    e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]),
                    r += 1;
                this.initialized = !0
            }
            ,
            SVGMatte3Effect.prototype.renderFrame = function() {
                this.initialized || this.initialize()
            }
            ,
            SVGEffects.prototype.renderFrame = function(t) {
                var e, r = this.filters.length;
                for (e = 0; e < r; e += 1)
                    this.filters[e].renderFrame(t)
            }
            ,
            CVContextData.prototype.duplicate = function() {
                var t = 2 * this._length
                  , e = this.savedOp;
                this.savedOp = createTypedArray("float32", t),
                this.savedOp.set(e);
                var r = 0;
                for (r = this._length; r < t; r += 1)
                    this.saved[r] = createTypedArray("float32", 16);
                this._length = t
            }
            ,
            CVContextData.prototype.reset = function() {
                this.cArrPos = 0,
                this.cTr.reset(),
                this.cO = 1
            }
            ,
            CVBaseElement.prototype = {
                createElements: function() {},
                initRendererElement: function() {},
                createContainerElements: function() {
                    this.canvasContext = this.globalData.canvasContext,
                    this.renderableEffectsManager = new CVEffects(this)
                },
                createContent: function() {},
                setBlendMode: function() {
                    var t = this.globalData;
                    if (t.blendMode !== this.data.bm) {
                        t.blendMode = this.data.bm;
                        var e = getBlendMode(this.data.bm);
                        t.canvasContext.globalCompositeOperation = e
                    }
                },
                createRenderableComponents: function() {
                    this.maskManager = new CVMaskElement(this.data,this)
                },
                hideElement: function() {
                    this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
                },
                showElement: function() {
                    this.isInRange && !this.isTransparent && (this.hidden = !1,
                    this._isFirstFrame = !0,
                    this.maskManager._isFirstFrame = !0)
                },
                renderFrame: function() {
                    if (!this.hidden && !this.data.hd) {
                        this.renderTransform(),
                        this.renderRenderable(),
                        this.setBlendMode();
                        var t = 0 === this.data.ty;
                        this.globalData.renderer.save(t),
                        this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),
                        this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v),
                        this.renderInnerContent(),
                        this.globalData.renderer.restore(t),
                        this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
                        this._isFirstFrame && (this._isFirstFrame = !1)
                    }
                },
                destroy: function() {
                    this.canvasContext = null,
                    this.data = null,
                    this.globalData = null,
                    this.maskManager.destroy()
                },
                mHelper: new Matrix
            },
            CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement,
            CVBaseElement.prototype.show = CVBaseElement.prototype.showElement,
            extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement),
            CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement,
            CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
            CVImageElement.prototype.createContent = function() {
                if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
                    var t = createTag("canvas");
                    t.width = this.assetData.w,
                    t.height = this.assetData.h;
                    var e, r, i = t.getContext("2d"), s = this.img.width, a = this.img.height, n = s / a, o = this.assetData.w / this.assetData.h, h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
                    n > o && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (r = a) * o : r = (e = s) / o,
                    i.drawImage(this.img, (s - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h),
                    this.img = t
                }
            }
            ,
            CVImageElement.prototype.renderInnerContent = function() {
                this.canvasContext.drawImage(this.img, 0, 0)
            }
            ,
            CVImageElement.prototype.destroy = function() {
                this.img = null
            }
            ,
            extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement),
            CVCompElement.prototype.renderInnerContent = function() {
                var t, e = this.canvasContext;
                for (e.beginPath(),
                e.moveTo(0, 0),
                e.lineTo(this.data.w, 0),
                e.lineTo(this.data.w, this.data.h),
                e.lineTo(0, this.data.h),
                e.lineTo(0, 0),
                e.clip(),
                t = this.layers.length - 1; t >= 0; t -= 1)
                    (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
            }
            ,
            CVCompElement.prototype.destroy = function() {
                var t;
                for (t = this.layers.length - 1; t >= 0; t -= 1)
                    this.elements[t] && this.elements[t].destroy();
                this.layers = null,
                this.elements = null
            }
            ,
            CVMaskElement.prototype.renderFrame = function() {
                if (this.hasMasks) {
                    var t, e, r, i, s = this.element.finalTransform.mat, a = this.element.canvasContext, n = this.masksProperties.length;
                    for (a.beginPath(),
                    t = 0; t < n; t += 1)
                        if ("n" !== this.masksProperties[t].mode) {
                            var o;
                            this.masksProperties[t].inv && (a.moveTo(0, 0),
                            a.lineTo(this.element.globalData.compSize.w, 0),
                            a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h),
                            a.lineTo(0, this.element.globalData.compSize.h),
                            a.lineTo(0, 0)),
                            i = this.viewData[t].v,
                            e = s.applyToPointArray(i.v[0][0], i.v[0][1], 0),
                            a.moveTo(e[0], e[1]);
                            var h = i._length;
                            for (o = 1; o < h; o += 1)
                                r = s.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]),
                                a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                            r = s.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]),
                            a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
                        }
                    this.element.globalData.renderer.save(!0),
                    a.clip()
                }
            }
            ,
            CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty,
            CVMaskElement.prototype.destroy = function() {
                this.element = null
            }
            ,
            extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement),
            CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement,
            CVShapeElement.prototype.transformHelper = {
                opacity: 1,
                _opMdf: !1
            },
            CVShapeElement.prototype.dashResetter = [],
            CVShapeElement.prototype.createContent = function() {
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
            }
            ,
            CVShapeElement.prototype.createStyleElement = function(t, e) {
                var r = {
                    data: t,
                    type: t.ty,
                    preTransforms: this.transformsManager.addTransformSequence(e),
                    transforms: [],
                    elements: [],
                    closed: !0 === t.hd
                }
                  , i = {};
                if ("fl" === t.ty || "st" === t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this),
                i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this),
                i.e = PropertyFactory.getProp(this, t.e, 1, null, this),
                i.h = PropertyFactory.getProp(this, t.h || {
                    k: 0
                }, 0, .01, this),
                i.a = PropertyFactory.getProp(this, t.a || {
                    k: 0
                }, 0, degToRads, this),
                i.g = new GradientProperty(this,t.g,this)),
                i.o = PropertyFactory.getProp(this, t.o, 0, .01, this),
                "st" === t.ty || "gs" === t.ty) {
                    if (r.lc = lineCapEnum[t.lc || 2],
                    r.lj = lineJoinEnum[t.lj || 2],
                    1 == t.lj && (r.ml = t.ml),
                    i.w = PropertyFactory.getProp(this, t.w, 0, null, this),
                    i.w.k || (r.wi = i.w.v),
                    t.d) {
                        var s = new DashProperty(this,t.d,"canvas",this);
                        i.d = s,
                        i.d.k || (r.da = i.d.dashArray,
                        r.do = i.d.dashoffset[0])
                    }
                } else
                    r.r = 2 === t.r ? "evenodd" : "nonzero";
                return this.stylesList.push(r),
                i.style = r,
                i
            }
            ,
            CVShapeElement.prototype.createGroupElement = function() {
                return {
                    it: [],
                    prevViewData: []
                }
            }
            ,
            CVShapeElement.prototype.createTransformElement = function(t) {
                return {
                    transform: {
                        opacity: 1,
                        _opMdf: !1,
                        key: this.transformsManager.getNewKey(),
                        op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                        mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                    }
                }
            }
            ,
            CVShapeElement.prototype.createShapeElement = function(t) {
                var e = new CVShapeData(this,t,this.stylesList,this.transformsManager);
                return this.shapes.push(e),
                this.addShapeToModifiers(e),
                e
            }
            ,
            CVShapeElement.prototype.reloadShapes = function() {
                var t;
                this._isFirstFrame = !0;
                var e = this.itemsData.length;
                for (t = 0; t < e; t += 1)
                    this.prevViewData[t] = this.itemsData[t];
                for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []),
                e = this.dynamicProperties.length,
                t = 0; t < e; t += 1)
                    this.dynamicProperties[t].getValue();
                this.renderModifiers(),
                this.transformsManager.processSequences(this._isFirstFrame)
            }
            ,
            CVShapeElement.prototype.addTransformToStyleList = function(t) {
                var e, r = this.stylesList.length;
                for (e = 0; e < r; e += 1)
                    this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
            }
            ,
            CVShapeElement.prototype.removeTransformFromStyleList = function() {
                var t, e = this.stylesList.length;
                for (t = 0; t < e; t += 1)
                    this.stylesList[t].closed || this.stylesList[t].transforms.pop()
            }
            ,
            CVShapeElement.prototype.closeStyles = function(t) {
                var e, r = t.length;
                for (e = 0; e < r; e += 1)
                    t[e].closed = !0
            }
            ,
            CVShapeElement.prototype.searchShapes = function(t, e, r, i, s) {
                var a, n, o, h, l, p, m = t.length - 1, f = [], c = [], d = [].concat(s);
                for (a = m; a >= 0; a -= 1) {
                    if ((h = this.searchProcessedElement(t[a])) ? e[a] = r[h - 1] : t[a]._shouldRender = i,
                    "fl" === t[a].ty || "st" === t[a].ty || "gf" === t[a].ty || "gs" === t[a].ty)
                        h ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], d),
                        f.push(e[a].style);
                    else if ("gr" === t[a].ty) {
                        if (h)
                            for (o = e[a].it.length,
                            n = 0; n < o; n += 1)
                                e[a].prevViewData[n] = e[a].it[n];
                        else
                            e[a] = this.createGroupElement(t[a]);
                        this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, d)
                    } else
                        "tr" === t[a].ty ? (h || (p = this.createTransformElement(t[a]),
                        e[a] = p),
                        d.push(e[a]),
                        this.addTransformToStyleList(e[a])) : "sh" === t[a].ty || "rc" === t[a].ty || "el" === t[a].ty || "sr" === t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" === t[a].ty || "rd" === t[a].ty || "pb" === t[a].ty ? (h ? (l = e[a]).closed = !1 : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]),
                        e[a] = l,
                        this.shapeModifiers.push(l)),
                        c.push(l)) : "rp" === t[a].ty && (h ? (l = e[a]).closed = !0 : (l = ShapeModifiers.getModifier(t[a].ty),
                        e[a] = l,
                        l.init(this, t, a, e),
                        this.shapeModifiers.push(l),
                        i = !1),
                        c.push(l));
                    this.addProcessedElement(t[a], a + 1)
                }
                for (this.removeTransformFromStyleList(),
                this.closeStyles(f),
                m = c.length,
                a = 0; a < m; a += 1)
                    c[a].closed = !0
            }
            ,
            CVShapeElement.prototype.renderInnerContent = function() {
                this.transformHelper.opacity = 1,
                this.transformHelper._opMdf = !1,
                this.renderModifiers(),
                this.transformsManager.processSequences(this._isFirstFrame),
                this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
            }
            ,
            CVShapeElement.prototype.renderShapeTransform = function(t, e) {
                (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity,
                e.opacity *= e.op.v,
                e._opMdf = !0)
            }
            ,
            CVShapeElement.prototype.drawLayer = function() {
                var t, e, r, i, s, a, n, o, h, l = this.stylesList.length, p = this.globalData.renderer, m = this.globalData.canvasContext;
                for (t = 0; t < l; t += 1)
                    if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                        for (p.save(),
                        a = h.elements,
                        "st" === o || "gs" === o ? (m.strokeStyle = "st" === o ? h.co : h.grd,
                        m.lineWidth = h.wi,
                        m.lineCap = h.lc,
                        m.lineJoin = h.lj,
                        m.miterLimit = h.ml || 0) : m.fillStyle = "fl" === o ? h.co : h.grd,
                        p.ctxOpacity(h.coOp),
                        "st" !== o && "gs" !== o && m.beginPath(),
                        p.ctxTransform(h.preTransforms.finalTransform.props),
                        r = a.length,
                        e = 0; e < r; e += 1) {
                            for ("st" !== o && "gs" !== o || (m.beginPath(),
                            h.da && (m.setLineDash(h.da),
                            m.lineDashOffset = h.do)),
                            s = (n = a[e].trNodes).length,
                            i = 0; i < s; i += 1)
                                "m" === n[i].t ? m.moveTo(n[i].p[0], n[i].p[1]) : "c" === n[i].t ? m.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : m.closePath();
                            "st" !== o && "gs" !== o || (m.stroke(),
                            h.da && m.setLineDash(this.dashResetter))
                        }
                        "st" !== o && "gs" !== o && m.fill(h.r),
                        p.restore()
                    }
            }
            ,
            CVShapeElement.prototype.renderShape = function(t, e, r, i) {
                var s, a;
                for (a = t,
                s = e.length - 1; s >= 0; s -= 1)
                    "tr" === e[s].ty ? (a = r[s].transform,
                    this.renderShapeTransform(t, a)) : "sh" === e[s].ty || "el" === e[s].ty || "rc" === e[s].ty || "sr" === e[s].ty ? this.renderPath(e[s], r[s]) : "fl" === e[s].ty ? this.renderFill(e[s], r[s], a) : "st" === e[s].ty ? this.renderStroke(e[s], r[s], a) : "gf" === e[s].ty || "gs" === e[s].ty ? this.renderGradientFill(e[s], r[s], a) : "gr" === e[s].ty ? this.renderShape(a, e[s].it, r[s].it) : e[s].ty;
                i && this.drawLayer()
            }
            ,
            CVShapeElement.prototype.renderStyledShape = function(t, e) {
                if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                    var r, i, s, a = t.trNodes, n = e.paths, o = n._length;
                    a.length = 0;
                    var h = t.transforms.finalTransform;
                    for (s = 0; s < o; s += 1) {
                        var l = n.shapes[s];
                        if (l && l.v) {
                            for (i = l._length,
                            r = 1; r < i; r += 1)
                                1 === r && a.push({
                                    t: "m",
                                    p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                                }),
                                a.push({
                                    t: "c",
                                    pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r])
                                });
                            1 === i && a.push({
                                t: "m",
                                p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                            }),
                            l.c && i && (a.push({
                                t: "c",
                                pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0])
                            }),
                            a.push({
                                t: "z"
                            }))
                        }
                    }
                    t.trNodes = a
                }
            }
            ,
            CVShapeElement.prototype.renderPath = function(t, e) {
                if (!0 !== t.hd && t._shouldRender) {
                    var r, i = e.styledShapes.length;
                    for (r = 0; r < i; r += 1)
                        this.renderStyledShape(e.styledShapes[r], e.sh)
                }
            }
            ,
            CVShapeElement.prototype.renderFill = function(t, e, r) {
                var i = e.style;
                (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
                (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity)
            }
            ,
            CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
                var i, s = e.style;
                if (!s.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
                    var a, n = this.globalData.canvasContext, o = e.s.v, h = e.e.v;
                    if (1 === t.t)
                        i = n.createLinearGradient(o[0], o[1], h[0], h[1]);
                    else {
                        var l = Math.sqrt(Math.pow(o[0] - h[0], 2) + Math.pow(o[1] - h[1], 2))
                          , p = Math.atan2(h[1] - o[1], h[0] - o[0])
                          , m = e.h.v;
                        m >= 1 ? m = .99 : m <= -1 && (m = -.99);
                        var f = l * m
                          , c = Math.cos(p + e.a.v) * f + o[0]
                          , d = Math.sin(p + e.a.v) * f + o[1];
                        i = n.createRadialGradient(c, d, 0, o[0], o[1], l)
                    }
                    var u = t.g.p
                      , y = e.g.c
                      , g = 1;
                    for (a = 0; a < u; a += 1)
                        e.g._hasOpacity && e.g._collapsable && (g = e.g.o[2 * a + 1]),
                        i.addColorStop(y[4 * a] / 100, "rgba(" + y[4 * a + 1] + "," + y[4 * a + 2] + "," + y[4 * a + 3] + "," + g + ")");
                    s.grd = i
                }
                s.coOp = e.o.v * r.opacity
            }
            ,
            CVShapeElement.prototype.renderStroke = function(t, e, r) {
                var i = e.style
                  , s = e.d;
                s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray,
                i.do = s.dashoffset[0]),
                (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
                (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity),
                (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
            }
            ,
            CVShapeElement.prototype.destroy = function() {
                this.shapesData = null,
                this.globalData = null,
                this.canvasContext = null,
                this.stylesList.length = 0,
                this.itemsData.length = 0
            }
            ,
            extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement),
            CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement,
            CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame,
            CVSolidElement.prototype.renderInnerContent = function() {
                var t = this.canvasContext;
                t.fillStyle = this.data.sc,
                t.fillRect(0, 0, this.data.sw, this.data.sh)
            }
            ,
            extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement),
            CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"),
            CVTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = !1;
                t.fc ? (e = !0,
                this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)",
                this.fill = e;
                var r = !1;
                t.sc && (r = !0,
                this.values.stroke = this.buildColor(t.sc),
                this.values.sWidth = t.sw);
                var i, s, a, n, o, h, l, p, m, f, c, d, u = this.globalData.fontManager.getFontByName(t.f), y = t.l, g = this.mHelper;
                this.stroke = r,
                this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily,
                s = t.finalText.length;
                var v = this.data.singleShape
                  , b = .001 * t.tr * t.finalSize
                  , P = 0
                  , E = 0
                  , x = !0
                  , S = 0;
                for (i = 0; i < s; i += 1) {
                    for (n = (a = this.globalData.fontManager.getCharData(t.finalText[i], u.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && a.data || {},
                    g.reset(),
                    v && y[i].n && (P = -b,
                    E += t.yOffset,
                    E += x ? 1 : 0,
                    x = !1),
                    m = (l = n.shapes ? n.shapes[0].it : []).length,
                    g.scale(t.finalSize / 100, t.finalSize / 100),
                    v && this.applyTextPropertiesToMatrix(t, g, y[i].line, P, E),
                    c = createSizedArray(m),
                    p = 0; p < m; p += 1) {
                        for (h = l[p].ks.k.i.length,
                        f = l[p].ks.k,
                        d = [],
                        o = 1; o < h; o += 1)
                            1 === o && d.push(g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)),
                            d.push(g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToX(f.i[o][0], f.i[o][1], 0), g.applyToY(f.i[o][0], f.i[o][1], 0), g.applyToX(f.v[o][0], f.v[o][1], 0), g.applyToY(f.v[o][0], f.v[o][1], 0));
                        d.push(g.applyToX(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToY(f.o[o - 1][0], f.o[o - 1][1], 0), g.applyToX(f.i[0][0], f.i[0][1], 0), g.applyToY(f.i[0][0], f.i[0][1], 0), g.applyToX(f.v[0][0], f.v[0][1], 0), g.applyToY(f.v[0][0], f.v[0][1], 0)),
                        c[p] = d
                    }
                    v && (P += y[i].l,
                    P += b),
                    this.textSpans[S] ? this.textSpans[S].elem = c : this.textSpans[S] = {
                        elem: c
                    },
                    S += 1
                }
            }
            ,
            CVTextElement.prototype.renderInnerContent = function() {
                var t, e, r, i, s, a, n = this.canvasContext;
                n.font = this.values.fValue,
                n.lineCap = "butt",
                n.lineJoin = "miter",
                n.miterLimit = 4,
                this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
                var o, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
                e = l.length;
                var p, m, f = null, c = null, d = null;
                for (t = 0; t < e; t += 1)
                    if (!l[t].n) {
                        if ((o = h[t]) && (this.globalData.renderer.save(),
                        this.globalData.renderer.ctxTransform(o.p),
                        this.globalData.renderer.ctxOpacity(o.o)),
                        this.fill) {
                            for (o && o.fc ? f !== o.fc && (f = o.fc,
                            n.fillStyle = o.fc) : f !== this.values.fill && (f = this.values.fill,
                            n.fillStyle = this.values.fill),
                            i = (p = this.textSpans[t].elem).length,
                            this.globalData.canvasContext.beginPath(),
                            r = 0; r < i; r += 1)
                                for (a = (m = p[r]).length,
                                this.globalData.canvasContext.moveTo(m[0], m[1]),
                                s = 2; s < a; s += 6)
                                    this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]);
                            this.globalData.canvasContext.closePath(),
                            this.globalData.canvasContext.fill()
                        }
                        if (this.stroke) {
                            for (o && o.sw ? d !== o.sw && (d = o.sw,
                            n.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth,
                            n.lineWidth = this.values.sWidth),
                            o && o.sc ? c !== o.sc && (c = o.sc,
                            n.strokeStyle = o.sc) : c !== this.values.stroke && (c = this.values.stroke,
                            n.strokeStyle = this.values.stroke),
                            i = (p = this.textSpans[t].elem).length,
                            this.globalData.canvasContext.beginPath(),
                            r = 0; r < i; r += 1)
                                for (a = (m = p[r]).length,
                                this.globalData.canvasContext.moveTo(m[0], m[1]),
                                s = 2; s < a; s += 6)
                                    this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]);
                            this.globalData.canvasContext.closePath(),
                            this.globalData.canvasContext.stroke()
                        }
                        o && this.globalData.renderer.restore()
                    }
            }
            ,
            CVEffects.prototype.renderFrame = function() {}
            ,
            HBaseElement.prototype = {
                checkBlendMode: function() {},
                initRendererElement: function() {
                    this.baseElement = createTag(this.data.tg || "div"),
                    this.data.hasMask ? (this.svgElement = createNS("svg"),
                    this.layerElement = createNS("g"),
                    this.maskedElement = this.layerElement,
                    this.svgElement.appendChild(this.layerElement),
                    this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement,
                    styleDiv(this.baseElement)
                },
                createContainerElements: function() {
                    this.renderableEffectsManager = new CVEffects(this),
                    this.transformedElement = this.baseElement,
                    this.maskedElement = this.layerElement,
                    this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                    this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                    0 !== this.data.bm && this.setBlendMode()
                },
                renderElement: function() {
                    var t = this.transformedElement ? this.transformedElement.style : {};
                    if (this.finalTransform._matMdf) {
                        var e = this.finalTransform.mat.toCSS();
                        t.transform = e,
                        t.webkitTransform = e
                    }
                    this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v)
                },
                renderFrame: function() {
                    this.data.hd || this.hidden || (this.renderTransform(),
                    this.renderRenderable(),
                    this.renderElement(),
                    this.renderInnerContent(),
                    this._isFirstFrame && (this._isFirstFrame = !1))
                },
                destroy: function() {
                    this.layerElement = null,
                    this.transformedElement = null,
                    this.matteElement && (this.matteElement = null),
                    this.maskManager && (this.maskManager.destroy(),
                    this.maskManager = null)
                },
                createRenderableComponents: function() {
                    this.maskManager = new MaskElement(this.data,this,this.globalData)
                },
                addEffects: function() {},
                setMatte: function() {}
            },
            HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement,
            HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy,
            HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting,
            extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement),
            HSolidElement.prototype.createContent = function() {
                var t;
                this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw),
                t.setAttribute("height", this.data.sh),
                t.setAttribute("fill", this.data.sc),
                this.svgElement.setAttribute("width", this.data.sw),
                this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px",
                t.style.height = this.data.sh + "px",
                t.style.backgroundColor = this.data.sc),
                this.layerElement.appendChild(t)
            }
            ,
            extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement),
            HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements,
            HCompElement.prototype.createContainerElements = function() {
                this._createBaseContainerElements(),
                this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w),
                this.svgElement.setAttribute("height", this.data.h),
                this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
            }
            ,
            HCompElement.prototype.addTo3dContainer = function(t, e) {
                for (var r, i = 0; i < e; )
                    this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()),
                    i += 1;
                r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t)
            }
            ,
            extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement),
            HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent,
            HShapeElement.prototype.createContent = function() {
                var t;
                if (this.baseElement.style.fontSize = 0,
                this.data.hasMask)
                    this.layerElement.appendChild(this.shapesContainer),
                    t = this.svgElement;
                else {
                    t = createNS("svg");
                    var e = this.comp.data ? this.comp.data : this.globalData.compSize;
                    t.setAttribute("width", e.w),
                    t.setAttribute("height", e.h),
                    t.appendChild(this.shapesContainer),
                    this.layerElement.appendChild(t)
                }
                this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0),
                this.filterUniqueShapes(),
                this.shapeCont = t
            }
            ,
            HShapeElement.prototype.getTransformedPoint = function(t, e) {
                var r, i = t.length;
                for (r = 0; r < i; r += 1)
                    e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
                return e
            }
            ,
            HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
                var r, i, s, a, n, o = t.sh.v, h = t.transformers, l = o._length;
                if (!(l <= 1)) {
                    for (r = 0; r < l - 1; r += 1)
                        i = this.getTransformedPoint(h, o.v[r]),
                        s = this.getTransformedPoint(h, o.o[r]),
                        a = this.getTransformedPoint(h, o.i[r + 1]),
                        n = this.getTransformedPoint(h, o.v[r + 1]),
                        this.checkBounds(i, s, a, n, e);
                    o.c && (i = this.getTransformedPoint(h, o.v[r]),
                    s = this.getTransformedPoint(h, o.o[r]),
                    a = this.getTransformedPoint(h, o.i[0]),
                    n = this.getTransformedPoint(h, o.v[0]),
                    this.checkBounds(i, s, a, n, e))
                }
            }
            ,
            HShapeElement.prototype.checkBounds = function(t, e, r, i, s) {
                this.getBoundsOfCurve(t, e, r, i);
                var a = this.shapeBoundingBox;
                s.x = bmMin(a.left, s.x),
                s.xMax = bmMax(a.right, s.xMax),
                s.y = bmMin(a.top, s.y),
                s.yMax = bmMax(a.bottom, s.yMax)
            }
            ,
            HShapeElement.prototype.shapeBoundingBox = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            HShapeElement.prototype.tempBoundingBox = {
                x: 0,
                xMax: 0,
                y: 0,
                yMax: 0,
                width: 0,
                height: 0
            },
            HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
                for (var s, a, n, o, h, l, p, m = [[t[0], i[0]], [t[1], i[1]]], f = 0; f < 2; ++f)
                    a = 6 * t[f] - 12 * e[f] + 6 * r[f],
                    s = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * i[f],
                    n = 3 * e[f] - 3 * t[f],
                    a |= 0,
                    n |= 0,
                    0 === (s |= 0) && 0 === a || (0 === s ? (o = -n / a) > 0 && o < 1 && m[f].push(this.calculateF(o, t, e, r, i, f)) : (h = a * a - 4 * n * s) >= 0 && ((l = (-a + bmSqrt(h)) / (2 * s)) > 0 && l < 1 && m[f].push(this.calculateF(l, t, e, r, i, f)),
                    (p = (-a - bmSqrt(h)) / (2 * s)) > 0 && p < 1 && m[f].push(this.calculateF(p, t, e, r, i, f))));
                this.shapeBoundingBox.left = bmMin.apply(null, m[0]),
                this.shapeBoundingBox.top = bmMin.apply(null, m[1]),
                this.shapeBoundingBox.right = bmMax.apply(null, m[0]),
                this.shapeBoundingBox.bottom = bmMax.apply(null, m[1])
            }
            ,
            HShapeElement.prototype.calculateF = function(t, e, r, i, s, a) {
                return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bmPow(t, 2) * i[a] + bmPow(t, 3) * s[a]
            }
            ,
            HShapeElement.prototype.calculateBoundingBox = function(t, e) {
                var r, i = t.length;
                for (r = 0; r < i; r += 1)
                    t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e)
            }
            ,
            HShapeElement.prototype.currentBoxContains = function(t) {
                return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
            }
            ,
            HShapeElement.prototype.renderInnerContent = function() {
                if (this._renderShapeFrame(),
                !this.hidden && (this._isFirstFrame || this._mdf)) {
                    var t = this.tempBoundingBox
                      , e = 999999;
                    if (t.x = e,
                    t.xMax = -e,
                    t.y = e,
                    t.yMax = -e,
                    this.calculateBoundingBox(this.itemsData, t),
                    t.width = t.xMax < t.x ? 0 : t.xMax - t.x,
                    t.height = t.yMax < t.y ? 0 : t.yMax - t.y,
                    this.currentBoxContains(t))
                        return;
                    var r = !1;
                    if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width,
                    this.shapeCont.setAttribute("width", t.width),
                    r = !0),
                    this.currentBBox.h !== t.height && (this.currentBBox.h = t.height,
                    this.shapeCont.setAttribute("height", t.height),
                    r = !0),
                    r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
                        this.currentBBox.w = t.width,
                        this.currentBBox.h = t.height,
                        this.currentBBox.x = t.x,
                        this.currentBBox.y = t.y,
                        this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
                        var i = this.shapeCont.style
                          , s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                        i.transform = s,
                        i.webkitTransform = s
                    }
                }
            }
            ,
            extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement),
            HTextElement.prototype.createContent = function() {
                if (this.isMasked = this.checkMasks(),
                this.isMasked) {
                    this.renderType = "svg",
                    this.compW = this.comp.data.w,
                    this.compH = this.comp.data.h,
                    this.svgElement.setAttribute("width", this.compW),
                    this.svgElement.setAttribute("height", this.compH);
                    var t = createNS("g");
                    this.maskedElement.appendChild(t),
                    this.innerElem = t
                } else
                    this.renderType = "html",
                    this.innerElem = this.layerElement;
                this.checkParenting()
            }
            ,
            HTextElement.prototype.buildNewText = function() {
                var t = this.textProperty.currentData;
                this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
                var e = this.innerElem.style
                  , r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
                e.fill = r,
                e.color = r,
                t.sc && (e.stroke = this.buildColor(t.sc),
                e.strokeWidth = t.sw + "px");
                var i, s, a = this.globalData.fontManager.getFontByName(t.f);
                if (!this.globalData.fontManager.chars)
                    if (e.fontSize = t.finalSize + "px",
                    e.lineHeight = t.finalSize + "px",
                    a.fClass)
                        this.innerElem.className = a.fClass;
                    else {
                        e.fontFamily = a.fFamily;
                        var n = t.fWeight
                          , o = t.fStyle;
                        e.fontStyle = o,
                        e.fontWeight = n
                    }
                var h, l, p, m = t.l;
                s = m.length;
                var f, c = this.mHelper, d = "", u = 0;
                for (i = 0; i < s; i += 1) {
                    if (this.globalData.fontManager.chars ? (this.textPaths[u] ? h = this.textPaths[u] : ((h = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]),
                    h.setAttribute("stroke-linejoin", lineJoinEnum[2]),
                    h.setAttribute("stroke-miterlimit", "4")),
                    this.isMasked || (this.textSpans[u] ? p = (l = this.textSpans[u]).children[0] : ((l = createTag("div")).style.lineHeight = 0,
                    (p = createNS("svg")).appendChild(h),
                    styleDiv(l)))) : this.isMasked ? h = this.textPaths[u] ? this.textPaths[u] : createNS("text") : this.textSpans[u] ? (l = this.textSpans[u],
                    h = this.textPaths[u]) : (styleDiv(l = createTag("span")),
                    styleDiv(h = createTag("span")),
                    l.appendChild(h)),
                    this.globalData.fontManager.chars) {
                        var y, g = this.globalData.fontManager.getCharData(t.finalText[i], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                        if (y = g ? g.data : null,
                        c.reset(),
                        y && y.shapes && (f = y.shapes[0].it,
                        c.scale(t.finalSize / 100, t.finalSize / 100),
                        d = this.createPathShape(c, f),
                        h.setAttribute("d", d)),
                        this.isMasked)
                            this.innerElem.appendChild(h);
                        else {
                            if (this.innerElem.appendChild(l),
                            y && y.shapes) {
                                document.body.appendChild(p);
                                var v = p.getBBox();
                                p.setAttribute("width", v.width + 2),
                                p.setAttribute("height", v.height + 2),
                                p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
                                var b = p.style
                                  , P = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
                                b.transform = P,
                                b.webkitTransform = P,
                                m[i].yOffset = v.y - 1
                            } else
                                p.setAttribute("width", 1),
                                p.setAttribute("height", 1);
                            l.appendChild(p)
                        }
                    } else if (h.textContent = m[i].val,
                    h.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"),
                    this.isMasked)
                        this.innerElem.appendChild(h);
                    else {
                        this.innerElem.appendChild(l);
                        var E = h.style
                          , x = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
                        E.transform = x,
                        E.webkitTransform = x
                    }
                    this.isMasked ? this.textSpans[u] = h : this.textSpans[u] = l,
                    this.textSpans[u].style.display = "block",
                    this.textPaths[u] = h,
                    u += 1
                }
                for (; u < this.textSpans.length; )
                    this.textSpans[u].style.display = "none",
                    u += 1
            }
            ,
            HTextElement.prototype.renderInnerContent = function() {
                var t;
                if (this.data.singleShape) {
                    if (!this._isFirstFrame && !this.lettersChangedFlag)
                        return;
                    if (this.isMasked && this.finalTransform._matMdf) {
                        this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH),
                        t = this.svgElement.style;
                        var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
                        t.transform = e,
                        t.webkitTransform = e
                    }
                }
                if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag),
                this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
                    var r, i, s, a, n, o = 0, h = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
                    for (i = l.length,
                    r = 0; r < i; r += 1)
                        l[r].n ? o += 1 : (a = this.textSpans[r],
                        n = this.textPaths[r],
                        s = h[o],
                        o += 1,
                        s._mdf.m && (this.isMasked ? a.setAttribute("transform", s.m) : (a.style.webkitTransform = s.m,
                        a.style.transform = s.m)),
                        a.style.opacity = s.o,
                        s.sw && s._mdf.sw && n.setAttribute("stroke-width", s.sw),
                        s.sc && s._mdf.sc && n.setAttribute("stroke", s.sc),
                        s.fc && s._mdf.fc && (n.setAttribute("fill", s.fc),
                        n.style.color = s.fc));
                    if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                        var p = this.innerElem.getBBox();
                        this.currentBBox.w !== p.width && (this.currentBBox.w = p.width,
                        this.svgElement.setAttribute("width", p.width)),
                        this.currentBBox.h !== p.height && (this.currentBBox.h = p.height,
                        this.svgElement.setAttribute("height", p.height));
                        if (this.currentBBox.w !== p.width + 2 || this.currentBBox.h !== p.height + 2 || this.currentBBox.x !== p.x - 1 || this.currentBBox.y !== p.y - 1) {
                            this.currentBBox.w = p.width + 2,
                            this.currentBBox.h = p.height + 2,
                            this.currentBBox.x = p.x - 1,
                            this.currentBBox.y = p.y - 1,
                            this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h),
                            t = this.svgElement.style;
                            var m = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                            t.transform = m,
                            t.webkitTransform = m
                        }
                    }
                }
            }
            ,
            extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement),
            HImageElement.prototype.createContent = function() {
                var t = this.globalData.getAssetsPath(this.assetData)
                  , e = new Image;
                this.data.hasMask ? (this.imageElem = createNS("image"),
                this.imageElem.setAttribute("width", this.assetData.w + "px"),
                this.imageElem.setAttribute("height", this.assetData.h + "px"),
                this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
                this.layerElement.appendChild(this.imageElem),
                this.baseElement.setAttribute("width", this.assetData.w),
                this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e),
                e.crossOrigin = "anonymous",
                e.src = t,
                this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
            }
            ,
            extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
            HCameraElement.prototype.setup = function() {
                var t, e, r, i, s = this.comp.threeDElements.length;
                for (t = 0; t < s; t += 1)
                    if ("3d" === (e = this.comp.threeDElements[t]).type) {
                        r = e.perspectiveElem.style,
                        i = e.container.style;
                        var a = this.pe.v + "px"
                          , n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
                        r.perspective = a,
                        r.webkitPerspective = a,
                        i.transformOrigin = "0px 0px 0px",
                        i.mozTransformOrigin = "0px 0px 0px",
                        i.webkitTransformOrigin = "0px 0px 0px",
                        r.transform = n,
                        r.webkitTransform = n
                    }
            }
            ,
            HCameraElement.prototype.createElements = function() {}
            ,
            HCameraElement.prototype.hide = function() {}
            ,
            HCameraElement.prototype.renderFrame = function() {
                var t, e, r = this._isFirstFrame;
                if (this.hierarchy)
                    for (e = this.hierarchy.length,
                    t = 0; t < e; t += 1)
                        r = this.hierarchy[t].finalTransform.mProp._mdf || r;
                if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
                    if (this.mat.reset(),
                    this.hierarchy)
                        for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
                            var i = this.hierarchy[t].finalTransform.mProp;
                            this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]),
                            this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]),
                            this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v),
                            this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]),
                            this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                        }
                    if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
                    this.a) {
                        var s;
                        s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                        var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2))
                          , n = [s[0] / a, s[1] / a, s[2] / a]
                          , o = Math.sqrt(n[2] * n[2] + n[0] * n[0])
                          , h = Math.atan2(n[1], o)
                          , l = Math.atan2(n[0], -n[2]);
                        this.mat.rotateY(l).rotateX(-h)
                    }
                    this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
                    this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),
                    this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0),
                    this.mat.translate(0, 0, this.pe.v);
                    var p = !this._prevMat.equals(this.mat);
                    if ((p || this.pe._mdf) && this.comp.threeDElements) {
                        var m, f, c;
                        for (e = this.comp.threeDElements.length,
                        t = 0; t < e; t += 1)
                            if ("3d" === (m = this.comp.threeDElements[t]).type) {
                                if (p) {
                                    var d = this.mat.toCSS();
                                    (c = m.container.style).transform = d,
                                    c.webkitTransform = d
                                }
                                this.pe._mdf && ((f = m.perspectiveElem.style).perspective = this.pe.v + "px",
                                f.webkitPerspective = this.pe.v + "px")
                            }
                        this.mat.clone(this._prevMat)
                    }
                }
                this._isFirstFrame = !1
            }
            ,
            HCameraElement.prototype.prepareFrame = function(t) {
                this.prepareProperties(t, !0)
            }
            ,
            HCameraElement.prototype.destroy = function() {}
            ,
            HCameraElement.prototype.getBaseElement = function() {
                return null
            }
            ,
            HEffects.prototype.renderFrame = function() {}
            ;
            var animationManager = function() {
                var t = {}
                  , e = []
                  , r = 0
                  , i = 0
                  , s = 0
                  , a = !0
                  , n = !1;
                function o(t) {
                    for (var r = 0, s = t.target; r < i; )
                        e[r].animation === s && (e.splice(r, 1),
                        r -= 1,
                        i -= 1,
                        s.isPaused || p()),
                        r += 1
                }
                function h(t, r) {
                    if (!t)
                        return null;
                    for (var s = 0; s < i; ) {
                        if (e[s].elem === t && null !== e[s].elem)
                            return e[s].animation;
                        s += 1
                    }
                    var a = new AnimationItem;
                    return m(a, t),
                    a.setData(t, r),
                    a
                }
                function l() {
                    s += 1,
                    d()
                }
                function p() {
                    s -= 1
                }
                function m(t, r) {
                    t.addEventListener("destroy", o),
                    t.addEventListener("_active", l),
                    t.addEventListener("_idle", p),
                    e.push({
                        elem: r,
                        animation: t
                    }),
                    i += 1
                }
                function f(t) {
                    var o, h = t - r;
                    for (o = 0; o < i; o += 1)
                        e[o].animation.advanceTime(h);
                    r = t,
                    s && !n ? window.requestAnimationFrame(f) : a = !0
                }
                function c(t) {
                    r = t,
                    window.requestAnimationFrame(f)
                }
                function d() {
                    !n && s && a && (window.requestAnimationFrame(c),
                    a = !1)
                }
                return t.registerAnimation = h,
                t.loadAnimation = function(t) {
                    var e = new AnimationItem;
                    return m(e, null),
                    e.setParams(t),
                    e
                }
                ,
                t.setSpeed = function(t, r) {
                    var s;
                    for (s = 0; s < i; s += 1)
                        e[s].animation.setSpeed(t, r)
                }
                ,
                t.setDirection = function(t, r) {
                    var s;
                    for (s = 0; s < i; s += 1)
                        e[s].animation.setDirection(t, r)
                }
                ,
                t.play = function(t) {
                    var r;
                    for (r = 0; r < i; r += 1)
                        e[r].animation.play(t)
                }
                ,
                t.pause = function(t) {
                    var r;
                    for (r = 0; r < i; r += 1)
                        e[r].animation.pause(t)
                }
                ,
                t.stop = function(t) {
                    var r;
                    for (r = 0; r < i; r += 1)
                        e[r].animation.stop(t)
                }
                ,
                t.togglePause = function(t) {
                    var r;
                    for (r = 0; r < i; r += 1)
                        e[r].animation.togglePause(t)
                }
                ,
                t.searchAnimations = function(t, e, r) {
                    var i, s = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), a = s.length;
                    for (i = 0; i < a; i += 1)
                        r && s[i].setAttribute("data-bm-type", r),
                        h(s[i], t);
                    if (e && 0 === a) {
                        r || (r = "svg");
                        var n = document.getElementsByTagName("body")[0];
                        n.innerText = "";
                        var o = createTag("div");
                        o.style.width = "100%",
                        o.style.height = "100%",
                        o.setAttribute("data-bm-type", r),
                        n.appendChild(o),
                        h(o, t)
                    }
                }
                ,
                t.resize = function() {
                    var t;
                    for (t = 0; t < i; t += 1)
                        e[t].animation.resize()
                }
                ,
                t.goToAndStop = function(t, r, s) {
                    var a;
                    for (a = 0; a < i; a += 1)
                        e[a].animation.goToAndStop(t, r, s)
                }
                ,
                t.destroy = function(t) {
                    var r;
                    for (r = i - 1; r >= 0; r -= 1)
                        e[r].animation.destroy(t)
                }
                ,
                t.freeze = function() {
                    n = !0
                }
                ,
                t.unfreeze = function() {
                    n = !1,
                    d()
                }
                ,
                t.setVolume = function(t, r) {
                    var s;
                    for (s = 0; s < i; s += 1)
                        e[s].animation.setVolume(t, r)
                }
                ,
                t.mute = function(t) {
                    var r;
                    for (r = 0; r < i; r += 1)
                        e[r].animation.mute(t)
                }
                ,
                t.unmute = function(t) {
                    var r;
                    for (r = 0; r < i; r += 1)
                        e[r].animation.unmute(t)
                }
                ,
                t.getRegisteredAnimations = function() {
                    var t, r = e.length, i = [];
                    for (t = 0; t < r; t += 1)
                        i.push(e[t].animation);
                    return i
                }
                ,
                t
            }()
              , AnimationItem = function() {
                this._cbs = [],
                this.name = "",
                this.path = "",
                this.isLoaded = !1,
                this.currentFrame = 0,
                this.currentRawFrame = 0,
                this.firstFrame = 0,
                this.totalFrames = 0,
                this.frameRate = 0,
                this.frameMult = 0,
                this.playSpeed = 1,
                this.playDirection = 1,
                this.playCount = 0,
                this.animationData = {},
                this.assets = [],
                this.isPaused = !0,
                this.autoplay = !1,
                this.loop = !0,
                this.renderer = null,
                this.animationID = createElementID(),
                this.assetsPath = "",
                this.timeCompleted = 0,
                this.segmentPos = 0,
                this.isSubframeEnabled = subframeEnabled,
                this.segments = [],
                this._idle = !0,
                this._completedLoop = !1,
                this.projectInterface = ProjectInterface(),
                this.imagePreloader = new ImagePreloader,
                this.audioController = audioControllerFactory(),
                this.markers = []
            };
            extendPrototype([BaseEvent], AnimationItem),
            AnimationItem.prototype.setParams = function(t) {
                (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
                var e = "svg";
                switch (t.animType ? e = t.animType : t.renderer && (e = t.renderer),
                e) {
                case "canvas":
                    this.renderer = new CanvasRenderer(this,t.rendererSettings);
                    break;
                case "svg":
                    this.renderer = new SVGRenderer(this,t.rendererSettings);
                    break;
                default:
                    this.renderer = new HybridRenderer(this,t.rendererSettings);
                }
                this.imagePreloader.setCacheType(e, this.renderer.globalData.defs),
                this.renderer.setProjectInterface(this.projectInterface),
                this.animType = e,
                "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? this.loop = !0 : !1 === t.loop ? this.loop = !1 : this.loop = parseInt(t.loop, 10),
                this.autoplay = !("autoplay"in t) || t.autoplay,
                this.name = t.name ? t.name : "",
                this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments,
                this.assetsPath = t.assetsPath,
                this.initialSegment = t.initialSegment,
                t.audioFactory && this.audioController.setAudioFactory(t.audioFactory),
                t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1),
                this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1),
                this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")),
                assetLoader.load(t.path, this.configAnimation.bind(this), function() {
                    this.trigger("data_failed")
                }
                .bind(this)))
            }
            ,
            AnimationItem.prototype.setData = function(t, e) {
                e && "object" != typeof e && (e = JSON.parse(e));
                var r = {
                    wrapper: t,
                    animationData: e
                }
                  , i = t.attributes;
                r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "",
                r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
                var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
                "false" === s ? r.loop = !1 : "true" === s ? r.loop = !0 : "" !== s && (r.loop = parseInt(s, 10));
                var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
                r.autoplay = "false" !== a,
                r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "",
                "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1),
                this.setParams(r)
            }
            ,
            AnimationItem.prototype.includeLayers = function(t) {
                t.op > this.animationData.op && (this.animationData.op = t.op,
                this.totalFrames = Math.floor(t.op - this.animationData.ip));
                var e, r, i = this.animationData.layers, s = i.length, a = t.layers, n = a.length;
                for (r = 0; r < n; r += 1)
                    for (e = 0; e < s; ) {
                        if (i[e].id === a[r].id) {
                            i[e] = a[r];
                            break
                        }
                        e += 1
                    }
                if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars),
                this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)),
                t.assets)
                    for (s = t.assets.length,
                    e = 0; e < s; e += 1)
                        this.animationData.assets.push(t.assets[e]);
                this.animationData.__complete = !1,
                dataManager.completeData(this.animationData, this.renderer.globalData.fontManager),
                this.renderer.includeLayers(t.layers),
                expressionsPlugin && expressionsPlugin.initExpressions(this),
                this.loadNextSegment()
            }
            ,
            AnimationItem.prototype.loadNextSegment = function() {
                var t = this.animationData.segments;
                if (!t || 0 === t.length || !this.autoloadSegments)
                    return this.trigger("data_ready"),
                    void (this.timeCompleted = this.totalFrames);
                var e = t.shift();
                this.timeCompleted = e.time * this.frameRate;
                var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
                this.segmentPos += 1,
                assetLoader.load(r, this.includeLayers.bind(this), function() {
                    this.trigger("data_failed")
                }
                .bind(this))
            }
            ,
            AnimationItem.prototype.loadSegments = function() {
                this.animationData.segments || (this.timeCompleted = this.totalFrames),
                this.loadNextSegment()
            }
            ,
            AnimationItem.prototype.imagesLoaded = function() {
                this.trigger("loaded_images"),
                this.checkLoaded()
            }
            ,
            AnimationItem.prototype.preloadImages = function() {
                this.imagePreloader.setAssetsPath(this.assetsPath),
                this.imagePreloader.setPath(this.path),
                this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
            }
            ,
            AnimationItem.prototype.configAnimation = function(t) {
                if (this.renderer)
                    try {
                        this.animationData = t,
                        this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]),
                        this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip),
                        this.firstFrame = Math.round(this.animationData.ip)),
                        this.renderer.configAnimation(t),
                        t.assets || (t.assets = []),
                        this.assets = this.animationData.assets,
                        this.frameRate = this.animationData.fr,
                        this.frameMult = this.animationData.fr / 1e3,
                        this.renderer.searchExtraCompositions(t.assets),
                        this.markers = markerParser(t.markers || []),
                        this.trigger("config_ready"),
                        this.preloadImages(),
                        this.loadSegments(),
                        this.updaFrameModifier(),
                        this.waitForFontsLoaded(),
                        this.isPaused && this.audioController.pause()
                    } catch (e) {
                        this.triggerConfigError(e)
                    }
            }
            ,
            AnimationItem.prototype.waitForFontsLoaded = function() {
                this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
            }
            ,
            AnimationItem.prototype.checkLoaded = function() {
                !this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages() && (this.isLoaded = !0,
                dataManager.completeData(this.animationData, this.renderer.globalData.fontManager),
                expressionsPlugin && expressionsPlugin.initExpressions(this),
                this.renderer.initItems(),
                setTimeout(function() {
                    this.trigger("DOMLoaded")
                }
                .bind(this), 0),
                this.gotoFrame(),
                this.autoplay && this.play())
            }
            ,
            AnimationItem.prototype.resize = function() {
                this.renderer.updateContainerSize()
            }
            ,
            AnimationItem.prototype.setSubframe = function(t) {
                this.isSubframeEnabled = !!t
            }
            ,
            AnimationItem.prototype.gotoFrame = function() {
                this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame,
                this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted),
                this.trigger("enterFrame"),
                this.renderFrame()
            }
            ,
            AnimationItem.prototype.renderFrame = function() {
                if (!1 !== this.isLoaded && this.renderer)
                    try {
                        this.renderer.renderFrame(this.currentFrame + this.firstFrame)
                    } catch (t) {
                        this.triggerRenderFrameError(t)
                    }
            }
            ,
            AnimationItem.prototype.play = function(t) {
                t && this.name !== t || !0 === this.isPaused && (this.isPaused = !1,
                this.audioController.resume(),
                this._idle && (this._idle = !1,
                this.trigger("_active")))
            }
            ,
            AnimationItem.prototype.pause = function(t) {
                t && this.name !== t || !1 === this.isPaused && (this.isPaused = !0,
                this._idle = !0,
                this.trigger("_idle"),
                this.audioController.pause())
            }
            ,
            AnimationItem.prototype.togglePause = function(t) {
                t && this.name !== t || (!0 === this.isPaused ? this.play() : this.pause())
            }
            ,
            AnimationItem.prototype.stop = function(t) {
                t && this.name !== t || (this.pause(),
                this.playCount = 0,
                this._completedLoop = !1,
                this.setCurrentRawFrameValue(0))
            }
            ,
            AnimationItem.prototype.getMarkerData = function(t) {
                for (var e, r = 0; r < this.markers.length; r += 1)
                    if ((e = this.markers[r]).payload && e.payload.name === t)
                        return e;
                return null
            }
            ,
            AnimationItem.prototype.goToAndStop = function(t, e, r) {
                if (!r || this.name === r) {
                    var i = Number(t);
                    if (isNaN(i)) {
                        var s = this.getMarkerData(t);
                        s && this.goToAndStop(s.time, !0)
                    } else
                        e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
                    this.pause()
                }
            }
            ,
            AnimationItem.prototype.goToAndPlay = function(t, e, r) {
                if (!r || this.name === r) {
                    var i = Number(t);
                    if (isNaN(i)) {
                        var s = this.getMarkerData(t);
                        s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0))
                    } else
                        this.goToAndStop(i, e, r);
                    this.play()
                }
            }
            ,
            AnimationItem.prototype.advanceTime = function(t) {
                if (!0 !== this.isPaused && !1 !== this.isLoaded) {
                    var e = this.currentRawFrame + t * this.frameModifier
                      , r = !1;
                    e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1,
                    this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames),
                    this._completedLoop = !0,
                    this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0,
                    e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0,
                    e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames),
                    this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e),
                    r && (this.setCurrentRawFrameValue(e),
                    this.pause(),
                    this.trigger("complete"))
                }
            }
            ,
            AnimationItem.prototype.adjustSegment = function(t, e) {
                this.playCount = 0,
                t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)),
                this.totalFrames = t[0] - t[1],
                this.timeCompleted = this.totalFrames,
                this.firstFrame = t[1],
                this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)),
                this.totalFrames = t[1] - t[0],
                this.timeCompleted = this.totalFrames,
                this.firstFrame = t[0],
                this.setCurrentRawFrameValue(.001 + e)),
                this.trigger("segmentStart")
            }
            ,
            AnimationItem.prototype.setSegment = function(t, e) {
                var r = -1;
                this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)),
                this.firstFrame = t,
                this.totalFrames = e - t,
                this.timeCompleted = this.totalFrames,
                -1 !== r && this.goToAndStop(r, !0)
            }
            ,
            AnimationItem.prototype.playSegments = function(t, e) {
                if (e && (this.segments.length = 0),
                "object" == typeof t[0]) {
                    var r, i = t.length;
                    for (r = 0; r < i; r += 1)
                        this.segments.push(t[r])
                } else
                    this.segments.push(t);
                this.segments.length && e && this.adjustSegment(this.segments.shift(), 0),
                this.isPaused && this.play()
            }
            ,
            AnimationItem.prototype.resetSegments = function(t) {
                this.segments.length = 0,
                this.segments.push([this.animationData.ip, this.animationData.op]),
                t && this.checkSegments(0)
            }
            ,
            AnimationItem.prototype.checkSegments = function(t) {
                return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t),
                !0)
            }
            ,
            AnimationItem.prototype.destroy = function(t) {
                t && this.name !== t || !this.renderer || (this.renderer.destroy(),
                this.imagePreloader.destroy(),
                this.trigger("destroy"),
                this._cbs = null,
                this.onEnterFrame = null,
                this.onLoopComplete = null,
                this.onComplete = null,
                this.onSegmentStart = null,
                this.onDestroy = null,
                this.renderer = null,
                this.renderer = null,
                this.imagePreloader = null,
                this.projectInterface = null)
            }
            ,
            AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
                this.currentRawFrame = t,
                this.gotoFrame()
            }
            ,
            AnimationItem.prototype.setSpeed = function(t) {
                this.playSpeed = t,
                this.updaFrameModifier()
            }
            ,
            AnimationItem.prototype.setDirection = function(t) {
                this.playDirection = t < 0 ? -1 : 1,
                this.updaFrameModifier()
            }
            ,
            AnimationItem.prototype.setVolume = function(t, e) {
                e && this.name !== e || this.audioController.setVolume(t)
            }
            ,
            AnimationItem.prototype.getVolume = function() {
                return this.audioController.getVolume()
            }
            ,
            AnimationItem.prototype.mute = function(t) {
                t && this.name !== t || this.audioController.mute()
            }
            ,
            AnimationItem.prototype.unmute = function(t) {
                t && this.name !== t || this.audioController.unmute()
            }
            ,
            AnimationItem.prototype.updaFrameModifier = function() {
                this.frameModifier = this.frameMult * this.playSpeed * this.playDirection,
                this.audioController.setRate(this.playSpeed * this.playDirection)
            }
            ,
            AnimationItem.prototype.getPath = function() {
                return this.path
            }
            ,
            AnimationItem.prototype.getAssetsPath = function(t) {
                var e = "";
                if (t.e)
                    e = t.p;
                else if (this.assetsPath) {
                    var r = t.p;
                    -1 !== r.indexOf("images/") && (r = r.split("/")[1]),
                    e = this.assetsPath + r
                } else
                    e = this.path,
                    e += t.u ? t.u : "",
                    e += t.p;
                return e
            }
            ,
            AnimationItem.prototype.getAssetData = function(t) {
                for (var e = 0, r = this.assets.length; e < r; ) {
                    if (t === this.assets[e].id)
                        return this.assets[e];
                    e += 1
                }
                return null
            }
            ,
            AnimationItem.prototype.hide = function() {
                this.renderer.hide()
            }
            ,
            AnimationItem.prototype.show = function() {
                this.renderer.show()
            }
            ,
            AnimationItem.prototype.getDuration = function(t) {
                return t ? this.totalFrames : this.totalFrames / this.frameRate
            }
            ,
            AnimationItem.prototype.trigger = function(t) {
                if (this._cbs && this._cbs[t])
                    switch (t) {
                    case "enterFrame":
                        this.triggerEvent(t, new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameModifier));
                        break;
                    case "loopComplete":
                        this.triggerEvent(t, new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));
                        break;
                    case "complete":
                        this.triggerEvent(t, new BMCompleteEvent(t,this.frameMult));
                        break;
                    case "segmentStart":
                        this.triggerEvent(t, new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));
                        break;
                    case "destroy":
                        this.triggerEvent(t, new BMDestroyEvent(t,this));
                        break;
                    default:
                        this.triggerEvent(t);
                    }
                "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),
                "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),
                "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t,this.frameMult)),
                "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),
                "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t,this))
            }
            ,
            AnimationItem.prototype.triggerRenderFrameError = function(t) {
                var e = new BMRenderFrameErrorEvent(t,this.currentFrame);
                this.triggerEvent("error", e),
                this.onError && this.onError.call(this, e)
            }
            ,
            AnimationItem.prototype.triggerConfigError = function(t) {
                var e = new BMConfigErrorEvent(t,this.currentFrame);
                this.triggerEvent("error", e),
                this.onError && this.onError.call(this, e)
            }
            ;
            var Expressions = function() {
                var t = {};
                return t.initExpressions = function(t) {
                    var e = 0
                      , r = [];
                    t.renderer.compInterface = CompExpressionInterface(t.renderer),
                    t.renderer.globalData.projectInterface.registerComposition(t.renderer),
                    t.renderer.globalData.pushExpression = function() {
                        e += 1
                    }
                    ,
                    t.renderer.globalData.popExpression = function() {
                        0 == (e -= 1) && function() {
                            var t, e = r.length;
                            for (t = 0; t < e; t += 1)
                                r[t].release();
                            r.length = 0
                        }()
                    }
                    ,
                    t.renderer.globalData.registerExpressionProperty = function(t) {
                        -1 === r.indexOf(t) && r.push(t)
                    }
                }
                ,
                t
            }();
            expressionsPlugin = Expressions;
            var ExpressionManager = function() {
                var ob = {}
                  , Math = BMMath
                  , window = null
                  , document = null
                  , XMLHttpRequest = null
                  , fetch = null;
                function $bm_isInstanceOfArray(t) {
                    return t.constructor === Array || t.constructor === Float32Array
                }
                function isNumerable(t, e) {
                    return "number" === t || "boolean" === t || "string" === t || e instanceof Number
                }
                function $bm_neg(t) {
                    var e = typeof t;
                    if ("number" === e || "boolean" === e || t instanceof Number)
                        return -t;
                    if ($bm_isInstanceOfArray(t)) {
                        var r, i = t.length, s = [];
                        for (r = 0; r < i; r += 1)
                            s[r] = -t[r];
                        return s
                    }
                    return t.propType ? t.v : -t
                }
                var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get
                  , easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get
                  , easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;
                function sum(t, e) {
                    var r = typeof t
                      , i = typeof e;
                    if ("string" === r || "string" === i)
                        return t + e;
                    if (isNumerable(r, t) && isNumerable(i, e))
                        return t + e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                        return (t = t.slice(0))[0] += e,
                        t;
                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                        return (e = e.slice(0))[0] = t + e[0],
                        e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n; )
                            ("number" == typeof t[s] || t[s]instanceof Number) && ("number" == typeof e[s] || e[s]instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s],
                            s += 1;
                        return o
                    }
                    return 0
                }
                var add = sum;
                function sub(t, e) {
                    var r = typeof t
                      , i = typeof e;
                    if (isNumerable(r, t) && isNumerable(i, e))
                        return "string" === r && (t = parseInt(t, 10)),
                        "string" === i && (e = parseInt(e, 10)),
                        t - e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
                        return (t = t.slice(0))[0] -= e,
                        t;
                    if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
                        return (e = e.slice(0))[0] = t - e[0],
                        e;
                    if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                        for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n; )
                            ("number" == typeof t[s] || t[s]instanceof Number) && ("number" == typeof e[s] || e[s]instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s],
                            s += 1;
                        return o
                    }
                    return 0
                }
                function mul(t, e) {
                    var r, i, s, a = typeof t, n = typeof e;
                    if (isNumerable(a, t) && isNumerable(n, e))
                        return t * e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                        for (s = t.length,
                        r = createTypedArray("float32", s),
                        i = 0; i < s; i += 1)
                            r[i] = t[i] * e;
                        return r
                    }
                    if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                        for (s = e.length,
                        r = createTypedArray("float32", s),
                        i = 0; i < s; i += 1)
                            r[i] = t * e[i];
                        return r
                    }
                    return 0
                }
                function div(t, e) {
                    var r, i, s, a = typeof t, n = typeof e;
                    if (isNumerable(a, t) && isNumerable(n, e))
                        return t / e;
                    if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                        for (s = t.length,
                        r = createTypedArray("float32", s),
                        i = 0; i < s; i += 1)
                            r[i] = t[i] / e;
                        return r
                    }
                    if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                        for (s = e.length,
                        r = createTypedArray("float32", s),
                        i = 0; i < s; i += 1)
                            r[i] = t / e[i];
                        return r
                    }
                    return 0
                }
                function mod(t, e) {
                    return "string" == typeof t && (t = parseInt(t, 10)),
                    "string" == typeof e && (e = parseInt(e, 10)),
                    t % e
                }
                var $bm_sum = sum
                  , $bm_sub = sub
                  , $bm_mul = mul
                  , $bm_div = div
                  , $bm_mod = mod;
                function clamp(t, e, r) {
                    if (e > r) {
                        var i = r;
                        r = e,
                        e = i
                    }
                    return Math.min(Math.max(t, e), r)
                }
                function radiansToDegrees(t) {
                    return t / degToRads
                }
                var radians_to_degrees = radiansToDegrees;
                function degreesToRadians(t) {
                    return t * degToRads
                }
                var degrees_to_radians = radiansToDegrees
                  , helperLengthArray = [0, 0, 0, 0, 0, 0];
                function length(t, e) {
                    if ("number" == typeof t || t instanceof Number)
                        return e = e || 0,
                        Math.abs(t - e);
                    var r;
                    e || (e = helperLengthArray);
                    var i = Math.min(t.length, e.length)
                      , s = 0;
                    for (r = 0; r < i; r += 1)
                        s += Math.pow(e[r] - t[r], 2);
                    return Math.sqrt(s)
                }
                function normalize(t) {
                    return div(t, length(t))
                }
                function rgbToHsl(t) {
                    var e, r, i = t[0], s = t[1], a = t[2], n = Math.max(i, s, a), o = Math.min(i, s, a), h = (n + o) / 2;
                    if (n === o)
                        e = 0,
                        r = 0;
                    else {
                        var l = n - o;
                        switch (r = h > .5 ? l / (2 - n - o) : l / (n + o),
                        n) {
                        case i:
                            e = (s - a) / l + (s < a ? 6 : 0);
                            break;
                        case s:
                            e = (a - i) / l + 2;
                            break;
                        case a:
                            e = (i - s) / l + 4;
                        }
                        e /= 6
                    }
                    return [e, r, h, t[3]]
                }
                function hue2rgb(t, e, r) {
                    return r < 0 && (r += 1),
                    r > 1 && (r -= 1),
                    r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                }
                function hslToRgb(t) {
                    var e, r, i, s = t[0], a = t[1], n = t[2];
                    if (0 === a)
                        e = n,
                        i = n,
                        r = n;
                    else {
                        var o = n < .5 ? n * (1 + a) : n + a - n * a
                          , h = 2 * n - o;
                        e = hue2rgb(h, o, s + 1 / 3),
                        r = hue2rgb(h, o, s),
                        i = hue2rgb(h, o, s - 1 / 3)
                    }
                    return [e, r, i, t[3]]
                }
                function linear(t, e, r, i, s) {
                    if (void 0 !== i && void 0 !== s || (i = e,
                    s = r,
                    e = 0,
                    r = 1),
                    r < e) {
                        var a = r;
                        r = e,
                        e = a
                    }
                    if (t <= e)
                        return i;
                    if (t >= r)
                        return s;
                    var n, o = r === e ? 0 : (t - e) / (r - e);
                    if (!i.length)
                        return i + (s - i) * o;
                    var h = i.length
                      , l = createTypedArray("float32", h);
                    for (n = 0; n < h; n += 1)
                        l[n] = i[n] + (s[n] - i[n]) * o;
                    return l
                }
                function random(t, e) {
                    if (void 0 === e && (void 0 === t ? (t = 0,
                    e = 1) : (e = t,
                    t = void 0)),
                    e.length) {
                        var r, i = e.length;
                        t || (t = createTypedArray("float32", i));
                        var s = createTypedArray("float32", i)
                          , a = BMMath.random();
                        for (r = 0; r < i; r += 1)
                            s[r] = t[r] + a * (e[r] - t[r]);
                        return s
                    }
                    return void 0 === t && (t = 0),
                    t + BMMath.random() * (e - t)
                }
                function createPath(t, e, r, i) {
                    var s, a = t.length, n = shapePool.newElement();
                    n.setPathData(!!i, a);
                    var o, h, l = [0, 0];
                    for (s = 0; s < a; s += 1)
                        o = e && e[s] ? e[s] : l,
                        h = r && r[s] ? r[s] : l,
                        n.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
                    return n
                }
                function initiateExpression(elem, data, property) {
                    var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = -1 !== val.indexOf("random"), elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
                    thisProperty.valueAtTime = thisProperty.getValueAtTime,
                    Object.defineProperty(thisProperty, "value", {
                        get: function() {
                            return thisProperty.v
                        }
                    }),
                    elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate,
                    elem.comp.displayStartTime = 0;
                    var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || !0 !== this.data.hd, wiggle = function(t, e) {
                        var r, i, s = this.pv.length ? this.pv.length : 1, a = createTypedArray("float32", s);
                        var n = Math.floor(5 * time);
                        for (r = 0,
                        i = 0; r < n; ) {
                            for (i = 0; i < s; i += 1)
                                a[i] += -e + 2 * e * BMMath.random();
                            r += 1
                        }
                        var o = 5 * time
                          , h = o - Math.floor(o)
                          , l = createTypedArray("float32", s);
                        if (s > 1) {
                            for (i = 0; i < s; i += 1)
                                l[i] = this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * h;
                            return l
                        }
                        return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h
                    }
                    .bind(this);
                    function loopInDuration(t, e) {
                        return loopIn(t, e, !0)
                    }
                    function loopOutDuration(t, e) {
                        return loopOut(t, e, !0)
                    }
                    thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty),
                    loop_in = loopIn),
                    thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty),
                    loop_out = loopOut),
                    thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)),
                    this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
                    this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                    var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue;
                    function lookAt(t, e) {
                        var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]]
                          , i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                        return [-Math.atan2(r[1], r[2]) / degToRads, i, 0]
                    }
                    function easeOut(t, e, r, i, s) {
                        return applyEase(easeOutBez, t, e, r, i, s)
                    }
                    function easeIn(t, e, r, i, s) {
                        return applyEase(easeInBez, t, e, r, i, s)
                    }
                    function ease(t, e, r, i, s) {
                        return applyEase(easeInOutBez, t, e, r, i, s)
                    }
                    function applyEase(t, e, r, i, s, a) {
                        void 0 === s ? (s = r,
                        a = i) : e = (e - r) / (i - r),
                        e > 1 ? e = 1 : e < 0 && (e = 0);
                        var n = t(e);
                        if ($bm_isInstanceOfArray(s)) {
                            var o, h = s.length, l = createTypedArray("float32", h);
                            for (o = 0; o < h; o += 1)
                                l[o] = (a[o] - s[o]) * n + s[o];
                            return l
                        }
                        return (a - s) * n + s
                    }
                    function nearestKey(t) {
                        var e, r, i, s = data.k.length;
                        if (data.k.length && "number" != typeof data.k[0]) {
                            if (r = -1,
                            (t *= elem.comp.globalData.frameRate) < data.k[0].t)
                                r = 1,
                                i = data.k[0].t;
                            else {
                                for (e = 0; e < s - 1; e += 1) {
                                    if (t === data.k[e].t) {
                                        r = e + 1,
                                        i = data.k[e].t;
                                        break
                                    }
                                    if (t > data.k[e].t && t < data.k[e + 1].t) {
                                        t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2,
                                        i = data.k[e + 1].t) : (r = e + 1,
                                        i = data.k[e].t);
                                        break
                                    }
                                }
                                -1 === r && (r = e + 1,
                                i = data.k[e].t)
                            }
                        } else
                            r = 0,
                            i = 0;
                        var a = {};
                        return a.index = r,
                        a.time = i / elem.comp.globalData.frameRate,
                        a
                    }
                    function key(t) {
                        var e, r, i;
                        if (!data.k.length || "number" == typeof data.k[0])
                            throw new Error("The property has no keyframe at index " + t);
                        t -= 1,
                        e = {
                            time: data.k[t].t / elem.comp.globalData.frameRate,
                            value: []
                        };
                        var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
                        for (i = s.length,
                        r = 0; r < i; r += 1)
                            e[r] = s[r],
                            e.value[r] = s[r];
                        return e
                    }
                    function framesToTime(t, e) {
                        return e || (e = elem.comp.globalData.frameRate),
                        t / e
                    }
                    function timeToFrames(t, e) {
                        return t || 0 === t || (t = time),
                        e || (e = elem.comp.globalData.frameRate),
                        t * e
                    }
                    function seedRandom(t) {
                        BMMath.seedrandom(randSeed + t)
                    }
                    function sourceRectAtTime() {
                        return elem.sourceRectAtTime()
                    }
                    function substring(t, e) {
                        return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                    }
                    function substr(t, e) {
                        return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                    }
                    function posterizeTime(t) {
                        time = 0 === t ? 0 : Math.floor(time * t) / t,
                        value = valueAtTime(time)
                    }
                    var index = elem.data.ind, hasParent = !(!elem.hierarchy || !elem.hierarchy.length), parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
                    function executeExpression(t) {
                        return value = t,
                        _needsRandom && seedRandom(randSeed),
                        this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex,
                        textTotal = this.textTotal,
                        selectorValue = this.selectorValue),
                        thisLayer || (text = elem.layerInterface.text,
                        thisLayer = elem.layerInterface,
                        thisComp = elem.comp.compInterface,
                        toWorld = thisLayer.toWorld.bind(thisLayer),
                        fromWorld = thisLayer.fromWorld.bind(thisLayer),
                        fromComp = thisLayer.fromComp.bind(thisLayer),
                        toComp = thisLayer.toComp.bind(thisLayer),
                        mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null,
                        fromCompToSurface = fromComp),
                        transform || (transform = elem.layerInterface("ADBE Transform Group"),
                        $bm_transform = transform,
                        transform && (anchorPoint = transform.anchorPoint)),
                        4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")),
                        effect || (effect = thisLayer(4)),
                        (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface),
                        time = this.comp.renderedFrame / this.comp.globalData.frameRate,
                        needsVelocity && (velocity = velocityAtTime(time)),
                        expression_function(),
                        this.frameExpressionId = elem.globalData.frameId,
                        "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v),
                        scoped_bm_rt)
                    }
                    return executeExpression
                }
                return ob.initiateExpression = initiateExpression,
                ob
            }()
              , expressionHelpers = function() {
                return {
                    searchExpressions: function(t, e, r) {
                        e.x && (r.k = !0,
                        r.x = !0,
                        r.initiateExpression = ExpressionManager.initiateExpression,
                        r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)))
                    },
                    getSpeedAtTime: function(t) {
                        var e = this.getValueAtTime(t)
                          , r = this.getValueAtTime(t + -.01)
                          , i = 0;
                        if (e.length) {
                            var s;
                            for (s = 0; s < e.length; s += 1)
                                i += Math.pow(r[s] - e[s], 2);
                            i = 100 * Math.sqrt(i)
                        } else
                            i = 0;
                        return i
                    },
                    getVelocityAtTime: function(t) {
                        if (void 0 !== this.vel)
                            return this.vel;
                        var e, r, i = this.getValueAtTime(t), s = this.getValueAtTime(t + -.001);
                        if (i.length)
                            for (e = createTypedArray("float32", i.length),
                            r = 0; r < i.length; r += 1)
                                e[r] = (s[r] - i[r]) / -.001;
                        else
                            e = (s - i) / -.001;
                        return e
                    },
                    getValueAtTime: function(t) {
                        return t *= this.elem.globalData.frameRate,
                        (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0,
                        this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime),
                        this._cachingAtTime.lastFrame = t),
                        this._cachingAtTime.value
                    },
                    getStaticValueAtTime: function() {
                        return this.pv
                    },
                    setGroupProperty: function(t) {
                        this.propertyGroup = t
                    }
                }
            }();
            !function() {
                function t(t, e, r) {
                    if (!this.k || !this.keyframes)
                        return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var i, s, a, n, o, h = this.comp.renderedFrame, l = this.keyframes, p = l[l.length - 1].t;
                    if (h <= p)
                        return this.pv;
                    if (r ? s = p - (i = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1),
                    i = p - (s = l[l.length - 1 - e].t)),
                    "pingpong" === t) {
                        if (Math.floor((h - s) / i) % 2 != 0)
                            return this.getValueAtTime((i - (h - s) % i + s) / this.comp.globalData.frameRate, 0)
                    } else {
                        if ("offset" === t) {
                            var m = this.getValueAtTime(s / this.comp.globalData.frameRate, 0)
                              , f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                              , c = this.getValueAtTime(((h - s) % i + s) / this.comp.globalData.frameRate, 0)
                              , d = Math.floor((h - s) / i);
                            if (this.pv.length) {
                                for (n = (o = new Array(m.length)).length,
                                a = 0; a < n; a += 1)
                                    o[a] = (f[a] - m[a]) * d + c[a];
                                return o
                            }
                            return (f - m) * d + c
                        }
                        if ("continue" === t) {
                            var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                              , y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (n = (o = new Array(u.length)).length,
                                a = 0; a < n; a += 1)
                                    o[a] = u[a] + (u[a] - y[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                                return o
                            }
                            return u + (h - p) / .001 * (u - y)
                        }
                    }
                    return this.getValueAtTime(((h - s) % i + s) / this.comp.globalData.frameRate, 0)
                }
                function e(t, e, r) {
                    if (!this.k)
                        return this.pv;
                    t = t ? t.toLowerCase() : "";
                    var i, s, a, n, o, h = this.comp.renderedFrame, l = this.keyframes, p = l[0].t;
                    if (h >= p)
                        return this.pv;
                    if (r ? s = p + (i = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1),
                    i = (s = l[e].t) - p),
                    "pingpong" === t) {
                        if (Math.floor((p - h) / i) % 2 == 0)
                            return this.getValueAtTime(((p - h) % i + p) / this.comp.globalData.frameRate, 0)
                    } else {
                        if ("offset" === t) {
                            var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                              , f = this.getValueAtTime(s / this.comp.globalData.frameRate, 0)
                              , c = this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0)
                              , d = Math.floor((p - h) / i) + 1;
                            if (this.pv.length) {
                                for (n = (o = new Array(m.length)).length,
                                a = 0; a < n; a += 1)
                                    o[a] = c[a] - (f[a] - m[a]) * d;
                                return o
                            }
                            return c - (f - m) * d
                        }
                        if ("continue" === t) {
                            var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0)
                              , y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                            if (this.pv.length) {
                                for (n = (o = new Array(u.length)).length,
                                a = 0; a < n; a += 1)
                                    o[a] = u[a] + (u[a] - y[a]) * (p - h) / .001;
                                return o
                            }
                            return u + (u - y) * (p - h) / .001
                        }
                    }
                    return this.getValueAtTime((i - ((p - h) % i + p)) / this.comp.globalData.frameRate, 0)
                }
                function r(t, e) {
                    if (!this.k)
                        return this.pv;
                    if (t = .5 * (t || .4),
                    (e = Math.floor(e || 5)) <= 1)
                        return this.pv;
                    var r, i, s = this.comp.renderedFrame / this.comp.globalData.frameRate, a = s - t, n = e > 1 ? (s + t - a) / (e - 1) : 1, o = 0, h = 0;
                    for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e; ) {
                        if (i = this.getValueAtTime(a + o * n),
                        this.pv.length)
                            for (h = 0; h < this.pv.length; h += 1)
                                r[h] += i[h];
                        else
                            r += i;
                        o += 1
                    }
                    if (this.pv.length)
                        for (h = 0; h < this.pv.length; h += 1)
                            r[h] /= e;
                    else
                        r /= e;
                    return r
                }
                var i = TransformPropertyFactory.getTransformProperty;
                TransformPropertyFactory.getTransformProperty = function(t, e, r) {
                    var s = i(t, e, r);
                    return s.dynamicProperties.length ? s.getValueAtTime = function(t) {
                        this._transformCachingAtTime || (this._transformCachingAtTime = {
                            v: new Matrix
                        });
                        var e = this._transformCachingAtTime.v;
                        if (e.cloneFromProps(this.pre.props),
                        this.appliedTransformations < 1) {
                            var r = this.a.getValueAtTime(t);
                            e.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult)
                        }
                        if (this.appliedTransformations < 2) {
                            var i = this.s.getValueAtTime(t);
                            e.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult)
                        }
                        if (this.sk && this.appliedTransformations < 3) {
                            var s = this.sk.getValueAtTime(t)
                              , a = this.sa.getValueAtTime(t);
                            e.skewFromAxis(-s * this.sk.mult, a * this.sa.mult)
                        }
                        if (this.r && this.appliedTransformations < 4) {
                            var n = this.r.getValueAtTime(t);
                            e.rotate(-n * this.r.mult)
                        } else if (!this.r && this.appliedTransformations < 4) {
                            var o = this.rz.getValueAtTime(t)
                              , h = this.ry.getValueAtTime(t)
                              , l = this.rx.getValueAtTime(t)
                              , p = this.or.getValueAtTime(t);
                            e.rotateZ(-o * this.rz.mult).rotateY(h * this.ry.mult).rotateX(l * this.rx.mult).rotateZ(-p[2] * this.or.mult).rotateY(p[1] * this.or.mult).rotateX(p[0] * this.or.mult)
                        }
                        if (this.data.p && this.data.p.s) {
                            var m = this.px.getValueAtTime(t)
                              , f = this.py.getValueAtTime(t);
                            if (this.data.p.z) {
                                var c = this.pz.getValueAtTime(t);
                                e.translate(m * this.px.mult, f * this.py.mult, -c * this.pz.mult)
                            } else
                                e.translate(m * this.px.mult, f * this.py.mult, 0)
                        } else {
                            var d = this.p.getValueAtTime(t);
                            e.translate(d[0] * this.p.mult, d[1] * this.p.mult, -d[2] * this.p.mult)
                        }
                        return e
                    }
                    .bind(s) : s.getValueAtTime = function() {
                        return this.v.clone(new Matrix)
                    }
                    .bind(s),
                    s.setGroupProperty = expressionHelpers.setGroupProperty,
                    s
                }
                ;
                var s = PropertyFactory.getProp;
                PropertyFactory.getProp = function(i, a, n, o, h) {
                    var l = s(i, a, n, o, h);
                    l.kf ? l.getValueAtTime = expressionHelpers.getValueAtTime.bind(l) : l.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(l),
                    l.setGroupProperty = expressionHelpers.setGroupProperty,
                    l.loopOut = t,
                    l.loopIn = e,
                    l.smooth = r,
                    l.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(l),
                    l.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(l),
                    l.numKeys = 1 === a.a ? a.k.length : 0,
                    l.propertyIndex = a.ix;
                    var p = 0;
                    return 0 !== n && (p = createTypedArray("float32", 1 === a.a ? a.k[0].s.length : a.k.length)),
                    l._cachingAtTime = {
                        lastFrame: initialDefaultFrame,
                        lastIndex: 0,
                        value: p
                    },
                    expressionHelpers.searchExpressions(i, a, l),
                    l.k && h.addDynamicProperty(l),
                    l
                }
                ;
                var a = ShapePropertyFactory.getConstructorFunction()
                  , n = ShapePropertyFactory.getKeyframedConstructorFunction();
                function o() {}
                o.prototype = {
                    vertices: function(t, e) {
                        this.k && this.getValue();
                        var r, i = this.v;
                        void 0 !== e && (i = this.getValueAtTime(e, 0));
                        var s = i._length
                          , a = i[t]
                          , n = i.v
                          , o = createSizedArray(s);
                        for (r = 0; r < s; r += 1)
                            o[r] = "i" === t || "o" === t ? [a[r][0] - n[r][0], a[r][1] - n[r][1]] : [a[r][0], a[r][1]];
                        return o
                    },
                    points: function(t) {
                        return this.vertices("v", t)
                    },
                    inTangents: function(t) {
                        return this.vertices("i", t)
                    },
                    outTangents: function(t) {
                        return this.vertices("o", t)
                    },
                    isClosed: function() {
                        return this.v.c
                    },
                    pointOnPath: function(t, e) {
                        var r = this.v;
                        void 0 !== e && (r = this.getValueAtTime(e, 0)),
                        this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
                        for (var i, s = this._segmentsLength, a = s.lengths, n = s.totalLength * t, o = 0, h = a.length, l = 0; o < h; ) {
                            if (l + a[o].addedLength > n) {
                                var p = o
                                  , m = r.c && o === h - 1 ? 0 : o + 1
                                  , f = (n - l) / a[o].addedLength;
                                i = bez.getPointInSegment(r.v[p], r.v[m], r.o[p], r.i[m], f, a[o]);
                                break
                            }
                            l += a[o].addedLength,
                            o += 1
                        }
                        return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]),
                        i
                    },
                    vectorOnPath: function(t, e, r) {
                        1 == t ? t = this.v.c : 0 == t && (t = .999);
                        var i = this.pointOnPath(t, e)
                          , s = this.pointOnPath(t + .001, e)
                          , a = s[0] - i[0]
                          , n = s[1] - i[1]
                          , o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
                        return 0 === o ? [0, 0] : "tangent" === r ? [a / o, n / o] : [-n / o, a / o]
                    },
                    tangentOnPath: function(t, e) {
                        return this.vectorOnPath(t, e, "tangent")
                    },
                    normalOnPath: function(t, e) {
                        return this.vectorOnPath(t, e, "normal")
                    },
                    setGroupProperty: expressionHelpers.setGroupProperty,
                    getValueAtTime: expressionHelpers.getStaticValueAtTime
                },
                extendPrototype([o], a),
                extendPrototype([o], n),
                n.prototype.getValueAtTime = function(t) {
                    return this._cachingAtTime || (this._cachingAtTime = {
                        shapeValue: shapePool.clone(this.pv),
                        lastIndex: 0,
                        lastTime: initialDefaultFrame
                    }),
                    t *= this.elem.globalData.frameRate,
                    (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0,
                    this._cachingAtTime.lastTime = t,
                    this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)),
                    this._cachingAtTime.shapeValue
                }
                ,
                n.prototype.initiateExpression = ExpressionManager.initiateExpression;
                var h = ShapePropertyFactory.getShapeProp;
                ShapePropertyFactory.getShapeProp = function(t, e, r, i, s) {
                    var a = h(t, e, r, i, s);
                    return a.propertyIndex = e.ix,
                    a.lock = !1,
                    3 === r ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a),
                    a.k && t.addDynamicProperty(a),
                    a
                }
            }(),
            function() {
                TextProperty.prototype.getExpressionValue = function(t, e) {
                    var r = this.calculateExpression(e);
                    if (t.t !== r) {
                        var i = {};
                        return this.copyData(i, t),
                        i.t = r.toString(),
                        i.__complete = !1,
                        i
                    }
                    return t
                }
                ,
                TextProperty.prototype.searchProperty = function() {
                    var t = this.searchKeyframes()
                      , e = this.searchExpressions();
                    return this.kf = t || e,
                    this.kf
                }
                ,
                TextProperty.prototype.searchExpressions = function() {
                    return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this),
                    this.addEffect(this.getExpressionValue.bind(this)),
                    !0) : null
                }
            }();
            var ShapePathInterface = function(t, e, r) {
                var i = e.sh;
                function s(t) {
                    return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? s.path : null
                }
                var a = propertyGroupFactory(s, r);
                return i.setGroupProperty(PropertyInterface("Path", a)),
                Object.defineProperties(s, {
                    path: {
                        get: function() {
                            return i.k && i.getValue(),
                            i
                        }
                    },
                    shape: {
                        get: function() {
                            return i.k && i.getValue(),
                            i
                        }
                    },
                    _name: {
                        value: t.nm
                    },
                    ix: {
                        value: t.ix
                    },
                    propertyIndex: {
                        value: t.ix
                    },
                    mn: {
                        value: t.mn
                    },
                    propertyGroup: {
                        value: r
                    }
                }),
                s
            }, propertyGroupFactory = function(t, e) {
                return function(r) {
                    return (r = void 0 === r ? 1 : r) <= 0 ? t : e(r - 1)
                }
            }, PropertyInterface = function(t, e) {
                var r = {
                    _name: t
                };
                return function(t) {
                    return (t = void 0 === t ? 1 : t) <= 0 ? r : e(t - 1)
                }
            }, ShapeExpressionInterface = function() {
                function t(t, o, c) {
                    var d, u = [], y = t ? t.length : 0;
                    for (d = 0; d < y; d += 1)
                        "gr" === t[d].ty ? u.push(e(t[d], o[d], c)) : "fl" === t[d].ty ? u.push(r(t[d], o[d], c)) : "st" === t[d].ty ? u.push(a(t[d], o[d], c)) : "tm" === t[d].ty ? u.push(n(t[d], o[d], c)) : "tr" === t[d].ty || ("el" === t[d].ty ? u.push(h(t[d], o[d], c)) : "sr" === t[d].ty ? u.push(l(t[d], o[d], c)) : "sh" === t[d].ty ? u.push(ShapePathInterface(t[d], o[d], c)) : "rc" === t[d].ty ? u.push(p(t[d], o[d], c)) : "rd" === t[d].ty ? u.push(m(t[d], o[d], c)) : "rp" === t[d].ty ? u.push(f(t[d], o[d], c)) : "gf" === t[d].ty ? u.push(i(t[d], o[d], c)) : u.push(s(t[d], o[d])));
                    return u
                }
                function e(e, r, i) {
                    var s = function(t) {
                        switch (t) {
                        case "ADBE Vectors Group":
                        case "Contents":
                        case 2:
                            return s.content;
                        default:
                            return s.transform;
                        }
                    };
                    s.propertyGroup = propertyGroupFactory(s, i);
                    var a = function(e, r, i) {
                        var s, a = function(t) {
                            for (var e = 0, r = s.length; e < r; ) {
                                if (s[e]._name === t || s[e].mn === t || s[e].propertyIndex === t || s[e].ix === t || s[e].ind === t)
                                    return s[e];
                                e += 1
                            }
                            return "number" == typeof t ? s[t - 1] : null
                        };
                        a.propertyGroup = propertyGroupFactory(a, i),
                        s = t(e.it, r.it, a.propertyGroup),
                        a.numProperties = s.length;
                        var n = o(e.it[e.it.length - 1], r.it[r.it.length - 1], a.propertyGroup);
                        return a.transform = n,
                        a.propertyIndex = e.cix,
                        a._name = e.nm,
                        a
                    }(e, r, s.propertyGroup)
                      , n = o(e.it[e.it.length - 1], r.it[r.it.length - 1], s.propertyGroup);
                    return s.content = a,
                    s.transform = n,
                    Object.defineProperty(s, "_name", {
                        get: function() {
                            return e.nm
                        }
                    }),
                    s.numProperties = e.np,
                    s.propertyIndex = e.ix,
                    s.nm = e.nm,
                    s.mn = e.mn,
                    s
                }
                function r(t, e, r) {
                    function i(t) {
                        return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : null
                    }
                    return Object.defineProperties(i, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }),
                    e.c.setGroupProperty(PropertyInterface("Color", r)),
                    e.o.setGroupProperty(PropertyInterface("Opacity", r)),
                    i
                }
                function i(t, e, r) {
                    function i(t) {
                        return "Start Point" === t || "start point" === t ? i.startPoint : "End Point" === t || "end point" === t ? i.endPoint : "Opacity" === t || "opacity" === t ? i.opacity : null
                    }
                    return Object.defineProperties(i, {
                        startPoint: {
                            get: ExpressionPropertyInterface(e.s)
                        },
                        endPoint: {
                            get: ExpressionPropertyInterface(e.e)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        type: {
                            get: function() {
                                return "a"
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }),
                    e.s.setGroupProperty(PropertyInterface("Start Point", r)),
                    e.e.setGroupProperty(PropertyInterface("End Point", r)),
                    e.o.setGroupProperty(PropertyInterface("Opacity", r)),
                    i
                }
                function s() {
                    return function() {
                        return null
                    }
                }
                function a(t, e, r) {
                    var i, s = propertyGroupFactory(l, r), a = propertyGroupFactory(h, s);
                    function n(r) {
                        Object.defineProperty(h, t.d[r].nm, {
                            get: ExpressionPropertyInterface(e.d.dataProps[r].p)
                        })
                    }
                    var o = t.d ? t.d.length : 0
                      , h = {};
                    for (i = 0; i < o; i += 1)
                        n(i),
                        e.d.dataProps[i].p.setGroupProperty(a);
                    function l(t) {
                        return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : null
                    }
                    return Object.defineProperties(l, {
                        color: {
                            get: ExpressionPropertyInterface(e.c)
                        },
                        opacity: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        strokeWidth: {
                            get: ExpressionPropertyInterface(e.w)
                        },
                        dash: {
                            get: function() {
                                return h
                            }
                        },
                        _name: {
                            value: t.nm
                        },
                        mn: {
                            value: t.mn
                        }
                    }),
                    e.c.setGroupProperty(PropertyInterface("Color", s)),
                    e.o.setGroupProperty(PropertyInterface("Opacity", s)),
                    e.w.setGroupProperty(PropertyInterface("Stroke Width", s)),
                    l
                }
                function n(t, e, r) {
                    function i(e) {
                        return e === t.e.ix || "End" === e || "end" === e ? i.end : e === t.s.ix ? i.start : e === t.o.ix ? i.offset : null
                    }
                    var s = propertyGroupFactory(i, r);
                    return i.propertyIndex = t.ix,
                    e.s.setGroupProperty(PropertyInterface("Start", s)),
                    e.e.setGroupProperty(PropertyInterface("End", s)),
                    e.o.setGroupProperty(PropertyInterface("Offset", s)),
                    i.propertyIndex = t.ix,
                    i.propertyGroup = r,
                    Object.defineProperties(i, {
                        start: {
                            get: ExpressionPropertyInterface(e.s)
                        },
                        end: {
                            get: ExpressionPropertyInterface(e.e)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(e.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    i.mn = t.mn,
                    i
                }
                function o(t, e, r) {
                    function i(e) {
                        return t.a.ix === e || "Anchor Point" === e ? i.anchorPoint : t.o.ix === e || "Opacity" === e ? i.opacity : t.p.ix === e || "Position" === e ? i.position : t.r.ix === e || "Rotation" === e || "ADBE Vector Rotation" === e ? i.rotation : t.s.ix === e || "Scale" === e ? i.scale : t.sk && t.sk.ix === e || "Skew" === e ? i.skew : t.sa && t.sa.ix === e || "Skew Axis" === e ? i.skewAxis : null
                    }
                    var s = propertyGroupFactory(i, r);
                    return e.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", s)),
                    e.transform.mProps.p.setGroupProperty(PropertyInterface("Position", s)),
                    e.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", s)),
                    e.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", s)),
                    e.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", s)),
                    e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", s)),
                    e.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", s))),
                    e.transform.op.setGroupProperty(PropertyInterface("Opacity", s)),
                    Object.defineProperties(i, {
                        opacity: {
                            get: ExpressionPropertyInterface(e.transform.mProps.o)
                        },
                        position: {
                            get: ExpressionPropertyInterface(e.transform.mProps.p)
                        },
                        anchorPoint: {
                            get: ExpressionPropertyInterface(e.transform.mProps.a)
                        },
                        scale: {
                            get: ExpressionPropertyInterface(e.transform.mProps.s)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(e.transform.mProps.r)
                        },
                        skew: {
                            get: ExpressionPropertyInterface(e.transform.mProps.sk)
                        },
                        skewAxis: {
                            get: ExpressionPropertyInterface(e.transform.mProps.sa)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    i.ty = "tr",
                    i.mn = t.mn,
                    i.propertyGroup = r,
                    i
                }
                function h(t, e, r) {
                    function i(e) {
                        return t.p.ix === e ? i.position : t.s.ix === e ? i.size : null
                    }
                    var s = propertyGroupFactory(i, r);
                    i.propertyIndex = t.ix;
                    var a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return a.s.setGroupProperty(PropertyInterface("Size", s)),
                    a.p.setGroupProperty(PropertyInterface("Position", s)),
                    Object.defineProperties(i, {
                        size: {
                            get: ExpressionPropertyInterface(a.s)
                        },
                        position: {
                            get: ExpressionPropertyInterface(a.p)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    i.mn = t.mn,
                    i
                }
                function l(t, e, r) {
                    function i(e) {
                        return t.p.ix === e ? i.position : t.r.ix === e ? i.rotation : t.pt.ix === e ? i.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? i.outerRadius : t.os.ix === e ? i.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? i.innerRoundness : null : i.innerRadius
                    }
                    var s = propertyGroupFactory(i, r)
                      , a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return i.propertyIndex = t.ix,
                    a.or.setGroupProperty(PropertyInterface("Outer Radius", s)),
                    a.os.setGroupProperty(PropertyInterface("Outer Roundness", s)),
                    a.pt.setGroupProperty(PropertyInterface("Points", s)),
                    a.p.setGroupProperty(PropertyInterface("Position", s)),
                    a.r.setGroupProperty(PropertyInterface("Rotation", s)),
                    t.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", s)),
                    a.is.setGroupProperty(PropertyInterface("Inner Roundness", s))),
                    Object.defineProperties(i, {
                        position: {
                            get: ExpressionPropertyInterface(a.p)
                        },
                        rotation: {
                            get: ExpressionPropertyInterface(a.r)
                        },
                        points: {
                            get: ExpressionPropertyInterface(a.pt)
                        },
                        outerRadius: {
                            get: ExpressionPropertyInterface(a.or)
                        },
                        outerRoundness: {
                            get: ExpressionPropertyInterface(a.os)
                        },
                        innerRadius: {
                            get: ExpressionPropertyInterface(a.ir)
                        },
                        innerRoundness: {
                            get: ExpressionPropertyInterface(a.is)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    i.mn = t.mn,
                    i
                }
                function p(t, e, r) {
                    function i(e) {
                        return t.p.ix === e ? i.position : t.r.ix === e ? i.roundness : t.s.ix === e || "Size" === e || "ADBE Vector Rect Size" === e ? i.size : null
                    }
                    var s = propertyGroupFactory(i, r)
                      , a = "tm" === e.sh.ty ? e.sh.prop : e.sh;
                    return i.propertyIndex = t.ix,
                    a.p.setGroupProperty(PropertyInterface("Position", s)),
                    a.s.setGroupProperty(PropertyInterface("Size", s)),
                    a.r.setGroupProperty(PropertyInterface("Rotation", s)),
                    Object.defineProperties(i, {
                        position: {
                            get: ExpressionPropertyInterface(a.p)
                        },
                        roundness: {
                            get: ExpressionPropertyInterface(a.r)
                        },
                        size: {
                            get: ExpressionPropertyInterface(a.s)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    i.mn = t.mn,
                    i
                }
                function m(t, e, r) {
                    function i(e) {
                        return t.r.ix === e || "Round Corners 1" === e ? i.radius : null
                    }
                    var s = propertyGroupFactory(i, r)
                      , a = e;
                    return i.propertyIndex = t.ix,
                    a.rd.setGroupProperty(PropertyInterface("Radius", s)),
                    Object.defineProperties(i, {
                        radius: {
                            get: ExpressionPropertyInterface(a.rd)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    i.mn = t.mn,
                    i
                }
                function f(t, e, r) {
                    function i(e) {
                        return t.c.ix === e || "Copies" === e ? i.copies : t.o.ix === e || "Offset" === e ? i.offset : null
                    }
                    var s = propertyGroupFactory(i, r)
                      , a = e;
                    return i.propertyIndex = t.ix,
                    a.c.setGroupProperty(PropertyInterface("Copies", s)),
                    a.o.setGroupProperty(PropertyInterface("Offset", s)),
                    Object.defineProperties(i, {
                        copies: {
                            get: ExpressionPropertyInterface(a.c)
                        },
                        offset: {
                            get: ExpressionPropertyInterface(a.o)
                        },
                        _name: {
                            value: t.nm
                        }
                    }),
                    i.mn = t.mn,
                    i
                }
                return function(e, r, i) {
                    var s;
                    function a(t) {
                        if ("number" == typeof t)
                            return 0 === (t = void 0 === t ? 1 : t) ? i : s[t - 1];
                        for (var e = 0, r = s.length; e < r; ) {
                            if (s[e]._name === t)
                                return s[e];
                            e += 1
                        }
                        return null
                    }
                    return a.propertyGroup = propertyGroupFactory(a, function() {
                        return i
                    }),
                    s = t(e, r, a.propertyGroup),
                    a.numProperties = s.length,
                    a._name = "Contents",
                    a
                }
            }(), TextExpressionInterface = function(t) {
                var e;
                function r(t) {
                    switch (t) {
                    case "ADBE Text Document":
                        return r.sourceText;
                    default:
                        return null;
                    }
                }
                return Object.defineProperty(r, "sourceText", {
                    get: function() {
                        t.textProperty.getValue();
                        var r = t.textProperty.currentData.t;
                        return void 0 !== r && (t.textProperty.currentData.t = void 0,
                        (e = new String(r)).value = r || new String(r)),
                        e
                    }
                }),
                r
            }, LayerExpressionInterface = function() {
                function t(t) {
                    var e = new Matrix;
                    void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e);
                    return e
                }
                function e(t, e) {
                    var r = this.getMatrix(e);
                    return r.props[12] = 0,
                    r.props[13] = 0,
                    r.props[14] = 0,
                    this.applyPoint(r, t)
                }
                function r(t, e) {
                    var r = this.getMatrix(e);
                    return this.applyPoint(r, t)
                }
                function i(t, e) {
                    var r = this.getMatrix(e);
                    return r.props[12] = 0,
                    r.props[13] = 0,
                    r.props[14] = 0,
                    this.invertPoint(r, t)
                }
                function s(t, e) {
                    var r = this.getMatrix(e);
                    return this.invertPoint(r, t)
                }
                function a(t, e) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r, i = this._elem.hierarchy.length;
                        for (r = 0; r < i; r += 1)
                            this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
                    }
                    return t.applyToPointArray(e[0], e[1], e[2] || 0)
                }
                function n(t, e) {
                    if (this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r, i = this._elem.hierarchy.length;
                        for (r = 0; r < i; r += 1)
                            this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t)
                    }
                    return t.inversePoint(e)
                }
                function o(t) {
                    var e = new Matrix;
                    if (e.reset(),
                    this._elem.finalTransform.mProp.applyToMatrix(e),
                    this._elem.hierarchy && this._elem.hierarchy.length) {
                        var r, i = this._elem.hierarchy.length;
                        for (r = 0; r < i; r += 1)
                            this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                        return e.inversePoint(t)
                    }
                    return e.inversePoint(t)
                }
                function h() {
                    return [1, 1, 1, 1]
                }
                return function(l) {
                    var p;
                    function m(t) {
                        switch (t) {
                        case "ADBE Root Vectors Group":
                        case "Contents":
                        case 2:
                            return m.shapeInterface;
                        case 1:
                        case 6:
                        case "Transform":
                        case "transform":
                        case "ADBE Transform Group":
                            return p;
                        case 4:
                        case "ADBE Effect Parade":
                        case "effects":
                        case "Effects":
                            return m.effect;
                        case "ADBE Text Properties":
                            return m.textInterface;
                        default:
                            return null;
                        }
                    }
                    m.getMatrix = t,
                    m.invertPoint = n,
                    m.applyPoint = a,
                    m.toWorld = r,
                    m.toWorldVec = e,
                    m.fromWorld = s,
                    m.fromWorldVec = i,
                    m.toComp = r,
                    m.fromComp = o,
                    m.sampleImage = h,
                    m.sourceRectAtTime = l.sourceRectAtTime.bind(l),
                    m._elem = l;
                    var f = getDescriptor(p = TransformExpressionInterface(l.finalTransform.mProp), "anchorPoint");
                    return Object.defineProperties(m, {
                        hasParent: {
                            get: function() {
                                return l.hierarchy.length
                            }
                        },
                        parent: {
                            get: function() {
                                return l.hierarchy[0].layerInterface
                            }
                        },
                        rotation: getDescriptor(p, "rotation"),
                        scale: getDescriptor(p, "scale"),
                        position: getDescriptor(p, "position"),
                        opacity: getDescriptor(p, "opacity"),
                        anchorPoint: f,
                        anchor_point: f,
                        transform: {
                            get: function() {
                                return p
                            }
                        },
                        active: {
                            get: function() {
                                return l.isInRange
                            }
                        }
                    }),
                    m.startTime = l.data.st,
                    m.index = l.data.ind,
                    m.source = l.data.refId,
                    m.height = 0 === l.data.ty ? l.data.h : 100,
                    m.width = 0 === l.data.ty ? l.data.w : 100,
                    m.inPoint = l.data.ip / l.comp.globalData.frameRate,
                    m.outPoint = l.data.op / l.comp.globalData.frameRate,
                    m._name = l.data.nm,
                    m.registerMaskInterface = function(t) {
                        m.mask = new MaskManagerInterface(t,l)
                    }
                    ,
                    m.registerEffectsInterface = function(t) {
                        m.effect = t
                    }
                    ,
                    m
                }
            }(), FootageInterface = (dataInterfaceFactory = function(t) {
                function e(t) {
                    return "Outline" === t ? e.outlineInterface() : null
                }
                return e._name = "Outline",
                e.outlineInterface = function(t) {
                    var e = ""
                      , r = t.getFootageData();
                    function i(t) {
                        if (r[t])
                            return e = t,
                            "object" == typeof (r = r[t]) ? i : r;
                        var s = t.indexOf(e);
                        if (-1 !== s) {
                            var a = parseInt(t.substr(s + e.length), 10);
                            return "object" == typeof (r = r[a]) ? i : r
                        }
                        return ""
                    }
                    return function() {
                        return e = "",
                        r = t.getFootageData(),
                        i
                    }
                }(t),
                e
            }
            ,
            function(t) {
                function e(t) {
                    return "Data" === t ? e.dataInterface : null
                }
                return e._name = "Data",
                e.dataInterface = dataInterfaceFactory(t),
                e
            }
            ), dataInterfaceFactory, CompExpressionInterface = function(t) {
                function e(e) {
                    for (var r = 0, i = t.layers.length; r < i; ) {
                        if (t.layers[r].nm === e || t.layers[r].ind === e)
                            return t.elements[r].layerInterface;
                        r += 1
                    }
                    return null
                }
                return Object.defineProperty(e, "_name", {
                    value: t.data.nm
                }),
                e.layer = e,
                e.pixelAspect = 1,
                e.height = t.data.h || t.globalData.compSize.h,
                e.width = t.data.w || t.globalData.compSize.w,
                e.pixelAspect = 1,
                e.frameDuration = 1 / t.globalData.frameRate,
                e.displayStartTime = 0,
                e.numLayers = t.layers.length,
                e
            }, TransformExpressionInterface = function(t) {
                function e(t) {
                    switch (t) {
                    case "scale":
                    case "Scale":
                    case "ADBE Scale":
                    case 6:
                        return e.scale;
                    case "rotation":
                    case "Rotation":
                    case "ADBE Rotation":
                    case "ADBE Rotate Z":
                    case 10:
                        return e.rotation;
                    case "ADBE Rotate X":
                        return e.xRotation;
                    case "ADBE Rotate Y":
                        return e.yRotation;
                    case "position":
                    case "Position":
                    case "ADBE Position":
                    case 2:
                        return e.position;
                    case "ADBE Position_0":
                        return e.xPosition;
                    case "ADBE Position_1":
                        return e.yPosition;
                    case "ADBE Position_2":
                        return e.zPosition;
                    case "anchorPoint":
                    case "AnchorPoint":
                    case "Anchor Point":
                    case "ADBE AnchorPoint":
                    case 1:
                        return e.anchorPoint;
                    case "opacity":
                    case "Opacity":
                    case 11:
                        return e.opacity;
                    default:
                        return null;
                    }
                }
                var r, i, s, a;
                return Object.defineProperty(e, "rotation", {
                    get: ExpressionPropertyInterface(t.r || t.rz)
                }),
                Object.defineProperty(e, "zRotation", {
                    get: ExpressionPropertyInterface(t.rz || t.r)
                }),
                Object.defineProperty(e, "xRotation", {
                    get: ExpressionPropertyInterface(t.rx)
                }),
                Object.defineProperty(e, "yRotation", {
                    get: ExpressionPropertyInterface(t.ry)
                }),
                Object.defineProperty(e, "scale", {
                    get: ExpressionPropertyInterface(t.s)
                }),
                t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px),
                i = ExpressionPropertyInterface(t.py),
                t.pz && (s = ExpressionPropertyInterface(t.pz))),
                Object.defineProperty(e, "position", {
                    get: function() {
                        return t.p ? a() : [r(), i(), s ? s() : 0]
                    }
                }),
                Object.defineProperty(e, "xPosition", {
                    get: ExpressionPropertyInterface(t.px)
                }),
                Object.defineProperty(e, "yPosition", {
                    get: ExpressionPropertyInterface(t.py)
                }),
                Object.defineProperty(e, "zPosition", {
                    get: ExpressionPropertyInterface(t.pz)
                }),
                Object.defineProperty(e, "anchorPoint", {
                    get: ExpressionPropertyInterface(t.a)
                }),
                Object.defineProperty(e, "opacity", {
                    get: ExpressionPropertyInterface(t.o)
                }),
                Object.defineProperty(e, "skew", {
                    get: ExpressionPropertyInterface(t.sk)
                }),
                Object.defineProperty(e, "skewAxis", {
                    get: ExpressionPropertyInterface(t.sa)
                }),
                Object.defineProperty(e, "orientation", {
                    get: ExpressionPropertyInterface(t.or)
                }),
                e
            }, ProjectInterface = function() {
                function t(t) {
                    this.compositions.push(t)
                }
                return function() {
                    function e(t) {
                        for (var e = 0, r = this.compositions.length; e < r; ) {
                            if (this.compositions[e].data && this.compositions[e].data.nm === t)
                                return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame),
                                this.compositions[e].compInterface;
                            e += 1
                        }
                        return null
                    }
                    return e.compositions = [],
                    e.currentFrame = 0,
                    e.registerComposition = t,
                    e
                }
            }(), EffectsExpressionInterface = function() {
                function t(r, i, s, a) {
                    function n(t) {
                        for (var e = r.ef, i = 0, s = e.length; i < s; ) {
                            if (t === e[i].nm || t === e[i].mn || t === e[i].ix)
                                return 5 === e[i].ty ? l[i] : l[i]();
                            i += 1
                        }
                        throw new Error
                    }
                    var o, h = propertyGroupFactory(n, s), l = [], p = r.ef.length;
                    for (o = 0; o < p; o += 1)
                        5 === r.ef[o].ty ? l.push(t(r.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, a)) : l.push(e(i.effectElements[o], r.ef[o].ty, a, h));
                    return "ADBE Color Control" === r.mn && Object.defineProperty(n, "color", {
                        get: function() {
                            return l[0]()
                        }
                    }),
                    Object.defineProperties(n, {
                        numProperties: {
                            get: function() {
                                return r.np
                            }
                        },
                        _name: {
                            value: r.nm
                        },
                        propertyGroup: {
                            value: h
                        }
                    }),
                    n.enabled = 0 !== r.en,
                    n.active = n.enabled,
                    n
                }
                function e(t, e, r, i) {
                    var s = ExpressionPropertyInterface(t.p);
                    return t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", i)),
                    function() {
                        return 10 === e ? r.comp.compInterface(t.p.v) : s()
                    }
                }
                return {
                    createEffectsInterface: function(e, r) {
                        if (e.effectsManager) {
                            var i, s = [], a = e.data.ef, n = e.effectsManager.effectElements.length;
                            for (i = 0; i < n; i += 1)
                                s.push(t(a[i], e.effectsManager.effectElements[i], r, e));
                            var o = e.data.ef || []
                              , h = function(t) {
                                for (i = 0,
                                n = o.length; i < n; ) {
                                    if (t === o[i].nm || t === o[i].mn || t === o[i].ix)
                                        return s[i];
                                    i += 1
                                }
                                return null
                            };
                            return Object.defineProperty(h, "numProperties", {
                                get: function() {
                                    return o.length
                                }
                            }),
                            h
                        }
                        return null
                    }
                }
            }(), MaskManagerInterface = function() {
                function t(t, e) {
                    this._mask = t,
                    this._data = e
                }
                Object.defineProperty(t.prototype, "maskPath", {
                    get: function() {
                        return this._mask.prop.k && this._mask.prop.getValue(),
                        this._mask.prop
                    }
                }),
                Object.defineProperty(t.prototype, "maskOpacity", {
                    get: function() {
                        return this._mask.op.k && this._mask.op.getValue(),
                        100 * this._mask.op.v
                    }
                });
                return function(e) {
                    var r, i = createSizedArray(e.viewData.length), s = e.viewData.length;
                    for (r = 0; r < s; r += 1)
                        i[r] = new t(e.viewData[r],e.masksProperties[r]);
                    return function(t) {
                        for (r = 0; r < s; ) {
                            if (e.masksProperties[r].nm === t)
                                return i[r];
                            r += 1
                        }
                        return null
                    }
                }
            }(), ExpressionPropertyInterface = function() {
                var t = {
                    pv: 0,
                    v: 0,
                    mult: 1
                }
                  , e = {
                    pv: [0, 0, 0],
                    v: [0, 0, 0],
                    mult: 1
                };
                function r(t, e, r) {
                    Object.defineProperty(t, "velocity", {
                        get: function() {
                            return e.getVelocityAtTime(e.comp.currentFrame)
                        }
                    }),
                    t.numKeys = e.keyframes ? e.keyframes.length : 0,
                    t.key = function(i) {
                        if (!t.numKeys)
                            return 0;
                        var s = "";
                        s = "s"in e.keyframes[i - 1] ? e.keyframes[i - 1].s : "e"in e.keyframes[i - 2] ? e.keyframes[i - 2].e : e.keyframes[i - 2].s;
                        var a = "unidimensional" === r ? new Number(s) : Object.assign({}, s);
                        return a.time = e.keyframes[i - 1].t / e.elem.comp.globalData.frameRate,
                        a.value = "unidimensional" === r ? s[0] : s,
                        a
                    }
                    ,
                    t.valueAtTime = e.getValueAtTime,
                    t.speedAtTime = e.getSpeedAtTime,
                    t.velocityAtTime = e.getVelocityAtTime,
                    t.propertyGroup = e.propertyGroup
                }
                function i() {
                    return t
                }
                return function(s) {
                    return s ? "unidimensional" === s.propType ? function(e) {
                        e && "pv"in e || (e = t);
                        var i = 1 / e.mult
                          , s = e.pv * i
                          , a = new Number(s);
                        return a.value = s,
                        r(a, e, "unidimensional"),
                        function() {
                            return e.k && e.getValue(),
                            s = e.v * i,
                            a.value !== s && ((a = new Number(s)).value = s,
                            r(a, e, "unidimensional")),
                            a
                        }
                    }(s) : function(t) {
                        t && "pv"in t || (t = e);
                        var i = 1 / t.mult
                          , s = t.data && t.data.l || t.pv.length
                          , a = createTypedArray("float32", s)
                          , n = createTypedArray("float32", s);
                        return a.value = n,
                        r(a, t, "multidimensional"),
                        function() {
                            t.k && t.getValue();
                            for (var e = 0; e < s; e += 1)
                                n[e] = t.v[e] * i,
                                a[e] = n[e];
                            return a
                        }
                    }(s) : i
                }
            }(), TextExpressionSelectorPropFactory = function() {
                function t(t, e) {
                    return this.textIndex = t + 1,
                    this.textTotal = e,
                    this.v = this.getValue() * this.mult,
                    this.v
                }
                return function(e, r) {
                    this.pv = 1,
                    this.comp = e.comp,
                    this.elem = e,
                    this.mult = .01,
                    this.propType = "textSelector",
                    this.textTotal = r.totalChars,
                    this.selectorValue = 100,
                    this.lastValue = [1, 1, 1],
                    this.k = !0,
                    this.x = !0,
                    this.getValue = ExpressionManager.initiateExpression.bind(this)(e, r, this),
                    this.getMult = t,
                    this.getVelocityAtTime = expressionHelpers.getVelocityAtTime,
                    this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this),
                    this.setGroupProperty = expressionHelpers.setGroupProperty
                }
            }(), propertyGetTextProp = TextSelectorProp.getTextSelectorProp;
            function SliderEffect(t, e, r) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
            }
            function AngleEffect(t, e, r) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
            }
            function ColorEffect(t, e, r) {
                this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
            }
            function PointEffect(t, e, r) {
                this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
            }
            function LayerIndexEffect(t, e, r) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
            }
            function MaskIndexEffect(t, e, r) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
            }
            function CheckboxEffect(t, e, r) {
                this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
            }
            function NoValueEffect() {
                this.p = {}
            }
            function EffectsManager(t, e) {
                var r, i = t.ef || [];
                this.effectElements = [];
                var s, a = i.length;
                for (r = 0; r < a; r += 1)
                    s = new GroupEffect(i[r],e),
                    this.effectElements.push(s)
            }
            function GroupEffect(t, e) {
                this.init(t, e)
            }
            TextSelectorProp.getTextSelectorProp = function(t, e, r) {
                return 1 === e.t ? new TextExpressionSelectorPropFactory(t,e,r) : propertyGetTextProp(t, e, r)
            }
            ,
            extendPrototype([DynamicPropertyContainer], GroupEffect),
            GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties,
            GroupEffect.prototype.init = function(t, e) {
                var r;
                this.data = t,
                this.effectElements = [],
                this.initDynamicPropertyContainer(e);
                var i, s = this.data.ef.length, a = this.data.ef;
                for (r = 0; r < s; r += 1) {
                    switch (i = null,
                    a[r].ty) {
                    case 0:
                        i = new SliderEffect(a[r],e,this);
                        break;
                    case 1:
                        i = new AngleEffect(a[r],e,this);
                        break;
                    case 2:
                        i = new ColorEffect(a[r],e,this);
                        break;
                    case 3:
                        i = new PointEffect(a[r],e,this);
                        break;
                    case 4:
                    case 7:
                        i = new CheckboxEffect(a[r],e,this);
                        break;
                    case 10:
                        i = new LayerIndexEffect(a[r],e,this);
                        break;
                    case 11:
                        i = new MaskIndexEffect(a[r],e,this);
                        break;
                    case 5:
                        i = new EffectsManager(a[r],e,this);
                        break;
                    default:
                        i = new NoValueEffect(a[r],e,this);
                    }
                    i && this.effectElements.push(i)
                }
            }
            ;
            var lottie = {};
            function setLocationHref(t) {
                locationHref = t
            }
            function searchAnimations() {
                !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
            }
            function setSubframeRendering(t) {
                subframeEnabled = t
            }
            function setIDPrefix(t) {
                idPrefix = t
            }
            function loadAnimation(t) {
                return !0 === standalone && (t.animationData = JSON.parse(animationData)),
                animationManager.loadAnimation(t)
            }
            function setQuality(t) {
                if ("string" == typeof t)
                    switch (t) {
                    case "high":
                        defaultCurveSegments = 200;
                        break;
                    default:
                    case "medium":
                        defaultCurveSegments = 50;
                        break;
                    case "low":
                        defaultCurveSegments = 10;
                    }
                else
                    !isNaN(t) && t > 1 && (defaultCurveSegments = t);
                roundValues(!(defaultCurveSegments >= 50))
            }
            function inBrowser() {
                return "undefined" != typeof navigator
            }
            function installPlugin(t, e) {
                "expressions" === t && (expressionsPlugin = e)
            }
            function getFactory(t) {
                switch (t) {
                case "propertyFactory":
                    return PropertyFactory;
                case "shapePropertyFactory":
                    return ShapePropertyFactory;
                case "matrix":
                    return Matrix;
                default:
                    return null;
                }
            }
            function checkReady() {
                "complete" === document.readyState && (clearInterval(readyStateCheckInterval),
                searchAnimations())
            }
            function getQueryVariable(t) {
                for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
                    var i = e[r].split("=");
                    if (decodeURIComponent(i[0]) == t)
                        return decodeURIComponent(i[1])
                }
                return null
            }
            lottie.play = animationManager.play,
            lottie.pause = animationManager.pause,
            lottie.setLocationHref = setLocationHref,
            lottie.togglePause = animationManager.togglePause,
            lottie.setSpeed = animationManager.setSpeed,
            lottie.setDirection = animationManager.setDirection,
            lottie.stop = animationManager.stop,
            lottie.searchAnimations = searchAnimations,
            lottie.registerAnimation = animationManager.registerAnimation,
            lottie.loadAnimation = loadAnimation,
            lottie.setSubframeRendering = setSubframeRendering,
            lottie.resize = animationManager.resize,
            lottie.goToAndStop = animationManager.goToAndStop,
            lottie.destroy = animationManager.destroy,
            lottie.setQuality = setQuality,
            lottie.inBrowser = inBrowser,
            lottie.installPlugin = installPlugin,
            lottie.freeze = animationManager.freeze,
            lottie.unfreeze = animationManager.unfreeze,
            lottie.setVolume = animationManager.setVolume,
            lottie.mute = animationManager.mute,
            lottie.unmute = animationManager.unmute,
            lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations,
            lottie.setIDPrefix = setIDPrefix,
            lottie.__getFactory = getFactory,
            lottie.version = "5.7.13";
            var standalone = "__[STANDALONE]__", animationData = "__[ANIMATIONDATA]__", renderer = "", queryString;
            if (standalone) {
                var scripts = document.getElementsByTagName("script")
                  , index = scripts.length - 1
                  , myScript = scripts[index] || {
                    src: ""
                };
                queryString = myScript.src.replace(/^[^\?]+\??/, ""),
                renderer = getQueryVariable("renderer")
            }
            var readyStateCheckInterval = setInterval(checkReady, 100);
            return lottie
        }
        ,
        "function" == typeof define && define.amd ? define(function() {
            return factory(root)
        }) : "object" == typeof module && module.exports ? module.exports = factory(root) : (root.lottie = factory(root),
        root.bodymovin = root.lottie)),
        module.exports
    }
    .call({});
    var zc = ie;
    ja.register = zc;
    var zb = {};
    function le(r) {
        var e;
        if (Array.isArray(r) && (e = r[1],
        r = r[0]),
        zb[r])
            return zb[r];
        var $ = (r.substring(r.lastIndexOf(".") + 1, r.length) || r).toLowerCase()
          , t = yc[$];
        return t ? zb[r] = t(ge() + r).then(function(r) {
            return r && require.register(e, r),
            r
        }).catch(function(e) {
            throw delete zb[r],
            e
        }) : void 0
    }
    function Pb(r) {
        this.executor = r,
        this.promise = null
    }
    Pb.prototype.then = function(r, e) {
        return null === this.promise && (this.promise = new Promise(this.executor)),
        this.promise.then(r, e)
    }
    ,
    Pb.prototype.catch = function(r) {
        return null === this.promise && (this.promise = new Promise(this.executor)),
        this.promise.catch(r)
    }
    ;
    var me = {};
    me = function(n) {
        return new Promise(function(e, o) {
            var r = document.createElement("script");
            r.async = !0,
            r.type = "text/javascript",
            r.charset = "utf-8",
            r.src = n,
            r.onerror = function(n) {
                r.onerror = r.onload = null,
                o(n)
            }
            ,
            r.onload = function() {
                r.onerror = r.onload = null,
                e()
            }
            ,
            document.getElementsByTagName("head")[0].appendChild(r)
        }
        )
    }
    ;
    zc("js", me);
    function Ac(e) {
        return (Ac = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    function ne(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function Bc(e, t) {
        for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o.enumerable = o.enumerable || !1,
            o.configurable = !0,
            "value"in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
        }
    }
    function oe(e, t, r) {
        return t && Bc(e.prototype, t),
        r && Bc(e, r),
        e
    }
    function pe(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        t && Qb(e, t)
    }
    function qe(e) {
        var t = Cc();
        return function() {
            var r, o = Rb(e);
            if (t) {
                var n = Rb(this).constructor;
                r = Reflect.construct(o, arguments, n)
            } else
                r = o.apply(this, arguments);
            return re(this, r)
        }
    }
    function re(e, t) {
        if (t && ("object" === Ac(t) || "function" == typeof t))
            return t;
        if (void 0 !== t)
            throw new TypeError("Derived constructors may only return object or undefined");
        return se(e)
    }
    function se(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function te(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return (te = function(e) {
            if (null === e || !ve(e))
                return e;
            if ("function" != typeof e)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== t) {
                if (t.has(e))
                    return t.get(e);
                t.set(e, r)
            }
            function r() {
                return ue(e, arguments, Rb(this).constructor)
            }
            return r.prototype = Object.create(e.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            Qb(r, e)
        }
        )(e)
    }
    function ue(e, t, r) {
        return (ue = Cc() ? Reflect.construct : function(e, t, r) {
            var o = [null];
            o.push.apply(o, t);
            var n = new (Function.bind.apply(e, o));
            return r && Qb(n, r.prototype),
            n
        }
        ).apply(null, arguments)
    }
    function Cc() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function ve(e) {
        return -1 !== Function.toString.call(e).indexOf("[native code]")
    }
    function Qb(e, t) {
        return (Qb = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t,
            e
        }
        )(e, t)
    }
    function Rb(e) {
        return (Rb = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        )(e)
    }
    var Dc = {
        0: ja([["AW Comma Animation 3.5b5d94c0.js", "rtu3"], "rtu3"]),
        1: ja([["AW Comma Animation 2.2e51269b.js", "i87e"], "i87e"]),
        2: ja([["AW Comma Animation 5.eafadf0a.js", "y9IO"], "y9IO"]),
        3: ja([["AW Comma Animation 11-2.11ee930e.js", "kiZU"], "kiZU"]),
        4: ja([["AW Comma Animation 7.e24a3c69.js", "ceWq"], "ceWq"]),
        5: ja([["AW Comma Animation 1.46a40902.js", "DmlY"], "DmlY"]),
        6: ja([["AW Comma Animation 4.989ed146.js", "bwHn"], "bwHn"]),
        7: ja([["AW Comma Animation 12.cbb33f34.js", "zrNB"], "zrNB"]),
        8: ja([["AW Comma Animation 18.3ddbfa89.js", "LHQU"], "LHQU"]),
        9: ja([["AW Comma Animation 6.d3ee89d9.js", "WB58"], "WB58"]),
        10: ja([["AW Comma Animation 17.ea147846.js", "CgxN"], "CgxN"]),
        11: ja([["AW Comma Animation 10.d1b53bc0.js", "YDlg"], "YDlg"]),
        12: ja([["AW Comma Animation 9.04818042.js", "PRAB"], "PRAB"])
    }
      , we = [10]
      , xe = function(e) {
        pe(r, te(HTMLElement));
        var t = qe(r);
        function r() {
            return ne(this, r),
            t.apply(this, arguments)
        }
        return oe(r, [{
            key: "connectedCallback",
            value: function() {
                var e = this;
                this.frames = [0, 230, 410, 610, 1270, 1490, 1660, 1900],
                this.isBlinking = !0;
                var t = window.localStorage;
                this.timeOuts = [],
                this.wrapper = this.querySelector("#commaWrapper");
                var r = {
                    i: -1
                };
                if (t.getItem("lf_history"))
                    try {
                        var o = JSON.parse(t.getItem("lf_history"));
                        "object" != Ac(o) || isNaN(o.i) || ((r = o).t = new Date(r.t))
                    } catch (c) {}
                var n = new Date
                  , i = r.i
                  , a = Object.keys(Dc)
                  , s = a.length
                  , $ = 0
                  , u = (n - r.t) / 864e5
                  , l = Math.ceil(u) > 2;
                $ = -1 == i ? 0 : l ? Math.floor(Math.random() * s) : i++ < s - 1 ? i : 0,
                i = $,
                r.i = i,
                r.t = n,
                t.setItem("lf_history", JSON.stringify(r)),
                Dc[a[$]].then(function(t) {
                    var $slI9$$interop$default = be(ke);
                    e.animation = $slI9$$interop$default.d.loadAnimation({
                        container: e.wrapper,
                        renderer: "svg",
                        animationData: t,
                        loop: !1,
                        autoplay: !1
                    }),
                    we.indexOf($) > -1 && e.animation.setSubframe(!1),
                    e.comma = e.querySelector("svg"),
                    e.comma.style.width = e.comma.style.height = "",
                    e.comma.classList.add("blink"),
                    e.blinkTimeout = setTimeout(function() {
                        e.isBlinking = !1,
                        e.comma.classList.remove("blink"),
                        e.dispatchEvent(new CustomEvent("onBlinkEnded",{
                            bubbles: !0,
                            detail: null
                        }))
                    }, 2500),
                    e.timeOuts.push(e.blinkTimeout),
                    e.typeAnimation(2500)
                })
            }
        }, {
            key: "typeAnimation",
            value: function(e) {
                var t = this
                  , r = "LoveFrom".split("");
                this.wordmark = document.querySelector(".wordmark"),
                this.frames.forEach(function(o, n) {
                    var i = setTimeout(function() {
                        t.wordmark.innerHTML += r[n],
                        t.computePosition()
                    }, o + e);
                    t.timeOuts.push(i)
                });
                var o = setTimeout(function() {
                    t.animation.play()
                }, this.frames[this.frames.length - 1] + e);
                this.timeOuts.push(o)
            }
        }, {
            key: "startEarly",
            value: function() {
                this.isBlinking = !1,
                this.timeOuts.forEach(function(e) {
                    return clearTimeout(e)
                }),
                this.comma.classList.remove("blink"),
                this.typeAnimation(0)
            }
        }, {
            key: "goToEnd",
            value: function() {
                this.timeOuts.forEach(function(e) {
                    return clearTimeout(e)
                }),
                this.wordmark.innerHTML = "LoveFrom",
                this.computePosition(),
                this.comma.classList.remove("blink"),
                this.animation.goToAndStop(this.animation.getDuration(!0), !0)
            }
        }, {
            key: "computePosition",
            value: function() {
                if (this.wordmark) {
                    var e = this.wordmark.getBoundingClientRect()
                      , t = e.left + e.width - this.getBoundingClientRect().left;
                    t > 0 && (this.wrapper.style.transform = "translate3d(" + t + "px,0,0)")
                }
            }
        }, {
            key: "onResize",
            value: function() {
                this.computePosition()
            }
        }]),
        r
    }();
    function ye(t) {
        return (ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function ze(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function Ec(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1,
            s.configurable = !0,
            "value"in s && (s.writable = !0),
            Object.defineProperty(t, s.key, s)
        }
    }
    function Ae(t, e, i) {
        return e && Ec(t.prototype, e),
        i && Ec(t, i),
        t
    }
    function Be(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && Sb(t, e)
    }
    function Ce(t) {
        var e = Fc();
        return function() {
            var i, s = Tb(t);
            if (e) {
                var o = Tb(this).constructor;
                i = Reflect.construct(s, arguments, o)
            } else
                i = s.apply(this, arguments);
            return De(this, i)
        }
    }
    function De(t, e) {
        if (e && ("object" === ye(e) || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
        return Ee(t)
    }
    function Ee(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function Fe(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return (Fe = function(t) {
            if (null === t || !He(t))
                return t;
            if ("function" != typeof t)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t))
                    return e.get(t);
                e.set(t, i)
            }
            function i() {
                return Ge(t, arguments, Tb(this).constructor)
            }
            return i.prototype = Object.create(t.prototype, {
                constructor: {
                    value: i,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            Sb(i, t)
        }
        )(t)
    }
    function Ge(t, e, i) {
        return (Ge = Fc() ? Reflect.construct : function(t, e, i) {
            var s = [null];
            s.push.apply(s, e);
            var o = new (Function.bind.apply(t, s));
            return i && Sb(o, i.prototype),
            o
        }
        ).apply(null, arguments)
    }
    function Fc() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (t) {
            return !1
        }
    }
    function He(t) {
        return -1 !== Function.toString.call(t).indexOf("[native code]")
    }
    function Sb(t, e) {
        return (Sb = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function Tb(t) {
        return (Tb = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function Ca(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function Gc(t, r) {
        t.prototype = Object.create(r.prototype),
        t.prototype.constructor = t,
        t.__proto__ = r
    }
    var Hc, ea, Da, Ic, Jc, Ie, Je, lb, Kc, ka = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, Za = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, ya = 1e8, ca = 1 / ya, Ub = 2 * Math.PI, Ke = Ub / 4, Le = 0, Lc = Math.sqrt, Me = Math.cos, Ne = Math.sin, ha = function(t) {
        return "string" == typeof t
    }, fa = function(t) {
        return "function" == typeof t
    }, Ea = function(t) {
        return "number" == typeof t
    }, Vb = function(t) {
        return void 0 === t
    }, Fa = function(t) {
        return "object" == typeof t
    }, la = function(t) {
        return !1 !== t
    }, Mc = function() {
        return "undefined" != typeof window
    }, Nc = function(t) {
        return fa(t) || ha(t)
    }, Oc = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {}
    , oa = Array.isArray, Wb = /(?:-?\.?\d|\.)+/gi, Pc = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, $a = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Xb = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Qc = /[+-]=-?[.\d]+/, Rc = /[^,'"\[\]\s]+/gi, Oe = /[\d.+\-=]+(?:e[-+]\d*)*/i, pa = {}, Yb = {}, Sc = function(t) {
        return (Yb = ab(t, pa)) && Aa
    }, Zb = function(t, r) {
        return console.warn("Invalid property", t, "set to", r, "Missing plugin? gsap.registerPlugin()")
    }, Ab = function(t, r) {
        return !r && console.warn(t)
    }, Tc = function(t, r) {
        return t && (pa[t] = r) && Yb && (Yb[t] = r) || pa
    }, _a = function() {
        return 0
    }, $b = {}, Ha = [], Uc = {}, qa = {}, _b = {}, Pe = 30, Bb = [], Vc = "", ac = function(t) {
        var r, e, $ = t[0];
        if (Fa($) || fa($) || (t = [t]),
        !(r = ($._gsap || {}).harness)) {
            for (e = Bb.length; e-- && !Bb[e].targetTest($); )
                ;
            r = Bb[e]
        }
        for (e = t.length; e--; )
            t[e] && (t[e]._gsap || (t[e]._gsap = new ud(t[e],r))) || t.splice(e, 1);
        return t
    }, Qa = function(t) {
        return t._gsap || ac(va(t))[0]._gsap
    }, Wc = function(t, r, e) {
        return (e = t[r]) && fa(e) ? t[r]() : Vb(e) && t.getAttribute && t.getAttribute(r) || e
    }, ra = function(t, r) {
        return (t = t.split(",")).forEach(r) || t
    }, aa = function(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }, Qe = function(t, r) {
        for (var e = r.length, $ = 0; t.indexOf(r[$]) < 0 && ++$ < e; )
            ;
        return $ < e
    }, Cb = function() {
        var t, r, e = Ha.length, $ = Ha.slice(0);
        for (Uc = {},
        Ha.length = 0,
        t = 0; t < e; t++)
            (r = $[t]) && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
    }, Xc = function(t, r, e, $) {
        Ha.length && Cb(),
        t.render(r, e, $),
        Ha.length && Cb()
    }, Yc = function(t) {
        var r = parseFloat(t);
        return (r || 0 === r) && (t + "").match(Rc).length < 2 ? r : ha(t) ? t.trim() : t
    }, Zc = function(t) {
        return t
    }, ta = function(t, r) {
        for (var e in r)
            e in t || (t[e] = r[e]);
        return t
    }, Re = function(t, r) {
        for (var e in r)
            e in t || "duration" === e || "ease" === e || (t[e] = r[e])
    }, ab = function(t, r) {
        for (var e in r)
            t[e] = r[e];
        return t
    }, $c = function t(r, e) {
        for (var $ in e)
            "__proto__" !== $ && "constructor" !== $ && "prototype" !== $ && (r[$] = Fa(e[$]) ? t(r[$] || (r[$] = {}), e[$]) : e[$]);
        return r
    }, bc = function(t, r) {
        var e, $ = {};
        for (e in t)
            e in r || ($[e] = t[e]);
        return $
    }, Db = function(t) {
        var r = t.parent || ea
          , e = t.keyframes ? Re : ta;
        if (la(t.inherit))
            for (; r; )
                e(t, r.vars.defaults),
                r = r.parent || r._dp;
        return t
    }, Se = function(t, r) {
        for (var e = t.length, $ = e === r.length; $ && e-- && t[e] === r[e]; )
            ;
        return e < 0
    }, Te = function(t, r, e, $, i) {
        void 0 === e && (e = "_first"),
        void 0 === $ && ($ = "_last");
        var a, n = t[$];
        if (i)
            for (a = r[i]; n && n[i] > a; )
                n = n._prev;
        return n ? (r._next = n._next,
        n._next = r) : (r._next = t[e],
        t[e] = r),
        r._next ? r._next._prev = r : t[$] = r,
        r._prev = n,
        r.parent = r._dp = t,
        r
    }, Eb = function(t, r, e, $) {
        void 0 === e && (e = "_first"),
        void 0 === $ && ($ = "_last");
        var i = r._prev
          , a = r._next;
        i ? i._next = a : t[e] === r && (t[e] = a),
        a ? a._prev = i : t[$] === r && (t[$] = i),
        r._next = r._prev = r.parent = null
    }, Ia = function(t, r) {
        t.parent && (!r || t.parent.autoRemoveChildren) && t.parent.remove(t),
        t._act = 0
    }, Ra = function(t, r) {
        if (t && (!r || r._end > t._dur || r._start < 0))
            for (var e = t; e; )
                e._dirty = 1,
                e = e.parent;
        return t
    }, Ue = function(t) {
        for (var r = t.parent; r && r.parent; )
            r._dirty = 1,
            r.totalDuration(),
            r = r.parent;
        return t
    }, Ve = function t(r) {
        return !r || r._ts && t(r.parent)
    }, _c = function(t) {
        return t._repeat ? bb(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }, bb = function(t, r) {
        var e = Math.floor(t /= r);
        return t && e === t ? e - 1 : e
    }, Fb = function(t, r) {
        return (t - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    }, cc = function(t) {
        return t._end = aa(t._start + (t._tDur / Math.abs(t._ts || t._rts || ca) || 0))
    }, ad = function(t, r) {
        var e = t._dp;
        return e && e.smoothChildTiming && t._ts && (t._start = aa(e._time - (t._ts > 0 ? r / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - r) / -t._ts)),
        cc(t),
        e._dirty || Ra(e, t)),
        t
    }, bd = function(t, r) {
        var e;
        if ((r._time || r._initted && !r._dur) && (e = Fb(t.rawTime(), r),
        (!r._dur || nb(0, r.totalDuration(), e) - r._tTime > ca) && r.render(e, !0)),
        Ra(t, r)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (e = t; e._dp; )
                    e.rawTime() >= 0 && e.totalTime(e._tTime),
                    e = e._dp;
            t._zTime = -ca
        }
    }, za = function(t, r, e, $) {
        return r.parent && Ia(r),
        r._start = aa((Ea(e) ? e : e || t !== ea ? ua(t, e, r) : t._time) + r._delay),
        r._end = aa(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)),
        Te(t, r, "_first", "_last", t._sort ? "_start" : 0),
        dc(r) || (t._recent = r),
        $ || bd(t, r),
        t
    }, cd = function(t, r) {
        return (pa.ScrollTrigger || Zb("scrollTrigger", r)) && pa.ScrollTrigger.create(r, t)
    }, dd = function(t, r, e, $) {
        return rf(t, r),
        t._initted ? !e && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && Je !== xa.frame ? (Ha.push(t),
        t._lazy = [r, $],
        1) : void 0 : 1
    }, We = function t(r) {
        var e = r.parent;
        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || t(e))
    }, dc = function(t) {
        var r = t.data;
        return "isFromStart" === r || "isStart" === r
    }, Xe = function(t, r, e, $) {
        var i, a, n, o = t.ratio, s = r < 0 || !r && (!t._start && We(t) && (t._initted || !dc(t)) || (t._ts < 0 || t._dp._ts < 0) && !dc(t)) ? 0 : 1, _ = t._rDelay, p = 0;
        if (_ && t._repeat && (p = nb(0, t._tDur, r),
        a = bb(p, _),
        n = bb(t._tTime, _),
        t._yoyo && 1 & a && (s = 1 - s),
        a !== n && (o = 1 - s,
        t.vars.repeatRefresh && t._initted && t.invalidate())),
        s !== o || $ || t._zTime === ca || !r && t._zTime) {
            if (!t._initted && dd(t, r, $, e))
                return;
            for (n = t._zTime,
            t._zTime = r || (e ? ca : 0),
            e || (e = r && !n),
            t.ratio = s,
            t._from && (s = 1 - s),
            t._time = 0,
            t._tTime = p,
            i = t._pt; i; )
                i.r(s, i.d),
                i = i._next;
            t._startAt && r < 0 && t._startAt.render(r, !0, !0),
            t._onUpdate && !e && wa(t, "onUpdate"),
            p && t._repeat && !e && t.parent && wa(t, "onRepeat"),
            (r >= t._tDur || r < 0) && t.ratio === s && (s && Ia(t, 1),
            e || (wa(t, s ? "onComplete" : "onReverseComplete", !0),
            t._prom && t._prom()))
        } else
            t._zTime || (t._zTime = r)
    }, Ye = function(t, r, e) {
        var $;
        if (e > r)
            for ($ = t._first; $ && $._start <= e; ) {
                if (!$._dur && "isPause" === $.data && $._start > r)
                    return $;
                $ = $._next
            }
        else
            for ($ = t._last; $ && $._start >= e; ) {
                if (!$._dur && "isPause" === $.data && $._start < r)
                    return $;
                $ = $._prev
            }
    }, cb = function(t, r, e, $) {
        var i = t._repeat
          , a = aa(r) || 0
          , n = t._tTime / t._tDur;
        return n && !$ && (t._time *= a / t._dur),
        t._dur = a,
        t._tDur = i ? i < 0 ? 1e10 : aa(a * (i + 1) + t._rDelay * i) : a,
        n && !$ ? ad(t, t._tTime = t._tDur * n) : t.parent && cc(t),
        e || Ra(t.parent, t),
        t
    }, ed = function(t) {
        return t instanceof ma ? Ra(t) : cb(t, t._dur)
    }, Ze = {
        _start: 0,
        endTime: _a,
        totalDuration: _a
    }, ua = function t(r, e, $) {
        var i, a, n, o = r.labels, s = r._recent || Ze, _ = r.duration() >= ya ? s.endTime(!1) : r._dur;
        return ha(e) && (isNaN(e) || e in o) ? (a = e.charAt(0),
        n = "%" === e.substr(-1),
        i = e.indexOf("="),
        "<" === a || ">" === a ? (i >= 0 && (e = e.replace(/=/, "")),
        ("<" === a ? s._start : s.endTime(s._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (n ? (i < 0 ? s : $).totalDuration() / 100 : 1)) : i < 0 ? (e in o || (o[e] = _),
        o[e]) : (a = parseFloat(e.charAt(i - 1) + e.substr(i + 1)),
        n && $ && (a = a / 100 * (oa($) ? $[0] : $).totalDuration()),
        i > 1 ? t(r, e.substr(0, i - 1), $) + a : _ + a)) : null == e ? _ : +e
    }, mb = function(t, r, e) {
        var $, i, a = Ea(r[1]), n = (a ? 2 : 1) + (t < 2 ? 0 : 1), o = r[n];
        if (a && (o.duration = r[1]),
        o.parent = e,
        t) {
            for ($ = o,
            i = e; i && !("immediateRender"in $); )
                $ = i.vars.defaults || {},
                i = la(i.vars.inherit) && i.parent;
            o.immediateRender = la($.immediateRender),
            t < 2 ? o.runBackwards = 1 : o.startAt = r[n - 1]
        }
        return new ga(r[0],o,r[n + 1])
    }, Ja = function(t, r) {
        return t || 0 === t ? r(t) : r
    }, nb = function(t, r, e) {
        return e < t ? t : e > r ? r : e
    }, sa = function(t) {
        if ("string" != typeof t)
            return "";
        var r = Oe.exec(t);
        return r ? t.substr(r.index + r[0].length) : ""
    }, $e = function(t, r, e) {
        return Ja(e, function(e) {
            return nb(t, r, e)
        })
    }, ec = [].slice, fd = function(t, r) {
        return t && Fa(t) && "length"in t && (!r && !t.length || t.length - 1 in t && Fa(t[0])) && !t.nodeType && t !== Da
    }, _e = function(t, r, e) {
        return void 0 === e && (e = []),
        t.forEach(function(t) {
            var $;
            return ha(t) && !r || fd(t, 1) ? ($ = e).push.apply($, va(t)) : e.push(t)
        }) || e
    }, va = function(t, r, e) {
        return !ha(t) || e || !Ic && db() ? oa(t) ? _e(t, e) : fd(t) ? ec.call(t, 0) : t ? [t] : [] : ec.call((r || Jc).querySelectorAll(t), 0)
    }, af = function(t) {
        return t = va(t)[0] || Ab("Invalid scope") || {},
        function(r) {
            var e = t.current || t.nativeElement || t;
            return va(r, e.querySelectorAll ? e : e === t ? Ab("Invalid scope") || Jc.createElement("div") : t)
        }
    }, gd = function(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }, hd = function(t) {
        if (fa(t))
            return t;
        var r = Fa(t) ? t : {
            each: t
        }
          , e = eb(r.ease)
          , $ = r.from || 0
          , i = parseFloat(r.base) || 0
          , a = {}
          , n = $ > 0 && $ < 1
          , o = isNaN($) || n
          , s = r.axis
          , _ = $
          , p = $;
        return ha($) ? _ = p = {
            center: .5,
            edges: .5,
            end: 1
        }[$] || 0 : !n && o && (_ = $[0],
        p = $[1]),
        function(t, n, u) {
            var O, U, l, K, v, h, c, f, d, m = (u || r).length, x = a[m];
            if (!x) {
                if (!(d = "auto" === r.grid ? 0 : (r.grid || [1, ya])[1])) {
                    for (c = -ya; c < (c = u[d++].getBoundingClientRect().left) && d < m; )
                        ;
                    d--
                }
                for (x = a[m] = [],
                O = o ? Math.min(d, m) * _ - .5 : $ % d,
                U = o ? m * p / d - .5 : $ / d | 0,
                c = 0,
                f = ya,
                h = 0; h < m; h++)
                    l = h % d - O,
                    K = U - (h / d | 0),
                    x[h] = v = s ? Math.abs("y" === s ? K : l) : Lc(l * l + K * K),
                    v > c && (c = v),
                    v < f && (f = v);
                "random" === $ && gd(x),
                x.max = c - f,
                x.min = f,
                x.v = m = (parseFloat(r.amount) || parseFloat(r.each) * (d > m ? m - 1 : s ? "y" === s ? m / d : d : Math.max(d, m / d)) || 0) * ("edges" === $ ? -1 : 1),
                x.b = m < 0 ? i - m : i,
                x.u = sa(r.amount || r.each) || 0,
                e = e && m < 0 ? rd(e) : e
            }
            return m = (x[t] - x.min) / x.max || 0,
            aa(x.b + (e ? e(m) : m) * x.v) + x.u
        }
    }, fc = function(t) {
        var r = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
        return function(e) {
            var $ = Math.round(parseFloat(e) / t) * t * r;
            return ($ - $ % 1) / r + (Ea(e) ? 0 : sa(e))
        }
    }, id = function(t, r) {
        var e, $, i = oa(t);
        return !i && Fa(t) && (e = i = t.radius || ya,
        t.values ? (t = va(t.values),
        ($ = !Ea(t[0])) && (e *= e)) : t = fc(t.increment)),
        Ja(r, i ? fa(t) ? function(r) {
            return $ = t(r),
            Math.abs($ - r) <= e ? $ : r
        }
        : function(r) {
            for (var i, a, n = parseFloat($ ? r.x : r), o = parseFloat($ ? r.y : 0), s = ya, _ = 0, p = t.length; p--; )
                (i = $ ? (i = t[p].x - n) * i + (a = t[p].y - o) * a : Math.abs(t[p] - n)) < s && (s = i,
                _ = p);
            return _ = !e || s <= e ? t[_] : r,
            $ || _ === r || Ea(r) ? _ : _ + sa(r)
        }
        : fc(t))
    }, jd = function(t, r, e, $) {
        return Ja(oa(t) ? !r : !0 === e ? !!(e = 0) : !$, function() {
            return oa(t) ? t[~~(Math.random() * t.length)] : (e = e || 1e-5) && ($ = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) && Math.floor(Math.round((t - e / 2 + Math.random() * (r - t + .99 * e)) / e) * e * $) / $
        })
    }, bf = function() {
        for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
        return function(t) {
            return r.reduce(function(t, r) {
                return r(t)
            }, t)
        }
    }, cf = function(t, r) {
        return function(e) {
            return t(parseFloat(e)) + (r || sa(e))
        }
    }, df = function(t, r, e) {
        return ld(t, r, 0, 1, e)
    }, kd = function(t, r, e) {
        return Ja(e, function(e) {
            return t[~~r(e)]
        })
    }, ef = function t(r, e, $) {
        var i = e - r;
        return oa(r) ? kd(r, t(0, r.length), e) : Ja($, function(t) {
            return (i + (t - r) % i) % i + r
        })
    }, ff = function t(r, e, $) {
        var i = e - r
          , a = 2 * i;
        return oa(r) ? kd(r, t(0, r.length - 1), e) : Ja($, function(t) {
            return r + ((t = (a + (t - r) % a) % a || 0) > i ? a - t : t)
        })
    }, Gb = function(t) {
        for (var r, e, $, i, a = 0, n = ""; ~(r = t.indexOf("random(", a)); )
            $ = t.indexOf(")", r),
            i = "[" === t.charAt(r + 7),
            e = t.substr(r + 7, $ - r - 7).match(i ? Rc : Wb),
            n += t.substr(a, r - a) + jd(i ? e : +e[0], i ? 0 : +e[1], +e[2] || 1e-5),
            a = $ + 1;
        return n + t.substr(a, t.length - a)
    }, ld = function(t, r, e, $, i) {
        var a = r - t
          , n = $ - e;
        return Ja(i, function(r) {
            return e + ((r - t) / a * n || 0)
        })
    }, gf = function t(r, e, $, i) {
        var a = isNaN(r + e) ? 0 : function(t) {
            return (1 - t) * r + t * e
        }
        ;
        if (!a) {
            var n, o, s, _, p, u = ha(r), O = {};
            if (!0 === $ && (i = 1) && ($ = null),
            u)
                r = {
                    p: r
                },
                e = {
                    p: e
                };
            else if (oa(r) && !oa(e)) {
                for (s = [],
                _ = r.length,
                p = _ - 2,
                o = 1; o < _; o++)
                    s.push(t(r[o - 1], r[o]));
                _--,
                a = function(t) {
                    t *= _;
                    var r = Math.min(p, ~~t);
                    return s[r](t - r)
                }
                ,
                $ = e
            } else
                i || (r = ab(oa(r) ? [] : {}, r));
            if (!s) {
                for (n in e)
                    jc.call(O, r, n, "get", e[n]);
                a = function(t) {
                    return mc(t, O) || (u ? r.p : r)
                }
            }
        }
        return Ja($, a)
    }, md = function(t, r, e) {
        var $, i, a, n = t.labels, o = ya;
        for ($ in n)
            (i = n[$] - r) < 0 == !!e && i && o > (i = Math.abs(i)) && (a = $,
            o = i);
        return a
    }, wa = function(t, r, e) {
        var $, i, a = t.vars, n = a[r];
        if (n)
            return $ = a[r + "Params"],
            i = a.callbackScope || t,
            e && Ha.length && Cb(),
            $ ? n.apply(i, $) : n.call(i)
    }, pb = function(t) {
        return Ia(t),
        t.scrollTrigger && t.scrollTrigger.kill(!1),
        t.progress() < 1 && wa(t, "onInterrupt"),
        t
    }, hf = function(t) {
        var r = (t = !t.name && t.default || t).name
          , e = fa(t)
          , $ = r && !e && t.init ? function() {
            this._props = []
        }
        : t
          , i = {
            init: _a,
            render: mc,
            add: jc,
            kill: yf,
            modifier: xf,
            rawVars: 0
        }
          , a = {
            targetTest: 0,
            get: 0,
            getSetter: lc,
            aliases: {},
            register: 0
        };
        if (db(),
        t !== $) {
            if (qa[r])
                return;
            ta($, ta(bc(t, i), a)),
            ab($.prototype, ab(i, bc(t, a))),
            qa[$.prop = r] = $,
            t.targetTest && (Bb.push($),
            $b[r] = 1),
            r = ("css" === r ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin"
        }
        Tc(r, $),
        t.register && t.register(Aa, $, na)
    }, da = 255, qb = {
        aqua: [0, da, da],
        lime: [0, da, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, da],
        navy: [0, 0, 128],
        white: [da, da, da],
        olive: [128, 128, 0],
        yellow: [da, da, 0],
        orange: [da, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [da, 0, 0],
        pink: [da, 192, 203],
        cyan: [0, da, da],
        transparent: [da, da, da, 0]
    }, gc = function(t, r, e) {
        return (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? r + (e - r) * t * 6 : t < .5 ? e : 3 * t < 2 ? r + (e - r) * (2 / 3 - t) * 6 : r) * da + .5 | 0
    }, nd = function(t, r, e) {
        var $, i, a, n, o, s, _, p, u, O, U = t ? Ea(t) ? [t >> 16, t >> 8 & da, t & da] : 0 : qb.black;
        if (!U) {
            if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
            qb[t])
                U = qb[t];
            else if ("#" === t.charAt(0)) {
                if (t.length < 6 && ($ = t.charAt(1),
                i = t.charAt(2),
                a = t.charAt(3),
                t = "#" + $ + $ + i + i + a + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                9 === t.length)
                    return [(U = parseInt(t.substr(1, 6), 16)) >> 16, U >> 8 & da, U & da, parseInt(t.substr(7), 16) / 255];
                U = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & da, t & da]
            } else if ("hsl" === t.substr(0, 3)) {
                if (U = O = t.match(Wb),
                r) {
                    if (~t.indexOf("="))
                        return U = t.match(Pc),
                        e && U.length < 4 && (U[3] = 1),
                        U
                } else
                    n = +U[0] % 360 / 360,
                    o = +U[1] / 100,
                    $ = 2 * (s = +U[2] / 100) - (i = s <= .5 ? s * (o + 1) : s + o - s * o),
                    U.length > 3 && (U[3] *= 1),
                    U[0] = gc(n + 1 / 3, $, i),
                    U[1] = gc(n, $, i),
                    U[2] = gc(n - 1 / 3, $, i);
            } else
                U = t.match(Wb) || qb.transparent;
            U = U.map(Number)
        }
        return r && !O && ($ = U[0] / da,
        i = U[1] / da,
        a = U[2] / da,
        s = ((_ = Math.max($, i, a)) + (p = Math.min($, i, a))) / 2,
        _ === p ? n = o = 0 : (u = _ - p,
        o = s > .5 ? u / (2 - _ - p) : u / (_ + p),
        n = _ === $ ? (i - a) / u + (i < a ? 6 : 0) : _ === i ? (a - $) / u + 2 : ($ - i) / u + 4,
        n *= 60),
        U[0] = ~~(n + .5),
        U[1] = ~~(100 * o + .5),
        U[2] = ~~(100 * s + .5)),
        e && U.length < 4 && (U[3] = 1),
        U
    }, od = function(t) {
        var r = []
          , e = []
          , $ = -1;
        return t.split(Ka).forEach(function(t) {
            var i = t.match($a) || [];
            r.push.apply(r, i),
            e.push($ += i.length + 1)
        }),
        r.c = e,
        r
    }, pd = function(t, r, e) {
        var $, i, a, n, o = "", s = (t + o).match(Ka), _ = r ? "hsla(" : "rgba(", p = 0;
        if (!s)
            return t;
        if (s = s.map(function(t) {
            return (t = nd(t, r, 1)) && _ + (r ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
        }),
        e && (a = od(t),
        ($ = e.c).join(o) !== a.c.join(o)))
            for (n = (i = t.replace(Ka, "1").split($a)).length - 1; p < n; p++)
                o += i[p] + (~$.indexOf(p) ? s.shift() || _ + "0,0,0,0)" : (a.length ? a : s.length ? s : e).shift());
        if (!i)
            for (n = (i = t.split(Ka)).length - 1; p < n; p++)
                o += i[p] + s[p];
        return o + i[n]
    }, Ka = function() {
        var t, r = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
        for (t in qb)
            r += "|" + t + "\\b";
        return new RegExp(r + ")","gi")
    }(), jf = /hsl[a]?\(/, qd = function(t) {
        var r, e = t.join(" ");
        if (Ka.lastIndex = 0,
        Ka.test(e))
            return r = jf.test(e),
            t[1] = pd(t[1], r),
            t[0] = pd(t[0], r, od(t[1])),
            !0
    }, xa = function() {
        var t, r, e, $, i, a, n = Date.now, o = 500, s = 33, _ = n(), p = _, u = 1e3 / 240, O = u, U = [], l = function e(l) {
            var K, v, h, c, f = n() - p, d = !0 === l;
            if (f > o && (_ += f - s),
            ((K = (h = (p += f) - _) - O) > 0 || d) && (c = ++$.frame,
            i = h - 1e3 * $.time,
            $.time = h /= 1e3,
            O += K + (K >= u ? 4 : u - K),
            v = 1),
            d || (t = r(e)),
            v)
                for (a = 0; a < U.length; a++)
                    U[a](h, i, c, l)
        };
        return $ = {
            time: 0,
            frame: 0,
            tick: function() {
                l(!0)
            },
            deltaRatio: function(t) {
                return i / (1e3 / (t || 60))
            },
            wake: function() {
                Ie && (!Ic && Mc() && (Da = Ic = window,
                Jc = Da.document || {},
                pa.gsap = Aa,
                (Da.gsapVersions || (Da.gsapVersions = [])).push(Aa.version),
                Sc(Yb || Da.GreenSockGlobals || !Da.gsap && Da || {}),
                e = Da.requestAnimationFrame),
                t && $.sleep(),
                r = e || function(t) {
                    return setTimeout(t, O - 1e3 * $.time + 1 | 0)
                }
                ,
                Kc = 1,
                l(2))
            },
            sleep: function() {
                (e ? Da.cancelAnimationFrame : clearTimeout)(t),
                Kc = 0,
                r = _a
            },
            lagSmoothing: function(t, r) {
                o = t || 1 / ca,
                s = Math.min(r, o, 0)
            },
            fps: function(t) {
                u = 1e3 / (t || 240),
                O = 1e3 * $.time + u
            },
            add: function(t) {
                U.indexOf(t) < 0 && U.push(t),
                db()
            },
            remove: function(t) {
                var r;
                ~(r = U.indexOf(t)) && U.splice(r, 1) && a >= r && a--
            },
            _listeners: U
        }
    }(), db = function() {
        return !Kc && xa.wake()
    }, ba = {}, kf = /^[\d.\-M][\d.\-,\s]/, lf = /["']/g, mf = function(t) {
        for (var r, e, $, i = {}, a = t.substr(1, t.length - 3).split(":"), n = a[0], o = 1, s = a.length; o < s; o++)
            e = a[o],
            r = o !== s - 1 ? e.lastIndexOf(",") : e.length,
            $ = e.substr(0, r),
            i[n] = isNaN($) ? $.replace(lf, "").trim() : +$,
            n = e.substr(r + 1).trim();
        return i
    }, nf = function(t) {
        var r = t.indexOf("(") + 1
          , e = t.indexOf(")")
          , $ = t.indexOf("(", r);
        return t.substring(r, ~$ && $ < e ? t.indexOf(")", e + 1) : e)
    }, of = function(t) {
        var r = (t + "").split("(")
          , e = ba[r[0]];
        return e && r.length > 1 && e.config ? e.config.apply(null, ~t.indexOf("{") ? [mf(r[1])] : nf(t).split(",").map(Yc)) : ba._CE && kf.test(t) ? ba._CE("", t) : e
    }, rd = function(t) {
        return function(r) {
            return 1 - t(1 - r)
        }
    }, sd = function t(r, e) {
        for (var $, i = r._first; i; )
            i instanceof ma ? t(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? t(i.timeline, e) : ($ = i._ease,
            i._ease = i._yEase,
            i._yEase = $,
            i._yoyo = e)),
            i = i._next
    }, eb = function(t, r) {
        return t && (fa(t) ? t : ba[t] || of(t)) || r
    }, Sa = function(t, r, e, $) {
        void 0 === e && (e = function(t) {
            return 1 - r(1 - t)
        }
        ),
        void 0 === $ && ($ = function(t) {
            return t < .5 ? r(2 * t) / 2 : 1 - r(2 * (1 - t)) / 2
        }
        );
        var i, a = {
            easeIn: r,
            easeOut: e,
            easeInOut: $
        };
        return ra(t, function(t) {
            for (var r in ba[t] = pa[t] = a,
            ba[i = t.toLowerCase()] = e,
            a)
                ba[i + ("easeIn" === r ? ".in" : "easeOut" === r ? ".out" : ".inOut")] = ba[t + "." + r] = a[r]
        }),
        a
    }, td = function(t) {
        return function(r) {
            return r < .5 ? (1 - t(1 - 2 * r)) / 2 : .5 + t(2 * (r - .5)) / 2
        }
    }, hc = function t(r, e, $) {
        var i = e >= 1 ? e : 1
          , a = ($ || (r ? .3 : .45)) / (e < 1 ? e : 1)
          , n = a / Ub * (Math.asin(1 / i) || 0)
          , o = function(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Ne((t - n) * a) + 1
        }
          , s = "out" === r ? o : "in" === r ? function(t) {
            return 1 - o(1 - t)
        }
        : td(o);
        return a = Ub / a,
        s.config = function(e, $) {
            return t(r, e, $)
        }
        ,
        s
    }, ic = function t(r, e) {
        void 0 === e && (e = 1.70158);
        var $ = function(t) {
            return t ? --t * t * ((e + 1) * t + e) + 1 : 0
        }
          , i = "out" === r ? $ : "in" === r ? function(t) {
            return 1 - $(1 - t)
        }
        : td($);
        return i.config = function(e) {
            return t(r, e)
        }
        ,
        i
    };
    ra("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, r) {
        var e = r < 5 ? r + 1 : r;
        Sa(t + ",Power" + (e - 1), r ? function(t) {
            return Math.pow(t, e)
        }
        : function(t) {
            return t
        }
        , function(t) {
            return 1 - Math.pow(1 - t, e)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, e) / 2 : 1 - Math.pow(2 * (1 - t), e) / 2
        })
    }),
    ba.Linear.easeNone = ba.none = ba.Linear.easeIn,
    Sa("Elastic", hc("in"), hc("out"), hc()),
    function(t, r) {
        var e = 1 / r
          , $ = function($) {
            return $ < e ? t * $ * $ : $ < .7272727272727273 ? t * Math.pow($ - 1.5 / r, 2) + .75 : $ < .9090909090909092 ? t * ($ -= 2.25 / r) * $ + .9375 : t * Math.pow($ - 2.625 / r, 2) + .984375
        };
        Sa("Bounce", function(t) {
            return 1 - $(1 - t)
        }, $)
    }(7.5625, 2.75),
    Sa("Expo", function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    }),
    Sa("Circ", function(t) {
        return -(Lc(1 - t * t) - 1)
    }),
    Sa("Sine", function(t) {
        return 1 === t ? 1 : 1 - Me(t * Ke)
    }),
    Sa("Back", ic("in"), ic("out"), ic()),
    ba.SteppedEase = ba.steps = pa.SteppedEase = {
        config: function(t, r) {
            void 0 === t && (t = 1);
            var e = 1 / t
              , $ = t + (r ? 0 : 1)
              , i = r ? 1 : 0
              , a = 1 - ca;
            return function(t) {
                return (($ * nb(0, a, t) | 0) + i) * e
            }
        }
    },
    Za.ease = ba["quad.out"],
    ra("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return Vc += t + "," + t + "Params,"
    });
    var ud = function(t, r) {
        this.id = Le++,
        t._gsap = this,
        this.target = t,
        this.harness = r,
        this.get = r ? r.get : Wc,
        this.set = r ? r.getSetter : lc
    };
    var rb = function() {
        function t(t) {
            this.vars = t,
            this._delay = +t.delay || 0,
            (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
            this._yoyo = !!t.yoyo || !!t.yoyoEase),
            this._ts = 1,
            cb(this, +t.duration, 1, 1),
            this.data = t.data,
            Kc || xa.wake()
        }
        var r = t.prototype;
        return r.delay = function(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
            this._delay = t,
            this) : this._delay
        }
        ,
        r.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }
        ,
        r.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0,
            cb(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }
        ,
        r.totalTime = function(t, r) {
            if (db(),
            !arguments.length)
                return this._tTime;
            var e = this._dp;
            if (e && e.smoothChildTiming && this._ts) {
                for (ad(this, t),
                !e._dp || e.parent || bd(e, this); e.parent; )
                    e.parent._time !== e._start + (e._ts >= 0 ? e._tTime / e._ts : (e.totalDuration() - e._tTime) / -e._ts) && e.totalTime(e._tTime, !0),
                    e = e.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && za(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !r || this._initted && Math.abs(this._zTime) === ca || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
            Xc(this, t, r)),
            this
        }
        ,
        r.time = function(t, r) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + _c(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), r) : this._time
        }
        ,
        r.totalProgress = function(t, r) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }
        ,
        r.progress = function(t, r) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + _c(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }
        ,
        r.iteration = function(t, r) {
            var e = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * e, r) : this._repeat ? bb(this._tTime, e) + 1 : 1
        }
        ,
        r.timeScale = function(t) {
            if (!arguments.length)
                return this._rts === -ca ? 0 : this._rts;
            if (this._rts === t)
                return this;
            var r = this.parent && this._ts ? Fb(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0,
            this._ts = this._ps || t === -ca ? 0 : this._rts,
            Ue(this.totalTime(nb(-this._delay, this._tDur, r), !0))
        }
        ,
        r.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t,
            t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
            this._ts = this._act = 0) : (db(),
            this._ts = this._rts,
            this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== ca && (this._tTime -= ca)))),
            this) : this._ps
        }
        ,
        r.startTime = function(t) {
            if (arguments.length) {
                this._start = t;
                var r = this.parent || this._dp;
                return r && (r._sort || !this.parent) && za(r, this, t - this._delay),
                this
            }
            return this._start
        }
        ,
        r.endTime = function(t) {
            return this._start + (la(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        }
        ,
        r.rawTime = function(t) {
            var r = this.parent || this._dp;
            return r ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Fb(r.rawTime(t), this) : this._tTime : this._tTime
        }
        ,
        r.globalTime = function(t) {
            for (var r = this, e = arguments.length ? t : r.rawTime(); r; )
                e = r._start + e / (r._ts || 1),
                r = r._dp;
            return e
        }
        ,
        r.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
            ed(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }
        ,
        r.repeatDelay = function(t) {
            if (arguments.length) {
                var r = this._time;
                return this._rDelay = t,
                ed(this),
                r ? this.time(r) : this
            }
            return this._rDelay
        }
        ,
        r.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
            this) : this._yoyo
        }
        ,
        r.seek = function(t, r) {
            return this.totalTime(ua(this, t), la(r))
        }
        ,
        r.restart = function(t, r) {
            return this.play().totalTime(t ? -this._delay : 0, la(r))
        }
        ,
        r.play = function(t, r) {
            return null != t && this.seek(t, r),
            this.reversed(!1).paused(!1)
        }
        ,
        r.reverse = function(t, r) {
            return null != t && this.seek(t || this.totalDuration(), r),
            this.reversed(!0).paused(!1)
        }
        ,
        r.pause = function(t, r) {
            return null != t && this.seek(t, r),
            this.paused(!0)
        }
        ,
        r.resume = function() {
            return this.paused(!1)
        }
        ,
        r.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -ca : 0)),
            this) : this._rts < 0
        }
        ,
        r.invalidate = function() {
            return this._initted = this._act = 0,
            this._zTime = -ca,
            this
        }
        ,
        r.isActive = function() {
            var t, r = this.parent || this._dp, e = this._start;
            return !(r && !(this._ts && this._initted && r.isActive() && (t = r.rawTime(!0)) >= e && t < this.endTime(!0) - ca))
        }
        ,
        r.eventCallback = function(t, r, e) {
            var $ = this.vars;
            return arguments.length > 1 ? (r ? ($[t] = r,
            e && ($[t + "Params"] = e),
            "onUpdate" === t && (this._onUpdate = r)) : delete $[t],
            this) : $[t]
        }
        ,
        r.then = function(t) {
            var r = this;
            return new Promise(function(e) {
                var $ = fa(t) ? t : Zc
                  , i = function() {
                    var t = r.then;
                    r.then = null,
                    fa($) && ($ = $(r)) && ($.then || $ === r) && (r.then = t),
                    e($),
                    r.then = t
                };
                r._initted && 1 === r.totalProgress() && r._ts >= 0 || !r._tTime && r._ts < 0 ? i() : r._prom = i
            }
            )
        }
        ,
        r.kill = function() {
            pb(this)
        }
        ,
        t
    }();
    ta(rb.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -ca,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var ma = function(t) {
        function r(r, e) {
            var $;
            return void 0 === r && (r = {}),
            ($ = t.call(this, r) || this).labels = {},
            $.smoothChildTiming = !!r.smoothChildTiming,
            $.autoRemoveChildren = !!r.autoRemoveChildren,
            $._sort = la(r.sortChildren),
            ea && za(r.parent || ea, Ca($), e),
            r.reversed && $.reverse(),
            r.paused && $.paused(!0),
            r.scrollTrigger && cd(Ca($), r.scrollTrigger),
            $
        }
        Gc(r, t);
        var e = r.prototype;
        return e.to = function(t, r, e) {
            return mb(0, arguments, this),
            this
        }
        ,
        e.from = function(t, r, e) {
            return mb(1, arguments, this),
            this
        }
        ,
        e.fromTo = function(t, r, e, $) {
            return mb(2, arguments, this),
            this
        }
        ,
        e.set = function(t, r, e) {
            return r.duration = 0,
            r.parent = this,
            Db(r).repeatDelay || (r.repeat = 0),
            r.immediateRender = !!r.immediateRender,
            new ga(t,r,ua(this, e),1),
            this
        }
        ,
        e.call = function(t, r, e) {
            return za(this, ga.delayedCall(0, t, r), e)
        }
        ,
        e.staggerTo = function(t, r, e, $, i, a, n) {
            return e.duration = r,
            e.stagger = e.stagger || $,
            e.onComplete = a,
            e.onCompleteParams = n,
            e.parent = this,
            new ga(t,e,ua(this, i)),
            this
        }
        ,
        e.staggerFrom = function(t, r, e, $, i, a, n) {
            return e.runBackwards = 1,
            Db(e).immediateRender = la(e.immediateRender),
            this.staggerTo(t, r, e, $, i, a, n)
        }
        ,
        e.staggerFromTo = function(t, r, e, $, i, a, n, o) {
            return $.startAt = e,
            Db($).immediateRender = la($.immediateRender),
            this.staggerTo(t, r, $, i, a, n, o)
        }
        ,
        e.render = function(t, r, e) {
            var $, i, a, n, o, s, _, p, u, O, U, l, K = this._time, v = this._dirty ? this.totalDuration() : this._tDur, h = this._dur, c = this !== ea && t > v - ca && t >= 0 ? v : t < ca ? 0 : t, f = this._zTime < 0 != t < 0 && (this._initted || !h);
            if (c !== this._tTime || e || f) {
                if (K !== this._time && h && (c += this._time - K,
                t += this._time - K),
                $ = c,
                u = this._start,
                s = !(p = this._ts),
                f && (h || (K = this._zTime),
                (t || !r) && (this._zTime = t)),
                this._repeat) {
                    if (U = this._yoyo,
                    o = h + this._rDelay,
                    this._repeat < -1 && t < 0)
                        return this.totalTime(100 * o + t, r, e);
                    if ($ = aa(c % o),
                    c === v ? (n = this._repeat,
                    $ = h) : ((n = ~~(c / o)) && n === c / o && ($ = h,
                    n--),
                    $ > h && ($ = h)),
                    O = bb(this._tTime, o),
                    !K && this._tTime && O !== n && (O = n),
                    U && 1 & n && ($ = h - $,
                    l = 1),
                    n !== O && !this._lock) {
                        var d = U && 1 & O
                          , m = d === (U && 1 & n);
                        if (n < O && (d = !d),
                        K = d ? 0 : h,
                        this._lock = 1,
                        this.render(K || (l ? 0 : aa(n * o)), r, !h)._lock = 0,
                        this._tTime = c,
                        !r && this.parent && wa(this, "onRepeat"),
                        this.vars.repeatRefresh && !l && (this.invalidate()._lock = 1),
                        K && K !== this._time || s !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                            return this;
                        if (h = this._dur,
                        v = this._tDur,
                        m && (this._lock = 2,
                        K = d ? h : -1e-4,
                        this.render(K, !0),
                        this.vars.repeatRefresh && !l && this.invalidate()),
                        this._lock = 0,
                        !this._ts && !s)
                            return this;
                        sd(this, l)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (_ = Ye(this, aa(K), aa($))) && (c -= $ - ($ = _._start)),
                this._tTime = c,
                this._time = $,
                this._act = !p,
                this._initted || (this._onUpdate = this.vars.onUpdate,
                this._initted = 1,
                this._zTime = t,
                K = 0),
                !K && $ && !r && (wa(this, "onStart"),
                this._tTime !== c))
                    return this;
                if ($ >= K && t >= 0)
                    for (i = this._first; i; ) {
                        if (a = i._next,
                        (i._act || $ >= i._start) && i._ts && _ !== i) {
                            if (i.parent !== this)
                                return this.render(t, r, e);
                            if (i.render(i._ts > 0 ? ($ - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + ($ - i._start) * i._ts, r, e),
                            $ !== this._time || !this._ts && !s) {
                                _ = 0,
                                a && (c += this._zTime = -ca);
                                break
                            }
                        }
                        i = a
                    }
                else {
                    i = this._last;
                    for (var x = t < 0 ? t : $; i; ) {
                        if (a = i._prev,
                        (i._act || x <= i._end) && i._ts && _ !== i) {
                            if (i.parent !== this)
                                return this.render(t, r, e);
                            if (i.render(i._ts > 0 ? (x - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (x - i._start) * i._ts, r, e),
                            $ !== this._time || !this._ts && !s) {
                                _ = 0,
                                a && (c += this._zTime = x ? -ca : ca);
                                break
                            }
                        }
                        i = a
                    }
                }
                if (_ && !r && (this.pause(),
                _.render($ >= K ? 0 : -ca)._zTime = $ >= K ? 1 : -1,
                this._ts))
                    return this._start = u,
                    cc(this),
                    this.render(t, r, e);
                this._onUpdate && !r && wa(this, "onUpdate", !0),
                (c === v && v >= this.totalDuration() || !c && K) && (u !== this._start && Math.abs(p) === Math.abs(this._ts) || this._lock || ((t || !h) && (c === v && this._ts > 0 || !c && this._ts < 0) && Ia(this, 1),
                r || t < 0 && !K || !c && !K && v || (wa(this, c === v && t >= 0 ? "onComplete" : "onReverseComplete", !0),
                this._prom && !(c < v && this.timeScale() > 0) && this._prom())))
            }
            return this
        }
        ,
        e.add = function(t, r) {
            var e = this;
            if (Ea(r) || (r = ua(this, r, t)),
            !(t instanceof rb)) {
                if (oa(t))
                    return t.forEach(function(t) {
                        return e.add(t, r)
                    }),
                    this;
                if (ha(t))
                    return this.addLabel(t, r);
                if (!fa(t))
                    return this;
                t = ga.delayedCall(0, t)
            }
            return this !== t ? za(this, t, r) : this
        }
        ,
        e.getChildren = function(t, r, e, $) {
            void 0 === t && (t = !0),
            void 0 === r && (r = !0),
            void 0 === e && (e = !0),
            void 0 === $ && ($ = -ya);
            for (var i = [], a = this._first; a; )
                a._start >= $ && (a instanceof ga ? r && i.push(a) : (e && i.push(a),
                t && i.push.apply(i, a.getChildren(!0, r, e)))),
                a = a._next;
            return i
        }
        ,
        e.getById = function(t) {
            for (var r = this.getChildren(1, 1, 1), e = r.length; e--; )
                if (r[e].vars.id === t)
                    return r[e]
        }
        ,
        e.remove = function(t) {
            return ha(t) ? this.removeLabel(t) : fa(t) ? this.killTweensOf(t) : (Eb(this, t),
            t === this._recent && (this._recent = this._last),
            Ra(this))
        }
        ,
        e.totalTime = function(r, e) {
            return arguments.length ? (this._forcing = 1,
            !this._dp && this._ts && (this._start = aa(xa.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))),
            t.prototype.totalTime.call(this, r, e),
            this._forcing = 0,
            this) : this._tTime
        }
        ,
        e.addLabel = function(t, r) {
            return this.labels[t] = ua(this, r),
            this
        }
        ,
        e.removeLabel = function(t) {
            return delete this.labels[t],
            this
        }
        ,
        e.addPause = function(t, r, e) {
            var $ = ga.delayedCall(0, r || _a, e);
            return $.data = "isPause",
            this._hasPause = 1,
            za(this, $, ua(this, t))
        }
        ,
        e.removePause = function(t) {
            var r = this._first;
            for (t = ua(this, t); r; )
                r._start === t && "isPause" === r.data && Ia(r),
                r = r._next
        }
        ,
        e.killTweensOf = function(t, r, e) {
            for (var $ = this.getTweensOf(t, e), i = $.length; i--; )
                Hb !== $[i] && $[i].kill(t, r);
            return this
        }
        ,
        e.getTweensOf = function(t, r) {
            for (var e, $ = [], i = va(t), a = this._first, n = Ea(r); a; )
                a instanceof ga ? Qe(a._targets, i) && (n ? (!Hb || a._initted && a._ts) && a.globalTime(0) <= r && a.globalTime(a.totalDuration()) > r : !r || a.isActive()) && $.push(a) : (e = a.getTweensOf(i, r)).length && $.push.apply($, e),
                a = a._next;
            return $
        }
        ,
        e.tweenTo = function(t, r) {
            r = r || {};
            var e, $ = this, i = ua($, t), a = r, n = a.startAt, o = a.onStart, s = a.onStartParams, _ = a.immediateRender, p = ga.to($, ta({
                ease: r.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: i,
                overwrite: "auto",
                duration: r.duration || Math.abs((i - (n && "time"in n ? n.time : $._time)) / $.timeScale()) || ca,
                onStart: function() {
                    if ($.pause(),
                    !e) {
                        var t = r.duration || Math.abs((i - (n && "time"in n ? n.time : $._time)) / $.timeScale());
                        p._dur !== t && cb(p, t, 0, 1).render(p._time, !0, !0),
                        e = 1
                    }
                    o && o.apply(p, s || [])
                }
            }, r));
            return _ ? p.render(0) : p
        }
        ,
        e.tweenFromTo = function(t, r, e) {
            return this.tweenTo(r, ta({
                startAt: {
                    time: ua(this, t)
                }
            }, e))
        }
        ,
        e.recent = function() {
            return this._recent
        }
        ,
        e.nextLabel = function(t) {
            return void 0 === t && (t = this._time),
            md(this, ua(this, t))
        }
        ,
        e.previousLabel = function(t) {
            return void 0 === t && (t = this._time),
            md(this, ua(this, t), 1)
        }
        ,
        e.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + ca)
        }
        ,
        e.shiftChildren = function(t, r, e) {
            void 0 === e && (e = 0);
            for (var $, i = this._first, a = this.labels; i; )
                i._start >= e && (i._start += t,
                i._end += t),
                i = i._next;
            if (r)
                for ($ in a)
                    a[$] >= e && (a[$] += t);
            return Ra(this)
        }
        ,
        e.invalidate = function() {
            var r = this._first;
            for (this._lock = 0; r; )
                r.invalidate(),
                r = r._next;
            return t.prototype.invalidate.call(this)
        }
        ,
        e.clear = function(t) {
            void 0 === t && (t = !0);
            for (var r, e = this._first; e; )
                r = e._next,
                this.remove(e),
                e = r;
            return this._dp && (this._time = this._tTime = this._pTime = 0),
            t && (this.labels = {}),
            Ra(this)
        }
        ,
        e.totalDuration = function(t) {
            var r, e, $, i = 0, a = this._last, n = ya;
            if (arguments.length)
                return this.timeScale((this._repeat < 0 ? this.duration() : this.totalDuration()) / (this.reversed() ? -t : t));
            if (this._dirty) {
                for ($ = this.parent; a; )
                    r = a._prev,
                    a._dirty && a.totalDuration(),
                    (e = a._start) > n && this._sort && a._ts && !this._lock ? (this._lock = 1,
                    za(this, a, e - a._delay, 1)._lock = 0) : n = e,
                    e < 0 && a._ts && (i -= e,
                    (!$ && !this._dp || $ && $.smoothChildTiming) && (this._start += e / this._ts,
                    this._time -= e,
                    this._tTime -= e),
                    this.shiftChildren(-e, !1, -Infinity),
                    n = 0),
                    a._end > i && a._ts && (i = a._end),
                    a = r;
                cb(this, this === ea && this._time > i ? this._time : i, 1, 1),
                this._dirty = 0
            }
            return this._tDur
        }
        ,
        r.updateRoot = function(t) {
            if (ea._ts && (Xc(ea, Fb(t, ea)),
            Je = xa.frame),
            xa.frame >= Pe) {
                Pe += ka.autoSleep || 120;
                var r = ea._first;
                if ((!r || !r._ts) && ka.autoSleep && xa._listeners.length < 2) {
                    for (; r && !r._ts; )
                        r = r._next;
                    r || xa.sleep()
                }
            }
        }
        ,
        r
    }(rb);
    ta(ma.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Hb, pf = function(t, r, e, $, i, a, n) {
        var o, s, _, p, u, O, U, l, K = new na(this._pt,t,r,0,1,zd,null,i), v = 0, h = 0;
        for (K.b = e,
        K.e = $,
        e += "",
        (U = ~($ += "").indexOf("random(")) && ($ = Gb($)),
        a && (a(l = [e, $], t, r),
        e = l[0],
        $ = l[1]),
        s = e.match(Xb) || []; o = Xb.exec($); )
            p = o[0],
            u = $.substring(v, o.index),
            _ ? _ = (_ + 1) % 5 : "rgba(" === u.substr(-5) && (_ = 1),
            p !== s[h++] && (O = parseFloat(s[h - 1]) || 0,
            K._pt = {
                _next: K._pt,
                p: u || 1 === h ? u : ",",
                s: O,
                c: "=" === p.charAt(1) ? parseFloat(p.substr(2)) * ("-" === p.charAt(0) ? -1 : 1) : parseFloat(p) - O,
                m: _ && _ < 4 ? Math.round : 0
            },
            v = Xb.lastIndex);
        return K.c = v < $.length ? $.substring(v, $.length) : "",
        K.fp = n,
        (Qc.test($) || U) && (K.e = 0),
        this._pt = K,
        K
    }, jc = function(t, r, e, $, i, a, n, o, s) {
        fa($) && ($ = $(i || 0, t, a));
        var _, p = t[r], u = "get" !== e ? e : fa(p) ? s ? t[r.indexOf("set") || !fa(t["get" + r.substr(3)]) ? r : "get" + r.substr(3)](s) : t[r]() : p, O = fa(p) ? s ? uf : xd : kc;
        if (ha($) && (~$.indexOf("random(") && ($ = Gb($)),
        "=" === $.charAt(1) && ((_ = parseFloat(u) + parseFloat($.substr(2)) * ("-" === $.charAt(0) ? -1 : 1) + (sa(u) || 0)) || 0 === _) && ($ = _)),
        u !== $)
            return isNaN(u * $) || "" === $ ? (!p && !(r in t) && Zb(r, $),
            pf.call(this, t, r, u, $, O, o || ka.stringFilter, s)) : (_ = new na(this._pt,t,r,+u || 0,$ - (u || 0),"boolean" == typeof p ? wf : yd,0,O),
            s && (_.fp = s),
            n && _.modifier(n, this, t),
            this._pt = _)
    }, qf = function(t, r, e, $, i) {
        if (fa(t) && (t = sb(t, i, r, e, $)),
        !Fa(t) || t.style && t.nodeType || oa(t) || Oc(t))
            return ha(t) ? sb(t, i, r, e, $) : t;
        var a, n = {};
        for (a in t)
            n[a] = sb(t[a], i, r, e, $);
        return n
    }, vd = function(t, r, e, $, i, a) {
        var n, o, s, _;
        if (qa[t] && !1 !== (n = new qa[t]).init(i, n.rawVars ? r[t] : qf(r[t], $, i, a, e), e, $, a) && (e._pt = o = new na(e._pt,i,t,0,1,n.render,n,0,n.priority),
        e !== lb))
            for (s = e._ptLookup[e._targets.indexOf(i)],
            _ = n._props.length; _--; )
                s[n._props[_]] = o;
        return n
    }, rf = function t(r, e) {
        var $, i, a, n, o, s, _, p, u, O, U, l, K, v = r.vars, h = v.ease, c = v.startAt, f = v.immediateRender, d = v.lazy, m = v.onUpdate, x = v.onUpdateParams, g = v.callbackScope, T = v.runBackwards, y = v.yoyoEase, w = v.keyframes, b = v.autoRevert, P = r._dur, k = r._startAt, E = r._targets, A = r.parent, S = A && "nested" === A.data ? A.parent._targets : E, D = "auto" === r._overwrite && !Hc, F = r.timeline;
        if (F && (!w || !h) && (h = "none"),
        r._ease = eb(h, Za.ease),
        r._yEase = y ? rd(eb(!0 === y ? h : y, Za.ease)) : 0,
        y && r._yoyo && !r._repeat && (y = r._yEase,
        r._yEase = r._ease,
        r._ease = y),
        r._from = !F && !!v.runBackwards,
        !F) {
            if (l = (p = E[0] ? Qa(E[0]).harness : 0) && v[p.prop],
            $ = bc(v, $b),
            k && k.render(-1, !0).kill(),
            c) {
                if (Ia(r._startAt = ga.set(E, ta({
                    data: "isStart",
                    overwrite: !1,
                    parent: A,
                    immediateRender: !0,
                    lazy: la(d),
                    startAt: null,
                    delay: 0,
                    onUpdate: m,
                    onUpdateParams: x,
                    callbackScope: g,
                    stagger: 0
                }, c))),
                e < 0 && !f && !b && r._startAt.render(-1, !0),
                f) {
                    if (e > 0 && !b && (r._startAt = 0),
                    P && e <= 0)
                        return void (e && (r._zTime = e))
                } else
                    !1 === b && (r._startAt = 0);
            } else if (T && P)
                if (k)
                    !b && (r._startAt = 0);
                else if (e && (f = !1),
                a = ta({
                    overwrite: !1,
                    data: "isFromStart",
                    lazy: f && la(d),
                    immediateRender: f,
                    stagger: 0,
                    parent: A
                }, $),
                l && (a[p.prop] = l),
                Ia(r._startAt = ga.set(E, a)),
                e < 0 && r._startAt.render(-1, !0),
                f) {
                    if (!e)
                        return
                } else
                    t(r._startAt, ca);
            for (r._pt = 0,
            d = P && la(d) || d && !P,
            i = 0; i < E.length; i++) {
                if (_ = (o = E[i])._gsap || ac(E)[i]._gsap,
                r._ptLookup[i] = O = {},
                Uc[_.id] && Ha.length && Cb(),
                U = S === E ? i : S.indexOf(o),
                p && !1 !== (u = new p).init(o, l || $, r, U, S) && (r._pt = n = new na(r._pt,o,u.name,0,1,u.render,u,0,u.priority),
                u._props.forEach(function(t) {
                    O[t] = n
                }),
                u.priority && (s = 1)),
                !p || l)
                    for (a in $)
                        qa[a] && (u = vd(a, $, r, U, o, S)) ? u.priority && (s = 1) : O[a] = n = jc.call(r, o, a, "get", $[a], U, S, 0, v.stringFilter);
                r._op && r._op[i] && r.kill(o, r._op[i]),
                D && r._pt && (Hb = r,
                ea.killTweensOf(o, O, r.globalTime(0)),
                K = !r.parent,
                Hb = 0),
                r._pt && d && (Uc[_.id] = 1)
            }
            s && Ad(r),
            r._onInit && r._onInit(r)
        }
        r._onUpdate = m,
        r._initted = (!r._op || r._pt) && !K
    }, sf = function(t, r) {
        var e, $, i, a, n = t[0] ? Qa(t[0]).harness : 0, o = n && n.aliases;
        if (!o)
            return r;
        for ($ in e = ab({}, r),
        o)
            if ($ in e)
                for (i = (a = o[$].split(",")).length; i--; )
                    e[a[i]] = e[$];
        return e
    }, sb = function(t, r, e, $, i) {
        return fa(t) ? t.call(r, e, $, i) : ha(t) && ~t.indexOf("random(") ? Gb(t) : t
    }, wd = Vc + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", tf = (wd + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), ga = function(t) {
        function r(r, e, $, i) {
            var a;
            "number" == typeof e && ($.duration = e,
            e = $,
            $ = null);
            var n, o, s, _, p, u, O, U, l = (a = t.call(this, i ? e : Db(e)) || this).vars, K = l.duration, v = l.delay, h = l.immediateRender, c = l.stagger, f = l.overwrite, d = l.keyframes, m = l.defaults, x = l.scrollTrigger, g = l.yoyoEase, T = e.parent || ea, y = (oa(r) || Oc(r) ? Ea(r[0]) : "length"in e) ? [r] : va(r);
            if (a._targets = y.length ? ac(y) : Ab("GSAP target " + r + " not found. https://greensock.com", !ka.nullTargetWarn) || [],
            a._ptLookup = [],
            a._overwrite = f,
            d || c || Nc(K) || Nc(v)) {
                if (e = a.vars,
                (n = a.timeline = new ma({
                    data: "nested",
                    defaults: m || {}
                })).kill(),
                n.parent = n._dp = Ca(a),
                n._start = 0,
                d)
                    ta(n.vars.defaults, {
                        ease: "none"
                    }),
                    c ? y.forEach(function(t, r) {
                        return d.forEach(function(e, $) {
                            return n.to(t, e, $ ? ">" : r * c)
                        })
                    }) : d.forEach(function(t) {
                        return n.to(y, t, ">")
                    });
                else {
                    if (_ = y.length,
                    O = c ? hd(c) : _a,
                    Fa(c))
                        for (p in c)
                            ~wd.indexOf(p) && (U || (U = {}),
                            U[p] = c[p]);
                    for (o = 0; o < _; o++) {
                        for (p in s = {},
                        e)
                            tf.indexOf(p) < 0 && (s[p] = e[p]);
                        s.stagger = 0,
                        g && (s.yoyoEase = g),
                        U && ab(s, U),
                        u = y[o],
                        s.duration = +sb(K, Ca(a), o, u, y),
                        s.delay = (+sb(v, Ca(a), o, u, y) || 0) - a._delay,
                        !c && 1 === _ && s.delay && (a._delay = v = s.delay,
                        a._start += v,
                        s.delay = 0),
                        n.to(u, s, O(o, u, y))
                    }
                    n.duration() ? K = v = 0 : a.timeline = 0
                }
                K || a.duration(K = n.duration())
            } else
                a.timeline = 0;
            return !0 !== f || Hc || (Hb = Ca(a),
            ea.killTweensOf(y),
            Hb = 0),
            za(T, Ca(a), $),
            e.reversed && a.reverse(),
            e.paused && a.paused(!0),
            (h || !K && !d && a._start === aa(T._time) && la(h) && Ve(Ca(a)) && "nested" !== T.data) && (a._tTime = -ca,
            a.render(Math.max(0, -v))),
            x && cd(Ca(a), x),
            a
        }
        Gc(r, t);
        var e = r.prototype;
        return e.render = function(t, r, e) {
            var $, i, a, n, o, s, _, p, u, O = this._time, U = this._tDur, l = this._dur, K = t > U - ca && t >= 0 ? U : t < ca ? 0 : t;
            if (l) {
                if (K !== this._tTime || !t || e || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                    if ($ = K,
                    p = this.timeline,
                    this._repeat) {
                        if (n = l + this._rDelay,
                        this._repeat < -1 && t < 0)
                            return this.totalTime(100 * n + t, r, e);
                        if ($ = aa(K % n),
                        K === U ? (a = this._repeat,
                        $ = l) : ((a = ~~(K / n)) && a === K / n && ($ = l,
                        a--),
                        $ > l && ($ = l)),
                        (s = this._yoyo && 1 & a) && (u = this._yEase,
                        $ = l - $),
                        o = bb(this._tTime, n),
                        $ === O && !e && this._initted)
                            return this;
                        a !== o && (p && this._yEase && sd(p, s),
                        !this.vars.repeatRefresh || s || this._lock || (this._lock = e = 1,
                        this.render(aa(n * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (dd(this, t < 0 ? t : $, e, r))
                            return this._tTime = 0,
                            this;
                        if (l !== this._dur)
                            return this.render(t, r, e)
                    }
                    if (this._tTime = K,
                    this._time = $,
                    !this._act && this._ts && (this._act = 1,
                    this._lazy = 0),
                    this.ratio = _ = (u || this._ease)($ / l),
                    this._from && (this.ratio = _ = 1 - _),
                    $ && !O && !r && (wa(this, "onStart"),
                    this._tTime !== K))
                        return this;
                    for (i = this._pt; i; )
                        i.r(_, i.d),
                        i = i._next;
                    p && p.render(t < 0 ? t : !$ && s ? -ca : p._dur * _, r, e) || this._startAt && (this._zTime = t),
                    this._onUpdate && !r && (t < 0 && this._startAt && this._startAt.render(t, !0, e),
                    wa(this, "onUpdate")),
                    this._repeat && a !== o && this.vars.onRepeat && !r && this.parent && wa(this, "onRepeat"),
                    K !== this._tDur && K || this._tTime !== K || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                    (t || !l) && (K === this._tDur && this._ts > 0 || !K && this._ts < 0) && Ia(this, 1),
                    r || t < 0 && !O || !K && !O || (wa(this, K === U ? "onComplete" : "onReverseComplete", !0),
                    this._prom && !(K < U && this.timeScale() > 0) && this._prom()))
                }
            } else
                Xe(this, t, r, e);
            return this
        }
        ,
        e.targets = function() {
            return this._targets
        }
        ,
        e.invalidate = function() {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
            this._ptLookup = [],
            this.timeline && this.timeline.invalidate(),
            t.prototype.invalidate.call(this)
        }
        ,
        e.kill = function(t, r) {
            if (void 0 === r && (r = "all"),
            !(t || r && "all" !== r))
                return this._lazy = this._pt = 0,
                this.parent ? pb(this) : this;
            if (this.timeline) {
                var e = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, r, Hb && !0 !== Hb.vars.overwrite)._first || pb(this),
                this.parent && e !== this.timeline.totalDuration() && cb(this, this._dur * this.timeline._tDur / e, 0, 1),
                this
            }
            var $, i, a, n, o, s, _, p = this._targets, u = t ? va(t) : p, O = this._ptLookup, U = this._pt;
            if ((!r || "all" === r) && Se(p, u))
                return "all" === r && (this._pt = 0),
                pb(this);
            for ($ = this._op = this._op || [],
            "all" !== r && (ha(r) && (o = {},
            ra(r, function(t) {
                return o[t] = 1
            }),
            r = o),
            r = sf(p, r)),
            _ = p.length; _--; )
                if (~u.indexOf(p[_]))
                    for (o in i = O[_],
                    "all" === r ? ($[_] = r,
                    n = i,
                    a = {}) : (a = $[_] = $[_] || {},
                    n = r),
                    n)
                        (s = i && i[o]) && ("kill"in s.d && !0 !== s.d.kill(o) || Eb(this, s, "_pt"),
                        delete i[o]),
                        "all" !== a && (a[o] = 1);
            return this._initted && !this._pt && U && pb(this),
            this
        }
        ,
        r.to = function(t, e) {
            return new r(t,e,arguments[2])
        }
        ,
        r.from = function(t, r) {
            return mb(1, arguments)
        }
        ,
        r.delayedCall = function(t, e, $, i) {
            return new r(e,0,{
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: $,
                onReverseCompleteParams: $,
                callbackScope: i
            })
        }
        ,
        r.fromTo = function(t, r, e) {
            return mb(2, arguments)
        }
        ,
        r.set = function(t, e) {
            return e.duration = 0,
            e.repeatDelay || (e.repeat = 0),
            new r(t,e)
        }
        ,
        r.killTweensOf = function(t, r, e) {
            return ea.killTweensOf(t, r, e)
        }
        ,
        r
    }(rb);
    ta(ga.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
    ra("staggerTo,staggerFrom,staggerFromTo", function(t) {
        ga[t] = function() {
            var r = new ma
              , e = ec.call(arguments, 0);
            return e.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
            r[t].apply(r, e)
        }
    });
    var kc = function(t, r, e) {
        return t[r] = e
    }
      , xd = function(t, r, e) {
        return t[r](e)
    }
      , uf = function(t, r, e, $) {
        return t[r]($.fp, e)
    }
      , vf = function(t, r, e) {
        return t.setAttribute(r, e)
    }
      , lc = function(t, r) {
        return fa(t[r]) ? xd : Vb(t[r]) && t.setAttribute ? vf : kc
    }
      , yd = function(t, r) {
        return r.set(r.t, r.p, Math.round(1e6 * (r.s + r.c * t)) / 1e6, r)
    }
      , wf = function(t, r) {
        return r.set(r.t, r.p, !!(r.s + r.c * t), r)
    }
      , zd = function(t, r) {
        var e = r._pt
          , $ = "";
        if (!t && r.b)
            $ = r.b;
        else if (1 === t && r.e)
            $ = r.e;
        else {
            for (; e; )
                $ = e.p + (e.m ? e.m(e.s + e.c * t) : Math.round(1e4 * (e.s + e.c * t)) / 1e4) + $,
                e = e._next;
            $ += r.c
        }
        r.set(r.t, r.p, $, r)
    }
      , mc = function(t, r) {
        for (var e = r._pt; e; )
            e.r(t, e.d),
            e = e._next
    }
      , xf = function(t, r, e, $) {
        for (var i, a = this._pt; a; )
            i = a._next,
            a.p === $ && a.modifier(t, r, e),
            a = i
    }
      , yf = function(t) {
        for (var r, e, $ = this._pt; $; )
            e = $._next,
            $.p === t && !$.op || $.op === t ? Eb(this, $, "_pt") : $.dep || (r = 1),
            $ = e;
        return !r
    }
      , zf = function(t, r, e, $) {
        $.mSet(t, r, $.m.call($.tween, e, $.mt), $)
    }
      , Ad = function(t) {
        for (var r, e, $, i, a = t._pt; a; ) {
            for (r = a._next,
            e = $; e && e.pr > a.pr; )
                e = e._next;
            (a._prev = e ? e._prev : i) ? a._prev._next = a : $ = a,
            (a._next = e) ? e._prev = a : i = a,
            a = r
        }
        t._pt = $
    }
      , na = function() {
        function t(t, r, e, $, i, a, n, o, s) {
            this.t = r,
            this.s = $,
            this.c = i,
            this.p = e,
            this.r = a || yd,
            this.d = n || this,
            this.set = o || kc,
            this.pr = s || 0,
            this._next = t,
            t && (t._prev = this)
        }
        return t.prototype.modifier = function(t, r, e) {
            this.mSet = this.mSet || this.set,
            this.set = zf,
            this.m = t,
            this.mt = e,
            this.tween = r
        }
        ,
        t
    }();
    ra(Vc + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return $b[t] = 1
    }),
    pa.TweenMax = pa.TweenLite = ga,
    pa.TimelineLite = pa.TimelineMax = ma,
    ea = new ma({
        sortChildren: !1,
        defaults: Za,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }),
    ka.stringFilter = qd;
    var Ib = {
        registerPlugin: function() {
            for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
                r[e] = arguments[e];
            r.forEach(function(t) {
                return hf(t)
            })
        },
        timeline: function(t) {
            return new ma(t)
        },
        getTweensOf: function(t, r) {
            return ea.getTweensOf(t, r)
        },
        getProperty: function(t, r, e, $) {
            ha(t) && (t = va(t)[0]);
            var i = Qa(t || {}).get
              , a = e ? Zc : Yc;
            return "native" === e && (e = ""),
            t ? r ? a((qa[r] && qa[r].get || i)(t, r, e, $)) : function(r, e, $) {
                return a((qa[r] && qa[r].get || i)(t, r, e, $))
            }
            : t
        },
        quickSetter: function(t, r, e) {
            if ((t = va(t)).length > 1) {
                var $ = t.map(function(t) {
                    return Aa.quickSetter(t, r, e)
                })
                  , i = $.length;
                return function(t) {
                    for (var r = i; r--; )
                        $[r](t)
                }
            }
            t = t[0] || {};
            var a = qa[r]
              , n = Qa(t)
              , o = n.harness && (n.harness.aliases || {})[r] || r
              , s = a ? function(r) {
                var $ = new a;
                lb._pt = 0,
                $.init(t, e ? r + e : r, lb, 0, [t]),
                $.render(1, $),
                lb._pt && mc(1, lb)
            }
            : n.set(t, o);
            return a ? s : function(r) {
                return s(t, o, e ? r + e : r, n, 1)
            }
        },
        isTweening: function(t) {
            return ea.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = eb(t.ease, Za.ease)),
            $c(Za, t || {})
        },
        config: function(t) {
            return $c(ka, t || {})
        },
        registerEffect: function(t) {
            var r = t.name
              , e = t.effect
              , $ = t.plugins
              , i = t.defaults
              , a = t.extendTimeline;
            ($ || "").split(",").forEach(function(t) {
                return t && !qa[t] && !pa[t] && Ab(r + " effect requires " + t + " plugin.")
            }),
            _b[r] = function(t, r, $) {
                return e(va(t), ta(r || {}, i), $)
            }
            ,
            a && (ma.prototype[r] = function(t, e, $) {
                return this.add(_b[r](t, Fa(e) ? e : ($ = e) && {}, this), $)
            }
            )
        },
        registerEase: function(t, r) {
            ba[t] = eb(r)
        },
        parseEase: function(t, r) {
            return arguments.length ? eb(t, r) : ba
        },
        getById: function(t) {
            return ea.getById(t)
        },
        exportRoot: function(t, r) {
            void 0 === t && (t = {});
            var e, $, i = new ma(t);
            for (i.smoothChildTiming = la(t.smoothChildTiming),
            ea.remove(i),
            i._dp = 0,
            i._time = i._tTime = ea._time,
            e = ea._first; e; )
                $ = e._next,
                !r && !e._dur && e instanceof ga && e.vars.onComplete === e._targets[0] || za(i, e, e._start - e._delay),
                e = $;
            return za(ea, i, 0),
            i
        },
        utils: {
            wrap: ef,
            wrapYoyo: ff,
            distribute: hd,
            random: jd,
            snap: id,
            normalize: df,
            getUnit: sa,
            clamp: $e,
            splitColor: nd,
            toArray: va,
            selector: af,
            mapRange: ld,
            pipe: bf,
            unitize: cf,
            interpolate: gf,
            shuffle: gd
        },
        install: Sc,
        effects: _b,
        ticker: xa,
        updateRoot: ma.updateRoot,
        plugins: qa,
        globalTimeline: ea,
        core: {
            PropTween: na,
            globals: Tc,
            Tween: ga,
            Timeline: ma,
            Animation: rb,
            getCache: Qa,
            _removeLinkedListItem: Eb,
            suppressOverwrites: function(t) {
                return Hc = t
            }
        }
    };
    ra("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return Ib[t] = ga[t]
    }),
    xa.add(ma.updateRoot),
    lb = Ib.to({}, {
        duration: 0
    });
    var Af = function(t, r) {
        for (var e = t._pt; e && e.p !== r && e.op !== r && e.fp !== r; )
            e = e._next;
        return e
    }
      , Bf = function(t, r) {
        var e, $, i, a = t._targets;
        for (e in r)
            for ($ = a.length; $--; )
                (i = t._ptLookup[$][e]) && (i = i.d) && (i._pt && (i = Af(i, e)),
                i && i.modifier && i.modifier(r[e], t, a[$], e))
    }
      , nc = function(t, r) {
        return {
            name: t,
            rawVars: 1,
            init: function(t, e, $) {
                $._onInit = function(t) {
                    var $, i;
                    if (ha(e) && ($ = {},
                    ra(e, function(t) {
                        return $[t] = 1
                    }),
                    e = $),
                    r) {
                        for (i in $ = {},
                        e)
                            $[i] = r(e[i]);
                        e = $
                    }
                    Bf(t, e)
                }
            }
        }
    }
      , Aa = Ib.registerPlugin({
        name: "attr",
        init: function(t, r, e, $, i) {
            var a, n;
            for (a in r)
                (n = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", r[a], $, i, 0, 0, a)) && (n.op = a),
                this._props.push(a)
        }
    }, {
        name: "endArray",
        init: function(t, r) {
            for (var e = r.length; e--; )
                this.add(t, e, t[e] || 0, r[e])
        }
    }, nc("roundProps", fc), nc("modifiers"), nc("snap", id)) || Ib;
    ga.version = ma.version = Aa.version = "3.7.1",
    Ie = 1,
    Mc() && db();
    var a = ba.Power0
      , b = ba.Power1
      , c = ba.Power2
      , d = ba.Power3
      , e = ba.Power4
      , f = ba.Linear
      , g = ba.Quad
      , h = ba.Cubic
      , i = ba.Quart
      , j = ba.Quint
      , k = ba.Strong
      , l = ba.Elastic
      , m = ba.Back
      , n = ba.SteppedEase
      , o = ba.Bounce
      , p = ba.Sine
      , q = ba.Expo
      , r = ba.Circ;
    var Cf, Ta, tb, Bd, fb, s, Df, Ef, Ff = function() {
        return "undefined" != typeof window
    }, La = {}, Ua = 180 / Math.PI, gb = Math.PI / 180, hb = Math.atan2, Cd = 1e8, Dd = /([A-Z])/g, Gf = /(?:left|right|width|margin|padding|x)/i, Hf = /[\s,\(]\S/, Ma = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Ed = function(r, t) {
        return t.set(t.t, t.p, Math.round(1e4 * (t.s + t.c * r)) / 1e4 + t.u, t)
    }, If = function(r, t) {
        return t.set(t.t, t.p, 1 === r ? t.e : Math.round(1e4 * (t.s + t.c * r)) / 1e4 + t.u, t)
    }, Jf = function(r, t) {
        return t.set(t.t, t.p, r ? Math.round(1e4 * (t.s + t.c * r)) / 1e4 + t.u : t.b, t)
    }, Kf = function(r, t) {
        var $ = t.s + t.c * r;
        t.set(t.t, t.p, ~~($ + ($ < 0 ? -.5 : .5)) + t.u, t)
    }, Fd = function(r, t) {
        return t.set(t.t, t.p, r ? t.e : t.b, t)
    }, Gd = function(r, t) {
        return t.set(t.t, t.p, 1 !== r ? t.b : t.e, t)
    }, Lf = function(r, t, $) {
        return r.style[t] = $
    }, Mf = function(r, t, $) {
        return r.style.setProperty(t, $)
    }, Nf = function(r, t, $) {
        return r._gsap[t] = $
    }, Of = function(r, t, $) {
        return r._gsap.scaleX = r._gsap.scaleY = $
    }, Pf = function(r, t, $, e, a) {
        var n = r._gsap;
        n.scaleX = n.scaleY = $,
        n.renderTransform(a, n)
    }, Qf = function(r, t, $, e, a) {
        var n = r._gsap;
        n[t] = $,
        n.renderTransform(a, n)
    }, ia = "transform", Va = ia + "Origin", oc = function(r, t) {
        var $ = Ta.createElementNS ? Ta.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), r) : Ta.createElement(r);
        return $.style ? $ : Ta.createElement(r)
    }, Ga = function r(t, $, e) {
        var a = getComputedStyle(t);
        return a[$] || a.getPropertyValue($.replace(Dd, "-$1").toLowerCase()) || a.getPropertyValue($) || !e && r(t, ib($) || $, 1) || ""
    }, Hd = "O,Moz,ms,Ms,Webkit".split(","), ib = function(r, t, $) {
        var e = (t || fb).style
          , a = 5;
        if (r in e && !$)
            return r;
        for (r = r.charAt(0).toUpperCase() + r.substr(1); a-- && !(Hd[a] + r in e); )
            ;
        return a < 0 ? null : (3 === a ? "ms" : a >= 0 ? Hd[a] : "") + r
    }, pc = function() {
        Ff() && window.document && (Cf = window,
        Ta = Cf.document,
        tb = Ta.documentElement,
        fb = oc("div") || {
            style: {}
        },
        s = oc("div"),
        ia = ib(ia),
        Va = ia + "Origin",
        fb.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
        Ef = !!ib("perspective"),
        Bd = 1)
    }, qc = function r(t) {
        var $, e = oc("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), a = this.parentNode, n = this.nextSibling, o = this.style.cssText;
        if (tb.appendChild(e),
        e.appendChild(this),
        this.style.display = "block",
        t)
            try {
                $ = this.getBBox(),
                this._gsapBBox = this.getBBox,
                this.getBBox = r
            } catch (i) {}
        else
            this._gsapBBox && ($ = this._gsapBBox());
        return a && (n ? a.insertBefore(this, n) : a.appendChild(this)),
        tb.removeChild(e),
        this.style.cssText = o,
        $
    }, Id = function(r, t) {
        for (var $ = t.length; $--; )
            if (r.hasAttribute(t[$]))
                return r.getAttribute(t[$])
    }, Jd = function(r) {
        var t;
        try {
            t = r.getBBox()
        } catch ($) {
            t = qc.call(r, !0)
        }
        return t && (t.width || t.height) || r.getBBox === qc || (t = qc.call(r, !0)),
        !t || t.width || t.x || t.y ? t : {
            x: +Id(r, ["x", "cx", "x1"]) || 0,
            y: +Id(r, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }, Kd = function(r) {
        return !(!r.getCTM || r.parentNode && !r.ownerSVGElement || !Jd(r))
    }, ub = function(r, t) {
        if (t) {
            var $ = r.style;
            t in La && t !== Va && (t = ia),
            $.removeProperty ? ("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6) || (t = "-" + t),
            $.removeProperty(t.replace(Dd, "-$1").toLowerCase())) : $.removeAttribute(t)
        }
    }, Na = function(r, t, $, e, a, n) {
        var o = new na(r._pt,t,$,0,1,n ? Gd : Fd);
        return r._pt = o,
        o.b = e,
        o.e = a,
        r._props.push($),
        o
    }, Ld = {
        deg: 1,
        rad: 1,
        turn: 1
    }, Oa = function r(t, $, e, a) {
        var n, o, i, l, s = parseFloat(e) || 0, p = (e + "").trim().substr((s + "").length) || "px", A = fb.style, _ = Gf.test($), I = "svg" === t.tagName.toLowerCase(), v = (I ? "client" : "offset") + (_ ? "Width" : "Height"), Q = "px" === a, c = "%" === a;
        return a === p || !s || Ld[a] || Ld[p] ? s : ("px" !== p && !Q && (s = r(t, $, e, "px")),
        l = t.getCTM && Kd(t),
        !c && "%" !== p || !La[$] && !~$.indexOf("adius") ? (A[_ ? "width" : "height"] = 100 + (Q ? p : a),
        o = ~$.indexOf("adius") || "em" === a && t.appendChild && !I ? t : t.parentNode,
        l && (o = (t.ownerSVGElement || {}).parentNode),
        o && o !== Ta && o.appendChild || (o = Ta.body),
        (i = o._gsap) && c && i.width && _ && i.time === xa.time ? aa(s / i.width * 100) : ((c || "%" === p) && (A.position = Ga(t, "position")),
        o === t && (A.position = "static"),
        o.appendChild(fb),
        n = fb[v],
        o.removeChild(fb),
        A.position = "absolute",
        _ && c && ((i = Qa(o)).time = xa.time,
        i.width = o[v]),
        aa(Q ? n * s / 100 : n && s ? 100 / n * s : 0))) : (n = l ? t.getBBox()[_ ? "width" : "height"] : t[v],
        aa(c ? s / n * 100 : s / 100 * n)))
    }, jb = function(r, t, $, e) {
        var a;
        return Bd || pc(),
        t in Ma && "transform" !== t && ~(t = Ma[t]).indexOf(",") && (t = t.split(",")[0]),
        La[t] && "transform" !== t ? (a = wb(r, e),
        a = "transformOrigin" !== t ? a[t] : a.svg ? a.origin : Kb(Ga(r, Va)) + " " + a.zOrigin + "px") : (!(a = r.style[t]) || "auto" === a || e || ~(a + "").indexOf("calc(")) && (a = Jb[t] && Jb[t](r, t, $) || Ga(r, t) || Wc(r, t) || ("opacity" === t ? 1 : 0)),
        $ && !~(a + "").trim().indexOf(" ") ? Oa(r, t, a, $) + $ : a
    }, Rf = function(r, t, $, e) {
        if (!$ || "none" === $) {
            var a = ib(t, r, 1)
              , n = a && Ga(r, a, 1);
            n && n !== $ ? (t = a,
            $ = n) : "borderColor" === t && ($ = Ga(r, "borderTopColor"))
        }
        var o, i, l, s, p, A, _, I, v, Q, c, f, d = new na(this._pt,r.style,t,0,1,zd), m = 0, g = 0;
        if (d.b = $,
        d.e = e,
        $ += "",
        "auto" === (e += "") && (r.style[t] = e,
        e = Ga(r, t) || e,
        r.style[t] = $),
        o = [$, e],
        qd(o),
        e = o[1],
        l = ($ = o[0]).match($a) || [],
        (e.match($a) || []).length) {
            for (; i = $a.exec(e); )
                _ = i[0],
                v = e.substring(m, i.index),
                p ? p = (p + 1) % 5 : "rgba(" !== v.substr(-5) && "hsla(" !== v.substr(-5) || (p = 1),
                _ !== (A = l[g++] || "") && (s = parseFloat(A) || 0,
                c = A.substr((s + "").length),
                (f = "=" === _.charAt(1) ? +(_.charAt(0) + "1") : 0) && (_ = _.substr(2)),
                I = parseFloat(_),
                Q = _.substr((I + "").length),
                m = $a.lastIndex - Q.length,
                Q || (Q = Q || ka.units[t] || c,
                m === e.length && (e += Q,
                d.e += Q)),
                c !== Q && (s = Oa(r, t, A, Q) || 0),
                d._pt = {
                    _next: d._pt,
                    p: v || 1 === g ? v : ",",
                    s: s,
                    c: f ? f * I : I - s,
                    m: p && p < 4 || "zIndex" === t ? Math.round : 0
                });
            d.c = m < e.length ? e.substring(m, e.length) : ""
        } else
            d.r = "display" === t && "none" === e ? Gd : Fd;
        return Qc.test(e) && (d.e = 0),
        this._pt = d,
        d
    }, Md = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, Sf = function(r) {
        var t = r.split(" ")
          , $ = t[0]
          , e = t[1] || "50%";
        return "top" !== $ && "bottom" !== $ && "left" !== e && "right" !== e || (r = $,
        $ = e,
        e = r),
        t[0] = Md[$] || $,
        t[1] = Md[e] || e,
        t.join(" ")
    }, Tf = function(r, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var $, e, a, n = t.t, o = n.style, i = t.u, l = n._gsap;
            if ("all" === i || !0 === i)
                o.cssText = "",
                e = 1;
            else
                for (a = (i = i.split(",")).length; --a > -1; )
                    $ = i[a],
                    La[$] && (e = 1,
                    $ = "transformOrigin" === $ ? Va : ia),
                    ub(n, $);
            e && (ub(n, ia),
            l && (l.svg && n.removeAttribute("transform"),
            wb(n, 1),
            l.uncache = 1))
        }
    }, Jb = {
        clearProps: function(r, t, $, e, a) {
            if ("isFromStart" !== a.data) {
                var n = r._pt = new na(r._pt,t,$,0,0,Tf);
                return n.u = e,
                n.pr = -10,
                n.tween = a,
                r._props.push($),
                1
            }
        }
    }, vb = [1, 0, 0, 1, 0, 0], Nd = {}, Od = function(r) {
        return "matrix(1, 0, 0, 1, 0, 0)" === r || "none" === r || !r
    }, Pd = function(r) {
        var t = Ga(r, ia);
        return Od(t) ? vb : t.substr(7).match(Pc).map(aa)
    }, rc = function(r, t) {
        var $, e, a, n, o = r._gsap || Qa(r), i = r.style, l = Pd(r);
        return o.svg && r.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(a = r.transform.baseVal.consolidate().matrix).a, a.b, a.c, a.d, a.e, a.f]).join(",") ? vb : l : (l !== vb || r.offsetParent || r === tb || o.svg || (a = i.display,
        i.display = "block",
        ($ = r.parentNode) && r.offsetParent || (n = 1,
        e = r.nextSibling,
        tb.appendChild(r)),
        l = Pd(r),
        a ? i.display = a : ub(r, "display"),
        n && (e ? $.insertBefore(r, e) : $ ? $.appendChild(r) : tb.removeChild(r))),
        t && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    }, sc = function(r, t, $, e, a, n) {
        var o, i, l, s = r._gsap, p = a || rc(r, !0), A = s.xOrigin || 0, _ = s.yOrigin || 0, I = s.xOffset || 0, v = s.yOffset || 0, Q = p[0], c = p[1], f = p[2], d = p[3], m = p[4], g = p[5], u = t.split(" "), h = parseFloat(u[0]) || 0, x = parseFloat(u[1]) || 0;
        $ ? p !== vb && (i = Q * d - c * f) && (l = h * (-c / i) + x * (Q / i) - (Q * g - c * m) / i,
        h = h * (d / i) + x * (-f / i) + (f * g - d * m) / i,
        x = l) : (h = (o = Jd(r)).x + (~u[0].indexOf("%") ? h / 100 * o.width : h),
        x = o.y + (~(u[1] || u[0]).indexOf("%") ? x / 100 * o.height : x)),
        e || !1 !== e && s.smooth ? (m = h - A,
        g = x - _,
        s.xOffset = I + (m * Q + g * f) - m,
        s.yOffset = v + (m * c + g * d) - g) : s.xOffset = s.yOffset = 0,
        s.xOrigin = h,
        s.yOrigin = x,
        s.smooth = !!e,
        s.origin = t,
        s.originIsAbsolute = !!$,
        r.style[Va] = "0px 0px",
        n && (Na(n, s, "xOrigin", A, h),
        Na(n, s, "yOrigin", _, x),
        Na(n, s, "xOffset", I, s.xOffset),
        Na(n, s, "yOffset", v, s.yOffset)),
        r.setAttribute("data-svg-origin", h + " " + x)
    }, wb = function(r, t) {
        var $ = r._gsap || new ud(r);
        if ("x"in $ && !t && !$.uncache)
            return $;
        var e, a, n, o, i, l, s, p, A, _, I, v, Q, c, f, d, m, g, u, h, x, P, y, w, T, S, O, b, C, D, E, M, B = r.style, k = $.scaleX < 0, N = Ga(r, Va) || "0";
        return e = a = n = l = s = p = A = _ = I = 0,
        o = i = 1,
        $.svg = !(!r.getCTM || !Kd(r)),
        c = rc(r, $.svg),
        $.svg && (w = (!$.uncache || "0px 0px" === N) && !t && r.getAttribute("data-svg-origin"),
        sc(r, w || N, !!w || $.originIsAbsolute, !1 !== $.smooth, c)),
        v = $.xOrigin || 0,
        Q = $.yOrigin || 0,
        c !== vb && (g = c[0],
        u = c[1],
        h = c[2],
        x = c[3],
        e = P = c[4],
        a = y = c[5],
        6 === c.length ? (o = Math.sqrt(g * g + u * u),
        i = Math.sqrt(x * x + h * h),
        l = g || u ? hb(u, g) * Ua : 0,
        (A = h || x ? hb(h, x) * Ua + l : 0) && (i *= Math.abs(Math.cos(A * gb))),
        $.svg && (e -= v - (v * g + Q * h),
        a -= Q - (v * u + Q * x))) : (M = c[6],
        D = c[7],
        O = c[8],
        b = c[9],
        C = c[10],
        E = c[11],
        e = c[12],
        a = c[13],
        n = c[14],
        s = (f = hb(M, C)) * Ua,
        f && (w = P * (d = Math.cos(-f)) + O * (m = Math.sin(-f)),
        T = y * d + b * m,
        S = M * d + C * m,
        O = P * -m + O * d,
        b = y * -m + b * d,
        C = M * -m + C * d,
        E = D * -m + E * d,
        P = w,
        y = T,
        M = S),
        p = (f = hb(-h, C)) * Ua,
        f && (d = Math.cos(-f),
        E = x * (m = Math.sin(-f)) + E * d,
        g = w = g * d - O * m,
        u = T = u * d - b * m,
        h = S = h * d - C * m),
        l = (f = hb(u, g)) * Ua,
        f && (w = g * (d = Math.cos(f)) + u * (m = Math.sin(f)),
        T = P * d + y * m,
        u = u * d - g * m,
        y = y * d - P * m,
        g = w,
        P = T),
        s && Math.abs(s) + Math.abs(l) > 359.9 && (s = l = 0,
        p = 180 - p),
        o = aa(Math.sqrt(g * g + u * u + h * h)),
        i = aa(Math.sqrt(y * y + M * M)),
        f = hb(P, y),
        A = Math.abs(f) > 2e-4 ? f * Ua : 0,
        I = E ? 1 / (E < 0 ? -E : E) : 0),
        $.svg && (w = r.getAttribute("transform"),
        $.forceCSS = r.setAttribute("transform", "") || !Od(Ga(r, ia)),
        w && r.setAttribute("transform", w))),
        Math.abs(A) > 90 && Math.abs(A) < 270 && (k ? (o *= -1,
        A += l <= 0 ? 180 : -180,
        l += l <= 0 ? 180 : -180) : (i *= -1,
        A += A <= 0 ? 180 : -180)),
        $.x = e - (($.xPercent = e && ($.xPercent || (Math.round(r.offsetWidth / 2) === Math.round(-e) ? -50 : 0))) ? r.offsetWidth * $.xPercent / 100 : 0) + "px",
        $.y = a - (($.yPercent = a && ($.yPercent || (Math.round(r.offsetHeight / 2) === Math.round(-a) ? -50 : 0))) ? r.offsetHeight * $.yPercent / 100 : 0) + "px",
        $.z = n + "px",
        $.scaleX = aa(o),
        $.scaleY = aa(i),
        $.rotation = aa(l) + "deg",
        $.rotationX = aa(s) + "deg",
        $.rotationY = aa(p) + "deg",
        $.skewX = A + "deg",
        $.skewY = _ + "deg",
        $.transformPerspective = I + "px",
        ($.zOrigin = parseFloat(N.split(" ")[2]) || 0) && (B[Va] = Kb(N)),
        $.xOffset = $.yOffset = 0,
        $.force3D = ka.force3D,
        $.renderTransform = $.svg ? Vf : Ef ? Qd : Uf,
        $.uncache = 0,
        $
    }, Kb = function(r) {
        return (r = r.split(" "))[0] + " " + r[1]
    }, tc = function(r, t, $) {
        var e = sa(t);
        return aa(parseFloat(t) + parseFloat(Oa(r, "x", $ + "px", e))) + e
    }, Uf = function(r, t) {
        t.z = "0px",
        t.rotationY = t.rotationX = "0deg",
        t.force3D = 0,
        Qd(r, t)
    }, Wa = "0deg", xb = "0px", Xa = ") ", Qd = function(r, t) {
        var $ = t || this
          , e = $.xPercent
          , a = $.yPercent
          , n = $.x
          , o = $.y
          , i = $.z
          , l = $.rotation
          , s = $.rotationY
          , p = $.rotationX
          , A = $.skewX
          , _ = $.skewY
          , I = $.scaleX
          , v = $.scaleY
          , Q = $.transformPerspective
          , c = $.force3D
          , f = $.target
          , d = $.zOrigin
          , m = ""
          , g = "auto" === c && r && 1 !== r || !0 === c;
        if (d && (p !== Wa || s !== Wa)) {
            var u, h = parseFloat(s) * gb, x = Math.sin(h), P = Math.cos(h);
            h = parseFloat(p) * gb,
            u = Math.cos(h),
            n = tc(f, n, x * u * -d),
            o = tc(f, o, -Math.sin(h) * -d),
            i = tc(f, i, P * u * -d + d)
        }
        Q !== xb && (m += "perspective(" + Q + Xa),
        (e || a) && (m += "translate(" + e + "%, " + a + "%) "),
        (g || n !== xb || o !== xb || i !== xb) && (m += i !== xb || g ? "translate3d(" + n + ", " + o + ", " + i + ") " : "translate(" + n + ", " + o + Xa),
        l !== Wa && (m += "rotate(" + l + Xa),
        s !== Wa && (m += "rotateY(" + s + Xa),
        p !== Wa && (m += "rotateX(" + p + Xa),
        A === Wa && _ === Wa || (m += "skew(" + A + ", " + _ + Xa),
        1 === I && 1 === v || (m += "scale(" + I + ", " + v + Xa),
        f.style[ia] = m || "translate(0, 0)"
    }, Vf = function(r, t) {
        var $, e, a, n, o, i = t || this, l = i.xPercent, s = i.yPercent, p = i.x, A = i.y, _ = i.rotation, I = i.skewX, v = i.skewY, Q = i.scaleX, c = i.scaleY, f = i.target, d = i.xOrigin, m = i.yOrigin, g = i.xOffset, u = i.yOffset, h = i.forceCSS, x = parseFloat(p), P = parseFloat(A);
        _ = parseFloat(_),
        I = parseFloat(I),
        (v = parseFloat(v)) && (I += v = parseFloat(v),
        _ += v),
        _ || I ? (_ *= gb,
        I *= gb,
        $ = Math.cos(_) * Q,
        e = Math.sin(_) * Q,
        a = Math.sin(_ - I) * -c,
        n = Math.cos(_ - I) * c,
        I && (v *= gb,
        o = Math.tan(I - v),
        a *= o = Math.sqrt(1 + o * o),
        n *= o,
        v && (o = Math.tan(v),
        $ *= o = Math.sqrt(1 + o * o),
        e *= o)),
        $ = aa($),
        e = aa(e),
        a = aa(a),
        n = aa(n)) : ($ = Q,
        n = c,
        e = a = 0),
        (x && !~(p + "").indexOf("px") || P && !~(A + "").indexOf("px")) && (x = Oa(f, "x", p, "px"),
        P = Oa(f, "y", A, "px")),
        (d || m || g || u) && (x = aa(x + d - (d * $ + m * a) + g),
        P = aa(P + m - (d * e + m * n) + u)),
        (l || s) && (o = f.getBBox(),
        x = aa(x + l / 100 * o.width),
        P = aa(P + s / 100 * o.height)),
        o = "matrix(" + $ + "," + e + "," + a + "," + n + "," + x + "," + P + ")",
        f.setAttribute("transform", o),
        h && (f.style[ia] = o)
    }, Wf = function(r, t, $, e, a, n) {
        var o, i, l = ha(a), s = parseFloat(a) * (l && ~a.indexOf("rad") ? Ua : 1), p = n ? s * n : s - e, A = e + p + "deg";
        return l && ("short" === (o = a.split("_")[1]) && (p %= 360) !== p % 180 && (p += p < 0 ? 360 : -360),
        "cw" === o && p < 0 ? p = (p + 360 * Cd) % 360 - 360 * ~~(p / 360) : "ccw" === o && p > 0 && (p = (p - 360 * Cd) % 360 - 360 * ~~(p / 360))),
        r._pt = i = new na(r._pt,t,$,e,p,If),
        i.e = A,
        i.u = "deg",
        r._props.push($),
        i
    }, Rd = function(r, t) {
        for (var $ in t)
            r[$] = t[$];
        return r
    }, Xf = function(r, t, $) {
        var e, a, n, o, i, l, s, p = Rd({}, $._gsap), A = $.style;
        for (a in p.svg ? (n = $.getAttribute("transform"),
        $.setAttribute("transform", ""),
        A[ia] = t,
        e = wb($, 1),
        ub($, ia),
        $.setAttribute("transform", n)) : (n = getComputedStyle($)[ia],
        A[ia] = t,
        e = wb($, 1),
        A[ia] = n),
        La)
            (n = p[a]) !== (o = e[a]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(a) < 0 && (i = sa(n) !== (s = sa(o)) ? Oa($, a, n, s) : parseFloat(n),
            l = parseFloat(o),
            r._pt = new na(r._pt,e,a,i,l - i,Ed),
            r._pt.u = s || 0,
            r._props.push(a));
        Rd(e, p)
    };
    ra("padding,margin,Width,Radius", function(r, t) {
        var $ = "Top"
          , e = "Right"
          , a = "Bottom"
          , n = "Left"
          , o = (t < 3 ? [$, e, a, n] : [$ + n, $ + e, a + e, a + n]).map(function($) {
            return t < 2 ? r + $ : "border" + $ + r
        });
        Jb[t > 1 ? "border" + r : r] = function(r, t, $, e, a) {
            var n, i;
            if (arguments.length < 4)
                return n = o.map(function(t) {
                    return jb(r, t, $)
                }),
                5 === (i = n.join(" ")).split(n[0]).length ? n[0] : i;
            n = (e + "").split(" "),
            i = {},
            o.forEach(function(r, t) {
                return i[r] = n[t] = n[t] || n[(t - 1) / 2 | 0]
            }),
            r.init(t, i, a)
        }
    });
    var Sd = {
        name: "css",
        register: pc,
        targetTest: function(r) {
            return r.style && r.nodeType
        },
        init: function(r, t, $, e, a) {
            var n, o, i, l, s, p, A, _, I, v, Q, c, f, d, m, g = this._props, u = r.style, h = $.vars.startAt;
            for (A in Bd || pc(),
            t)
                if ("autoRound" !== A && (o = t[A],
                !qa[A] || !vd(A, t, $, e, r, a)))
                    if (s = typeof o,
                    p = Jb[A],
                    "function" === s && (s = typeof (o = o.call($, e, r, a))),
                    "string" === s && ~o.indexOf("random(") && (o = Gb(o)),
                    p)
                        p(this, r, A, o, $) && (m = 1);
                    else if ("--" === A.substr(0, 2))
                        n = (getComputedStyle(r).getPropertyValue(A) + "").trim(),
                        o += "",
                        Ka.lastIndex = 0,
                        Ka.test(n) || (_ = sa(n),
                        I = sa(o)),
                        I ? _ !== I && (n = Oa(r, A, n, I) + I) : _ && (o += _),
                        this.add(u, "setProperty", n, o, e, a, 0, 0, A),
                        g.push(A);
                    else if ("undefined" !== s) {
                        if (h && A in h ? (n = "function" == typeof h[A] ? h[A].call($, e, r, a) : h[A],
                        A in ka.units && !sa(n) && (n += ka.units[A]),
                        "=" === (n + "").charAt(1) && (n = jb(r, A))) : n = jb(r, A),
                        l = parseFloat(n),
                        (v = "string" === s && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0) && (o = o.substr(2)),
                        i = parseFloat(o),
                        A in Ma && ("autoAlpha" === A && (1 === l && "hidden" === jb(r, "visibility") && i && (l = 0),
                        Na(this, u, "visibility", l ? "inherit" : "hidden", i ? "inherit" : "hidden", !i)),
                        "scale" !== A && "transform" !== A && ~(A = Ma[A]).indexOf(",") && (A = A.split(",")[0])),
                        Q = A in La) {
                            if (c || ((f = r._gsap).renderTransform && !t.parseTransform || wb(r, t.parseTransform),
                            d = !1 !== t.smoothOrigin && f.smooth,
                            (c = this._pt = new na(this._pt,u,ia,0,1,f.renderTransform,f,0,-1)).dep = 1),
                            "scale" === A)
                                this._pt = new na(this._pt,f,"scaleY",f.scaleY,(v ? v * i : i - f.scaleY) || 0),
                                g.push("scaleY", A),
                                A += "X";
                            else {
                                if ("transformOrigin" === A) {
                                    o = Sf(o),
                                    f.svg ? sc(r, o, 0, d, 0, this) : ((I = parseFloat(o.split(" ")[2]) || 0) !== f.zOrigin && Na(this, f, "zOrigin", f.zOrigin, I),
                                    Na(this, u, A, Kb(n), Kb(o)));
                                    continue
                                }
                                if ("svgOrigin" === A) {
                                    sc(r, o, 1, d, 0, this);
                                    continue
                                }
                                if (A in Nd) {
                                    Wf(this, f, A, l, o, v);
                                    continue
                                }
                                if ("smoothOrigin" === A) {
                                    Na(this, f, "smooth", f.smooth, o);
                                    continue
                                }
                                if ("force3D" === A) {
                                    f[A] = o;
                                    continue
                                }
                                if ("transform" === A) {
                                    Xf(this, o, r);
                                    continue
                                }
                            }
                        } else
                            A in u || (A = ib(A) || A);
                        if (Q || (i || 0 === i) && (l || 0 === l) && !Hf.test(o) && A in u)
                            i || (i = 0),
                            (_ = (n + "").substr((l + "").length)) !== (I = sa(o) || (A in ka.units ? ka.units[A] : _)) && (l = Oa(r, A, n, I)),
                            this._pt = new na(this._pt,Q ? f : u,A,l,v ? v * i : i - l,Q || "px" !== I && "zIndex" !== A || !1 === t.autoRound ? Ed : Kf),
                            this._pt.u = I || 0,
                            _ !== I && (this._pt.b = n,
                            this._pt.r = Jf);
                        else if (A in u)
                            Rf.call(this, r, A, n, o);
                        else {
                            if (!(A in r)) {
                                Zb(A, o);
                                continue
                            }
                            this.add(r, A, n || r[A], o, e, a)
                        }
                        g.push(A)
                    }
            m && Ad(this)
        },
        get: jb,
        aliases: Ma,
        getSetter: function(r, t, $) {
            var e = Ma[t];
            return e && e.indexOf(",") < 0 && (t = e),
            t in La && t !== Va && (r._gsap.x || jb(r, "x")) ? $ && Df === $ ? "scale" === t ? Of : Nf : (Df = $ || {}) && ("scale" === t ? Pf : Qf) : r.style && !Vb(r.style[t]) ? Lf : ~t.indexOf("-") ? Mf : lc(r, t)
        },
        core: {
            _removeProperty: ub,
            _getMatrix: rc
        }
    };
    Aa.utils.checkPrefix = ib,
    function(r, t, $, e) {
        var a = ra("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + t + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(r) {
            La[r] = 1
        });
        ra(t, function(r) {
            ka.units[r] = "deg",
            Nd[r] = 1
        }),
        Ma[a[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + t,
        ra("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(r) {
            var t = r.split(":");
            Ma[t[1]] = a[t[0]]
        })
    }(0, "rotation,rotationX,rotationY,skewX,skewY"),
    ra("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(r) {
        ka.units[r] = "px"
    }),
    Aa.registerPlugin(Sd);
    var Lb = Aa.registerPlugin(Sd) || Aa
      , t = Lb.core.Tween;
    var Yf, Zf = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, $f = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi, _f = Math.PI / 180, u = 180 / Math.PI, Mb = Math.sin, Nb = Math.cos, Ya = Math.abs, yb = Math.sqrt, v = Math.atan2, ag = 1e8, bg = function($) {
        return "number" == typeof $
    }, Td = 1e5, Pa = function($) {
        return Math.round($ * Td) / Td || 0
    };
    function cg($, t, e, r, a, n, o) {
        for (var s, m, i, M, G, v = $.length; --v > -1; )
            for (m = (s = $[v]).length,
            i = 0; i < m; i += 2)
                M = s[i],
                G = s[i + 1],
                s[i] = M * t + G * r + n,
                s[i + 1] = M * e + G * a + o;
        return $._dirty = 1,
        $
    }
    function dg($, t, e, r, a, n, o, s, m) {
        if ($ !== s || t !== m) {
            e = Ya(e),
            r = Ya(r);
            var i = a % 360 * _f
              , M = Nb(i)
              , G = Mb(i)
              , v = Math.PI
              , l = 2 * v
              , g = ($ - s) / 2
              , h = (t - m) / 2
              , u = M * g + G * h
              , p = -G * g + M * h
              , _ = u * u
              , c = p * p
              , f = _ / (e * e) + c / (r * r);
            f > 1 && (e = yb(f) * e,
            r = yb(f) * r);
            var d = e * e
              , x = r * r
              , P = (d * x - d * c - x * _) / (d * c + x * _);
            P < 0 && (P = 0);
            var b = (n === o ? -1 : 1) * yb(P)
              , S = b * (e * p / r)
              , w = b * (-r * u / e)
              , y = ($ + s) / 2 + (M * S - G * w)
              , R = (t + m) / 2 + (G * S + M * w)
              , N = (u - S) / e
              , T = (p - w) / r
              , L = (-u - S) / e
              , D = (-p - w) / r
              , z = N * N + T * T
              , A = (T < 0 ? -1 : 1) * Math.acos(N / yb(z))
              , C = (N * D - T * L < 0 ? -1 : 1) * Math.acos((N * L + T * D) / yb(z * (L * L + D * D)));
            isNaN(C) && (C = v),
            !o && C > 0 ? C -= l : o && C < 0 && (C += l),
            A %= l,
            C %= l;
            var O, q = Math.ceil(Ya(C) / (l / 4)), E = [], B = C / q, I = 4 / 3 * Mb(B / 2) / (1 + Nb(B / 2)), k = M * e, j = G * e, F = G * -r, V = M * r;
            for (O = 0; O < q; O++)
                u = Nb(a = A + O * B),
                p = Mb(a),
                N = Nb(a += B),
                T = Mb(a),
                E.push(u - I * p, p + I * u, N + I * T, T - I * N, N, T);
            for (O = 0; O < E.length; O += 2)
                u = E[O],
                p = E[O + 1],
                E[O] = u * k + p * F + y,
                E[O + 1] = u * j + p * V + R;
            return E[O - 2] = s,
            E[O - 1] = m,
            E
        }
    }
    function eg($) {
        var t, e, r, a, n, o, s, m, i, M, G, v, l, g, h, u = ($ + "").replace($f, function($) {
            var t = +$;
            return t < 1e-4 && t > -1e-4 ? 0 : t
        }).match(Zf) || [], p = [], _ = 0, c = 0, f = u.length, d = 0, x = "ERROR: malformed path: " + $, P = function($, t, e, r) {
            M = (e - $) / 3,
            G = (r - t) / 3,
            s.push($ + M, t + G, e - M, r - G, e, r)
        };
        if (!$ || !isNaN(u[0]) || isNaN(u[1]))
            return console.log(x),
            p;
        for (t = 0; t < f; t++)
            if (l = n,
            isNaN(u[t]) ? o = (n = u[t].toUpperCase()) !== u[t] : t--,
            r = +u[t + 1],
            a = +u[t + 2],
            o && (r += _,
            a += c),
            t || (m = r,
            i = a),
            "M" === n)
                s && (s.length < 8 ? p.length -= 1 : d += s.length),
                _ = m = r,
                c = i = a,
                s = [r, a],
                p.push(s),
                t += 2,
                n = "L";
            else if ("C" === n)
                s || (s = [0, 0]),
                o || (_ = c = 0),
                s.push(r, a, _ + 1 * u[t + 3], c + 1 * u[t + 4], _ += 1 * u[t + 5], c += 1 * u[t + 6]),
                t += 6;
            else if ("S" === n)
                M = _,
                G = c,
                "C" !== l && "S" !== l || (M += _ - s[s.length - 4],
                G += c - s[s.length - 3]),
                o || (_ = c = 0),
                s.push(M, G, r, a, _ += 1 * u[t + 3], c += 1 * u[t + 4]),
                t += 4;
            else if ("Q" === n)
                M = _ + 2 / 3 * (r - _),
                G = c + 2 / 3 * (a - c),
                o || (_ = c = 0),
                _ += 1 * u[t + 3],
                c += 1 * u[t + 4],
                s.push(M, G, _ + 2 / 3 * (r - _), c + 2 / 3 * (a - c), _, c),
                t += 4;
            else if ("T" === n)
                M = _ - s[s.length - 4],
                G = c - s[s.length - 3],
                s.push(_ + M, c + G, r + 2 / 3 * (_ + 1.5 * M - r), a + 2 / 3 * (c + 1.5 * G - a), _ = r, c = a),
                t += 2;
            else if ("H" === n)
                P(_, c, _ = r, c),
                t += 1;
            else if ("V" === n)
                P(_, c, _, c = r + (o ? c - _ : 0)),
                t += 1;
            else if ("L" === n || "Z" === n)
                "Z" === n && (r = m,
                a = i,
                s.closed = !0),
                ("L" === n || Ya(_ - r) > .5 || Ya(c - a) > .5) && (P(_, c, r, a),
                "L" === n && (t += 2)),
                _ = r,
                c = a;
            else if ("A" === n) {
                if (g = u[t + 4],
                h = u[t + 5],
                M = u[t + 6],
                G = u[t + 7],
                e = 7,
                g.length > 1 && (g.length < 3 ? (G = M,
                M = h,
                e--) : (G = h,
                M = g.substr(2),
                e -= 2),
                h = g.charAt(1),
                g = g.charAt(0)),
                v = dg(_, c, +u[t + 1], +u[t + 2], +u[t + 3], +g, +h, (o ? _ : 0) + 1 * M, (o ? c : 0) + 1 * G),
                t += e,
                v)
                    for (e = 0; e < v.length; e++)
                        s.push(v[e]);
                _ = s[s.length - 2],
                c = s[s.length - 1]
            } else
                console.log(x);
        return (t = s.length) < 6 ? (p.pop(),
        t = 0) : s[0] === s[t - 2] && s[1] === s[t - 1] && (s.closed = !0),
        p.totalPoints = d + t,
        p
    }
    function Ud($, t, e, r, a, n, o, s, m, i, M) {
        var G, v = ($ + e) / 2, l = (t + r) / 2, g = (e + a) / 2, h = (r + n) / 2, u = (a + o) / 2, p = (n + s) / 2, _ = (v + g) / 2, c = (l + h) / 2, f = (g + u) / 2, d = (h + p) / 2, x = (_ + f) / 2, P = (c + d) / 2, b = o - $, S = s - t, w = Ya((e - o) * S - (r - s) * b), y = Ya((a - o) * S - (n - s) * b);
        return i || (i = [$, t, o, s],
        M = 2),
        i.splice(M || i.length - 2, 0, x, P),
        (w + y) * (w + y) > m * (b * b + S * S) && (G = i.length,
        Ud($, t, v, l, _, c, x, P, m, i, M),
        Ud(x, P, f, d, u, p, o, s, m, i, M + 2 + (i.length - G))),
        i
    }
    function fg($, t, e, r, a, n) {
        var o, s = a - e, m = n - r;
        return (s || m) && ((o = (($ - e) * s + (t - r) * m) / (s * s + m * m)) > 1 ? (e = a,
        r = n) : o > 0 && (e += s * o,
        r += m * o)),
        Math.pow($ - e, 2) + Math.pow(t - r, 2)
    }
    function Vd($, t, e, r, a) {
        var n, o, s, m = r, i = $[t], M = $[t + 1], G = $[e], v = $[e + 1];
        for (o = t + 2; o < e; o += 2)
            (s = fg($[o], $[o + 1], i, M, G, v)) > m && (n = o,
            m = s);
        m > r && (n - t > 2 && Vd($, t, n, r, a),
        a.push($[n], $[n + 1]),
        e - n > 2 && Vd($, n, e, r, a))
    }
    function gg($, t, e, r, a, n, o, s, m, i, M, G, v, l) {
        var g, h, u, p, _ = (a - r) / n, c = 0, f = r;
        for (Yf = ag; f <= a; )
            (g = (h = (p = 1 - f) * p * p * o + 3 * p * p * f * m + 3 * p * f * f * M + f * f * f * v - t) * h + (u = p * p * p * s + 3 * p * p * f * i + 3 * p * f * f * G + f * f * f * l - e) * u) < Yf && (Yf = g,
            c = f),
            f += _;
        return $ > 1 ? gg($ - 1, t, e, Math.max(c - _, 0), Math.min(c + _, 1), n, o, s, m, i, M, G, v, l) : c
    }
    function hg($) {
        bg($[0]) && ($ = [$]);
        var t, e, r, a, n = "", o = $.length;
        for (e = 0; e < o; e++) {
            for (a = $[e],
            n += "M" + Pa(a[0]) + "," + Pa(a[1]) + " C",
            t = a.length,
            r = 2; r < t; r++)
                n += Pa(a[r++]) + "," + Pa(a[r++]) + " " + Pa(a[r++]) + "," + Pa(a[r++]) + " " + Pa(a[r++]) + "," + Pa(a[r]) + " ";
            a.closed && (n += "z")
        }
        return n
    }
    var Ba, ig, Wd = function() {
        return Ba || "undefined" != typeof window && (Ba = window.gsap) && Ba.registerPlugin && Ba
    }, Xd = function() {
        (Ba = Wd()) ? (Ba.registerEase("_CE", kb.create),
        ig = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
    }, jg = 1e20, Ob = function($) {
        return ~~(1e3 * $ + ($ < 0 ? -.5 : .5)) / 1e3
    }, kg = 1, lg = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, mg = /[cLlsSaAhHvVtTqQ]/g, ng = function($) {
        var t, r = $.length, e = jg;
        for (t = 1; t < r; t += 6)
            +$[t] < e && (e = +$[t]);
        return e
    }, og = function($, t, r) {
        r || 0 === r || (r = Math.max(+$[$.length - 1], +$[1]));
        var e, a = -1 * +$[0], n = -r, s = $.length, v = 1 / (+$[s - 2] + a), i = -t || (Math.abs(+$[s - 1] - +$[1]) < .01 * (+$[s - 2] - +$[0]) ? ng($) + n : +$[s - 1] + n);
        for (i = i ? 1 / i : -v,
        e = 0; e < s; e += 2)
            $[e] = (+$[e] + a) * v,
            $[e + 1] = (+$[e + 1] + n) * i
    }, pg = function $(t, r, e, a, n, s, v, i, o, y, u) {
        var z, g = (t + e) / 2, F = (r + a) / 2, x = (e + n) / 2, c = (a + s) / 2, h = (n + v) / 2, p = (s + i) / 2, f = (g + x) / 2, d = (F + c) / 2, l = (x + h) / 2, m = (c + p) / 2, _ = (f + l) / 2, E = (d + m) / 2, C = v - t, P = i - r, b = Math.abs((e - v) * P - (a - i) * C), M = Math.abs((n - v) * P - (s - i) * C);
        return y || (y = [{
            x: t,
            y: r
        }, {
            x: v,
            y: i
        }],
        u = 1),
        y.splice(u || y.length - 1, 0, {
            x: _,
            y: E
        }),
        (b + M) * (b + M) > o * (C * C + P * P) && (z = y.length,
        $(t, r, g, F, f, d, _, E, o, y, u),
        $(_, E, l, m, h, p, v, i, o, y, u + 1 + (y.length - z))),
        y
    }, kb = function() {
        function $($, t, r) {
            ig || Xd(),
            this.id = $,
            kg && this.setData(t, r)
        }
        var t = $.prototype;
        return t.setData = function($, t) {
            t = t || {};
            var r, e, a, n, s, v, i, o, y, u = ($ = $ || "0,0,1,1").match(lg), z = 1, g = [], F = [], x = t.precision || 1, c = x <= 1;
            if (this.data = $,
            (mg.test($) || ~$.indexOf("M") && $.indexOf("C") < 0) && (u = eg($)[0]),
            4 === (r = u.length))
                u.unshift(0, 0),
                u.push(1, 1),
                r = 8;
            else if ((r - 2) % 6)
                throw "Invalid CustomEase";
            for (0 == +u[0] && 1 == +u[r - 2] || og(u, t.height, t.originY),
            this.segment = u,
            n = 2; n < r; n += 6)
                e = {
                    x: +u[n - 2],
                    y: +u[n - 1]
                },
                a = {
                    x: +u[n + 4],
                    y: +u[n + 5]
                },
                g.push(e, a),
                pg(e.x, e.y, +u[n], +u[n + 1], +u[n + 2], +u[n + 3], a.x, a.y, 1 / (2e5 * x), g, g.length - 1);
            for (r = g.length,
            n = 0; n < r; n++)
                i = g[n],
                o = g[n - 1] || i,
                (i.x > o.x || o.y !== i.y && o.x === i.x || i === o) && i.x <= 1 ? (o.cx = i.x - o.x,
                o.cy = i.y - o.y,
                o.n = i,
                o.nx = i.x,
                c && n > 1 && Math.abs(o.cy / o.cx - g[n - 2].cy / g[n - 2].cx) > 2 && (c = 0),
                o.cx < z && (o.cx ? z = o.cx : (o.cx = .001,
                n === r - 1 && (o.x -= .001,
                z = Math.min(z, .001),
                c = 0)))) : (g.splice(n--, 1),
                r--);
            if (s = 1 / (r = 1 / z + 1 | 0),
            v = 0,
            i = g[0],
            c) {
                for (n = 0; n < r; n++)
                    y = n * s,
                    i.nx < y && (i = g[++v]),
                    e = i.y + (y - i.x) / i.cx * i.cy,
                    F[n] = {
                        x: y,
                        cx: s,
                        y: e,
                        cy: 0,
                        nx: 9
                    },
                    n && (F[n - 1].cy = e - F[n - 1].y);
                F[r - 1].cy = g[g.length - 1].y - e
            } else {
                for (n = 0; n < r; n++)
                    i.nx < n * s && (i = g[++v]),
                    F[n] = i;
                v < g.length - 1 && (F[n - 1] = g[g.length - 2])
            }
            return this.ease = function($) {
                var t = F[$ * r | 0] || F[r - 1];
                return t.nx < $ && (t = t.n),
                t.y + ($ - t.x) / t.cx * t.cy
            }
            ,
            this.ease.custom = this,
            this.id && Ba && Ba.registerEase(this.id, this.ease),
            this
        }
        ,
        t.getSVGData = function(t) {
            return $.getSVGData(this, t)
        }
        ,
        $.create = function(t, r, e) {
            return new $(t,r,e).ease
        }
        ,
        $.register = function($) {
            Ba = $,
            Xd()
        }
        ,
        $.get = function($) {
            return Ba.parseEase($)
        }
        ,
        $.getSVGData = function(t, r) {
            var e, a, n, s, v, i, o, y, u, z, g = (r = r || {}).width || 100, F = r.height || 100, x = r.x || 0, c = (r.y || 0) + F, h = Ba.utils.toArray(r.path)[0];
            if (r.invert && (F = -F,
            c = 0),
            "string" == typeof t && (t = Ba.parseEase(t)),
            t.custom && (t = t.custom),
            t instanceof $)
                e = hg(cg([t.segment], g, 0, 0, -F, x, c));
            else {
                for (e = [x, c],
                s = 1 / (o = Math.max(5, 200 * (r.precision || 1))),
                y = 5 / (o += 2),
                u = Ob(x + s * g),
                a = ((z = Ob(c + t(s) * -F)) - c) / (u - x),
                n = 2; n < o; n++)
                    v = Ob(x + n * s * g),
                    i = Ob(c + t(n * s) * -F),
                    (Math.abs((i - z) / (v - u) - a) > y || n === o - 1) && (e.push(u, z),
                    a = (i - z) / (v - u)),
                    u = v,
                    z = i;
                e = "M" + e.join(",")
            }
            return h && h.setAttribute("d", e),
            e
        }
        ,
        $
    }();
    Wd() && Ba.registerPlugin(kb),
    kb.version = "3.7.1";
    var qg = function(t) {
        Be(i, Fe(HTMLElement));
        var e = Ce(i);
        function i() {
            return ze(this, i),
            e.apply(this, arguments)
        }
        return Ae(i, [{
            key: "connectedCallback",
            value: function() {
                var t = this;
                this.spacer = this.querySelector(".line.br.last"),
                this.final = this.querySelector("#final"),
                this.footerSpacer = this.querySelector("#footerSpacer"),
                this.lines = Object.values(document.querySelectorAll(".start")),
                this.commaAnimation = this.querySelector("comma-animation"),
                this.signature = this.querySelector("signature-letters"),
                this.html = document.querySelector("html"),
                this.windowSize = [window.innerWidth, window.innerHeight],
                this.windowScrollHeight = window.scrollHeight || document.documentElement.scrollHeight,
                this.scroll = 0,
                this.scrollSpeed = 0,
                this.prevScrollSpeed = 0,
                this.prevScroll = 0,
                this.revealScrollHeight = 195,
                this.revealProgress = 0,
                this.userHasInteracted = !1,
                this.isAnchored = !1,
                this.isScrolling = !1,
                this.isTouching = !1,
                this.animationSpeedFactor = 1,
                this.startTouch = null,
                this.prevTouch = null,
                this.touchDistance = 0,
                this.wordmarkSpeed = null,
                this.logoSpringStiffness = -50,
                this.logoSpringConstant = -12,
                this.logoSpringedMass = 1.1,
                this.logoSpringTimeline = 0,
                this.logoReleaseSpringPosition = null,
                this.logoSpringHasBeenReleased = !1,
                this.footerSpringStiffness = -80,
                this.footerSpringConstant = -12,
                this.footerSpringedMass = 1,
                this.wordMarkTranslate = 0,
                this.wordMarkTranslateEased = 0,
                this.onResizeHiccup = !1,
                this.excessScroll = 0,
                this.excessScrollEased = 0,
                this.atBottomOfPage = !1,
                this.addedScroll = 0,
                this.desktopReacedTheTop = !1,
                this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                this.staggerIntervals = [0, .2, .4, .58, .74, .88, 1, 1.1, 1.18, 1.24, 1.28, 1.3],
                this.isDesktop = document.body.classList.contains("desktop"),
                this.isTouch = document.body.classList.contains("is-touch"),
                this.timelineCompleted = !1,
                this.isiOS15 = document.createElement("canvas").getContext("webgl2"),
                this.setAttribute("mode", "scroll"),
                this.isTouch || this.commaAnimation.classList.add("clickable"),
                this.commaAnimation.addEventListener("onBlinkEnded", function() {
                    t.addEventListener("click", function(e) {
                        return t.onClick(e)
                    })
                }),
                this.addEventListener("mouseup", function() {
                    t.excessScroll = 0
                }),
                this.isTouch && this.addTouchEventListeners(),
                setTimeout(function() {
                    t.style.position = "relative",
                    window.addEventListener("scroll", function() {
                        return t.onScroll()
                    })
                }, 300),
                this.onResize(),
                this.raf = requestAnimationFrame(function(e) {
                    return t.step(e)
                })
            }
        }, {
            key: "addTouchEventListeners",
            value: function() {
                var t = this
                  , e = {
                    passive: !0
                };
                this.addEventListener("touchend", function(e) {
                    return t.onTouchEnd(e)
                }, e),
                this.addEventListener("touchmove", function(e) {
                    return t.onTouchMove(e)
                }, e),
                this.addEventListener("touchstart", function(e) {
                    return t.onTouchStart(e)
                }, e)
            }
        }, {
            key: "onScroll",
            value: function() {
                var t = this;
                this.skipScrollCallback || (this.scroll = window.scrollY,
                this.userHasInteracted || (this.revealProgress = this.scroll,
                this.commaAnimation.isBlinking && this.commaAnimation.startEarly()),
                this.scrollSpeed = this.scroll - this.prevScroll,
                this.prevScroll = this.scroll,
                this.isScrolling = !0,
                window.clearTimeout(this.scrollTimeout),
                this.scrollTimeout = setTimeout(function() {
                    !t.isTouching && t.onScrollEnd()
                }, 99),
                this.userHasInteracted = !0,
                this.commaAnimation.classList.remove("clickable"),
                this.animationSpeedFactor += .3,
                this.tl && this.tl.timeScale(this.animationSpeedFactor),
                this.excessScroll = Math.max(0, this.scroll - this.maxScroll + 1))
            }
        }, {
            key: "onScrollEnd",
            value: function() {
                this.isScrolling = !1
            }
        }, {
            key: "triggerAnimation",
            value: function() {
                var t = this;
                if (!this.commaAnimation.isBlinking) {
                    this.style.paddingTop = 0,
                    this.style.transform = "translate3d(0," + this.initOffset + "px,0)",
                    this.maxScroll = this.offsetHeight - this.windowSize[1],
                    Lb.registerPlugin(kb);
                    var e = kb.create("custom", "M0,0,C0.25,0.1,0.25,1,1,1")
                      , i = kb.create("custom2", "M0,718.4c51.1,0,97.8-468,247.8-556.7c66.5-45.3,199.6-38.3,347.2-38.3");
                    this.tl = Lb.timeline({
                        onComplete: function() {
                            return t.onTimelineComplete()
                        }
                    }),
                    this.tlTitle = Lb.timeline({
                        onComplete: function() {
                            return t.onTimelineComplete()
                        }
                    }),
                    this.tlTitle.to(this, {
                        y: 0,
                        duration: 3.2,
                        ease: i
                    }, .3);
                    for (var s = 0; s < this.lines.length; s++)
                        this.tl.to(this.lines[s], {
                            opacity: 1,
                            duration: .6,
                            ease: "none"
                        }, this.staggerIntervals[s]),
                        this.tl.to(this.lines[s].childNodes[0], {
                            z: 0,
                            duration: .38,
                            ease: e
                        }, this.staggerIntervals[s]),
                        this.tl.to(this.lines[s].childNodes[0], {
                            y: 0,
                            duration: 0 == s ? 0 : 3.1,
                            ease: "power2.out"
                        }, .15 * s);
                    this.tl.fromTo("#final", {
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: .6,
                        ease: "none"
                    }, this.staggerIntervals[this.staggerIntervals.length - 1] + .02)
                }
            }
        }, {
            key: "onClick",
            value: function() {
                this.commaAnimation.isBlinking || this.userHasInteracted || (this.userHasInteracted = !0,
                "elastic" != this.getAttribute("mode") && (this.commaAnimation.classList.remove("clickable"),
                this.isDesktop && (this.lines[0].classList.contains("active") || this.lines[0].style.opacity > 0) || this.scroll > 0 || this.revealProgress > this.revealScrollHeight || (this.setAttribute("mode", "tap"),
                this.triggerAnimation())))
            }
        }, {
            key: "onTimelineComplete",
            value: function() {
                this.timelineCompleted || (this.setFooterSpace(),
                this.timelineCompleted = !0)
            }
        }, {
            key: "getFontOffset",
            value: function() {
                return .84 * parseFloat(window.getComputedStyle(this.commaAnimation, null).getPropertyValue("font-size"))
            }
        }, {
            key: "setInitialPosition",
            value: function() {
                if (!this.onTouchEndSafeTimer || this.userHasInteracted) {
                    var t = this.getFontOffset()
                      , e = this.windowSize[1] / this.windowSize[0];
                    (90 == Math.abs(window.orientation) || e < 1) && (t *= .7),
                    this.isTouch ? this.style.borderTop = .1 * this.windowSize[1] + "px solid rgba(0,0,0,0)" : this.style.marginTop = .1 * this.windowSize[1] + "px",
                    this.initOffset = this.windowSize[1] / 2 - t - .1 * this.windowSize[1],
                    this.style.paddingTop = this.initOffset + "px"
                }
            }
        }, {
            key: "setFooterSpace",
            value: function() {
                var t = this;
                if (!this.onResizeHiccup || !this.isTouch) {
                    var e = this.footerSpacer.offsetHeight
                      , i = this.getFontOffset()
                      , s = this.windowSize[1] / this.windowSize[0];
                    90 == Math.abs(window.orientation) || s < 1 ? i *= .7 : i *= .5,
                    this.spacer.style.height = this.windowSize[1] / 2 - e - i + "px",
                    this.atBottomOfPage && !this.isTouching && this.orientationHasChanged && setTimeout(function() {
                        window.scrollTo(0, t.windowScrollHeight)
                    }, 600)
                }
            }
        }, {
            key: "onResizeEnd",
            value: function() {
                this.onResizeHiccup = !1,
                this.orientationHasChanged = !1,
                !this.touching && this.excessScroll > 0 && (this.excessScroll = 0)
            }
        }, {
            key: "onResize",
            value: function() {
                var t = this;
                this.windowSize[0] = window.innerWidth,
                this.windowSize[1] = window.innerHeight,
                this.windowScrollHeight = window.scrollHeight || document.documentElement.scrollHeight,
                this.commaAnimation.onResize(),
                this.signature.onResize(),
                (this.excessScroll <= 0 || this.orientationHasChanged || !this.isTouch) && this.setFooterSpace(),
                window.clearTimeout(this.resizeTimeout),
                this.onResizeHiccup = !0,
                this.resizeTimeout = setTimeout(function() {
                    return t.onResizeEnd()
                }, 150),
                (this.isScrolling || this.isTouching || this.scrollSpeed > 1) && !this.orientationHasChanged || this.scroll >= this.maxScroll - 1 || (this.onResizeHiccup && (this.maxScroll = this.offsetHeight - this.windowSize[1]),
                this.isAnchored || this.userHasInteracted || this.setInitialPosition())
            }
        }, {
            key: "onOrientationChange",
            value: function() {
                this.orientationHasChanged = !0
            }
        }, {
            key: "onTouchStart",
            value: function(t) {
                this.isTouching = !0,
                "elastic" != this.getAttribute("mode") || this.logoSpringHasBeenReleased || (this.wordmarkSpeed = 0,
                this.prevTouch = t.pageY),
                this.startTouch = t.pageY
            }
        }, {
            key: "onTouchMove",
            value: function(t) {
                this.userHasInteracted || 0 == this.scroll && this.touchDistance > 1 && !this.logoSpringHasBeenReleased && this.setAttribute("mode", "elastic"),
                "elastic" != this.getAttribute("mode") || this.logoSpringHasBeenReleased || "elastic" != this.getAttribute("mode") || this.logoSpringHasBeenReleased || (this.wordmarkSpeed = t.pageY - this.prevTouch,
                this.wordMarkTranslate = this.touchDistance,
                this.html.style.overflowY = "hidden",
                this.style.position = "fixed"),
                this.touchDistance = t.pageY - this.startTouch,
                this.prevTouch = t.pageY
            }
        }, {
            key: "onTouchEnd",
            value: function() {
                var t = this;
                this.onTouchEndSafeTimer = !0,
                setTimeout(function() {
                    t.onTouchEndSafeTimer = !1
                }, 250),
                this.commaAnimation.isBlinking && "elastic" == !this.getAttribute("mode") || (this.isTouching = !1,
                "elastic" != this.getAttribute("mode") || this.logoSpringHasBeenReleased || (this.commaAnimation.classList.remove("clickable"),
                this.userHasInteracted = !0,
                this.style.position = "relative",
                this.html.style.overflowY = "auto",
                this.logoSpringHasBeenReleased = !0,
                this.logoReleaseSpringPosition = this.touchDistance))
            }
        }, {
            key: "solveScrollReveal",
            value: function() {
                var t = this;
                if (!(this.scroll <= 0 || this.anchored)) {
                    if (this.lines.forEach(function(e, i) {
                        t.revealProgress > (0 == i ? 2 : 150 * t.staggerIntervals[i]) && !e.classList.contains("active") && e.classList.add("active")
                    }),
                    this.userHasInteracted && this.revealProgress < this.revealScrollHeight && (this.revealProgress += Math.max(2, this.scrollSpeed)),
                    this.revealProgress >= this.revealScrollHeight && !this.final.classList.contains("active") && this.final.classList.add("active"),
                    this.addedScroll >= this.initOffset && !this.anchored && !this.isTouching)
                        this.style.paddingTop = 0,
                        this.style.transform = "translate3d(0,0,0)",
                        this.maxScroll = this.offsetHeight - this.windowSize[1],
                        this.anchored = !0;
                    else {
                        var e = this.addedScroll;
                        this.addedScroll = Math.min(.2 * this.scroll, this.initOffset),
                        e !== this.addedScroll && (this.style.transform = "translate3d(0," + -this.addedScroll + "px,0)")
                    }
                }
            }
        }, {
            key: "solveElasticReveal",
            value: function() {
                var t = this;
                if (this.isTouching)
                    this.logoSpringHasBeenReleased || (this.wordMarkTranslateEased += .3 * (this.wordMarkTranslate - this.wordMarkTranslateEased)),
                    this.style.paddingTop = this.wordMarkTranslateEased + this.initOffset + "px";
                else {
                    this.commaAnimation.isBlinking && this.commaAnimation.startEarly(),
                    this.style.paddingTop = 0,
                    this.maxScroll = this.offsetHeight - this.windowSize[1];
                    var e = (this.logoSpringStiffness * (this.wordMarkTranslateEased + this.initOffset) + this.logoSpringConstant * this.wordmarkSpeed) / this.logoSpringedMass;
                    this.wordmarkSpeed += .016 * e,
                    this.wordMarkTranslateEased += .016 * this.wordmarkSpeed,
                    this.logoSpringTimeline = (this.logoReleaseSpringPosition - this.wordMarkTranslateEased) / (this.logoReleaseSpringPosition + this.initOffset);
                    var i = this.logoSpringTimeline * this.staggerIntervals[this.staggerIntervals.length - 1];
                    i >= this.staggerIntervals[this.staggerIntervals.length - 1] && this.final.classList.add("active"),
                    this.lines.forEach(function(e, s) {
                        i > t.staggerIntervals[s] && e.classList.add("active")
                    }),
                    this.style.transform = "translate3d(0, " + (this.wordMarkTranslateEased + this.initOffset) + "px, 0)"
                }
            }
        }, {
            key: "solveFooterSpring",
            value: function() {
                if (this.isTouch) {
                    if (this.isTouching || this.scrollSpeed > -1)
                        this.excessScrollEased += .1 * (this.excessScroll - this.excessScrollEased),
                        this.footerSpeed = this.scrollSpeed;
                    else {
                        var t = (this.footerSpringStiffness * this.excessScrollEased + this.footerSpringConstant * this.footerSpeed) / this.footerSpringedMass;
                        this.footerSpeed += .016 * t,
                        this.excessScrollEased += .016 * this.footerSpeed
                    }
                    Math.abs(this.excessScrollEased) > .01 && this.signature.step(this.excessScrollEased)
                } else
                    this.isSafari && (this.desktopMaxScroll = this.windowScrollHeight - this.windowSize[1],
                    this.scroll > this.desktopMaxScroll && this.scrollSpeed > -1 ? this.excessScrollEased += .1 * (this.excessScroll - this.excessScrollEased) : this.userHasInteracted && (this.excessScrollEased -= .1 * this.excessScrollEased));
                Math.abs(this.excessScrollEased) > .01 && this.signature.step(this.excessScrollEased)
            }
        }, {
            key: "step",
            value: function() {
                var t = this;
                this.raf = requestAnimationFrame(function(e) {
                    return t.step(e)
                }),
                this.atBottomOfPage = this.userHasInteracted && this.scroll + this.windowSize[1] + window.innerHeight > this.windowScrollHeight,
                this.solveFooterSpring(),
                "elastic" == this.getAttribute("mode") && this.solveElasticReveal(),
                "scroll" == this.getAttribute("mode") && this.solveScrollReveal()
            }
        }]),
        i
    }();
    function rg(t) {
        return (rg = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function sg(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function Yd(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
        }
    }
    function tg(t, e, r) {
        return e && Yd(t.prototype, e),
        r && Yd(t, r),
        t
    }
    function ug(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
        e && uc(t, e)
    }
    function vg(t) {
        var e = Zd();
        return function() {
            var r, n = vc(t);
            if (e) {
                var i = vc(this).constructor;
                r = Reflect.construct(n, arguments, i)
            } else
                r = n.apply(this, arguments);
            return wg(this, r)
        }
    }
    function wg(t, e) {
        if (e && ("object" === rg(e) || "function" == typeof e))
            return e;
        if (void 0 !== e)
            throw new TypeError("Derived constructors may only return object or undefined");
        return xg(t)
    }
    function xg(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function yg(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return (yg = function(t) {
            if (null === t || !Ag(t))
                return t;
            if ("function" != typeof t)
                throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t))
                    return e.get(t);
                e.set(t, r)
            }
            function r() {
                return zg(t, arguments, vc(this).constructor)
            }
            return r.prototype = Object.create(t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            uc(r, t)
        }
        )(t)
    }
    function zg(t, e, r) {
        return (zg = Zd() ? Reflect.construct : function(t, e, r) {
            var n = [null];
            n.push.apply(n, e);
            var i = new (Function.bind.apply(t, n));
            return r && uc(i, r.prototype),
            i
        }
        ).apply(null, arguments)
    }
    function Zd() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
            return !1;
        if (Reflect.construct.sham)
            return !1;
        if ("function" == typeof Proxy)
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (t) {
            return !1
        }
    }
    function Ag(t) {
        return -1 !== Function.toString.call(t).indexOf("[native code]")
    }
    function uc(t, e) {
        return (uc = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function vc(t) {
        return (vc = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    var Bg = function(t) {
        ug(r, yg(HTMLElement));
        var e = vg(r);
        function r() {
            return sg(this, r),
            e.apply(this, arguments)
        }
        return tg(r, [{
            key: "connectedCallback",
            value: function() {
                var t = this;
                this.weightRange = [300, 550],
                this.incrementMark = 50,
                this.baseWeight = 420,
                this.currentWeight = 420,
                this.isTouch = document.body.classList.contains("is-touch"),
                this.previousExcessScrollEased = 0,
                this.letters = Object.values(this.querySelectorAll(".ls"));
                for (var e = function() {
                    var e = document.createElement("div");
                    e.setAttribute("aria-hidden", "true"),
                    e.classList.add("marker"),
                    e.style.fontWeight = r,
                    t.letters.forEach(function(t) {
                        var r = document.createElement("span");
                        r.innerHTML = t.innerHTML,
                        e.appendChild(r)
                    }),
                    t.appendChild(e)
                }, r = this.weightRange[0]; r <= this.weightRange[1]; r += this.incrementMark)
                    e();
                this.markers = Object.values(this.querySelectorAll(".marker")),
                this.onResize(),
                setTimeout(function() {
                    t.onResize()
                }, 1e3),
                this.step(0)
            }
        }, {
            key: "onResize",
            value: function() {
                var t = this;
                this.limits = [],
                this.markers.forEach(function(e) {
                    var r = [];
                    Object.values(e.querySelectorAll("span")).forEach(function(t) {
                        return r.push(t.offsetLeft)
                    }),
                    t.limits.push(r)
                }),
                this.step(this.previousExcessScrollEased)
            }
        }, {
            key: "step",
            value: function(t) {
                var e = this
                  , r = this.baseWeight + .9 * t;
                r = Math.min(this.weightRange[1], r),
                r = Math.max(this.weightRange[0], r);
                var n = this.weightRange[1] - this.weightRange[0]
                  , i = (r - this.weightRange[0]) / n
                  , o = Math.min(this.limits.length - 2, Math.floor((this.limits.length - 1) * i))
                  , a = (i - 1 / (this.limits.length - 1) * o) / (1 / (this.limits.length - 1));
                r !== this.currentWeight && (this.style.fontWeight = r),
                this.letters.forEach(function(t, r) {
                    var n = e.limits[o][r] + (e.limits[o + 1][r] - e.limits[o][r]) * a;
                    t.style.transform = "translate3d( " + n + "px, 0px, 0px )"
                }),
                this.previousExcessScrollEased = t
            }
        }]),
        r
    }();
    document.addEventListener("gesturestart", function(e) {
        return e.preventDefault()
    }),
    document.addEventListener("gesturechange", function(e) {
        return e.preventDefault()
    }),
    document.addEventListener("gestureend", function(e) {
        return e.preventDefault()
    });
    var Cg = function() {
        var e = navigator.userAgent;
        return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "tablet" : /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(e) ? "mobile" : "desktop"
    };
    function $d() {
        return "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    }
    document.body.classList.add(Cg()),
    document.body.classList.toggle("is-touch", $d()),
    document.body.classList.add("jsready"),
    history.scrollRestoration && (history.scrollRestoration = "manual");
    var Dg = "customElements"in window && window.customElements.define
      , Eg = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if ($d() && Eg && !window.BigInt && (Dg = !1),
    Dg) {
        window.addEventListener("beforeprint", function() {
            return document.querySelector("comma-animation").goToEnd()
        });
        var _d = document.querySelector("app-main")
          , ae = function() {
            var e = .01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", "".concat(e, "px"))
        };
        ae(),
        window.addEventListener("resize", function() {
            _d.onResize(),
            ae()
        }),
        window.addEventListener("orientationchange", function(e) {
            _d.onOrientationChange(e)
        }),
        window.customElements.define("comma-animation", xe),
        window.customElements.define("signature-letters", Bg),
        window.customElements.define("app-main", qg)
    } else
        document.body.classList.add("fallback-page"),
        document.querySelector(".wordmark").textContent = "LoveFrom";
    return {
        "WdKE": {}
    };
});
