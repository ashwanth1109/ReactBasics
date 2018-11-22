# Useful things to know while working in React

## 1. Strict Mode - introduced in ES5

This is a way to opt in to a restricted variant of Javascript and opting out of 'sloppy mode'.
Take note that not all browsers support strict mode and can exhibit unintentional behavior.
Strict mode code can coexist with sloppy mode code.
Some changes that strict mode makes to JS semantics are -
a) Eliminates some JS silent errors by converting them to throw errors
b) Fixes mistakes which make it hard for JS engines to perform optimizations
c) Prohibits some syntax likely to be defined in the future ECMAScripts

```javascript
// Example usage
const exampleFunction = () => {
    "use strict";
    console.log("This is a strict mode function");
};
```

MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode  
SO Reference: https://stackoverflow.com/questions/8651415/what-is-strict-mode-and-how-is-it-used  
External Reference: https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/

## 2. Polyfills/Shims -

You can refer to MDN documentation to find fallback code for functionality that is not yet available on certain browsers.

## 3. Babel/Transpiling -

Babel is a popular transpiler for ES6. Transpilers take 'dialects' of code (ex. ES6) and convert the code for you so that it can run across platforms (or browsers).

To run babel from command line

```
npm init
npm install babel-cli
npm install babel-preset-es2015
```

To use it with a build tool like webpack add the following to your package.json

```json
"scripts": {
    "build": "babel --presets es2015 app.js -o compiled.js"
}
```

Now you can write some ES6 code in app.js and when you run `npm run build` and look at compiled.js you can see the transpiled code.

## 4. Block Scoping with let

You can check out IIFE with var in example1.js
To solve the requirement of IIFE, we now have a provision for let instead.
Let is not a replacement for var. Instead it is a way to get block scoping more conveniently.

```javascript
let a = 2;

{
    let a = 4;
    console.log(a); // 4 [Block level scope]
}

console.log(a); // 2 [Global scope]
```

## 5. Declaring a constant using const

```javascript
const pi = 3.14;
// pi = 2.14; // TypeError: Assignment to constant variable

const array1 = [1, 2, 3, 4];
array1.push(5); // This is allowed since it is an object method call on a constant
array1.shift(); // also allowed for the same reasons as above
// array1 = [5]; // This is not allowed. TypeError: Assignment to constant variable
```

## 6. Arrow Functions

Arrow Functions are anonymous functions that can be assigned to a variable to create a function expression

```javascript
var func1 = function() {
    return "This is a function expression in ES5";
};
```

```javascript
var func2 = () => {
    return "This is a function expression in ES6 using arrow functions";
};
```

```javascript
var func3 = () =>
    "This is the shorthand notation for function expression in ES6";
```

## 7. Arrow Functions and Binding

When using callbacks, this gets redefined leading to context issues in JS. Check out example2.js which shows some more experiments to differentiate arrow functions and ES5 functions

```javascript
// Arrow functions let you bind correctly to values going up until the top most level.
// To create arrow functions use the fat arrow or hash rocket
// Person2 is a constructor function. It can also be declared as a class.
function Person2(name) {
    this.name = name;
    this.logName = function() {
        setTimeout(function() {
            this.name = "New Name";
            // However this does not alter the value
            this.logName = function() {
                setTimeout(() => {
                    console.log(this.name); // New Name
                }, 500);
            };
            this.logName();
        }, 500);
    };
    this.logName2 = function() {
        setTimeout(() => {
            this.name = "New Name 2";
            // This alters the value because set timeout is defined using arrow
            // and lets you access parent constructors this.name by binding it correctly
            this.logName = function() {
                setTimeout(() => {
                    console.log(this.name);
                }, 500);
            };
            this.logName();
        }, 500);
    };
}

var person2 = new Person2("Ashwanth");
person2.logName(); // New Name'
setTimeout(() => {
    console.log(`Persons name is currently ${person2.name}`); // Name is not altered
}, 1000);
setTimeout(() => {
    person2.logName2(); // New Name2
    setTimeout(() => {
        console.log(`Persons name is currently ${person2.name}`); // Name is altered
    }, 1000);
}, 2000);
```

## 8. Support for Classes

