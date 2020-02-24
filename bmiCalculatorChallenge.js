// create a function that takes height and weight as inputs and gives the calculated
// BMI value as an output. 

function bmiCalculator(weight, height){
            
    var bmi = Math.floor(weight/Math.pow(height,2));

     if (bmi<18.5){
         console.log("Your BMI is " + bmi + " , so you are underweight.")
     }
      else if (bmi === 18.5 && bmi<=24.9){
         console.log("Your bmi is " + bmi + " , so you have a normal weight.")
      }
       else (bmi> 24.9) 
           console.log("Your BMI is " + bmi + " , so you are overweight.")
       

}

var bmi = bmiCalculator(65,1.8);