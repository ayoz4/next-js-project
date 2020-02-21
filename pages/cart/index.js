import React from "react";

import loadFirebase from "../../lib/db";
import Head from "next/head";
import Nav from "../../components/nav";

const Cart = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
      </Head>
      <Nav />
    </div>
  );
};

Cart.getInitialProps = async () => {
  let firebase = loadFirebase();

  firebase.firestore();

  return {};
};

export default Cart;
