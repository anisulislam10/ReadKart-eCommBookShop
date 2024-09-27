import express from "express";
import { addToCart,removeFromCart,getFromCart } from "../controllers/addToCart.controller.js";
import authenticateToken from "../middleware/userAuth.middleware.js";

const router=express.Router();
router.route("/addtocart").put(authenticateToken,addToCart)
router.route("/removefromcart/:bookid").put(authenticateToken,removeFromCart);
router.route("/getfromcart").get(authenticateToken,getFromCart)

export default router;