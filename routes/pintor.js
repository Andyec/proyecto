const express = require('express');

//Routeamos a los pintores
let pintor = require('../controllers/PintoresController.js');

//Creamos las rutas
let router = express.Router();

router.get('/', pintor.list);

module.exports = router;

