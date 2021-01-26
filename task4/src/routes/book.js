const express= require( "express")
const bookModel = require("../models/book")
const router= new express.Router

router.post('/registerbook', async(req,res)=>{
    const book =new  bookModel (req.body)
    try {

         await  book.save()
        res.send({
       status:1,
       message:"data inserted successfully",
       data: book
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



router.get('/book',async (req,res)=>{

try{
   alldata=  await bookModel.find({})

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

router.get('/booksasync/:bookid',async (req,res)=>{
 try{ bookdata= await bookModel.findById(req.params.bookid)
        if (!bookdata) return res.send("notfound")
        res.send(  {status:2,
            message:"not found",
            data: bookdata})
        
        

}

catch(err){
        
    res.send(  {  status:0,
        message:" data retieved error",
        data:err} 
        
     
     )

}

})

router.patch('/booksasync/:bookid',async (req,res)=>{
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


router.delete('/booksasync/:bookid',async (req,res)=>{
    
        try {
    const book = await bookModel.findByIdAndDelete(req.params.bookid)
    if (!book) return res.send({
    
    status:2,
    massage:"book not found",
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