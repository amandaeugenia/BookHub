const fs = require("fs")
const livrosAtuais = (JSON.parse(fs.readFileSync("livros.json")))
const novosLivros = [{id: "3", nome: "Livro React"}]

fs.writeFileSync("livros.json", JSON.stringify([...livrosAtuais, novosLivros]))

console.log(JSON.parse(fs.readFileSync("livros.json")))