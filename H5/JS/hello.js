define(function (require, exports, module) {
    var $ = require('jquery');
    var Dialog = require('Dialog');
    $('body').on('click', '#btn', function () {
        Dialog.open({
            id: 'show-id',
            title: '大家好',
            size: 'nm',
            bgClose: true,
            btns: ['你好', '亦闲']
        });
    })
})