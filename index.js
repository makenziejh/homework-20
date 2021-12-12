$(document).ready(function () {
    $("button").hover(hoverOn, hoverOff);
    $(".option").hover(hoverOn, hoverOff);
    $(".logo").hover(hoverOn, hoverOff);
});

function hoverOn() {
    $(this).addClass("buttonAlt");
}

function hoverOff() {
    $(this).removeClass("buttonAlt");
}