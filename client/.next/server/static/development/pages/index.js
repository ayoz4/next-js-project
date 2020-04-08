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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* harmony import */ var _goodModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goodModal */ "./components/goodModal.js");
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
  onDeleteGood,
  onUpdateGood
}) => {
  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActionArea"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardMedia"], {
    className: classes.media,
    image: "/static/images/cards/contemplative-reptile.jpg",
    title: "Contemplative Reptile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, good.name), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, good.description), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h3",
    component: "h4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, good.price))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardActions"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, user.username !== null ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_goodModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: "edit",
    good: good,
    update: onUpdateGood,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "contained",
    color: "secondary",
    size: "small",
    className: classes.button,
    startIcon: __jsx(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }),
    onClick: () => onDeleteGood(good.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "Delete")) : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "small",
    color: "primary",
    onClick: e => onAddToCart(e, good),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, "Add to cart")));
});

/***/ }),

/***/ "./components/goodModal.js":
/*!*********************************!*\
  !*** ./components/goodModal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "yup");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/roman/Documents/GitHub/next-js-project/client/components/goodModal.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const goodCreateSchema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required(),
  description: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required(),
  price: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required()
});

const Window = props => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const renderInitialValues = () => {
    if (props.good) {
      return props.good;
    } else {
      return {
        name: "",
        description: "",
        price: 0
      };
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderOnSubmit = good => {
    if (props.good) {
      setOpen(false);
      props.update(good);
    } else {
      setOpen(false);
      props.createGood(good);
    }
  };

  const onSubmit = good => {
    setOpen(false);
    props.createGood(good);
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, props.type === "edit" ? __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "small",
    color: "primary",
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Edit") : __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: handleClickOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Create good"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: renderInitialValues(),
    validationSchema: goodCreateSchema,
    onSubmit: values => {
      renderOnSubmit(values);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, ({
    errors,
    touched,
    values,
    handleChange
  }) => __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogTitle"], {
    id: "form-dialog-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "Create good"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogContentText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "Enter the fields with the correct values to create a new good."), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    autoFocus: true,
    value: values.name,
    error: errors.name && touched.name,
    margin: "dense",
    name: "name",
    onChange: handleChange,
    label: "Good's name",
    type: "text",
    helperText: errors.name,
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    error: errors.description && touched.description,
    margin: "dense",
    name: "description",
    label: "Good's description",
    type: "text",
    value: values.description,
    helperText: errors.description,
    onChange: handleChange,
    fullWidth: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    error: errors.price && touched.price,
    margin: "dense",
    name: "price",
    label: "Good's price",
    type: "number",
    value: values.price,
    helperText: errors.price,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["DialogActions"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: handleClose,
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "Cancel"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "Submit"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Window);

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
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/actions/cartActions */ "./redux/actions/cartActions.ts");
/* harmony import */ var _redux_actions_goodsActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/goodsActions */ "./redux/actions/goodsActions.ts");
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
        lineNumber: 28
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("title", {
      className: "jsx-3295222989",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Test"), __jsx("link", {
      rel: "stylesheet",
      href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
      className: "jsx-3295222989",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-3295222989" + " " + "row row-cols-1 row-cols-md-3 container mx-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, goods.map(good => __jsx(_components_Good__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: good.id,
      good: good,
      onAddToCart: this.onAddToCart,
      onDeleteGood: this.props.onDeleteGood,
      onUpdateGood: this.props.onUpdateGood,
      user: users,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3295222989",
      __self: this
    }, ".row-cols-md-3.jsx-3295222989{margin:3vh 1.5vw 1.5vh 1.5vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb21hbi9Eb2N1bWVudHMvR2l0SHViL25leHQtanMtcHJvamVjdC9jbGllbnQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURvQixBQUcwQyw2QkFDL0IiLCJmaWxlIjoiL1VzZXJzL3JvbWFuL0RvY3VtZW50cy9HaXRIdWIvbmV4dC1qcy1wcm9qZWN0L2NsaWVudC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEdvb2QgZnJvbSBcIi4uL2NvbXBvbmVudHMvR29vZFwiO1xuaW1wb3J0IHsgYWRkVG9DYXJ0IH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcbmltcG9ydCB7XG4gIGdldEdvb2RzLFxuICBkZWxldGVHb29kLFxuICB1cGRhdGVHb29kLFxufSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9nb29kc0FjdGlvbnNcIjtcblxuY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25HZXRHb29kcygpO1xuICB9XG5cbiAgb25BZGRUb0NhcnQgPSAoZSwgZ29vZCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLnByb3BzLm9uQWRkVG9DYXJ0KGdvb2QpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBnb29kcyA9IHRoaXMucHJvcHMuZ29vZHMuZ29vZHM7XG4gICAgY29uc3QgdXNlcnMgPSB0aGlzLnByb3BzLnVzZXJzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5UZXN0PC90aXRsZT5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC40LjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LWNvbHMtMSByb3ctY29scy1tZC0zIGNvbnRhaW5lciBteC1hdXRvXCI+XG4gICAgICAgICAge2dvb2RzLm1hcCgoZ29vZCkgPT4gKFxuICAgICAgICAgICAgPEdvb2RcbiAgICAgICAgICAgICAga2V5PXtnb29kLmlkfVxuICAgICAgICAgICAgICBnb29kPXtnb29kfVxuICAgICAgICAgICAgICBvbkFkZFRvQ2FydD17dGhpcy5vbkFkZFRvQ2FydH1cbiAgICAgICAgICAgICAgb25EZWxldGVHb29kPXt0aGlzLnByb3BzLm9uRGVsZXRlR29vZH1cbiAgICAgICAgICAgICAgb25VcGRhdGVHb29kPXt0aGlzLnByb3BzLm9uVXBkYXRlR29vZH1cbiAgICAgICAgICAgICAgdXNlcj17dXNlcnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnJvdy1jb2xzLW1kLTMge1xuICAgICAgICAgICAgbWFyZ2luOiAzdmggMS41dncgMS41dmggMS41dnc7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIG9uR2V0R29vZHM6ICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGdldEdvb2RzKCkpO1xuICAgIH0sXG4gICAgb25BZGRUb0NhcnQ6IChnb29kKSA9PiB7XG4gICAgICBkaXNwYXRjaChhZGRUb0NhcnQoZ29vZCkpO1xuICAgIH0sXG4gICAgb25EZWxldGVHb29kOiAoaWQpID0+IHtcbiAgICAgIGRpc3BhdGNoKGRlbGV0ZUdvb2QoaWQpKTtcbiAgICB9LFxuICAgIG9uVXBkYXRlR29vZDogKGdvb2QpID0+IHtcbiAgICAgIGRpc3BhdGNoKHVwZGF0ZUdvb2QoZ29vZCkpO1xuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIGdvb2RzOiBzdGF0ZS5nb29kcyxcbiAgdXNlcnM6IHN0YXRlLnVzZXJzLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWUpO1xuIl19 */\n/*@ sourceURL=/Users/roman/Documents/GitHub/next-js-project/client/pages/index.js */"));
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
    },
    onUpdateGood: good => {
      dispatch(Object(_redux_actions_goodsActions__WEBPACK_IMPORTED_MODULE_6__["updateGood"])(good));
    }
  };
};

