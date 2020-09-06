const $cartContainer = $('.shopping-cart');

$(document).mouseup(e => {
    if (!$cartContainer.is(e.target) && $cartContainer.has(e.target).length === 0) {
        $cartContainer.addClass('d-none');
    }
});

$('#cart').on('click', () => {
    $cartContainer.removeClass('d-none');
});


const quantityCartHeader = () => {
    let amountOfAddedItemsInCart = $('.shopping-cart-items .clearfix');
    if (amountOfAddedItemsInCart) {
        $('#cartQuantityHeader').html(amountOfAddedItemsInCart.length);
        $('#cartQuantityContainer').html(amountOfAddedItemsInCart.length);
    }

    if ($('.shopping-cart-items .clearfix').length >= 1) {
        $('.empty_cart').addClass('d-none')
    }

};

const cartSum = () => {
    let cartTotalSumHeader = $('#cartTotalSumHeader');
    let itemPrice = document.querySelectorAll('.itemPrice');

    let totalSum = 0;

    for (let i = 0; i < itemPrice.length; i++) {
        let singleItemPrice = itemPrice[i];
        totalSum += parseFloat(singleItemPrice.innerText.substr(1));
        let toFixedTest = totalSum.toFixed(2);
        cartTotalSumHeader.html(`<span class="currentCurrencyValPrice">${$('#currentCurrencyMain').html()}</span> ` + +`${parseInt(toFixedTest) * parseInt($('#productQuantity').val())}`);
    }
};

const categoriesToggle = () => {
    let category1 = document.getElementById('ringsTestString');
    let category2 = document.getElementById('braceletsTestString');
    let category3 = document.getElementById('pedantsTestString');
    let category4 = document.getElementById('earringsTestString');
    let category5 = document.getElementById('chokersNecklacesTestString');
    let category6 = document.getElementById('setsTestString');
    let categoryAll = document.getElementById('catAllItems');

    category1.onclick = () => {
        window.location.href = 'products-page.html?category=1'
    };
    category2.onclick = () => {
        window.location.href = 'products-page.html?category=2'
    };
    category3.onclick = () => {
        window.location.href = 'products-page.html?category=3'
    };
    category4.onclick = () => {
        window.location.href = 'products-page.html?category=4'
    };
    category5.onclick = () => {
        window.location.href = 'products-page.html?category=5'
    };
    category6.onclick = () => {
        window.location.href = 'products-page.html?category=6'
    };
    categoryAll.onclick = () => {
        window.location.href = 'products-page.html?category=0'
    };

    if (localStorage.getItem('testCart')) {
        document.querySelector('.container_cart').innerHTML = localStorage.getItem('testCart');
        console.log(localStorage.getItem('testCart'));
    }
};

if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {
    quantityCartHeader();
    cartSum();
    categoriesToggle();
}
