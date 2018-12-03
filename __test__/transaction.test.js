import Transaction from '../src/transaction';

describe('Transaction', () => {
  describe('when initialized with positive value of 500', () => {
    const transaction = new Transaction(500);

    it('has credit of 500', () => {
      expect(transaction.credit).toBe(500);
    });
    it('has debit of 0', () => {
      expect(transaction.debit).toBe(0);
    });
    it('defaults to current date', () => {
      expect(transaction.date.toDateString()).toBe(new Date().toDateString());
    });
  });
  describe('when initialized with negative value of -500', () => {
    const transaction = new Transaction(-500);
    it('has debit of 500', () => {
      expect(transaction.debit).toBe(500);
    });
    it('has credit of 0', () => {
      expect(transaction.credit).toBe(0);
    });
  });
  describe('when initialized with value of 0', () => {
    it('raises error', () => {
      const invalidTransaction = () => new Transaction(0);
      expect(invalidTransaction).toThrow('Invalid transaction');
    });
  });
  describe('when initialized with date', () => {
    it('has date given to it', () => {
      const transaction = new Transaction(500, '2018-12-25');
      expect(transaction.date).toEqual(new Date('2018-12-25'));
    });
  });
});
