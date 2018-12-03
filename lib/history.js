'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _transaction = require('./transaction');

var _transaction2 = _interopRequireDefault(_transaction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var History = function () {
  function History() {
    _classCallCheck(this, History);

    this.transactions = [];
  }

  _createClass(History, [{
    key: 'record',
    value: function record(credit, debit, total, date) {
      this.transactions.push(new _transaction2.default(credit, debit, total, date));
    }
  }, {
    key: 'log',
    value: function log() {
      return this.transactions.sort(function (a, b) {
        return b.date - a.date;
      });
    }
  }]);

  return History;
}();

exports.default = History;