import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const FormEdit = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    main_item_name: '',
    // description: '',
    // year: '',
    // department: ''
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/assets/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/assets/${id}`, formData);
      alert('อัปเดตข้อมูลสำเร็จ');
    } catch (error) {
      console.error('Error updating data:', error);
      alert('เกิดข้อผิดพลาดในการอัปเดตข้อมูล');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ชื่อครุภัณฑ์:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      {/* เพิ่ม input fields สำหรับ field อื่นๆ เช่น description, year, department */}
      <button type="submit">บันทึก</button>
    </form>
  );
};
export default FormEdit;