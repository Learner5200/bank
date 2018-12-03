export default class TransactionView {
  constructor(transaction) {
    this.transaction = transaction;
  }

  render() {
    const { credit, debit, balance } = this.transaction;
    return `${this.readableDate()} || ${credit.toFixed(2)} || ${debit.toFixed(2)} || ${balance.toFixed(2)}`;
  }

  readableDate() {
    const { date } = this.transaction;
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}
