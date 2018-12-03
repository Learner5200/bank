"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TransactionView = function () {
  function TransactionView(transaction) {
    _classCallCheck(this, TransactionView);

    this.transaction = transaction;
  }

  _createClass(TransactionView, [{
    key: "render",
    value: function render() {
      var _transaction = this.transaction,
          credit = _transaction.credit,
          debit = _transaction.debit,
          balance = _transaction.balance;

      return this.readableDate() + " || " + credit.toFixed(2) + " || " + debit.toFixed(2) + " || " + balance.toFixed(2);
    }
  }, {
    key: "readableDate",
    value: function readableDate() {
      var date = this.transaction.date;

      return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    }
  }]);

  return TransactionView;
}();

exports.default = TransactionView;