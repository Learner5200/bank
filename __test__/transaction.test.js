import Transaction from '../src/transaction'

describe('Transaction', () => {
  describe('when initialized with positive value of 500', () => {
    const transaction = new Transaction(500);
    test('has value of 500', () => {
      expect(transaction.value).toBe(500);
    });
    test('has type of "deposit"', () => {
      expect(transaction.type).toBe('deposit');
    });
    test('defaults to current date', () => {
      expect(transaction.date.toDateString()).toBe(new Date().toDateString());
    });
  });
  describe('when initialized with negative value of -500', () => {
    const transaction = new Transaction(-500);
    test('has value of -500', () => {
      expect(transaction.value).toBe(-500);
    });
    test('has type of "withdrawal"', () => {
      expect(transaction.type).toBe('withdrawal');
    });
  });
  describe('when initialized with value of 0', () => {
    test('raises error', () => {
      const invalidTransaction = () => new Transaction(0);
      expect(invalidTransaction).toThrow('Invalid transaction');
    });
  });
  describe('when initialized with date', () => {
    const transaction = new Transaction(500, '2018-12-25');
    expect(transaction.date).toEqual(new Date('2018-12-25'));
  });
});
