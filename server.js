const express = require("express")
const server = express()

server.use(express.static("public"))

server.get("/", function(req, res) {
  return res.sendFile(__dirname + "/index.html")
})

server.get("/ideias", function(req, res) {
  return res.sendFile(__dirname + "/ideias.html")
})

server.listen(3000)

// posso ver qual o conteudo de uma var do node por ex so dando console.log(var)
