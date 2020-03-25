import React, { Component } from "react";
import { Head } from "next/head";
import Link from "next/link";
import classNames from "classnames";
import { connect } from "react-redux";

import { login, logout } from "../redux/actions/usersActions";
import { createGood } from "../redux/actions/goodsActions";
import Window from "./createModal";

class Nav extends Component {
  onLogin = e => {
    e.preventDefault();
    this.props.onLogining();
  };

  onLogout = e => {
    e.preventDefault();
    this.props.onLogout();
  };

  render() {
    const { users } = this.props;

    let authButtons;
    if (users.username !== null) {
      authButtons = (
        <div>
          <a className="navbar-brand" href="/">
            {this.props.users.username}
          </a>
          <Window createGood={this.props.onCreateGood} />
          <a className="navbar-brand" href="/" onClick={e => this.onLogout(e)}>
            Logout
          </a>
        </div>
      );
    } else {
      authButtons = (
        <a className="navbar-brand" href="/" onClick={e => this.onLogin(e)}>
          Login
        </a>
      );
    }

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
            {authButtons}
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
  },
  onCreateGood: data => {
    dispatch(createGood(data));
  },
  onLogout: () => {
    dispatch(logout());
  }
});

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
