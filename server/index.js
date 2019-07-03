const express = require('express')
const app = express()
require('dotenv').config()
const massive = require('massive')
const mongoose = require('mongoose')
const session = require('express-session')
const{SERVER_PORT, SESSION_SECRET, POSTGRES_CONNECT, MONGO_CONNECT} = process.env
const AuthCtrl = require('./Controllers/AuthController')

mongoose.set('useCreateIndex', true)

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 4
  }
}))

app.post('/auth/register', AuthCtrl.register)
app.post('/auth/login', AuthCtrl.login)

massive(POSTGRES_CONNECT).then(db => {
  app.set('db', db)
  console.log(`Postgres DB Set`)
  mongoose.connect(MONGO_CONNECT, {useNewUrlParser: true}).then(mdb => {
    app.set('mdb', mdb)
    console.log('MongoDB set')
    app.listen(SERVER_PORT, ()=> console.log(`Listen up, it's ${SERVER_PORT} time`))
  })
})

