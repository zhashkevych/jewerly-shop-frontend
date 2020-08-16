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

const showProductsList = () => {
    for (let i = 0; i < testProductObject.data.length; i++) {
        const singleItemTestTitle = testProductObject.data[i].title;
        const singleItemTestId = testProductObject.data[i].id;
        const singleItemTestImg = testProductObject.data[i].image.url;

        let matches = window.location.search.match(/\d+/g);
        let currentProductId = parseInt(matches[0]);

        $('#productPageTitle').html(testProductObject.data[currentProductId - 1].title);
        $('#productPagePrice').html(testProductObject.data[currentProductId - 1].current_price);

        let productsListItem = document.createElement('div');
        productsListItem.className = 'col-md-3 mb-20';
        productsListItem.innerHTML = `<div class="item" id="item_id_${singleItemTestId}" style="background: url(${singleItemTestImg})  center center no-repeat;"><a href="/product-page.html?=product_id_${singleItemTestId}">${singleItemTestTitle}</a></div>`;

        document.querySelector('#productsPageItemsList').appendChild(productsListItem);
    }
};

showProductsList();


