const express = require('express')

const app = express()


app.get("/", function (req, res) {
    res.send("Projeto Esp - Daniela e Paulo")
})

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});