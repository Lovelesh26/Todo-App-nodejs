const TodoModel = require('../model/Todo')

const getObj = {
    get:async(req,res)=>{
        try{
            const id = req.params.loveid;
            const data = await TodoModel.findById(id)
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


module.exports = getObj