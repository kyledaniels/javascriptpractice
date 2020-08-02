/ Variable to represent my age in normal year.

const myAge = 52;

// Variable to represent early years of a dog's life.

let earlyYears = 2;

earlyYears *= 10.5;

/*Variable to hold later years of a dog's life.
 Variable is then multiplied by 4 to calculate the
 number of dog years accounted for by your later years*/

let laterYears = myAge - 2;
    laterYears *=4;

    console.log(earlyYears);
    console.log(laterYears);

// Variable to store earlyYears and laterYears combined

const myAgeInDogYears = earlyYears + laterYears;

//Variable to store my name with lower case method

const myName = 'Kyle'.toLowerCase();


//Console log statement to console that displays user's name and age in dog years.

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
