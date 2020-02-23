// Create a love calculator that enters two names and gives back
// a percentage of their chance of love with a love score.
var name1 = prompt("What is your name?");
var name2 = prompt("What is your name?");

var chanceOfLove = Math.floor((Math.random()*9)+ 1);
// chanceOfLove = chanceOfLove * 9;
// chanceOfLove = Math.floor(chanceOfLove * 9) + 1;

alert(name1 + "and " + name2 + (" You have a " + chanceOfLove + "%  chance of Love!!!" ));

