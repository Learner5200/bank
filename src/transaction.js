export default class Transaction {
  constructor(credit, debit, balance, date) {
    this.credit = credit;
    this.debit = debit;
    this.balance = balance;
    this.date = date;
  }
}
