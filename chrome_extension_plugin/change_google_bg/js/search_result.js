// 可以操作当前页面中的DOM
$(document).ready(function () {
    div_content()
});

function div_content(logo_url = 'https://www.uow.edu.au/assets/uow-channel/public/site-assets/images/logo/logo.svg', set_target=true) {
    // modify the google logo
    $('.logo a img').attr({ src: logo_url, height: 80 });
    $('.logo a').attr('taget', 80);

    if (set_target) {
        // add target='_blank' for a tags in google
        $('a').each(function (i, value) {
            $(value).attr({ target: '_blank' })
        })
    }

}