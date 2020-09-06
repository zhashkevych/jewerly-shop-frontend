// worst hardcode solution DON'T TOUCH IT PLEASE!
const langControl = () => {

    if (getCookie('lang_val') === null) {
        $('#lang_en').hide();
    }

    $('.switch-lang').hover(function () {
        $('.lang-dropdown').addClass('active');
    });

    $('.switch-lang').on('mouseleave', function () {
        $('.lang-dropdown').removeClass('active');
    });

    $('#lang_ru').on('click', function () {
        $('body').addClass('lang_ru');
        $('body').removeClass('lang_ua');
        $('body').removeClass('lang_en');
        $('.current-lang .lang-text').html($('#lang_ru p').html().toUpperCase());
        $('.lang-dropdown #lang_ru').hide();
        $('#lang_en').show();
        $('#lang_ua').show();
        $('.lang-dropdown').removeClass('active');

        setCookie('lang_val', 'ru', 0.5);

        let currLang = document.getElementsByTagName('body')[0].className.slice(-2);

        let translations = {
            en: {
                headerTop: {
                    title: 'SilverRain Israel jewelry company since 2012. All silver products made in Italy',
                    login_title: 'Login'
                },
                categories: {
                    allItems: 'All items',
                    rings: 'Rings',
                    bracelets: 'Bracelets',
                    pendants: 'Pendants',
                    earrings: 'Earrings',
                    chokersNecklaces: 'Chokers / Necklaces',
                    sets: 'Sets',
                },
            },
            ru: {
                headerTop: {
                    title: 'SilverRain Израильская ювелирная компания с 2012 года. Все изделия из серебра произведены в Италии.',
                    login_title: 'Вход'
                },
                categories: {
                    allItems: 'Все продукты',
                    rings: 'Кольца',
                    bracelets: 'Браслеты',
                    pendants: 'Подвески',
                    earrings: 'Серьги',
                    chokersNecklaces: 'Чокеры / Ожерелья',
                    sets: 'Сеты',
                },
            },
            ua: {
                headerTop: {
                    title: 'Ювелірна компанія SilverRain Israel із 2012 року. Всі вироби зі срібла виготовлені в Італії',
                    login_title: 'Вхід',
                },
                categories: {
                    allItems: 'Усі продукти',
                    rings: 'Кільця',
                    bracelets: 'Браслети',
                    pendants: 'Підвіски',
                    earrings: 'Сережки',
                    chokersNecklaces: 'Кольє',
                    sets: 'Сети',
                },
            }
        };

        $('#catAllItems').html(translations[currLang].categories.allItems);
        $('.header_notification p').html(translations[currLang].headerTop.title);
        $('.login_title').html(translations[currLang].headerTop.login_title);
        $('#ringsTestString').html(translations[currLang].categories.rings);
        $('#braceletsTestString').html(translations[currLang].categories.bracelets);
        $('#pedantsTestString').html(translations[currLang].categories.pendants);
        $('#earringsTestString').html(translations[currLang].categories.earrings);
        $('#chokersNecklacesTestString').html(translations[currLang].categories.chokersNecklaces);
        $('#setsTestString').html(translations[currLang].categories.sets);

        $('#catRingsTitle').html(translations[currLang].categories.rings)
    });

    $('#lang_ua').on('click', function () {
        $('body').addClass('lang_ua');
        $('body').removeClass('lang_ru');
        $('body').removeClass('lang_en');
        $('.current-lang .lang-text').html($('#lang_ua p').html().toUpperCase());
        $('.lang-dropdown #lang_ua').hide();
        $('#lang_en').show();
        $('#lang_ru').show();
        $('.lang-dropdown').removeClass('active');

        setCookie('lang_val', 'ua', 0.5);

        let currLang = document.getElementsByTagName('body')[0].className.slice(-2);

        let translations = {
            en: {
                headerTop: {
                    title: 'SilverRain Israel jewelry company since 2012. All silver products made in Italy',
                    login_title: 'Login'
                },
                categories: {
                    allItems: 'All items',
                    rings: 'Rings',
                    bracelets: 'Bracelets',
                    pendants: 'Pendants',
                    earrings: 'Earrings',
                    chokersNecklaces: 'Chokers / Necklaces',
                    sets: 'Sets',
                },
            },
            ru: {
                headerTop: {
                    title: 'SilverRain Израильская ювелирная компания с 2012 года. Все изделия из серебра произведены в Италии.',
                    login_title: 'Вход'
                },
                categories: {
                    allItems: 'Все продукты',
                    rings: 'Кольца',
                    bracelets: 'Браслеты',
                    pendants: 'Подвески',
                    earrings: 'Серьги',
                    chokersNecklaces: 'Чокеры / Ожерелья',
                    sets: 'Сеты',
                },
            },
            ua: {
                headerTop: {
                    title: 'Ювелірна компанія SilverRain Israel із 2012 року. Всі вироби зі срібла виготовлені в Італії',
                    login_title: 'Вхід',
                },
                categories: {
                    allItems: 'Усі продукти',
                    rings: 'Кільця',
                    bracelets: 'Браслети',
                    pendants: 'Підвіски',
                    earrings: 'Сережки',
                    chokersNecklaces: 'Кольє',
                    sets: 'Сети',
                },
            }
        };

        $('#catAllItems').html(translations[currLang].categories.allItems);
        $('.header_notification p').html(translations[currLang].headerTop.title);
        $('.login_title').html(translations[currLang].headerTop.login_title);
        $('#ringsTestString').html(translations[currLang].categories.rings);
        $('#braceletsTestString').html(translations[currLang].categories.bracelets);
        $('#pedantsTestString').html(translations[currLang].categories.pendants);
        $('#earringsTestString').html(translations[currLang].categories.earrings);
        $('#chokersNecklacesTestString').html(translations[currLang].categories.chokersNecklaces);
        $('#setsTestString').html(translations[currLang].categories.sets);

        $('#catRingsTitle').html(translations[currLang].categories.rings)

    });

    $('#lang_en').on('click', function () {
        $('body').addClass('lang_en');
        $('body').removeClass('lang_ua');
        $('body').removeClass('lang_ru');
        $('.current-lang .lang-text').html($('#lang_en p').html().toUpperCase());
        $('.lang-dropdown #lang_en').hide();
        $('#lang_en').show();
        $('.lang-dropdown').removeClass('active');


        setCookie('lang_val', 'en', 0.5);

        let currLang = document.getElementsByTagName('body')[0].className.slice(-2);

        let translations = {
            en: {
                headerTop: {
                    title: 'SilverRain Israel jewelry company since 2012. All silver products made in Italy',
                    login_title: 'Login'
                },
                categories: {
                    allItems: 'All items',
                    rings: 'Rings',
                    bracelets: 'Bracelets',
                    pendants: 'Pendants',
                    earrings: 'Earrings',
                    chokersNecklaces: 'Chokers / Necklaces',
                    sets: 'Sets',
                },
            },
            ru: {
                headerTop: {
                    title: 'SilverRain Израильская ювелирная компания с 2012 года. Все изделия из серебра произведены в Италии.',
                    login_title: 'Вход'
                },
                categories: {
                    rings: 'Кольца',
                    bracelets: 'Браслеты',
                    pendants: 'Подвески',
                    earrings: 'Серьги',
                    chokersNecklaces: 'Чокеры / Ожерелья',
                    sets: 'Сеты',
                },
            },
            ua: {
                headerTop: {
                    title: 'Ювелірна компанія SilverRain Israel із 2012 року. Всі вироби зі срібла виготовлені в Італії',
                    login_title: 'Вхід',
                },
                categories: {
                    rings: 'Кільця',
                    bracelets: 'Браслети',
                    pendants: 'Підвіски',
                    earrings: 'Сережки',
                    chokersNecklaces: 'Кольє',
                    sets: 'Сети',
                },
            }
        };

        $('#catAllItems').html(translations[currLang].categories.allItems);
        $('.header_notification p').html(translations[currLang].headerTop.title);
        $('.login_title').html(translations[currLang].headerTop.login_title);
        $('#ringsTestString').html(translations[currLang].categories.rings);
        $('#braceletsTestString').html(translations[currLang].categories.bracelets);
        $('#pedantsTestString').html(translations[currLang].categories.pendants);
        $('#earringsTestString').html(translations[currLang].categories.earrings);
        $('#chokersNecklacesTestString').html(translations[currLang].categories.chokersNecklaces);
        $('#setsTestString').html(translations[currLang].categories.sets);

        $('#catRingsTitle').html(translations[currLang].categories.rings)

    });
};


