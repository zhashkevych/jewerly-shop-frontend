const productsList = () => {
    let urlParams = new URLSearchParams(window.location.search);
    let categoryId = urlParams.get('category');
    let currency = getCurrencyQueryParameter();
    let language = getLanguageQueryParameter();
    let categoryTitle = getCategoryTitle(categoryId);

    productsController.getAllProducts(categoryId, language, currency).then(products => renderProductsList(products, categoryTitle));
};

const getCategoryTitle = (categoryId) => {
    switch (categoryId) {
        case '1':
            return $('#ringsCategory').html();
        case '2':
            return $('#braceletsCategory').html();
        case '3':
            return $('#pedantsCategory').html();
        case '4':
            return $('#earringsCategory').html();
        case '5':
            return $('#chokersNecklacesCategory').html();
        case '6':
            return $('#setsCategory').html();
        default:
            return $('#categoryAllItems').html();
    }
};

const renderProductsList = (response, title) => {
    renderCategoryTitle(title);

    if (response.data === null) {
        renderEmptyList();
    } else {
        renderTotalItemsText(response.total, response.data.length);
        renderItems(response.data, getCurrencyCurrency());
    }
};

const renderEmptyList = () => {
    let noItems = document.createElement('div');
    noItems.className = 'article-level-4 text-center';
    noItems.innerText = 'Now there is no items for this category :(';

    document.querySelector('#productsPageItemsList').appendChild(noItems);
};

const renderItems = (items, currency) => {
    for (let i = 0; i < items.length; i++) {
        const itemTitle = items[i].title;
        const itemPrice = items[i].price;
        const itemId = items[i].id;
        const itemImg = items[i].images[0].url;

        let productsListItem = document.createElement('div');
        productsListItem.className = 'col-md-3 mb-20';
        productsListItem.innerHTML = `
<div class="item" id="item_id_${itemId}" style="background: url(${itemImg})  center center no-repeat; min-height: 250px; background-size: contain;">
    <div class="price_cta_preview">
    <a href="/product-page.html?product_id=${itemId}">${itemTitle} | ${itemPrice} 
       <span class="currentCurrencyValPrice">${currency}</span>
       </a>
    </div>
</div>`;

        document.querySelector('#productsPageItemsList').appendChild(productsListItem);
    }
};

const renderCategoryTitle = (title) => {
    let catTitleItem = document.createElement('div');
    catTitleItem.innerHTML = `${title}`;
    document.querySelector('#catTitle').appendChild(catTitleItem);
};


const renderTotalItemsText = (totalItems, itemsCount) => {
    let itemsCountElement = document.createElement('div');
    itemsCountElement.innerHTML = `Showing ${itemsCount} of ${totalItems} items`;
    document.querySelector('#itemsCount').appendChild(itemsCountElement);
};


if (window.location.pathname === '/products-page.html') {
    productsList();
}