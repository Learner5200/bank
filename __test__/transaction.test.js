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
  });
});
