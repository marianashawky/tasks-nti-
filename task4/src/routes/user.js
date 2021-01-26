const express= require( "express")
const userModel = require("../models/user")
const router= new express.Router

router.post('/register', async(req,res)=>{
    const user =new  userModel (req.body)
    try {

         await  user.save()
        res.send({
       status:1,
       message:"data inserted successfully",
       data: user
     })
   }
  catch(err) {
      res.send({
      status:0,
      message:"data inserted error",
      data:err
   }) 
}
})



router.get('/users',async (req,res)=>{

try{
   alldata=  await userModel.find({})

    {res.send({
        status:1,
        message:"all data retrived",
        data:alldata
     
         })
        }}

  catch(err){
        
        res.send(  {  status:0,
            message:" data retieved error",
            data:err} 
            
         
         )
    
    }
    
})

router.get('/usersasync/:userid',async (req,res)=>{
 try{ userdata= await userModel.findById(req.params.userid)
        if (!userdata) return res.send("notfound")
        res.send(  {status:2,
            message:"not found",
            data: userdata})
        
        

}

catch(err){
        
    res.send(  {  status:0,
        message:" data retieved error",
        data:err} 
        
     
     )

}

})

router.patch('/usersasync/:userid',async (req,res)=>{
avlUpdates =["name","age"]
const keys =Object.keys(req.body)
const flag = keys.every((k)>=avlUpdates.includes(k))
if(!flag) return res.send (

    {
        status:1,
        massage:"updated",
        data:user
    

    }
)

    try {
const user = await userModel.findByIdAndUpdate(
    req.params.userid,
    req.body,
    {runvalidators:true,}
)
if (!user) return res.send({

status:2,
massage:"user not found",
data:""

})

res.send({

    status:1,
    massage:"updated",
    data:user
    
    })

    }

 catch(err) {
    res.send(  {  status:0,
        message:" error in edit",
        data:err} 
        
     
     )


 }

})


router.delete('/usersasync/:userid',async (req,res)=>{
    
        try {
    const user = await userModel.findByIdAndDelete(req.params.userid)
    if (!user) return res.send({
    
    status:2,
    massage:"user not found",
    data:""
    
    })
    
    res.send({
    
        status:1,
        massage:"deleted",
        
        })
    
        }
    
     catch(err) {
        res.send(  {  status:0,
            message:" error in deleted",
           } 
            
         
         )
    
    
     }
    
    })
    

module.exports= router