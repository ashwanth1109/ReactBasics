const a = 1;
const b = 2;
const c = 3;
const object1 = {
    a,
    b,
    c,
    d() {
        console.log(this.a, this.b, this.c);
    }
};

object1.d(); // 1 2 3
