import History from '../src/history';

describe('History', () => {
  describe('#record', () => {
    it('adds a new Transaction to log', () => {
      const history = new History();
      history.record(500, 0, 1000, new Date('2018-12-25'));
      const transaction = history.log()[0];
      expect(transaction.credit).toBe(500);
      expect(transaction.debit).toBe(0);
      expect(transaction.date).toEqual(new Date('2018-12-25'));
    });
  });
  it('stores transactions newest first', () => {
    const history = new History();
    history.record(500, 0, 1000, new Date('2018-12-25'));
    history.record(0, 500, 500, new Date('2018-12-26'));
    expect(history.log()[0].credit).toBe(0);
    expect(history.log()[1].credit).toBe(500);
  });
});
