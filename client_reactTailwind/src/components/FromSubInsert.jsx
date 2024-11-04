import React from 'react';
import renderInput from './RenderInput';
import renderTextArea from './RenderTextArea';

function FormSubInsert({ onSubmit }) {
  return (
    <div className="md:container md:mx-auto w-1/2 p-8 text-left">
      <h2 className="text-xl font-semibold text-pink-600 mb-4">เพิ่มข้อมูลพัสดุ</h2>
      <form onSubmit={onSubmit}>
        {renderInput('รายการพัสดุหลัก', 'main_asset_id')}
        {renderInput('ชื่อรายการพัสดุย่อย', 'sub_asset_name')}
        {renderInput('จำนวน', 'quantity', 'number')}
        {renderInput('หน่วยนับ', 'unit')}
        {renderTextArea('ราคาต่อหน่วย', 'unit_price')}
        {renderInput('ประเภทพัสดุ', 'sub_asset_type')}
        {renderInput('รายละเอียด', 'sub_asset_description')}
 
        
        {/* หากต้องการสามารถยกเลิกการใส่ภาพได้ */}
        {/* 
        <div className="mb-4">
          <label className="block text-gray-700">ใส่ภาพ</label>
          <input type="file" className="border border-gray-300 p-2 rounded" />
        </div> 
        */}

        <div className="container mx-auto flex justify-center items-center space-x-4">
          {/* สามารถ uncomment หากต้องการปุ่มยกเลิก */}
          {/* <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded">ยกเลิก</button> */}
          <button type="submit" className="bg-yellow-400 text-white px-4 py-2 rounded">บันทึก</button>
          <button type="submit" className="bg-yellow-400 text-white px-4 py-2 rounded ml-2">เพิ่มรายการ</button>
        </div>
      </form>
    </div>
  );
}

export default FormSubInsert;
