/*global $*/
$(document).ready(function () {
    'use strict';
    //nice scroll
    $("html").niceScroll();
    $('.carousel').carousel({
        interval: 3500
    });
    //show color optin div when click on gear
    $(".gear-check").click(function () {
        $(".color-option").slideToggle();
        
    });
    
    //Change theme color on click 
    var colorLi = $(".color-option ul li"), scrollButton = $('#scroll-top');
    colorLi.eq(0).css("backgroundColor", "#E41B17").end().eq(1).css("backgroundColor", "#E426D5").end().eq(2).css("backgroundColor", "#009AFF").end().eq(3).css("backgroundColor", "#A19A0D");
    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    //scroll-top
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 700) {
            scrollButton.show(1000);
        } else {
            scrollButton.hide(1000);
        }
    });
    scrollButton.click(function () {
        $("html,body").animate({scrollTop: 0}, 1500);
    });
});

//loading screen
$(window).on('load', function () {
    "use strict";
    $(".loading-overlay .spinner").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(1500, function () {
            $(this).remove();
        });
    });
    
});