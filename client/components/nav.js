import React from 'react'
import { Head } from 'next/head'
import Link from 'next/link'
import classNames from 'classnames'
import { connect } from 'react-redux'

import { login } from '../redux/actions/usersActions'

const Nav = ({ path, onLogining }) => {
    const onLogin = e => {
        e.preventDefault()
        onLogining()
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
                            className={classNames('nav-item nav-link', {
                                active: path == '/' ? true : false,
                            })}
                        >
                            Home
                        </a>
                    </Link>
                    <Link href="/cart">
                        <a
                            className={classNames('nav-item nav-link', {
                                active: path == '/cart' ? true : false,
                            })}
                        >
                            Cart
                        </a>
                    </Link>
                    <a className="navbar-brand" href="/" onClick={e => onLogin(e)}>Login</a>
                </div>
            </div>
        </nav>
    )
}

const pathChooser = path => {
    if (path == '/') {
        return
    }
}

const mapDispatchToProps = dispatch => ({
    onLogining: () => {
        dispatch(login())
    }
})

export default connect(null, mapDispatchToProps)(Nav)
