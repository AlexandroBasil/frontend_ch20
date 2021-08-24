import React, { Component } from 'react';
import storeContext from "../store/storeContext";

import "./itemInCart.css"

class ItemInCart extends Component {
  static contextType = storeContext;
  state = {};
  render() {
    return (
      <div className="itemInCart">
        <img src={"/images/product/" + this.props.data.image} alt=""></img>

        <div className="item-info">
          <h6>{this.props.data.title}</h6>
          <label>{this.props.data.category}</label>
        </div>

        <label>${this.props.data.price}</label>
        <label>{this.props.data.quantity}</label>
        <label>${this.getTotal()}</label>

        <button
          className="btn btn-sm btn-danger"
          onClick={this.handleRemoveProductFromCart}
        >
          <i class="fa fa-trash"></i>
        </button>
      </div>
    );
  }

  getTotal = () => {
    return this.props.data.price * this.props.data.quantity.toFixed(2);
  };

  handleRemoveProductFromCart = () => {
    this.context.removeProductFromCart(this.props.data._id);
  };
}
 
export default ItemInCart;