// Vinos Locale
window.Vinos.locale = window.Vinos.locale || {};

// Define the messages
window.Vinos.locale.zhchs = jQuery.extend(window.Vinos.locale.zhchs || {}, {
    information:  "信息",
    warning:      "注意",
    confirm:      "确认",
    error:        "错误",
    fatal:        "严重错误",
    exception:    "例外",
    input:        "输入",
    select:       "选择",
    title: {
        save:       "保存",
        load:       "读取",
        menu:       "目录",
        gallery:    "图库",
        history:    "对话记录",
        help:       "帮助"
    },
    button: {
        close:      "关闭",
        back:       "返回",
        end:        "退出",
        main:       "从新开始",
        delete:     "删除",
        scene:      "停止",
        video:      "停止",
        reset:      "初始化",
        recent:     "显示最新数据"
    },
    menu: {
        history:    "对话记录",
        language:   "语言",
        gallery:    "图库",
        restart:    "从新开始",
        config:     "游戏设置",
        theme:      "界麪皮肤",
        help:       "帮助"
    },
    config: {
        useEffect:  "画面效果使用",
        useAnim:    "使用动画效果",
        waitVoice:  "等完声音之后开始进行",
        keepVoice:  "下次语音出来之前继续播放",
        shadow:     "对话文字加影",
        outline:    "对话文字加外围",
        opaque:     "对话窗透明度",
        playSpeed:  "游戏速度",
        typingSpeed:"对话文字速度",
        autoSpeed:  "自动进行速度",
        master:     "全体音响音量",
        bgm:        "背景音乐音量",
        video:      "视频音量",
        effect:     "游戏效果音量",
        voice:      "人物语音音量",
        reset:      "设定初始化"
    },
    quickmenu: {
        qsave:      "快速保存",
        qload:      "快速读取",
        save:       "保存",
        load:       "读取",
        auto:       "自动进行",
        skip:       "跳过"
    },
    messageType: {
        yes:        "是",
        no:         "不是",
        ok:         "是",
        cancel:     "取消",
        restart:    "确认从新开始吗?",
        exit:       "确认退出吗?",
        save:       "要保存吗?",
        load:       "要读取文件吗？",
        overwrite:  "要替换原来的文件吗?",
        delete:     "确认删除吗?",
        stop:       "确认停止吗?",
        share:      "要分享吗?",
        prev:       "要返回前一画面吗?",
        dontask:    "以后不再问",
        reset:      "确定要初始化设定吗?",
        top:        "最上面",
        bottom:     "最下面",
        loadOk:     "读取成功",
        saveOk:     "保存成功",
        qloadOk:    "读取成功",
        qsaveOk:    "保存成功",
        deleteOk:   "删除成功",
        locale:     "语言设定已变",
        continue:   "持续。。。",
        end:        "谢谢。",
        prevEpisode:"上一篇",
        nextEpisode:"下一篇"
    },
    mobile: {
        back:       "再点击‘回去’时程序结束"
    },
    errorType: {
        email:      "邮件形式有错误",
        url:        "网络地址有错误",
        number:     "只能输入数字",
        integer:    "只能输入数字",
        digits:     "只能输入数字",
        notblank:   "不能有空白",
        alphanum:   "只能输入英文和数字"
    }
});
