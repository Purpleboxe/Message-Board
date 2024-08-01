const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    username TEXT NOT NULL,
    added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

pool
  .query(createTableQuery)
  .then(() => {
    console.log("Table created successfully");
    pool.end();
  })
  .catch((err) => {
    console.error("Error creating table", err);
    pool.end();
  });
