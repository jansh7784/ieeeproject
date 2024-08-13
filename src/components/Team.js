import React from 'react';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import './Team.css'; // Assuming you create a CSS file for styling Team

const Team = () => {
  return (
    <div className="team">
      <h1>Meet Our Team</h1>
      <div className="member">
        <img src={team1} alt="John Doe, President" />
        <h2>John Doe</h2>
        <p>President</p>
        <p>John leads our tech innovation and development strategies.</p>
      </div>
      <div className="member">
        <img src={team2} alt="Jane Smith, Vice President" />
        <h2>Jane Smith</h2>
        <p>Vice President</p>
        <p>Jane is responsible for overseeing our international outreach programs.</p>
      </div>
    </div>
  );
};

export default Team;
