if (window.location.pathname === '/product-page.html') {
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

let testProductObject = {
    data: [
        {
            id: 1,
            title: 'Test RING 1',
            description: 'Test RING 1 description description description',
            material: 'Silver 999',
            current_price: 100,
            previous_price: 10,
            code: '123123_CODE',
            image: {
                url: "https://cdn.silverbene.com/media/catalog/product/cache/5196f519d2759624b018ede98e5f815b/B/M/BME_555183874171_1_.jpg",
                alt_test: ''
            },
            category_id: 'rings'
        },
        {
            id: 2,
            title: 'Test RING 2',
            description: 'Test RING 2 description description description',
            material: 'Silver 999',
            current_price: 500,
            previous_price: 1011,
            code: '123123_CODE',
            image: {
                url: "https://cdn.silverbene.com/media/catalog/product/cache/5196f519d2759624b018ede98e5f815b/B/M/BME_555183874171_1_.jpg",
                alt_test: ''
            },
            category_id: 'rings'
        },
        {
            id: 3,
            title: 'Test RING 3',
            description: 'Test RING 2 description description description',
            material: 'Silver 999',
            current_price: 21222,
            previous_price: 1011,
            code: '123123_CODE',
            image: {
                url: "https://cdn.silverbene.com/media/catalog/product/cache/5196f519d2759624b018ede98e5f815b/B/M/BME_555183874171_1_.jpg",
                alt_test: ''
            },
            category_id: 'rings'
        },

    ]
};

const showProduct = () => {
    for (let i = 0; i < testProductObject.data.length; i++) {
        let matches = window.location.search.match(/\d+/g);
        let currentProductId = parseInt(matches[0]);

        $('#productPageTitle').html(testProductObject.data[currentProductId - 1].title);
        $('#productPagePrice').html('$ ' + testProductObject.data[currentProductId - 1].current_price);
    }
};

const addProductTooCart = () => {

    $('#addProductToCart').on('click', function () {

        let addedProduct = document.createElement('li');
        addedProduct.className = 'clearfix';
        addedProduct.innerHTML = `
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1">
                    <span class="item-name">${document.querySelector('#productPageTitle').innerHTML}</span>
                    <span class="item-price itemPrice">${document.querySelector('#productPagePrice').innerHTML}</span>
                    <span class="item-quantity"></span>
                `;


        document.querySelector('#shoppingCartContainer').appendChild(addedProduct);

        quantityCartHeader();
        cartSum();
    })

};

if (window.location.pathname === '/product-page.html') {
    showProduct();
    addProductTooCart();
}
