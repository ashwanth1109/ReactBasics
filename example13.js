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
