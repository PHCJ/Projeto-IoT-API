const express = require('express')
const  DatabasePostgres = require('./db-postgres')
const app = express()
const database = new DatabasePostgres()


app.get("/", function (req, res) {
    res.send("Projeto Esp - Daniela e Paulo")
})

app.get("/:temperatura/:umidade", async (req, res) => {
    const temperatura = req.params.temperatura
    const umidade = req.params.umidade
    await database.gravar({
        temperatura,
        umidade,
    })
    res.status(201).send();
})

app.get("/listar", async (req, res) =>{
    const lista = await database.listar()
    res.send(lista)
})

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});