const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    description:{
        type:String,
        require:[true , "Please add comment"]
    }


} , {timestamps:true}
)

const commentModel = new mongoose.model('Comments' , commentSchema);

module.exports = commentModel;