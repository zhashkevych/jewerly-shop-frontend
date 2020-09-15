const defaultLanguage = 'en';
const languageCookieName = 'language';

const languageSelectorOptions = {
    'en': 'EN',
    'ru': 'RU',
    'ua': 'UA',
}

const languagesURLParams = {
    'en': 'en',
    'ru': 'ru',
    'ua': 'ua',
}

const initLanguageSelector = (values) => {
    $.each(values, function (key, value) {
        $('#languageSelector')
            .append($("<option></option>").attr("value", key).text(value));
    });

    // set current language option selected
    currentLanguage = getCurrentLanguage()
    $("#languageSelector").val(currentLanguage).change();
};

const initLanguageSelectorHandler = () => {
    $('#languageSelector').change(function () {
        let language = $("#languageSelector option:checked").val();
        setCookie(languageCookieName, language);
        location.reload();
    });
};

const getCurrentLanguage = () => {
    if (getCookie(languageCookieName) === null) {
        setCookie(languageCookieName, defaultLanguage);
        return defaultLanguage
    }

    return getCookie(languageCookieName);
}

const getLanguageQueryParameter = () => {
    return languagesURLParams[getCurrentLanguage()]
}

if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {
    initLanguageSelector(languageSelectorOptions);
    initLanguageSelectorHandler();
}
