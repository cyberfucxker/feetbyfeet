const express = require('express');
const sequelize = require('./config/database');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 1333;

// Middleware for JSON parsing (extend as needed)
app.use(express.json());

// Database connection check
sequelize.authenticate()
  .then(() => console.log('✅ Connected to MySQL database!'))
  .catch(err => console.error('❌ DB connection error:', err));

// API routes
app.use('/', routes);

app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);