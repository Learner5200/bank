import Transaction from './transaction';

export default class History {
  constructor() {
    this.log = [];
  }

  record(credit, debit, total, date = new Date()) {
    this.log.push(new Transaction(credit, debit, total, date));
  }
}
