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
    let cat1 = document.getElementById('ringsTestString');
    let cat2 = document.getElementById('braceletsTestString');
    let cat3 = document.getElementById('pedantsTestString');
    let cat4 = document.getElementById('earringsTestString');
    let cat5 = document.getElementById('chokersNecklacesTestString');
    let cat6 = document.getElementById('setsTestString');
    let catAllItems = document.getElementById('catAllItems');

    cat1.onclick = () => {
        window.location.href = 'products-page.html?=1'
    };
    cat2.onclick = () => {
        window.location.href = 'products-page.html?=2'
    };
    cat3.onclick = () => {
        window.location.href = 'products-page.html?=3'
    };
    cat4.onclick = () => {
        window.location.href = 'products-page.html?=4'
    };
    cat5.onclick = () => {
        window.location.href = 'products-page.html?=5'
    };
    cat6.onclick = () => {
        window.location.href = 'products-page.html?=6'
    };
    catAllItems.onclick = () => {
        window.location.href = 'products-page.html?=all'
    };

    // if (localStorage.getItem('testCart')) {
    //     document.querySelector('.container_cart').innerHTML = localStorage.getItem('testCart')
    //     console.log(localStorage.getItem('testCart'));
    // }
};

if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {
    quantityCartHeader();
    cartSum();
    categoriesToggle();
}
