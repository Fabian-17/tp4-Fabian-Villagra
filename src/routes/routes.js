const express = require('express');
const router = express.Router();
//Importamos los controladores
const {
    getController,
    postController,
    putController,
    deleteController
} = require('../controllers/controller');

// Ruta GET
router.get('/', getController);

// Ruta POST
router.post('/', postController);

// Ruta PUT
router.put('/', putController);

// Ruta DELETE
router.delete('/', deleteController);


//Exportamos las rutas con los controladores que importamos
module.exports = router;