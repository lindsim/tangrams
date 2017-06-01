$(function() {

  $(".shape").draggable({
    containment: "#playSpace"
  });

  var currentShape = null;

  $(".shape").click(function() {
    currentShape = $(this);
  })

	$(document).keydown(function(e) {
    switch(e.which) {
        case 37: currentShape.toggleClass("pointLeft");
        break;

        case 38: currentShape.toggleClass("pointUp");
        break;

        case 39: currentShape.toggleClass("pointRight");
        break;

        case 40: currentShape.toggleClass("pointDown");
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
	});
});
