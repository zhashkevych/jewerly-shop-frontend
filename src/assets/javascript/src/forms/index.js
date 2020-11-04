$('#reg_submit').on('click', function () {
    if ($('#gender').val() === '') {
        let data = {
            email: document.getElementById('reg_email').value,
            first_name: document.getElementById('reg_f_name').value,
            last_name: document.getElementById('reg_l_name').value,
            password: document.getElementById('reg_pass').value
        };

        // const url = 'http://164.90.218.246:8000/auth';

        $.ajax({
            type: 'POST',
            url: `${API_HOST}/sign-up`,
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

        // const url = 'http://164.90.218.246:8000/auth';

        $.ajax({
            type: 'POST',
            url: `${API_HOST}/sign-in`,
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

const checkoutPageAction = () => {
    const url = API_HOST;
    let checkoutPageSubmit = document.getElementById('checkoutPageSubmit');

    if (checkoutPageSubmit) {
        checkoutPageSubmit.onclick = () => {
            if ($('#gender').val() === '') {
                let data = {
                    first_name: document.getElementById('checkout_fname').value,
                    last_name: document.getElementById('checkout_lname').value,
                    additional_name: document.getElementById('checkout_additional_name').value,
                    email: document.getElementById('checkout_email').value,
                    phone: document.getElementById('checkout_phone').value,
                    country: document.getElementById('checkout_country').value,
                    address: document.getElementById('checkout_address').value,
                    postal_code: document.getElementById('checkout_postal_code').value,
                    items: [],
                };

                let items = shoppingCartController.getShoppingCartItems()
                items.products.forEach(item => {
                    data.items.push({
                        product_id: item.product.id,
                        quantity: item.quantity,
                    })
                })

                $.ajax({
                    type: 'POST',
                    url: `${url}` + '/api/order',
                    data: JSON.stringify(data),
                    dataType: "json",
                    beforeSend: function () {

                    },
                    success: function (response) {
                        window.location.href = response.url;
                        // swal({
                        //     title: "Success",
                        //     text: false,
                        //     icon: "success",
                        //     closeOnClickOutside: true,
                        //     closeOnEsc: true,
                        // })
                        // document.querySelector('.checkout-form').classList.add('d-none');
                        // document.getElementById('checkoutIframeInput').classList.add('active')
                        // document.getElementById('checkoutIframeInput').setAttribute('src', response.url)
                        //
                        // if (document.getElementById('checkoutIframeInput').getAttribute('src') !== "") {
                        //     $('#submit').trigger('click')
                        // }


                        // example of success response after PAY
                        // http://silverrain-jewelry.com:8080/?payme_status=success&payme_signature=467ba56efd88f93bbd2cc74a61fc4e08&payme_sale_id=SALE1600-261613WL-W20WA6XU-46FFX4UF&payme_transaction_id=TRAN1600-261679SB-XOUZSQL6-N8QJCKGR&price=617000&currency=USD&transaction_id=7d773232-f81d-11ea-bedb-0242ac110003&is_token_sale=0&is_foreign_card=1
                    },
                    error: function (response) {
                        console.log(response)
                        swal({
                            title: "Error",
                            text: "Something went wrong. Please check all fields",
                            icon: "error",
                            closeOnClickOutside: true,
                            closeOnEsc: true,
                        })
                    }
                });
                localStorage.clear();
            }
        }
    }

};

const isUserLogged = () => {
    if (getCookie('logged_in')) {
        $('.header .login_wrapper').html('Hello, user_name');
        $('body').addClass('logged-in');
    }
};

isUserLogged();

if (window.location.pathname !== '/admin-panel.html' && window.location.pathname !== '/admin.html') {
    checkoutPageAction();
}
