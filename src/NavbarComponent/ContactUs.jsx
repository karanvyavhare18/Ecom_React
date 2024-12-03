import React, { useState } from 'react';
import './ContactUs.css';



const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thank you for reaching out! We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <h2>We'd love to hear from you!</h2>
        <p>If you have any questions, comments, or need support, feel free to reach out to us below.</p>
        
        <div className="store-info">
          <p><strong>Phone:</strong> +1 (800) 123-4567</p>
          <p><strong>Email:</strong> support@electronicsstore.com</p>
          <p><strong>Address:</strong> 123 Tech Avenue, Silicon Valley, CA</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
        <button type="submit">Send Message</button>
      </form>
      
      {status && <div className="status-message">{status}</div>}
      
    </div>
    
    </div>
  );
};

export default ContactUs;
