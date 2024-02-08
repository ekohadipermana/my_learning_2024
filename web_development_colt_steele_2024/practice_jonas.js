// const bmi = mass / (height ** 2);
/*
let massMark;
let heightMark;
let massjohn;
let heightJohn;
massMark = 78;
heightMark = 1.69;
massjohn = 92;
heightJohn = 1.95;
const bmiMark = Math.round(massMark / (heightMark ** 2));
const bmiJohn = Math.round(massjohn / (heightJohn ** 2));
console.log(bmiMark, bmiJohn);
let markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

// using template literal
console.log(`The BMI of Mark is ${bmiMark}, and the BMI of John is ${bmiJohn}.`);
console.log(`This is
a multiline
with 
a template literal`);

// testing


let customerAge = 30;
if (customerAge >= 18) {
    console.log('You are adult ');
    console.log('You are legal');
}


let massMark;
let heightMark;
let massjohn;
let heightJohn;
massMark = 78;
heightMark = 1.69;
massjohn = 92;
heightJohn = 1.95;
const bmiMark = Math.round(massMark / (heightMark ** 2));
const bmiJohn = Math.round(massjohn / (heightJohn ** 2));

if (bmiJohn > bmiMark) {
    console.log(`John's BMI is ${bmiJohn}, higher than Mark's (${bmiMark})`);
}
else {
    console.log(`Mark's BMI is ${bmiMark}, higher than John's (${bmiJohn})`);
}

// console.log(bmiMark, bmiJohn);
// let markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

*/

// Good morning! I am back!

/* There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.



let scoreDolphins;
let scoreKoalas;

dolphinScoreData = 96 + 108 + 89;
koalaScoreData = 88 + 91 + 110;
scoreDolphins = dolphinScoreData / 3;
scoreKoalas = koalaScoreData / 3;

if (scoreDolphins > scoreKoalas) {
    console.log('Dolphin wins the trophy');
}
else if (scoreKoalas > scoreDolphins) {
    console.log('Koal wins the trophy');
}
else if (scoreDolphins === scoreKoalas) {
    console.log('Both win the trophy');
}
*/

// About Switch Statement
const day = 'wednesday';

switch (day) {
    case 'monday': 
        console.log('Learning HTML');
        break;
    case 'tuesday':
        console.log('Learning CSS');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Learning Javascript');
        break;
    default:
        console.log('not valid');
}

// About Ternary Operator
const age = 21;
age >= 18 ? console.log('I like to drink wine 🍷') :
            console.log('I like to drink water 🥛');


/* Exercise
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. 
It's not allowed to use an if...else statement (if it's easier for you, you can 
start with an if...else statement, and then try to convert it to a ternary operator).
Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
Example: The bill was 275, the tip was 41.25, and the total value 316.25.
Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂
TEST DATA: Test with different bill values: 275, 40, and 430
HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

// the code:




