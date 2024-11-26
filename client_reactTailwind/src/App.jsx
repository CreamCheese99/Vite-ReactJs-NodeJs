import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import { Routes, Route, createBrowserRouter } from 'react-router-dom';
import Axios from 'axios';

import Login from './pages/Login';
import Insert from './pages/Insert';
import Insert2 from './pages/Insert2';
import EditDelete from './pages/EditDelete';
import EditDelete2 from './pages/EditDelete2';
import AssetSummary from './pages/AssetSummary';

// import SubInsert from './pages/SubInsert';

const App = () => {
  const handleSubmit = async (data) => {
    try {
      const response = await Axios.post('http://localhost:5001/api/assets', data);
      console.log('Data inserted:', response.data);
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  }
   
//   // ******************SubInsert**********************
//   const handleSubInsertData = async (data) => {
//     try {
//       const response = await Axios.post('http://localhost:5000/api/sub-insert', data); // Ensure the correct endpoint
//       console.log('Sub data inserted:', response.data);
//     } catch (error) {
//       console.error('Error inserting data:', error);
//     }
//   }

//   // ******************EditDelete**********************
//   const handleEditData = async (data) => {
//     try {
//       const response = await Axios.put(`http://localhost:5000/api/assets/${data.asset_id}`, data);
//       console.log('Data updated:', response.data);
//     } catch (error) {
//       console.error('Error updating data:', error);
//     }
//   }

//   const handleDeleteData = async (assetId) => {
//     try {
//       const response = await Axios.delete(`http://localhost:5000/api/assets/${assetId}`);
//       console.log('Data deleted:', response.data);
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//   }; // Missing closing brace added here

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/insert" element={<Insert  />} />
      <Route path="/insert2" element={<Insert2  />} />
      <Route path="/editdelete" element={<EditDelete />} />
      <Route path="/editdelete2" element={<EditDelete2 />} />
      <Route path="/assetsummary" element={<AssetSummary/>} />
      
    </Routes>
  );
};

export default App;
