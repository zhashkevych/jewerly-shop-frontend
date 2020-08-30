function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

$('#reg_submit').on('click', function () {

    if ($('#gender').val() === '') {
        let data = {
            email: $('#reg_email').val(),
            first_name: $('#reg_f_name').val(),
            last_name: $('#reg_l_name').val(),
            password: $('#reg_pass').val()
        };

        const url = 'http://164.90.218.246:8000/auth';

        $.ajax({
            type: 'POST',
            url: `${url}` + '/sign-up',
            data: JSON.stringify(data),
            dataType: "json",
            beforeSend: function () {
                $('#registerForm').addClass('active');
                $('.loader_reg').removeClass('d-none');
            },
            error: function (response) {
                $('#registerForm').toggleClass('active');
                $('.loader_reg').toggleClass('d-none');
                swal({
                    title: "Error",
                    text: "Check all fields and try one more time",
                    icon: "error",
                    closeOnClickOutside: true,
                    closeOnEsc: true,
                });
            },
            success: function (response) {
                if (response.success) {
                    setCookie('logged_in', 'true', 0.5);
                }

                swal({
                    title: "Success registration!",
                    text: "Right now you will be redirected on general page",
                    icon: "success",
                    closeOnClickOutside: true,
                    closeOnEsc: true,
                }).then(() => {
                    window.open('/main-page.html');
                });

                $('#registerForm').removeClass('active');
                $('.loader_reg').addClass('d-none');
            },
        })
    }

});

$('#login_submit').on('click', function () {
    if ($('#gender').val() === '') {
        let data = {
            email: $('#login_email').val(),
            password: $('#login_pass').val()
        };

        const url = 'http://164.90.218.246:8000/auth';

        $.ajax({
            type: 'POST',
            url: `${url}` + '/sign-in',
            data: JSON.stringify(data),
            dataType: "json",
            beforeSend: function () {
                $('#loginForm').addClass('active');
                $('.loader_login').removeClass('d-none');
            },
            error: function () {
                $('#loginForm').toggleClass('active');
                $('.loader_login').toggleClass('d-none');
                swal({
                    title: "Error",
                    text: "Check all fields and try one more time",
                    icon: "error",
                    closeOnClickOutside: true,
                    closeOnEsc: true,
                });
            },
            success: function (response) {
                if (response.token) {
                    setCookie('logged_in', 'true', 0.5);
                }
                swal({
                    title: "Success log in!",
                    text: "Right now you will be redirected on general page.",
                    icon: "success",
                    closeOnClickOutside: true,
                    closeOnEsc: true,
                }).then(() => {
                    window.open('/main-page.html');
                });

                $('#loginForm').removeClass('active');
                $('.loader_login').addClass('d-none');
            },
        })
    }
});

$('#checkoutPageSubmit').on('click', function () {
    if ($('#gender').val() === '') {
        let data = {
            items: [{
                product_id: parseInt(localStorage.getItem('itemId')),
                quantity: parseInt(localStorage.getItem('itemQuantity')),
            }],
            first_name: $('#checkout_fname').val(),
            last_name: $('#checkout_lname').val(),
            additional_name: $('#checkout_additional_name').val(),
            email: $('#checkout_email').val(),
            phone: $('#checkout_phone').val(),
            country: $('#checkout_country').val(),
            address: $('#checkout_address').val(),
            postal_code: $('#checkout_postal_code').val(),
        };
        const url = 'http://164.90.218.246:8001';

        $.ajax({
            type: 'POST',
            url: `${url}` + '/api/order',
            data: JSON.stringify(data),
            dataType: "json",
            beforeSend: function () {

            },
            error: function (response) {
                console.log(response)

            },
            success: function (response) {
                swal({
                    title: "Success",
                    text: "Right now you will be redirected on payment page.",
                    icon: "success",
                    closeOnClickOutside: true,
                    closeOnEsc: true,
                }).then(() => {
                    window.open(response.url);
                });
            },
        });
        localStorage.clear();
    }
})

const isUserLogged = () => {
    if (getCookie('logged_in')) {
        $('.header .login_wrapper').html('Hello, user_name');
        $('body').addClass('logged-in');
    }
};

isUserLogged();