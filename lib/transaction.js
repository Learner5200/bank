"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Transaction = function Transaction(credit, debit, balance, date) {
  _classCallCheck(this, Transaction);

  this.credit = credit;
  this.debit = debit;
  this.balance = balance;
  this.date = date;
};

exports.default = Transaction;