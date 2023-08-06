var express = require('express');
var app = express();
const webpush = require('web-push');
var path = require('path')
require('dotenv').config()


// console.log(process.env.VAPID_KEY_PRIVATE)
// console.log(process.env.VAPID_KEY_PUBLIC)
webpush.setVapidDetails(
    'mailto:aa@aa.com',
    process.env.VAPID_KEY_PUBLIC,  //上面代码vapidKeys.publicKey 的字符串
    process.env.VAPID_KEY_PRIVATE // 上面代码 vapidKeys.privateKey 的字符串
);



//要发送的通知
var params = {
    "title": "一篇新的文章",
    "body": "点开看看吧",
    "icon": "",
    "data": {
        "url": "https://www.google.com"
    }
};
const payload = new Buffer.from(JSON.stringify(params), 'utf8');

const pushSubscription =
{"endpoint":"https://fcm.googleapis.com/fcm/send/dIQsabvabL0:APA91bEipi7VyYclxhGgZP9UxhY225UkBjXIKarjsPs2IL6enM3EpQ8GnxI3Fz8YHJDhp7pjIV1YN5mhOa9-YjDBUuoGs30JpYQ50M02QXb9dNK6aH6vzoiRQFJXXqsUBVKaE5Gd5dGx","expirationTime":null,"keys":{"p256dh":"BEgQj2HrglkGPHGYksk2ISZUVN8mrL3RbabBm7P-9s74lluRDHv48ATgPJqW89bZhDmed4rA0clonwDO4hERrB8","auth":"vpilFl9Kks5-eGQFLwXCQQ"}}
webpush.sendNotification(pushSubscription, payload).then(status => {
    console.log("status---->",status);
}).catch(err => {
    console.log(err);
});

app.use('/public', express.static('public'));
app.get('/', function (req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port
    console.log(__dirname);
    console.log("Node.JS 服务器已启动，访问地址： http://%s:%s", host, port)

});

