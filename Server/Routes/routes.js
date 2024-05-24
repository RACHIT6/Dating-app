const express = require("express");

const UserRouter = express.Router();

UserRouter.post ('/register', async(req, res)=>{
    const data = {
        email: req.body.email,
        password: req.body.password
    }

    const checkExistingUser = await User.findOne({email: data.email});
    if (checkExistingUser) {
        res.send("Email already exits")
    }
    else {
        
        await User.insertMany(data);
        res.redirect('/home');
    }
})

module.exports = UserRouter;