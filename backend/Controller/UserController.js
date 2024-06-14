const users=require('../Models/UserSchema')
const jwt=require('jsonwebtoken')

exports.register=async(req,res)=>{
    console.log('inside register');
    const{firstname,secondname,email,password,mobile}=req.body
    try{
      const existingUser=await users.findOne({email})
    if(existingUser){
      res.status(406).json("user already exist")
    }else{
      const newUser= new users({
        firstname,secondname,email,password,mobile
      })
      await newUser.save()
      res.status(200).json(newUser)
    }
    }
    catch(err){
      res.status(401).json(`regsster api failed f${err}`)
    }
   
  }


  exports.login=async(req,res)=>{
    console.log('inside login function');
    const{email,password}=req.body
    try{
      const existingUser=await users.findOne({email,password}).select('-password')
    if(existingUser){
      const token=jwt.sign({userId:existingUser._id},"ndnv52dtbv")
      res.status(200).json({
        existingUser,token
      })
    }else{
      
      res.status(404).json('incorrect email/password')
    }
    }
    catch(err){
      res.status(401).json(`regsster api failejd f${err}`)
    }
   
  }


  exports.allusers=async (req,res)=>{
    console.log("inside all users");
    const userId =req.payload
 try{

     const allposts=await users.find().select('-password');
     res.status(200).json(allposts)
 }catch(err){
     res.status(401).json(err)
 }
 }
 

 exports.seperateusers=async(req,res)=>{
    console.log("inside view user");
    const userId = req.payload; 
    try {
        const seperateuser = await users.findById({_id:userId}).select('-password');;
        console.log(seperateuser);
        res.status(200).json([seperateuser] );
    } catch (err) {
        res.status(500).json({ message: "Error fetching solutions by user ID", error: err });
        console.log(err);
        res.status(500).json("aauth error" );
    }
  }