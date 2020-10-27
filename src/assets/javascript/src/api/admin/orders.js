class OrdersController {
    constructor(host) {
        this.host = host
    }

    getAllOrders(limit, offset) {
        return $.ajax({
            type: "GET",
            url: `${this.host}/admin/orders?limit=${limit}&offset=${offset}`,
            headers: {Authorization: `Bearer ${getCookie("auth_token")}`}
        });
    }
}

var ordersController = new OrdersController(API_HOST)
