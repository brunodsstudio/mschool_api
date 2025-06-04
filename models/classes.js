const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Classes = sequelize.define('Classes', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  }

},{
  timestamps: false});

/*Classes.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});*/

module.exports = Classes; 
