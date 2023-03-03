var express=require('express')
var routes=require('./router/routes')
var bodyparse=require('body-parser')
app=express()
var mongoose=require('mongoose')

const cors = require("cors");
app.use(cors())
var dburl=require('./config/config')

app.use(bodyparse.urlencoded({extended:true}))
app.use(bodyparse.json())
app.use('/api',routes)

mongoose.Promise=global.Promise

mongoose.connect(dburl.url,{useNewUrlParser:true})
.then(()=>{
    console.log("successfully conncected to the mongodb Atlas")
})
.catch((e)=>{
    console.log("Error:"+e)
})

app.listen(3000,()=>{
    console.log("Successfully conncected to the server")
})

