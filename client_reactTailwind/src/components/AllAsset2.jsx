import React, { useState, useEffect } from 'react';
import axios from 'axios';

function  AllAssets2() {
  const [assets, setAssets] = useState([]);

  // ฟังก์ชันสำหรับดึงข้อมูลจาก server.js
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/assets'); // เปลี่ยน /api/assets เป็น endpoint ที่คุณใช้ใน server.js
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
  
//   const handleDelete = (id) => {
//     // แสดง confirm dialog
//     if (window.confirm('Are you sure you want to delete this asset?')) {
//       // ส่ง request ไปยัง server.js เพื่อลบข้อมูล
//       axios.delete(`http://localhost:5000/api/assets/${id}`)
//         .then(() => {
//           // อัปเดตข้อมูลใน state หลังจากลบสำเร็จ
//           setAssets(assets.filter((asset) => asset.id !== id));
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }   
//   };

  
    const handleSubInsert =(id) =>{
    // นำทางไปยังหน้าเพิ่มโดยส่ง id เป็นพารามิเตอร์
    // เช่น: useHistory สำหรับ React Router
    history.push(`/insert/${id}`);

    };

  return ( 
    <div className="font-prompt md:container  md:mx-auto w-1/2 p-8 text-left">
      <table className="w-full border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 iem-center">
          <tr>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">ลำดับ</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">รหัสพัสดุหลัก</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">จำนวน</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">ประจำปีงบประมาณ</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">วันที่ส่งมอบ</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">ผู้รับผิดชอบ</th>
            {/* <th className="p-3 text-sm font-semibold border-b border-gray-300">สภาพใช้งาน</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">ราคา/หน่วย</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">อายุการใช้งาน</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">สาเหตุเลิกใช้งาน</th> */}
            <th className="p-3 text-sm font-semibold border-b border-gray-300" colSpan="3">Actions</th>
            
          </tr>
        </thead>
      
      <tbody className='bg-white text-gray-800'>
        {assets.map((asset,index) => (
          <tr key={asset.id} className="hover:bg-gray-50 transition ease-in-out">
            <td className="p-3 text-xs border-b border-gray-300">{index+1}</td>
            <td className="p-3 text-xs border-b border-gray-300">{asset.asset_id}</td>
            <td className="p-3 text-xs border-b border-gray-300">{asset.quantity}</td>
            <td className="p-3 text-xs  border-b border-gray-300">{asset.fiscal_year}</td>
            <td className="p-3 text-xs border-b border-gray-300">{asset.delivery_location}</td>
            <td className="p-3 text-xs border-b border-gray-300">{asset.responsible_person}</td>
 
            <td>
              <button className="bg-gray-300 hover:bg-gray-400 text-xs text-gray-700 rounded-lg px-3 py-1 text-sm" onClick={() => handleEdit(asset.id)}>เเก้ไข</button></td>
             {/* <td> <button className="bg-gray-300 hover:bg-gray-400 text-xs text-gray-700 rounded-lg px-3 py-1 text-sm" onClick={() => handleDelete(asset.id)}>ลบ</button></td> */}
             <td> <button className="bg-gray-300 hover:bg-gray-400 text-xs text-gray-700 rounded-lg px-3 py-1 text-sm" onClick={() => handleSubInsert(asset.id)}>เพิ่มพัสดุย่อย</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}
export default AllAssets2;