import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Animal Shelter Admin Page</h1>
      <p>
        Manage and organize information about the animals in your care.
      </p>
      <div className="cta-buttons">
        <Link to="/pet-list" className="btn">
          View List of Pets
        </Link>
        
        <Link to="/add-pet" className="btn">
          Add A New Pet
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
