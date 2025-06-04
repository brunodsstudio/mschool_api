const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Materias = sequelize.define('Materias', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    

},{
  timestamps: false});

/*Classes.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});*/

module.exports = Materias;
