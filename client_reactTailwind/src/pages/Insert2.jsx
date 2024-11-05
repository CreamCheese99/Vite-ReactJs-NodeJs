import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import FormInsert2 from '../components/FormInsert2';
import Header from '../components/Header';

const Insert2 = () => {  
  const [formData, setFormData] = useState({
      main_asset_id: '',
      sub_asset_name: '',
      quantity: '',
      unit: '',
      unit_price: '',
      sub_asset_type: '',
      sub_asset_description: '',
  });

  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData); // Log updated formData
  };

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch('http://localhost:5000/api/subassets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), // ตรวจสอบให้แน่ใจว่า formData มีค่าที่ไม่ซ้ำกัน
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'เกิดข้อผิดพลาดบางอย่าง');
        }

        const data = await response.json();
        console.log('ข้อมูลถูกส่งเรียบร้อยแล้ว:', data);
    } catch (error) {
        console.error('ข้อผิดพลาดในการส่งข้อมูล:', error);
    }
};
 

  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <FormInsert2 
          formData={formData} 
          onChange={handleChange} 
          onSubmit={handleSubmit2} 
          errorMessage={errorMessage} // ส่งข้อความข้อผิดพลาดไปยัง FormInsert2
        /> 
      </div>
    </div>
  );
}

export default Insert2;
