import React, { Component } from "react";
import ItemService from "../services/itemService";
import PurchaseHistoryRecord from "./purchaseHistoryRecord";

class PurchaseHistory extends Component {
  state = {
    orders: [],
  };
  render() {
    return (
      <div>
        <h2>Here are your orders</h2>
        <hr />

        {this.state.orders.map((ord) => (
          <PurchaseHistoryRecord
            key={ord._id}
            order={ord}
          ></PurchaseHistoryRecord>
        ))}
      </div>
    );
  }

  async componentDidMount() {
    let service = new ItemService();
    let ords = await service.getPurchases("User");
    this.setState({ orders: ords });
  }
}

export default PurchaseHistory;
