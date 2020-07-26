import React from 'react';
import './footer.css'
import Title from '../shared/Title';

class Footer extends React.Component {
    render () {
        return (
            <footer className="container">
                <div className="footer-elements">
                    <Title text="Contáctanos" fontColor="#fff" />
                    <hr className="footer-line"></hr>
                    <p className="footer-text">
                        Calle 47 No. 53 - 29<br/>
                        Itagüí, Antioquia
                    </p>
                    
                    <p className="footer-text">277 07 50 | 281 36 38</p>
                    <p className="footer-text">316 446 15 71</p>

                    <p className="footer-text">sysmaderas@gmail.com</p>
                    <hr className="footer-line"></hr>
                </div>
            </footer>
        );
    }
}

export default Footer;