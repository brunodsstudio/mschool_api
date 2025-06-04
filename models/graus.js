const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Graus = sequelize.define('Graus', {
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

module.exports = Graus;
