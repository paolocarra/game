function talkingHeads() {
    this.quiz = [{mp3: "Hello", speaker: "Matt"},{mp3:"Bye", speaker:"Paolo"}];
    this.currentQuestion;
    this.secretWord = "PayMalking";
    this.goodLetters = [".",".",".",".",".",".",".",".",".","."];
    this.errorsLeft = 3;
    this.questionsAsked = [];
  };


 
  

  talkingHeads.prototype.getQuestion = function() {
    var randomNumber = Math.floor(Math.random() * this.quiz.length);
    for (var i = 0; i < this.quiz.length; i++) {
        if (randomNumber === i && this.questionsAsked.indexOf(i) == -1) {
            this.questionsAsked.push(randomNumber);
            this.currentQuestion = this.quiz[i];
        } else {
            randomNumber = Math.floor(Math.random() * this.quiz.length);
        }
    }
}

talkingHeads.prototype.playTrack = function(){
    this.currentQuestion.play();
}
    

  talkingHeads.prototype.checkAnswer = function(letter) {
   
      if (this.currentQuestion.speaker[0] == letter) {
          
          for(var i = 0; i < this.secretWord.length; i++) {
             
            if ((this.currentQuestion.speaker[0] == this.secretWord.split("")[i]) && (this.goodLetters[i] == ".")){
                this.goodLetters.splice(i,1, this.currentQuestion.speaker[0])
                return;
                //alert("Paolo");
            }
          }
          
      } 
  }


  talkingHeads.prototype.checkWord = function (word) {
    if (this.errorsLeft > 0) {
        if (this.secretWord.toString()=== word) {
        alert("WINNER IN " + this.questionsAsked +" QUESTIONS ANSWERED");
        } else {
        this.errorsLeft = this.errorsLeft -1;
        if (this.errorsLeft === 0) {
            alert("GAME OVER");
            } else {
            alert("TRY AGAIN");
            }
       
        } 
    }
  };
  var z = new talkingHeads();
//   Boredom.prototype.checkIfLetter = function(keyCode) {
//     if(keyCode >= 65 && keyCode <= 90) {
//         console.log(true);
//         return true;
//       } else {
//          console.log(false);
//          return false;
//     }
//   };


 


  
