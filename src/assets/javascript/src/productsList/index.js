const productsList = () => {
    if (window.location.search.slice(-3) === "all" || window.location.search === "") {
        let catTitle = 'All Items';
        let catTitleItem = document.createElement('div');
        catTitleItem.innerHTML = `${catTitle}`;

        document.querySelector('#catTitle').appendChild(catTitleItem);
        for (let i = 0; i < testProductObject.data.length; i++) {
            const singleItemTestTitle = testProductObject.data[i].title;
            const singleItemTestId = testProductObject.data[i].id;
            const singleItemTestImg = testProductObject.data[i].image.url;

            let productsListItem = document.createElement('div');
            productsListItem.className = 'col-md-3 mb-20';
            productsListItem.innerHTML = `<div class="item" id="item_id_${singleItemTestId}" style="background: url(${singleItemTestImg})  center center no-repeat; min-height: 250px; background-size: contain;"><div class="price_cta_preview"><a href="/product-page.html?=product_id_${singleItemTestId}">${singleItemTestTitle}</a><p>Price: ${testProductObject.data[i].current_price}<span class="currentCurrencyValPrice">${document.getElementById('currentCurrencyMain').innerHTML[0]}</span></p></div></div>`;

            document.querySelector('#productsPageItemsList').appendChild(productsListItem);
        }
    }

    if (window.location.search.slice(-1) === '1') {
        let catTitleItem = document.createElement('div');
        catTitleItem.id = 'catRingsTitle';
        catTitleItem.innerHTML = 'Rings';
        document.querySelector('#catTitle').appendChild(catTitleItem);

        for (let i = 0; i < testProductObject.data.length; i++) {
            if (testProductObject.data[i].category_id === 1) {
                const singleItemTestTitle = testProductObject.data[i].title;
                const singleItemTestId = testProductObject.data[i].id;
                const singleItemTestImg = testProductObject.data[i].image.url;

                let productsListItem = document.createElement('div');
                productsListItem.className = 'col-md-3 mb-20';
                productsListItem.innerHTML = `<div class="item" id="item_id_${singleItemTestId}" style="background: url(${singleItemTestImg})  center center no-repeat; min-height: 250px; background-size: contain;"><div class="price_cta_preview"><a href="/product-page.html?=product_id_${singleItemTestId}">${singleItemTestTitle}</a><p style="font-weight: 500;">Price: ${testProductObject.data[i].current_price}<span style="margin-left: 5px;" class="currentCurrencyValPrice">${document.getElementById('currentCurrencyMain').innerHTML[0]}</span></p></div></div>`;

                document.querySelector('#productsPageItemsList').appendChild(productsListItem);
            }
        }
    }

    if (window.location.search.slice(-1) === '2') {
        let catTitle = 'Bracelets';
        let catTitleItem = document.createElement('div');
        catTitleItem.innerHTML = `${catTitle}`;
        document.querySelector('#catTitle').appendChild(catTitleItem);

        for (let i = 0; i < testProductObject.data.length; i++) {
            if (testProductObject.data[i].category_id === 2) {
                const singleItemTestTitle = testProductObject.data[i].title;
                const singleItemTestId = testProductObject.data[i].id;
                const singleItemTestImg = testProductObject.data[i].image.url;


                let productsListItem = document.createElement('div');
                productsListItem.className = 'col-md-3 mb-20';
                productsListItem.innerHTML = `<div class="item" id="item_id_${singleItemTestId}" style="background: url(${singleItemTestImg})  center center no-repeat; min-height: 250px; background-size: contain;"><div class="price_cta_preview"><a href="/product-page.html?=product_id_${singleItemTestId}">${singleItemTestTitle}</a><p>Price: ${testProductObject.data[i].current_price}<span class="currentCurrencyValPrice">${document.getElementById('currentCurrencyMain').innerHTML[0]}</span></p></div></div>`;

                document.querySelector('#productsPageItemsList').appendChild(productsListItem);
            }
        }
    }

    if (window.location.search.slice(-1) === '3') {
        let catTitle = 'Pendants';
        let catTitleItem = document.createElement('div');
        catTitleItem.innerHTML = `${catTitle}`;
        document.querySelector('#catTitle').appendChild(catTitleItem);

        for (let i = 0; i < testProductObject.data.length; i++) {
            if (testProductObject.data[i].category_id === 3) {
                const singleItemTestTitle = testProductObject.data[i].title;
                const singleItemTestId = testProductObject.data[i].id;
                const singleItemTestImg = testProductObject.data[i].image.url;


                let productsListItem = document.createElement('div');
                productsListItem.className = 'col-md-3 mb-20';
                productsListItem.innerHTML = `<div class="item" id="item_id_${singleItemTestId}" style="background: url(${singleItemTestImg})  center center no-repeat; min-height: 250px; background-size: contain;"><div class="price_cta_preview"><a href="/product-page.html?=product_id_${singleItemTestId}">${singleItemTestTitle}</a><p>Price: ${testProductObject.data[i].current_price}<span class="currentCurrencyValPrice">${document.getElementById('currentCurrencyMain').innerHTML[0]}</span></p></div></div>`;

                document.querySelector('#productsPageItemsList').appendChild(productsListItem);
            }
        }
    }

    if (window.location.search.slice(-1) === '4') {
        let catTitle = 'Earrings';
        let catTitleItem = document.createElement('div');
        catTitleItem.innerHTML = `${catTitle}`;
        document.querySelector('#catTitle').appendChild(catTitleItem);

        for (let i = 0; i < testProductObject.data.length; i++) {
            if (testProductObject.data[i].category_id === 4) {
                const singleItemTestTitle = testProductObject.data[i].title;
                const singleItemTestId = testProductObject.data[i].id;
                const singleItemTestImg = testProductObject.data[i].image.url;


                let productsListItem = document.createElement('div');
                productsListItem.className = 'col-md-3 mb-20';
                productsListItem.innerHTML = `<div class="item" id="item_id_${singleItemTestId}" style="background: url(${singleItemTestImg})  center center no-repeat; min-height: 250px; background-size: contain;"><div class="price_cta_preview"><a href="/product-page.html?=product_id_${singleItemTestId}">${singleItemTestTitle}</a><p>Price: ${testProductObject.data[i].current_price}<span class="currentCurrencyValPrice">${document.getElementById('currentCurrencyMain').innerHTML[0]}</span></p></div></div>`;

                document.querySelector('#productsPageItemsList').appendChild(productsListItem);
            }
        }
    }

    if (window.location.search.slice(-1) === '5') {
        let catTitle = 'Necklaces';
        let catTitleItem = document.createElement('div');
        catTitleItem.innerHTML = `${catTitle}`;
        document.querySelector('#catTitle').appendChild(catTitleItem);

        for (let i = 0; i < testProductObject.data.length; i++) {
            if (testProductObject.data[i].category_id === 5) {
                const singleItemTestTitle = testProductObject.data[i].title;
                const singleItemTestId = testProductObject.data[i].id;
                const singleItemTestImg = testProductObject.data[i].image.url;


                let productsListItem = document.createElement('div');
                productsListItem.className = 'col-md-3 mb-20';
                productsListItem.innerHTML = `<div class="item" id="item_id_${singleItemTestId}" style="background: url(${singleItemTestImg})  center center no-repeat; min-height: 250px; background-size: contain;"><div class="price_cta_preview"><a href="/product-page.html?=product_id_${singleItemTestId}">${singleItemTestTitle}</a><p>Price: ${testProductObject.data[i].current_price}<span class="currentCurrencyValPrice">${document.getElementById('currentCurrencyMain').innerHTML[0]}</span></p></div></div>`;

                document.querySelector('#productsPageItemsList').appendChild(productsListItem);
            }
        }
    }

};

if (window.location.pathname === '/products-page.html') {
    productsList();
}
