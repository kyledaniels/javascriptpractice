// create a function to determine the number of bottles of milk
// that can be purchased with milk costing $1.50

function getMilk(money){
    var numberOfBottles = Math.floor(money/1.5)
    console.log("You can buy " + numberOfBottles + " bottles of milk.");

    return money%1.5 //remainder equals the amount of change
}



var change = getMilk(10);
console.log(change);

