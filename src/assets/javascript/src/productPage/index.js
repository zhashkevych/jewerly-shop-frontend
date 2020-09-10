const loadProduct = () => {
    let urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get('product_id');
    let language = urlParams.get('language');
    let currency = getCurrencyQueryParameter();

    $.ajax({
        type: "GET",
        url: `http://164.90.218.246:8001/api/products/${productId}?language=${language}&currency=${currency}`,
        success: function (response) {
            renderProduct(response);
        }
    })
};

const renderProduct = (product) => {
    setCookie('imgValue', product.images[0].url, 0.5);

    document.getElementById('productId').innerHTML = product.id;
    document.getElementById('product_description').innerHTML = product.description;
    document.getElementById('product_material').innerHTML = product.material;
    document.getElementById('productPagePrice').innerHTML = `<span style="margin-right: 5px;" class="currentCurrencyValPrice">${$('#currentCurrencyVal').html()}</span>` + product.price;

    document.getElementById('productPageCode').innerHTML = 'Code: ' + product.code;
    document.getElementById('productPagePhoto').setAttribute('style', `background: url('${product.images[0].url}') center no-repeat; background-size: contain;`);
    document.getElementById('productPageTitle').innerHTML = product.title;

    if (product.in_stock) {
        document.getElementById('itemAvailable').classList.add('true')
    } else {
        // $("#addProductToCart").attr("disabled", true);
        document.getElementById('itemAvailable').classList.add('false');
        document.getElementById('itemAvailable').innerHTML = 'This item is not in stock';
    }
};

const initProductToCardHandler = () => {
    let addToCartTrigger = document.getElementById('addProductToCart');

    addToCartTrigger.onclick = () => {
        addToCartTrigger.classList.add('active');
        document.querySelector('.fa-shopping-cart.cart-icon').classList.add('pulse-drop');

        setTimeout(function () {
            addToCartTrigger.classList.remove('active');
            document.querySelector('.fa-shopping-cart.cart-icon').classList.remove('pulse-drop');
        }, 600);

        let addedProduct = document.createElement('li');
        addedProduct.className = 'clearfix';
        addedProduct.innerHTML = `
        <div class="img" style="background: url(${getCookie('imgValue')}) center center no-repeat; background-size: contain;"></div>
        <span class="item-name">${document.querySelector('#productPageTitle').innerHTML}</span>
        <span class="item-price itemPrice">${document.querySelector('#productPagePrice').innerHTML}</span> <span class="oc-text-gray">Quantity: </span>
        <span class="item-quantity">${document.getElementById('productQuantity').value}</span>
        <span class="selected_item-id d-none">${document.getElementById('productId').innerHTML}</span>`;

        document.querySelector('#shoppingCartContainer').appendChild(addedProduct);

        let testCartObject = {
            title: document.querySelector('#productPageTitle').textContent,
            quantity: document.getElementById('productQuantity').value,
            price: document.querySelector('.itemPrice').childNodes[1].data
        };


        localStorage.setItem('testObject', JSON.stringify(testCartObject));


        let productId = document.getElementById('productId').innerHTML;
        localStorage.setItem('itemId', parseInt(productId));
        localStorage.setItem('itemQuantity', parseInt(document.querySelector('.item-quantity').textContent));

        localStorage.setItem('testCart', document.querySelector('.container_cart').innerHTML);

        for (let i = 0; i < document.querySelectorAll('.clearfix .item-quantity').length; i++) {
            // console.log('quantity')
            // console.log(document.querySelectorAll('.clearfix .item-quantity')[i].innerHTML);
        }

        for (let i = 0; i < document.querySelectorAll('.clearfix .selected_item-id').length; i++) {
            // console.log('ID')
            // console.log(document.querySelectorAll('.clearfix .selected_item-id')[i].innerHTML);
        }


        quantityCartHeader();
        cartSum();
    };

};

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
