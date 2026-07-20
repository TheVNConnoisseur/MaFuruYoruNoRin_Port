/*!
 * tsvinos-runtime-es5 - v1.3.23
 * Compiled Mon, 06 Apr 2020 05:10:34 UTC
 * (C) Copyright : All rights reserved by eTOYLab.com
 */
! function(o) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = o();
    else if ("function" == typeof define && define.amd) define([], o);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.etoylabutil = o()
    }
}(function() {
    return function() {
        function o(e, t, n) {
            function i(a, s) {
                if (!t[a]) {
                    if (!e[a]) {
                        var l = "function" == typeof require && require;
                        if (!s && l) return l(a, !0);
                        if (r) return r(a, !0);
                        var c = new Error("Cannot find module '" + a + "'");
                        throw c.code = "MODULE_NOT_FOUND", c
                    }
                    var f = t[a] = {
                        exports: {}
                    };
                    e[a][0].call(f.exports, function(o) {
                        return i(e[a][1][o] || o)
                    }, f, f.exports, o, e, t, n)
                }
                return t[a].exports
            }
            for (var r = "function" == typeof require && require, a = 0; a < n.length; a++) i(n[a]);
            return i
        }
        return o
    }()({
        1: [function(o, e, t) {
            ! function() {
                "use strict";
                var o = {
                    _init: function() {
                        $.ajaxSetup({
                            xhrFields: {
                                withCredentials: !0
                            }
                        }), String.prototype.startsWith || (String.prototype.startsWith = function(o, e) {
                            return this.substr(!e || e < 0 ? 0 : +e, o.length) === o
                        }), String.prototype.endsWith || (String.prototype.endsWith = function(o) {
                            return -1 !== this.indexOf(o, this.length - o.length)
                        })
                    },
                    __LOG_DEBUG: 1,
                    __LOG_INFO: 2,
                    __LOG_WARN: 4,
                    __LOG_ERROR: 8,
                    __LOG_FATAL: 16,
                    __LOG_ALL: 65535,
                    __DEBUG_WIN: null,
                    fnGetLogger: function(o) {
                        var e = function() {};
                        if (!window.console) return e;
                        var t = !1;
                        if (this.__LOG_INFO === o && this.__logFlag & this.__LOG_INFO && (t = !0), this.__LOG_DEBUG === o && this.__logFlag & this.__LOG_DEBUG && (t = !0), this.__LOG_WARN === o && this.__logFlag & this.__LOG_WARN && (t = !0), this.__LOG_ERROR === o && this.__logFlag & this.__LOG_ERROR && (t = !0), this.__LOG_FATAL === o && this.__logFlag & this.__LOG_FATAL && (t = !0), !0 === t)
                            for (var n in console)
                                if ("function" == typeof console[n]) {
                                    if (this.__LOG_INFO === o && "info" == n) {
                                        e = console[n].bind(window.console, "Info");
                                        break
                                    }
                                    if (this.__LOG_DEBUG === o && "debug" == n) {
                                        e = console[n].bind(window.console, "Debug");
                                        break
                                    }
                                    if (this.__LOG_WARN === o && "warn" == n) {
                                        e = console[n].bind(window.console, "Warn");
                                        break
                                    }
                                    if (this.__LOG_ERROR === o && "error" == n) {
                                        e = console[n].bind(window.console, "Error");
                                        break
                                    }
                                    if (this.__LOG_FATAL === o && "error" == n) {
                                        e = console[n].bind(window.console, "Fatal");
                                        break
                                    }
                                } return e
                    },
                    fnDebug: function(o, e, t, n) {
                        void 0 === e ? (e = o, o = void 0, console.log(e)) : (console.log(o + "|" + e), this.__DEBUG_WIN && this.__DEBUG_WIN.onLog && this.__DEBUG_WIN.onLog(o, e, t || "", n || 0))
                    },
                    __logFlag: 65535,
                    fnSetDebugWin: function(o) {
                        this.__DEBUG_WIN = o
                    },
                    fnLogSetOn: function(o) {
                        this.__logFlag |= o
                    },
                    fnLogSetOff: function(o) {
                        this.__logFlag &= ~o
                    },
                    fnLogDebug: function(o, e, t) {
                        this.__logFlag & this.__LOG_DEBUG && this.fnDebug("Debug", o, e, t)
                    },
                    fnLogInfo: function(o, e, t) {
                        this.__logFlag & this.__LOG_INFO && this.fnDebug("Info", o, e, t)
                    },
                    fnLogWarn: function(o, e, t) {
                        this.__logFlag & this.__LOG_WARN && this.fnDebug("Warn", o, e, t)
                    },
                    fnLogError: function(o, e, t) {
                        if (this.__logFlag & this.__LOG_ERROR && this.fnDebug("Error", o, e, t), this.__logFlag & this.__LOG_DEBUG) {
                            var n = new Error;
                            this.fnDebug(n.stack)
                        }
                    },
                    fnLogFatal: function(o, e, t) {
                        if (this.__logFlag & this.__LOG_FATAL && this.fnDebug("Fatal", o, e, t), this.__logFlag & this.__LOG_DEBUG) {
                            var n = new Error;
                            this.fnDebug(n.stack)
                        }
                    },
                    fnIsNull: function(o) {
                        if (void 0 === o) return !0;
                        if (null === o) return !0;
                        if ("NaN" === o) return !0;
                        if ("undefined" === new String(o).valueOf()) return !0;
                        var e = new String(o);
                        return "undefined" === e.valueOf() || (null === e || 0 === e.toString().length)
                    },
                    fnParseInt: function(o) {
                        return void 0 === o || "NaN" === o || "" === o || null === o ? 0 : ("string" == typeof o && o.indexOf(",") >= 0 && (o = this.fnRemoveComma(o)), parseInt(o))
                    },
                    fnParseFloat: function(o) {
                        return void 0 === o || "NaN" === o || "" === o || null === o ? 0 : parseFloat(o)
                    },
                    fnParseBool: function(o) {
                        return void 0 !== o && "NaN" !== o && "" !== o && null !== o && ("boolean" == typeof o ? o : (o += "", o = o.replace(/"/g, ""), "true" === o.toLowerCase()))
                    },
                    fnRound: function(o, e) {
                        return e = Math.pow(10, e), Math.round(o * e) / e
                    },
                    fnRoundDown: function(o, e) {
                        return e = Math.pow(10, e), Math.floor(o * e) / e
                    },
                    fnRoundUp: function(o, e) {
                        return e = Math.pow(10, e), Math.ceil(o * e) / e
                    },
                    fnGetPrecision: function(o) {
                        var e = o.toString().split(".");
                        return e.length > 1 ? e[1].length : 0
                    },
                    fnGetPercentage: function(o, e, t) {
                        e = e || 0, t = t || 100, o = o || 0;
                        var n = (o - e) / (t - e);
                        return this.fnRound(n, 2)
                    },
                    fnGetDegree: function(o) {
                        return o * (180 / Math.PI)
                    },
                    fnGetRadian: function(o) {
                        return o * (Math.PI / 180)
                    },
                    fnAddComma: function(o) {
                        return o = String(o), o.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,")
                    },
                    fnRemoveComma: function(o) {
                        return o = String(o), o.replace(/[^-?\d]+/g, "")
                    },
                    fnReplaceStr: function(o, e, t, n) {
                        var i = o.indexOf(e);
                        if (0 > i) return o;
                        var r = !0;
                        "boolean" == typeof n && (r = n), 0 <= t.indexOf(e) && (r = !1);
                        for (var a = o; 0 <= i && (a = a.substring(0, i) + t + a.substring(i + e.length), !1 !== r);) i = a.indexOf(e);
                        return a
                    },
                    fnReplaceEscapeHtml: function(o) {
                        var e = {
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#039;"
                        };
                        return o.replace(/[&<>"']/g, function(o) {
                            return e[o]
                        })
                    },
                    fnGetCharRange: function(o, e) {
                        for (var t = [], n = o.charCodeAt(0), i = e.charCodeAt(0); n <= i; ++n) t.push(String.fromCharCode(n));
                        return t
                    },
                    fnIntToString26: function(o) {
                        var e = this.fnGetCharRange("a", "z"),
                            t = "";
                        if (o < 1) return t;
                        for (var n, i = o; 0 !== i;) {
                            var r = i - 1;
                            i = Math.floor(r / 26), n = r % 26, t = e[n] + t
                        }
                        return t
                    },
                    fnString26ToInt: function(o) {
                        var e = this.fnGetCharRange("a", "z"),
                            t = 0;
                        o = o.toLowerCase(), o = o.replace(/[^a-z]/g, "");
                        for (var n = 0, i = o.length - 1; i > -1; i--) {
                            var r = o[i],
                                a = e.indexOf(r);
                            a++;
                            t += Math.pow(26, n) * a, n++
                        }
                        return t
                    },
                    fnAddLeadingZero: function(o, e) {
                        e = e || 2;
                        var t = "000000000000000000" + o;
                        return t.substr(t.length - e)
                    },
                    fnDeepCopy: function(o) {
                        if (null === o || "object" != typeof o) return o;
                        var e = new o.constructor;
                        for (var t in o) e[t] = this.fnDeepCopy(o[t]);
                        return e
                    },
                    fnExtend: function(o, e) {
                        return e ? $.extend({}, o, e) : o
                    },
                    fnBase64ToArrayBuffer: function(o) {
                        for (var e = window.atob(o), t = e.length, n = new Uint8Array(t), i = 0; i < t; ++i) n[i] = e.charCodeAt(i);
                        return n.buffer
                    },
                    fnSetCookie: function(o, e, t, n) {
                        return void 0 !== o && void 0 !== e && (void 0 !== t && void 0 !== n ? Cookies.set(o, e, {
                            expires: t,
                            path: n
                        }) : void 0 !== t ? Cookies.set(o, e, {
                            expires: t
                        }) : void 0 !== n ? Cookies.set(o, e, {
                            path: n
                        }) : Cookies.set(o, e), !0)
                    },
                    fnGetCookie: function(o) {
                        return Cookies.get(o)
                    },
                    fnRemoveCookie: function(o, e) {
                        void 0 !== e ? Cookies.remove(o, {
                            path: e
                        }) : Cookies.remove(o)
                    },
                    fnQueueCookie: function(o, e, t, n, i) {
                        t = t || 3, n = n || "/", i = i || !1;
                        var r = parseInt(Cookies.get(o + "_count", {
                            path: n
                        }));
                        if (void 0 === r || isNaN(r)) Cookies.set(o + "_0", e, {
                            path: n
                        }), Cookies.set(o + "_count", 1, {
                            path: n
                        });
                        else {
                            for (var a = 0; a < r; a++)
                                if (Cookies.get(o + "_" + a, {
                                        path: n
                                    }) == e && !1 === i) return !1;
                            if (r >= t) {
                                var s = r - 1;
                                for (a = 0; a < s; a++) {
                                    var l = a + 1;
                                    Cookies.set(o + "_" + a, Cookies.get(o + "_" + l), {
                                        path: n
                                    })
                                }
                                Cookies.set(o + "_" + s, e, {
                                    path: n
                                })
                            } else Cookies.set(o + "_" + r, e, {
                                path: n
                            }), Cookies.set(o + "_count", r + 1, {
                                path: n
                            })
                        }
                        return !0
                    },
                    fnDequeueCookie: function(o, e, t, n) {
                        t = t || 3, n = n || "/";
                        var i = parseInt(Cookies.get(o + "_count", {
                            path: n
                        }));
                        if (void 0 === i || isNaN(i)) return !1;
                        for (var r = 0; r < i; r++)
                            if (Cookies.get(o + "_" + r, {
                                    path: n
                                }) == e) {
                                for (var a = r; a < i - 1; a++) {
                                    var s = a + 1;
                                    Cookies.set(o + "_" + a, Cookies.get(o + "_" + s), {
                                        path: n
                                    })
                                }
                                i--, Cookies.set(o + "_count", i, {
                                    path: n
                                })
                            } return !0
                    },
                    fnIsMobile: function() {
                        var o = !1;
                        return function(e) {
                            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (o = !0)
                        }(navigator.userAgent || navigator.vendor || window.opera), o
                    },
                    fnIsMobileOrTablet: function() {
                        var o = !1;
                        return function(e) {
                            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (o = !0)
                        }(navigator.userAgent || navigator.vendor || window.opera), o
                    },
                    fnError: function(o, e, t, n) {
                        var i = {
                                title: "Error",
                                message: '<div class="text-center">' + o + "</div>",
                                locale: e || "en",
                                closeButton: !1,
                                centerVertical: !0,
                                buttons: {
                                    confirm: {
                                        label: "OK",
                                        className: "wv-dlg-ok",
                                        callback: function() {
                                            "function" == typeof t && t()
                                        }
                                    }
                                },
                                container: n
                            },
                            r = bootbox.dialog(i);
                        return void 0 !== n && ($(".modal-backdrop").appendTo(n), $("body").removeClass("modal-open")), r
                    },
                    fnNotice: function(o, e, t, n, i) {
                        var r = {
                                title: "Information",
                                message: '<div class="text-center">' + o + "</div>",
                                locale: e || "en",
                                closeButton: !1,
                                centerVertical: !0,
                                buttons: {
                                    confirm: {
                                        label: "OK",
                                        className: "wv-dlg-ok",
                                        callback: function() {
                                            "function" == typeof t && t()
                                        }
                                    }
                                },
                                container: i
                            },
                            a = bootbox.dialog(r);
                        return void 0 !== n && n > 0 && setTimeout(function() {
                            a.modal("hide")
                        }, 1e3 * n), void 0 !== i && ($(".modal-backdrop").appendTo(i), $("body").removeClass("modal-open")), a
                    },
                    fnConfirm: function(o, e, t, n, i) {
                        var r = {
                            title: "Confirm",
                            message: e,
                            locale: "en",
                            swapButtonOrder: !0,
                            closeButton: !1,
                            centerVertical: !0,
                            buttons: {
                                confirm: {
                                    className: "wv-dlg-yes"
                                },
                                cancel: {
                                    className: "wv-dlg-no"
                                }
                            },
                            callback: function(o) {
                                "function" == typeof n && n(o)
                            }
                        };
                        "object" == typeof o ? ($.extend(r, o), i = t, n = e) : (r.title = o || "Confirm", r.message = e), void 0 !== t && (r.locale = t), void 0 !== i && (r.container = i);
                        var a = bootbox.confirm(r);
                        return void 0 !== i && ($(".modal-backdrop").appendTo(i), $("body").removeClass("modal-open")), a
                    },
                    fnPrompt: function(o, e, t, n, i, r, a) {
                        var s = {
                            title: o || "Input",
                            message: e,
                            inputType: i || "textarea",
                            locale: t || "en",
                            closeButton: !1,
                            centerVertical: !0,
                            callback: function(o) {
                                void 0 !== n && n(o)
                            },
                            container: a
                        };
                        void 0 !== r && (s.inputOptions = r);
                        var l = bootbox.prompt(s);
                        return void 0 !== a && ($(".modal-backdrop").appendTo(a), $("body").removeClass("modal-open")), l
                    },
                    fnAddUserClasses: function(o, e) {
                        if (e && 0 !== e.length) {
                            var t = [];
                            0 > e.indexOf(" ") ? t[0] = e : t = e.split(" ");
                            for (var n = 0; n < t.length; ++n) {
                                var i = t[n];
                                o.hasClass(i) || o.addClass(i)
                            }
                        }
                    },
                    fnAddUserData: function(o, e) {
                        if (e && 0 !== e.length)
                            for (var t = 0; t < e.length; ++t) {
                                var n = e[t];
                                if ("object" == typeof n)
                                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && o.attr("data-" + i, n[i])
                            }
                    },
                    fnFindFirstChildByClass: function(o, e) {
                        function t(o, e, i) {
                            for (var r = 0; r < o.childNodes.length && !i; r++) {
                                for (var a = o.childNodes[r], s = "string" == typeof a.className ? a.className.split(" ") : [], l = 0, c = s.length; l < c; l++)
                                    if (s[l] === e) {
                                        i = !0, n = o.childNodes[r];
                                        break
                                    } if (i) break;
                                t(o.childNodes[r], e, i)
                            }
                        }
                        var n = null;
                        return t(o, e, !1), n
                    },
                    fnLoadCss: function(o, e) {
                        var t = o;
                        null === o && (t = document.body), "string" == typeof o && (t = document.getElementById(o));
                        var n = $("link[href='" + e + "']");
                        if (0 < n.length) return void(n[0].disabled && (n[0].disabled = !1));
                        var i = document.createElement("link");
                        i.rel = "stylesheet", i.type = "text/css", i.href = e, i.media = "all", t.appendChild(i)
                    },
                    fnUnloadCss: function(o) {
                        var e = $("link[href='" + o + "']");
                        0 < e.length && (e[0].disabled = !0)
                    },
                    fnLoadScript: function(o, e, t, n) {
                        var i = o;
                        null === o && (i = document.body), "string" == typeof o && (i = document.getElementById(o));
                        var r = $("script[src='" + e + "']");
                        if (0 < r.length && "function" == typeof t) return void t(r[0]);
                        var a = document.createElement("script");
                        i.appendChild(a), a.type = "text/javascript", "function" == typeof t && (a.onreadystatechange = function() {
                            "complete" === this.readyState && t(this)
                        }, a.onload = t), "function" == typeof n && (a.onerror = n), a.src = e
                    },
                    fnPageLoading: function(o, e, t, n, i) {
                        t = void 0 !== t && t, n = void 0 === n || n;
                        var r = this;
                        $.ajax({
                            url: e,
                            type: "get",
                            success: function(e) {
                                var a = o;
                                "string" == typeof o && (a = $("#" + o)), t ? a.append(e) : a.html(e);
                                var s = a.hasClass("collapse");
                                s && a.collapse("show"), n && (s ? a.on("shown.bs.collapse", function(o) {
                                    $(o.target).attr("id") === a.attr("id") && r.fnScrollTo(a), $(this).off(o)
                                }) : r.fnScrollTo(a)), "function" == typeof i && i(e)
                            }
                        })
                    },
                    fnScrollTo: function(o, e) {
                        if (void 0 !== o && void 0 !== o.offset()) {
                            var t = this.fnParseInt(e),
                                n = o.offset().top - t;
                            $("html,body").animate({
                                scrollTop: n
                            }, 100, "swing")
                        }
                    }
                };
                o._init(), window.eTOYutil = o
            }()
        }, {}]
    }, {}, [1])(1)
});
//# sourceMappingURL=etoylabutil.js.map
