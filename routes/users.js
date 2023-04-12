var express = require('express');
var router = express.Router();
const { SignUpUser,LoginUser } = require('../controllers/userController');


router.get('/',(req,res)=>{
    res.status(200).json("hey hey welcome")
})
router.get('/user',(req,res)=>{
    res.status(200).json("hello")
})
router.post('/signUp',SignUpUser);
router.post('/userLogin',LoginUser)

module.exports = router;
