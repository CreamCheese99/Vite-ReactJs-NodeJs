const { response } = require("express"); //response ถูกนำเข้าจาก express 
const {Pool} = require("pg"); //Pool คือคลาสที่ใช้ในการจัดการการเชื่อมต่อกับฐานข้อมูล PostgreSQL

const pool = new Pool({
    user: "postgres", // ชื่อผู้ใช้ในการเข้าถึงฐานข้อมูล
    password: "1234",  // รหัสผ่านสำหรับผู้ใช้
    host:"localhost", // ที่อยู่ของเซิร์ฟเวอร์ฐานข้อมูล
    port: 5432, // พอร์ตที่ใช้ในการเชื่อมต่อ (พอร์ตเริ่มต้นของ PostgreSQL)
    database:"yt_login_system" 
})

module.exports = pool;

//************************************************************************** */
// const createTblQry = `
//   CREATE TABLE accounts (
//     user_id serial PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     password VARCHAR(50) UNIQUE NOT NULL
//   );`

// pool
//     .query(createTblQry)
//     .then((Response) =>{
//     //console.log("Database Created");
//     console.log("Table Created");
//     console.log(response);
// })

// .catch((err) => {
//     console.log(err);
// });

// pool.query ทำการส่งคำสั่ง SQL ไปยังเซิร์ฟเวอร์ฐานข้อมูล
// ในที่นี้คือคำสั่ง CREATE DATABASE yt_login_system; ซึ่งจะสร้างฐานข้อมูลชื่อ yt_login_system
// ถ้าคำสั่งสำเร็จจะมีการแสดงข้อความ "Database Created" ใน Console
// ถ้ามีข้อผิดพลาดเกิดขึ้น (เช่น ฐานข้อมูลนี้มีอยู่แล้ว) ข้อผิดพลาดจะถูกจับและแสดงใน Console


// const { Pool } = require('pg');
// // ตั้งค่าการเชื่อมต่อกับ PostgreSQL
// const pool = new Pool({
//   user: 'postgres', // ชื่อผู้ใช้ฐานข้อมูลของคุณ
//   password: '1234', // รหัสผ่านฐานข้อมูล
//   host: 'localhost',
//   port: 5432, // พอร์ตที่ PostgreSQL ใช้ (ค่าเริ่มต้นคือ 5432)
//   database: 'login_test1' // ชื่อฐานข้อมูลของคุณ
// });

// module.exports = pool;
