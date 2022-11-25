const {Sequelize} = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'todo-db',
    username: 'postgres',
    password: 'jb1786',
    port: 5432
})





    module.exports = db