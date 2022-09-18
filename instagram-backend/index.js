const express = require('express')
const index = express()
const mongoose = require('mongoose')
const port = 3333
const {MONGOURL} = require ('./secret.js')
require ('./models/user.js') 
const router = require('./Routes/auth')
const middleware= require ('./middleware/loginCheck')
require('./models/post')
 

 
mongoose.connect(MONGOURL)
mongoose.connection.on("connected",
()=>(console.log("connnection established"))
)
mongoose.connection.on("error",
(err)=>(console.log(err))
)

index.use(express.json()) 
// index.use(require('./Routes/auth')) 
index.use(router) 
index.use(require('./Routes/post'))
// index.get("/task",middleware,(req,res)=>{
//     console.log(req.headers)
//     res.send('let talk')
// } )



index.listen(port, ()=>(console.log('server is running')))
