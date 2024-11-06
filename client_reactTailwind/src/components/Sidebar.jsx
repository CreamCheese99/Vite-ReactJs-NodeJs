import React from 'react';
import AddLogo from './icon/AddLogo';
import EditLogo from './icon/Editlogo';
import SidebarLink from './SidebarLink';
import SumLogo from './icon/SumLogo';

import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="font-prompt w-1/4 bg-gray-200 p-4 text-left">
      <div className="mb-4">
        <h1 className="text-pink-600 font-semibold text-lg">จัดการพัสดุ</h1>
        {/* <p className="text-gray-600 text-sm">คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี</p>
        <p className="text-gray-600 text-sm">สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p> */}
      </div>
      <ul className="space-y-4">
        {/* หัวเรื่องใหญ่ */}
        <SidebarLink name="พัสดุหลัก" className="font-bold text-gray-800" />

        {/* หัวเรื่องเล็กภายใต้หัวเรื่องใหญ่ */}
        <div className="ml-4 space-y-2">
          <AddLogo nameLogoAdd="เพิ่มข้อมูล" className="text-sm text-gray-600 hover:text-gray-800  active:text-gray-900" to="/Insert"/>
          <EditLogo nameLogoEdit="ลบ/แก้ไขข้อมูล" className="text-sm text-gray-600 hover:text-gray-800  active:text-gray-900" to="/EditDelete" />
          {/* <EditLogo nameLogoEdit="TestShowAll" className="text-sm text-gray-600 hover:text-gray-800  active:text-gray-900" to="/ShowAllAssets" /> */}
        </div>

        {/* พัสดุย่อย */}
        <SidebarLink name="พัสดุย่อย" className="font-bold text-gray-800" />
        <div className="ml-4 space-y-2">
          <AddLogo nameLogoAdd="เพิ่มข้อมูล" className="text-sm text-gray-600 hover:text-gray-800" to ="/Insert2"/>
          <EditLogo nameLogoEdit="ลบ/แก้ไขข้อมูล" className="text-sm text-gray-600 hover:text-gray-800" to="/EditDelete2" />
        </div>

        {/* รายการพัสดุ */}
        <SidebarLink name="รายการพัสดุ" className="font-bold text-gray-800" />
        <div className="ml-4 space-y-2">
          {/* <SumLogo nameLogoSum="สรุปข้อมูลพัสดุ" className="text-sm text-gray-600 hover:text-gray-800" to="/AssetSummary" />
          <EditLogo nameLogoEdit="TestShowAll" className="text-sm text-gray-600 hover:text-gray-800  active:text-gray-900" to="/ShowAllAssets" />  */}
          <SumLogo nameLogoSum="สรุปข้อมูลพัสดุ" className="text-sm text-gray-600 hover:text-gray-800  active:text-gray-900" to="/ShowAllAssets" />
        </div>

        <div className=" space-y-6 text-red-500 text-left ">
        <SidebarLink name="ออกจากระบบ" className="font-lg " to="/"/>
        </div >

        <div className=" space-y-6 text-green-500 text-left ">
        <SidebarLink name="กลับสู่หน้าหลัก" className="font-lg " to=""/>
        </div >

      </ul>
    </div>
  );
}

export default Sidebar;
