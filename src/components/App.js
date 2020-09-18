import React from 'react';
import About from './About';
import Footer from './Footer';
import Banner from './Banner';
import ProductsSection from './productsSection/ProductsSection';

class App extends React.Component {
    render () {
        return (
            <div className="wrapper">
                <Banner />
                <About />
                <ProductsSection />
                <Footer />
            </div>
        );
    }
}

export default App;