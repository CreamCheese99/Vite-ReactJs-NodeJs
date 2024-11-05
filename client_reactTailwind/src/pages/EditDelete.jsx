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

  const handleEdit = (event) => {
    event.preventDefault();

    // Send the updated data to the API for editing
    axios.put(`http://localhost:5000/api/assets/${formData.asset_id}`, formData)
      .then(response => {
        console.log('Data successfully updated:', response.data);
        // Optionally, show a success message or redirect
        alert('Data updated successfully!');
      })
      .catch(error => {
        console.error('Error updating data:', error);
        // Optionally, show an error message
        alert('Failed to update data.');
      });
  };

  const handleDelete = () => {
    const assetId = prompt("Enter the Asset ID to delete:"); // Prompt for Asset ID
    if (assetId) {
      axios.delete(`http://localhost:5000/api/assets/${assetId}`)
        .then(response => {
          console.log('Data successfully deleted:', response.data);
          // Optionally, show a success message or redirect
          alert('Data deleted successfully!');
          // Clear form data if necessary
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
          // Optionally, show an error message
          alert('Failed to delete data.');
        });
    } else {
      console.warn("No Asset ID provided");
      alert("Please provide a valid Asset ID.");
    }
  };

  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <FormEditDelete
          onSubmit={handleEdit} 
          onDelete={handleDelete}
          formData={formData} 
          setFormData={setFormData} // Pass setFormData to the form
        /> 
      </div>
    </div>
  );
}

export default EditDelete;
