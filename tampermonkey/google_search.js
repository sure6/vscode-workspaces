// @ts-nocheck

(function () {
    'use strict';

    let isGoogle = location.origin == 'https://www.google.com';

    const images = [
        `https://variety.com/wp-content/uploads/2019/02/pubg-mobile-1.png`,
        `https://cdn.mos.cms.futurecdn.net/Tqq3BVZZAkbUyGvZmSfjQW.jpg`,
        `https://editors.dexerto.com/wp-content/uploads/2021/12/14/league-of-legends-2022-patch-schedule-all-lol-season-12-updates-changes.jpg`,
        `https://www.riotgames.com/darkroom/1440/08bcc251757a1f64e30e0d7e8c513d35:be16374e056f8268996ef96555c7a113/wr-cb1-announcementarticle-banner-1920x1080.png`,
        `https://coolhdwall.com/storage/202101/pubg-frying-pan-playerunknowns-battlegrounds-4K-wallpaper-pc-preview.jpg`,
        `https://www.avenga.com/wp-content/uploads/2021/09/dota-2-header.jpeg`,
    ]
   
     //change button  in google search home page
     function changeButtonStyle(selector,num,styleObj){
        if ($(selector).get(num) && isGoogle) {
            $(selector).eq(num).css(styleObj);
        }
    }


    //change background image in google search home page
    function changeBodyBackgrond(selector="body"){

        if (isGoogle && location.pathname == '/') {

            $(selector).css({
                "width":"100%",
                "height":"100%",
                "background-image": "url(" + images[Math.floor(Math.random() * images.length)] + ")",
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            })

            setInterval(()=>{
                $(selector).css({
                    "width":"100%",
                    "height":"100%",
                    "background-image": "url(" + images[Math.floor(Math.random() * images.length)] + ")",
                    "background-repeat": "no-repeat",
                    "background-size": "100% 100%"
                })
            },5000)
        }
    
    }

    changeButtonStyle('.gNO89b',1,{"background-color":"palegreen"});
    changeButtonStyle('.RNmpXc',1,{"background-color":"LightSkyBlue"});
    changeBodyBackgrond();
    

    // hightlight tap control for google search
    if ($('hdtb-mitem') && isGoogle) {

        let $listBtn = $('.hdtb-mitem');

        $.each($listBtn,function(i, value){
            if (i == 0) {
                $(value).on("mouseover", function () {
                    $(this).css({"background-color":"Aqua"})
                })
                $(value).on("mouseout",function () {
                    $(this).css({"background-color":""})
                })
                return;
            }
            if (i == 5) {
                $('.GOE98c').first().on("mouseover", function () {
                    $(this).css({"background-color":"Aqua"})
                })
                $('.GOE98c').first().on("mouseout", function () {
                    $(this).css({"background-color":""})
                })
                return;
            }
            $(value).children().first().on("mouseover", function () {
                $(this).css({"background-color":"Aqua"})
            })
            $(value).children().first().on("mouseout", function () {
                $(this).css({"background-color":""})
            })
        })

    }

    // change google logo to uow logo
    if (isGoogle) {
        $('.logo a img').attr({src: 'https://www.uow.edu.au/assets/uow-channel/public/site-assets/images/logo/logo.svg',height:80});
        $('.logo a').attr('taget', 80);
    }

    // highlight content list searched
    let $contenlist = $('.LC20lb');
    if (isGoogle && $contenlist) {
        
        $.each($contenlist,function (i,value) { 
            $(value).on("mouseover",function(){
                $(this).css({"background-color":"SkyBlue"});
            })
            $(value).on("mouseout",function(){
                $(this).css({"background-color":""});
            })
        })
       
        // add target='_blank' for a tags in google
        $('a').each(function (i,value) {
            $(value).attr({target:'_blank'})
        })

    }

    // 在google首页上加入快捷课程
    function addMoodleCourse(text,href){
        $gb_e = $("<div></div>")
        $gb_e.addClass("gb_e gb_f")
        $gb_d = $("<a>"+text+"</a>")
        $gb_d.addClass("gb_d")
        $gb_d.attr({
            "data-pid":"23",
            href: href,
            target:"_blank"
        })
        
        $gb_d.appendTo( $gb_e)
        console.log($gb_e);
        $('.gb_e')[0].before($gb_e.get(0))
        $('.gb_d').css({
            "color":"red",
            "font-weight":"bold"
        })
    }

    addMoodleCourse("moodle","https://moodle.uowplatform.edu.au/my/")
    addMoodleCourse("CSIT985","https://moodle.uowplatform.edu.au/course/view.php?id=33234")
    addMoodleCourse("CSCI935","https://moodle.uowplatform.edu.au/course/view.php?id=33193")
    addMoodleCourse("CSIT998","https://moodle.uowplatform.edu.au/course/view.php?id=33017")
    addMoodleCourse("CSCI927","https://moodle.uowplatform.edu.au/course/view.php?id=33534")
    addMoodleCourse("CSCI946","https://moodle.uowplatform.edu.au/course/view.php?id=33013")
    
    

})();

