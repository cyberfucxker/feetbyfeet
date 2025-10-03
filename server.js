const express = require("express");
const sequelize = require("./config/database");

const app = express();
const PORT = 1333;

// Check DB connection when server starts
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Connection to database 'feetbyfeet' successful!");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
})();

// Route for browser
app.get("/", (req, res) => {
  res.send("✅ Connected to database 'feetbyfeet' using Sequelize ORM via XAMPP MySQL!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
