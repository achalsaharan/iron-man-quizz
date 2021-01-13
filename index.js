const readlineSync = require("readline-sync");
const chalk = require('chalk');

let score = 0;

const questions = [{
    question: "What is the name of iron man's father? ",
    answer: 'Howard Stark'},
  {
    question: 'what is the actual name of Pepper Potts? ',
    answer: 'Virginia Potts'
  },
  {
    question: 'In which year did Iron Man first appear in comics? ',
    answer: '1963'
  },
  {
    question: 'Which college did Tony Stark go to? ',
    answer: 'MIT'
  },
];

var highScores = [
  {
    name: "Tanay",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
];

function welcome(){
  console.log(`Iron Man Quizz`)
  var userName = readlineSync.question(chalk.cyanBright("What is your name? "));

  console.log(`Hi ${userName}, welcome to the IRON MAN quizz \n`);
}

function play(question, answer){
  var userAnswer = readlineSync.question(chalk.keyword('orange')(question));

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green('right'));
    score += 1; 
  } else{
    console.log(chalk.red('Wrong'));
  }

  console.log(`current score ${score}`);
  console.log('----------------\n');
}

function game(){
  for(let i=0; i<questions.length; i++){
    play(questions[i].question, questions[i].answer);
  }
}

function displayScore(){
  console.log(chalk.yellowBright(`your score is ${score}\n`));
  

  console.log("List of high scores:  ")
  highScores.forEach((entry) => {
    console.log(entry.name + ": " + entry.score);
  })

  //checking if the user has made a highscre or not
  let isHighScore = true;
  for(let i=0; i<highScores.length; i++){
    if(highScores[i].score > score){
      isHighScore = false;
    }
  }
  if(isHighScore === true){
    console.log(chalk.greenBright(`\nCongratulations you have made a new high score`));
  }
}



welcome();
game();
displayScore();