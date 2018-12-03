'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transactionView = require('./transactionView');

var _transactionView2 = _interopRequireDefault(_transactionView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StatementPrinter = function () {
  function StatementPrinter(history) {
    _classCallCheck(this, StatementPrinter);

    this.history = history;
    this.header = 'date || credit || debit || balance';
  }

  _createClass(StatementPrinter, [{
    key: 'render',
    value: function render() {
      var rows = [this.header];
      var log = this.history.log();
      log.forEach(function (transaction) {
        var row = new _transactionView2.default(transaction).render();
        rows.push(row);
      });
      return rows.join('\n');
    }
  }]);

  return StatementPrinter;
}();

exports.default = StatementPrinter;