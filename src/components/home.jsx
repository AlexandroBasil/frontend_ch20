import React, { Component } from "react";

import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <img
          className="cover"
          src="https://www.loveyourclothes.org.uk/sites/default/files/Leather_original_476136478.jpg"
          alt="leather"
        ></img>
        <h1>Welcome to Leathers Finest Shop</h1>
        <p>
          Here at The Needle, we offer an unparalleled blend of quality,
          consistency, responsiveness, and innovation. Through the years, we
          have cultivated our experience to offer dynamic lines of leathers. Our
          products include traditional, old world tannages and techniques,
          carefully updated with modern applications. Today, our leathers are
          still made by hand, the same way as generations ago.
        </p>
        <p>
          Making the best means doing a lot of little things right. To ensure
          top quality finished goods, we start with top quality components. That
          means using native hides for the best grain and yields, premium grade
          oils, dyes, and retanning agents. Our formulas cut no corners, and we
          are one of only a handful of tanneries in the United States that still
          processes hides from their raw, cured state to finished leather.
        </p>
      </div>
    );
  }
}

export default Home;
