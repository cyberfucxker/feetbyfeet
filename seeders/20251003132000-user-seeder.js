'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface) {
    const hash = await bcrypt.hash('password123', 10);
    await queryInterface.bulkInsert('users', [
      {
        roleId: 1,
        fname: 'Alice',
        lname: 'Admin',
        email: 'alice.admin@example.com',
        countryCode: '+1',
        mobile: '1234567890',
        mobileWithCountry: '+11234567890',
        password: hash,
        country: 'USA',
        state: 'California',
        city: 'San Francisco',
        zipcode: '94105',
        verifiedAt: new Date(),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: 2,
        fname: 'Bob',
        lname: 'User',
        email: 'bob.user@example.com',
        countryCode: '+91',
        mobile: '9876543210',
        mobileWithCountry: '+919876543210',
        password: hash,
        country: 'India',
        state: 'Maharashtra',
        city: 'Mumbai',
        zipcode: '400001',
        verifiedAt: null,
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleId: 3,
        fname: 'Charlie',
        lname: 'Vendor',
        email: 'charlie.vendor@example.com',
        countryCode: '+44',
        mobile: '7890123456',
        mobileWithCountry: '+447890123456',
        password: hash,
        country: 'UK',
        state: 'England',
        city: 'London',
        zipcode: 'EC1A1BB',
        verifiedAt: new Date(),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  }
};