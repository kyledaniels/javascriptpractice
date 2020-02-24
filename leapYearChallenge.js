//Write a code that will determine if the given year is a leap year. 

// leap year = year%4===0 && year%100===0 && year%400===0
// 
    function isLeap(Year){

    if ((Year%100!==0) && (Year%4==0) || (Year%400===0)){
       alert("This is a leap year");
    }
    
    else{

        alert("This is not a leap year");
    }
}

isLeap(2020);