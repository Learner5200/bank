import TransactionViewClass from './transactionView';

export default class StatementPrinter {
  constructor() {
    this.header = 'date || credit || debit || balance';
  }

  render(history, TransactionView = TransactionViewClass) {
    const rows = [this.header];
    history.log().forEach((transaction) => {
      const row = new TransactionView(transaction).render();
      rows.push(row);
    });
    return rows.join('\n');
  }
}
