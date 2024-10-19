import React from 'react'
import SidebarLink from './SidebarLink'

function Sidebar() {
  return (
    <div className="w-1/4 bg-gray-200 p-4 text-left">
    <div className="mb-8">
      <h1 className="text-pink-600 font-semibold text-xl">ระบบจัดการครุภัณฑ์</h1>
      <p className="text-gray-600">คณะครุศาสตร์อุตสาหกรรมและเทคโนโลยี</p>
      <p className="text-gray-600">สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง</p>
    </div>
    <ul className="space-y-4 ">
      {/* <SidebarLink name="เพิ่มข้อมูล" />
      <SidebarLink name="ลบข้อมูล" />
      <SidebarLink name="แก้ไขข้อมูล" />
      <SidebarLink name="ดูข้อมูลพัสดุ" /> */}
        <SidebarLink name="ครุภัณฑ์หลัก/ย่อย" />
        <SidebarLink name="แก้ไข/ลบข้อมูล" />
    </ul>
  </div>
  )
}

export default Sidebar