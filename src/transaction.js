export default class Transaction {
  constructor(value, date = new Date()) {
    if (value === 0) throw new Error('Invalid transaction.');
    this.credit = value >= 0 ? Math.abs(value) : 0;
    this.debit = value < 0 ? Math.abs(value) : 0;
    this.date = new Date(date);
  }
}
