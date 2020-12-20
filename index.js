// importing packages
var readlineSync = require('readline-sync');
const chalk = require('chalk');

// questions and answers array
var score=0;
var questions=["\n1.Inke Hath me ---- ka katora de do fir bhi bheek mangenge\na.SONE KA KATORA\tb.Chandi KA KATORA\n\nYour Answer->","\n2.Muh se ---- nikal ke bat kr re\na.SUPARI\tb.Chocolate\n\nYour Answer->","\n3.---- ka chakkar babu bhaiya ---- ka chakkar\na.AURAT \tb.LADKI\n\nYour Answer->"];
var answers=["a","a","a"];

// onboard message
console.log(chalk.bgGrey.underline.bold("##########  welcome welcome welcome!👋 #############"));
console.log(chalk.bgYellow.black.bold("\nTo this brand new 💁‍♂️ HERA PHERI MEME(May-May)🤣  quiz!"))
console.log(chalk.bgYellow.black.bold("\n-----------------------------------------------------"));


console.log(chalk.green("\nPoints Structure"));console.log(chalk.whiteBright("\nwin:+200RS,\tlose:-50RS"))
// checking exicitement
var q1="\nare you exicited? \ny or n?\n";
var exicitInput=readlineSync.question(chalk.green(q1))
if(exicitInput=='y'){
  console.log("\nAbhi Maja Ayega na bhidu🥳")
  quiz();
  
}
else if(exicitInput=='n'){
  console.log("chal na bro ek bar to try kr maja ayega(babu bhaiya ki kasam)")
  quiz();
}

function quiz(){
  console.log("\nonly type option i.e a or b")
  for(i=0;i<questions.length;i++){
    check(questions[i],answers[i])
  }
  console.log(chalk.green("\nAbhi is %i rs ko laxmi chit fund me dal diya he 25 din baad milna PAISA Double kr dunga 🤣 🤣"),score)
}

function check(question,answer){
  var userInput=readlineSync.question(chalk.green(question));
  if(answer==userInput){
    score+=200;
    console.log(chalk.yellowBright(" 200 RS de isko "))
    console.log("score %i",score)
  }
  else{
    score-=50;
    console.log(chalk.redBright(" 50 rs KAAT "))
    console.log("score %i",score)
  }
}