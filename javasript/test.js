
var newGame;


$(document).ready(function() {
    newGame = new talkingHeads()
    var audioFiles = newGame.quiz.map(quiz => quiz.mp3 )
    

    $("button#btnPlay").click(function() {
        $("#rightAnswer").removeClass("rightAnswer");
        $("#rightAnswer").removeClass("wrongAnswer");
        $("#rightAnswer").removeClass("rightAnswer2");
        $("#rightAnswer").removeClass("wrongAnswer2");
        newGame.getQuestion();
        console.log(newGame.indexOfCurrentQuestion);

        var audioElement = 
        `
            <audio id="myAudio">
                <source src="${newGame.quiz[newGame.indexOfCurrentQuestion].mp3}" type="audio/mp3" />
            </audio> 
        `
        
        console.log(newGame.quiz)
        $('#audio-container').prepend(audioElement)
        
        document.getElementById('myAudio').play();
        $('#question').html(newGame.quiz[newGame.indexOfCurrentQuestion].question)
        
        console.log(newGame.quiz)
        
    });



    $("#btnSubmit").click(function(){
        newGame.checkAnswer($("#formID").val());
        newGame.quiz.splice (newGame.indexOfCurrentQuestion, 1)
        
        $(".boxed").html("");
        for(var i = 0; newGame.goodLetters.length > i; i++) {
            console.log(newGame.goodLetters[i].toString());    
            $(".boxed").append("<div id=\"one\">"+newGame.goodLetters[i].toString()+"</div>"); 
        }
        

    });

    $("#btnSubmit2").click(function(){
        $("#rightAnswer").removeClass("rightAnswer");
        $("#rightAnswer").removeClass("wrongAnswer");
        $("#rightAnswer").removeClass("rightAnswer2");
        $("#rightAnswer").removeClass("wrongAnswer2");
        if(newGame.secretWord == $("#formID2").val()) {
            $("#rightAnswer").toggleClass("rightAnswer2");
        }else {
            $("#rightAnswer").toggleClass("wrongAnswer2");
        }
    });

    
});
