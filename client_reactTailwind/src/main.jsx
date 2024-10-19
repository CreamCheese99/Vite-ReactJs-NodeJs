// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// // import App from './App.jsx'
// import './index.css'
// import {createBrowserRouter,RouterProvider,Route,Link,} from "react-router-dom"



// import Login from './pages/Login.jsx'
// import Insert from './pages/Insert.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />
//   },
//   {
//     path: "Insert",
//     element: <Insert />
//   }
// ])

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <RouterProvider router={router} />
//   </StrictMode>,
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Login from './pages/Login.jsx';
import Insert from './pages/Insert.jsx';

// สร้าง router สำหรับจัดการเส้นทาง
const router = createBrowserRouter([
  {
    path: "/",  // เส้นทางเริ่มต้น
    element: <Login />,  // ใช้ component Login ที่จะแสดงเมื่อเข้าหน้าแรก
  },
  {
    path: "/Insert",  // เส้นทางไปยังหน้าการเพิ่มข้อมูล (Insert)
    element: <Insert />,  // ใช้ component Insert ที่จะแสดง
  },
]);

// สร้าง root และ render app โดยใช้ RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  {/* ใช้ RouterProvider เพื่อใช้ router */}
  </StrictMode>
);

