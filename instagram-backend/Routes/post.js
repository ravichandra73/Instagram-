const express = require('express')
const { default: mongoose } = require('mongoose')
const router  = express.Router()
const Post = mongoose.model('Post')
const loginCheck = require('../middleware/loginCheck') 

router.post('/posts',loginCheck, (req,res)=>{
        // console.log(req.body)
        // console.log(req.user)
        const{title, body} = req.body
        if(!title || !body){
                return res.status(400).json({error:"don't leave any field empty"})
        }
        const post = new Post(
                {
                        title:title,
                        body:body,
                        postedBy: req.user
                }
        )
        post.save()
        .then(
                (savedPost)=>(
                   res.status(200).json({message:'post uploaded',post: savedPost})
                )
        )
        .catch(
                (err)=>(console.log(err))
        )

})


router.post('myposts',loginCheck,(req,res)=>{
        
        Post.find({postedBy: req.user._id})
        .populate('postedBy','_id name phoneNumber')
        .then(
                myposts=>(res.status(200).json({myposts}))
        )
        .catch(err=>(console.log(err)))
})

router.get('/allposts',(req,res)=>{
        Post.find()
        .populate('postedBy','_id name phoneNumber')
        .then(
                allposts=>{res.status(200).json({allposts})}
        )
        .catch(
                err=>(console.log(err))
        )
})


module.exports = router