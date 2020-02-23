// create a function to determine the number of bottles of milk
// that can be purchased with milk costing $1.50

function getMilk(money,costPerBottle){
    console.log("You can buy " + calcBottles(money,costPerBottle) + " bottles of milk.");

    return calcChange(money,costPerBottle) //remainder equals the amount of change
}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney/costPerBottle);

    return numberOfBottles;
}

function calcChange(startingAmount,costPerBottle){
    var change = (startingAmount%costPerBottle);
    return change;
}

console.log("You have " + getMilk(5, 1.5) + " of change.");




















