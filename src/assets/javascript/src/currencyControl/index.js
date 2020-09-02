const toggleCurrencyList = () => {
    if (getCookie('currentCurrency') === null) {
        $('#currentCurrencyMain').html('$')
    } else {
        $('#currentCurrencyMain').html($("#currencyNew option")[0].innerHTML.charAt(0));
    }

    $('#currencyNew').change(function () {
        let currency = $("#currencyNew option:checked").val();
        $('.curr').html(currency);
        $('#currentCurrencyMain').html($("#currencyNew option:checked").val());
        setCookie('currentCurrency', $("#currencyNew option")[0].innerHTML.charAt(0), 0.5);
        console.log(currency);
    });

    console.log($("#currencyNew option:checked").val());

    $('.header_upper_content').bind('DOMSubtreeModified', function () {
        $('.currentCurrencyValPrice').html(document.getElementById('currentCurrencyMain').innerHTML);
    });
};

if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {
    toggleCurrencyList();
}