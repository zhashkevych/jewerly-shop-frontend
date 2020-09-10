const toggleCurrencyList = () => {
    if (getCookie('currentCurrency') === null) {
        $('#currentCurrencyMain').html('$')
    } else {
        $('#currentCurrencyMain').html($("#currencyNew option")[0].innerHTML.charAt(0));
    }


    $('#currencyNew').change(function () {
        let currency = $("#currencyNew option:checked").val();
        $('#currentCurrencyMain').html(document.querySelector('#currencyNew option:checked').textContent.slice(2));
        // setCookie('currentCurrency', $("#currencyNew option")[0].innerHTML.charAt(0), 0.5);
        console.log(currency);



        let queryParams = new URLSearchParams(window.location.search);
        queryParams.set("currency", document.querySelector('#currencyNew option:checked').textContent.slice(2).toLowerCase());
        queryParams.set("language", document.getElementsByTagName('body')[0].classList.value.slice(-2));
        history.replaceState(null, null, "?"+queryParams.toString());
        location.reload();
    });

    console.log($("#currencyNew option:checked").val());

    // $('.header_upper_content').bind('DOMSubtreeModified', function () {
    //     $('.currentCurrencyValPrice').html(document.getElementById('currentCurrencyMain').innerHTML);
    // });
};

if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {
    toggleCurrencyList();
}