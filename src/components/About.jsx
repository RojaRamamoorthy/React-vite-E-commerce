import React from 'react';
import siteImage from '../assets/site-image.jpg'; // Replace with your actual image path
import Testimonial from './Testimonial';
import '../App.css'
function About() {
    return (
        <div className="about">
            <h1>About Us</h1>
            <div className="about-content">
                <div className="about-text">
                    <p>Welcome to Our Shopping Site!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et tincidunt tempor. Nullam pretium ipsum eu justo lacinia, sed fringilla velit pretium.</p>
                    <p>Sed ultricies leo sed libero interdum, ac molestie purus laoreet. Suspendisse potenti.</p>
                </div>
                <div className="site-image">
                    <img src={siteImage} alt="Site Image" />
                </div>
            </div>
            <Testimonial />
        </div>
    );
}

export default About;
