const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('feetbyfeet', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;