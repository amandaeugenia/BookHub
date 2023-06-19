const fs = require("fs")
const { getAllFavorites, insertFavorites, deleteFavoriteBook } = require("../Serviços/favorites")

function getFavorites(req, res) {
    try {
       const favorites = getAllFavorites()
       res.send(favorites)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorites(req, res) {
    try {
        const id =  req.params.id
        insertFavorites(id)
        res.status (201)
        res.send ("Livro inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorite (req, res) {
    try { 
        const id = req.params.id
        if (id && Number(id)) {
            deleteFavoriteBook(id)
            res.send("Livro deletado com sucesso")
        } else {
            res.status(422)
            res.send("ID Inválido") 
        } 
        
        } catch (error) {
            res.status (500)
            res.send (error.message)
        }

}


    module.exports = {
    getFavorites,
    postFavorites, 
    deleteFavorite
}