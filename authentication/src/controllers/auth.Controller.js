require("dotenv").config();
const jwt = require('jsonwebtoken')
const User = require("../models/user.model");

const newtoken = (user) =>{
    return jwt.sign({ user: user },process.env.JWT_SECRET_KEY,{expiresIn:60*5} );
}
const register = async(req, res) =>{

    try{
        let user = await User.findOne({email:req.body.email}).lean().exec();
        if(user){
            return res.status(400).send({message:"user all ready exists"})
        }
        user = await User.create(req.body);

        const token = newtoken(user);
        res.status(201).send({user,token})

    }catch(err){
        return res.status(500).send(err.message)
    }
    
}


const login = async(req, res) =>{
    try{
        let user = await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).send({message:"user not exists"})
        }
        const match  = user.checkPassword(req.body.password);
        if(!match){
            return res.status(400).send({message:"wrong password"})
        }
        const token = newtoken(user);
        res.status(201).send({user,token})

    }catch(err){
        return res.status(500).send(err.message)
    } 
}

module.exports = {register, login}