$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    //read & store user's name input
    var nameInput = ($("#nameInput").val());

    //read & store user's num input
    var numInput = ($("#numInput").val());

    //check whether numInput is a valid number
    checkInput(numInput);

    $("#results").text(loopThroughInput(nameInput, numInput));
  })

});

function checkInput(numInput){
  if (isNaN(numInput)) {
    alert("Please enter a number.");
  }
}

function loopThroughInput(nameInput, numInput) {
  var outputArray = [];

  //loop through all nums between 0 and numInput
  for (var i = 0; i <= numInput; i++){

    //replace nums divisible by 3 with "I'm sorry..." string
    if (i % 3 == 0 && i > 0) {
      outputArray.push("I'm sorry, " + nameInput + ". I'm afraid I can't do that.");
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
  return outputArray;
}
