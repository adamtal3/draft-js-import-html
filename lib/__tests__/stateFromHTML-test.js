'use strict';

var _expect = require('expect');

var _expect2 = _interopRequireDefault(_expect);

var _stateFromHTML = require('../stateFromHTML');

var _stateFromHTML2 = _interopRequireDefault(_stateFromHTML);

var _parseHTML = require('../parseHTML');

var _parseHTML2 = _interopRequireDefault(_parseHTML);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var _global = global;
var describe = _global.describe;
var it = _global.it;


describe('stateFromHTML', function () {
  it('should create content state', function () {
    var html = '<p>Hello World</p>';
    var contentState = (0, _stateFromHTML2.default)(html);
    var rawContentState = (0, _draftJs.convertToRaw)(contentState);
    var blocks = removeKeys(rawContentState.blocks);
    (0, _expect2.default)(blocks).toEqual([{ text: 'Hello World', type: 'unstyled', depth: 0, inlineStyleRanges: [], entityRanges: [] }]);
  });

  it('should accept a custom parser', function () {
    var html = '<p>Hello World</p>';
    var calledWith = [];
    var customParser = function customParser() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      calledWith.push(args);
      return _parseHTML2.default.apply(undefined, args);
    };
    var options = { parser: customParser };
    var contentState = (0, _stateFromHTML2.default)(html, options);
    (0, _expect2.default)(calledWith.length).toBe(1);
    (0, _expect2.default)(calledWith[0].length).toBe(1);
    (0, _expect2.default)(calledWith[0][0]).toBe(html);
    var rawContentState = (0, _draftJs.convertToRaw)(contentState);
    var blocks = removeKeys(rawContentState.blocks);
    (0, _expect2.default)(blocks).toEqual([{ text: 'Hello World', type: 'unstyled', depth: 0, inlineStyleRanges: [], entityRanges: [] }]);
  });
});

function removeKeys(blocks) {
  return blocks.map(function (block) {
    var key = block.key;

    var other = _objectWithoutProperties(block, ['key']); // eslint-disable-line no-unused-vars


    return other;
  });
}