export default class Transaction {
  constructor(value, date = new Date()) {
    if (value === 0) throw new Error('Invalid transaction.');
    this.value = value;
    this.type = this.value >= 0 ? 'credit' : 'debit';
    this.date = new Date(date);
  }
}
