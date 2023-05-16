 const mongoose = require("mongoose")

 const personSchema = new mongoose.Schema({
    person_name:{
        type:String,
        required:[true, 'username is compulsory.'],  
    },
    email:{
        type:String,
        required:[true, 'emailis compulsory'],
    },
    password:{
        type:String,
        required:[true, 'password compulsory'],
    },
    // Array of Blogs for a single user
    blogs:[{
        type:mongoose.Types.ObjectId,
        ref:'Blogs',
    }]
 } , 
 
 {timestamps:true}
 );

 const personModel = mongoose.model( 'Users' , personSchema );

 module.exports = personModel;

