$(function() { 
		
		$("#fadein").click(function(){
			
				$("#theDiv").fadeIn("slow");
		
			});
			
		$("#fadeout").click(function(){
			
				$("#theDiv").fadeOut(4000, function(){
					
						alert("Done fading out!");
					
					});
		
			});
			
			$("#fadeto3").click(function(){
			
				// fadeTo(speed -ms, opacity, callback)
				$("#theDiv").fadeTo(1000, .3);
		
			});
			
			
			$("#fadeup").click(function(){
			
				// fadeTo(speed -ms, opacity, callback)
				$("#theDiv").fadeTo(1000, 1);
		
			});		

            
});