const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error, please type: rock, paper or scissors.");

    // if you put return you will get rid of the undefined. because you are actually returning a value.
    //return 'Error, please type: rock, paper or scissors.'
  }
};

// console.log(getUserChoice('Paper')); // should print 'paper'

// console.log(getUserChoice('fork')); // should print 'Error!' and `undefined`

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};

//test randomNumber
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Draw";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Sorry, computer won!";
    } else {
      return "Congratulations, you won!";
    }
  }

  if (userChoice === "bomb") {
    return "You won!!!";
  }
};
// console.log(determineWinner("rock", "rock")); // draw
// console.log(determineWinner("rock", "paper")); // computer won
// console.log(determineWinner("rock", "scissors")); // you won
// console.log(determineWinner("paper", "paper")); // draw
// console.log(determineWinner("paper", "scissors")); // computer won
// console.log(determineWinner("paper", "rock")); // you won
// console.log(determineWinner("scissors", "scissors")); // draw
// console.log(determineWinner("scissors", "rock")); // computer won
// console.log(determineWinner("scissors", "paper")); // you won

const playGame = () => {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log(`you threw: ${userChoice}`);
  console.log(`the computer threw: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
