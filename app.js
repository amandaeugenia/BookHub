const express = require("express")
const rotaLivro = require("./Rotas/rotaslivros")
const rotaFavorites = require("./Rotas/rotasfavorites")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))

app.use('/livros', rotaLivro)
app.use('/favorites', rotaFavorites)

const port = 8000

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})