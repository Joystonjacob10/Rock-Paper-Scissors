function getComputerChoice(){
    let computerChoice=Math.floor(Math.random()*3)
    if (computerChoice==0){
        return "Rock"
    }else if(computerChoice==1){
        return "Paper"
    }else{
        return "Scissors"
    }
}

function singleRound(playerSelection,getComputerChoice){
    if (playerSelection.toLowerCase()=="rock" && getComputerChoice=="Paper"){
        return "You Lose! Paper beats Rock"

    }else if(playerSelection.toLowerCase()=="rock" && getComputerChoice=="Scissors"){
        return "You Win! Rock beats Scissors"
    }
    else if(playerSelection.toLowerCase()=="paper" && getComputerChoice=="Scissors"){
        return "You Lose! Scissor beats Paper"
    }else if(playerSelection.toLowerCase()=="paper" && getComputerChoice=="Rock"){
        return "You Win! Paper beats Rock"
    }else if(playerSelection.toLowerCase()=="scissor" && getComputerChoice=="Rock"){
        return "You Lose! Rock beats Scissors"
    }else if(playerSelection.toLowerCase()=="scissor" && getComputerChoice=="Paper"){
        return "You Win! Scissor beats Paper"
    }
    
    
}