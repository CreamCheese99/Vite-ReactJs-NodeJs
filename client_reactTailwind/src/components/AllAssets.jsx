import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AllAssets() {
  const [assets, setAssets] = useState([]);

  // ฟังก์ชันสำหรับดึงข้อมูลจาก server.js
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/Allassets'); // เปลี่ยน /api/assets เป็น endpoint ที่คุณใช้ใน server.js
        setAssets(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleEdit = (id) => {
    // นำทางไปยังหน้าแก้ไขโดยส่ง id เป็นพารามิเตอร์
    // เช่น: useHistory สำหรับ React Router
    history.push(`/edit/${id}`);
  };
  
  const handleDelete = (id) => {
    // แสดง confirm dialog
    if (window.confirm('Are you sure you want to delete this asset?')) {
      // ส่ง request ไปยัง server.js เพื่อลบข้อมูล
      axios.delete(`http://localhost:5000/api/assets/${id}`)
        .then(() => {
          // อัปเดตข้อมูลใน state หลังจากลบสำเร็จ
          setAssets(assets.filter((asset) => asset.id !== id));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div className="font-prompt md:container md:mx-auto w-1/2 p-8 text-left">
      <table className="border-collapse table-auto w-full border border-gray-300 rounded-lg text-center bg-white">
        <thead className="bg-gray-100 rounded-t-lg">
          <tr>
            <th className="p-3 border text-base border-gray-300 text-gray-700">ลำดับ</th>
            <th className="p-3 border text-base border-gray-300 text-gray-700">รหัสพัสดุย่อย</th>
            <th className="p-3 border text-base border-gray-300 text-gray-700">พัสดุหลัก</th>
            <th className="p-3 border text-base border-gray-300 text-gray-700">จำนวนพัสดุย่อย</th>
            <th className="p-3 border text-base border-gray-300 text-gray-700">สถานที่ใช้งาน</th>
            <th className="p-3 border text-base border-gray-300 text-gray-700">สภาพใช้งาน</th>
            <th className="p-3 border text-base border-gray-300 text-gray-700">ราคา/หน่วย</th>
            <th className="p-3 border text-base border-gray-300 text-gray-700">อายุการใช้งาน</th>
            <th className="p-3 border text-base border-gray-300 text-gray-700">สาเหตุเลิกใช้งาน</th>
            <th className="p-3 border text-base border-gray-300 text-gray-700" colspan="2">Actions</th>
            
          </tr>
        </thead>
      
      <tbody>
        {assets.map((asset,index) => (
          <tr key={asset.id}>
            <td>{index+1}</td>
            <td>{asset.main_item_name}</td>
            <td>{asset.asset_id}</td>
            <td>{asset.quantity}</td>
    
            <td>{asset.fiscal_year}</td>
            <td>{asset.budget_amount}</td>
            <td>{asset.responsible_person}</td>
            <td>{asset.usage_location}</td>
            <td>{asset.delivery_location}</td>
 
            <td>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg px-4 py-1 text-sm md:mt-7" onClick={() => handleEdit(asset.id)}>Edit</button></td>
             <td> <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-lg px-4 py-1 text-sm md:mt-7" onClick={() => handleDelete(asset.id)}>Delete</button>            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
export default AllAssets;