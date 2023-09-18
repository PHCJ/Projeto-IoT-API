const express = require('express')

const app = express()


app.get("/", function (req, res) {
    res.send("Projeto Esp - Daniela e Paulo")
})