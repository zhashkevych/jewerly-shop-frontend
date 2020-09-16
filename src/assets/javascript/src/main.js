const API_HOST = '@api_host@';

let urlParams = new URLSearchParams(window.location.search);
let payStatus = urlParams.get('payme_status');
let paySaleId = urlParams.get('payme_sale_id');

if (payStatus === 'success' && paySaleId !== "") {
    window.location.href = '/success_page.html';
}

@@include('actionsAfterPayment/index.js');
@@include('checkBrowser/index.js');
@@include('api/products.js');
@@include('api/orders.js');
@@include('currencyControl/index.js');
@@include('langControl/index.js');
@@include('cookies/index.js');
@@include('categories/index.js');
@@include('translationsControl/index.js');
@@include('headerCart/index.js');
@@include('mobileHeader/index.js');
@@include('shoppingCart/index.js');
@@include('productPage/index.js');
@@include('productsList/index.js');
@@include('checkoutPage/index.js');
@@include('forms/index.js');
@@include('adminPanel/index.js');
@@include('adminLogin/index.js');

shoppingCartController.initCart();