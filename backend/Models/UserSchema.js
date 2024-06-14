const mongoose=require('mongoose')

const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        min: [6, 'must be atlest 6']
    },
    secondname:{
        type:String,
        required:true,
        min: [6, 'must be atlest 6']
    },

    email:{
        type:String,
        required:true,
        unique:true,
       
    },
    password:{
        type:String,
        required:true,
    },
    mobile: {
        type: String,
        required: [true, 'Mobile number is required'],
        min: [10, 'must be atlest 10']
 
      },

    
})

const users=mongoose.model("users",userSchema)
module.exports =users