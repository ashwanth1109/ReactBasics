// Segway into IIFE
// Normally, variable declarations are 'hoisted' up to the top of whatever function they are declared in
// or global if no functions exist

// Test 1
let a = 2;

if (true) {
    let a = 4;
}

console.log(a); // O/P is 2

// Test 2
let b = 2;

if (true) {
    b = 4;
}

console.log(b); // O/P is 4

// Test 3
let c = 2;

if (true) {
    let c = 4;
    console.log(c);
}

// Test 4
var d = 2;

if (true) {
    var d = 4;
}

console.log(d); // O/P is 4

// Test 5
var e = 2;

if (true) {
    e = 4;
}

console.log(e); // O/P is 4

// Test 6
var f = 2;

if (true) {
    var f = 4;
    console.log(f);
}

// O/P is 4

//===========================================
// IIFE - Immediate Invoked Function Expression
//===========================================
// Often used to create a block of scope

var g = 2;

(function() {
    var g = 4;
    console.log(`Inside the IIFE, g is ${g}`); // 4
})();

console.log(`Outside the IIFE, g is ${g}`); // 2

// for (var i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i); // O/P is 5,5,5,5,5
//     }, 500 * i);
// }

// for (var i = 0; i < 5; i++) {
//     (function(i) {
//         setTimeout(() => {
//             console.log(i); // O/P is 0,1,2,3,4
//         }, 500 * i);
//     })(i);
// }

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i); // O/P is 0,1,2,3,4
    }, 500 * i);
}
