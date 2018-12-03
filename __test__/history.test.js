import History from '../src/history';

describe('History', () => {
  describe('#add', () => {
    test('adds a new Transaction to log', () => {
      const history = new History();
      history.add(500, '2018-12-25');
      const transaction = history.log[0];
      expect(transaction.value).toBe(500);
      expect(transaction.date).toEqual(new Date('2018-12-25'));
    });
  });
});
