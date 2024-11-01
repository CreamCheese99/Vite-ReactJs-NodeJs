import React from 'react'
import renderInput from './RenderInput'
import renderTextArea from './RenderTextArea'
function Form() {
  return (
    <div className=" md:container md:mx-auto w-1/2 p-8 text-left">
        <h2 className="text-xl font-semibold text-pink-600 mb-4">เพิ่มข้อมูลพัสดุ</h2>
        <form>
            {renderInput('รายการพัสดุหลัก')}
            <div className=" md:container md:mx-auto w-1/2 p-8 text-left">
                    <button type="search" className="bg-gray-400 text-white px-4 py-2 rounded">ค้นหา</button>
            </div>   
            {renderInput('รหัสทรัพย์สิน')}
            {renderInput('จำนวน','number')}
            {renderInput('หน่วยนับ')}
            {renderTextArea('ประจำปีงบประมาณ')}
            {renderInput('วงเงินงบประมาณ')}
            {renderInput('ประเภทเงิน')}
            {renderInput('ราคากลาง','number')}
            {renderInput('ประเภทพัสดุ')}
            {renderInput('สถานที่ใช้งาน')}
            {renderInput('วันที่ส่งมอบ')}
            {renderInput('ผู้รับผิดชอบ')}
           
        
{/*             
                <div className="mb-4">
                    <label className="block text-gray-700">ใส่ภาพ</label>
                    <input type="file" className="border border-gray-300 p-2 rounded" />
                </div> */}

                <div className="container mx-auto flex justify-center items-center space-x-4">
                    {/* <button type="submit" className="bg-gray-400 text-white px-4 py-2 rounded">ยกเลิก</button> */}
                    <button type="submit" className="bg-yellow-400 text-white px-4 py-2 rounded">บันทึก</button>
                </div>   

        </form>
  </div>

  
  )
}

export default Form