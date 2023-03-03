var {mongoose}=require('mongoose')
const model=mongoose.Schema({
    Name:String
})

module.exports=mongoose.model('todo',model)
