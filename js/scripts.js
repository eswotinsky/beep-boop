$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    var userInput = $("#numInput").val();
    console.log(userInput);

    loopThroughInput(userInput);
  })

});


function loopThroughInput(userInput) {
  var outputArray = [];
  for (var i = 0; i < userInput; i++){
    outputArray.push(i);
  }
  console.log(outputArray);
}
