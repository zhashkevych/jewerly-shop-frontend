const checkoutPage = () => {
    let formWrapper = document.querySelector('.checkout-form');

    if (!localStorage.getItem('itemQuantity')) {
        formWrapper.innerHTML = 'At first you need add some products to the cart'
    }
};

if (window.location.pathname === '/checkout-page.html') {
    checkoutPage();
}