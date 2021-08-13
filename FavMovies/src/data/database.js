const mongoose = require('mongoose')

const connect = () => {mongoose.connect('mongodb://localhost:27017/filmes-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(console.log('database conectada com sucesso.'))
  .catch(err => console.err)
}

module.exports = { connect }