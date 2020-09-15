const $cartContainer = $('.shopping-cart');

$(document).mouseup(e => {
    if (!$cartContainer.is(e.target) && $cartContainer.has(e.target).length === 0) {
        $cartContainer.addClass('d-none');
    }
});

$('#cart').on('click', () => {
    $cartContainer.removeClass('d-none');
});

// if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {}