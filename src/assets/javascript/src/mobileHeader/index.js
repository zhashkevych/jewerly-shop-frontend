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

if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {
    openSidenav();
    closeSidenav();
}