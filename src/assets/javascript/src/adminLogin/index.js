const loginToPanel = () => {
    let adminFormLogin = document.getElementById('adminSubmit');

    adminFormLogin.onclick = () => {
        $.ajax({
            type: "POST",
            url: `${API_HOST}/auth/admin/sign-in`,
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
                swal({
                    title: "Error",
                    text: 'Login or password is not correct',
                    icon: "error",
                    closeOnClickOutside: true,
                    closeOnEsc: true,
                });
            }
        });
    };
};

if (window.location.pathname === '/admin.html') {
    loginToPanel();
}
