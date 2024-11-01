import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';   // นำเข้า Login Page
import Insert from './pages/Insert'; // นำเข้า Insert Page

import Axios from 'axios';

const App = () => {
  const handleInsertData = async (data) => {
    try {
      const response = await Axios.post('http://localhost:8080/api/assets', data);
      console.log('Data inserted:', response.data);
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} /> {/* เส้นทางหลักไปที่หน้า Login */}

        <Route path="/insert">
          <Insert onInsertData={handleInsertData} /> {/* ส่งฟังก์ชันให้ Insert Page */}
        </Route>

      </Switch>
    </Router>
  );
};

export default App;
