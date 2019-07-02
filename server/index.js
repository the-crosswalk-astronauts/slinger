const express = require('express')
const app = express()
require('dotenv').config()
const massive = require('massive')
const mongoose = require('mongoose')
const{SERVER_PORT, SERVER_SECRET, POSTGRES_CONNECT, MONGO_CONNECT} = process.env

mongoose.set('useCreateIndex', true)

app.use(express.json())

massive(POSTGRES_CONNECT).then(db => {
  app.set('db', db)
  console.log(`Postgres DB Set`)
  mongoose.connect(MONGO_CONNECT, {useNewUrlParser: true}).then(mdb => {
    app.set('mdb', mdb)
    console.log('MongoDB set')
    app.listen(SERVER_PORT, ()=> console.log(`Listen up, it's ${SERVER_PORT} time`))
  })
})

