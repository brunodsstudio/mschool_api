const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Professores = sequelize.define('Professores', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ra: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    classId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    grauId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },


},{
  timestamps: false});

/*Classes.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});*/

module.exports = Professores;
