'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _history = require('./history');

var _history2 = _interopRequireDefault(_history);

var _statementPrinter = require('./statementPrinter');

var _statementPrinter2 = _interopRequireDefault(_statementPrinter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Account = function () {
  function Account() {
    var balance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    _classCallCheck(this, Account);

    this.balance = balance;
    this.history = new _history2.default();
    this.printer = new _statementPrinter2.default(this.history);
  }

  _createClass(Account, [{
    key: 'deposit',
    value: function deposit(value) {
      var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

      this.balance += value;
      this.history.record(value, 0, this.balance, new Date(date));
    }
  }, {
    key: 'withdraw',
    value: function withdraw(value) {
      var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

      if (this.balance - value < 0) throw new Error('Insufficient funds');
      this.balance -= value;
      this.history.record(0, value, this.balance, new Date(date));
    }
  }, {
    key: 'statement',
    value: function statement() {
      console.log(this.printer.render());
    }
  }]);

  return Account;
}();

exports.default = Account;