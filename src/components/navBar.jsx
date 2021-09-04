import React, { Component } from "react"; //imrc
import storeContext from "../store/storeContext";
import "./navBar.css";
import { Link } from "react-router-dom";

class NavBar extends Component {
  //cc
  static contextType = storeContext;
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            The Needle
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/catalog">
                  Catalog
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/purchases">
                  History
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
            </ul>

            <form className="d-flex counter">
              <Link className="btn btn-outline-primary" to="/cart">
                <i className="fa fa-shopping-cart mr-1"></i>
                &nbsp; Cart &nbsp;&nbsp;&nbsp;
                <span className="badge bg-dark ml-1">
                  {this.context.cart.length}
                </span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    );
  }

  test() {
    console.log("This is a test");
  }
}

export default NavBar;
