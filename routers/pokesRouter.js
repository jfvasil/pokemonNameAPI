const express = require('express')
const router = express.Router()
const pokesController = require('../controllers/pokesController')

router.get('/', pokesController.getPokes)

router.post('/addPoke', pokesController.addPokes)

router.put('/makeFav', pokesController.makeFav)

router.put('/makeUnFav', pokesController.makeUnFav)

router.delete('/deleteItem', pokesController.deletePokes)

module.exports = router