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
