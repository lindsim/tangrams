$(function() {


  $(".shape").draggable({
    containment: "document", 
    scroll: false
  });
  
  var currentShape = null;
  var previousShape = null;


	$(".shape").mouseover(function(event) {
    previousShape = currentShape;
  	currentShape = $(this);
    $(this).addClass("current");
    if (previousShape) {
      previousShape.removeClass("current");
    }
  })

  var degClasses = "rotate0 rotate45 rotate90 rotate135 rotate180 rotate225 rotate270 rotate315";
  var degArray = ["rotate0", "rotate45", "rotate90", "rotate135", "rotate180", "rotate225", "rotate270", "rotate315"];
  var colorClasses = "pink purple blue green yellow orange red";
  var colorArray = ["pink","purple", "blue", "green", "yellow", "orange", "red"];


  $(document).keydown(function(e) {
    if (currentShape) {
        var currentClasses = currentShape.prop("classList");

        for (var x = 0; x < degArray.length; x++){
          if (degArray[x] === currentClasses[currentClasses.length - 1]) {
            var currentIndex = x;
            break;
          }
        }
      
       switch(e.which) {
  
          //left arrow
        	case 37:    
            if (currentIndex > 0){
              currentShape.removeClass(degClasses).addClass(degArray[currentIndex - 1]);
            } else {
              currentShape.removeClass(degClasses).addClass(degArray[7]);
            }
       		  break;

          //right arrow  
        	case 39:
            if (currentIndex < 7){
              currentShape.removeClass(degClasses).addClass(degArray[currentIndex + 1]);
            } else {
              currentShape.removeClass(degClasses).addClass(degArray[0]);
            }
       		  break;


          //up arrow
        	case 38:
          //should I implement this for triangles and simplify the square and parallelogram 
          //since they don't change if they flip?
          //or should use the +2 -2 for the down arrow?
            //if (currentIndex % 2 === 0){
              if (currentIndex < 4){
                currentShape.removeClass(degClasses).addClass(degArray[currentIndex + 4]);
              } else {
                currentShape.removeClass(degClasses).addClass(degArray[currentIndex - 4]);
              }
           // } else {
            //  if (currentIndex === 1 || currentIndex === 5 ){
             //   currentShape.removeClass(degClasses).addClass(degArray[currentIndex + 2]);
               // console.log(currentIndex);
             // } else {
               // currentShape.removeClass(degClasses).addClass(degArray[currentIndex - 2]);
                //console.log(currentIndex);
             // }
            //}
       		  break;

            case 32:
              currentShape.removeClass(colorClasses).addClass(colorArray[Math.floor(Math.random()*7)]);
             
        	default: return; // exit this handler for other keys
    	  }
      }
    e.preventDefault(); // prevent the default action from arrow keys
  })
})
