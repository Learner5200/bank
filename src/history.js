import Transaction from './transaction';

export default class History {
  constructor() {
    this.transactions = [];
  }

  record(parameters) {
    this.transactions.push(new Transaction(parameters));
  }

  log() {
    return this.transactions.sort((a, b) => b.date - a.date);
  }
}
