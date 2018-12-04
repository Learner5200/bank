import TransactionClass from './transaction';

export default class History {
  constructor() {
    this.transactions = [];
  }

  record(parameters, Transaction = TransactionClass) {
    this.transactions.push(new Transaction(parameters));
  }

  log() {
    return this.transactions.sort((a, b) => b.date - a.date);
  }
}
