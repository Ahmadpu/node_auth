const User = require('../models/user')
const bcrypt = require('bcrypt');

const userRegistered = async(userDets,role,res) =>
{
    //Validate the username
    try{
        let userNameNotTaken = await validateUserName(userDets.username) ;
        console.log();
        if(!userNameNotTaken){
            res.status('400').json({
                message: "User already taken"
                ,success:false
            });
        }
        //Validate the email
        let emailNotRegistered = await validateEmail(userDets.email);
        if(!emailNotRegistered){
            res.status('400').json({
                message: "User already taken"
                ,success:false
            });
        }
        //Get the hashed password
        const password = await bcrypt.hash(userDets.password,12);
        // Create new User    
        const newUser = new User({
            ... userDets,
            password ,
            role
        });
        await newUser.save();
        console.log(newUser);  
        return res.status(200).json({
            message:"User has been registered successfully,Please Login!",
            success:true
        });
    }catch(err){
        //Implement the blogger
        return res.status(500).json({
            message:"Unable to register your account!"
            ,success:false
        });
    }
}
const validateUserName = async username =>{
   let user= await User.findOne({username})
   return user ? false:true;
}
const validateEmail = async email =>{
let user= await User.findOne({email})
    return user ? false:true;
 }
 module.exports={
     userRegistered
 }