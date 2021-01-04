/*
 * BootExel Theme v1.0
 * http://uexel.us/
 *
 * Copyright 2013, uexel
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

/*************************Background Video**************************/
$(document).ready(function() {
    $('dl').toggle();
    $('h2').bind('click', function(event) {
        event.preventDefault();
        $(this).next('dl').slideToggle(500, function() {
            $('.video-background').videobackground('resize');
        });
    });
    $('#video-main').prepend('<div class="video-background"></div>');
    $('.video-background').videobackground({
        videoSource: [['img/1.mp4', 'video/mp4']],
        controlPosition: '#main',
        loadedCallback: function() {
            $(this).videobackground('mute');
        }
    });
});

/*************************Sticky Nav**************************/
var cbpAnimatedHeader = (function() {
    var b = document.documentElement, g = document.querySelector("#header"), e = false, a = 400;
    function f() {
        window.addEventListener("scroll", function(h) {
            if (!e) {
                e = true;
                setTimeout(d, 100)
            }
        }, false)
    }
    function d() {
        var h = c();
        if (h >= a) {
            classie.add(g, "header-shrink")
        } else {
            classie.remove(g, "header-shrink")
        }
        e = false
    }
    function c() {
        return window.pageYOffset || b.scrollTop
    }
    f()
})();
/*************************Page Animation**************************/
jQuery(document).ready(function() {
    jQuery('.animate').addClass("visible").viewportChecker({
        classToAdd: 'visible animated fadeInUp', // Class to add to the elements when they are visible
        offset: 100
    });
}); 
jQuery(document).ready(function() {
    jQuery('.animate1').addClass("visible").viewportChecker({
        classToAdd: 'visible animated bounceInUp', // Class to add to the elements when they are visible
        offset: 100
    });
}); 
jQuery(document).ready(function() {
    jQuery('.animate2').addClass("visible").viewportChecker({
        classToAdd: 'visible animated bounceInLeft', // Class to add to the elements when they are visible
        offset: 100
    });
}); 
jQuery(document).ready(function() {
    jQuery('.animate3').addClass("visible").viewportChecker({
        classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
        offset: 100
    });
}); 
jQuery(document).ready(function() {
    jQuery('.animate4').addClass("visible").viewportChecker({
        classToAdd: 'visible animated fadeInLeft', // Class to add to the elements when they are visible
        offset: 100
    });
}); 