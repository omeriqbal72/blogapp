const { newComment
} = require('../controllers/commentFunctions')
const express = require('express') 

const commentrouter = express.Router()

commentrouter.post('/comment/:blog_id' , newComment);

module.exports = commentrouter;