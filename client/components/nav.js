import React, { Component } from "react";
import { Head } from "next/head";
import Link from "next/link";
import classNames from "classnames";
import { connect } from "react-redux";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

import { login } from "../redux/actions/usersActions";

class Nav extends Component {
  state = {
    name: ""
  };

  onLogin = e => {
    e.preventDefault();
    this.props.onLogining();
    this.setState({ name: jwt.decode(Cookies.get("user")) });
  };
  0;

  render() {
    // const user = cookies.get("user")

    const userRender =
      this.state.name !== "" ? (
        <a className="navbar-brand" href="/">
          {this.state.name}
        </a>
      ) : (
        <a className="navbar-brand" href="/" onClick={e => this.onLogin(e)}>
          Login
        </a>
      );

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link href="/">
              <a
                className={classNames("nav-item nav-link", {
                  active: this.props.path == "/" ? true : false
                })}
              >
                Home
              </a>
            </Link>
            <Link href="/cart">
              <a
                className={classNames("nav-item nav-link", {
                  active: this.props.path == "/cart" ? true : false
                })}
              >
                Cart
              </a>
            </Link>
            {userRender}
          </div>
        </div>
      </nav>
    );
  }
}

const pathChooser = path => {
  if (path == "/") {
    return;
  }
};

const mapDispatchToProps = dispatch => ({
  onLogining: () => {
    dispatch(login());
  }
});

export default connect(null, mapDispatchToProps)(Nav);
