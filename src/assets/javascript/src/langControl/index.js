const langControl = () => {
    let currLang = window.location.search.slice(-2);

    if (currLang !== "") {
        console.log('current lang code is: ' + currLang);
        $('body').addClass('lang_' + currLang);
        $('.current-lang .lang-text').html(currLang);
        $(`.current-lang #lang_${currLang}`).html(currLang);
        $(`.lang-dropdown #lang_${currLang}`).hide();
    } else {
        currLang = 'en';
        console.log('current lang code is en')
    }


    let translations = {
        en: {
            headerTop: {
                title: 'SilverRain Israel jewelry company since 2012. All silver products made in Italy',
                login_title: 'Login'
            },
            categories: {
                rings: 'Rings',
                bracelets: 'Bracelets',
                pendants: 'Pendants',
                earrings: 'Earrings',
                chokersNecklaces: 'Chokers / Necklaces',
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
            },
        }
    };

    $('.header_notification p').html(translations[currLang].headerTop.title);
    $('.login_title').html(translations[currLang].headerTop.login_title);
    $('#ringsTestString').html(translations[currLang].categories.rings);
    $('#braceletsTestString').html(translations[currLang].categories.bracelets);
    $('#pedantsTestString').html(translations[currLang].categories.pendants);
    $('#earringsTestString').html(translations[currLang].categories.earrings);
    $('#chokersNecklacesTestString').html(translations[currLang].categories.chokersNecklaces);
};

//langControl();