const adminPanel = () => {
    $.ajax({
        type: "GET",
        url: 'http://164.90.218.246:8001/api/products',
        success: function (response) {
            console.log(response);
            $('#totalItems').html('List of all products. Total items:' + response.total);
            for (let i = 0; i < response.data.length; i++) {
                let allItems = document.createElement('div');
                allItems.className = 'col-md-12';
                allItems.innerHTML = `<p>ID of item: ${response.data[i].id}</p><p>Title: ${response.data[i].title}</p><p>Curr price:  ${response.data[i].current_price}</p><p>Description: ${response.data[i].description}</p><p>Material: ${response.data[i].material}</p><hr>`;

                document.querySelector('#all_items').appendChild(allItems);
            }
        }
    })

    $('#addNewProduct').on('click', function () {
        $.ajax({
            type: "POST",
            url: 'http://164.90.218.246:8001/admin/products',
            // data: JSON.stringify({
            //     "login": "admin",
            //     "password": "eUdYff4bkQbmEKNq"
            // }),
            // dataType: "json",
            success: function (response) {
                console.log(response);
            }
        })
    })

};

if (window.location.pathname === '/admin-panel.html') {
    adminPanel();
}