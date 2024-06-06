import express from 'express';
import { usersignin,usersignup } from '../controllers/user.controller.js';
import { saved,savedfetch} from '../controllers/genews.controller.js';

const router=express.Router();

router.post("/user-signin",usersignin);
router.post("/user-signup",usersignup);
router.post("/save-news",saved)
router.post("/fetch-saved",savedfetch);



export default router;