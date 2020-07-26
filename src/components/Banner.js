import React from "react";
import "./banner.css";
import Header from "./Header";

class Banner extends React.Component {
    render () {
        return (
            <section className="banner">
                <Header>{this.props.children}</Header>
                <span className="banner-logo"></span>
                <h2 className="banner-title">-  Echando raíces  -</h2>
            </section>
        );
    }
}

export default Banner;
