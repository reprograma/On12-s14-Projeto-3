const mongoose = require('mongoose')
const Titulo = require('../models/titulo')

const getAll = async (req, res) => {
  const titulos = await Titulo.find().populate('estudio')
  res.status(200).json(titulos)
}
 const getFindById = async (req, res) =>{
  const getTituloById = await Titulo.findById(req.params.id)
  Titulo.findOne({id:req.params.id},
    function(err){
      if(err){
        res.status(500).json({message: err.message})
      }else{
        res.status(200).json(getTituloById)
      }
    })
}

const getAllMavel = async (req, res) => {
  const titulos = await Titulo.find().populate('estudio')
  const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Marvel")

return res.status(200).json(titulosFiltrado)
}

const getAllPixar = async (req, res,next) => {
  const titulos = await Titulo.find().populate('estudio')
  const titulosFiltrados = titulos.filter(titulo => titulo.estudio.nome == "Pixar")
  res.json(titulosFiltrados)
}

const getAllGhibli = async (req, res) => {
  const titulos = await Titulo.find().populate('estudio')
  const titulosFiltrado = titulos.filter(titulo => titulo.estudio.nome == "Ghibli")

return res.status(200).json(titulosFiltrado)
}

const createTitle = async (req, res) => {
  const titulo = new Titulo({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    genero: req.body.genero,
    descricao: req.body.descricao,
    estudio: req.body.estudio,
    criadoEm: req.body.criadoEm
  })
  //TODO : criar validação se filme já existe
  try {
    const novoTitulo = await titulo.save()
    res.status(201).json(novoTitulo)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
}

const deletaTitulo = async (req, res) => {
   const encontraTitulo = await Titulo.findById(req.params.id)
       if(encontraTitulo == null) {
          return res.status(404).json({message: 'Título não encontrado.'})
}

try {
    await encontraTitulo.remove()
    res.status(200).json({message: 'Título deletado com sucesso'})
} catch (err) {
    res.status(500).json({ message: err.message})
} 
}

const updateOne = async(req, res) => {

try {
//Tenta encontrar um titulo pelo id
const titulo = await Titulo.findById(req.params.id)
//Se você não encontrar me retorne o erro
if (titulo == null) {
  return res.status(404).json({message: "titulo não foi encontrado"})
}
//No corpo da requisição tem algo digitado, considere o que tiver digitado como minha alteração
if (req.body.nome != null) {
  titulo.nome = req.body.nome
}
if(req.body.genero != null){
  encontraTitulo.genero = req.body.genero
}

if(req.body.descricao != null){
encontraTitulo.descricao = req.body.descricao
}
//Já salvou?
const tituloAtualizado = await titulo.save()
//Retornando o documento atualizado com o código de sucesso
res.status(200).json(tituloAtualizado)

} catch (err) {
//Se houve qulquer erro acima, mostre qual erro foi esse 
res.status(500).json({message: err.message})
}
}

module.exports = {
  getAll,
  getFindById,
  getAllMavel,
  getAllPixar,
  getAllGhibli,
  createTitle,
  deletaTitulo,
  updateOne
}