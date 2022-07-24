// @ts-nocheck
// 请求moodle上注册的课程列表
function getCourseList(){

    let logout_href = $('a[data-title="logout,moodle"]').first().attr("href")
    if(!logout_href){
        alert("您还没登录, 请登录");
        return;
    }


    const courseObj = null;
    let request_data = [{ "index": 0, "methodname": "core_course_get_recent_courses", "args": { "userid": "163442", "limit": 15 } }]
    $.ajax({
        type: "post",
        url: "https://moodle.uowplatform.edu.au/lib/ajax/service.php?"+logout_href.slice(51)+"&info=core_course_get_recent_courses",
        data: JSON.stringify(request_data),
        dataType: "json",
        // async:true,
        // accept: "application/json, text/javascript, */*; q=0.01",
        // contentType: "application/json; charset=utf-8", 
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (response) {
            console.log(response[0].data);
            courseObj=response[0].data
        },
        error: function (err) {
            console.log(err);
        }
    });

    return courseObj
}




(function () {
    // 'use strict';
    getCourseList();
    


})();

/*

// $("#loginbtn").attr("type","button")
    // $("#login").removeAttr("action")
    // $("#loginbtn").on("click", function (e) {
    //     // executeLogin()
    // })

function executeLogin() {
    // var paramsArr = $("#login").first().serializeArray();
    var paramsArr = [{"name": "logintoken", "value":  $("input[name=logintoken]").val()}, {"name": "username", "value": "xl090"},
            {"name": "password", "value": ""}, {"name": "rememberusername", "value": "1"}]
    // console.log(JSON.stringify(paramsArr));
    $.ajax({
        type: "get",
        url: "https://moodle.uowplatform.edu.au/my/",
        // data: JSON.stringify(paramsArr),
        // dataType: "json",
        // username:"xl090",
        // password:"xluow1995@",
        contentType: "application/json;charset=utf-8",
        xhrFields: { withCredentials: true },
        crossDomain: true,
        success: function (response) {
            console.log(response);
            // $("#login").submit()
            
        },
        // complete:function(xhr,data){
        //     alert("登录成功")
        // },
        error: function (err) {
            console.log(err);
        }
    });
}
*/