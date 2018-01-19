$(document).ready(function(){
  $("form#inputForm").submit(function(event){
    event.preventDefault();

    var userInput = $("#numInput").val();
    console.log(userInput);


  })


});
