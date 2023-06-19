const fs = require("fs")
const {getAllBooks, getBookById, insertNewBook, editBook, eraseBook} = require("../Serviços/serviçoslivros")


function getBooks (req, res) {
   try {
        const books = getAllBooks()
        res.send(books)
   } catch (error) {
    res.status (500)
    res.send (error.message)
   }
}

function getIdBook (req, res) {
     try {
        const id = req.params.id
        if(id && Number(id)) {
        const book = getBookById(id)
         res.send(book)
        } else {
            res.status(422)
            res.send("ID Inválido")
        }
    } catch (error) {
    res.status (500)
    res.send (error.message)
   }
}
        function postBook (req, res) {
    try {
        const newBook = req.body
        insertNewBook(newBook)
        res.send(201)
        res.send ("Livro inserido com sucesso")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
    function patchBooks(req, res) {
    try {
        const id = req.params.id
        
        if(id && Number(id)) {
        const body = req.body
    
        editBook(body, id)
        res.send("Item modificado com sucesso")
    } else {
        res.status(422)
        res.send("ID Inválido")
    }
    }   catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

    function deleteBooks(req, res) {
        try {
            const id = req.params.id
            if(id && Number(id)) {
            eraseBook(id)
            res.send("Livro deletado com sucesso")
        } else {
            res.status(422)
            res.send("ID Inválido")
        }
        } catch(error) {
            res.status(500)
            res.send(error.message)
        }
    }


module.exports = {
    getBooks,
    getIdBook,
    postBook,
    patchBooks,
    deleteBooks
}