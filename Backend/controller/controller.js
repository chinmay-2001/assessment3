const todo = require('../model/model')

createtodo=(req,res)=>{
    todo.create({
        Name:req.body.todo
    })
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

getodo=(req,res)=>{
    todo.find()
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        console.log(err)
    })
}

deletetodo=(req,res)=>{
    todo.findByIdAndRemove(req.params.todoId)
    .then(data=>{
        res.send(data)
    })
    .catch(e=>{
        console.log(e)
    })
}

updatetodo=(req,res)=>{
    todo.findByIdAndUpdate(req.params.todoId,{
       $set:{ Name:req.body.Name}
    })
    .then(data=>{
        res.send(data)
    })
    .catch(e=>{
        console.log(e)
    })
}

module.exports={createtodo,getodo,deletetodo,updatetodo}