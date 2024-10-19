const express = require('express');
const cors = require('cors');
const pool = require('./database'); // เชื่อมต่อกับฐานข้อมูล

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Route สำหรับดึงข้อมูลจากฐานข้อมูล
app.get('/api', async (req, res) => {
  try {
    const query = 'SELECT * FROM accounts'; // แทนที่ด้วย table ที่คุณต้องการ
    const data = await pool.query(query);
    res.json(data.rows); // ส่งข้อมูลกลับไปเป็น JSON
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Route สำหรับเพิ่มข้อมูลลงในฐานข้อมูล
app.post('/api/adduser', async (req, res) => {
  try {
    const { username, password } = req.body;
    const query = 'INSERT INTO accounts (username, password) VALUES ($1, $2) RETURNING *';
    const newUser = await pool.query(query, [username, password]);
    res.json(newUser.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// เริ่มเซิร์ฟเวอร์ที่พอร์ต 8000
app.listen(8002, () => {
  console.log('Server is running on port 8002');
});







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

// GET request สำหรับเพิ่มผู้ใช้ใหม่ โดยรับ username และ password จาก query parameters
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


