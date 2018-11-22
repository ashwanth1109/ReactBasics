//===========================================
// PERSON 1
//===========================================
// This is a constructor function. Can also be converted to a class declaration.
function Person1(name) {
    this.name = name;
    this.logName = function() {
        setTimeout(function() {
            console.log(this.name); // undefined
        }, 500);
    };
}

var person1 = new Person1("Ashwanth");
// person1.logName();

//===========================================
// PERSON 2
//===========================================

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

//===========================================
// PERSON 3
//===========================================

function Person3(name) {
    this.name = name;
    this.logName = function() {
        setTimeout(() => {
            this.name = "New Name";
            console.log(`Inside 1st time out, name is now ${this.name}`);
        }, 500);
    };

    this.logName2 = () => {
        setTimeout(() => {
            console.log(`Inside 2nd time out, name is now ${this.name}`);
        }, 500);
    };
}

var person3 = new Person3("Ash");
// person3.logName2(); // Ash
// person3.logName(); // New Name
// person3.logName2(); // New Name

//===========================================
// PERSON 4
//===========================================

function Person4(name) {
    this.name = name;
    this.logName = function() {
        setTimeout(function() {
            this.name = "New Name";
            console.log(`Inside 1st time out, name is now ${this.name}`);
        }, 500);
    };

    this.logName2 = function() {
        setTimeout(() => {
            console.log(`Inside 2nd time out, name is now ${this.name}`);
        }, 500);
    };
}

var person4 = new Person4("Ash");
// person4.logName(); // New Name
// person4.logName2(); // Ash
