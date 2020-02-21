import React, { Component } from "react";

import loadFirebase from "../lib/db";
import Nav from "../components/nav";
import Head from "next/head";

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

  render() {
    const goods = this.props.goods;

    return (
      <div>
        <Head>
          <title>Test</title>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
          />
        </Head>
        <Nav />
        <ul className="products clearfix">
          {goods.map(good => (
            <li className="product-wrapper">
              <a href="" className="product">
                {good.name}
                {good.description}
                {good.price}
                <div class="product-photo">
                  <img src="" alt="" />
                </div>
              </a>
            </li>
          ))}
        </ul>

        <style jsx>{`
          .product-wrapper {
            display: block;
            width: 100%;
            float: left;
            transition: width 0.2s;
          }

          @media only screen and (min-width: 450px) {
            .product-wrapper {
              width: 50%;
            }
          }

          @media only screen and (min-width: 768px) {
            .product-wrapper {
              width: 33.333%;
            }
          }

          @media only screen and (min-width: 1000px) {
            .product-wrapper {
              width: 25%;
            }
          }

          .product {
            display: block;
            border: 1px solid #b5e9a7;
            border-radius: 3px;
            position: relative;
            background: #fff;
            margin: 0 20px 20px 0;
            text-decoration: none;
            color: #474747;
            z-index: 0;
            height: 300px;
          }

          .products {
            list-style: none;
            margin: 0 -20px 0 0;
            padding: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;
