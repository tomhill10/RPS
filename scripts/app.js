const playerRock = document.getElementById("rock");
const playerPaper = document.getElementById("paper");
const playerScissors = document.getElementById("scissors");
const plWins = document.getElementById("plWins");
const comWins = document.getElementById("comWins");
const outcomeMsg = document.getElementById("outcomeMessage");
const chosenPMsg = document.getElementById("chosenP");
const chosenCMsg = document.getElementById("chosenC");
const winBanner = document.getElementById("winConditionBanner");
const loseBanner = document.getElementById("loseConditionBanner");
let userInt = "";
let computerInt = "";
let outcomeMessageResult = "";
let playerWins = 0;
let computerWins = 0;

function getComputerInt() {
  const options = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  let chosenOption = options[randomNumber];
  return chosenOption;
}

playerRock.addEventListener("click", function () {
  userInt = "Rock";
  computerInt = getComputerInt();
  const result = whoWins(userInt, computerInt);
  if (result === 1) {
    showMatchMessage(computerInt, userInt);
    updatePlayerWins();
  } else if (result === 2) {
    showMatchMessage(computerInt, userInt);
    updateComputerWins();
  } else if (result === 3) {
    showMatchMessage(computerInt, userInt);
  }
  setTimeout(function () {
    checkWinCon();
  }, 2000);
});

playerPaper.addEventListener("click", function () {
  userInt = "Paper";
  computerInt = getComputerInt();
  const result = whoWins(userInt, computerInt);
  if (result === 1) {
    showMatchMessage(computerInt, userInt);
    updatePlayerWins();
  } else if (result === 2) {
    showMatchMessage(computerInt, userInt);
    updateComputerWins();
  } else if (result === 3) {
    showMatchMessage(computerInt, userInt);
  }
  setTimeout(function () {
    checkWinCon();
  }, 2000);
});

playerScissors.addEventListener("click", function () {
  userInt = "Scissors";
  computerInt = getComputerInt();
  const result = whoWins(userInt, computerInt);
  if (result === 1) {
    showMatchMessage(computerInt, userInt);
    updatePlayerWins();
  } else if (result === 2) {
    showMatchMessage(computerInt, userInt);
    updateComputerWins();
  } else if (result === 3) {
    showMatchMessage(computerInt, userInt);
  }
  setTimeout(function () {
    checkWinCon();
  }, 2000);
});

function whoWins(player, computer) {
  const options = ["Rock", "Paper", "Scissors"];
  if (player == computer) {
    outcomeMessageResult = "It's a Match!";
    return 3;
  }

  if (
    (player == "Paper" && computer == "Rock") ||
    (player == "Rock" && computer == "Scissors") ||
    (player == "Scissors" && computer == "Paper")
  ) {
    outcomeMessageResult = "Player Wins!";
    playerWins += 1;
    return 1;
  }

  if (
    (computer == "Paper" && player == "Rock") ||
    (computer == "Rock" && player == "Scissors") ||
    (computer == "Scissors" && player == "Paper")
  ) {
    outcomeMessageResult = "Computer Wins!";
    computerWins += 1;
    return 2;
  }
}

function updateComputerWins() {
  comWins.textContent = `Computer Wins: ${computerWins}`;
}

function updatePlayerWins() {
  plWins.textContent = `Player Wins: ${playerWins}`;
}

function showMatchMessage(computerInput, userInput) {
  chosenPMsg.textContent = `You play: ${userInput}!`;
  chosenCMsg.textContent = `Computer plays: ${computerInput}! `;
  outcomeMsg.textContent = `${outcomeMessageResult}`;
  setTimeout(function () {
    chosenPMsg.textContent = "";
    chosenCMsg.textContent = "";
    outcomeMsg.textContent = "";
  }, 3000);
}

function checkWinCon() {
  if (playerWins >= 3) {
    winBanner.style.display = "flex";
  }
  if (computerWins >= 3) {
    loseBanner.style.display = "flex";
  }
}
