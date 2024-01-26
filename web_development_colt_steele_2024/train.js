var beerCount = 100;

while (beerCount != 0) {
    console.log(beerCount+' beers left on the rack.');
    beerCount--;
    console.log('Take one, '+beerCount+' beers on the rack.');
}


for (var i = 0; i < 2; i++) {
    console.log(i);
    i++;
}

// is this a comment?

// The Fibonacci sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21
// n0, n1
// n2 = n0 + n1

// Original code
var fibSeq = [0, 1];
var c0 = 0;
var c1 = 1;
var n0 = fibSeq[c0];
var n1 = fibSeq[c1];
var n2 = n0 + n1;
c0++;
c1++;
fibSeq.push(n2);
console.log(fibSeq);
// 3 number with 1 step (3-2)

var qty = prompt('How many Fibonacci do you want?');
var fibSeq = [0, 1];
var c0 = 0;
var c1 = 1;
while (c1 < qty){
    var n0 = fibSeq[c0];
    var n1 = fibSeq[c1];
    var n2 = n0 + n1;
    c0++;
    c1++;
    fibSeq.push(n2);
}

console.log(fibSeq);

// So how to run Javascript when you code in the vscode is: keep the script in the head section of an html (you
// can make a new dummy html file), run the html in a browser and open the developer tool in the browser. Every time
// you want to run the script just refresh the browser.

// Revision on how to run a javascript!!!
// You can place js just like css, inline, internal and external.
// Remember if you place external, put the link in the html body at the end!

