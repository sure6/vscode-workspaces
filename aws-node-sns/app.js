const express = require('express');
const os = require('os');
const app = express();
// const dotenv = require("dotenv");
// dotenv.config();
const AWS = require('aws-sdk');
// Set region

AWS.config.update({
  accessKeyId: "AKIATK37EKGZ3U2U6AE4",
  secretAccessKey: "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",
  region: 'ap-southeast-2', // 替换为您的 AWS 区域
});

// Create promise and SNS service object
// var createTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).createTopic({Name: "TOPIC_NAME"}).promise();
// // Handle promise's fulfilled/rejected states
// createTopicPromise.then(
//   function(data) {
//     console.log("Topic ARN is " + data.TopicArn);
//   }).catch(
//     function(err) {
//     console.error(err, err.stack);
//   });


// var listTopicsPromise = new AWS.SNS({apiVersion: '2010-03-31'}).listTopics({}).promise();
// listTopicsPromise.then(
//   function(data) {
//     console.log(data.Topics);
//   }).catch(
//     function(err) {
//     console.error(err, err.stack);
//   });

// Create promise and SNS service object
// var deleteTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).deleteTopic({TopicArn: 'arn:aws:sns:ap-southeast-2:229510500787:TOPIC_NAME'}).promise();

// // Handle promise's fulfilled/rejected states
// deleteTopicPromise.then(
//   function(data) {
//     console.log("Topic Deleted");
//   }).catch(
//     function(err) {
//     console.error(err, err.stack);
//   });


// var params = {
//   Attributes: { /* required */
//     'PlatformCredential': 'AAAAkes5V0s:APA91bEwFvj2ZQTay6B7mbkBoo5O6L3yGKtOgoQZlqs-O1GJjAUR6BBvxaYDgOBZHiJzfY-7pQ1rSTCoylHy_UIL184WnocvpXyQA3gjQDEQ1HJE0NBiXAX7m5PrKWYlf0IdgPkWnY_2',
//     /* '<String>': ... */
//   },
//   Name: 'myfoodchoicev2', /* required */
//   Platform: 'GCM' /* required */
// };

// new AWS.SNS({apiVersion: '2010-03-31'}).createPlatformApplication(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });

// var params = {
//   PlatformApplicationArn: 'arn:aws:sns:ap-southeast-2:229510500787:app/GCM/myfoodchoice', /* required */
//   Token: 'ddpIFVn1UdSPRkJW3Hqrfw:APA91bERCE8BMr_nqA4rBC7Va3C_RPexO_o31CvCnlzwTR4ki1fMLAkR007AoNsS8tpKJih28Y8-VAlNaHcfX1onDKOhKHYzF5IrXHyKhT30FZ9XN1_rLqEkxM_o5CMaIBuT_G-l2ov5', /* required */
//   // CustomUserData: 'STRING_VALUE'
// };
// new AWS.SNS({apiVersion: '2010-03-31'}).createPlatformEndpoint(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });

var params = {
  Message:  JSON.stringify({"GCM": "{\"notification\": { \"body\": \"Sample message for Android or iOS endpoints\", \"title\":\"TitleTest\",\"image\":\"https://myfoodchoice-7f6a0.web.app/favicon.ico\" },\"data\":{\"time_to_live\": 3600,\"collapse_key\":\"deals\"}}"}), /* required */
  MessageAttributes: {
    'Message': {
      DataType: 'String', /* required */
      // BinaryValue: Buffer.from('...') || 'STRING_VALUE' /* Strings will be Base-64 encoded on your behalf */,
      StringValue: 'UTF8'
    },
    /* '<String>': ... */
  },
  // MessageDeduplicationId: 'STRING_VALUE',
  // MessageGroupId: 'STRING_VALUE',
  MessageStructure: 'json',
  // PhoneNumber: 'STRING_VALUE',
  // Subject: '123',
  TargetArn: 'arn:aws:sns:ap-southeast-2:229510500787:endpoint/GCM/myfoodchoice/acf4a595-e8e2-35a1-afa7-777fa4568e38',
  // TopicArn: 'STRING_VALUE'
};

new AWS.SNS({apiVersion: '2010-03-31'}).publish(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

// 设置 public 为静态文件的存放文件夹
app.use('/public', express.static('public'));

function getIPv4() {
  //同一接口可能有不止一个IP4v地址，所以用数组存
  let ipv4s = [];
  //获取网络接口列表对象
  let interfaces = os.networkInterfaces();
  Object.keys(interfaces).forEach(function (key) {
      interfaces[key].forEach(function (item) {
          //跳过IPv6 和 '127.0.0.1'
          if ('IPv4' !== item.family || item.internal !== false) return;
          ipv4s.push(item.address); //可用的ipv4s加入数组
          // console.log(key + '--' + item.address);
      })
  })
  return ipv4s[0]; //返回一个可用的即可
}

let ipv4 =getIPv4();
app.get('/', function(req, res) {
    res.send('Hello World');
});

const server = app.listen(4040,function(){
    const host=server.address().address;
    const port=server.address().port;
    console.log(`Node.js server running, access address http://${ipv4}:${port}`);
})