import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Axios from 'axios';

import Login from './pages/Login';
import Insert from './pages/Insert';
import SubInsert from './pages/SubInsert';
import EditDelete from './pages/EditDelete';

const App = () => {
  const handleInsertData = async (data) => {
    try {
      const response = await Axios.post('http://localhost:5000/api/assets', data);
      console.log('Data inserted:', response.data);
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  }
   
  // ******************SubInsert**********************
  const handleSubInsertData = async (data) => {
    try {
      const response = await Axios.post('http://localhost:5000/api/sub-insert', data); // Ensure the correct endpoint
      console.log('Sub data inserted:', response.data);
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  }

  // ******************EditDelete**********************
  const handleEditData = async (data) => {
    try {
      const response = await Axios.put(`http://localhost:5000/api/assets/${data.asset_id}`, data);
      console.log('Data updated:', response.data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  const handleDeleteData = async (assetId) => {
    try {
      const response = await Axios.delete(`http://localhost:5000/api/assets/${assetId}`);
      console.log('Data deleted:', response.data);
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }; // Missing closing brace added here

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/insert" element={<Insert onInsertData={handleInsertData} />} />
      <Route path="/subinsert" element={<SubInsert onSubInsertData={handleSubInsertData} />} />
      <Route path="/editdelete" element={<EditDelete onEditData={handleEditData} onDeleteData={handleDeleteData} />} />
    </Routes>
  );
};

export default App;
