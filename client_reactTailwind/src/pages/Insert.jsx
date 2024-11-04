import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import FormInsert from '../components/FormInsert';
import Header from '../components/Header';

const Insert = () => {
  const [formData, setFormData] = useState({
    main_item_name: '',
    asset_id: '',
    quantity: '',
    unit: '',
    fiscal_year: '',
    budget_amount: '',
    fund_type: '',
    standard_price: '',
    responsible_person: '',
    asset_type: '',
    usage_location: '',
    delivery_location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData); // Log updated formData
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault(); // Ensure event is defined
      console.log('Submitting data:', formData); // Log formData to be submitted
      try {
        const response = await axios.post('http://localhost:5000/api/assets', formData);
        console.log('Data submitted successfully:', response.data);
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    } else {
      console.error('Event is undefined'); // Log if event is not defined
    }
  };

  

  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <FormInsert formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default Insert;
