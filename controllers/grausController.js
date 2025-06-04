const Graus = require('../models/graus');
const Joi = require('joi');

const grausSchema = Joi.object({
  name: Joi.string().required()
});

exports.getAllGraus= async (req, res) => {
  const graus = await Graus.findAll();
  res.json(graus);
};