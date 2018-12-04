import History from '../src/history';

describe('History', () => {
  const TransactionMock = jest.fn();
  TransactionMock.mockImplementation(({ date }) => ({ date }));

  describe('#record', () => {
    it('adds a new Transaction with parameters to log', () => {
      const history = new History();
      const params = {
        credit: 500,
        debit: 0,
        balance: 1000,
        date: new Date('2018-12-25'),
      };
      history.record(params, TransactionMock);
      expect(TransactionMock).toHaveBeenCalledWith(params);
      expect(history.log().length).toBe(1);
    });
  });
  it('stores transactions newest first', () => {
    const history = new History();
    history.record({
      credit: 500,
      debit: 0,
      balance: 1000,
      date: new Date('2018-12-25'),
    }, TransactionMock);
    history.record({
      credit: 0,
      debit: 500,
      balance: 500,
      date: new Date('2018-12-26'),
    }, TransactionMock);
    expect(history.log()[0].date).toEqual(new Date('2018-12-26'));
    expect(history.log()[1].date).toEqual(new Date('2018-12-25'));
  });
});
