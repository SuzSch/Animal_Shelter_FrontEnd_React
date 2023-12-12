import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetList = () => {

  const [pets, setPets] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/pets')
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
            <li key={pet.id}>
              <h3>{pet.name}</h3>
              <p>Breed: {pet.breed}</p>
              <p>Age: {pet.age} years</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PetList;