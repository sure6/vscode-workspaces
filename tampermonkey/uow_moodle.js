// @ts-nocheck

// create Sols item in Moodle
function createSolsItem() {
    let $sols = $("<li></li>");
    $sols.addClass("nav-item");

    let $a_sols = $("<a>Sols<a>")
    $a_sols.addClass("nav-item nav-link")
    $a_sols.attr({ target: "_blank", href: "https://solss.uow.edu.au/sid/sols_app_entry.initial_display?p_session_id=&p_student_number=6732409&p_cs=24189084001212943044" })

    $a_sols.first().appendTo($sols);

    $(".navbar-nav").first().append($sols);

}

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

// modify logo in Moodle
function modifyModdleLogo(){
    // modify logo
   let $logImage = $('.logo').first().children().first();
   $logImage.attr({src:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"})
    // modify address
   $(".navbar-brand").first().attr({href:"https://www.google.com/", target:"_blank"})
}

(function () {
    'use strict';

    // judge window .origin
    let isMoodle = window.origin == 'https://moodle.uowplatform.edu.au';


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

    createSolsItem();
    modifyModdleLogo()



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