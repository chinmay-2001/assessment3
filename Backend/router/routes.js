var express=require('express')
var routes=express.Router()
var {createtodo,getodo,deletetodo,updatetodo} = require('../controller/controller')

routes.post('/createTodo',createtodo)

routes.get('/getodo',getodo)

routes.delete('/deletetodo/:todoId',deletetodo)

routes.put('/updatetodo/:todoId',updatetodo)

module.exports=routes