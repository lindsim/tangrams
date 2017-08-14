$(function() {
  
  var $currentOutline = $("zero");
  var $currentChoice = $("#0");
  var $outlines = $(".outlines");
  var $choices = $(".choices");
  
  var convert = ["blank", "one", "two", "three", "four", "five", "six"];

  $choices.click(function() {
    $("three").removeClass("showing");
    $currentOutline.removeClass("showing");
    $currentOutline = $("#" + convert[($(this).attr("id")).toString()]);
    $currentOutline.addClass("showing");
    $currentChoice.removeClass("active");
    $currentChoice = $(this);
    $currentChoice.addClass("active");

  });
})