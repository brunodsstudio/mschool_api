'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Graus', [
      {
        nome: 'Ensino Fundamental',
        sigla: "EF",
      },
      {
        nome: '1° ano do ensino médio', 
        sigla: "1º M",

      },
      {
        nome: '2° ano ensino médio',
        sigla: "2º M",  
      }
      ,{
        nome: '3° ano do ensino médio',
        sigla: "3º M",  
      }
      ,{
        nome: 'Cursinho',
        sigla: "CUR",  
      }
      ,{
        nome: '4º ano do ensino fundamental',
        sigla: "4º F",  
      }
      ,{
        nome: '5º ano do ensino fundamental',  
        sigla: "5º F",
      }
      ,{
        nome: '6º ano do ensino fundamental',  
        sigla: "6º F",
      }
      ,{
        nome: '7º ano do ensino fundamental',  
        sigla: "7º F",
      }
      ,{
        nome: '8º ano do ensino fundamental',
        sigla: "8º F",
      }
      ,{
        nome: '9º ano do ensino fundamental', 
        sigla: "9º F", 
      }
      ,{
        nome: 'Estudo em casa', 
        sigla: "ES", 
      }
      ,{
        nome: 'Outros',
        sigla: "OUT",  
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Graus', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
