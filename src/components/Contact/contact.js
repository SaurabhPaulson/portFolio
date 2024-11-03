import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nhesag8', 'template_9pi7b5g', form.current, { publicKey: 'grN7jUitWLyKdF5IW' })
      .then(() => {
          toast.success('Email sent successfully!');
          e.target.reset();
        },
        (error) => {
          toast.error('Failed to send email. Please try again.');
          console.error('FAILED...', error.text);
        });
  };

  return (
    <div id="contact">
      <div className="dividerContact"></div>
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" placeholder="Your Name" name="your_name" />
        <input type="email" className="email" placeholder="Your Email" name="your_email" />
        <textarea className="msg" name="message" rows={6} placeholder="Your Message"></textarea>
        <button type="submit" className="submitBtn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
