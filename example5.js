const func1 = (val = 0) => val;

console.log(func1()); // 0
console.log(func1(5)); // 5

class BankAccount {
    constructor(bankBalance = 0) {
        this.bankBalance = bankBalance;
    }
}

const account1 = new BankAccount();
console.log(account1.bankBalance);

const account2 = new BankAccount(1000);
console.log(account2.bankBalance);
