import express from "express";
import { registerUser, signInUser,getUserInformation } from "../controllers/user.controller.js";
import authenticateToken from '../middleware/userAuth.middleware.js';



const router = express.Router();

 router.route("/signup").post(registerUser);
 router.route("/signin").post(signInUser)
 router.route("/getuser").get(authenticateToken,getUserInformation)

 export default router;
 
