
self.addEventListener('push', function(event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

    // let notificationData = event.data.text();
    // const title = notificationData.title;
    // 可以发个消息通知页面
    // util.postMessage(notificationData);
    // 弹消息框
    event.waitUntil(self.registration.showNotification(event.data.text()));
    // new Notification("通知标题：", event.data.text())

});


