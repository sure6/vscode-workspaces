
var interval;
var flag = true;
var offset = $('#snake').offset({ left: 452.5, top: 476 });
var intleft = parseInt(offset[0].style.left);
var inttop = parseInt(offset[0].style.top);

$(document).ready(function () {
    console.log("started");


    console.log(offset[0].offsetTop);
    // $('#test').click(function () {
    // $('#snake').animate({left:'900px'},5000)

    listening();
    // });

    $('#test2').click(function () {
        clearInterval(interval);
    });


})

function move(code) {

    var variable = 10;

    interval = setInterval(() => {
        if (code == 39) {
            intleft = intleft + variable;
            offset[0].style.left = intleft + 'px';
        } else if (code == 38) {
            inttop = inttop - variable;
            offset[0].style.top = inttop + 'px';
        }
        if (intleft == 900 || inttop == 0) {
            clearInterval(interval);
            console.log("you have died");

        }
    }, 50);
}

function listening() {
    $(document).off('keydown'); 
    $(document).on('keydown', function (event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(event);// up 38 down 40 left 37 right 39
        $(document).on('keydown', function (event){
            switch (event.keyCode) {
                case 38:
                    // $(this).off('keydown');
                    console.log('up');
                    move(event.keyCode);
                    break;
                case 39:
                    // $(this).off('keydown');
                    console.log('right');
                    move(event.keyCode);
                    break;
    
                default:
                    break;
            }
            return false;
        })
       
      

    })

}

