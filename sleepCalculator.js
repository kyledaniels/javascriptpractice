function getSleepHours(day){
    switch(day){
      case 'Monday':
      return 5
     
      break;
      case 'Tuesday':
      return 6
      break;
      case 'Wednesday':
      return 7
      break;
      case 'Thursday':
      return 8
      break;
      case 'Friday':
      return 9
      break;
      default:
      error
      break;
    }
   }
   function getActualSleepHours(){
      getSleepHours();
   }
   function getIdealSleepHours(){
     var idealHours=8;
     return (idealHours*7);
   }
   calculateSleepHours= ()=>{
    actualSleepHours===getActualSleepHours()
    idealSleepHours===getIdealSleepHours()
    if(actualSleepHours===idealSleepHours){
       console.log('I get the perfect amount of sleep')
    }else if(actualSleepHours>idealSleepHours){
       console.log('I got more than enough sleep')
    } else if(actualSleepHours<idealSleepHours){
       conosle.log('I need to get some more sleep')
    }
  }