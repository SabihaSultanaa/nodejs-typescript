// Tests for equality and inequality with strings
console.log('Equality test with strings :','apple'==='apple');
console.log('Inequality test with strings :','apple'!=='apple');
// Tests using lower case functon
console.log('Test with lower case function', 'HELLO'.toLowerCase()==='hello');
// Tests using lower case functon
console.log('Test with lower case function', 'car'.toLowerCase()==='Car');
//numerical test with equality
console.log('Equality test with numeric :',50===50);
//numerical test with inequality
console.log('Iquality test with numeric :', 63 !==63);
//numerical test with greater than
console.log('greater than test :', 3<20);
//numerical test with less than
console.log('less than test  :', 5>20);
//numerical test with greater than or equal to
console.log('greater than or equal to test :', 30>=20);
//numerical test with less than or equal to
console.log('less than or equal to test  :', 5<=4);
// test using "and"
console.log('and operator test :', 5===5 && 10>5);
// test using "and"
console.log('and operator test :', 9===9 && 0>5);

// test using "or"
console.log('or operator test :', (5 as number)===3 || true);
// test using "or"
console.log('or operator test :', 3!==3 || false);
//test weather an item is in array
let fruits:string[]=['apple', 'banana','orange'];
console.log('testing apple is in array :' ,fruits.includes('apple'));
//test weather an item is not in array
console.log('testing banana is not in array :' ,!fruits.includes('banana'));