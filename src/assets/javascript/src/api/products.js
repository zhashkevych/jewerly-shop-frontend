class ProductsController {
    constructor(host) {
        this.host = host
    }

    getAllProducts(categoryId, language, currency) {
        return $.ajax({
            type: "GET",
            url: `${this.host}/api/products?category=${categoryId}&language=${language}&currency=${currency}`
        });
    }

    getProductById(productId, language, currency) {
        return $.ajax({
            type: "GET",
            url: `${this.host}/api/products/${productId}?language=${language}&currency=${currency}`
        })
    }
}

var productsController = new ProductsController('http://164.90.218.246:8001')