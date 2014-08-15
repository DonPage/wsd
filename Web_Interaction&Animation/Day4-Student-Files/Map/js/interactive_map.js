$(document).ready(function() {

    //when the form changes
    $('#mapForm').change(function(){
        //create a variable to hold selected
        var selectedContinent = $('#mapForm option:selected').val();

        //if statement - test if it is all - show all dots.
        if(selectedContinent == 'ALL'){
            $('a.dot').slideDown(1000);
        } else {
            $('a.dot[continent = "'+selectedContinent+'"]').slideDown(1000);
            $('a.dot[continent != "'+selectedContinent+'"]').slideUp(1000);

        }
    });

    //dot code
    //is clicked
    $('a.dot').click(function(){
        //remove selected class from all dots.
        $('a.dot').removeClass("selected");

        //add selected class on the click anchor
        $(this).addClass('selected');

        //create a variable to hold the path of the matching div

        var country = ".country_detail#"+$(this).attr("country");

        //variable to hold the html code.
        var htmlCode = $(country).html();

        //animate the container - fade it out.
        $('.detail_container').fadeOut(500, function(){
            //the container is hidden
            //put the html in the container and then fade it back up
            $('.detail_container .country_detail').html(htmlCode);
            $('.detail_container').fadeIn(500);
        })


    })

});