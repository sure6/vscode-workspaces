function sendMessageToContentScript(message, callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
            if (callback) callback(response);
        });
    });
}

$(document).ready(function () {

    chrome.storage.local.get("temp", items => {
        console.log('items', items.temp)
        if(items.temp.url != ""){
            document.getElementById('videoUrl').value = items.temp.url;
        }else{
            document.getElementById('videoUrl').value = "";
        }
        if(items.temp.linkname != ""){
            document.getElementById('linkName').value = items.temp.linkname;
        }else{
            document.getElementById('linkName').value = "";
        }

        if(items.temp.linkaddress != ""){
            document.getElementById('link').value = items.temp.linkaddress;
        }else{
            document.getElementById('link').value = "";
        }
        if(items.temp.logo != ""){
            document.getElementById('logo').value = items.temp.logo;
        }else{
            document.getElementById('logo').value = "";
        }
        
      })
      
    execution();

})

function execution() {

    $('#ok').click(function () {
        let video_val = $('#videoUrl').val();
        let link_val = $('#link').val();
        let logo_val = $('#logo').val();
        let linkName_val = $('#linkName').val();
        let link_arr=[]
        let message = { video: video_val, link_address: link_arr, logo: logo_val };
        
        chrome.storage.sync.get("message", function (items) {
            console.log(items.message);
            if (items.message == undefined || items.message == null) {
                chrome.storage.sync.set({ "message": message }, function () {
                    console.log("save successfully!");
                    sendMessageToContentScript(true, function (response) {
                        console.log(response);
                    });
                });
            }else{
               if(video_val!=""){
                items.message.video=video_val;
               }
               if(linkName_val!="" && link_val!=""){
                items.message.link_address.push({linkName: linkName_val,link: link_val });
               }
               if(logo_val!=""){
                items.message.logo=logo_val;
               }
               chrome.storage.sync.set({ "message": items.message }, function () {
                    console.log("save successfully!");
                    sendMessageToContentScript(true, function (response) {
                        console.log(response);
                    });
               });
            }
        });

        
    });

    $('#cancel').click(function () {
        $('#videoUrl').val() = "";
        $('#link').val() = "";
        $('#logo').val() = "";
    })
}

let temp={url:"", linkname:"",linkaddress:"",logo:""}
document.getElementById('videoUrl').addEventListener('input', e => {
  let url = e.target.value;
  temp.url=url;
  chrome.storage.local.set({"temp":temp});
});

document.getElementById('linkName').addEventListener('input', e => {
    let linkName = e.target.value;
    temp.linkname=linkName;
    chrome.storage.local.set({"temp":temp});
});
document.getElementById('link').addEventListener('input', e => {
    let link = e.target.value;
    temp.linkaddress=link;
    chrome.storage.local.set({"temp":temp});
});

document.getElementById('logo').addEventListener('input', e => {
  let logo = e.target.value;
  temp.logo=logo;
  chrome.storage.local.set({"temp":temp});
});

