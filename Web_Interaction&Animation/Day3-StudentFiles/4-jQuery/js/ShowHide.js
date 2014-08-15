$(function() { 

	//show(speed, callBack Function)
	
	//click handler
	$("#show").click(function(){
			
			//When clicked do this
			
			//Add in a callback function 
			$("#theDiv").show("slow", function(){
				
					alert("Div is now done being shown");
					
					// Change color of div after it is shown
						
						$("#theDiv").css("background-color", "red");
				
				
				});
	
		});

	//Click handler for hide
	
	$("#hide").click(function(){
		
		//Target the div
		$("#theDiv").hide("fast");
		
		
		});
		
		
		$("#toggle").click(function(){
			
			$("#theDiv").toggle(3000);
			
			
			});


});