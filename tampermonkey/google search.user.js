// @ts-nocheck

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