/*
 // Deprecated

(function () {
    'use strict';
   
    const images = [
        `https://variety.com/wp-content/uploads/2019/02/pubg-mobile-1.png`,
        `https://cdn.mos.cms.futurecdn.net/Tqq3BVZZAkbUyGvZmSfjQW.jpg`,
        `https://editors.dexerto.com/wp-content/uploads/2021/12/14/league-of-legends-2022-patch-schedule-all-lol-season-12-updates-changes.jpg`,
        `https://www.riotgames.com/darkroom/1440/08bcc251757a1f64e30e0d7e8c513d35:be16374e056f8268996ef96555c7a113/wr-cb1-announcementarticle-banner-1920x1080.png`,
        `https://coolhdwall.com/storage/202101/pubg-frying-pan-playerunknowns-battlegrounds-4K-wallpaper-pc-preview.jpg`,
        `https://www.avenga.com/wp-content/uploads/2021/09/dota-2-header.jpeg`,

    ]
    
    //start
    var google = window.location.origin == 'https://www.google.com'


    //change button and background image in google search home page
    if (document.getElementsByClassName('gNO89b')[1] && google) {
        document.getElementsByClassName('gNO89b')[1].style.backgroundColor = 'PaleGreen';
    }
    if (document.getElementsByClassName('RNmpXc')[1] && google) {
        document.getElementsByClassName('RNmpXc')[1].style.backgroundColor = 'LightSkyBlue';
    }
    if (google && window.location.pathname == '/') {

        // document.body.style.background = 'url("' + images[Math.floor(Math.random() * images.length)] + '") no-repeat center 100%';
        $("body").css({
            "width":"100%",
            "height":"100%",
            "background-image": "url(" + images[Math.floor(Math.random() * images.length)] + ")",
            "background-repeat": "no-repeat",
            "background-size": "100% 100%"
        })
      

    }

    // hightlight tap control for google search
    if (document.getElementsByClassName('hdtb-mitem') && google) {

        var listBtn = document.getElementsByClassName('hdtb-mitem');

        for (var i = 0; i < 6; i++) {
            if (i == 0) {
                listBtn[i].onmouseover = function () {
                    this.style.backgroundColor = 'Aqua';
                }
                listBtn[i].onmouseout = function () {
                    this.style.backgroundColor = null;
                }
                continue;
            }
            if (i == 5) {
                document.getElementsByClassName('GOE98c')[0].onmouseover = function () {
                    this.style.backgroundColor = 'Aqua';
                }
                document.getElementsByClassName('GOE98c')[0].onmouseout = function () {
                    this.style.backgroundColor = null;
                }
                continue;
            }
            listBtn[i].childNodes[0].onmouseover = function () {
                this.style.backgroundColor = 'Aqua';
            }
            listBtn[i].childNodes[0].onmouseout = function () {
                this.style.backgroundColor = null;
            }
        }

    }

    // change google logo to uow logo
    if (google) {
        document.querySelector('.logo a img').setAttribute('src', 'https://www.uow.edu.au/assets/uow-channel/public/site-assets/images/logo/logo.svg');
        document.querySelector('.logo a img').setAttribute('height', 80);
        document.querySelector('.logo a').setAttribute('taget', 80);
    }

    // highlight content list searched
    var contenlist = document.querySelectorAll('.LC20lb');
    if (google && contenlist.length) {

        for (var k = 0; k < contenlist.length; k++) {
            contenlist[k].onmouseover = function () {
                this.style.backgroundColor = 'SkyBlue';
            }
            contenlist[k].onmouseout = function () {
                this.style.backgroundColor = null;
            }

        }


        // add target='_blank' for a tags in google
        var allAtags = document.querySelectorAll('a');
        for (var x = 0; x < allAtags.length; x++) {

            allAtags[x].setAttribute('target', '_blank');
        }

    }
})();
*/

