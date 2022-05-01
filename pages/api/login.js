import dbConnect from '../../util/mongo'
import User from '../../model/Sign'
var CryptoJs = require('crypto-js')

export default async function handler(req, res) {
  const { method  } = req

  dbConnect()

  if(method === "POST"){
    try {
      const user = await User.findOne({"email": req.body.email})
      const bytes = CryptoJs.AES.decrypt(user.password, "secret_1")
      var deCryptedPass = JSON.parse(bytes.toString(CryptoJs.enc.Utf8))
      if(user){
        if(req.body.password == deCryptedPass && user.email == req.body.email){
          res.status(200).json({success : true})
        }else{
          res.status(500).json({error: "Invalid Credentials"})
        }
      }else{
        res.status(404).json({error: "No user found"})
      }
    } catch (error) {
      res.status(404).json(error)
    }
  }
}
