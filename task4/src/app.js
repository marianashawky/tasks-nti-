const express = require('express')
require('./db/mongoos')
const userRoutes = require ('./routes/user')
const bookRoutes = require ('./routes/book')

const app = express()
const port =process.env.PORT ||3000


 app.use (express.json())
app.use(userRoutes)
app.use(bookRoutes)
 app.listen (port)



 