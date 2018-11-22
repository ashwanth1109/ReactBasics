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
