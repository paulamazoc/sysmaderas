import React from 'react';
import './header.css'

class Header extends React.Component {
    render() {
        return (
            <nav>
                <ul className="menu">
                    <li><a href="#"><span className="home-logo"></span></a></li>
                    <li><a href="#">SOBRE SYS</a></li>
                    <li><a href="#">NUESTROS PRODUCTOS</a></li>
                    <li><a href="#">CONTÁCTANOS</a></li>
                </ul>
            </nav>
        );
    }
}

export default Header;
