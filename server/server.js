const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5713"],
};
app.use(cors(corsOptions));

// สร้าง API ที่ส่งข้อมูล username และ timestamp
app.get("/api", (req, res) => {
    const data = {
        username: "yourUsername", // เปลี่ยนตามความต้องการ
        timestamp: new Date().toISOString() // เวลาปัจจุบันในรูปแบบ ISO
    };

    res.json(data); // ส่งข้อมูลในรูปแบบ JSON
});

app.listen(8080, () => {
    console.log("server started on port 8080");
});
