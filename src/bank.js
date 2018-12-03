import History from './history';

export default class Bank {
  constructor(balance = 0) {
    this.balance = balance;
    this.history = new History();
  }

  deposit(value, date = new Date()) {
    this.balance += value;
    this.history.record(value, 0, this.balance, new Date(date));
  }
}
