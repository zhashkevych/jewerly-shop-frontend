const loadProduct = () => {
    let urlParams = new URLSearchParams(window.location.search);
    let productId = urlParams.get('product_id')

    console.log(urlParams);

    $.ajax({
        type: "GET",
        url: `http://164.90.218.246:8001/api/products/${productId}`,
        success: function (response) {
            renderProduct(response);
        }
    })
};

const renderProduct = (product) => {
    $('#productId').html(product.id);
    setCookie('imgValTest', product.images[0].url, 0.5);

    $('#productPagePhoto').attr('style', `background: url('${product.images[0].url}') center no-repeat; background-size: contain;`);
    $('#productPageTitle').html(product.title);
    $('#productPagePrice').html(`<span style="margin-right: 5px;" class="currentCurrencyValPrice">${$("#currencyNew option:checked").val()}</span>` + product.current_price);
    $('#productPageCode').html('Code: ' + product.code);

    if (product.in_stock) {
        $('#itemAvailable').addClass('true')
    } else {
        $("#addProductToCart").attr("disabled", true);
        $('#itemAvailable').addClass('false');
        $('#itemAvailable').html('This item is not in stock.');
    }

    $('#product_description').html(product.description);
    $('#product_material').html(product.material);
}

const initProductToCardHandler = () => {
    $('#addProductToCart').on('click', function () {
        let addedProduct = document.createElement('li');
        addedProduct.className = 'clearfix';
        addedProduct.innerHTML = `<button type="button" class="close" aria-label="Close"><span aria-hidden="true" id="removeItemFromCart">&times;</span></button>
        <div class="img" style="background: url(${getCookie('imgValTest')}) center center no-repeat; background-size: contain;"></div>
        <span class="item-name">${document.querySelector('#productPageTitle').innerHTML}</span>
        <span class="item-price itemPrice">${document.querySelector('#productPagePrice').innerHTML}</span> <span class="oc-text-gray">Quantity: </span>
        <span class="item-quantity">${$('#productQuantity').val()}</span>`;

        document.querySelector('#shoppingCartContainer').appendChild(addedProduct);

        localStorage.setItem('itemId', parseInt($('#productId').html()));
        localStorage.setItem('itemQuantity', parseInt($('.item-quantity').html()));

        localStorage.setItem('testCart', document.querySelector('.container_cart').innerHTML);
    
        quantityCartHeader();
        cartSum();
    });
};


if (window.location.pathname === '/product-page.html') {
    loadProduct();
    initProductToCardHandler();
    
    // ????????????
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
}


// ??????
$.ajax({
    type: "POST",
    url: 'http://164.90.218.246:8001/auth/admin/sign-in',
    data: JSON.stringify({
        "login": "admin",
        "password": "eUdYff4bkQbmEKNq"
    }),
    dataType: "json",
    success: function (data) {
        setCookie('auth_token', data.token, 0.5)
    },
});
