import React from 'react';

const testimonialsData = [
    {
        id: 1,
        name: 'Smitha',
        avatar: 'https://t4.ftcdn.net/jpg/02/79/66/93/360_F_279669366_Lk12QalYQKMczLEa4ySjhaLtx1M2u7e6.jpg',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://pics.craiyon.com/2023-11-04/83b13207db144042b8a79cfc73d24adf.webp',
        text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    // Add more testimonials as needed
];

function Testimonials() {
    return (
        <div className="testimonials">
            <h2>What Our Customers Say</h2>
            <div className="testimonial-list">
                {testimonialsData.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial">
                        <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
                        <div className="text">{testimonial.text}</div>
                        <div className="name">{testimonial.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;
