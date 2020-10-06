'use strict';
$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $("nav.navigation-bar").toggleClass('navigation-bar-visible');
        //toggles the menu icon with the cross icon
        // $('i.fa-bars').toggleClass('fa-times');
    });

    //    Code to show more details
    // let clickOutside = $(EventTarget).closest('.navigation-bar').length == 0;
    // if (clickOutside && $("nav.navigation-bar").hasClass('navigation-bar-visible')) {
    //     $body.removeClass('navigation-bar-visible');
    // }

    let $html = $('html');
    $html.on('click', function (event) {
        let clickedOutside = $(event.target).closest('header').length == 0;
        if (clickedOutside && $("nav.navigation-bar").hasClass('navigation-bar-visible')) {
            console.log('hey hey')
            $("nav.navigation-bar").removeClass('navigation-bar-visible');
        }
    })
    $('.more-information h2').click(function () {
        $(this).parent().toggleClass('expand');
    })

});
