// Vinos Locale
window.Vinos.locale = window.Vinos.locale || {};

// Define the messages
window.Vinos.locale.ko = jQuery.extend(window.Vinos.locale.ko || {}, {
    information:  "안내",
    warning:      "주의",
    confirm:      "확인",
    error:        "오류",
    fatal:        "치명적 오류",
    exception:    "예외",
    input:        "입력",
    select:       "선택",
    title: {
        save:       "저장",
        load:       "불러오기",
        menu:       "메뉴",
        gallery:    "갤러리",
        history:    "히스토리",
        help:       "도움말"
    },
    button: {
        close:      "닫기",
        back:       "뒤로",
        end:        "종료",
        main:       "초기화면",
        delete:     "삭제",
        scene:      "중지",
        video:      "중지",
        reset:      "초기화",
        recent:     "최신 자료"
    },
    menu: {
        history:    "히스토리",
        language:   "사용 언어",
        gallery:    "갤러리",
        restart:    "재시작",
        config:     "환경 설정",
        theme:      "스킨 테마",
        help:       "도움말"
    },
    config: {
        useEffect:  "화면 효과 사용",
        useAnim:    "비디오 재생",
        waitVoice:  "음성재생 완료까지 진행대기",
        keepVoice:  "다른 음성전까지 재생계속",
        shadow:     "대사에 그림자 추가",
        outline:    "대사에 외곽선 추가",
        opaque:     "대사창 불투명도",
        playSpeed:  "플레이 속도",
        typingSpeed:"대사 출력 속도",
        autoSpeed:  "자동 진행 속도",
        master:     "전체 오디오 음량",
        bgm:        "배경 음악 음량",
        video:      "동영상 음량",
        effect:     "음향 효과 음량",
        voice:      "케릭터 음성 음량",
        reset:      "설정 초기화"
    },
    quickmenu: {
        qsave:      "빠른저장",
        qload:      "빠른로드",
        save:       "저장",
        load:       "불러오기",
        auto:       "자동진행",
        skip:       "넘기기"
    },
    messageType: {
        yes:        "예",
        no:         "아니오",
        ok:         "확인",
        cancel:     "취소",
        restart:    "재시작 하시겠습니까?",
        exit:       "종료 하시겠습니까?",
        save:       "저장 하시겠습니까?",
        load:       "불러오기를 하시겠습니까?",
        overwrite:  "기존 화일을 대체하시겠습니까?",
        delete:     "삭제 하시겠습니까?",
        stop:       "중지 하시겠습니까?",
        share:      "공유 하시겠습니까?",
        prev:       "이전 화면으로 돌아가시겠습니까?",
        dontask:    "다음부터 물어보지 않음",
        reset:      "설정을 초기화 하시겠습니까?",
        top:        "맨 위 입니다",
        bottom:     "맨 아래 입니다",
        loadOk:     "정상적으로 불러왔습니다.",
        saveOk:     "정상적으로 저장했습니다.",
        qloadOk:    "정상적으로 불러왔습니다.",
        qsaveOk:    "정상적으로 저장했습니다.",
        deleteOk:   "정상적으로 삭제됐습니다.",
        locale:     "언어설정이 변경되었습니다.",
        continue:   "다음 편에 계속...",
        end:        "감사합니다.",
        prevEpisode:"이전화",
        nextEpisode:"다음화"
    },
    mobile: {
        back:       "'이전' 버튼을 한번 더 누르시면 종료됩니다."
    },
    errorType: {
        email:      "이메일 형식이 잘못되었습니다",
        url:        "입력하신 인터넷주소가 잘못되었습니다",
        number:     "숫자만 입력 가능합니다",
        integer:    "숫자만 입력 가능합니다",
        digits:     "숫자만 입력 가능합니다",
        notblank:   "공백은 입력되지 않습니다",
        alphanum:   "영문자와 숫자만 입력 가능합니다"
    }
});