const mapStateToProps = state => ({
  goods: state.goods,
  users: state.users
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Home));

/***/ }),

/***/ "./redux/actions/cartActions.ts":
/*!**************************************!*\
  !*** ./redux/actions/cartActions.ts ***!
  \**************************************/
/*! exports provided: addToCart, deleteFromCart, incrementCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFromCart", function() { return deleteFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCount", function() { return incrementCount; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./redux/constants.ts");

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

/***/ "./redux/actions/goodsActions.ts":
/*!***************************************!*\
  !*** ./redux/actions/goodsActions.ts ***!
  \***************************************/
/*! exports provided: getGoods, createGood, deleteGood, updateGood */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGoods", function() { return getGoods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGood", function() { return createGood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteGood", function() { return deleteGood; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateGood", function() { return updateGood; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./redux/constants.ts");


const getGoods = () => async dispatch => {
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
const createGood = data => async dispatch => {
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
const updateGood = data => {
  return async dispatch => {
    try {
      const msg = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(_constants__WEBPACK_IMPORTED_MODULE_1__["serverUrl"] + "private/" + "goods", JSON.stringify(data), {
        withCredentials: true
      });
      return dispatch(getGoods());
    } catch (err) {
      dispatch({
        type: _constants__WEBPACK_IMPORTED_MODULE_1__["UPDATE_GOOD_FAILURE"],
        data: err
      });
    }
  };
};

/***/ }),

/***/ "./redux/constants.ts":
/*!****************************!*\
  !*** ./redux/constants.ts ***!
  \****************************/
/*! exports provided: serverUrl, ADD_TO_CART, DELETE_FROM_CART, QUANTITY_CHANGED, CLEAR_CART, FETCH_GOODS_SUCCESS, FETCH_GOODS_FAILURE, FETCH_GOODS_REQUEST, CREATE_GOOD_SUCCESS, CREATE_GOOD_FAILURE, DELETE_GOOD_SUCCESS, DELETE_GOOD_FAILURE, UPDATE_GOOD_FAILURE, LOGIN, LOGOUT */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_GOOD_FAILURE", function() { return UPDATE_GOOD_FAILURE; });
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
const UPDATE_GOOD_FAILURE = "UPDATE_GOOD_FAILURE";
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

/***/ }),

/***/ 3:
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

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

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

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map