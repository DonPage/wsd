$(function() { 
		
		$("#right").click(function(){
			
				$("#theDiv").animate({width:"500px"}, 1000);
			
			});
		
		$("#text").click(function(){
			
				$("#theDiv").animate({fontSize:"24pt"}, 1000);
			
			});
		
		$("#toggle").click(function(){
			
				$("#theDiv").animate({left:"500"}, 1000, "swing");
			
			});		

		$("#multiple").click(function(){
			
				//$("#theDiv").animate({left:"500",fontSize:"24pt",width:"500px" }, 1000, "swing");
				
				//Queue of animations
				$("#theDiv").animate({width:"500px"}, 1000);
				$("#theDiv").animate({fontSize:"24pt"}, 1000);
				$("#theDiv").animate({left:"500"}, 1000, "swing");
			
			
			});		
			
			
		$("#reset").click(function(){
			
				$("#theDiv").animate({left:"0",fontSize:"16pt",width:"250px" }, 1000, "swing");
			
			});								
 
});