import React, { Component } from 'react';
import storeContext from "../store/storeContext";
import ItemInCart from "./itemInCart";

import "./cart.css";

class Cart extends Component {
    static contextType = storeContext
    state = {  }
    render() { 
        return (
          <div className="cart-page">
            <h1>Your Cart</h1>
            <h3>You have products {this.context.cart.length} in your Cart</h3>

            <div className="d-flex">
              <div className="cart-container">
                {this.context.cart.map((cartItem) => (
                  <ItemInCart key={cartItem._id} data={cartItem}></ItemInCart>
                ))}
              </div>

              <div className="cart-pay">
                <label>Your Total:</label>
                <h6>${this.getTotal()}</h6>

                <button className="btn btn-primary">Proceed to Payment</button>
              </div>
            </div>
          </div>
        );
    }

    getTotal = () => {
      let total = 0;

      for (let i = 0; i < this.context.cart.length; i++) {
        let item = this.context.cart[i];

        total += (item.price * item.quantity)
      };

      return total.toFixed(2);
    }
}
 
export default Cart;