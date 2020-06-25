import React from 'react';
import './banner.css';

class Banner extends React.Component {
    render () {
        return (
            <main class="banner">
                {this.props.children}
                <div>
                    {/* <h1>SyS Maderas</h1>
                    <p>- Slogan / frase corta -</p> */}
                </div>
            </main>
        );
    }
}

export default Banner;