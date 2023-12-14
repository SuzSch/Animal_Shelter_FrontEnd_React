import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetList = () => {

  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/FuturePets')
      .then(response => setPets(response.data))
      .catch(error => console.error('Error fetching pets:', error));
  }, []);

  return (

    <div className="pet-list">
      <h1>Available Pets</h1>
      {pets.length === 0 ? (
        <p>No pets available at the moment.</p>
      ) : (
        <ul>
          {pets.map(pet => (
            <li key={pet.futurePetId}>
              <h3>{pet.name}</h3>
              <p>Pet Type: {pet.petType}</p>
              <p>Breed: {pet.breed}</p>
              <p>Age: {pet.age} years</p>
              <p>Coat Color: {pet.coatColor}</p>

              {pet.petType === 'Cat' && (
                <div>
                  <p>FIV Positive: {pet.fivPositive ? 'Yes' : 'No'}</p>
                </div>
              )}
              {pet.petType === 'Dog' && (
                <div>
                  <p>Dog Size: {pet.dogSize}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PetList;