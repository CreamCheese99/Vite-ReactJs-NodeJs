import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import FormEditDelete from '../components/FormEditDelete';

const EditDelete = () => {
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
    delivery_location: ''
  });

  // Function to fetch data based on asset_id
  const handleFetchData = () => {
    if (!formData.asset_id) {
      alert("Please enter a valid Asset ID to fetch data.");
      return;
    }

    axios.get(`http://localhost:5000/api/assets/${formData.asset_id}`)
      .then(response => {
        setFormData(response.data); // Populate the form with fetched data
        console.log('Data fetched successfully:', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data. Please check the Asset ID and try again.');
      });
  };

  // Function to handle form submission (edit)
  const handleEdit = () => {
    if (!formData.asset_id) {
      alert("Please enter a valid Asset ID to update.");
      return;
    }

    axios.put(`http://localhost:5000/api/assets/${formData.asset_id}`, formData)
      .then(response => {
        console.log('Data successfully updated:', response.data);
        alert('Data updated successfully!');
      })
      .catch(error => {
        console.error('Error updating data:', error);
        alert('Failed to update data.');
      });
  };

  // Function to handle data deletion
  const handleDelete = () => {
    if (!formData.asset_id) {
      alert("Please enter a valid Asset ID to delete.");
      return;
    }

    axios.delete(`http://localhost:5000/api/assets/${formData.asset_id}`)
      .then(response => {
        console.log('Data successfully deleted:', response.data);
        alert('Data deleted successfully!');
        // Clear form data after deletion
        setFormData({
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
          delivery_location: ''
        });
      })
      .catch(error => {
        console.error('Error deleting data:', error);
        alert('Failed to delete data.');
      });
  };

  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="content">
          <FormEditDelete
            onSubmit={handleEdit} 
            onDelete={handleDelete}
            onSearch={handleFetchData} // Send search function to FormEditDelete
            formData={formData} 
            onChange={setFormData} // Pass setFormData for dynamic input changes
          />
        </div>
      </div>
    </div>
  );
};

export default EditDelete;
