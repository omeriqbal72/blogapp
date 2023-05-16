const mongoose = require('mongoose');
const blogModel = require('../Dbmodels/blogModel');
const userModel = require('../Dbmodels/userModels');
const commentModel = require('../Dbmodels/commentModel')

exports.newComment = async (req, res) => {
    try {
        const { blog_id } = req.params;
        console.log(blog_id)
        const { description, user_id } = req.body;

        if (!description || !user_id) {
            return res.status(400).send({
                message: "Please Enter complete fileds",
                success: false
            })
        }
        const userExists = await userModel.findById(user_id)
        console.log(userExists)
        if (!userExists) {
            return res.status(404).send({
                message: 'User not exist',
                success: false
            })
        }

        const blogExists = await blogModel.findById(blog_id)
        console.log(blogExists)
        if (!blogExists) {
            return res.status(404).send({
                message: 'Blog Not Found not exist',
                success: false
            })
        }

        const newcomModel = new commentModel({ description, blog_id, user_id })
        console.log(newcomModel)

        blogExists.comment.push(newcomModel);
        console.log(blogExists.comment)

        await blogExists.save();
        await newcomModel.save();

        console.log('Hello Everything saved')

        return res.status(201).send({
            message: "Comment Added Successful",
            success: true,
            newcomModel
        })

    }
    catch (err) {
        return res.status(500).send({
            message: "newComment call back error",
            sucess: false
        })
    }
}