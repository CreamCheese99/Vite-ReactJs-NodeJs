// const express = require('express');
// const cors = require('cors');
// const pool = require('./database'); // เชื่อมต่อกับฐานข้อมูล

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Route สำหรับดึงข้อมูลจากฐานข้อมูล
// app.get('/api', async (req, res) => {
//   try {
//     const query = 'SELECT * FROM accounts'; // แทนที่ด้วย table ที่คุณต้องการ
//     const data = await pool.query(query);
//     res.json(data.rows); // ส่งข้อมูลกลับไปเป็น JSON
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // Route สำหรับเพิ่มข้อมูลลงในฐานข้อมูล
// app.post('/api/adduser', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const query = 'INSERT INTO accounts (username, password) VALUES ($1, $2) RETURNING *';
//     const newUser = await pool.query(query, [username, password]);
//     res.json(newUser.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server error');
//   }
// });

// // เริ่มเซิร์ฟเวอร์ที่พอร์ต 8002
// app.listen(8002, () => {
//   console.log('Server is running on port 8002');
// });







// const express = require("express");
// const app = express();
// const cors = require("cors");
// const corsOptions = {
//     origin: ["http://localhost:5713"],
// };
// app.use(cors(corsOptions));

// // สร้าง API ที่ส่งข้อมูล username และ timestamp
// app.get("/api", (req, res) => {
//     const data = {
//         username: "yourUsername", // เปลี่ยนตามความต้องการ
//         timestamp: new Date().toISOString() // เวลาปัจจุบันในรูปแบบ ISO
//     };

//     res.json(data); // ส่งข้อมูลในรูปแบบ JSON
// });

// app.listen(8080, () => {
//     console.log("server started on port 8080");
// });




//**********************************************POST request สำหรับเพิ่มผู้ใช้ใหม่*********************************************************************

// const express = require("express");
// const cors = require("cors");
// const pool = require("./database"); // ตรวจสอบว่าคุณมีการเชื่อมต่อ pool จาก pg หรือไม่

// const app = express();

// app.use(express.json());
// app.use(cors());

// // POST request สำหรับเพิ่มผู้ใช้ใหม่
// app.post("/adduser", (req, res) => {
//   const { username, password } = req.body;

//   console.log("Username: " + username);
//   console.log("Password: " + password);

//   // ใช้ parameterized queries เพื่อป้องกัน SQL Injection
//   const insertSTMT = `INSERT INTO accounts (username, password) VALUES ($1, $2)`;

//   // ส่งค่า username และ password ไปยัง parameterized query
//   pool.query(insertSTMT, [username, password])
//     .then((response) => {
//       console.log("Data Saved");
//       console.log(response);
//       res.status(201).send({ message: "User added successfully" });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send({ error: "Error saving data" });
//     });
// });

// // เริ่มเซิร์ฟเวอร์ที่พอร์ต 4000
// app.listen(4000, () => console.log("Server on localhost:4000"));




//*************************************GET request สำหรับเพิ่มผู้ใช้ใหม่ โดยรับ username และ password จาก query parameters**************************************************************** */
// const express = require("express");
// const cors = require("cors");
// const pool = require("./database"); // ตรวจสอบว่าคุณมีการเชื่อมต่อ pool จาก pg หรือไม่

// const app = express();

// app.use(express.json());
// app.use(cors());

//GET request สำหรับเพิ่มผู้ใช้ใหม่ โดยรับ username และ password จาก query parameters
// app.get("/adduser", (req, res) => {
//   const { username, password } = req.query;

//   if (!username || !password) {
//     return res.status(400).send({ error: "Username and password are required" });
//   }

//   console.log("Username: " + username);
//   console.log("Password: " + password);

//   // ใช้ parameterized queries เพื่อป้องกัน SQL Injection
//   const insertSTMT = `INSERT INTO accounts (username, password) VALUES ($1, $2)`;

//   // ส่งค่า username และ password ไปยัง parameterized query
//   pool.query(insertSTMT, [username, password])
//     .then((response) => {
//       console.log("Data Saved");
//       console.log(response);
//       res.status(201).send({ message: "User added successfully" });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send({ error: "Error saving data" });
//     });
// });

// // เริ่มเซิร์ฟเวอร์ที่พอร์ต 4000
// app.listen(4000, () => console.log("Server on localhost:4000"));



//********************************************************************************************************** */
const express = require('express');
const { Pool } = require('pg'); // นำเข้าไลบรารี pg สำหรับเชื่อมต่อ PostgreSQL
const app = express();
const port = 4000;

// ใช้ express.json middleware เพื่อให้สามารถอ่าน body ของ request ได้
app.use(express.json());

// ตั้งค่าการเชื่อมต่อ PostgreSQL
const pool = new Pool({
  user: 'postgres',          // ชื่อผู้ใช้ PostgreSQL
  host: 'localhost',         // โฮสต์ของฐานข้อมูล
  database: 'postgres',      // ชื่อฐานข้อมูล
  password: '1234',          // รหัสผ่านของผู้ใช้
  port: 5432,                // พอร์ต PostgreSQL (ปกติคือ 5432)
});

// Endpoint สำหรับหน้าแรก
app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

// Endpoint สำหรับเพิ่มข้อมูล user ไปยัง PostgreSQL
app.post('/adduser', async (req, res) => {
  const { username, password } = req.body; // ดึงข้อมูลจาก body
  const timestamp = new Date();            // เก็บข้อมูล timestamp
  console.log("Username: " + username);
  console.log("Password: " + password);
  
  try {
    // ใช้คำสั่ง INSERT เพื่อบันทึกข้อมูลลงในตาราง users
    const result = await pool.query(
      'INSERT INTO users (username, password, timestamp) VALUES ($1, $2, $3) RETURNING *',
      [username, password, timestamp]
    );

    // ส่งข้อมูลที่บันทึกกลับไปในรูปแบบ JSON
    res.json(result.rows[0]); 
  } catch (error) {
    console.error('Error saving data to database:', error);
    res.status(500).json({ error: 'Failed to save data to database' });
  }
});

// เริ่มต้นเซิร์ฟเวอร์
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
