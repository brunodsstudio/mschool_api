'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Estudantes', [
        {
          "ra":12346,
          "nome":"Pablo",
          "grauId":1,
          "classId":1
        },
        {
          "ra":456798,
          "nome":"Joao",
          "grauId":2,
          "classId":1
        },
        { 
          "ra":752156,
          "nome":"Maria",
          "grauId":3,
          "classId":2
        },
        {
          "ra":852348,
          "nome":"Fernanda",
          "grauId":4,
          "classId":2
        },
        {
          "ra":454643,
          "nome":"Janaina",
          "grauId":6,
          "classId":2
        }

      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Estudantes', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
