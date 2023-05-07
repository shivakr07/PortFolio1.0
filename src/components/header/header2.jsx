import React from 'react';
import './header2.css';

function App() {
  return (
    <div className="container">
      <div className="content">
        <h1>Welcome to my website</h1>
        <p>Here you will find all sorts of interesting things.</p>
        <img src="https://via.placeholder.com/400x300.png" alt="placeholder" />
      </div>
      {[...Array(100)].map((_, i) => (
        <div className="star" key={i} style={{ 
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`
        }}></div>
      ))}
    </div>
  );
}

export default App;
