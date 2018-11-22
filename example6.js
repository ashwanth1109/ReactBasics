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
        sum += arguments[i];
    }
    return sum;
};

// console.log(sum(1, 2, 3, 4)); // This will not work
