const loginToPanel = () => {
    console.log('test admin')

    $('#adminSubmit').on('click', function () {
        console.log('click')
        $.ajax({
            type: "POST",
            url: 'http://164.90.218.246:8001/auth/admin/sign-in',
            data: JSON.stringify({
                "login": $('#adminLoginInput').val(),
                "password": $('#adminPassInput').val()
            }),
            dataType: "json",
            success: function (data) {
                setCookie('auth_token', data.token, 0.5);
                console.log(data)
                window.location.href = '/admin-panel.html'
            },
            error: function (data) {
                console.log(data)
                alert('ERROR')
            }
        });
    })

};

const adminPanel = () => {

};

if (window.location.pathname === '/admin.html') {
    loginToPanel();
}

if (window.location.pathname !== '/admin-panel.html') {
    adminPanel();
}

