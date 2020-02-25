//Write a code that will determine if the given year is a leap year. 

// leap year = year%4===0 && year%100===0 && year%400===0
// 
//     function isLeap(Year){

//     if ((Year%100!==0) && (Year%4==0) || (Year%400===0)){
//        alert("This is a leap year");
//     }
    
//     else{

//         alert("This is not a leap year");
//     }
// }

// isLeap(2020);

// function isLeap(year){
//     if(year%4===0){
//      if(year%100===0){
//          if(year%400===0){
//              return "leap year";
//          } else {
//              return "not a leap year"
//          }
//      } else{
//          return "leap year"
//      }
//     } else{
//         return "not a leap year";
//     }
// }

// function isLeap(year){
//    if (year%4===0){
//      if (year%100===0){
//        if(year%400===0){
//            return "leap year"
//        } else{
//            return "not a leap year"
//        }
//      }else {
//          return "leap year"
//      }
//    } else{
//        return "not a leap"
//    }
// }

function isLeap(year){
  if(year%4===0){
    if(year%100===0)
     if(year%400===0){
       return "leap year"
     } else{
       return "no leap year"
     }
     {
      return "leap year"
    }
  } return "no leap year"
}