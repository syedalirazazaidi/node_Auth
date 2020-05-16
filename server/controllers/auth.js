const User=require('../models/user')
const jwt=require('jsonwebtoken')
exports.register=(req,res)=>{
// const {name,email,password}=req.body
// console.log("",{name,email,password})
console.log("reqeeeeee",req.body)
const {name,email,password}=req.body
User.findOne({email}).exec((err,user)=>{
  if(user){
    return res.status(400).json({
        error:"Email is taken"
    })
  }
  const token=jwt.sign({name,email,password},{},{
      expireIn:'10m'
  })
})

}