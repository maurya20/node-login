const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const userSchema = require('../models/User')
const User = mongoose.model("User")
const jwt = require('jsonwebtoken')



router.post('/signup', async (req, res)=>{
    const {email, password} = req.body
    try {
    const user = new User({email, password})
    await user.save()
    const token = jwt.sign({ userId:user._id }, 'my_secret_key')
    res.send({ token })
    return res.status(200).send("A new user registered successfully")
}catch (err) {
    return res.status(422).send(err.message)
} 
})

module.exports = router