import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './contact.css';
import { service } from '../../networks/service';
import { FaPhone, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BallTriangle } from "react-loader-spinner";

const Contact = () => {
  const [data, setData] = useState({
    your_name: '',
    your_email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false); 
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const validate = () => {
    const errors = {};
    if (!data.your_name.trim()) {
      errors.your_name = "Name is required.";
    }

    if (!data.your_email.trim()) {
      errors.your_email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.your_email)) {
      errors.your_email = "Email is invalid.";
    }

    if (!data.message.trim()) {
      errors.message = "Message is required.";
    }
    return errors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsLoading(true);

    const { your_name, your_email, message } = data;
    const values = {
      fromEmail: your_email,
      name: your_name,
      message: message,
    };

    try {
      const response = await service.emailFunction(values);
      if (response.success) {
        toast.success('Email sent successfully!');
        setData({ your_name: '', your_email: '', message: '' });
      } else {
        toast.error('Failed to send email. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send email. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact">
      {isLoading && (
        <div className="loader-overlay">
          <BallTriangle height={100} width={100} color="#007aff" ariaLabel="loading" />
        </div>
      )}
      <div className="dividerContact"></div>
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
      <form className="contactForm" onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="your_name"
          value={data.your_name}
          onChange={handleChange}
        />
        {errors.your_name && <span className="error">{errors.your_name}</span>}

        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
          value={data.your_email}
          onChange={handleChange}
        />
        {errors.your_email && <span className="error">{errors.your_email}</span>}

        <textarea
          className="msg"
          name="message"
          rows={6}
          placeholder="Your Message"
          value={data.message}
          onChange={handleChange}
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}

        <button type="submit" className="submitBtn" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      <div className="contact-row">
        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <div className="contact-info">
            <span>Phone:</span>
            <a href="tel:+918078094114">+91 8078094114</a>
          </div>
        </div>
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <div className="contact-info">
            <span>Email:</span>
            <a href="mailto:saurabhpaulson@gmail.com">saurabhpaulson01@gmail.com</a>
          </div>
        </div>
        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <div className="contact-info">
            <span>LinkedIn:</span>
            <a href="https://www.linkedin.com/in/saurabh-paulson/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
