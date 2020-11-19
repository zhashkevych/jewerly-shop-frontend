$('#reg_submit').on('click', function () {
    if ($('#gender').val() === '') {
        let data = {
            email: document.getElementById('reg_email').value,
            first_name: document.getElementById('reg_f_name').value,
            last_name: document.getElementById('reg_l_name').value,
            password: document.getElementById('reg_pass').value
        };

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
                        localStorage.clear();
                    },
                    error: function (response) {
                        if (response.responseJSON.error === 'order sum is too low') {
                            swal({
                                title: "Error",
                                text: `Your ${response.responseJSON.error}. In 5 seconds you will be redirected to the products page.`,
                                icon: "error",
                                closeOnClickOutside: true,
                                closeOnEsc: true,
                            })
                            setTimeout(function () {
                                window.location.href = "/products-page.html";
                            }, 5000);
                        } else {
                            swal({
                                title: "Error",
                                text: `Something went wrong. Please check all fields and try again`,
                                icon: "error",
                                closeOnClickOutside: true,
                                closeOnEsc: true,
                            })
                        }

                    }
                });
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
