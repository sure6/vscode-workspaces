// 可以操作当前页面中的DOM
$(document).ready(function () {
    
    chrome.storage.sync.get("message",function(items){
    
        if(items.message==null || items.message == undefined){
            return;
        }
  
        if(items.message.logo!=""){
            div_content(logo_url=items.message.logo);
        }
        
    });

});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){

    if(request){
        location.reload();
        sendResponse("have responsed");
    }else{
        sendResponse("response failed");
    }    
    
})


function div_content(logo_url = 'https://www.uow.edu.au/assets/uow-channel/public/site-assets/images/logo/logo.svg', set_target=true) {
    // modify the google logo
    $('.logo a img').attr({ src: logo_url, height: 80 });
    $('.logo a').attr('taget', 80);

    if (set_target) {
        // add target='_blank' for a tags in google
        $('a').each(function (i, value) {
            $(value).attr({ target: '_blank' })
        })
    }

}
