import React from 'react';
import 'src/css/Events.css'; // Assuming you create a CSS file for styling Events

const Events = () => {
  return (
    <div className="events">
      <h1>Upcoming Events</h1>
      <div className="event">
        <h2>Annual Tech Symposium</h2>
        <p>Date: September 30, 2024</p>
        <p>Location: VIT Auditorium</p>
        <button>Register Now</button>
      </div>
      <div className="event">
        <h2>International Hackathon</h2>
        <p>Date: November 15, 2024</p>
        <p>Location: Online</p>
        <button>Join Online</button>
      </div>
      <h1>Past Events</h1>
      <div className="event">
        <h2>AI Workshop 2023</h2>
        <p>Date: March 20, 2023</p>
        <p>Location: Online</p>
      </div>
    </div>
  );
};

export default Events;

