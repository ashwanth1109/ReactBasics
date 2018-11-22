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
