const mongoose = require('mongoose')

const blogsSchema = new mongoose.Schema({
    title:{
        type:String,
        require:[true,'Title is Required']
    },
    description:{
        type:String,
        require:[true,'Description is Required']
    },
    image:{
        type:String,
        require:[true,'Image is Required']
    },
    comment:[{
        type:mongoose.Types.ObjectId,
        ref: 'Comments',
        default:[]

    }],
    user:{
        type:mongoose.Types.ObjectId,
        ref:'Users',
        require:[true,"User id is Required"],
    }


} , 
{timestamps:true}
) 

const blogModel = new mongoose.model('Blogs' , blogsSchema )
module.exports = blogModel;