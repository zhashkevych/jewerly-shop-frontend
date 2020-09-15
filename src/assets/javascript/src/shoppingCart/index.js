class ShoppingCartController {
    constructor(orderLimit) {
        this.orderLimit = orderLimit;
    }

    addProductToCart(product, quantity) {
        this.appendProduct(product, quantity);
        this.renderProducts();
    };

    removeProductFromCart(productId) {
        this.removeProduct(productId);
        this.renderProducts();
    };

    initCart() {
        this.renderProducts();
        this.renderCartMinimalOrder();
        document.getElementById('cartCheckout').textContent = translations[currentLanguage].cart.checkout;
        document.getElementById('cartTotal').textContent = translations[currentLanguage].cart.total;
    }

    renderProducts() {
        this.clearProductsList();

        let items = this.getShoppingCartItems();
        if (items.products.length === 0) {
            this.renderEmptyCardText()
            this.setCartSum();
            return
        }

        this.clearEmptyCardText()

        items.products.forEach(item => {
            this.renderProductItem(item.product, item.quantity);
        });

        this.setItemsCount(items.products.length);
        this.setCartSum();
    }

    renderProductItem(product, quantity) {
        let currency = getCurrentCurrency();
        let addedProduct = document.createElement('li');
        addedProduct.className = 'clearfix';
        addedProduct.innerHTML = `
        <div class="img" style="background: url(${product.images[0].url}) center center no-repeat; background-size: contain;"></div>
        <span class="item-name">${product.title}</span>
        <button class="btn_remove_item" type="button" onclick="shoppingCartController.removeProductFromCart(${product.id})" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <span class="item-price">${currency} ${product.price}</span>
        <p id="quantityLabel" class="oc-text-gray">${translations[currentLanguage].cart.quantity} : ${quantity}</p>
        <span class="selected_item-id d-none">${product.id}</span>
        `;

        document.querySelector('#shoppingCartContainer').appendChild(addedProduct);
    }

    renderCartMinimalOrder() {
        let minimalOrderTextElement = document.querySelector('.minimal-order')
        let textElement = document.createElement('p')
        textElement.innerHTML = `${translations[currentLanguage].cart.minimalOrder} ${this.orderLimit} $`
        minimalOrderTextElement.appendChild(textElement)
    }

    clearProductsList() {
        let list = document.querySelector('#shoppingCartContainer')
        list.querySelectorAll('*').forEach(el => el.remove());
    }

    setItemsCount(count) {
        $('#cartQuantityHeader').html(count);
        $('#cartQuantityContainer').html(count);
    }

    setCartSum() {
        let totalPrice = this.calculateCartSum()
        this.renderCartSum(totalPrice);
    }

    calculateCartSum() {
        let totalSum = 0;

        let items = this.getShoppingCartItems()
        items.products.forEach(item => {
            totalSum += item.product.price * item.quantity
        });

        return totalSum
    }

    renderCartSum(totalPrice) {
        let cartTotalSumHeader = $('#cartTotalSumHeader');
        let currency = getCurrentCurrency();
        cartTotalSumHeader.html(`<span class="currentCurrencyValPrice">${currency}</span> ` + `${totalPrice}`);
    }

    renderEmptyCardText() {
        let emptyList = document.querySelector('.empty-list')
        emptyList.innerHTML = `<p class="article-level-4 empty_cart fz-16 text-center">${translations[currentLanguage].cart.empty}</p>`
    }

    clearEmptyCardText() {
        let emptyList = document.querySelector('.empty-list')
        if (emptyList.firstChild) {
            emptyList.firstChild.remove()
        }
    }

    appendProduct(product, quantity) {
        let items = this.getShoppingCartItems()

        items.products.push({
            product: product,
            quantity: quantity,
        });

        this.setShoppingCartItems(items);
    }

    removeProduct(productId) {
        let items = this.getShoppingCartItems()

        // find by id index of product to remove
        var index = items.products.findIndex(function (obj) {
            return obj.product.id === productId;
        });

        // remove product from array
        if (index !== -1) items.products.splice(index, 1);

        this.setShoppingCartItems(items);
    }

    addCartPulseAnimation() {
        document.querySelector('.cart-icon').classList.add('pulse-drop');
        document.querySelector('.header-mob-cart-trigger').classList.add('pulse-drop');
    }

    removeCartPulseAnimation() {
        document.querySelector('.cart-icon').classList.remove('pulse-drop');
        document.querySelector('.header-mob-cart-trigger').classList.remove('pulse-drop');
    }

    getShoppingCartItems() {
        let productItems = localStorage.getItem('shoppingCartProducts')
        let items = {};

        if (productItems === null) {
            items = {
                products: []
            };
        } else {
            items = JSON.parse(productItems);
        }

        return items
    }

    setShoppingCartItems(items) {
        localStorage.setItem('shoppingCartProducts', JSON.stringify(items))
    }
}

shoppingCartController = new ShoppingCartController(400);