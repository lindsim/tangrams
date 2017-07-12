$(function() {


  $(".shape").draggable({
    containment: "document", 
    scroll: false
  });
  
  var currentShape = null;
  var previousShape = null;


	$(".shape").mouseover(function(event) {
    //console.log((event.pageX, event.pageY).getAttr;
    previousShape = currentShape;
  	currentShape = $(this);
    $(this).addClass("current");
    if (previousShape) {
      previousShape.removeClass("current");
    }
  })

  var degClasses = "rotate0 rotate45 rotate90 rotate135 rotate180 rotate225 rotate270 rotate315";

  //this code needs to be refactored; there must be a better way to do this

	$(document).keydown(function(e) {
  	if (currentShape)  {

       switch(e.which) {
          //left arrow
        	case 37:    
            currentShape.removeClass(degClasses).addClass("rotate270")
					  break;
          //up arrow
        	case 38: 
            currentShape.removeClass(degClasses).addClass("rotate0")
        	  break;
          //right arrow  
        	case 39:
            currentShape.removeClass(degClasses).addClass("rotate90")
       		  break;
          //down arrow
          case 40: 
            currentShape.removeClass(degClasses).addClass("rotate180")
        	  break;
          //forward slash
           case 191:
            currentShape.removeClass(degClasses).addClass("rotate225")
        	  break;
          //enter
           case 13:
            currentShape.removeClass(degClasses).addClass("rotate45")
        	  break;
           //shift
           case 16:
            currentShape.removeClass(degClasses).addClass("rotate135")
        	  break;
           //single quote
           case 222: 
            currentShape.removeClass(degClasses).addClass("rotate315")
        	  break;

        	default: return; // exit this handler for other keys
    	}
    }
    e.preventDefault(); // prevent the default action from arrow keys
  });
});