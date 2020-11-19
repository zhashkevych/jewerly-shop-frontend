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
                <div id="showMoreInfo" class="more-info_title article-level-6 mt-10 mb-0"><!--More info--></div>
                <div id="allInfoAboutOrder" class="more-info_hidden">
                    <div class="more-info_content">
                        <p class="article-level-5 font-weight-semi">Click to get more info about order</p>
                        <div id="moreInfoAboutOrderPopup" class="d-none">
                            <p>Additional name: ${order[i].additional_name}</p>
                            <p>Country: ${order[i].country}</p>
                            <p>Address: ${order[i].address}</p>
                            <p>Postal code: ${order[i].postal_code}</p>
                            <p>Ordered at: ${order[i].ordered_at}</p>
                            <hr>
                        </div>
                    </div>
                </div>
            </div>`;

        document.querySelector("#listOfAllOrders").appendChild(allOrders);

        for (let k = 0; k < order[i].transactions.length; k++) {
            let allClientTransactions = document.createElement('div');
            allClientTransactions.innerHTML = `
                            <p class="article-level-5 font-weight-medium mt-30">Transaction info</p>
                            <p>created_at: ${order[i].transactions[k].created_at}</p>
                            <p>status: ${order[i].transactions[k].status}</p>
                            <p>transaction_id: ${order[i].transactions[k].transaction_id}</p>
                            <p>card_mask: ${order[i].transactions[k].card_mask}</p>`

            for (let y = 0; y < document.querySelectorAll('#moreInfoAboutOrderPopup').length; y++) {
                document.querySelectorAll('#moreInfoAboutOrderPopup')[i].append((allClientTransactions))
            }
        }
    }

    for (let g = 0; g < document.querySelectorAll('.more-info_content .article-level-5').length; g++) {
        document.querySelectorAll('.more-info_content .article-level-5')[g].onclick = () => {
            document.querySelectorAll('.more-info_content .article-level-5')[g].nextElementSibling.classList.toggle('d-none')
        }
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

    addItems.className = 'mr-15 pagination_item';
    addItems.setAttribute('href', `http://${window.location.host}/admin-panel.html?page=${pageNumber}&orders_tab`);
    addItems.innerHTML = `${pageNumber}`;
    wrapper.appendChild(addItems);
}

if (window.location.search.includes('orders_tab')) {
    $('#orders-tab').trigger('click');
}

if (window.location.pathname === '/admin-panel.html') {
    ordersList();
}
