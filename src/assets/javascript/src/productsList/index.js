const productsList = () => {
    let urlParams = new URLSearchParams(window.location.search);
    let categoryId = urlParams.get('category');
    let categoryTitle = getCategoryTitle(categoryId);

    $.ajax({
        type: "GET",
        url: `http://164.90.218.246:8001/api/products?category=${categoryId}`,
        success: function (response) {
            renderProductsList(response, categoryTitle);
        }
    });
};

const getCategoryTitle = (categoryId) => {
    switch (categoryId) {
        case '1':
            return 'Rings';
        case '2':
            return 'Bracelets';
        case '3':
            return 'Pendants';
        case '4':
            return 'Earrings';
        case '5':
            return 'Necklaces';
        case '6':
            return 'Sets';
        default:
            return 'All Products';
    }
};

const renderProductsList = (response, title) => {
    renderCategoryTitle(title);

    if (response.data === null) {
        renderEmptyList();
    } else {
        renderItems(response.data);
    }
};

const renderEmptyList = () => {
    let noItems = document.createElement('div');
    noItems.className = 'article-level-4 text-center';
    noItems.innerText = 'Now there is no items for this category :(';

    document.querySelector('#productsPageItemsList').appendChild(noItems);
};

const renderItems = (items) => {
    for (let i = 0; i < items.length; i++) {
        const itemTitle = items[i].title;
        const itemPrice = items[i].current_price;
        const itemId = items[i].id;
        const itemImg = items[i].images[0].url;

        let productsListItem = document.createElement('div');
        productsListItem.className = 'col-md-3 mb-20';
        productsListItem.innerHTML = `
<div class="item" id="item_id_${itemId}" style="background: url(${itemImg})  center center no-repeat; min-height: 250px; background-size: contain;">
    <div class="price_cta_preview">
    <a href="/product-page.html?product_id=${itemId}">${itemTitle} | ${itemPrice} 
       <span class="currentCurrencyValPrice">${
               document.getElementById('currentCurrencyMain').innerHTML}</span>
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

if (window.location.pathname === '/products-page.html') {
    productsList();
}
