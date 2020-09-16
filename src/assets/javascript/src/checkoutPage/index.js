const checkoutPage = () => {
    let formWrapper = document.querySelector('.checkout-form');
    let orderItems = localStorage.getItem('shoppingCartProducts');

    document.querySelector('.article-level-2').textContent = translations[currentLanguage].pageTitle.checkout;
    document.querySelector('.fname_field').textContent = translations[currentLanguage].forms.firstName;
    document.querySelector('.lname_field').textContent = translations[currentLanguage].forms.lastName;
    document.querySelector('.additionalName_field').textContent = translations[currentLanguage].forms.additionalName;
    document.querySelector('.email_field').textContent = translations[currentLanguage].forms.email;
    document.querySelector('.phone_field').textContent = translations[currentLanguage].forms.phone;
    document.querySelector('.country_field').textContent = translations[currentLanguage].forms.country;
    document.querySelector('.address_field').textContent = translations[currentLanguage].forms.address;
    document.querySelector('.postalCode_field').textContent = translations[currentLanguage].forms.postalCode;
    document.querySelector('#checkoutPageSubmit').value = translations[currentLanguage].forms.goToPayBtn;

    if (orderItems === null) {
        formWrapper.innerHTML = translations[currentLanguage].forms.checkOutEmptyCart;
        return
    }

    // render products
};

if (window.location.pathname === '/checkout-page.html') {
    checkoutPage();
}