import express  from "express";

import { getCostumer,add,getSearch } from "../controllers/costumer.controller.js";


const router=express.Router()

router.get("/",getCostumer)
router.get("/search/:key",getSearch)

router.post("/add",add)
// router.get("/",getCostumer)

export default router