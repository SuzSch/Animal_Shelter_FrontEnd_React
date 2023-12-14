import React from "react";
import ReusableForm from "../../Components/ReusableForm.js/ReusableForm";

const AddPet = () => {

  const handleAddPet = (formData) => {
    
    console.log('Adding pet:', formData);
    // Use an API call to add the pet to the database
  };

  return (
    <div>
      <h1>Add a New Pet</h1>
      <ReusableForm onSubmit={handleAddPet} />
    </div>
  );
};

export default AddPet;


