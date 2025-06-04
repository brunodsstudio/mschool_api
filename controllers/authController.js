const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const secret = 'meusegredosecreto';

exports.login = async (req, res) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) return res.status(401).json({ error: 'Usuário não encontrado' });

  //const match = await bcrypt.compare(req.body.password, user.password);
  let match = false;
  if(req.body.password === String(user.password)){
    match = true;
  }
    console.log(typeof(req.body.password),typeof(user.password), req.body.password, user.password)
  if (!match) return res.status(401).json({ error: 'Senha inválida' });

  const token = jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '1h' });
  res.json({ token });
};
