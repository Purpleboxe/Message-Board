const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const getMessages = async () => {
  const res = await pool.query("SELECT * FROM messages ORDER BY added DESC");
  return res.rows;
};

const addMessage = async (text, username) => {
  const res = await pool.query(
    "INSERT INTO messages (text, username) VALUES ($1, $2) RETURNING *",
    [text, username]
  );
  return res.rows[0];
};

module.exports = {
  getMessages,
  addMessage,
};
