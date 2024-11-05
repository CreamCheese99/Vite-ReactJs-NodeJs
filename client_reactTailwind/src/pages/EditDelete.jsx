import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import FormEditDelete from '../components/FormEditDelete';
import Header from '../components/Header';

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
    delivery_location: '',
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting data:', formData);
    setLoading(true); // เริ่มโหลด

    try {
      if (isEditMode) {
        const response = await axios.put(`http://localhost:5000/api/assets/${formData.id}`, formData);
        console.log('Data updated successfully:', response.data);
        setResponseMessage('ข้อมูลถูกอัปเดตเรียบร้อย');
      } else {
        const response = await axios.post('http://localhost:5000/api/assets', formData);
        console.log('Data submitted successfully:', response.data);
        setResponseMessage('ข้อมูลถูกบันทึกเรียบร้อย');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      setResponseMessage('เกิดข้อผิดพลาดในการส่งข้อมูล');
    } finally {
      setLoading(false); // สิ้นสุดโหลด
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("คุณแน่ใจว่าต้องการลบข้อมูลนี้?")) {
      try {
        setLoading(true); // เริ่มโหลด
        const response = await axios.delete(`http://localhost:5000/api/assets/${id}`);
        console.log('Data deleted successfully:', response.data);
        setResponseMessage('ข้อมูลถูกลบเรียบร้อย');
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
        });
        setIsEditMode(false);
      } catch (error) {
        console.error('Error deleting data:', error);
        setResponseMessage('เกิดข้อผิดพลาดในการลบข้อมูล');
      } finally {
        setLoading(false); // สิ้นสุดโหลด
      }
    }
  };

  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <FormEditDelete
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
          isEditMode={isEditMode}
          loading={loading}
          responseMessage={responseMessage} // ส่งข้อความตอบสนอง
        />
      </div>
      {loading && <p className="text-center">กำลังโหลด...</p>}
      {responseMessage && <p className="text-center">{responseMessage}</p>}
    </div>
  );
}

export default EditDelete;
