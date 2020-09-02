const showProduct = () => {
    $.ajax({
        type: "GET",
        url: 'http://164.90.218.246:8001/api/products',
        success: function (response) {
            for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].id) {
                    let matches = window.location.search.match(/\d+/g);
                    let currentProductId = parseInt(matches[0]);
                    if (response.data[i].id === currentProductId) {
                        $('#productId').html(response.data[i].id);
                        setCookie('imgValTest', response.data[i].images[0].url, 0.5);

                        $('#productPagePhoto').attr('style', `background: url('${response.data[i].images[0].url}') center no-repeat; background-size: contain;`);
                        $('#productPageTitle').html(response.data[i].title);
                        $('#productPagePrice').html(`<span style="margin-right: 5px;" class="currentCurrencyValPrice">${document.getElementById('currentCurrencyMain').innerHTML[0]}</span>` + response.data[i].current_price);
                        $('#productPageCode').html('Code: ' + response.data[i].code);

                        if (response.data[i].in_stock) {
                            $('#itemAvailable').addClass('true')
                        } else {
                            $("#addProductToCart").attr("disabled", true);
                            $('#itemAvailable').addClass('false');
                            $('#itemAvailable').html('This item is not in stock.');
                        }

                        $('#product_description').html(response.data[i].description);
                        $('#product_material').html(response.data[i].material);
                    }
                }
            }
        }
    })
};

const addProductTooCart = () => {
    $.ajax({
        type: "GET",
        url: 'http://164.90.218.246:8001/api/products',
        success: function (response) {
            $('#addProductToCart').on('click', function () {
                let addedProduct = document.createElement('li');
                for (let i = 0; i < response.data.length; i++) {
                    addedProduct.className = 'clearfix';
                    addedProduct.innerHTML = `<button type="button" class="close" aria-label="Close"><span aria-hidden="true" id="removeItemFromCart">&times;</span></button>
                    <div class="img" style="background: url(${getCookie('imgValTest')}) center center no-repeat; background-size: contain;"></div>
                    <span class="item-name">${document.querySelector('#productPageTitle').innerHTML}</span>
                    <span class="item-price itemPrice">${document.querySelector('#productPagePrice').innerHTML}</span> <span class="oc-text-gray">Quantity: </span>
                    <span class="item-quantity">${$('#productQuantity').val()}</span>`;

                    document.querySelector('#shoppingCartContainer').appendChild(addedProduct);

                    localStorage.setItem('itemId', parseInt($('#productId').html()));
                    localStorage.setItem('itemQuantity', parseInt($('.item-quantity').html()));
                }

                quantityCartHeader();
                cartSum();
            });
        }
    })
};

if (window.location.pathname === '/product-page.html') {
    showProduct();
    addProductTooCart();
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
