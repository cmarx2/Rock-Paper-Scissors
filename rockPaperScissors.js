const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput ==='scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error!');
    }
};

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3);
 switch(randomNumber){
   case 0: 
     return 'rock';
   case 1:
     return 'paper';
   case 2:
     return 'scissors';
  }
}
const determineWinner = (userChoice, computerChoice) => {
   if(userChoice === 'bomb') {
     return 'The user won! You bombed your opponent!'
   }
  
	if(userChoice === computerChoice) {
    return 'tie';
  }
  
  if(userChoice === 'rock'){
    if(computerChoice ==='paper'){
      return 'The computer won!';
    } else{
        return 'The user won!';
      }
    }
  if(userChoice === 'paper'){
    if(computerChoice ==='scissors'){
      return 'The computer won!';
    } else{
        return 'The user won!';
      }
    }
  if(userChoice === 'scissors'){
    if(computerChoice ==='rock'){
      return 'The computer won!';
    } else{
        return 'The user won!';
      }
    }  
    }

const playGame = () =>{
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log("You chose: " + userChoice);
  console.log("Computer chose:" + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
