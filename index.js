const express = require("express")
const app = express();
const Sequelize = require("sequelize")
const conexao = require("./src/config/banco")

//configuração
// conexao.authenticate().then(()=>{
//     console.log("Conexão realizada com sucesso!")
// }).catch(()=>{
//     console.log("Erro ao tentar conectar!")
// })

//rotas
app.use("/",(req,res)=>{
    res.send("pagina principal")
})

app.listen(3000,()=>{
    console.log("Servidor rodadndo!")
})