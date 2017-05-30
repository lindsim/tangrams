$(function() {

  $("#start").position({
    my: "center",
    at: "center",
    of: "#playspace"
  });
  
  $(".shape").draggable({
    containment: "#playspace"
  });

	$(document).keydown(function(e) {
    switch(e.which) {
        case 37: alert( xmouse );
        break;

        case 38: alert( "up" );
        break;

        case 39: alert( "right" );
        break;

        case 40: alert( "down" );
        
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
	});

  $(".shape").click(function(){
  	$(this).toggleClass("turn");
  });
});
