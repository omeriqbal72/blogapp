const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    description: {
        type: String,
        require: [true, "Please add comment"]
    },

    blog_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Blogs',
        require: [true, 'Blog Id is required']
    },

    user_id: {
        type: mongoose.Types.ObjectId,
        ref: 'Users',
        require: [true, 'User Id is required']
    }

}, { timestamps: true }
)

const commentModel = new mongoose.model('Comments', commentSchema);

module.exports = commentModel;