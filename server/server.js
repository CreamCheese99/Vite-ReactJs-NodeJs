const express = require('express');
const { Pool } = require('pg');
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
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Inventory',
  password: '1234',
  port: 5432,
});

// ฟังก์ชันเพิ่มข้อมูลทรัพย์สินลงในฐานข้อมูล
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

//*************** */ API endpoint สำหรับเพิ่มข้อมูลทรัพย์สิน***************************
app.post('/api/assets', async (req, res) => {
  const { main_item_name, asset_id } = req.body;




console.log('Test = '+ req.body);
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





//************************ */ เส้นทาง API สำหรับดึงข้อมูล (Read)****************************
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


//********************** */ เส้นทาง API สำหรับแก้ไขข้อมูล (Update)***********************
app.put('/api/assets/:id', async (req, res) => {
  const { id } = req.params;
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
    delivery_location
  } = req.body;

  console.log('Updating asset with ID:', id);
  console.log('Update data:', req.body);

  try {
    const result = await pool.query(
      `UPDATE assets 
      SET main_item_name = $1, asset_id = $2, quantity = $3, unit = $4, fiscal_year = $5, 
      budget_amount = $6, fund_type = $7, standard_price = $8, responsible_person = $9, 
      asset_type = $10, usage_location = $11, delivery_location = $12 
      WHERE id = $13 RETURNING *`,
      [main_item_name, asset_id, quantity, unit, fiscal_year, budget_amount, fund_type, 
      standard_price, responsible_person, asset_type, usage_location, delivery_location, id]
    );

    console.log('Update result:', result.rows); // This should show the updated row.

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Asset not found' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error updating asset:', error); // Log the error if any occurs
    res.status(500).json({ error: 'Error updating data' });
  }
});


//*********************** */ เส้นทาง API สำหรับลบข้อมูล (Delete)**********************
app.delete('/api/assets/:id', async (req, res) => {
  const { id } = req.params;

  console.log('Deleting asset with ID:', id); // แสดง ID ที่จะลบ

  try {
    const result = await pool.query('DELETE FROM assets WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Asset not found' });
    }

    console.log('Deleted asset:', result.rows[0]); // แสดงผลข้อมูลที่ถูกลบ
    res.status(200).json({ message: 'Data deleted successfully', deletedAsset: result.rows[0] });
  } catch (error) {
    console.error('Error deleting asset:', error);
    res.status(500).json({ error: 'Error deleting data' });
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
