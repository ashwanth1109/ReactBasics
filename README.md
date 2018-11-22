# Things to know while getting into ES6 or ES2015

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

When using callbacks, this gets redefined leading to context issues in JS.

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
