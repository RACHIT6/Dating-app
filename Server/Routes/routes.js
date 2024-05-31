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
        res.send('User Added').redirect('/home');
    }
})

UserRouter.post ('/login', async(req, res)=>{
    const  {email, password} = req.body;

    const check = await UserModel.findOne({email: email});
    if (check) {
        if (check.password === password) {
            res.send("User Authenticate");
        }

        else {
            res.send("Password doesn't match")
        }
    }
    
    else {
        res.send("email cannot found");
    }
})

module.exports = UserRouter;