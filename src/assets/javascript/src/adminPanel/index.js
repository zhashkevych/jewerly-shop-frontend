const adminPanel = () => {
    $.ajax({
        type: "GET",
        url: 'http://164.90.218.246:8001/api/products',
        success: function (response) {
            $('#totalItems').html('Total items:' + response.total);
            for (let i = 0; i < response.data.length; i++) {
                let allItems = document.createElement('div');
                allItems.className = `col-md-12 item_id_${response.data[i].id}`;
                allItems.innerHTML = `<div class="row no-gutters">
<div class="col-md-1"><p>${response.data[i].id}</p></div>
<div class="col-md-2"><p>${response.data[i].title}</p></div>
<div class="col-md-1"><p>${response.data[i].current_price}</p></div>
<div class="col-md-3"><p>${response.data[i].description}</p></div>
<div class="col-md-1 mr-2"><p>${response.data[i].material}</p></div>
<div class="col-md-1"><p>${response.data[i].code}</p></div>
<div class="col-md-1"><p>${response.data[i].in_stock}</p></div>
<div class="col-md-1"><p>${response.data[i].category_id}</p></div>
</div>
<hr>
`;

                document.querySelector('#allItems').appendChild(allItems);
            }
        }
    });
    // Titles        MultiLanguageInput `json:"titles" binding:"required"`
    // Descriptions  MultiLanguageInput `json:"descriptions" binding:"required"`
    // Material      MultiLanguageInput `json:"materials" binding:"required"`
    // CurrentPrice  float32            `json:"current_price" binding:"required"`
    // PreviousPrice float32            `json:"previous_price"`
    // Code          string             `json:"code" binding:"required"`
    // ImageIds      []int              `json:"image_ids" binding:"required"`
    // CategoryId    Category           `json:"category_id" binding:"required"`

    const addProduct = () => {


        const addItemBtn = document.querySelector('#addNewProduct');

        addItemBtn.onclick = () => {
            let addProductData = {
                titles: {
                    english: 'english title for item',
                    russian: 'russian title for item',
                    ukrainian: 'ukrainian title for item',
                },
                descriptions: {
                    english: 'english descriptions for item',
                    russian: 'russian descriptions for item',
                    ukrainian: 'ukrainian descriptions for item',
                },
                materials: {
                    english: 'english materials for item',
                    russian: 'russian materials for item',
                    ukrainian: 'ukrainian materials for item',
                },
                current_price: 100,
                previous_price: 2,
                code: 'Code Test 121241241231',
                image_ids: [parseInt(localStorage.getItem('uploadedImageId'))],
                category_id: 4,
            };

            let blobFile = $('#filechooser')[0].files[0];
            let formData = new FormData();
            formData.append("image", blobFile);

            $.ajax({
                url: "http://164.90.218.246:8001/admin/upload",
                type: "POST",
                headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
                data: formData,
                processData: false,
                contentType: false,
                success: function (response) {
                    console.log(response.id);
                    localStorage.setItem('uploadedImageId', response.id);

                    $.ajax({
                        type: "POST",
                        url: 'http://164.90.218.246:8001/admin/products',
                        data: JSON.stringify(addProductData),
                        dataType: "json",
                        headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
                        success: function (response) {
                            console.log(response);
                        },
                        error: function (jqXHR, textStatus, errorMessage) {
                            console.log(errorMessage);
                        }
                    })
                },
                error: function (jqXHR, textStatus, errorMessage) {
                    console.log(errorMessage);
                }
            });


        }
    };

    addProduct();
};

if (window.location.pathname === '/admin-panel.html') {
    adminPanel();
}
