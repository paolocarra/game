function talkingHeads() {
    this.quiz = [{mp3: "soundbites/alig.mp3",question: "What is the last name of the interviewer?", speaker: "G"},{mp3:"soundbites/leonard.mp3",question: "From which footballclub this song is the official chant?", speaker:"Ajax"},
    {mp3: "soundbites/test4.mp3",question:"What is the firstname of the tennisplayer?", speaker: "John"},{mp3: "soundbites/test10.mp3",question : "What is the nickname of Elvis", speaker:"King"},
    {mp3: "soundbites/apocalypsnow.mp3",question : "From which film comes this famous line", speaker:"Apocalypsnow"}, {mp3: "soundbites/nile.mp3",question : "What is the firstname of the famoud guitar player in this song", speaker:"Nile"},
    {mp3: "soundbites/leo.mp3",question : "What is the firstname of this singer/songwriter", speaker:"Leonard"}, {mp3: "soundbites/iphone1.mp3",question : "What product is he talking about", speaker:"Iphone"},
    {mp3: "soundbites/yuri.mp3",question : "What is the firstname of the first man in space", speaker:"Yuri"}, {mp3: "soundbites/wayne3.mp3",question : "What is name of the character of ", speaker:"King"}];
    this.currentQuestion;
    this.currentAnswer;
    this.secretWord = "JAYTELFING";
    this.goodLetters = [".",".",".",".",".",".",".",".",".","."];
    this.errorsLeft = 3;
    this.questionsAsked = [];
    this.indexOfCurrentQuestion;
    this.lastIndex;
  };


  
  talkingHeads.prototype.getQuestion = function() {
    var randomNumber = Math.floor(Math.random() * this.quiz.length);
    //this.currentQuestion = this.quiz[randomNumber].mp3;
    //   this.currentAnswer = this.quiz[randomNumber].speaker;
    this.indexOfCurrentQuestion = randomNumber;
   
    //this.quiz.splice(randomNumber,1);
    
  }

  
  
  
//   talkingHeads.prototype.getQuestion = function() {
//     var randomNumber = Math.floor(Math.random() * this.quiz.length);
//     while (this.questionsAsked.indexOf(randomNumber) == -1) {
//         this.questionsAsked.push(randomNumber);
//         this.currentQuestion = this.quiz[i].mp3;
//         this.currentAnswer = this.quiz[i].speaker;
//         this.indexOfCurrentQuestion = i;
//     } 


//     for (var i = 0; i < this.quiz.length; i++) {
//         console.log(randomNumber);
//         console.log(this.questionsAsked.indexOf(i))     
//         if (this.questionsAsked.indexOf(i) == -1) {
//             this.questionsAsked.push(randomNumber);
//             this.currentQuestion = this.quiz[i].mp3;
//             this.currentAnswer = this.quiz[i].speaker;
//             this.indexOfCurrentQuestion = i;
//         } else {
//             randomNumber = Math.floor(Math.random() * this.quiz.length);
//         }
//     }
//     function pickQuestionFromArray() {
//         var randomNumber = Math.floor(Math.random() * this.quiz.length);

//     }

// }
    

  // talkingHeads.prototype.checkAnswer = function(letter) {
   
  //     if (this.currentQuestion.speaker[0] == letter) {
          
  //         for(var i = 0; i < this.secretWord.length; i++) {
             
  //           if ((this.currentQuestion.speaker[0] == this.secretWord.split("")[i]) && (this.goodLetters[i] == ".")){
  //               this.goodLetters.splice(i,1, this.currentQuestion.speaker[0])
  //               return;
  //               //alert("Paolo");
  //           }
  //         }
          
  //     } 
  // }

// var audioFiles = newGame.quiz.map(quiz => quiz.mp3 )

talkingHeads.prototype.checkAnswer = function(word) {
  console.log(word)
   
  if (this.quiz[this.indexOfCurrentQuestion].speaker == word) {
     console.log("YES")
     $("#rightAnswer").toggleClass("rightAnswer");
      for(var i = 0; i < this.secretWord.length; i++) {
         
        if ((this.quiz[this.indexOfCurrentQuestion].speaker.split("")[0] == this.secretWord.split("")[i]) && (this.goodLetters[i] == ".")){
            console.log(this.quiz[this.indexOfCurrentQuestion].speaker.split("")[0]);

            this.goodLetters.splice(i,1, this.quiz[this.indexOfCurrentQuestion].speaker.split("")[0])
            
            this.lastIndex = i;
            console.log("Paolo");
        }
      }

  } else {
    $("#rightAnswer").toggleClass("wrongAnswer");
  }
}