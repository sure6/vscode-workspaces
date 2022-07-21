// @ts-nocheck

(function () {
    'use strict';

    // judge window .origin
    let isMoodle = window.origin == 'https://moodle.uowplatform.edu.au';
    
    // definite opearation by mouse event
    function opearation(liitems) {
        $.each(liitems, function (i, value) {
            $(value).on("mouseover", function () {
                $(this).css({ "background-color": "SkyBlue" })
            });
            $(value).on("mouseout", function () {
                $(this).css({ "background-color": "" })
            });
        });
    }

    if (isMoodle) {
         // highlight all item
        opearation($('.courseovbox'));
        opearation($('.dropdown-item'));

        // modity text style
        $('.usertext').css({ color: "red" })
        $('.usertext').css({ "font-weight": "1000" })

        //add bias name
        let $spanBais = $('<span></span>');
        $spanBais.attr({ style: 'color:red;font-weight:1000;' });
        $spanBais.html('(leesure)');
        $('.usertext').after($spanBais);
    }

})();