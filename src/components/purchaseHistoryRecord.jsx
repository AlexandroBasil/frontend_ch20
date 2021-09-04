import React, { Component } from "react";

import "./purchaseHistoryRecord.css";

class PurchaseHistoryRecord extends React.Component {
  state = {};
  render() {
    return (
      <div className="purchase-history-record">
        <label>Order Total: ${this.props.order.total}</label>
        <label>Products: {this.props.order.products.length}</label>
        <label>Date: {this.getFormattedDate(this.props.order.createdOn)}</label>
      </div>
    );
  }

  getFormattedDate = (dateStr) => {
    let d = new Date(dateStr);
    return d.toLocaleDateString() + " " + d.toLocaleTimeString();
  };
}

export default PurchaseHistoryRecord;
