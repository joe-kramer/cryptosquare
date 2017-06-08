$(document).ready(function() {
  $("form#form").submit(function(event) {
      event.preventDefault();
      var input = $("#sentence").val();
      var output = encrypt(input);
      $("#result").text(output);
  });
});

//BACKEND
var encrypt = function(sentence) {
  var lowerCase = sentence.toLowerCase();
  var finalString = lowerCase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()" "]/g,"");

  return finalString;
}
