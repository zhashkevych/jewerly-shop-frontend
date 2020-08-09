function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

$('#reg_submit').on('click', function () {

    let user_data = $('#registerForm');
    console.log(user_data);

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
        },
        success: function (response) {
            alert('success success success success');
            if (response.success) {
                setCookie('logged_in', 'true', 0.5);
            }
        },
    })
});

$('#login_submit').on('click', function () {

    let user_data = $('#loginForm');
    console.log(user_data);

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
        },
        error: function () {
            alert('error errorerrorerror');
        },
        success: function (response) {
            alert('success success success success');

            if (response.token) {
                setCookie('logged_in', 'true', 0.5);
            }
        },
    })
});

const isUserLogged = () => {
    if (getCookie('logged_in')) {
        $('.header .login_wrapper').html('א גוטן חבר');
        $('body').addClass('logged-in');
    }
};

isUserLogged();