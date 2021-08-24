import React, { Component } from "react";

import "./about.css";

class About extends Component {
  render() {
    return (
      <div className="about-page">
        <div className="jumbotron">
          
          <h1>The Needle</h1>
          <h3>About Us</h3>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; No two people are the same, just like no
            two wallets or bags look the same over time. Each carries a unique
            story that is a reflection of our individual lifestyle. When a
            product improves and patinas with use, it carries the history of its
            user, of places traveled and memories made.
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp; Our goods are based in value-driven design
            and quality manufacturing. All of us make a statement every time we
            buy something. We vote with our wallets. It’s our belief that value
            is more than just saving a few bucks - true value lies at the
            intersection of something made well for a fair price, created in way
            that supports those who made it.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
