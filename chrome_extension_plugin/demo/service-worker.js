// 图像下标显示
// chrome.action.setBadgeText({text:"new"});
// chrome.action.setBadgeBackgroundColor({color: [255, 0, 0, 255]});

// 选择文字进行添加右键context menus
const menu1 =  chrome.contextMenus.create({
    id:"menu1",
    title:"test right key menus: %s",
    contexts:["selection"]
})

chrome.contextMenus.onClicked.addListener(function(params){
    chrome.tabs.create({url:"https://www.google.com/search?q="+encodeURI(params.selectionText)})
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions:[
                    new chrome.declarativeContent.PageStateMatcher({pageUrl:{urlContains:"google.com"}})
                ],
                actions:[new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
    console.log("addListener...")
    console.log(request)
        switch(request.type) {
            case 'get': 
                fetch(request.url)
                    .then(function(response) { sendResponse(response) })
                .then(function(json) { sendResponse(json) })
                .catch(function(error) { sendResponse(null) });
            break;
            case 'post':
                fetch(request.url, {
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: JSON.stringify(request.data)
                })
                    .then(function(response) { 
                        console.log(response)
                        sendResponse(response.json())
                    })
                    .then(function(json) {
                        console.log(json)
                        sendResponse(json)
                    })
                    .catch(function(error) {
                        console.log(error)
                        sendResponse(null)
                    });
            break;
            // 你可以定义任意内容，使用sendResponse()来返回它
            case 'test':
                sendResponse({'msg': 'test'});
            break;
    }
});



// chrome.runtime.onInstalled.addListener(function(){
//     chrome.contextMenus.create({
//         "id":"sampleContextMenu",
//         "title":"Sample Context Menu",
//         "contexts":["selection"]
//     })
// })


// chrome.onCompleted.addListener(function() {
//     alert("This is my favorite website!");
// }, {url: [{urlMatches : 'https://www.google.com/'}]});