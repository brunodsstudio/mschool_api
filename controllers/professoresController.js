const sequelize = require('../config/database.js'); //sequelize instance
const { QueryTypes } = require('sequelize');
const User = require('../models/professores');
const Joi = require('joi');

const professoresSchema = Joi.object({
  name: Joi.string().required(),
 // email: Joi.string().email().required()
});

exports.getAllProfessores = async (req, res) => {
    //const professores = await User.findAll();

   const professores = await sequelize.query( `select p.*, m."nome" materia from public."Professores" p
    left join public."Materias" m 
    on p."matId" = m.id`, {
      type: QueryTypes.SELECT,
    });
    res.json(professores);
  };;


  