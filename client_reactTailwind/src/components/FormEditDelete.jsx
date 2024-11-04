import React from 'react';
import renderInput from './RenderInput'; 
import renderTextArea from './RenderTextArea'; 

function FormEditDelete({ onSubmit, onDelete }) {
  return (
    <div className="md:container md:mx-auto w-1/2 p-8 text-left">
      <h2 className="font-prompt text-xl font-semibold text-pink-600 mb-4">แก้ไข/ลบข้อมูลพัสดุหลัก</h2> 
      <form onSubmit={onSubmit}>

        {renderInput('รายการพัสดุหลัก', 'main_item_name')} 
      
        <div className="md:container md:mx-auto w-1/2 p-8 text-left">
          <button type="button" className="font-prompt bg-gray-400 text-white px-4 py-2 rounded">ค้นหา</button> 
        </div>
        
        {renderInput('รหัสทรัพย์สิน', 'asset_id')} 
        {renderInput('จำนวน', 'quantity', 'number')}
        {renderInput('หน่วยนับ', 'unit')}
        {renderTextArea('ประจำปีงบประมาณ', 'fiscal_year')} 
        {renderInput('วงเงินงบประมาณ', 'budget_amount')} 
        {renderInput('ประเภทเงิน', 'fund_type')} 
        {renderInput('ราคากลาง', 'standard_price', 'number')} 
        {renderInput('ประเภทพัสดุ', 'asset_type')} 
        {renderInput('สถานที่ใช้งาน', 'usage_location')} 
        {renderInput('วันที่ส่งมอบ', 'delivery_location')} 
        {renderInput('ผู้รับผิดชอบ', 'responsible_person')} 

        <div className="container mx-auto flex justify-center items-center space-x-4">
          {/* <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded">ยกเลิก</button> */}
          <button type="submit" className="font-prompt bg-yellow-400 text-white px-4 py-2 rounded">บันทึก</button> {/* ปุ่มบันทึก */}
        </div>
      </form>
      
      <div className="container mx-auto flex justify-center items-center space-x-4 mt-4">
        <button onClick={onDelete} className=" font-prompt bg-red-400 text-white px-4 py-2 rounded">ลบข้อมูล</button> {/* ปุ่มลบข้อมูล */}
      </div>
    </div>
  );
}

export default FormEditDelete;
