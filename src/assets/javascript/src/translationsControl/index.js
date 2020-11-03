@@include('translationsObject.js');
const translationsControl = () => {
    const currentLanguage = getCookie(languageCookieName);

    $('.categoryAllItems').html(translations[currentLanguage].categories.allItems);
    // $('.header_notification p').html(translations[currentLanguage].headerTop.title);
    $('.login_title').html(translations[currentLanguage].headerTop.login_title);
    $('.ringsCategory').html(translations[currentLanguage].categories.rings);
    $('.braceletsCategory').html(translations[currentLanguage].categories.bracelets);
    $('.pedantsCategory').html(translations[currentLanguage].categories.pendants);
    $('.earringsCategory').html(translations[currentLanguage].categories.earrings);
    $('.chokersNecklacesCategory').html(translations[currentLanguage].categories.chokersNecklaces);
    $('.setsCategory').html(translations[currentLanguage].categories.sets);
    $('#productsPageTitle').html(translations[currentLanguage].pageTitle.products);
    $('.checkout-page_title').html(translations[currentLanguage].pageTitle.checkout);
    $('#tabProductDescription').html(translations[currentLanguage].productTabs.description);
    $('#tabShipping').html(translations[currentLanguage].productTabs.shipping);
    $('#tabMaterial').html(translations[currentLanguage].productTabs.material);
    $('#productPageCode').html(translations[currentLanguage].productFields.productPageCode);
    $('#addProductToCart').html(translations[currentLanguage].productFields.addToCart);
    $('#quantityLabel').html(translations[currentLanguage].productFields.quantity);

    $('#customerServiceString').html(translations[currentLanguage].footer.customerServicePage);
    $('#aboutUsString').html(translations[currentLanguage].footer.aboutUsPage);
    $('.privacy-policy').html(translations[currentLanguage].footer.privacyPolicyPage);
    $('#allRightsString').html(translations[currentLanguage].footer.copyright);
    $('#mySidenav .categories .title').html(translations[currentLanguage].other.mobSidenavCategoriesTitle);
    $('#mySidenav .login-title').html(translations[currentLanguage].headerTop.login_title);

    $('.about-us_title').html(translations[currentLanguage].footer.aboutUsPage)
    $('.customer-service_title').html(translations[currentLanguage].footer.customerServicePage)
    $('.privacy-policy_title').html(translations[currentLanguage].footer.privacyPolicyPage)
    $('.main-page_title').html(translations[currentLanguage].pageTitle.mainPage)


    $('.response_success .title').html(translations[currentLanguage].other.paymentSuccessTitle)
    $('.response_success .text').html(translations[currentLanguage].other.paymentSuccessText)

    $('.response_error .title').html(translations[currentLanguage].other.paymentFailedTitle)
    $('.response_error .text').html(translations[currentLanguage].other.paymentFailedText)
    $('.main-page_text').html(translations[currentLanguage].pageTitle.mainPage)
}

if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {
    translationsControl();
}
