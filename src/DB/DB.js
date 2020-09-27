var Sequelize = require('sequelize')

const sequelize = new Sequelize(
    'nucont', //nome do banco
    'postgres', // usuario banco
    'postgres', // senah de acesso ao banco
    {
        host: "localhost", //servidor aonde o BD eta rodando
        dialect: 'postgres'
    }


);

const Records = sequelize.define('Records', {
    IdPessoa: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }

})

function insert_db(nome, email) {

    Records.creat({
            nome: nome,
            email: email
        }

    )

}

export default insert_db;