class BankAccount{
    #balance;

    constructor(owner, balance){
        this.owner = owner;
        this.#balance = balance;
    }

    deposit(amount){
        this.#balance += amount;
        console.log(`Top up berhasil. Saldo saat ini: ${this.#balance}.`);
    }

    getBalance(){
        return this.#balance;
    }
}

const aliceBankAccount = new BankAccount(`Alice`, 2000);
console.log(aliceBankAccount);

aliceBankAccount.deposit(3000);
console.log(aliceBankAccount.getBalance());