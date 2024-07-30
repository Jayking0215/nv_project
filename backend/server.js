// backend/server.js
const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const username = 'postgres';
const password = 'postgres';
const localhost = 'localhost';
const db = 'postgresql';

// PostgreSQL
const pool = new Pool({
  user: username,
  host: localhost,
  database: db,
  password: password,
  port: 5432,
});

// test API 엔드포인트
app.get('/api', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
