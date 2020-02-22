import React, { Component } from "react";
import { connect } from "react-redux";

import loadFirebase from "../lib/db";
import Nav from "../components/nav";
import Head from "next/head";
import Good from "../components/Good";
import { addToCart } from "../redux/actions/cartActions";

class Home extends Component {
  static async getInitialProps() {
    let firebase = await loadFirebase();

    let data = [];

    await firebase
      .firestore()
      .collection("goods")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          data.push(Object.assign({ id: doc.id }, doc.data()));
        });
      });

    return { goods: data };
  }

  onAddToCart = (e, good) => {
    e.preventDefault();
    this.props.addToCart(good);
  };

  render() {
    const goods = this.props.goods;

    return (
      <div>
        <Head>
          <title>Test</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          />
        </Head>
        <Nav path={"/"} />
        <div className="row row-cols-1 row-cols-md-3 container mx-auto">
          {goods.map(good => (
            <Good good={good} onClick={this.onAddToCart} />
          ))}
        </div>

        <style jsx>{`
          .row-cols-md-3 {
            margin: 3vh 1.5vw 1.5vh 1.5vw;
          }
        `}</style>
      </div>
    );
  }
}

export default connect(null, { addToCart })(Home);
