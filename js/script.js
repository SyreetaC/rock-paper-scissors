// declare global data
let userWins = 0;
let userLoses = 0;
let userTies = 0;

let playerChoice;
let computerChoice;
//use let because the values are going to change

// prompt player for choice
playerChoice = prompt("Please enter your choice (R, P or S");

if (ValidateChoice()) {
  computerChoice = randomChoiceGenerator();
  console.log(playerChoice);
  console.log(computerChoice);
} else {
  alert("Please choose from the valid options: R,P,S");
}

//validate player choice
const ValidateChoice = function () {
  if (playerChoice) {
    console.log("Continue");
  } else {
    alert("Please choose a valid option: R, P, S)");
  }
};

ValidateChoice();

//randomly generate computer choice
const randomChoiceGenerator = function () {
  const validChoices = ["R", "P", "S"];
  const randomIndex = Math.floor(Math.random() * 3);
  return validChoices[randomIndex];
};

//apply game logic to check who wins
const gameLogic = function () {
  console.log(playerChoice);
  console.log(computerChoice);
  if (playerChoice) {
  } else {
  }
};

//update scores of winner/loser

//display scores
const displayScores = function () {
  const result = {
    wins: userWins,
    loses: userLoses,
    ties: userTies,
  };

  console.table(result);
};

//present confirm option to play again
