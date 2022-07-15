// function userPlay(){ 

//     var items = ['rock', 'paper', 'scissors'];
//     var tem = items[Math.floor(Math.random() * items.length)];
//     return tem

// }

function computerPlay(){ 

    var items = ['rock', 'paper', 'scissors'];
    var item = items[Math.floor(Math.random() * items.length)];
    return item

}
// console.log(computerplay())
let userinput = prompt("rock, paper, scissors??")


function playRound(userinput,computerSelection){ 

    
    if(userinput == 'rock' && computerSelection == 'paper'){
    return "You Lose! Paper beats Rock"}

        else if(userinput == 'paper' && computerSelection == 'rock'){
            return "You Win! Paper beats Rock"}

            else if(userinput == 'paper' && computerSelection == 'scissors'){
                return "You Lose! Scissors beats Paper"} 

                else if(userinput == 'scissors' && computerSelection == 'paper'){
                    return "You Win! Scissors beats Paper"}   
                    
                    
                else if(userinput == 'scissors' && computerSelection == 'Rock'){
                    return "You lose! Rock beats scissors"} 

                    else{
                        return "You Win! Rock beats scissors"} 

}

// const playerSelection = userPlay()
const computerSelection = computerPlay()

console.log(playRound(userinput,computerSelection))

function game(){ 

    for (let i = 0; i < 5; i++) { 
    console.log (playRound())
    }

}