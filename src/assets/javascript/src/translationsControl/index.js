@@include('translationsObject.js');
const translationsControl = () => {
    const currentLanguage = getCookie(languageCookieName);

    // Mobile start

    $('#mob_categoryAllItems').html(translations[currentLanguage].categories.allItems);
    $('#mob_ringsCategory').html(translations[currentLanguage].categories.rings);
    $('#mob_braceletsCategory').html(translations[currentLanguage].categories.bracelets);
    $('#mob_pedantsCategory').html(translations[currentLanguage].categories.pendants);
    $('#mob_earringsCategory').html(translations[currentLanguage].categories.earrings);
    $('#mob_chokersNecklacesCategory').html(translations[currentLanguage].categories.chokersNecklaces);
    $('#mob_setsCategory').html(translations[currentLanguage].categories.sets);

    // Mobile end


    $('#categoryAllItems').html(translations[currentLanguage].categories.allItems);
    $('.header_notification p').html(translations[currentLanguage].headerTop.title);
    $('.login_title').html(translations[currentLanguage].headerTop.login_title);
    $('#ringsCategory').html(translations[currentLanguage].categories.rings);
    $('#braceletsCategory').html(translations[currentLanguage].categories.bracelets);
    $('#pedantsCategory').html(translations[currentLanguage].categories.pendants);
    $('#earringsCategory').html(translations[currentLanguage].categories.earrings);
    $('#chokersNecklacesCategory').html(translations[currentLanguage].categories.chokersNecklaces);
    $('#setsCategory').html(translations[currentLanguage].categories.sets);
    $('#productsPageTitle').html(translations[currentLanguage].pageTitle.products);
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

}

if (window.location.pathname !== '/admin.html' && window.location.pathname !== '/admin-panel.html') {
    translationsControl();
}
