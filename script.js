let humanScore =0;
let computerScore =0;

//fetching computer's choice
let getComputerChoice = ()=> {
    let computerDraw = Math.random();
    let computerChoice ;
    if(computerDraw>=0&& computerDraw<0.333) computerChoice = 'rock';
    if(computerDraw>=0.333&& computerDraw<0.666) computerChoice = 'paper';
    if(computerDraw>=0.666&& computerDraw<1) computerChoice = 'scissor';
    return computerChoice;
}

const results = document.querySelector('#results')
//logic for rock paper scissor
let playRound = (humanChoice) =>{
  
    computerChoice = getComputerChoice();
    if ( humanScore<5||computerScore<5){
    if (humanChoice==='rock'){
        if(computerChoice==='scissor'){
            humanScore++;
            results.textContent= `Rock beats Scissor \n Your Score ${humanScore} \n  My score ${computerScore}`
        }
       else if (computerChoice==='paper'){
              computerScore++;
              results.textContent =`Paper beats Rock \n Your Score ${humanScore} \n My score ${computerScore}`
        }
       else if (computerChoice==='rock'){
            results.textContent = `A Draw !\n Your Score ${humanScore} \n My score ${computerScore}`
        }
    } 
    else  if (humanChoice==='paper'){
        
        if(computerChoice==='rock'){
            humanScore++;
            results.textContent =`Paper beats Rock \n Your Score ${humanScore} \n My Score ${computerScore}`
        }
       else if (computerChoice==='scissor'){
              computerScore++;
              results.textContent =`Scissor beats Paper \n Your Score ${humanScore} \n My Score ${computerScore}`
        }
        else if (computerChoice==='paper'){
            results.textContent = `A Draw !\n Your Score ${humanScore} \n My Score${computerScore}`
        }
    } else  {
    
        if(computerChoice==='paper'){
            humanScore++;
            results.textContent = `Scissor beats Paper \n Your Score ${humanScore} \n My Score ${computerScore}`
        }   
      else  if (computerChoice==='rock'){
              computerScore++;
              results.textContent = `Rock beats Scissors \n Your Score ${humanScore} \n My Score${computerScore}`
        }
      else  if (computerChoice==='scissor'){
        results.textContent =`A Draw !\n Your Score ${humanScore} \n My Score ${computerScore}`
        }
    }
    }
    

}

function disableButtons() {
    document.querySelector('#rock').disabled = true;
    document.querySelector('#paper').disabled = true;
    document.querySelector('#scissor').disabled = true;
}

let playGame = (humanChoice) =>{
    playRound(humanChoice)
if (humanScore===5){
    results.innerHTML = '<h1>YOU WIN !!!! ;) </h1><p>refresh to play again</p>';
    disableButtons();  
}
else if (computerScore===5){
    results.innerHTML = '<h1>I WIN !!!!! HAHAHAAHAHAHAHA</h1><p>refresh to play again</p>';
    disableButtons();

}
}
document.querySelector('#rock').addEventListener('click', () => playGame('rock'));
document.querySelector('#paper').addEventListener('click', () => playGame('paper'));
document.querySelector('#scissor').addEventListener('click', () => playGame('scissor'))