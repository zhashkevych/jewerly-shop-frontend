const statusPageHandling = () => {
    let successPage = document.querySelector('.response_success');
    let errorPage = document.querySelector('.response_error');

    if (successPage || errorPage) {
        if (localStorage.getItem('success') === 'true') {
            errorPage.classList.add('d-none');
        } else {
            successPage.classList.add('d-none');
        }
    }

}

statusPageHandling();

if (window.location.pathname === '/status-page.html') {
    statusPageHandling();
}
