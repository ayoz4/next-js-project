import React from "react";
import { connect } from "react-redux";
import loadFirebase from "../../lib/db";
import Head from "next/head";
import Nav from "../../components/nav";

const Cart = props => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />
      </Head>
      <Nav path={"/cart"} />
    </div>
  );
};

/* Cart.getInitialProps = async () => {
  let firebase = loadFirebase();

  firebase.firestore();

  return {asd};
}; */

export default connect()(Cart);
