import React from 'react';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Banner from './Banner';
import ProductsSection from './ProductsSection';

class App extends React.Component {
    render () {
        return (
            <div className="wrapper">
                <Banner>
                    <Header />
                </Banner>
                <About />
                <ProductsSection />
                <Footer />
            </div>
        );
    }
}

export default App;