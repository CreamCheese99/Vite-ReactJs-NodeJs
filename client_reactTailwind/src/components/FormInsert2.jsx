import React,{useState} from 'react';
//import React from 'react';
import renderInput from './RenderInput';
import renderTextArea from './RenderTextArea';

function FormInsert2({ formData, onChange, onSubmit }) {
  
  const handleSubmit2 = (event) => {
    event.preventDefault(); // Prevent default behavior
    onSubmit(event); // Call onSubmit with the event
  };
    

  return (
    <div className="text-sm font-prompt md:container text-sm  md:mx-auto w-1/2 p-8 text-left">
      <h2 className="text-xl font-semibold text-pink-600 mb-4">เพิ่มข้อมูลพัสดุ รายการย่อย</h2>

      <form onSubmit={ handleSubmit2}>
        
      <div  className="items-center w-1/4"> 
        {renderInput('รหัสพัสดุหลัก', 'main_asset_id', 'text',onChange)}
      </div>

      <div  className="items-center w-3/4"> 
        {renderTextArea('ชื่อรายการพัสดุย่อย', 'sub_asset_name','text',onChange)}
        {renderInput('จำนวน', 'quantity', 'number',onChange)}
        {renderInput('หน่วยนับ', 'unit','text',onChange)}
        {renderInput('ราคาต่อหน่วย', 'unit_price','number',onChange)}
        {renderInput('ประเภทพัสดุ', 'sub_asset_type','text',onChange)}
        {renderInput('รายละเอียด', 'sub_asset_description','text',onChange)}
      </div> 
        
        <div className="container mx-auto flex justify-center items-center space-x-4">
          {/* สามารถ uncomment หากต้องการปุ่มยกเลิก */}
          {/* <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded">ยกเลิก</button> */}
          <button type="submit" className="bg-yellow-400 text-white px-4 py-2 rounded">บันทึก</button>
        </div>
      </form>
    </div>
  );
}


export default FormInsert2;
