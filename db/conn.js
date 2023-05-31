const Sequelize = require('sequelize')
const sequelize = new Sequelize('av_setup', 'root', 'senai', {
    host:'localhost',
    dialect:'mysql'
})

// sequelize.authenticate().then(()=>{
//     console.log('conexão realizada com êxito')
// }).catch((error)=>{
//     console.log('falha na conexão ' + error)
// })

module.exports = sequelize