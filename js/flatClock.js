// Flat clock
$(document).ready(function() {
    var delay = 333;

    var interval = setInterval(function() {
        var currentdate = new Date($.now());

        seconds_deg = (currentdate.getSeconds() * 6 + 180) % 360;
        $(".second").css("transform", "rotate(" + seconds_deg + "deg)");

        minutes_deg =
            (currentdate.getMinutes() * 6 + 180) % 360 +
            currentdate.getSeconds() / 10;
        $(".minute").css("transform", "rotate(" + minutes_deg + "deg)");

        hours_deg =
            (currentdate.getHours() * 30 + 180) % 360 + currentdate.getMinutes() / 2;
        $(".hour").css("transform", "rotate(" + hours_deg + "deg)");
    }, delay);
});