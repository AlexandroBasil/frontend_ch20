import React, { Component } from "react";
import storeContext from "../store/storeContext";
import ItemInCart from "./itemInCart";

import "./cart.css";
import ItemService from "./../services/itemService";

class Cart extends Component {
  static contextType = storeContext;
  state = {
    coupon: "",
    discount: "",
  };
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

            <input
              type="text"
              placeholder="Coupon Code"
              name="coupon"
              value={this.state.coupon}
              onChange={this.handleInputChange}
            />
            <button
              className="btn btn-primary btn-apply-code"
              onClick={this.handleApplyCoupon}
            >
              {" "}
              Apply Coupon{" "}
            </button>

            <hr />
            <button
              className="btn btn-primary"
              onClick={this.handleSubmitOrder}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    );
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getTotal = () => {
    let total = 0;

    for (let i = 0; i < this.context.cart.length; i++) {
      let item = this.context.cart[i];

      total += item.price * item.quantity;
    }
    // DISCOUNT APPLIED
    total = total - (total * this.state.discount) / 100;
    return total.toFixed(2);
  };

  handleApplyCoupon = async () => {
    console.log("Coupon Applied!", this.state.coupon);

    let service = new ItemService();
    let res = await service.validateCouponCode(this.state.coupon);
    if (!res) {
      console.log("Coupon Invalid!");
      this.setState({ discount: 0 });
      return;
    }

    this.setState({ discount: res.discount });
  };

  handleSubmitOrder = async () => {
    let order = {
      userId: "User",
      coupon: this.state.coupon,
      products: this.context.cart,
      createdOn: new Date(),
    };

    let service = new ItemService();
    let res = await service.submitOrder(order);
    if (res) {
      console.log("Response Data: ", res);
      this.props.history.push("/placed-orders");
    } else {
      // error
    }
  };
}

export default Cart;
