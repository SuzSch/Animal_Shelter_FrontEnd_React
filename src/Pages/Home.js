import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Animal Shelter Admin Page</h1>
      <p>
        Manage and organize information about the animals in your care.
      </p>
      <div className="cta-buttons">
        <Link to="/animals" className="btn">
          View Animals
        </Link>
        
        <Link to="/add-animal" className="btn">
          Add New Animal
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
