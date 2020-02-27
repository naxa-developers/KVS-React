
(function ($) {
    "use strict";
    // $('.sidebar_wrapper').perfectScrollbar();
    var winH = $(window).innerHeight();
    var HdHeight = $('.main-header').innerHeight();
    var mapHeight = winH - HdHeight;
    $('.map').css({ 'height': mapHeight });
    $('.sidebar .card').css({ 'height': winH });

    //toggle-close 
    /* toggle-button & menu dropdown */
    $('.toggle-button').on('click', function() {
        $(this).toggleClass('active');
        $('#nav-dropdown').toggle();
    })

    $('.collapse-btn-layers').on('click', function(){
        $(this).toggleClass('active');
        $('.collapse').fadeToggle();
    })

    //header-bg change on scroll
    $(window).scroll(function(){
        if($(window).scrollTop() > 150){
            $("header").addClass("bg-active");
        }
        else{
            $("header").removeClass("bg-active");
        }
    })
    
    $('.more-link').on('click', function() {
        $(this).toggleClass('active');
    })

   /*  $('#open_popup').click(function(){
        $('.popup_block').show();
    });

    $('.cancel').click(function(){
        $('.popup_block').hide();
    }); */
    //tooltip
    $('[data-toggle="tooltip"]').tooltip();

    function selectToggle(){
        $('.select-wrapper').on('click', function(){
            $(this).toggleClass('select-toggle');
        });
    }
    selectToggle();

    /* function collapse_listToggle(){
        $('.collapse-btn-layers').on('click', function(){
            $(this).toggleClass('collapse-toggle-btn');
        });
    }
    collapse_listToggle(); */

    function filter_button(){

    }
    /* function toggleForm(){
        $('.more .filter_button').on('click', function(e){
            e.preventDefault();
            $(this).closest('.more').find('.toggle_form').toggle();
        });
    }
    toggleForm(); */
    var toggleHeight = $('.more .toggle_form').innerHeight();
    $('.more .toggle_form').css('height',toggleHeight)
    function toggleForm(){
        $('.more .filter_button').on('click', function(e){
            e.preventDefault();
            // $(".more").css("background-color", "#0000BB");
            $(this).closest('.more').find('.toggle_form').toggleClass('toggle_form_animate');
            $(this).closest('.more').find('.toggle_form').addClass('bg-class');
        });
    }
    toggleForm();

    $(".sidebar .card-body").slimscroll({
        height: "100vh",
        color: "#D9002A",
        position: "right",
        size: "4px",
        alwaysVisible: 1,
        borderRadius: "3px",
        railBorderRadius: "0"
    });

    $(".overview .overview-home-body").slimscroll({
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

