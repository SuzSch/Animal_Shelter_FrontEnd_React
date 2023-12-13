import React, {useState, useEffect} from "react";

const ReusableForm = ({onSubmit, initialData}) => {

  const [formData, setFormData] = useState(initialData || getDefaultFormData());

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (event) => {
    const {name, value, type, checked} = event.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  
}
