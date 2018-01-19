$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("#numInput").val());
    console.log(userInput);

    loopThroughInput(userInput);
  })

});


function loopThroughInput(userInput) {
  var outputArray = [];

  for (var i = 0; i <= userInput; i++){
    if (i % 3 == 0 && i > 0) {
      outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else {
      outputArray.push(i);
    }
  }

  console.log(outputArray);
}
