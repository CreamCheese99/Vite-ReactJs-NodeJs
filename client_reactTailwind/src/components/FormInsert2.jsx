import React,{useState} from 'react';
//import React from 'react';
import renderInput from './RenderInput';
import renderTextArea from './RenderTextArea';

function FormInsert2({ onSubmit }) {
  
  const [formData,setFormData]=useState({
    main_item_name:'',
    asset_id:'',
    quantity:'',
    unit:'',
    fiscal_year:'',
    budget_amount:'',
    fund_type:'',
    standard_price:'',
    responsible_person:'',
    asset_type:'',
    usage_location:'',
    delivery_location:'',
    usage_status:'',
    image_path:'',
    acquisition_date:''
    
 
  });
  
  const handleChange=(event)=>{
    setFormData({
      ...formData,
      [event.target.name]:event.target.value,
    });
  };


  return (
    <div className="md:container md:mx-auto w-1/2 p-8 text-left">
      <h2 className="text-xl font-semibold text-pink-600 mb-4">เพิ่มข้อมูลพัสดุ รายการย่อย</h2>
      <form onSubmit={onSubmit}>
        {//renderInput('รายการพัสดุหลัก', 'main_item_name')
        }
        
        <div className="md:container md:mx-auto w-1/2 p-8 text-left">
          <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded">ค้นหา</button>
        </div>
        <label>
        ชื่อ:
        <input type="text" name="main_item_name" value={formData.main_item_name} onChange={handleChange} />
      </label>
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
        </div>
      </form>
    </div>
  );
}

export default FormInsert2;