const express = require("express");
const router = express.Router();
const {User, Posts} = require('../models/all')

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");


router.post("/register", async (req, res) => {

    try {

    let {name,email,password,role} = req.body
    console.log('reqBODY----->>>>' , req.body)
    // const {img} = req.files
    // let fileName = uuid.v4() + ".jpg"
    // img.mv(path.resolve(__dirname, '..', 'static', fileName))
    const user = await User.create({name,email,password,role});

    return res.json({user:user})
     }
     catch (e) {
        res.status(400).json({message:e})
    }

})



module.exports = router;