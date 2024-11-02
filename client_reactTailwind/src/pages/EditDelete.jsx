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
    delivery_location: '',
    usage_status: '',
    image_path: '',
    acquisition_date: '',
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
        <FormEditDelete
          onSubmit={handleEdit} 
          onDelete={handleDelete}
          formData={formData} 
          setFormData={setFormData} // ส่ง setFormData ให้ฟอร์ม
        /> 
      </div>
    </div>
  );
}

export default EditDelete;



// import React from 'react'; 
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import FormEditDelete from '../components/FormEditDelete';

// function EditDelete({ onEditData, onDeleteData }) {
//   const handleEdit = (event) => {
//     event.preventDefault();
    
//     // รวบรวมข้อมูลจากฟอร์ม
//     const formData = {
//       main_item_name: event.target.main_item_name.value,
//       asset_id: event.target.asset_id.value,
//       quantity: event.target.quantity.value,
//       unit: event.target.unit.value,
//       fiscal_year: event.target.fiscal_year.value,
//       budget_amount: event.target.budget_amount.value,
//       fund_type: event.target.fund_type.value,
//       standard_price: event.target.standard_price.value,
//       responsible_person: event.target.responsible_person.value,
//       asset_type: event.target.asset_type.value,
//       usage_location: event.target.usage_location.value,
//       delivery_location: event.target.delivery_location.value,
//       usage_status: event.target.usage_status.value,
//       image_path: event.target.image_path.value,
//       acquisition_date: event.target.acquisition_date.value,
//     };

//     console.log("Data in handleEdit:", formData);
    
//     // ตรวจสอบว่า onEditData เป็นฟังก์ชันและเรียกใช้มัน
//     if (typeof onEditData === "function") {
//       onEditData(formData); // เรียกใช้ฟังก์ชันเพื่อนำข้อมูลที่แก้ไขไปส่งที่เซิร์ฟเวอร์
//     } else {
//       console.warn("onEditData is not a function");
//     }
//   };

//   const handleDelete = () => {
//     const assetId = prompt("กรอก Asset ID ที่ต้องการลบ:"); // แจ้งให้กรอก Asset ID
//     if (assetId && typeof onDeleteData === "function") {
//       onDeleteData(assetId); // เรียกใช้ฟังก์ชันเพื่อลบข้อมูลที่เลือก
//     } else {
//       console.warn("onDeleteData is not a function หรือไม่มี Asset ID ที่ให้ไว้");
//     }
//   };

//   return (
//     <div className="bg-gray-50 text-gray-600">
//       <Header />
//       <div className="flex">
//         <Sidebar />
//         <FormEditDelete onSubmit={handleEdit} onDelete={handleDelete} /> {/* ส่ง handleEdit และ handleDelete ไปที่ Form */}
//       </div>
//     </div>
//   );
// }

// export default EditDelete;


