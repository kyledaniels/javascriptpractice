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