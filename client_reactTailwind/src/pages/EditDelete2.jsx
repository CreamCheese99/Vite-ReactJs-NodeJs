import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import FormEditDelete2 from '../components/FormEditDelete2';

const EditDelete2 = () => {
  const [formData, setFormData] = useState({
    main_asset_id:'',
    sub_asset_name:'',
    quantity:'',
    unit:'',
    unit_price:'',
    sub_asset_type:'',
    sub_asset_description:'',
  });

  const handleEdit = (event) => {
    event.preventDefault();

    // ส่งข้อมูลไปยัง API สำหรับการแก้ไข
    axios.put(`http://localhost:5000/api/assets/${formData.asset_id}`, formData)
      .then(response => {
        console.log('ข้อมูลถูกแก้ไขสำเร็จ:', response.data);
        // ทำอะไรบางอย่างหลังจากส่งข้อมูลสำเร็จ เช่น แสดง alert หรือ redirect ไปหน้าอื่น
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการแก้ไขข้อมูล:', error);
        // แสดงข้อความแจ้งเตือนเมื่อเกิดข้อผิดพลาด
      });
  };

  const handleDelete = () => {
    const assetId = prompt("กรอก Asset ID ที่ต้องการลบ:"); // แจ้งให้กรอก Asset ID
    if (assetId) {
      axios.delete(`http://localhost:5000/api/assets/${assetId}`)
        .then(response => {
          console.log('ข้อมูลถูกลบสำเร็จ:', response.data);
          // ทำอะไรบางอย่างหลังจากลบข้อมูลสำเร็จ เช่น แสดง alert หรือ redirect ไปหน้าอื่น
        })
        .catch(error => {
          console.error('เกิดข้อผิดพลาดในการลบข้อมูล:', error);
          // แสดงข้อความแจ้งเตือนเมื่อเกิดข้อผิดพลาด
        });
    } else {
      console.warn("ไม่มี Asset ID ที่ให้ไว้");
    }
  };

  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <FormEditDelete2
          onSubmit={handleEdit} 
          onDelete={handleDelete}
          formData={formData} 
          setFormData={setFormData} // ส่ง setFormData ให้ฟอร์ม
        /> 
      </div>
    </div>
  );
}

export default EditDelete2;
