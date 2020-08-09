let amountOfAddedItemsInCart = $('.shopping-cart-items .clearfix');
if (amountOfAddedItemsInCart) {
    $('#cartQuantityHeader').html(amountOfAddedItemsInCart.length);
}

$("#cart").on("click", function () {
    $(".shopping-cart").fadeToggle("fast");
});

$.getJSON('http://164.90.218.246:8000/admin/products', function (data) {
    console.log(data)
});