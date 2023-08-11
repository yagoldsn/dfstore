const express = require("express")
const app = express();
const handlebars = require("express-handlebars");

//configuração


//express=handlebars
const optionsHandlebars = handlebars.create({
    defaultLayout: "main"
  });
  app.engine("handlebars", optionsHandlebars.engine);
  app.set("view engine", "handlebars");

//rotas
app.use("/",(req,res)=>{
    res.render("inicial/index")
})

app.listen(3000,()=>{
    console.log("Servidor rodando!")
})