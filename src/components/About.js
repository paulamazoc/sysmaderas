import React from 'react';
import './about.css';
import Title from '../shared/Title'

class About extends React.Component {
    render () {
        return (
            <section className="about" id="about">
                <div className="about-title-container">
                    <div className="about-title">
                        <Title text="Sobre Nosotros" fontColor="black" />
                        <hr className="about-us-line" />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-left-block">
                        <div className="about-image"></div>
                    </div>
                    <div className="about-right-block">
                        <p className="about-text">Al igual que la madera que se transforma en enseres,
                        SyS Maderas ha evolucionado y ha crecido con el
                        tiempo hasta lograr posicionarse de manera local y
                        nacional.<br/><br/>
                        Comenzamos con la venta de madera reciclada; hoy
                        <strong> fabricamos</strong> y <strong>restauramos</strong> mobiliario, <strong>diseñamos </strong> 
                        sobre medida y <strong>ofrecemos productos</strong> de nuestra
                        autoría.</p>

                        <div className="about-experience-time">
                            <hr />
                            <span>20</span>
                            <p>
                                más de<br/>
                                años en el<br/>
                                mercado<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;