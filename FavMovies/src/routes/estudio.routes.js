const express = require('express')
const router = express.Router()
const controller = require('../controllers/estudioControllers')

//listar todos os estudios/get/find
router.get('/', controller.getAll)

//criar um novo estudio/post/save
router.post('/', controller.createStudio)

//listar um estudio/get/findById
router.get('/:id', controller.getFindById)

//atualizar uma informacao especifica num estudio/patch/findById/save
router.patch('/:id', controller.updateOne)

//deletar um estudio/delete/findById/remove
router.delete('/:id', controller.deleteEstudio)

module.exports = router
