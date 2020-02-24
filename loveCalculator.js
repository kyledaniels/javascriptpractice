// Create a love calculator that enters two names and gives back
// a percentage of their chance of love with a love score.
var name1 = prompt("What is your name?");
var name2 = prompt("What is your name?");

var chanceOfLove = Math.floor((Math.random()*100)+ 1);
// chanceOfLove = chanceOfLove * 9;
// chanceOfLove = Math.floor(chanceOfLove * 9) + 1;

if (chanceOfLove === 100){
    alert("You two were made in Heaven for each other")
}
 else if  (chanceOfLove )

alert(name1 + "and " + name2 + (" You have a " + chanceOfLove + "%  chance of Love!!!" ));

