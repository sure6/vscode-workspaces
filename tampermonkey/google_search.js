
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
   
   
    let isGoogle = location.origin == 'https://www.google.com';

     //change button  in google search home page
     function changeButtonStyle(selector,num,styleObj){
        if ($(selector).get(num) && isGoogle) {
            $(selector).eq(num).css(styleObj);
        }
    }


    //change background image in google search home page
    function changeBodyBackgrond(selector="body"){

        let imgIndex=Math.floor(Math.random() * images.length);

        if (isGoogle && location.pathname == '/') {
            $(selector).css({
                "width":"100%",
                "height":"100%",
                "background-image": "url(" + images[imgIndex] + ")",
                "background-repeat": "no-repeat",
                "background-size": "100% 100%"
            })
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
})();