$(function() {

  var currentTemplate = $("#blank");
  var currentChoice = $("#0");
  var convert = ["blank", "one", "two", "three", "four", "five", "six"];

  $(document).ready(function(){
    $("#directText").hide();
    $(".templates").hide();
    currentTemplate.show();
  })

  $("#directLink").hover(function(){
    $(".templates").hide();
    $("#directText").show();
  }, function(){
    $("#directText").hide();
    currentTemplate.show();
  })

  $(".choices").click(function() {
    currentTemplate.hide();
    currentChoice.removeClass("active");
    currentTemplate = $("#" + convert[($(this).attr("id")).toString()]);
    currentChoice = $(this);
    $(this).addClass("active");
    currentTemplate.show();
  })
})
