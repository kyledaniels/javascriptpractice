// Create a love calculator that enters two names and gives back
// a percentage of their chance of love with a love score.
var name1 = prompt("What is your name?");
var name2 = prompt("What is your name?");

var chanceOfLove = Math.random();
chanceOfLove = chanceOfLove * 9;
chanceOfLove = Math.floor(chanceOfLove * 9) + 1;

alert(name1 + " " + name2 + (" You have a " + chanceOfLove + "%  chance of Love!!!" ));
