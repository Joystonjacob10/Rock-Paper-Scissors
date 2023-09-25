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
    }else{
        return "It is a Draw"
    }
    
    
}

// const playerSelection = "rock"
// const computerSelection= getComputerChoice();
// console.log(singleRound(playerSelection,computerSelection))

function game(){
    
    let you = 0
    let computer =0
    for(let i=0;i<5;i++){
        let playerSelection=prompt("Rock,Paper or Scissors?")
        console.log(singleRound(playerSelection,getComputerChoice))
        if ((singleRound(playerSelection,getComputerChoice).slice(4,7)=="Win")){
            you +=1;

        }else if ((singleRound(playerSelection,getComputerChoice).slice(4,8)=="Lose")){
            computer +=1
        }
    }
    if(you>computer){
        console.log("You Won the Game") 
    }else if(computer>you){
        console.log("You Lost the Game") 
    }else {
        console.log("It is a Draw")
    }
}

game()