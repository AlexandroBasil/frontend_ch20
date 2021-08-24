import React, { Component } from "react";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
  };

  render() {
    return (
      <div className="quantityPicker">
        <button onClick={this.increaseQuantity} className="btn btn-sm btn-dark quantityModifier" >
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
        <b> {this.state.quantity} </b>
        <button onClick={this.decreaseQuantity} className="btn btn-sm btn-dark quantityModifier" >
          <i className="fa fa-minus" aria-hidden="true"></i>
        </button>
      </div>
    );
  }

  increaseQuantity = () => {
    if (this.state.quantity === 20) {
      this.setState({ quantity: 20 });
    } else {
      let qty = this.state.quantity + 1;
      this.setState({ quantity: qty });
      this.props.onChange(qty);
    }
  };

  decreaseQuantity = () => {
    if (this.state.quantity === 1) {
      this.setState({ quantity: 1 });
    } else {
      let qty = this.state.quantity - 1;
      this.setState({ quantity: qty });
      this.props.onChange(qty);
    }
  };
}

export default QuantityPicker;
