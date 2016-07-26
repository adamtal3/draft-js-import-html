'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _parseHTML = require('../parseHTML');

var _parseHTML2 = _interopRequireDefault(_parseHTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _global = global;
var describe = _global.describe;
var it = _global.it;


describe('parseHTML', function () {
  it('should parse basic elements', function () {
    var html = '<p>Hello World</p>';
    var element = (0, _parseHTML2.default)(html);
    it('should return a element of some kind', function () {
      (0, _expect2.default)(element.nodeType).toBe(1);
    });
    it('should have the correct child nodes', function () {
      (0, _expect2.default)(element.childNodes.length).toBe(1);
      // These null checks are to make Flow happy.
      (0, _expect2.default)(element.firstChild && element.firstChild.nodeName).toBe('P');
      (0, _expect2.default)(element.firstChild && element.firstChild.firstChild && element.firstChild.firstChild.nodeValue).toBe('Hello World');
    });
  });

  it('should parse incomplete html', function () {
    var html = '<p><strong>Hello<div>World';
    var element = (0, _parseHTML2.default)(html);
    it('should return a element of some kind', function () {
      (0, _expect2.default)(element.nodeType).toBe(1);
    });
    it('should have the correct child nodes', function () {
      // These null checks are to make Flow happy.
      (0, _expect2.default)(element.childNodes && element.childNodes.length).toBe(2);
      (0, _expect2.default)(element.firstChild && element.firstChild.nodeName).toBe('P');
      (0, _expect2.default)(element.lastChild && element.lastChild.nodeName).toBe('DIV');
      (0, _expect2.default)(element.firstChild && element.firstChild.firstChild && element.firstChild.firstChild.nodeName).toBe('STRONG');
    });
  });
});