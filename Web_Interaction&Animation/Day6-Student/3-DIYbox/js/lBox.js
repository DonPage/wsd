window.onload = function() {
    console.log('lbox loading');
    $('.lightbox_trigger').click(function(e){
        console.log('lightbox trigger');

        //prevent default action (hyperlink)
        e.preventDefault();

        //get the clicked link
        var image_href = $(this).attr("href");

        if($('#lightbox').length > 0){ //lightbox exists
            //place href as image src value
            $('#content').html('<img src="'+ image_href + '"/>');

            //show lightbox window - use .show
            $('#lightbox').show();
        } else { //if the lightbox doesn't exist
            //create HTML market for lightbox.
            var lightbox =
                '<div id="lightbox">' + '<p>Click to Close</p>' + '<div id="content">'
            + '<img src="' + image_href + '"/>' +
                '</div>' +
                '</div>';
            //insert the lightbox into the page.
            $('body').append(lightbox);
        }
    });//end click

    //click anywhere on the page you get rid of the lightbox.
    $('#lightbox').live('click', function(){
       $('#lightbox').hide();
    });


	

};