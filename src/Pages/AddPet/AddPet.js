import React from "react";
import ReusableForm from "../../Components/ReusableForm.js/ReusableForm";
import axios from 'axios';

const AddPet = () => {

  const handleAddPet = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/FuturePets', formData);
      console.log('Added pet:', response.data);
    } catch (error) {
      console.error('Error adding pet', error);
    }
  };

  return (
    <div>
      <h1>Add a New Pet</h1>
      <ReusableForm onSubmit={handleAddPet} encType="multipart/form-data" />
    </div>
  );
};

export default AddPet;


