var express = require('express');
var router = express.Router();
const { SignUpUser,LoginUser } = require('../controllers/userController');


router.get('/api',(req,res)=>{
    res.status(200).json("hey hey welcome")
})
router.get('/api/user',(req,res)=>{
    res.status(200).json("hello")
})
router.post('/api/signUp',SignUpUser);
router.post('/api/userLogin',LoginUser)

module.exports = router;
