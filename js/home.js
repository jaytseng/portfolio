$(document).ready(function () {
    console.log("home.js loaded");

    $(".navbar-brand").click(function (e) {
        e.preventDefault();
        $(window).scrollTo('.jumbotron', 600);
        console.log("navbar-brand selected");
    })

    $(".nav-design").click(function (e) {
        e.preventDefault();
        $(window).scrollTo('.design', 600);
        console.log("navbar-design selected");
    })

    $(".nav-media").click(function (e) {
        e.preventDefault();
        $(window).scrollTo('.media', 600);
        console.log("navbar-media selected");
    })

    $(".nav-about").click(function (e) {
        e.preventDefault();
        $(window).scrollTo('.about', 600);
    })

    $(".nav-contact").click(function (e) {
        e.preventDefault();
        $(window).scrollTo('.contact', 600);
    })

    $("#scrollDown").click(function (e) {
        e.preventDefault();
        $(window).scrollTo('.design', 600);
        console.log("navbar-brand selected");
    })

    //TYPING EFFECT

    // PARALLAX 
    var jumboHeight = $('.jumbotron').outerHeight() - 20;

    function parallax() {
        var scrolled = $(window).scrollTop();
        $('.bg-img').css('height', (jumboHeight - scrolled + 20) + 'px');
    }

    $(window).scroll(function (e) {
        parallax();
    });

    //SCROLLING DOWN MENU POPUP
    $(window).scroll(function () {
        if ($(this).scrollTop() > window.innerHeight - 40) {
            $('.active-nav').fadeIn(500);
        } else {
            $('.active-nav').fadeOut(500);
        }
    });

    //MANUALLY TRIGGERING SCROLL EVENT
    $(window).trigger('scroll');

    //SCROLLSPY
    $("body").scrollspy({
        target: "#myNavbar",
        offset: 20
    })

    //OTHER SHIZ
    var resumeBtnState = false;
    $(".resume-button").click(function (e) {
        if (resumeBtnState == false) {
            e.preventDefault();
            $('.resume-shell').fadeIn();
            $('.resume-button-text').html("Hide Resume");
            resumeBtnState = true;
        } else {
            e.preventDefault();
            console.log("show resume")
            $('.resume-button-text').html("Show Technical Specs (Resume)");
            $('.resume-shell').fadeOut();
            resumeBtnState = false;
        }
    })



});