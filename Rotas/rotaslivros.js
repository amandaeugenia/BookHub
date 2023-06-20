const { Router } = require("express")
const router = Router()
const {getBooks, getIdBook, postBook, patchBooks, deleteBooks} =  require ('../Controladores/controladoreslivros')

router.get('/:', getBooks)

router.get('/:id', getIdBook)

router.post('/:', postBook)

router.patch('/:id', patchBooks)
    
router.delete('/:id',deleteBooks)

module.exports = router
