const loginToPanel = () => {
    let adminFormLogin = document.getElementById('adminSubmit');

    adminFormLogin.onclick = () => {
        $.ajax({
            type: "POST",
            url: 'http://164.90.218.246:8001/auth/admin/sign-in',
            data: JSON.stringify({
                "login": document.getElementById('adminLoginInput').value,
                "password": document.getElementById('adminPassInput').value
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
    };
};

if (window.location.pathname === '/admin.html') {
    loginToPanel();
}
