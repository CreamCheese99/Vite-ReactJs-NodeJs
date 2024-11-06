import React from 'react';
import TableRow from './TableRow';

function DataTable2() {
  return (
    <div className="font-prompt md:container md:mx-auto w-1/2 p-8 text-left">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">ข้อมูลพัสดุหลุก</h2>
      <table className="border-collapse table-auto w-full border border-gray-300 rounded-lg text-center bg-white">
        <thead className="bg-gray-100 rounded-t-lg">
          <tr>
          <th className="p-3 text-sm font-semibold border-b border-gray-300">ลำดับ</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">รหัสพัสดุหลัก</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">จำนวน</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">ประจำปีงบประมาณ</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">วันที่ส่งมอบ</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">ผู้รับผิดชอบ</th>
            {/* <th className="p-3 text-sm font-semibold border-b border-gray-300">สภาพใช้งาน</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">ราคา/หน่วย</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">อายุการใช้งาน</th>
            <th className="p-3 text-sm font-semibold border-b border-gray-300">สาเหตุเลิกใช้งาน</th> */}
            <th className="p-3 text-sm font-semibold border-b border-gray-300" colSpan="3">Actions</th>
            
          </tr>
        </thead>
        <tbody>
          {/* Example row, replace with dynamic rows */}
          <TableRow index={1} subCode="SC001" mainItem="พัสดุหลัก 1" quantity={10} location="อาคาร A" condition="ดี" price={500} lifespan="5 ปี" reason="ไม่มีการใช้งาน" />
          {/* Add more TableRow components as needed or dynamically generate them */}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable2;
