const adminProductsList = () => {
    let urlParams = new URLSearchParams(window.location.search);
    let limit = 10;
    let page = urlParams.get('page');
    if (page == null) {
        page = 1
    }

    let offset = (page - 1) * limit;

    adminProductsController.getAllAdminProducts(limit, offset).then(product => {
        renderAdminProductsList(product);
        renderAdminProductsPagination(product.total, limit)
    });
};

const renderAdminProductsList = (product, title, limit) => {

    if (product.data === null) {
        renderEmptyAdminProductsList();
    } else {
        renderTotalAdminProductsItemsText(product.total, product.data.length);
        renderAdminProductsItems(product.data);
    }
};

const renderEmptyAdminProductsList = () => {
    let noItems = document.createElement('div');
    noItems.className = 'article-level-4 text-center font-weight-medium';
    noItems.innerText = 'No products';

    document.querySelector('#emptyOrderList').appendChild(noItems);
};

const renderAdminProductsItems = (product) => {
    for (let i = 0; i < product.length; i++) {

        let categoriesObject = {
            1: "Rings",
            2: "Bracelets",
            3: "Pendants",
            4: "Earrings",
            5: "Necklaces",
            6: "Sets",
        };

        let allProducts = document.createElement("div");
        allProducts.className = `adminpanel__table-item  item_id_${product[i].id}`;
        allProducts.innerHTML = `
        <div id="idOfProduct"><p>${product[i].id}</p></div>
        <div><p>${product[i].title}</p></div>
        <div><p>${product[i].price} $</p></div>
        <div><p>${product[i].description}</p></div>
        <div><p>${product[i].material}</p></div>
        <div><p>${product[i].code}</p></div>
        <div><p>${product[i].in_stock}</p></div>
        <div id="categoryId"><p> ${categoriesObject[product[i].category_id]}</p></div>
            <div class="item-actions">
                <div class="edit" data-id="${product[i].id}" id="editItem"></div>
                    <button type="button" class="close remove" data-id="${product[i].id}" id="removeItem" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
            </div>`;

        document.querySelector("#allItems").appendChild(allProducts);
    }

    renderDeleteProduct();
    renderEditProduct();

};

const renderDeleteProduct = () => {
    let deleteProductTrigger = document.querySelectorAll('#removeItem');

    for (let i = 0; i < deleteProductTrigger.length; i++) {
        deleteProductTrigger[i].addEventListener('click', function () {
            let deletingProductID = parseInt(deleteProductTrigger[i].getAttribute('data-id'));
            localStorage.setItem('deletingProductIDValue', deletingProductID)
            console.log(deletingProductID);

            $('.close').on('click', function () {
                $('.modal').toggleClass('d-none')
            })
            deleteProduct();
        })
    }

}

const deleteProduct = () => {
    console.log(API_HOST)
    swal({
        title: "Are you sure?",
        text: `Do you want delete item with ID: ${localStorage.getItem('deletingProductIDValue')}?`,
        icon: "warning",
        cancel: {
            text: "Cancel",
            value: null,
            visible: false,
            className: "",
            closeModal: true,
        },
        confirm: {
            text: "Yes, delete it",
            value: true,
            visible: true,
            className: "",
            closeModal: true
        }
    }).then((result) => {
        if (result) {
            $.ajax({
                type: "DELETE",
                url: `${API_HOST}/admin/products/${localStorage.getItem('deletingProductIDValue')}`,
                headers: {
                    Authorization: `Bearer ${getCookie("auth_token")}`,
                },
                success: function () {
                    swal(
                        "Deleted!",
                        "This product has been deleted.",
                        "success"
                    );
                    setTimeout(function () {
                        window.location.reload(true);
                    }, 1000);
                },
                error: function (jqXHR, textStatus, errorMessage) {
                    swal(errorMessage, "Error.", "error");
                },
            });
        }
    });
};

