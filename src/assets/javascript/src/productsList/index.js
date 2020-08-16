const productsList = () => {
    for (let i = 0; i < testProductObject.data.length; i++) {
        const singleItemTestTitle = testProductObject.data[i].title;
        const singleItemTestId = testProductObject.data[i].id;
        const singleItemTestImg = testProductObject.data[i].image.url;

        let productsListItem = document.createElement('div');
        productsListItem.className = 'col-md-4 mb-20';
        productsListItem.innerHTML = `<div class="item" id="item_id_${singleItemTestId}" style="background: url(${singleItemTestImg})  center center no-repeat; min-height: 250px; background-size: contain;"><a href="/product-page.html?=product_id_${singleItemTestId}">${singleItemTestTitle}</a></div>`;

        document.querySelector('#productsPageItemsList').appendChild(productsListItem);
    }
};

if (window.location.pathname === '/products-page.html') {
    productsList();
}
