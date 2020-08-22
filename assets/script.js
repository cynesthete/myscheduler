moment().format('MMMM Do YYYY');
moment().hours(); // Number

$(document).ready(function(){
$("#currentDay").text(moment().format('MMMM Do YYYY'));
$(".saveBtn").on("click", function(){
    var value=$(this).siblings(".description").val();
    var time=$(this).parent().attr("id");
    console.log(time, value);
    localStorage.setItem(time, value);
});

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

function changeColor() {
    var currentHour = moment().hours();
    console.log(currentHour);
    $(".time-block").each(function (){
        var blockHour = parseInt($(this).attr("id"));
        if (blockHour < currentHour) {
            $(this).addClass("past");
        } else if (blockHour === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("past");
        } else {
            //add class future, remove class present, remove class past

        }
    })
}
var interval = setInterval(changeColor, 1000);
});