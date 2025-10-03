'use strict';
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('roles', [
      { id: 1, name: 'Admin', status: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'User', status: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Vendor', status: 1, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};