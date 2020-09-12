const translationsControl = () => {
    const translations = {
        'en': {
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
            pageTitle: {
                products: 'Our products'
            }
        },
        'ru': {
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
            pageTitle: {
                products: 'Продукты'
            }
        },
        'ua': {
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
            pageTitle: {
                products: 'Продукти'
            }
        }
    };

    // console.log(getCookie(languageCookieName))

    const currLang = getCookie(languageCookieName);

    $('#categoryAllItems').html(translations[currLang].categories.allItems);
    $('.header_notification p').html(translations[currLang].headerTop.title);
    $('.login_title').html(translations[currLang].headerTop.login_title);
    $('#ringsCategory').html(translations[currLang].categories.rings);
    $('#braceletsCategory').html(translations[currLang].categories.bracelets);
    $('#pedantsCategory').html(translations[currLang].categories.pendants);
    $('#earringsCategory').html(translations[currLang].categories.earrings);
    $('#chokersNecklacesCategory').html(translations[currLang].categories.chokersNecklaces);
    $('#setsCategory').html(translations[currLang].categories.sets);

    document.querySelector('.products-page .article-level-3').textContent = translations[currLang].pageTitle.products;
}

if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {
    translationsControl();
}
