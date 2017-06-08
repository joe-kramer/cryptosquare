$(document).ready(function() {
  $("form#form").submit(function(event) {
      event.preventDefault();
      var input = $("#sentence").val();
      $("#grid").append("<h3>Cryptosquare:</h3>");
      var output = encrypt(input);
      $("#result").append("<h3>Result:</h3>");
      $("#result").append(output);
  });
});

//BACKEND
var encrypt = function(sentence) {
  var result = "";
  var resultCounter = 0;
  var squareBoolean = true;
  var squareCounter = 1;
  var counter = 0;
  var rows = 0;
  var columns = 0;
  var lowerCase = sentence.toLowerCase();
  var finalString = lowerCase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'" "]/g,"");
  //find smallest square
  while(squareBoolean) {
    if (Math.pow(squareCounter, 2) >= finalString.length) {
      columns = rows = squareCounter;
      squareBoolean = false;
    } else squareCounter++;
  }
  //find smallest rows
  if(finalString.length < (Math.pow(columns, 2) - columns)) {
    rows--;
  }

  //initialize Cryptosquare
  var Cryptosquare = [];
  //create Cryptosquare
  while(counter < finalString.length)
  for(var r = 0; r < rows; r++) {
    Cryptosquare[r] = [];
    for(var c = 0; c < columns; c++) {
      Cryptosquare[r][c] = finalString.charAt(counter);
      counter++;
    }
  }

  //Write out encryiption
  for (var c = 0; c < columns; c++){
    for (var r = 0; r < rows; r++){
      result += Cryptosquare[r][c];
      resultCounter++;
      if(resultCounter % 5 === 0) {
        result += " ";
      }
    }
  }


  //print grid
  for (var r = 0; r < rows; r++){
    for (var c = 0; c < columns; c++){
      $("#grid").append(Cryptosquare[r][c] + " ");
    }
    $("#grid").append("</br>");
  }

  return result;
}
