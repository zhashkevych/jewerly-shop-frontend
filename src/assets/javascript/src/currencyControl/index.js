const defaultCurrency = '$';
const currencyCookieName = 'currency';

const currenciesSelectorOptions = {
    '$': '$ USD',
    '€': '€ EUR',
    '₴': '₴ UAH',
}

const currenciesURLParams = {
    '$': 'usd',
    '€': 'eur',
    '₴': 'uah',
}

const initCurrencySelector = (values) => {
    $.each(values, function(key, value) {
        $('#currencySelector')
            .append($("<option></option>").attr("value", key).text(value));
    });

    // set current currency option selected
    currentCurrency = getCurrentCurrency()
    $("#currencySelector").val(currentCurrency).change();
};

const initCurrencySelectorHandler = () => {
    $('#currencySelector').change(function () {
        let currency = $("#currencySelector option:checked").val();
        localStorage.setItem(currencyCookieName, currency)
        // setCookie(currencyCookieName, currency);
        location.reload();
    });
};

const getCurrentCurrency = () => {
    if (localStorage.getItem(currencyCookieName) === null) {
        localStorage.setItem(currencyCookieName, defaultCurrency)
    }
    // if (getCookie(currencyCookieName) === null) {
    //     setCookie(currencyCookieName, defaultCurrency);
    //     return defaultCurrency
    // }

    return localStorage.getItem(currencyCookieName)
    // return getCookie(currencyCookieName)
}

const getCurrencyQueryParameter = () => {
    return currenciesURLParams[getCurrentCurrency()]
}

if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {
    initCurrencySelector(currenciesSelectorOptions);
    initCurrencySelectorHandler();
}