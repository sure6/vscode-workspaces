// @ts-nocheck
// ==UserScript==
// @name         uow_moodle
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*/*
// @icon         https://www.uow.edu.au/assets/uow-channel/public/site-assets/images/logo/logo.svg
// @grant        none
// ==/UserScript==




(function() {
    'use strict';

    // Your code here...

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