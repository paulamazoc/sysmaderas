import React from 'react';
import './about.css';

class About extends React.Component {
    render () {
        return (
            <section className="about">
                <div className="about-title">
                    <h2>Sobre</h2>
                    <h1>SyS</h1>
                </div>
                <div className="about-paragraph">
                    <h2>2X</h2>
                    <h3>años de experiencia</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </section>
        );
    }
}

export default About;