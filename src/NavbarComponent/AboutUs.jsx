import React from 'react';
import './AboutUs.css';

import Aboutusimg1 from '../Images/Aboutusimg1.jpg';
import Aboutusimg2 from '../Images/Aboutusimg2.jpg';
import Aboutusimg3 from '../Images/Aboutusimg3.jpg';

const AboutUs = () => {
  return (
    
    <div className="about-us container-fluid ">
      
      <section className="about-company">
        <h1>About Us</h1>
        <p>
          We are a leading provider of premium electronics, specializing in high-quality audio products such as headphones, speakers, and smart devices.
          Our mission is to deliver cutting-edge technology and exceptional sound quality to enhance the lives of our customers.
        </p>
      </section>

      <section className="mission-values">
        <h2>Our Mission & Values</h2>
        <div className="mission">
          <h3>Our Mission</h3>
          <p>To provide top-tier electronic products that seamlessly blend innovation, design, and performance, delivering value to our customers.</p>
        </div>
        <div className="values">
          <h3>Our Values</h3>
          <ul>
            <li><strong>Innovation:</strong> We strive to innovate in every product we create.</li>
            <li><strong>Quality:</strong> Only the highest quality materials and components make it to our products.</li>
            <li><strong>Customer Focus:</strong> We prioritize our customers' needs and aim to exceed their expectations.</li>
            <li><strong>Sustainability:</strong> We're committed to creating eco-friendly products and practices.</li>
          </ul>
        </div>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={Aboutusimg1} alt="CEO" />
            <h3>Jane Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={Aboutusimg3} alt="CTO" />
            <h3>John Smith</h3>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img src={Aboutusimg2} alt="COO" />
            <h3>Alice Johnson</h3>
            <p>Chief Operating Officer</p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default AboutUs;

