// O arquivo index.js é o arquivo inicial
// a ser acessado quando uma conexão
// CLIENTE-SERVIDOR é estabelecida.
// É a partir do arquivo index.js que os
// outros arquivos serão chamados.

const express = require("express");

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    return response.json('Uma Hora Chegamos Lá!!!');
});

app.listen(3333);