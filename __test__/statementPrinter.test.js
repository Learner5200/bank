import StatementPrinter from '../src/statementPrinter';

describe('StatementPrinter', () => {
  const transactionOne = {
    credit: 500,
    debit: 0,
    balance: 1000,
    date: new Date('2018-12-24'),
  };
  const transactionTwo = {
    credit: 0,
    debit: 1000,
    balance: 0,
    date: new Date('2018-12-25'),
  };
  const history = {
    log: (() => [transactionTwo, transactionOne]),
  };
  const printer = new StatementPrinter(history);
  describe('#render', () => {
    it('renders table of transactions newest first', () => {
      expect(printer.render()).toBe('date || credit || debit || balance\n25/12/2018 || 0.00 || 1000.00 || 0.00\n24/12/2018 || 500.00 || 0.00 || 1000.00');
    });
  });
});
