let userScore = 0;
let computerScore = 0;

const choices = document.body.querySelectorAll(".choice");
const winningMessage = document.body.querySelector("#msg");
const userScoree = document.body.querySelector("#userScore");
const computerScoree = document.body.querySelector("#computerScore");

const draw = (winningMessage) => {
    // console.log("Match was draw!");
    winningMessage.innerText = "Game Was Draw. Play again."
}

 const showWinner = (userWin) => {
    if(userWin){
        // console.log("You Win!");
         winningMessage.innerText = "User win"
         userScore++
         userScoree.innerText = userScore
    }
    else{
        // console.log("You lost");
         winningMessage.innerText = "Computer win"
         computerScore++
         computerScoree.innerText = computerScore
    }
 }

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"]
    let optionChoice = Math.floor(Math.random() * 3)
    // console.log("Compuetrs choice : ", options[optionChoice]);
    return options[optionChoice];
}

const playGame = (userChoice) => {
    // console.log("Users Choice :", userChoice);
    const computerChoice = genComputerChoice();
    // console.log("Computers Choice :", computerChoice);

    if(userChoice === computerChoice){
        draw(winningMessage);
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        }
        else{
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let choiceId = choice.getAttribute("id")
        // console.log("Chopice was clicked", choiceId);
        playGame(choiceId)
        // genComputerChoice()
    });
});