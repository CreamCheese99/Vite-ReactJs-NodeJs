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
  const [isFetching, setIsFetching] = useState(false);

  const handleFetchData = () => {
    if (!formData.asset_id) {
      alert("Please enter a valid Asset ID to fetch data.");
      return;
    }
    
    setIsFetching(true); // เริ่มการโหลดข้อมูล
    axios.get(`http://localhost:5000/api/assets/${formData.asset_id}`)
      .then(response => {
        setFormData(response.data);
        console.log('Data fetched successfully:', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data. Please check the Asset ID and try again.');
      })
      .finally(() => {
        setIsFetching(false); // สิ้นสุดการโหลดข้อมูล
      });
  };

  const handleEdit = (event) => {
    event.preventDefault();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="content text-sm font-prompt md:container md:mx-auto w-1/2 p-8 text-left border-xl">
          <input
            type="text"
            placeholder="Enter Asset ID"
            value={formData.asset_id}
            onChange={(e) => setFormData({ ...formData, asset_id: e.target.value })}
          />
          <button onClick={handleFetchData} disabled={isFetching}>
            {isFetching ? 'Fetching...' : 'Fetch Data'}
          </button>
          <FormEditDelete
            onSubmit={handleEdit}
            onDelete={handleDelete}
            onChange={handleChange} // เพิ่ม onChange prop
            formData={formData}
            setFormData={setFormData}
          />
        </div>
      </div>
    </div>
  );
};

export default EditDelete;
