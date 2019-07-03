const bcrypt = require('bcryptjs')
const User = require('../models/UserModel')

module.exports={
  register: async (req, res) => {
    const db = req.app.get('db')

    const {firstName, lastName, email, password, phone, brokerage} = req.body

    const users = await db.checkUser(email)
    const user = users[0]

    if(user){
      return res.status(401).send('User with email already exists')
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    await db.registerUser(email, hash)

    let newMongoUser = new User()
    newMongoUser.firstName = firstName;
    newMongoUser.lastName = lastName;
    newMongoUser.email = email;
    newMongoUser.phone = phone;
    newMongoUser.brokerage = brokerage;
    newMongoUser.save((err, data) => {
      if(err){
        console.log(`Error creating mongo user`)
      } else {
        req.session.user = {
          data,
          authenticated: true
        }

        res.status(200).send(req.session.user)
      }
    })    
  },

  login: async (req, res) => {
    const db = req.app.get('db')

    const {email, password} = req.body

    const checkUsers = await db.checkUser(email)
    const checkUser = checkUsers[0]

    if(!checkUser) {
      return res.status(401).send('Incorrect email or password')
    }

    let authenticated = bcrypt.compareSync(password, checkUser.hash)

    if(authenticated){
      User.find({email: email}).exec((err, data) => {
        if(err){
          return res.status(500).send('Error fetching user from mongodb')
        } else {
          req.session.user = {
            data,
            authenticated
          }
          return res.status(200).send(req.session.user)
        }
      })
    }


  }
}