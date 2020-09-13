const loadProduct = () => {
    let urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get('product_id');
    // let language = urlParams.get('language');
    let currency = getCurrencyQueryParameter();
    let language = getLanguageQueryParameter();

    productsController.getProductById(productId, language, currency).then(product => renderProduct(product));
};

const renderProduct = (product) => {
    setCookie('imgValue', product.images[0].url, 0.5);

    document.getElementById('productId').innerHTML = product.id;
    document.getElementById('product_description').innerHTML = product.description;
    document.getElementById('product_material').innerHTML = product.material;

    let currency = getCurrencyCurrency()
    document.getElementById('productPagePrice').innerHTML = `<span style="margin-right: 5px;" class="currentCurrencyValPrice">${currency}</span>` + product.price;

    document.getElementById('productPageCode').innerHTML += product.code;
    document.getElementById('productPagePhoto').setAttribute('style', `background: url('${product.images[0].url}') center no-repeat; background-size: contain;`);
    document.getElementById('productPageTitle').innerHTML = product.title;

    if (product.in_stock) {
        document.getElementById('itemAvailable').classList.add('true')
        document.getElementById('itemAvailable').textContent = translations[currentLanguage].productFields.availabilityTrue;
    } else {
        document.getElementById('itemAvailable').classList.add('false');
        document.getElementById('itemAvailable').textContent = translations[currentLanguage].productFields.availabilityFalse;
    }
};

const initProductToCardHandler = () => {
    let addToCartButton = document.getElementById('addProductToCart');

    addToCartButton.onclick = () => {
        animateButton(addToCartButton);
        createShoppingCartListElement();
        // $("#addProductToCart").attr("disabled", true);

        localStorage.setItem('itemId', parseInt(document.getElementById('productId').innerHTML));
        localStorage.setItem('itemQuantity', parseInt(document.querySelector('#productQuantity').value));

        localStorage.setItem('testCart', document.querySelector('.container_cart').innerHTML);

        quantityCartHeader();
        cartSum();
    };
};

const animateButton = (button) => {
    button.classList.add('active');
    document.querySelector('.fa-shopping-cart.cart-icon').classList.add('pulse-drop');

    setTimeout(function () {
        button.classList.remove('active');
        document.querySelector('.fa-shopping-cart.cart-icon').classList.remove('pulse-drop');
    }, 600);
};

const createShoppingCartListElement = () => {
    let addedProduct = document.createElement('li');
    addedProduct.className = 'clearfix';
    addedProduct.innerHTML = `
        <div class="img" style="background: url(${getCookie('imgValue')}) center center no-repeat; background-size: contain;"></div>
        <span class="item-name">${document.querySelector('#productPageTitle').innerHTML}</span>
        <span class="item-price itemPrice">${document.querySelector('#productPagePrice').innerHTML}</span>
        <label class="d-flex">
            <p id="quantityLabel">Quantity:</p>
            <input width="50" type="number" id="productQuantity" style="width: 40px;" value="${document.getElementById('productQuantity').value}" name="quantity" min="1">
        </label>
        <span class="selected_item-id d-none">${document.getElementById('productId').innerHTML}</span>`;

    document.querySelector('#shoppingCartContainer').appendChild(addedProduct);
}

const productPageTabs = () => {
    (function () {

        'use strict';

        let tabs = function (options) {

            let el = document.querySelector(options.el);
            let tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
            let tabContentContainers = el.querySelectorAll(options.tabContentContainers);
            let activeIndex = 0;
            let initCalled = false;

            let init = function () {
                if (!initCalled) {
                    initCalled = true;
                    el.classList.remove('no-js');

                    for (let i = 0; i < tabNavigationLinks.length; i++) {
                        let link = tabNavigationLinks[i];
                        handleClick(link, i);
                    }
                }
            };

            let handleClick = function (link, index) {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    goToTab(index);
                });
            };

            let goToTab = function (index) {
                if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
                    tabNavigationLinks[activeIndex].classList.remove('is-active');
                    tabNavigationLinks[index].classList.add('is-active');
                    tabContentContainers[activeIndex].classList.remove('is-active');
                    tabContentContainers[index].classList.add('is-active');
                    activeIndex = index;
                }
            };

            return {
                init: init,
                goToTab: goToTab
            };

        };

        window.tabs = tabs;

    })();

    let myTabs1 = tabs({
        el: '#tabs1',
        tabNavigationLinks: '.tab-link',
        tabContentContainers: '.tab-content'
    });

    myTabs1.init();
};


if (window.location.pathname === '/product-page.html') {
    loadProduct();
    initProductToCardHandler();
    productPageTabs();
}
