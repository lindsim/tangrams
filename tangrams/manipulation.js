$(function() {

  $(".shape").draggable({
    containment: "#playSpace", 
    scroll: false
  });
  
  var currentShape = null;

	$(".shape").mouseover(function() {
  	currentShape = $(this);
  })

	var triangles = ["lgtri", "lgtri2", "smtri", "smtri2", "medtri"];
  var triClasses = "rotate0 rotate45 rotate90 rotate135 rotate180 rotate225 rotate270 rotate315";
  var parClasses = "parRight parLeft parUp parDown par5 par6 par7 par8 skew315 skew45";

  //this code needs to be refactored; there must be a better way to do this

	$(document).keydown(function(e) {
  	if (currentShape.hasClass("tri"))  {

       switch(e.which) {
          //left arrow
        	case 37:    
            currentShape.removeClass(triClasses).addClass("rotate270")
					  break;
          //up arrow
        	case 38: 
            currentShape.removeClass(triClasses).addClass("rotate0")
        	  break;
          //right arrow  
        	case 39:
            currentShape.removeClass(triClasses).addClass("rotate90")
       		  break;
          //down arrow
          case 40: 
            currentShape.removeClass(triClasses).addClass("rotate180")
        	  break;
          //forward slash
           case 191:
            currentShape.removeClass(triClasses).addClass("rotate225")
        	  break;
          //enter
           case 13:
            currentShape.removeClass(triClasses).addClass("rotate45")
        	  break;
           //shift
           case 16:
            currentShape.removeClass(triClasses).addClass("rotate135")
        	  break;
           //single quote
           case 222: 
            currentShape.removeClass(triClasses).addClass("rotate315")
        	  break;

        	default: return; // exit this handler for other keys
    	}
    } else if (currentShape.hasClass("square")) {
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
          currentShape.removeClass(parClasses).addClass("skew45")
          break;
        case 39:
          currentShape.removeClass(parClasses).addClass("skew315")
          break; 
        case 38:
          currentShape.removeClass(parClasses).addClass("parUp")
          break;
        case 40: 
          currentShape.removeClass(parClasses).addClass("parDown")
          break;
        //slash
        case 191:
          currentShape.removeClass(parClasses).addClass("par5")
        	break;
        //enter 
        case 13:
          currentShape.removeClass(parClasses).addClass("par7")
        	break;   
        //shift
        case 16:
          currentShape.removeClass(parClasses).addClass("par8")
        	break;
        //quote
        case 222: 
          currentShape.removeClass(parClasses).addClass("par6")
        	break;
          
        default: return; 
        }
    }
    e.preventDefault(); // prevent the default action from arrow keys
  });
});



