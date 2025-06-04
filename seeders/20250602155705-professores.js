'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Professores', [
      {
        "nome":"Sr. Pedro",
        "matId": 1
      },
      {
        "nome":"Sra. Vania",
        "matId": 2
      },
      {
        "nome":"Sr. Matheus",
         "matId": 3
      },
      {
        "nome":"Srta. Prya",
        "matId": 4
      },
      {
        "nome":"Sr. Valter",
         "matId": 5
      },
      {
        "nome":"Sta. Consuelo",
         "matId": 6
      }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Professores', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
