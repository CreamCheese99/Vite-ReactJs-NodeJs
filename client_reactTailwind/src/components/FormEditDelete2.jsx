import React from 'react';
import renderInput from './RenderInput'; 

function FormEditDelete2({ onSubmit, onDelete }) {
  return (
    <div className="text-sm font-prompt md:container md:mx-auto w-1/2 p-8 text-left">
      <h2 className="text-xl font-semibold text-pink-600 mb-4">แก้ไข/ลบข้อมูลพัสดุย่อย</h2> 
      <form onSubmit={onSubmit}>

        <div className="flex flex-col space-y-4">
          <div className="w-1/2">
            {renderInput('รหัสพัสดุหลัก', 'text', 'main_asset_id')}
          </div>

          <div className="w-3/4">
            {renderInput('ชื่อรายการพัสดุย่อย', 'text', 'sub_asset_name')}
            {renderInput('จำนวน', 'number', 'quantity')}
            {renderInput('หน่วยนับ', 'text', 'unit')}
            {renderInput('ราคาต่อหน่วย', 'number', 'unit_price')}
            {renderInput('ประเภทพัสดุ', 'text', 'sub_asset_type')}
            {renderInput('รายละเอียด', 'text', 'sub_asset_description')}
          </div>
        </div>
        
        <div className="container mx-auto flex justify-start items-center space-x-4 mt-4">
          <button type="submit" className="bg-yellow-400 text-white px-4 py-2 rounded">
            บันทึก
          </button>
          <button type="button" onClick={onDelete} className="bg-red-400 text-white px-4 py-2 rounded">
            ลบข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormEditDelete2;
