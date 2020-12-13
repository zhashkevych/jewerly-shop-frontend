if (document.getElementById('uploadImgToHomepage')) {

    document.getElementById('uploadImgToHomepage').addEventListener('click', function () {
        let blobFile = $("#addItemImgToHomepage")[0].files[0];
        let formData = new FormData();
        formData.append("image", blobFile);

        $.ajax({
            url: `${API_HOST}/admin/upload`,
            type: "POST",
            headers: {Authorization: `Bearer ${getCookie("auth_token")}`},
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                localStorage.setItem("imageId", response.id);

                let imageId = {
                    image_id: parseInt(localStorage.getItem("imageId")),
                };

                $.ajax({
                    type: "POST",
                    url: `${API_HOST}/admin/settings/homepage/image`,
                    data: JSON.stringify(imageId),
                    dataType: "json",
                    headers: {Authorization: `Bearer ${getCookie("auth_token")}`},
                    statusCode: {
                        204: function () {
                            swal("Success!", `New product was added`, "success");
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 2000);
                        },
                    },
                    error: function (jqXHR, textStatus, errorMessage) {
                        swal({
                            title: "Error",
                            text: errorMessage,
                            icon: "error",
                            closeOnClickOutside: true,
                            closeOnEsc: true,
                        });
                    },
                });
            },
            error: function (jqXHR, textStatus, errorMessage) {
                swal({
                    title: "Error",
                    text: 'Something went wrong, check all fields and try again later',
                    icon: "error",
                    closeOnClickOutside: true,
                    closeOnEsc: true,
                });
            },
        });
        //
        // $.ajax({
        //     url: `${API_HOST}/admin/settings/homepage/image`,
        //     type: "POST",
        //     headers: {Authorization: `Bearer ${getCookie("auth_token")}`},
        //     data: formData,
        //     processData: false,
        //     contentType: false,
        //     success: function (response) {
        //         alert('successsuccesssuccesssuccesssuccess')
        //     },
        //     error: function () {
        //         swal({
        //             title: "Error",
        //             text: 'Something went wrong, check all fields and try again later',
        //             icon: "error",
        //             closeOnClickOutside: true,
        //             closeOnEsc: true,
        //         });
        //     },
        // })
    })

    // if (document.getElementById('getAllHomepageImages')) {

    // }


// const homePageSettings = () => {
//     mainPageController.getAllSettings().then(settings => {
//         console.log('getAllSettings')
//         // renderHomePageSettings(settings);
//     });
//
//     mainPageController.getAllHomepageImages().then(settings => {
//         // renderHomePageSettings(settings);
//     });
//
//     mainPageController.createHomepageImage().then(settings => {
//         console.log('createHomepageImage')
//         renderHome(settings);
//     });
//
//     mainPageController.changeHomepageImage(image_id).then(settings => {
//         // renderHomePageSettings(settings);
//     });
// };
//
// const renderHome = (settings) => {
//     console.log(settings)
//     if (settings.data === null) {
//         renderEmptyHomePageSettings();
//     } else {
//         renderHomePageSettingsItems(settings.data);
//     }
// };
//
// const renderEmptyHomePageSettings = () => {
//     let noItems = document.createElement('div');
//     noItems.className = 'article-level-4 text-center font-weight-medium';
//     noItems.innerText = 'No items here yet';
//
//     document.querySelector('#emptySettings').appendChild(noItems);
// };
//
// const renderHomePageSettingsItems = (settings) => {
//
// };
//
// if (window.location.pathname === '/admin-panel.html') {
//     homePageSettings();
// }

}
//set images to homepage
if (document.getElementById('mainPageImagesList')) {

    $.ajax({
        url: `${API_HOST}/admin/settings/homepage/images`,
        type: "GET",
        headers: {Authorization: `Bearer ${getCookie("auth_token")}`},
        success: function (response) {
            for (let i = 0; i < response.length; i++) {
                let appendImageToHomepage = document.createElement('div');
                appendImageToHomepage.className = 'col-md-3';
                appendImageToHomepage.innerHTML = `
                        <div class="main-page_item" style="background: url('${response[i].url}') center center no-repeat;"></div>
                        `
                document.getElementById('mainPageImagesList').append(appendImageToHomepage)
            }
        }
    })
}
