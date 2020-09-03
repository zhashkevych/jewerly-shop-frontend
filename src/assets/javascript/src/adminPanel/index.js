const adminPanel = () => {
    $.ajax({
        type: "GET",
        url: 'http://164.90.218.246:8001/api/products',
        success: function (response) {
            $('#totalItems').html('Total items:' + response.total);
            for (var i = 0; i < response.data.length; i++) {
                let catsObject = {
                    1: 'Rings',
                    2: 'Bracelets',
                    3: 'Pendants',
                    4: 'Earrings',
                    5: 'Necklaces',
                    6: 'Sets',
                };
                let allItems = document.createElement('div');
                allItems.className = `col-md-12 item_id_${response.data[i].id}`;
                allItems.innerHTML = `<div class="row  no-gutters">
<div class="col-md-1" id="idOfProduct"><p>${response.data[i].id}</p></div>
<div class="col-md-2"><p>${response.data[i].title}</p></div>
<div class="col-md-1"><p>${response.data[i].current_price}</p></div>
<div class="col-md-3"><p>${response.data[i].description}</p></div>
<div class="col-md-1 mr-2"><p>${response.data[i].material}</p></div>
<div class="col-md-1"><p>${response.data[i].code}</p></div>
<div class="col-md-1"><p>${response.data[i].in_stock}</p></div>
<div class="col-md-1" id="categoryId"><p> ${catsObject[response.data[i].category_id]}</p></div>
</div>
<hr> 
`;
                document.querySelector('#allItems').appendChild(allItems);

            }
        }
    });

    const addProduct = () => {
        localStorage.clear();
        const addItemBtn = document.querySelector('.add_product');
        const toggleAddInputs = document.querySelector('#toggleAddInputs');

        toggleAddInputs.onclick = () => {
            $('.add-new-items-table').fadeToggle("fast");
            document.querySelector('.add-new-items-table').classList.toggle('d-none');
        };

        addItemBtn.onclick = () => {
            let blobFile = $('#addItemImg')[0].files[0];
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
                    console.log(response);
                    localStorage.setItem('uploadedImageId', response.id);

                    let addProductData = {
                        titles: {
                            english: document.getElementById("addItemTitle_en").value,
                            russian: document.getElementById("addItemTitle_ru").value,
                            ukrainian: document.getElementById("addItemTitle_ua").value,
                        },
                        descriptions: {
                            english: document.getElementById("addItemDescr_en").value,
                            russian: document.getElementById("addItemDescr_ru").value,
                            ukrainian: document.getElementById("addItemDescr_ua").value,
                        },
                        materials: {
                            english: document.getElementById("addItemMater_en").value,
                            russian: document.getElementById("addItemMater_ru").value,
                            ukrainian: document.getElementById("addItemMater_ua").value,
                        },
                        current_price: parseFloat(document.getElementById("addItemCurrPrice").value),
                        previous_price: parseFloat(document.getElementById("addItemPrevPrice").value),
                        code: document.getElementById("addItemPrevPrice").value,
                        image_ids: [parseInt(localStorage.getItem('uploadedImageId'))],
                        category_id: parseInt(document.getElementById("addItemCategory").value),
                    };

                    $.ajax({
                        type: "POST",
                        url: 'http://164.90.218.246:8001/admin/products',
                        data: JSON.stringify(addProductData),
                        dataType: "json",
                        headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
                        success: function (response) {
                            console.log(response);
                            swal({
                                title: "Success",
                                text: 'sadasdasdasd',
                                icon: "success",
                                closeOnClickOutside: true,
                                closeOnEsc: true,
                            })
                        },
                        error: function (jqXHR, textStatus, errorMessage) {
                            console.log(addProductData);
                            swal({
                                title: "Error",
                                text: errorMessage,
                                icon: "error",
                                closeOnClickOutside: true,
                                closeOnEsc: true,
                            });
                        }
                    })
                },
                error: function (jqXHR, textStatus, errorMessage) {
                    console.log(errorMessage);
                }
            });

        }
    };

    const removeProduct = () => {
        let removeItem = document.getElementById('removeProduct');

        removeItem.onclick = () => {
            let delItemId = parseInt(document.getElementById('idDelItem').value);

            $.ajax({
                    type: "DELETE",
                    url: `http://164.90.218.246:8001/admin/products/${delItemId}`,
                    headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
                    success: function (response) {
                        swal({
                            title: "Success",
                            text: `Product with ID: ${delItemId} was successful deleted.`,
                            icon: "success",
                            closeOnClickOutside: true,
                            closeOnEsc: true,
                        })
                    }
                }
            )
        }
    };

    const editProduct = () => {
        let openEditForm = document.querySelector('#toggleEditForm');
        let editForm = document.querySelector('#editFormInputs');

        openEditForm.onclick = () => {
            editForm.classList.toggle('d-none');
        };

        $("#editAvailability").on('change', function () {
            if ($(this).is(':checked')) {
                $(this).attr('value', true);
            } else {
                $(this).attr('value', false);
            }

            $('#checkbox-value').text($('#editAvailability').val());
        });

        let editItem = document.querySelector('#editProduct');
        editItem.onclick = () => {
            // let editItemId = parseInt(document.getElementById('idDelItem').value);

            let editItemObj = {
                titles: {
                    english: document.getElementById("editItemTitle_en").value,
                    russian: document.getElementById("editItemTitle_ru").value,
                    ukrainian: document.getElementById("editItemTitle_ua").value,
                },
                descriptions: {
                    english: document.getElementById("editItemDescr_en").value,
                    russian: document.getElementById("editItemDescr_ru").value,
                    ukrainian: document.getElementById("editItemDescr_ua").value,
                },
                materials: {
                    english: document.getElementById("editItemMater_en").value,
                    russian: document.getElementById("editItemMater_ru").value,
                    ukrainian: document.getElementById("editItemMater_ua").value,
                },
                current_price: parseFloat(document.getElementById("editItemCurrPrice").value),
                previous_price: parseFloat(document.getElementById("editItemPrevPrice").value),
                code: document.getElementById("editItemCode").value,
                // image_ids: [parseInt(localStorage.getItem('uploadedImageId'))],
                category_id: parseInt(document.getElementById("editItemCategory").value),
                in_stock: JSON.parse(document.getElementById("editAvailability").value),
            };
            $.ajax({
                    type: "PUT",
                    url: `http://164.90.218.246:8001/admin/products/3`,
                    data: JSON.stringify(editItemObj),
                    dataType: "json",
                    headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
                    success: function (response) {
                        console.log(response);
                        swal({
                            title: "Success",
                            text: `Success`,
                            icon: "success",
                            closeOnClickOutside: true,
                            closeOnEsc: true,
                        })
                    }
                }
            )
        }
    };

    addProduct();
    removeProduct();
    editProduct();
};

if (window.location.pathname === '/admin-panel.html') {
    adminPanel();
}
