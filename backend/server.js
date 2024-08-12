// backend/server.js
const bodyParser = require('body-parser');
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

const username = 'postgres';
const password = 'postgres';
const localhost = 'localhost';
const db = 'db';

// PostgreSQL
const pool = new Pool({
  user: username,
  host: localhost,
  database: db,
  password: password,
  port: 5432,
});

app.use(bodyParser.json());
app.use(cors());

// 회원가입 API (bcrypt)
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
      [username, email, hashedPassword]
    );
    res.status(201).json({ message: 'User registered successfully', user: result.rows[0] });
  } catch (error) {
    console.error('Error executing query', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 로그인 API
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = result.rows[0];

    if (!user) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error executing query', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// TO-DO LIST
app.get('/api/todos', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM todos ORDER BY id');
    res.json(result.rows);
  } catch (error) {
    console.error('ERror executing query', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// TO-DO add
app.post('/api/todos', async (req, res) => {
  const { description } = req.body;
  try {
    const result = await pool.query('INSERT INTO todos (description) VALUES ($1) RETURNING *', [description]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error excuting query', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//TO-DO delete
app.delete('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM todos WHERE id = $1', [id]);
    res.status(204).send();
  } catch (error) {
    console.error('Error excuting query', error.stack);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// // test API 엔드포인트
// app.get('/api', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT NOW()');
//     res.json(result.rows);
//   } catch (error) {
//     console.error('Error executing query', error.stack);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
