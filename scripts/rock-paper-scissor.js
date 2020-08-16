const options = ["rock",
                "paper",
                "scissors"];
let playerScore
let computerScore

function computerPlay(){
    let index = Math.floor(Math.random()*3)
    return options[index]
}


const btnR = document.querySelector('#btnR');
const btnP = document.querySelector('#btnP');
const btnS = document.querySelector('#btnS');

var fRock = () => alert(playRound("rock", computerPlay(),playerScore,computerScore));

var fPaper =() => alert(playRound("paper", computerPlay(),playerScore,computerScore));

var fScissors = () => alert(playRound("scissors", computerPlay(),playerScore,computerScore));


const btnNewGame = document.querySelector('#btnNewGame');

btnNewGame.addEventListener('click',beginGame);


function beginGame(){
    playerScore=0;
    computerScore=0;
    btnR.addEventListener('click', fRock);
    btnP.addEventListener('click', fPaper);
    btnS.addEventListener('click',fScissors);
}

  
function showResult(playerScore,computerScore){
    alert("Player:  "+playerScore+"  Computer: " +computerScore);
    endGame(playerScore,computerScore);
}

function endGame(playerScore,computerScore){
    if(playerScore >= 3 || computerScore >= 3){

        btnR.removeEventListener('click', fRock);
        btnP.removeEventListener('click', fPaper);
        btnS.removeEventListener('click', fScissors);

        (playerScore >=3) ? alert("You Win the match") : alert("You Lose the match")
        
    }
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock": 
                    showResult(playerScore,computerScore);
                    return "Tie! Rock vs Rock"
                    break
                case "paper":
                    computerScore++
                    showResult(playerScore,computerScore);
                    return "You Lose! Paper beats Rock"
                    break
                case "scissors":
                    playerScore++
                    showResult(playerScore,computerScore);
                    return "You Win! Rock beats Scissors";
                    break;    
            }
            break

        case "paper":
            switch(computerSelection){
                case "rock":
                    playerScore++;
                    showResult(playerScore,computerScore);
                    return "You Win! Paper beats Rock";
                    break
                case "paper":
                    showResult(playerScore,computerScore);
                    return "Tie! Paper vs Paper";
                    break
                case "scissors":
                    computerScore++;
                    showResult(playerScore,computerScore);
                    return "You Lose! Scissors beats Paper"
                    break    
            }
            break

        case "scissors":
            switch(computerSelection){
                case "rock":
                    computerScore++ 
                    showResult(playerScore,computerScore);
                    return "You Lose! Rock beats Scissors"
                    break
                case "paper":
                    playerScore++
                    showResult(playerScore,computerScore);
                    return "You Win! Scissors beat Paper"
                    break
                case "scissors":
                    showResult(playerScore,computerScore);
                    return "Tie! Scissors vs Scissors"
                    break    
            }
            break  
        default:
            return "That's not an option"
            break                    
    }
}