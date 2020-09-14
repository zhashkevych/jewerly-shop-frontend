const categoriesToggle = () => {
    let category1 = document.getElementById('ringsCategory');
    let category2 = document.getElementById('braceletsCategory');
    let category3 = document.getElementById('pedantsCategory');
    let category4 = document.getElementById('earringsCategory');
    let category5 = document.getElementById('chokersNecklacesCategory');
    let category6 = document.getElementById('setsCategory');
    let categoryAll = document.getElementById('categoryAllItems');

    category1.onclick = () => {
        window.location.href = 'products-page.html?category=1'
    };
    category2.onclick = () => {
        window.location.href = 'products-page.html?category=2'
    };
    category3.onclick = () => {
        window.location.href = 'products-page.html?category=3'
    };
    category4.onclick = () => {
        window.location.href = 'products-page.html?category=4'
    };
    category5.onclick = () => {
        window.location.href = 'products-page.html?category=5'
    };
    category6.onclick = () => {
        window.location.href = 'products-page.html?category=6'
    };
    categoryAll.onclick = () => {
        window.location.href = 'products-page.html?category=0'
    };

};

if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {
    categoriesToggle();
}