import React, { useState } from 'react';
import renderInput from './RenderInput';
import renderTextArea from './RenderTextArea';

function FormInsert({ onSubmit }) {
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
    acquisition_date: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // ป้องกันพฤติกรรมการส่งฟอร์มเริ่มต้น
    onSubmit(formData); // เรียกฟังก์ชัน onSubmit ที่ส่งมาเป็นพร็อพ
  };

  return (
    <div className="md:container md:mx-auto w-1/2 p-8 text-left">
      <h2 className="text-xl font-semibold text-pink-600 mb-4">เพิ่มข้อมูลพัสดุ</h2>
      <form onSubmit={handleSubmit}>
        {renderInput('รายการพัสดุหลัก', 'main_item_name', 'text', handleChange)}
        <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded">
          ค้นหา
        </button>
        {renderInput('รหัสทรัพย์สิน', 'asset_id', 'text', handleChange)}
        {renderInput('จำนวน', 'quantity', 'number', handleChange)}
        {renderInput('หน่วยนับ', 'unit', 'text', handleChange)}
        {renderTextArea('ประจำปีงบประมาณ', 'fiscal_year', handleChange)}
        {renderInput('วงเงินงบประมาณ', 'budget_amount', 'text', handleChange)}
        {renderInput('ประเภทเงิน', 'fund_type', 'text', handleChange)}
        {renderInput('ราคากลาง', 'standard_price', 'number', handleChange)}
        {renderInput('ประเภทพัสดุ', 'asset_type', 'text', handleChange)}
        {renderInput('สถานที่ใช้งาน', 'usage_location', 'text', handleChange)}
        {renderInput('วันที่ส่งมอบ', 'delivery_location', 'text', handleChange)}
        {renderInput('ผู้รับผิดชอบ', 'responsible_person', 'text', handleChange)}

        <div className="container mx-auto flex justify-center items-center space-x-4">
          <button type="submit" className="bg-yellow-400 text-white px-4 py-2 rounded">
            บันทึก
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormInsert;
