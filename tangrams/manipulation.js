$(function() {

  $(".shape").draggable({
    containment: "#playspace", scroll: false
  });
  
  var currentShape = null;

	$(".shape").mouseover(function() {
  	currentShape = $(this);
  })
  
	var triangles = ["lgtri", "lgtri2", "smtri", "smtri2", "medtri"];
  var triClasses = "rotate0 rotate45 rotate90 rotate135 rotate180 rotate225 rotate270 rotate315";
  var parClasses = "parRight parLeft parUp parDown";

  //this code needs to be refactored; there must be a better way to do this

	$(document).keydown(function(e) {
  	if (triangles.indexOf(currentShape.attr("id")) >= 0 )  {

       switch(e.which) {

        	case 37:    
            currentShape.removeClass(triClasses).addClass("rotate270")
					  break;

        	case 38: 
            currentShape.removeClass(triClasses).addClass("rotate0")
        	  break;

        	case 39:
            currentShape.removeClass(triClasses).addClass("rotate90")
       		  break;
        
          case 40: 
            currentShape.removeClass(triClasses).addClass("rotate180")
        	  break;

           case 191:
            currentShape.removeClass(triClasses).addClass("rotate225")
        	  break;
           
           case 13:
            currentShape.removeClass(triClasses).addClass("rotate45")
        	  break;
           
           case 16:
            currentShape.removeClass(triClasses).addClass("rotate135")
        	  break;
           
           case 222: 
            currentShape.removeClass(triClasses).addClass("rotate315")
        	  break;

        	default: return; // exit this handler for other keys
    	}
    } else if (currentShape.attr("id") === "square") {
        switch(e.which) {
          case 37:
          case 39:
            currentShape.toggleClass("rotate45");
				    break;
          
          case 38:
          case 40:
            break;
        
          default: return; 
   			}
    } else {
    	  switch(e.which) {
         case 37:
          currentShape.removeClass(parClasses).addClass("parLeft")
          break;
        case 39:
          currentShape.removeClass(parClasses).addClass("parRight")
          break; 
        case 38:
          currentShape.removeClass(parClasses).addClass("parUp")
          break;

        case 40: 
          currentShape.removeClass(parClasses).addClass("parDown")
          break;
          
        default: return; 
        }
    }
    e.preventDefault(); // prevent the default action from arrow keys
  });
});



