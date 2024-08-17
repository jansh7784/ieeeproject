import React from 'react';
import { motion } from 'framer-motion';
import '../css/Home.css';
import heroImage from '../assets/hero.jpg';

const Home = () => {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <h1>Welcome to IEEE CS VIT</h1>
      <p>Leading innovation in technology.</p>
    </motion.div>
  );
};

export default Home;
