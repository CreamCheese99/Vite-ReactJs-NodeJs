import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AssetTable() {
  const [assets, setAssets] = useState([]);

  // ฟังก์ชันสำหรับดึงข้อมูลจาก server.js
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/Allassets'); // เปลี่ยน /api/assets เป็น endpoint ที่คุณใช้ใน server.js
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
      axios.delete(`/api/assets/${id}`)
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
    <table>
      <thead>
        <tr>
          <th>main_item_name</th>
          <th>asset_id</th>
          {/* ... อื่นๆ */}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {assets.map((asset) => (
          <tr key={asset.id}>
            <td>{asset.main_item_name}</td>
            <td>{asset.asset_id}</td>
            {/* ... อื่นๆ */}
            <td>
              <button onClick={() => handleEdit(asset.id)}>Edit</button>
              <button onClick={() => handleDelete(asset.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}