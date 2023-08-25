const express = require("express")
const app = express();
const handlebars = require("express-handlebars");

//configuração

app.use(express.static('public')); //definindo a pasta onde ira buscar caminhos de imagem, css e outros arquiv estaticos no handlebars


//express=handlebars
const optionsHandlebars = handlebars.create({
    defaultLayout: "main"
  });
  app.engine("handlebars", optionsHandlebars.engine);
  app.set("view engine", "handlebars");
  app.use(express.static("imagens"));

//rotas
app.use("/",(req,res)=>{
    res.render("inicial/index")
})

app.listen(3000,()=>{
    console.log("Servidor rodando! ")
})