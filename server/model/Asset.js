const pool= require('./database.js');

module.exports = {
  async getAllAssets() {
    const { rows } = await pool.query('SELECT * FROM assets');
    return rows;
  },
  // ... (functions for other CRUD operations)
};