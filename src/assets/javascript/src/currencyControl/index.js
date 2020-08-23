const toggleCurrencyList = () => {
    $('#currency').hover(function () {
        $('.currency_wrapper_hidden').toggleClass('d-none');
    });

    $('#currencySecondary').on('click', function () {
        if ($('#currentCurrencyMain').html() === '$ USD') {
            $('#currentCurrencyMain').html('€ EUR');
            $('#currencySecondary').html('$ USD');
            setCookie('currentCurrency', '€', 0.5)
        }
    })

    if (getCookie('currentCurrency') === '€') {
        $('#currentCurrencyMain').html('€ EUR');
        $('#currencySecondary').html('$ USD');
        $('#currencySecondary').on('click', function () {
            $('#currentCurrencyMain').html('$ USD');
            $('#currencySecondary').html('€ EUR');
            setCookie('currentCurrency', '$', 0.5)
        })
    }

    if (getCookie('currentCurrency') === '$') {
        $('#currentCurrencyMain').html('$ USD');
        $('#currencySecondary').html('€ EUR');
    }

    $('.header_upper_content').bind('DOMSubtreeModified', function () {
        for (let i = 0; i < document.getElementsByClassName('currentCurrencyValPrice').length; i++) {
            document.getElementsByClassName('currentCurrencyValPrice')[i].innerHTML = document.getElementById('currentCurrencyMain').innerHTML[0];
        }
    });

};

toggleCurrencyList();