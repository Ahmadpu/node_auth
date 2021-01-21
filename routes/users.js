const router = require('express').Router()
const {userRegistered} = require('../utils/Auth');

//registration user route
router.post('/register-user',async(req,res)=>{
    await userRegistered(req.body,"user",res);
});
//registration admin route
router.post('/register-admin',async(req,res)=>{
    await userRegistered(req.body,"admin",res);
});
//registration superAdmin route
router.post('/register-superadmin',async(req,res)=>{
    await userRegistered(req.body,"superadmin",res);
});
//login user route
router.post('/login-user',async()=>{});
//login admin route
router.post('/login-admin',async()=>{});
//login superAdmin route
router.post('/login-superadmin',async()=>{});
//profileuser route
router.get( '/profile-user',async()=>{});
//protected user route
router.post('/protected-user',async()=>{});
//protected admin route
router.post('/protected-admin',async()=>{});
//protected superAdmin route
router.post('/protected-superadmin',async()=>{});

module.exports = router;