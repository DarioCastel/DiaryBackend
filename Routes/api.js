const router = require('express').Router();

const apiNotes = require('./Notes')
const apiPost = require('./Posts')


//rutas de Notas
router.use('/notes',apiNotes)

//rutas de Post
router.use('/post',apiPost)

module.exports = router