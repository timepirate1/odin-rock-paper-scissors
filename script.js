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
    
    if (humanChoice==='rock'){
        if(computerChoice==='scissor'){
            humanScore++;
            results.textContent= `You win !\n Rock beats Scissor \n Your Score ${humanScore} \n  My score ${computerScore}`
        }
       else if (computerChoice==='paper'){
              computerScore++;
              results.textContent =`You lose !\n Paper beats Rock \n Your Score ${humanScore} \n My score ${computerScore}`
        }
       else if (computerChoice==='rock'){
            results.textContent = `A Draw !\n Your Score ${humanScore} \n My score ${computerScore}`
        }
    }   else  if (humanChoice==='paper'){
        
        if(computerChoice==='rock'){
            humanScore++;
            results.textContent =`You win !\n Paper beats Rock \n Your Score ${humanScore} \n ${computerScore}`
        }
       else if (computerChoice==='scissor'){
              computerScore++;
              results.textContent =`You lose !\n Scissor beats Paper \n Your Score ${humanScore} \n ${computerScore}`
        }
        else if (computerChoice==='paper'){
            results.textContent = `A Draw !\n Your Score ${humanScore} \n ${computerScore}`
        }
    } else  {
    
        if(computerChoice==='paper'){
            humanScore++;
            results.textContent = `You win !\n Scissor beats Paper \n Your Score ${humanScore} \n ${computerScore}`
        }   
      else  if (computerChoice==='rock'){
              computerScore++;
              results.textContent = `You lose !\n Rock beats Scissors \n Your Score ${humanScore} \n ${computerScore}`
        }
      else  if (computerChoice==='scissor'){
        results.textContent =`A Draw !\n Your Score ${humanScore} \n ${computerScore}`
        }
    }
    // console.log(`Your Choice : ${humanChoice}\nMy Choice : ${computerChoice}`);
    // console.log(`Current Scores\nYour Score : ${humanScore}\nMy Score : ${computerScore}\n`);
}

//taking input from user
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

rock.addEventListener('click',()=>playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissor.addEventListener('click', () => playRound('scissor'));
