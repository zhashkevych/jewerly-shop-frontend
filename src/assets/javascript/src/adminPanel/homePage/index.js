const homePageSettings = () => {
    mainPageController.getMainPageInfo().then(settings => {
        renderHomePageSettings(settings);
    });
};

const renderHomePageSettings = (settings) => {
    console.log(settings)
    if (settings.data === null) {
        renderEmptyHomePageSettings();
    } else {
        renderHomePageSettingsItems(settings.data);
    }
};

const renderEmptyHomePageSettings = () => {
    let noItems = document.createElement('div');
    noItems.className = 'article-level-4 text-center font-weight-medium';
    noItems.innerText = 'No orders here yet';

    document.querySelector('#emptySettings').appendChild(noItems);
};

const renderHomePageSettingsItems = (settings) => {

};

//
// if (window.location.search.includes('orders_tab')) {
//     $('#orders-tab').trigger('click');
// }

if (window.location.pathname === '/admin-panel.html') {
    homePageSettings();
}
