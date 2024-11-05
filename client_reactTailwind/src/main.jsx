
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
import Insert2 from './pages/Insert2.jsx';
import EditDelete from './pages/EditDelete.jsx';
import EditDelete2 from './pages/EditDelete2.jsx';
import AssetSummary from './pages/AssetSummary.jsx';



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
  {
    path: "/Insert2",  // เส้นทางไปยังหน้าการเพิ่มข้อมูล (Insert)
    element: <Insert2 />,  // ใช้ component Insert ที่จะแสดง
  },
  {
    path: "/EditDelete",  // เส้นทางไปยังหน้าการเพิ่มข้อมูล (Insert)
    element: <EditDelete />,  // ใช้ component Insert ที่จะแสดง
  },
  {
    path: "/EditDelete2",  // เส้นทางไปยังหน้าการเพิ่มข้อมูล (Insert)
    element: <EditDelete2 />,  // ใช้ component Insert ที่จะแสดง
  },
  {
    path: "/AssetSummary",  // เส้นทางไปยังหน้าการเพิ่มข้อมูล (Insert)
    element: <AssetSummary />,  // ใช้ component Insert ที่จะแสดง
  },

]);

// สร้าง root และ render app โดยใช้ RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  {/* ใช้ RouterProvider เพื่อใช้ router */}
  </StrictMode>
);

