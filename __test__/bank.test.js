import MockDate from 'mockdate';
import Bank from '../src/bank';

describe('Bank', () => {
  let bank;
  beforeEach(() => {
    bank = new Bank();
  });
  it('has balance of 0 by default', () => {
    expect(bank.balance).toBe(0);
  });
  it('can be initialized with balance', () => {
    const bankTwo = new Bank(1000);
    expect(bankTwo.balance).toBe(1000);
  });
  describe('#deposit', () => {
    it('increases balance by amount', () => {
      bank.deposit(100);
      expect(bank.balance).toBe(100);
    });
    it('records transaction in history and transforms date', () => {
      const spy = jest.spyOn(bank.history, 'record');
      bank.deposit(100, '2018-12-25');
      expect(spy).toHaveBeenCalledWith(100, 0, 100, new Date('2018-12-25'));
      spy.mockRestore();
    });
    it('defaults to todays date if none given', () => {
      const spy = jest.spyOn(bank.history, 'record');
      MockDate.set(new Date('2018-1-1'));
      bank.deposit(100);
      expect(spy).toHaveBeenCalledWith(100, 0, 100, new Date('2018-1-1'));
      spy.mockRestore();
    });
  });
});
