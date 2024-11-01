import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';   // นำเข้า Login Page
import Insert from './pages/Insert'; // นำเข้า Insert Page

import Axios from 'axios';

const App = () => {
  const handleInsertData = async (data) => {
    try {
      const response = await Axios.post('http://localhost:5000/api/assets', data);
      console.log('Data inserted:', response.data);
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} /> {/* แสดงหน้า Login เมื่อไปที่ '/' */}
      <Route path="/insert" element={<Insert />} /> {/* แสดงหน้า Insert เมื่อไปที่ '/insert' */}
    </Routes>
  );
};

export default App;
