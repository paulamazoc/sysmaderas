import React from 'react';
import './banner.css';
import Header from './Header';

class Banner extends React.Component {
    render () {
        return (
            <section class="banner">
                <Header>{this.props.children}</Header>
                <span className="banner-logo"></span>
                <h2 className="banner-title">We are committed to simplicity in form.</h2>
                <span className="banner-footer"></span>
            </section>
        );
    }
}

export default Banner;