const addProduct = () => {
    localStorage.clear();
    const addItemBtn = document.querySelector(".add_product");

    addItemBtn.onclick = () => {
        let blobFile = $("#addItemImg")[0].files[0];
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
                localStorage.setItem("uploadedImageId", response.id);

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
                    price: +document.getElementById("addItemCurrPriceUsd").value,
                    code: document.getElementById("addItemCode").value,
                    image_ids: [parseInt(localStorage.getItem("uploadedImageId"))],
                    category_id: parseInt(
                        document.getElementById("addItemCategory").value
                    ),
                };

                $.ajax({
                    type: "POST",
                    url: `${API_HOST}/admin/products`,
                    data: JSON.stringify(addProductData),
                    dataType: "json",
                    headers: {Authorization: `Bearer ${getCookie("auth_token")}`},
                    statusCode: {
                        200: function () {
                            swal("Success!", `New product was added`, "success");
                            setTimeout(function () {
                                window.location.reload(true);
                            }, 2000);
                        },
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
                    },
                });
            },
            error: function (jqXHR, textStatus, errorMessage) {
                console.log(errorMessage);
            },
        });
    };
};

addProduct();

const renderEditProduct = () => {
    let editProductTrigger = document.querySelectorAll('#editItem');

    for (let i = 0; i < editProductTrigger.length; i++) {
        editProductTrigger[i].addEventListener('click', function () {
            let editingProductID = parseInt(editProductTrigger[i].getAttribute('data-id'));
            localStorage.setItem('editingProductIDValue', editingProductID)
            console.log(editingProductID);
            editProductNew();
            // editProduct();
        })
    }
}


const editProductNew = () => {
    let allEditItems = document.querySelectorAll('#editItem');
    for (let i = 0; i < allEditItems.length; i++) {
        allEditItems[i].addEventListener('click', function () {

            $('.close').on('click', function () {
                $('.modal').addClass('d-none')
            })
            console.log('click on modal')

            document.querySelector('.modal').classList.toggle('d-none');
            // for en lang inputs and usd curr
            $.ajax({
                    type: "GET",
                    url: `${API_HOST}/admin/products/${allEditItems[i].getAttribute('data-id')}`,
                    dataType: "json",
                    headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
                    statusCode: {
                        200: function (response) {
                            document.getElementById("editItemCode").value = response.code;
                            document.getElementById("editItemCategory").value = response.category_id;
                            document.getElementById("editItemTitle_en").value = response.title;
                            document.getElementById("editItemDescr_en").value = response.description;
                            document.getElementById("editItemMater_en").value = response.material;
                            document.getElementById("editItemCurrPriceUsd").value = response.price;
                            if (response.in_stock === true) {
                                document.getElementById('editAvailability').setAttribute('checked', 'checked')
                            } else {
                                document.getElementById('editAvailability').removeAttribute('checked')
                            }
                        }
                    },
                }
            )

            // for ru lang inputs and eur curr
            $.ajax({
                    type: "GET",
                    url: `${API_HOST}/admin/products/${allEditItems[i].getAttribute('data-id')}?language=ru&currency=eur`,
                    dataType: "json",
                    headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
                    statusCode: {
                        200: function (response) {
                            document.getElementById("editItemTitle_ru").value = response.title;
                            document.getElementById("editItemDescr_ru").value = response.description;
                            document.getElementById("editItemMater_ru").value = response.material;
                        }
                    },
                }
            )

            // for ru lang inputs and eur curr
            $.ajax({
                    type: "GET",
                    url: `${API_HOST}/admin/products/${allEditItems[i].getAttribute('data-id')}?language=ua&currency=uah`,
                    dataType: "json",
                    headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
                    statusCode: {
                        200: function (response) {
                            document.getElementById("editItemTitle_ua").value = response.title;
                            document.getElementById("editItemDescr_ua").value = response.description;
                            document.getElementById("editItemMater_ua").value = response.material;
                        }
                    },
                }
            )


            document.getElementById('editFormTitle').innerHTML = `<p class="mt-20">Editing product with ID: ${allEditItems[i].getAttribute('data-id')}</p>`;

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
                let editingProductId = parseInt(allEditItems[i].getAttribute('data-id'));

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
                    price: +parseFloat(document.getElementById("editItemCurrPriceUsd").value),
                    code: document.getElementById("editItemCode").value,
                    category_id: parseInt(document.getElementById("editItemCategory").value),
                    in_stock: JSON.parse(document.getElementById("editAvailability").value),
                };

                $.ajax({
                        type: "PUT",
                        url: `${API_HOST}/admin/products/${editingProductId}`,
                        data: JSON.stringify(editItemObj),
                        dataType: "json",
                        headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
                        statusCode: {
                            200: function () {
                                swal(
                                    'Changed!',
                                    `Product with id ${editingProductId} was edited`,
                                    'success'
                                );
                                setTimeout(function () {
                                    window.location.reload(true)
                                }, 2000)
                            }
                        },
                        success: function () {
                            console.log('ok');
                        }
                    }
                )
            }
        })
    }
};

