/**
 * Vinos Event Handler for Web
 */
(function() {
    'use strict';

    var WebViewEventHandler = {
        onReady : function() {
        },

        onExit : function() {
        },

        _requestFullScreen : false,
        onSetFullScreen : function(elem, on) {
            var isFullScreen = function() {
                if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || 
                    (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || 
                    (document.mozFullScreen !== undefined && !document.mozFullScreen) || 
                    (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen))
                    return false;
                return true;
            }
            this._requestFullScreen = true;
            on = ('undefined' !== typeof on) ? on : !isFullScreen();
            if (on) {
                if (elem.requestFullScreen) {
                    elem.requestFullScreen();
                } else if (elem.mozRequestFullScreen) {
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullScreen) {
                    elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                } else if (elem.msRequestFullscreen) {
                    elem.msRequestFullscreen();
                }
            }
            else {
                if (document.cancelFullScreen) {
                    document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
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
        },

        onEval : function(exp, ret, source, line) {
        },

        onCall : function(stack) {
        },

        onReturn : function(stack) {
        },

        onTrace : function(source, line) {
        },

        onError : function(error) {
            eTOYutil.fnError(error.message);
        },

        onSelectUI : function(selected) {
            switch (selected.type) {
                case 'link':
                    window.open(selected.url, selected.target);
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
        },

        onOpenUI : function(elem) {
            $(elem).find('.wv-ui').click(function (e) {
                e.stopPropagation();
                this.blur();
                selectUI(this);
            });
        },

        onCloseUI : function(elem) {
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
        },

        onTitleChanged : function(title) {
        },
        
        onDialogVisible : function(isVisible) {
            if (isVisible)
                $("#webView .wv-menu-box").show();
            else
                $("#webView .wv-menu-box").hide();
        },

        onLog : function(level, str, file, line) {
        },

        onKeyDown : function (event) {
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
            default:
                return;
            }
            event.preventDefault();
            event.stopPropagation();
        },

        // 사용자에 의해 ESC로 풀스크린이 취소되었을때 Vinos에 통지한다
        onFullScreenChange : function(event) {
            if (!WebViewEventHandler._requestFullScreen) {
                var elem = $("#webView .toggle-fullScreen");
                elem.removeClass('on');
                Vinos.setConfig({ fullScreen: false });
            }
            WebViewEventHandler._requestFullScreen = false;
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

    window.EventDelegator = WebViewEventHandler;
})();