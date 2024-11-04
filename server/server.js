const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

// // CORS options for allowing requests from frontend
// const corsOptions = {
//   origin: 'http://localhost:5173',
//   credentials: true,
// };

const whitelist = [
  'http://localhost:5000'
]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions));
app.use(express.json()); // Middleware to parse JSON bodies

// Configure PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Inventory',
  password: '1234',
  port: 5432,
});

// Function to insert asset into the database
const insertAsset = async (data) => {
  if (!data.main_item_name || !data.asset_id) {
    throw new Error("Main item name and asset ID are required.");
  }

  try {
    const result = await pool.query(
      `INSERT INTO assets (main_item_name, asset_id, quantity, unit, fiscal_year, budget_amount,
      fund_type, standard_price, responsible_person, asset_type, usage_location,
      delivery_location, usage_status, image_path, acquisition_date) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *`,
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
        data.delivery_location || null,
        data.usage_status || null,
        data.image_path || null,
        data.acquisition_date || null,
      ]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Database insertion error:", error.message);
    throw error; // Rethrow error for higher level handling
  }
};

// API endpoint for inserting asset data
app.post('/api/assets', async (req, res) => {
  const { main_item_name, asset_id } = req.body;

  // ตรวจสอบข้อมูลที่ได้รับ
  if (!main_item_name || !asset_id) {
    console.log('Validation error: Main item name and asset ID are required.');
    return res.status(400).json({ message: 'Main item name and asset ID are required.' });
  }

  // แสดงข้อมูลที่ได้รับใน console
  console.log('Received data:', req.body); // แสดงข้อมูลที่ได้รับ
 
  try {
    const insertedAsset = await insertAsset(req.body);
    res.status(201).json(insertedAsset); // ส่งกลับข้อมูลทรัพย์สินที่ถูกเพิ่ม
  } catch (error) {
    console.error('Error inserting data:', error.message);
    res.status(500).json({ message: 'Internal server error.', error: error.message });
  }
});


// Connect to PostgreSQL database
pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((error) => console.error("PostgreSQL connection error:", error.message));

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
 