import React from 'react';
import renderInput from './RenderInput';

function FormEditDelete({ formData, onChange, onSubmit, onDelete, isEditMode, onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event); // เรียก onSubmit โดยไม่ส่ง argument เพิ่มเติม
  };

  return (
    <div className="font-prompt text-sm md:container md:mx-auto w-full p-8 text-left">
      <h2 className="text-xl font-semibold text-pink-600 mb-4">
        {isEditMode ? 'แก้ไขข้อมูลพัสดุ' : 'ลบ/แก้ไขข้อมูลพัสดุ'}
      </h2>

      <form onSubmit={handleSubmit}>  
        <div className="mb-4 text-sm flex items-center space-x-4">
          {renderInput('รหัสทรัพย์สิน', 'asset_id', 'text', onChange, formData.asset_id)}
          <button
            type="button"
            className="bg-gray-400 text-white px-4 py-2 rounded-xl"
            onClick={onSearch} // เรียกฟังก์ชันค้นหาที่ส่งมาจากคอมโพเนนต์หลัก
          >
            ค้นหา
          </button>
        </div>

        <div className="items-center w-1/4">
          {renderInput('รายการพัสดุหลัก', 'main_item_name', 'text', onChange, formData.main_item_name)}
        </div>

        <div className="items-center w-1/4">
          {renderInput('จำนวน', 'quantity', 'number', onChange, formData.quantity)}
        </div>

        <div className="items-center w-3/4">
          {renderInput('หน่วยนับ', 'unit', 'text', onChange, formData.unit)}
          {renderInput('ประจำปีงบประมาณ', 'fiscal_year', 'text', onChange, formData.fiscal_year)}
          {renderInput('วงเงินงบประมาณ', 'budget_amount', 'text', onChange, formData.budget_amount)}
          {renderInput('ประเภทเงิน', 'fund_type', 'text', onChange, formData.fund_type)}
          {renderInput('ราคากลาง', 'standard_price', 'number', onChange, formData.standard_price)}
          {renderInput('ประเภทพัสดุ', 'asset_type', 'text', onChange, formData.asset_type)}
          {renderInput('สถานที่ใช้งาน', 'usage_location', 'text', onChange, formData.usage_location)}
        </div>

        <div className="items-center w-1/4" >
          {renderInput('วันที่ส่งมอบ', 'delivery_location', 'text', onChange, formData.delivery_location)}
        </div>

        <div className="items-center w-1/2">
          {renderInput('ผู้รับผิดชอบ', 'responsible_person', 'text', onChange, formData.responsible_person)}
        </div>

        <div className="container mx-auto flex justify-center items-center space-x-4">
          <button type="submit" className="bg-yellow-400 text-white px-4 py-2 rounded">
            {isEditMode ? 'อัพเดต' : 'บันทึก'}
          </button>
          {isEditMode && (
            <button
              type="button"
              onClick={onDelete}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              ลบ
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default FormEditDelete;