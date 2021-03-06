import Transaction from '../src/transaction';

describe('Transaction', () => {
  describe('when initialized', () => {
    it('has properties given to it', () => {
      const transaction = new Transaction({
        credit: 500,
        debit: 0,
        balance: 1000,
        date: new Date('2018-12-25'),
      });
      expect(transaction.credit).toBe(500);
      expect(transaction.debit).toBe(0);
      expect(transaction.date).toEqual(new Date('2018-12-25'));
    });
  });
});
