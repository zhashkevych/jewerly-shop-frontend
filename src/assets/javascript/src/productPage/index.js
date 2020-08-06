(function() {

    'use strict';

    let tabs = function(options) {

        let el = document.querySelector(options.el);
        let tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
        let tabContentContainers = el.querySelectorAll(options.tabContentContainers);
        let activeIndex = 0;
        let initCalled = false;

        let init = function() {
            if (!initCalled) {
                initCalled = true;
                el.classList.remove('no-js');

                for (let i = 0; i < tabNavigationLinks.length; i++) {
                    let link = tabNavigationLinks[i];
                    handleClick(link, i);
                }
            }
        };

        let handleClick = function(link, index) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                goToTab(index);
            });
        };

        let goToTab = function(index) {
            if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
                tabNavigationLinks[activeIndex].classList.remove('is-active');
                tabNavigationLinks[index].classList.add('is-active');
                tabContentContainers[activeIndex].classList.remove('is-active');
                tabContentContainers[index].classList.add('is-active');
                activeIndex = index;
            }
        };

        return {
            init: init,
            goToTab: goToTab
        };

    };

    window.tabs = tabs;

})();

let myTabs1 = tabs({
    el: '#tabs1',
    tabNavigationLinks: '.tab-link',
    tabContentContainers: '.tab-content'
});

myTabs1.init();





