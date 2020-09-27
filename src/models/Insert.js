const db = require('./db')

const Insert = db.sequelize.define('records', {

        nome: {
            type: String
        },
        email: {
            type: String
        }
    })
    // Cria a Tabela
Insert.sync({ force: true })