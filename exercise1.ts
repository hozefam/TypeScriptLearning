type BankAccount = {
  money: number;
  deposit: (value: number) => void;
};
type AccountHolder = {
  name: string;
  bankAccount: BankAccount;
  hobbies: string[] | null;
};

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: AccountHolder = {
  name: "Hozefa",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