Inheritance is now similar to other object oriented languages. Earlier, classes had to inherit using

```javascript
SuperHuman.prototype = Object.create(Human.prototype);
SuperHuman.prototype.constructor = SuperHuman;
```

```javascript
class Human {
    static callFunc() {
        console.log(`Call Func 1 is called`);
    }
    static callFunc2() {
        console.log(`Call Func 2 is called`);
        this.callFunc();
    }
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
}

class SuperHuman extends Human {
    fly() {
        console.log(`${this.name} is flying`);
    }
}

const clarkKent = new Human("Clark Kent");
clarkKent.walk();
const superMan = new SuperHuman("Super Man");
superMan.walk();
superMan.fly();
// Static methods are called on the class itself
// And not on instances of the class
Human.callFunc();
SuperHuman.callFunc2();
```

## 9. Using for...of and for...in loops

Loop through arrays using for...of loop -

```javascript
const array1 = [1, 2, 3, 4];
for (let element of array1) {
    console.log(element);
}
```

Loop through all non-symbol enumerable properties of an object

```javascript
const object1 = {
    prop1: 1,
    prop2: 2,
    prop3: 3
};
for (const prop in object1) {
    // hasOwnProperty method is used to prevent inherited properties from being displayed
    if (object1.hasOwnProperty(prop)) {
        const element = object1[prop];
        console.log(prop, element);
    }
}
```

## 10. Default Values

When creating functions, we can define default values for the parameters being passed in. Similarly, we can set default values to properties of classes using the constructor function.

```javascript
const func1 = (val = 0) => val;

console.log(func1()); // 0
console.log(func1(5)); // 5

class BankAccount {
    constructor(bankBalance = 0) {
        this.bankBalance = bankBalance;
    }
}

const account1 = new BankAccount();
console.log(account1.bankBalance);

const account2 = new BankAccount(1000);
console.log(account2.bankBalance);
```

## 11. Array.isArray() method

You can use the isArray() method of Array object to check if a variable's datatype is array.

```javascript
const arr = [1, 2, 3];
Array.isArray(arr); // true
```

## 12. Arguments Object

The arguments object that provides flexibility in the number of arguments a function can take. However, this will only work when using the old function syntax and not the arrow function syntax.

```javascript
function product() {
    let prod = 1;
    for (let i = 0; i < arguments.length; i++) {
        prod *= arguments[i];
    }
    return prod;
}

console.log(product(1, 2, 3, 4)); // Returns 24

const sum = () => {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        // arguments does not work with arrow functions
        sum += arguments[i];
    }
    return sum;
};

// console.log(sum(1, 2, 3, 4)); // This will not work
```

## 13. Spread and Rest Operators

```javascript
const arr = [1, 2, 3, 4, 5, 6];

// Spread operator spreads the array into individual elements
// And then we pass it as parameters to Math.max() function
console.log(Math.max(...arr)); // 6

// The rest operator gathers many values into an array - opposite of spread
const returnOnlyNums = (...arrayParams) => {
    const nums = arrayParams.filter(currentElement => {
        return typeof currentElement === "number";
    });
    return nums;
};

console.log(returnOnlyNums(1, "a", false, 2, [1, 2, 3], 3)); // [1,2,3]
```

## 14. Template Literals & String Interpolation

```javascript
const name = "Ashwanth";

// String Interpolation with variables
console.log(`Hello ${name}`); // Hello Ashwanth

const getName = () => "Ashwanth";

// String Interpolation with functions
console.log(`Hello ${getName()}`); // Hello Ashwanth

// String Interpolation for multi line strings
const template = `
This String is a multi-line String.
It is written using template literals
`;
console.log(template);
```

## 15. Object Literals

```javascript
const a = 1;
const b = 2;
const c = 3;
const object1 = {
    a,
    b,
    c,
    d() {
        console.log(this.a, this.b, this.c);
    }
};

object1.d(); // 1 2 3
```

## 16. Array Destructuring

```javascript
// Array Destructuring
let a, b;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

// Ignoring certain values
[a, , b] = [1, 2, 3, 4];
console.log(a); // 1
console.log(b); // 3

// Using the rest operator
let c, d, rest;
[c, d, ...rest] = [10, 20, 30, 40, 50];
console.log(c); // 10
console.log(d); // 20
console.log(rest); // [30, 40, 50]

// Setting default values
[c = 1, d = 2] = [3];
console.log(c); // 3
console.log(d); // 2
```

