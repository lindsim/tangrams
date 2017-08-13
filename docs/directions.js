$(function() {

  var currentTemplate = $("#three");
  var currentChoice = $("#3");
  var convert = ["blank", "one", "two", "three", "four", "five", "six"];

  $(document).ready(function(){
    $(".templates").hide();
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
