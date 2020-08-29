const loginToPanel = () => {
    $('#adminSubmit').on('click', function () {
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
                window.location.href = '/admin-panel.html'
            },
            error: function (data) {
                alert('ERROR')
            }
        });
    })

};

if (window.location.pathname === '/admin.html') {
    loginToPanel();
}
