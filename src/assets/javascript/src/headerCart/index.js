$("#cart").on("click", function () {
    $(".shopping-cart").fadeToggle("fast");
});

const quantityCartHeader = () => {
    let amountOfAddedItemsInCart = $('.shopping-cart-items .clearfix');
    if (amountOfAddedItemsInCart) {
        $('#cartQuantityHeader').html(amountOfAddedItemsInCart.length);
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
        cartTotalSumHeader.html('$ ' + `${toFixedTest}`);
    }
};


quantityCartHeader();
cartSum();

$.getJSON('http://164.90.218.246:8000/admin/products', function (data) {
    console.log(data)
});