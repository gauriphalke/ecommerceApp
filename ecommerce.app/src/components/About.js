import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="main-content">
        <h1>About Us</h1>
        <p>
          Welcome to our e-commerce platform! We are passionate about providing you with the best online shopping experience.
        </p>
        <p>
          Our mission is to bring high-quality products to your doorstep at affordable prices. We believe in creating a seamless shopping experience where you can find everything you need in one place.
        </p>
        <p>
          From electronics to fashion, we curate our collection to ensure a wide variety of choices for all our customers. Our team works tirelessly to ensure customer satisfaction, fast delivery, and exceptional service.
        </p>
        <p>
          Thank you for choosing us for your shopping needs. Your trust and support motivate us to keep improving and growing.
        </p>
        <hr />
        <h2>Our Values</h2>
        <ul className="values-list">
          <li>Customer First: Your satisfaction is our priority.</li>
          <li>Integrity: We believe in transparency and honesty.</li>
          <li>Innovation: Constantly evolving to serve you better.</li>
          <li>Sustainability: Committed to eco-friendly practices.</li>
        </ul>
        <hr />
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to reach out to us!</p>
      </div>

      {/* Footer */}
      <div/>
    </div>
  );
};

export default About;
