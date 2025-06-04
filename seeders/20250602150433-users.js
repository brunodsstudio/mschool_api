'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'admin@admin.com.br',
        password: '1234',
      },
      {
        name: 'John Travolta',
        email: 'bruno@admin.com.br',
        password: '1234',
      }
  
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
