import StatementPrinter from '../src/statementPrinter';

describe('StatementPrinter', () => {
  const TransactionViewMock = jest.fn();
  TransactionViewMock.mockImplementation(transaction => ({ render: () => transaction.message }));
  const transactionOne = { message: 'Render Transaction One' };
  const transactionTwo = { message: 'Render Transaction Two' };
  const history = { log: () => [transactionTwo, transactionOne] };
  const printer = new StatementPrinter();
  describe('#render', () => {
    it('prints table of transactions', () => {
      expect(printer.render(history, TransactionViewMock)).toBe('date || credit || debit || balance\nRender Transaction Two\nRender Transaction One');
    });
  });
});
