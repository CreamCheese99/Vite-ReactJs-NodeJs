import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';

import Login from './pages/Login';
import Insert from './pages/Insert';
import Insert2 from './pages/Insert2';
import EditDelete from './pages/EditDelete';
import EditDelete2 from './pages/EditDelete2';
import AssetSummary from './pages/AssetSummary';


const App = () => {
  const handleSubmit = async (data) => {
    try {
      const response = await Axios.post('http://localhost:5000/api/assets', data);
      console.log('Data inserted:', response.data);
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleEdit = async (formData) => {
    setLoading(true);
    try {
      const response = await Axios.put(`http://localhost:5000/api/assets/${formData.asset_id}`, formData);
      console.log('Data updated successfully:', response.data);
      setResponseMessage('ข้อมูลถูกอัปเดตเรียบร้อย');
    } catch (error) {
      console.error('Error updating data:', error);
      setResponseMessage('เกิดข้อผิดพลาดในการแก้ไขข้อมูล');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("คุณแน่ใจว่าต้องการลบข้อมูลนี้?")) {
      setLoading(true);
      try {
        const response = await Axios.delete(`http://localhost:5000/api/assets/${id}`);
        console.log('Data deleted successfully:', response.data);
        setResponseMessage('ข้อมูลถูกลบเรียบร้อย');
      } catch (error) {
        console.error('Error deleting data:', error);
        setResponseMessage('เกิดข้อผิดพลาดในการลบข้อมูล');
      } finally {
        setLoading(false);
      }
    }
  };


  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/insert" element={<Insert onSubmit={handleSubmit} />} />
      <Route path="/insert2" element={<Insert2 />} />
      
      <Route path="/editdelete2" element={<EditDelete2 />} />
      <Route path="/assetsummary" element={<AssetSummary />} />

      <Route 
        path="/editdelete" 
        element={
          <EditDelete
            onEdit={handleEdit}       // ส่งฟังก์ชัน handleEdit เป็น props ให้ EditDelete
            onDelete={handleDelete}    // ส่งฟังก์ชัน handleDelete เป็น props ให้ EditDelete
            onSubmit={handleSubmit}    // ส่งฟังก์ชัน handleSubmit เป็น props ให้ EditDelete
            loading={loading}
            responseMessage={responseMessage}
          />
        }
      />


    </Routes>
  );
};

export default App;
