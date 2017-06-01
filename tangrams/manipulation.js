$(function() {

  $("#start").position({
    my: "center",
    at: "center",
    of: "#playspace"
  });
  
  $(".shape").draggable({
    containment: "#playspace"
  });

  var currentShape = null;

  $(".shape").mouseover(function() {
    currentShape = $(this);
  })

	$(document).keydown(function(e) {
    switch(e.which) {
        case 37: alert("pointleft");
        break;

        case 38: alert("pointUp");
        break;

        case 39: alert("pointRight");
        break;

        case 40: alert("pointDown");
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
	});
});
