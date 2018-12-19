var xname = "";
var yname = "";

function spawnLinks() {
    var x = document.getElementById("navb");
    var y = document.getElementById("navwrap");
    if (x.className === "navb" || x.className === "navb solid") {
        xname = x.className;
        yname = y.className;
        x.className += " uncollapsed";
        y.className += " uncollapsed";
    } else {
        x.className = xname;
        y.className = yname;
    }
}

$(document).ready(function () {
    // Transition effect for navbar
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                        ;
                    });
                }
            }
        });
    let ftr = $('.foot-svg-2');
    let ftc = $('.foot-svg-1');
    var scp = -1;
    var scp2 = -1;
    let start = 300;
    let start2 = 500;
    let lg = $('#lg');
    let rg = $('#rg');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navb').addClass('solid');
            $('.wrapper').addClass('solid');
        } else {
            $('.navb').removeClass('solid');
            $('.wrapper').removeClass('solid');
        }
        var scroll = $(this).scrollTop();
        if (scp === -1) {
            scp = ftr.offset().top;
            scp2 = ftc.offset().top;
        }
        if (scp - scroll > 400 + start) {
            ftr.css("transform", "translateY(200px)");
        }
        else if (scp - scroll > start) {
            ftr.css("transform", "translateY(" + ((scp - scroll) - start) / 2 + "px)");
        }
        else {
            ftr.css("transform", "translateY(0px)");
        }

        if (scp2 - scroll > 200 + start2) {
            ftc.css("transform", "translateY(200px)");
        }
        else if (scp2 - scroll > start2) {
            ftc.css("transform", "translateY(" + ((scp2 - scroll) - start2) + "px)");
        }
        else {
            ftc.css("transform", "translateY(0px)");
        }
        lg.css("transform", "translateY(-" + scroll + "px)");
        rg.css("transform", "translateY(-" + scroll + "px)");
    });
});