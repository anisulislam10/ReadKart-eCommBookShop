import express from 'express';
import { addToFavourite,removeFromFavouriteList,getFavouriteBooks } from '../controllers/addToFavourite.controller.js';
import authenticateToken from "../middleware/userAuth.middleware.js";


const router=express.Router()
router.route("/addtofavourite").put(authenticateToken,addToFavourite)
router.route("/removefromfavourite").delete(authenticateToken,removeFromFavouriteList)
router.route("/getallfavourite").get(authenticateToken,getFavouriteBooks)



export default router;