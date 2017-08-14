$(function() {
  var $currentShape = null;
  var $previousShape = null;
  var $shape = $(".shape");
  var degClasses = "rotate0 rotate45 rotate90 rotate135 rotate180 rotate225 rotate270 rotate315";
  var degArray = ["rotate0", "rotate45", "rotate90", "rotate135", "rotate180", "rotate225", "rotate270", "rotate315"];
  var colorClasses = "pink purple blue green yellow orange red black rainbowBackground warmColors coolColors";
  var colorArray = ["pink","purple", "blue", "green", "yellow", "orange", "red", "black", "rainbowBackground", "warmColors", "coolColors"];
  var spaceBar = 32;
  var leftArrow = 37;
  var rightArrow = 39;
  var upArrow = 38;
  var zero = 48;

  $shape.draggable({
    containment: "document", 
    scroll: false
  });

	$shape.mouseover(function(event) {
    $previousShape = $currentShape;
  	$currentShape = $(this);
    $currentShape.addClass("current");
    if ($previousShape) {
      $previousShape.removeClass("current");
    }
  });


  $(document).keydown(function(key) {
    if ($currentShape) {
        var currentClasses = $currentShape.prop("classList");
        var currentClassIndex = getCurrentClassIndex(currentClasses);
        
      switch(key.which) {
        case spaceBar:
          changeColor($currentShape);
        break; 

        case zero:
          rainbowBackground();
        break;
          
        case leftArrow:
          turnShape($currentShape, currentClassIndex, -1);
        break;
          
        case rightArrow:
          turnShape($currentShape, currentClassIndex, 1);
        break;

        case upArrow:
          flip($currentShape, currentClassIndex);
        break; 

        default: return; 
      }
    }
    key.preventDefault();
  })

  var getCurrentClassIndex = function (currentClasses) {
    for (var x = 0; x < degArray.length; x++){
      if (degArray[x] === currentClasses[currentClasses.length - 1]) {
        return x;
      }
    }
  };

  var changeColor = function (currentShape) {
    currentShape.removeClass(colorClasses).addClass(colorArray[Math.floor(Math.random()*11)]);
  };

  var rainbowBackground = function() {
    $("body").addClass("rainbowBody");
  };

  var turnShape= function (currentShape, currentClassIndex, direction) {            
    if (currentClassIndex < 7 && currentClassIndex > 0 || currentClassIndex === 0 && direction === 1 || currentClassIndex === 7 && direction === -1){
      currentShape.removeClass(degClasses).addClass(degArray[currentClassIndex + direction]);
    } else if (direction === 1) {
      currentShape.removeClass(degClasses).addClass(degArray[0]);
    } else {
      currentShape.removeClass(degClasses).addClass(degArray[7]);
    }
  };

  var flip = function (currentShape, currentClassIndex) {
    if (currentShape.hasClass("clip0")) {
      currentShape.removeClass("clip0").addClass("clip1");
    } else if (currentShape.hasClass("clip1")){
      currentShape.removeClass("clip1").addClass("clip0");
    }
            
    if (currentClassIndex % 2 === 0) {
      if (currentClassIndex < 4){
        currentShape.removeClass(degClasses).addClass(degArray[currentClassIndex + 4]);
      } else {
        currentShape.removeClass(degClasses).addClass(degArray[currentClassIndex - 4]);
      }
    } else {
      if (currentClassIndex === 1 || currentClassIndex === 5){
        currentShape.removeClass(degClasses).addClass(degArray[currentClassIndex + 2]);
      } else if (currentClassIndex === 3 || currentClassIndex === 7){
        currentShape.removeClass(degClasses).addClass(degArray[currentClassIndex - 2]);
      } else {
        currentShape.addClass(degArray[4]);
      }
    }
  };
})