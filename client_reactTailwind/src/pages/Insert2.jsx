import React,{useState} from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import FormInsert2 from '../components/FormInsert2';
import Header from '../components/Header';

//function Insert({ onInsertData }) {
const Insert2=()=>{  
const [formData,setFormData]=useState({

    
      main_asset_id:'',
      sub_asset_name:'',
      quantity:'',
      unit:'',
      unit_price:'',
      sub_asset_type:'',
      sub_asset_description:'',
 
  });
  const handleSubmit = (event) => {
    event.preventDefault();
 axios.post('http://localhost:5000/api/assets', formData)
 .then(response => {
   console.log('ข้อมูลถูกส่งสำเร็จ:', response.data);
   // ทำอะไรบางอย่างหลังจากส่งข้อมูลสำเร็จ เช่น แสดง alert หรือ redirect ไปหน้าอื่น
 })
 .catch(error => {
   console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
   // แสดงข้อความแจ้งเตือนเมื่อเกิดข้อผิดพลาด
 });
};
  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <FormInsert2 onSubmit={handleSubmit} /> {/* ส่งฟังก์ชัน handleSubmit ไปที่ Form */}
      </div>
    </div>
  );
}

export default Insert2;
