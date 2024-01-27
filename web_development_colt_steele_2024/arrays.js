let numArray = [3, 5, 7, 11, 13, 15];
console.log(numArray.slice(1, 4));
let learningTime = ['04.30', '05.30', '08.30', '09.40', '10.50', '12.00'];
let learningTimeDescription = ['Dawn Learning', 'Morning Learning', 'Evening Learning'];
console.log(`Learning at dawn begin at ${learningTime[0]}`);

// change the content in the array
learningTime[0] = '04.00';
console.log(learningTime);

// push, pop, shift, unshift
learningTime.push('15.00'); // to add to end
console.log(learningTime);
learningTime.pop(); // to remove the end
console.log(learningTime);
learningTime.shift('03.00'); // to remove the start
console.log(learningTime);
learningTime.unshift('03.00'); // to add to start
console.log(learningTime);

// concat arrays
console.log(learningTime.concat(learningTimeDescription));

// index of
console.log(learningTime.indexOf('08.30'));
// includes 
console.log(learningTime.includes('24.00'));

// reverse
console.log(learningTime.reverse());

// slice and splice
console.log(learningTime.splice(0, 3));

// Object literals (in python its dictionary)
let userInfo = {
    Name : 'Eko',
    Age : 45,
    AccountNum : 1,
}
console.log(userInfo);
console.log(userInfo['Name']); // how to call 1
console.log(userInfo.Name);  // how to call 2
// with the same method you can modify the value

// for loop
for(let x = 1; x <= 10; x++){
    console.log(x);
} // this is how: begin with x = 1, is x less than or equal with 10?, if yes then console log and x++


