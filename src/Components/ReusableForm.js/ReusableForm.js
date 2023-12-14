import React, { useState, useEffect } from "react";

const ReusableForm = ({ onSubmit, initialData }) => {

  const [formData, setFormData] = useState(initialData || getDefaultFormData());

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const getDefaultFormData = () => ({
    Name: '',
    Age: '',
    Breed: '',
    CoatColor: '',
    FivPositive: false,
    DogSize: '',
    PetType: 'Cat', //default set to Cat
  });

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
    </form>
  )
}
