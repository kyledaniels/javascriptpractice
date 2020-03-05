//Goal: create a Fizz for multiply of  3
// Buzz for every multiple of 5
// FizzBuzz for every number that is a multiple of 3 and 5




// var output = [];
// var count = 1;

// function fizzBuzz(){

//   if(count%3===0 && count%5===0){
//     output.push("fizzbuzz")
//   } 
  
//   else if (count%3===0){
//     output.push("fizz")
//   } 
  
//   else if (count%5===0){
//     output.push("buzz")
//   }
//    else{
//     outpush.push(count)
//   }
//   count++
//   console.log(output);

// }


var output = [];
var count = 1;

function fizzBuza(){

if(count%3===0 && count%5===0){
  output.push("FizzBuzz");
} 
  else if(count%3===0){
   output.push("Fizz")
  } 
  else if(count%5===0){
    output.push("Buzz")
  } 
   else{
     output.push("count")
   }
    count++; 
    console.log(output);


}