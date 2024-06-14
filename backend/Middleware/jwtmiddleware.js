const jwt=require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
  console.log("inside jwt middle zzzzware");
  const token= req.headers['authorization'].split(" ")[1]
  console.log(token);
  if(token==null){
    res.status(401).json("authorization failed")
  }
 try{
    const jwtResponse=jwt.verify(token,"ndnv52dtbv")
    console.log(jwtResponse);
    req.payload=jwtResponse.userId
    
    next()
 }
 catch(err){
    res.status(401).json("authorization failed")
    console.log(`dddd${err}`);
    
 }
}


module.exports=jwtMiddleware