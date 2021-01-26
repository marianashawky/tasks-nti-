const path = require ("path")
const hbs = require ("hbs")
const express = require ("express")
const apidata = require('./api')
const app = express()
const publicdirectory =path.join(__dirname,"../public")
const viewsdirectory =path.join (__dirname,"../frontend/views")
const partialsdirectory =path.join (__dirname,"../frontend/partials")
const PORT =3000

app.set("view engine","hbs")
app.set("views",viewsdirectory)
hbs.registerPartials(partialsdirectory)
app.use(express.static(publicdirectory))



app.get('', (req, res)=>{
    apidata( (err, data)=>{
        if(err){
            getAllData = []
            err = true
        }
        else{
            getAllData=data.articles
            err = false
        }
        console.log(getAllData)
        res.render('index', {getAllData,err})
    })
} )




app.listen(PORT,()=>
{console.log ("server on localhost:3000")


});


