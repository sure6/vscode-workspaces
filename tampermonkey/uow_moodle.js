// @ts-nocheck

const animation_styles = {
    "bounce": "bounce",
    "flash": "flash",
    "pulse": "pulse",
    "rubberBand": "rubberBand",
    "shakeX": "shakeX",
    "shakeY": "shakeY",
    "headShake": "headShake",
    "swing": "swing",
    "tada": "tada",
    "wobble": "wobble",
    "jello": "jello",
    "heartBeat": "heartBeat",
    "backInDown": "backInDown",
    "backInLeft": "backInLeft",
    "backInRight": "backInRight",
    "backInUp": "backInUp",
    "backOutDown": "backOutDown",
    "backOutLeft": "backOutLeft",
    "backOutRight": "backOutRight",
    "backOutUp": "backOutUp",
    "bounceIn": "bounceIn",
    "bounceInDown": "bounceInDown",
    "bounceInLeft": "bounceInLeft",
    "bounceInRight": "bounceInRight",
    "bounceInUp": "bounceInUp",
    "bounceOut": "bounceOut",
    "bounceOutDown": "bounceOutDown",
    "bounceOutLeft": "bounceOutLeft",
    "bounceOutRight": "bounceOutRight",
    "bounceOutUp": "bounceOutUp",
    "fadeIn": "fadeIn",
    "fadeInDown": "fadeInDown",
    "fadeInDownBig": "fadeInDownBig",
    "fadeInLeft": "fadeInLeft",
    "fadeInLeftBig": "fadeInLeftBig",
    "fadeInRight": "fadeInRight",
    "fadeInRightBig": "fadeInRightBig",
    "fadeInUp": "fadeInUp",
    "fadeInUpBig": "fadeInUpBig",
    "fadeInTopLeft": "fadeInTopLeft",
    "fadeInTopRight": "fadeInTopRight",
    "fadeInBottomLeft": "fadeInBottomLeft",
    "fadeInBottomRight": "fadeInBottomRight",
    "fadeOut": "fadeOut",
    "fadeOutDown": "fadeOutDown",
    "fadeOutDownBig": "fadeOutDownBig",
    "fadeOutLeft": "fadeOutLeft",
    "fadeOutLeftBig": "fadeOutLeftBig",
    "fadeOutRight": "fadeOutRight",
    "fadeOutRightBig": "fadeOutRightBig",
    "fadeOutUp": "fadeOutUp",
    "fadeOutUpBig": "fadeOutUpBig",
    "fadeOutTopLeft": "fadeOutTopLeft",
    "fadeOutTopRight": "fadeOutTopRight",
    "fadeOutBottomRight": "fadeOutBottomRight",
    "fadeOutBottomLeft": "fadeOutBottomLeft",
    "flip": "flip",
    "flipInX": "flipInX",
    "flipInY": "flipInY",
    "flipOutX": "flipOutX",
    "flipOutY": "flipOutY",
    "lightSpeedInRight": "lightSpeedInRight",
    "lightSpeedInLeft": "lightSpeedInLeft",
    "lightSpeedOutRight": "lightSpeedOutRight",
    "lightSpeedOutLeft": "lightSpeedOutLeft",
    "rotateIn": "rotateIn",
    "rotateInDownLeft": "rotateInDownLeft",
    "rotateInDownRight": "rotateInDownRight",
    "rotateInUpLeft": "rotateInUpLeft",
    "rotateInUpRight": "rotateInUpRight",
    "rotateOut": "rotateOut",
    "rotateOutDownLeft": "rotateOutDownLeft",
    "rotateOutDownRight": "rotateOutDownRight",
    "rotateOutUpLeft": "rotateOutUpLeft",
    "rotateOutUpRight": "rotateOutUpRight",
    "hinge": "hinge",
    "jackInTheBox": "jackInTheBox",
    "rollIn": "rollIn",
    "rollOut": "rollOut",
    "zoomIn": "zoomIn",
    "zoomInDown": "zoomInDown",
    "zoomInLeft": "zoomInLeft",
    "zoomInRight": "zoomInRight",
    "zoomInUp": "zoomInUp",
    "zoomOut": "zoomOut",
    "zoomOutDown": "zoomOutDown",
    "zoomOutLeft": "zoomOutLeft",
    "zoomOutRight": "zoomOutRight",
    "zoomOutUp": "zoomOutUp",
    "slideInDown": "slideInDown",
    "slideInLeft": "slideInLeft",
    "slideInRight": "slideInRight",
    "slideInUp": "slideInUp",
    "slideOutDown": "slideOutDown",
    "slideOutLeft": "slideOutLeft",
    "slideOutRight": "slideOutRight",
    "slideOutUp": "slideOutUp"
};

// create Nav item in Moodle
function createNavItem(title, url) {
    let $sols = $("<li></li>");
    $sols.addClass("nav-item");

    let $a_sols = $("<a>" + title + "<a>")
    $a_sols.addClass("nav-item nav-link")
    $a_sols.attr({ target: "_blank", href: url })

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

function customUserText(bias = '(leesure)') {

    // modity user text style
    $('.usertext').css({ color: "red" })
    $('.usertext').css({ "font-weight": "bold" })

    //add bias name
    let $spanBais = $('<span></span>');
    $spanBais.css({ color: 'red', "font-weight": "bold" });
    $spanBais.addClass("usertext mr-1");
    $spanBais.html(bias);
    $('.usertext').after($spanBais);
}

// modify logo in Moodle
function modifyModdleLogo(url = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png", href = "https://www.google.com/") {
    // modify logo
    let $logImage = $('.logo').first().children().first();
    $logImage.attr({ src: url })
    // modify address
    $(".navbar-brand").first().attr({ href: href, target: "_blank" })
}


function modifyWords(name = "hello world", speed = 3, animation_style = "animate__backInDown") {
    $h1Title = $("<h1>" + name + "</h1>");
    $h1Title.addClass("animate__animated animate__" + animation_style + " animate__infinite");
    $h1Title.attr("id", "motto")
    $h1Title.css({ "font-size": "30px", "text-align": "center", color: "red", "line-height": "120px", "font-weight": "bold" })
    // 自定义动画速度
    $("head").append(`
    <style>
    #motto {
        --animate-duration: `+ speed + `s;
      }
    </style>
    `);
    $('.customimage').first().append($h1Title);

}

(function () {
    'use strict';

    $("head").append($(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>`));

    // judge window .origin
    let isMoodle = window.origin == 'https://moodle.uowplatform.edu.au';


    if (isMoodle) {
        // highlight all item
        opearation($('.courseovbox'));
        opearation($('.dropdown-item'));

        customUserText();

        createNavItem("Sols", "https://solss.uow.edu.au/sid/sols_app_entry.initial_display?p_session_id=&p_student_number=6732409&p_cs=24189084001212943044");
        createNavItem("UOW", "https://www.uow.edu.au");
        createNavItem("Outlook", "https://outlook.office.com/mail/");
        createNavItem("One Drive", "https://uowmailedu-my.sharepoint.com/personal/xl090_uowmail_edu_au/_layouts/15/onedrive.aspx?login_hint=xl090%40uowmail%2Eedu%2Eau");

        modifyModdleLogo();

        modifyWords("Time and tide wait for no man.", 3.5, animation_styles["animate__rubberBand"]);
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
