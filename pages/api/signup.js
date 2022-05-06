import dbConnect from '../../util/mongo'
import User from '../../model/Sign'
var CryptoJs = require('crypto-js')

export default async function handler(req, res) {
  const { method  } = req

  dbConnect()

  if(method === "POST"){
    try {
      const {name,email} = req.body
      const user = await User.create({name, email, password: CryptoJs.AES.encrypt(req.body.password, "secret_1").toString()})
      res.status(200).json(user)
    } catch (error) {
      res.status(404).json(error)
    }
  }
}