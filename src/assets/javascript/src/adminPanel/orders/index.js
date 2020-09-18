const ordersList = () => {
    let urlParams = new URLSearchParams(window.location.search);
    let limit = 10;
    let page = urlParams.get('page');
    if (page == null) {
        page = 1
    }

    let offset = (page - 1) * limit;

    ordersController.getAllOrders(limit, offset).then(order => {
        renderOrdersList(order);
        renderOrderPagination(order.total, limit)
    });
};

const renderOrdersList = (order, title, limit) => {

    if (order.data === null) {
        renderEmptyOrdersList();
    } else {
        renderTotalOrderItemsText(order.total, order.data.length);
        renderOrderItems(order.data);
    }
};

const renderEmptyOrdersList = () => {
    let noItems = document.createElement('div');
    noItems.className = 'article-level-4 text-center font-weight-medium';
    noItems.innerText = 'No orders here yet';

    document.querySelector('#emptyOrderList').appendChild(noItems);
};

const renderOrderItems = (order) => {
    for (let i = 0; i < order.length; i++) {
        let allOrders = document.createElement("div");

        allOrders.className = `adminpanel__table-item-order order_id_${order[i].id}`;
        allOrders.innerHTML = `
            <div id="idOfOrder"><p>${order[i].id}</p></div>
            <div><p>${order[i].first_name}</p></div>
            <div><p>${order[i].last_name}</p></div>
            <div><p>${order[i].email}</p></div>
            <div><p>${order[i].total_cost} $</p></div>
            <div class="more-info">
                <div id="showMoreInfo" class="more-info_title article-level-6 mt-10 mb-0">More info</div>
                <div id="allInfoAboutOrder" class="more-info_hidden d-none">
                    <div class="more-info_content">
                        <p class="article-level-5">More info about orderer</p>
                        <p>Additional name: ${order[i].additional_name}</p>
                        <p>Country: ${order[i].country}</p>
                        <p>Address: ${order[i].address}</p>
                        <p>Postal code: ${order[i].postal_code}</p>
                        <p>Ordered at: ${order[i].ordered_at}</p>
                    </div>
                </div>
            </div>
`;
        document.querySelector("#listOfAllOrders").appendChild(allOrders);
    }

};

const renderTotalOrderItemsText = (totalItems, itemsCount) => {
    let itemsCountElement = document.createElement('div');
    itemsCountElement.innerHTML = `Total of orders: ${totalItems}`;
    document.querySelector('#amountOfOrders').appendChild(itemsCountElement);
};

const renderOrderPagination = (totalItems, limit) => {
    let paginationWrapper = document.getElementById('paginationOrders');
    let amountOfItems = Math.ceil(totalItems / limit);

    for (let i = 1; i <= amountOfItems; i++) {
        renderOrderPageButton(i, paginationWrapper);
    }
}

const renderOrderPageButton = (pageNumber, wrapper) => {
    let addItems = document.createElement('a');
    // $('#orders-tab').trigger('click');

    addItems.className = 'mr-15 pagination_item';
    addItems.setAttribute('href', `http://${window.location.host}/admin-panel.html?page=${pageNumber}`);
    addItems.innerHTML = `${pageNumber}`;

    wrapper.appendChild(addItems);
}

if (window.location.pathname === '/admin-panel.html') {
    ordersList();
}


// const getAllOrders = () => {
//
//     $.ajax({
//         type: "GET",
//         url: `${API_HOST}/admin/orders`,
//         headers: {Authorization: `Bearer ${getCookie("auth_token")}`},
//         success: function (response) {
//             console.log(response)
//             localStorage.setItem('totalItemsTest', response.total)
//             document.getElementById("amountOfOrders").innerText += response.total;
//             for (let i = 0; i < response.data.length; i++) {
//                 let allOrders = document.createElement("div");
//
//                 allOrders.className = `adminpanel__table-item-order order_id_${response.data[i].id}`;
//                 allOrders.innerHTML = `
//     <div id="idOfOrder"><p>${response.data[i].id}</p></div>
//     <div><p>${response.data[i].first_name}</p></div>
//     <div><p>${response.data[i].last_name}</p></div>
//     <div><p>${response.data[i].email}</p></div>
//     <div><p>${response.data[i].total_cost} $</p></div>
//     <div class="more-info">
//     <div id="showMoreInfo" class="more-info_title article-level-6 mt-10 mb-0">More info</div>
//     <div id="allInfoAboutOrder" class="more-info_hidden d-none">
//         <div class="more-info_content">
//         <p class="article-level-5">More info about orderer</p>
//             <p>Additional name: ${response.data[i].additional_name}</p>
//             <p>Country: ${response.data[i].country}</p>
//             <p>Address: ${response.data[i].address}</p>
//             <p>Postal code: ${response.data[i].postal_code}</p>
//             <p>Ordered at: ${response.data[i].ordered_at}</p>
//         </div>
//     </div>
//     </div>
// `;
//                 document.querySelector("#listOfAllOrders").appendChild(allOrders);
//
//                 const toggleAllInfoAboutOrder = () => {
//                     for (let w = 0; w < document.querySelectorAll('#showMoreInfo').length; w++) {
//                         document.querySelectorAll('#showMoreInfo')[w].onclick = () => {
//                             document.querySelectorAll('#showMoreInfo')[w].nextElementSibling.classList.toggle('d-none');
//                         }
//                     }
//                 }
//
//                 const addMoreTransactionInfo = () => {
//                     for (let j = 0; j < response.data[i].transactions.length; j++) {
//                         let moreTransactionInfo = document.createElement('div');
//                         moreTransactionInfo.className = 'more-info_content';
//                         moreTransactionInfo.innerHTML = `
//                             <p class="article-level-5">Transaction info</p>
//                             <p>Transaction ID: ${response.data[i].transactions[j].transaction_id}</p>
//                             <p>Card mask: ${response.data[i].transactions[j].card_mask}</p>
//                             <p>Status: ${response.data[i].transactions[j].status}</p>
//                             <p>Created at: ${response.data[i].transactions[j].created_at}</p>
//                             <hr>`;
//
//                         for (let k = 0; k < document.querySelectorAll('#allInfoAboutOrder').length; k++) {
//                             document.querySelectorAll('#allInfoAboutOrder')[k].appendChild(moreTransactionInfo)
//                         }
//                     }
//                 }
//
//                 const allUsersOrderedItems = () => {
//                     for (let p = 0; p < response.data[i].items.length; p++) {
//                         console.log('response.data[i].items[p]');
//                         console.log(response.data[i].items[p]);
//                         let listOfAllOrderedItems = document.createElement('div');
//                         listOfAllOrderedItems.className = 'more-info_content';
//                         listOfAllOrderedItems.innerHTML = `
//                             <p class="article-level-5">Ordered Items</p>
//                             <p>Product id: ${response.data[i].items[p].product_id}</p>
//                             <p>Quantity: ${response.data[i].items[p].quantity}</p>`;
//
//                         for (let q = 0; q < document.querySelectorAll('#allInfoAboutOrder').length; q++) {
//                             document.querySelectorAll('#allInfoAboutOrder')[q].appendChild(listOfAllOrderedItems)
//                         }
//                     }
//                 }
//
//                 // toggleAllInfoAboutOrder()
//                 // addMoreTransactionInfo();
//                 // allUsersOrderedItems();
//             }
//         },
//
//     });
//
// };
// getAllOrders();