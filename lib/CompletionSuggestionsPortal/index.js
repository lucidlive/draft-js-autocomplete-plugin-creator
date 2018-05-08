'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CompletionSuggestionsPortal = function (_Component) {
  _inherits(CompletionSuggestionsPortal, _Component);

  function CompletionSuggestionsPortal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CompletionSuggestionsPortal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CompletionSuggestionsPortal.__proto__ || Object.getPrototypeOf(CompletionSuggestionsPortal)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      options: {
        trueLinks: false,
        linkPrefix: '/'
      }
    }, _this.showHashTag = function () {
      var _this$props = _this.props,
          options = _this$props.options,
          children = _this$props.children;

      var config = _extends({}, _this.state.options, options);
      var trueLinks = config.trueLinks,
          blockClassName = config.blockClassName,
          linkPrefix = config.linkPrefix;


      if (!trueLinks) return _react2.default.createElement(
        'span',
        { ref: 'searchPortal', className: '' + (blockClassName || '') },
        children
      );else return _react2.default.createElement(
        _reactRouter.Link,
        { to: '' + linkPrefix + children, ref: 'searchPortal', className: '' + (blockClassName || '') },
        children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CompletionSuggestionsPortal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.store.register(this.props.offsetKey);
      this.updatePortalClientRect(this.props);

      // trigger a re-render so the MentionSuggestions becomes active
      this.props.setEditorState(this.props.getEditorState());
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.updatePortalClientRect(nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.store.unregister(this.props.offsetKey);
    }
  }, {
    key: 'updatePortalClientRect',
    value: function updatePortalClientRect(props) {
      var _this2 = this;

      this.props.store.updatePortalClientRect(props.offsetKey, function () {
        return _this2.refs.searchPortal.getBoundingClientRect();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.showHashTag();
    }
  }]);

  return CompletionSuggestionsPortal;
}(_react.Component);

exports.default = CompletionSuggestionsPortal;