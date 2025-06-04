const sequelize = require('../config/database.js'); //sequelize instance
const { QueryTypes } = require('sequelize');
const User = require('../models/estudantes');
const Joi = require('joi');

const estudantesSchema = Joi.object({
  id:Joi.string(),
  nome: Joi.string().required(),
  ra: Joi.string().required(),
  classId: Joi.string().required(),
  grauId: Joi.string().required()
});

const nomes = ["Lucas", "Mateus", "Gabriel", "Pedro", "Ana", "Mariana", "João", "Carlos", "Juliana", "Camila"];
const sobrenomes = ["Silva", "Santos", "Oliveira", "Souza", "Pereira", "Costa", "Almeida", "Nascimento", "Lima", "Rocha"];

function gerarNome() {
  return `${nomes[Math.floor(Math.random() * nomes.length)]} ${sobrenomes[Math.floor(Math.random() * sobrenomes.length)]}`;
}

function gerarRA() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return Array.from({ length: 6 }, () => caracteres[Math.floor(Math.random() * caracteres.length)]).join('');
}


exports.getAllEstudantes = async (req, res) => {
    //const estudantes = await User.findAll();

    const estudantes = await sequelize.query(
      `select e.*, g."nome" as grau, c."nome" as classe   from public."Estudantes"  e
        left join public."Graus" g
        on e."grauId" = g."id"
        left join public."Classes" c
        on e."classId" = c."id"`, {
      type: QueryTypes.SELECT,
    });
    
    res.json(estudantes);
  };

  exports.countGrauEstudantes = async (req, res) => {
    const estudantes = await sequelize.query(
      `select g."id", g."nome", g."sigla", count."count" from public."Graus" g left join (
      select e."grauId" grau,count(*) from public."Estudantes" as e group by  e."grauId"  order by e."grauId" asc
      ) count 
      on g.id = count."grau"
      order by g.id`, {
      type: QueryTypes.SELECT,
    });
    res.json(estudantes);
  };;

  exports.getEstudantesId = async (req, res) => {
  //  const estudante = await User.findByPk(req.params.id );

     const estudante = await sequelize.query(
      `select e.*, g."nome" as grau, c."nome" as classe   from public."Estudantes"  e
        left join public."Graus" g
        on e."grauId" = g."id"
        left join public."Classes" c
        on e."classId" = c."id" WHERE e."id" = $1`, {
          bind: [req.params.id],
          type: QueryTypes.SELECT,
    });
    estudante ? res.json(estudante) : estudante.status(404).json({ error: 'Estudante não encontrado' });
  };

  exports.createEstudante = async (req, res) => {
    const { error } = estudantesSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
  
    try {
      const user = await User.create(req.body);
      res.status(201).json({ nome: user.name, ra: user.ra, classId: user.classId, grauId: user.grauId });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  exports.updateEstudante = async (req, res) => {
    const user = await User.findByPk(req.body.id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado'+ req.body.id});
  
    const { error } = estudantesSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message + req.body.id });
  
    await user.update(req.body);
    res.json({  nome: user.name, ra: user.ra, classId: user.classId, grauId: user.grauId  });
  };
  
  exports.deleteEstudante = async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  };

  exports.createLote = async (req, res) => {
    await sequelize.sync(); // Garante que a tabela existe

  const estudantes = [];

  for (let i = 0; i < 300; i++) {
    estudantes.push({
      nome: gerarNome(),
      ra: gerarRA(),
      classId: Math.floor(Math.random() * 6) + 1,
      grauId: Math.floor(Math.random() * 13) + 1
    });
  }

  try {
    await User.bulkCreate(estudantes);
    res.status(201).json({msg: '✅ Estudantes inseridos com sucesso!'});
  } catch (err) {
    res.status(400).json({ error: '❌ Erro ao inserir estudantes:' });
  } finally {
    await sequelize.close();

  }
}
  
