// original
// const express = require('express');
// const { Pool } = require('pg');
// const cors = require('cors');
// // const LdapAuth = require('./LdapAuth');
// // const bodyParser = require('body-parser');

// const app = express();
// const port = 5000;

// // Whitelist ของต้นทางที่ได้รับอนุญาต
// const whitelist = [
//   'http://localhost:5173', // ต้นทางของ frontend
//   'http://localhost:5000'  // ต้นทางของ backend
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true, // อนุญาต cookies และข้อมูล credentials ระหว่าง frontend และ backend
// };

// app.use(cors(corsOptions));
// app.use(express.json()); // Middleware สำหรับ parse JSON

// // การตั้งค่าเชื่อมต่อ PostgreSQL
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'Inventory',
//   password: '1234',
//   port: 5432,
// });

// // ฟังก์ชันเพิ่มข้อมูลทรัพย์สินลงในฐานข้อมูล
// const insertAsset = async (data) => {
//   if (!data.main_item_name || !data.asset_id) {
//     throw new Error("Main item name and asset ID are required.");
//   }


//   try {
//     const result = await pool.query(
//       `INSERT INTO assets (main_item_name, asset_id, quantity, unit, fiscal_year, budget_amount,
//       fund_type, standard_price, responsible_person, asset_type, usage_location,
//       delivery_location) 
//       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 ) RETURNING *`,
//       [
//         data.main_item_name,
//         data.asset_id,
//         data.quantity || null,
//         data.unit || null,
//         data.fiscal_year || null,
//         data.budget_amount || null,
//         data.fund_type || null,
//         data.standard_price || null,
//         data.responsible_person || null,
//         data.asset_type || null,
//         data.usage_location || null,
//         Array.isArray(data.delivery_location) ? data.delivery_location : [data.delivery_location]
        
//       ]
//     );
//     return result.rows[0];
//   } catch (error) {
//     console.error("Database insertion error:", error.message);
//     throw error; // ส่งต่อ error เพื่อให้จัดการระดับสูงได้
//   }
// };

// // API endpoint สำหรับเพิ่มข้อมูลทรัพย์สิน
// app.post('/api/assets', async (req, res) => {
//   const { main_item_name, asset_id } = req.body;




// console.log('Test = '+ req.body);
//   // ตรวจสอบข้อมูลที่ได้รับ
//   if (!main_item_name || !asset_id) {
//     console.log('Validation error: Main item name and asset ID are required.');
//     return res.status(400).json({ message: 'Main item name and asset ID are required.' });
//   }

//   // แสดงข้อมูลที่ได้รับใน console
//   console.log('Received data:', req.body);
 
//   try {
//     const insertedAsset = await insertAsset(req.body);
//     res.status(201).json(insertedAsset); // ส่งกลับข้อมูลทรัพย์สินที่ถูกเพิ่ม
//   } catch (error) {
//     console.error('Error inserting data:', error.message);
//     res.status(500).json({ message: 'Internal server error.', error: error.message });
//   }
// });

// // เชื่อมต่อกับ PostgreSQL
// pool.connect()
//   .then(() => console.log("Connected to PostgreSQL"))
//   .catch((error) => console.error("PostgreSQL connection error:", error.message));

// // เริ่มต้นเซิร์ฟเวอร์
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });



// backup
// const express = require('express');
// const { Pool } = require('pg');
// const cors = require('cors');

// const app = express();
// const port = 5000;

// // Whitelist ของต้นทางที่ได้รับอนุญาต
// const whitelist = [
//   'http://localhost:5173', // ต้นทางของ frontend
//   'http://localhost:5000'  // ต้นทางของ backend
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true, // อนุญาต cookies และข้อมูล credentials ระหว่าง frontend และ backend
// };

// app.use(cors(corsOptions));
// app.use(express.json()); // Middleware สำหรับ parse JSON

// // การตั้งค่าเชื่อมต่อ PostgreSQL
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'Inventory',
//   password: '1234',
//   port: 5432,
// });

