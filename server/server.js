const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// ใช้ express.json middleware เพื่อให้สามารถอ่าน body ของ request ได้
app.use(express.json());

// ตั้งค่าการเชื่อมต่อกับ PostgreSQL
const pool = new Pool({
  user: 'postgres', // เปลี่ยนเป็น username ของ PostgreSQL
  host: 'localhost',
  database: 'Inventory', // เปลี่ยนเป็นชื่อฐานข้อมูลของคุณ
  password: '1234', // เปลี่ยนเป็น password ของ PostgreSQL
  port: 5432, // port ของ PostgreSQL
});

// ฟังก์ชันสำหรับการเพิ่มข้อมูลทรัพย์สิน
const insertAsset = async (data) => {
  const {
    main_item_name,
    asset_id,
    quantity,
    unit,
    fiscal_year,
    budget_amount,
    fund_type,
    standard_price,
    responsible_person,
    asset_type,
    usage_location,
    delivery_location,
    usage_status,
    image_path,
    acquisition_date,
  } = data;

  return await pool.query(
    `INSERT INTO assets (main_item_name, asset_id, quantity, unit, fiscal_year, budget_amount,
    fund_type, standard_price, responsible_person, asset_type, usage_location,
    delivery_location, usage_status, image_path, acquisition_date) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *`,
    [
      main_item_name,
      asset_id,
      quantity,
      unit,
      fiscal_year,
      budget_amount,
      fund_type,
      standard_price,
      responsible_person,
      asset_type,
      usage_location,
      delivery_location,
      usage_status,
      image_path,
      acquisition_date,
    ]
  );
};

// สร้าง API สำหรับการเพิ่มข้อมูลทรัพย์สิน
app.post('/api/assets', async (req, res) => {
  const { main_item_name, asset_id } = req.body;

  // ตรวจสอบข้อมูลที่ได้รับ
  if (!main_item_name || !asset_id) {
    console.log('Validation error: Main item name and asset ID are required.'); // Log ข้อผิดพลาด
    return res.status(400).json({ message: 'Main item name and asset ID are required.' });
  }

  // แสดงข้อมูลที่ได้รับใน console
  console.log('Received data:', req.body);

  try {
    // การเพิ่มข้อมูลลงใน PostgreSQL
    const result = await insertAsset(req.body);

    // แสดงข้อมูลที่ถูกเพิ่มใน console
    console.log('Inserted asset:', result.rows[0]);

    // ส่งผลลัพธ์กลับไปยังผู้ใช้
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting data:', error.message); // Log ข้อผิดพลาดที่ชัดเจนขึ้น
    res.status(500).json({ message: 'Internal server error.', error: error.message });
  }
});

// เริ่มเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
