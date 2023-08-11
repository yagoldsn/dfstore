const Sequelize = require("sequelize")
const sequelize = new Sequelize("dfstore","root","mulnbo182",{//nome do database,usuario,senha
    host: "localhost",//local do banco de dados
    dialect: 'mysql' //linguagem de banco utilizada, porque sequelize trabalha com varios tipos de banco
})

exports.sequelize = {
    sequelize: sequelize,
    Sequelize: Sequelize
}