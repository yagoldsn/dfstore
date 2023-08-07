const express = require("express")
const app = express();
//const Sequelize = require("sequelize")
//const conexao = require("./src/config/banco")
const handlebars = require("express-handlebars");

//configuração

//conexão banco de dados
// const sequelize = new Sequelize("dfstore","root","mulnbo182",{//nome do database,usuario,senha
//     host: "localhost",//local do banco de dados
//     dialect: 'mysql' //linguagem de banco utilizada, porque sequelize trabalha com varios tipos de banco
// })
// conexao.authenticate().then(()=>{
//     console.log("Conexão realizada com sucesso!")
// }).catch(()=>{
//     console.log("Erro ao tentar conectar!")
// })

//express=handlebars
const optionsHandlebars = handlebars.create({
    defaultLayout: "main"
  });
  app.engine("handlebars", optionsHandlebars.engine);
  app.set("view engine", "handlebars");
  
//rotas
app.use("/",(req,res)=>{
    res.send("pagina principal")
})

app.listen(3000,()=>{
    console.log("Servidor rodando!")
})