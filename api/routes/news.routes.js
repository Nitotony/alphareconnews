import express from "express";
import { gennews,business,technology } from "../controllers/genews.controller.js";
import { specificnews } from "../controllers/genews.controller.js";

const router = express.Router();

router.post("/gennews",gennews);
router.post("/specificnews",specificnews);
router.post("/business",business)
router.post("/technology",technology);


export default router;