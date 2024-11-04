import React,{useState} from 'react';
//import React from 'react';
import renderInput from './RenderInput';
import renderTextArea from './RenderTextArea';

function FormInsert2({ onSubmit }) {
  
  const [formData,setFormData]=useState({
    main_asset_id:'',
    sub_asset_name:'',
    quantity:'',
    unit:'',
    unit_price:'',
    sub_asset_type:'',
    sub_asset_description:'',
    
 
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
        
        {/* <div className="md:container md:mx-auto w-1/2 p-8 text-left">
          <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded">ค้นหา</button>
        </div>
        <label>
        ชื่อ:
        <input type="text" name="main_item_name" value={formData.main_item_name} onChange={handleChange} />
        </label>
         */}

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
        </div>
      </form>
    </div>
  );
}

export default FormInsert2;
