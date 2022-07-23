
const TodoModel = require('../model/Todo')
const postObj = {
    post:async(req,res)=>{        
       try{
            const {task,hour,date} = req.body;
            
         const data = await TodoModel.create({
                task,
                hour,
                date
            })
            res.status(200).json({
                data
            })
       }catch(err){
        console.log(err,"error")
        res.status(500).json({
            error:err
        })
       }
    }
}


module.exports = postObj