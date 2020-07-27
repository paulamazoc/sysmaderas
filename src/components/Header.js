import React from 'react';
import './header.css'

class Header extends React.Component {
    render() {
        return (
            <nav>
                <ul className="menu">
                    <li><a href="#"><span className="home-logo"></span></a></li>
                    <li><a href="#about">SOBRE SYS</a></li>
                    <li><a href="#products">NUESTROS PRODUCTOS</a></li>
                    <li><a href="#contact-us">CONTÁCTANOS</a></li>
                </ul>
            </nav>
        );
    }
}

export default Header;
