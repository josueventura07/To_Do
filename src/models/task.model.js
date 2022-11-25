const {DataTypes} = require('sequelize');

const db = require('../utils/database');

//* {
//*     id: 7,
//*     title: 'Practicar express',
//*     description: 'Ver videos de apoyo y crear otra API',
//*     is_completed: false
//* }

const Tasks = db.define('tasks', {
    id: {
        type: DataTypes.INTEGER,       
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(100), //? Es un varchar (tiene 255 de limitante)
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT, //? No tiene Limites
        allowNull: false //? Indica que es un campo obligatorio
    },
    is_completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
})

module.exports = Tasks