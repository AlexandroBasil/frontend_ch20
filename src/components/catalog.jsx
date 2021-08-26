import React, { Component } from "react";
import Item from "./item";
import ItemService from "../services/itemService";

import "./catalog.css";


class Catalog extends Component {
  state = {
    catalog: [],
    categories: [],
    filter: "",
  };

  render() {

    let itemsToDisplay = this.state.catalog;
    if(this.state.filter) {
      itemsToDisplay = itemsToDisplay.filter( item => item.category === this.state.filter );
    }

    return (
      <div className="catalog">
        <div className="titleHeading">
          <h3>Welcome to Leathers Finest Shop</h3>
          <h5>
            We have {this.state.catalog.length} products available for you
            today!
          </h5>
        </div>

        <div className="filterButton">
          { this.state.categories.map( cat => <button onClick={() => { this.filterByCat(cat) }} key={cat} className="btn btn-info">{cat}</button>) }
          <button className="btn btn-dark" onClick={this.clearFilter}>Clear</button>
        </div>

        {itemsToDisplay.map((obj) => (
          <Item key={obj._id} data={obj}></Item>
        ))}
      </div>
    );
  }

  clearFilter = () => {
    this.setState({ filter: ""})
  }

  filterByCat = (cat) => {
    this.setState({ filter: cat })
  }
    // best place to load data from server
    // executed after the initial render
  async componentDidMount() {
    let service = new ItemService();
    let data = await service.getCatalog();

    let categories = []
    for (let i = 0; i < data.length; i++) {
      let category = data[i].category;

      if(!categories.includes(category)){
        categories.push(category);
      }
    };
    
    this.setState({ catalog: data, categories: categories });
  }
}

export default Catalog;
