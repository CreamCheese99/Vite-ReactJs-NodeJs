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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Sending data:', formData); // แสดงข้อมูลที่ส่ง
    try {
      const response = await axios.post('http://localhost:5000/api/assets', formData);
      console.log('ข้อมูลถูกส่งสำเร็จ:', response.data);
      // แสดงข้อความแจ้งเตือนหรือทำการ redirect หลังส่งข้อมูลสำเร็จ
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
      // แสดงข้อความแจ้งเตือนเมื่อเกิดข้อผิดพลาด
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
