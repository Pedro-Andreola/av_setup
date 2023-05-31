const {DataTypes} = require('sequelize')
const db = require('../db/conn.js')
const Aluno = db.define('aluno',{
    nome:{
        type:DataTypes.STRING(30)
    },
    idade:{
        type:DataTypes.INTEGER
    }
},{
    createdAt:false,
    updatedAt:false
})

//  Aluno.sync({force:true})

module.exports = Aluno