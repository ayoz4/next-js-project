import React from "react";
import { Head } from "next/head";
import Link from "next/link";
import classNames from "classnames";

const Nav = ({ path }) => {
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
                active: path == "/" ? true : false
              })}
            >
              Home
            </a>
          </Link>
          <Link href="/cart">
            <a
              className={classNames("nav-item nav-link", {
                active: path == "/cart" ? true : false
              })}
            >
              Cart
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

const pathChooser = path => {
  if (path == "/") {
    return;
  }
};

export default Nav;