if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {
    langControl();

    if (getCookie('lang_val') === 'ru') {
        $('body').addClass('lang_ru');
        $('body').removeClass('lang_ua');
        $('body').removeClass('lang_en');
        $('.current-lang .lang-text').html($('#lang_ru p').html().toUpperCase());
        $('.lang-dropdown #lang_ru').hide();
        $('#lang_en').show();
        $('#lang_ua').show();
        $('.lang-dropdown').removeClass('active');
        let translations = {
            ru: {
                headerTop: {
                    title: 'SilverRain Израильская ювелирная компания с 2012 года. Все изделия из серебра произведены в Италии.',
                    login_title: 'Вход'
                },
                categories: {
                    allItems: 'Все продукты',
                    rings: 'Кольца',
                    bracelets: 'Браслеты',
                    pendants: 'Подвески',
                    earrings: 'Серьги',
                    chokersNecklaces: 'Чокеры / Ожерелья',
                    sets: 'Сеты',
                },
            }
        };

        $('#catAllItems').html(translations.ru.categories.allItems);
        $('.header_notification p').html(translations.ru.headerTop.title);
        $('.login_title').html(translations.ru.headerTop.login_title);
        $('#ringsTestString').html(translations.ru.categories.rings);
        $('#braceletsTestString').html(translations.ru.categories.bracelets);
        $('#pedantsTestString').html(translations.ru.categories.pendants);
        $('#earringsTestString').html(translations.ru.categories.earrings);
        $('#chokersNecklacesTestString').html(translations.ru.categories.chokersNecklaces);
        $('#setsTestString').html(translations.ru.categories.sets);

        $('#catRingsTitle').html(translations.ru.categories.rings);
        langControl();
    }

    if (getCookie('lang_val') === 'ua') {
        $('body').addClass('lang_ua');
        $('body').removeClass('lang_ru');
        $('body').removeClass('lang_en');
        $('.current-lang .lang-text').html($('#lang_ua p').html().toUpperCase());
        $('.lang-dropdown #lang_ua').hide();
        $('#lang_en').show();
        $('#lang_ru').show();
        $('.lang-dropdown').removeClass('active');
        let translations = {
            ua: {
                headerTop: {
                    title: 'Ювелірна компанія SilverRain Israel із 2012 року. Всі вироби зі срібла виготовлені в Італії',
                    login_title: 'Вхід',
                },
                categories: {
                    allItems: 'Усі продукти',
                    rings: 'Кільця',
                    bracelets: 'Браслети',
                    pendants: 'Підвіски',
                    earrings: 'Сережки',
                    chokersNecklaces: 'Кольє',
                    sets: 'Сети',
                },
            }
        };

        $('#catAllItems').html(translations.ua.categories.allItems);
        $('.header_notification p').html(translations.ua.headerTop.title);
        $('.login_title').html(translations.ua.headerTop.login_title);
        $('#ringsTestString').html(translations.ua.categories.rings);
        $('#braceletsTestString').html(translations.ua.categories.bracelets);
        $('#pedantsTestString').html(translations.ua.categories.pendants);
        $('#earringsTestString').html(translations.ua.categories.earrings);
        $('#chokersNecklacesTestString').html(translations.ua.categories.chokersNecklaces);
        $('#setsTestString').html(translations.ua.categories.sets);

        $('#catRingsTitle').html(translations.ua.categories.rings);
        langControl();
    }


    if (getCookie('lang_val') === 'en') {
        $('body').addClass('lang_en');
        $('body').removeClass('lang_ru');
        $('body').removeClass('lang_ua');
        $('.current-lang .lang-text').html($('#lang_en p').html().toUpperCase());
        $('.lang-dropdown #lang_en').hide();
        $('#lang_en').hide();
        $('#lang_ru').show();
        $('.lang-dropdown').removeClass('active');
        let translations = {
            en: {
                headerTop: {
                    title: 'SilverRain Israel jewelry company since 2012. All silver products made in Italy',
                    login_title: 'Login'
                },
                categories: {
                    allItems: 'All items',
                    rings: 'Rings',
                    bracelets: 'Bracelets',
                    pendants: 'Pendants',
                    earrings: 'Earrings',
                    chokersNecklaces: 'Chokers / Necklaces',
                    sets: 'Sets',
                },
            }
        };

        $('#catAllItems').html(translations.en.categories.allItems);
        $('.header_notification p').html(translations.en.headerTop.title);
        $('.login_title').html(translations.en.headerTop.login_title);
        $('#ringsTestString').html(translations.en.categories.rings);
        $('#braceletsTestString').html(translations.en.categories.bracelets);
        $('#pedantsTestString').html(translations.en.categories.pendants);
        $('#earringsTestString').html(translations.en.categories.earrings);
        $('#chokersNecklacesTestString').html(translations.en.categories.chokersNecklaces);
        $('#setsTestString').html(translations.en.categories.sets);

        $('#catRingsTitle').html(translations.en.categories.rings);
        langControl();
    }
}
