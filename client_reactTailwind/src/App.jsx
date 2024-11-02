import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Insert from './pages/Insert';
import SubInsert from './pages/SubInsert';
import EditDelete from './pages/EditDelete';

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
    <Route path="/" element={<Login />} />
    <Route path="/insert" element={<Insert />} />
    <Route path="/subinsert" element={<SubInsert />} />
    <Route path="/editdelete" element={<EditDelete />} />
    </Routes>
  );
};

export default App;
