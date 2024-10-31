// import { useState,useEffect } from 'react'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Form from './components/Form'


function App() {
  // const [count, setCount] = useState(0);

  const fetchAPI = async () =>{
      const response = await axios.get("http://localhost:8080/adduser");
      console.log(response.data.username);
      console.log(response.data.password);
      console.log(response.data.timestamp);
  };

 useEffect(()  => {
   fetchAPI();
 },[])

 
  return (
    <div className="bg-gray-50 text-gray-600">
    <Header />
    <div className="flex">
      <Sidebar />
      <Form />
    </div>
  </div>
  )
}

export default App


// import { useEffect, useState } from 'react'; // เพิ่ม useState เพื่อเก็บข้อมูลที่ดึงมา
// import './App.css';
// import axios from 'axios';

// import Header from './components/็Header.jsx';
// import Sidebar from './components/Sidebar.jsx';
// import Form from './components/Form.jsx';

// function App() {
//   const [data, setData] = useState([]); // สร้าง state เพื่อเก็บข้อมูลจาก backend

//   const fetchAPI = async () => {
//     try {
//       const response = await axios.get('http://localhost:8002/api');
//       setData(response.data); // เก็บข้อมูลที่ดึงมาใน state
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAPI();
//   }, []);

//   return (
//     <div className="bg-gray-50 text-gray-600">
//       <Header />
//       <div className="flex">
//         <Sidebar />
//         <Form />
//         <div>
//           {/* แสดงข้อมูลที่ดึงมาจาก backend */}
//           <h2>User Data:</h2>
//           <ul>
//             {data.map((user, index) => (
//               <li key={index}>
//                 Username: {user.username}, Timestamp: {user.timestamp}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
