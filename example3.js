class Human {
    static callFunc() {
        console.log(`Call Func 1 is called`);
    }
    static callFunc2() {
        console.log(`Call Func 2 is called`);
        this.callFunc();
    }
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
}

class SuperHuman extends Human {
    fly() {
        console.log(`${this.name} is flying`);
    }
}

const clarkKent = new Human("Clark Kent");
clarkKent.walk();
const superMan = new SuperHuman("Super Man");
superMan.walk();
superMan.fly();
// Static methods are called on the class itself
// And not on instances of the class
Human.callFunc();
SuperHuman.callFunc2();
