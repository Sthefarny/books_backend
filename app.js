const express = require("express")
const rotaLivro = require("./rotas/livro")
const rotaFavorito = require("./rotas/favorito")

const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))
app.use('/imagens', express.static('public/imagens'))

const port = 8000

app.use('/livros',rotaLivro)
app.use('/favoritos', rotaFavorito)

app.listen(port,() =>{
    console.log(`escutanado a porta ${port}`)
})