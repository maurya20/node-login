const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const userSchema = require('../models/User')
const User = mongoose.model("User")



router.post('/signup', (req, res)=>{
    console.log(req.body)
    res.send("You send a post request")
})

module.exports = router