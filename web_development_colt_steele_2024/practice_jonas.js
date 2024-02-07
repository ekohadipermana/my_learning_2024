// const bmi = mass / (height ** 2);
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