let amountOfAddedItemsInCart = $('.shopping-cart-items .clearfix');
console.log(amountOfAddedItemsInCart.length)
$('#cartQuantityHeader').html(amountOfAddedItemsInCart.length)

$("#cart").on("click", function () {
    $(".shopping-cart").fadeToggle("fast");
});