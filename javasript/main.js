$(document).ready(function() {

$("#btnSubmit2").click(function() {
console.log("test");
var x = $("#formID2").val() ;
//var y = x.split("");
console.log(x);
//console.log(y);
$("#one").text(x[0]);
$("#two").text(x[1]);
$("#three").text(x[2]);
$("#four").text(x[3]);
$("#five").text(x[4]);
$("#six").text(x[5]);
$("#seven").text(x[6]);
$("#eight").text(x[7]);
$("#nine").text(x[8]);
$("#ten").text(x[9]);



});
  var x = document.getElementById("myAudio");
  var y = document.getElementById("myForm");

  function playAudio() {
    //x.play();
    alert("a");
  }

  function myFunction() {
    y.submit();
    alert("b");
  }
});

