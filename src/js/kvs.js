
(function ($) {
    "use strict";
    // $('.sidebar_wrapper').perfectScrollbar();
    var winH = $(window).innerHeight();
    var HdHeight = $('.main-header').innerHeight();
    var mapHeight = winH - HdHeight;
    $('.map').css({ 'height': mapHeight });
    $('.sidebar .card').css({ 'height': winH });

    //tooltip
    $('[data-toggle="tooltip"]').tooltip();

    function selectToggle(){
        $('.select-wrapper').on('click', function(){
            $(this).toggleClass('select-toggle');
        });
    }
    selectToggle();

    $(".sidebar .card-body").slimscroll({
        height: "100vh",
        color: "#D9002A",
        position: "right",
        size: "3px",
        alwaysVisible: 1,
        borderRadius: "3px",
        railBorderRadius: "0"
    });
    $(".overview .overview-body").slimscroll({
        height: "200px",
        color: "#D9002A",
        position: "right",
        size: "3px",
        alwaysVisible: 1,
        borderRadius: "3px",
        railBorderRadius: "0"
    });


})(jQuery);


// $(function() {
//     "use strict";
//     CustomScrollbar(), CustomJs()
// }); 

