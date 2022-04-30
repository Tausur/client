import mongoose from "mongoose";

const SignSchema = new mongoose.Schema({
  name:{
    required: true,
    type: String
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
 password:{
   required: true,
   type: String
 }
},
{timestamps: true})

export default mongoose.models.Sign || mongoose.model("Sign", SignSchema)