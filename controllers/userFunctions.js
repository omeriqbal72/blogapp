const usermodel = require('../Dbmodels/userModels')
const blogModel = require('../Dbmodels/blogModel')

exports.signupUsers = async (req, res) => {
    try {
        const { person_name, email, password } = req.body
        if (!person_name || !email || !password) {
            return res.status(400).send({
                message: "Please Enter complete fileds",
                success: false
            })
        }


        const userExists = await usermodel.findOne({ email })
        if (userExists) {
            return res.status(401).send({
                success: false,
                message: 'User Exits',
                userExists
            })
        }

        const user = new usermodel({ person_name, email, password })
        await user.save()
        return res.status(201).send({
            message: "SignUp Successful",
            success: true,
            user
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).send({
            message: "Error In SignUp callback Function",
            success: false,
            err
        })
    }

};

exports.getUsers = async (req, res) => {
    try {
        const users = await usermodel.find({});
        return res.status(200).send({
            message: "All users Rrgistered",
            success: true,
            users,
            userCount: users.length
        })
    }
    catch (err) {
        console.log(err)
        return res.status(500).send({
            message: "Error In SignUp callback Function",
            success: false,
            err
        })
    }
};

exports.loginUsers = async (req, res) => {

    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send({
                message: "Please Enter complete fileds",
                success: false
            })
        }
        const userLogin = await usermodel.findOne({ email })
        if (userLogin) {
            if (userLogin.password === password) {
                return res.status(401).send({
                    success: true,
                    message: 'login Successful'
                })
            }
            else {
                return res.status(502).send({
                    message: "Invalid email or Password",
                    success: false
                })
            }

        }
        else {
            return res.status(500).send({
                message: "userName not exists",
                success: false
            })
        }
    }
    catch (err) {
        console.log(err)
        return res.status(501).send({
            message: "Login error callback",
            success: false,
            err
        })
    }
};

