export default class Transaction {
  constructor(value) {
    this.value = value;
    this.type = this.value >= 0 ? 'deposit' : 'withdrawal';
  }
}
