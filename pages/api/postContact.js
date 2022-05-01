import dbConnect from '../../util/mongo'
import contact from '../../model/contact'

export default async function handler(req, res) {
  const { method  } = req

  dbConnect()

  if(method === "POST"){
    try {
      const user = await contact.create(req.body)
      res.status(200).json(user)
    } catch (error) {
      res.status(404).json(error)
    }
  }
  if(method === "GET"){
    try {
      const user = await contact.find()
      res.status(200).json(user)
    } catch (error) {
      console.log(error)
    }
  }
}