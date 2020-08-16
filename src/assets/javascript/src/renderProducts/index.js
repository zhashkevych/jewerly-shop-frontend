let testProductObject = {
    data: [
        {
            id: 1,
            title: 'Test RING 1',
            description: 'Test RING 1 description description description',
            material: 'Silver 999',
            current_price: 2122,
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

for (let i = 0; i < testProductObject.data.length; i++) {
    const singleItemTestTitle = testProductObject.data[i].title;
    const singleItemTestId = testProductObject.data[i].id;
    const singleItemTestImg = testProductObject.data[i].image.url;
    console.log(singleItemTestTitle);
    console.log(singleItemTestId);
    console.log(singleItemTestImg);


    let productsItem = document.createElement('div');
    productsItem.className = 'col-md-3';
    productsItem.innerHTML = `<div class="item" style="background: url(${singleItemTestImg})  center center no-repeat;"><a href="#">${singleItemTestTitle}</a></div>`;

    document.querySelector('#mainPageProductsList').appendChild(productsItem);
}
