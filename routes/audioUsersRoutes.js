const express = require("express");
const auisouser = require('../controllers/audioUserControler')


const router = express.Router()

router.post('/registerUser',auisouser.registerUser)
router.post('/loginUser',auisouser.loginUser)

module.exports= router