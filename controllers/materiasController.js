const User = require('../models/materias');
const Joi = require('joi');

const materiasSchema = Joi.object({
 // name: Joi.string().required()
});

exports.getAllMaterias = async (req, res) => {
  const materias = await User.findAll();
  res.json(materias);
};