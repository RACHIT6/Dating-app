const express = require("express");
const UserModel = require("../Models/UserModel")
const UserRouter = express.Router();



UserRouter.post ('/register', async(req, res)=>{
    const data = {
        email: req.body.email,
        password: req.body.password
    }

    const checkExistingUser = await UserModel.findOne({email: data.email});
    if (checkExistingUser) {
        res.send("Email already exits")
    }
    else {
        
        await UserModel.insertMany(data);
        res.redirect('/home');
    }
})

module.exports = UserRouter;