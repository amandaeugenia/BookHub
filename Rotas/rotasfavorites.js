const { Router } = require ("express")
const router = Router()
const { getFavorites, postFavorites, deleteFavorite } = require ('../Controladores/controladoresfavorites')

router.get('/:', getFavorites)

router.post('/:id', postFavorites )

router.delete(':/id', deleteFavorite)

module.exports = router
