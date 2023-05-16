const express = require('express')
const { newBlog,
    updateBlog,
    getOneBlog,
    getAllBlogs,
    deleteBlog
} = require('../controllers/blogFunctions')

const blogrouter = express.Router()

blogrouter.post('/addblog', newBlog)

blogrouter.put('/updateblog/:id', updateBlog)

blogrouter.get('/getblog/:id', getOneBlog)

blogrouter.get('/getblogs', getAllBlogs)

blogrouter.delete('/deleteblog/:id', deleteBlog)

module.exports = blogrouter