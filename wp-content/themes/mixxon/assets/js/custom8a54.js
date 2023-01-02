(function ($) {
    "use strict";

    jQuery(document).ready(function($){

        //Mobile Menu
        $("#primary-menu").slicknav({
            allowParentLinks: false,
            prependTo: '#mobile-menu-wrap',
            label: '',
            closedSymbol: '',
            openedSymbol:''
        });

        //Sticky Menu
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 100) {
                $(".site-header ").removeClass("sticky-header slideInDown animated");
            } else {
                $(".site-header").addClass("sticky-header slideInDown animated");
            }
        });

    });

    /*====  Window Load Function =====*/
    jQuery(window).on('load', function() {

        // preloader js
        $('.preloader').fadeOut(500);
    });
}(jQuery));