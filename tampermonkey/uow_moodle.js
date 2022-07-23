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

/*
(function() {
    'use strict';

    // definite opearation by mouse event
    function opearation(liitems){
        for(var i=0; i<liitems.length; i++){
            liitems[i].onmouseover=function(){
                this.style.backgroundColor='SkyBlue';
            }
            liitems[i].onmouseout=function(){
                this.style.backgroundColor=null;
            }
        }
    }
    // judge window .origin
    var isMoodle=window.origin=='https://moodle.uowplatform.edu.au';
    // highlight all item
    var courseList=document.querySelectorAll('.courseovbox');
    var dropdownlist= document.querySelectorAll('.dropdown-item');
    var usertext=document.querySelector('.usertext')
    if(isMoodle){
        opearation(courseList);
        opearation(dropdownlist);

        // modity text style
        usertext.style.color='red';
        usertext.style.fontWeight='1000';

        //add bias name
        var spanBais = document.createElement('span');
        spanBais.setAttribute('style','color:red;font-weight:1000;');
        spanBais.innerText='(leesure)';
        usertext.after(spanBais);
    }
})();
*/