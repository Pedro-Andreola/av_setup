const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const conn = require('./db/conn.js')

const PORT = 3000
const hostname = 'localhost'
/*-------------------------------------------------*/
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

/*-------------------------------------------------*/
app.engine('handlebars', exphbs.engine)
app.set('view engine', 'handlebars')
/*-------------------------------------------------*/
app.get('/', (req, res)=>{
    res.end('Servidor Testado e Aprovado Pelo Andreola Rei do Setup')
})
/*-------------------------------------------------*/
conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor conectado ${hostname} ${PORT}`)
    })
}).catch((error)=>{
    console.log('Erro ao conectar ' + error)
})