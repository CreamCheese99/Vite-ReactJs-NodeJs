import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import FormSubInsert from '../components/FromSubInsert';

function SubInsert({ onInsertData }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      // ข้อมูลที่ต้องการส่ง - ของเจ้าหน้าที่ภาควิชา
      main_asset_id: event.target.main_asset_id.value,
      sub_asset_name: event.target.sub_asset_name.value,
      quantity: event.target.quantity.value,
      unit: event.target.unit.value,
      unit_price: event.target.unit_price.value,
      sub_asset_type: event.target.sub_asset_type.value,
      sub_asset_description: event.target.sub_asset_description.value,
      
    };
    console.log("data in formSubmit"+ formData);
    
    onInsertData(formData); // เรียกใช้ฟังก์ชันเพื่อส่งข้อมูลไปยังเซิร์ฟเวอร์
  };

  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <FormSubInsert onSubmit={handleSubmit} /> {/* ส่งฟังก์ชัน handleSubmit ไปที่ Form */}
      </div>
    </div>
  );
}

export default SubInsert;