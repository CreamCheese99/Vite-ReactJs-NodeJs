import React from 'react';
import Sidebar from '../components/Sidebar';
import FormInsert from '../components/FormInsert';
import Header from '../components/Header';

function Insert({ onInsertData }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      // ข้อมูลที่ต้องการส่ง - ของเจ้าหน้าที่ภาควิชา
      main_item_name: event.target.main_item_name.value,
      asset_id: event.target.asset_id.value,
      quantity: event.target.quantity.value,
      unit: event.target.unit.value,
      fiscal_year: event.target.fiscal_year.value,
      budget_amount: event.target.budget_amount.value,
      fund_type: event.target.fund_type.value,
      standard_price: event.target.standard_price.value, // แก้ไขจาก 'sandard_price' เป็น 'standard_price'
      responsible_person: event.target.responsible_person.value,
      asset_type: event.target.asset_type.value,
      usage_location: event.target.usage_location.value,
      delivery_location: event.target.delivery_location.value,
      usage_status: event.target.usage_status.value,
      image_path: event.target.image_path.value,
      acquisition_date: event.target.acquisition_date.value,
    };
    console.log("data in formSubmit"+ formData);
    
    onInsertData(formData); // เรียกใช้ฟังก์ชันเพื่อส่งข้อมูลไปยังเซิร์ฟเวอร์
  };

  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <FormInsert onSubmit={handleSubmit} /> {/* ส่งฟังก์ชัน handleSubmit ไปที่ Form */}
      </div>
    </div>
  );
}

export default Insert;
