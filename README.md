# ES6 or ES2015

1. Strict Mode - introduced in ES5
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

2. Polyfills/Shims
