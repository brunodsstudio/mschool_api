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
    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },

},{
  timestamps: false});

/*Classes.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});*/

module.exports = Professores;
