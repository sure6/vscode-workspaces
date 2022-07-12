$(document).ready(function () {
    $('#element').draggable();
    $("#droppable").droppable({
        drop: function (event, ui) {
            console.log(event);
            console.log(ui);
            $(this).addClass("ui-state-highlight");
        }
    });
})