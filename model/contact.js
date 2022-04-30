import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
  name:{
    required: true,
    type: String
  },
  email:{
    type:String,
    required:true,
  },
 message:{
   required: true,
   type: String
 }
},
{timestamps: true})

export default mongoose.models.Contact || mongoose.model("Contact", ContactSchema)