
$(document).ready(function() {

    var e = $("[data-anim-stroke]");
    $(window).mousemove(function(a) {
        var t = a.pageX + a.pageY,
            i = $(document).width() + $(document).height(),
            n = t / i * 220;
        e.css({
            transform: "rotate(" + n + "deg)"
        })
    })

});
