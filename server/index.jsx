const express = require('express');
const cors = require('cors');
const pool = require('./database');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// ... (routes สำหรับ CRUD operations)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});