const checkoutPage = () => {
    let formWrapper = document.querySelector('.checkout-form');
    let orderItems = shoppingCartController.getShoppingCartItems()

    if (orderItems.length === 0) {
        formWrapper.innerHTML = 'At first you need add some products to the cart'
        return
    }

    // render products
};

if (window.location.pathname === '/checkout-page.html') {
    checkoutPage();
}