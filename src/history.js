import Transaction from './transaction';

export default class History {
  constructor() {
    this.log = [];
  }

  add(value, date = new Date()) {
    this.log.push(new Transaction(value, date));
  }
}
