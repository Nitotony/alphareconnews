import User from "../models/usermodel.js";
import bcryptjs from "bcryptjs";

export const usersignup=async(req,res,next)=>{
    const {email,password}=req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser= new User({email,password:hashedPassword});

    try{
        await newUser.save();
        const dataUser= await User.findOne({email:email});
        const {password:hashedPassword,...restofitem}=dataUser._doc;
        res.status(201).json(restofitem);
    } catch(error){
        next(error);
        
    }

    };

//     hashing the password and storing the new password and the username in mongodb
//     then we need to send the username and other preferences to the frontend using res




export const usersignin=async(req,res,next)=>{
    const {email,password}=req.body;

    const validUser= await User.findOne({email:email});
    const validPassword= bcryptjs.compareSync(password,validUser.password);


    if(!validPassword) return next(errorHandler(402,"invalid credentials"));
    const {password:hashedPassword, ...restofitems}=validUser._doc;

    res.status(200).json(restofitems);




}