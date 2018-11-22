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
