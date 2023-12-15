import React, { useState, useEffect } from "react";
import './ReusableForm.css';

const ReusableForm = ({ onSubmit, initialData }) => {

  const getDefaultFormData = () => ({
    Name: '',
    Age: 0,
    Breed: '',
    CoatColor: '',
    FivPositive: false,
    DogSize: '',
    PetType: 'Cat', //default set to Cat
  });

  const [formData, setFormData] = useState(initialData || getDefaultFormData());

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (name === 'Age' && (isNaN(value) || Number(value) <= 0)) {
      return;
    }

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  useEffect(() => {
    setFormData(initialData || getDefaultFormData());
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Pet Type:
          <select
            name="PetType"
            value={formData.PetType}
            onChange={handleInputChange}>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="Age"
            value={formData.Age}
            onChange={handleInputChange}
            min="1"
            required
          />
        </label>
      </div>
      <div>
        <label>
          Breed:
          <input
            type="text"
            name="Breed"
            value={formData.Breed}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Coat Color:
          <input
            type="text"
            name="CoatColor"
            value={formData.CoatColor}
            onChange={handleInputChange}
            required
          />
        </label>
      </div>
      {formData.PetType === 'Cat' && (
        <div>
          <label>
            FIV Positive
            <p>Check if true:</p>
            <input
              type="checkbox"
              name="FivPositive"
              checked={formData.FivPositive}
              onChange={handleInputChange}
          
            />
          </label>
        </div>
      )}
      {formData.PetType === 'Dog' && (
        <div>
          <label>
            Dog Size:
            <select
              name="DogSize"
              value={formData.DogSize}
              onChange={handleInputChange}
            >
              <option value="">Select Size</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </label>
        </div>
      )}
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ReusableForm;