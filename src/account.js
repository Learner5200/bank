import History from './history';
import StatementPrinter from './statementPrinter';

export default class Account {
  constructor(balance = 0) {
    this.balance = balance;
    this.history = new History();
    this.printer = new StatementPrinter(this.history);
  }

  deposit(value, date = new Date()) {
    this.balance += value;
    this.history.record(value, 0, this.balance, new Date(date));
  }

  withdraw(value, date = new Date()) {
    if (this.balance - value < 0) throw new Error('Insufficient funds');
    this.balance -= value;
    this.history.record(0, value, this.balance, new Date(date));
  }

  statement() {
    console.log(this.printer.render());
  }
}
