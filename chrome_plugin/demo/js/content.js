chrome.runtime.sendMessage(
    {
     type: 'get',
     url: "https://www.google.com/"
    },
    function response(res) {
        console.log("回调...")
        console.log("res",res)
    }
)


// 可以操作当前页面中的DOM
$(document).ready(function() {
 
    console.log("---加载content.js---");
 
    // 注入inject.js
    injectCustomJs();
 
});
 
function injectCustomJs() {
    let jsPath = 'js/inject.js';
 
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.runtime.getURL(jsPath);
    temp.onload = function() {
        // 执行完后移除掉
        this.parentNode.removeChild(this);
    };
    // 挂载
    document.head.appendChild(temp);
}