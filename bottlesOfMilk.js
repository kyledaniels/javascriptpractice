// create a function to determine the number of bottles of milk
// that can be purchased with milk costing $1.50

function getMilk(money){
    console.log("You can buy " + calcBottles(money,1.5) + " bottles of milk.");

    return money%1.5 //remainder equals the amount of change
}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney/costPerBottle);

    return numberOfBottles;
}

getMilk(5);

