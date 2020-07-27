import React from 'react';
import './productsSection.css';

class ProductsSection extends React.Component {
    render () {
        return (
            <section className="products" id="products">
                <div className="products-background">
                    <div className="products-top-background">
                        <p>Parte1</p>
                    </div>
                    <div className="products-bottom-background">
                        <p>Parte2</p>
                    </div>
                </div>
                <div className="products-carousel">
                    <p>Nuestros Productos</p>
                    <p>Imagenes carousel component</p>
                    <p>Ver más</p>
                    <p>Información</p>
                </div>
            </section>
        );
    }
}

export default ProductsSection;