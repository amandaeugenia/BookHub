const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync("livros.json"))
    const filterBooks = books.filter( book => book.id === id ) [0]
    return filterBooks
}

function insertNewBook(newBook) {
const books = JSON.parse(fs.readFileSync('livros.json'))
const newBookList = [...books, newBook ]
fs.writeFileSync("livros.json", JSON.stringify(newBookList))
}

function editBook(changes, id) {
    let currentBooks = JSON.parse(fs.readFileSync("livros.json"))
    const newIndex = currentBooks.findIndex(book => book.id === id)

    const newContent = { ...currentBooks[newIndex], ...changes }

    currentBooks[newIndex] = newContent
    fs.writeFileSync("livros.json", JSON.stringify(currentBooks))
}

function eraseBook (id) {
    const currentBook = JSON.parse(fs.readFileSync('livros.json'))
    const filterBooks = currentBook.filter(book => book.id !== id)
    fs.writeFileSync("livros.json", JSON.stringify(filterBooks))
}

module.exports = {getAllBooks, getBookById, insertNewBook, editBook, eraseBook}

