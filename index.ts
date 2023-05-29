import { AppDataSource } from "./src/databases/data-source"
// O arquivo index.js é o arquivo inicial
// a ser acessado quando uma conexão
// CLIENTE-SERVIDOR é estabelecida.
// É a partir do arquivo index.js que os
// outros arquivos serão chamados.
const express = require ("express")

const app = express()

app.use(express.json())

app.get("/", (request, response, ) => {
    return response.json("E aí, blz?")
})

app.listen(3333, () =>
    console.log("O server tá ON na porta 3333") 
)


AppDataSource.initialize()


