$(function() {
  $(".shape").draggable({
    containment: "#playspace"
  });
  $("#start").position({
    my: "center",
    at: "center",
    of: "#playspace"
  });
});