// create a function to determine the number of bottles of milk
// that can be purchased with milk costing $1.50

// function getMilk(amountOfMoney, costPerBottle){
//     console.log("You can purchase " + calBottles(amountOfMoney,costPerBottle)+ " of milk.")
//     return calChange(amountOfMoney, costPerBottle);

// }

// function calBottles(amountOfMoney, costPerBottle){
//     numberOfBottles = Math.floor(amountOfMoney/costPerBottle);
//     return numberOfBottles;
// }

// function calChange(amountOfMoney, costPerBottle){
//     change = (amountOfMoney%costPerBottle);
//     return change;
// }

// console.log("You have " + getMilk(5,1.5) + " in change.");


function getMilk(amountOfMoney,costPerBottle){
    console.log("You can purchase " + calcBottle(amountOfMoney, costPerBottle) + " bottles of milk.");
    return calChange(amountOfMoney,costPerBottle);
}

function calcBottle(amountOfMoney, costPerBottle){
    var amountOfBottles = (amountOfMoney/costPerBottle);
    return amountOfBottles;
}

function calChange(amountOfMoney,costPerBottle){
    change = (amountOfMoney%costPerBottle);
    return change;

}

console.log("You have " + getMilk(5,1.5) + " of change")















