$(document).ready(function () {
    $(".click-bt").click(function () { 
        var list = $(this).attr("data-list");
        $(list).toggleClass("open");
    });
});