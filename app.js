const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middlewares/auth');

const classesRoutes = require('./routes/classesRoutes');
const professoresRoutes = require('./routes/professoresRoutes');
const grausRoutes =  require('./routes/grausRoutes');
const materiasRoutes = require('./routes/materiasRoutes');
const estudantesRoutes = require('./routes/estudantesRoutes');
const professoresMateriasClassesRoutes = require('./routes/professoresMateriasClassesRoutes');

const lotesRoutes = require('./routes/lotesRoutes');

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', authMiddleware, userRoutes);

app.use('/classes', classesRoutes);
app.use('/professores',  professoresRoutes);
app.use('/graus',  grausRoutes);
app.use('/materias',  materiasRoutes);
app.use('/estudantes',  estudantesRoutes);
app.use('/professoresMateriasClasses', professoresMateriasClassesRoutes);

app.use('/lotes', lotesRoutes);

sequelize.sync().then(() => {
  console.log('Banco sincronizado');
  app.listen(4001, () => {
    console.log('Servidor rodando em http://localhost:4001');
  });
}); 
