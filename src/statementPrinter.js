import TransactionView from './transactionView';

export default class StatementPrinter {
  constructor(history) {
    this.log = history.log();
    this.header = 'date || credit || debit || balance';
  }

  render() {
    const rows = [this.header];
    this.log.forEach((transaction) => {
      const row = new TransactionView(transaction).render();
      rows.push(row);
    });
    return rows.join('\n');
  }
}
