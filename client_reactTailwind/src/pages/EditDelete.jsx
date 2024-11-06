import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import FormEditDelete from '../components/FormEditDelete';

const EditDelete = () => {
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
    delivery_location: ''
  });

  // ฟังก์ชันดึงข้อมูลตาม asset_id
  const handleFetchData = () => {
    if (!formData.asset_id) {
      alert("กรุณาป้อน Asset ID ที่ถูกต้องเพื่อดึงข้อมูล");
      return;
    }

    axios.get(`http://localhost:5000/api/assets/${formData.asset_id}`)
      .then(response => {
        setFormData(response.data); // เติมข้อมูลฟอร์มด้วยข้อมูลที่ดึงมา
        console.log('ดึงข้อมูลสำเร็จ:', response.data);
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล:', error);
        alert('ไม่สามารถดึงข้อมูลได้ กรุณาตรวจสอบ Asset ID และลองใหม่อีกครั้ง');
      });
  };

  // ฟังก์ชันสำหรับการแก้ไขข้อมูล
  const handleEdit = () => {
    if (!formData.asset_id) {
      alert("กรุณาป้อน Asset ID ที่ถูกต้องเพื่ออัปเดตข้อมูล");
      return;
    }

    axios.put(`http://localhost:5000/api/assets/${formData.asset_id}`, formData)
      .then(response => {
        console.log('อัปเดตข้อมูลสำเร็จ:', response.data);
        alert('อัปเดตข้อมูลสำเร็จ!');
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการอัปเดตข้อมูล:', error);
        alert('ไม่สามารถอัปเดตข้อมูลได้');
      });
  };

  // ฟังก์ชันสำหรับการลบข้อมูล
  const handleDelete = () => {
    if (!formData.asset_id) {
      alert("กรุณาป้อน Asset ID ที่ถูกต้องเพื่อทำการลบข้อมูล");
      return;
    }

    axios.delete(`http://localhost:5000/api/assets/${formData.asset_id}`)
      .then(response => {
        console.log('ลบข้อมูลสำเร็จ:', response.data);
        alert('ลบข้อมูลสำเร็จ!');
        // ล้างข้อมูลในฟอร์มหลังจากลบ
        setFormData({
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
          delivery_location: ''
        });
      })
      .catch(error => {
        console.error('เกิดข้อผิดพลาดในการลบข้อมูล:', error);
        alert('ไม่สามารถลบข้อมูลได้');
      });
  };

  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />     
          <FormEditDelete
            onSubmit={handleEdit} 
            onDelete={handleDelete}
            onSearch={handleFetchData} // ส่งฟังก์ชันค้นหาไปที่ FormEditDelete ที่ปุ่มค้นหา
            formData={formData} 
            onChange={setFormData} // ส่ง setFormData สำหรับการเปลี่ยนแปลงอินพุตแบบไดนามิก
          />
      </div>
    </div>
  );
};

export default EditDelete;