editProductNew();


// const editProduct = () => {
//     let editingProductID = localStorage.getItem('editingProductIDValue');
//     document.querySelector('.modal').classList.toggle('d-none');
//
//     $('.close').on('click', function () {
//         $('.modal').addClass('d-none')
//     })
//
//     document.getElementById('editFormTitle').textContent = `Editing product with ID: ${editingProductID}`
//
//     $.ajax({
//             type: "GET",
//             url: `${API_HOST}/admin/products/${editingProductID}`,
//             dataType: "json",
//             headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
//             statusCode: {
//                 200: function (response) {
//                     document.getElementById("editItemCode").value = response.code;
//                     document.getElementById("editItemCategory").value = response.category_id;
//                     document.getElementById("editItemTitle_en").value = response.title;
//                     document.getElementById("editItemDescr_en").value = response.description;
//                     document.getElementById("editItemMater_en").value = response.material;
//                     document.getElementById("editItemCurrPriceUsd").value = response.price;
//                     if (response.in_stock === true) {
//                         document.getElementById('editAvailability').setAttribute('checked', 'checked')
//                     } else {
//                         document.getElementById('editAvailability').removeAttribute('checked')
//                     }
//                 }
//             },
//         }
//     )
//
//     // for ru lang inputs and eur curr
//     $.ajax({
//         type: "GET",
//         url: `${API_HOST}/admin/products/${editingProductID}?language=ru&currency=eur`,
//         dataType: "json",
//         headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
//         statusCode: {
//             200: function (response) {
//                 document.getElementById("editItemTitle_ru").value = response.title;
//                 document.getElementById("editItemDescr_ru").value = response.description;
//                 document.getElementById("editItemMater_ru").value = response.material;
//             }
//         },
//     },
//
//     $.ajax({
//             type: "GET",
//             url: `${API_HOST}/admin/products/${editingProductID}?language=ua&currency=uah`,
//             dataType: "json",
//             headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
//             statusCode: {
//                 200: function (response) {
//                     document.getElementById("editItemTitle_ua").value = response.title;
//                     document.getElementById("editItemDescr_ua").value = response.description;
//                     document.getElementById("editItemMater_ua").value = response.material;
//                 }
//             },
//         }
//     )
//
// )
//
//
//     $('#editProduct').on('click', function () {
//         alert('click on editprororo')
//
//         $.ajax({
//             url: `${API_HOST}/admin/upload`,
//             type: "POST",
//             headers: {Authorization: `Bearer ${getCookie("auth_token")}`},
//             data: formData,
//             processData: false,
//             contentType: false,
//             success: function (response) {
//                 localStorage.setItem("uploadedImageId", response.id);
//
//                 let addProductData = {
//                     titles: {
//                         english: document.getElementById("addItemTitle_en").value,
//                         russian: document.getElementById("addItemTitle_ru").value,
//                         ukrainian: document.getElementById("addItemTitle_ua").value,
//                     },
//                     descriptions: {
//                         english: document.getElementById("addItemDescr_en").value,
//                         russian: document.getElementById("addItemDescr_ru").value,
//                         ukrainian: document.getElementById("addItemDescr_ua").value,
//                     },
//                     materials: {
//                         english: document.getElementById("addItemMater_en").value,
//                         russian: document.getElementById("addItemMater_ru").value,
//                         ukrainian: document.getElementById("addItemMater_ua").value,
//                     },
//                     price: +document.getElementById("addItemCurrPriceUsd").value,
//                     code: document.getElementById("addItemCode").value,
//                     category_id: parseInt(
//                         document.getElementById("addItemCategory").value
//                     ),
//                 };
//
//                 $.ajax({
//                     type: "POST",
//                     url: `${API_HOST}/admin/products`,
//                     data: JSON.stringify(addProductData),
//                     dataType: "json",
//                     headers: {Authorization: `Bearer ${getCookie("auth_token")}`},
//                     statusCode: {
//                         200: function () {
//                             swal("Success!", `New product was added`, "success");
//                             setTimeout(function () {
//                                 window.location.reload(true);
//                             }, 2000);
//                         },
//                     },
//                     error: function (jqXHR, textStatus, errorMessage) {
//                         console.log(addProductData);
//                         swal({
//                             title: "Error",
//                             text: errorMessage,
//                             icon: "error",
//                             closeOnClickOutside: true,
//                             closeOnEsc: true,
//                         });
//                     },
//                 });
//             },
//             error: function (jqXHR, textStatus, errorMessage) {
//                 console.log(errorMessage);
//             },
//         });
//
//     })
//
//     // for ru lang inputs and eur curr
//
// }

