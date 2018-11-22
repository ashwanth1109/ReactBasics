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