// // ฟังก์ชันเพิ่มข้อมูลทรัพย์สินลงในฐานข้อมูล
// const insertAsset = async (data) => {
//   if (!data.main_item_name || !data.asset_id) {
//     throw new Error("Main item name and asset ID are required.");
//   }


//   try {
//     const result = await pool.query(
//       `INSERT INTO assets (main_item_name, asset_id, quantity, unit, fiscal_year, budget_amount,
//       fund_type, standard_price, responsible_person, asset_type, usage_location,
//       delivery_location) 
//       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 ) RETURNING *`,
//       [
//         data.main_item_name,
//         data.asset_id,
//         data.quantity || null,
//         data.unit || null,
//         data.fiscal_year || null,
//         data.budget_amount || null,
//         data.fund_type || null,
//         data.standard_price || null,
//         data.responsible_person || null,
//         data.asset_type || null,
//         data.usage_location || null,
//         Array.isArray(data.delivery_location) ? data.delivery_location : [data.delivery_location]
        
//       ]
//     );
//     return result.rows[0];
//   } catch (error) {
//     console.error("Database insertion error:", error.message);
//     throw error; // ส่งต่อ error เพื่อให้จัดการระดับสูงได้
//   }
// };

// // API endpoint สำหรับเพิ่มข้อมูลทรัพย์สิน
// app.post('/api/assets', async (req, res) => {
//   const { main_item_name, asset_id } = req.body;




// console.log('Test = '+ req.body);
//   // ตรวจสอบข้อมูลที่ได้รับ
//   if (!main_item_name || !asset_id) {
//     console.log('Validation error: Main item name and asset ID are required.');
//     return res.status(400).json({ message: 'Main item name and asset ID are required.' });
//   }

//   // แสดงข้อมูลที่ได้รับใน console
//   console.log('Received data:', req.body);
 
//   try {
//     const insertedAsset = await insertAsset(req.body);
//     res.status(201).json(insertedAsset); // ส่งกลับข้อมูลทรัพย์สินที่ถูกเพิ่ม
//   } catch (error) {
//     console.error('Error inserting data:', error.message);
//     res.status(500).json({ message: 'Internal server error.', error: error.message });
//   }
// });

// // เชื่อมต่อกับ PostgreSQL
// pool.connect()
//   .then(() => console.log("Connected to PostgreSQL"))
//   .catch((error) => console.error("PostgreSQL connection error:", error.message));

// // เริ่มต้นเซิร์ฟเวอร์
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// backup2
// const express = require('express');
// const { Pool } = require('pg');
// const cors = require('cors');
// const LdapAuth = require('./LdapAuth');

// const app = express();
// const port = 5001;

// // Whitelist ของต้นทางที่ได้รับอนุญาต
// const whitelist = [
//   'http://localhost:5173', // ต้นทางของ frontend
//   'http://localhost:5000'  // ต้นทางของ backend
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
//   credentials: true, // อนุญาต cookies และข้อมูล credentials ระหว่าง frontend และ backend
// };

// app.use(cors(corsOptions));
// app.use(express.json()); // Middleware สำหรับ parse JSON

// // การตั้งค่าเชื่อมต่อ PostgreSQL
// const pool = new Pool({
//   user: 'myuser',
//   host: 'localhost',
//   database: 'mydatabase',
//   password: 'mypassword',
//   port: 5433,
// });

// // ฟังก์ชันเพิ่มข้อมูลทรัพย์สินลงในฐานข้อมูล
// const insertAsset = async (data) => {
//   if (!data.main_item_name || !data.asset_id) {
//     throw new Error("Main item name and asset ID are required.");
//   }

