const express=require('express')
const cors=require('cors')
require('dotenv').config()


require('./DB/Connection')

const testserver=express()
const router=require('./Router/router')
testserver.use(cors())
testserver.use(express.json())
testserver.use(router)




const PORT=4000|| process.env.PORT


testserver.listen(PORT,()=>{
    console.log(`test server created at port ${PORT}`);
})

testserver.get('/',(req,res)=>{
    res.send('get request updated');
 })