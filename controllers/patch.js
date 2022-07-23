const TodoModel = require('../model/Todo')
const mongoose = require('mongoose')
const patchObj = {
    patch:async(req,res)=>{
        try{
            const {task,hour,date} = req.body.data;
            let id = req.params.loveid;
            id=  mongoose.Types.ObjectId(id);

         const data = await TodoModel.findByIdAndUpdate(id,{
                task,
                hour,
                date
            })
            console.log(data,"testing")
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


module.exports = patchObj