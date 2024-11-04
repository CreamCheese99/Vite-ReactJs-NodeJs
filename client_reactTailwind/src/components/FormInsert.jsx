import React, { useState } from 'react';
import renderInput from './RenderInput';
import renderTextArea from './RenderTextArea';

function FormInsert({ onSubmit }) {
    const [formData, setFormData] = useState({
        department: '',
        main_item_name: '',
        fiscal_year: '',
        quantity: '',
        unit: '',
        image_path: '',
        delivery_location: '',
        usage_status: ''
    });

    // ฟังก์ชันจัดการการเปลี่ยนแปลงในฟอร์ม
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // ฟังก์ชันสำหรับจัดการการส่งฟอร์ม
    const handleSubmit = (e) => {
        e.preventDefault();
        // ทำการส่งข้อมูลไปยัง API หรือฐานข้อมูล
        onSubmit(formData); // ใช้ฟังก์ชัน onSubmit ที่ได้รับจาก props
    };

    return (
        <div className="md:container md:mx-auto w-1/2 p-8 text-left">
            <h2 className="text-xl font-semibold text-pink-600 mb-4">เพิ่มข้อมูลพัสดุ</h2>
            <form onSubmit={handleSubmit}>
                {renderInput('ภาควิชา', 'department', 'text', formData, handleChange)}
                {renderInput('รายการพัสดุหลัก', 'main_item_name', 'text', formData, handleChange)}
                {renderInput('ประจำปีงบประมาณ', 'fiscal_year', 'number', formData, handleChange)}
                {renderInput('จำนวน', 'quantity', 'number', formData, handleChange)}
                {renderInput('หน่วยนับ', 'unit', 'text', formData, handleChange)}
                {renderInput('วงเงินงบประมาณ', 'budget_amount', 'number', formData, handleChange)}
                {renderInput('ประเภทเงิน', 'fund_type', 'text', formData, handleChange)}
                {renderInput('ราคากลาง', 'standard_price', 'number', formData, handleChange)}
                {renderInput('ประเภทพัสดุ', 'asset_type', 'text', formData, handleChange)}
                {renderInput('สถานที่ใช้งาน', 'usage_location', 'text', formData, handleChange)}
                {renderInput('สถานที่ส่งมอบ', 'delivery_location', 'text', formData, handleChange)}
                {renderInput('สถานะการใช้งาน', 'usage_status', 'text', formData, handleChange)}
                {renderInput('ใส่ภาพ', 'image_path', 'text', formData, handleChange)}

                <div className="container mx-auto flex justify-center items-center space-x-4">
                    <button type="submit" className="bg-yellow-400 text-white px-4 py-2 rounded">บันทึก</button>
                </div>
            </form>
        </div>
    );
}

export default FormInsert;
