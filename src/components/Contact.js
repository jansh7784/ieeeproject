import React from 'react';
import mapImage from '../assets/map.png';
import './Contact.css'; // Assuming you create a CSS file for styling Contact

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" required />

        <label htmlFor="email">Email:</label>
        <input id="email" type="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" required></textarea>

        <button type="submit">Send</button>
      </form>

      <div className="location">
        <h2>Our Location</h2>
        <img src={mapImage} alt="Our location on the map" />
        <p>Visit us at the VIT Campus, Chennai.</p>
      </div>
    </div>
  );
};

export default Contact;
