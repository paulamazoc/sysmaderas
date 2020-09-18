import React from 'react';
import Title from '../../shared/Title';
import Carrousel from './carrousel/Carrousel';
import './productsSection.css';

class ProductsSection extends React.Component {

    constructor() {

        super();
        this.state = {
            cards: [
                {   
                    id: 1,
                    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg", 
                    title: "Burgundy Flemming", 
                    subtitle: "Advertising"
                },
                { 
                    id: 2,
                    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg", 
                    title: "Very very very long product name", 
                    subtitle: "Sound & Vision"
                },
                { 
                    id: 3,
                    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg", 
                    title: "Caspian Bellevedere", 
                    subtitle: "Accounting"
                },
                { 
                    id: 4,
                    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg", 
                    title: "Caspian Bellevedere", 
                    subtitle: "Accounting"
                },
            ],
        };
    }

    render () {
        return (
            <section className="products" id="products">
                <div className="products-title">
                    <Title text="Nuestros productos" fontColor="black" />
                    <hr className="products-line" />
                </div>
                <hr className="products-line products-line-complement" />
                <div className="products-carrousel-wrapper">
                    <Carrousel cards={this.state.cards} />
                </div>
            </section>
        );
    }
}

export default ProductsSection;