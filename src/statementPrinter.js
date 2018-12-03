import TransactionView from './transactionView';

export default class StatementPrinter {
  constructor(history) {
    this.history = history;
    this.header = 'date || credit || debit || balance';
  }

  render() {
    const rows = [this.header];
    const log = this.history.log();
    log.forEach((transaction) => {
      const row = new TransactionView(transaction).render();
      rows.push(row);
    });
    return rows.join('\n');
  }
}
