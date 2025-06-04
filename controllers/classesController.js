const User = require('../models/classes');
const Joi = require('joi');

const classesSchema = Joi.object({
  name: Joi.string().required()
});

exports.getAllClasses = async (req, res) => {
  const classes = await User.findAll();
  res.json(classes);
};