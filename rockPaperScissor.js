const getUserChoice = (userInput)=>{
    userInput=userInput.toLowerCase();
    if(userInput==='rock'){
      return userInput;
    }else if(userInput==='paper'){
      return userInput;
    }else if(userInput==='scissors'){
      return userInput;
  } else  return 'error'
  }
  
   const getComputerChoice = ()=>{
    computerChoice= Math.floor(Math.random()*3);
    if(computerChoice===0){
        return 'rock';
    } else if (computerChoice===1){
        return 'paper';
    } else if (computerChoice===2){
        return 'scissors';
    }
         else return 'error'
   }
  
  const determineWinner = (userChoice,computerChoice)=>{
     if(userChoice===computerChoice){
       return 'Game is a tie';
     } if(userChoice==='rock'){
        if(computerChoice==='paper'){
          return 'Computer won';
        } else return 'User won'
     } if(userChoice==='paper'){
           if(computerChoice==='scissors'){
             return 'computer won'
           } else{
             return 'user won'
           }if(userChoice==='scissors'){
      if(computerChoice==='rock'){
        return 'computer won'
      } else return 'user won'
           }
     }
  }
  
  const playGame = ()=>{
    const userChoice=getUserChoice('scissors')
    const computerChoice=getComputerChoice()
    console.log(userChoice);
    console.log(computerChoice);
    determineWinner(userChoice,computerChoice)
  console.log(determineWinner(userChoice,computerChoice));
  }
  playGame();
c  