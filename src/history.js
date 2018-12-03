import Transaction from './transaction';

export default class History {
  constructor() {
    this.transactions = [];
  }

  record(credit, debit, total, date) {
    this.transactions.push(new Transaction(credit, debit, total, date));
  }

  log() {
    return this.transactions.sort((a, b) => b.date - a.date);
  }
}
