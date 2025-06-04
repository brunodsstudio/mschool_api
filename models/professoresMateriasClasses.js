const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProfessoresMateriasClasses = sequelize.define('ProfessoresMateriasClasses', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    cA: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    cB: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    cC: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    cD: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    cE: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    cF: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    },
    grauId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    classId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    profId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },


},{
  timestamps: false});

/*Classes.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});*/

module.exports = ProfessoresMateriasClasses;
