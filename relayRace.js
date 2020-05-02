let raceNumber = Math.floor(Math.random() * 1000);

let runnerRegistrationTime = true;
let runnerAge = 18;

if(runnerAge>18){
   (raceNumber=raceNumber+1000)
}
  if(runnerAge>18 && runnerRegistrationTime){
    console.log('You will race at 9:30');
  } 
  else if (runnerAge>18 && !runnerRegistrationTime){
  console.log(`${raceNumber} You will race at 11:00am`)
  } else if (runnerAge<18){
    console.log('You will run at 12:30')
  } 
  else (runnerAge===18)
  console.log('Report to the registration desk.')
  
