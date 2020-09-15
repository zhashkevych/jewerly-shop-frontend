const $cartContainer = $('.shopping-cart');

$(document).mouseup(e => {
    if (!$cartContainer.is(e.target) && $cartContainer.has(e.target).length === 0) {
        $cartContainer.addClass('d-none');
    }
});

$('#cart').on('click', () => {
    $cartContainer.removeClass('d-none');
});

// for cart mobile O_o
$('.header-mob-cart-trigger').on('click', function () {
    $('#cart').trigger('click');
    if (!$('.shopping-cart').hasClass('d-none')) {
        $('.header-mob-cart-trigger').on('click', function () {
            $('.shopping-cart').toggleClass('d-none')
        })
    }
})

// if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {}