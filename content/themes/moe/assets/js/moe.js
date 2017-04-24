/**
 * Main JS file for Casper behaviours
 */


/**
 * DEBUG STUFF
 */


/*
List of classes triggers to use....
$(".loading-screen").addClass("section-loaded");
$(".title-slice").addClass("opened-slices");
$(".video-container").addClass("display-video");

*/





/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {
        
        if(window.location.pathname != "/landing/") {

            console.log("the last saved sessionstorage value is: " + sessionStorage.getItem('introSkip'));
            //sessionStorage.clear(); for DEBUG onry

            var $postContent = $(".post-content");
            $postContent.fitVids();

            $(".scroll-down").arctic_scroll();

            $(".menu-button, .nav-cover, .nav-close").on("click", function(e){
                e.preventDefault();
                $("body").toggleClass("nav-opened nav-closed");
            });

            //custom stuff 

            for(var i = 0;i<$("article h2 a").length;i++){

                var linkStr = $('article h2 a:eq("'+i+'")').attr("href");

                if(linkStr.match("-lg") != null) {
                    //console.log("one of the links includes the keyword!");
                    $('article:eq("'+i+'")').addClass("grid-element-lg");

                }else if(linkStr.match("-md") != null){
                    //console.log("one of the links includes the keyword!");
                    $('article:eq("'+i+'")').addClass("grid-element-md");
                    
                }else if(linkStr.match("-sm") != null) {
                    //console.log("one of the links includes the keyword!");
                    $('article:eq("'+i+'")').addClass("grid-element-sm");

                }else{
                    console.log("OUT OF LUCK!");
                }
                
            }

        }

    });

    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };
})(jQuery);
