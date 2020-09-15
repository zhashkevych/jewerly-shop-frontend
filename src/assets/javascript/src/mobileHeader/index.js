const openSidenav = () => {
    let openTrigger = document.getElementById('mobOpenSidenav');
    openTrigger.onclick = () => {
        openNav();
    }
}

const closeSidenav = () => {
    let closeTrigger = document.getElementById('mobCloseSidenav');
    closeTrigger.onclick = () => {
        closeNav();
    }
}

const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
}

const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
}

const appendSelectorToSideNav = () => {
    if (window.innerWidth <= 576) {
        document.getElementById('mob_currencyHolder').appendChild(document.getElementById('currencySelector'));
        document.getElementById('mob_languageHolder').appendChild(document.getElementById('languageSelector'));
    }
}


if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {
    openSidenav();
    appendSelectorToSideNav();
    closeSidenav();
}