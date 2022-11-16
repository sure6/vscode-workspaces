// 图像下标显示
// chrome.action.setBadgeText({text:"new"});
// chrome.action.setBadgeBackgroundColor({color: [255, 0, 0, 255]});

// 选择文字进行添加右键context menus
const menu = chrome.contextMenus.create({
    id: chrome.runtime.id,
    title: "test right key menus: %s",
    contexts: ["selection"]
})

chrome.contextMenus.onClicked.addListener(function (params) {
    chrome.tabs.create({ url: "https://www.google.com/search?q=" + encodeURI(params.selectionText) })
});

// 向用户提供搜索建议的一种方式，通过设置manifest.json中omnibox的keyword按tab键触发
chrome.omnibox.onInputChanged.addListener((text, suggest) => {
    console.log('inputChanged: ' + text);
    if (!text) return;
    if (text == '美女') {
        suggest([
            { content: '中国' + text, description: '你要找“中国美女”吗？' },
            { content: '日本' + text, description: '你要找“日本美女”吗？' },
            { content: '泰国' + text, description: '你要找“泰国美女或人妖”吗？' },
            { content: '韩国' + text, description: '你要找“韩国美女”吗？' }
        ]);
    } else if (text == '微博') {
        suggest([
            { content: '新浪' + text, description: '新浪' + text },
            { content: '腾讯' + text, description: '腾讯' + text },
            { content: '搜狐' + text, description: '搜索' + text },
        ]);
    } else {
        suggest([
            { content: '百度搜索 ' + text, description: '百度搜索 ' + text },
            { content: '谷歌搜索 ' + text, description: '谷歌搜索 ' + text },
        ]);

    }
});

// 当用户接收关键字建议时触发
chrome.omnibox.onInputEntered.addListener((text) => {
    console.log('inputEntered: ' + text);
    if (!text) return;
    var href = '';
    if (text.endsWith('美女')) href = 'http://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=' + text;
    else if (text.startsWith('百度搜索')) href = 'https://www.baidu.com/s?ie=UTF-8&wd=' + text.replace('百度搜索 ', '');
    else if (text.startsWith('谷歌搜索')) href = 'https://www.google.com.tw/search?q=' + text.replace('谷歌搜索 ', '');
    else href = 'https://www.baidu.com/s?ie=UTF-8&wd=' + text;
    openUrlCurrentTab(href);
});
// 获取当前选项卡ID
function getCurrentTabId(callback) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (callback) callback(tabs.length ? tabs[0].id : null);
    });
}

// 当前标签打开某个链接
function openUrlCurrentTab(url) {
    getCurrentTabId(tabId => {
        chrome.tabs.update(tabId, { url: url });
    })
}

// 通知跟H5一样
chrome.notifications.create(null,{
    type:"basic",
    iconUrl:"images/1.png",
    title:"这是标题",
    message:"您刚才点击了自定义右键菜单！"
})


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({ pageUrl: { urlContains: "google.com" } })
                ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
    console.log("addListener...")
    console.log(request)
    switch (request.type) {
        case 'get':
            fetch(request.url)
                .then(function (response) { sendResponse(response) })
                .then(function (json) { sendResponse(json) })
                .catch(function (error) { sendResponse(null) });
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
                .then(function (response) {
                    console.log(response)
                    sendResponse(response.json())
                })
                .then(function (json) {
                    console.log(json)
                    sendResponse(json)
                })
                .catch(function (error) {
                    console.log(error)
                    sendResponse(null)
                });
            break;
        // 你可以定义任意内容，使用sendResponse()来返回它
        case 'test':
            sendResponse({ 'msg': 'test' });
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