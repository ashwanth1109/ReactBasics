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