//   try {
//     const result = await pool.query(
//       `INSERT INTO assets (main_item_name, asset_id, quantity, unit, fiscal_year, budget_amount,
//       fund_type, standard_price, responsible_person, asset_type, usage_location,
//       delivery_location) 
//       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 ) RETURNING *`,
//       [
//         data.main_item_name,
//         data.asset_id,
//         data.quantity || null,
//         data.unit || null,
//         data.fiscal_year || null,
//         data.budget_amount || null,
//         data.fund_type || null,
//         data.standard_price || null,
//         data.responsible_person || null,
//         data.asset_type || null,
//         data.usage_location || null,
//         Array.isArray(data.delivery_location) ? data.delivery_location : [data.delivery_location]
//       ]
//     );
//     return result.rows[0];
//   } catch (error) {
//     console.error("Database insertion error:", error.message);
//     throw error; // ส่งต่อ error เพื่อให้จัดการระดับสูงได้
//   }
// };

// // API endpoint สำหรับการเข้าสู่ระบบ
// const ldapAuth = new LdapAuth('10.252.92.100', 389, 'dc=kmitl,dc=ac,dc=th');

// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const isAuthenticated = await ldapAuth.authenticate(username, password);
    
//     if (isAuthenticated) {
//       const userInfo = await ldapAuth.getUserInfo(username);
//       res.json({
//         success: true,
//         message: 'Authentication successful',
//         user: userInfo
//       });
//     } else {
//       res.status(401).json({
//         success: false,
//         message: 'Invalid credentials'
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// });

// // API endpoint สำหรับเพิ่มข้อมูลทรัพย์สิน
// app.post('/api/assets', async (req, res) => {
//   const { main_item_name, asset_id } = req.body;

//   console.log('Test = ' + req.body);
//   // ตรวจสอบข้อมูลที่ได้รับ
//   if (!main_item_name || !asset_id) {
//     console.log('Validation error: Main item name and asset ID are required.');
//     return res.status(400).json({ message: 'Main item name and asset ID are required.' });
//   }

//   // แสดงข้อมูลที่ได้รับใน console
//   console.log('Received data:', req.body);

//   try {
//     const insertedAsset = await insertAsset(req.body);
//     res.status(201).json(insertedAsset); // ส่งกลับข้อมูลทรัพย์สินที่ถูกเพิ่ม
//   } catch (error) {
//     console.error('Error inserting data:', error.message);
//     res.status(500).json({ message: 'Internal server error.', error: error.message });
//   }
// });

// // เชื่อมต่อกับ PostgreSQL
// pool.connect()
//   .then(() => console.log("Connected to PostgreSQL"))
//   .catch((error) => console.error("PostgreSQL connection error:", error.message));

// // เริ่มต้นเซิร์ฟเวอร์
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// // Cleanup when server shuts down
// process.on('SIGTERM', () => {
//   ldapAuth.close();
//   pool.end(); // ปิดการเชื่อมต่อ PostgreSQL
//   process.exit(0);
// });




//backup 3
const express = require('express');
const cors = require('cors');
const LdapAuth = require('./LdapAuth');  // นำเข้าไฟล์ LdapAuth.js

const app = express();
const port = 5001;

// กำหนดการตั้งค่า CORS
const whitelist = [
    'http://localhost:5173', // URL ของ frontend ที่ใช้งาน
    'http://localhost:5001'   // URL ของ backend ถ้ามี
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};


app.use(cors(corsOptions));
app.use(express.json());

// สร้างอินสแตนซ์ของ LdapAuth
const ldapAuth = new LdapAuth('10.252.92.100', 389, 'dc=kmitl,dc=ac,dc=th'); // เปลี่ยนค่าตามการตั้งค่าของคุณ

// Endpoint สำหรับตรวจสอบการเข้าสู่ระบบ
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const isAuthenticated = await ldapAuth.authenticate(username, password);
    
    if (isAuthenticated) {
      const userInfo = await ldapAuth.getUserInfo(username);
      res.json({
        success: true,
        message: 'Authentication successful',
        user: userInfo
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Cleanup when server shuts down
process.on('SIGTERM', () => {
  ldapAuth.close();
  process.exit(0);
});