const mongoose = require('mongoose')
const validator = require('validator')

require("../db/mongoos")
const Book =mongoose.model("Book",{

author:{
        type:String,
        required:true,
        trim:true,
        minLength:2,
        maxLength:50,
    },
    


name:{
    type:String,
    required:true,
    trim:true,
    minLength:2,
    maxLength:50,
},

date:{
    type:Date,
   


}
})


module.exports =Book