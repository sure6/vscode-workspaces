const express = require('express');
const app = express();
const CronJob=require('cron').CronJob;

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }

new CronJob('0 0/5 * * * *',function(){
    console.log('You will see this message every 5 min',formatDate(new Date()));
},null,true, 'Australia/Sydney');
// 设置 public 为静态文件的存放文件夹
app.use('/public', express.static('public'));

app.get('/', function(req, res) {
    res.send('Hello World');
});

const server = app.listen(4040,function(){
    const host=server.address().address;
    const port=server.address().port;
    console.log("Node.js server running, access address http://%s:%s",host,port  );
})