const express = require('express')
const jwt = require('jsonwebtoken')
const {jwt_key} = require('../secret.js')
const mongoose = require('mongoose')
const User  = mongoose.model('User')

module.exports = (req,res, next)=>{
    // console.log(req.headers)
    const {authorization} = req.headers
    if(authorization == null){
        return res.status(400).json({error:'login required'})
    }
    const token = authorization.replace("Bearer ","")
    // console.log(token)
    jwt.verify(token, jwt_key, (error, payload)=>{
        if(error){
            return res.status(400).json({error:'you must be logged in'})
        }
            const _id = payload._id
             User.findById(_id)
             .then(
                userData=>{
                    req.user = userData
                    next()
                }
             )
        })
    }