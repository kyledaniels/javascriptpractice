// create a function that takes height and weight as inputs and gives the calculated
// BMI value as an output. 

function bmiCalculator(weight, height){

    var bmi = Math.floor(weight/Math.pow(height,2));
    return bmi;

}

var bmi = bmiCalculator(65,1.8);