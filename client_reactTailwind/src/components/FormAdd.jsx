import React, { useState } from 'react';
import axios from 'axios';
import renderInput from './RenderInput';

const FormAdd = () => {
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
    <div className="font-prompt text-sm md:container md:mx-auto w-1/2 p-8 text-left">
    <h2 className="text-xl font-semibold text-pink-600 mb-4 ">เพิ่มข้อมูลพัสดุ</h2>
    <form onSubmit={handleSubmit}>
    
    <div  className="mb-4 text-sm flex items-center space-x-4">
      {renderInput('รายการพัสดุหลัก', 'main_item_name', 'text', onChange)}
      <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded-xl ">ค้นหา</button>
    </div>
    <div  className="items-center w-1/4"> 
      {renderInput('รหัสทรัพย์สิน', 'asset_id', 'text', onChange)}
    </div>
    <div  className="items-center w-1/4"> 
      {renderInput('จำนวน', 'quantity', 'number', onChange)}
    </div>
    <div  className="items-center text-sm w-3/4"> 
      {renderInput('หน่วยนับ', 'unit', 'text', onChange)}
      {renderInput('ประจำปีงบประมาณ','fiscal_year','text', onChange)}
      {renderInput('วงเงินงบประมาณ', 'budget_amount', 'text', onChange)}
      {renderInput('ประเภทเงิน', 'fund_type', 'text', onChange)}
      {renderInput('ราคากลาง', 'standard_price', 'number', onChange)}
      {renderInput('ประเภทพัสดุ', 'asset_type', 'text', onChange)}
      {renderInput('สถานที่ใช้งาน', 'usage_location', 'text', onChange)}
    </div>
    <div  className="items-center w-1/4"> 
      {renderInput('วันที่ส่งมอบ', 'delivery_location', 'text', onChange)}
    </div> 
    <div  className="items-center w-1/2"> 
      {renderInput('ผู้รับผิดชอบ', 'responsible_person', 'text', onChange)}
    </div>
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <button type="submit" className="bg-yellow-400 text-white px-4 py-2 rounded">
          บันทึก
        </button>
      </div>
    </form>
  </div>
  );
}
export default FormAdd;