const renderTotalAdminProductsItemsText = (totalItems, itemsCount) => {
    let itemsCountElement = document.getElementById('totalItems');
    itemsCountElement.innerHTML = `Total of products: ${totalItems}`;
};

const renderAdminProductsPagination = (totalItems, limit) => {
    let paginationWrapper = document.getElementById('paginationProducts');
    let amountOfItems = Math.ceil(totalItems / limit);

    for (let i = 1; i <= amountOfItems; i++) {
        renderAdminProductsPageButton(i, paginationWrapper);
    }
}

const renderAdminProductsPageButton = (pageNumber, wrapper) => {
    let addItems = document.createElement('a');
    addItems.className = 'mr-15 pagination_item';
    addItems.setAttribute('href', `http://${window.location.host}/admin-panel.html?page=${pageNumber}&products_tab`);
    addItems.innerHTML = `${pageNumber}`;

    wrapper.appendChild(addItems);
}

if (window.location.search.includes('products_tab')) {
    $('#products-tab').trigger('click');
}

if (window.location.pathname === '/admin-panel.html') {
    adminProductsList();
}


//
// const adminPanel = () => {
//     $.ajax({
//         type: "GET",
//         url: `${API_HOST}/api/products`,
//         success: function (response) {
//             console.log(response)
//             $("#totalItems").html("Total products: " + response.total);
//             for (let i = 0; i < response.data.length; i++) {
//
//                 let categoriesObject = {
//                     1: "Rings",
//                     2: "Bracelets",
//                     3: "Pendants",
//                     4: "Earrings",
//                     5: "Necklaces",
//                     6: "Sets",
//                 };
//
//                 let allItems = document.createElement("div");
//                 allItems.className = `adminpanel__table-item  item_id_${response.data[i].id}`;
//                 allItems.innerHTML = `
// <div id="idOfProduct"><p>${response.data[i].id}</p></div>
// <div><p>${response.data[i].title}</p></div>
// <div><p>${response.data[i].price} $</p></div>
// <div><p>${response.data[i].description}</p></div>
// <div><p>${response.data[i].material}</p></div>
// <div><p>${response.data[i].code}</p></div>
// <div><p>${response.data[i].in_stock}</p></div>
// <div id="categoryId"><p> ${categoriesObject[response.data[i].category_id]}</p></div>
// <div class="item-actions">
//     <div class="edit" data-id="${response.data[i].id}" id="editItem"></div>
//     <button type="button" class="close remove" data-id="${response.data[i].id}" id="removeItem" aria-label="Close">
//         <span aria-hidden="true">&times;</span>
//     </button>
// </div>
// `;
//
//                 document.querySelector("#allItems").appendChild(allItems);
//             }
//
//             const removeProductNew = () => {
//                 let allRemoveItems = document.querySelectorAll("#removeItem");
//                 for (let i = 0; i < allRemoveItems.length; i++) {
//                     allRemoveItems[i].addEventListener("click", function () {
//                         let delItemId = parseInt(allRemoveItems[i].getAttribute("data-id"));
//                         swal({
//                             title: "Are you sure?",
//                             text: `Do you want delete item with ID: ${delItemId}?`,
//                             icon: "warning",
//                             showCancelButton: true,
//                             confirmButtonColor: "#3085d6",
//                             cancelButtonColor: "#d33",
//                             confirmButtonText: "Yes, delete it!",
//                         }).then((result) => {
//                             if (result) {
//                                 $.ajax({
//                                     type: "DELETE",
//                                     url: `${API_HOST}/admin/products/${delItemId}`,
//                                     headers: {
//                                         Authorization: `Bearer ${getCookie("auth_token")}`,
//                                     },
//                                     success: function () {
//                                         swal(
//                                             "Deleted!",
//                                             "This product has been deleted.",
//                                             "success"
//                                         );
//                                         setTimeout(function () {
//                                             window.location.reload(true);
//                                         }, 1500);
//                                     },
//                                     error: function (jqXHR, textStatus, errorMessage) {
//                                         swal(errorMessage, "Error.", "error");
//                                     },
//                                 });
//                             }
//                         });
//                     });
//                 }
//             };
//
//             removeProductNew();
//
//             const editProductNew = () => {
//                 let allEditItems = document.querySelectorAll('#editItem');
//                 for (let i = 0; i < allEditItems.length; i++) {
//                     allEditItems[i].addEventListener('click', function () {
//                         document.querySelector('.modal').classList.toggle('d-none');
//
//                         // for en lang inputs and usd curr
//                         $.ajax({
//                                 type: "GET",
//                                 url: `${API_HOST}/admin/products/${allEditItems[i].getAttribute('data-id')}`,
//                                 dataType: "json",
//                                 headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
//                                 statusCode: {
//                                     200: function (response) {
//                                         document.getElementById("editItemCode").value = response.code;
//                                         document.getElementById("editItemCategory").value = response.category_id;
//                                         document.getElementById("editItemTitle_en").value = response.title;
//                                         document.getElementById("editItemDescr_en").value = response.description;
//                                         document.getElementById("editItemMater_en").value = response.material;
//                                         document.getElementById("editItemCurrPriceUsd").value = response.price;
//                                         if (response.in_stock === true) {
//                                             document.getElementById('editAvailability').setAttribute('checked', 'checked')
//                                         } else {
//                                             document.getElementById('editAvailability').removeAttribute('checked')
//                                         }
//                                     }
//                                 },
//                             }
//                         )
//
//                         // for ru lang inputs and eur curr
//                         $.ajax({
//                                 type: "GET",
//                                 url: `${API_HOST}/admin/products/${allEditItems[i].getAttribute('data-id')}?language=ru&currency=eur`,
//                                 dataType: "json",
//                                 headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
//                                 statusCode: {
//                                     200: function (response) {
//                                         document.getElementById("editItemTitle_ru").value = response.title;
//                                         document.getElementById("editItemDescr_ru").value = response.description;
//                                         document.getElementById("editItemMater_ru").value = response.material;
//                                     }
//                                 },
//                             }
//                         )
//
//                         // for ru lang inputs and eur curr
//                         $.ajax({
//                                 type: "GET",
//                                 url: `${API_HOST}/admin/products/${allEditItems[i].getAttribute('data-id')}?language=ua&currency=uah`,
//                                 dataType: "json",
//                                 headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
//                                 statusCode: {
//                                     200: function (response) {
//                                         document.getElementById("editItemTitle_ua").value = response.title;
//                                         document.getElementById("editItemDescr_ua").value = response.description;
//                                         document.getElementById("editItemMater_ua").value = response.material;
//                                     }
//                                 },
//                             }
//                         )
//
//                         $('.close').on('click', function () {
//                             $('.modal').addClass('d-none')
//                         })
//
//                         document.getElementById('editFormTitle').innerHTML = `<p class="mt-20">Editing product with ID: ${allEditItems[i].getAttribute('data-id')}</p>`;
//
//                         $("#editAvailability").on('change', function () {
//                             if ($(this).is(':checked')) {
//                                 $(this).attr('value', true);
//                             } else {
//                                 $(this).attr('value', false);
//                             }
//                             $('#checkbox-value').text($('#editAvailability').val());
//                         });
//
//                         let editItem = document.querySelector('#editProduct');
//                         editItem.onclick = () => {
//                             let editingProductId = parseInt(allEditItems[i].getAttribute('data-id'));
//
//                             let editItemObj = {
//                                 titles: {
//                                     english: document.getElementById("editItemTitle_en").value,
//                                     russian: document.getElementById("editItemTitle_ru").value,
//                                     ukrainian: document.getElementById("editItemTitle_ua").value,
//                                 },
//                                 descriptions: {
//                                     english: document.getElementById("editItemDescr_en").value,
//                                     russian: document.getElementById("editItemDescr_ru").value,
//                                     ukrainian: document.getElementById("editItemDescr_ua").value,
//                                 },
//                                 materials: {
//                                     english: document.getElementById("editItemMater_en").value,
//                                     russian: document.getElementById("editItemMater_ru").value,
//                                     ukrainian: document.getElementById("editItemMater_ua").value,
//                                 },
//                                 price: parseFloat(document.getElementById("editItemCurrPriceUsd").value),
//                                 code: document.getElementById("editItemCode").value,
//                                 category_id: parseInt(document.getElementById("editItemCategory").value),
//                                 in_stock: JSON.parse(document.getElementById("editAvailability").value),
//                             };
//
//                             $.ajax({
//                                     type: "PUT",
//                                     url: `${API_HOST}/admin/products/${editingProductId}`,
//                                     data: JSON.stringify(editItemObj),
//                                     dataType: "json",
//                                     headers: {'Authorization': `Bearer ${getCookie('auth_token')}`},
//                                     statusCode: {
//                                         200: function () {
//                                             swal(
//                                                 'Changed!',
//                                                 `Product with id ${editingProductId} was edited`,
//                                                 'success'
//                                             );
//                                             setTimeout(function () {
//                                                 window.location.reload(true)
//                                             }, 2000)
//                                         }
//                                     },
//                                     success: function () {
//                                         console.log('ok');
//                                     }
//                                 }
//                             )
//                         }
//                     })
//                 }
//             };
//
//             editProductNew();
//         },
//     });
//
//     const addProduct = () => {
//         localStorage.clear();
//         const addItemBtn = document.querySelector(".add_product");
//
//         addItemBtn.onclick = () => {
//             let blobFile = $("#addItemImg")[0].files[0];
//             let formData = new FormData();
//             formData.append("image", blobFile);
//
//             $.ajax({
//                 url: `${API_HOST}/admin/upload`,
//                 type: "POST",
//                 headers: {Authorization: `Bearer ${getCookie("auth_token")}`},
//                 data: formData,
//                 processData: false,
//                 contentType: false,
//                 success: function (response) {
//                     localStorage.setItem("uploadedImageId", response.id);
//
//                     let addProductData = {
//                         titles: {
//                             english: document.getElementById("addItemTitle_en").value,
//                             russian: document.getElementById("addItemTitle_ru").value,
//                             ukrainian: document.getElementById("addItemTitle_ua").value,
//                         },
//                         descriptions: {
//                             english: document.getElementById("addItemDescr_en").value,
//                             russian: document.getElementById("addItemDescr_ru").value,
//                             ukrainian: document.getElementById("addItemDescr_ua").value,
//                         },
//                         materials: {
//                             english: document.getElementById("addItemMater_en").value,
//                             russian: document.getElementById("addItemMater_ru").value,
//                             ukrainian: document.getElementById("addItemMater_ua").value,
//                         },
//                         price: +document.getElementById("addItemCurrPriceUsd").value,
//                         code: document.getElementById("addItemCode").value,
//                         image_ids: [parseInt(localStorage.getItem("uploadedImageId"))],
//                         category_id: parseInt(
//                             document.getElementById("addItemCategory").value
//                         ),
//                     };
//
//                     $.ajax({
//                         type: "POST",
//                         url: `${API_HOST}/admin/products`,
//                         data: JSON.stringify(addProductData),
//                         dataType: "json",
//                         headers: {Authorization: `Bearer ${getCookie("auth_token")}`},
//                         statusCode: {
//                             200: function () {
//                                 swal("Success!", `New product was added`, "success");
//                                 setTimeout(function () {
//                                     window.location.reload(true);
//                                 }, 2000);
//                             },
//                         },
//                         error: function (jqXHR, textStatus, errorMessage) {
//                             console.log(addProductData);
//                             swal({
//                                 title: "Error",
//                                 text: errorMessage,
//                                 icon: "error",
//                                 closeOnClickOutside: true,
//                                 closeOnEsc: true,
//                             });
//                         },
//                     });
//                 },
//                 error: function (jqXHR, textStatus, errorMessage) {
//                     console.log(errorMessage);
//                 },
//             });
//         };
//     };
//
//     addProduct();
// };


//
// if (window.location.pathname === "/admin-panel.html" && getCookie("auth_token") !== null) {
//     adminPanel();
// }

if (window.location.pathname === "/admin-panel.html" && getCookie("auth_token") === null) {
    document.getElementsByTagName("body")[0].innerHTML =
        '<div><p class="text-center">You are not logged</p></div>';
    setTimeout(function () {
        window.location.href = "/admin.html";
    }, 2000);
}
