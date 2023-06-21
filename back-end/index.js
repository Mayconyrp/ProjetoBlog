const express = require("express")
const app = express()
const cors = require("cors")

// Import BD
const blog = require("./database/database")
//Import Controllers
const UserController = require("./controllers/UserController") 
const ArtigoController = require("./controllers/ArtigoController")
//Configuracoes Express

app.use(cors())
app.use(express.json())

//Conexao c banco de dados
blog    
.authenticate()
    .then(() => {
        console.log("Conexão feita!")
    }).catch((error) => {
        console.log(error)
    })


//Usuarios - Vinicolas
app.use("/", UserController)
app.use("/", ArtigoController)





const port = 8080;

//Porta do servidor
app.listen(8080, () => {    
    console.log("Aplicação on-line!");
    console.log(`Rodando na porta: http://localhost:${port}`);

})      