## 17. Object Destructuring

```javascript
// Object Destructuring
const { a, b } = {
    a: 1,
    b: "abc"
};
console.log(a); // 1
console.log(b); // abc

// Changing the name of variables
const c = {
    a: 1,
    b: 2
};
const { a: foo, b: bar } = c;
console.log(foo); // 1
console.log(bar); // 2

// Setting default value
const { d = 10, e = 5 } = { d: 3 };
console.log(d); // 3
console.log(e); // 5

// Pulling values into a functions argument
const user1 = {
    id: 1,
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
};

const userId = ({ id }) => id;

console.log(`User id is ${userId(user1)}`);

// Pulling values with a default value in functions argument
const printABC = ({
    a = "Value doesn't exist",
    b = "Value doesn't exist",
    c = "Value doesn't exist"
}) => [a, b, c];

console.log(printABC({ a: 1, b: 2 }));

// Reassigning property names
// prettier-ignore
const foo1 = { "abc": true };
console.log(foo1.abc); // true
const foo2 = { "a-b-c": true };
console.log(foo2["a-b-c"]); // true
const { "a-b-c": abc } = foo2;
console.log(abc); // true

// Computing a variable name
let key = "z";
let { [key]: foo3 } = { z: "bar" };

console.log(foo3); // bar
```

## 18. Swapping values using Destructuring

```javascript
let a = 1;
let b = 2;

// No more temp variables
[a, b] = [b, a];
```

## 19. Merging Objects - Crucial for redux

```javascript
let a = {
    name: "Ashwanth"
};
let b = {
    language: "Javascript"
};
Object.assign(a, b);
console.log(a); // Combines b into a

//===========================================
// Creating a brand new object which is a clone
// of another with some minor changes - Used in Redux
//===========================================
let john = {
    firstName: "John",
    lastName: "Doe"
};

let jane = Object.assign({}, john, { firstName: "Jane" });
console.log(jane);
```

## 20. Array Helper Methods

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//===========================================
// FILTER - obtains a subarray of items that meet a given condition
//===========================================
const numGreaterThan5 = nums.filter(currentNum => {
    return currentNum > 5;
});
console.log(numGreaterThan5); // [6, 7, 8, 9]

//===========================================
// REDUCE - reduces an array into a single value by accumulating it
//===========================================
const sum = nums.reduce((accumulatedValue, currentNum) => {
    return accumulatedValue + currentNum;
});
console.log(sum); // 45

//===========================================
// MAP - returns an array that undergoes a given transformation on each element
//===========================================
const doubledValues = nums.map(currentNum => {
    return currentNum * 2;
});
console.log(doubledValues); // [2, 4, 6, 8, 10, 12, 14, 16, 18]

//===========================================
// FIND - returns first item that meets given condition
//===========================================
const found = nums.find(currentNum => {
    return currentNum > 5;
});
console.log(found); // 6

//===========================================
// FIND INDEX - returns the index position of first item that meets condition
//===========================================
const foundIndex = nums.findIndex(currentNum => {
    return currentNum > 5;
});
console.log(foundIndex); // 6

//===========================================
// INCLUDES - returns a boolean to denote whether a certain element is in the array
//===========================================
const doesArrayHave5 = nums.includes(5);
console.log(doesArrayHave5); // true

//===========================================
// CONCAT - concatenates one array with another item or array
//===========================================
const doubleArray = nums.concat(nums);
console.log(doubleArray);

const arrayPlus10 = nums.concat(10);
console.log(arrayPlus10);

//===========================================
// SLICE - extracts a subarray from a given start and end index
//===========================================
const section = nums.slice(2, 4);
console.log(section);
```

## 21. Asynchronous Programming using Async/Await

```javascript
const getData = async () => {
    const searchResponse = await fetch(
        "http://www.omdbapi.com/?apikey=53aa2cd6&s=Star"
    );
    const searchData = await searchResponse.json();
    const titleData = searchData.Search[0];
    console.log(titleData);
};

getData();
```
