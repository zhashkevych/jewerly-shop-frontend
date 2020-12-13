// class MainPageController {
//     constructor(host) {
//         this.host = host
//     }
//
//     getAllSettings() {
//         return $.ajax({
//             type: "GET",
//             url: `${this.host}/api/settings`,
//             headers: {Authorization: `Bearer ${getCookie("auth_token")}`}
//         });
//     }
//
//     getAllHomepageImages() {
//         return $.ajax({
//             type: "GET",
//             url: `${this.host}/admin/settings/homepage/images`,
//             headers: {Authorization: `Bearer ${getCookie("auth_token")}`}
//         });
//     }
//
//     createHomepageImage() {
//         return $.ajax({
//             type: "POST",
//             url: `${this.host}/admin/settings/homepage/image`,
//             headers: {Authorization: `Bearer ${getCookie("auth_token")}`}
//         });
//     }
//
//     changeHomepageImage(image_id) {
//         return $.ajax({
//             type: "PUT",
//             url: `${this.host}/admin/settings/homepage/image/${image_id}`,
//             headers: {Authorization: `Bearer ${getCookie("auth_token")}`}
//         });
//     }
// }
//
// var mainPageController = new MainPageController(API_HOST)
