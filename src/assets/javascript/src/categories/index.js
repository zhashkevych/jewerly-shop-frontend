// refactor in future
const categoriesToggle = () => {
    let category1 = document.querySelectorAll('.ringsCategory');
    let category2 = document.querySelectorAll('.braceletsCategory');
    let category3 = document.querySelectorAll('.pedantsCategory');
    let category4 = document.querySelectorAll('.earringsCategory');
    let category5 = document.querySelectorAll('.chokersNecklacesCategory');
    let category6 = document.querySelectorAll('.setsCategory');
    let categoryAll = document.querySelectorAll('.categoryAllItems');

    for (let i = 0; i < category1.length; i++) {
        category1[i].onclick = () => {
            window.location.href = 'products-page.html?category=1'
        };
    }
    for (let i = 0; i < category2.length; i++) {
        category2[i].onclick = () => {
            window.location.href = 'products-page.html?category=2'
        };
    }
    for (let i = 0; i < category3.length; i++) {
        category3[i].onclick = () => {
            window.location.href = 'products-page.html?category=3'
        };
    }
    for (let i = 0; i < category4.length; i++) {
        category4[i].onclick = () => {
            window.location.href = 'products-page.html?category=4'
        };
    }
    for (let i = 0; i < category5.length; i++) {
        category5[i].onclick = () => {
            window.location.href = 'products-page.html?category=5'
        };
    }
    for (let i = 0; i < category6.length; i++) {
        category6[i].onclick = () => {
            window.location.href = 'products-page.html?category=6'
        };
    }
    for (let i = 0; i < categoryAll.length; i++) {
        categoryAll[i].onclick = () => {
            window.location.href = 'products-page.html?category=0'
        };
    }
};

if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {
    categoriesToggle();
}