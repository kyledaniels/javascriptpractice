//Write a code that will determine if the given year is a leap year. 

// leap year = year%4===0 && year%100!==0 && year%400===0


function isLeap(year){
  if(year%4===0){
    if(year%100===0){
      if(year%400===0){
        return "leap year"
      } else {
        "no leap year"}
    } 
    else{
      return "leap year"}
  }
  else{
    return "no leap year"}
}

  
    