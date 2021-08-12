const mongoose = require('mongoose')
const Estudio = require('../models/estudio')

const getAll = async (req, res) => {
  const estudios = await Estudio.find()
  res.json(estudios)
}

const createStudio = async (req, res) => {
  const estudio = new Estudio({
    _id: new mongoose.Types.ObjectId(),
    nome: req.body.nome,
    criadoEm: req.body.criadoEm,
  })
  const estudioJaExiste = await Estudio.findOne({nome: req.body.nome})
  if (estudioJaExiste) {
    return res.status(409).json({error: 'Estudio ja cadastrado.'})
  }
  try{
    const novoEstudio = await estudio.save()
    res.status(201).json(novoEstudio)
  } catch(err) {
    res.status(400).json({ message: err.message})
  }
}

const updateOne = async(req, res) => {
  
  try {
    //Tenta encontrar um estudio pelo id
    const estudio = await Estudio.findById(req.params.id)
    //Se você não encontrar me retorne o erro
    if (estudio == null) {
      return res.status(404).json({message: "estudio não encontrado"})
    }
    //No corpo da requisição tem algo digitado, considere o que tiver digitado como minha alteração
    if (req.body.nome != null) {
      estudio.nome = req.body.nome
    }
    //Já salvou?
    const estudioAtualizado = await estudio.save()
    //Retornando o documento atualizado com o código de sucesso
    res.status(200).json(estudioAtualizado)

  } catch (err) {
    //Se houve qulquer erro acima, mostre qual erro foi esse 
    res.status(500).json({message: err.message})
  }
}

module.exports = {
  getAll,
  createStudio,
  updateOne
}