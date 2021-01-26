const mongoose = require('mongoose')
const validator = require('validator')

require("../db/mongoos")
const User =mongoose.model("User",{
name:{
    type:String,
    required:true,
    trim:true,
    minLength:2,
    maxLength:50,
},
age:{
type:Number,
default:15,
validate(value){
    if (value<15) {
        throw new Error("invalide value ")
    }
},


},
email:{    type:String,
    required:true,
    trim:true,
    unique:true,
    validate(value){
 if (!validator.isEmail(value)) {
    throw new Error("invalide email ")
   
 }

    }
},
password:{
    type:String,
    required:true,
    trim:true,
    minLength:6,
    maxLength:50,


}
})


module.exports =User