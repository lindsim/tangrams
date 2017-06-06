$(function() {

  $(".shape").draggable({
    containment: "#playspace"
  });
  
  var currentShape = null;

	$(".shape").mouseover(function() {
  	currentShape = $(this);
  })
  
	var triangles = ["lgtri", "lgtri2", "smtri", "smtri2", "medtri"];
  
	$(document).keydown(function(e) {
  	if (triangles.indexOf(currentShape.attr("id")) >= 0 )  {
       switch(e.which) {
        	case 37: 
            currentShape.toggleClass("pointLeft");
					  break;

        	case 38: 
            currentShape.toggleClass("pointUp");
        	  break;

        	case 39: 
            currentShape.toggleClass("pointRight");
       		  break;
        
        case 40: 
            currentShape.toggleClass("pointDown");
        	  break;

        	default: return; // exit this handler for other keys
    	}
    } 
   else if (currentShape.attr("id") === "square") {
        switch(e.which) {
          case 37:
          case 39:
            currentShape.toggleClass("turnRight");
				    break;
        
          default: return; 
   			}
    } else {
    	  switch(e.which) {
         case 37:
         case 39:
          currentShape.toggleClass("transformRL")
          break;
          
        default: return; 
        }
    }
    e.preventDefault(); // prevent the default action from arrow keys
  });
});



