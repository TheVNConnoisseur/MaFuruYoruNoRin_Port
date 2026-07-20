// Vinos Locale
window.Vinos.locale = window.Vinos.locale || {};

// Define the messages
window.Vinos.locale.ja = jQuery.extend(window.Vinos.locale.ja || {}, {
    information:  "情報",
    warning:      "注意",
    confirm:      "確認",
    error:        "エラー",
    fatal:        "致命的なエラー",
    exception:    "例外",
    input:        "入力",
    select:       "選択",
    title: {
        save:       "セーブ",
        load:       "ロード",
        menu:       "メニュー",
        gallery:    "ギャラリー",
        history:    "バックログ",
        help:       "ヘルプ"
    },
    button: {
        close:      "閉じる",
        back:       "以前",
        end:        "終了",
        main:       "タイトル画面",
        delete:     "削除",
        scene:      "中止",
        video:      "中止",
        reset:      "初期化",
        recent:     "最新データを表示"
    },
    menu: {
        history:    "バックログ",
        language:   "言語",
        gallery:    "ギャラリー",
        restart:    "再起動",
        config:     "システム設定",
        theme:      "スキンテーマ",
        help:       "ヘルプ"
    },
    config: {
        useEffect:  "画面効果適用",
        useAnim:    "映像再生",
        waitVoice:  "音声再生が終わるまで進行待機",
        keepVoice:  "次の音声前まで再生を続く",
        shadow:     "テキストに陰影をつける",
        outline:    "テキストに枠線をつける",
        opaque:     "テキストウインドウの不透明度",
        playSpeed:  "プレイ速度",
        typingSpeed:"文字表示速度",
        autoSpeed:  "オート進行速度",
        master:     "マスター音量",
        bgm:        "BGM音量",
        video:      "動画音量",
        effect:     "SE音量",
        voice:      "キャラボイス音量",
        reset:      "設定の初期化"
    },
    quickmenu: {
        qsave:      "Q.セーブ",
        qload:      "Q.ロード",
        save:       "セーブ",
        load:       "ロード",
        auto:       "オート",
        skip:       "スキップ"
    },
    messageType: {
        yes:        "はい",
        no:         "いいえ",
        ok:         "確認",
        cancel:     "取り消し",
        restart:    "タイトル画面に戻りますか？",
        exit:       "終了しますか？",
        save:       "セーブしますか？",
        load:       "ロードしますか？",
        overwrite:  "セーブデータを上書きしますか？",
        delete:     "削除しますか？",
        stop:       "中止しますか？",
        share:      "共有しますか？",
        prev:       "以前の画面に戻りますか？",
        dontask:    "次回から確認しない",
        reset:      "基本設定に初期化を行いますか？",
        top:        "一番上です",
        bottom:     "一番下です",
        loadOk:     "ロードしました。",
        saveOk:     "セーブしました。",
        qloadOk:    "クイックロードしました。",
        qsaveOk:    "クイックセーブしました。",
        deleteOk:   "削除されました。",
        locale:     "言語設定が変更されました。",
        continue:   "次回につづく...",
        end:        "ありがとうございました。",
        prevEpisode:"前回",
        nextEpisode:"次回"
    },
    mobile: {
        back:       "もう一度押すと終了します。"
    },
    errorType: {
        email:      "メール形式が間違っています",
        url:        "入力したインターネットアドレスが間違っています",
        number:     "数字だけ入力可能です",
        integer:    "数字だけ入力可能です",
        digits:     "数字だけ入力可能です",
        notblank:   "空白は入力されません",
        alphanum:   "英文字と数字だけ入力出来ます"
    }
});
