import React, { Component } from 'react';

import "./admin.css"
import ItemService from "../services/itemService"

class Admin extends Component {
    state = { 
        title: '',
        category: '',
        price: '',
        stock: '',
        imageName: '',
        description: '',

        showAlert: false,
     }

    render() { 
        return (
          <div className="admin-page">
              <h3>Register New Item</h3>

              { this.state.showAlert ? <div className="alert alert-success">Item Saved</div> : null }

            <div className="my-control">
              <label>Title:</label>
              <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}></input>
            </div>

            <div className="my-control">
              <label>Category:</label>
              <input type="text" name="category" value={this.state.category} onChange={this.handleInputChange}></input>
            </div>

            <div className="my-control">
              <label>Price:</label>
              <input type="number" name="price" value={this.state.price} onChange={this.handleInputChange}></input>
            </div>

            <div className="my-control">
              <label>Stock:</label>
              <input type="number" name="stock" value={this.state.stock} onChange={this.handleInputChange}></input>
            </div>

            <div className="my-control">
              <label>Image Name:</label>
              <input type="text" name="imageName" value={this.state.imageName} onChange={this.handleInputChange}></input>
            </div>

            <div className="my-control">
              <label>Description:</label>
              <input type="text" name="description" value={this.state.description} onChange={this.handleInputChange}></input>
            </div>

            <button className="register btn btn-dark" onClick={this.handleRegister}>Register</button>
          </div>
        );
    }
    
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    
    handleRegister = async () => {
        // Create object
        let item = { ...this.state };
        item.price = item.price * 1;
        item.stock = +item.stock;

        //Send object to server
        let service = new ItemService();
        await service.saveItem(item);

        // Clear form
        this.setState({ title: "", category: "", price: "", stock: "", imageName: "", description: "", showAlert: true });

        //set alert timeout
        setTimeout(() => {
            this.setState({ showAlert: false });
        }, 3500  );
    }

}
 
export default Admin;