const express=require('express');

const router=express.Router()

const userController=require('../Controller/UserController')
const jwtMiddleware = require('../Middleware/jwtmiddleware');


// api to register user

router.post('/user/register',userController.register)


//  api for login user

router.post('/user/login',userController.login)

// api for list all user

router.get('/user/all',jwtMiddleware,userController.allusers);



// api to view single user

router.get('/user/view',jwtMiddleware,userController.seperateusers);







module.exports = router;