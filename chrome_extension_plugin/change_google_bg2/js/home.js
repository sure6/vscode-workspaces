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

    // addMoodleCourse("moodle","https://moodle.uowplatform.edu.au/my/")
    // addMoodleCourse("UOW library","https://www.uow.edu.au/library/")
    // addMoodleCourse("Zulipchat","https://uow-csit998-22-23.zulipchat.com/#")

    // addMoodleCourse("timetable","https://solss.uow.edu.au/sid/sols_tutorial_enrolment.my_timetable?P_STUDENT_NUMBER=6732409&P_SESSION_ID=&p_cs=24189084001212943044&")
    // addMoodleCourse("CSIT998","https://moodle.uowplatform.edu.au/course/view.php?id=33017")
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    if (request) {
        location.reload();
        sendResponse("have responsed");
    } else {
        sendResponse("response failed");
    }
    // let video="";
    // let link_name="";
    // let link="";
    // chrome.storage.sync.get(request,function(items){
    //     items.forEach(element => {
    //         if (element.video=="video"){
    //             video=element.value1;
    //         }
    //         if (element.linkName=="linkName"){
    //             link_name=element.value2;
    //         }
    //         if (element.link=="link"){
    //             link=element.value3;
    //         }
    //     });

    // });

    // if(video != ""){
    //     changeVideoBackground(video); 
    // }
    // if(link_name != "" && link!=""){
    //     addMoodleCourse(link_name,link);
    // }else{
    //     sendResponse("link name and link address must be not empty!!")
    // }


})

// function changeVideoBackground(video_src){
//     $("#bgvideo").attr("src",video_src)
// }

//use background video in google search home page
function useVideoBackground(selector = "body", videoTag = `<iframe width="951" height="713" src="https://www.youtube.com/embed/N2DkKFxijv0?autoplay=1" title="周杰倫 Jay Chou【對不起 Sorry】Official MV" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`) {
    // load jquery
    $('head').append(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/themes/base/jquery-ui.min.css" integrity="sha512-ELV+xyi8IhEApPS/pSj66+Jiw+sOT1Mqkzlh8ExXihe4zfqbWkxPRi8wptXIO9g73FSlhmquFlUOuMSoXz5IRw==" crossorigin="anonymous" referrerpolicy="no-referrer" />`);
    // load video
    newVideoTag = `<div class="video-container" >`+videoTag.substring(0,79)+"?autoplay=1&loop=1&mute=1"+videoTag.substring(79)+`</div>`
    $(selector).append(newVideoTag);
    $('.video-container').css({ "position": "fixed", "top": 0, "left": 0, "width": "100%", "height": "100%", "z-index": -1 })
    $('.video-container iframe').css({ "width": "100%", "height": "100%" })
    
    // load sound button
    // let playBtn = `<a class="ui-icon ui-icon-volume-off" style="background-color:yellow; cursor:pointer"></a>`;
    // $(".MV3Tnb").eq(0).before(playBtn);
    // $('.ui-icon-volume-off').on('click', function () {
    //     if ($('.video-container iframe').attr("sound") == "true") {
    //         $('.ytp-unmute').click()
    //         this.setAttribute("class", "ui-icon ui-icon-volume-on");
    //     } else {
    //         $('.ytp-unmute').click()
    //         this.setAttribute("class", "ui-icon ui-icon-volume-off");
    //     }
    // })
}

// Add shortcut courses to the google homepage
function addMoodleCourse(text, href) {
    let $gb_e = $("<div></div>")
    $gb_e.addClass("gb_e gb_f")
    let $gb_d = $("<a>" + text + "</a>")
    $gb_d.addClass("gb_d")
    $gb_d.attr({
        "data-pid": "23",
        href: href,
        target: "_blank"
    })

    $gb_d.appendTo($gb_e)
    $('.gb_e')[0].before($gb_e.get(0))

}

