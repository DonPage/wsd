$(function() { 
		//Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
		
			$( window ).scroll(function() {
				
				//Get the current vertical position of the scroll bar for the first element in the set 
				//of matched elements or set the vertical position of the scroll bar for every matched 
				//element.
					var wscroll = $(this).scrollTop();
					
					if(wscroll > 20){
					
							console.log("in if");
							$('#theDiv').animate({width:'show'},500);
					
					}else if(wscroll <20){
							
							console.log("in elseif");
							
							$('#theDiv').animate({width:'hide'}, 500);
					}
							console.log(wscroll);
									
			});							
 
});