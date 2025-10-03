exports.healthCheck = (req, res) => {
  res.send('✅ Connected to "feetbyfeet" MySQL via Sequelize!');
};