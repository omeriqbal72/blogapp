const express = require('express')
const {
    getUsers,
    signupUsers,
    loginUsers } = require('../controllers/userFunctions')

const router = express.Router()

router.get('/get_users', getUsers);

router.post("/signup", signupUsers);

router.post("/login", loginUsers);

module.exports = router;
