import express from 'express';
import { usersignin,usersignup } from '../controllers/user.controller.js';


const router=express.Router();

router.post("/user-signin",usersignin);
router.post("/user-signup",usersignup);



export default router;