const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User  = mongoose.model('User')
// require('../models/user.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const {jwt_key} = require('../secret.js')
const middleware = require('../middleware/loginCheck')

router.post('/signup',(req,res)=>{
     console.log(req.body)
    const {name, email, password, phoneNumber} = req.body
    if(!name || !email || !password || !phoneNumber){
        return res.status(400).json({error:"please fill all the fields"})
    }
    if(email[0]==Number){
        return  res.status(400).json({error:"enter a  valid email"})
    }
    if(email.indexOf('@')==(-1) || email.indexOf('.')==(-1) || email.indexOf('@') > email.indexOf('.') || email.lastIndexOf('.')!= email.indexOf('.')){
        return   res.status(400).json({error:'enter a valid email'})
    }
    if(password.lenght<9){
        return  res.status(400).json({error:'password must be 8 character'})
    }
    if(password.charCodeAt(password[0])<(64) || password.charCodeAt(password[0])>(98)){
        return    res.status(400).json({error: "password first letter must be capital"})
    }
    let i=0,f=0
    while(i<password.length){
        if(password[i]==" "){
            f++
        }
        i++
    }
    if(f>0){
        res.status(400).json({error:"password should not contain space"})
    }

    User.findOne({email:email})
    .then(
        (userUpdate)=>{
                if(userUpdate != null){
                    return res.status(400).json({error:"User already exist"})
                }
                bcrypt.hash(password, 13)
                    .then(
                            (hashedPassword)=>{
                            const user = new User({
                                name,
                                email,
                                password : hashedPassword,
                                phoneNumber
                                })  
                            user.save()
                            .then(
                                (user)=>{ return res.status(200).json({message:'your account has been created'})}
                                )
                            .catch(
                        (err)=>(console.log(err))
                                )
                            }
                )
                .catch(
                    err=>(console.log(err))
                )
        }
    ) 
    .catch(
        (err)=>(console.log(err))
    )


})

router.post('/login',(req,res)=>{
    // console.log(req.body)
    const {email, password} = req.body
    if(!email|| !password){
        return res.status(400).json({error:"please enter a valid email or password  "})
    }
    User.findOne({email:email})
        .then(
            (account)=>{
                if(account==null){
                        return res.status(400).json({error:"account not found, please signup"})
                }
                bcrypt.compare(password, account.password)
                    .then(
                    (compare)=>{
                        if(compare!= true){
                            return res.status(400).json({error:"invalid password"})
                        }
                        const token = jwt.sign({_id: account._id}, jwt_key)
                        return res.status(200).json({message:"successfully logged in", token:token})
                    }
                    )
                    .catch(
                    (err)=>(console.log(err))
                    )
            }
        )
        .catch(
            err=>(console.log(err))
        )
})





module.exports = router  