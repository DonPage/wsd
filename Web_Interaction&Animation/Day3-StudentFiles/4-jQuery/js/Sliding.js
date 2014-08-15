$(function() { 
		
		// Click funtion for slideup
		
		$("#slideup").click(function(){
				$("#theDiv").slideUp("normal", slideDone);	
				
				//You can use Pre-defined Values
				//"show", "hide", "toggle"
				//$('#theDiv').animate({ width: 'show', }, 4000); // slideLeft

					
			
			});
			
		$("#slidedown").click(function(){
			$("#theDiv").slideDown(3000,slideDone);	
			//$('#theDiv').animate({ width: 'hide',}, 4000); // slideRight	
		
		});	
	
		$("#toggle").click(function(){
			$("#theDiv").slideToggle("slow");	
			//$('#theDiv').animate({ width: 'toggle', opacity: 1 }, 4000); // slideLeft	
		
		});	
			

});


function slideDone(){
		
		alert("Slide is done");
	
	};
