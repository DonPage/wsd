/**
 * Created by donpage on 7/13/14.
 */

$(document).ready(function (e) {

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
});

