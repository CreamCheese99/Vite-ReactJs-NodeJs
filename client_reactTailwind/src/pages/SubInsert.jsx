import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import FormSubInsert from '../components/FormSubInsert';

function SubInsert({ onSubInsertData }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = {
      main_asset_id: event.target.main_asset_id.value,
      sub_asset_name: event.target.sub_asset_name.value,
      quantity: event.target.quantity.value,
      unit: event.target.unit.value,
      unit_price: event.target.unit_price.value,
      sub_asset_type: event.target.sub_asset_type.value,
      sub_asset_description: event.target.sub_asset_description.value,
    };
    
    console.log("Data in handleSubmit:", formData);
    
    if (typeof onSubInsertData === "function") {
      onSubInsertData(formData); // เรียกใช้ฟังก์ชันเพื่อส่งข้อมูลไปยังเซิร์ฟเวอร์
    } else {
      console.warn("onSubInsertData is not a function");
    }
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
