const db = require("../config/banco") //recebendo dados da conexão do servidor

const Cliente = db.sequelize.define('clientes',{
    codigo:{
        type: db.Sequelize.INTEGER//DECLARAÇÃO DOS CAMPOS DA TABELA COM SEUS TIPOS DEFINIDOS
    },
    nome:{
        type: db.Sequelize.STRING
    }
});

exports.cliente = Cliente;