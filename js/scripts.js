$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    //read & store user input
    var userInput = ($("#numInput").val());

    checkInput(userInput);

    $("#results").text(loopThroughInput(userInput));
  })

});

//if input is not a number, alert user to try again
function checkInput(userInput){
  if (isNaN(userInput)) {
    alert("Please enter a number.");
  }
}

function loopThroughInput(userInput) {
  var outputArray = [];

  //loop through all nums between 0 and userInput
  for (var i = 0; i <= userInput; i++){

    //replace nums divisible by 3 with "I'm sorry..." string
    if (i % 3 == 0 && i > 0) {
      outputArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }

    //else, replace nums containing 1 with "Boop!" in outputArray
    else if (i.toString().includes("1")) {
      outputArray.push("Boop!");
    }

    //else, replace nums containing 0 with "Beep!" in outputArray
    else if (i.toString().includes("0")) {
      outputArray.push("Beep!");
    }

    //else, push the num in question to outputArray (as an int)
    else {
      outputArray.push(parseInt(i));
    }
  }
  console.log(outputArray);
  return outputArray;
}
