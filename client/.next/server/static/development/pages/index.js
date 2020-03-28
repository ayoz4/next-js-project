module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Good.js":
/*!****************************!*\
  !*** ./components/Good.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/roman/Documents/GitHub/next-js-project/client/components/Good.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import image from "../images/movieHouse.png";




const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  button: {
    margin: theme.spacing(1)
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (({
  good,
  onAddToCart,
  user,
  onDeleteGood
}) => {
  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActionArea"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardMedia"], {
    className: classes.media,
    image: "/static/images/cards/contemplative-reptile.jpg",
    title: "Contemplative Reptile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, good.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, good.description), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h3",
    component: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, good.price))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActions"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, user.username !== null ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Edit"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "secondary",
    size: "small",
    className: classes.button,
    startIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }),
    onClick: () => onDeleteGood(good.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, "Delete")) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "small",
    color: "primary",
    onClick: e => onAddToCart(e, good),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "Add to cart")));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Good__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Good */ "./components/Good.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/cartActions */ "./redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_goodsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/goodsActions */ "./redux/actions/goodsActions.js");
var _jsxFileName = "/Users/roman/Documents/GitHub/next-js-project/client/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Home extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "onAddToCart", (e, good) => {
      e.preventDefault();
      this.props.onAddToCart(good);
    });
  }

  componentDidMount() {
    this.props.onGetGoods();
  }

  render() {
    const goods = this.props.goods.goods;
    const users = this.props.users;
    return __jsx("div", {
      className: "jsx-3295222989",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-3295222989",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Test"), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
      className: "jsx-3295222989",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3295222989" + " " + "row row-cols-1 row-cols-md-3 container mx-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, goods.map(good => __jsx(_components_Good__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: good.id,
      good: good,
      onAddToCart: this.onAddToCart,
      onDeleteGood: this.props.onDeleteGood,
      user: users,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3295222989",
      __self: this
    }, ".row-cols-md-3.jsx-3295222989{margin:3vh 1.5vw 1.5vh 1.5vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hbi9Eb2N1bWVudHMvR2l0SHViL25leHQtanMtcHJvamVjdC9jbGllbnQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENvQixBQUcwQyw2QkFDL0IiLCJmaWxlIjoiL1VzZXJzL3JvbWFuL0RvY3VtZW50cy9HaXRIdWIvbmV4dC1qcy1wcm9qZWN0L2NsaWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEdvb2QgZnJvbSBcIi4uL2NvbXBvbmVudHMvR29vZFwiO1xuaW1wb3J0IHsgYWRkVG9DYXJ0IH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcbmltcG9ydCB7IGdldEdvb2RzLCBkZWxldGVHb29kIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvZ29vZHNBY3Rpb25zXCI7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLm9uR2V0R29vZHMoKTtcbiAgfVxuXG4gIG9uQWRkVG9DYXJ0ID0gKGUsIGdvb2QpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5vbkFkZFRvQ2FydChnb29kKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZ29vZHMgPSB0aGlzLnByb3BzLmdvb2RzLmdvb2RzO1xuICAgIGNvbnN0IHVzZXJzID0gdGhpcy5wcm9wcy51c2VycztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+VGVzdDwvdGl0bGU+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNC4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy1jb2xzLTEgcm93LWNvbHMtbWQtMyBjb250YWluZXIgbXgtYXV0b1wiPlxuICAgICAgICAgIHtnb29kcy5tYXAoZ29vZCA9PiAoXG4gICAgICAgICAgICA8R29vZFxuICAgICAgICAgICAgICBrZXk9e2dvb2QuaWR9XG4gICAgICAgICAgICAgIGdvb2Q9e2dvb2R9XG4gICAgICAgICAgICAgIG9uQWRkVG9DYXJ0PXt0aGlzLm9uQWRkVG9DYXJ0fVxuICAgICAgICAgICAgICBvbkRlbGV0ZUdvb2Q9e3RoaXMucHJvcHMub25EZWxldGVHb29kfVxuICAgICAgICAgICAgICB1c2VyPXt1c2Vyc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAucm93LWNvbHMtbWQtMyB7XG4gICAgICAgICAgICBtYXJnaW46IDN2aCAxLjV2dyAxLjV2aCAxLjV2dztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIG9uR2V0R29vZHM6ICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGdldEdvb2RzKCkpO1xuICAgIH0sXG4gICAgb25BZGRUb0NhcnQ6IGdvb2QgPT4ge1xuICAgICAgZGlzcGF0Y2goYWRkVG9DYXJ0KGdvb2QpKTtcbiAgICB9LFxuICAgIG9uRGVsZXRlR29vZDogaWQgPT4ge1xuICAgICAgZGlzcGF0Y2goZGVsZXRlR29vZChpZCkpO1xuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGdvb2RzOiBzdGF0ZS5nb29kcyxcbiAgdXNlcnM6IHN0YXRlLnVzZXJzXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZSk7XG4iXX0= */\n/*@ sourceURL=/Users/roman/Documents/GitHub/next-js-project/client/pages/index.js */"));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    onGetGoods: () => {
      dispatch(Object(_redux_actions_goodsActions__WEBPACK_IMPORTED_MODULE_6__["getGoods"])());
    },
    onAddToCart: good => {
      dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__["addToCart"])(good));
    },
    onDeleteGood: id => {
      dispatch(Object(_redux_actions_goodsActions__WEBPACK_IMPORTED_MODULE_6__["deleteGood"])(id));
    }
  };
};

