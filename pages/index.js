import React, { Component } from "react";

import loadFirebase from "../lib/db";
import Nav from "../components/nav";
import Head from "next/head";
import image from "../images/movieHouse.png";

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
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          />
        </Head>
        <Nav />
        <div className="row row-cols-1 row-cols-md-3 container mx-auto">
          {goods.map(good => (
            <div class="col mb-4">
              <div class="card">
                <img
                  src={image}
                  className="card-img-top"
                  width="150"
                  height="255"
                  alt="lorem"
                />
                <div class="card-body">
                  <h5 class="card-title">{good.name}</h5>
                  <p class="card-text">{good.description}</p>
                  <a href="#" class="btn btn-primary">
                    {good.price}
                  </a>
                </div>
              </div>
            </div>
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

export default Home;
