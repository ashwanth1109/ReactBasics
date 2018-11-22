// Array Destructuring
let a, b;
[a, b] = [1, 2];
// console.log(a); // 1
// console.log(b); // 2

// Ignoring certain values
[a, , b] = [1, 2, 3, 4];
// console.log(a); // 1
// console.log(b); // 3

// Using the rest operator
let c, d, rest;
[c, d, ...rest] = [10, 20, 30, 40, 50];
// console.log(c); // 10
// console.log(d); // 20
// console.log(rest); // [30, 40, 50]

// Setting default values
[c = 1, d = 2] = [3];
// console.log(c); // 3
// console.log(d); // 2
