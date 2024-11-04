import React from 'react';
import SidebarLinkLogo from './SidebarLinkLogo';
import SidebarLink from './SidebarLink';

import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <div className="w-1/4 bg-gray-200 p-4 font-prompt text-left">
      <div className="mb-8">
        <h1 className="text-pink-600 font-semibold text-xl">ระบบจัดการครุภัณฑ์</h1>
        <p className="text-gray-600">คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี</p>
        <p className="text-gray-600">สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
      </div>
      <ul className="space-y-4">
        {/* หัวเรื่องใหญ่ */}
        <SidebarLink name="พัสดุหลัก" className="font-bold text-gray-800" />

        {/* หัวเรื่องเล็กภายใต้หัวเรื่องใหญ่ */}
        <div className="ml-4 space-y-2">
          <SidebarLinkLogo nameLogo="เพิ่มข้อมูล" className="text-sm text-gray-600 hover:text-gray-800" to="/Insert"/>
          <SidebarLinkLogo nameLogo="ลบ/แก้ไขข้อมูล" className="text-sm text-gray-600 hover:text-gray-800" to="/EditDelete" />
        </div>

        {/* พัสดุย่อย */}
        <SidebarLink name="พัสดุย่อย" className="font-bold text-gray-800" />
        <div className="ml-4 space-y-2">
          <SidebarLinkLogo nameLogo="เพิ่มข้อมูล" className="text-sm text-gray-600 hover:text-gray-800" to ="/Insert2"/>
          <SidebarLinkLogo nameLogo="ลบ/แก้ไขข้อมูล" className="text-sm text-gray-600 hover:text-gray-800" to="/EditDelete2" />
        </div>

        {/* รายการพัสดุ */}
        <SidebarLink name="รายการพัสดุ" className="font-bold text-gray-800" />
        <div className="ml-4 space-y-2">
          <SidebarLinkLogo nameLogo="สรุปข้อมูลพัสดุ" className="text-sm text-gray-600 hover:text-gray-800" to="/AssetSummary" />
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
