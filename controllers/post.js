
const TodoModel = require('../model/Todo')
const postObj = {
    post:(req,res)=>{
        
       try{
        const {task,hour,date} = req.body;
        TodoModel.create({
            task,
            hour,
            date
        })
        res.status(200).json({
            message:"hello"
        })
       }catch(err){
        
       }
    }
}


module.exports = postObj