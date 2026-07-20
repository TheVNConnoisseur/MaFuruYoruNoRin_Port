/**
 * Vinos Event Handler for VinosWinMaker
 */
(function() {
    'use strict';

    var WinMakerEventHandler = {
        onReady : function() {
            window.VinosEventHandler.onReady();
        },

        onExit : function() {
            window.VinosEventHandler.onExit();
        },

        _isFullScreen : false,
        onSetFullScreen : function(elem, on) {
            var fullScreen = ('undefined' !== typeof on) ? on : !this._isFullScreen;
            window.VinosEventHandler.onSetFullScreen(fullScreen);
            this._isFullScreen = fullScreen;
        },

        onSaved : function(slot, quick, storage) {
            if (Vinos.SAVE_NORMAL !== storage && Vinos.SAVE_QUICK !== storage)
                return;
            if (quick) {
                if (Vinos.getConfig('toast').qsave) {
                    Vinos.toast(Vinos._getMessage('messageType.qsaveOk'));
                }
            }
            else {
                if (Vinos.getConfig('toast').save) {
                    Vinos.toast(Vinos._getMessage('messageType.saveOk'));
                }
            }
            // String -> Number Conversion
            window.VinosEventHandler.onSaved(slot * 1, quick, storage * 1);
        },

        onLoaded : function(slot, quick, storage) {
            if (Vinos.SAVE_NORMAL !== storage && Vinos.SAVE_QUICK !== storage)
                return;
            if (quick) {
                if (Vinos.getConfig('toast').qload) {
                    Vinos.toast(Vinos._getMessage('messageType.qloadOk'));
                }
            }
            else {
                if (Vinos.getConfig('toast').load) {
                    Vinos.toast(Vinos._getMessage('messageType.loadOk'));
                }
            }
            // String -> Number Conversion
            window.VinosEventHandler.onLoaded(slot * 1, quick, storage * 1);
        },

        onEval : function(exp, ret, source, line) {
            window.VinosEventHandler.onEval(exp, ret + '', source, line);
        },

        onCall : function(stack) {
            var lastStack = stack[stack.length - 1];
            window.VinosEventHandler.onCall(Vinos._getScriptName(lastStack.scriptID), lastStack.returnTo);
        },

        onReturn : function(stack) {
            var lastStack = stack[stack.length - 1];
            window.VinosEventHandler.onReturn(Vinos._getScriptName(lastStack.scriptID), lastStack.returnTo);
        },

        onTrace : function(source, line) {
            window.VinosEventHandler.onTrace(source, line);
        },

        onError : function(error) {
            window.VinosEventHandler.onError(error);
        },

        onSelectUI : function(selected) {
            switch (selected.type) {
                case 'link':
                    window.VinosEventHandler.onURL(selected.url);
                    break;
                case 'qsave':
                    quickSave(true);
                    break;
                case 'qload':
                    quickLoad(true);
                    break;
                case 'save':
                    save(true);
                    break;
                case 'load':
                    load(true);
                    break;
                case 'gallery':
                    setProgress('0');
                    break;
                case 'config':
                    toggleMenu();
                    break;
                case 'exit':
                    exit();
                    break;
            }
            window.VinosEventHandler.onSelectUI(selected);
        },

        onOpenUI : function(elem) {
            $(elem).find('.wv-ui').click(function (e) {
                e.stopPropagation();
                this.blur();
                selectUI(this);
            });
            window.VinosEventHandler.onOpenUI(elem);
        },

        onCloseUI : function(elem) {
            window.VinosEventHandler.onCloseUI(elem);
        },

        onAutoPlay : function(isAutoPlay) {
            if (isAutoPlay) {
                if (Vinos.getFastSkip()) {
                    $("#webView .wv-skip").each(function() { $(this).addClass('on'); });
                    $("#webView .wv-auto").each(function() { $(this).addClass('skip'); });
                }
                else
                    $("#webView .wv-auto").each(function() { $(this).addClass('on'); });
            }
            else {
                $("#webView .wv-auto").each(function() { $(this).removeClass('on skip'); });
                $("#webView .wv-skip").each(function() { $(this).removeClass('on'); });
            }
            window.VinosEventHandler.onAutoPlay(isAutoPlay);
        },

        onTitleChanged : function(title) {
            window.VinosEventHandler.onTitleChanged(title);
        },
        
        onDialogVisible : function(isVisible) {
            if (isVisible)
                $("#webView .wv-menu-box").show();
            else
                $("#webView .wv-menu-box").hide();
        },

        onLog : function(level, str, file, line) {
            window.VinosEventHandler.onLog(level, str, file || '', line || 0);
        },

        _startLoging : false,
        _loggingText : '',
        onKeyDown : function (event) {
            if (!this._startLoging) {
                var char = event.which || event.keyCode;
                var isOk2Process = function () {
                    // 메뉴가 표시되지 않고 있고
                    // 히스토리 출력중이 아니고
                    // 도움말 창이 않떠있고 
                    // 저장/불러오기 창이 않떠있고 
                    // 진척도 모드가 아니고
                    // 모달 창이 떠있지 않은 경우
                    return (!$("#webView .vinos-menu").hasClass('active') &&
                        !$("#webView .vinos-history").hasClass('active') &&
                        !$("#webView .vinos-help").hasClass('active') &&
                        !$("#webView .container-storage").is(':visible') &&
                        !$("#webView .container-gallery").is(':visible') &&
                        !$('#webView .modal').length);
                }
                if (isOk2Process() && event.ctrlKey) {
                    Vinos.skip();
                }
                // CTRL을 제외한 다른 키입력들은 autoRepeat 키 인경우 무시한다.
                if (event.repeat) {
                    event.stopPropagation();
                    return;
                }
                if (isOk2Process() && event.shiftKey) {
                    Vinos.toggleFastSkip();
                }
                switch (char) {
                    case 13: // Enter Key
                        // Alt-Enter 무시
                        if (event.altKey)
                            break;
                        if (isOk2Process() && !Vinos.getViewMode()) {
                            // 선택화면의 경우 화면상 선택지의 Active 한 항목을 선택한다
                            // 그렇지 않은 경우 클릭으로 간주한다.
                            if (Vinos.hasSelection()) {
                                Vinos.selectActiveSelection();
                            }
                            else {
                                Vinos.click();
                            }
                        }
                        break;
                    case 8: // Backspace, 회상씬 플레이 중일 경우에는 타이틀로 돌아가기
                        if (!isOk2Process())
                            break;
                        if ($("#webView .wv-replay-scene-box").is(':visible'))
                            exitPlayScene();
                        else if ($("#webView .wv-replay-video-box").is(':visible'))
                            exitPlayVideo();
                        else
                            restart();
                        break;
                    case 32: // Space Bar
                    case 109: // Number Pad -
                        if (isOk2Process())
                            Vinos.toggleViewMode();
                        break;
                    case 65: // 'A' Key
                        if (isOk2Process() && !Vinos.getViewMode() && $("#webView .wv-menu-bar").is(':visible'))
                            toggleAutoPlay();
                        break;
                    case 33: // Page Up
                    case 34: // Page Down
                    case 38: // Arrow Up
                    case 40: // Arrow Down
                    case 104: // Number Pad 8
                    case 105: // Number Pad 9
                    case 98: // Number Pad 2
                    case 99: // Number Pad 3
                        if (Vinos.getViewMode() ||
                            $("#webView .vinos-menu").hasClass('active') ||
                            $("#webView .vinos-help").hasClass('active') ||
                            $("#webView .container-storage").is(':visible') ||
                            $("#webView .container-gallery").is(':visible') ||
                            $("#webView .wv-replay-video-box").is(':visible') ||
                            $('#webView .modal').length)
                            break;
                        // 선택화면의 경우 화면상 선택지의 Active설정을 움직여 준다
                        if (Vinos.hasSelection()) {
                            var processed = false;
                            switch (char) {
                                case 104: // Number Pad 8
                                    Vinos.moveActiveSelection(Vinos.DIR_UP);
                                    processed = true;
                                    break;
                                case 98: // Number Pad 2
                                    Vinos.moveActiveSelection(Vinos.DIR_DOWN);
                                    processed = true;
                                    break;
                            }
                            if (processed)
                                break;
                        }
                        // 히스토리가 비활성화된 상태면 무시한다.
                        if (!Vinos.getHistoryEnabled())
                            break;
                        // 그외의 경우에는 히스토리 기능을 활성화 한다.
                        if (currentHistory) {
                            switch (char) {
                                case 38: // Arrow Up
                                case 104: // Number Pad 8
                                    scrollHistoryUp(1);
                                    break;
                                case 33: // Page Up
                                case 105: // Number Pad 9
                                    scrollHistoryUp(Vinos.DEFAULT_HISTORY_PAGESIZE);
                                    break;
                                case 40: // Arrow Down
                                case 98: // Number Pad 2
                                    scrollHistoryDown(1);
                                    break;
                                case 34: // Page Down
                                case 99: // Number Pad 3
                                    scrollHistoryDown(Vinos.DEFAULT_HISTORY_PAGESIZE);
                                    break;
                            }
                        }
                        else
                            showHistory();
                        break;
                    case 83: // 'S' Key
                    case 113: // F2
                    case 106: // Number Pad *
                        if (isOk2Process() && !Vinos.getViewMode() && !$("#webView .wv-save").hasClass('disabled') && $("#webView .wv-menu-bar").is(':visible'))
                            save();
                        break;
                    case 76: // 'L' Key
                    case 114: // F3
                    case 111: // Number Pad /
                        if (isOk2Process() && !Vinos.getViewMode() && !$("#webView .wv-load").hasClass('disabled') && $("#webView .wv-menu-bar").is(':visible'))
                            load();
                        break;
                    case 45: // Insert Key
                    case 96: // Number Pad 0 Key
                        if (isOk2Process() && !Vinos.getViewMode() && !$("#webView .wv-qsave").hasClass('disabled') && $("#webView .wv-menu-bar").is(':visible'))
                            quickSave();
                        break;
                    case 46: // Delete Key
                    case 110: // Number Pad . Key
                        if (isOk2Process() && !Vinos.getViewMode() && !$("#webView .wv-qload").hasClass('disabled') && $("#webView .wv-menu-bar").is(':visible'))
                            quickLoad();
                        break;
                    case 27: // Esc
                    case 107: // Number Pad +
                        // 인트로 중인 경우 스킵
                        if (!Vinos.isReady || Vinos.current.scriptID < Vinos.SCRIPT_GAME)
                            break;
                        if ($('#webView .modal').length)
                            break;
                        var $contextElem = $('#webView').find('[data-context]');
                        if (0 < $contextElem.length) {
                            var target = $('#webView').find($contextElem.attr("data-context"));
                            if (target.length) {
                                selectUI(target[0]);
                                break;
                            }
                        }
                        if (Vinos.getViewMode())
                            Vinos.toggleViewMode();
                        else if ($("#webView .wv-replay-video-box").is(':visible'))
                            exitPlayVideo();
                        else if ($("#webView .container-storage").is(':visible') || $("#webView .container-gallery").is(':visible'))
                            onCloseLayer();
                        else if ($("#webView .vinos-history").hasClass('active'))
                            hideHistory();
                        else if ($("#webView .vinos-help").hasClass('active'))
                            hideHelp();
                        else
                            toggleMenu();
                        break;
                }
                event.preventDefault();
                event.stopPropagation();
            }
            if (event.key == 'F13') {
                Vinos.start();
            }
            else if (event.key == 'F14') {
                Vinos.restart();
            }
            else if (event.key == 'F15') {
                Vinos.stop();
            }
            else if (event.key == 'F16') {
                Vinos.pause();
            }
            else if (event.key == 'F17') {
                Vinos.resume();
            }
            else if (event.key == 'F18') {
                Vinos.next();
            }
            else if (event.key == 'F19') {
                Vinos.prev();
            }
            else if (event.key == 'F23') {
                this._isFullScreen = false;
                var elem = $("#webView .toggle-fullScreen");
                elem.removeClass('on');
                Vinos.setConfig({ fullScreen: this._isFullScreen});
            }
            else if (event.key == 'F24') {
                this._isFullScreen = true;
                var elem = $("#webView .toggle-fullScreen");
                elem.removeClass('on');
                elem.addClass('on');
                Vinos.setConfig({ fullScreen: this._isFullScreen});
            }
            else if (event.key == 'F20') {
                Vinos.app.render();
                var thumb = document.createElement('canvas');
                thumb.width = Vinos.elements.canvas.width;
                thumb.height = Vinos.elements.canvas.height;
                thumb.getContext('2d').drawImage(Vinos.elements.canvas, 0, 0, thumb.width, thumb.height);
                thumb.toBlob(function (blob) {
                    var currentdate = new Date();
                    var filename = currentdate.getFullYear() + '' +
                        (currentdate.getMonth() + 1) + '' +
                        currentdate.getDate() + '_' +
                        currentdate.getHours() + '' +
                        currentdate.getMinutes() + '' +
                        currentdate.getSeconds() + '.png';
                    FileSaver.saveAs(blob, filename);
                    Vinos.toast('Screen Shot : ' + filename);
                });
            }
            else if (event.key == 'F21') {
                this._startLoging = !this._startLoging;
                if (!this._startLoging) {
                    var index = this._loggingText.indexOf("@");
                    var label = "";
                    var filename = "";
                    if (0 <= this._loggingText.indexOf("@")) {
                        var labels = this._loggingText.split("@");
                        label = labels[0];
                        filename = labels[1];
                    }
                    else
                        label = this._loggingText;
                    if (!isNaN(label))
                        label = eTOYutil.fnParseInt(label);
                    Vinos.toast('Jump To : ' + label + (0 < filename.length ? ' At ' + filename : ''));
                    Vinos.start(label, filename);
                }
                this._loggingText = "";
            }
            else if (event.key == 'F22') {
                this._startLoging = !this._startLoging;
                if (!this._startLoging) {
                    var index = this._loggingText.indexOf("@");
                    var type = "0";
                    var filename = "";
                    if (0 <= this._loggingText.indexOf("@")) {
                        var labels = this._loggingText.split("@");
                        type = labels[0];
                        filename = labels[1];
                        if (!isNaN(type))
                            type = eTOYutil.fnParseInt(type);
                        Vinos.toast('Reloading :' + filename + ', Type : ' + type);
                        Vinos._reload(type, filename);
                    }
                }
                this._loggingText = "";
            }
            else if (this._startLoging) {
                this._loggingText += String.fromCharCode(event.keyCode);
            }
        },

        onContextMenu : function (event) {
            event.preventDefault();
            // 이미 Modal이 떠있는 경우에는 동작하지 않음
            if ($('#webView .modal').length)
                return;

            document.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, cancelable: true, keyCode: 27 }));
        },

        onMouseWheel : function (event) {
            // 세이브, 로드 창이 보이거나 겔러리, 메뉴, 도움말 창인 경우 스킵
            if ($("#webView .container-storage").is(':visible') ||
                $("#webView .container-gallery").is(':visible') ||
                $("#webView .vinos-help").hasClass('active') ||
                $("#webView .vinos-menu").hasClass('active'))
                return false;

            // 현재 게임 실행 모드가 아닌 경우 스킵
            if (!Vinos.isReady || Vinos.current.scriptID < Vinos.SCRIPT_GAME)
                return false;

            event.stopPropagation();
            var e = window.event || event; // old IE support
            var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
            switch (delta) {
                case 1: // Wheel Up -> Arrow Up
                    document.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, cancelable: true, keyCode: 38 }));
                    break;
                case -1: // Wheel Down -> Arrow Down
                    if ($('#webView .vinos-history').hasClass('active') || $('#webView .wv-interface').is(':visible'))
                        document.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, cancelable: true, keyCode: 40 }));
                    else
                        document.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, cancelable: true, keyCode: 13 }));
                    break;
            }
            return false;
        }
    };

    window.EventDelegator = WinMakerEventHandler;
})();