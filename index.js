var readLineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readLineSync.question('Hello. Please enter your name:');

console.log(`\nHi ${chalk.red.bold(userName)}, Let's play a small quiz. The quiz is about our most loved cricketer, MS Dhoni. Take this quiz to see how well do you know the 'Captain Cool'. For every right answer you will awarded 1 point and for every wrong answer 1 point will be deducted.\n\nIf you score 5 on 5 in level 1, then you qualify for level 2 which has 5 questions and if you score 5 on 5 in level two, then you qualify for level 3 which is the final round consisting of 5 questions.`);

var score = 0;

var highScores = [{
  name: 'Akash',
  score: 14
}, {
  name: 'Shrishti',
  score: 13
}];

console.log(chalk.bgBlue(`\nHere are the players with their best scores:`));
highScores.forEach((s) => {
  console.log(chalk.green(`${s.name}: ${s.score}`));
});

console.log(chalk.blue.bold(`\nDo you think you can beat them? All the best!!`));

function play(question, answer) {
  var userAnswer = readLineSync.question(chalk.cyanBright.bold(`\n ${question}`));

  console.log(`You answered "${userAnswer}"`);

  if(userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green('Yayy!! You are right.'));
    score++;
    console.log(`Current score: ${chalk.green(score)}`);
    console.log('______________________________');
  } else {
    console.log(chalk.red('Oops!! You are wrong.'));
    score--;
    console.log(`Current score: ${chalk.red(score)}`);
    console.log('______________________________');
  };
};

// Array of objects
// Level 1 questions
var questionsArrLevelOne = [{
  question: `Q 01. MS Dhoni's Jersey no. ?
  a: '7'
  b: '9'
  c: '77'\n`,
  answer: 'a',
}, {
  question: `Q 02. Where is Dhoni\'s Hometown ?
  a: 'Jamshedpur'
  b: 'Ranchi'
  c: 'Dhanbad'
  d: 'Sahibganj'\n`,
  answer: 'b',
}, {
  question: `Q 03. Which of the following awards is not won by MS Dhoni
  a: 'Padma Shri'
  b: 'Bharat Ratna'
  c: 'Padma Bhushan'
  d: 'Rajiv Gandhi Khel Ratna'\n`,
  answer: 'b',
},{
  question: `Q 04. Dhoni holds the post of Vice-President of Which Indian Company ?
  a: 'Ambuja Cements'
  b: 'ACC Cements'
  c: 'India Cements'
  d: 'ACC Cements'\n`,
  answer: 'c',
},{
  question: `Q 05. MS Dhoni hit the Winning Shot in ICC Cricket World Cup Final in 2011, Who was the Sri Lanka's bowler when MSD hit the Six ?
  a: Lasith Malinga
  b: Mutthiah Murlitharan
  c: Nuwan Kulasekra
  d: Thisara Perera\n`,
  answer: 'c', 
}];

// Level two questions
var questionsArrLevelTwo = [{
  question: `Q 06. MS Dhoni played his last test match against which team ?
  a: Australia
  b: England
  c: Bangladesh
  d: South Africa\n`,
  answer: 'a', 
}, {
  question: `Q 07. Dhoni is the co-owner of which Indian Super League football team ?
  a: Pune City
  b: Chennaiyin FC
  c: Kerala City
  d: Bengaluru FC\n`,
  answer: 'b', 
}, {
  question: `Q 08. Where did MS Dhoni make his 183 not out ?
  a: Mumbai
  b: Chennai
  c: Dharmashala
  d: Jaipur\n`,
  answer: 'd', 
}, {
  question: `Q 09. Who portrayed the character of MS Dhoni in his biopic ?
  a: Akshay Kumar
  b: Ayushmann Khurana
  c: Sushant Singh Rajput
  d: Rajkumar Rao\n`,
  answer: 'c', 
}, {
  question: `Q 10. MS Dhoni's first ODI century came in 2005. Against which team did he score it?
  a: Australia
  b: Pakistan
  c: England
  d: Bangaldesh\n`,
  answer: 'b', 
}];

// Level three questions
var questionsArrLevelThree = [{
  question: `Q 11. How many runs did MS Dhoni score in his final ODI for India against New Zealand at 2019 World Cup?
  a: 46
  b: 49
  c: 40
  d: 50\n`,
  answer: 'd', 
}, {
  question: `Q 12. How many titles has Chennai Super Kings won in IPL?
  a: 3
  b: 4
  c: 5
  d: 2\n`,
  answer: 'a', 
}, {
  question: `Q 13. Which railway zone did dhoni work for, as a TTE?
  a: Central Indian Railways
  b: Eastern Indian Railways
  c: Western Indian Railways
  d: South Eastern Railways\n`,
  answer: 'd',
},{
  question: `Q 14. Which team did Dhoni make his Ranji trophy debut for ?
  a: Bengal,
  b: Bihar,
  c: Railways,
  d: Chattisgarh\n`,
  answer: 'b', 
},{
  question: `Q 15. Apart from cricket, Dhoni is also a big fan of football, and in fact wanted to pursue it further. Which other sport did he play apart from these two??
  a: Hockey
  b: Football
  c: Badminton
  d: Kabaddi\n`,
  answer: 'c', 
}];

// loop
questionsArrLevelOne.forEach((q) => {
  play(q.question, q.answer);
});

// Level 2 if condition: Score >= 5
if (score >= 5) {
  console.log(chalk.green.bold('\nCongratulations!! You qualify for level 2. Score 5 on 5 and you qualify for level 3 which is the final level.'));

  questionsArrLevelTwo.forEach((q) => {
    play(q.question, q.answer);
  });
};

// Level 3 if condition: Score >= 10
if(score >= 10) {
  console.log(chalk.green.bold('\nCongratulations!! You qualify for level 3. Score 5 on 5 and you will be the champion.'));
};

  questionsArrLevelThree.forEach((q) => {
    play(q.question, q.answer);
});

if(score > 14) {
  console.log(chalk.green(`\nCongratulations!! You have set a new high Score.`));
  highScores.unshift({
    name: userName,
    score: score,
  });

  highScores.forEach((s) => {
    console.log(chalk.green.bold(`${s.name}: ${s.score}`));
  });
};

console.log(chalk.green.bold('\nThanks for playing. Share a screenshot and challenge your friends and see if they can beat your score. All the best & keep your calm!'))
;