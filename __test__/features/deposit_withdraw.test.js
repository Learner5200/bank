import Bank from '../../src/bank';

const bank = new Bank();

test('can make deposits and withdrawals, and print a history of such transactions', () => {
  bank.deposit(1000, '10-01-2012');
  bank.withdraw(500, '14-01-2012');
  expect(bank.statement()).toInclude('14/01/2012');
});
