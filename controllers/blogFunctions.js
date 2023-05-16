const mongoose = require('mongoose');
const blogsmodels = require('../Dbmodels/blogModel');
const userModel = require('../Dbmodels/userModels');

exports.newBlog = async (req, res) => {
    try {
        const { title, description, image, user } = req.body
        if (!title || !description || !image || !user) {
            return res.status(400).send({
                message: "Please Enter complete fileds",
                success: false
            })
        }
        const userExists = await userModel.findById(user)
        if (!userExists) {
            return res.status(404).send({
                message: 'User not exist',
                success: false
            })
        }

        const newBlog = new blogsmodels({ title, description, image, user });

        // Store info in User Blogs
        // const session = await mongoose.startSession();
        // session.startTransaction();
        // await newBlog.save({ session });
        // userExists.blogs.push(newBlog);
        // await userExists.save({ session });
        // await session.commitTransaction();

        userExists.blogs.push(newBlog);
        await userExists.save();
        await newBlog.save();
        
        return res.status(201).send({
            message: "Blog Added Successful",
            success: true,
            newBlog
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).send({
            message: "Error In Adding New Blog callback Function",
            success: false,
            err
        })
    }

}

exports.updateBlog = async (req, res) => {
    try {

        const { id } = req.params
        const { title, description, image } = req.body
        const updateBlog = await blogModel.findByIdAndUpdate(id, { ...req.body }, { new: true })
        return res.status(200).send({
            message: 'Blog Updated',
            success: true,
            updateBlog
        })


    }
    catch (err) {
        console.log(err)
        return res.status(400).send({
            message: 'Error in UpdateBlog call back',
            success: false
        })
    }
}

exports.getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await blogModel.find({});
        if (allBlogs.length === 0) {
            return res.status(200).send({
                message: "There are no blogs yet",
                success: false,
            });
        }
        else {
            return res.status(200).send({
                message: 'All Blogs In App',
                success: true,
                allBlogs
            });
        }

    }
    catch (err) {
        console.log(err)
        return res.status(500).send({
            message: "Error in getAllBlog callback Function",
            success: false,
            err
        })
    }
}

exports.deleteBlog = async (req, res) => {
    try {
        const { id } = req.params
        const delteblog = await blogModel.findOneAndDelete(id)
        return res.status(200).send({
            message: 'Blog Deleted.',
            success: true
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).send({
            message: "Error in Deleting callback Function",
            success: false,
            err
        })
    }
}

exports.getOneBlog = async (req, res) => {
    try {
        const { id } = req.params
        const oneBlog = await blogModel.findById(id)
        if (!oneBlog) {
            return res.status(404).send({
                message: 'Blog Not found',
                success: false

            })
        }
        return res.status(200).send({
            message: 'One Blog Fetched',
            success: true,
            oneBlog
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).send({
            message: "Error in getOneblog callback Function",
            success: false,
            err
        })
    }
}

