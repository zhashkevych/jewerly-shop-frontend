class MainPageController {
    constructor(host) {
        this.host = host
    }

    getMainPageInfo() {
        return $.ajax({
            type: "GET",
            url: `${this.host}/admin/settings/homepage`,
            headers: {Authorization: `Bearer ${getCookie("auth_token")}`}
        });
    }
}

var mainPageController = new MainPageController(API_HOST)
