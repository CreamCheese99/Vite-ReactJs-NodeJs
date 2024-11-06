const express = require('express');
const pool= require('./database.js');
const cors = require('cors');

const app = express();
const port = 5000;

// Whitelist ของต้นทางที่ได้รับอนุญาต
const whitelist = [
  'http://localhost:5173', // ต้นทางของ frontend
  'http://localhost:5000'  // ต้นทางของ backend
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // อนุญาต cookies และข้อมูล credentials ระหว่าง frontend และ backend
};

app.use(cors(corsOptions));
app.use(express.json()); // Middleware สำหรับ parse JSON

// การตั้งค่าเชื่อมต่อ PostgreSQL
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'Inventory',
//   password: '1234',
//   port: 5432,
// });




// ฟังก์ชันเพิ่มข้อมูลพัสดุหลัก
const insertAsset = async (data) => {
  if (!data.main_item_name || !data.asset_id) {
    throw new Error("Main item name and asset ID are required.");
  }
  try {
    const result = await pool.query(
      `INSERT INTO assets (main_item_name, asset_id, quantity, unit, fiscal_year, budget_amount,
      fund_type, standard_price, responsible_person, asset_type, usage_location,
      delivery_location) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 ) RETURNING *`,
      [
        data.main_item_name,
        data.asset_id,
        data.quantity || null,
        data.unit || null,
        data.fiscal_year || null,
        data.budget_amount || null,
        data.fund_type || null,
        data.standard_price || null,
        data.responsible_person || null,
        data.asset_type || null,
        data.usage_location || null,
        Array.isArray(data.delivery_location) ? data.delivery_location : [data.delivery_location]
        
      ]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Database insertion error:", error.message);
    throw error; // ส่งต่อ error เพื่อให้จัดการระดับสูงได้
  }
};
//*************** */ API endpoint สำหรับเพิ่มข้อมูลพัสดุหลัก***************************
app.post('/api/assets', async (req, res) => {
  const { main_item_name, asset_id } = req.body;

console.log('MainAsset = '+ req.body);
  // ตรวจสอบข้อมูลที่ได้รับ
  if (!main_item_name || !asset_id) {
    console.log('Validation error: Main item name and asset ID are required.');
    return res.status(400).json({ message: 'Main item name and asset ID are required.' });
  }

  // แสดงข้อมูลที่ได้รับใน console
  console.log('Received data:', req.body);
 
  try {
    const insertedAsset = await insertAsset(req.body);
    res.status(201).json(insertedAsset); // ส่งกลับข้อมูลทรัพย์สินที่ถูกเพิ่ม
  } catch (error) {
    console.error('Error inserting data:', error.message);
    res.status(500).json({ message: 'Internal server error.', error: error.message });
  }
});




// ฟังก์ชันเพิ่มข้อมูลพัสดุย่อย
const insertAsset2 = async (data) => {
  if (!data.main_asset_id || !data.sub_asset_name) {
    throw new Error("Main asset ID and sub asset name are required.");
  }

  try {
    const result = await pool.query(
      `INSERT INTO subassets (main_asset_id, sub_asset_name, quantity, unit, unit_price, sub_asset_type, sub_asset_description) 
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        data.main_asset_id,
        data.sub_asset_name,
        data.quantity || null,
        data.unit || null,
        data.unit_price || null,
        data.sub_asset_type || null,
        data.sub_asset_description || null,
      ]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Database insertion error:", error.message);
    throw error;
  }
};

// API endpoint สำหรับเพิ่มข้อมูลพัสดุย่อย
app.post('/api/subassets', async (req, res) => {
  const { main_asset_id, sub_asset_name, quantity, unit, unit_price } = req.body;

  console.log('SubAsset = ', req.body);
  
  // ตรวจสอบข้อมูลที่ได้รับ
  if (!main_asset_id || !sub_asset_name) {
    console.log('Validation error: Main asset ID and sub asset name are required.');
    return res.status(400).json({ message: 'Main asset ID and sub asset name are required.' });
  }

  // แสดงข้อมูลที่ได้รับใน console
  console.log('Received data:', req.body);

  try {
    const insertedAsset2 = await insertAsset2(req.body);
    res.status(201).json(insertedAsset2); // ส่งกลับข้อมูลพัสดุย่อยที่ถูกเพิ่ม
  } catch (error) {
    console.error('Error inserting data:', error.message);
    res.status(500).json({ message: 'Internal server error.', error: error.message });
  }
});





// ************************ */ เส้นทาง API สำหรับดึงข้อมูล (Read)****************************
app.get('/api/assets', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM assets');
    console.log('Fetched assets:', result.rows); // แสดงผลข้อมูลที่ดึงมา
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error retrieving assets:', error);
    res.status(500).json({ error: 'Error retrieving data' });
  }
});

app.get('/api/assets/:id', async (req, res) => {
  const { id } = req.params; // ดึง id จาก params
  try {
    const result = await pool.query('SELECT * FROM assets WHERE id = $1', [id]); // ใช้ $1 เพื่อป้องกัน SQL Injection
    console.log('Fetched assets:', result.rows); // แสดงผลข้อมูลที่ดึงมา
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Asset not found' }); // หากไม่พบสินทรัพย์
    }
    res.status(200).json(result.rows[0]); // ส่งข้อมูลของสินทรัพย์ที่พบกลับ
  } catch (error) {
    console.error('Error retrieving assets:', error);
    res.status(500).json({ error: 'Error retrieving data' });
  }
});




//********************** */ เส้นทาง API สำหรับแก้ไขข้อมูล (Update)***********************
app.put('/api/assets/:id', async (req, res) => {
  const { id } = req.params;
  console.log('Extracted ID:', id); // Log extracted ID
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
    delivery_date
  } = req.body;

  console.log('Updating asset with ID:', id);
  console.log('Update data:', req.body);

  try {
    const result = await pool.query(
      `UPDATE assets 
      SET 
        main_item_name = $1, 
        asset_id = $2, 
        quantity = $3, 
        unit = $4, 
        fiscal_year = $5, 
        budget_amount = $6, 
        fund_type = $7, 
        standard_price = $8, 
        responsible_person = $9, 
        asset_type = $10, 
        usage_location = $11, 
        delivery_location = $12,
        delivery_date = $13  
      WHERE id = $14 RETURNING *`,
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
        delivery_date,
        id  // Make sure ID is the last parameter
      ]
    );

    console.log('Update result:', result.rows);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Asset not found' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error updating asset:', error);
    console.error('Request body:', req.body);
    console.error('Request params:', req.params);
    res.status(500).json({ error: 'Error updating data' });
  }
});



//*********************** */ เส้นทาง API สำหรับลบข้อมูล (Delete)**********************
app.delete('/api/assets/:id', async (req, res) => { 
  const { id } = req.params; // ดึง id จาก URL พารามิเตอร์

  console.log('Deleting asset with ID:', id); // แสดง ID ของสินทรัพย์ที่จะลบ

  try {
    // ใช้ DELETE พร้อมกับ RETURNING * เพื่อนำข้อมูลสินทรัพย์ที่ถูกลบกลับมาแสดง
    const result = await pool.query('DELETE FROM assets WHERE id = $1 RETURNING *', [id]);

    // ตรวจสอบว่าพบสินทรัพย์ที่ต้องการลบหรือไม่
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Asset not found' }); // ส่งกลับสถานะ 404 หากไม่พบ
    }

    console.log('Deleted asset:', result.rows[0]); // แสดงข้อมูลสินทรัพย์ที่ถูกลบ
    res.status(200).json({ message: 'Data deleted successfully', deletedAsset: result.rows[0] }); // ส่งข้อความและข้อมูลสินทรัพย์ที่ถูกลบกลับ
  } catch (error) {
    console.error('Error deleting asset:', error); // แสดงข้อผิดพลาดหากการลบล้มเหลว
    res.status(500).json({ error: 'Error deleting data' }); // ส่งข้อความข้อผิดพลาดไปยังผู้ใช้
  }
});

// เชื่อมต่อกับ PostgreSQL
pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((error) => console.error("PostgreSQL connection error:", error.message));

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
