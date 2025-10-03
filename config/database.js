const { Sequelize } = require("sequelize");

// Adjust username/password if you changed them in XAMPP
const sequelize = new Sequelize("feetbyfeet", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = sequelize;
