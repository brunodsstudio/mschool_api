const express = require('express');
const router = express.Router();
const estudantesController = require('../controllers/estudantesController');

router.get('/', estudantesController.getAllEstudantes);
router.get('/countGrau', estudantesController.countGrauEstudantes);
router.get('/:id', estudantesController.getEstudantesId);

router.get('/lote/300', estudantesController.createLote);


router.post('/', estudantesController.createEstudante);
router.delete('/:id', estudantesController.deleteEstudante);
router.put('/', estudantesController.updateEstudante);



module.exports = router;