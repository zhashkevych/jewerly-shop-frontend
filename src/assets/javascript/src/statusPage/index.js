const statusPageHandling = () => {
    let successPage = document.querySelector('.response_success');
    let errorPage = document.querySelector('.response_error');

    if (localStorage.getItem('success') === 'true') {
        errorPage.classList.add('d-none');
    } else {
        successPage.classList.add('d-none');
    }
}

statusPageHandling();