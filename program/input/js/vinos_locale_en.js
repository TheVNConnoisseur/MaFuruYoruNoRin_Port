// VinoS Locale
window.Vinos.locale = window.Vinos.locale || {};

// Define the messages
window.Vinos.locale.en = jQuery.extend(window.Vinos.locale.en || {}, {
    information:  "Information",
    warning:      "Warning",
    confirm:      "Confirm",
    error:        "Error",
    fatal:        "Fatal Error",
    exception:    "Exception",
    input:        "Input",
    select:       "Select",
    title: {
        save:       "Save",
        load:       "Load",
        menu:       "Menu",
        gallery:    "Gallery",
        history:    "History",
        help:       "Help"
    },
    button: {
        close:      "Close",
        back:       "Back",
        end:        "End",
        main:       "Title",
        delete:     "Delete",
        scene:      "Exit",
        video:      "Exit",
        reset:      "Reset",
        recent:     "Recent"
    },
    menu: {
        history:    "History",
        language:   "Language",
        gallery:    "Gallery",
        restart:    "Restart",
        config:     "Config",
        theme:      "Theme",
        help:       "Help"
    },
    config: {
        useEffect:  "Use Visual Effects",
        useAnim:    "Play Video",
        waitVoice:  "Wait Until Voice Ends",
        keepVoice:  "Proceed Until Next Voice",
        shadow:     "Add Shadow to Text",
        outline:    "Add Outline to Text",
        opaque:     "Dialogue Opacity",
        playSpeed:  "Play Speed",
        typingSpeed:"Text Speed",
        autoSpeed:  "Auto-Play Speed",
        master:     "Master Volule",
        bgm:        "BGM Volume",
        video:      "Video Volume",
        effect:     "SFX Volume",
        voice:      "Voice Volume",
        reset:      "Reset to default"
    },
    quickmenu: {
        qsave:      "Q.Save",
        qload:      "Q.Load",
        save:       "Save",
        load:       "Load",
        auto:       "Auto",
        skip:       "Skip"
    },
    messageType: {
        yes:        "Yes",
        no:         "No",
        ok:         "O.K",
        cancel:     "Cancel",
        restart:    "Restart?",
        exit:       "Exit?",
        save:       "Save?",
        load:       "Load?",
        overwrite:  "Overwrite existing save?",
        delete:     "Delete?",
        stop:       "Stop?",
        share:      "Share?",
        prev:       "Goto previous?",
        dontask:    "Don't ask me again",
        reset:      "Reset to default settings?",
        top:        "Reached the top",
        bottom:     "Reached the bottom",
        loadOk:     "Successfully loaded.",
        saveOk:     "Successfully saved.",
        qloadOk:    "Successfully loaded.",
        qsaveOk:    "Successfully saved.",
        deleteOk:   "Successfully deleted.",
        locale:     "Language setting has been changed.",
        continue:   "To be continued...",
        end:        "The End",
        prevEpisode:"Previous Episode",
        nextEpisode:"Next Episode"
    },
    mobile: {
        back:       "Press 'Back' button again to exit program."
    },
    errorType: {
        email:      "Invalid e-mail format",
        url:        "Invalid internet address",
        number:     "Numeric only",
        integer:    "Integer only",
        digits:     "Digits only",
        notblank:   "Blank not allowed",
        alphanum:   "Alphanumeric only"
    }
});
