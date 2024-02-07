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
*/

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



