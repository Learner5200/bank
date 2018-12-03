import TransactionView from '../src/transactionView';

describe('TransactionView', () => {
  it('renders single row of bank statement', () => {
    const transaction = {
      credit: 500,
      debit: 0,
      balance: 1000,
      date: new Date('2018-12-15'),
    };
    const view = new TransactionView(transaction);
    expect(view.render()).toBe('15/12/2018 || 500.00 || 0.00 || 1000.00');
  });
});
