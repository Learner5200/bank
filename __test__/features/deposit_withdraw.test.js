import Account from '../../src/account';

const account = new Account();

test('user can make deposits and withdrawals, and print a history of their transactions', () => {
  account.deposit(1000, '2012-1-10');
  account.deposit(2000, '2012-1-13');
  account.withdraw(500, '2012-1-14');
  const spy = jest.spyOn(console, 'log');
  account.statement();
  expect(spy).toHaveBeenCalledWith('date || credit || debit || balance\n14/1/2012 || 0.00 || 500.00 || 2500.00\n13/1/2012 || 2000.00 || 0.00 || 3000.00\n10/1/2012 || 1000.00 || 0.00 || 1000.00');
  spy.mockRestore();
});
