const fs = require("fs")

function getAllFavorites() {
    return JSON.parse(fs.readFileSync("favorites.json"))
}

function insertFavorites(id) {
    const books = JSON.parse(fs.readFileSync("livros.json"))
    const favorites = JSON.parse(fs.readFileSync("favorites.json"))
    const newFavorite = books.find (book => book.id === id)
    const newFavoriteList = [...favorites, newFavorite]
    fs.writeFileSync ("favorites.json", JSON.stringify(newFavoriteList))
    
}

function deleteFavoriteBook(id) {
    const favorites = JSON.parse(fs.readFileSync("favorites.json"))
    const eraseFavorite = favorites.filter (fav => fav.id !== id)
    fs.writeFileSync ("favorites.json", JSON.stringify(eraseFavorite))
}


module.exports = {
    getAllFavorites,
    insertFavorites,
    deleteFavoriteBook,
}