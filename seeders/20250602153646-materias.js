'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Materias', [
      {
        nome: 'Matemática',
      },
      {
        nome: 'Português',  
      },
      {
        nome: 'Geografia',  
      }
      ,{
        nome: 'Historia',  
      },
      {
        nome: 'Quimica',  
      },
      {
        nome: 'Fisica',  
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Materias', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
