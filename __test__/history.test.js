import History from '../src/history';

describe('History', () => {
  describe('#record', () => {
    test('adds a new Transaction to log', () => {
      const history = new History();
      history.record(500, 0, 1000, '2018-12-25');
      const transaction = history.log[0];
      expect(transaction.credit).toBe(500);
      expect(transaction.debit).toBe(0);
      expect(transaction.date).toEqual(new Date('2018-12-25'));
    });
  });
});
