import MockDate from 'mockdate';
import Account from '../src/account';

describe('Account', () => {
  let account;
  beforeEach(() => {
    account = new Account();
  });
  it('has balance of 0 by default', () => {
    expect(account.balance).toBe(0);
  });
  it('can be initialized with balance', () => {
    const accountTwo = new Account(1000);
    expect(accountTwo.balance).toBe(1000);
  });
  describe('#deposit', () => {
    it('increases balance by amount', () => {
      account.deposit(100);
      expect(account.balance).toBe(100);
    });
    it('records transaction in history and transforms date', () => {
      const spy = jest.spyOn(account.history, 'record');
      account.deposit(100, '2018-12-25');
      expect(spy).toHaveBeenCalledWith(100, 0, 100, new Date('2018-12-25'));
      spy.mockRestore();
    });
    it('defaults to todays date if none given', () => {
      const spy = jest.spyOn(account.history, 'record');
      MockDate.set(new Date('2018-1-1'));
      account.deposit(100);
      expect(spy).toHaveBeenCalledWith(100, 0, 100, new Date('2018-1-1'));
      spy.mockRestore();
    });
  });
  describe('#withdraw', () => {
    beforeEach(() => {
      account = new Account(1000);
    });
    it('decreases balance by amount', () => {
      account.withdraw(100);
      expect(account.balance).toBe(900);
    });
    it('records transaction in history and transforms date', () => {
      const spy = jest.spyOn(account.history, 'record');
      account.withdraw(100, '2018-12-25');
      expect(spy).toHaveBeenCalledWith(0, 100, 900, new Date('2018-12-25'));
      spy.mockRestore();
    });
    it('defaults to todays date if none given', () => {
      const spy = jest.spyOn(account.history, 'record');
      MockDate.set(new Date('2018-1-1'));
      account.withdraw(100);
      expect(spy).toHaveBeenCalledWith(0, 100, 900, new Date('2018-1-1'));
      spy.mockRestore();
    });
    it('throws error if insufficient balance', () => {
      const invalidWithdraw = (() => account.withdraw(2000));
      expect(invalidWithdraw).toThrow('Insufficient funds');
    });
  });
  describe('#statement', () => {
    it('prints output of render method of printer', () => {
      const spy = jest.spyOn(console, 'log');
      account.statement();
      expect(spy).toHaveBeenCalledWith(account.printer.render());
      spy.mockRestore();
    });
  });
});
