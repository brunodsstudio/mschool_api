'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Classes', [
      {
        nome: 'A',
      },
      {
        nome: 'B',  
      },
      {
        nome: 'C',  
      }
      ,{
        nome: 'D',  
      }
      ,{
        nome: 'E',  
      }
      ,{
        nome: 'F',  
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Classes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