const mapStateToProps = state => ({
  goods: state.goods,
  users: state.users
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ }),

/***/ "./redux/actions/cartActions.js":
/*!**************************************!*\
  !*** ./redux/actions/cartActions.js ***!
  \**************************************/
/*! exports provided: addToCart, deleteFromCart, incrementCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFromCart", function() { return deleteFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCount", function() { return incrementCount; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./redux/constants.js");

const addToCart = data => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["ADD_TO_CART"],
  data
});
const deleteFromCart = id => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["DELETE_FROM_CART"],
  id
});
const incrementCount = data => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["QUANTITY_CHANGED"],
  data
});

/***/ }),

/***/ "./redux/actions/goodsActions.js":
/*!***************************************!*\
  !*** ./redux/actions/goodsActions.js ***!
  \***************************************/
/*! exports provided: getGoods, createGood, deleteGood */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGoods", function() { return getGoods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGood", function() { return createGood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteGood", function() { return deleteGood; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./redux/constants.js");



const getGoodsRequest = () => {};

const getGoods = () => {
  return async dispatch => {
    dispatch({
      type: _constants__WEBPACK_IMPORTED_MODULE_1__["FETCH_GOODS_REQUEST"]
    });

    try {
      const msg = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_constants__WEBPACK_IMPORTED_MODULE_1__["serverUrl"] + "goods");
      return dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["FETCH_GOODS_SUCCESS"],
        data: msg.data
      });
    } catch (err) {
      return dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["FETCH_GOODS_FAILURE"],
        data: err
      });
    }
  };
};
const createGood = data => {
  return async dispatch => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "POST",
        url: _constants__WEBPACK_IMPORTED_MODULE_1__["serverUrl"] + "private/" + "goods",
        data: JSON.stringify(data),
        withCredentials: true
      }); // dispatch({ type: CREATE_GOOD_SUCCESS });

      return dispatch(getGoods());
    } catch (err) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["CREATE_GOOD_FAILURE"]
      });
    }
  };
};
const deleteGood = id => {
  return async dispatch => {
    try {
      await axios__WEBPACK_IMPORTED_MODULE_0___default()({
        method: "DELETE",
        url: _constants__WEBPACK_IMPORTED_MODULE_1__["serverUrl"] + "private/" + "goods/" + id,
        withCredentials: true
      }); // dispatch({ type: DELETE_GOOD_SUCCESS, data: id });

      return dispatch(getGoods());
    } catch (err) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE_GOOD_FAILURE"],
        data: err
      });
    }
  };
};

/***/ }),

/***/ "./redux/constants.js":
/*!****************************!*\
  !*** ./redux/constants.js ***!
  \****************************/
/*! exports provided: serverUrl, ADD_TO_CART, DELETE_FROM_CART, QUANTITY_CHANGED, CLEAR_CART, FETCH_GOODS_SUCCESS, FETCH_GOODS_FAILURE, FETCH_GOODS_REQUEST, CREATE_GOOD_SUCCESS, CREATE_GOOD_FAILURE, DELETE_GOOD_SUCCESS, DELETE_GOOD_FAILURE, LOGIN, LOGOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverUrl", function() { return serverUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FROM_CART", function() { return DELETE_FROM_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUANTITY_CHANGED", function() { return QUANTITY_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CART", function() { return CLEAR_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GOODS_SUCCESS", function() { return FETCH_GOODS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GOODS_FAILURE", function() { return FETCH_GOODS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_GOODS_REQUEST", function() { return FETCH_GOODS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_GOOD_SUCCESS", function() { return CREATE_GOOD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_GOOD_FAILURE", function() { return CREATE_GOOD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_GOOD_SUCCESS", function() { return DELETE_GOOD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_GOOD_FAILURE", function() { return DELETE_GOOD_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
const serverUrl = "http://localhost:8081/";
const ADD_TO_CART = "ADD_TO_CART";
const DELETE_FROM_CART = "DELETE_FROM_CART";
const QUANTITY_CHANGED = "QUANTITY_CHANGED";
const CLEAR_CART = "CLEAR_CART";
const FETCH_GOODS_SUCCESS = "FETCH_GOODS_SUCCESS";
const FETCH_GOODS_FAILURE = "FETCH_GOODS_FAILURE";
const FETCH_GOODS_REQUEST = "FETCH_GOODS_REQUEST";
const CREATE_GOOD_SUCCESS = "CREATE_GOOD_SUCCESS";
const CREATE_GOOD_FAILURE = "CREATE_GOOD_SUCCESS";
const DELETE_GOOD_SUCCESS = "DELETE_GOOD_SUCCESS";
const DELETE_GOOD_FAILURE = "DELETE_GOOD_FAILURE";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/roman/Documents/GitHub/next-js-project/client/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map