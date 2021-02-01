(function ($) {

    "use stict";

    var position = $(window).scrollTop();

    stopAnimateOnScroll();
    setDataNumberForSections();
    setTotalPageNumber();
    setCircleSkills();
    setHorizontalSkills();
    setSlowScroll();
    setActiveMenuItem();


    $(window).on('load', function () {
        $('#toggle').on("click", multiClickFunctionStop);
        setMenu();
        setHash();
        $('.doc-loader').fadeOut();
    });

    $(window).on('resize', function () {
        setCircleSkills();
        setHorizontalSkills();
        setActiveMenuItem();
    });

    $(window).on('scroll', function () {
        setCircleSkills();
        setHorizontalSkills();
        setActiveMenuItem();
    });

//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------

    function stopAnimateOnScroll() {
        $("html, body").on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
            $("html, body").stop();
        });
    }

    function setSlowScroll() {
        $('#header-main-menu ul li a[href^="#"], a.button, .slow-scroll').on("click", function (e) {
            if ($(this).attr('href') === '#')
            {
                e.preventDefault();
            } else {
                if ($(window).width() < 1360) {
                    if (!$(e.target).is('.sub-arrow')) {
                        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1500);
                        $('body').removeClass("open done");
                        $('#toggle').removeClass('on');
                        return false;
                    }
                } else {
                    $('html, body').animate({scrollTop: $(this.hash).offset().top}, 1500);
                    return false;
                }
            }
        });
    }


    function setActiveMenuItem() {
        var currentSection = null;
        var c = $('.content-right .section.section-active').data("num");
        var scroll = $(window).scrollTop();
        $('.section').each(function () {
            var element = $(this).attr('id');
            if ($('#' + element).is('*')) {
                if ($(window).scrollTop() >= $('#' + element).offset().top - 150) {
                    currentSection = element;
                }
            }
        });
        $('#header-main-menu ul li').removeClass('current').find('a[href*="#' + currentSection + '"]').parent().addClass('current');
        $('.content-right .section').removeClass('section-active');
        $('#' + currentSection).addClass('section-active');

        if (c !== $('#' + currentSection).data("num")) {
            c = $('#' + currentSection).data("num");
            $('.current-num span').animate({"opacity": '0', "left": "-5px"}, 150, function () {
                $(this).text(c).animate({"opacity": '1', "left": "0"}, 150);
                $('.current-big-num').text(c).data("num");
            });
        }

        position = scroll;
    }

    function setTotalPageNumber() {
        $('.total-pages-num').html(('0' + $('.content-right .section').length).slice(-2));
    }

    function setDataNumberForSections() {
        var k = 1;
        $('.content-right .section').each(function () {
            $(this).data('num', ('0' + k).slice(-2));
            k++;
        });
    }

    function setCircleSkills() {
        $(".skill-circle-wrapper:not(.animation-done)").each(function () {
            $(this).circleProgress({
                value: $(this).data("value"),
                size: 254,
                fill: $(this).data("color"),
                startAngle: -Math.PI / 2,
                thickness: 45,
                emptyFill: $(this).data("empty-color"),
                reverse: true
            });
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if ((bottom_of_window - 70) > top_of_object) {
                $(this).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('.skill-circle-num').html(Math.round(100 * stepValue.toFixed(2).substr(1)) + '%');
                });
                $(this).addClass('animation-done');
            }
        });
    }

    function setHorizontalSkills() {
        $(".skill-fill:not(.animation-done").each(function (i) {
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if ((bottom_of_window - 70) > top_of_object) {
                $(this).width($(this).data("fill"));
                $(this).addClass('animation-done');
            }
        });
    }

    function setHash() {
        var hash = location.hash;
        if ((hash !== '') && ($(hash).length))
        {
            $('html, body').animate({scrollTop: $(hash).offset().top}, 1);
            $('html, body').animate({scrollTop: $(hash).offset().top}, 1);
        } else {
            $(window).scrollTop(1);
            $(window).scrollTop(0);
        }
    }

    function setMenu() {
        $('.main-menu').smartmenus({
            subMenusSubOffsetX: 1,
            subMenusSubOffsetY: -8
        });
    }

    function multiClickFunctionStop(e) {
        e.preventDefault();
        $('#toggle').off("click");
        $('#toggle').toggleClass("on");
        $('body').toggleClass("open").delay(300).queue(function (next) {
            $(this).toggleClass("done");
            $('#toggle').on("click", multiClickFunctionStop);
            next();
        });
    }
})(jQuery);