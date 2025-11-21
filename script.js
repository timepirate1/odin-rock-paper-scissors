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


//logic for rock paper scissor
let playRound = (humanChoice) =>{
  
    computerChoice = getComputerChoice;
    
    if (humanChoice==='rock'){
        if(computerChoice==='scissor'){
            console.log(`You WIN !!!!!\n ${humanChoice} beats ${computerChoice} !`);
            humanScore++;
        }
       else if (computerChoice==='paper'){
              console.log(`You LOSE !!!!!\n ${humanChoice} beats ${computerChoice} !`);
              computerScore++;
        }
       else if (computerChoice==='rock'){
            console.log('Ohh noooo! A DRAW : (')
        }
    }   else  if (humanChoice==='paper'){
        
        if(computerChoice==='rock'){
            console.log(`You WIN !!!!!\n ${humanChoice} beats ${computerChoice} !`);
            humanScore++;
        }
       else if (computerChoice==='scissor'){
              console.log(`You LOSE !!!!!\n ${humanChoice} beats ${computerChoice} !`);
              computerScore++;
        }
        else if (computerChoice==='paper'){
            console.log('Ohh noooo! A DRAW : (')
        }
    } else  {
    
        if(computerChoice==='paper'){
            console.log(`You WIN !!!!!\n ${humanChoice} beats ${computerChoice} !`);
            humanScore++;
        }
      else  if (computerChoice==='rock'){
              console.log(`You LOSE !!!!!\n ${humanChoice} beats ${computerChoice} !`);
              computerScore++;
        }
      else  if (computerChoice==='scissor'){
            console.log('Ohh noooo! A DRAW : (')
        }
    }
    console.log(`Your Choice : ${humanChoice}\nMy Choice : ${computerChoice}`);
    console.log(`Current Scores\nYour Score : ${humanScore}\nMy Score : ${computerScore}\n`);
}

//taking input from user
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');

rock.addEventListener('click',()=>playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissor.addEventListener('click', () => playRound('scissor'));
