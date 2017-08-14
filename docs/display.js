$(function() {

  var $currentOutline = $("three");
  var $currentChoice = $("#3");
  var $outlines = $(".outlines");
  var $choices = $(".choices");
  var convert = ["blank", "one", "two", "three", "four", "five", "six"];

  
  var removeCurrentClass = function($selected){
    $currentOutline.removeClass("showing"); 
    $currentChoice.removeClass("active");
    changeCurrentClass($selected);
  };
  
  var changeCurrentClass = function($selected){
    $currentOutline = $("#" + convert[($selected.attr("id")).toString()]);
    $currentChoice = $selected;
    $currentOutline.addClass("showing");
    $currentChoice.addClass("active");
  };

  $(document).ready(changeCurrentClass($("#3")));

  $choices.click(function() {
    removeCurrentClass($(this));
  });
})
