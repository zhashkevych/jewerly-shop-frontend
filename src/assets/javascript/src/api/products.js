class ProductsController {
    constructor(host) {
        this.host = host
    }

    getAllProducts(categoryId, language, currency, limit, offset) {
        return $.ajax({
            type: "GET",
            url: `${this.host}/api/products?category=${categoryId}&language=${language}&currency=${currency}&limit=${limit}&offset=${offset}`
        });
    }

    getProductById(productId, language, currency) {
        return $.ajax({
            type: "GET",
            url: `${this.host}/api/products/${productId}?language=${language}&currency=${currency}`
        })
    }
}

var productsController = new ProductsController(API_HOST)