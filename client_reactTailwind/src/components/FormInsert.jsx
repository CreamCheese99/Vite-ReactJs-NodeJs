import React, { useState } from 'react';
import renderInput from './RenderInput';
import renderTextArea from './RenderTextArea';

function FormInsert({ formData, onChange, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default behavior
    onSubmit(event); // Call onSubmit with the event
  };

  return (
    <div className="md:container md:mx-auto w-1/2 p-8 text-left">
      <h2 className="text-xl font-semibold text-pink-600 mb-4">เพิ่มข้อมูลพัสดุ</h2>
      <form onSubmit={handleSubmit}>
        {renderInput('รายการพัสดุหลัก', 'main_item_name', 'text', onChange)}
        <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded">
          ค้นหา
        </button>
        {renderInput('รหัสทรัพย์สิน', 'asset_id', 'text', onChange)}
        {renderInput('จำนวน', 'quantity', 'number', onChange)}
        {renderInput('หน่วยนับ', 'unit', 'text', onChange)}
        {renderInput('ประจำปีงบประมาณ', 'fiscal_year','text', onChange)}
        {renderInput('วงเงินงบประมาณ', 'budget_amount', 'text', onChange)}
        {renderInput('ประเภทเงิน', 'fund_type', 'text', onChange)}
        {renderInput('ราคากลาง', 'standard_price', 'number', onChange)}
        {renderInput('ประเภทพัสดุ', 'asset_type', 'text', onChange)}
        {renderInput('สถานที่ใช้งาน', 'usage_location', 'text', onChange)}
        {renderInput('วันที่ส่งมอบ', 'delivery_location', 'text', onChange)}
        {renderInput('ผู้รับผิดชอบ', 'responsible_person', 'text', onChange)}

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
