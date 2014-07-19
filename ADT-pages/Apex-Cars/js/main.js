/**
 * Created by donpage on 7/13/14.
 */

$(document).ready(function (e) {


//    $('#index-l').on('click', function(e){
//        e.preventDefault();
//        window.location=document.('index-l.html').href;
//    });
    $('.hidden-nav').slideUp('fast');


    $('.filter-btn').on('click', function () {
        console.log('clicked');
        $('#browse-container').toggleClass('show-filter');
        if ($('#browse-container').hasClass('show-filter')) {
            $('.overlay').css('visibility', 'visible');
        } else {
            $('.overlay').css('visibility', 'hidden');
        }
    });

    $('.overlay').on('click', function () {
        $('#browse-container').toggleClass('show-filter');
        $('.overlay').css('visibility', 'hidden');
    });


    $('footer').footerReveal({ shadow: true, zIndex: -101 });


    $('#mid-left').on('click', function () {
        alert($(this).attr('id') + " clicked");
    });

    $('#mid-mid').on('click', function () {
        alert($(this).attr('id') + " clicked");
    });

    $('.ham-btn').on('click', function () {
        if ($('.hidden-nav').hasClass('nav-show')) {
            $('.hidden-nav').slideUp('fast').toggleClass('nav-show');
        } else {
            $('.hidden-nav').slideDown('fast').toggleClass('nav-show');

        }
    });

    $('input').blur(function () {
        if ($(this).val())
            $(this).addClass('used');
        else
            $(this).removeClass('used');
    });

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));


    $('#accordion').accordion();



});

