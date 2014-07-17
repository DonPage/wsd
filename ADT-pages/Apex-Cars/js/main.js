/**
 * Created by donpage on 7/13/14.
 */

$(document).ready(function (e) {

    $('.hidden-nav').slideUp('fast');



    console.log('jquery ready');
    $('.filter-btn').on('click', function(){
        console.log('clicked');
       $('#browse-container').toggleClass('show-filter');
       if ($('#browse-container').hasClass('show-filter')){
            $('.overlay').css('visibility','visible');
       } else {
           $('.overlay').css('visibility','hidden');
       }
    });

    $('.overlay').on('click', function(){
        $('#browse-container').toggleClass('show-filter');
        $('.overlay').css('visibility','hidden');
    });



    $('footer').footerReveal({ shadow: true, zIndex: -101 });


    $('#mid-left').on('click', function(){
        alert($(this).attr('id')+ " clicked");
    });

    $('#mid-mid').on('click', function(){
        alert($(this).attr('id')+ " clicked");
    });

    $('.ham-btn').on('click', function(){
        if ($('.hidden-nav').hasClass('nav-show')){
            $('.hidden-nav').slideUp('fast').toggleClass('nav-show');
        } else {
            $('.hidden-nav').slideDown('fast').toggleClass('nav-show');

        }
    });

    $('input').blur(function() {
        if ($(this).val())
            $(this).addClass('used');
        else
            $(this).removeClass('used');
    });

    $('.car-content').on('click', function(){
        window.location('')
    })

});

