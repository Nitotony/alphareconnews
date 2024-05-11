import express from "express";
import { gennews } from "../controllers/genews.controller.js";
import { specificnews } from "../controllers/genews.controller.js";

const router = express.Router();

router.post("/gennews",gennews);
router.post("/specificnews",specificnews);


export default router;