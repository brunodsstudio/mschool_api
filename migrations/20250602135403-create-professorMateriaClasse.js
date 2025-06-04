'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('ProfessoresMateriasClasses', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      cA: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:false,
      },
      cB: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:false,
        
      },
      cC: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:false,
      },
      cD: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:false,
      },
      cE: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:false,
      },
      cF: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue:false,
      },
      profId: {
        type: Sequelize.INTEGER(3),
        allowNull: false,
      },
      classId: {
        type: Sequelize.INTEGER(2),
        allowNull: true
      },
      grauId: {
        type: Sequelize.INTEGER(2),
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('ProfessoresMateriasClasses');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
