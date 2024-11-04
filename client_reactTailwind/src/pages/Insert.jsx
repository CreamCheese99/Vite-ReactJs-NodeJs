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
    usage_status: '',
    image_path: '',
    acquisition_date: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate required fields
    if (!formData.main_item_name || !formData.asset_id) {
      console.error('Main item name and asset ID are required.');
      return; // Early return if validation fails
    }

    console.log('Sending data:', formData);
    try {
      const response = await axios.post('http://localhost:5000/api/assets', formData);
      console.log('ข้อมูลถูกส่งสำเร็จ:', response.data);
      // Reset form after successful submission (optional)
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
        delivery_location: '',
        usage_status: '',
        image_path: '',
        acquisition_date: ''
      });
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error.response?.data || error.message);
      // Optionally, you could show a user-friendly message here
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

