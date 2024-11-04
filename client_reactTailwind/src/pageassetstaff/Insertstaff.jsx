import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../componentstaff/Sidebar';
import FormInsert from '../componentstaff/FormInsert';
import Header from '../componentstaff/Header';

const Insertstaff = () => {
  const [formData, setFormData] = useState({
    department: '',
    main_item_name: '',
    fiscal_year: '',
    quantity: '',
    unit: '',
    image_path: '',
    delivery_location: '',
    usage_status: ''
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
      const response = await axios.post('/api/assetstaff', formData);
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

export default Insertstaff;