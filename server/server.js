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

const express = require("express");
const cors = require("cors");
const pool = require("./database"); // ตรวจสอบว่าคุณมีการเชื่อมต่อ pool จาก pg หรือไม่

const app = express();

app.use(express.json());
app.use(cors());

// POST request สำหรับเพิ่มผู้ใช้ใหม่
app.post("/adduser", (req, res) => {
  const { username, password } = req.body;

  console.log("Username: " + username);
  console.log("Password: " + password);

  // ใช้ parameterized queries เพื่อป้องกัน SQL Injection
  const insertSTMT = `INSERT INTO accounts (username, password) VALUES ($1, $2)`;

  // ส่งค่า username และ password ไปยัง parameterized query
  pool.query(insertSTMT, [username, password])
    .then((response) => {
      console.log("Data Saved");
      console.log(response);
      res.status(201).send({ message: "User added successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: "Error saving data" });
    });
});

// เริ่มเซิร์ฟเวอร์ที่พอร์ต 4000
app.listen(4000, () => console.log("Server on localhost:4000"));
