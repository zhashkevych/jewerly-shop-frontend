const productsList = () => {
    $.ajax({
        type: "GET",
        url: 'http://164.90.218.246:8001/api/products',
        success: function (response) {
            proccessGetProductsResponse(response);
        }
    });
};

const proccessGetProductsResponse = (response) => {
    var categoryName = ''
    let urlParams = new URLSearchParams(window.location.search);
    
    switch (urlParams.get('category')) {
        case '1':
            categoryName = 'Rings';
            break;
        case '2':
            categoryName = 'Bracelets';
            break;
        case '3':
            categoryName = 'Pendants';
            break;
        case '4':
            categoryName = 'Earrings';
            break;
        case '5':
            categoryName = 'Necklaces';
            break;
        case '6':
            categoryName = 'Sets';
            break;
        default:
            categoryName = 'All Products';
            break;
    }

    renderAllProductsList(categoryName, response);
};

const renderAllProductsList = (categoryName, response) => {
    let catTitleItem = document.createElement('div');
    catTitleItem.innerHTML = `${categoryName}`;
    document.querySelector('#catTitle').appendChild(catTitleItem);

    if (response.data.length === 0) {
        renderEmptyList()
    } else {
        renderProductItems(response.data);
    }
};

const renderEmptyList = () => {
    let noItems = document.createElement('div');
    noItems.className = 'article-level-4 text-center';
    noItems.innerText = 'Now there is no items for this category :(';

    document.querySelector('#productsPageItemsList').appendChild(noItems);
};

const renderProductItems = (items) => {
    for (let i = 0; i < items.length; i++) {
        const singleItemTestTitle = items[i].title;
        const singleItemTestId = items[i].id;
        const singleItemTestImg = response[i].images[0].url;

        let productsListItem = document.createElement('div');
        productsListItem.className = 'col-md-3 mb-20';
        productsListItem.innerHTML = `
<div class="item" id="item_id_${singleItemTestId}" style="background: url(${singleItemTestImg})  center center no-repeat; min-height: 250px; background-size: contain;">
<div class="price_cta_preview">
<a href="/product-page.html?=product_id_${singleItemTestId}">${singleItemTestTitle} | ${response.data[i].current_price} <span class="currentCurrencyValPrice">${$('#currentCurrencyMain').html()}</span></a>
</div>
</div>`;

        document.querySelector('#productsPageItemsList').appendChild(productsListItem);
    }
};

if (window.location.pathname === '/products-page.html') {
    productsList();
}
