import React from 'react';
import homeImage from '../assets/home-image.jpg'; // Replace with your actual image path

function Home() {
    return (
        <div className="home">
            
            <img src={homeImage} alt="Home Image" className="home-image" />
            <h1>"Discover Style, Shop Comfort — Where Every Purchase Tells a Story"</h1>
        </div>
    );
}

export default Home;
