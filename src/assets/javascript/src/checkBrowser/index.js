const getUserBrowser = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('safari') != -1) {
        if (userAgent.indexOf('chrome') > -1) {
            document.getElementsByTagName('body')[0].classList.add('chrome');
        } else {
            document.getElementsByTagName('body')[0].classList.add('safari');
        }
    }
}

getUserBrowser();