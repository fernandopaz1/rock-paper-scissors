const options = ["rock",
                "paper",
                "scissors"];
let playerScore
let computerScore

function computerPlay(){
    let index = Math.floor(Math.random()*3)
    return options[index]
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock": 
                    return "Tie! Rock vs Rock"
                    break
                case "paper":
                    computerScore++
                    return "You Lose! Paper beats Rock"
                    break
                case "scissors":
                    playerScore++
                    return "You Win! Rock beats Scissors"
                    break    
            }
            break

        case "paper":
            switch(computerSelection){
                case "rock":
                    playerScore++
                    return "You Win! Paper beats Rock"
                    break
                case "paper":
                    return "Tie! Paper vs Paper"
                    break
                case "scissors":
                    computerScore++
                    return "You Lose! Scissors beats Paper"
                    break    
            }
            break

        case "scissors":
            switch(computerSelection){
                case "rock":
                    computerScore++ 
                    return "You Lose! Rock beats Scissors"
                    break
                case "paper":
                    playerScore++
                    return "You Win! Scissors beat Paper"
                    break
                case "scissors":
                    return "Tie! Scissors vs Scissors"
                    break    
            }
            break  
        default:
            return "That's not an option"
            break                    
    }
}

function game(){
    let playerSelection
    playerScore=0
    computerScore=0
    while(playerScore<5 && computerScore<5){
        playerSelection = prompt("Enter your selection: rock paper or scissors")
        if (playerSelection === null) {
            playerSelection = "";
        }
        playerSelection = playerSelection.toLowerCase()
        alert(playRound(playerSelection,computerPlay()))
        alert("Player:  "+playerScore+"  Computer: " +computerScore)
        
    }
    (playerScore == 5) ? console.log("You Win the match") : console.log("You Lose the match")  
}
game()