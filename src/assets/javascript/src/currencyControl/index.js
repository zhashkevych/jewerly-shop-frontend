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

    // if (window.innerWidth <= 576) {
    //     document.getElementById('mob_currencyHolder').appendChild($('#currencySelector')
    //         .append($("<option></option>").attr("value", key).text(value)))
    // }
};

const initCurrencySelectorHandler = () => {
    $('#currencySelector').change(function () {
        let currency = $("#currencySelector option:checked").val();
        localStorage.setItem(currencyCookieName, currency)
        location.reload();
    });
};

const getCurrentCurrency = () => {
    if (localStorage.getItem(currencyCookieName) === null) {
        localStorage.setItem(currencyCookieName, defaultCurrency)
    }

    return localStorage.getItem(currencyCookieName)
}

const getCurrencyQueryParameter = () => {
    return currenciesURLParams[getCurrentCurrency()]
}

if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {
    initCurrencySelector(currenciesSelectorOptions);
    initCurrencySelectorHandler();
}
