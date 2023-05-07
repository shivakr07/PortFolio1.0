import React from 'react';
import { motion } from 'framer-motion';

const PortfolioHome = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>My Portfolio</h1>
        <p>Welcome to my portfolio!</p>
      </motion.div>
      <motion.div
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      >
        <img src="my-photo.jpg" alt="My photo" />
      </motion.div>
      <motion.div
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: 'spring', stiffness: 120 }}
      >
        <p>Scroll down to see my projects</p>
        <div className="project-list">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="project-item"
          >
            <h2>Project 1</h2>
            <p>Description of project 1</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="project-item"
          >
            <h2>Project 2</h2>
            <p>Description of project 2</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="project-item"
          >
            <h2>Project 3</h2>
            <p>Description of project 3</p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="cursor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default PortfolioHome;
