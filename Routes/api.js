const router = require('express').Router();

const apiNotes = require('./Notes')
const apiPost = require('./Posts')
const apiUser = require('./Login')


//rutas de Notas
router.use('/notes',apiNotes)

//rutas de Post
router.use('/post',apiPost)

//rutas de User
router.use('/user',apiUser)

module.exports = router