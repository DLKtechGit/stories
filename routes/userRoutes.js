const express = require("express");
const user = require('../controllers/user')


const router = express.Router()

router.post('/registerUser',user.registerUser)
router.post('/loginUser',user.loginUser)

module.exports= router