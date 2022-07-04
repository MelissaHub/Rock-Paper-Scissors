function userPlay(){ 

    var items = ['rock', 'paper', 'scissors'];
    var tem = items[Math.floor(Math.random() * items.length)];
    return tem

}

function computerPlay(){ 

    var items = ['rock', 'paper', 'scissors'];
    var item = items[Math.floor(Math.random() * items.length)];
    return item

}
// console.log(computerplay())


function playRound(playerSelection,computerSelection){ 

    
    if(playerSelection == 'rock' && computerSelection == 'paper'){
    return "You Lose! Paper beats Rock"}

        else if(playerSelection == 'paper' && computerSelection == 'rock'){
            return "You Win! Paper beats Rock"}

            else if(playerSelection == 'paper' && computerSelection == 'scissors'){
                return "You Lose! Scissors beats Paper"} 

                else if(playerSelection == 'scissors' && computerSelection == 'paper'){
                    return "You Win! Scissors beats Paper"}   
                    
                    
                else if(playerSelection == 'scissors' && computerSelection == 'Rock'){
                    return "You lose! Rock beats scissors"} 

                    else{
                        return "You Win! Rock beats scissors"} 

}

const playerSelection = userPlay()
const computerSelection = computerPlay()

console.log(playRound(playerSelection,computerSelection))

function game(){ 

    for (let i = 0; i < 5; i++) { 
    console.log (playRound())
    }

}