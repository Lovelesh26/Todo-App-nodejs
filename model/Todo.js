const mongoose =require("mongoose")

const TodoSchema = mongoose.Schema({
    task:String,
    hour:Number,
    date:String,

})

module.exports= Todo =mongoose.model('Todo',TodoSchema)