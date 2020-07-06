import React from "react";
import "./banner.css";
import Header from "./Header";

class Banner extends React.Component {
  render() {
    return (
      <section class="banner">
        <Header>{this.props.children}</Header>
        <span className="banner-logo"></span>
        <div className="banner-title">
          <h2>We are committed to simplicity in form.</h2>
        </div>

        <span className="banner-footer"></span>
      </section>
    );
  }
}

export default Banner;
