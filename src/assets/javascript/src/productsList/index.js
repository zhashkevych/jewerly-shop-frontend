const productsList = () => {
    if (window.location.search.slice(-1) === '1') {
        for (let i = 0; i < testProductObject.data.length; i++) {
            if (testProductObject.data[i].category_id === 1) {
                console.log(testProductObject.data[i]);
                const singleItemTestTitle = testProductObject.data[i].title;
                const singleItemTestId = testProductObject.data[i].id;
                const singleItemTestImg = testProductObject.data[i].image.url;

                let productsListItem = document.createElement('div');
                productsListItem.className = 'col-md-3 mb-20';
                productsListItem.innerHTML = `<div class="item" id="item_id_${singleItemTestId}" style="background: url(${singleItemTestImg})  center center no-repeat; min-height: 250px; background-size: contain;"><div class="price_cta_preview"><a href="/product-page.html?=product_id_${singleItemTestId}">${singleItemTestTitle}</a><p>Price: <span>${testProductObject.data[i].current_price}</span></p></div></div>`;

                document.querySelector('#productsPageItemsList').appendChild(productsListItem);
            }
        }
    }

    if (window.location.search.slice(-1) === '2') {
        for (let i = 0; i < testProductObject.data.length; i++) {
            if (testProductObject.data[i].category_id === 2) {
                console.log(testProductObject.data[i]);
                const singleItemTestTitle = testProductObject.data[i].title;
                const singleItemTestId = testProductObject.data[i].id;
                const singleItemTestImg = testProductObject.data[i].image.url;

                let productsListItem = document.createElement('div');
                productsListItem.className = 'col-md-3 mb-20';
                productsListItem.innerHTML = `<div class="item" id="item_id_${singleItemTestId}" style="background: url(${singleItemTestImg})  center center no-repeat; min-height: 250px; background-size: contain;"><div class="price_cta_preview"><a href="/product-page.html?=product_id_${singleItemTestId}">${singleItemTestTitle}</a><p>Price: <span>${testProductObject.data[i].current_price}</span></p></div></div>`;

                document.querySelector('#productsPageItemsList').appendChild(productsListItem);
            }
        }
    }

    if (window.location.search.slice(-1) === '3') {
        for (let i = 0; i < testProductObject.data.length; i++) {
            if (testProductObject.data[i].category_id === 3) {
                console.log(testProductObject.data[i]);
                const singleItemTestTitle = testProductObject.data[i].title;
                const singleItemTestId = testProductObject.data[i].id;
                const singleItemTestImg = testProductObject.data[i].image.url;

                let productsListItem = document.createElement('div');
                productsListItem.className = 'col-md-3 mb-20';
                productsListItem.innerHTML = `<div class="item" id="item_id_${singleItemTestId}" style="background: url(${singleItemTestImg})  center center no-repeat; min-height: 250px; background-size: contain;"><div class="price_cta_preview"><a href="/product-page.html?=product_id_${singleItemTestId}">${singleItemTestTitle}</a><p>Price: <span>${testProductObject.data[i].current_price}</span></p></div></div>`;

                document.querySelector('#productsPageItemsList').appendChild(productsListItem);
            }
        }
    }
};

if (window.location.pathname === '/products-page.html') {
    productsList();
}
