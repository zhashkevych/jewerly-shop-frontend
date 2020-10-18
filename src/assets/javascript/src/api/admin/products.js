class AdminProductsController {
    constructor(host) {
        this.host = host
    }

    getAllAdminProducts(limit, offset) {
        return $.ajax({
            type: "GET",
            url: `${this.host}/admin/products?limit=${limit}&offset=${offset}`,
            headers: {Authorization: `Bearer ${getCookie("auth_token")}`}
        });
    }
}

var adminProductsController = new AdminProductsController(API_HOST)
