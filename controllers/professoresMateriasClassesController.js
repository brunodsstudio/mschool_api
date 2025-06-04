const sequelize = require('../config/database.js'); //sequelize instance
const { QueryTypes } = require('sequelize');
const User = require('../models/professoresMateriasClasses');
const Joi = require('joi');

const professoresMateriasClassesSchema = Joi.object({
 // nome: Joi.string().required(),
 // email: Joi.string().email().required()
});

exports.getAllProfessoresMateriasClasses = async (req, res) => {
    const professoresMateriasClasses = await User.findAll();
    res.json(professoresMateriasClasses);
  };


exports.allClassMatProfs = async (req, res) => {
    const estudantes = await sequelize.query(
      `SELECT PMC.*, P.nome professor, m.nome materia,  G."nome" grau, C."nome" classe
        FROM PUBLIC."ProfessoresMateriasClasses" PMC 
        LEFT JOIN PUBLIC."Professores" P
        on p.id = PMC."profId" 
        left join public."Materias" m 
        on P."matId" = m.id 
        LEFT JOIN PUBLIC."Graus" g
        ON PMC."grauId" = g."id"
        LEFT JOIN PUBLIC."Classes" c
        ON PMC."classId" = c."id"`, {
      type: QueryTypes.SELECT,
    });
    res.json(estudantes);
  };;