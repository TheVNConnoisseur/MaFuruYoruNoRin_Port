/*!
 * tsvinos-runtime-es5 - v1.3.23
 * Compiled Mon, 06 Apr 2020 05:10:36 UTC
 * (C) Copyright : All rights reserved by eTOYLab.com
 */
! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.vinosViewer = e()
    }
}(function() {
    var define, module, exports;
    return function() {
        function e(t, i, n) {
            function r(s, o) {
                if (!i[s]) {
                    if (!t[s]) {
                        var l = "function" == typeof require && require;
                        if (!o && l) return l(s, !0);
                        if (a) return a(s, !0);
                        var u = new Error("Cannot find module '" + s + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var c = i[s] = {
                        exports: {}
                    };
                    t[s][0].call(c.exports, function(e) {
                        return r(t[s][1][e] || e)
                    }, c, c.exports, e, t, i, n)
                }
                return i[s].exports
            }
            for (var a = "function" == typeof require && require, s = 0; s < n.length; s++) r(n[s]);
            return r
        }
        return e
    }()({
        1: [function(_dereq_, module, exports) {
            ! function() {
                var Vinos = {
                    VERSION_MAJOR: 1,
                    VERSION_MINOR: 4,
                    VERSION_RELEASE: 1,
                    DEFAULT_DURATION: 1500,
                    DEFAULT_LOADTIMEOUT: 6e4,
                    DEFAULT_SELECT_LINEGAP: 16,
                    DEFAULT_FONTSIZE: 22,
                    DEFAULT_SCREEN_WIDTH: 1024,
                    DEFAULT_SCREEN_HEIGHT: 768,
                    DEFAULT_MIN_FONTSIZE: 12,
                    DEFAULT_MAX_FONTSIZE: 40,
                    DEFAULT_MIN_EMSIZE: .1,
                    DEFAULT_MAX_EMSIZE: 10,
                    DEFAULT_VIEWER_ID: "Vinos-canvas",
                    DEFAULT_VIDEO_ID: "video-view",
                    DEFAULT_MESSAGE_ID: "message-view",
                    DEFAULT_DB_NAME: "vinos",
                    DEFAULT_NUM_OF_SAVED: "numOfSaves",
                    DEFAULT_PROGRESS_ID: "progress",
                    DEFAULT_AUTO_SAVED: "autoSave",
                    DEFAULT_QUICK_SAVED: "quickSave",
                    DEFAULT_TEMP_SAVED: "tempSave",
                    DEFAULT_CONFIG_SAVED: "config",
                    DEFAULT_PLUGIN_URL: "js/",
                    DEFAULT_EFFECT_URL: "effect/",
                    DEFAULT_EFFECT_EXT: ".png",
                    DEFAULT_MAX_HISTORY: 500,
                    DEFAULT_THUMBNAIL_WIDTH: 240,
                    DEFAULT_THUMBNAIL_HEIGHT: 135,
                    DEFAULT_FACE_MIN_WIDTH: 154,
                    DEFAULT_FACE_SCALE: .6,
                    DEFAULT_FACE_OFFSET_Y: 1.2,
                    DEFAULT_MAX_SHOCKWAVE: 7,
                    DEFAULT_LAYERZINDEX_CH: 20,
                    DEFAULT_MAX_SAVE_SLOT: 10,
                    DEFAULT_USE_EXPERIMENTAL: !1,
                    DEFAULT_MAX_DIALOG_LINES: 10,
                    DEFAULT_HISTORY_PAGESIZE: 20,
                    DEFAULT_MAX_WAITTIME: 1e4,
                    DEFAULT_MUTE_BGM_VOLUME: .2,
                    DEFAULT_SAVE_SCREEN: {
                        paging: "scroll",
                        elements: [{
                            ref: "header"
                        }, {
                            ref: "content"
                        }, {
                            ref: "footer"
                        }],
                        detail: [{
                            type: "wv-item-new"
                        }, {
                            type: "wv-item-title"
                        }, {
                            type: "wv-item-date"
                        }, {
                            type: "wv-item-time"
                        }, {
                            type: "wv-item-dialog"
                        }, {
                            type: "wv-item-delete"
                        }],
                        header: {
                            type: "wv-header",
                            elements: [{
                                type: "wv-title"
                            }]
                        },
                        content: {
                            type: "wv-content",
                            pageSize: -1,
                            flow: 1,
                            elements: [{
                                type: "wv-list",
                                repeat: !0,
                                elements: [{
                                    type: "wv-item",
                                    elements: [{
                                        type: "wv-container",
                                        class: "wv-item-image",
                                        elements: [{
                                            type: "wv-item-thumbnail"
                                        }]
                                    }, {
                                        type: "wv-container",
                                        class: "wv-item-text",
                                        elements: "detail"
                                    }]
                                }]
                            }]
                        },
                        footer: {
                            type: "wv-footer",
                            elements: [{
                                type: "wv-close"
                            }]
                        }
                    },
                    DEFAULT_LOAD_SCREEN: {
                        paging: "scroll",
                        elements: [{
                            ref: "header"
                        }, {
                            ref: "content"
                        }, {
                            ref: "footer"
                        }],
                        detail: [{
                            type: "wv-item-new"
                        }, {
                            type: "wv-item-title"
                        }, {
                            type: "wv-item-date"
                        }, {
                            type: "wv-item-time"
                        }, {
                            type: "wv-item-dialog"
                        }, {
                            type: "wv-item-delete"
                        }],
                        header: {
                            type: "wv-header",
                            elements: [{
                                type: "wv-title"
                            }]
                        },
                        content: {
                            type: "wv-content",
                            pageSize: -1,
                            flow: 1,
                            elements: [{
                                type: "wv-list",
                                repeat: !0,
                                elements: [{
                                    type: "wv-item",
                                    elements: [{
                                        type: "wv-container",
                                        class: "wv-item-image",
                                        elements: [{
                                            type: "wv-item-thumbnail"
                                        }]
                                    }, {
                                        type: "wv-container",
                                        class: "wv-item-text",
                                        elements: "detail"
                                    }]
                                }]
                            }]
                        },
                        footer: {
                            type: "wv-footer",
                            elements: [{
                                type: "wv-close"
                            }]
                        }
                    },
                    DEFAULT_GALLERY_SCREEN: {
                        paging: "scroll",
                        elements: [{
                            ref: "header"
                        }, {
                            ref: "content"
                        }, {
                            ref: "footer"
                        }],
                        header: {
                            type: "wv-header",
                            elements: [{
                                type: "wv-title"
                            }]
                        },
                        content: {
                            type: "wv-content",
                            pageSize: -1,
                            flow: 1,
                            elements: [{
                                type: "wv-container",
                                class: "tab-content",
                                elements: [{
                                    type: "wv-list",
                                    repeat: !0,
                                    class: "tab-pane fade active show",
                                    elements: [{
                                        type: "wv-item"
                                    }]
                                }, {
                                    type: "wv-detail",
                                    class: "tab-pane fade"
                                }]
                            }]
                        },
                        footer: {
                            type: "wv-footer",
                            elements: [{
                                type: "wv-close"
                            }]
                        }
                    },
                    DEFAULT_LAYERUSAGE_BG: 10,
                    DEFAULT_LAYERUSAGE_BFX: 15,
                    DEFAULT_LAYERUSAGE_BGM: 20,
                    DEFAULT_LAYERUSAGE_SE: 30,
                    DEFAULT_LAYERUSAGE_VO: 40,
                    DEFAULT_LAYERUSAGE_CL: 50,
                    DEFAULT_LAYERUSAGE_CM: 60,
                    DEFAULT_LAYERUSAGE_CR: 70,
                    DEFAULT_LAYERUSAGE_EL: 55,
                    DEFAULT_LAYERUSAGE_EM: 65,
                    DEFAULT_LAYERUSAGE_ER: 75,
                    DEFAULT_LAYERUSAGE_VD: 80,
                    DEFAULT_LAYERUSAGE_VFX: 85,
                    DEFAULT_LAYERUSAGE_UI: 90,
                    DEFAULT_LAYERUSAGE_US: 100,
                    DB_NONE: 0,
                    DB_NULL: 10,
                    DB_LOCAL: 20,
                    DB_SERVER: 30,
                    DB_API: 40,
                    NOOP_FUNC: function() {},
                    SCRIPT_END: -999,
                    SCRIPT_OUTRO: -4,
                    SCRIPT_INTRO: -3,
                    SCRIPT_MACRO: -2,
                    SCRIPT_GAME: -1,
                    SCRIPT_MACRO_ARRAY: 1e5,
                    PROGRESS_CG: 0,
                    PROGRESS_SCENE: 1,
                    PROGRESS_ANIME: 2,
                    PROGRESS_VARIABLE: 3,
                    WAIT_NONE: 0,
                    WAIT_RENDER: 1,
                    WAIT_UNTIL: 10,
                    WAIT_CLICK: 20,
                    WAIT_CLICK_CM: 21,
                    WAIT_INPUT: 30,
                    WAIT_SAVE: 40,
                    WAIT_LOAD: 45,
                    WAIT_BGM_FADE: 55,
                    WAIT_BGM_STOP: 57,
                    WAIT_SE_FADE: 65,
                    WAIT_SE_STOP: 67,
                    WAIT_VO_FADE: 75,
                    WAIT_VO_STOP: 77,
                    WAIT_VIDEO_READY: 85,
                    WAIT_VIDEO_STOP: 87,
                    WAIT_IMAGE_SHAKE: 200,
                    WAIT_IMAGE_TRANSIT: 210,
                    WAIT_LAYER_MOVE: 300,
                    REQUESTBY_ALL: 65535,
                    REQUESTBY_SCRIPT: 1,
                    REQUESTBY_USER: 2,
                    REQUESTBY_SYSTEM: 4,
                    SAVE_NORMAL: 0,
                    SAVE_AUTO: 1,
                    SAVE_QUICK: 2,
                    SAVE_TEMP: 3,
                    FLOW_ONESTEP: 1,
                    FLOW_TWOSTEP: 2,
                    ROTATE_CW: 0,
                    ROTATE_CCW: 1,
                    DIR_NONE: 0,
                    DIR_LEFT: 1,
                    DIR_RIGHT: 2,
                    DIR_UP: 4,
                    DIR_DOWN: 8,
                    DIR_LEFT_UP: 5,
                    DIR_LEFT_DOWN: 9,
                    DIR_RIGHT_UP: 6,
                    DIR_RIGHT_DOWN: 10,
                    USE_CORS: !1,
                    _waitDef: [],
                    product: null,
                    contentURL: null,
                    resources: [],
                    prefab: [],
                    scenes: [],
                    history: [],
                    intro: [],
                    outro: [],
                    macro: [],
                    menu: [],
                    game: [],
                    scripts: [],
                    startScene: 0,
                    renderQueue: [],
                    renderFilter: [],
                    renderParticle: [],
                    bundleQueue: [],
                    containers: [],
                    current: {
                        scene: 0,
                        name: "",
                        title: "",
                        doHistory: !0,
                        showHistory: !0,
                        x: 0,
                        y: 0
                    },
                    runtime: {
                        tick: 0,
                        fpsTick: 0,
                        autoTick: 0,
                        frameCount: 0
                    },
                    progress: {
                        cg: null,
                        scene: null,
                        anime: null,
                        variables: null
                    },
                    events: [],
                    defines: [],
                    macros: [],
                    plugIns: [],
                    defaultConfig: {
                        playSpeed: 1,
                        typeSpeed: 1,
                        typeDelay: 20,
                        autoSpeed: 1,
                        autoDelay: 100,
                        isDebug: !1,
                        useProductSkin: !0,
                        skin: "",
                        waitVoice: !0,
                        keepVoice: !0,
                        muteBGM: 1,
                        dialogOpaque: .6,
                        dialogShadow: !0,
                        dialogOutline: !1,
                        useEffect: !0,
                        useAnim: !0,
                        useMenu: !0,
                        useQuickMenu: !0,
                        autoStart: !0,
                        volumeMaster: 1,
                        volumeBGM: .5,
                        volumeVideo: .75,
                        volumeSE: .75,
                        volumeVoice: .75,
                        preload: 0,
                        logLevel: {
                            info: !0,
                            debug: !0,
                            warn: !0,
                            error: !0,
                            fatal: !0
                        },
                        locale: "en",
                        fullScreen: !1,
                        menuPosition: !1,
                        confirm: {
                            save: !0,
                            load: !0,
                            qsave: !1,
                            qload: !1,
                            overwrite: !0,
                            delete: !0,
                            restart: !0,
                            exitPlayback: !0,
                            exit: !0
                        },
                        toast: {
                            save: !1,
                            load: !1,
                            qsave: !0,
                            qload: !0
                        }
                    },
                    defaultPixiFontStyle: {
                        align: "left",
                        fill: "white",
                        dropShadow: !0,
                        dropShadowColor: "black",
                        dropShadowDistance: 1,
                        fontSize: 12
                    },
                    defaultFontStyle: {
                        align: "left",
                        fill: "white",
                        dropShadow: !0,
                        dropShadowColor: "black",
                        dropShadowDistance: 1,
                        fontSize: 12
                    },
                    confing: {},
                    isPause: !0,
                    isReady: !1,
                    isMobile: eTOYutil.fnIsMobileOrTablet(),
                    aspectRatio: .75,
                    elements: {
                        baseElement: null,
                        viewport: null,
                        dialogBox: null,
                        face: null,
                        name: null,
                        dialog: null,
                        menuBtn: null,
                        menuBar: null,
                        canvas: null,
                        interface: null,
                        panel: null,
                        message: null,
                        saveBtn: null,
                        loadBtn: null,
                        qsaveBtn: null,
                        qloadBtn: null,
                        debug: null,
                        alert: null
                    },
                    animationFrameId: null,
                    app: null,
                    defaultDB: this.DB_LOCAL,
                    dataProvider: null,
                    _clearCurrent: function() {
                        this.history = [], this.runtime.tick = 0, this.runtime.fpsTick = 0, this.runtime.autoTick = 0, this.runtime.frameCount = 0, this.runtime.savedWaitStart = 0, this.runtime.sceneDelay = 0, this.runtime.doUntil = -1, this.runtime.isMacro = !1, this.runtime.isFastSkip = !1, this.setViewMode(!1), this.runtime.isPlayBack = !1, this.setAutoPlay(!1), this.resetWait(), this.current.x = 0, this.current.y = 0, this.current.saveable = !0, this.current.loadable = !0, this.current.restartLabel = null, this.current.restartScriptID = this.SCRIPT_END, this.current.isRestartable = !0, this.current.progressScene = null, this.resetFontStyle(), this.current.doHistory = !0, this.current.showHistory = !0, this.current.dialog = null, this.current.dialogWide = !1, this.hideInterface(), this._hideDialog(), this.clearDialog(), this.current.selectText = "", this.current.selectOptions = [], this.current.select = 0, this.current.isIf = 0, this.current.ifResult = [], this.current.ifPrevious = !0, this.current.ifCurrent = !0, this._clearVideo(), this.current.isBundle = !1, this.current.isSkipable = !0, this.current.callStack = [], this.current.doMacro = 0, this.current.showFace = !1, this.current.cropFace = !0, this.current.faceScale = this.DEFAULT_FACE_SCALE, this.logDebug("_clearCurrent Finished.")
                    },
                    _init: function() {
                        if (void 0 === this.elements.viewport || null === this.elements.viewport) return this.logError("Cant't find a viewport...Abort"), !1;
                        if (this.app = new PIXI.Application({
                                width: this.product.width,
                                height: this.product.height,
                                autoStart: !1
                            }), null === this.app && (this.logWarn("Failed to initialize at first try...Try again for Canvas"), this.app = new PIXI.Application({
                                width: this.product.width,
                                height: this.product.height,
                                view: this.elements.canvas,
                                forceCanvas: !0,
                                autoStart: !1
                            })), !1 === this._initCanvas()) return !1;
                        this.elements.dialogBox.style.width = this.elements.viewport.style.width, this.elements.dialogBox.style.margin = "auto", this.elements.interface = document.createElement("div"), this.elements.interface.classList.add("wv-interface"), this.elements.interface.style.width = "100%", this.elements.interface.style.height = "100%", this.elements.interface.style.position = "absolute", this.elements.interface.style.top = "0", this.elements.interface.style.left = "0", this.elements.interface.style.display = "none", this.elements.interface.addEventListener("click", Vinos._onClickCanvas), this.elements.interface.addEventListener("auxclick", Vinos._onClickCanvas), this.elements.interface.addEventListener("contextmenu", Vinos._onRightClickCanvas);
                        var e = document.createElement("div");
                        e.style.display = "table", e.style.width = "100%", e.style.height = "100%", this.elements.interface.appendChild(e);
                        var t = document.createElement("div");
                        return t.style.display = "table-cell", t.style.verticalAlign = "middle", t.style.textAlign = "center", e.appendChild(t), this.elements.panel = document.createElement("div"), this.elements.panel.classList.add("wv-panel"), this.elements.panel.style.position = "relative", this.elements.panel.style.display = "inline-block", t.appendChild(this.elements.panel), this.elements.viewport.appendChild(this.elements.interface), this._checkProductLocale(), this._clearCurrent(), this.setDialog(), this.defines = [], this.macros = [], this.current.stack = [], this.current.config = {}, this.app.stage = new PIXI.display.Stage, this.app.stage.group.enableSort = !0, this._initLayout(), this.dataProvider.isAsync ? this.loadProductConfig().then(function() {
                            Vinos.logDebug("_init Finished.")
                        }) : (this.loadProductConfig(), this.logDebug("_init Finished.")), !0
                    },
                    _reload: function(e, t) {
                        switch (t = t.toLowerCase(), e) {
                            case 1:
                            case "1":
                                var i = this._findScript(t, !1);
                                if (this.logDebug("_reload:Script:File=" + t + ", scriptID=" + i), i !== this.SCRIPT_END) {
                                    var n = function(e) {
                                        e === Vinos.current.scriptID && (Vinos.logDebug("_reload:onLoad:File=" + t + ", scriptID=" + e), Vinos._changeScript(e))
                                    };
                                    $.ajax({
                                        url: Vinos._getScriptURL(t, (new Date).getTime()),
                                        success: function(e) {
                                            e && (Vinos.logDebug("_reload:ajax:File=" + t + ", scriptID=" + i), Vinos._parseScript(i, e), n(i))
                                        },
                                        error: function(e, t, i) {
                                            Vinos.logError("_reload failed:" + i)
                                        }
                                    })
                                }
                                break;
                            case 2:
                            case "2":
                                this.loadSkin(t)
                        }
                        this.logDebug("_reload:File=" + t + ", Type=" + e)
                    },
                    _calcLayoutContainerPosition: function(e) {
                        var t = 0,
                            i = 0;
                        switch (e.baseX) {
                            case "right":
                                t = this.elements.canvas.width;
                                break;
                            case "center":
                                t = this.elements.canvas.width / 2
                        }
                        switch (e.baseY) {
                            case "bottom":
                                i = this.elements.canvas.height;
                                break;
                            case "center":
                                i = this.elements.canvas.height / 2
                        }
                        var n = this._getContainerDx(e),
                            r = this._getContainerDy(e);
                        return e.container.x = t + n, e.container.y = i + r, e.container.dx = n, e.container.dy = r, {
                            x: t + n,
                            y: i + r
                        }
                    },
                    _getUnitValue: function(e, t) {
                        if (void 0 === e) return 0;
                        var i = eTOYutil.fnParseInt(e),
                            n = null;
                        "string" == typeof e && null !== (n = e.match(/[^0-9|-]/)) && 0 < n.length && (n = n[0]);
                        var r = 0;
                        switch (n) {
                            case "%":
                                r = !0 === t ? this.elements.canvas.width * i / 100 : this.elements.canvas.height * i / 100;
                                break;
                            case "p":
                                r = !0 === t ? void 0 !== this.product.origWidth ? this.elements.canvas.width * i / this.product.origWidth : i : void 0 !== this.product.origHeight ? this.elements.canvas.height * i / this.product.origHeight : i;
                                break;
                            default:
                                r = i
                        }
                        return r
                    },
                    _getContainerDx: function(e) {
                        return this._getUnitValue(e.dx, !0)
                    },
                    _getContainerDy: function(e) {
                        return this._getUnitValue(e.dy, !1)
                    },
                    _initCanvas: function() {
                        return this.elements.canvas = this.app.view, this.elements.canvas.id = this.DEFAULT_VIEWER_ID, this.elements.canvas.style.width = "100%", this.elements.viewport.appendChild(this.elements.canvas), this.resize(), !0
                    },
                    _onClickCanvas: null,
                    _onRightClickCanvas: null,
                    jump: function(e, t) {
                        var i = this._findScript(t, !0),
                            n = {
                                type: "command",
                                renderOp: {
                                    type: "jump",
                                    label: e,
                                    file: t,
                                    scriptID: i,
                                    duration: this.DEFAULT_LOADTIMEOUT
                                }
                            };
                        this._pushQueue(n)
                    },
                    _jump: function(e, t) {
                        var i = {
                            scriptID: this.SCRIPT_END,
                            lineNo: 0
                        };
                        return "number" == typeof e ? (i.scriptID = null === t || void 0 === t ? this.current.scriptID : this._findScript(t, !0), i.lineNo = e) : i = this._findScene(e, t), this.SCRIPT_END !== i.scriptID && (0 > i.lineNo && (i.lineNo = 0), this.current.isIf = 0, this.current.ifResult = [], this.current.ifPrevious = !0, this.current.ifCurrent = !0, this.SCRIPT_END !== i.scriptID && this._changeScript(i.scriptID), this.current.lineNo = i.lineNo, this.logInfo("jump:label=" + e + (null === t || void 0 === t ? "" : ", File=" + t)), !0)
                    },
                    jumpTo: function(e) {
                        return "number" == typeof e && (!(0 > e || this.runtime.scripts.length <= e) && (this.current.isIf = 0, this.current.ifResult = [], this.current.ifPrevious = !0, this.current.ifCurrent = !0, this.current.lineNo = e, !0))
                    },
                    call: function(e, t) {
                        var i = this._findScript(t, !0),
                            n = {
                                type: "command",
                                renderOp: {
                                    type: "call",
                                    label: e,
                                    file: t,
                                    scriptID: i,
                                    duration: this.DEFAULT_LOADTIMEOUT
                                }
                            };
                        this._pushQueue(n)
                    },
                    _call: function(e, t) {
                        var i = this._findScene(e, t);
                        return this.SCRIPT_END !== i.scriptID && (0 > i.lineNo && (i.lineNo = 0), this.logInfo("call:label=" + e + (null === t || void 0 === t ? "" : ", File=" + t)), this._pushCallStack(this.current.scriptID, this.current.lineNo), this.SCRIPT_END !== i.scriptID && this._changeScript(i.scriptID), this.current.lineNo = i.lineNo, this.trigger("call", this.current.callStack), !0)
                    },
                    _pushCallStack: function(e, t) {
                        var i = {
                            scriptID: e,
                            returnTo: t
                        };
                        this.current.callStack.push(i), this.logDebug("_pushCallStack:scriptID=" + e + ", returnTo=" + t + ", Depth=" + this.current.callStack.length)
                    },
                    _popCallStack: function() {
                        if (0 === this.current.callStack.length) return void this.logError("Invalid return found...(" + this.current.lineNo + ")");
                        var e = this.current.callStack.pop();
                        this.current.lineNo = e.returnTo, this.logDebug("_popCallStack:current=" + this.current.scriptID + ", scriptID=" + e.scriptID + ", returnTo=" + e.returnTo + ", Depth=" + this.current.callStack.length), this.current.scriptID !== e.scriptID && this._changeScript(e.scriptID)
                    },
                    _stackTrace: function() {
                        this.logInfo("_stackTrace:Call Stack Count=" + this.current.callStack.length);
                        for (var e = this.current.callStack.length - 1; e >= 0; --e) {
                            var t = this.current.callStack[e];
                            eTOYutil.fnDebug(t)
                        }
                    },
                    _changeScript: function(e, t) {
                        var i = !0;
                        switch (void 0 !== t && (i = t), this.current.scriptID = e, this.current.scriptName = this._getScriptName(e), e) {
                            case this.SCRIPT_INTRO:
                                this.runtime.scripts = this.intro;
                                break;
                            case this.SCRIPT_OUTRO:
                                this.runtime.scripts = this.outro;
                                break;
                            case this.SCRIPT_MACRO:
                                this.runtime.scripts = this.macro;
                                break;
                            case this.SCRIPT_GAME:
                                this.runtime.scripts = this.game;
                                break;
                            case this.SCRIPT_END:
                                this.runtime.scripts = null, !0 === i ? (this.logDebug("_changeScript:" + this.SCRIPT_END), this.end()) : this.logError("Invalid ScriptID:" + this.SCRIPT_END);
                                break;
                            default:
                                this.SCRIPT_MACRO_ARRAY <= e ? this.runtime.scripts = this.macros[e - this.SCRIPT_MACRO_ARRAY].lines : !0 === this._isScriptLoaded(e) && (this.runtime.scripts = this.scripts[e].lines)
                        }
                    },
                    _getScriptName: function(e) {
                        switch (e) {
                            case this.SCRIPT_INTRO:
                                return this.product.intro;
                            case this.SCRIPT_OUTRO:
                                return this.product.outro;
                            case this.SCRIPT_MACRO:
                                return this.product.macro;
                            case this.SCRIPT_GAME:
                                return this.product.script;
                            case this.SCRIPT_END:
                                return "";
                            default:
                                if (this.SCRIPT_MACRO_ARRAY <= e) return this.macros[e - this.SCRIPT_MACRO_ARRAY].name;
                                if (!0 === this._isScriptLoaded(e)) return this.scripts[e].name
                        }
                        return ""
                    },
                    _pushScript: function(e) {
                        var t = {
                            scriptID: this.current.scriptID,
                            lineNo: this.current.lineNo
                        };
                        this.current.stack.push(t), this.current.lineNo = 0, this._changeScript(e)
                    },
                    _popScript: function() {
                        var e = this.current.stack.pop();
                        this.current.scriptID = e.scriptID, this.current.lineNo = e.lineNo, this._changeScript(e.scriptID)
                    },
                    _isScriptLoaded: function(e) {
                        return this.SCRIPT_GAME === e || this.SCRIPT_INTRO === e || this.SCRIPT_OUTRO === e || this.SCRIPT_MACRO === e || void 0 !== this.scripts[e] && null !== this.scripts[e] && this.scripts[e].loaded
                    },
                    _loadScript: null,
                    _parseScript: null,
                    _findScript: function(e, t) {
                        if (t = void 0 !== t && t, void 0 === e || null === e || "" === e) return this.current.scriptID;
                        if (e === this.product.script || e === this.product.original) return this.SCRIPT_GAME;
                        if (!0 === this.product.labelHasStorage) return this.SCRIPT_GAME;
                        if (void 0 !== this.product.included)
                            for (var i = 0; i < this.product.included.length; ++i)
                                if (this.product.included[i] === e) return this.SCRIPT_GAME;
                        for (i = 0; i < this.scripts.length; ++i) {
                            if (this.scripts[i].name === e) return i
                        }
                        return !0 === t ? this._loadScript(e) : this.SCRIPT_END
                    },
                    _initScripts: function(e) {
                        e = void 0 === e || e, this.logDebug("Intro:" + this.intro.length + ", Outro:" + this.outro.length + ", Macro:" + this.macro.length + ", Script:" + this.game.length), this.current.lineNo = 0, this.current.scriptID = this.SCRIPT_END, 0 < this.outro.length && this._pushScript(this.SCRIPT_OUTRO), 0 < this.game.length && this._pushScript(this.SCRIPT_GAME), 0 < this.macro.length && this._pushScript(this.SCRIPT_MACRO), 0 < this.intro.length && !0 === e && this._pushScript(this.SCRIPT_INTRO);
                        var t = this.getSceneLine(this.startScene, !0);
                        if (t < 0 && (t = 0), 0 < t) {
                            for (var i = !1, n = 0; n < this.current.stack.length; ++n) {
                                var r = this.current.stack[n];
                                if (this.SCRIPT_GAME === r.scriptID) {
                                    this.logInfo("startScene=" + this.startScene + ", Line=" + t), r.lineNo = t, i = !0;
                                    break
                                }
                            }!1 === i && (this.logInfo("startScene=" + this.startScene + ", Line=" + t), this.current.lineNo = t)
                        }
                        this.logDebug("_initScripts:lineNo=" + this.current.lineNo + ", scriptId=" + this.current.scriptID)
                    },
                    _parseProduct: null,
                    _initProduct: function(e, t, i) {
                        var n = new XMLHttpRequest;
                        return n.onreadystatechange = function() {
                            if (n.readyState === XMLHttpRequest.DONE) {
                                if (Vinos._parseProduct(n.responseText), !1 === Vinos._init()) return this.logError("_initProduct:Fail to _init()"), !1;
                                var e = function() {
                                        return new Promise(function(e, t) {
                                            if (void 0 !== Vinos.product.intro && 0 < Vinos.product.intro.length) {
                                                var i = new XMLHttpRequest;
                                                i.onload = function() {
                                                    i.readyState === XMLHttpRequest.DONE ? (Vinos.logInfo("Intro=" + Vinos.product.intro), Vinos._parseScript(Vinos.SCRIPT_INTRO, i.responseText), e(!0)) : t(Error("Unabled to read Intro script. Status=" + i.readyState))
                                                }, i.onerror = function() {
                                                    t(Error("Unabled to read Intro script. Status=" + i.readyState))
                                                }, i.open("GET", Vinos._getScriptURL(Vinos.product.intro), !0), i.send()
                                            } else e(!0)
                                        })
                                    },
                                    i = function() {
                                        return new Promise(function(e, t) {
                                            if (void 0 !== Vinos.product.outro && 0 < Vinos.product.outro.length) {
                                                var i = new XMLHttpRequest;
                                                i.onload = function() {
                                                    i.readyState === XMLHttpRequest.DONE ? (Vinos.logInfo("Outro=" + Vinos.product.outro), Vinos._parseScript(Vinos.SCRIPT_OUTRO, i.responseText), e(!0)) : t(Error("Unabled to read Outro script. Status=" + i.readyState))
                                                }, i.onerror = function() {
                                                    t(Error("Unabled to read Outro script. Status=" + i.readyState))
                                                }, i.open("GET", Vinos._getScriptURL(Vinos.product.outro), !0), i.send()
                                            } else e(!0)
                                        })
                                    },
                                    r = function() {
                                        return new Promise(function(e, t) {
                                            if (void 0 !== Vinos.product.macro && 0 < Vinos.product.macro.length) {
                                                var i = new XMLHttpRequest;
                                                i.onload = function() {
                                                    i.readyState === XMLHttpRequest.DONE ? (Vinos.logInfo("Macro=" + Vinos.product.macro), Vinos._parseScript(Vinos.SCRIPT_MACRO, i.responseText), e(!0)) : t(Error("Unabled to read Macro script. Status=" + i.readyState))
                                                }, i.onerror = function() {
                                                    t(Error("Unabled to read Macro script. Status=" + i.readyState))
                                                }, i.open("GET", Vinos._getScriptURL(Vinos.product.macro), !0), i.send()
                                            } else e(!0)
                                        })
                                    },
                                    a = function() {
                                        return new Promise(function(e, t) {
                                            if (void 0 !== Vinos.product.script && 0 < Vinos.product.script.length) {
                                                var i = new XMLHttpRequest;
                                                i.onload = function() {
                                                    i.readyState === XMLHttpRequest.DONE ? (Vinos.logInfo("Script=" + Vinos.product.script), Vinos._parseScript(Vinos.SCRIPT_GAME, i.responseText), e(!0)) : t(Error("Unabled to read Game script. Status=" + i.readyState))
                                                }, i.onerror = function() {
                                                    t(Error("Unabled to read Game script. Status=" + i.readyState))
                                                }, i.open("GET", Vinos._getScriptURL(Vinos.product.script), !0), i.send()
                                            } else t(Error("Undefined Script File. Product=" + Vinos.product.id))
                                        })
                                    };
                                (function() {
                                    return new Promise(function(e, t) {
                                        for (var i = [{
                                                type: "KIRIKIRI/KAG",
                                                js: "vinos-plugin-kag3"
                                            }, {
                                                type: "Vinos",
                                                js: "vinos-plugin-vinos"
                                            }], n = 0, r = 0, a = function() {
                                                r++, n === r && (Vinos.logDebug("Plugin:Loading Complete, loading=" + n + ", loaded=" + r), e(!0))
                                            }, s = function() {
                                                t(Error("Unabled to load plugins."))
                                            }, o = 0; o < i.length; ++o)
                                            if ("*" === i[o].type || Vinos.product.type === i[o].type) {
                                                n++;
                                                var l = Vinos.DEFAULT_PLUGIN_URL + i[o].js + ".js?v=" + Vinos.getVersion(!0);
                                                $.ajax({
                                                    url: l,
                                                    dataType: "script",
                                                    success: a,
                                                    error: s,
                                                    async: !0
                                                })
                                            } 0 === n && (Vinos.logDebug("Plugin:No plugin needed."), e(!0))
                                    })
                                })().then(function(n) {
                                    Vinos.logDebug("Loading Plugins:" + n), Promise.all([e(), i(), r(), a()]).then(function(e) {
                                        Vinos.logDebug("Loading Scripts:" + e), Vinos._initScripts();
                                        var i = function(e) {
                                            !1 === e && (void 0 !== Vinos.product.maxGalleryCG && 0 < Vinos.product.maxGalleryCG ? Vinos.progress.cg = new Array(Vinos.product.maxGalleryCG) : (Vinos.product.maxGalleryCG = 0, Vinos.progress.cg = []), void 0 !== Vinos.product.maxGalleryScene && 0 < Vinos.product.maxGalleryScene ? Vinos.progress.scene = new Array(Vinos.product.maxGalleryScene) : (Vinos.product.maxGalleryScene = 0, Vinos.progress.scene = []), void 0 !== Vinos.product.maxGalleryAnim && 0 < Vinos.product.maxGalleryAnim ? Vinos.progress.anime = new Array(Vinos.product.maxGalleryAnim) : (Vinos.product.maxGalleryAnim = 0, Vinos.progress.anime = []), Vinos.progress.variables = []), Vinos.isReady = !0, "function" == typeof t && (Vinos.logDebug("_initProduct:call onReady"), t()), !0 === Vinos.config.autoStart && (Vinos.logDebug("_initProduct:start Play"), Vinos.start(), Vinos.next())
                                        };
                                        Vinos.dataProvider.isAsync ? Vinos._loadProgress().then(i, function(e) {
                                            Vinos.logError("_initProduct:Unabled to read progress")
                                        }) : i(Vinos._loadProgress())
                                    }, function(e) {
                                        Vinos.logError(e)
                                    })
                                }, function(e) {
                                    Vinos.logError(e)
                                })
                            }
                        }, i ? n.open("GET", i, !0) : n.open("GET", e + "info.json?_=" + (new Date).getTime(), !0), n.setRequestHeader("Cache-Control", "no-cache"), n.send(), !0
                    },
                    beginBundle: function() {
                        this.current.isBundle = !0
                    },
                    endBundle: function() {
                        0 < this.bundleQueue.length && (this.renderQueue.push(this.bundleQueue), this.WAIT_NONE === this.wait() && this.wait(this.WAIT_RENDER)), this.bundleQueue = [], this.current.isBundle = !1
                    },
                    _pushQueue: function(e) {
                        if (!0 === this.current.isBundle) {
                            if (!0 === Array.isArray(e))
                                for (var t = 0; t < e.length; ++t) e[t].isBundle = !0;
                            else e.isBundle = !0;
                            this.bundleQueue.push(e)
                        } else this.renderQueue.push(e), this.WAIT_NONE === this.wait() && this.wait(this.WAIT_RENDER)
                    },
                    resize: null,
                    init: function(e, t, i, n, r) {
                        var a = function() {
                            Vinos.setContent(e, {
                                startScene: t,
                                onReady: r,
                                jsonSrc: n.jsonSrc
                            })
                        };
                        return this.initialize(i, n, a)
                    },
                    initialize: function(e, t, i) {
                        if (this.clear(), "string" == typeof e && (e = document.getElementById(e)), null === e) return eTOYutil.fnLogError("Cannot find a base element...abort..."), !1;
                        if (this.elements.baseElement = e, this.elements.viewport = eTOYutil.fnFindFirstChildByClass(e, "wv-viewport"), null === this.elements.viewport) return eTOYutil.fnLogError("Cannot find a viewport with 'wv-viewport' class...abort..."), !1;
                        if (this.elements.dialogBox = eTOYutil.fnFindFirstChildByClass(e, "wv-dialog-box"), null === this.elements.dialogBox) return eTOYutil.fnLogError("Cannot find a dialog box with 'wv-dialog-box' class...abort..."), !1;
                        if (this.elements.face = eTOYutil.fnFindFirstChildByClass(e, "wv-face"), null === this.elements.face) return eTOYutil.fnLogError("Cannot find a face with 'wv-face' class...abort..."), !1;
                        if (this.elements.name = eTOYutil.fnFindFirstChildByClass(e, "wv-dialog-name"), null === this.elements.name) return eTOYutil.fnLogError("Cannot find a name with 'wv-dialog-name' class...abort..."), !1;
                        if (this.elements.dialog = eTOYutil.fnFindFirstChildByClass(e, "wv-dialog"), null === this.elements.dialog) return eTOYutil.fnLogError("Cannot find a dialog with 'wv-dialog' class...abort..."), !1;
                        if (this.elements.dialogText = eTOYutil.fnFindFirstChildByClass(e, "wv-dialog-text"), null === this.elements.dialogText) return eTOYutil.fnLogError("Cannot find a dialog with 'wv-dialog-text' class...abort..."), !1;
                        if (this.elements.menuBtn = eTOYutil.fnFindFirstChildByClass(e, "wv-menu-btn"), null === this.elements.menuBtn) return eTOYutil.fnLogError("Cannot find a menuBtn with 'wv-menu-btn' class...abort..."), !1;
                        if (this.elements.menuBar = eTOYutil.fnFindFirstChildByClass(e, "wv-menu-bar"), null === this.elements.menuBar) return eTOYutil.fnLogError("Cannot find a menuBar with 'wv-menu-bar' class...abort..."), !1;
                        if (this.elements.debug = eTOYutil.fnFindFirstChildByClass(document.body, "wv-debug"), null !== this.elements.debug) {
                            var n = eTOYutil.fnFindFirstChildByClass(this.elements.debug, "wv-debug-log");
                            null !== n && eTOYutil.fnSetDebugWin(n)
                        }
                        if (this.elements.alert = eTOYutil.fnFindFirstChildByClass(document.body, "wv-alert"), this.elements.saveBtn = eTOYutil.fnFindFirstChildByClass(this.elements.menuBar, "wv-save"), this.elements.loadBtn = eTOYutil.fnFindFirstChildByClass(this.elements.menuBar, "wv-load"), this.elements.qsaveBtn = eTOYutil.fnFindFirstChildByClass(this.elements.menuBar, "wv-qsave"), this.elements.qloadBtn = eTOYutil.fnFindFirstChildByClass(this.elements.menuBar, "wv-qload"), "object" == typeof t.callbacks)
                            for (var r = 0; r < t.callbacks.length; ++r) {
                                var a = t.callbacks[r];
                                this.on(a.on, a.callback)
                            }
                        void 0 !== t.db && (this.defaultDB = t.db), this.initDB(t), this.config = $.extend(!0, {}, this.defaultConfig);
                        var s = function() {
                            Vinos.config.playSpeed = void 0 !== t.playSpeed ? t.playSpeed : Vinos.config.playSpeed, Vinos.config.useMenu = void 0 !== t.useMenu ? t.useMenu : Vinos.config.useMenu, Vinos.config.useQuickMenu = void 0 !== t.useQuickMenu ? t.useMenu : Vinos.config.useQuickMenu, Vinos.config.useProductSkin = void 0 !== t.useProductSkin ? t.useProductSkin : Vinos.config.useProductSkin, Vinos.config.waitVoice = void 0 !== t.waitVoice ? t.waitVoice : Vinos.config.waitVoice, Vinos.config.keepVoice = void 0 !== t.keepVoice ? t.keepVoice : Vinos.config.keepVoice, Vinos.config.muteBGM = void 0 !== t.muteBGM ? t.muteBGM : Vinos.config.muteBGM, Vinos.config.dialogOpaque = void 0 !== t.dialogOpaque ? t.dialogOpaque : Vinos.config.dialogOpaque, Vinos.config.dialogShadow = void 0 !== t.dialogShadow ? t.dialogShadow : Vinos.config.dialogShadow, Vinos.config.dialogOutline = void 0 !== t.dialogOutline ? t.dialogOutline : Vinos.config.dialogOutline, Vinos.config.useEffect = void 0 !== t.useEffect ? t.useEffect : Vinos.config.useEffect, Vinos.config.useAnim = void 0 !== t.useAnim ? t.useAnim : Vinos.config.useAnim, Vinos.config.typeSpeed = void 0 !== t.typeSpeed ? t.typeSpeed : Vinos.config.typeSpeed, Vinos.config.typeDelay = void 0 !== t.typeDelay ? t.typeDelay : Vinos.config.typeDelay, Vinos.config.autoSpeed = void 0 !== t.autoSpeed ? t.autoSpeed : Vinos.config.autoSpeed, Vinos.config.autoDelay = void 0 !== t.autoDelay ? t.autoDelay : Vinos.config.autoDelay, Vinos.config.isDebug = void 0 !== t.debug ? t.debug : Vinos.config.isDebug, Vinos.config.logLevel = void 0 !== t.logLevel ? t.logLevel : Vinos.config.logLevel, Vinos.config.autoStart = void 0 !== t.autoStart ? t.autoStart : Vinos.config.autoStart, Vinos.config.preload = void 0 !== t.preload ? t.preload : Vinos.config.preload, Vinos.config.locale = void 0 !== t.locale ? t.locale : t.defaultLocale || Vinos.config.locale, Vinos.config.fullScreen = void 0 !== t.fullScreen ? t.fullScreen : Vinos.config.fullScreen, Vinos.config.menuPosition = void 0 !== t.menuPosition ? t.menuPosition : Vinos.config.menuPosition, Vinos.config.confirm = void 0 !== t.confirm ? t.confirm : Vinos.config.confirm, Vinos.config.toast = void 0 !== t.toast ? t.toast : Vinos.config.toast, Vinos.setConfig(Vinos.config), Vinos.logDebug("Vinos Initialized"), "function" == typeof i && i()
                        };
                        return this.dataProvider.isAsync ? this.loadConfig().then(s, function(e) {
                            Vinos.logError("Vinos Initialized Failed")
                        }) : (this.loadConfig(), s()), !0
                    },
                    setContent: function(e, t) {
                        if (void 0 === e) return this.logError("setContent:Undefined URL"), !1;
                        var i = eTOYutil.fnExtend({
                            startScene: -1,
                            onReady: void 0,
                            jsonSrc: void 0
                        }, t);
                        return 0 <= i.startScene && (this.startScene = i.startScene), this.contentURL = e, !1 !== this._initProduct(this.contentURL, i.onReady, i.jsonSrc) && (this.logDebug("setContent:URL=" + this.contentURL), !0)
                    },
                    start: function(e, t) {
                        !0 === this.isReady && (this._clearCurrent(), this._clearLayouts(), this.isPause = !1, this.resetWait(), this.runtime.tick = 0, this.runtime.fpsTick = 0, this.runtime.autoTick = 0, this.runtime.frameCount = 0, this.runtime.isMacro = !1, this.runtime.isFastSkip = !1, this.runtime.viewMode = !1, this.loop(), void 0 === e && void 0 === t || (this.jump(e, t), this.next()))
                    },
                    startPlayBack: function(e, t) {
                        !0 === this.isReady && (this._clearCurrent(), this._clearLayouts(), this._initLayout(), this.isPause = !1, this.resetWait(), this.runtime.tick = 0, this.runtime.fpsTick = 0, this.runtime.autoTick = 0, this.runtime.frameCount = 0, this.runtime.isMacro = !1, this.runtime.isFastSkip = !1, this.runtime.viewMode = !1, this.setIsPlayBack(!0), this._showDialog(), this.loop(), this.jump(e, t), this.next(), this.trigger("startPlayBack"))
                    },
                    stopPlayBack: function() {
                        this.setAutoPlay(!1), this.setIsPlayBack(!1), this.trigger("stopPlayBack")
                    },
                    stop: function() {
                        !0 === this.isReady && (this._stopSound(this.DEFAULT_LAYERUSAGE_BGM), this._stopSound(this.DEFAULT_LAYERUSAGE_SE), this._stopSound(this.DEFAULT_LAYERUSAGE_VO), this.render(!0), this.setAutoPlay(!1), this.isPause = !0, this.runtime.tick = 0, this.runtime.fpsTick = 0, this.runtime.autoTick = 0, this.runtime.frameCount = 0, this.runtime.isMacro = !1, this.runtime.isFastSkip = !1, this.runtime.viewMode = !1)
                    },
                    restart: function(e) {
                        if (!1 !== this.current.isRestartable && (e = void 0 === e || e, !0 === this.isReady)) {
                            this.stop();
                            var t = 0;
                            if (e) {
                                var i = this.current.restartScriptID,
                                    n = this.current.restartLabel;
                                null !== n && this.SCRIPT_END !== i ? this.current.scriptID === i ? t = this.getSceneLine(n) : 0 <= i ? t = this._findSceneAt(n, this.scripts[i].lines) : (this._changeScript(i), t = this.getSceneLine(n)) : t = this.getSceneLine(this.startScene, !0), this.logInfo("restart:Label=" + n + ", ScriptID=" + i + ", LineNo=" + t)
                            }
                            this._clearCurrent(), this._clearLayouts(), -1 !== t && (this.current.lineNo = t), this.isPause = !1, this.resetWait(), this.runtime.tick = 0, this.runtime.fpsTick = 0, this.runtime.autoTick = 0, this.runtime.frameCount = 0, this.runtime.isMacro = !1, this.runtime.isFastSkip = !1, this.runtime.viewMode = !1, this.loop(), this.next()
                        }
                    },
                    pause: function(e) {
                        if (e = e || this.REQUESTBY_USER, !0 === this.isReady && (this.isPause = !0, this.logInfo("pause:By=" + e), e === this.REQUESTBY_SYSTEM)) {
                            this.runtime.paused = [];
                            for (var t = 0; t < this.containers.length; ++t) {
                                var i = this.containers[t];
                                if (this.DEFAULT_LAYERUSAGE_BGM === i.usage || this.DEFAULT_LAYERUSAGE_SE === i.usage || this.DEFAULT_LAYERUSAGE_VO === i.usage || this.DEFAULT_LAYERUSAGE_VD === i.usage)
                                    for (var n = 0; n < i.max; ++n)
                                        if (this.DEFAULT_LAYERUSAGE_VD === i.usage) {
                                            var r = this._getVideo(n);
                                            r && !0 !== r.paused && (r.user.requestBy = this.REQUESTBY_SYSTEM, r.pause(), this.runtime.paused.push({
                                                type: i.usage,
                                                media: r
                                            }))
                                        } else {
                                            var a = this._getAudio(i.usage, n);
                                            a && !0 !== a.paused && (a.user.requestBy = this.REQUESTBY_SYSTEM, a.pause(), this.runtime.paused.push({
                                                type: i.usage,
                                                media: a
                                            }))
                                        }
                            }
                            this._pauseSound(this.DEFAULT_LAYERUSAGE_BGM)
                        }
                    },
                    resume: function(e) {
                        if (e = e || this.REQUESTBY_USER, !0 === this.isReady && (this.isPause = !1, this.logInfo("resume:By=" + e), e === this.REQUESTBY_SYSTEM)) {
                            this.runtime.paused = this.runtime.paused || [];
                            for (var t = 0; t < this.runtime.paused.length; ++t) {
                                var i = this.runtime.paused[t];
                                i && i.media && !0 === i.media.paused && i.media.play()
                            }
                            this.runtime.paused = []
                        }
                    },
                    playIntro: function(e) {
                        !0 === this.isReady && (this._clearCurrent(), this._clearLayouts(), this.current.scriptID = this.SCRIPT_END, "function" == typeof e && this.once("done", function() {
                            Vinos.isReady = !0, Vinos.isPause = !1, Vinos.resetWait(), Vinos.runtime.tick = 0, Vinos.runtime.fpsTick = 0, Vinos.runtime.autoTick = 0, Vinos.runtime.frameCount = 0, Vinos.runtime.isMacro = !1, Vinos.runtime.isFastSkip = !1, Vinos.runtime.viewMode = !1, e()
                        }), 0 < this.macro.length && this._pushScript(this.SCRIPT_MACRO), this._pushScript(this.SCRIPT_INTRO), this.loop())
                    },
                    _processClick: function() {
                        return !0 !== this.current.dialogIng && ((this.WAIT_CLICK_CM === this.wait() || this.WAIT_CLICK === this.wait()) && (this.WAIT_CLICK_CM === this.wait() && this.clearDialog(), this.resetWait(), !0))
                    },
                    click: function() {
                        !0 !== this.runtime.viewMode && (this._processClick(), this.trigger("click"), this.next(!0))
                    },
                    middleClick: function() {
                        this.trigger("click_middle")
                    },
                    rightClick: function() {
                        this.trigger("click_right")
                    },
                    next: function(e) {
                        var t = void 0 !== e && e;
                        if (!1 !== this.isReady && !0 !== this.isPause && this.WAIT_INPUT !== this.wait()) {
                            var i = !0;
                            !0 === t && (i = this._completeScene()), !0 === i && (this.WAIT_RENDER === this.wait() && this.resetWait(), this.processScene())
                        }
                    },
                    prev: function() {
                        if (!1 !== this.isReady && !0 !== this.isPause) {
                            var e = this._findPrevScene(); - 1 !== e && (this.logInfo("prev:line=" + e), this.current.isIf = 0, this.current.ifResult = [], this.current.ifPrevious = !0, this.current.ifCurrent = !0, this.current.lineNo = e, this.next())
                        }
                    },
                    skip: function() {
                        if (!0 !== this.runtime.viewMode) {
                            var e = this.runtime.isFastSkip;
                            this.runtime.isFastSkip = !0, this.WAIT_CLICK_CM !== this.wait() && this.WAIT_CLICK !== this.wait() || this._processClick(), this.next(!0), this.runtime.isFastSkip = e
                        }
                    },
                    end: function() {
                        this.logInfo("End of Game. Title=" + this.product.title), this.trigger("end"), this.isReady = !1, this.stop(), this.clearDialog(), this._clearLayouts(), this.trigger("done"), this.app.render()
                    },
                    setRestartPoint: function(e, t) {
                        e = e || this.current.name, t = t || this.current.scriptID, this.current.restartLabel = e, this.current.restartScriptID = t
                    },
                    isRestartable: function(e) {
                        return "boolean" == typeof e && (!0 === e ? this.enableRestart() : this.disableRestart()), this.current.isRestartable
                    },
                    enableRestart: function() {
                        this.current.isRestartable = !0
                    },
                    disableRestart: function() {
                        this.current.restartLabel = null, this.current.restartScriptID = this.SCRIPT_END, this.current.isRestartable = !1
                    },
                    startVideoPlayback: function(e, t) {
                        this._clearCurrent(), this._clearLayouts(), this.wait(this.WAIT_CLICK), this._playVideo(e, {
                            loop: t,
                            forcePlay: !0
                        }), this.loop()
                    },
                    stopVideoPlayback: function(e) {
                        this.resetWait(), this._stopVideo(e)
                    },
                    on: function(e, t, i) {
                        if (i = void 0 !== i && i, !0 === this.hasEventHandler(e, t)) return this.logWarn("Event Handler already registered. Ignore addtional request. Event=" + e + ", Handler=" + t), -1;
                        !0 === i && this.off(e);
                        var n = (new Date).getTime();
                        return this.events.push({
                            id: n,
                            event: e,
                            handler: t,
                            once: !1
                        }), n
                    },
                    once: function(e, t) {
                        var i = (new Date).getTime();
                        return this.events.push({
                            id: i,
                            event: e,
                            handler: t,
                            once: !0
                        }), i
                    },
                    off: function(e, t) {
                        for (var i = this.events.length; i--;) {
                            var n = this.events[i];
                            if (e === n.event)
                                if (void 0 === t) this.events.splice(i, 1);
                                else {
                                    if ("number" == typeof t && t === n.id) {
                                        this.events.splice(i, 1);
                                        break
                                    }
                                    if (t === n.handler) {
                                        this.events.splice(i, 1);
                                        break
                                    }
                                }
                        }
                    },
                    trigger: function(e) {
                        var t = this.findEventHandler(e),
                            i = Array.prototype.slice.call(arguments);
                        if (i.splice(0, 1), null !== t)
                            for (var n = 0; n < t.length; ++n) "function" == typeof t[n].handler && t[n].handler.apply(null, i), !0 === t[n].once && this.off(e, t[n].id)
                    },
                    findEventHandler: function(e) {
                        for (var t = [], i = 0; i < this.events.length; ++i) e === this.events[i].event && t.push(this.events[i]);
                        return 0 < t.length ? t : null
                    },
                    hasEventHandler: function(e, t) {
                        for (var i = 0; i < this.events.length; ++i)
                            if (e === this.events[i].event) {
                                if (void 0 === t) return !0;
                                if (t === this.events[i].handler) return !0
                            } return !1
                    },
                    clearEventHandlers: function() {
                        this.events = []
                    },
                    getVersion: function(e) {
                        return e ? this.VERSION_MAJOR + "_" + this.VERSION_MINOR + "_" + this.VERSION_RELEASE : this.VERSION_MAJOR + "." + this.VERSION_MINOR + "." + this.VERSION_RELEASE
                    },
                    checkVersion: function(e, t) {
                        return this._checkVersion(e, {
                            major: this.VERSION_MAJOR,
                            minor: this.VERSION_MINOR,
                            relase: this.VERSION_RELEASE
                        }, t)
                    },
                    getContentVersion: function(e) {
                        return void 0 === this.product.minorVersion ? this.product.version : void 0 === this.product.releaseVersion ? e ? this.product.version + "_" + this.product.minorVersion : this.product.version + "." + this.product.minorVersion : e ? this.product.version + "_" + this.product.minorVersion + "_" + this.product.releaseVersion : this.product.version + "." + this.product.minorVersion + "." + this.product.releaseVersion
                    },
                    checkContentVersion: function(e, t) {
                        return this._checkVersion(e, {
                            major: this.product.version,
                            minor: this.product.minorVersion,
                            relase: this.product.releaseVersion
                        }, t)
                    },
                    _checkVersion: function(e, t, i) {
                        if (void 0 === e) return !1;
                        var n = [e, "0", "0"];
                        if (0 <= e.indexOf(".") && (n = e.split(".")), 0 <= e.indexOf("_") && (n = e.split("_")), 3 !== n.length) return !1;
                        t.major = eTOYutil.fnParseInt(t.major), t.minor = eTOYutil.fnParseInt(t.minor), t.release = eTOYutil.fnParseInt(t.release), i = i || 3;
                        var r = !0;
                        switch (i) {
                            case 3:
                                r = r && t.release <= eTOYutil.fnParseInt(n[2]);
                            case 2:
                                r = r && t.minor <= eTOYutil.fnParseInt(n[1]);
                            case 1:
                                r = r && t.major <= eTOYutil.fnParseInt(n[0])
                        }
                        return r
                    },
                    saveConfig: function() {
                        var e = JSON.stringify(this.config);
                        this.dataProvider.isAsync ? this.dataProvider.write(this.DEFAULT_CONFIG_SAVED, e).then(Vinos.NOOP_FUNC) : this.dataProvider.write(this.DEFAULT_CONFIG_SAVED, e)
                    },
                    loadConfig: function() {
                        if (this.dataProvider.isAsync) return new Promise(function(e, t) {
                            Vinos.dataProvider.read(Vinos.DEFAULT_CONFIG_SAVED).then(function(t) {
                                var i = {};
                                null !== t && void 0 !== t && (i = JSON.parse(t)), Vinos.config = $.extend(!0, {}, Vinos.config, i), e(i)
                            }, function(e) {
                                t()
                            })
                        });
                        var e = this.dataProvider.read(this.DEFAULT_CONFIG_SAVED);
                        return null !== e && (e = JSON.parse(e), this.config = $.extend(!0, {}, this.config, e), !0)
                    },
                    saveProductConfig: function() {
                        var e = JSON.stringify(this.current.config);
                        this.dataProvider.isAsync ? this.dataProvider.write(this._getSaveID(this.DEFAULT_CONFIG_SAVED), e).then(Vinos.NOOP_FUNC) : this.dataProvider.write(this._getSaveID(this.DEFAULT_CONFIG_SAVED), e)
                    },
                    loadProductConfig: function() {
                        if (this.dataProvider.isAsync) return new Promise(function(e, t) {
                            Vinos.dataProvider.read(Vinos._getSaveID(Vinos.DEFAULT_CONFIG_SAVED)).then(function(t) {
                                Vinos.current.config = Vinos.current.config || {}, void 0 !== Vinos.product.volumeChar && (Vinos.current.config.volumeChar = Vinos.product.volumeChar);
                                var i = {};
                                null !== t && (i = JSON.parse(t));
                                var n = !1;
                                if (void 0 !== Vinos.product.volumeChar)
                                    if (void 0 === i.volumeChar || null === i.volumeChar || 0 === i.volumeChar.length) n = !0, i.volumeChar = Vinos.product.volumeChar;
                                    else {
                                        for (var r = 0; r < Vinos.product.volumeChar.length; ++r) {
                                            for (var a = Vinos.product.volumeChar[r], s = null, o = 0; o < i.volumeChar.length; ++o)
                                                if (i.volumeChar[o].name === a.name) {
                                                    s = i.volumeChar[o];
                                                    break
                                                } s ? (s.sample !== a.sample && (n = !0, s.sample = a.sample), s.pattern !== a.pattern && (n = !0, s.pattern = a.pattern), s.locales !== a.locales && (n = !0, s.locales = a.locales), s.nameClass !== a.nameClass && (n = !0, s.nameClass = a.nameClass)) : (n = !0, i.volumeChar.push(a))
                                        }
                                        for (r = i.volumeChar.length; r--;) {
                                            for (s = i.volumeChar[r], a = null, o = 0; o < Vinos.product.volumeChar.length; ++o)
                                                if (Vinos.product.volumeChar[o].name === s.name) {
                                                    a = Vinos.product.volumeChar[o];
                                                    break
                                                } null === a && (n = !0, i.volumeChar.splice(r, 1))
                                        }
                                    } $.extend(Vinos.current.config, i), n && Vinos.saveProductConfig(), e(i)
                            }, function(e) {
                                Vinos.logError("loadProductConfig:Err=", e), t()
                            })
                        });
                        var e = this.dataProvider.read(this._getSaveID(this.DEFAULT_CONFIG_SAVED));
                        if (null === e) return this.current.config = this.current.config || {}, void 0 !== this.product.volumeChar && (this.current.config.volumeChar = this.product.volumeChar), !1;
                        e = JSON.parse(e);
                        var t = !1;
                        if (void 0 !== this.product.volumeChar)
                            if (void 0 === e.volumeChar || null === e.volumeChar || 0 === e.volumeChar.length) t = !0, e.volumeChar = this.product.volumeChar;
                            else {
                                for (var i = 0; i < this.product.volumeChar.length; ++i) {
                                    for (var n = this.product.volumeChar[i], r = null, a = 0; a < e.volumeChar.length; ++a)
                                        if (e.volumeChar[a].name === n.name) {
                                            r = e.volumeChar[a];
                                            break
                                        } r ? (r.sample !== n.sample && (t = !0, r.sample = n.sample), r.pattern !== n.pattern && (t = !0, r.pattern = n.pattern), r.locales !== n.locales && (t = !0, r.locales = n.locales), r.nameClass !== n.nameClass && (t = !0, r.nameClass = n.nameClass)) : (t = !0, e.volumeChar.push(n))
                                }
                                for (i = e.volumeChar.length; i--;) {
                                    for (r = e.volumeChar[i], n = null, a = 0; a < this.product.volumeChar.length; ++a)
                                        if (this.product.volumeChar[a].name === r.name) {
                                            n = this.product.volumeChar[a];
                                            break
                                        } null === n && (t = !0, e.volumeChar.splice(i, 1))
                                }
                            } return $.extend(this.current.config, e), t && this.saveProductConfig(), !0
                    },
                    _checkProductLocale: function() {
                        var e = this.getLocale();
                        if (e !== this.product.locale) {
                            if (void 0 !== this.product && null !== this.product && void 0 !== this.product.supportLocales)
                                for (var t = 0; t < this.product.supportLocales.length; ++t)
                                    if (e === this.product.supportLocales[t].code) return;
                            this.logWarn("_checkProductLocale:Locale change from " + this.config.locale + " to " + this.product.locale), this.setLocale(this.product.locale)
                        }
                    },
                    getConfig: function(e) {
                        return void 0 === e || null === e || 0 === e.length ? this.config : this.config[e]
                    },
                    setConfig: function(e, t) {
                        var i = !1;
                        return "string" == typeof e && (e = this._parseObject(e)), "object" != typeof e || null === e ? this.config : (void 0 === t && (t = !0), void 0 !== e.logLevel && null !== e.logLevel && this.setLogLevel(e.logLevel), void 0 !== e.playSpeed && null !== e.playSpeed && this.setPlaySpeed(e.playSpeed), void 0 !== e.typeSpeed && null !== e.typeSpeed && this.setTypeSpeed(e.typeSpeed), void 0 !== e.typeDelay && null !== e.typeDelay && this.setTypeDelay(e.typeDelay), void 0 !== e.autoSpeed && null !== e.autoSpeed && this.setAutoSpeed(e.autoSpeed), void 0 !== e.autoDelay && null !== e.autoDelay && this.setAutoDelay(e.autoDelay), void 0 !== e.useMenu && null !== e.useMenu && this.setUseMenu(e.useMenu), void 0 !== e.useQuickMenu && null !== e.useQuickMenu && this.setUseQuickMenu(e.useQuickMenu), void 0 !== e.useProductSkin && null !== e.useProductSkin && this.setUseProductSkin(e.useProductSkin), void 0 !== e.waitVoice && null !== e.waitVoice && this.setWaitVoice(e.waitVoice), void 0 !== e.keepVoice && null !== e.keepVoice && this.setKeepVoice(e.keepVoice), void 0 !== e.muteBGM && null !== e.muteBGM && this.setMuteBGM(e.muteBGM), void 0 !== e.dialogOpaque && null !== e.dialogOpaque && this.setDialogOpaque(e.dialogOpaque), void 0 !== e.dialogShadow && null !== e.dialogShadow && this.setDialogShadow(e.dialogShadow), void 0 !== e.dialogOutline && null !== e.dialogOutline && this.setDialogOutline(e.dialogOutline), void 0 !== e.useEffect && null !== e.useEffect && this.setUseEffect(e.useEffect), void 0 !== e.useAnim && null !== e.useAnim && this.setUseAnim(e.useAnim), void 0 !== e.isDebug && null !== e.isDebug && this.setIsDebug(e.isDebug), void 0 !== e.volumeMaster && null !== e.volumeMaster && this.setMasterVolume(e.volumeMaster), void 0 !== e.volumeBGM && null !== e.volumeBGM && this.setMasterVolumeBGM(e.volumeBGM), void 0 !== e.volumeVideo && null !== e.volumeVideo && this.setMasterVolumeVideo(e.volumeVideo), void 0 !== e.volumeSE && null !== e.volumeSE && this.setMasterVolumeSE(e.volumeSE), void 0 !== e.volumeVoice && null !== e.volumeVoice && this.setMasterVolumeVoice(e.volumeVoice), void 0 !== e.volumeChar && null !== e.volumeChar && (this.setMasterVolumeChar(e.volumeChar), i = !0), void 0 !== e.preload && null !== e.preload && this.setPreload(e.preload), void 0 !== e.locale && null !== e.locale ? this.setLocale(e.locale, e.onAfterLocale) : this.setLocale(), void 0 !== e.skin && null !== e.skin && (this.config.skin = e.skin), void 0 !== e.fullScreen && null !== e.fullScreen && (this.config.fullScreen = e.fullScreen), void 0 !== e.menuPosition && null !== e.menuPosition && (this.config.menuPosition = e.menuPosition), void 0 !== e.confirm && null !== e.confirm && $.extend(this.config.confirm, e.confirm), void 0 !== e.toast && null !== e.toast && $.extend(this.config.toast, e.toast), !0 === t && (this.saveConfig(), i && this.saveProductConfig()), this.config)
                    },
                    resetConfig: function() {
                        var e = $.extend(!0, {}, this.defaultConfig, this.product.defaultConfig);
                        this.setConfig(e)
                    },
                    setTitle: function(e) {
                        document.title = e, this.trigger("title", e)
                    },
                    locale: function(e) {
                        return this.setLocale(e), this.getLocale()
                    },
                    getLocale: function() {
                        return this.config.locale
                    },
                    setLocale: function(e, t) {
                        if (void 0 === e) return this.current.locale = "", this.current.localePostfix = "", this.current.localeURL = "", null;
                        var i = function() {
                            Vinos._setUIText(), Vinos.trigger("locale", Vinos.config.locale), "function" == typeof t && t()
                        };
                        if (this.config.locale = e, this.logDebug("setLocale:" + this.config.locale), void 0 === window.Vinos.locale || void 0 === window.Vinos.locale[e]) {
                            var n = this.DEFAULT_PLUGIN_URL + "vinos_locale_" + e + ".js?v=" + this.getVersion(!0);
                            eTOYutil.fnLoadScript(null, n, i)
                        } else i();
                        return this.applyLocale(this.config.locale), this.config.locale
                    },
                    applyLocale: function(e) {
                        if (void 0 !== this.product && null !== this.product && void 0 !== this.product.supportLocales) {
                            for (var t = 0; t < this.product.supportLocales.length; ++t)
                                if (e === this.product.supportLocales[t].code) {
                                    if (this.current.locale = e, this.current.localePostfix = this.product.supportLocales[t].postfix, this.current.localeURL = this.product.supportLocales[t].URL, this.isReady) {
                                        this.logDebug("applyLocale:Reloading Current Script with new locale=" + this.config.locale), this._reload(1, this.current.scriptName);
                                        for (var i = 0; i < this.scripts.length; ++i) {
                                            var n = this.scripts[i];
                                            n.name !== this.current.scriptName && this._reload(1, n.name)
                                        }
                                    }
                                    break
                                }
                        } else this.current.locale = "", this.current.localePostfix = "", this.current.localeURL = ""
                    },
                    getLocaleDef: function() {
                        return this.product.supportLocales
                    },
                    playSpeed: function(e) {
                        return this.setPlaySpeed(e), this.getPlaySpeed()
                    },
                    getPlaySpeed: function() {
                        return this.config.playSpeed
                    },
                    setPlaySpeed: function(e) {
                        return void 0 === e ? null : ((0 === e || isNaN(e)) && (e = 1), this.config.playSpeed = e, this.logDebug("setPlaySpeed:" + this.config.playSpeed), this.config.playSpeed)
                    },
                    typeSpeed: function(e) {
                        return this.setTypeSpeed(e), this.getTypeSpeed()
                    },
                    getTypeSpeed: function() {
                        return this.config.typeSpeed
                    },
                    setTypeSpeed: function(e) {
                        return void 0 === e ? null : ((0 === e || isNaN(e)) && (e = 1), this.config.typeSpeed = e, this.logDebug("setTypeSpeed:" + this.config.typeSpeed), this.config.typeSpeed)
                    },
                    typeDelay: function(e) {
                        return this.setTypeDelay(e), this.getTypeDelay()
                    },
                    getTypeDelay: function() {
                        return this.config.typeDelay
                    },
                    setTypeDelay: function(e) {
                        return void 0 === e ? null : (this.config.typeDelay = e, this.logDebug("setTypeDelay:" + this.config.typeDelay), this.config.typeDelay)
                    },
                    _calcTypeDelay: function() {
                        if (this.runtime.isFastSkip) return 0;
                        var e = this.config.typeDelay;
                        return 0 < this.config.typeSpeed && (e /= this.config.typeSpeed), 0 < this.config.playSpeed && (e /= this.config.playSpeed), eTOYutil.fnRound(e, 0)
                    },
                    autoSpeed: function(e) {
                        return this.setAutoSpeed(e), this.getAutoSpeed()
                    },
                    getAutoSpeed: function() {
                        return this.config.autoSpeed
                    },
                    setAutoSpeed: function(e) {
                        return void 0 === e ? null : ((0 === e || isNaN(e)) && (e = 1), this.config.autoSpeed = e, this.logDebug("setAutoSpeed:" + this.config.autoSpeed), this.config.autoSpeed)
                    },
                    autoDelay: function(e) {
                        return this.setAutoDelay(e), this.getAutoDelay()
                    },
                    getAutoDelay: function() {
                        return this.config.autoDelay
                    },
                    setAutoDelay: function(e) {
                        return void 0 === e ? null : (this.config.autoDelay = e, this.logDebug("setAutoDelay:" + this.config.autoDelay), this.config.autoDelay)
                    },
                    _calcSceneDelay: function(e, t) {
                        t = void 0 !== t && t;
                        var i = 0;
                        return !0 === this.runtime.isFastSkip ? 0 : (i = t ? e * this.config.autoDelay : e + this.config.autoDelay, 0 < this.config.autoSpeed && (i /= this.config.autoSpeed), 0 < this.config.playSpeed && (i /= this.config.playSpeed), eTOYutil.fnRound(i, 0))
                    },
                    preload: function(e) {
                        return this.setPreload(e), this.getPreload()
                    },
                    getPreload: function() {
                        return this.config.preload
                    },
                    setPreload: function(e) {
                        return void 0 === e ? null : (this.config.preload = e, this.logDebug("setPreload:" + this.config.preload), this.config.preload)
                    },
                    autoPlay: function(e) {
                        return this.setAutoPlay(e), this.getAutoPlay()
                    },
                    getAutoPlay: function() {
                        return this.runtime.isAutoPlay
                    },
                    setAutoPlay: function(e) {
                        !0 !== this.runtime.viewMode && (this.runtime.isAutoPlay = void 0 !== e && e, this.runtime.sceneDelay = 0, e ? this.WAIT_CLICK_CM !== this.wait() && this.WAIT_CLICK !== this.wait() || this._processClick() : this.runtime.isFastSkip = !1, this.logDebug("setAutoPlay:" + this.runtime.isAutoPlay), this.trigger("autoPlay", this.runtime.isAutoPlay))
                    },
                    toggleAutoPlay: function() {
                        return this.autoPlay(!this.runtime.isAutoPlay)
                    },
                    fastSkip: function(e) {
                        return this.setFastSkip(e), this.getFastSkip()
                    },
                    getFastSkip: function() {
                        return this.runtime.isFastSkip
                    },
                    setFastSkip: function(e) {
                        !0 !== this.runtime.viewMode && (this.runtime.isFastSkip = void 0 !== e && e, this.runtime.isFastSkip ? (this._completeScene(), this.setAutoPlay(!0)) : this.setAutoPlay(!1))
                    },
                    toggleFastSkip: function() {
                        return this.fastSkip(!this.runtime.isFastSkip)
                    },
                    viewMode: function(e) {
                        return this.setViewMode(e), this.getViewMode()
                    },
                    getViewMode: function() {
                        return this.runtime.viewMode
                    },
                    setViewMode: function(e) {
                        this.isInterfaceVisible() || (this.runtime.viewMode = void 0 !== e && e, this.runtime.viewMode ? this.isDialogVisible() && (this.runtime.isDialogHidden = !0, this._hideDialog()) : !0 === this.runtime.isDialogHidden && (this._showDialog(), this.runtime.isDialogHidden = !1), this.logDebug("setViewMode:" + this.runtime.viewMode))
                    },
                    toggleViewMode: function() {
                        return this.viewMode(!this.runtime.viewMode)
                    },
                    isPlayBack: function(e) {
                        return this.setIsPlayBack(e), this.getIsPlayBack()
                    },
                    getIsPlayBack: function() {
                        return this.runtime.isPlayBack
                    },
                    setIsPlayBack: function(e) {
                        return void 0 === e ? null : (this.runtime.isPlayBack = e, this.logDebug("setIsPlayBack=" + this.runtime.isPlayBack), this.runtime.isPlayBack)
                    },
                    useMenu: function(e) {
                        return this.setUseMenu(e), this.getUseMenu()
                    },
                    getUseMenu: function() {
                        return this.config.useMenu
                    },
                    setUseMenu: function(e) {
                        return void 0 === e ? null : (this.config.useMenu = e, this.logDebug("setUseMenu=" + this.config.useMenu), this.config.useMenu)
                    },
                    useQuickMenu: function(e) {
                        return this.setUseQuickMenu(e), this.getUseQuickMenu()
                    },
                    getUseQuickMenu: function() {
                        return this.config.useQuickMenu
                    },
                    setUseQuickMenu: function(e) {
                        return void 0 === e ? null : (this.config.useQuickMenu = e, this.logDebug("setUseQuickMenu=" + this.config.useQuickMenu), this.config.useQuickMenu)
                    },
                    useProductSkin: function(e) {
                        return this.setUseProductSkin(e), this.getUseProductSkin()
                    },
                    getUseProductSkin: function() {
                        return this.config.useProductSkin
                    },
                    setUseProductSkin: function(e) {
                        return void 0 === e ? null : (this.config.useProductSkin = e, this.logDebug("setUseProductSkin=" + this.config.useProductSkin), this.config.useProductSkin)
                    },
                    getNameFontStyle: function() {
                        return (this.product.htmlNameFontStylePrefix || this.product.htmlFontStylePrefix) + (this.product.htmlNameFontStylePostfix || this.product.htmlFontStylePostfix)
                    },
                    getDialogFontStyle: function() {
                        return (this.product.htmlDialogFontStylePrefix || this.product.htmlFontStylePrefix) + (this.product.htmlDialogFontStylePostfix || this.product.htmlFontStylePostfix)
                    },
                    waitVoice: function(e) {
                        return this.setWaitVoice(e), this.getWaitVoice()
                    },
                    getWaitVoice: function() {
                        return this.config.waitVoice
                    },
                    setWaitVoice: function(e) {
                        return void 0 === e ? null : (this.config.waitVoice = e, this.logDebug("setWaitVoice=" + this.config.waitVoice), this.config.waitVoice)
                    },
                    keepVoice: function(e) {
                        return this.setKeepVoice(e), this.getKeepVoice()
                    },
                    getKeepVoice: function() {
                        return this.config.keepVoice
                    },
                    setKeepVoice: function(e) {
                        return void 0 === e ? null : (this.config.keepVoice = e, this.logDebug("setKeepVoice=" + this.config.keepVoice), this.config.keepVoice)
                    },
                    muteBGM: function(e) {
                        return this.setMuteBGM(e), this.getMuteBGM()
                    },
                    getMuteBGM: function() {
                        return this.config.muteBGM
                    },
                    setMuteBGM: function(e) {
                        return void 0 === e ? null : ("boolean" == typeof e && (e = e ? this.getMuteBGMVolume() : 1), this.config.muteBGM = e, this.logDebug("setMuteBGM=" + this.config.muteBGM), this.config.muteBGM)
                    },
                    getMuteBGMVolume: function() {
                        return this.product.bgmVolumeWhenVoice || this.DEFAULT_MUTE_BGM_VOLUME
                    },
                    dialogOpaque: function(e) {
                        return this.setDialogOpaque(e), this.getDialogOpaque()
                    },
                    getDialogOpaque: function() {
                        return this.config.dialogOpaque
                    },
                    setDialogOpaque: function(e) {
                        return void 0 === e ? null : (0 > e && (e = 0), 1 < e && (e = 1), this.config.dialogOpaque = e, this.logDebug("setDialogOpaque=" + this.config.dialogOpaque), this.applyDialogOpaque(), this.config.dialogOpaque)
                    },
                    applyDialogOpaque: function() {
                        var e = eTOYutil.fnFindFirstChildByClass(this.elements.dialog, "wv-dialog-back");
                        null !== e && (e.style.opacity = this.config.dialogOpaque);
                        var t = eTOYutil.fnFindFirstChildByClass(this.elements.dialog, "wv-name-back");
                        null !== t && (t.style.opacity = this.config.dialogOpaque)
                    },
                    dialogShadow: function(e) {
                        return this.setDialogShadow(e), this.getDialogShadow()
                    },
                    getDialogShadow: function() {
                        return this.config.dialogShadow
                    },
                    setDialogShadow: function(e) {
                        return void 0 === e ? null : (this.config.dialogShadow = e, e ? (this.elements.name.classList.add("shadow"), this.elements.dialogText.classList.add("shadow")) : (this.elements.name.classList.remove("shadow"), this.elements.dialogText.classList.remove("shadow")), this.logDebug("setDialogShadow=" + this.config.dialogShadow), this.config.dialogShadow)
                    },
                    dialogOutline: function(e) {
                        return this.setDialogOutline(e), this.getDialogOutline()
                    },
                    getDialogOutline: function() {
                        return this.config.dialogOutline
                    },
                    setDialogOutline: function(e) {
                        return void 0 === e ? null : (this.config.dialogOutline = e, e ? (this.elements.name.classList.add("outline"), this.elements.dialogText.classList.add("outline")) : (this.elements.name.classList.remove("outline"), this.elements.dialogText.classList.remove("outline")), this.logDebug("setDialogOutline=" + this.config.dialogOutline), this.config.dialogOutline)
                    },
                    isDebug: function(e) {
                        return this.setIsDebug(e), this.getIsDebug()
                    },
                    getIsDebug: function() {
                        return this.config.isDebug
                    },
                    setIsDebug: function(e) {
                        return void 0 === e ? null : (this.config.isDebug = e, this.logDebug("setIsDebug=" + this.config.isDebug), !0 === this.config.isDebug ? eTOYutil.fnLogSetOn(eTOYutil.__LOG_DEBUG) : eTOYutil.fnLogSetOff(eTOYutil.__LOG_DEBUG), !0 !== this.isMobile && null !== this.elements.debug && (e ? $(this.elements.debug).modal({
                            backdrop: !1
                        }).modal("show") : $(this.elements.debug).modal({
                            backdrop: !1
                        }).modal("hide")), this.config.isDebug)
                    },
                    logLevel: function(e) {
                        return this.setLogLevel(e), this.getLogLevel()
                    },
                    getLogLevel: function() {
                        return this.config.logLevel
                    },
                    setLogLevel: function(e) {
                        return void 0 === e ? null : ($.extend(this.config.logLevel, e), !0 === this.config.logLevel.info ? eTOYutil.fnLogSetOn(eTOYutil.__LOG_INFO) : !1 === this.config.logLevel.info && eTOYutil.fnLogSetOff(eTOYutil.__LOG_INFO), !0 === this.config.logLevel.debug ? eTOYutil.fnLogSetOn(eTOYutil.__LOG_DEBUG) : !1 === this.config.logLevel.debug && eTOYutil.fnLogSetOff(eTOYutil.__LOG_DEBUG), !0 === this.config.logLevel.warn ? eTOYutil.fnLogSetOn(eTOYutil.__LOG_WARN) : !1 === this.config.logLevel.warn && eTOYutil.fnLogSetOff(eTOYutil.__LOG_WARN), !0 === this.config.logLevel.error ? eTOYutil.fnLogSetOn(eTOYutil.__LOG_ERROR) : !1 === this.config.logLevel.error && eTOYutil.fnLogSetOff(eTOYutil.__LOG_ERROR), !0 === this.config.logLevel.fatal ? eTOYutil.fnLogSetOn(eTOYutil.__LOG_FATAL) : !1 === this.config.logLevel.fatal && eTOYutil.fnLogSetOff(eTOYutil.__LOG_FATAL), this.logDebug("setLogLevel=info(" + this.config.logLevel.info + ") debug(" + this.config.logLevel.debug + ") warn(" + this.config.logLevel.warn + ") error(" + this.config.logLevel.error + ") fatal(" + this.config.logLevel.fatal + ")"), this.config.logLevel)
                    },
                    logInfo: function(e) {
                        !0 === this.config.logLevel.info && eTOYutil.fnLogInfo(e, this.current.scriptName, this.current.lineNo)
                    },
                    logDebug: function(e) {
                        !0 === Vinos.config.logLevel.debug && eTOYutil.fnLogDebug(e, Vinos.current.scriptName, Vinos.current.lineNo)
                    },
                    logWarn: function(e) {
                        !0 === this.config.logLevel.warn && eTOYutil.fnLogWarn(e, this.current.scriptName, this.current.lineNo)
                    },
                    logError: function(e, t) {
                        t = void 0 === t || t, !0 === this.config.logLevel.error && eTOYutil.fnLogError(e, this.current.scriptName, this.current.lineNo), t && this.trigger("error", {
                            message: "Error:" + e,
                            code: this.current.lineNo,
                            type: "script",
                            name: this.current.scriptName
                        })
                    },
                    logFatal: function(e, t) {
                        t = void 0 === t || t, !0 === this.config.logLevel.fatal && eTOYutil.fnLogFatal(e, this.current.scriptName, this.current.lineNo), t && this.trigger("error", {
                            message: "Fatal:" + e,
                            code: this.current.lineNo,
                            type: "script",
                            name: this.current.scriptName
                        })
                    },
                    toast: function(e, t) {
                        t = t || this.DEFAULT_DURATION, this.elements.alert && ($(this.elements.alert).html(e).fadeIn(), setTimeout(function() {
                            $(Vinos.elements.alert).fadeOut()
                        }, t)), this.logDebug("toast:" + e)
                    },
                    useEffect: function(e) {
                        return this.setUseEffect(e), this.getUseEffect()
                    },
                    getUseEffect: function() {
                        return this.config.useEffect
                    },
                    setUseEffect: function(e) {
                        return void 0 === e ? null : (this.config.useEffect = e, this.logDebug("setUseEffect=" + this.config.useEffect), this.config.useEffect)
                    },
                    useAnim: function(e) {
                        return this.setUseAnim(e), this.getUseAnim()
                    },
                    getUseAnim: function() {
                        return this.config.useAnim
                    },
                    setUseAnim: function(e) {
                        return void 0 === e ? null : (this.config.useAnim = e, this.logDebug("setUseAnim=" + this.config.useAnim), this.config.useAnim)
                    },
                    getMasterVolume: function() {
                        return this.config.volumeMaster
                    },
                    setMasterVolume: function(e) {
                        return this.config.volumeMaster = e, this.setVolumeBGM(this.config.volumeBGM), this.setVolumeVideo(this.config.volumeVideo), this.setVolumeSoundEffect(this.config.volumeSE), this.setVolumeVoice(this.config.volumeVoice), this.config.volumeMaster
                    },
                    getMasterVolumeBGM: function() {
                        return this.config.volumeBGM
                    },
                    setMasterVolumeBGM: function(e) {
                        return this.config.volumeBGM = e, this.setVolumeBGM(e), this.config.volumeBGM
                    },
                    getMasterVolumeVideo: function() {
                        return this.config.volumeVideo
                    },
                    setMasterVolumeVideo: function(e) {
                        return this.config.volumeVideo = e, this.setVolumeVideo(e), this.config.volumeVideo
                    },
                    getMasterVolumeSE: function() {
                        return this.config.volumeSE
                    },
                    setMasterVolumeSE: function(e) {
                        return this.config.volumeSE = e, this.setVolumeSoundEffect(e), this.config.volumeSE
                    },
                    getMasterVolumeVoice: function() {
                        return this.config.volumeVoice
                    },
                    setMasterVolumeVoice: function(e) {
                        return this.config.volumeVoice = e, this.setVolumeVoice(e), this.config.volumeVoice
                    },
                    getMasterVolumeChar: function(e) {
                        return void 0 === e ? (this.current.config = this.current.config || {}, this.current.config.volumeChar = this.current.config.volumeChar || [], this.current.config.volumeChar) : this.getVolumeChar(e)
                    },
                    setMasterVolumeChar: function(e) {
                        e.name = e.name || "*", this.current.config.volumeChar = this.current.config.volumeChar || [];
                        for (var t = 0; t < this.current.config.volumeChar.length; ++t) "*" !== e.name && e.name !== this.current.config.volumeChar[t].name || (this.current.config.volumeChar[t].volume = e.volume, this.setVolumeChar(this.current.config.volumeChar[t].name, e.volume));
                        return e.volume
                    },
                    _getFinalVolume: function(e, t) {
                        //calculate the level of volume for each type of audio channel
                        switch (isNaN(t) && (t = 1), e) {
                            case this.DEFAULT_LAYERUSAGE_VD:
                                return eTOYutil.fnRound(this.config.volumeMaster * t * this.config.volumeVideo, 2);
                            case this.DEFAULT_LAYERUSAGE_SE:
                                return eTOYutil.fnRound(this.config.volumeMaster * t * this.config.volumeSE, 2);
                            case this.DEFAULT_LAYERUSAGE_VO:
                                return eTOYutil.fnRound(this.config.volumeMaster * t * this.config.volumeVoice, 2);
                            default:
                            case this.DEFAULT_LAYERUSAGE_BGM:
                                return eTOYutil.fnRound(this.config.volumeMaster * t * this.config.volumeBGM, 2)
                        }
                    },
                    _getAudio: function(e, t) {
                        t = t || 0;
                        var i = "object" == typeof e ? e : this._getLayout(e);
                        if (null !== i) {
                            var n = i.audio;
                            return Array.isArray(i.audio) && (n = i.audio[t]), n
                        }
                    },
                    _setAudio: function(e, t) {
                        if (null === e || void 0 === t) return void this.logError("_setAudio:Invalid audio or options");
                        if (void 0 !== t.volume)
                            if (void 0 !== t.duration && 0 < t.duration) {
                                var i = {
                                    type: "audio",
                                    container: null,
                                    audio: e,
                                    index: e.user.index,
                                    renderOp: "fade",
                                    effect: {
                                        duration: t.duration,
                                        volume: t.volume,
                                        start: e.volume
                                    }
                                };
                                this._pushQueue(i)
                            } else isNaN(t.volume) || (e.volume = this._getFinalVolume(e.user.type, t.volume));
                        void 0 !== t.loop && (e.loop = t.loop), void 0 !== t.pan && (e.pan = t.pan)
                    },
                    getVolumeByType: function(e) {
                        switch (e) {
                            case this.DEFAULT_LAYERUSAGE_BGM:
                                return this.getVolumeBGM();
                            case this.DEFAULT_LAYERUSAGE_VD:
                                return this.getVolumeVideo();
                            case this.DEFAULT_LAYERUSAGE_SE:
                                return this.getVolumeSoundEffect();
                            case this.DEFAULT_LAYERUSAGE_VO:
                                return this.getVolumeVoice()
                        }
                        return 0
                    },
                    setVolumeByType: function(e, t, i, n) {
                        i = i || 0;
                        var r = this._getLayout(e);
                        if (null !== r) {
                            var a = !0;
                            if (void 0 === t && (t = this.getVolumeByType(e), a = !1), a)
                                if (this.DEFAULT_LAYERUSAGE_VD === e) {
                                    var s = this._getVideo(this.runtime.videoIndex);
                                    null !== s && (s.volume = this._getFinalVolume(this.DEFAULT_LAYERUSAGE_VD, t))
                                } else if (Array.isArray(r.audio)) {
                                for (var o = [], l = 0; l < r.audio.length; ++l)
                                    if (a = !0, void 0 !== n && n !== r.audio[l].user.name && (a = !1), a)
                                        if (0 < i) {
                                            var u = {
                                                type: "audio",
                                                container: r,
                                                audio: r.audio[l],
                                                index: l,
                                                renderOp: "fade",
                                                effect: {
                                                    duration: i,
                                                    volume: t,
                                                    start: r.audio[l].volume
                                                }
                                            };
                                            o.push(u)
                                        } else this._setAudio(r.audio[l], {
                                            volume: t
                                        });
                                0 < o.length && this._pushQueue(o)
                            } else a = !0, void 0 !== n && null !== r.audio.user && null !== r.audio.user.option && n !== r.audio.user.option.name && (a = !1), a && (0 < i ? (u = {
                                type: "audio",
                                container: r,
                                audio: r.audio,
                                index: 0,
                                renderOp: "fade",
                                effect: {
                                    duration: i,
                                    volume: t,
                                    start: r.audio.volume
                                }
                            }, this._pushQueue(u)) : this._setAudio(r.audio, {
                                volume: t
                            }));
                            return t
                        }
                    },
                    getVolumeBGM: function() {
                        return this.config.volumeBGM
                    },
                    setVolumeBGM: function(e, t) {
                        return this.setVolumeByType(this.DEFAULT_LAYERUSAGE_BGM, e, t)
                    },
                    getVolumeVideo: function() {
                        return this.confing.volumeVideo
                    },
                    setVolumeVideo: function(e, t) {
                        return this.setVolumeByType(this.DEFAULT_LAYERUSAGE_VD, e, t)
                    },
                    getVolumeSoundEffect: function() {
                        return this.confing.volumeSE
                    },
                    setVolumeSoundEffect: function(e, t) {
                        return this.setVolumeByType(this.DEFAULT_LAYERUSAGE_SE, e, t)
                    },
                    getVolumeVoice: function() {
                        return this.confing.volumeVoice
                    },
                    setVolumeVoice: function(e, t) {
                        return this.setVolumeByType(this.DEFAULT_LAYERUSAGE_VO, e, t)
                    },
                    getVolumeChar: function(e, t) {
                        var i = -1;
                        if (void 0 !== this.current.config.volumeChar && null !== this.current.config.volumeChar)
                            for (var n = 0; n < this.current.config.volumeChar.length; ++n) {
                                var r = this.current.config.volumeChar[n];
                                if (void 0 !== e) {
                                    if (e === r.name) return r.volume;
                                    if (void 0 !== r.locales && null !== r.locales && 0 < r.locales.length)
                                        for (var a = 0; a < r.locales.length; ++a)
                                            if (e === r.locales[a].name) return r.volume
                                }
                                if (void 0 !== t && void 0 !== r.pattern)
                                    for (var s = 0; s < r.pattern.length; ++s) {
                                        if (t.startsWith(r.pattern[s])) return r.volume;
                                        "*" === r.pattern[s] && (i = r.volume)
                                    }
                                "+" === r.name && (i = r.volume)
                            }
                        return 0 <= i ? i : this.config.volumeVoice
                    },
                    setVolumeChar: function(e, t, i) {
                        return this.setVolumeByType(this.DEFAULT_LAYERUSAGE_VO, t, i, e)
                    },
                    clear: function() {
                        this.product = null, this.resources = [], this.prefab = [], this.scenes = [], this.history = [], this.intro = [], this.outro = [], this.macro = [], this.menu = [], this.game = [], this.scripts = [], this.renderQueue = [], this.renderFilter = [], this.renderParticle = [], this.bundleQueue = [], this.current = {
                            scene: 0,
                            name: "",
                            title: "",
                            doHistory: !0,
                            showHistory: !0,
                            x: 0,
                            y: 0,
                            config: {}
                        }, this.runtime = {
                            tick: 0,
                            fpsTick: 0,
                            autoTick: 0,
                            frameCount: 0
                        }, this.config = $.extend(!0, {}, this.defaultConfig), this.nextScene = 0, this.prevScene = 0, this.isPause = !0, this.isReady = !1, this.resetWait(), this.runtime.isMacro = !1, this.isMobile = eTOYutil.fnIsMobileOrTablet(), this.elements.viewport = null, this.elements.dialogBox = null, this.elements.dialog = null, this.elements.dialogText = null, this.elements.name = null, this.elements.menuBar = null, this.elements.menuBtn = null, this.elements.canvas = null, this.elements.interface = null, this.elements.panel = null, this.aspectRatio = .75, this.app = null, this.defaultDB = this.DB_LOCAL, this.dataProvider = null, this.containers = [], null !== this.animationFrameId && window.cancelAnimationFrame(this.animationFrameId), this.animationFrameId = null
                    },
                    refresh: function() {
                        null !== this.app && this.app.render()
                    },
                    _getResource: function(e) {
                        if (null === this.product || void 0 === this.product || void 0 === this.product.resources) return "";
                        var t = this.config.locale.replace("-", "");
                        return this._getMessageBySeperator(this.product.resources[t], e)
                    },
                    _getMessage: function(e) {
                        var t = this.config.locale.replace("-", "");
                        return this._getMessageBySeperator(window.Vinos.locale[t], e)
                    },
                    _getMessageBySeperator: function(e, t, i) {
                        if (void 0 === e) return "";
                        i = i || ".";
                        for (var n = "", r = t.split(i), a = 0; a < r.length; ++a)
                            if (n = e[r[a]], e = n, void 0 === n) return "";
                        return n
                    },
                    getProgress: function(e) {
                        if (void 0 === e) return this.progress;
                        switch (e) {
                            case this.PROGRESS_CG:
                                return this.progress.cg;
                            case this.PROGRESS_SCENE:
                                return this.progress.scene;
                            case this.PROGRESS_ANIME:
                                return this.progress.anime;
                            case this.PROGRESS_VARIABLE:
                                return this.progress.variables
                        }
                        return null
                    },
                    getProgressDef: function() {
                        return this.product.progress
                    },
                    _getProgressDef: function(e) {
                        if (void 0 === this.product.progress) return null;
                        for (var t = 0; t < this.product.progress.length; ++t)
                            if (e === this.product.progress[t].type || e === this.product.progress[t].id) return this.product.progress[t];
                        return null
                    },
                    _setProgress: function(e, t, i, n) {
                        n = void 0 !== n ? n : -1;
                        var r = this.progress[e.id] || [],
                            a = !1;
                        void 0 === r[t] || null === r[t] || i !== r[t] ? -1 === n ? (r[t] = i, a = !0) : (r[t] = r[t] || [], r[t][n] = i, a = !0) : -1 === n || void 0 !== r[t][n] && null !== r[t][n] || (r[t][n] = i, a = !0), a && (this.logInfo("_setProgress:Type=" + e.type + ", Pos=" + t + ", Value=" + (void 0 !== i.file ? i.file : i)), this._saveProgress())
                    },
                    _findProgressPos: function(e, t) {
                        var i = -1,
                            n = -1,
                            r = this.product[e.array],
                            a = null,
                            s = 0,
                            o = null;
                        switch (e.type) {
                            case this.PROGRESS_CG:
                                for (s = 0; s < r.length; ++s) {
                                    var l = r[s];
                                    void 0 !== l.files && (l = l.files);
                                    for (var u = 0; u < l.length; ++u)
                                        if (t === l[u]) {
                                            i = s, n = u;
                                            break
                                        }
                                }
                                break;
                            case this.PROGRESS_SCENE:
                                for (s = 0; s < r.length; ++s)
                                    if (o = r[s], t === o.label || t === o.tag) {
                                        i = s, a = o;
                                        break
                                    } break;
                            case this.PROGRESS_ANIME:
                                for (s = 0; s < r.length; ++s)
                                    if (o = r[s], t === o.file) {
                                        i = s, a = o;
                                        break
                                    } break;
                            case this.PROGRESS_VARIABLE:
                                for (s = 0; s < r.length; ++s)
                                    if (o = r[s], t === o) {
                                        i = s, a = o;
                                        break
                                    }
                        }
                        return {
                            pos: i,
                            find: a,
                            subPos: n
                        }
                    },
                    _checkPlayBack: function() {
                        if (!this.getIsPlayBack()) {
                            var e = this._getProgressDef(this.PROGRESS_SCENE);
                            if (e && e.addByCommand && this.current.progressScene) {
                                var t = this._findProgressPos(e, this.current.progressScene);
                                0 <= t.pos && (this._setProgress(e, t.pos, null !== t.find ? t.find : this.current.progressScene), this.current.progressScene = null)
                            }
                        }
                    },
                    _checkProgress: function(e, t) {
                        var i = this._getProgressDef(e);
                        if (null === i) return !1;
                        if (void 0 !== i.array && 0 < i.array.length) {
                            var n = this._findProgressPos(i, t);
                            if (0 <= n.pos) return this.PROGRESS_SCENE === e && i.addByCommand ? this.current.progressScene = t : this._setProgress(i, n.pos, null !== n.find ? n.find : t, n.subPos), !0
                        } else if (void 0 !== i.pattern && 0 < i.pattern.length) {
                            var r = new RegExp(i.pattern),
                                a = t.search(r);
                            if (0 <= a) {
                                var s = t.replace(r, "$1");
                                return s--, this._setProgress(i, s, t), !0
                            }
                        }
                        return !1
                    },
                    _saveProgress: function() {
                        var e = JSON.stringify(this.progress);
                        if (!this.dataProvider.isAsync) return this.dataProvider.write(this._getSaveID(this.DEFAULT_PROGRESS_ID, !0), e), !0;
                        this.dataProvider.write(this._getSaveID(this.DEFAULT_PROGRESS_ID, !0), e).then(Vinos.NOOP_FUNC)
                    },
                    _loadProgress: function() {
                        if (this.dataProvider.isAsync) return new Promise(function(e, t) {
                            Vinos.dataProvider.read(Vinos._getSaveID(Vinos.DEFAULT_PROGRESS_ID, !0)).then(function(t) {
                                if (null == t) e(!1);
                                else {
                                    var i = {};
                                    null !== t && (i = JSON.parse(t)), Vinos.progress.cg = i.cg || [], Vinos.progress.anime = i.anime || [], Vinos.progress.scene = i.scene || [], Vinos.progress.variables = i.variables || [];
                                    for (var n = 0; n < Vinos.product.progress.length; ++n) {
                                        var r = Vinos.product.progress[n];
                                        if (Vinos.PROGRESS_VARIABLE === r.type)
                                            for (var a = Vinos.progress[r.id] || [], s = 0; s < a.length; ++s) {
                                                var o = a[s];
                                                if (null !== o) {
                                                    var l = Vinos.product[r.array],
                                                        u = l[s],
                                                        c = u + "=" + o;
                                                    Vinos.eval(c)
                                                }
                                            }
                                    }
                                    e(!0)
                                }
                            }, function(e) {
                                Vinos.logError("_loadProgress:Err=", e), t()
                            })
                        });
                        var e = this.dataProvider.read(this._getSaveID(this.DEFAULT_PROGRESS_ID, !0));
                        if (null === e) return !1;
                        var t = JSON.parse(e);
                        this.progress.cg = t.cg || [], this.progress.anime = t.anime || [], this.progress.scene = t.scene || [], this.progress.variables = t.variables || [];
                        for (var i = 0; i < this.product.progress.length; ++i) {
                            var n = this.product.progress[i];
                            if (this.PROGRESS_VARIABLE === n.type)
                                for (var r = this.progress[n.id] || [], a = 0; a < r.length; ++a) {
                                    var s = r[a];
                                    if (null !== s) {
                                        var o = this.product[n.array],
                                            l = o[a],
                                            u = l + "=" + s;
                                        this.eval(u), this.logDebug("_loadProgress:Variables=" + l + ", value=" + s)
                                    }
                                }
                        }
                        return !0
                    },
                    getMaxSlotOfSaves: function() {
                        return this.product.maxSaveSlot
                    },
                    getSaveList: function(e, t, i) {
                        return e = e || 0, t = t || this.product.maxSaveSlot, this.dataProvider.readPage(e, t, i)
                    },
                    clearSaveList: function() {
                        if (!this.dataProvider.isAsync) return this.dataProvider.clear();
                        this.dataProvider.clear().then(Vinos.NOOP_FUNC)
                    },
                    copySave: function(e, t) {
                        if (!this.dataProvider.isAsync) return this.dataProvider.copy(e, t);
                        this.dataProvider.copy(e, t).then(Vinos.NOOP_FUNC)
                    },
                    deleteSave: function(e) {
                        this.dataProvider.isAsync ? this.dataProvider.remove(e).then(Vinos.NOOP_FUNC) : this.dataProvider.remove(e)
                    },
                    _getSaveID: function(e, t) {
                        return (!0 === t ? this.product.parentID || this.product.ID : this.product.ID) + "_" + this.product.locale + "_" + e
                    },
                    _getThumbnailWidth: function() {
                        return void 0 !== this.product.thumbNail && void 0 !== this.product.thumbNail.width ? this.product.thumbNail.width : this.DEFAULT_THUMBNAIL_WIDTH
                    },
                    _getThumbnailHeight: function() {
                        return this._getThumbnailWidth() * this.aspectRatio
                    },
                    _getThumbnail: function(e, t, i) {
                        i = i || this.elements.canvas;
                        var n = document.createElement("canvas");
                        return n.width = e || this._getThumbnailWidth(), n.height = t || this._getThumbnailHeight(), n.getContext("2d").drawImage(i, 0, 0, n.width, n.height), n.toDataURL()
                    },
                    _setThumbnail: function(e) {
                        e = e || 0, this.runtime.thumbNail = 0 === e ? null : this._getThumbnail()
                    },
                    getSaveScreenDef: function() {
                        return this.product.saveScreen ? this.product.saveScreen.ref ? this.product[this.product.saveScreen.ref] ? this.product[this.product.saveScreen.ref] : this.DEFAULT_SAVE_SCREEN : this.product.saveScreen : this.DEFAULT_SAVE_SCREEN
                    },
                    getLoadScreenDef: function() {
                        return this.product.loadScreen ? this.product.loadScreen.ref ? this.product[this.product.loadScreen.ref] ? this.product[this.product.loadScreen.ref] : this.DEFAULT_LOAD_SCREEN : this.product.loadScreen : this.DEFAULT_LOAD_SCREEN
                    },
                    getGalleryScreenDef: function(e) {
                        var t = this._getProgressDef(e);
                        return null !== t && void 0 !== t.screenDef && null !== t.screenDef ? t.screenDef.ref && this.product[t.screenDef.ref] ? this.product[t.screenDef.ref] : t.screenDef : this.product.galleryScreen ? this.product.galleryScreen.ref ? this.product[this.product.galleryScreen.ref] ? this.product[this.product.galleryScreen.ref] : this.DEFAULT_GALLERY_SCREEN : this.product.galleryScreen : this.DEFAULT_GALLERY_SCREEN
                    },
                    save: function(e, t, i) {
                        var n = this._findRenderObj("command", "save");
                        if (null !== n) return !1;
                        var r = void 0 !== t && t;
                        if (i = i || this.SAVE_NORMAL, 0 > e) return this.logError("Invalid Slot number...Abort"), !1;
                        n = {
                            type: "command",
                            renderOp: {
                                type: "save",
                                slot: e,
                                storage: i,
                                quick: r,
                                onSave: this._save.bind(this)
                            }
                        }, this._pushQueue(n)
                    },
                    _save: function(slot, quickSave, toStorage) {
                        var date = new Date,
                            month = eTOYutil.fnAddLeadingZero(date.getMonth() + 1),
                            day = eTOYutil.fnAddLeadingZero(date.getDate()),
                            saveYMD = date.getFullYear() + "-" + month + "-" + day,
                            hour = eTOYutil.fnAddLeadingZero(date.getHours()),
                            min = eTOYutil.fnAddLeadingZero(date.getMinutes()),
                            sec = eTOYutil.fnAddLeadingZero(date.getSeconds()),
                            saveHMS = hour + ":" + min + ":" + sec,
                            layers = "";
                        try {
                            var replacer = function(e, t) {
                                if ("function" != typeof t)
                                    if ("audio" !== e) {
                                        if ("object" != typeof t || null === t || "function" != typeof t.Particle_init) {
                                            if ("object" == typeof t && null !== t && "object" == typeof t._user && null !== t._user) return t._user;
                                            if ("_x" === e || "_y" === e) return t;
                                            if ("_filters" === e) return e = "filters", t;
                                            if (!("parent" === e || "parentLayer" === e || "group" === e || "parentGroup" === e || "tempDisplayObjectParent" === e || "events" === e || "cb" === e || "scope" === e || "particleImages" === e || "prev" === e || "defaultLayout" === e || "frameCount" === e || e.toLowerCase().indexOf("tick") >= 0 || e.startsWith("on") || e.startsWith("_"))) return t
                                        }
                                    } else if (void 0 !== t || null !== t) {
                                    if (void 0 !== t.user && !0 === t.user.skipLog) return;
                                    return t.user
                                }
                            };
                            layers = JSON.stringify(this.containers, replacer)
                        } catch (e) {
                            return this.logError(e.message), !1
                        }
                        if (window.saved = {}, void 0 !== this.product.saveCode && 0 < this.product.saveCode.length) try {
                            eval(this.product.saveCode)
                        } catch (e) {
                            this.logError("Save:Evaluation Error:Eval=" + this.product.saveCode), this.logError(e.message, !1)
                        }
                        var thumbNail = "";
                        !1 === quickSave && (this.app.render(), thumbNail = void 0 !== this.runtime.thumbNail && null !== this.runtime.thumbNail ? this.runtime.thumbNail : this._getThumbnail());
                        var saveData = {
                                ID: this.product.ID,
                                Title: this.product.title,
                                Locale: this.product.locale,
                                ContentVersion: this.getContentVersion(),
                                Date: saveYMD,
                                Time: saveHMS,
                                LodaCount: 0,
                                Current: JSON.stringify(this.current, replacer),
                                Layers: layers,
                                Variables: JSON.stringify(saved),
                                Quick: quickSave,
                                Wait: this.runtime.waitType,
                                Version: this.getVersion(),
                                ThumbNail: null
                            },
                            saveStr = JSON.stringify(saveData),
                            savedId = null,
                            onAfterSave = function() {
                                window.saved = {}
                            };
                        return this.SAVE_NORMAL === toStorage ? (savedId = this._getSaveID(slot), onAfterSave = function() {
                            var e = function(e) {
                                var t = Vinos.dataProvider.read(Vinos._getSaveID(Vinos.DEFAULT_NUM_OF_SAVED)) || 0;
                                Vinos.dataProvider.write(Vinos._getSaveID(Vinos.DEFAULT_NUM_OF_SAVED), eTOYutil.fnParseInt(t) + 1)
                            };
                            Vinos.dataProvider.writeBlob(savedId, {
                                slot: slot,
                                thumbNail: thumbNail
                            }, e), window.saved = {}
                        }) : savedId = this.SAVE_AUTO === toStorage ? this._getSaveID(this.DEFAULT_AUTO_SAVED) : this.SAVE_QUICK === toStorage ? this._getSaveID(this.DEFAULT_QUICK_SAVED) : this._getSaveID(this.DEFAULT_TEMP_SAVED), null !== savedId && (this.dataProvider.isAsync ? this.dataProvider.write(savedId, saveStr).then(onAfterSave) : (this.dataProvider.write(savedId, saveStr), onAfterSave())), !0
                    },
                    load: function(e, t, i) {
                        var n = void 0 !== t && t;
                        i = i || this.SAVE_NORMAL;
                        var r = "",
                            a = null;
                        if (null === (a = this.SAVE_NORMAL === i ? this._getSaveID(e) : this.SAVE_AUTO === i ? this._getSaveID(this.DEFAULT_AUTO_SAVED) : this.SAVE_QUICK === i ? this._getSaveID(this.DEFAULT_QUICK_SAVED) : this._getSaveID(this.DEFAULT_TEMP_SAVED))) return this.logWarn("Invalid Save Type...Abort"), !1;
                        var s = function(t) {
                            if (void 0 === t || null === t || 0 === t.length) return Vinos.logWarn("Invalid Slot Number...Abort"), !1;
                            var r = JSON.parse(t);
                            if (Vinos.product.ID !== r.ID || Vinos.product.locale !== r.Locale) return Vinos.logError("Invalid Product ID or locale...Abort"), !1;
                            if (!1 === Vinos.checkVersion(r.Version, 1)) return Vinos.logError("Invalid saved version...Abort"), !1;
                            if (!1 === Vinos.checkContentVersion(r.ContentVersion, 1)) return Vinos.logError("Invalid saved content version...Abort"), !1;
                            if (void 0 !== r.Quick && n !== r.Quick) return Vinos.logError("Invalid saved value(Quick)...Abort"), !1;
                            r.Current = JSON.parse(r.Current);
                            var a = Vinos._findScript(r.Current.scriptName, !0);
                            Vinos.logDebug("load:scriptName=" + r.Current.scriptName + ", ID=" + a + ", Loaded=" + Vinos._isScriptLoaded(a));
                            var s = {
                                type: "command",
                                renderOp: {
                                    type: "load",
                                    slot: e,
                                    storage: i,
                                    quick: n,
                                    file: r.Current.scriptName,
                                    scriptID: a,
                                    onLoad: Vinos._load.bind(Vinos),
                                    saved: r
                                }
                            };
                            return Vinos._pushQueue(s), Vinos.wait(Vinos.WAIT_LOAD), !0
                        };
                        if (!this.dataProvider.isAsync) return r = this.dataProvider.read(a), s(r);
                        this.dataProvider.read(a).then(s)
                    },
                    _load: function(renderOp) {
                        var savedSlot = renderOp.saved;
                        Vinos._clearCurrent();
                        var savedConfig = Vinos.current.config;
                        Vinos.current = savedSlot.Current, Vinos.current.config = savedConfig;
                        var savedDialogText = savedSlot.Current.dialogText || savedSlot.Current.dialogPrev || "",
                            savedDialogName = savedSlot.Current.dialogName,
                            savedDialogNameClass = savedSlot.Current.dialogNameClass,
                            savedDialogVoice = savedSlot.Current.dialogVoice,
                            currentLine = savedSlot.Current.lineNo;
                        if (Vinos.current.scriptID = Vinos._findScript(Vinos.current.scriptName), Vinos._changeScript(Vinos.current.scriptID), Vinos.current.locale = Vinos.current.locale || "", Vinos.current.localePostfix = Vinos.current.localePostfix || "", Vinos.current.localeURL = Vinos.current.localeURL || "", Vinos.current.lineNo = currentLine, Vinos._setSaveable(Vinos.current.saveable), Vinos._setLoadable(Vinos.current.loadable), window.loaded = {}, void 0 !== savedSlot.Variables && 0 < savedSlot.Variables.length && (loaded = JSON.parse(savedSlot.Variables), void 0 !== Vinos.product.loadCode && 0 < Vinos.product.loadCode.length)) try {
                            eval(Vinos.product.loadCode)
                        } catch (e) {
                            Vinos.logError("Load:Evaluation Error:Eval=" + Vinos.product.loadCode), Vinos.logError(e.message, !1)
                        }
                        window.loaded = {}, Vinos._clearVideo(), Vinos._clearParticles(), Vinos._clearLayouts(), Vinos.containers = [];
                        for (var layers = JSON.parse(savedSlot.Layers), i = 0; i < layers.length; ++i) {
                            var layer = layers[i],
                                loadedContainer = layer.container,
                                loadedElements = layer.elements,
                                soundFile = layer.audio || null,
                                layout = Vinos._createLayout(layer);
                            if (null !== layout) switch (layer.type) {
                                case "display":
                                case "ui":
                                    var container = layout.container;
                                    if (container.removeChildren(), container.defaultAnchor = loadedContainer.defaultAnchor, container.defaultScale = loadedContainer.defaultScale, container.defaultFilter = loadedContainer.defaultFilter, container.dx = loadedContainer.dx, container.dy = loadedContainer.dy, Vinos._calcLayoutContainerPosition(layout), container.alpha = loadedContainer.alpha, container.visible = loadedContainer.visible, container.transform.worldTransform.set(loadedContainer.transform.worldTransform.a, loadedContainer.transform.worldTransform.b, loadedContainer.transform.worldTransform.c, loadedContainer.transform.worldTransform.d, loadedContainer.transform.worldTransform.tx, loadedContainer.transform.worldTransform.ty), container.transform.localTransform.set(loadedContainer.transform.localTransform.a, loadedContainer.transform.localTransform.b, loadedContainer.transform.localTransform.c, loadedContainer.transform.localTransform.d, loadedContainer.transform.localTransform.tx, loadedContainer.transform.localTransform.ty), container.transform.position.set(loadedContainer.transform.position._x, loadedContainer.transform.position._y), container.transform.scale.set(loadedContainer.transform.scale._x, loadedContainer.transform.scale._y), container.transform.pivot.set(loadedContainer.transform.pivot._x, loadedContainer.transform.pivot._y), container.transform.skew.set(loadedContainer.transform.skew._x, loadedContainer.transform.skew._y), void 0 !== loadedContainer.children && null !== loadedContainer.children && 0 < loadedContainer.children.length && Vinos._setLoadedSprite(container, container, loadedContainer.children), void 0 !== loadedElements && null !== loadedElements && 0 < loadedElements.length && Vinos._setLoadedUI(loadedElements, Vinos.config.useAnim), void 0 !== loadedContainer._filters && null !== loadedContainer._filters)
                                        for (var j = 0; j < loadedContainer._filters.length; ++j) {
                                            var filterDef = loadedContainer._filters[j];
                                            if (null !== filterDef && void 0 !== filterDef.line && filterDef.line <= Vinos.current.startNo) {
                                                var filter = Vinos._createFilter(container, filterDef);
                                                Vinos._addFilter(container, filter, filterDef.animate)
                                            }
                                        }
                                    if (void 0 !== loadedContainer.particles && null !== loadedContainer.particles)
                                        for (j = 0; j < loadedContainer.particles.length; ++j) {
                                            var particleDef = loadedContainer.particles[j];
                                            if (null !== particleDef && void 0 !== particleDef.line && particleDef.line <= Vinos.current.startNo) {
                                                var particle = Vinos._createParticle(container, particleDef);
                                                Vinos._addParticle(container, particle)
                                            }
                                        }
                                    Vinos.logInfo("Load:LayoutContainer loaded. Usage=" + layout.usage + ", index=" + layout.index + ", children=" + loadedContainer.children.length);
                                    break;
                                case "audio":
                                    Vinos.logInfo("Load:LayoutContainer loaded. Usage=" + layout.usage + ", audio=" + (soundFile ? soundFile.source : "null")), !eTOYutil.fnIsNull(soundFile) && (layout.usage === Vinos.DEFAULT_LAYERUSAGE_BGM || soundFile.scriptID === Vinos.current.scriptID && soundFile.line >= Vinos.current.startNo) && Vinos.playSound(layer.usage, soundFile.source, soundFile.option ? soundFile.option : void 0)
                            } else Vinos.logError("Load:LayoutContainer cannot create. Usage=" + layer.usage + ", index=" + layer.index)
                        }
                        return void 0 !== savedSlot.Wait ? Vinos.wait(savedSlot.Wait) : Vinos.resetWait(), Vinos.resize(), !0 === Vinos.isDialogVisible() && (void 0 !== savedDialogText && null !== savedDialogText && 0 < savedDialogText.length && Vinos.addDialog(savedDialogText, savedDialogName, savedDialogNameClass, savedDialogVoice), Vinos._showDialog()), Vinos.isReady = !0, null === Vinos.animationFrameId && Vinos.loop(), !0 !== Vinos.isPause && Vinos.WAIT_NONE === Vinos.wait() && Vinos.next(), !0
                    },
                    _findRecent: function() {
                        if (this.dataProvider.isAsync) return new Promise(function(e) {
                            for (var t = -1, i = "", n = "", r = 0, a = 0, s = Promise.resolve(); a < Vinos.product.maxSaveSlot; a++) s = s.then(Vinos.dataProvider.read(Vinos._getSaveID(a)).then(function(e) {
                                var a = JSON.parse(e);
                                null !== a && a.ID === Vinos.product.ID && a.Locale === Vinos.product.locale && !0 !== a.Quick && (i < a.Date ? (i = a.Date, n = a.Time, t = r) : i === a.Date && n < a.Time && (n = a.Time, t = r)), r++
                            })).then(function() {
                                e(t)
                            })
                        });
                        for (var e = -1, t = "", i = "", n = 0; n < this.product.maxSaveSlot; ++n) {
                            var r = JSON.parse(this.dataProvider.read(this._getSaveID(n)));
                            null !== r && r.ID === this.product.ID && r.Locale === this.product.locale && !0 !== r.Quick && (t < r.Date ? (t = r.Date, i = r.Time, e = n) : t === r.Date && i < r.Time && (i = r.Time, e = n))
                        }
                        return e
                    },
                    loadRecent: function() {
                        if (!this.dataProvider.isAsync) {
                            var e = this._findRecent();
                            return -1 !== e && this.load(e, !1)
                        }
                        this._findRecent().then(function(e) {
                            -1 !== e && Vinos.load(e, !1)
                        })
                    },
                    _setLoadedSprite: function(e, t, i) {
                        for (var n = 0; n < i.length; ++n) {
                            var r = i[n];
                            if (void 0 !== r && null !== r) {
                                if (void 0 !== r.user && "ui" === r.user.type) Vinos.makeUI(r.user);
                                else if (void 0 !== r.name && 0 < r.name.length) {
                                    var a = null;
                                    a = "EMPTY" === r.name || "WHITE" === r.name ? "EMPTY" === r.name ? new PIXI.Sprite(PIXI.Texture.EMPTY) : new PIXI.Sprite(PIXI.Texture.WHITE) : Vinos._createSprite(r.name, e, r.user.option ? r.user.option : void 0), a.user = r.user, a.alpha = r.alpha, a.visible = r.visible, a.transform.worldTransform.set(r.transform.worldTransform.a, r.transform.worldTransform.b, r.transform.worldTransform.c, r.transform.worldTransform.d, r.transform.worldTransform.tx, r.transform.worldTransform.ty), a.transform.localTransform.set(r.transform.localTransform.a, r.transform.localTransform.b, r.transform.localTransform.c, r.transform.localTransform.d, r.transform.localTransform.tx, r.transform.localTransform.ty), a.transform.position.set(r.transform.position._x, r.transform.position._y), a.transform.scale.set(r.transform.scale._x, r.transform.scale._y), a.transform.pivot.set(r.transform.pivot._x, r.transform.pivot._y), a.transform.skew.set(r.transform.skew._x, r.transform.skew._y), t.addChild(a)
                                }
                                if (void 0 !== r._filters && null !== r._filters)
                                    for (var s = 0; s < r._filters.length; ++s) {
                                        var o = r._filters[s];
                                        if (null !== o) {
                                            var l = Vinos._createFilter(a, o);
                                            Vinos._addFilter(a, l, o.animate)
                                        }
                                    }
                                if (void 0 !== r.particles && null !== r.particles)
                                    for (s = 0; s < r.particles.length; ++s) {
                                        var u = r.particles[s];
                                        if (null !== u) {
                                            var c = Vinos._createParticle(a, u);
                                            Vinos._addParticle(a, c)
                                        }
                                    }
                                0 < r.children.length && Vinos._setLoadedSprite(e, a, r.children)
                            }
                        }
                    },
                    _setLoadedUI: function(e, t) {
                        for (var i = 0; i < e.length; ++i) {
                            var n = e[i];
                            void 0 !== n && null !== n && ("ui" === n.type && Vinos.makeUI(n), "video" !== n.type || !0 !== t && !0 !== n.forcePlay || Vinos.playVideo(n.name || n.source, {
                                loop: n.loop,
                                index: n.index,
                                forcePlay: n.forcePlay
                            }))
                        }
                    },
                    autoSave: function() {
                        return this._save(0, !0, this.SAVE_AUTO)
                    },
                    autoLoad: function() {
                        return this.load(0, !0, this.SAVE_AUTO)
                    },
                    quickSave: function() {
                        return this.save(0, !0, this.SAVE_QUICK)
                    },
                    quickLoad: function() {
                        return this.load(0, !0, this.SAVE_QUICK)
                    },
                    tempSave: function() {
                        return this._save(0, !0, this.SAVE_TEMP)
                    },
                    tempLoad: function() {
                        return this.load(0, !0, this.SAVE_TEMP)
                    },
                    _getEffectDelta: function(e, t) {
                        var i = (new Date).getTime();
                        return void 0 === e.start && (e.start = i), void 0 === e.end && (e.end = e.start + e.duration), "boolean" == typeof t && !0 === t ? e.duration : (i - e.start) * this.config.playSpeed
                    },
                    _changeScene: function(e, t) {
                        this.current.name = e, this.current.title = t || "", !0 === this.current.saveable && (this.current.startNo = this.current.lineNo), this._stopSound(this.DEFAULT_LAYERUSAGE_SE), this.config.keepVoice || this._stopSound(this.DEFAULT_LAYERUSAGE_VO), this.runtime.sceneDelay = 0, this.trigger("scene_changed", this.current.name), this._checkProgress(this.PROGRESS_SCENE, this.current.name), 0 < this.current.title.length ? this.logInfo("_changeScene:" + this.current.name + ", Title:" + this.current.title) : this.logInfo("_changeScene:" + this.current.name)
                    },
                    _completeScene: function() {
                        return !0 === this.current.dialogIng && null !== this.current.dialog && void 0 !== this.current.dialog ? (this.current.dialog.complete(), !1) : (!1 !== this.current.isSkipable || !(0 < this.renderQueue.length || !0 === this.current.dialogIng)) && (this._stopSound(this.DEFAULT_LAYERUSAGE_SE), this.config.keepVoice || this._stopSound(this.DEFAULT_LAYERUSAGE_VO), this.runtime.sceneDelay = 0, this.render(!0), 0 === this.renderQueue.length)
                    },
                    _onClickInterface: function(e) {
                        if ("null" !== e.label && "undefined" !== e.label && void 0 !== e.label || (e.label = null), "null" !== e.file && "undefined" !== e.file && void 0 !== e.file || (e.file = null), "null" !== e.url && "undefined" !== e.url && void 0 !== e.url || (e.url = null), null !== e.url && 0 < e.url.length) this.trigger("selectUI", {
                            type: "link",
                            url: e.url,
                            target: e.target || "_blank"
                        });
                        else if (null === e.file && null === e.label) return;
                        (null !== e.file && 0 < e.file.length || null !== e.label && 0 < e.label.length) && "*" !== e.label && !1 === this.jump(e.label, e.file) && this.logError("Invalid Click Target:Label=" + e.label + ", File=" + e.file), this.hideInterface(), this.WAIT_INPUT === this.wait() && this.resetWait(), this.next(!0)
                    },
                    hasSelection: function() {
                        if (this.WAIT_INPUT !== this.wait()) return !1;
                        var e = this._getLayout(this.DEFAULT_LAYERUSAGE_UI);
                        if (null === e) return !1;
                        if (void 0 === e.elements || 0 === e.elements.length) return !1;
                        var t = $(this.elements.interface);
                        return !(!t.is(":visible") || t.hasClass("disabled"))
                    },
                    moveActiveSelection: function(e) {
                        var t = this._getLayout(this.DEFAULT_LAYERUSAGE_UI);
                        if (null !== t) {
                            for (var i = -1, n = [], r = 0; r < t.elements.length; ++r) {
                                var a = t.elements[r]._element;
                                a && $(a).find(".wv-link").addBack(".wv-link").each(function() {
                                    n.push(this), this.blur(), $(this).hasClass("active") && (i = n.length - 1, $(this).removeClass("active"), $(this).parent().removeClass("active"))
                                })
                            }
                            if (0 !== n.length) {
                                switch (e) {
                                    case this.DIR_UP:
                                        0 <= i && 0 > --i && (i = n.length - 1);
                                        break;
                                    case this.DIR_DOWN:
                                        0 <= i && (i++, n.length <= i && (i = 0))
                                } - 1 === i && (i = 0), a = n[i], a.focus(), $(a).addClass("active"), $(a).parent().addClass("active")
                            }
                        }
                    },
                    selectActiveSelection: function() {
                        var e = this._getLayout(this.DEFAULT_LAYERUSAGE_UI);
                        if (null !== e)
                            for (var t = 0; t < e.elements.length; ++t) {
                                var i = e.elements[t]._element;
                                i && $(i).find(".wv-link").addBack(".wv-link").each(function() {
                                    $(this).hasClass("active") && (this.focus(), this.click())
                                })
                            }
                    },
                    setSelected: function(e) {
                        if (!0 === this.isMobile && e.children.length > 0) {
                            for (var t = !1, i = 0; i < e.children.length; ++i) {
                                var n = e.children[i];
                                if (!0 === n.onenter && !0 === n.visible) {
                                    t = !0;
                                    break
                                }
                            }
                            if (null !== this.runtime.prevSelect && this.runtime.prevSelect.emit("mouseout"), !1 === t && "function" == typeof e.emit) return e.emit("mouseover"), void(this.runtime.prevSelect = e)
                        }(void 0 === e.user || void 0 === e.user.option || null !== e.user.option.file && "null" !== e.user.option.file && void 0 !== e.user.option.file || null !== e.user.option.label && "null" !== e.user.option.label && void 0 !== e.user.option.label) && (this.hideInterface(), void 0 !== e.user && void 0 !== e.user.option && "*" !== e.user.option.label && !1 === this.jump(e.user.option.label, e.user.option.file) && this.logError("Invalid label:Label=" + e.user.option.label), this.WAIT_INPUT === this.wait() && this.resetWait(), this.next(!0))
                    },
                    _clearLayouts: function() {
                        for (var e = 0; e < this.containers.length; ++e) {
                            var t = this.containers[e];
                            if (void 0 !== t.container) t.container.removeChildren(), this._clearFilter(t.container);
                            else if (void 0 !== t.audio)
                                if (Array.isArray(t.audio))
                                    for (var i = 0; i < t.audio.length; ++i) t.audio[i].pause();
                                else t.audio.pause()
                        }
                    },
                    _clearLayoutContainer: function(e) {
                        var t = this._getLayoutContainer(e);
                        null !== t && t.removeChildren()
                    },
                    _hasLayout: function(e, t) {
                        for (var i = 0; i < this.containers.length; ++i) {
                            var n = this.containers[i];
                            if (n.usage === e) {
                                if (void 0 === t) return !0;
                                if (t === n.index) return !0
                            }
                        }
                        return !1
                    },
                    _getLayout: function(e, t, i) {
                        if (0 === this.containers.length) return null;
                        for (var n = void 0 !== i && i, r = 0; r < this.containers.length; ++r) {
                            var a = this.containers[r];
                            if ((!1 !== a.enabled || !1 !== n) && (e == a.usage || e == a.name)) {
                                if (void 0 === t) return a;
                                if (t == a.index) return a
                            }
                        }
                        return this.logWarn("Layout Not Found:Usage=" + e + ", index=" + t), null
                    },
                    _changeLayoutOrder: function(e, t, i) {
                        var n = this._getLayout(e, t, !0);
                        return null !== n && (n.zIndex = i, void 0 !== n.container && (n.container.zIndex = i, void 0 !== n.container.group && (n.container.group.zIndex = i)), !0)
                    },
                    _isEnableLayout: function(e, t) {
                        var i = this._getLayout(e, t, !0);
                        return null !== i && i.enabled
                    },
                    _enableLayout: function(e, t) {
                        var i = this._getLayout(e, t, !0);
                        null !== i && (i.enabled = !0, "display" !== i.type && "ui" !== i.type || (i.container.visible = !0))
                    },
                    _disableLayout: function(e, t) {
                        var i = this._getLayout(e, t, !0);
                        null !== i && (i.enabled = !1, "display" !== i.type && "ui" !== i.type || (i.container.visible = !1))
                    },
                    _setLayout: function(e, t, i) {
                        "object" == typeof t && (i = t, t = void 0), i = i || {
                            queue: !1
                        };
                        var n = null;
                        if (null !== (n = "object" == typeof e ? e : this._getLayout(e, t)))
                            if (!0 === i.queue) {
                                var r = {
                                        type: "set",
                                        option: i
                                    },
                                    a = {
                                        type: "layer",
                                        container: n,
                                        renderOp: r
                                    };
                                this._pushQueue(a)
                            } else void 0 !== i.visible && void 0 !== n.container && (n.container.visible = i.visible), void 0 !== i.x && (n.dx = i.x, void 0 !== n.container && (n.container.x = i.x, n.container.dx = i.x)), void 0 !== i.y && (n.dy = i.y, void 0 !== n.container && (n.container.y = i.y, n.container.dy = i.y)), void 0 !== i.alpha && void 0 !== n.container && (n.container.alpha = i.alpha), void 0 !== i.zIndex && (n.zIndex = i.zIndex, void 0 !== n.container && (n.container.zIndex = n.container.group.zIndex = i.zIndex))
                    },
                    _deleteLayout: function(e) {
                        for (var t = this.containers.length; t--;) {
                            var i = this.containers[t];
                            i.usage === e && (void 0 !== i.container && (i.container.visible = !1, i.container.removeChildren()), this.containers.splice(t, 1))
                        }
                    },
                    _createLayout: function(e, t) {
                        switch (e.type) {
                            case "display":
                            case "ui":
                                var i = new PIXI.display.Group(e.zIndex, e.zIndex > 0);
                                if (e.container = new PIXI.display.Layer(i), this._calcLayoutContainerPosition(e), this.app.stage.addChild(e.container), e.container.defaultLayout = e, e.container.defaultAnchor = {
                                        x: 0,
                                        y: 0
                                    }, e.container.defaultScale = {
                                        x: 1,
                                        y: 1
                                    }, e.container.defaultFilter = [], e.container.particles = [], !0 === this.isMobile && "ui" === e.type && this.DEFAULT_LAYERUSAGE_UI === e.usage) {
                                    e.container.hitArea = new PIXI.Rectangle(0, 0, this.elements.canvas.width, this.elements.canvas.height), e.container.interactive = !0;
                                    var n = function(e) {
                                            e.stopPropagation(), Vinos.elements.baseElement.click()
                                        },
                                        r = function(e) {
                                            if (e.stopPropagation(), window.CustomEvent) Vinos.elements.baseElement.dispatchEvent(new CustomEvent("contextmenu"));
                                            else if (document.createEvent) {
                                                var t = document.createEvent("HTMLEvents");
                                                t.initEvent("contextmenu", !0, !1), Vinos.elements.baseElement.dispatchEvent(t)
                                            } else Vinos.elements.baseElement.fireEvent("oncontextmenu")
                                        };
                                    e.container.on("tap", n), e.container.on("click", n), e.container.on("rightclick ", r)
                                }
                                "ui" === e.type && (e.elements = []);
                                break;
                            case "audio":
                                if (1 === e.max) e.audio = new Audio, e.audio.user = {
                                    index: t,
                                    source: null,
                                    type: e.usage,
                                    name: null,
                                    line: 0,
                                    option: null
                                }, e.audio.usage = e.usage, this._setAudioElement(e.audio);
                                else if (1 < e.max) {
                                    e.audio = [];
                                    for (var a = 0; a < e.max; ++a) e.audio[a] = new Audio, e.audio[a].user = {
                                        index: a,
                                        source: null,
                                        type: e.usage,
                                        name: null,
                                        line: 0,
                                        option: null
                                    }, e.audio[a].usage = e.usage, this._setAudioElement(e.audio[a])
                                }
                        }
                        return void 0 !== t && (e.index = t), e.enabled = !0, this.containers.push(e), e
                    },
                    _initLayout: function() {
                        this.containers = [];
                        for (var e = 0; e < this.product.layout.length; ++e) {
                            var t = this.product.layout[e];
                            this._createLayout(t)
                        }
                    },
                    _setAudioElement: function(e) {
                        e.onplay = function() {
                            if (void 0 !== e && null !== this.src && 0 !== this.src.length) switch (this.user.type) {
                                case Vinos.DEFAULT_LAYERUSAGE_SE:
                                    Vinos._onStartSoundEffect(this);
                                    break;
                                case Vinos.DEFAULT_LAYERUSAGE_VO:
                                    Vinos._onStartVoice(this);
                                    break;
                                case Vinos.DEFAULT_LAYERUSAGE_BGM:
                                default:
                                    Vinos._onStartBGM(this)
                            }
                        }, e.onended = function() {
                            switch (this.user.type) {
                                case Vinos.DEFAULT_LAYERUSAGE_SE:
                                    Vinos._onEndSoundEffect(this);
                                    break;
                                case Vinos.DEFAULT_LAYERUSAGE_VO:
                                    Vinos._onEndVoice(this);
                                    break;
                                case Vinos.DEFAULT_LAYERUSAGE_BGM:
                                default:
                                    Vinos._onEndBGM(this)
                            }
                            this.user.line <= Vinos.current.startNo && (this.user.source = null, this.user.option = null, this.user.name = null, this.user.line = 0, this.user.scriptID = Vinos.SCRIPT_END)
                        }, e.onloadedmetadata = function() {
                            0 < this.duration && (void 0 !== this.user.option && null !== this.user.option && !0 === this.user.option.waitUntil && !0 === Vinos.config.waitVoice ? (Vinos.runtime.sceneDelay = Vinos._calcSceneDelay(1e3 * this.duration, !1), Vinos.logDebug("loadSound:" + this.user.source + ", Duration=" + this.duration + ", SceneDelay=" + Vinos.runtime.sceneDelay)) : Vinos.logDebug("loadSound:" + this.user.source + ", Duration=" + this.duration))
                        }, e.onerror = this._onMediaError
                    },
                    _getLayoutContainer: function(e, t) {
                        var i = this._getLayout(e, t);
                        return null === i || void 0 === i.container ? (this.logWarn("Container Not Found:Usage=" + e), null) : i.container
                    },
                    _copyLayoutContainer: function(e, t) {
                        for (var i = 0; i < e.children.length; ++i) t.addChild(e.getChildAt(i))
                    },
                    moveLayer: function(e, t) {
                        if (null !== e) {
                            t = t || {
                                sx: -1,
                                sy: -1,
                                dx: 0,
                                dy: 0,
                                duration: 1
                            }, void 0 !== t.sx && -1 !== t.sx || (t.sx = e.x), void 0 !== t.sy && -1 !== t.sy || (t.sy = e.y), void 0 !== t.dx && -1 !== t.dx || (t.dx = e.x), void 0 !== t.dy && -1 !== t.dy || (t.dy = e.y);
                            var i = {
                                    type: "move",
                                    option: {
                                        duration: t.duration,
                                        fromX: t.sx,
                                        fromY: t.sy,
                                        toX: t.dx,
                                        toY: t.dy
                                    }
                                },
                                n = {
                                    type: "layer",
                                    container: e,
                                    renderOp: i,
                                    isFinished: !1
                                };
                            this._pushQueue(n)
                        }
                    },
                    _moveLayoutContainer: function(e, t, i, n, r, a, s) {
                        if (null !== e) {
                            a = a || 0, s = s || 2;
                            for (var o = 0; o < t.length - 1; ++o) t[o].elapsed = (o + 1) / t.length * i;
                            if (t[t.length - 1].elapsed = i, t.splice(0, 0, {
                                    x: e.x,
                                    y: e.y,
                                    alpha: e.alpha,
                                    alphaFade: !0,
                                    elapsed: 0
                                }), !0 === r) {
                                var l = [];
                                for (o = 0; o < t.length; ++o) {
                                    var u = t[o];
                                    l.push([u.x, u.y, u.alpha])
                                }
                                r = new BSpline(l, s, 0)
                            }
                            var c = {
                                    type: "move",
                                    option: {
                                        path: t,
                                        duration: i,
                                        spline: r,
                                        accel: a
                                    }
                                },
                                d = {
                                    type: "layer",
                                    container: e,
                                    renderOp: c
                                };
                            this._pushQueue(d)
                        }
                    },
                    _stopMoveLayoutContainer: function() {
                        var e = this._findRenderObj("layer", "move");
                        null !== e && this._renderObject(e, !0)
                    },
                    _checkContainerMax: function(e) {
                        if (!(0 < this.renderQueue.length) && void 0 !== e.container) {
                            var t = e.container.children.length;
                            if (e.max < t) {
                                for (var i = 0; i < t - e.max; ++i) {
                                    e.container.getChildAt(i).visible = !1
                                }
                                e.container.removeChildren(0, t - e.max)
                            }
                        }
                    },
                    render: function(e) {
                        for (var t = 0; t < this.renderQueue.length;) {
                            var i = this.renderQueue[t];
                            if (!0 === Array.isArray(i)) {
                                for (var n = !0, r = 0; r < i.length; ++r) {
                                    var a = i[r];
                                    if (!0 === Array.isArray(a)) {
                                        for (var s = !0, o = 0; o < a.length; ++o) {
                                            var l = this._renderObject(a[o], e);
                                            s = s && l
                                        }
                                        n = n && s
                                    } else {
                                        var u = this._renderObject(a, e);
                                        n = n && u
                                    }
                                }!0 === n && this.renderQueue.splice(t, 1)
                            } else !0 === this._renderObject(i, e) && this.renderQueue.splice(t, 1);
                            t++
                        }
                        if (!0 === this.runtime.videoReady && !1 === this.runtime.videoPlay) {
                            var c = this._getVideo(this.runtime.videoIndex);
                            null !== c && 1 <= c.readyState && !0 === c.user.play && (this.runtime.videoPlay = !0, !0 !== this.config.useAnim && !0 !== c.user.forcePlay || this._playVideoFile(c))
                        }
                        if (0 === this.renderQueue.length)
                            for (this.WAIT_RENDER === this.wait() && this.resetWait(), r = 0; r < this.containers.length; ++r) {
                                var d = this.containers[r];
                                switch (d.type) {
                                    case "display":
                                    case "ui":
                                        this._checkContainerMax(d)
                                }
                            }
                        if (!0 === this.config.useEffect && !0 !== this.runtime.isFastSkip) {
                            for (r = 0; r < this.renderFilter.length; ++r) {
                                var h = this.renderFilter[r];
                                0 < e ? h instanceof PIXI.filters.GodrayFilter || h instanceof PIXI.filters.ReflectionFilter ? h.time += e / 1e3 : h instanceof PIXI.filters.ShockwaveFilter ? h.time += e / 10 : h instanceof PIXI.filters.DisplacementFilter ? (h.userSprite.x++, h.userSprite.y++) : h.time += e : h.time++
                            }
                            for (r = 0; r < this.renderParticle.length; ++r) this.renderParticle[r].update(.001 * e)
                        }
                        this.app.render(), PIXI.RENDERER_TYPE.WEBGL === this.app.renderer.type && this.app.renderer.gl.flush()
                    },
                    _endRenderObj: function(e, t, i) {
                        e.isFinished = !0;
                        var n = e.renderOp;
                        void 0 !== n && "function" == typeof n.onEnd && n.onEnd(), this.clearWait(t, i)
                    },
                    _renderObject: function(e, t) {
                        if (!0 === e.isFinished) return !0;
                        switch (!1 === this.config.useAnim && !0 === this._isRenderType(e, "video") && e.options && !0 !== e.options.forcePlay && (t = !0), !1 === this.config.useEffect && !0 !== this._isRenderType(e, "video") && !0 !== this._isRenderType(e, "command") && (t = !0), !0 === this.runtime.isFastSkip && (t = !0), e.type) {
                            case "image":
                                if (!0 === e.debug && eTOYutil.fnDebug(e), !0 === e.isFinished) break;
                                if (null !== e.image && void 0 !== e.image.texture && void 0 !== e.image.texture.baseTexture && !0 !== e.image.texture.baseTexture.hasLoaded) {
                                    404 === e.image.texture.baseTexture._errorCode && (e.isFinished = !0);
                                    break
                                }
                                if (!0 === eTOYutil.fnIsNull(e.renderOp) || !0 === eTOYutil.fnIsNull(e.renderOp.effect)) {
                                    e.image.visible = void 0 === e.renderOp.visible || e.renderOp.visible, e.image.alpha = void 0 !== e.renderOp.alpha ? e.renderOp.alpha : e.container.alpha, e.isFinished = !0;
                                    break
                                }
                                void 0 !== e.renderOp && "function" == typeof e.renderOp.onStart && (e.renderOp.onStart(e), e.renderOp.onStart = void 0);
                                var i = e.renderOp.effect,
                                    n = 0,
                                    r = 0,
                                    a = 0;
                                switch (i.type) {
                                    case "clear":
                                        e.image.visible = !1, e.isFinished = !0, !0 === i.remove && e.container.removeChild(e.image);
                                        break;
                                    case "clearAll":
                                        for (n = 0; n < e.container.children.length; ++n) e.container.children[n].visible = !1;
                                        e.container.visible = !0, e.isFinished = !0, !0 === i.remove && e.container.removeChildren();
                                        break;
                                    case "fadeIn":
                                    case "maskIn":
                                        if (a = 0, r = this._getEffectDelta(i, t), r >= i.duration ? (a = i.opaque, e.container.mask = null, e.isFinished = !0) : a = i.opaque * r / i.duration, e.image.alpha = a, void 0 !== e.image.children && 0 < e.image.children.length)
                                            for (n = 0; n < e.image.children.length; ++n) e.image.children[n].alpha = a;
                                        break;
                                    case "fadeOut":
                                    case "maskOut":
                                        if (a = i.opaque, r = this._getEffectDelta(i, t), a = r >= i.duration ? 0 : i.opaque - i.opaque * r / i.duration, e.image.alpha = a, void 0 !== e.image.children && 0 < e.image.children.length)
                                            for (n = 0; n < e.image.children.length; ++n) e.image.children[n].alpha = a;
                                        a <= 0 && (e.container.mask = null, e.isFinished = !0, e.container.removeChild(e.image));
                                        break;
                                    case "move":
                                    case "moveNswitch":
                                        if ((r = this._getEffectDelta(i, t)) >= i.duration) e.isFinished = !0, e.image.position.set(i.toX, i.toY), void 0 !== i.container && (e.container.removeChild(e.image), e.image.position.set(0, 0), i.container.addChild(e.image));
                                        else {
                                            var s = r / i.duration,
                                                o = (i.toX - i.fromX) * s,
                                                l = (i.toY - i.fromY) * s;
                                            e.image.position.set(i.fromX + o, i.fromY + l)
                                        }
                                        break;
                                    case "scale":
                                        r = this._getEffectDelta(i, t), r >= i.duration ? (e.image.scale.x = i.to.x, e.image.scale.y = i.to.y, e.isFinished = !0) : (s = r / i.duration, o = (i.to.x - i.from.x) * s, l = (i.to.y - i.from.y) * s, e.image.scale.x = i.from.x + o, e.image.scale.y = i.from.y + l);
                                        break;
                                    case "rotate":
                                        r = this._getEffectDelta(i, t), r >= i.duration ? (e.image.rotation = eTOYutil.fnGetRadian(i.to), e.isFinished = !0) : (s = r / i.duration, o = this.ROTATE_CW === i.direction ? (i.to - i.from) * s : (i.from - i.to) * s, e.image.rotation = eTOYutil.fnGetRadian(i.from + o));
                                        break;
                                    case "scroll":
                                        r = this._getEffectDelta(i, t), r >= i.duration ? (-1 !== i.to.x && (e.image.x = i.to.x), -1 !== i.to.y && (e.image.y = i.to.y), e.isFinished = !0) : (s = r / i.duration, this.DIR_NONE === i.direction ? (o = (i.to.x - i.from.x) * s, l = (i.to.y - i.from.y) * s, e.image.x = i.from.x + o, e.image.y = i.from.y + l) : (o = 0, l = 0, this.DIR_LEFT === i.direction || this.DIR_LEFT_UP === i.direction || this.DIR_LEFT_DOWN === i.direction ? o = -e.image.width * i.velocity.x * s : this.DIR_RIGHT !== i.direction && this.DIR_RIGHT_UP !== i.direction && this.DIR_RIGHT_DOWN !== i.direction || (o = e.image.width * i.velocity.x * s), this.DIR_UP === i.direction || this.DIR_LEFT_UP === i.direction || this.DIR_RIGHT_UP === i.direction ? l = -e.image.height * i.velocity.y * s : this.DIR_DOWN !== i.direction && this.DIR_LEFT_DOWN !== i.direction && this.DIR_RIGHT_DOWN !== i.direction || (l = e.image.height * i.velocity.y * s), e.image.x = i.from.x + o, e.image.y = i.from.y + l));
                                        break;
                                    case "shake":
                                        if (!1 === e.isSkipable && !0 === this.config.useEffect && (t = 0),
                                            (r = this._getEffectDelta(i, t)) >= i.duration) e.isFinished = !0, e.image.position.set(0, 0), this.WAIT_IMAGE_SHAKE === this.wait() && this.wait(this.WAIT_NONE);
                                        else {
                                            s = r / i.duration;
                                            var u = Math.sin(s * Math.PI * 2 * i.count);
                                            o = u * i.horizontal, l = u * i.vertical, e.image.position.set(o, l)
                                        }
                                        break;
                                    case "transit":
                                        var c = 0;
                                        if (!i.filter && (i.filter = new PIXI.filters.TransitionFilter(i.texture, i.transit, 0), i.filter.autoFit = !1, i.source)) {
                                            var d = i.source.filters || [];
                                            d.push(i.filter), i.source.filters = d
                                        }
                                        r = this._getEffectDelta(i, t), r >= i.duration ? (i.filter.color = 1, i.source && (i.source.filters = [], i.source.visible = !1, e.container.removeChild(i.source)), null !== e.image && (e.image.visible = !0), e.isFinished = !0) : (c = r / i.duration, c = i.ascending ? c : 1 - c, i.filter.color = c);
                                        break;
                                    case "shockwave":
                                        r = this._getEffectDelta(i, t);
                                        var h = e.image.filters.length;
                                        if (e.image.visible = !0, 1 < h) {
                                            for (n = 0; n < h; ++n) {
                                                var f = i.duration * n / h;
                                                r > f && (e.image.filters[n].time = (r - f) / 1e3)
                                            }
                                            r >= 2 * i.duration && (e.image.filters = [], e.isFinished = !0)
                                        } else i.filter.time = r / 1e3, r >= i.duration && (e.image.filters = [], e.isFinished = !0);
                                        break;
                                    case "twist":
                                        e.image.visible = !0;
                                        var p = Math.max(i.angleFrom, i.angleTo);
                                        r = this._getEffectDelta(i, t);
                                        var m = p * r / i.duration;
                                        i.angleFrom > i.angleTo && (m = i.angleFrom - m), i.filter.angle = m, r >= i.duration && (e.image.filters = [], e.isFinished = !0)
                                }
                                break;
                            case "layer":
                                switch (e.renderOp.type) {
                                    case "set":
                                        var g = e.container,
                                            v = e.renderOp.option;
                                        v.queue = !1, this._setLayout(g, v), e.isFinished = !0;
                                        break;
                                    case "move":
                                        if (void 0 === e.container) {
                                            this.WAIT_LAYER_MOVE === this.wait() && this.resetWait(), e.isFinished = !0;
                                            break
                                        }
                                        if (v = e.renderOp.option, (r = this._getEffectDelta(v, t)) >= v.duration) {
                                            if (e.isFinished = !0, void 0 !== v.path) {
                                                var _ = v.path[v.path.length - 1];
                                                e.container.x = _.x, e.container.y = _.y, e.container.alpha = _.alpha
                                            } else e.container.x = v.toX, e.container.y = v.toY;
                                            this.WAIT_LAYER_MOVE === this.wait() && this.resetWait()
                                        } else if (void 0 !== v.path) {
                                            if (0 < v.accel) {
                                                var y = 30 * r / v.duration;
                                                r *= 2 * Math.sin(y * Math.PI / 180)
                                            } else 0 > v.accel && (y = 30 * r / v.duration, r *= 2 - 2 * Math.sin(y * Math.PI / 180));
                                            if ("object" == typeof v.spline) {
                                                s = r / v.duration;
                                                var V = v.spline.calcAt(s);
                                                e.container.x = Math.round(V[0]), e.container.y = Math.round(V[1]), e.container.alpha = V[2]
                                            } else {
                                                var S = v.path.length - 1,
                                                    E = 0,
                                                    I = 0;
                                                for (n = S; n > 0; --n)
                                                    if (r < v.path[n].elapsed && r >= v.path[n - 1].elapsed) {
                                                        E = n - 1, I = v.path[n].elapsed - v.path[n - 1].elapsed, r -= v.path[n - 1].elapsed;
                                                        break
                                                    } var A = E + 1;
                                                A > S && (A = S);
                                                var b = v.path[E],
                                                    T = v.path[A];
                                                e.container.x = b.x + this._calcRatio(b.x, T.x, I, r), e.container.y = b.y + this._calcRatio(b.y, T.y, I, r), e.container.alpha = b.alpha + this._calcRatio(b.alpha, T.alpha, I, r)
                                            }
                                        } else s = r / v.duration, o = (v.toX - v.fromX) * s, l = (v.toY - v.fromY) * s, e.container.x = v.fromX + o, e.container.y = v.fromY + l
                                }
                                break;
                            case "audio":
                                switch (e.renderOp) {
                                    case "play":
                                        if (null !== e.audio && null !== e.audio.src && 1 <= e.audio.readyState) {
                                            try {
                                                !0 === e.audio.paused && (this._playAudio(e.audio), this.logInfo("playSound:" + e.audio.user.source + ", Layer=" + e.container.name))
                                            } catch (e) {
                                                this.logError(e.message)
                                            }
                                            e.isFinished = !0
                                        }
                                        break;
                                    case "stop":
                                        this._stopAudio(e.audio), e.isFinished = !0, this.WAIT_BGM_STOP === this.wait() && this.DEFAULT_LAYERUSAGE_BGM === e.container.usage && this.resetWait(), this.WAIT_SE_STOP === this.wait() && this.DEFAULT_LAYERUSAGE_SE === e.container.usage && this.resetWait(), this.WAIT_VO_STOP === this.wait() && this.DEFAULT_LAYERUSAGE_VO === e.container.usage && this.resetWait();
                                        break;
                                    case "pause":
                                        this._pauseAudio(e.audio), e.isFinished = !0;
                                        break;
                                    case "resume":
                                        this._resumeAudio(e.audio), e.isFinished = !0;
                                        break;
                                    case "fade":
                                    case "fadeIn":
                                        i = e.effect;
                                        var P = i.start || 0;
                                        r = this._getEffectDelta(i, t), r >= i.duration ? (P = i.volume, this._endRenderObj(e), this.DEFAULT_LAYERUSAGE_BGM === e.audio.usage && this._onFadeInBGM(e.audio), this.DEFAULT_LAYERUSAGE_SE === e.audio.usage && this._onFadeInSoundEffect(e.audio), this.DEFAULT_LAYERUSAGE_VO === e.audio.usage && this._onFadeInVoice(e.audio)) : (s = r / i.duration, u = (i.volume - P) * s, P += u), e.audio.volume = this._getFinalVolume(e.audio.user.type, P);
                                        break;
                                    case "fadeOut":
                                        i = e.effect, P = i.volume, r = this._getEffectDelta(i, t), P = r >= i.duration ? 0 : i.volume - i.volume * r / i.duration, e.audio.volume = this._getFinalVolume(e.audio.user.type, P), P <= 0 && (e.audio.pause(), this._endRenderObj(e), this.DEFAULT_LAYERUSAGE_BGM === e.audio.usage && this._onFadeOutBGM(e.audio), this.DEFAULT_LAYERUSAGE_SE === e.audio.usage && this._onFadeOutSoundEffect(e.audio), this.DEFAULT_LAYERUSAGE_VO === e.audio.usage && this._onFadeOutVoice(e.audio))
                                }
                                break;
                            case "video":
                                switch (e.renderOp) {
                                    case "load":
                                    case "play":
                                        if (e.isFinished = !0, !1 === this.config.useAnim && !0 !== e.options.forcePlay) break;
                                        if (void 0 !== e.video && null !== e.video && !0 === e.options.play) {
                                            e.video.user.play = !0;
                                            break
                                        }
                                        var L = this._loadVideoFile(e.options.source, e.options);
                                        break;
                                    case "stop":
                                        e.isFinished = !0, L = this._getVideo(e.index), this._stopVideoFile(L);
                                        break;
                                    case "pause":
                                        L = this._getVideo(e.index), this._pauseVideoFile(L), e.isFinished = !0;
                                        break;
                                    case "resume":
                                        L = this._getVideo(e.index), this._resumeVideoFile(L), e.isFinished = !0;
                                        break;
                                    case "reset":
                                        L = this._getVideo(e.index), this._resetVideoFile(L), e.isFinished = !0
                                }
                                break;
                            case "effect":
                                var D = e.renderOp;
                                switch (D.type) {
                                    case "set":
                                        if (null === D.effect) {
                                            this._setFilterValue(e.filter, D.name, D.value, D.slider), e.isFinished = !0;
                                            break
                                        }
                                        if (i = D.effect, (r = this._getEffectDelta(i, t)) >= i.duration) this._setFilterValue(e.filter, D.name, i.max, D.slider), e.isFinished = !0;
                                        else {
                                            var w = (i.max - i.min) * r / i.duration + i.min;
                                            if (void 0 !== i.step) {
                                                var C = eTOYutil.fnGetPrecision(i.step);
                                                w = eTOYutil.fnRound(w, C)
                                            }
                                            this._setFilterValue(e.filter, D.name, w, D.slider)
                                        }
                                }
                                break;
                            case "particle":
                                switch (D = e.renderOp, D.type) {
                                    case "set":
                                        if (null === D.effect) {
                                            this._setParticleValue(e.particle, D.name, D.value, D.slider), e.isFinished = !0;
                                            break
                                        }
                                        i = D.effect, r = this._getEffectDelta(i, t), r >= i.duration ? (this._setParticleValue(e.particle, D.name, i.max, D.slider), e.isFinished = !0) : (w = (i.max - i.min) * r / i.duration + i.min, void 0 !== i.step && (C = eTOYutil.fnGetPrecision(i.step), w = eTOYutil.fnRound(w, C)), this._setParticleValue(e.particle, D.name, w, D.slider))
                                }
                                break;
                            case "command":
                                switch (D = e.renderOp, D.type) {
                                    case "wait":
                                        r = this._getEffectDelta(D, t), "boolean" == typeof t && !0 === t && !0 === e.isSkipable && (r = D.duration), r >= D.duration && this._endRenderObj(e, this.WAIT_UNTIL);
                                        break;
                                    case "jump":
                                        if (this.SCRIPT_END !== D.scriptID && !0 === this._isScriptLoaded(D.scriptID) && !0 === this._jump(D.label, D.file)) e.isFinished = !0;
                                        else {
                                            if (!0 === t) break;
                                            r = this._getEffectDelta(D, t), r >= D.duration && (e.isFinished = !0, this.logFatal("Abort Jump. Cannot find a label. Label=" + D.label + ", File=" + D.file))
                                        }
                                        break;
                                    case "call":
                                        if (this.SCRIPT_END !== D.scriptID && !0 === this._isScriptLoaded(D.scriptID) && !0 === this._call(D.label, D.file)) e.isFinished = !0;
                                        else {
                                            if (!0 === t) break;
                                            r = this._getEffectDelta(D, t), r >= D.duration && (e.isFinished = !0, this.logFatal("Abort Call. Cannot find a label. Label=" + D.label + ", File=" + D.file))
                                        }
                                        break;
                                    case "save":
                                        1 === this.renderQueue.length && (e.isFinished = !0, "function" == typeof D.onSave && (D.onSave(D.slot, D.quick, D.storage), this.trigger("saved", D.slot, D.quick, D.storage)));
                                        break;
                                    case "load":
                                        1 === this.renderQueue.length && this.SCRIPT_END !== D.scriptID && !0 === this._isScriptLoaded(D.scriptID) && (e.isFinished = !0, "function" == typeof D.onLoad && (D.onLoad(D), this.WAIT_LOAD === this.wait() && this.wait(this.WAIT_NONE), this.trigger("loaded", D.slot, D.quick, D.storage)))
                                }
                                break;
                            case "ui":
                                if (null === e.renderOp) break;
                                D = e.renderOp;
                                var x = {
                                    type: e.type,
                                    subType: D.type,
                                    option: D.option
                                };
                                switch (D.type) {
                                    case "open":
                                        e.isFinished = !0, "interface" === D.option.layer ? (this.addInterface(x), this._openUI(D.option)) : this.logError("openUI:Unsupported layer type=" + D.option.layer);
                                        break;
                                    case "close":
                                        e.isFinished = !0, this._closeUI();
                                        break;
                                    case "divider":
                                        if (e.isFinished = !0, "interface" === D.option.layer) {
                                            var O = document.createElement("div");
                                            O.classList.add("divider"), this.elements.panel.appendChild(O), this.addInterface(x), this.showInterface()
                                        } else this.logError("makeUI:" + D.type + ", Unsupported layer type=" + D.option.layer);
                                        break;
                                    case "dialog":
                                        e.isFinished = !0, "interface" === D.option.layer ? (eTOYutil.fnPrompt(D.option.title, D.option.message, D.option.locale, D.option.onResult, D.option.inputType, D.option.inputOptions), this.addInterface(x)) : this.logError("makeUI:" + D.type + ", Unsupported layer type=" + D.option.layer);
                                        break;
                                    case "confirm":
                                        e.isFinished = !0, "interface" === D.option.layer ? (eTOYutil.fnConfirm(D.option.title, D.option.message, D.option.locale, D.option.onResult), this.addInterface(x)) : this.logError("makeUI:" + D.type + ", Unsupported layer type=" + D.option.layer);
                                        break;
                                    case "text":
                                        if (e.isFinished = !0, "interface" === D.option.layer) O = document.createElement("div"), O.classList.add("wv-text"), O.appendChild(document.createTextNode(D.option.text)), this.elements.panel.appendChild(O), this.addInterface(x), this.showInterface();
                                        else {
                                            var k = new PIXI.Text(D.option.text, D.option.fontStyle);
                                            k.x = D.option.x, k.y = D.option.y, k.user = x, e.container.addChild(k)
                                        }
                                        break;
                                    case "button":
                                        if (e.isFinished = !0, void 0 !== (v = D.option) && "interface" === v.layer) {
                                            O = document.createElement("div"), O.classList.add("select-link"), !0 === e.isBundle && O.classList.add("d-inline-block");
                                            var R = document.createElement("a");
                                            if (void 0 !== v.image && null !== v.image) {
                                                var F = document.createElement("img");
                                                F.src = v.image, F.width = v.width, F.height = v.height, R.appendChild(F)
                                            }
                                            R.classList.add("wv-link"), R.href = "javascript:void(0);", R.setAttribute("data-file", v.file), R.setAttribute("data-label", v.label), R.setAttribute("data-url", "null"), void 0 !== v.text && null !== v.text && (R.title = v.text, k = document.createTextNode(v.text), R.appendChild(k)), R.addEventListener("click", function(e) {
                                                if (Vinos.WAIT_INPUT === Vinos.wait()) {
                                                    e.stopPropagation(), "function" == typeof v.OnClick && v.OnClick(), void 0 !== v.OnClickExp && Vinos.eval(v.OnClickExp);
                                                    var t = {
                                                        file: this.getAttribute("data-file"),
                                                        label: this.getAttribute("data-label"),
                                                        url: this.getAttribute("data-url")
                                                    };
                                                    Vinos._onClickInterface(t)
                                                }
                                            }), void 0 !== v && void 0 !== v.OnEnterMsg && 0 < v.OnEnterMsg.length && "null" !== v.OnEnterMsg && (R.setAttribute("data-content", v.OnEnterMsg), $(R).popover({
                                                trigger: "hover"
                                            })), void 0 !== v && void 0 !== v.OnEnterExp && (R.onmouseover = function() {
                                                Vinos.eval(v.OnEnterExp)
                                            }), void 0 !== v && void 0 !== v.OnLeaveExp && (R.onmouseout = function() {
                                                Vinos.eval(v.OnLeaveExp)
                                            }), O.appendChild(R), this.elements.panel.appendChild(O), x._element = O, this.addInterface(x), this.showInterface()
                                        } else {
                                            var U = e.image;
                                            U.visible = !0, U.interactive = !0, U.buttonMode = !0, U.cursor = "pointer", U.user = x;
                                            var M = function(e) {
                                                Vinos.WAIT_INPUT === Vinos.wait() && (e.stopPropagation(), void 0 !== v && "function" == typeof v.OnClick && v.OnClick(), void 0 !== v && void 0 !== v.OnClickExp && Vinos.eval(v.OnClickExp), Vinos.setSelected(this))
                                            };
                                            if (U.on("tap", M), U.on("click", M), void 0 !== v) {
                                                var N = !1;
                                                "string" == typeof v.text && 0 < v.text.length && "null" !== v.text && (k = new PIXI.Text(v.text, this.product.selectTitleStyle), k.x = 0, k.y = 0, k.onenter = !1, k.onenter = !1, k.width > U.width && (U.width = k.width), k.height > U.height && (U.height = k.height), U.addChild(k)), "string" == typeof v.OnEnterMsg && 0 < v.OnEnterMsg.length && "null" !== v.OnEnterMsg && (k = new PIXI.Text(v.OnEnterMsg, this.defaultPixiFontStyle), k.visible = !1, k.x = v.hintPos.x, k.y = v.hintPos.y, k.onenter = !0, U.addChild(k), N = !0), "string" == typeof v.OnLeaveMsg && 0 < v.OnLeaveMsg.length && "null" !== v.OnLeaveMsg && (k = new PIXI.Text(v.OnLeaveMsg, this.defaultPixiFontStyle), k.visible = !1, k.x = v.hintPos.x, k.y = v.hintPos.y, k.onleave = !0, U.addChild(k), N = !0), void 0 !== v && void 0 !== v.OnEnterExp && (N = !0), void 0 !== v && void 0 !== v.OnLeaveExp && (N = !0), !0 === N && (U.on("mouseover", function() {
                                                    for (void 0 !== this.user.OnEnterExp && Vinos.eval(this.user.OnEnterExp), n = 0; n < this.children.length; ++n) {
                                                        var e = this.children[n];
                                                        !0 === e.onenter ? e.visible = !0 : e.visible = !1
                                                    }
                                                }), U.on("mouseout", function() {
                                                    void 0 !== this.user.OnLeaveExp && Vinos.eval(this.user.OnLeaveExp);
                                                    for (var e = 0; e < this.children.length; ++e) {
                                                        var t = this.children[e];
                                                        !0 === t.onleave ? t.visible = !0 : t.visible = !1
                                                    }
                                                }))
                                            }
                                        }
                                        break;
                                    case "switch":
                                        if (e.isFinished = !0, "interface" === D.option.layer) {
                                            O = document.createElement("div"), O.classList.add("switch"), O.setAttribute("data-effect", D.option.target), O.setAttribute("data-effect-attr", D.option.name);
                                            var B = document.createElement("span");
                                            B.classList.add("switch-name");
                                            var G = document.createTextNode(D.option.name);
                                            B.appendChild(G), O.appendChild(B), R = document.createElement("a"), R.href = "javascript:void(0);", R.classList.add("switch-bg"), D.option.value && R.classList.add("on");
                                            var Y = document.createElement("span");
                                            Y.classList.add("switch-thumb"), R.appendChild(Y), R.addEventListener("click", function(e) {
                                                e.stopPropagation();
                                                var t = !this.classList.contains("on");
                                                this.classList.toggle("on"), Vinos._setEffectValue(D.option.target, D.option.name, t)
                                            }), O.appendChild(R), this.elements.panel.appendChild(O), this.addInterface(x), this.showInterface()
                                        } else this.logError("makeUI:" + D.type + ", Unsupported layer type=" + D.option.layer);
                                        break;
                                    case "slider":
                                        if (e.isFinished = !0, "interface" === D.option.layer) {
                                            Q = eTOYutil.fnReplaceStr(D.option.name, ".", "-"), Q = eTOYutil.fnReplaceStr(Q, "[", "_"), Q = eTOYutil.fnReplaceStr(Q, "]", "_"), O = document.createElement("div"), O.classList.add("slider"), O.setAttribute("data-effect", D.option.target), O.setAttribute("data-effect-attr", D.option.name), B = document.createElement("span"), B.classList.add("slider-name"), G = document.createTextNode(D.option.name), B.appendChild(G), O.appendChild(B);
                                            var W = document.createElement("span");
                                            W.id = "slider-" + Q, W.setAttribute("data-min", D.option.min), W.setAttribute("data-max", D.option.max), W.setAttribute("data-step", D.option.step);
                                            var j = document.createElement("span");
                                            j.id = "filler-" + Q, j.classList.add("bg-filler"), j.style.width = (D.option.value - D.option.min) / (D.option.max - D.option.min) * 100 + "%", W.appendChild(j), w = document.createElement("span"), w.classList.add("slider-value");
                                            var X = document.createTextNode(D.option.value);
                                            w.appendChild(X), O.appendChild(B), O.appendChild(W), O.appendChild(w), this.elements.panel.appendChild(O), W = $("#" + W.id).slider({
                                                min: D.option.min,
                                                max: D.option.max,
                                                step: D.option.step,
                                                value: D.option.value,
                                                animate: !0,
                                                slide: function(e, t) {
                                                    e.stopPropagation(), j.style.width = (t.value - D.option.min) / (D.option.max - D.option.min) * 100 + "%", w.innerHTML = t.value, Vinos._setEffectValue(D.option.target, D.option.name, t.value)
                                                }
                                            }), this.addInterface(x), this.showInterface()
                                        } else this.logError("makeUI:" + D.type + ", Unsupported layer type=" + D.option.layer);
                                        break;
                                    case "dropdown":
                                        if (e.isFinished = !0, "interface" === D.option.layer) {
                                            var Q = eTOYutil.fnReplaceStr(D.option.name, ".", "-");
                                            Q = eTOYutil.fnReplaceStr(Q, "[", "_"), Q = eTOYutil.fnReplaceStr(Q, "]", "_"), O = document.createElement("div"), O.classList.add("slider"), O.setAttribute("data-effect", D.option.target), O.setAttribute("data-effect-attr", D.option.name), B = document.createElement("label"), B.classList.add("label"), B.htmlFor = "select-" + Q, G = document.createTextNode(D.option.name), B.appendChild(G);
                                            var q = document.createElement("select");
                                            if (q.id = "select-" + Q, void 0 !== D.option.labels)
                                                for (n = 0; n < D.option.labels.length; ++n) v = document.createElement("option"), void 0 !== D.option.values && null !== D.option.values[n] && (v.value = D.option.values[n], D.option.value == D.option.values[n] && (v.selected = !0)), v.appendChild(document.createTextNode(D.option.labels[n])), q.appendChild(v);
                                            O.appendChild(B), O.appendChild(q), this.elements.panel.appendChild(O), this.addInterface(x), this.showInterface(), $("#select-" + Q).selectmenu({
                                                select: function(e, t) {
                                                    e.stopPropagation(), Vinos._setEffectValue(D.option.target, D.option.name, t.item.value)
                                                }
                                            })
                                        } else this.logError("makeUI:" + D.type + ", Unsupported layer type=" + D.option.layer);
                                        break;
                                    case "select":
                                        if (e.isFinished = !0, "interface" === D.option.layer) {
                                            O = document.createElement("div"), O.classList.add("select"), B = document.createElement("span"), B.classList.add("label"), G = document.createTextNode(D.option.title), B.appendChild(G), O.appendChild(B);
                                            var H = document.createElement("ul");
                                            for (n = 0; n < D.option.values.length; ++n) {
                                                var z = document.createElement("li");
                                                v = D.option.values[n], R = document.createElement("a"), k = document.createTextNode(v.text), R.classList.add("wv-link"), R.href = "javascript:void(0);", R.title = v.text, R.setAttribute("data-file", v.file), R.setAttribute("data-label", v.label), R.setAttribute("data-url", v.url), R.appendChild(k), n !== D.option.select && !0 !== v.selected || R.addClass("selected"), R.addEventListener("click", function(e) {
                                                    if (Vinos.WAIT_INPUT === Vinos.wait()) {
                                                        e.stopPropagation();
                                                        var t = {
                                                            file: this.getAttribute("data-file"),
                                                            label: this.getAttribute("data-label"),
                                                            url: this.getAttribute("data-url")
                                                        };
                                                        Vinos._onClickInterface(t)
                                                    }
                                                }), z.appendChild(R), H.appendChild(z)
                                            }
                                            O.appendChild(H), this.elements.panel.appendChild(O), x._element = O, this.addInterface(x), this.showInterface()
                                        } else {
                                            var K = 0,
                                                J = 0,
                                                Z = new PIXI.Graphics;
                                            Z.user = x, e.container.addChild(Z), k = new PIXI.Text(D.option.text, this.product.selectTitleStyle), e.container.addChild(k), k.width > K && (K = k.width), J += k.height + 2 * this.DEFAULT_SELECT_LINEGAP;
                                            var ee = 0;
                                            for (n = 0; n < D.option.values.length; ++n) {
                                                v = new PIXI.Text(D.option.values[n].text, this.product.selectOptionStyle), v.x = ie, v.y = ne + 20 * n + 20, e.container.addChild(v), v.hitArea = new PIXI.Rectangle(0, 0, v.width, v.height), v.interactive = !0, v.buttonMode = !0, v.cursor = "pointer", v.user = {
                                                    index: n + 1,
                                                    file: D.option.values[n].file,
                                                    label: D.option.values[n].label
                                                };
                                                var te = function(e) {
                                                    Vinos.WAIT_INPUT === Vinos.wait() && (e.stopPropagation(), Vinos.setSelected(this))
                                                };
                                                v.on("tap", te), v.on("click", te), v.width > K && (K = v.width), ee = v.height, J += v.height + this.DEFAULT_SELECT_LINEGAP
                                            }
                                            K += Math.round(.4 * K), K > this.elements.canvas.width && (K = this.elements.canvas.width);
                                            var ie = (this.elements.canvas.width - K) / 2,
                                                ne = (this.elements.canvas.height - J) / 2;
                                            for (Z.beginFill(0, .75), Z.drawRoundedRect(ie, ne, K, J, 5), Z.endFill(), k.x = ie + Math.round(.1 * K), k.y = ne + this.DEFAULT_SELECT_LINEGAP, n = 2; n < e.container.children.length; ++n) v = e.container.getChildAt(n), v.x = ie + Math.round(.2 * K), v.y = ne + this.DEFAULT_SELECT_LINEGAP + (ee + this.DEFAULT_SELECT_LINEGAP) * (n - 1), v.hitArea = new PIXI.Rectangle(0, 0, v.width, v.height)
                                        }
                                        break;
                                    case "link":
                                        e.isFinished = !0, "interface" === D.option.layer ? (O = document.createElement("div"), O.classList.add("select-link"), R = document.createElement("a"), k = document.createTextNode(D.option.text), R.href = "javascript:void(0);", R.title = D.option.text, R.setAttribute("data-file", D.option.file), R.setAttribute("data-label", D.option.label), R.setAttribute("data-url", D.option.url), R.appendChild(k), R.addEventListener("click", function(e) {
                                            if (Vinos.WAIT_INPUT === Vinos.wait()) {
                                                e.stopPropagation();
                                                var t = {
                                                    file: this.getAttribute("data-file"),
                                                    label: this.getAttribute("data-label"),
                                                    url: this.getAttribute("data-url")
                                                };
                                                Vinos._onClickInterface(t)
                                            }
                                        }), O.appendChild(R), this.elements.panel.appendChild(O), this.addInterface(x), this.showInterface()) : this.logError("makeUI:" + D.type + ", Unsupported layer type=" + D.option.layer)
                                }
                        }
                        return e.isFinished
                    },
                    _isRenderType: function(e, t, i, n) {
                        return i = i || "*", null !== this._checkRenderObj(e, t, i, n)
                    },
                    _checkRenderObj: function(e, t, i, n) {
                        return "*" !== t && t !== e.type || !("*" === i || void 0 !== e.renderOp && i === e.renderOp.type || void 0 !== e.renderOp.effect && null !== e.renderOp.effect && i === e.renderOp.effect.type) || void 0 !== n && e.index !== n ? null : e
                    },
                    _checkRenderObjByName: function(e, t, i) {
                        return "*" !== t && t !== e.type || "*" !== i && (void 0 === e.image || i !== e.image.name) ? null : e
                    },
                    _findRenderObj: function(e, t, i) {
                        e = e || "*", t = t || "*";
                        for (var n = 0; n < this.renderQueue.length; ++n) {
                            var r = this.renderQueue[n];
                            if (!0 === Array.isArray(r)) {
                                for (var a = 0; a < r.length; ++a)
                                    if (!0 === Array.isArray(r[a]))
                                        for (var s = 0; s < r[a].length; ++s) {
                                            var o = this._checkRenderObj(r[a][s], e, t, i);
                                            if (null !== o) return o
                                        } else if (null !== (o = this._checkRenderObj(r[a], e, t, i))) return o
                            } else if (null !== (o = this._checkRenderObj(r, e, t, i))) return o
                        }
                        return null
                    },
                    _findRenderObjByName: function(e, t) {
                        e = e || "*";
                        for (var i = 0; i < this.renderQueue.length; ++i) {
                            var n = this.renderQueue[i];
                            if (!0 === Array.isArray(n)) {
                                for (var r = 0; r < n.length; ++r)
                                    if (!0 === Array.isArray(n[r]))
                                        for (var a = 0; a < n[r].length; ++a) {
                                            var s = this._checkRenderObjByName(n[r][a], e, t);
                                            if (null !== s) return s
                                        } else if (null !== (s = this._checkRenderObjByName(n[r], e, t))) return s
                            } else if (null !== (s = this._checkRenderObjByName(n, e))) return s
                        }
                        return null
                    },
                    loop: null,
                    _afterImageLoaded: null,
                    clearHistory: function() {
                        this.history = []
                    },
                    setHistoryEnabled: function(e) {
                        this.current.doHistory = e
                    },
                    getHistoryEnabled: function() {
                        return this.current.doHistory
                    },
                    getHistory: function(e, t) {
                        if (t = t || {
                                start: -1,
                                end: -1,
                                length: this.DEFAULT_HISTORY_PAGESIZE
                            }, e.innerHTML = "", e.classList.remove("shadow"), e.classList.remove("outline"), !1 === this.current.showHistory) return {
                            start: -1,
                            end: -1,
                            length: -1
                        };
                        if (!0 === this.config.dialogShadow && e.classList.add("shadow"), !0 === this.config.dialogOutline && e.classList.add("outline"), 0 === this.history.length) return {
                            start: -1,
                            end: -1,
                            length: 0
                        };
                        for (var i = -1 === t.end ? this.history.length - 1 : t.end, n = -1 === t.start ? i - t.length > 0 ? i - t.length : 0 : t.start, r = "", a = i; a >= n; --a) r = this.history[a] + r;
                        return e.innerHTML = r, {
                            start: n,
                            end: i,
                            length: i - n + 1
                        }
                    },
                    historyVisible: function(e) {
                        return void 0 !== e && (this.current.showHistory = e), this.current.showHistory
                    },
                    resetFontStyle: function() {
                        this.product && this.product.messageFontSize && (this.defaultFontStyle.fontSize = this._getFontSize(this.product.messageFontSize)), this.setFontStyle(this.defaultFontStyle)
                    },
                    setFontStyle: function(e) {
                        this.current.fontStyle = $.extend({}, this.current.fontStyle, e), this.elements.name.style.fontSize = "1em", this.elements.dialogText.style.fontSize = this._getFontEmSize(this.current.fontStyle.fontSize) + "em"
                    },
                    _getFontSize: function(e) {
                        if ("object" == typeof e) {
                            if (5 !== e.length) return this.DEFAULT_FONTSIZE;
                            var t = this.runtime.width || $(window).width();
                            e = t <= 576 ? e[0] : t <= 768 ? e[1] : t <= 992 ? e[2] : t <= 1200 ? e[3] : e[4]
                        }
                        return e
                    },
                    _resizeFontSize: function() {
                        this.product.messageFontSize && (this.defaultFontStyle.fontSize = this._getFontSize(this.product.messageFontSize));
                        var e = this.defaultFontStyle.fontSize;
                        e *= Math.min(this.product.hRatio, this.product.vRatio), e = Math.min(e, this.DEFAULT_MAX_FONTSIZE), e = Math.max(e, this.DEFAULT_MIN_FONTSIZE), this.elements.baseElement.style.fontSize = e + "px"
                    },
                    _getFontEmSize: function(e) {
                        return e / this.defaultFontStyle.fontSize
                    },
                    clearAll: function() {
                        this.clearDialog(), this._clearLayouts(), this._clearParticles(), this._clearVideo()
                    },
                    clearDialog: function() {
                        this.current.dialogText = "", this.current.dialogRuby = [], this.current.dialogIng = !1, this.current.dialogName = "", this.current.dialogNameClass = "", this.current.dialogVoice = "", this.current.dialogPause = !1, this.current.dialogPauseCh = [], this.elements.name.innerHTML = this.product.htmlNamePrefix + this.getNameFontStyle() + this.product.htmlNameClassPrefix + this.product.htmlNameClassPostfix + this.product.htmlNamePostfix, this.elements.dialogText.innerHTML = this.product.htmlDialogPrefix + this.getDialogFontStyle() + this.product.htmlDialogPostfix, this.elements.face.innerHTML = "", this.applyDialogOpaque()
                    },
                    addDialog: function(e, t, i, n, r) {
                        r = r || this.product.dialogType || "html", "html" !== r && (e = eTOYutil.fnReplaceEscapeHtml(e)), e = e.replace(/\r\n/g, "<br>"), e = "jp" === this.product.locale || "ja" === this.product.locale ? e.replace(/\u3000/g, "&#x3000;") : e.replace(/\s/g, "&nbsp;"), 0 < e.length && (this.current.dialogPrev = this.current.dialogText);
                        var a = 0 <= e.indexOf("<ruby>"),
                            s = this._calcSceneDelay(e.length, !0);
                        s > this.runtime.sceneDelay && (this.runtime.sceneDelay = s);
                        var o = this.product.htmlNamePrefix + (0 < t.length ? " on" : " empty") + this.getNameFontStyle() + this.product.htmlNameClassPrefix + t + " " + i + (i && 0 < i.length ? "' data-voice='" + n + "' data-charname='" + t : "") + this.product.htmlNameClassPostfix + t + this.product.htmlNamePostfix;
                        this.elements.name.innerHTML = o;
                        var l = this.product.htmlDialogPrefix + (a ? " wv-ruby" : "") + this.getDialogFontStyle() + e + this.product.htmlDialogPostfix,
                            u = null;
                        u = 0 < t.length ? o + l : l, !0 === this.current.doHistory ? (this.history.push(u), this.DEFAULT_MAX_HISTORY < this.history.length && this.history.splice(0, 1)) : this.history[this.history.length] = u, o = this.product.htmlDialogPrefix + (a ? " wv-ruby" : "") + this.getDialogFontStyle() + this.product.htmlDialogPostfix, this.elements.dialogText.innerHTML = o, this.current.dialog && this.current.dialog instanceof Typed && (this.current.dialog.destroy(), this.current.dialog = null);
                        var c = this._calcTypeDelay();
                        if (1 < c) {
                            var d = this.product.htmlDialogPrefix + (a ? " wv-ruby" : "") + this.getDialogFontStyle() + e + (this.runtime.isAutoPlay ? "" : this.runtime.caret) + this.product.htmlDialogPostfix,
                                h = {
                                    strings: [e],
                                    loop: !1,
                                    showCursor: !1,
                                    typeSpeed: c,
                                    contentType: r,
                                    onComplete: function(e) {
                                        e.stop(), e.destroy(), Vinos.current.dialog = null, Vinos.current.dialogIng = !1, Vinos.elements.dialogText.innerHTML = d
                                    }
                                };
                            !0 === this.current.dialogPause && (h.onCharTyped = function(e) {
                                for (var t = 0; t < Vinos.current.dialogPauseCh.length; ++t) e == Vinos.current.dialogPauseCh[t].ch && (Vinos.current.dialog.stop(), setTimeout(function() {
                                    null !== Vinos.current.dialog && Vinos.current.dialog.start()
                                }, Vinos.current.dialogPauseCh[t].delay))
                            }), this.current.dialog = new Typed(".wv-message", h), this.current.dialogIng = !0
                        } else this.elements.dialogText.innerHTML = l;
                        if (this.elements.face.innerHTML = "", this.current.showFace && 0 < this.current.dialogName.length && 0 < this.current.dialogName.length) {
                            for (var f = null, p = 0; p < this.containers.length; ++p) {
                                var m = this.containers[p].container;
                                if (void 0 !== m && (f = this.findCharacterInContainer(m, this.current.dialogName))) break
                            }
                            if (f && 0 < f.width) {
                                var g = f.scale.x,
                                    v = f.scale.y,
                                    _ = this.current.faceScale;
                                f.width * _ < this.DEFAULT_FACE_MIN_WIDTH && (_ = this.DEFAULT_FACE_MIN_WIDTH / f.width), 1 < _ && (_ = 1);
                                var y = f.width * _,
                                    V = f.height * _;
                                f.scale.set(_, _);
                                var S = null;
                                !0 === this.current.cropFace ? (S = new Image, S.src = this._cropTransparent(this.app.renderer.plugins.extract.pixels(f.parent), y, V)) : S = this.app.renderer.plugins.extract.image(f.parent), S.classList.add("wv-face-image");
                                var E = (S.height ? S.height : f.height) - $(this.elements.face).parent().parent().height();
                                0 < E && (S.style.marginBottom = "-" + E + "px"), this.elements.face.appendChild(S), f.scale.set(g, v)
                            }
                        }
                        this.applyDialogOpaque(), void 0 === t ? this.logInfo("addDialog:name=" + t + ", length=" + e.length) : this.logInfo("addDialog:length=" + e.length)
                    },
                    _cropTransparent: function(e, t, i) {
                        t = Math.floor(t), i = Math.floor(i);
                        for (var n = t, r = i, a = -1, s = -1, o = 0, l = 0, u = 0; u < e.length; u += 4) 0 !== e[u + 3] && (n = Math.min(o, n), a = Math.max(o, a), r = Math.min(l, r), s = Math.max(l, s)), o++, t <= o && (o = 0, l++);
                        var c = a - n,
                            d = s - r,
                            h = t / 10,
                            f = i / 10,
                            p = t - c,
                            m = i - d,
                            g = document.createElement("canvas"),
                            v = null;
                        if (p < h && m < f) return g.width = t, g.height = i, v = g.getContext("2d").createImageData(g.width, g.height), v.data.set(e), g.getContext("2d").putImageData(v, 0, 0), g.toDataURL();
                        var _ = new Uint8Array(c * d * 4),
                            y = 4 * t,
                            V = 4 * n,
                            S = 0;
                        u = r * y + V;
                        var E = 0;
                        for (l = r; l < s; ++l) {
                            for (o = n, E = u; o < a; ++o, E += 4) _[S++] = e[E], _[S++] = e[E + 1], _[S++] = e[E + 2], _[S++] = e[E + 3];
                            u += y
                        }
                        return g.width = c, g.height = d, v = g.getContext("2d").createImageData(g.width, g.height), v.data.set(_), g.getContext("2d").putImageData(v, 0, 0), this.logDebug("_cropTransparent:length=" + e.length + "->" + _.length + ", Width=" + t + "->" + c + ", Height=" + i + "->" + d), g.toDataURL()
                    },
                    getMaxDialogLines: function() {
                        return this.current.maxDialogLines
                    },
                    setMaxDialogLines: function(e) {
                        return void 0 === e ? null : (0 > e && (e = 0), this.DEFAULT_MAX_DIALOG_LINES < e && (e = this.DEFAULT_MAX_DIALOG_LINES), this.current.maxDialogLines = e, this.logInfo("setMaxDialogLines=" + this.current.maxDialogLines), this.current.maxDialogLines)
                    },
                    setDialog: function(e) {
                        e = e || {}, "string" == typeof e && (e = this._parseObject(e)), this.logInfo("setDialog"), !0 === e.show ? this._showDialog() : !1 === e.show && this._hideDialog(), "number" == typeof e.maxDialogLines && this.setMaxDialogLines(e.maxDialogLines), this.elements.dialog.classList.remove("show-face"), $(this.elements.face).parent()[0].classList.remove("face-on"), !0 === e.showFace ? (this.current.showFace = !0, this.elements.dialog.classList.add("show-face"), $(this.elements.face).parent()[0].classList.add("face-on")) : !1 === e.showFace && (this.current.showFace = !1), !0 === e.cropFace ? this.current.cropFace = !0 : !1 === e.cropFace && (this.current.cropFace = !1), "number" == typeof e.faceScale && 0 < e.faceScale && e.faceScale <= 1 && (this.current.faceScale = e.faceScale)
                    },
                    setCaretClass: function(e) {
                        e = e || "", this.runtime.caret = "<span class='wv-caret " + e + "'></span>"
                    },
                    showDialog: function() {
                        this.logInfo("showDialog"), this._showDialog()
                    },
                    _showDialog: function() {
                        this.elements.dialogBox.style.display = "block", this.current.isDialogShown = !0, this.trigger("dialogVisible", this.current.isDialogShown)
                    },
                    hideDialog: function() {
                        this.logInfo("hideDialog"), this._hideDialog()
                    },
                    _hideDialog: function() {
                        this.elements.dialogBox.style.display = "none", this.current.isDialogShown = !1, this.trigger("dialogVisible", this.current.isDialogShown)
                    },
                    _showCanvas: function() {
                        this.elements.canvas.style.display = "block", this.current.isCanvasShown = !0
                    },
                    _hideCanvas: function() {
                        this.elements.canvas.style.display = "none", this.current.isCanvasShown = !1
                    },
                    _showVideo: function() {
                        this.current.isVideoShown = !0
                    },
                    _hideVideo: function(e) {
                        this.current.isVideoShown = !1, e ? this.elements.viewport.removeChild(e) : $(this.elements.viewport).find(".wv-video").remove();
                        var t = this._getLayout(this.DEFAULT_LAYERUSAGE_VD);
                        if (null !== t)
                            if (e) {
                                for (var i = t.elements.length; i--;)
                                    if (e.user.name === t.elements[i].name) {
                                        t.elements.splice(i, 1);
                                        break
                                    }
                            } else t.elements = []
                    },
                    isDialogVisible: function() {
                        return this.current.isDialogShown
                    },
                    _getBaseURL: function() {
                        return void 0 === this.product || null === this.product || void 0 === this.product.baseURL || null === this.product.baseURL ? this.contentURL : this.contentURL + this.product.baseURL
                    },
                    _getURI: function(e, t, i) {
                        var n = 0 <= e.indexOf(".") ? e : e + t;
                        return void 0 === i || null === i || 0 === i.length ? n : n + "?v=" + i
                    },
                    _getScriptURL: function(e, t) {
                        if (void 0 !== this.current.localePostfix && null !== this.current.localePostfix && 0 < this.current.localePostfix.length)
                            if (0 <= e.indexOf(".")) {
                                var i = e.lastIndexOf(".");
                                e = e.substr(0, i) + this.current.localePostfix + e.substr(i)
                            } else e += this.current.localePostfix;
                        return this.current.localeURL = this.current.localeURL || "", this._getBaseURL() + this.product.scriptURL + this.current.localeURL + this._getURI(e, this.product.scriptExt, t || this.getContentVersion(!0))
                    },
                    _getImageURL: function(e) {
                        return this._getBaseURL() + this.product.imageURL + this._getURI(e, this.product.imageExt, this.getContentVersion(!0))
                    },
                    _getEffectImageURL: function(e) {
                        return this.DEFAULT_EFFECT_URL + this._getURI(e, this.DEFAULT_EFFECT_EXT, this.getContentVersion(!0))
                    },
                    _getVideoURL: function(e) {
                        return this._getBaseURL() + this.product.videoURL + this._getURI(e, this.product.videoExt, this.getContentVersion(!0))
                    },
                    _getSoundURL: function(e, t) {
                        switch (e) {
                            case this.DEFAULT_LAYERUSAGE_SE:
                                return this._getBaseURL() + this.product.seURL + this._getURI(t, this.product.seExt, this.getContentVersion(!0));
                            case this.DEFAULT_LAYERUSAGE_VO:
                                return this._getBaseURL() + this.product.voURL + this._getURI(t, this.product.voExt, this.getContentVersion(!0));
                            case this.DEFAULT_LAYERUSAGE_BGM:
                            default:
                                return this._getBaseURL() + this.product.bgmURL + this._getURI(t, this.product.bgmExt, this.getContentVersion(!0))
                        }
                    },
                    getSceneLine: function(e, t) {
                        var i = e;
                        return "string" == typeof i && (i = this._findSceneAt(i, t ? this.game : this.runtime.scripts)), i
                    },
                    _findPrevScene: function() {
                        var e = this.current.startNo - 2;
                        for (this.logInfo("_findPrevScene:from=" + e); e >= 0;) {
                            var t = this.runtime.scripts[e];
                            if (0 < t.length && "*" === t[0]) return e;
                            e--
                        }
                        return -1
                    },
                    _findScene: function(e, t) {
                        if (e = e || null, t = t || null, null === e && null === t) return {
                            lineNo: -1,
                            scriptID: this.SCRIPT_END
                        };
                        if (null === t) return {
                            lineNo: this._findSceneAtRuntime(e),
                            scriptID: this.current.scriptID
                        };
                        if (t === this.product.original || t === this.product.script) return null === e ? {
                            lineNo: 0,
                            scriptID: this.SCRIPT_GAME
                        } : {
                            lineNo: this._findSceneAt(e, this.game),
                            scriptID: this.SCRIPT_GAME
                        };
                        if (null === e) {
                            var i = this._loadScript(t);
                            return {
                                lineNo: 0,
                                scriptID: i
                            }
                        }
                        var n = e + "@" + t,
                            r = this._findSceneAtRuntime(n, !0);
                        return 0 <= r ? {
                            lineNo: r,
                            scriptID: this.current.scriptID
                        } : (i = this._loadScript(t), this.SCRIPT_END !== i && !0 === this._isScriptLoaded(i) ? {
                            lineNo: this._findSceneAt(e, this.scripts[i].lines),
                            scriptID: i
                        } : (this.logError("Cannot find a sceneName. name=" + e), {
                            lineNo: -1,
                            scriptID: this.SCRIPT_END
                        }))
                    },
                    _findSceneAtRuntime: function(e, t) {
                        return this._findSceneAt(e, this.runtime.scripts, t)
                    },
                    _findSceneAt: function(e, t, i) {
                        for (var n = void 0 !== i && i, r = 0, a = new RegExp(/[@|\[]label\s+[name=]+?"(.*?)"/gi); r < t.length;) {
                            var s = t[r];
                            if (0 !== s.length) {
                                var o = s.charAt(0);
                                if ("*" === o) {
                                    var l = s.split("|");
                                    if (e === l[0] || e === l[0].substring(1)) return this.logDebug("find(*) Label=" + e + ", at=" + r), r
                                }
                                if ("@" === o || "[" === o) {
                                    var u = s.match(a);
                                    if (null !== u && 0 < u.length && e === RegExp.$1) return this.logDebug("find(@) Label=" + e + ", at=" + r), r
                                }
                                r++
                            } else r++
                        }
                        return n || this.logWarn("Cannot find Label=" + e), -1
                    },
                    _findNearstCommand: function(e) {
                        var t = this._callPluginFunc("findNearstCommand", e, this.runtime.scripts, this.current.lineNo);
                        return t = t || -1
                    },
                    _setSaveable: function(e) {
                        this.getIsPlayBack() || (this.current.saveable = e,
                            null !== this.elements.saveBtn && (!0 === e ? this.elements.saveBtn.classList.remove("disabled") : this.elements.saveBtn.classList.add("disabled")), null !== this.elements.qsaveBtn && (!0 === e ? this.elements.qsaveBtn.classList.remove("disabled") : this.elements.qsaveBtn.classList.add("disabled")))
                    },
                    _setLoadable: function(e) {
                        this.getIsPlayBack() || (this.current.loadable = e, null !== this.elements.loadBtn && (!0 === e ? this.elements.loadBtn.classList.remove("disabled") : this.elements.loadBtn.classList.add("disabled")), null !== this.elements.qloadBtn && (!0 === e ? this.elements.qloadBtn.classList.remove("disabled") : this.elements.qloadBtn.classList.add("disabled")))
                    },
                    _getParameterValue: function(e, t, i) {
                        return this._callPluginFunc("getParameterValue", e, t, i)
                    },
                    _getValue: function(e) {
                        var t = this._callPluginFunc("getValue", e);
                        return "string" != typeof t || !isNaN(t) || "true" === t || "false" === t || t.startsWith("[") || t.startsWith("{") || (t = '"' + t + '"'), void 0 === t && (t = e), t
                    },
                    _parseCommand: function(e) {
                        var t = this._callPluginFunc("parseCommand", e);
                        return null === t && (t = e), t
                    },
                    addPlugin: function(e) {
                        this.plugIns.push(e)
                    },
                    hasPlugin: function(e) {
                        for (var t = 0; t < this.plugIns.length; ++t)
                            if (e === this.plugIns[t].signature) return !0;
                        return !1
                    },
                    loadPlugin: function(e, t, i) {
                        var n = this.DEFAULT_PLUGIN_URL + e + ".js?v=" + this.getVersion(!0);
                        eTOYutil.fnLoadScript(null, n, t, i)
                    },
                    loadSkin: function(e) {
                        var t = this._getBaseURL() + this.product.skinURL + this._getURI(e, ".css", this.getContentVersion(!0));
                        eTOYutil.fnLoadCss(null, t)
                    },
                    unloadSkin: function(e) {
                        var t = this._getBaseURL() + this.product.skinURL + this._getURI(e, ".css", this.getContentVersion(!0));
                        eTOYutil.fnUnloadCss(t)
                    },
                    getUserMenu: function() {
                        return void 0 === this.product.userMenu || null === this.product.userMenu || 0 === this.product.userMenu.length ? null : this._getBaseURL() + this.product.skinURL + this._getURI(this.product.userMenu, ".html", this.getContentVersion(!0))
                    },
                    getUserQuickMenu: function() {
                        return void 0 === this.product.userQuickMenu || null === this.product.userQuickMenu || 0 === this.product.userQuickMenu.length ? null : this._getBaseURL() + this.product.skinURL + this._getURI(this.product.userQuickMenu, ".html", this.getContentVersion(!0))
                    },
                    getUserHelp: function() {
                        return void 0 === this.product.userHelp || null === this.product.userHelp || 0 === this.product.userHelp.length ? null : this._getBaseURL() + this.product.skinURL + this._getURI(this.product.userHelp, ".html", this.getContentVersion(!0))
                    },
                    getUserModifier: function() {
                        return this.product.userModifier
                    },
                    removePlugin: function(e) {
                        for (var t = 0; t < this.plugIns.length; ++t)
                            if (e === this.plugIns[t].signature) {
                                this.plugIns.slice(t, 1);
                                break
                            }
                    },
                    _callPluginFunc: function(e) {
                        var t = Array.prototype.slice.call(arguments);
                        t.splice(0, 1);
                        for (var i = 0; i < this.plugIns.length; ++i)
                            if (this.product.type === this.plugIns[i].signature && "function" == typeof this.plugIns[i].apis[e]) return this.plugIns[i].apis[e].apply(null, t);
                        return null
                    },
                    _getErrorObject: function(e, t, i, n) {
                        return {
                            message: e,
                            code: t,
                            type: i,
                            name: n
                        }
                    },
                    _onSpriteError: function(e) {
                        e._errorCode = 404, Vinos._onError(e._vinosSprite.name, "image", e._errorCode)
                    },
                    _onMediaError: function(e) {
                        e && e.cancelable ? (Vinos.logWarn("onMediaError:" + this.user.source + ", Code=" + (this.error.code || 404) + ", Detail=" + (this.error.message || "")), e.preventDefault()) : Vinos._onError(this.user.source, this instanceof Audio ? "audio" : "video", 404)
                    },
                    _onError: function(e, t, i) {
                        var n = Vinos._getErrorObject("URI not found:" + e, i, t, e),
                            r = Vinos._findRenderObjByName(n.type, n.name);
                        r && (r.isFinished = !0), Vinos.logError(n.message)
                    },
                    _createSprite: function(e, t, i) {
                        if (null === e) return null;
                        i = i || {}, e = e.toLowerCase();
                        var n = this._getImageURL(e),
                            r = null,
                            a = t.defaultLayout,
                            s = 0,
                            o = 0;
                        void 0 !== a && "number" == typeof a.marginX && (s = this.elements.canvas.width * a.marginX), void 0 !== a && "number" == typeof a.marginY && (o = this.elements.canvas.height * a.marginY);
                        var l = function() {
                            if (void 0 !== this._vinosLayout) {
                                var e = !1,
                                    t = [0, 0, this.width, this.height],
                                    i = 0;
                                if (this.width > Vinos.elements.canvas.width && void 0 !== this._vinosLayout.cropX && ("left" === this._vinosLayout.cropX && (i = 0), "center" === this._vinosLayout.cropX && (i = (this.width - Vinos.elements.canvas.width) / 2), "right" === this._vinosLayout.cropX && (i = this.width - Vinos.elements.canvas.width), t[0] = this._vinosMarginX + i, t[2] = Vinos.elements.canvas.width, e = !0), this.height > Vinos.elements.canvas.height && void 0 !== this._vinosLayout.cropY && (i = 0, "top" === this._vinosLayout.cropY && (i = 0), "center" === this._vinosLayout.cropY && (i = (this.height - Vinos.elements.canvas.height) / 2), "bottom" === this._vinosLayout.cropY && (i = this.height - Vinos.elements.canvas.height), t[1] = this._vinosMarginY + i, t[3] = Vinos.elements.canvas.height, e = !0), e && (this._vinosTexture.frame = new PIXI.Rectangle(t[0], t[1], t[2], t[3]), this._vinosTexture._updateUvs()), this.width < Vinos.elements.canvas.width && void 0 !== this._vinosLayout.cropX && (i = 0, "left" === this._vinosLayout.cropX && (i = 0), "center" === this._vinosLayout.cropX && (i = (Vinos.elements.canvas.width - this.width) / 2), "right" === this._vinosLayout.cropX && (i = Vinos.elements.canvas.width - this.width), this._vinosSprite.x += i), this.height < Vinos.elements.canvas.height && void 0 !== this._vinosLayout.cropY && (i = 0, "top" === this._vinosLayout.cropY && (i = 0), "center" === this._vinosLayout.cropY && (i = (Vinos.elements.canvas.height - this.height) / 2), "bottom" === this._vinosLayout.cropY && (i = Vinos.elements.canvas.height - this.height), this._vinosSprite.y += i), !(this._vinosSprite.parent instanceof PIXI.Sprite || void 0 !== this._vinosOption && !0 === this._vinosOption.isChild)) {
                                    var n = 0,
                                        r = 0;
                                    void 0 !== this._vinosLayout.adjustX && ("left" === this._vinosLayout.adjustX && (n = 0), "center" === this._vinosLayout.adjustX && (n = -this.width / 2), "right" === this._vinosLayout.adjustX && (n = Vinos.elements.canvas.width - this.width), this._vinosSprite.x = eTOYutil.fnRound(this._vinosSprite.x + this._vinosMarginX + n, 0)), void 0 !== this._vinosLayout.adjustY && ("top" === this._vinosLayout.adjustY && (r = 0), "center" === this._vinosLayout.adjustY && (r = -(this.height - Vinos.elements.canvas.height) / 2), "bottom" === this._vinosLayout.adjustY && (r = -(this.height - Vinos.elements.canvas.height)), this._vinosSprite.y = eTOYutil.fnRound(this._vinosSprite.y + this._vinosMarginY + r, 0)), void 0 !== this._vinosOption && "function" == typeof this._vinosOption.onLoad && this._vinosOption.onLoad(this._vinosSprite)
                                }
                            }
                        };
                        if (0 <= n.indexOf(".gif")) {
                            var u = function(e) {
                                    var t = [],
                                        i = new GIF(new Uint8Array(e)),
                                        n = i.decompressFrames(!0),
                                        r = n[0].dims.width,
                                        a = n[0].dims.height,
                                        s = document.createElement("canvas"),
                                        o = s.getContext("2d"),
                                        l = o.createImageData(r, a);
                                    s.width = r * n.length, s.height = a;
                                    var u = new PIXI.BaseTexture.fromCanvas(s);
                                    return n.map(function(e, t) {
                                        l.data.set(e.patch), o.putImageData(l, t * r, 0)
                                    }).map(function(e, i) {
                                        t.push(new PIXI.Texture(u, new PIXI.Rectangle(i * r, 0, r, a)))
                                    }), t
                                },
                                c = new PIXI.Texture.fromImage(n, this.USE_CORS);
                            r = new PIXI.Sprite(c), $.ajax({
                                url: n,
                                type: "GET",
                                dataType: "arraybuffer",
                                success: function(i, n, a) {
                                    if (200 === a.status) {
                                        for (var s = null, o = 0; o < t.children.length; ++o)
                                            if (e === t.children[o].name) {
                                                s = t.children[o];
                                                break
                                            } r = new PIXI.extras.AnimatedSprite(u(i)), r.animationSpeed = .2, r.name = e, r.parentLayer = t, null !== s && (r.alpha = s.alpha, r.x = s.x, r.y = s.y, r.filters = s.filters, r.user = s.user, t.removeChild(s)), r.play(), t.addChild(r)
                                    }
                                },
                                error: function(e, t, i) {
                                    Vinos.logError("_createSprite:getGIF:" + i)
                                }
                            })
                        } else c = new PIXI.Texture.fromImage(n, this.USE_CORS), "object" == typeof i.clip && (0 === i.clip.width && (i.clip.width = c.width), 0 === i.clip.height && (i.clip.height = c.height), c = new PIXI.Texture(c, new PIXI.Rectangle(i.clip.x, i.clip.y, i.clip.width, i.clip.height))), r = new PIXI.Sprite(c), c.baseTexture._vinosMarginX = s, c.baseTexture._vinosMarginY = o, c.baseTexture._vinosLayout = a, c.baseTexture._vinosTexture = c, c.baseTexture._vinosSprite = r, c.baseTexture._vinosOption = i, c.baseTexture.hasLoaded ? c.baseTexture.emit("loaded") : (c.baseTexture.on("loaded", l), c.baseTexture.on("error", this._onSpriteError));
                        return r.name = e, this._setSprite(r, t), r.user = {
                            index: 0,
                            source: e,
                            type: void 0 !== t && void 0 !== t.defaultLayout ? t.defaultLayout.usage : void 0,
                            name: null,
                            line: this.current.lineNo,
                            option: i,
                            data: null,
                            userType: null
                        }, "string" == typeof i.name && (r.user.name = i.name), void 0 !== i.scale && (r.scale.set(i.scale.x, i.scale.y), r.x *= i.scale.x, r.y *= i.scale.y), void 0 !== i.flip && (void 0 !== i.flip.x && !0 === i.flip.x && (r.anchor.x = 1, r.scale.x *= -1), void 0 !== i.flip.y && !0 === i.flip.y && (r.anchor.y = 1, r.scale.y *= -1)), void 0 !== i && !0 === i.isChild || this._checkProgress(this.PROGRESS_CG, e), r
                    },
                    _setSprite: function(e, t) {
                        void 0 !== t.defaultAnchor && (e.anchor.x = t.defaultAnchor.x, e.anchor.y = t.defaultAnchor.y), void 0 !== t.defaultScale && (e.scale.x *= t.defaultScale.x, e.scale.y *= t.defaultScale.y), e.parentLayer = t.parentLayer || t, 0 < t.defaultFilter.length && (e.filters = t.defaultFilter)
                    },
                    addImage: function(e, t, i, n) {
                        var r = $.extend(!0, {
                            x: 0,
                            y: 0,
                            alpha: 1,
                            visible: !0
                        }, i);
                        n = void 0 === n || n;
                        var a = this._getCreateOption(r),
                            s = this._createSprite(t, e, a);
                        if (s.visible = r.visible, s.alpha = r.alpha, s.x += r.x, s.y += r.y, void 0 !== r.zIndex && (s.zIndex = r.zIndex), void 0 !== r.flip && (!0 === r.flip.x && (s.anchor.x = 1, s.scale.x *= -1), !0 === r.flip.y && (s.anchor.y = 1, s.scale.y *= -1)), void 0 !== r.blendMode && (s.blendMode = r.blendMode), void 0 !== r.filterRequest && null !== r.filterRequest && 0 < r.filterRequest.length) {
                            r.filters = r.filters || [];
                            for (var o = 0; o < r.filterRequest.length; ++o) {
                                var l = r.filterRequest[o],
                                    u = this._createFilter(e, {
                                        id: t + "_filter_" + l.type,
                                        type: l.type,
                                        param: l.mp
                                    });
                                !1 === l.autoFit && (u.autoFit = !1), r.filters.push(u)
                            }
                        }
                        if (void 0 !== r.filters && null !== r.filters && 0 < r.filters.length && (s.filters = r.filters), void 0 !== r.user && (s.user = $.extend(!0, s.user, r.user)), void 0 !== r.parent ? r.parent.addChild(s) : e.addChild(s), void 0 !== r.child)
                            if (r.child.option = r.child.option || {}, Array.isArray(r.child))
                                for (o = 0; o < r.child.length; ++o) {
                                    var c = r.child[o];
                                    c.option.parent = s, c.option.isChild = !0, !0 === c.option.useParentFilters && void 0 !== r.filters && (c.option.filters = r.filters), this.addImage(e, c.id, c.option)
                                } else r.child.option.parent = s, r.child.option.isChild = !0, !0 === r.child.option.useParentFilters && void 0 !== r.filters && (r.child.option.filters = r.filters), this.addImage(e, r.child.id, r.child.option);
                        if (n) {
                            var d = {
                                    x: r.x,
                                    y: r.y,
                                    effect: r.effect || null,
                                    alpha: r.alpha,
                                    visible: r.visible
                                },
                                h = {
                                    type: "image",
                                    image: s,
                                    container: e,
                                    renderOp: d,
                                    isFinished: !1
                                };
                            this._pushQueue(h), this.logInfo("addImage:" + t)
                        }
                        return s
                    },
                    clearImage: function(e, t) {
                        if (0 !== e.children.length) {
                            var i = typeof t,
                                n = [];
                            if ("undefined" === i) {
                                this._pushQueue({
                                    type: "image",
                                    image: null,
                                    container: e,
                                    renderOp: {
                                        effect: {
                                            type: "clearAll",
                                            remove: !0
                                        }
                                    },
                                    isFinished: !1
                                });
                                var r = "";
                                return void 0 !== e.defaultLayout ? r = e.defaultLayout.name : void 0 !== e.name && (r = name), void this.logInfo("clearImage:*all from container:" + r)
                            }
                            if ("object" === i)
                                for (var a in t) n.push(a);
                            for (var s = 0, o = 0; o < e.children.length; ++o) {
                                var l = e.children[o];
                                if ("string" === i) t === l.name && (this._clearImage(e, l), s++);
                                else if ("function" === i) {
                                    var u = t(l);
                                    !0 === u && (this._clearImage(e, l), s++)
                                } else if ("object" === i && "object" == typeof l.user) {
                                    var c = function(e, t, i, n) {
                                        for (var r = 0; r < i.length; r++)
                                            if (n === i[r]) return e[n] === t[n];
                                        return !1
                                    };
                                    for (var d in l.user)
                                        if ("object" == typeof l.user[d])
                                            for (var h in l.user[d]) c(l.user[d], t, n, h) && (this._clearImage(e, l), s++);
                                        else c(l.user, t, n, d) && (this._clearImage(e, l), s++)
                                }
                            }
                            this.logInfo("clearImage:" + s + " image(s) are cleared")
                        }
                    },
                    _clearImage: function(e, t) {
                        this._pushQueue({
                            type: "image",
                            image: t,
                            container: e,
                            renderOp: {
                                effect: {
                                    type: "clear"
                                }
                            },
                            isFinished: !1
                        })
                    },
                    findImage: function(e, t) {
                        for (var i = t.toLowerCase(), n = 0; n < e.children.length; ++n)
                            if (i === e.children[n].name) return e.children[n];
                        return null
                    },
                    findCharacter: function(e) {
                        for (var t = 0; t < this.containers.length; ++t)
                            if ("display" === this.containers[t].type || "ui" === this.containers[t].type) {
                                var i = this.findCharacterInContainer(this.containers[t].container, e);
                                if (null !== i) return i
                            } return null
                    },
                    findCharacterInContainer: function(e, t) {
                        for (var i = 0; i < e.children.length; ++i)
                            if (t === e.children[i].user.name) return e.children[i];
                        return null
                    },
                    moveImage: function(e, t, i) {
                        if (i = i || {}, i.add = void 0 !== i.add && i.add, "string" == typeof t && (t = this._createOrGetImage(e, t, i)), null !== t) {
                            if (i.duration = i.duration || this.DEFAULT_DURATION, i.direction = i.direction || this.DIR_NONE, i.from = i.from || {}, i.to = i.to || {}, i.from.x = i.from.x || t.x, i.from.y = i.from.y || t.y, i.to.x = i.to.x || t.x, i.to.y = i.to.y || t.y, 0 < i.direction) {
                                var n = [0, -1, 0, 1, 0, -1, -1, 1, 1],
                                    r = [0, 0, 1, 0, -1, 1, -1, 1, -1],
                                    a = n[i.direction],
                                    s = r[i.direction];
                                i.from.x = this.elements.canvas.width * a / 2, i.from.y = this.elements.canvas.height * s / 2
                            }
                            t.x = i.from.x, t.y = i.from.y;
                            var o = {
                                    x: e.x,
                                    y: e.y,
                                    effect: {
                                        type: "move",
                                        duration: i.duration,
                                        fromX: i.from.x,
                                        fromY: i.from.y,
                                        toX: i.to.x,
                                        toY: i.to.y
                                    }
                                },
                                l = {
                                    type: "image",
                                    image: t,
                                    container: e,
                                    renderOp: o,
                                    isFinished: !1
                                };
                            this._pushQueue(l), this.logInfo("moveImage:" + t.name)
                        }
                    },
                    fadeImage: function(e, t, i) {
                        i = i || {}, !0 === i.fadeOut ? this.fadeOutImage(e, t, i) : this.fadeInImage(e, t, i)
                    },
                    fadeInImage: function(e, t, i) {
                        if (i = i || {}, i.add = void 0 === i.add || i.add, "string" == typeof t && (t = this._createOrGetImage(e, t, i)), null !== t) {
                            i.duration = i.duration || this.DEFAULT_DURATION, i.start = i.start || 0, i.end = i.end || e.alpha, t.alpha = i.start, t.visible = !0;
                            var n = {
                                    x: 0,
                                    y: 0,
                                    effect: {
                                        type: "fadeIn",
                                        duration: i.duration,
                                        opaque: i.end
                                    }
                                },
                                r = {
                                    type: "image",
                                    image: t,
                                    container: e,
                                    renderOp: n,
                                    isFinished: !1
                                };
                            this._pushQueue(r), this.logInfo("fadeInImage:" + t.name)
                        }
                    },
                    fadeOutImage: function(e, t, i) {
                        if (i = i || {}, "string" == typeof t && (t = this.findImage(e, t)), null !== t) {
                            i.duration = i.duration || this.DEFAULT_DURATION, i.start = i.start || 1, i.end = i.end || 0, t.alpha = i.start;
                            var n = {
                                    x: 0,
                                    y: 0,
                                    effect: {
                                        type: "fadeOut",
                                        duration: i.duration,
                                        opaque: i.start
                                    }
                                },
                                r = {
                                    type: "image",
                                    image: t,
                                    container: e,
                                    renderOp: n,
                                    isFinished: !1
                                };
                            this._pushQueue(r), this.logInfo("fadeOutImage:" + t.name)
                        }
                    },
                    scaleImage: function(e, t, i) {
                        if (i = i || {}, i.add = void 0 !== i.add && i.add, "string" == typeof t && (t = this._createOrGetImage(e, t, i)), null !== t) {
                            i.duration = i.duration || this.DEFAULT_DURATION, i.start = i.start || {
                                x: t.scale.x,
                                y: t.scale.y
                            }, i.end = i.end || {
                                x: t.scale.x,
                                y: t.scale.y
                            }, void 0 !== i.anchor && (t.anchor.x = i.anchor.x, t.anchor.y = i.anchor.y), void 0 !== i.pivot && (t.pivot.x = i.pivot.x, t.pivot.y = i.pivot.y), void 0 !== i.skew && (t.skew.x = i.skew.x, t.skew.y = i.skew.y);
                            var n = {
                                    x: 0,
                                    y: 0,
                                    effect: {
                                        type: "scale",
                                        duration: i.duration,
                                        from: i.start,
                                        to: i.end
                                    }
                                },
                                r = {
                                    type: "image",
                                    image: t,
                                    container: e,
                                    renderOp: n,
                                    isFinished: !1
                                };
                            this._pushQueue(r), this.logInfo("scaleImage:" + t.name)
                        }
                    },
                    rotateImage: function(e, t, i) {
                        if (i = i || {}, i.add = void 0 !== i.add && i.add, "string" == typeof t && (t = this._createOrGetImage(e, t, i)), null !== t) {
                            i.duration = i.duration || this.DEFAULT_DURATION, i.direction = i.direction || this.ROTATE_CW, i.start = i.start || eTOYutil.fnGetDegree(t.rotation), i.end = i.end || eTOYutil.fnGetDegree(t.rotation), void 0 !== i.anchor && (t.anchor.x = i.anchor.x, t.anchor.y = i.anchor.y), void 0 !== i.pivot && (t.pivot.x = i.pivot.x, t.pivot.y = i.pivot.y), void 0 !== i.skew && (t.skew.x = i.skew.x, t.skew.y = i.skew.y);
                            var n = {
                                    x: 0,
                                    y: 0,
                                    effect: {
                                        type: "rotate",
                                        duration: i.duration,
                                        from: i.start,
                                        to: i.end,
                                        direction: i.direction
                                    }
                                },
                                r = {
                                    type: "image",
                                    image: t,
                                    container: e,
                                    renderOp: n,
                                    isFinished: !1
                                };
                            this._pushQueue(r), this.logInfo("rotateImage:" + t.name)
                        }
                    },
                    scrollImage: function(e, t, i) {
                        if (i = i || {}, i.add = void 0 !== i.add && i.add, "string" == typeof t && (t = this._createOrGetImage(e, t, i)), null !== t) {
                            i.duration = i.duration || this.DEFAULT_DURATION, i.start = i.start || {
                                x: t.x,
                                y: t.y
                            }, i.end = i.end || {
                                x: -1,
                                y: -1
                            }, i.direction = i.direction || this.DIR_NONE, "number" == typeof i.velocity ? i.velocity = {
                                x: i.velocity,
                                y: i.velocity
                            } : i.velocity = i.velocity || {
                                x: 0,
                                y: 0
                            }, this.DIR_NONE !== i.direction && (i.start.x = t.x, i.start.y = t.y);
                            var n = {
                                    x: 0,
                                    y: 0,
                                    effect: {
                                        type: "scroll",
                                        duration: i.duration,
                                        from: i.start,
                                        to: i.end,
                                        direction: i.direction,
                                        velocity: i.velocity
                                    }
                                },
                                r = {
                                    type: "image",
                                    image: t,
                                    container: e,
                                    renderOp: n,
                                    isFinished: !1
                                };
                            this._pushQueue(r), this.logInfo("scrollImage:" + t.name)
                        }
                    },
                    _getCreateOption: function(e) {
                        var t = void 0;
                        return void 0 !== e.isChild && (t = t || {}, t.isChild = e.isChild), void 0 !== e.clip && (t = t || {}, t.clip = e.clip), void 0 !== e.name && (t = t || {}, t.name = e.name), void 0 !== e.scale && (t = t || {}, t.scale = e.scale), t
                    },
                    _createOrGetImage: function(e, t, i) {
                        if (!0 === i.add && "string" == typeof t) {
                            var n = this._getCreateOption(i);
                            return t = this._createSprite(t, e, n), t.visible = !0, e.addChild(t), t
                        }
                        return "string" == typeof t && (t = this.findImage(e, t)), t
                    },
                    _getEffectTexture: function(e) {
                        e = e.toLowerCase();
                        var t = this._getEffectImageURL(e);
                        return new PIXI.Texture.fromImage(t, this.USE_CORS)
                    },
                    _clearVideo: function(e) {
                        this.runtime.video = "", this.runtime.videoIndex = -1, this.runtime.videoReady = !1, this.runtime.videoPlay = !1, this._hideVideo(e), this._showCanvas()
                    },
                    isVideoPlaying: function(e) {
                        return e = e || 0, this.runtime.videoIndex = e, this.runtime.videoPlay
                    },
                    isVideoLoading: function(e) {
                        return e = e || 0, this.runtime.videoIndex = e, 0 < this.runtime.video.length
                    },
                    loadVideo: function(e, t) {
                        var i = this._prePlayVideo(e, t);
                        null !== i && i && (this._pushQueue({
                            type: "video",
                            renderOp: "load",
                            options: i.options
                        }), this.logInfo("loadVideo:" + i.options.name))
                    },
                    _loadVideo: function(e, t) {
                        var i = this._prePlayVideo(e, t);
                        null !== i && i && this._loadVideoFile(i.options.source, i.options)
                    },
                    _loadVideoFile: function(e, t) {
                        //e: from t, the parameter source: movie/aev008b_r.ogv?v=1_0_0
                        //t: the entire array of options for video playback
                        // {
                        // "index": 0,
                        // "volume": 1,
                        // "loop": true,
                        // "play": true,
                        // "forcePlay": false,
                        // "name": "aev007d_r",
                        // "source": "movie/aev007d_r.ogv?v=1_0_0",
                        // "fullScreen": true
                        // }
                        if (!1 === this.config.useAnim && !0 !== t.forcePlay) return null;  //if the user has disabled video files (useAnim), and the option to forcePlay is not activated (it cannot be done through in-game), avoid this function entirely
                        this.runtime.video = e, this.runtime.videoIndex = t.index, this.runtime.videoReady = !1, this.runtime.videoPlay = !1;
                        var i = this._getVideo(t.index); //check if there's already a video object created in the requested index
                        if (null === i) {   //there is no video element created
                            if (null === (i = document.createElement("video"))) return this.logError("_loadVideoFile:Cannot create a video element"), null;     //weird edge-case where the browser fails to create a video html tag
                            this.logDebug("_loadVideoFile:create a video element"), i.onerror = this._onMediaError, i.onloadedmetadata = function() {
                                0 < Vinos.runtime.video.length && (!0 === this.user.fullScreen && (this.style.width = "100%", this.style.height = "100%", Vinos._hideCanvas(), Vinos.app.stop()), this.style.display = "none", Vinos._onReadyVideo(this))
                            }, i.onended = function() {
                                if ("boolean" != typeof this.loop && !0 === t.loop) return this.currentTime = 0, void this.play();
                                this.user.loop || Vinos._onEndVideo(this)
                            }, this.elements.viewport.appendChild(i)
                        }
                        "boolean" == typeof i.loop && (i.loop = t.loop), i.innerHTML = "", i.volume = this._getFinalVolume(this.DEFAULT_LAYERUSAGE_VD, t.volume), i.setAttribute("id", this.DEFAULT_VIDEO_ID + "_" + t.index), i.classList.add("wv-video"), i.setAttribute("webkit-playsinline", ""), i.setAttribute("playsinline", "");
                        var n = document.createElement("source");
                        n.src = e, n.type = "video/mp4", i.appendChild(n);
                        var r = {
                            type: "video",
                            name: t.name,
                            source: e,
                            volume: t.volume,
                            loop: t.loop,
                            index: t.index,
                            play: t.play,
                            forcePlay: t.forcePlay,
                            fullScreen: t.fullScreen
                        };
                        i.user = r, i.load();
                        var a = this._getLayout(this.DEFAULT_LAYERUSAGE_VD);
                        return null !== a && a.elements.push(r), i
                    },
                    playVideo: function(e, t) {
                        var i = this._prePlayVideo(e, t);
                        null !== i && (i.video ? (this._pushQueue({
                            type: "video",
                            video: i.video,
                            renderOp: "play",
                            options: i.options
                        }), this.logInfo("playVideo:" + i.video.user.source), this._checkProgress(this.PROGRESS_ANIME, i.video.user.name)) : i.options.source && (this._pushQueue({
                            type: "video",
                            video: null,
                            renderOp: "play",
                            options: i.options
                        }), this.logInfo("playVideo:" + i.options.source), this._checkProgress(this.PROGRESS_ANIME, i.options.name)))
                    },
                    _playVideo: function(e, t) {
                        var i = this._prePlayVideo(e, t);
                        null !== i && (null === i.video ? (i.options.play = !0, i.video = this._loadVideoFile(i.options.source, i.options)) : !0 !== this.config.useAnim && !0 !== i.options.forcePlay || this._playVideoFile(i.video))
                    },
                    _prePlayVideo: function(e, t) {
                        var i = {
                            video: null,
                            options: {
                                index: 0,
                                volume: 1,
                                loop: !1,
                                play: !0,
                                forcePlay: !1,
                                name: e,
                                source: "",
                                fullScreen: !0
                            }
                        };
                        if (t && (i.options = $.extend({}, i.options, t)), null === e || void 0 === e) {
                            if (i.video = this._getVideo(i.options.index), null === i.video) return null
                        } else e = e.toLowerCase(), i.options.name = e, i.options.source = this._getVideoURL(e);
                        return i
                    },
                    _playVideoFile: function(e) {
                        this._hideCanvas(), e.style.display = "block", e.pause(), e.currentTime = 0, e.play(), this._showVideo(), this._onStartVideo(e)
                    },
                    stopVideo: function(e) {
                        var t = {
                            type: "video",
                            index: e || 0,
                            renderOp: "stop"
                        };
                        this._pushQueue(t), this.logInfo("stopVideo:" + e)
                    },
                    _stopVideo: function(e) {
                        var t = this._getVideo(e);
                        this._stopVideoFile(t)
                    },
                    _stopVideoFile: function(e) {
                        e && (e.pause(), this._onEndVideo(e), e.user && !0 === e.user.fullScreen && this.app.start()), this._clearVideo(e)
                    },
                    pauseVideo: function(e) {
                        var t = {
                            type: "video",
                            index: e || 0,
                            renderOp: "pause"
                        };
                        this._pushQueue(t), this.logInfo("_pauseVideo:" + e)
                    },
                    _pauseVideo: function(e) {
                        var t = this._getVideo(e);
                        this._pauseVideoFile(t)
                    },
                    _pauseVideoFile: function(e) {
                        e && e.pause()
                    },
                    resumeVideo: function(e) {
                        var t = {
                            type: "video",
                            index: e || 0,
                            renderOp: "resume"
                        };
                        this._pushQueue(t), this.logInfo("_resumeVideo:" + e)
                    },
                    _resumeVideo: function(e) {
                        var t = this._getVideo(e);
                        this._resumeVideoFile(t)
                    },
                    _resumeVideoFile: function(e) {
                        e && e.play()
                    },
                    resetVideo: function(e) {
                        var t = {
                            type: "video",
                            index: e || 0,
                            renderOp: "reset"
                        };
                        this._pushQueue(t), this.logInfo("resetVideo:" + e)
                    },
                    _resetVideo: function(e) {
                        var t = this._getVideo(e);
                        this._resetVideoFile(t)
                    },
                    _resetVideoFile: function(e) {
                        e && (e.currentTime = 0)
                    },
                    _getVideo: function(e) {
                        return e = e || 0, this.runtime.videoIndex = e, document.getElementById(this.DEFAULT_VIDEO_ID + "_" + e)
                    },
                    _calcRatio: function(e, t, i, n) {
                        return (t - e) * n / i
                    },
                    _calcPosX: function(e) {
                        return Math.round(e * this.product.hRatio)
                    },
                    _calcPosY: function(e) {
                        return Math.round(e * this.product.vRatio)
                    },
                    _convertColor: function(e) {
                        return "number" == typeof e ? "#" + e.toString(16) : "string" == typeof e ? e.length < 2 || !1 === e.startsWith("0x") ? "#0" : "#" + e.substr(2) : "#0"
                    },
                    _findDefine: function(e) {
                        for (var t = 0; t < this.defines.length; ++t)
                            if (e === this.defines[t].name) return t;
                        return -1
                    },
                    _getDefineValue: function(e) {
                        for (var t = 0; t < this.defines.length; ++t)
                            if (e === this.defines[t].name) return this.defines[t].value;
                        return null
                    },
                    _addDefine: function(e, t) {
                        var i = this._findDefine(e);
                        0 <= i ? this.defines[i].value = t : (this.defines.push({
                            name: e,
                            value: t
                        }), this.logInfo("_addDefine:" + e))
                    },
                    _deleteDefine: function(e) {
                        var t = this._findDefine(e);
                        0 <= t && this.defines.splice(t, 1)
                    },
                    beginMacro: function(e) {
                        this.runtime.isMacro = !0;
                        var t = {
                            name: e,
                            lines: []
                        };
                        this.macros.push(t), this.logInfo("MACRO:name=" + e)
                    },
                    endMacro: function() {
                        if (!0 !== this.runtime.isMacro) return void this.logError("Invalid ENDMACRO - Cannot find a matching macro");
                        this.runtime.isMacro = !1;
                        var e = this.macros[this.macros.length - 1];
                        e.lines.push({
                            line: null,
                            command: "MACRO_RETURN"
                        }), this.logInfo("ENDMACRO:name=" + e.name)
                    },
                    _findMacro: function(e) {
                        for (var t = 0; t < this.macros.length; ++t) {
                            var i = this.macros[t];
                            if (e.toUpperCase() === i.name.toUpperCase()) return t
                        }
                        return -1
                    },
                    _deleteMacro: function(e) {
                        e = e.toUpperCase();
                        for (var t = this.macros.length; t--;) {
                            e === this.macros[t].name.toUpperCase() && this.macros.splice(t, 1)
                        }
                    },
                    addInterface: function(e) {
                        var t = this._getLayout(this.DEFAULT_LAYERUSAGE_UI);
                        null !== t && t.elements.push(e)
                    },
                    clearInterface: function() {
                        var e = this._getLayout(this.DEFAULT_LAYERUSAGE_UI);
                        null !== e && (e.elements = [], this._clearLayoutContainer(this.DEFAULT_LAYERUSAGE_UI))
                    },
                    showInterface: function() {
                        this.elements.interface.style.display = "block"
                    },
                    hideInterface: function() {
                        this.elements.panel.innerHTML = "", this.elements.interface.style.display = "none", this._closeUI(), this.clearInterface()
                    },
                    enableInterface: function() {
                        this.elements.interface.classList.remove("disabled")
                    },
                    disableInterface: function() {
                        this.elements.interface.classList.add("disabled")
                    },
                    isInterfaceVisible: function() {
                        return "none" !== this.elements.interface.style.display
                    },
                    openUI: function(e) {
                        var t = {
                            layer: "interface"
                        };
                        e = $.extend({}, t, e);
                        var i = null;
                        "interface" !== e.layer && (e.layer = this.DEFAULT_LAYERUSAGE_UI, i = this._getLayoutContainer(e.layer));
                        var n = {
                                type: "open",
                                option: e
                            },
                            r = {
                                type: "ui",
                                image: null,
                                container: i,
                                renderOp: n
                            };
                        this._pushQueue(r), this.logDebug("openUI:File=" + e.file + ", Type=" + e.type)
                    },
                    _openUI: function(e) {
                        var t = function() {
                                var e = eTOYutil.fnFindFirstChildByClass(Vinos.elements.viewport, "wv-ui-panel");
                                if (null === e || void 0 === e) return void Vinos.logWarn("_openUI:Page loaded. But, cannot find a .wv-ui-panel");
                                Vinos._stopVoice(), Vinos._prepareUI(e), Vinos.resizeUI(e), Vinos.showInterface(), Vinos.trigger("openUI", e)
                            },
                            i = this._getBaseURL() + this.product.skinURL + this._getURI(e.file, "." + e.type, this.getContentVersion(!0));
                        eTOYutil.fnPageLoading($(this.elements.interface), i, !0, !1, t)
                    },
                    _prepareUI: function(e) {
                        var t = e || this.elements.baseElement;
                        $(t).find(".wv-ui").addBack(".wv-ui").each(function() {
                            var e = this.getAttribute("data-enabled");
                            void 0 !== e && null !== e && ($(this).removeClass("disabled"), Vinos.eval(e) || $(this).addClass("disabled"));
                            var t = this.getAttribute("data-responsive");
                            if (void 0 !== t && null !== t) {
                                var i = t.split(",");
                                4 === i.length && (0 < i[0].length && this.setAttribute("data-left", i[0]), 0 < i[1].length && this.setAttribute("data-top", i[1]), 0 < i[2].length && this.setAttribute("data-width", i[2]), 0 < i[3].length && this.setAttribute("data-height", i[3]))
                            }
                        });
                        var i = $(t).attr("data-flag");
                        void 0 !== i && null !== i && 0 < i.length && (this.current.userFlags = this.current.userFlags || {}, this.current.userFlags[i] = !0), this._setUIText(t)
                    },
                    _setUIText: function(e) {
                        var t = e || this.elements.baseElement;
                        $(t).find("[data-message]").each(function() {
                            var e = this.getAttribute("data-message");
                            if (void 0 !== e && null !== e) {
                                var t = Vinos._getResource(e);
                                if (void 0 !== t && null !== t && 0 !== t.length || (t = Vinos._getMessage(e)), void 0 !== t && null !== t && 0 < t.length)
                                    for (var i = $(this).contents(), n = 0; n < i.length; ++n)
                                        if (3 === i[n].nodeType) {
                                            i[n].textContent = t;
                                            break
                                        }
                            }
                        })
                    },
                    resizeUI: function(e) {
                        var t = e || Vinos.elements.baseElement,
                            i = 0,
                            n = 0;
                        $(t).find(".wv-ui").addBack(".wv-ui").each(function() {
                            var e = this.getAttribute("data-left");
                            if (void 0 !== e && null !== e)
                                if ("+" === e) this.style.left = i + "px";
                                else if (e.startsWith("+") || e.startsWith("-")) {
                                var t = Math.round(parseInt(e.substr(1)) * Vinos.product.hRatio);
                                this.style.left = t + "px"
                            } else i = Math.round(e * Vinos.product.hRatio), this.style.left = i + "px";
                            var r = this.getAttribute("data-width");
                            if (void 0 !== r && null !== r) {
                                var a = Math.round(r * Vinos.product.hRatio);
                                this.style.width = a + "px", i += a
                            }
                            var s = this.getAttribute("data-top");
                            if (void 0 !== s && null !== s)
                                if ("+" === s) this.style.top = n + "px";
                                else if (s.startsWith("+") || s.startsWith("-")) {
                                var o = Math.round(parseInt(s.substr(1)) * Vinos.product.vRatio);
                                this.style.top = o + "px"
                            } else n = Math.round(s * Vinos.product.vRatio), this.style.top = n + "px";
                            var l = this.getAttribute("data-height");
                            if (void 0 !== l && null !== l) {
                                var u = Math.round(l * Vinos.product.vRatio);
                                this.style.height = u + "px", n += u
                            }
                        });
                        var r = $(Vinos.elements.viewport);
                        $(t).find(".wv-content-left").addBack(".wv-content-left").each(function() {
                            this.style.left = r.offset().left + "px"
                        }), $(t).find(".wv-content-right").addBack(".wv-content-right").each(function() {
                            this.style.left = Math.round(Math.floor(r.offset().left) + r.width() - parseInt(this.style.width)) + "px"
                        }), $(t).find(".wv-content-top").addBack(".wv-content-top").each(function() {
                            this.style.top = r.offset().top + "px"
                        }), $(t).find(".wv-content-bottom").addBack(".wv-content-bottom").each(function() {
                            this.style.top = Math.round(Math.floor(r.offset().top) + r.height() - parseInt(this.style.height)) + "px"
                        })
                    },
                    closeUI: function() {
                        var e = {
                                type: "close",
                                option: null
                            },
                            t = {
                                type: "ui",
                                image: null,
                                container: null,
                                renderOp: e
                            };
                        this._pushQueue(t)
                    },
                    _closeUI: function() {
                        var e = eTOYutil.fnFindFirstChildByClass(this.elements.interface, "wv-ui-panel");
                        if (null !== e) {
                            var t = $(e).attr("data-flag");
                            void 0 !== t && null !== t && 0 < t.length && (this.current.userFlags = this.current.userFlags || {}, this.current.userFlags[t] = void 0), this.trigger("closeUI", e), this.elements.interface.removeChild(e), this.hideInterface()
                        }
                    },
                    selectUI: function(elem) {
                        var $elem = $(elem),
                            role = elem.getAttribute("data-role");
                        if (void 0 === role || null === role) return void this.logWarn("Unknown UI Role, Skip");
                        switch (role = role.toLowerCase()) {
                            case "panel":
                                break;
                            case "jump":
                                var eval = $elem.attr("data-eval"),
                                    enabled = $elem.attr("data-enabled"),
                                    isOk = !0;
                                if (void 0 !== enabled && null !== enabled && (isOk = this.eval(enabled)), !isOk) return void this.logWarn("selectUI:Enabled condition is not OK=" + enabled);
                                void 0 !== eval && null !== eval && (eval = this.eval(eval)), this._onClickInterface({
                                    file: elem.getAttribute("data-file"),
                                    label: elem.getAttribute("data-label")
                                });
                                break;
                            case "load-recent":
                                this.loadRecent();
                                break;
                            case "qsave":
                            case "qload":
                            case "save":
                            case "load":
                            case "config":
                            case "gallery":
                            case "exit":
                                this.trigger("selectUI", {
                                    type: role
                                });
                                break;
                            case "link":
                                this.trigger("selectUI", {
                                    type: role,
                                    url: elem.getAttribute("data-url"),
                                    target: elem.getAttribute("data-target", "_blank")
                                })
                        }
                    },
                    makeUI: function(e) {
                        if (void 0 === e) return void this.logWarn("makeUI:Undefined command option");
                        if ("ui" !== e.type) return void this.logError("makeUI:Unexpected type=" + e.type + ', Expect "ui"');
                        if (void 0 === e.option) return void this.logError("makeUI:Undefined UI option");
                        switch (e.subType) {
                            case "open":
                                this.openUI(e.option);
                                break;
                            case "divider":
                                this.makeDivider(e.option);
                                break;
                            case "dialog":
                                this.makeDialog(e.option);
                                break;
                            case "confirm":
                                this.makeConfirm(e.option);
                                break;
                            case "text":
                                this.makeText(e.option);
                                break;
                            case "button":
                                this.makeButton(e.option);
                                break;
                            case "switch":
                                this.makeSwitch(e.option);
                                break;
                            case "slider":
                                this.makeSlider(e.option);
                                break;
                            case "dropdown":
                                this.makeDropdown(e.option);
                                break;
                            case "select":
                                this.makeSelect(e.option);
                                break;
                            case "link":
                                this.makeLink(e.option);
                                break;
                            default:
                                this.logError("makeUI:Unknown UI type=" + e.subType)
                        }
                    },
                    makeDivider: function(e) {
                        var t = {
                            layer: "interface"
                        };
                        e = $.extend({}, t, e);
                        var i = null;
                        "interface" !== e.layer && (e.layer = this.DEFAULT_LAYERUSAGE_UI, i = this._getLayoutContainer(e.layer));
                        var n = {
                                type: "divider",
                                option: e
                            },
                            r = {
                                type: "ui",
                                image: null,
                                container: i,
                                renderOp: n
                            };
                        this._pushQueue(r), this.logDebug("makeDivider:")
                    },
                    makeDialog: function(e) {
                        var t = {
                            title: null,
                            message: null,
                            inputType: null,
                            inputOptions: null,
                            layer: "interface",
                            locale: this.config.locale
                        };
                        e = $.extend({}, t, e), e.onResult = function(t) {
                            Vinos.WAIT_INPUT === Vinos.wait() && ("function" == typeof e.callback && e.callback(t), Vinos.wait(Vinos.WAIT_NONE))
                        };
                        var i = {
                                type: "dialog",
                                option: e
                            },
                            n = {
                                type: "ui",
                                container: null,
                                renderOp: i
                            };
                        this._pushQueue(n), this.logDebug("makeDialog:")
                    },
                    makeConfirm: function(e) {
                        var t = {
                            title: this._getMessage("confirm"),
                            message: null,
                            layer: "interface",
                            locale: this.config.locale
                        };
                        e = $.extend({}, t, e), e.onResult = function(t) {
                            Vinos.WAIT_INPUT === Vinos.wait() && ("function" == typeof e.callback && e.callback(t), Vinos.wait(Vinos.WAIT_NONE))
                        };
                        var i = {
                                type: "confirm",
                                option: e
                            },
                            n = {
                                type: "ui",
                                container: null,
                                renderOp: i
                            };
                        this._pushQueue(n)
                    },
                    makeText: function(e) {
                        var t = {
                            text: null,
                            x: 0,
                            y: 0,
                            fontStyle: this.current.fontStyle,
                            layer: "interface"
                        };
                        e = $.extend({}, t, e);
                        var i = null;
                        "interface" !== e.layer && (e.layer = this.DEFAULT_LAYERUSAGE_UI, i = this._getLayoutContainer(e.layer));
                        var n = {
                                type: "text",
                                option: e
                            },
                            r = {
                                type: "ui",
                                container: i,
                                renderOp: n
                            };
                        this._pushQueue(r)
                    },
                    makeButton: function(e) {
                        var t = {
                            image: null,
                            file: null,
                            label: null,
                            x: this.current.x,
                            y: this.current.y,
                            width: -1,
                            height: -1,
                            text: null,
                            OnClick: null,
                            OnEnter: null,
                            OnLeave: null,
                            hintPos: {
                                x: 0,
                                y: 0
                            },
                            layer: "interface"
                        };
                        e = $.extend({}, t, e);
                        var i = null,
                            n = null;
                        "interface" === e.layer && null !== e.image ? e.image = this._getImageURL(e.image.toLocaleLowerCase()) : (e.layer = this.DEFAULT_LAYERUSAGE_UI, n = this._getLayoutContainer(e.layer), void 0 !== e.image && null !== e.image ? (i = this._createSprite(e.image, n), i.x += e.x, i.y += e.y) : (i = new PIXI.Sprite(PIXI.Texture.EMPTY), this._setSprite(i, n), i.name = "EMPTY", i.x = e.x, i.y = e.y, i.width = e.width, i.height = e.height), i.visible = !1, n.addChild(i));
                        var r = {
                            type: "button",
                            option: e
                        };
                        void 0 !== e.image && null !== e.image && (r.option.width = 1, r.option.height = 1);
                        var a = {
                            type: "ui",
                            image: i,
                            container: n,
                            renderOp: r
                        };
                        this._pushQueue(a)
                    },
                    makeSwitch: function(e) {
                        var t = {
                            name: null,
                            target: null,
                            value: 0,
                            layer: "interface"
                        };
                        e = $.extend({}, t, e);
                        var i = null;
                        "interface" !== e.layer && (e.layer = this.DEFAULT_LAYERUSAGE_UI, i = this._getLayoutContainer(e.layer));
                        var n = {
                                type: "switch",
                                option: e
                            },
                            r = {
                                type: "ui",
                                image: null,
                                container: i,
                                renderOp: n
                            };
                        this._pushQueue(r)
                    },
                    makeSlider: function(e) {
                        var t = {
                            name: null,
                            target: null,
                            value: 0,
                            min: 1,
                            max: 10,
                            step: 1,
                            layer: "interface"
                        };
                        e = $.extend({}, t, e);
                        var i = null;
                        "interface" !== e.layer && (e.layer = this.DEFAULT_LAYERUSAGE_UI, i = this._getLayoutContainer(e.layer));
                        var n = {
                                type: "slider",
                                option: e
                            },
                            r = {
                                type: "ui",
                                image: null,
                                container: i,
                                renderOp: n
                            };
                        this._pushQueue(r)
                    },
                    makeDropdown: function(e) {
                        var t = {
                            name: null,
                            target: null,
                            value: 0,
                            labels: null,
                            values: null,
                            layer: "interface"
                        };
                        e = $.extend({}, t, e);
                        var i = null;
                        "interface" !== e.layer && (e.layer = this.DEFAULT_LAYERUSAGE_UI, i = this._getLayoutContainer(e.layer));
                        var n = {
                                type: "dropdown",
                                option: e
                            },
                            r = {
                                type: "ui",
                                image: null,
                                container: i,
                                renderOp: n
                            };
                        this._pushQueue(r)
                    },
                    makeSelect: function(e) {
                        var t = {
                            title: this.current.selectText,
                            select: -1,
                            values: this.current.selectOptions,
                            layer: "interface"
                        };
                        e = $.extend({}, t, e);
                        var i = null;
                        "interface" !== e.layer && (e.layer = this.DEFAULT_LAYERUSAGE_UI, i = this._getLayoutContainer(e.layer));
                        var n = {
                                type: "select",
                                option: e
                            },
                            r = {
                                type: "ui",
                                container: i,
                                renderOp: n
                            };
                        this._pushQueue(r)
                    },
                    makeLink: function(e) {
                        var t = {
                            text: null,
                            file: null,
                            label: null,
                            url: null,
                            layer: "interface"
                        };
                        e = $.extend({}, t, e);
                        var i = null;
                        "interface" !== e.layer && (e.layer = this.DEFAULT_LAYERUSAGE_UI, i = this._getLayoutContainer(e.layer));
                        var n = {
                                type: "link",
                                option: e
                            },
                            r = {
                                type: "ui",
                                container: i,
                                renderOp: n
                            };
                        this._pushQueue(r)
                    },
                    _createFilter: function(e, t) {
                        t.type = t.type.toLowerCase();
                        var i = null,
                            n = t.param;
                        switch (t.type) {
                            case "adjustment":
                                i = new PIXI.filters.AdjustmentFilter(n);
                                break;
                            case "advancedbloom":
                                i = new PIXI.filters.AdvancedBloomFilter(n);
                                break;
                            case "ascii":
                                i = new PIXI.filters.AsciiFilter(n);
                                break;
                            case "background":
                                var r = 0;
                                void 0 !== n.color && (r = n.color);
                                var a = 1;
                                void 0 !== n.thickness && (a = n.thickness);
                                var s = 0;
                                void 0 !== n.mixed && (s = n.mixed), i = new PIXI.filters.BackgroundColorFilter(r, a, s);
                                break;
                            case "bevel":
                                i = new PIXI.filters.BevelFilter(n);
                                break;
                            case "bloom":
                                i = new PIXI.filters.BloomFilter(n);
                                break;
                            case "blur":
                                i = new PIXI.filters.BlurFilter(n);
                                break;
                            case "bulgepinch":
                                var o = [0, 0];
                                void 0 !== n.center && (o[0] = n.center.x, o[1] = n.center.y), void 0 !== n.center_x && (o[0] = n.center_x), void 0 !== n.center_y && (o[1] = n.center_y);
                                var l = 100;
                                void 0 !== n.radius && (l = n.radius);
                                var u = 1;
                                void 0 !== n.strength && (u = n.strength), i = new PIXI.filters.BulgePinchFilter(o, l, u);
                                break;
                            case "colormap":
                                var c = PIXI.Texture.EMPTY;
                                void 0 !== n.colorMap && (c = new PIXI.Texture.fromImage(this._getImageURL(n.colorMap), this.USE_CORS));
                                var d = !1;
                                void 0 !== n.nearest && (d = n.nearest);
                                var h = 1;
                                void 0 !== n.mix && (h = n.mix), i = new PIXI.filters.ColorMapFilter(c, d, h);
                                break;
                            case "colorreplace":
                                var f = 16711680;
                                void 0 !== n.originalColor && (f = n.originalColor);
                                var p = 0;
                                void 0 !== n.newColor && (p = n.newColor);
                                var m = .4;
                                void 0 !== n.epsilon && (m = n.epsilon), i = new PIXI.filters.ColorReplaceFilter(f, p, m);
                                break;
                            case "colormatrix":
                                var g = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
                                void 0 !== n.matrix && (g = n.matrix);
                                var v = 1;
                                void 0 !== n.alpha && (v = n.alpha);
                                var _ = 0;
                                void 0 !== n.padding && (_ = n.padding), i = new PIXI.filters.ColorMatrixFilter, i.alpha = v, i.matrix = g, i.padding = _, void 0 !== n.function && this._setFilterValue(i, "function", n.function);
                                break;
                            case "convolution":
                                g = [0, 1, 0, 0, 0, 0, 0, 0, 0], void 0 !== n.matrix && Array.isArray(n.matrix) && (g = n.matrix), void 0 !== n.matrix_11 && (g[0] = n.matrix_11), void 0 !== n.matrix_12 && (g[1] = n.matrix_12), void 0 !== n.matrix_13 && (g[2] = n.matrix_13), void 0 !== n.matrix_21 && (g[3] = n.matrix_21), void 0 !== n.matrix_22 && (g[4] = n.matrix_22), void 0 !== n.matrix_23 && (g[5] = n.matrix_23), void 0 !== n.matrix_31 && (g[6] = n.matrix_31), void 0 !== n.matrix_32 && (g[7] = n.matrix_32), void 0 !== n.matrix_33 && (g[8] = n.matrix_33);
                                var y = this.elements.canvas.width;
                                void 0 !== n.width && (y = n.width);
                                var V = this.elements.canvas.height;
                                void 0 !== n.height && (V = n.height), i = new PIXI.filters.ConvolutionFilter(g, y, V);
                                break;
                            case "crosshatch":
                                i = new PIXI.filters.CrossHatchFilter;
                                break;
                            case "crt":
                                i = new PIXI.filters.CRTFilter(n);
                                break;
                            case "displacement":
                                var S = null;
                                S = void 0 !== n.sprite ? new PIXI.Sprite.fromImage(this._getImageURL(n.sprite), this.USE_CORS) : new PIXI.Sprite.from(PIXI.Texture.EMPTY), this.app.stage.addChild(S);
                                var E = 1;
                                void 0 !== n.scale && (E = n.scale), S.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT, i = new PIXI.filters.DisplacementFilter(S, E), i.userSprite = S;
                                break;
                            case "dot":
                                E = 1, void 0 !== n.scale && (E = n.scale);
                                var I = 1;
                                void 0 !== n.angle && (I = n.angle), i = new PIXI.filters.DotFilter(E, I);
                                break;
                            case "dropshadow":
                                i = new PIXI.filters.DropShadowFilter(n);
                                break;
                            case "emboss":
                                i = new PIXI.filters.EmbossFilter(n.strength);
                                break;
                            case "glitch":
                                i = new PIXI.filters.GlitchFilter(n);
                                break;
                            case "glow":
                                var A = 10;
                                void 0 !== n.distance && (A = n.distance);
                                var b = 4;
                                void 0 !== n.outerStrength && (b = n.outerStrength);
                                var T = 0;
                                void 0 !== n.innerStrength && (T = n.innerStrength), r = 16777215, void 0 !== n.color && (r = n.color);
                                var P = .1;
                                void 0 !== n.quality && (P = n.quality), i = new PIXI.filters.GlowFilter(A, b, T, r, P);
                                break;
                            case "godray":
                                i = new PIXI.filters.GodrayFilter(n);
                                break;
                            case "kawaseblur":
                                var L = 4;
                                void 0 !== n.blur && (L = n.blur), P = 3, void 0 !== n.quality && (P = n.quality);
                                var D = !1;
                                void 0 !== n.clamp && (D = n.clamp), i = new PIXI.filters.KawaseBlurFilter(L, P, D);
                                break;
                            case "motionblur":
                                var w = [0, 0];
                                void 0 !== n.velocity && (w[0] = n.velocity.x, w[1] = n.velocity.y), void 0 !== n.velocity_x && (w[0] = n.velocity_x), void 0 !== n.velocity_y && (w[1] = n.velocity_y);
                                var C = 5;
                                void 0 !== n.kernelSize && (C = n.kernelSize);
                                var x = 0;
                                void 0 !== n.offset && (x = n.offset), i = new PIXI.filters.MotionBlurFilter(w, C, x);
                                break;
                            case "oldfilm":
                                i = new PIXI.filters.OldFilmFilter(n, .5);
                                break;
                            case "outline":
                                a = 1, void 0 !== n.thickness && (a = n.thickness), r = 0, void 0 !== n.color && (r = n.color), P = 0, void 0 !== n.quality && (P = n.quality), i = new PIXI.filters.OutlineFilter(a, r, P);
                                break;
                            case "pixelate":
                                var O = 10;
                                void 0 !== n.size && (O = n.size), i = new PIXI.filters.PixelateFilter(O);
                                break;
                            case "radialblur":
                                I = 1, void 0 !== n.angle && (I = n.angle), o = [0, 0], void 0 !== n.center && (o[0] = n.center.x, o[1] = n.center.y), void 0 !== n.center_x && (o[0] = n.center_x), void 0 !== n.center_y && (o[1] = n.center_y), C = 0, void 0 !== n.kernelSize && (C = n.kernelSize), l = -1, void 0 !== n.radius && (l = n.radius), i = new PIXI.filters.RadialBlurFilter(I, o, C, l);
                                break;
                            case "reflection":
                                i = new PIXI.filters.ReflectionFilter(n, .5);
                                break;
                            case "rgbsplit":
                                var k = new PIXI.Point(-10, 0);
                                void 0 !== n.red && (k.x = n.red.x, k.y = n.red.y), void 0 !== n.red_x && (k.x = n.red_x), void 0 !== n.red_y && (k.y = n.red_y);
                                var R = new PIXI.Point(0, 10);
                                void 0 !== n.green && (R.x = n.green.x, R.y = n.green.y), void 0 !== n.green_x && (R.x = n.green_x), void 0 !== n.green_y && (R.y = n.green_y);
                                var F = new PIXI.Point(0, 0);
                                void 0 !== n.blue && (F.x = n.blue.x, F.y = n.blue.y), void 0 !== n.blue_x && (F.x = n.blue_x), void 0 !== n.blue_y && (F.y = n.blue_y), i = new PIXI.filters.RGBSplitFilter(k, R, F);
                                break;
                            case "shockwave":
                                o = [.5, .5], void 0 !== n.center && (o = n.center);
                                var U = 0;
                                void 0 !== n.time && (U = n.time), i = new PIXI.filters.ShockwaveFilter(o, n, U);
                                break;
                            case "simplelightmap":
                                var M = null;
                                M = void 0 !== n.texture ? new PIXI.Texture.fromImage(this._getImageURL(n.texture), this.USE_CORS) : PIXI.Texture.EMPTY, r = 0, void 0 !== n.color && (r = n.color), v = 1, void 0 !== n.alpha && (v = n.alpha), i = new PIXI.filters.SimpleLightmapFilter(M, r, v);
                                break;
                            case "transition":
                                S = null, S = void 0 !== n.sprite ? new PIXI.Sprite.fromImage(this._getImageURL(n.sprite), this.USE_CORS) : new PIXI.Sprite.from(PIXI.Texture.EMPTY), this.app.stage.addChild(S), M = null, M = void 0 !== n.texture ? this._getEffectTexture(n.texture) : PIXI.Texture.EMPTY, r = 0, void 0 !== n.color && (r = n.color), i = new PIXI.filters.TransitionFilter(S.texture, M, r), i.maskSprite = S;
                                break;
                            case "tiltshift":
                                L = 100, void 0 !== n.blur && (L = n.blur);
                                var N = 0;
                                void 0 !== n.gradientBlur && (N = n.gradientBlur);
                                var B = new PIXI.Point(0, 0);
                                void 0 !== n.start && (B.x = n.start.x, B.y = n.start.y), void 0 !== n.start_x && (B.x = n.start_x), void 0 !== n.start_y && (B.y = n.start_y);
                                var G = new PIXI.Point(1, 1);
                                void 0 !== n.end && (G.x = n.end.x, G.y = n.end.y), void 0 !== n.end_x && (G.x = n.end_x), void 0 !== n.end_y && (G.y = n.end_y), i = new PIXI.filters.TiltShiftFilter(L, N, B, G);
                                break;
                            case "twist":
                                l = 200, void 0 !== n.radius && (l = n.radius), I = 4, void 0 !== n.angle && (I = n.angle), _ = 20, void 0 !== n.padding && (_ = n.padding), x = new PIXI.Point(0, 0), void 0 !== n.offset && (x.x = n.offset.x, x.y = n.offset.y), void 0 !== n.offset_x && (x.x = n.offset_x), void 0 !== n.offset_y && (x.y = n.offset_y), i = new PIXI.filters.TwistFilter(l, I, _), i.offset = x;
                                break;
                            case "zoomblur":
                                u = .1, void 0 !== n.strength && (u = n.strength), o = [0, 0], void 0 !== n.center && (o = n.center);
                                var Y = 0;
                                void 0 !== n.innerRadius && (Y = n.innerRadius), l = -1, void 0 !== n.radius && (l = n.radius), i = new PIXI.filters.ZoomBlurFilter(u, o, Y, l);
                                break;
                            default:
                                this.logError("Unknown Filter Type=" + t.type)
                        }
                        return null !== i && (i._user = t, i._user.line = this.current.lineNo), i
                    },
                    _clearFilter: function(e) {
                        if (null !== e.filters) {
                            for (var t = 0; t < e.filters.length; ++t) {
                                var i = e.filters[t];
                                i instanceof PIXI.filters.DisplacementFilter && this.app.stage.removeChild(i.maskSprite), i instanceof PIXI.filters.TransitionFilter && this.app.stage.removeChild(i.maskSprite)
                            }
                            e.filters = []
                        }
                    },
                    _deleteFilter: function(e) {
                        for (var t = 0; t < this.containers.length; ++t) {
                            var i = this.containers[t].container;
                            if (void 0 !== i && null !== i.filters)
                                for (var n = 0; n < i.filters.length; ++n) {
                                    var r = i.filters[n];
                                    if (e === r._user.id) return r instanceof PIXI.filters.DisplacementFilter && this.app.stage.removeChild(r.maskSprite), r instanceof PIXI.filters.TransitionFilter && this.app.stage.removeChild(r.maskSprite), void this._removeFilter(i, r)
                                }
                        }
                        this.logWarn("_deleteFilter:Unknown Filter ID=" + e)
                    },
                    _findFilter: function(e) {
                        for (var t = 0; t < this.containers.length; ++t) {
                            var i = this.containers[t].container;
                            if (void 0 !== i && null !== i.filters)
                                for (var n = 0; n < i.filters.length; ++n) {
                                    var r = i.filters[n];
                                    if (e === r._user.id) return r
                                }
                        }
                        return null
                    },
                    _addFilter: function(e, t, i) {
                        if (null !== t && null !== e) {
                            var n = e.filters || [];
                            n.push(t), e.filters = n, null === e.filterArea && (e.filterArea = new PIXI.Rectangle(0, 0, this.elements.canvas.width, this.elements.canvas.height)), !0 === i && this.renderFilter.push(t)
                        }
                    },
                    _removeFilter: function(e, t) {
                        if (null !== t && null !== e) {
                            for (var i = [], n = 0; n < e.filters.length; ++n) t !== e.filters[n] && i.push(e.filters[n]);
                            for (e.filters = i, n = this.renderFilter.length; n--;)
                                if (t === this.renderFilter[n]) {
                                    this.renderFilter.splice(n, 1);
                                    break
                                }
                        }
                    },
                    _addDefaultFilter: function(e, t) {
                        if (null !== t && null !== e) {
                            var i = e.defaultFilter || [];
                            i.push(t), e.defaultFilter = i
                        }
                    },
                    _removeDefaultFilter: function(e, t) {
                        if (null !== t && null !== e) {
                            for (var i = [], n = 0; n < e.defaultFilter.length; ++n) t !== e.defaultFilter[n] && void 0 !== t._user && void 0 !== e.defaultFilter[n]._user && t._user.type != e.defaultFilter[n]._user.type && i.push(e.defaultFilter[n]);
                            e.defaultFilter = i
                        }
                    },
                    _setEffectValue: function(e, t, i, n) {
                        var r = this._findFilter(e);
                        return null !== r ? void this._setFilterValue(r, t, i, n) : (r = this._findParticle(e), null !== r ? void this._setParticleValue(r, t, i, n) : void 0)
                    },
                    _setFilterValue: function(id, param, value, setSlider) {
                        var toSlider = void 0 !== setSlider && setSlider,
                            filter = id;
                        if ("string" == typeof id && (filter = this._findFilter(id)), null !== filter) {
                            if (filter instanceof PIXI.filters.ColorMatrixFilter) {
                                var multiply = !1,
                                    mp = {};
                                if ("function" == param) {
                                    if ("string" == typeof value)
                                        if (0 <= value.indexOf(",")) {
                                            var values = value.split(",");
                                            value = eTOYutil.fnParseInt(values[0]), mp = this._parseObject(values[1])
                                        } else value = eTOYutil.fnParseInt(value);
                                    else "object" == typeof value && (mp = value.mp || {}, value = value.value);
                                    switch ("boolean" == typeof mp.multiply && (multiply = mp.multiply), void 0 !== mp.matrix && (filter.matrix = mp.matrix), value) {
                                        case 0:
                                            filter.reset();
                                            break;
                                        case 1:
                                            filter.blackAndWhite(multiply);
                                            break;
                                        case 2:
                                            var b = mp.b || .5;
                                            filter.brightness(b, multiply);
                                            break;
                                        case 3:
                                            filter.browni(multiply);
                                            break;
                                        case 4:
                                            var desaturation = mp.desaturation || .5,
                                                toned = mp.toned || .5,
                                                lightColor = mp.lightColor || "0xe2aabc",
                                                darkColor = mp.darkColor || "0xffe580";
                                            filter.colorTone(desaturation, toned, lightColor, darkColor, multiply);
                                            break;
                                        case 5:
                                            var amount = mp.amount || .5;
                                            filter.contrast(amount, multiply);
                                            break;
                                        case 6:
                                            filter.desaturate();
                                            break;
                                        case 7:
                                            var scale = mp.scale || .5;
                                            filter.greyscale(scale, multiply);
                                            break;
                                        case 8:
                                            var rotation = mp.rotation || 0;
                                            filter.hue(rotation, multiply);
                                            break;
                                        case 9:
                                            filter.kodachrome(multiply);
                                            break;
                                        case 10:
                                            filter.lsd(multiply);
                                            break;
                                        case 11:
                                            filter.negative(multiply);
                                            break;
                                        case 12:
                                            var intensity = mp.intensity || 1;
                                            filter.night(intensity, multiply);
                                            break;
                                        case 13:
                                            filter.polaroid(multiply);
                                            break;
                                        case 14:
                                            amount = mp.amount || .5, filter.saturate(amount, multiply);
                                            break;
                                        case 15:
                                            filter.sepia(multiply);
                                            break;
                                        case 16:
                                            filter.technicolor(multiply);
                                            break;
                                        case 17:
                                            filter.toBGR(multiply);
                                            break;
                                        case 18:
                                            filter.vintage(multiply);
                                            break;
                                        default:
                                            this.logError("Unknown ColorMatrix function. Function:" + value + "(filterId=" + id + ")")
                                    }
                                }
                            } else {
                                var exp = "filter." + param + "=" + value + ";";
                                try {
                                    eval(exp)
                                } catch (e) {
                                    this.logError("Exception in evaluation. Exp:" + exp + "(filterId=" + id + ")"), this.logError(e.message, !1)
                                }
                            }!0 === toSlider && this._setSliderValue(filter._user.id, param, value)
                        }
                    },
                    _setSliderValue: function(e, t, i) {
                        i = Math.round(100 * i) / 100;
                        var n = "[data-effect='" + e + "'][data-effect-attr='" + t + "']",
                            r = $(this.elements.interface).find(n),
                            a = r.find(".ui-slider");
                        a.slider("value", i);
                        var s = a.attr("data-min"),
                            o = a.attr("data-max");
                        r.find(".bg-filler").css("width", (i - s) / (o - s) * 100 + "%"), r.find(".slider-value").text(i)
                    },
                    _createParticle: function(e, t) {
                        t.type = t.type.toLowerCase();
                        var i = null,
                            n = [];
                        "string" == typeof t.images && (t.images = t.images.split(","));
                        for (var r = 0; r < t.images.length; ++r) n.push(new PIXI.Texture.fromImage(this._getImageURL(t.images[r]), this.USE_CORS));
                        0 < e.children.length && (e = e.getChildAt(0));
                        var a = {},
                            s = t.param;
                        switch (t.type) {
                            case "burst":
                                a = {
                                    alpha: s.alpha || {
                                        start: .8,
                                        end: .7
                                    },
                                    scale: s.scale || {
                                        start: .7,
                                        end: .3
                                    },
                                    color: s.color || {
                                        start: "e3f9ff",
                                        end: "0ec8f8"
                                    },
                                    speed: s.speed || {
                                        start: 200,
                                        end: 200
                                    },
                                    acceleration: s.acceleration || {
                                        x: 0,
                                        y: 0
                                    },
                                    startRotation: s.startRotation || {
                                        min: 0,
                                        max: 0
                                    },
                                    rotationSpeed: s.rotationSpeed || {
                                        min: 0,
                                        max: 0
                                    },
                                    lifetime: s.lifetime || {
                                        min: .8,
                                        max: .8
                                    },
                                    blendMode: s.blendMode || "normal",
                                    frequency: s.frequency || .2,
                                    emitterLifetime: s.emitterLifetime || .41,
                                    maxParticles: s.maxParticles || 500,
                                    pos: s.pos || {
                                        x: 0,
                                        y: 0
                                    },
                                    addAtBack: void 0 !== s.addAtBack && s.addAtBack,
                                    spawnType: s.spawnType || "burst",
                                    particlesPerWave: s.particlesPerWave || 10,
                                    particleSpacing: s.particleSpacing || 36,
                                    angleStart: s.angleStart || 0
                                };
                                break;
                            case "flower":
                                a = {
                                    alpha: s.alpha || {
                                        start: 1,
                                        end: 1
                                    },
                                    scale: s.scale || {
                                        start: .1,
                                        end: .15,
                                        minimumScaleMultiplier: .5
                                    },
                                    color: s.color || {
                                        start: "ffffff",
                                        end: "ffffff"
                                    },
                                    speed: s.speed || {
                                        start: 150,
                                        end: 200
                                    },
                                    startRotation: s.startRotation || {
                                        min: 40,
                                        max: 80
                                    },
                                    rotationSpeed: s.rotationSpeed || {
                                        min: 0,
                                        max: 200
                                    },
                                    lifetime: s.lifetime || {
                                        min: 4,
                                        max: 5
                                    },
                                    blendMode: s.blendMode || "normal",
                                    ease: s.ease || [{
                                        s: 0,
                                        cp: .379,
                                        e: .548
                                    }, {
                                        s: .548,
                                        cp: .717,
                                        e: .676
                                    }, {
                                        s: .676,
                                        cp: .635,
                                        e: 1
                                    }],
                                    frequency: s.frequency || .1,
                                    emitterLifetime: s.emitterLifetime || 0,
                                    maxParticles: s.maxParticles || 100,
                                    pos: s.pos || {
                                        x: 0,
                                        y: 0
                                    },
                                    addAtBack: void 0 !== s.addAtBack && s.addAtBack,
                                    spawnType: s.spawnType || "rect",
                                    spawnRect: s.spawnRect || {
                                        x: -200,
                                        y: -100,
                                        w: this.elements.canvas.width + 200,
                                        h: 20
                                    }
                                };
                                break;
                            case "fountain":
                                a = {
                                    alpha: s.alpha || {
                                        start: 1,
                                        end: .31
                                    },
                                    scale: s.scale || {
                                        start: .5,
                                        end: 1
                                    },
                                    color: s.color || {
                                        start: "ffffff",
                                        end: "9ff3ff"
                                    },
                                    speed: s.speed || {
                                        start: 600,
                                        end: 200
                                    },
                                    acceleration: s.acceleration || {
                                        x: 0,
                                        y: 2e3
                                    },
                                    startRotation: s.startRotation || {
                                        min: 260,
                                        max: 280
                                    },
                                    rotationSpeed: s.rotationSpeed || {
                                        min: 0,
                                        max: 0
                                    },
                                    lifetime: s.lifetime || {
                                        min: .25,
                                        max: .5
                                    },
                                    blendMode: s.blendMode || "normal",
                                    frequency: s.frequency || .001,
                                    emitterLifetime: s.emitterLifetime || 0,
                                    maxParticles: s.maxParticles || 1e3,
                                    pos: s.pos || {
                                        x: 0,
                                        y: 0
                                    },
                                    addAtBack: void 0 !== s.addAtBack && s.addAtBack,
                                    spawnType: s.spawnType || "circle",
                                    spawnCircle: s.spawnCircle || {
                                        x: 0,
                                        y: 0,
                                        r: 0
                                    }
                                };
                                break;
                            case "flame":
                                a = {
                                    alpha: s.alpha || {
                                        start: .62,
                                        end: 0
                                    },
                                    scale: s.scale || {
                                        start: .25,
                                        end: .75
                                    },
                                    color: s.color || {
                                        start: "fff191",
                                        end: "ff622c"
                                    },
                                    speed: s.speed || {
                                        start: 500,
                                        end: 500
                                    },
                                    startRotation: s.startRotation || {
                                        min: 265,
                                        max: 275
                                    },
                                    rotationSpeed: s.rotationSpeed || {
                                        min: 50,
                                        max: 50
                                    },
                                    lifetime: s.lifetime || {
                                        min: .1,
                                        max: .75
                                    },
                                    blendMode: s.blendMode || "normal",
                                    frequency: s.frequency || .001,
                                    emitterLifetime: s.emitterLifetime || 0,
                                    maxParticles: s.maxParticles || 1e3,
                                    pos: s.pos || {
                                        x: 0,
                                        y: 0
                                    },
                                    addAtBack: void 0 !== s.addAtBack && s.addAtBack,
                                    spawnType: s.spawnType || "circle",
                                    spawnCircle: s.spawnCircle || {
                                        x: 0,
                                        y: 0,
                                        r: 10
                                    }
                                };
                                break;
                            case "gas":
                                a = {
                                    alpha: s.alpha || {
                                        list: [{
                                            value: .1,
                                            time: 0
                                        }, {
                                            value: .8,
                                            time: .5
                                        }, {
                                            value: 0,
                                            time: 1
                                        }],
                                        isStepped: !1
                                    },
                                    scale: s.scale || {
                                        start: 1,
                                        end: .4
                                    },
                                    color: s.color || {
                                        start: "ffffff",
                                        end: "ffffff"
                                    },
                                    speed: s.speed || {
                                        start: 50,
                                        end: 50
                                    },
                                    startRotation: s.startRotation || {
                                        min: 250,
                                        max: 290
                                    },
                                    rotationSpeed: s.rotationSpeed || {
                                        min: 0,
                                        max: 40
                                    },
                                    lifetime: s.lifetime || {
                                        min: 3,
                                        max: 5
                                    },
                                    blendMode: s.blendMode || "screen",
                                    frequency: s.frequency || .01,
                                    emitterLifetime: s.emitterLifetime || 0,
                                    maxParticles: s.maxParticles || 1e3,
                                    pos: s.pos || {
                                        x: 0,
                                        y: 0
                                    },
                                    addAtBack: void 0 === s.addAtBack || s.addAtBack,
                                    spawnType: s.spawnType || "circle",
                                    spawnCircle: s.spawnCircle || {
                                        x: 0,
                                        y: 0,
                                        r: 100
                                    }
                                };
                                break;
                            case "lightning":
                                a = {
                                    alpha: s.alpha || {
                                        list: [{
                                            value: .1,
                                            time: 0
                                        }, {
                                            value: .8,
                                            time: .25
                                        }, {
                                            value: .1,
                                            time: 1
                                        }],
                                        isStepped: !1
                                    },
                                    scale: s.scale || {
                                        start: 1,
                                        end: 1
                                    },
                                    color: s.color || {
                                        start: "ffffff",
                                        end: "ffffff"
                                    },
                                    speed: s.speed || {
                                        start: 0,
                                        end: 0
                                    },
                                    acceleration: s.acceleration || {
                                        x: 0,
                                        y: 0
                                    },
                                    startRotation: s.startRotation || {
                                        min: 0,
                                        max: 0
                                    },
                                    rotationSpeed: s.rotationSpeed || {
                                        min: 0,
                                        max: 0
                                    },
                                    lifetime: s.lifetime || {
                                        min: .2,
                                        max: .75
                                    },
                                    blendMode: s.blendMode || "screen",
                                    frequency: s.frequency || 1,
                                    emitterLifetime: s.emitterLifetime || 0,
                                    maxParticles: s.maxParticles || 100,
                                    pos: s.pos || {
                                        x: 0,
                                        y: 0
                                    },
                                    addAtBack: void 0 !== s.addAtBack && s.addAtBack,
                                    spawnType: s.spawnType || "rect",
                                    spawnRect: s.spawnRect || {
                                        x: -50,
                                        y: -50,
                                        w: this.elements.canvas.width + 50,
                                        h: 100
                                    }
                                };
                                break;
                            case "rain":
                                a = {
                                    alpha: s.alpha || {
                                        start: .5,
                                        end: .5
                                    },
                                    scale: s.scale || {
                                        start: 1,
                                        end: 1
                                    },
                                    color: s.color || {
                                        start: "ffffff",
                                        end: "ffffff"
                                    },
                                    speed: s.speed || {
                                        start: 3e3,
                                        end: 3e3
                                    },
                                    startRotation: s.startRotation || {
                                        min: 65,
                                        max: 65
                                    },
                                    rotationSpeed: s.rotationSpeed || {
                                        min: 0,
                                        max: 0
                                    },
                                    lifetime: s.lifetime || {
                                        min: .81,
                                        max: .81
                                    },
                                    blendMode: s.blendMode || "normal",
                                    frequency: s.frequency || .004,
                                    emitterLifetime: s.emitterLifetime || 0,
                                    maxParticles: s.maxParticles || 1e3,
                                    pos: s.pos || {
                                        x: 0,
                                        y: 0
                                    },
                                    addAtBack: void 0 !== s.addAtBack && s.addAtBack,
                                    spawnType: s.spawnType || "rect",
                                    spawnRect: s.spawnRect || {
                                        x: -600,
                                        y: -400,
                                        w: this.elements.canvas.width + 600,
                                        h: 20
                                    }
                                };
                                break;
                            case "smoke":
                                a = {
                                    alpha: s.alpha || {
                                        start: .8,
                                        end: .25
                                    },
                                    scale: s.scale || {
                                        start: .1,
                                        end: 1.5
                                    },
                                    color: s.color || {
                                        start: "ff622c",
                                        end: "fff191"
                                    },
                                    speed: s.speed || {
                                        start: 600,
                                        end: 200
                                    },
                                    startRotation: s.startRotation || {
                                        min: 260,
                                        max: 280
                                    },
                                    rotationSpeed: s.rotationSpeed || {
                                        min: 0,
                                        max: 20
                                    },
                                    lifetime: s.lifetime || {
                                        min: .5,
                                        max: .7
                                    },
                                    blendMode: s.blendMode || "normal",
                                    frequency: s.frequency || .01,
                                    emitterLifetime: s.emitterLifetime || 0,
                                    maxParticles: s.maxParticles || 500,
                                    pos: s.pos || {
                                        x: 0,
                                        y: 0
                                    },
                                    addAtBack: void 0 !== s.addAtBack && s.addAtBack,
                                    spawnType: s.spawnType || "point"
                                };
                                break;
                            case "snow":
                                a = {
                                    alpha: s.alpha || {
                                        start: .73,
                                        end: .46
                                    },
                                    scale: s.scale || {
                                        start: .1,
                                        end: .15,
                                        minimumScaleMultiplier: .5
                                    },
                                    color: s.color || {
                                        start: "ffffff",
                                        end: "ffffff"
                                    },
                                    speed: s.speed || {
                                        start: 200,
                                        end: 200
                                    },
                                    startRotation: s.startRotation || {
                                        min: 50,
                                        max: 70
                                    },
                                    rotationSpeed: s.rotationSpeed || {
                                        min: 0,
                                        max: 200
                                    },
                                    lifetime: s.lifetime || {
                                        min: 4,
                                        max: 5
                                    },
                                    blendMode: s.blendMode || "normal",
                                    ease: s.ease || [{
                                        s: 0,
                                        cp: .379,
                                        e: .548
                                    }, {
                                        s: .548,
                                        cp: .717,
                                        e: .676
                                    }, {
                                        s: .676,
                                        cp: .635,
                                        e: 1
                                    }],
                                    frequency: s.frequency || .004,
                                    emitterLifetime: s.emitterLifetime || 0,
                                    maxParticles: s.maxParticles || 1e3,
                                    pos: s.pos || {
                                        x: 0,
                                        y: 0
                                    },
                                    addAtBack: void 0 !== s.addAtBack && s.addAtBack,
                                    spawnType: s.spawnType || "rect",
                                    spawnRect: s.spawnRect || {
                                        x: -500,
                                        y: -300,
                                        w: this.elements.canvas.width + 500,
                                        h: 20
                                    }
                                };
                                break;
                            case "spark":
                                a = {
                                    alpha: s.alpha || {
                                        start: 1,
                                        end: .31
                                    },
                                    scale: s.scale || {
                                        start: .5,
                                        end: 1
                                    },
                                    color: s.color || {
                                        start: "ffffff",
                                        end: "9ff3ff"
                                    },
                                    speed: s.speed || {
                                        start: 1e3,
                                        end: 200
                                    },
                                    startRotation: s.startRotation || {
                                        min: 225,
                                        max: 320
                                    },
                                    rotationSpeed: s.rotationSpeed || {
                                        min: 0,
                                        max: 20
                                    },
                                    lifetime: s.lifetime || {
                                        min: .25,
                                        max: .5
                                    },
                                    blendMode: s.blendMode || "normal",
                                    frequency: s.frequency || .001,
                                    emitterLifetime: s.emitterLifetime || 0,
                                    maxParticles: s.maxParticles || 1e3,
                                    pos: s.pos || {
                                        x: 0,
                                        y: 0
                                    },
                                    addAtBack: void 0 !== s.addAtBack && s.addAtBack,
                                    spawnType: s.spawnType || "circle",
                                    spawnCircle: s.spawnCircle || {
                                        x: 0,
                                        y: 0,
                                        r: 0
                                    }
                                };
                                break;
                            case "starry":
                                a = {
                                    alpha: s.alpha || {
                                        list: [{
                                            value: .1,
                                            time: 0
                                        }, {
                                            value: .8,
                                            time: .5
                                        }, {
                                            value: .1,
                                            time: 1
                                        }],
                                        isStepped: !1
                                    },
                                    scale: s.scale || {
                                        start: 1,
                                        end: 1
                                    },
                                    color: s.color || {
                                        start: "ffffff",
                                        end: "ffffff"
                                    },
                                    speed: s.speed || {
                                        start: 0,
                                        end: 0
                                    },
                                    acceleration: s.acceleration || {
                                        x: 0,
                                        y: 0
                                    },
                                    startRotation: s.startRotation || {
                                        min: 0,
                                        max: 360
                                    },
                                    rotationSpeed: s.rotationSpeed || {
                                        min: 0,
                                        max: 90
                                    },
                                    lifetime: s.lifetime || {
                                        min: .5,
                                        max: 2
                                    },
                                    blendMode: s.blendMode || "screen",
                                    frequency: s.frequency || 1,
                                    emitterLifetime: s.emitterLifetime || 0,
                                    maxParticles: s.maxParticles || 100,
                                    pos: s.pos || {
                                        x: 0,
                                        y: 0
                                    },
                                    addAtBack: void 0 !== s.addAtBack && s.addAtBack,
                                    spawnType: s.spawnType || "rect",
                                    spawnRect: s.spawnRect || {
                                        x: 0,
                                        y: 0,
                                        w: this.elements.canvas.width,
                                        h: this.elements.canvas.height
                                    }
                                };
                                break;
                            case "user":
                            default:
                                a = {
                                    alpha: s.alpha || {
                                        start: 1,
                                        end: 1
                                    },
                                    scale: s.scale || {
                                        start: 1,
                                        end: 1
                                    },
                                    color: s.color || {
                                        start: "ffffff",
                                        end: "ffffff"
                                    },
                                    speed: s.speed || {
                                        start: 100,
                                        end: 100
                                    },
                                    startRotation: s.startRotation || {
                                        min: 0,
                                        max: 360
                                    },
                                    rotationSpeed: s.rotationSpeed || {
                                        min: 0,
                                        max: 0
                                    },
                                    lifetime: s.lifetime || {
                                        min: .5,
                                        max: 1
                                    },
                                    blendMode: s.blendMode || "normal",
                                    frequency: s.frequency || .1,
                                    emitterLifetime: s.emitterLifetime || 0,
                                    maxParticles: s.maxParticles || 500,
                                    pos: s.pos || {
                                        x: 0,
                                        y: 0
                                    },
                                    addAtBack: void 0 !== s.addAtBack && s.addAtBack,
                                    spawnType: s.spawnType || "point"
                                }
                        }
                        return void 0 !== a.spawnRect && 0 === a.spawnRect.w && (a.spawnRect.w = this.elements.canvas.width), void 0 !== a.spawnRect && 0 === a.spawnRect.h && (a.spawnRect.h = this.elements.canvas.height), i = new PIXI.particles.Emitter(e, n, a), null !== i && (i._user = t, i._user.line = this.current.lineNo), i
                    },
                    _clearParticles: function() {
                        for (var e = 0; e < this.renderParticle.length; ++e) this._deleteParticle(this.renderParticle[e]._user.id)
                    },
                    _deleteParticle: function(e) {
                        var t = this._findParticle(e);
                        null !== t && this._removeParticle(t)
                    },
                    _findParticle: function(e) {
                        for (var t = 0; t < this.renderParticle.length; ++t)
                            if (e === this.renderParticle[t]._user.id) return this.renderParticle[t];
                        return null
                    },
                    _addParticle: function(e, t) {
                        if (null !== t && null !== e) {
                            var i = e.particles || [];
                            i.push(t), e.particles = i, this.renderParticle.push(t)
                        }
                    },
                    _removeParticle: function(e) {
                        if (null === e) return !1;
                        var t = e._user.id,
                            i = 0;
                        if (void 0 !== e.parent && null !== e.parent) {
                            var n = e.parent.parentLayer;
                            if (void 0 !== n.particles && null !== n.particles)
                                for (i = n.particles.length; i--;)
                                    if (t === n.particles[i]._user.id) {
                                        n.particles.splice(i, 1);
                                        break
                                    } e.parent.removeChild(e)
                        }
                        for (e.cleanup(), e.destroy(), i = this.renderParticle.length; i--;)
                            if (e === this.renderParticle[i]._user.id) {
                                this.renderParticle.splice(i, 1);
                                break
                            } return 0 === this.renderParticle.length && this.app.renderer.plugins && this.app.renderer.plugins.sprite && this.app.renderer.plugins.sprite.sprites && (this.app.renderer.plugins.sprite.sprites.length = 0), !0
                    },
                    _setParticleValue: function(e, t, i, n) {
                        var r = void 0 !== n && n,
                            a = e;
                        if ("string" == typeof e && (a = this._findParticle(e)), null !== a) {
                            switch (t) {
                                case "frequency":
                                    a.frequency = i;
                                    break;
                                case "addAtBack":
                                case "emitterLifetime":
                                case "maxParticles":
                                case "spawnType":
                                    a[t] = i;
                                    break;
                                case "pos.x":
                                    a.spawnPos.x = i;
                                    break;
                                case "pos.y":
                                    a.spawnPos.y = i;
                                    break;
                                case "acceleration.x":
                                    a.acceleration.x = i;
                                    break;
                                case "acceleration.y":
                                    a.acceleration.y = i;
                                    break;
                                case "lifetime.min":
                                    a.minLifetime = i;
                                    break;
                                case "lifetime.max":
                                    a.maxLifetime = i;
                                    break;
                                case "startRotation.min":
                                    a.minStartRotation = i;
                                    break;
                                case "startRotation.max":
                                    a.maxStartRotation = i;
                                    break;
                                case "rotationSpeed.min":
                                    a.minRotationSpeed = i;
                                    break;
                                case "rotationSpeed.max":
                                    a.maxRotationSpeed = i;
                                    break;
                                case "alpha.start":
                                    a.startAlpha.value = i;
                                    break;
                                case "scale.start":
                                    a.startScale.value = i;
                                    break;
                                case "speed.start":
                                    a.startSpeed.value = i;
                                    break;
                                case "color.start":
                                    a.startColor.value = i
                            }!0 === r && this._setSliderValue(a._user.id, t, i)
                        }
                    },
                    startShake: function(e, t, i, n, r) {
                        var a = void 0 === r || r && this.current.isSkipable,
                            s = this.app.stage,
                            o = {
                                effect: {
                                    type: "shake",
                                    duration: e,
                                    horizontal: t,
                                    vertical: i,
                                    count: n || e / 200
                                }
                            },
                            l = {
                                type: "image",
                                image: s,
                                container: s,
                                renderOp: o,
                                isFinished: !1,
                                isSkipable: a
                            };
                        this._pushQueue(l), this.logInfo("startShake:H=" + t + ", V=" + i + ", Count=" + n + ", Duration=" + e)
                    },
                    stopShake: function() {
                        var e = this._findRenderObj("image", "shake");
                        null !== e && (this._renderObject(e, !0), this.logInfo("stopShake"))
                    },
                    _findWaitDef: function(e) {
                        for (var t = 0; t < this._waitDef.length; ++t)
                            if (e === this._waitDef[t][0]) return this._waitDef[t];
                        return null
                    },
                    resetWait: function() {
                        return this.runtime.waitType = this.WAIT_NONE, this.runtime.waitIndex = -1, this.runtime.waitTick = 0, this.runtime.waitUntil = 0, this.runtime.waitType
                    },
                    clearWait: function(e, t) {
                        if ("object" == typeof e)
                            for (var i = 0; i < e.length; ++i) this.clearWait(e[i], t);
                        void 0 === e || e !== this.wait() || -1 !== this.runtime.waitIndex && t !== this.runtime.waitIndex || this.resetWait()
                    },
                    wait: function(e, t, i) {
                        if (void 0 !== e) {
                            if (this.WAIT_NONE === e) return this.resetWait();
                            var n = this._findWaitDef(e);
                            if (null === n) return this.resetWait();
                            if (1 === n.length) this.runtime.waitType = e, this.runtime.waitIndex = i || -1, this.runtime.waitTick = 0, this.runtime.waitUntil = 0;
                            else {
                                if (4 !== n.length) return this.runtime.waitType;
                                if ("c" === n[1]) {
                                    var r = this._findRenderObj(n[2], n[3], i);
                                    if (null === r || !0 === r.isFinished) return this.runtime.waitType;
                                    if (void 0 !== r.renderOp)
                                        if (r.renderOp.clearEvent = e, void 0 === r.renderOp.onEnd) r.renderOp.onEnd = function() {
                                            Vinos.clearWait(this.renderOp.clearEvent)
                                        };
                                        else {
                                            var a = r.renderOp.onEnd;
                                            r.renderOp.onEnd = function() {
                                                Vinos.clearWait(this.renderOp.clearEvent), a()
                                            }
                                        } void 0 !== t && (r.isSkipable = t), this.runtime.waitType = e, this.runtime.waitIndex = i || -1, this.runtime.waitTick = 0, this.runtime.waitUntil = 0, this.logInfo("wait:Command=" + e)
                                } else if ("e" === n[1]) {
                                    if (!1 === this.config.useAnim && "video" === n[2]) return;
                                    if (this.DEFAULT_LAYERUSAGE_BGM === n[2] || this.DEFAULT_LAYERUSAGE_SE === n[2] || this.DEFAULT_LAYERUSAGE_SE === n[2]) {
                                        if (!0 === this.runtime.isFastSkip) return;
                                        if (!1 === this.isAudioPlaying(n[2], i)) return
                                    }
                                    this.runtime.waitType = e, this.runtime.waitIndex = i || -1, this.runtime.waitTick = (new Date).getTime(), this.runtime.waitUntil = this.runtime.waitTick + this.DEFAULT_MAX_WAITTIME, this.logInfo("wait:Event=" + e)
                                }
                            }
                        }
                        return this.runtime.waitType
                    },
                    markWaitUntil: function() {
                        this.runtime.savedWaitStart = (new Date).getTime()
                    },
                    waitUntil: function(e, t, i, n) {
                        this.wait(this.WAIT_UNTIL);
                        var r = void 0 === i || i,
                            a = {
                                type: "command",
                                renderOp: {
                                    type: "wait",
                                    duration: e,
                                    onEnd: n
                                },
                                isSkipable: r
                            };
                        !0 === t && 0 < this.runtime.savedWaitStart && (a.renderOp.start = this.runtime.savedWaitStart, this.runtime.savedWaitStart = 0), this._pushQueue(a), this.logInfo("waitUntil:" + e)
                    },
                    _parseObject: function(e) {
                        var t = null;
                        try {
                            t = JSON.parse(e)
                        } catch (t) {
                            this.logError("Exception in parsing from JSON to object. Str:" + e + "(" + this.current.lineNo + ")"), this.logError(t.message, !1)
                        }
                        return t
                    },
                    _processCommand: function(cmdStr, line) {
                        var cmdParams = this._parseCommand(cmdStr);
                        if (!0 === this.ignoreScript && "ENDIGNORE" !== cmdParams[0] && "ENDSCRIPT" !== cmdParams[0]) return !1;
                        if (!0 === this.isTJS && "ENDSCRIPT" !== cmdParams[0]) return !1;
                        if (!0 === this.runtime.isMacro && "ENDMACRO" !== cmdParams[0]) {
                            if (0 === this.macros.length) return !1;
                            var macro = this.macros[this.macros.length - 1];
                            return macro.lines.push({
                                line: line,
                                command: cmdStr
                            }), !1
                        }
                        if (0 < this.current.isIf && !1 === this.current.ifCurrent && "ENDIF" !== cmdParams[0] && "ELSE" !== cmdParams[0] && "ELSEIF" !== cmdParams[0] && "IF" !== cmdParams[0]) return !1;
                        switch (cmdParams[0]) {
                            case "INITIALIZE":
                            case "CLEARALL":
                                this.clearAll();
                                break;
                            case "SETDIALOG":
                                var config = this._getParameterValue(cmdParams, "option");
                                null !== config && this.setDialog(config);
                                break;
                            case "SHOWDIALOG":
                                this.showDialog();
                                break;
                            case "HIDEDIALOG":
                                this.hideDialog();
                                break;
                            case "CLEARDIALOG":
                                this.clearDialog();
                                break;
                            case "ADDDIALOG":
                                void 0 !== line && (this.current.dialogText += line);
                                var name = this._getParameterValue(cmdParams, "name"),
                                    text = this._getParameterValue(cmdParams, "text");
                                if (null !== name && (this.current.dialogName = name), null !== text && (this.current.dialogText += text), 0 < this.current.dialogText.length) {
                                    for (var j = 0; j < this.current.dialogRuby.length; ++j) {
                                        var kanji = this.current.dialogRuby[j].kanji,
                                            ruby = this.current.dialogRuby[j].ruby;
                                        this.current.dialogText = eTOYutil.fnReplaceStr(this.current.dialogText, kanji, ruby, !1)
                                    }
                                    this.addDialog(this.current.dialogText, this.current.dialogName, this.current.dialogNameClass, this.current.dialogVoice)
                                }
                                null === name && null === text || this.wait(this.WAIT_CLICK_CM);
                                break;
                            case "CLEARHISTORY":
                                this.clearHistory();
                                break;
                            case "SETNAME":
                                if (null === (name = this._getParameterValue(cmdParams, ["name", 1]))) break;
                                this.current.dialogName = name;
                                break;
                            case "ADDIMAGE":
                            case "SETIMAGE":
                                var layer = this._getParameterValue(cmdParams, "layer"),
                                    container = this._getLayoutContainer(layer);
                                if (null === container) break;
                                "SETIMAGE" === cmdParams[0] && this.clearImage(container);
                                var id = this._getParameterValue(cmdParams, "id");
                                if (null === layer || null === id) break;
                                var option = this._getParameterValue(cmdParams, "option");
                                null !== option ? ("string" == typeof option && (option = this._parseObject(option)), this.addImage(container, id, option)) : this.addImage(container, id);
                                break;
                            case "CLEARIMAGE":
                                if (null === (layer = this._getParameterValue(cmdParams, "layer"))) break;
                                if (null === (container = this._getLayoutContainer(layer))) break;
                                this.clearImage(container);
                                break;
                            case "MOVEIMAGE":
                                if (layer = this._getParameterValue(cmdParams, "layer"), id = this._getParameterValue(cmdParams, "id"), null === layer || null === id) break;
                                if (null === (container = this._getLayoutContainer(layer))) break;
                                option = this._getParameterValue(cmdParams, "option"), null !== option ? ("string" == typeof option && (option = this._parseObject(option)), this.moveImage(container, id, option)) : this.moveImage(container, id);
                                break;
                            case "FADEIMAGE":
                            case "FADEINIMAGE":
                            case "FADEOUTIMAGE":
                                if (layer = this._getParameterValue(cmdParams, "layer"), id = this._getParameterValue(cmdParams, "id"), null === layer || null === id) break;
                                if (null === (container = this._getLayoutContainer(layer))) break;
                                var fade = this._getParameterValue(cmdParams, "fade");
                                "out" !== fade && (fade = "in"), "FADEINIMAGE" === cmdParams[0] && (fade = "in"), "FADEOUTIMAGE" === cmdParams[0] && (fade = "out"), option = this._getParameterValue(cmdParams, "option"), null !== option ? ("string" == typeof option && (option = this._parseObject(option)), "in" === fade ? this.fadeInImage(container, id, option) : this.fadeOutImage(container, id, option)) : "in" === fade ? this.fadeInImage(container, id) : this.fadeOutImage(container, id);
                                break;
                            case "SCALEIMAGE":
                                if (layer = this._getParameterValue(cmdParams, "layer"), id = this._getParameterValue(cmdParams, "id"), null === layer || null === id) break;
                                if (null === (container = this._getLayoutContainer(layer))) break;
                                option = this._getParameterValue(cmdParams, "option"), null !== option ? ("string" == typeof option && (option = this._parseObject(option)), this.scaleImage(container, id, option)) : this.scaleImage(container, id);
                                break;
                            case "ROTATEIMAGE":
                                if (layer = this._getParameterValue(cmdParams, "layer"), id = this._getParameterValue(cmdParams, "id"), null === layer || null === id) break;
                                if (null === (container = this._getLayoutContainer(layer))) break;
                                option = this._getParameterValue(cmdParams, "option"), null !== option ? ("string" == typeof option && (option = this._parseObject(option)), this.rotateImage(container, id, option)) : this.rotateImage(container, id);
                                break;
                            case "SCROLLIMAGE":
                                if (layer = this._getParameterValue(cmdParams, "layer"), id = this._getParameterValue(cmdParams, "id"), null === layer || null === id) break;
                                if (null === (container = this._getLayoutContainer(layer))) break;
                                option = this._getParameterValue(cmdParams, "option"), null !== option ? ("string" == typeof option && (option = this._parseObject(option)), this.scrollImage(container, id, option)) : this.scrollImage(container, id);
                                break;
                            case "ADDCHILD":
                                name = this._getParameterValue(cmdParams, "name"), layer = this._getParameterValue(cmdParams, "layer");
                                var child = this._getParameterValue(cmdParams, "child");
                                if (option = this._getParameterValue(cmdParams, "option") || {}, null === name && null === layer || null === child) break;
                                var sprite = null;
                                if (null !== layer) {
                                    if (null === (container = this._getLayoutContainer(layer))) break;
                                    sprite = container.getChildAt(0)
                                } else null !== (sprite = this.findCharacter(name)) && (container = sprite.parent);
                                if (null === sprite) break;
                                option.parent = sprite, $.extend(child.option, option), child.option.isChild = !0, this.addImage(container, child.id, child.option);
                                break;
                            case "UPDATECHILD":
                                if (name = this._getParameterValue(cmdParams, "name"), layer = this._getParameterValue(cmdParams, "layer"), child = this._getParameterValue(cmdParams, "child"), option = this._getParameterValue(cmdParams, "option") || {}, null === name && null === layer || null === child) break;
                                if (sprite = null, null !== layer) {
                                    if (null === (container = this._getLayoutContainer(layer))) break;
                                    sprite = container.getChildAt(0)
                                } else null !== (sprite = this.findCharacter(name)) && (container = sprite.parent);
                                if (null === sprite) break;
                                var oldChild = sprite.getChildAt(0);
                                option.parent = sprite, option.isChild = !0, option.alpha = 0, option.add = !1, $.extend(child.option, option);
                                var renderObjQueue = [],
                                    newChild = this.addImage(container, child.id, child.option, !1);
                                if (!0 === option.fade) {
                                    var duration = option.duration || 100;
                                    renderObjQueue.push({
                                        type: "image",
                                        image: oldChild,
                                        container: sprite,
                                        renderOp: {
                                            x: 0,
                                            y: 0,
                                            effect: {
                                                type: "fadeOut",
                                                duration: duration,
                                                opaque: oldChild.alpha
                                            }
                                        },
                                        isFinished: !1
                                    }), renderObjQueue.push({
                                        type: "image",
                                        image: newChild,
                                        container: sprite,
                                        renderOp: {
                                            x: 0,
                                            y: 0,
                                            effect: {
                                                type: "fadeIn",
                                                duration: duration,
                                                opaque: sprite.alpha
                                            }
                                        },
                                        isFinished: !1
                                    })
                                } else renderObjQueue.push({
                                    type: "image",
                                    image: oldChild,
                                    container: sprite,
                                    renderOp: {
                                        x: 0,
                                        y: 0,
                                        effect: {
                                            type: "clear",
                                            remove: !0
                                        }
                                    },
                                    isFinished: !1
                                }), renderObjQueue.push({
                                    type: "image",
                                    image: newChild,
                                    container: sprite,
                                    renderOp: {
                                        x: 0,
                                        y: 0,
                                        effect: null,
                                        visible: !0
                                    },
                                    isFinished: !1
                                });
                                this._pushQueue(renderObjQueue);
                                break;
                            case "CLEARCHILD":
                                if (name = this._getParameterValue(cmdParams, "name"), layer = this._getParameterValue(cmdParams, "layer"), child = this._getParameterValue(cmdParams, "child"), null === layer && null === name) break;
                                if (sprite = null, null !== layer) {
                                    if (null === (container = this._getLayoutContainer(layer))) break;
                                    sprite = container.getChildAt(0)
                                } else null !== (sprite = this.findCharacter(name)) && (container = sprite.parent);
                                null !== sprite && (null !== child && void 0 !== child.id ? this.clearImage(sprite, child.id) : this.clearImage(sprite));
                                break;
                            case "EFFECT":
                            case "ADDEFFECT":
                                if (null === (id = this._getParameterValue(cmdParams, "id"))) break;
                                id = id.toLowerCase();
                                var type = this._getParameterValue(cmdParams, "type");
                                if (null === type) {
                                    this._deleteFilter(id);
                                    break
                                }
                                type = type.toLowerCase(), layer = this._getParameterValue(cmdParams, "layer");
                                var animate = eTOYutil.fnParseBool(this._getParameterValue(cmdParams, "animate", !1));
                                if (null === (container = this._getLayoutContainer(layer))) break;
                                var mp = {};
                                if (1 < cmdParams.length) {
                                    for (var mpStr = "{", delim = "", i = 1; i < cmdParams.length; ++i) {
                                        var value = cmdParams[i];
                                        "id" !== value.name && "type" !== value.name && "layer" !== value.name && "animate" !== value.name && ("object" == typeof value && (mpStr += delim + '"' + value.name + '":' + this._getValue(value.value), delim = ","))
                                    }
                                    mpStr += "}", mp = this._parseObject(mpStr)
                                }
                                var filter = this._createFilter(container, {
                                    id: id,
                                    type: type,
                                    param: mp,
                                    animate: animate
                                });
                                "base" !== layer && (filter.autoFit = !1), this._addFilter(container, filter, animate);
                                break;
                            case "CLEAREFFECT":
                                if (null === (id = this._getParameterValue(cmdParams, "id"))) break;
                                id = id.toLowerCase(), this._deleteFilter(id);
                                break;
                            case "SETEFFECT":
                            case "EFFECT_SET":
                                if (null === (id = this._getParameterValue(cmdParams, "id"))) break;
                                if (id = id.toLowerCase(), null === (name = this._getParameterValue(cmdParams, "name"))) break;
                                value = this._getParameterValue(cmdParams, "value");
                                var min = this._getParameterValue(cmdParams, "min"),
                                    max = this._getParameterValue(cmdParams, "max"),
                                    step = this._getParameterValue(cmdParams, "step");
                                duration = eTOYutil.fnParseInt(this._getParameterValue(cmdParams, "t", this.DEFAULT_DURATION));
                                var slider = eTOYutil.fnParseBool(this._getParameterValue(cmdParams, "slider", !1));
                                if (null === value && null === min && null === max) break;
                                if (null === (filter = this._findFilter(id))) break;
                                var renderOp = {
                                    type: "set",
                                    name: name,
                                    value: value,
                                    effect: null,
                                    slider: slider
                                };
                                null !== min && null !== max && (renderOp.effect = {}, renderOp.effect.min = eTOYutil.fnParseFloat(min), renderOp.effect.max = eTOYutil.fnParseFloat(max), renderOp.effect.duration = duration, null !== step && (renderOp.effect.step = eTOYutil.fnParseFloat(step)));
                                var renderObj = {
                                    type: "effect",
                                    filter: filter,
                                    renderOp: renderOp,
                                    isFinished: !1
                                };
                                this._pushQueue(renderObj);
                                break;
                            case "PARTICLE":
                            case "ADDPARTICLE":
                                if (null === (id = this._getParameterValue(cmdParams, "id"))) break;
                                if (id = id.toLowerCase(), null === (type = this._getParameterValue(cmdParams, "type"))) {
                                    this._deleteParticle(id);
                                    break
                                }
                                if (type = type.toLowerCase(), layer = this._getParameterValue(cmdParams, "layer"), null === (container = this._getLayoutContainer(layer))) break;
                                var images = this._getParameterValue(cmdParams, "images");
                                if (mp = {}, 1 < cmdParams.length) {
                                    for (mpStr = "{", delim = "", i = 1; i < cmdParams.length; ++i) value = cmdParams[i], "id" !== value.name && "type" !== value.name && "layer" !== value.name && "images" !== value.name && "object" == typeof value && (mpStr += delim + '"' + value.name + '":' + this._getValue(value.value), delim = ",");
                                    mpStr += "}", mp = this._parseObject(mpStr)
                                }
                                var particle = this._createParticle(container, {
                                    id: id,
                                    type: type,
                                    images: images,
                                    param: mp
                                });
                                this._addParticle(container, particle);
                                break;
                            case "CLEARPARTICLE":
                                if (null === (id = this._getParameterValue(cmdParams, "id"))) break;
                                id = id.toLowerCase(), this._deleteParticle(id);
                                break;
                            case "SETPARTICLE":
                            case "PARTICLE_SET":
                                if (null === (id = this._getParameterValue(cmdParams, "id"))) break;
                                if (id = id.toLowerCase(), null === (name = this._getParameterValue(cmdParams, "name"))) break;
                                if (value = this._getParameterValue(cmdParams, "value"), min = this._getParameterValue(cmdParams, "min"), max = this._getParameterValue(cmdParams, "max"), step = this._getParameterValue(cmdParams, "step"), duration = eTOYutil.fnParseInt(this._getParameterValue(cmdParams, "t", this.DEFAULT_DURATION)), null === value && null === min && null === max) break;
                                if (null === (particle = this._findParticle(id))) break;
                                renderOp = {
                                    type: "set",
                                    name: name,
                                    value: value,
                                    effect: null,
                                    slider: null
                                }, null !== min && null !== max && (renderOp.effect = {}, renderOp.effect.min = eTOYutil.fnParseFloat(min), renderOp.effect.max = eTOYutil.fnParseFloat(max), renderOp.effect.duration = duration, null !== step && (renderOp.effect.step = eTOYutil.fnParseFloat(step))), renderObj = {
                                    type: "particle",
                                    particle: particle,
                                    renderOp: renderOp,
                                    isFinished: !1
                                }, this._pushQueue(renderObj);
                                break;
                            case "LABEL":
                                var sceneName = this._getParameterValue(cmdParams, "name"),
                                    sceneTitle = this._getParameterValue(cmdParams, "title");
                                this._changeScene(sceneName, sceneTitle);
                                break;
                            case "EVAL":
                                var exp = this._getParameterValue(cmdParams, "exp");
                                try {
                                    var ret = eval(exp);
                                    this.logInfo("EVAL:Exp=" + exp + ", Ret=" + ret), this.trigger("eval", exp, ret, this.current.scriptName, this.current.lineNo)
                                } catch (e) {
                                    this.logError("Exception in evaluation. Exp:" + exp + ", Error=" + e.message)
                                }
                                break;
                            case "RANDOM":
                                if (null === (name = this._getParameterValue(cmdParams, "name"))) break;
                                min = eTOYutil.fnParseFloat(this._getParameterValue(cmdParams, "min", 0)), max = eTOYutil.fnParseFloat(this._getParameterValue(cmdParams, "max", 10));
                                var integerOnly = eTOYutil.fnParseBool(this._getParameterValue(cmdParams, "integer", !0));
                                value = Math.random() * (max - min) + min, integerOnly && (value = Math.floor(value));
                                try {
                                    ret = eval(name + "=" + value), this.logInfo("RANDOM:Name=" + name + ", Value=" + ret)
                                } catch (e) {
                                    this.logError("Exception in evaluation. Exp:" + name + ", Error=" + e.message)
                                }
                                break;
                            case "IF":
                                if (null === (exp = this._getParameterValue(cmdParams, "exp"))) break;
                                var result = this.eval(exp);
                                this.current.isIf++, this.current.ifResult.push(result), this.current.ifCurrent = this.current.ifPrevious && result, this.logInfo("IF:Exp=" + exp + ", Result=" + result + ", Final=" + this.current.ifCurrent + ", Level=" + this.current.isIf);
                                break;
                            case "ELSE":
                                if (0 === this.current.isIf) {
                                    this.logError("Invalid ELSE - Cannot find a matching 'if'.(" + this.current.lineNo + ")");
                                    break
                                }
                                result = this.current.ifResult[this.current.ifResult.length - 1], result = !result, this.current.ifCurrent = this.current.ifPrevious && result, this.logInfo("ELSE:Result=" + result + ", Final=" + this.current.ifCurrent + ", Level=" + this.current.isIf);
                                break;
                            case "ELSEIF":
                                if (0 === this.current.isIf) {
                                    this.logError("Invalid ELSEIF - Cannot find a matching 'if'.(" + this.current.lineNo + ")");
                                    break
                                }
                                if (null === (exp = this._getParameterValue(cmdParams, "exp"))) break;
                                result = this.eval(exp), this.current.ifResult[this.current.ifResult.length - 1] = result, this.current.ifCurrent = this.current.ifPrevious && result, this.logInfo("ELSEIF:Result=" + result + ", Final=" + this.current.ifCurrent + ", Level=" + this.current.isIf);
                                break;
                            case "ENDIF":
                                if (0 === this.current.isIf) {
                                    this.logError("Invalid ENDIF - Cannot find a matching 'if'.(" + this.current.lineNo + ")");
                                    break
                                }
                                this.current.isIf--, this.current.ifPrevious = this.current.ifResult.pop(), 0 === this.current.ifResult.length && (this.current.ifPrevious = !0, this.current.ifCurrent = !0), this.logInfo("ENDIF:Final=" + this.current.ifCurrent + ", Level=" + this.current.isIf);
                                break;
                            case "JUMP":
                                var storage = this._getParameterValue(cmdParams, "storage"),
                                    target = this._getParameterValue(cmdParams, "target");
                                this.jump(target, storage);
                                break;
                            case "CALL":
                                storage = this._getParameterValue(cmdParams, "storage"), target = this._getParameterValue(cmdParams, "target"), null === target && (target = "*"), this.call(target, storage);
                                break;
                            case "RETURN":
                                this.trigger("return", this.current.callStack), this.logInfo("RETURN"), this._popCallStack();
                                break;
                            case "WAITEVENT":
                                var event = this._getParameterValue(cmdParams, ["event", 1]);
                                switch (event) {
                                    case "timer":
                                        var time = eTOYutil.fnParseInt(this._getParameterValue(cmdParams, "time", this.DEFAULT_DURATION));
                                        this.waitUntil(time);
                                        break;
                                    case "click":
                                        this.wait(this.WAIT_CLICK);
                                        break;
                                    case "click_cm":
                                        this.wait(this.WAIT_CLICK_CM);
                                        break;
                                    case "input":
                                        this.wait(this.WAIT_INPUT);
                                        break;
                                    case "shake":
                                        this.wait(this.WAIT_IMAGE_SHAKE);
                                        break;
                                    case "layer_move":
                                        this.wait(this.WAIT_LAYER_MOVE);
                                        break;
                                    case "bgm_stop":
                                        this.wait(this.WAIT_BGM_STOP);
                                        break;
                                    case "se_stop":
                                        this.wait(this.WAIT_SE_STOP);
                                        break;
                                    case "vo_stop":
                                        this.wait(this.WAIT_VO_STOP);
                                        break;
                                    case "video_stop":
                                        this.wait(this.WAIT_VIDEO_STOP);
                                        break;
                                    default:
                                        this.wait(this.WAIT_NONE)
                                }
                                break;
                            case "OPENUI":
                                storage = this._getParameterValue(cmdParams, "file"), type = this._getParameterValue(cmdParams, "type", "html"), layer = this._getParameterValue(cmdParams, "layer", "interface"), this.openUI({
                                    file: storage,
                                    type: type,
                                    layer: layer
                                });
                                break;
                            case "CLOSEUI":
                                this.closeUI();
                                break;
                            case "DIVIDER":
                                layer = this._getParameterValue(cmdParams, "layer", "interface"), this.makeDivider({
                                    layer: layer
                                });
                                break;
                            case "BUTTONLINK":
                            case "BUTTON_LINK":
                                this.runtime.prevSelect = null, storage = this._getParameterValue(cmdParams, "storage"), target = this._getParameterValue(cmdParams, "target");
                                var bmp = this._getParameterValue(cmdParams, "bmp");
                                text = this._getParameterValue(cmdParams, "text"), layer = this._getParameterValue(cmdParams, "layer");
                                var x = eTOYutil.fnParseInt(this._getParameterValue(cmdParams, "x", 0)),
                                    y = eTOYutil.fnParseInt(this._getParameterValue(cmdParams, "y", 0)),
                                    width = eTOYutil.fnParseInt(this._getParameterValue(cmdParams, "width", 0)),
                                    height = eTOYutil.fnParseInt(this._getParameterValue(cmdParams, "height", 0)),
                                    onenter = this._getParameterValue(cmdParams, "onenter"),
                                    onleave = this._getParameterValue(cmdParams, "onleave"),
                                    msgx = eTOYutil.fnParseInt(this._getParameterValue(cmdParams, "msgx", 0)),
                                    msgy = eTOYutil.fnParseInt(this._getParameterValue(cmdParams, "msgy", 0)),
                                    opt = {
                                        text: text,
                                        image: bmp,
                                        file: storage,
                                        label: target,
                                        x: x,
                                        y: y,
                                        width: width,
                                        height: height,
                                        hintPos: {
                                            x: msgx,
                                            y: msgy
                                        }
                                    },
                                    onclick = this._getParameterValue(cmdParams, "onclick");
                                null !== onenter && (opt.OnEnterMsg = onenter), null !== onleave && (opt.OnLeaveMsg = onleave), null !== onclick && (opt.OnClickExp = onclick), null !== layer && (opt.layer = layer), this.makeButton(opt);
                                break;
                            case "SWITCH":
                                if (null === (target = this._getParameterValue(cmdParams, "target"))) break;
                                if (target = target.toLowerCase(), null === (name = this._getParameterValue(cmdParams, "name"))) break;
                                value = eTOYutil.fnParseBool(this._getParameterValue(cmdParams, "value", !1)), this.makeSwitch({
                                    name: name,
                                    target: target,
                                    value: value
                                });
                                break;
                            case "SLIDER":
                                if (null === (target = this._getParameterValue(cmdParams, "target"))) break;
                                if (target = target.toLowerCase(), null === (name = this._getParameterValue(cmdParams, "name"))) break;
                                min = eTOYutil.fnParseFloat(this._getParameterValue(cmdParams, "min", 0)), max = eTOYutil.fnParseFloat(this._getParameterValue(cmdParams, "max", 1)), step = eTOYutil.fnParseFloat(this._getParameterValue(cmdParams, "step", .01)), value = eTOYutil.fnParseFloat(this._getParameterValue(cmdParams, "value", .5)), this.makeSlider({
                                    name: name,
                                    target: target,
                                    value: value,
                                    min: min,
                                    max: max,
                                    step: step
                                });
                                break;
                            case "DROPDOWN":
                                if (null === (target = this._getParameterValue(cmdParams, "target"))) break;
                                if (target = target.toLowerCase(), null === (name = this._getParameterValue(cmdParams, "name"))) break;
                                var labels = this._getParameterValue(cmdParams, "labels");
                                if (null === labels) break;
                                labels = labels.split(",");
                                var values = this._getParameterValue(cmdParams, "values");
                                null !== values && (values = values.split(",")), value = this._getParameterValue(cmdParams, "value"), this.makeDropdown({
                                    name: name,
                                    target: target,
                                    labels: labels,
                                    values: values,
                                    value: value
                                });
                                break;
                            case "TEXTLINK":
                            case "MAKELINK":
                                storage = this._getParameterValue(cmdParams, "storage", ""), target = this._getParameterValue(cmdParams, "target", ""), text = this._getParameterValue(cmdParams, "text", "");
                                var url = this._getParameterValue(cmdParams, "url", "");
                                this.makeLink({
                                    text: text,
                                    file: storage,
                                    label: target,
                                    url: url
                                });
                                break;
                            case "DEFINE":
                                if (id = this._getParameterValue(cmdParams, "id"), value = this._getParameterValue(cmdParams, "value"), null === id) {
                                    this.logError("Exception in " + cmdParams[0] + ". (" + this.current.lineNo + ")");
                                    break
                                }
                                null === value ? this._deleteDefine(id) : this._addDefine(id, value);
                                break;
                            case "MACRO":
                                if (null === (name = this._getParameterValue(cmdParams, "name"))) break;
                                this.beginMacro(name);
                                break;
                            case "ENDMACRO":
                                this.endMacro();
                                break;
                            case "DELETEMACRO":
                            case "DELETE_MACRO":
                                if (null === (name = this._getParameterValue(cmdParams, "name"))) break;
                                this._deleteMacro(name);
                                break;
                            case "MACRO_RETURN":
                                this.current.doMacro--, this._popScript();
                                break;
                            case "BEGINBUNDLE":
                            case "BEGIN_BUNDLE":
                                this.beginBundle();
                                break;
                            case "ENDBUNDLE":
                            case "END_BUNDLE":
                                this.endBundle();
                                break;
                            case "SETPROGRESS":
                                if (type = this._getParameterValue(cmdParams, "type"), name = this._getParameterValue(cmdParams, "name"), value = this._getParameterValue(cmdParams, "value"), null === type || null === name) {
                                    this.logError("SetProgress:Missing parameters (check type, name)");
                                    break
                                }
                                var progress = this._getProgressDef(type);
                                if (null === progress) {
                                    this.logError("SetProgress:Invalid parameters. Type=" + type);
                                    break
                                }
                                var found = this._findProgressPos(progress, name);
                                if (0 > found.pos) {
                                    this.logError("SetProgress:Invalid name. Name=" + name);
                                    break
                                }
                                null !== value && void 0 !== value && "undefined" !== value || (value = this.eval(name)), this._setProgress(progress, found.pos, value);
                                break;
                            case "SETCONFIG":
                                config = this._getParameterValue(cmdParams, "config"), null !== config && this.setConfig(config);
                                break;
                            case "ENDGAME":
                            case "END_GAME":
                                return this.end(), !0;
                            case "TRACE":
                                if (null === (exp = this._getParameterValue(cmdParams, "exp"))) break;
                                eTOYutil.fnDebug(this.eval(exp));
                                break;
                            case "LOG":
                                var msg = this._getParameterValue(cmdParams, "msg");
                                if (null === msg)
                                    for (i = 1; i < cmdParams.length; ++i) eTOYutil.fnDebug(cmdParams[i]);
                                else eTOYutil.fnDebug(msg);
                                break;
                            case "LOGLEVEL":
                            case "LOG_LEVEL":
                                var info = this._getParameterValue(cmdParams, "info"),
                                    debug = this._getParameterValue(cmdParams, "debug"),
                                    warn = this._getParameterValue(cmdParams, "warn"),
                                    error = this._getParameterValue(cmdParams, "error"),
                                    fatal = this._getParameterValue(cmdParams, "fatal"),
                                    logLevel = {};
                                null !== info && (logLevel.info = eTOYutil.fnParseBool(info)), null !== debug && (logLevel.debug = eTOYutil.fnParseBool(debug)), null !== warn && (logLevel.warn = eTOYutil.fnParseBool(warn)), null !== error && (logLevel.error = eTOYutil.fnParseBool(error)), null !== fatal && (logLevel.fatal = eTOYutil.fnParseBool(fatal)), this.setLogLevel(logLevel);
                                break;
                            case "CALLSTACK":
                                this._stackTrace();
                                break;
                            case "SCREENSHOT":
                                width = eTOYutil.fnParseInt(this._getParameterValue(cmdParams, "width", this._getThumbnailWidth())), height = eTOYutil.fnParseInt(this._getParameterValue(cmdParams, "height", this._getThumbnailHeight())), window.open(this._getThumbnail(width, height));
                                break;
                            case "IGNORE":
                                if (null === (exp = this._getParameterValue(cmdParams, "exp"))) {
                                    this.logError("Missing 'exp' in [ignore] (" + this.current.lineNo + ")");
                                    break
                                }
                                result = !1;
                                try {
                                    result = eval(exp)
                                } catch (e) {
                                    this.logError("Exception in evaluation. Exp:" + exp + "(" + this.current.lineNo + ")"), this.logError(e.message, !1)
                                }!0 === result && (this.ignoreScript = !0);
                                break;
                            case "ENDIGNORE":
                                this.ignoreScript = !1;
                                break;
                            default:
                                var macroIndex = this._findMacro(cmdParams[0]);
                                if (0 > macroIndex) {
                                    if (null !== (ret = this._callPluginFunc("processCommand", cmdParams, line))) return ret;
                                    this.logWarn("Command:" + cmdParams[0] + ", line:" + line + "(" + this.current.lineNo + ")");
                                    break
                                }
                                if (macro = this.macros[macroIndex], mp = {}, 1 < cmdParams.length) {
                                    for (mpStr = "{", delim = "", i = 1; i < cmdParams.length; ++i) "object" == typeof(value = cmdParams[i]) && (mpStr += delim + '"' + value.name + '":' + this._getValue(value.value), delim = ",");
                                    mpStr += "}", mp = this._parseObject(mpStr)
                                }
                                this._pushScript(macroIndex + this.SCRIPT_MACRO_ARRAY), this.current.doMacro++
                        }
                        return !1
                    },
                    playVoice: function(e, t) {
                        var i = this._prePlayVoice(e, t);
                        i && this.playSound(this.DEFAULT_LAYERUSAGE_VO, i.voice, 0, i.option)
                    },
                    _playVoice: function(e, t) {
                        var i = this._prePlayVoice(e, t);
                        i && this._playSound(this.DEFAULT_LAYERUSAGE_VO, i.voice, 0, i.option)
                    },
                    _playVoiceSample: function(e, t) {
                        var i = {
                                name: t,
                                volume: 1,
                                waitUntil: !1,
                                skipLog: !0
                            },
                            n = this.getVolumeChar(i.name, e);
                        0 <= n && (i.volume = n), this._playSound(this.DEFAULT_LAYERUSAGE_VO, e, 0, i)
                    },
                    _prePlayVoice: function(e, t) {
                        if (t = void 0 !== t ? t : this.config.waitVoice, null === this._getLayout(this.DEFAULT_LAYERUSAGE_VO)) return null;
                        this.current.dialogNameClass = "voice", this.current.dialogVoice = e;
                        var i = {
                            waitUntil: t
                        };
                        if (void 0 !== this.current.config && void 0 !== this.current.config.volumeChar) {
                            0 < this.current.dialogName.length && (i.name = this.current.dialogName);
                            var n = this.getVolumeChar(i.name, e);
                            0 <= n && (i.volume = n)
                        }
                        return {
                            voice: e,
                            option: i
                        }
                    },
                    stopVoice: function() {
                        this._preStopVoice(), this.stopSound(this.DEFAULT_LAYERUSAGE_VO)
                    },
                    _stopVoice: function() {
                        this._preStopVoice(), this._stopSound(this.DEFAULT_LAYERUSAGE_VO)
                    },
                    _stopVoiceSample: function() {
                        this.runtime.audio && this._stopAudio(this.runtime.audio)
                    },
                    _preStopVoice: function() {
                        this.current.dialogNameClass = "", this.current.dialogVoice = null
                    },
                    playSound: function(e, t, i, n) {
                        if ("object" == typeof i && (n = i, i = 0), i = i || 0, void 0 === t || null === t || 0 === t.length) return void this.stopSound(e, i, n);
                        var r = this._prePlaySound(e, t, i, n);
                        r && (r.audio.oncanplay = function() {
                            var e = {
                                type: "audio",
                                container: r.container,
                                audio: r.audio,
                                index: i,
                                renderOp: r.opt.fade ? "fadeIn" : "play",
                                effect: r.opt.fade ? {
                                    duration: r.opt.duration,
                                    volume: r.opt.volume
                                } : null,
                                waitUntil: r.opt.waitUntil
                            };
                            Vinos._pushQueue(e)
                        })
                    },
                    _playSound: function(e, t, i, n) {
                        if ("object" == typeof i && (n = i, i = 0), i = i || 0, void 0 === t || null === t || 0 === t.length) return void this._stopSound(e, i, n);
                        var r = this._prePlaySound(e, t, i, n);
                        r && (r.audio.oncanplay = function() {
                            Vinos._playAudio(this)
                        })
                    },
                    _prePlaySound: function(e, t, i, n) {
                        var r = this._getLayout(e);
                        if (null === r) return this.logError("playSound:Invalid Layer=" + e), null;
                        var a = {
                            volume: this.getVolumeByType(e),
                            loop: r.loop,
                            fade: !1,
                            duration: 0,
                            waitUntil: !1,
                            skipLog: !1,
                            name: null
                        };
                        if (e === this.DEFAULT_LAYERUSAGE_BGM && !0 === this.product.showBGMTitle && (a.name = t, void 0 !== this.product.bgmList && 0 < this.product.bgmList.length))
                            for (var s = 0; s < this.product.bgmList.length; ++s)
                                if (t === this.product.bgmList[s].audio) {
                                    a.name = this.product.bgmList[s].title;
                                    break
                                } var o = a;
                        void 0 !== n && (o.volume = void 0 !== n.volume ? n.volume : a.volume, o.loop = void 0 !== n.loop ? n.loop : a.loop, o.fade = void 0 !== n.fade ? n.fade : a.fade, o.duration = void 0 !== n.duration ? n.duration : a.duration, o.waitUntil = void 0 !== n.waitUntil ? n.waitUntil : a.waitUntil, o.skipLog = void 0 !== n.skipLog ? n.skipLog : a.skipLog, o.name = n.name || a.name), t = t.toLowerCase();
                        var l = null;
                        if (o.skipLog ? (this.runtime.audio ? this._stopAudio(this.runtime.audio) : (this.runtime.audio = new Audio, this._setAudioElement(this.runtime.audio)), l = this.runtime.audio, l.usage = r.usage) : l = this._getAudio(r, i), null === l) return this.logError("playSound:Invalid Index Number. Index=" + i + ", Container Max=" + r.max), null;
                        var u = this._getSoundURL(e, t);
                        return l.user = {
                            index: i,
                            source: t,
                            type: e,
                            option: o,
                            line: o.skipLog ? -1 : this.current.lineNo,
                            scriptID: o.skipLog ? this.SCRIPT_END : this.current.scriptID,
                            name: o.name
                        }, l.src = u, l.volume = this._getFinalVolume(e, o.fade ? 0 : o.volume), l.loop = o.loop, l.preload = "metadata", l.load(), {
                            audio: l,
                            container: r,
                            opt: o
                        }
                    },
                    stopSound: function(e, t, i) {
                        var n = this._preStopSound(e, t, i);
                        if (n && null !== n.audio.user && !0 !== n.audio.paused) {
                            var r = {
                                type: "audio",
                                container: n.container,
                                audio: n.audio,
                                renderOp: n.opt.fade ? "fadeOut" : "stop",
                                effect: n.opt.fade ? {
                                    duration: n.opt.duration,
                                    volume: n.audio.volume
                                } : null
                            };
                            this._pushQueue(r)
                        }
                    },
                    _stopSound: function(e, t, i) {
                        var n = this._preStopSound(e, t, i);
                        n && this._stopAudio(n.audio)
                    },
                    _preStopSound: function(e, t, i) {
                        "object" == typeof t && (i = t, t = 0), t = t || 0;
                        var n = {
                                fade: !1,
                                duration: 0
                            },
                            r = n;
                        void 0 !== i && (r.fade = void 0 !== i.fade ? i.fade : n.fade, r.duration = i.duration || n.duration);
                        var a = this._getLayout(e);
                        if (null === a) return null;
                        var s = this._getAudio(a, t);
                        return null === s ? (this.logError("stopSound:Invalid Index Number. Index=" + t + ", Container Max=" + a.max), null) : {
                            audio: s,
                            container: a,
                            opt: r
                        }
                    },
                    pauseSound: function(e, t) {
                        var i = this._prePauseSound(e, t);
                        if (i && null !== i.audio.user && !0 !== i.audio.paused) {
                            var n = {
                                type: "audio",
                                container: i.container,
                                audio: i.audio,
                                renderOp: "pause"
                            };
                            this._pushQueue(n)
                        }
                    },
                    _pauseSound: function(e, t) {
                        var i = this._prePauseSound(e, t);
                        i && this._pauseAudio(i.audio)
                    },
                    _prePauseSound: function(e, t) {
                        t = t || 0;
                        var i = this._getLayout(e);
                        if (null === i) return null;
                        var n = this._getAudio(i, t);
                        return null === n ? (this.logError("pauseSound:Invalid Index Number. Index=" + t + ", Container Max=" + i.max), null) : {
                            audio: n,
                            container: i
                        }
                    },
                    resumeSound: function(e, t) {
                        var i = this._preResumeSound(e, t);
                        if (i && null !== i.audio.user && !0 === i.audio.paused) {
                            var n = {
                                type: "audio",
                                container: i.container,
                                audio: i.audio,
                                renderOp: "resume"
                            };
                            this._pushQueue(n)
                        }
                    },
                    _resumeSound: function(e, t) {
                        var i = this._preResumeSound(e, t);
                        i && this._resumeAudio(i.audio)
                    },
                    _preResumeSound: function(e, t) {
                        t = t || 0;
                        var i = this._getLayout(e);
                        if (null === i) return null;
                        var n = this._getAudio(i, t);
                        return null === n ? (this.logError("resumeSound:Invalid Index Number. Index=" + t + ", Container Max=" + i.max), null) : {
                            audio: n,
                            container: i
                        }
                    },
                    _playAudio: function(e) {
                        e.play(), this.DEFAULT_LAYERUSAGE_BGM === e.user.type && !0 === this.product.showBGMTitle && this.toast(e.user.name)
                    },
                    _stopAudio: function(e) {
                        !0 !== e.paused && (e.pause(), e.dispatchEvent(new Event("ended"))), null !== e.user && (e.user.source = null, e.user.option = null, e.user.name = null, e.user.line = 0, e.user.scriptID = this.SCRIPT_END)
                    },
                    _pauseAudio: function(e) {
                        null !== e && !0 !== e.paused && e.pause()
                    },
                    _resumeAudio: function(e) {
                        null !== e && !0 === e.paused && e.play()
                    },
                    isAudioPlaying: function(e, t) {
                        t = t || 0;
                        var i = this._getLayout(e);
                        if (null === i) return !1;
                        var n = this._getAudio(i, t);
                        return null !== n && !n.paused
                    },
                    _onStartBGM: function(e) {
                        Vinos.logDebug("onStartBGM:" + e.user.source), Vinos.hasEventHandler("bgm_start") && Vinos.trigger("bgm_start", e)
                    },
                    _onFadeInBGM: function(e) {
                        Vinos.logDebug("onFadeInBGM:" + e.user.source), Vinos.clearWait(Vinos.WAIT_BGM_FADE, e.user.index)
                    },
                    _onFadeOutBGM: function(e) {
                        Vinos.logDebug("onFadeOutBGM:" + e.user.source), Vinos.clearWait(Vinos.WAIT_BGM_FADE, e.user.index)
                    },
                    _onEndBGM: function(e) {
                        Vinos.logDebug("onEndBGM:" + e.user.source + ", Duration=" + e.duration), Vinos.clearWait([Vinos.WAIT_BGM_STOP, Vinos.WAIT_BGM_FADE], e.user.index), Vinos.hasEventHandler("bgm_stop") && Vinos.trigger("bgm_stop", e)
                    },
                    _onStartSoundEffect: function(e) {
                        Vinos.logDebug("onStartSoundEffect:" + e.user.source), Vinos.hasEventHandler("se_start") && Vinos.trigger("se_start", e)
                    },
                    _onFadeInSoundEffect: function(e) {
                        Vinos.logDebug("onFadeInSoundEffect:" + e.user.source), Vinos.clearWait(Vinos.WAIT_SE_FADE, e.user.index)
                    },
                    _onFadeOutSoundEffect: function(e) {
                        Vinos.logDebug("onFadeOutSoundEffect:" + e.user.source), Vinos.clearWait(Vinos.WAIT_SE_FADE, e.user.index)
                    },
                    _onEndSoundEffect: function(e) {
                        Vinos.logDebug("onEndSoundEffect:" + e.user.source + ", Duration=" + e.duration), Vinos.clearWait([Vinos.WAIT_SE_STOP, Vinos.WAIT_SE_FADE], e.user.index), Vinos.hasEventHandler("se_stop") && Vinos.trigger("se_stop", e)
                    },
                    _onStartVoice: function(e) {
                        if (Vinos.logDebug("onStartVoice:" + e.user.source), Vinos.runtime.savedBGMVolume = -1, 1 !== Vinos.config.muteBGM) {
                            var t = Vinos._getAudio(Vinos.DEFAULT_LAYERUSAGE_BGM, 0);
                            if (null !== t && 0 < t.volume) {
                                Vinos.runtime.savedBGMVolume = t.volume;
                                var i = Vinos.config.volumeBGM * Vinos.config.muteBGM,
                                    n = {
                                        type: "audio",
                                        container: null,
                                        audio: t,
                                        index: 0,
                                        renderOp: "fade",
                                        effect: {
                                            duration: 100,
                                            volume: i,
                                            start: t.volume
                                        }
                                    };
                                Vinos._pushQueue(n)
                            }
                        }
                        Vinos.hasEventHandler("vo_start") && Vinos.trigger("vo_start", e)
                    },
                    _onFadeInVoice: function(e) {
                        Vinos.logDebug("onFadeInVoice:" + e.user.source), Vinos.clearWait(Vinos.WAIT_VO_FADE, e.user.index)
                    },
                    _onFadeOutVoice: function(e) {
                        Vinos.logDebug("onFadeOutVoice:" + e.user.source), Vinos.clearWait(Vinos.WAIT_VO_FADE, e.user.index)
                    },
                    _onEndVoice: function(e) {
                        if (Vinos.logDebug("onEndVoice:" + e.user.source + ", Duration=" + e.duration), 0 < Vinos.runtime.savedBGMVolume) {
                            var t = Vinos._getAudio(Vinos.DEFAULT_LAYERUSAGE_BGM, 0);
                            if (null !== t) {
                                var i = Vinos.config.volumeBGM * Vinos.config.muteBGM,
                                    n = Vinos.config.volumeBGM,
                                    r = {
                                        type: "audio",
                                        container: null,
                                        audio: t,
                                        index: 0,
                                        renderOp: "fade",
                                        effect: {
                                            duration: 100,
                                            volume: n,
                                            start: i
                                        }
                                    };
                                Vinos._pushQueue(r), Vinos.runtime.savedBGMVolume = -1
                            }
                        }
                        Vinos.clearWait([Vinos.WAIT_VO_STOP, Vinos.WAIT_VO_FADE], e.user.index), Vinos.hasEventHandler("vo_stop") && Vinos.trigger("vo_stop", e)
                    },
                    _onReadyVideo: function(e) {
                        Vinos.logDebug("onReadyVideo:" + e.user.source + ", Duration=" + e.duration), Vinos.runtime.videoReady = !0, Vinos.clearWait(Vinos.WAIT_VIDEO_READY, e.user.index)
                    },
                    _onStartVideo: function(e) {
                        Vinos.logDebug("onStartVideo:" + e.user.source), Vinos.hasEventHandler("video_start") && Vinos.trigger("video_start", e)
                    },
                    _onEndVideo: function(e) {
                        Vinos.logDebug("onEndVideo:" + e.user.source), Vinos.clearWait(Vinos.WAIT_VIDEO_STOP, e.user.index), Vinos.hasEventHandler("video_end") && Vinos.trigger("video_end", e)
                    },
                    eval: function(exp) {
                        if (exp.startsWith("#")) {
                            exp = exp.substring(1);
                            var hasFlags = !1;
                            return this.current.userFlags = this.current.userFlags || {}, hasFlags = exp.startsWith("!") ? !this.current.userFlags[exp.substring(1)] : !!this.current.userFlags[exp]
                        }
                        var result = null;
                        try {
                            result = eval(exp)
                        } catch (e) {
                            return this.logError("Error:Evaluation error. Exp=" + exp), void this.logError(e.message, !1)
                        }
                        return result
                    },
                    _getSkipArea: function(e, t) {
                        for (var i = t || '"', n = [], r = e.indexOf(i); 0 <= r;) {
                            var a = e.indexOf(i, r + 1);
                            0 <= a ? (n.push({
                                from: r,
                                to: a
                            }), r = e.indexOf(i, a + 1)) : r = -1
                        }
                        return n
                    },
                    _indexOf: function(e, t, i, n) {
                        var r = i || 0;
                        if (0 === n.length) return e.indexOf(t, r);
                        for (var a = e.indexOf(t, r); 0 <= a;) {
                            var s = !1;
                            r += 1;
                            for (var o = 0; o < n.length; ++o)
                                if (n[o].from <= a && a <= n[o].to) {
                                    s = !0, r = n[o].to + 1;
                                    break
                                } if (!0 !== s) return a;
                            a = e.indexOf(t, r)
                        }
                        return -1
                    },
                    _regIndexOf: function(e, t, i) {
                        var n = e.substring(i || 0).search(t);
                        return n >= 0 ? n + (i || 0) : n
                    },
                    processScene: function() {
                        if (!0 === this.isReady) {
                            var e = this._callPluginFunc("processScene");
                            e = e || !1, 0 < this.renderQueue.length && (e = !1), !0 === e && (this.logDebug("End Of Script:" + this.current.scriptID), this._popScript(), this.logDebug("Resume Script:" + this.current.scriptID), this.SCRIPT_END !== this.current.scriptID && this.next())
                        }
                    },
                    _loadImage: function(e, t, i) {
                        var n = new Image;
                        n.onload = function() {
                            "function" == typeof t && t(this, i)
                        }, n.src = e
                    },
                    initDB: function(e) {
                        switch (this.defaultDB) {
                            case this.DB_LOCAL:
                                this.dataProvider = {
                                    isAsync: !1,
                                    init: this._initDB,
                                    read: this._readLocalDB,
                                    remove: this._removeLocalDB,
                                    write: this._writeLocalDB,
                                    readPage: this._readPageLocalDB,
                                    clear: this._clearLocalDB,
                                    copy: this._copyLocalDB,
                                    readBlob: this._readRecord,
                                    removeBlob: this._removeRecord,
                                    writeBlob: this._writeRecord
                                };
                                break;
                            case this.DB_SERVER:
                                this.dataProvider = {
                                    isAsync: !0,
                                    init: this._initAsyncServer,
                                    read: this._readAsyncServer,
                                    remove: this._removeAsyncServer,
                                    write: this._writeAsyncServer,
                                    readPage: this._readPageAsyncServer,
                                    clear: this._clearAsyncServer,
                                    copy: this._copyAsyncServer,
                                    readBlob: this._readBlobAsyncServer,
                                    removeBlob: this._removeBlobAsyncServer,
                                    writeBlob: this._writeBlobAsyncServer
                                };
                                break;
                            default:
                                this.dataProvider = {
                                    isAsync: !1,
                                    init: this.NOOP_FUNC,
                                    read: this.NOOP_FUNC,
                                    remove: this.NOOP_FUNC,
                                    write: this.NOOP_FUNC,
                                    readPage: this.NOOP_FUNC,
                                    clear: this.NOOP_FUNC,
                                    copy: this.NOOP_FUNC,
                                    readBlob: this.NOOP_FUNC,
                                    removeBlob: this.NOOP_FUNC,
                                    writeBlob: this.NOOP_FUNC
                                }
                        }
                        this.dataProvider.init(e), this.logInfo("InitDB Done. Driver=" + this.defaultDB)
                    },
                    _readLocalDB: function(e, t) {
                        var i = window.localStorage.getItem(e);
                        return "function" == typeof t && t(i), i
                    },
                    _removeLocalDB: function(e, t) {
                        var i = window.localStorage.getItem(Vinos._getSaveID(Vinos.DEFAULT_NUM_OF_SAVED)) || 0;
                        return window.localStorage.removeItem(Vinos._getSaveID(e)), localforage.removeItem(Vinos._getSaveID(e)), i--, window.localStorage.setItem(Vinos._getSaveID(Vinos.DEFAULT_NUM_OF_SAVED), i), "function" == typeof t && t(), !0
                    },
                    _writeLocalDB: function(e, t, i) {
                        window.localStorage.setItem(e, t), "function" == typeof i && i(t)
                    },
                    _readPageLocalDB: function(e, t, i) {
                        for (var n = Vinos._findRecent(), r = [], a = 0; a < t; ++a) {
                            var s = e * t + a,
                                o = JSON.parse(window.localStorage.getItem(Vinos._getSaveID(s)));
                            null !== o ? (o.Current = JSON.parse(o.Current), o.ID === Vinos.product.ID && o.Locale === Vinos.product.locale && !0 !== o.Quick && (r.push({
                                slot: s,
                                name: o.Current.title,
                                date: o.Date,
                                time: o.Time,
                                recent: s === n,
                                dialog: o.Current.dialogText || o.Current.dialogPrev || "",
                                thumbNail: null,
                                loadable: Vinos.checkVersion(o.Version, 1) && Vinos.checkContentVersion(o.ContentVersion, 1)
                            }), localforage.getItem(Vinos._getSaveID(s)).then(function(e) {
                                "function" == typeof i && i(e)
                            }).catch(function(e) {
                                Vinos.logError("getSaveList:_readRecord. Err=" + e)
                            }))) : r.push({
                                slot: s,
                                name: null,
                                date: null,
                                time: null,
                                dialog: null,
                                thumbNail: null,
                                loadable: !1
                            })
                        }
                        return r
                    },
                    _clearLocalDB: function() {
                        for (var e = 0; e < Vinos.product.maxSaveSlot; ++e) window.localStorage.removeItem(Vinos._getSaveID(e)), localforage.removeItem(Vinos._getSaveID(e));
                        return window.localStorage.setItem(Vinos._getSaveID(Vinos.DEFAULT_NUM_OF_SAVED), "0"), !0
                    },
                    _copyLocalDB: function(e, t) {
                        var i = window.localStorage.getItem(Vinos._getSaveID(e));
                        if (void 0 === i || null === i) return Vinos.logError("Source slot is empty...Slot=" + e), !1;
                        localforage.getItem(Vinos._getSaveID(e), function(e) {
                            localforage.setItem(Vinos._getSaveID(t), {
                                slot: t,
                                thumbNail: e.thumbNail
                            })
                        }), window.localStorage.setItem(Vinos._getSaveID(t), i);
                        var n = window.localStorage.getItem(Vinos._getSaveID(Vinos.DEFAULT_NUM_OF_SAVED)) || 0;
                        return n++, window.localStorage.setItem(Vinos._getSaveID(Vinos.DEFAULT_NUM_OF_SAVED), n), !0
                    },
                    _readAsyncLocalDB: function(e, t) {
                        return new Promise(function(i, n) {
                            try {
                                var r = window.localStorage.getItem(e);
                                "function" == typeof t && t(r), i(r)
                            } catch (e) {
                                n(e)
                            }
                        })
                    },
                    _removeAsyncLocalDB: function(e, t) {
                        return new Promise(function(i, n) {
                            try {
                                var r = window.localStorage.getItem(Vinos._getSaveID(Vinos.DEFAULT_NUM_OF_SAVED)) || 0;
                                window.localStorage.removeItem(Vinos._getSaveID(e)), localforage.removeItem(Vinos._getSaveID(e)).then(Vinos.NOOP_FUNC), r--, window.localStorage.setItem(Vinos._getSaveID(Vinos.DEFAULT_NUM_OF_SAVED), r), "function" == typeof t && t(), i()
                            } catch (e) {
                                n(e)
                            }
                        })
                    },
                    _writeAsyncLocalDB: function(e, t, i) {
                        return new Promise(function(n, r) {
                            try {
                                window.localStorage.setItem(e, t), "function" == typeof i && i(t), n(t)
                            } catch (e) {
                                r(e)
                            }
                        })
                    },
                    _readPageAsyncLocalDB: function(e, t, i) {
                        return new Promise(function(n, r) {
                            var a = [],
                                s = Vinos._findRecent(),
                                o = new Promise(function(i, n) {
                                    for (var r = e * t, s = 0; s < t; ++s) {
                                        var o = JSON.parse(window.localStorage.getItem(Vinos._getSaveID(r)));
                                        null !== o ? (o.Current = JSON.parse(o.Current), o.ID === Vinos.product.ID && o.Locale === Vinos.product.locale && !0 !== o.Quick && a.push({
                                            slot: r,
                                            name: o.Current.title,
                                            date: o.Date,
                                            time: o.Time,
                                            recent: !1,
                                            dialog: o.Current.dialogText || o.Current.dialogPrev || "",
                                            thumbNail: null,
                                            loadable: Vinos.checkVersion(o.Version, 1) && Vinos.checkContentVersion(o.ContentVersion, 1)
                                        })) : a.push({
                                            slot: r,
                                            name: null,
                                            date: null,
                                            time: null,
                                            dialog: null,
                                            thumbNail: null,
                                            loadable: !1
                                        }), r++
                                    }
                                    i(a)
                                }),
                                l = new Promise(function(n, r) {
                                    for (var s = e * t, o = [], l = 0; l < t; ++l) o.push(localforage.getItem(Vinos._getSaveID(s)).then(function(e) {
                                        null != e && (a[e.slot].thumbNail = e.thumbNail), "function" == typeof i && i(e)
                                    })), s++;
                                    Promise.all(o).then(function() {
                                        n(a)
                                    })
                                });
                            Promise.all([s, o, l]).then(function(e) {
                                for (var t = e[0], i = 0; i < e[1].length; i++)
                                    if (e[1][i].slot === t) {
                                        e[1][i].recent = !0;
                                        break
                                    } n(e[1])
                            })
                        })
                    },
                    _clearAsyncLocalDB: function() {
                        return new Promise(function(e, t) {
                            for (var i = [], n = 0; n < Vinos.product.maxSaveSlot; ++n) window.localStorage.remove(Vinos._getSaveID(n)), i.push(localforage.removeItem(Vinos._getSaveID(n)).then(Vinos.NOOP_FUNC));
                            window.localStorage.setItem(Vinos._getSaveID(Vinos.DEFAULT_NUM_OF_SAVED), "0"), Promise.all(i).then(function() {
                                e()
                            })
                        })
                    },
                    _copyAsyncLocalDB: function(e, t) {
                        return new Promise(function(i, n) {
                            var r = window.localStorage.getItem(Vinos._getSaveID(e));
                            void 0 !== r && null !== r || (Vinos.logError("Source slot is empty...Slot=" + e), n()), window.localStorage.setItem(Vinos._getSaveID(t), r), localforage.getItem(Vinos._getSaveID(e), function(e) {
                                localforage.setItem(Vinos._getSaveID(t), {
                                    slot: t,
                                    thumbNail: e.thumbNail
                                })
                            });
                            var a = window.localStorage.getItem(Vinos._getSaveID(Vinos.DEFAULT_NUM_OF_SAVED)) || 0;
                            a++, window.localStorage.setItem(Vinos._getSaveID(Vinos.DEFAULT_NUM_OF_SAVED), a), i(!0)
                        })
                    },
                    _initDB: function() {
                        localforage.config({
                            driver: localforage.INDEXEDDB,
                            name: Vinos.DEFAULT_DB_NAME,
                            version: Vinos.VERSION_MAJOR,
                            storeName: "saved",
                            description: "Vinos Saved Data"
                        }), Vinos.logDebug("_initDB:finished")
                    },
                    _readRecord: function(e, t) {
                        return "function" == typeof t ? (localforage.getItem(e, t), null) : localforage.getItem(e)
                    },
                    _writeRecord: function(e, t, i) {
                        return "function" == typeof i ? (localforage.setItem(e, t, i), null) : localforage.setItem(e, t)
                    },
                    _removeRecord: function(e, t) {
                        return "function" == typeof t ? (localforage.removeItem(e, t), null) : localforage.removeItem(e)
                    },
                    _initAsyncServer: function(e) {
                        Vinos.dataProvider.baseURL = e.storageSrc
                    },
                    _readAsyncServer: function(e, t) {
                        return new Promise(function(i, n) {
                            $.ajax({
                                url: Vinos.dataProvider.baseURL + e,
                                type: "get",
                                dataType: "json",
                                contentType: "application/json; charset=UTF-8",
                                crossOrigin: !0,
                                success: function(e) {
                                    "OK" === e.status ? ("function" == typeof t && t(e.datas), i(e.datas)) : i(null)
                                },
                                error: function(e, t, i) {
                                    n(i)
                                }
                            })
                        })
                    },
                    _removeAsyncServer: function(e, t) {
                        var i = {
                            vinosId: e,
                            saveStr: null,
                            thumbnail: null
                        };
                        return new Promise(function(n, r) {
                            $.ajax({
                                url: Vinos.dataProvider.baseURL + e,
                                type: "post",
                                data: JSON.stringify(i),
                                dataType: "json",
                                contentType: "application/json; charset=UTF-8",
                                crossOrigin: !0,
                                success: function(e) {
                                    "OK" === e.status ? ("function" == typeof t && t(e.keyId), n(e.keyId)) : n(null)
                                },
                                error: function(e, t, i) {
                                    r(i)
                                }
                            })
                        })
                    },
                    _writeAsyncServer: function(e, t, i) {
                        var n = {
                            vinosId: e,
                            saveStr: t,
                            thumbnail: null
                        };
                        return new Promise(function(t, r) {
                            $.ajax({
                                url: Vinos.dataProvider.baseURL + e,
                                type: "post",
                                data: JSON.stringify(n),
                                dataType: "json",
                                contentType: "application/json; charset=UTF-8",
                                crossOrigin: !0,
                                success: function(e) {
                                    "OK" === e.status ? ("function" == typeof i && i(e.keyId), t(e.keyId)) : t(null)
                                },
                                error: function(e, t, i) {
                                    r(i)
                                }
                            })
                        })
                    },
                    _readPageAsyncServer: function(e, t, i) {
                        var n = {
                            draw: 65535 & (new Date).getTime(),
                            startNo: e * t,
                            pageSize: t,
                            search: '{"vinosId":' + Vinos._getSaveID(0) + "}",
                            orderBy: "",
                            orderAsc: !0
                        };
                        return new Promise(function(r, a) {
                            $.ajax({
                                url: Vinos.dataProvider.baseURL + "all",
                                type: "post",
                                data: JSON.stringify(n),
                                dataType: "json",
                                contentType: "application/json; charset=UTF-8",
                                crossOrigin: !0,
                                success: function(n) {
                                    var a = [];
                                    if (null !== n && null !== n.data && 0 < n.data.length)
                                        for (var s = e * t, o = 0; o < n.data.length; ++o) {
                                            var l = JSON.parse(n.data[o].save);
                                            l.Current = JSON.parse(l.Current), l.ID === Vinos.product.ID && l.Locale === Vinos.product.locale && !0 !== l.Quick && a.push({
                                                slot: s,
                                                name: l.Current.title,
                                                date: l.Date,
                                                time: l.Time,
                                                recent: s == n.recordsFiltered,
                                                dialog: l.Current.dialogText || l.Current.dialogPrev || "",
                                                thumbNail: n.data[s].thumbnail,
                                                loadable: Vinos.checkVersion(l.Version, 1) && Vinos.checkContentVersion(l.ContentVersion, 1)
                                            }), s++
                                        }
                                    "function" == typeof i && i(a), r(a)
                                },
                                error: function(e, t, i) {
                                    a(i)
                                }
                            })
                        })
                    },
                    _clearAsyncServer: function() {
                        return new Promise(function(e, t) {
                            $.ajax({
                                url: Vinos.dataProvider.baseURL + "all/" + Vinos._getSaveID(0),
                                type: "post",
                                data: null,
                                dataType: "json",
                                contentType: "application/json; charset=UTF-8",
                                crossOrigin: !0,
                                success: function(t) {
                                    "OK" === t.status ? ("function" == typeof callback && callback(t.keyId), e(t.keyId)) : e(null)
                                },
                                error: function(e, i, n) {
                                    t(n)
                                }
                            })
                        })
                    },
                    _copyAsyncServer: function(e, t) {
                        return new Promise(function(i, n) {
                            $.ajax({
                                url: Vinos.dataProvider.baseURL + "copy/" + Vinos._getSaveID(e) + "/" + Vinos._getSaveID(t),
                                type: "post",
                                dataType: "json",
                                contentType: "application/json; charset=UTF-8",
                                crossOrigin: !0,
                                success: function(e) {
                                    "OK" === e.status ? ("function" == typeof callback && callback(e.keyId), i(e.keyId)) : i(null)
                                },
                                error: function(e, t, i) {
                                    n(i)
                                }
                            })
                        })
                    },
                    _readBlobAsyncServer: function(e, t) {},
                    _removeBlobAsyncServer: function(e, t) {},
                    _writeBlobAsyncServer: function(e, t, i) {
                        var n = {
                            vinosId: e,
                            saveStr: null,
                            thumbnail: t.thumbNail
                        };
                        return new Promise(function(t, r) {
                            $.ajax({
                                url: Vinos.dataProvider.baseURL + e,
                                type: "post",
                                data: JSON.stringify(n),
                                dataType: "json",
                                contentType: "application/json; charset=UTF-8",
                                crossOrigin: !0,
                                success: function(e) {
                                    console.log("writeBlob:", e), "function" == typeof i && i(e.keyId), t("OK" === e.status ? e.keyId : null)
                                },
                                error: function(e, t, i) {
                                    console.log("writeBlobErr:", i), r(i)
                                }
                            })
                        })
                    }
                };
                Vinos.loop = function() {
                    if (Vinos.animationFrameId = window.requestAnimationFrame(Vinos.loop), !0 === Vinos.isReady && !0 !== Vinos.isPause) {
                        var e = (new Date).getTime();
                        0 === Vinos.runtime.tick && (Vinos.runtime.tick = e, Vinos.runtime.fpsTick = e, Vinos.runtime.autoTick = e, Vinos.runtime.frameCount = 0), Vinos.render((e - Vinos.runtime.tick) * Vinos.config.playSpeed), Vinos.runtime.tick = e, Vinos.runtime.frameCount++;
                        if (e - Vinos.runtime.fpsTick > 1e3 && (Vinos.runtime.fps = Vinos.runtime.frameCount, Vinos.runtime.frameCount = 0, Vinos.runtime.fpsTick = e), Vinos.runtime.waitUntil && e > Vinos.runtime.waitUntil && (Vinos.logError("wait:Timeout. Canceled wait=" + Vinos.runtime.waitType + ", index=" + Vinos.runtime.waitIndex), Vinos.resetWait()), Vinos.WAIT_INPUT === Vinos.wait() && (Vinos.runtime.savedFastSkip = Vinos.runtime.isFastSkip, !0 === Vinos.runtime.isFastSkip && Vinos.setFastSkip(!1), Vinos.runtime.savedAutoPlay = Vinos.runtime.isAutoPlay, !0 === Vinos.runtime.isAutoPlay && Vinos.setAutoPlay(!1)), (!0 === Vinos.runtime.isAutoPlay || 0 < Vinos.runtime.doUntil || Vinos.WAIT_NONE === Vinos.wait()) && 0 === Vinos.renderQueue.length && !Vinos.runtime.viewMode) {
                            var t = !1;
                            if (!0 === Vinos.runtime.isAutoPlay) {
                                e - Vinos.runtime.autoTick > (!0 === Vinos.runtime.isFastSkip ? 0 : Vinos.runtime.sceneDelay) && (t = !0, Vinos.runtime.sceneDelay = 0, Vinos.WAIT_CLICK !== Vinos.wait() && Vinos.WAIT_CLICK_CM !== Vinos.wait() || Vinos._processClick())
                            } else t = !0;
                            !0 === t && (Vinos.runtime.autoTick = e, Vinos.next())
                        }
                    }
                }, Vinos._onClickCanvas = function(e) {
                    switch (e.stopPropagation(), e.which) {
                        case 2:
                            Vinos.middleClick();
                            break;
                        case 3:
                            Vinos.rightClick();
                            break;
                        default:
                            Vinos.click()
                    }
                }, Vinos._onRightClickCanvas = function(e) {
                    return e.stopPropagation(), e.preventDefault(), Vinos.rightClick(), !1
                }, Vinos._loadScript = function(e, t) {
                    e = e.toLowerCase();
                    var i = Vinos._findScript(e);
                    if (Vinos.SCRIPT_END !== i) return i;
                    this.scripts.push({
                        name: e,
                        lines: [],
                        loaded: !1
                    });
                    var n = this.scripts.length - 1;
                    return $.ajax({
                        url: Vinos._getScriptURL(e),
                        success: function(e) {
                            e && (Vinos._parseScript(n, e), "function" == typeof t && t(n))
                        },
                        error: function(e, t, i) {
                            Vinos.logError("_loadScript:" + i)
                        }
                    }), n
                }, Vinos._parseScript = function(e, t, i) {
                    var n = null;
                    switch (n = Vinos._callPluginFunc("parseScript", t), null === n && (n = t), e) {
                        case Vinos.SCRIPT_INTRO:
                            Vinos.intro = n;
                            break;
                        case Vinos.SCRIPT_OUTRO:
                            Vinos.outro = n;
                            break;
                        case Vinos.SCRIPT_MACRO:
                            Vinos.macro = n;
                            break;
                        case Vinos.SCRIPT_GAME:
                            Vinos.game = n;
                            break;
                        default:
                            Vinos.scripts[e].lines = n, Vinos.scripts[e].loaded = !0
                    }
                    Vinos.logDebug("_parseScript:" + n.length + ", Type=" + e + (i ? ", Name=" + i : ""))
                }, Vinos._parseProduct = function(e) {
                    if (void 0 === e || 0 === e.length) return void Vinos.logFatal("Cannot read product information. Abort.");
                    try {
                        Vinos.product = JSON.parse(e)
                    } catch (t) {
                        return void Vinos.logFatal("Cannot parse product information. Abort. Len=" + e.length)
                    }
                    var t = Vinos._getResource("title") || Vinos.product.title;
                    Vinos.setTitle(t);
                    for (var i = -1, n = 10, r = $(window).height() / $(window).width(), a = 0; a < Vinos.product.resolutions; ++a) {
                        var s = Vinos.product.height[a] / Vinos.product.width[a],
                            o = Math.abs(r - s);
                        n > o && (n = o, i = a)
                    }
                    for (-1 === i ? i = 0 : Vinos.logDebug("_parseProduct:select Resolution=" + i + ", Gap=" + n), void 0 === Vinos.product.scriptURL && (Vinos.product.scriptURL = ""), void 0 === Vinos.product.scriptExt && (Vinos.product.scriptExt = ""), void 0 === Vinos.product.imageURL && void 0 !== Vinos.product.imgURL && (Vinos.product.imageURL = Vinos.product.imgURL), void 0 === Vinos.product.imageExt && void 0 !== Vinos.product.imgExt && (Vinos.product.imageExt = Vinos.product.imgExt), void 0 === Vinos.product.maxSaveSlot && (Vinos.product.maxSaveSlot = Vinos.DEFAULT_MAX_SAVE_SLOT), "object" == typeof Vinos.product.width && (Vinos.product.width = Vinos.product.width[i]), "object" == typeof Vinos.product.height && (Vinos.product.height = Vinos.product.height[i]), "object" == typeof Vinos.product.aspectRatio && (Vinos.product.aspectRatio = Vinos.product.aspectRatio[i]), a = 0; a < Vinos.product.layout.length; ++a) "object" == typeof Vinos.product.layout[a].cropX && (Vinos.product.layout[a].cropX = Vinos.product.layout[a].cropX[i]), "object" == typeof Vinos.product.layout[a].cropY && (Vinos.product.layout[a].cropY = Vinos.product.layout[a].cropY[i]), "object" == typeof Vinos.product.layout[a].adjustX && (Vinos.product.layout[a].adjustX = Vinos.product.layout[a].adjustX[i]), "object" == typeof Vinos.product.layout[a].adjustY && (Vinos.product.layout[a].adjustY = Vinos.product.layout[a].adjustY[i]), "object" == typeof Vinos.product.layout[a].marginX && (Vinos.product.layout[a].marginX = Vinos.product.layout[a].marginX[i]), "object" == typeof Vinos.product.layout[a].marginY && (Vinos.product.layout[a].marginY = Vinos.product.layout[a].marginY[i]);
                    Vinos.defaultFontStyle.fontSize = Vinos._getFontSize(Vinos.product.messageFontSize), "string" == typeof Vinos.product.initCode && 0 < Vinos.product.initCode.length && Vinos.eval(Vinos.product.initCode), Vinos.setCaretClass(Vinos.product.htmlCaretClass), void 0 !== Vinos.product.defaultConfig && Vinos.setConfig(Vinos.product.defaultConfig), Vinos.applyLocale(Vinos.config.locale), Vinos.config.useProductSkin && void 0 !== Vinos.product.skinURL && void 0 !== Vinos.product.skin && Vinos.loadSkin(Vinos.product.skin)
                }, Vinos._afterImageLoaded = function(e, t) {
                    var i = {
                        type: "image",
                        image: e,
                        renderOp: t,
                        isFinished: !1
                    };
                    Vinos._pushQueue(i)
                }, Vinos.resize = function() {
                    if (null !== Vinos.elements.viewport && null !== Vinos.elements.dialogBox) {
                        var e = $(window).width(),
                            t = $(window).height();
                        Vinos.aspectRatio = e / t;
                        var i = null;
                        Vinos.product && void 0 !== Vinos.product.aspectRatio && (i = Vinos.product.aspectRatio), null !== i && ("4:3" === i ? Vinos.aspectRatio = .75 : "16:9" === i ? Vinos.aspectRatio = 9 / 16 : "16:8" === i ? Vinos.aspectRatio = .5 : "screen" === i && (Vinos.aspectRatio = t / e));
                        var n = e,
                            r = t;
                        e >= t && (n = Math.round($(Vinos.elements.viewport).parent().height() / Vinos.aspectRatio), n > $(Vinos.elements.viewport).parent().width() && (n = $(Vinos.elements.viewport).parent().width()), r = Math.round(n * Vinos.aspectRatio), Vinos.elements.viewport.style.width = n + "px", Vinos.elements.viewport.style.height = r + "px", Vinos.elements.viewport.style.top = "0", Vinos.elements.viewport.style.margin = "auto", Vinos.elements.viewport.style.position = "relative", $(Vinos.elements.baseElement).find(".wv-content-area").each(function() {
                            this.style.width = n + "px", this.style.height = r + "px", this.style.top = "0", this.style.margin = "auto", this.style.position = "relative"
                        })), e < t && (r = Math.round(e * Vinos.aspectRatio), Vinos.elements.viewport.style.width = n + "px", Vinos.elements.viewport.style.height = r + "px", Vinos.elements.viewport.style.margin = "none", Vinos.elements.viewport.style.marginTop = "-" + r / 4 + "px", Vinos.elements.viewport.style.top = "25%", Vinos.elements.viewport.style.position = "absolute", $(Vinos.elements.baseElement).find(".wv-content-area").each(function() {
                            this.style.width = n + "px", this.style.height = r + "px", this.style.margin = "none", this.style.marginTop = "-" + r / 4 + "px", this.style.top = "25%", this.style.position = "absolute"
                        })), Vinos.runtime.width = n, Vinos.runtime.height = r, null !== Vinos.elements.dialogBox && (Vinos.elements.dialogBox.style.width = n + "px", Vinos.elements.dialogBox.style.margin = "auto", Vinos.elements.dialogBox.style.left = "0"), null !== Vinos.product && (Vinos.product.hRatio = n / (Vinos.product.origWidth || Vinos.product.width), Vinos.product.vRatio = r / (Vinos.product.origHeight || Vinos.product.height), Vinos._resizeFontSize()), Vinos.resizeUI()
                    }
                }, Vinos._waitDef = [
                    [Vinos.WAIT_RENDER],
                    [Vinos.WAIT_UNTIL],
                    [Vinos.WAIT_CLICK],
                    [Vinos.WAIT_CLICK_CM],
                    [Vinos.WAIT_INPUT],
                    [Vinos.WAIT_BGM_FADE, "e", Vinos.DEFAULT_LAYERUSAGE_BGM, "fade"],
                    [Vinos.WAIT_BGM_STOP, "e", Vinos.DEFAULT_LAYERUSAGE_BGM, "stop"],
                    [Vinos.WAIT_SE_FADE, "e", Vinos.DEFAULT_LAYERUSAGE_SE, "fade"],
                    [Vinos.WAIT_SE_STOP, "e", Vinos.DEFAULT_LAYERUSAGE_SE, "stop"],
                    [Vinos.WAIT_VO_FADE, "e", Vinos.DEFAULT_LAYERUSAGE_VO, "fade"],
                    [Vinos.WAIT_VO_STOP, "e", Vinos.DEFAULT_LAYERUSAGE_VO, "stop"],
                    [Vinos.WAIT_VIDEO_READY, "e", "video", "ready"],
                    [Vinos.WAIT_VIDEO_STOP, "e", "video", "stop"],
                    [Vinos.WAIT_IMAGE_SHAKE, "c", "image", "shake"],
                    [Vinos.WAIT_IMAGE_TRANSIT, "c", "image", "transit"],
                    [Vinos.WAIT_LAYER_MOVE, "c", "layer", "move"]
                ], window.Vinos = Vinos, $(window).resize(Vinos.resize)
            }()
        }, {}]
    }, {}, [1])(1)
});
//# sourceMappingURL=vinos-viewer.js.map
