import React from 'react'; 
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import FormEditDelete from '../components/FormEditDelete';

function EditDelete({ onEditData, onDeleteData }) {
  const handleEdit = (event) => {
    event.preventDefault();
    
    // รวบรวมข้อมูลจากฟอร์ม
    const formData = {
      main_item_name: event.target.main_item_name.value,
      asset_id: event.target.asset_id.value,
      quantity: event.target.quantity.value,
      unit: event.target.unit.value,
      fiscal_year: event.target.fiscal_year.value,
      budget_amount: event.target.budget_amount.value,
      fund_type: event.target.fund_type.value,
      standard_price: event.target.standard_price.value,
      responsible_person: event.target.responsible_person.value,
      asset_type: event.target.asset_type.value,
      usage_location: event.target.usage_location.value,
      delivery_location: event.target.delivery_location.value,
      usage_status: event.target.usage_status.value,
      image_path: event.target.image_path.value,
      acquisition_date: event.target.acquisition_date.value,
    };

    console.log("Data in handleEdit:", formData);
    
    // ตรวจสอบว่า onEditData เป็นฟังก์ชันและเรียกใช้มัน
    if (typeof onEditData === "function") {
      onEditData(formData); // เรียกใช้ฟังก์ชันเพื่อนำข้อมูลที่แก้ไขไปส่งที่เซิร์ฟเวอร์
    } else {
      console.warn("onEditData is not a function");
    }
  };

  const handleDelete = () => {
    const assetId = prompt("กรอก Asset ID ที่ต้องการลบ:"); // แจ้งให้กรอก Asset ID
    if (assetId && typeof onDeleteData === "function") {
      onDeleteData(assetId); // เรียกใช้ฟังก์ชันเพื่อลบข้อมูลที่เลือก
    } else {
      console.warn("onDeleteData is not a function หรือไม่มี Asset ID ที่ให้ไว้");
    }
  };

  return (
    <div className="bg-gray-50 text-gray-600">
      <Header />
      <div className="flex">
        <Sidebar />
        <FormEditDelete onSubmit={handleEdit} onDelete={handleDelete} /> {/* ส่ง handleEdit และ handleDelete ไปที่ Form */}
      </div>
    </div>
  );
}

export default EditDelete;


