import React from "react";
import { connect } from "react-redux";
import Head from "next/head";
import Octicon, { X } from "@primer/octicons-react";

import Nav from "../../components/nav";
import {
  deleteFromCart,
  incrementCount
} from "../../redux/actions/cartActions";

const Cart = props => {
  const onDelete = (e, id) => {
    e.preventDefault();
    props.deleteFromCart(id);
  };

  const calculateCart = () => {
    let sum = 0;

    props.cart.forEach(good => {
      sum += good.price * good.quantity;
    });

    return sum;
  };

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />
      </Head>
      <Nav path={"/cart"} />

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((good, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <th>{good.name}</th>
              <th>{good.description}</th>
              <th>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={good.quantity}
                  onChange={e =>
                    props.incrementCount({ e: e.target.value, id: good.id })
                  }
                />
              </th>
              <th>
                {good.price}
                <button className="btn" onClick={e => onDelete(e, good.id)}>
                  <Octicon icon={X} />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>

      <p>{calculateCart()}</p>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, { deleteFromCart, incrementCount })(
  Cart
);
