'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      roleId: { type: Sequelize.INTEGER, allowNull: false, references: { model: 'roles', key: 'id' } },
      fname: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
      lname: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
      email: { type: Sequelize.STRING, allowNull: false, unique: true },
      countryCode: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
      mobile: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
      mobileWithCountry: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
      password: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
      country: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
      state: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
      city: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
      zipcode: { type: Sequelize.STRING, allowNull: true, defaultValue: null },
      verifiedAt: { type: Sequelize.DATE, allowNull: true, defaultValue: null },
      status: { type: Sequelize.TINYINT, defaultValue: 1 },
      deletedAt: { type: Sequelize.DATE, allowNull: true, defaultValue: null },
      createdAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { allowNull: false, type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('users');
  }
};