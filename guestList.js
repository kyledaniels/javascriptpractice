var guestList = ["Angela","Jack","Pam","James","Lara","Jason"];


var name = prompt("What is your name?")
if(guestList.includes(name)){
    console.log("Welcome to the party")
} else {
    console.log ("maybe next time")
}