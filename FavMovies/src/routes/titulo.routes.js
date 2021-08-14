const express = require('express')
const router = express.Router()
const controller = require('../controllers/tituloControllers')

//listar todos os titulos/get/find
router.get('/', controller.getAll)

//ler todos os títulos da Marvel/ get/find
router.get("/marvel", controller. getAllMavel)

//ler todos os títulos da Ghibli/ get/find
router.get("/glibli", controller.getAllGhibli)

// ler todos os títulos da Pixar/ get/find
router.get('/pixar', controller.getAllPixar)

//listar um titulo/get/findById
router.get('/:id', controller.getFindById)

//criar um novo titulo/post/save
router.post('/', controller.createTitle)

//atualizar uma informacao especifica num titulo/patch/findById/save
router.patch('/:id', controller.updateOne)

//deletar um titulo/delete/findById/remove
router.delete('/:id', controller.deletaTitulo)

module.exports = router