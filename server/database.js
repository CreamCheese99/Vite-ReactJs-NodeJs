const { response } = require("express"); //response ถูกนำเข้าจาก express 
const {Pool} = require("pg"); //Pool คือคลาสที่ใช้ในการจัดการการเชื่อมต่อกับฐานข้อมูล PostgreSQL


// ตั้งค่าการเชื่อมต่อ PostgreSQL
const pool = new Pool({
    user: 'postgres',       // ชื่อผู้ใช้ PostgreSQL
    host: 'localhost',           // โฮสต์ของฐานข้อมูล
    database: 'Inventory',   // ชื่อฐานข้อมูล
    password: 'Anfieldtuna@1',   // รหัสผ่านของผู้ใช้
    port: 5432,                  // พอร์ต PostgreSQL (ปกติคือ 5432)
  });

module.exports = pool;
