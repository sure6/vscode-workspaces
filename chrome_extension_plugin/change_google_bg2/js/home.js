// You can manipulate the DOM in the current page
$(document).ready(function () {


    chrome.storage.sync.get("message", function (items) {

        if (items.message == null || items.message == undefined) {
            return;
        }

        if (items.message.link_address != null) {
            items.message.link_address.forEach(element => {

                if (element.linkName != "" && element.link != "") {
                    addMoodleCourse(element.linkName, element.link)
                }
            });
        }


        if (items.message.video != "") {
            useVideoBackground(selector = "body", video_src = items.message.video);

        }

    });

    // window.addEventListener("message", function(evt){
    //     var message;
    //     console.log(evt)
    //     if (evt.origin !== "https://ogs.google.com") {
    //         message = "You are not worthy";
    //     } else {
    //         message = "I got " + evt.data + " from " + evt.origin;
    //     }
    //     addMoodleCourse(message,"https://www.google.com")
    // }, false);

});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    if (request) {
        location.reload();
        sendResponse("have responsed");
    } else {
        sendResponse("response failed");
    }

})


//use background video in google search home page
function useVideoBackground(selector = "body", videoTag = `<iframe width="951" height="713" src="https://www.youtube.com/embed/N2DkKFxijv0" title="周杰倫 Jay Chou【對不起 Sorry】Official MV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`) {
    // load jquery
    $('head').append(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/themes/base/jquery-ui.min.css" integrity="sha512-ELV+xyi8IhEApPS/pSj66+Jiw+sOT1Mqkzlh8ExXihe4zfqbWkxPRi8wptXIO9g73FSlhmquFlUOuMSoXz5IRw==" crossorigin="anonymous" referrerpolicy="no-referrer" />`);
    $('head style').eq(0).append('.zindex{z-index:-1}')
    // load video
    
    var youtubeVideoId=videoTag.substring(0,videoTag.indexOf("width"))+'id="bgvideo" '+videoTag.substring(videoTag.indexOf("width"))
    var param;
    if(videoTag.substring(videoTag.indexOf('www'),videoTag.indexOf('title')).includes('?')){
        param="&autoplay=1&loop=1&mute=1&playlist="
    }else{
        param="?autoplay=1&loop=1&mute=1&playlist="
    }
    var youtubeVideo=youtubeVideoId.substring(0,youtubeVideoId.indexOf("title")-2)+param+youtubeVideoId.substring(youtubeVideoId.indexOf('embed')+6,youtubeVideoId.indexOf("title")-2)+youtubeVideoId.substring(youtubeVideoId.indexOf("title")-2);
    var newVideoTag = `<div class="video-container">`+youtubeVideo+`</div>`;
    $(selector).append(newVideoTag);
    $('.video-container').css({ "position": "fixed", "top": 0, "left": 0, "width": "100%", "height": "100%"})
    $('.video-container').addClass('zindex')
    $('.video-container iframe').css({ "width": "100%", "height": "100%" })
    
    // load sound button
    let playBtn = `<a class="ui-icon ui-icon-volume-off" style="background-color:yellow; cursor:pointer; z-index:100; border-radius:50%"></a>`;
    let isMuted = true;
    $(".MV3Tnb").eq(0).before(playBtn);
    $('.ui-icon-volume-off').on('click', function () {
        if (isMuted) {
            $('.video-container').removeClass('zindex');
            // $('.ytp-mute-button').click()
            // $('.video-container iframe').get(0).contentWindow.postMessage("sendmessage","https://ogs.google.com")
            this.setAttribute("class", "ui-icon ui-icon-volume-on");
            isMuted=false;
        } else {
            $('.video-container').addClass('zindex')
            // $('.ytp-mute-button').click()
            // getIframeDom('bgvideo').getElementsByClassName('ytp-mute-button').click()
            this.setAttribute("class", "ui-icon ui-icon-volume-off");
            isMuted=true;
        }
    })
}

// Add shortcut courses to the google homepage
function addMoodleCourse(text, href) {
    let $gb_w = $("<div></div>")
    $gb_w.addClass("gb_w gb_x")
    let $gb_v = $("<a>" + text + "</a>")
    $gb_v.addClass("gb_v")
    $gb_v.attr({
        "data-pid": "23",
        href: href,
        target: "_blank"
    })

    $gb_v.appendTo($gb_w)
    $('.gb_Kd')[0].before($gb_w.get(0))

}

